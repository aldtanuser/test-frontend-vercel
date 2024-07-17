<script setup>
import { defineEmits, defineProps, ref, onMounted, onBeforeUnmount } from "vue";

const props = defineProps({
  opened: Boolean,
  focusedNodeData: Object,
  formLabel: String,
});

const emits = defineEmits(["formSubmitted"]);

var receivedFocusedNodeData = props.focusedNodeData;
var receivedFormLabel = props.formLabel;

const isModalOpen = ref(props.opened);

function closeModal() {
  isModalOpen.value = false;
}

function saveModal() {
  emits("formSubmitted");
  closeModal();
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

function addInput() {
  const inputContainer = document.getElementById("inputContainer");

  const newInputGroup = document.createElement("div");
  newInputGroup.classList.add("row", "justify-content-between", "text-left");

  newInputGroup.innerHTML = `
  <div data-v-7f48027a="" class="input-row gap-2 d-flex justify-content-between"><div data-v-7f48027a="" class="input-row-col-2"><label data-v-7f48027a="" class="form-control-label px-3" for="jNames">jNames</label><input data-v-7f48027a="" type="text" id="modalName"></div><div data-v-7f48027a="" class="input-row-col-2"><label data-v-7f48027a="" class="form-control-label px-3" for="jNames">Joint Angle</label><input data-v-7f48027a="" type="text" id="modalName"></div></div>
  `;

  inputContainer.appendChild(newInputGroup);
}
</script>

<template>
  <aside ref="sidebarRef" class="sidebar_container common-css-div" :class="isModalOpen && 'active'">
    <div class="form-content">
      <h1 class="form-heading">
        Edit {{ receivedFormLabel.toString().split(":")[1] || '' }} Node
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
      <div class="modal-body d-flex flex-column mt-5">
        <div class="row justify-content-between text-left">
          <div class="input-row gap-2 d-flex justify-content-between">
            <div class="input-row-col-2">
              <label class="form-control-label px-3" for="modalName">Name</label>
              <input type="text" id="modalName" v-model="receivedFocusedNodeData.properties.name" />
            </div>
            <div class="input-row-col-2">
              <label class="form-control-label px-3" for="position">position</label>
              <input type="text" id="modalName" v-model="receivedFocusedNodeData.properties.position" />
            </div>
          </div>
          <div class="input-row gap-2 d-flex justify-content-between">
            <div class="input-row-col-2">
              <label class="form-control-label px-3" for="width">width</label>
              <input type="text" id="modalName" v-model="receivedFocusedNodeData.properties.width" />
            </div>
            <div class="input-row-col-2">
              <label class="form-control-label px-3" for="height">height</label>
              <input type="text" id="modalName" v-model="receivedFocusedNodeData.properties.height" />
            </div>
          </div>
          <div class="input-row gap-2 d-flex justify-content-between">
            <div class="input-row-col-2">
              <label class="form-control-label px-3" for="rotation">rotation</label>
              <input type="text" id="modalName" v-model="receivedFocusedNodeData.properties.rotation" />
            </div>
            <div class="input-row-col-2">
              <label class="form-control-label px-3" for="type">Transparent</label>
              <select class="col-md-6 select" id="transparent" v-model="receivedFocusedNodeData.properties.transparent">
                <option value="true">True</option>
                <option value="false">False</option>
              </select>
            </div>
          </div>
          <div class="input-row gap-2 d-flex justify-content-between">
            <div class="input-row-col-2">
              <label class="form-control-label px-3" for="opacity">Opacity</label>
              <input type="text" id="modalName" v-model="receivedFocusedNodeData.properties.opacity"
                :disabled="receivedFocusedNodeData.properties.transparent !== 'true'" />
            </div>
            <div class="input-row-col-2">
              <label class="form-control-label px-3" for="Color">Color</label>
              <input type="text" id="color" v-model="receivedFocusedNodeData.properties.color" />
            </div>
          </div>


          <div class="input-row gap-2 d-flex justify-content-between">
            <div class="input-row-col-2">
              <label class="form-control-label px-3" for="jNames">jNames</label>
              <input type="text" id="modalName" v-model="receivedFocusedNodeData.properties.jNames" />
            </div>
            <div class="input-row-col-2">
              <label class="form-control-label px-3" for="jNames">Joint Angle</label>
              <input type="text" id="modalName" v-model="receivedFocusedNodeData.properties.jangle" />
            </div>
          </div>
          <div class="input-row gap-2 d-flex justify-content-between">
            <div class="input-row-col-2">
              <label class="form-control-label px-3" for="jNames">Slider</label>
              <div class="btn-group" role="group" aria-label="Basic radio toggle button group">
                <input type="radio" class="btn-check" name="btnradio" id="btnradio1" value="auto"
                  v-model="receivedFocusedNodeData.properties.btnradio1" autocomplete="off" checked />
                <label class="btn btn-outline-primary slider-radio-btn" for="btnradio1"
                  style="border-radius: 5px 0px 0px 5px !important">Auto</label>

                <input type="radio" class="btn-check" name="btnradio" id="btnradio2" value="manual"
                  v-model="receivedFocusedNodeData.properties.btnradio2" autocomplete="off" />
                <label class="btn btn-outline-primary slider-radio-btn" for="btnradio2"
                  style="border-radius: 0px 5px 5px 0px !important">Manual</label>
              </div>
            </div>
            <div class="input-row-col-2">
              <input type="button" class="w-25 btn btn-success ms-5" value="Add joint" @click="addInput" />
            </div>
          </div>
        </div>
        <div id="inputContainer"></div>
      </div>

      <!-- END: Object Type form  -->
    </div>
  </aside>
</template>

<style>
/* Hide the default file input */
input[type="file"] {
  display: none;
}

.slider-radio-btn {
  width: 50px;
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
