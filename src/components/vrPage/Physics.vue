<!-- Unused -->
<script setup>
import { defineEmits, defineProps } from "vue";
import "./assets/main.css";

const props = defineProps({
  focusedNodeData: Object,
});

const emits = defineEmits(["formSubmitted"]);

var receivedFocusedNodeData = props.focusedNodeData;

function save() {
  //receivedFocusedNodeData.properties.id = receivedFocusedNodeData.id

  emits("formSubmitted");
}
</script>

<template>
  <div class="row">
    <div class="col-md-12">
      <h4>Physics</h4>
    </div>
    <label class="col-md-2" for="mass">Mass</label>
    <input
      type="text"
      class="col-md-1"
      id="mass"
      v-model="receivedFocusedNodeData.physics.mass"
    />

    <label class="col-md-2" for="velocity">Velocity</label>
    <input
      type="text"
      class="col-md-1"
      id="velocity"
      v-model="receivedFocusedNodeData.physics.velocity"
    />
    <!-- Add more physics properties as needed -->
  </div>

  <div class="row">
    <div class="text-center col-md-12">
      <button id="updateBtn" @click="save" class="btn btn-danger updateBtn">
        Update
      </button>
    </div>
  </div>
</template>
