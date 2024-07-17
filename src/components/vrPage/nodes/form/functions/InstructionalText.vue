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
  //receivedFocusedNodeData.properties.id = receivedFocusedNodeData.id
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
</script>

<template>
  <aside ref="sidebarRef" class="sidebar_container common-css-div" :class="isModalOpen && 'active'">
    <div class="form-content">
      <h1 class="form-heading">
        Edit {{ receivedFormLabel.toString().split(":")[1] || "Instructional Text" }} Node
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
        <div class="row">
          <div class="input-row gap-2 d-flex justify-content-between">
            <div class="input-row-col-2">
              <label class="col-md-6" for="name">Node_Name</label>
              <input type="text" class="col-md-1" id="name" v-model="receivedFocusedNodeData.properties.name" />
            </div>
            <div class="input-row-col-2">
              <label class="col-md-6" for="distance">Distance</label>
              <input type="text" class="col-md-1" id="distance" v-model="receivedFocusedNodeData.properties.distance" />
            </div>
          </div>
          <div class="input-row gap-2 d-flex justify-content-between">
            <div class="input-row-col-2">
              <label class="col-md-6" for="position">Position</label>
              <input type="text" class="col-md-1" id="position" v-model="receivedFocusedNodeData.properties.position" />
            </div>
            <div class="input-row-col-2">
              <label class="col-md-6" for="text">Text</label>
              <input type="text" class="col-md-1" id="text" v-model="receivedFocusedNodeData.properties.text" />
            </div>
          </div>
          <div class="input-row gap-2 d-flex justify-content-between">
            <div class="input-row-col-2">
              <label class="col-md-6" for="textPosition">Text Position</label>
              <input type="text" class="col-md-1" id="textPosition" v-model="receivedFocusedNodeData.properties.textPosition" />
            </div>
            <div class="input-row-col-2">
              <label class="col-md-6" for="textRotation">Text Rotation</label>
              <input type="text" class="col-md-1" id="textRotation" v-model="receivedFocusedNodeData.properties.textRotation" />
            </div>
          </div>
          <div class="input-row gap-2 d-flex justify-content-between">
            <div class="input-row-col-2">
              <label class="col-md-6" for="textScale">Text Scale</label>
              <input type="text" class="col-md-1" id="textScale" v-model="receivedFocusedNodeData.properties.textScale" />
            </div>
            <div class="input-row-col-2">
              <label class="col-md-6" for="textColor">Text Color</label>
              <input type="color" class="col-md-1" id="textColor" v-model="receivedFocusedNodeData.properties.textColor" />
            </div>
          </div>
          <div class="input-row gap-2 d-flex justify-content-between">
            <div class="input-row-col-2">
              <label class="col-md-6" for="modelPosition">Model Position</label>
              <input type="text" class="col-md-1" id="modelPosition" v-model="receivedFocusedNodeData.properties.modelPosition" />
            </div>
            <div class="input-row-col-2">
              <label class="col-md-6" for="modelRotation">Model Rotation</label>
              <input type="text" class="col-md-1" id="modelRotation" v-model="receivedFocusedNodeData.properties.modelRotation" />
            </div>
          </div>
          <div class="input-row gap-2 d-flex justify-content-between">
            <div class="input-row-col-2">
              <label class="col-md-6" for="modelScale">Model Scale</label>
              <input type="text" class="col-md-1" id="modelScale" v-model="receivedFocusedNodeData.properties.modelScale" />
            </div>
            <div class="input-row-col-2">
              <label class="col-md-6" for="path">Path</label>
              <input type="text" class="col-md-1" id="path" disabled v-model="receivedFocusedNodeData.properties.path" />
            </div>
          </div>
          <h4 class="heading-tags">Model Animation Properties</h4>
          <div class="input-row gap-2 d-flex justify-content-between">
            <div class="input-row-col-2">
              <label class="col-md-6" for="modelAnimationProperty">Animation Property</label>
              <input type="text" class="col-md-1" id="modelAnimationProperty" v-model="receivedFocusedNodeData.properties.modelAnimationProperty" />
            </div>
            <div class="input-row-col-2">
              <label class="col-md-6" for="modelAnimationFill">Animation Fill</label>
              <input type="text" class="col-md-1" id="modelAnimationFill" v-model="receivedFocusedNodeData.properties.modelAnimationFill" />
            </div>
          </div>
          <div class="input-row gap-2 d-flex justify-content-between">
            <div class="input-row-col-2">
              <label class="col-md-6" for="modelAnimationTo">Animation To</label>
              <input type="text" class="col-md-1" id="modelAnimationTo" v-model="receivedFocusedNodeData.properties.modelAnimationTo" />
            </div>
            <div class="input-row-col-2">
              <label class="col-md-6" for="modelAnimationLoop">Animation Loop</label>
              <input type="text" class="col-md-1" id="modelAnimationLoop" v-model="receivedFocusedNodeData.properties.modelAnimationLoop" />
            </div>
          </div>
          <div class="input-row gap-2 d-flex justify-content-between">
            <div class="input-row-col-2">
              <label class="col-md-6" for="modelAnimationDur">Animation Dur</label>
              <input type="text" class="col-md-1" id="modelAnimationDur" v-model="receivedFocusedNodeData.properties.modelAnimationDur" />
            </div>
            <div class="input-row-col-2">
              <label class="col-md-6" for="modelAnimationRepeat">Animation Repeat</label>
              <input type="text" class="col-md-1" id="modelAnimationRepeat" v-model="receivedFocusedNodeData.properties.modelAnimationRepeat" />
            </div>
          </div>
          <br>
          <br>
          <br>
        </div>
      </div>
      <!-- END: Object Type form  -->
    </div>
  </aside>
</template>

<style>
.save-changes-btn {
  background-color: #4c9cbc !important;
  border: 1px solid #4c9cbc !important;
}

.save-changes-btn:hover {
  background-color: #69afc7 !important;
  border: 1px solid #69afc7 !important;
}

.common-css-div {
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.5);
  font-family: Arial, Helvetica, sans-serif !important;
  text-transform: capitalize;
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
