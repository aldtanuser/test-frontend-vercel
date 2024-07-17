<script setup>
import { defineProps, defineModel } from "vue";

const { focusedNodeData } = defineProps({
  focusedNodeData: {
    type: Object,
    default: undefined,
  },
});

const descriptionType = defineModel("descriptionType", { required: true });
</script>

<template>
  <div v-if="descriptionType === 'box-object'">
    <NodeDescription :focusedNodeData="focusedNodeData" />
  </div>
  <div v-if="descriptionType === 'cylinder-object'">
    <NodeDescription :focusedNodeData="focusedNodeData" />
  </div>
  <div v-if="descriptionType === 'cone-object'">
    <NodeDescription :focusedNodeData="focusedNodeData" />
  </div>
  <div v-if="descriptionType === 'tetrahedron-object'">
    <NodeDescription :focusedNodeData="focusedNodeData" />
  </div>
  <div v-if="descriptionType === 'sphere-object'">
    <NodeDescription :focusedNodeData="focusedNodeData" />
  </div>
  <div v-if="descriptionType === 'circle-object'">
    <NodeDescription :focusedNodeData="focusedNodeData" />
  </div>
  <div v-if="descriptionType === 'line-component'">
    <NodeDescription :focusedNodeData="focusedNodeData" />
  </div>
  <div v-if="descriptionType === 'triangle-object'">
    <NodeDescription :focusedNodeData="focusedNodeData" />
  </div>
  <div v-if="descriptionType === 'gltf-model-object'">
    <NodeDescription :focusedNodeData="focusedNodeData" />
  </div>
  <div v-if="descriptionType === 'object'">
    <NodeDescription :focusedNodeData="focusedNodeData" />
  </div>
  <div v-if="descriptionType === 'sky-env'">
    <NodeDescription :focusedNodeData="focusedNodeData" />
  </div>
  <div v-if="descriptionType === 'add-plane-component'">
    <NodeDescription :focusedNodeData="focusedNodeData" />
  </div>
  <div v-if="descriptionType === 'add-wall-component'">
    <NodeDescription :focusedNodeData="focusedNodeData" />
  </div>
  <div v-if="descriptionType === 'add-floor-component'">
    <NodeDescription :focusedNodeData="focusedNodeData" />
  </div>
  <div v-if="descriptionType === 'image-frame-env'">
    <NodeDescription :focusedNodeData="focusedNodeData" />
  </div>
  <div v-if="descriptionType === 'video-player-env'">
    <NodeDescription :focusedNodeData="focusedNodeData" />
  </div>
  <div v-if="descriptionType === 'gltf-model-asset'">
    <NodeDescription :focusedNodeData="focusedNodeData" />
  </div>
  <div v-if="descriptionType === 'obj-model-asset'">
    <NodeDescription :focusedNodeData="focusedNodeData" />
  </div>
  <div v-if="descriptionType === 'image-asset'">
    <NodeDescription :focusedNodeData="focusedNodeData" />
  </div>
  <div v-if="descriptionType === 'video-asset'">
    <NodeDescription :focusedNodeData="focusedNodeData" />
  </div>
  <div v-if="descriptionType === 'video-controller-component'">
    <NodeDescription :focusedNodeData="focusedNodeData" />
  </div>
  <div v-if="descriptionType === 'photo-frame-component'">
    <NodeDescription :focusedNodeData="focusedNodeData" />
  </div>
  <div v-if="descriptionType === 'asset'">
    <NodeDescription :focusedNodeData="focusedNodeData" />
  </div>
  <div v-if="descriptionType === 'add-text-component'">
    <NodeDescription :focusedNodeData="focusedNodeData" />
  </div>
  <div v-if="descriptionType === 'add-link-component'">
    <NodeDescription :focusedNodeData="focusedNodeData" />
  </div>
  <div v-if="descriptionType === 'animation-function'">
    <NodeDescription :focusedNodeData="focusedNodeData" />
  </div>
  <div v-if="descriptionType === 'animation-type-function'">
    <NodeDescription :focusedNodeData="focusedNodeData" />
  </div>
  <div v-if="descriptionType === 'instructional-text-function'">
    <NodeDescription :focusedNodeData="focusedNodeData" />
  </div>
  <div v-if="descriptionType === 'color-change-function'">
    <NodeDescription :focusedNodeData="focusedNodeData" />
  </div>
  <div v-if="descriptionType === 'function-collider-check'">
    <NodeDescription :focusedNodeData="focusedNodeData" />
  </div>
  <div v-if="descriptionType === 'position-change-function'">
    <NodeDescription :focusedNodeData="focusedNodeData" />
  </div>
  <div v-if="descriptionType === 'rotation-change-function'">
    <NodeDescription :focusedNodeData="focusedNodeData" />
  </div>
  <div v-if="descriptionType === 'scale-change-function'">
    <NodeDescription :focusedNodeData="focusedNodeData" />
  </div>
  <div v-if="descriptionType === 'scene-scene'">
    <NodeDescription :focusedNodeData="focusedNodeData" />
  </div>
  <div v-if="descriptionType === 'add-light-component'">
    <NodeDescription :focusedNodeData="focusedNodeData" />
  </div>
  <div v-if="descriptionType === 'camera-scene'">
    <NodeDescription :focusedNodeData="focusedNodeData" />
  </div>
  <div v-if="descriptionType === 'gui-buttons-component'">
    <NodeDescription :focusedNodeData="focusedNodeData" />
  </div>
  <!-- <div v-if="descriptionType === 'gui-button-component'">
    <NodeDescription :focusedNodeData="focusedNodeData" />
  </div>
  <div v-if="descriptionType === 'gui-toggle-button-component'">
    <NodeDescription :focusedNodeData="focusedNodeData" />
  </div> -->
  <!-- <div v-if="descriptionType === 'button-button'">
    <NodeDescription :focusedNodeData="focusedNodeData" />
  </div> -->
  <div v-if="descriptionType === 'control-control'">
    <NodeDescription :focusedNodeData="focusedNodeData" />
  </div>
  <div v-if="descriptionType === 'gui-slider-component'">
    <NodeDescription :focusedNodeData="focusedNodeData" />
  </div>
  <div v-if="descriptionType === 'slider-slider'">
    <NodeDescription :focusedNodeData="focusedNodeData" />
  </div>
  <div v-if="descriptionType === 'component-controller'">
    <NodeDescription :focusedNodeData="focusedNodeData" />
  </div>
  <div v-if="descriptionType === 'controller-component'">
    <NodeDescription :focusedNodeData="focusedNodeData" />
  </div>
  <div v-if="descriptionType === 'robot-component'">
    <NodeDescription :focusedNodeData="focusedNodeData" />
  </div>
  <div v-if="descriptionType === 'comp_name-custom'">
    <NodeDescription :focusedNodeData="focusedNodeData" />
  </div>
</template>
