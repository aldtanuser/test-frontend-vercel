<script setup>
import { defineProps } from "vue";
import "../../../../../assets/objects-main.css";

const props = defineProps({
  focusedNodeData: Object,
});

const receivedFocusedNodeData = props.focusedNodeData;
// properties id should be unique
receivedFocusedNodeData.properties.id = receivedFocusedNodeData.id;
</script>

<template>
  <div class="row" style="padding: 0; margin: 0;">
    <div class="input-row gap-2 d-flex justify-content-between">
      <div class="input-row-col-2">
        <label class="col-md-6" for="name">Name</label>
        <input type="text" class="col-md-1" id="id" v-model="receivedFocusedNodeData.properties.name" />
      </div>
      <div class="input-row-col-2">
        <label class="col-md-6" for="pos">Position</label>
        <input type="text" class="col-md-1" id="pos" v-model="receivedFocusedNodeData.properties.position" />
      </div>
    </div>
    <div class="input-row gap-2 d-flex justify-content-between">
      <div class="input-row-col-2">
        <label class="col-md-6" for="rot">Rotation</label>
        <input type="text" class="col-md-1" id="rot" v-model="receivedFocusedNodeData.properties.rotation" />
      </div>
      <div class="input-row-col-2">
        <label class="col-md-6" for="frame-color">Frame Color</label>
        <input type="color" class="col-md-1" id="frame-color" v-model="receivedFocusedNodeData.properties.frameColor" />
      </div>
    </div>
    <div class="input-row gap-2 d-flex justify-content-between">
      <div class="input-row-col-2">
        <label class="col-md-6" for="decoration-color">Decoration Color</label>
        <input type="color" class="col-md-1" id="decoration-color" v-model="receivedFocusedNodeData.properties.decorationColor" />
      </div>
      <div class="input-row-col-2">
        <label class="col-md-6" for="depth">Depth</label>
        <input type="text" class="col-md-1" id="depth" v-model="receivedFocusedNodeData.properties.depth" />
      </div>
    </div>
    <div class="input-row gap-2 d-flex justify-content-between">
      <div class="input-row-col-2">
        <label class="col-md-6" for="src">Texture</label>
        <input type="text" class="col-md-1" id="src" v-model="receivedFocusedNodeData.properties.src" readonly />
      </div>
      <div class="input-row-col-2">
      </div>
    </div>
  </div>
</template>


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
  border: 1px solid #080a0c;
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
