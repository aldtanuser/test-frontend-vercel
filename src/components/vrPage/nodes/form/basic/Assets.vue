<script setup>
import Cookies from "js-cookie";
import Swal from "sweetalert2";
import { defineEmits, defineProps, onMounted, ref, watch, onBeforeUnmount } from "vue";

const baseUrl = import.meta.env.VITE_BACKEND_BASE_URL;

const props = defineProps({
  opened: Boolean,
  focusedNodeData: Object,
  formLabel: String,
  assetsType: String,
});

const emits = defineEmits(["formSubmitted"]);

var receivedFocusedNodeData = props.focusedNodeData;
var receivedFormLabel = props.formLabel;
var receivedAssetsType = props.assetsType;

console.log("receivedAssetsType", receivedAssetsType);

const selectedItem = ref(null);
const selectedItemDescription = ref(""); // Initialize with an empty string
const directoryContents = ref([]);
const defaultDirectoryContents = ref([]);
// receivedFocusedNodeData.type = receivedAssetsType;

watch(
  () => receivedFocusedNodeData.properties.src,
  (newSrc) => {
    selectedItemDescription.value = newSrc;
  }
);

const isModalOpen = ref(props.opened);

function closeModal() {
  isModalOpen.value = false;
}

const sidebarRef = ref(null);

function handleClickOutside(event) {
  if (sidebarRef.value && !sidebarRef.value.contains(event.target)) {
    closeModal();
  }
}

onMounted(() => {
  document.addEventListener('click', handleClickOutside);
});

onBeforeUnmount(() => {
  document.removeEventListener('click', handleClickOutside);
});

function saveModal() {
  receivedFocusedNodeData.properties.id = receivedFocusedNodeData.id;
  receivedFocusedNodeData.properties.src = selectedItemDescription.value;
  emits("formSubmitted");
  closeModal();
}

function openFilePicker(event) {
  event.preventDefault(); // Prevent the default behavior of the button
  const input = document.getElementById("sampleFile");
  input.click();
}

function uploadZipFile() {
  const userCookie = Cookies.get("userid");
  const input = document.getElementById("sampleFile");

  if (input.files.length === 0) {
    Swal.fire("Please select a ZIP file");
    return;
  }

  const formData = new FormData();
  formData.append("sampleFile", input.files[0]);
  formData.append("userid", userCookie);

  const xhr = new XMLHttpRequest();

  const progressAlert = Swal.fire({
    title: "Uploading...",
    text: "Progress: 0.00%",
    showCancelButton: false,
    showConfirmButton: false,
    didOpen: () => {
      Swal.showLoading();
    },
    onBeforeOpen: () => {
      Swal.disableLoading();
    },
  });

  xhr.upload.addEventListener("progress", function (event) {
    if (event.lengthComputable) {
      const percentage = (event.loaded / event.total) * 100;
      updateProgress(percentage);
    }
  });

  function updateProgress(percentage) {
    progressAlert.update({
      text: `Progress: ${percentage.toFixed(2)}%`,
    });
  }

  xhr.open("POST", `${baseUrl}/api/services/uploadzip`, true);

  xhr.onload = function () {
    if (xhr.status >= 200 && xhr.status < 300) {
      const message = xhr.responseText;
      Swal.fire("Upload Complete", message, "success");
      scanDirectory();
      fetch(`${baseUrl}/public/projects/users/${userCookie}/upload.json`)
        .then((response) => response.json())
        .then((data) => {
          jsonData.value = data;
          const uploadedFolderName = input.files[0].name;
          const folderNameWithoutExtensions = uploadedFolderName.endsWith(
            ".zip"
          )
            ? uploadedFolderName.replace(/\.[^.]+$/, "")
            : uploadedFolderName;

          selectedItem.value = jsonData.value.find(
            (item) => item.name === folderNameWithoutExtensions
          );
          // Update selectedItemDescription based on selectedItem
          if (selectedItem.value) {
            selectedItemDescription.value = selectedItem.value.description;
          } else {
            selectedItemDescription.value = ""; // Set it to an empty string
          }
        })
        .catch((error) => {
          console.error("Error fetching JSON data:", error);
        });
    } else {
      Swal.fire("Error", `Status: ${xhr.status}, ${xhr.responseText}`, "error");
    }
  };

  xhr.onerror = function () {
    Swal.fire(
      "Network Error",
      "An error occurred during the network request",
      "error"
    );
  };

  xhr.send(formData);
}

const jsonData = ref([]);
const userCookie = Cookies.get("userid");

fetch(`${baseUrl}/public/projects/users/${userCookie}/upload.json`)
  .then((response) => {
    if (!response.ok) {
      throw new Error("Failed to fetch JSON data");
    }
    return response.json();
  })
  .then((data) => {
    jsonData.value = data;
  })
  .catch((error) => {
    console.error("Error fetching JSON data:", error);
  });

function deleteFolderAndFile(event) {
  event.preventDefault(); // Prevent the default behavior of the button
  const userCookie = Cookies.get("userid");
  if (userCookie && selectedItem.value) {
    const folderId = selectedItem.value.name;
    fetch(
      `${baseUrl}/api/services/delete-asset?userId=${userCookie}&folderId=${folderId}`,
      {
        method: "POST",
      }
    )
      .then((response) => response.text())
      .then((message) => {
        alert(message);
        scanDirectory();
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }
}

function scanDirectory() {
  const userCookie = Cookies.get("userid");
  fetch(`${baseUrl}/api/services/get-assets-content?userId=${userCookie}`)
    .then((response) => response.json())
    .then((data) => {
      const contents = data.contents;
      directoryContents.value = contents; // Update directoryContents
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}

function scanDefaultDirectory() {
  fetch(`${baseUrl}/api/services/get-default-assets-content`)
    .then((response) => response.json())
    .then((data) => {
      const contents = data.contents;
      defaultDirectoryContents.value = contents; // Update defaultDirectoryContents
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}

const selectedDirectory = ref("");

function select() {
  const userData = Cookies.get("userid");
  fetch(`${baseUrl}/api/services/upload-json?userData=${userData}`)
    .then((response) => response.json())
    .then((data) => {
      jsonData.value = data;
      const selectedItemName = selectedDirectory.value;
      selectedItem.value = jsonData.value.find(
        (item) => item.name === selectedItemName
      );
      if (selectedItem.value) {
        receivedFocusedNodeData.properties.src = selectedItem.value.description;
      } else {
        receivedFocusedNodeData.properties.src = "";
      }
    })
    .catch((error) => {
      console.error("Error fetching JSON data:", error);
    });
}

const selectedDefaultDirectory = ref("");

function copySelectedAsset() {
  const userCookie = Cookies.get("userid");

  if (userCookie && selectedDefaultDirectory.value) {
    const folderId = selectedDefaultDirectory.value;
    console.log(
      "selectedDefaultDirectory.value.name",
      selectedDefaultDirectory.value
    );
    fetch(
      `${baseUrl}/api/services/copy-default-assets-content?userId=${userCookie}&folderId=${folderId}`,
      {
        method: "POST",
      }
    )
      .then((response) => response.text())
      .then((message) => {
        alert(message);
        scanDirectory();
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }
}

const inputDefaultDirectory = ref(""); // New ref to store the input value

function updateSelectedDefaultDirectory() {
  console.log("inputDefaultDirectory.value", inputDefaultDirectory.value);
  selectedDefaultDirectory.value = inputDefaultDirectory.value;
  copySelectedAsset();
}

function handlePaste(event) {
  const clipboardData = event.clipboardData || window.clipboardData;
  const pastedText = clipboardData.getData("text");
  // Process pasted text as needed
  inputDefaultDirectory.value = pastedText;
  receivedFocusedNodeData.properties.src = pastedText;
  updateSelectedDefaultDirectory();
  // Prevent the default paste action
  event.preventDefault();
}

function handleAssetsCopy(event) {
  updateSelectedDefaultDirectory();
  // Prevent the default paste action
  event.preventDefault();
}

function handleRedirect(link, event) {
  // Prevent the default paste action
  event.preventDefault();
  window.open(link, "_blank");
}

onMounted(() => {
  scanDirectory();
  scanDefaultDirectory();
});
</script>

<template>
  <aside ref="sidebarRef" class="sidebar_container common-css-div" :class="isModalOpen && 'active'">
    <div class="form-content">
      <h1 class="form-heading">
        Edit {{ receivedFormLabel.toString().split(":")[1] || "Assets" }} Node
      </h1>
      <div class="btn-bar d-flex justify-content-between">
        <div></div>
        <div>
          <button type="button" class="btn btn-secondary flex-grow-1" @click="closeModal" style="margin-right: 5px">
            Cancel
          </button>
          <button type="button" class="btn btn-primary save-changes-btn" @click="saveModal">
            Save
          </button>
        </div>
      </div>
      <h4 class="heading-tags">Properties</h4>
      <!-- START: Object Type form  -->
      <div class="modal-body d-flex flex-column">
        <div class="row"></div>

        <div class="row">
          <form class="form group">
            <div class="row" style="height: fit-content !important">
              <div class="input-row gap-2 d-flex justify-content-between">
                <div class="input-row-col-2">
                  <label class="col-md-2" for="type">Asset_Type</label>
                  <input type="text" class="col-md-1" id="node-name" disabled v-model="receivedAssetsType" />
                  <!-- <select class="col-md-6 select" id="type" v-model="receivedFocusedNodeData.type">
                    <option value="sound" v-if="receivedAssetsType === 'sound'">Audio</option>
                    <option value="video" v-if="receivedAssetsType === 'video'">Video</option>
                    <option value="img" v-if="receivedAssetsType === 'img'">Image</option>
                  </select> -->
                </div>
                <div class="input-row-col-2">
                  <label class="col-md-2" for="node-name">Node_Name</label>
                  <input type="text" class="col-md-1" id="node-name"
                    v-model="receivedFocusedNodeData.properties.name" />
                </div>
              </div>
            </div>
            <div class="row" style="height: fit-content !important" v-if="assetsType === 'Image' ||
    assetsType === 'Audio' ||
    assetsType === 'Video'
    ">
              <div class="input-row">
                <div class="d-flex">
                  <div class="">
                    <label class="col-md-6" for="own-assets">Select</label>
                    <select id="own-assets" class="select select-own" v-model="selectedDirectory"
                      @change="scanDirectory(), select()">
                      <option disabled value="">
                        Select your own assets...
                      </option>
                      <option v-for="(directory, index) in directoryContents" :key="index" :value="directory">
                        {{ directory }}
                      </option>
                    </select>
                  </div>
                  <div class="">
                    <button @click="openFilePicker" class="btn btn-action btn-primary btn-primary-cus btn-sm">
                      <i class="fa-solid fa-upload"></i>
                    </button>
                  </div>
                  <div>&nbsp;</div>
                  <div class="">
                    <button @click="deleteFolderAndFile" class="btn btn-action btn-danger btn-danger-cus btn-sm">
                      <i class="fa-solid fa-trash-can"></i>
                    </button>
                  </div>
                </div>
              </div>
              <form id="upload-form" enctype="multipart/form-data" method="post">
                <div class="custom-file-upload">
                  <input type="file" name="sampleFile" id="sampleFile"
                    accept=".mp4,.avi,.3gp,.mp3,.png,.jpg,.jpeg,.png,.zip,.gltf,.glb,.obj" style="display: none"
                    @change="uploadZipFile" />
                </div>
              </form>

              <div class="input-row">
                <p class="col-md-12 default-assets-note" for="default-assets">
                  Or, you can select the model from our library using the link
                  below. Copy the asset name and paste it in the field below.<br /><span @click="handleRedirect(`/assets-library/${assetsType.toLowerCase()}s`, $event)">Aldtan
                    library <i class="fa-solid fa-arrow-right"></i></span>
                </p>
              </div>

              <div class="input-row">
                <label class="col-md-6" for="default-assets">Library Assets</label>
                <input type="text" class="col-md-1" id="default-assets"
                  placeholder="Paste the common assets copied from the library here..."
                  v-model="receivedFocusedNodeData.properties.src" @paste="handlePaste" />
              </div>
            </div>

            <div class="row" style="height: fit-content !important" v-if="assetsType === 'Text'">
              <div class="input-row gap-2 d-flex justify-content-between">
                <div class="input-row-col-2">
                  <label class="col-md-2" for="node-name">Text</label>
                  <input type="text" class="col-md-1" id="node-name"
                    v-model="receivedFocusedNodeData.properties.text" />
                </div>
                <div class="input-row-col-2">
                  <label class="col-md-2" for="node-name">Size</label>
                  <input type="text" class="col-md-1" id="node-name"
                    v-model="receivedFocusedNodeData.properties.size" />
                </div>
              </div>
              <div class="input-row gap-2 d-flex justify-content-between">
                <div class="input-row-col-2">
                  <label class="col-md-2" for="src">Position</label>
                  <input type="text" class="col-md-1" id="src" v-model="receivedFocusedNodeData.properties.position" />
                </div>
                <div class="input-row-col-2">
                  <label class="col-md-2" for="color">Color</label>
                  <input type="color" class="col-md-1" id="color" v-model="receivedFocusedNodeData.properties.color" />
                </div>
              </div>
            </div>

            <div class="row" style="height: fit-content !important" v-if="assetsType === 'Link'">
              <div class="input-row gap-2 d-flex justify-content-between">
                <div class="input-row-col-2">
                  <label class="col-md-2" for="text">Text</label>
                  <input type="text" class="col-md-1" id="text" v-model="receivedFocusedNodeData.properties.text" />
                </div>
                <div class="input-row-col-2">
                  <label class="col-md-2" for="href">Href</label>
                  <input type="text" class="col-md-1" id="href" v-model="receivedFocusedNodeData.properties.href" />
                </div>
              </div>
              <div class="input-row gap-2 d-flex justify-content-between">
                <div class="input-row-col-2">
                  <label class="col-md-2" for="position">Position</label>
                  <input type="text" class="col-md-1" id="position"
                    v-model="receivedFocusedNodeData.properties.position" />
                </div>
                <div class="input-row-col-2">
                  <label class="col-md-2" for="rotation">Rotation</label>
                  <input type="text" class="col-md-1" id="rotation"
                    v-model="receivedFocusedNodeData.properties.rotation" />
                </div>
              </div>
              <div class="input-row gap-2 d-flex justify-content-between">
                <div class="input-row-col-2">
                  <label class="col-md-2" for="scale">Scale</label>
                  <input type="text" class="col-md-1" id="scale" v-model="receivedFocusedNodeData.properties.scale" />
                </div>
                <div class="input-row-col-2">
                  <label class="col-md-2" for="color">Color</label>
                  <input type="color" class="col-md-1" id="color" v-model="receivedFocusedNodeData.properties.color" />
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
      <!-- END: Object Type form  -->
    </div>
  </aside>
</template>

<style>
.default-assets-note {
  color: black;
  /* margin-left: 12px; */
  padding: 0 !important;
  width: 480px !important;
  font-size: 12px;
  text-transform: none !important;
  margin: 0;
}

.default-assets-note span {
  text-transform: capitalize !important;
  color: #054e59;
  cursor: pointer;
  font-weight: 700;
  margin: 0;
}

.default-assets-note span:hover {
  font-weight: 600;
  color: #054e59bf;
}

/* Hide the default file input */
input[type="file"] {
  display: none;
}
</style>

<style scoped>
.btns-div {
  padding: 0px 50px;
}

.btn-div button {
  width: 100% !important;
}

.btn-action {
  padding: 7px;
  transform: translateY(0.5px);
  color: aliceblue;
  width: 30px;
  height: 30px;
}

.btn-primary-cus {
  color: #006170;
  background-color: #00617053;
  border-color: #004c58;
  margin-top: 17.5px;
}

.btn-primary-cus:hover {
  color: #ffffff;
  background-color: #006170;
  border-color: #004c58;
}

.btn-danger-cus {
  color: #990000;
  background-color: #dd222256;
  border-color: #661111;
  margin-top: 17.5px;
}

.btn-danger-cus:hover {
  background-color: #dd2222;
  color: #ffffff;
}

.btn-view-cus {
  color: #006170 !important;
  background-color: #3d363600 !important;
  border-color: #004c58 !important;
}

.btn-view-cus:hover {
  background-color: #f2ac5b65 !important;
  color: #006170 !important;
  border-color: #006170 !important;
}
</style>

<style scoped>
::-ms-input-placeholder {
  font-size: 13px;
}

::placeholder {
  font-size: 13px;
}

.modal-body {
  margin-top: -10px;
  overflow-y: auto;
  overflow-x: hidden;
  max-height: 100%;
  min-height: 100%;
}

.form-content {
  position: relative;
  height: 80% !important;
}

.modal-footer {
  position: absolute;
  bottom: 0;
  right: 0;
}

.row {
  height: 100%;
}

.sidebar_container {
  position: fixed;
  top: 75px;
  right: 0;
  bottom: 19px;
  transform: translateX(300px);
  background-color: #ffffff;
  color: white;
  width: 500px;
  visibility: hidden;
  opacity: 0;
  transition: transform 0.3s, opacity 0.3s, visibility 0s 0.3s;
  z-index: 10;
  border-left: #f1f3f4 5px solid;
  border-top: #f1f3f4 5px solid;
  border-bottom: #f1f3f4 5px solid;
  padding-bottom: 50px;
  border-radius: 5px 0 0 5px;
}

.sidebar_container.active {
  transform: translateX(0);
  opacity: 1;
  visibility: visible;
  transition: visibility;
  transition: transform 0.3s, opacity 0.3s, visibility 0s 0.3s;
}

input[type="color"] {
  -webkit-appearance: none;
  width: 30px;
  height: 30px;
  border: 1px solid #080a0c22;
  padding: 0px;
}

input[type="color"]::-webkit-color-swatch-wrapper {
  border: 1px solid #080a0c00;
  padding: 0px;
  border-radius: 4px;
}

input[type="color"]::-webkit-color-swatch {
  border: 1px solid #080a0c00;
  padding: 0px;
  border-radius: 4px;
}

.input-row {
  padding: 0 20px 15px 20px !important;
}

.input-row-col-2 {
  width: 50% !important;
}

input,
select {
  color: black;
  /* padding: 5px 10px !important; */
  width: initial !important;
  width: -webkit-fill-available !important;
  border-radius: 5px !important;
  margin: 0 !important;
  border: #000 1px solid;
}

.select-own {
  /* margin: 0 10px 15px 20px !important; */
  width: 398px !important;
}

.btn-bar {
  padding: 5px 15px 5px 20px !important;
  border-top: #f1f3f4 2px solid;
  border-bottom: #f1f3f4 2px solid;
}

label {
  margin: 0 !important;
  padding: 0 !important;
  color: black !important;
}

.modal-footer {
  margin: 50px 20px 0 0px !important;
}

.form-heading {
  margin-left: 12px;
  margin-top: 20px;
  color: black !important;
  font-size: 22px;
}

.heading-tags {
  text-align: left;
  margin-left: 12px;
  margin-top: 25px !important;
  margin-bottom: 20px !important;
}

h4 {
  margin-top: 50px;
  color: black !important;
}
</style>
