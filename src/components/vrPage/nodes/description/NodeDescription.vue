<script setup>
import { defineEmits, defineProps } from "vue";

const props = defineProps({
  focusedNodeData: Object,
});

const emits = defineEmits(["formSubmitted"]);

const receivedFocusedNodeData = props.focusedNodeData;
</script>

<template>
  <div class="main-body">
    <h1 class="node-detail-main-header">Selected Node</h1>
    <div class="sub-body">
      <h1 class="node-detail-header">Details</h1>
      <div v-for="(item, key, index) in receivedFocusedNodeData" :key="index">
        <div v-if="typeof item !== 'object'">
          <div class="main-values">
            <div class="key-value">
              <h1 style="text-transform: capitalize;">{{ key }}:</h1>
            </div>
            <div class="item-value">
              <p>{{ item }}</p>
            </div>
          </div>
        </div>
        <div v-if="typeof item === 'object'">
          <!-- <hr> -->
          <h1 class="node-detail-header">{{ key }}</h1>
          <div v-for="(item, key, index) in item" :key="index">
            <div class="main-values">
              <div class="key-value">
                <h1 style="text-transform: capitalize;">{{ key }}:</h1>
              </div>
              <div class="item-value">
                <p>{{ item }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
* {
  text-transform: none;
}
.main-body {
  margin-top: 10px;
}

.sub-body {
  height: 193px !important;
  overflow-y: auto;
  padding-bottom: 10px;
}

.node-detail-main-header {
  padding: 5px 0 5px 30px !important;
  background-color: #ffffff;
  font-size: 16px;
  text-transform: uppercase;
  color: black;
}
.node-detail-header {
  padding: 5px 0 5px 30px !important;
  font-size: 14px;
  text-transform: uppercase;
  background-color: #ffffff;
  color: #006170;
}
.main-values {
  display: flex;
  padding: 0px 30px;
  color: black;
}
.key-value {
  width: 88px !important;
  padding-right: 10px;
  padding-top: 3px !important;
}
h1 {
  font-size: 14px;
  font-weight: 600;
}

p {
  font-size: 14px;
}
</style>
