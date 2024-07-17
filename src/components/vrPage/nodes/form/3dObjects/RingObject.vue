<script setup>
import { computed, defineProps } from "vue";
import "../../../../../assets/objects-main.css";

const props = defineProps({
  focusedNodeData: Object,
});

const receivedFocusedNodeData = props.focusedNodeData;

const classCheckbox = computed({
  get() {
    return receivedFocusedNodeData.properties.class === "superhands";
  },
  set(value) {
    receivedFocusedNodeData.properties.class = value ? "superhands" : "";
  }
});

const handRotationCheckbox = computed({
  get() {
    return receivedFocusedNodeData.properties['hand-rotation-listener'] === "";
  },
  set(value) {
    receivedFocusedNodeData.properties['hand-rotation-listener'] = value ? "" : "false";
  }
});
</script>

<template>
  <div class="row" style="padding: 0; margin: 0;">
    <div class="input-row gap-2 d-flex justify-content-between">
      <div class="input-row-col-2">
        <label class="col-md-6" for="name">Node_Name</label>
        <input type="text" class="col-md-1" id="name" v-model="receivedFocusedNodeData.properties.name" />
      </div>
      <div class="input-row-col-2">
        <label class="col-md-6" for="scal">Scale</label>
        <input type="text" class="col-md-1" id="scal" v-model="receivedFocusedNodeData.properties.scale" />
      </div>
    </div>
    <div class="input-row gap-2 d-flex justify-content-between">
      <div class="input-row-col-2">
        <label class="col-md-6" for="rot">Rotation</label>
        <input type="text" class="col-md-1" id="rot" v-model="receivedFocusedNodeData.properties.rotation" />
      </div>
      <div class="input-row-col-2">
        <label class="col-md-6" for="pos">Position</label>
        <input type="text" class="col-md-1" id="pos" v-model="receivedFocusedNodeData.properties.position" />
      </div>
    </div>
    <div class="input-row gap-2 d-flex justify-content-between">
      <div class="input-row-col-2">
        <label class="col-md-6" for="radiusInner">Radius Inner</label>
        <input type="text" class="col-md-1" id="radiusInner" v-model="receivedFocusedNodeData.properties.radiusInner" />
      </div>
      <div class="input-row-col-2">
        <label class="col-md-6" for="radiusOuter">Radius Outer</label>
        <input type="text" class="col-md-1" id="radiusOuter" v-model="receivedFocusedNodeData.properties.radiusOuter" />
      </div>
    </div>
    <div class="input-row gap-2 d-flex justify-content-between">
      <div class="input-row-col-2">
        <label class="col-md-6" for="segmentsTheta">Segments Theta</label>
        <input type="text" class="col-md-1" id="segmentsTheta"
          v-model="receivedFocusedNodeData.properties.segmentsTheta" />
      </div>
      <div class="input-row-col-2">
        <label class="col-md-6" for="segmentsPhi">Segments Phi</label>
        <input type="text" class="col-md-1" id="segmentsPhi" v-model="receivedFocusedNodeData.properties.segmentsPhi" />
      </div>
    </div>
    <div class="input-row gap-2 d-flex justify-content-between">
      <div class="input-row-col-2">
        <label class="col-md-6" for="thetaStart">Theta Start</label>
        <input type="text" class="col-md-1" id="thetaStart" v-model="receivedFocusedNodeData.properties.thetaStart" />
      </div>
      <div class="input-row-col-2">
        <label class="col-md-6" for="thetaLength">Theta Length</label>
        <input type="text" class="col-md-1" id="thetaLength" v-model="receivedFocusedNodeData.properties.thetaLength" />
      </div>
    </div>
    <div class="input-row gap-2 d-flex justify-content-between">
      <div class="input-row-col-2">
        <label class="col-md-6" for="src">Texture</label>
        <input type="text" class="col-md-1" id="src" v-model="receivedFocusedNodeData.properties.src" readonly />
      </div>
      <div class="input-row-col-2">
        <label class="col-md-6" for="color">Color</label>
        <input type="color" class="col-md-1" id="color" v-model="receivedFocusedNodeData.properties.color"
          style="height: 29px !important;" />
      </div>
    </div>
    <div class="input-row gap-2 d-flex justify-content-between" style="justify-content: flex-start !important;">
      <div class="gap-2 d-flex">
        <label class="col-checkbox-name" style="width: fit-content !important;" for="class">Super hands interaction</label>
        <input type="checkbox" class="col-checkbox" style="width: fit-content !important;" id="class" v-model="classCheckbox" />
      </div>
      <div class="gap-2 d-flex">
        <label class="col-checkbox-name" style="width: fit-content !important;" for="hand-rotation">Hand rotation</label>
        <input type="checkbox" class="col-checkbox" style="width: fit-content !important;" id="hand-rotation" v-model="handRotationCheckbox" />
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
