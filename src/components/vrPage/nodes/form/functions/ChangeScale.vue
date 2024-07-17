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
  receivedFocusedNodeData.properties.id = receivedFocusedNodeData.id;
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
        {{ receivedFormLabel.toString().split(":")[1] }}
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
              <label class="col-md-6" for="type">Event</label>
              <select class="col-md-6 select" id="type" v-model="receivedFocusedNodeData.properties.type">
                <option value="custom">Custom</option>
                <option value="hover">Hover</option>
                <option value="click">Click</option>
              </select>
            </div>
          </div>
          <div class="input-row gap-2 d-flex justify-content-between">
            <div class="input-row-col-2">
              <label class="col-md-6" for="scale">To Scale</label>
              <input type="text" class="col-md-1" id="scale" v-model="receivedFocusedNodeData.properties.scale" />
            </div>
            <div class="input-row-col-2">
            </div>
          </div>


        </div>
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
