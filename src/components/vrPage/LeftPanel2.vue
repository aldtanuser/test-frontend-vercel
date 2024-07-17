<!-- Unused -->
<script setup>
import Cookies from "js-cookie";
import { ref } from "vue";
import "./assets/main.css";
import { initialElements } from "./leftPanelItems.js";

let userData = "";
// Access the 'userCookie' value from the cookie
const userCookie = Cookies.get("userid");

// Check if the cookie exists and set it to the userData variable
if (userCookie) {
  userData = userCookie;
}

function onDragStart(event, node) {
  if (event.dataTransfer) {
    event.dataTransfer.setData("application/vueflow", JSON.stringify(node));
    event.dataTransfer.effectAllowed = "move";
  }
}

const elements = ref(initialElements);
</script>

<template>
  <div
    id="leftpanel"
    class="col-md-2"
    style="
      max-height: 87vh;
      padding-top: 15px;
      background-color: rgba(250, 250, 250, 1);
      overflow-y: scroll;
      overflow-x: hidden;
    "
  >
    <div
      v-for="element in elements"
      :key="element.id"
      :class="(element.class, col - md - 2)"
      :style="element.style"
      :label="element.label"
      :draggable="true"
      @dragstart="onDragStart($event, element)"
    >
      {{ element.label }}
    </div>
  </div>
</template>
