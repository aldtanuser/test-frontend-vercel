<script setup>
import { defineEmits, defineProps } from "vue";
import "../../../../../assets/main.css";

const props = defineProps({
  focusedNodeData: Object,
});

const emits = defineEmits(["formSubmitted"]);

var receivedFocusedNodeData = props.focusedNodeData;

function save() {
  receivedFocusedNodeData.properties.id = receivedFocusedNodeData.id;

  emits("formSubmitted");
}
</script>

<template>
  <div class="row">
    <div class="col-md-12">
      <h4>Function Type</h4>
    </div>
  </div>

  <div class="row">
    <label class="col-md-2" for="type">Select Function</label>
    <select class="col-md-6 select" id="type" v-model="receivedFocusedNodeData.type">
      <option value="event-set__enter">mouse enter</option>
      <option value="event-set__leave">mouse leave</option>
      <option value="event-set__tarcol">click</option>
      <option value="none" selected>None</option>
    </select>
  </div>
  <div>
    <component :is="receivedFocusedNodeData.type" :message="focusedNodeData" />
  </div>

  <div class="row">
    <div class="col-md-12 text-center">
      <button id="updateBtn" @click="save" class="btn btn-danger updateBtn">
        Update
      </button>
    </div>
  </div>
</template>
