<script setup>
import { defineProps, defineModel } from "vue";

const { showSidePanel, focusedNodeData, formLabel, clickSubmit } = defineProps({
  showSidePanel: { type: Boolean, required: true },
  focusedNodeData: { type: Object, default: undefined },
  formLabel: { type: String, default: undefined },
  clickSubmit: { type: Function, default: undefined },
});

const formType = defineModel("formType", { required: true });
</script>

<template>
  <div v-if="formType === 'box-object'" Class="containeright" id="right-pane-form" style="height: 50%">
    <!-- for 3D Object Node -->
    <DefaultGeom objectType="box" :opened="showSidePanel" :focusedNodeData="focusedNodeData"
      @formSubmitted="clickSubmit" :formLabel="formLabel" />
  </div>
  <div v-if="formType === 'cylinder-object'" Class="containeright" id="right-pane-form" style="height: 50%">
    <!-- for 3D Object Node -->
    <DefaultGeom objectType="cylinder" :opened="showSidePanel" :focusedNodeData="focusedNodeData"
      @formSubmitted="clickSubmit" :formLabel="formLabel" />
  </div>
  <div v-if="formType === 'cone-object'" Class="containeright" id="right-pane-form" style="height: 50%">
    <!-- for 3D Object Node -->
    <DefaultGeom objectType="cone" :opened="showSidePanel" :focusedNodeData="focusedNodeData"
      @formSubmitted="clickSubmit" :formLabel="formLabel" />
  </div>
  <div v-if="formType === 'tetrahedron-object'" Class="containeright" id="right-pane-form" style="height: 50%">
    <!-- for 3D Object Node -->
    <DefaultGeom objectType="tetrahedron" :opened="showSidePanel" :focusedNodeData="focusedNodeData"
      @formSubmitted="clickSubmit" :formLabel="formLabel" />
  </div>
  <div v-if="formType === 'sphere-object'" Class="containeright" id="right-pane-form" style="height: 50%">
    <!-- for 3D Object Node -->
    <DefaultGeom objectType="sphere" :opened="showSidePanel" :focusedNodeData="focusedNodeData"
      @formSubmitted="clickSubmit" :formLabel="formLabel" />
  </div>
  <div v-if="formType === 'circle-object'" Class="containeright" id="right-pane-form" style="height: 50%">
    <!-- for 3D Object Node -->
    <DefaultGeom objectType="circle" :opened="showSidePanel" :focusedNodeData="focusedNodeData"
      @formSubmitted="clickSubmit" :formLabel="formLabel" />
  </div>
  <div v-if="formType === 'line-component'" Class="containeright" id="right-pane-form" style="height: 50%">
    <!-- for 3D Object Node -->
    <DefaultGeom objectType="line" :opened="showSidePanel" :focusedNodeData="focusedNodeData"
      @formSubmitted="clickSubmit" :formLabel="formLabel" />
  </div>
  <div v-if="formType === 'triangle-object'" Class="containeright" id="right-pane-form" style="height: 50%">
    <!-- for 3D Object Node -->
    <DefaultGeom objectType="triangle" :opened="showSidePanel" :focusedNodeData="focusedNodeData"
      @formSubmitted="clickSubmit" :formLabel="formLabel" />
  </div>
  <div v-if="formType === 'gltf-model-object'" Class="containeright" id="right-pane-form" style="height: 50%">
    <!-- for 3D Object Node -->
    <DefaultGeom objectType="gltf-model" :opened="showSidePanel" :focusedNodeData="focusedNodeData"
      @formSubmitted="clickSubmit" :formLabel="formLabel" />
  </div>
  <div v-if="formType === 'object'" Class="containeright" id="right-pane-form" style="height: 50%">
    <!-- for 3D Object Node -->
    <DefaultGeom objectType="others" :opened="showSidePanel" :focusedNodeData="focusedNodeData"
      @formSubmitted="clickSubmit" :formLabel="formLabel" />
  </div>
  <div v-if="formType === 'sky-env'" Class="containeright" id="right-pane-form" style="height: 50%">
    <!-- for Environment Node -->
    <EnvObjects envType="sky" :opened="showSidePanel" :focusedNodeData="focusedNodeData" @formSubmitted="clickSubmit"
      :formLabel="formLabel" />
  </div>
  <div v-if="formType === 'add-plane-component'" Class="containeright" id="right-pane-form" style="height: 50%">
    <!-- for Environment Node -->
    <EnvObjects envType="plane" :opened="showSidePanel" :focusedNodeData="focusedNodeData" @formSubmitted="clickSubmit"
      :formLabel="formLabel" />
  </div>
  <div v-if="formType === 'add-wall-component'" Class="containeright" id="right-pane-form" style="height: 50%">
    <!-- for Environment Node -->
    <EnvObjects envType="wall" :opened="showSidePanel" :focusedNodeData="focusedNodeData" @formSubmitted="clickSubmit"
      :formLabel="formLabel" />
  </div>
  <div v-if="formType === 'add-floor-component'" Class="containeright" id="right-pane-form" style="height: 50%">
    <!-- for Environment Node -->
    <EnvObjects envType="floor" :opened="showSidePanel" :focusedNodeData="focusedNodeData" @formSubmitted="clickSubmit"
      :formLabel="formLabel" />
  </div>
  <div v-if="formType === 'image-frame-env'" Class="containeright" id="right-pane-form" style="height: 50%">
    <!-- for Environment Node -->
    <EnvObjects envType="image-frame" :opened="showSidePanel" :focusedNodeData="focusedNodeData"
      @formSubmitted="clickSubmit" :formLabel="formLabel" />
  </div>
  <div v-if="formType === 'video-player-env'" Class="containeright" id="right-pane-form" style="height: 50%">
    <!-- for Environment Node -->
    <EnvObjects envType="video-player" :opened="showSidePanel" :focusedNodeData="focusedNodeData"
      @formSubmitted="clickSubmit" :formLabel="formLabel" />
  </div>
  <div v-if="formType === 'gltf-model-asset'" Class="containeright" id="right-pane-form" style="height: 50%">
    <!-- for Assets Node -->
    <!-- Add a prop for assetType -->
    <ThreeDModels :opened="showSidePanel" :focusedNodeData="focusedNodeData" @formSubmitted="clickSubmit"
      :formLabel="formLabel" />
  </div>
  <div v-if="formType === 'obj-model-asset'" Class="containeright" id="right-pane-form" style="height: 50%">
    <!-- for Assets Node -->
    <!-- Add a prop for assetType -->
    <ThreeDModels :opened="showSidePanel" :focusedNodeData="focusedNodeData" @formSubmitted="clickSubmit"
      :formLabel="formLabel" />
  </div>
  <div v-if="formType === 'image-asset'" Class="containeright" id="right-pane-form" style="height: 50%">
    <!-- for Assets Node -->
    <Assets assetsType="Image" :opened="showSidePanel" :focusedNodeData="focusedNodeData" @formSubmitted="clickSubmit"
      :formLabel="formLabel" />
  </div>
  <div v-if="formType === 'sound-asset'" Class="containeright" id="right-pane-form" style="height: 50%">
    <!-- for Assets Node -->
    <Assets assetsType="Audio" :opened="showSidePanel" :focusedNodeData="focusedNodeData" @formSubmitted="clickSubmit"
      :formLabel="formLabel" />
  </div>
  <div v-if="formType === 'video-asset'" Class="containeright" id="right-pane-form" style="height: 50%">
    <!-- for Assets Node -->
    <Assets assetsType="Video" :opened="showSidePanel" :focusedNodeData="focusedNodeData" @formSubmitted="clickSubmit"
      :formLabel="formLabel" />
  </div>
  <div v-if="formType === 'add-text-component'" Class="containeright" id="right-pane-form" style="height: 50%">
    <!-- for Assets Node -->
    <Assets assetsType="Text" :opened="showSidePanel" :focusedNodeData="focusedNodeData" @formSubmitted="clickSubmit"
      :formLabel="formLabel" />
  </div>
  <div v-if="formType === 'add-link-component'" Class="containeright" id="right-pane-form" style="height: 50%">
    <!-- for Assets Node -->
    <Assets assetsType="Link" :opened="showSidePanel" :focusedNodeData="focusedNodeData" @formSubmitted="clickSubmit"
      :formLabel="formLabel" />
  </div>
  <div v-if="formType === 'asset'" Class="containeright" id="right-pane-form" style="height: 50%">
    <!-- for Assets Node -->
    <Assets :opened="showSidePanel" :focusedNodeData="focusedNodeData" @formSubmitted="clickSubmit"
      :formLabel="formLabel" />
  </div>
  <div v-if="formType === 'animation-function'" Class="containeright" id="right-pane-form" style="height: 50%">
    <!-- for Animation Node -->
    <Animation :opened="showSidePanel" :focusedNodeData="focusedNodeData" @formSubmitted="clickSubmit"
      :formLabel="formLabel" />
  </div>
  <div v-if="formType === 'animation-type-function'" Class="containeright" id="right-pane-form" style="height: 50%">
    <!-- for Animation Node -->
    <Animation animationType="custom" :opened="showSidePanel" :focusedNodeData="focusedNodeData" @formSubmitted="clickSubmit"
      :formLabel="formLabel" />
  </div>
  <div v-if="formType === 'instructional-text-function'" Class="containeright" id="right-pane-form" style="height: 50%">
    <!-- for Animation Node -->
    <InstructionalText :opened="showSidePanel" :focusedNodeData="focusedNodeData" @formSubmitted="clickSubmit"
      :formLabel="formLabel" />
  </div>
  <div v-if="formType === 'color-change-function'" Class="containeright" id="right-pane-form" style="height: 50%">
    <!-- for ChangeColor Node -->
    <ChangeColor :opened="showSidePanel" :focusedNodeData="focusedNodeData" @formSubmitted="clickSubmit"
      :formLabel="formLabel" />
  </div>
  <div v-if="formType === 'function-collider-check'" Class="containeright" id="right-pane-form" style="height: 50%">
    <!-- for DragAndDrop Node -->
    <DragAndDrop :opened="showSidePanel" :focusedNodeData="focusedNodeData" @formSubmitted="clickSubmit"
      :formLabel="formLabel" />
  </div>
  <div v-if="formType === 'hand-controls-setup-component'" Class="containeright" id="right-pane-form"
    style="height: 50%">
    <!-- for SeperHand Node -->
    <SeperHand :opened="showSidePanel" :focusedNodeData="focusedNodeData" @formSubmitted="clickSubmit"
      :formLabel="formLabel" />
  </div>
  <div v-if="formType === 'position-change-function'" Class="containeright" id="right-pane-form" style="height: 50%">
    <!-- for ChangePosition Node -->
    <ChangePosition :opened="showSidePanel" :focusedNodeData="focusedNodeData" @formSubmitted="clickSubmit"
      :formLabel="formLabel" />
  </div>
  <div v-if="formType === 'rotation-change-function'" Class="containeright" id="right-pane-form" style="height: 50%">
    <!-- for ChangeRotation Node -->
    <ChangeRotation :opened="showSidePanel" :focusedNodeData="focusedNodeData" @formSubmitted="clickSubmit"
      :formLabel="formLabel" />
  </div>
  <div v-if="formType === 'scale-change-function'" Class="containeright" id="right-pane-form" style="height: 50%">
    <!-- for ChangeScale Node -->
    <ChangeScale :opened="showSidePanel" :focusedNodeData="focusedNodeData" @formSubmitted="clickSubmit"
      :formLabel="formLabel" />
  </div>
  <div v-if="formType === 'scene-scene'" Class="containeright" id="right-pane-form" style="height: 50%">
    <Scene :opened="showSidePanel" :focusedNodeData="focusedNodeData"
    @formSubmitted="clickSubmit" :formLabel="formLabel"/>
  </div>
  <div v-if="formType === 'add-light-component'" Class="containeright" id="right-pane-form" style="height: 50%">
    <!-- for Equipments Node -->
    <Interactive equipmentType="light-comp" :opened="showSidePanel" :focusedNodeData="focusedNodeData"
      @formSubmitted="clickSubmit" :formLabel="formLabel" />
  </div>
  <!-- <div v-if="formType === 'light-setup'" Class="containeright" id="right-pane-form" style="height: 50%">
    <Interactive equipmentType="light" :opened="showSidePanel" :focusedNodeData="focusedNodeData"
      @formSubmitted="clickSubmit" :formLabel="formLabel" />
  </div> -->
  <div v-if="formType === 'camera-scene'" Class="containeright" id="right-pane-form" style="height: 50%">
    <!-- for Equipments Node -->
    <Interactive equipmentType="camera" :opened="showSidePanel" :focusedNodeData="focusedNodeData"
      @formSubmitted="clickSubmit" :formLabel="formLabel" />
  </div>
  <div v-if="formType === 'gui-buttons-component'" Class="containeright" id="right-pane-form" style="height: 50%">
    <!-- for Gui Button Node -->
    <GuiButtons :guiButtonType="focusedNodeData.type" :opened="showSidePanel" :focusedNodeData="focusedNodeData" @formSubmitted="clickSubmit"
      :formLabel="formLabel" />
  </div>
  <!-- <div v-if="formType === 'gui-button-component'" Class="containeright" id="right-pane-form" style="height: 50%">
    <GuiButton :opened="showSidePanel" :focusedNodeData="focusedNodeData" @formSubmitted="clickSubmit"
      :formLabel="formLabel" />
  </div>
  <div v-if="formType === 'gui-toggle-button-component'" Class="containeright" id="right-pane-form" style="height: 50%">
    <GuiToggleButton :opened="showSidePanel" :focusedNodeData="focusedNodeData" @formSubmitted="clickSubmit"
      :formLabel="formLabel" />
  </div> -->
  <!-- <div v-if="formType === 'button-button'" Class="containeright" id="right-pane-form" style="height: 50%">
    <GuiButton :opened="showSidePanel" :focusedNodeData="focusedNodeData" @formSubmitted="clickSubmit"
      :formLabel="formLabel" />
  </div> -->
  <div v-if="formType === 'control-control'" Class="containeright" id="right-pane-form" style="height: 50%">
    <!-- for Control Panel Node -->
    <ControlPanel :opened="showSidePanel" :focusedNodeData="focusedNodeData" @formSubmitted="clickSubmit"
      :formLabel="formLabel" />
  </div>
  <div v-if="formType === 'gui-slider-component'" Class="containeright" id="right-pane-form" style="height: 50%">
    <!-- for Gui Slider Node -->
    <GuiSlider :opened="showSidePanel" :focusedNodeData="focusedNodeData" @formSubmitted="clickSubmit"
      :formLabel="formLabel" />
  </div>
  <div v-if="formType === 'slider-slider'" Class="containeright" id="right-pane-form" style="height: 50%">
    <GuiSlider :opened="showSidePanel" :focusedNodeData="focusedNodeData" @formSubmitted="clickSubmit"
      :formLabel="formLabel" />
  </div>
  <div v-if="formType === 'component-controller'" Class="containeright" id="right-pane-form" style="height: 50%">
    <!-- for Controller Node -->
    <GuiComponent :opened="showSidePanel" :focusedNodeData="focusedNodeData" @formSubmitted="clickSubmit"
      :formLabel="formLabel" />
  </div>
  <div v-if="formType === 'controller-component'" Class="containeright" id="right-pane-form" style="height: 50%">
    <!-- for Robot, and Robot Controller Node -->
    <Component :opened="showSidePanel" :focusedNodeData="focusedNodeData" @formSubmitted="clickSubmit"
      :formLabel="formLabel" />
  </div>
  <div v-if="formType === 'robot-component'" Class="containeright" id="right-pane-form" style="height: 50%">
    <!-- for Robot, and Robot Controller Node -->
    <Component :opened="showSidePanel" :focusedNodeData="focusedNodeData" @formSubmitted="clickSubmit"
      :formLabel="formLabel" />
  </div>
  <div v-if="formType === 'photo-frame-component'" Class="containeright" id="right-pane-form" style="height: 50%">
    <!-- for Image, and Image Controller Node -->
    <ControllerComponent controllerType="image-controller" :opened="showSidePanel" :focusedNodeData="focusedNodeData"
      @formSubmitted="clickSubmit" :formLabel="formLabel" />
  </div>
  <div v-if="formType === 'video-controller-component'" Class="containeright" id="right-pane-form" style="height: 50%">
    <!-- for Video, and Video Controller Node -->
    <ControllerComponent controllerType="video-controller" :opened="showSidePanel" :focusedNodeData="focusedNodeData"
      @formSubmitted="clickSubmit" :formLabel="formLabel" />
  </div>
  <div v-if="formType === 'audio-controls-component'" Class="containeright" id="right-pane-form" style="height: 50%">
    <!-- for Video, and Video Controller Node -->
    <ControllerComponent controllerType="audio-controller" :opened="showSidePanel" :focusedNodeData="focusedNodeData"
      @formSubmitted="clickSubmit" :formLabel="formLabel" />
  </div>
  <div v-if="formType === 'comp_name-custom'" Class="containeright" id="right-pane-form" style="height: 50%">
    <!-- for Robot, and Robot Controller Node -->
    <NewComponent :opened="showSidePanel" :focusedNodeData="focusedNodeData" @formSubmitted="clickSubmit"
      :formLabel="formLabel" />
  </div>
</template>
