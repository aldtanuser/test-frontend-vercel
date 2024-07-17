<script setup>
import axios from "axios";
import Cookies from "js-cookie";
import { onMounted, ref } from "vue";
import "../../../assets/main.css";
import { initialElements } from "./leftPanelItems.js";

const baseUrl = import.meta.env.VITE_BACKEND_BASE_URL;

function getUserStatus() {
  const userCookie = Cookies.get("userid");
  return userCookie ? userCookie : null;
}
// Function to retrieve user status from cookies or database,
// and update Elements if the user type is pro.
async function getUpdatedElements() {
  const userData = getUserStatus();

  try {
    if (!userData) {
      return JSON.parse(JSON.stringify(initialElements));
    }

    const response = await axios.get(
      // `${baseUrl}/add-aditionalnode?userData=${userData}`
      `${baseUrl}/api/user/get-account-type?userData=${userData}`
    );
    const type = response.data;
    const updatedElements = JSON.parse(JSON.stringify(initialElements));

    if (type === "1year") {
      updatedElements.push({
        id: "4",
        type: "output",
        label: "pro node",
        class: "vue-flow__node-animation",
        deletable: true,
        data: {
          id: "id",
          type: "function",
          category: "animation",
          properties: {
            property: "rotation",
            to: "0 0 0",
            loop: "true",
            dur: "7500",
          },
        },
      });
    }
    return updatedElements;
  } catch (error) {
    console.error("Error fetching user status:", error);
    return JSON.parse(JSON.stringify(initialElements)); // Return default elements on error
  }
}

const elements = ref([]);
const groupedElements = ref({});
const visibility = ref({});

onMounted(async () => {
  elements.value = await getUpdatedElements();
  // START: Collaps component
  elements.value.forEach((element) => {
    if (!groupedElements.value[element.leftPanelCategory]) {
      groupedElements.value[element.leftPanelCategory] = [];
      visibility.value[element.leftPanelCategory] = false; // Initialize visibility state for each type
    }
    groupedElements.value[element.leftPanelCategory].push(element);
  });
  // END: Collaps component
});

function onDragStart(event, node) {
  if (event.dataTransfer) {
    event.dataTransfer.setData("application/vueflow", JSON.stringify(node));
    event.dataTransfer.effectAllowed = "move";
  }
}

// START: Collaps component
function toggleVisibility(type) {
  console.log(type)
  visibility.value[type] = !visibility.value[type];

  // Toggle rotation classes based on visibility
  const icon = document.querySelector(`#icon-${type}`);

  if (visibility.value[type]) {
    icon.classList.remove("fa-rotate-90");
    icon.classList.add("fa-rotate-180");
    icon.classList.add("i-color");
  } else {
    icon.classList.remove("fa-rotate-180");
    icon.classList.add("fa-rotate-90");
    icon.classList.remove("i-color");
  }

  // Change collaps-btn bg color based on visibility
  const collapsBtn = document.querySelector(`#collaps-btn-${type}`);
  if (visibility.value[type]) {
    collapsBtn.classList.add("collaps-btn-color");
  } else {
    collapsBtn.classList.remove("collaps-btn-color");
  }
}
// END: Collaps component
</script>

<template>
  <div id="leftpanel" class="col-md-2 left-panel" style="
      max-height: 87vh;
      padding-top: 15px;
      background-color: rgba(250, 250, 250, 1);
      overflow-y: auto;
      overflow-x: hidden;
    ">
    <div id="collaps-component">
      <div v-for="(typeElements, type) in groupedElements" :key="type">
        <div :id="`collaps-btn-${type}`" class="collaps-btn" color="primary" @click="toggleVisibility(type)">
          <i :id="`icon-${type}`" class="fa-solid fa-angle-up fa-rotate-90"
            style="font-size: 18px; color: black; margin-right: 5px"></i>
          {{ type.replace("-", " ") }}
        </div>
        <CCollapse :visible="visibility[type]">
          <CCard class="mt-3">
            <CCardBody>
              <div v-for="element in typeElements" :key="element.id" :class="[element.class, 'col-md-2']"
                :style="element.style" :label="element.label" :draggable="true"
                @dragstart="onDragStart($event, element)">
                {{ element.label }}
              </div>
            </CCardBody>
          </CCard>
        </CCollapse>
      </div>
    </div>
  </div>
</template>

<style scoped>
.collaps-btn {
  background-color: #ffffff !important;
  padding: 1px 20px;
  margin-top: 2px;
  height: 50px;
  display: flex;
  justify-content: start;
  align-items: center;
  cursor: pointer;
  margin-bottom: 2px;
  font-weight: 600;
  color: black;
}

.collaps-btn:hover {
  background-color: #DAEBF1 !important;
  color: black;
}

.collaps-btn-color {
  background-color: #DAEBF1 !important;
  color: black !important;
}

.collaps-btn-color:hover {
  background-color: #DAEBF1 !important;
}

.i-color {
  color: black !important;
}

.card-body {
  display: grid !important;
}

.card {
  border: 0px solid rgba(0, 0, 0, 0.144);
}

.left-panel {
  margin: 0 !important;
  padding: 0 !important;
  background-color: #EBEEE0 !important;
}
</style>

<style>
/* START: Change scrollbar */
::-webkit-scrollbar {
  width: 11px;
}

::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px rgba(128, 128, 128, 0.1);
  border-radius: 10px;
}

::-webkit-scrollbar-thumb {
  background: rgba(0, 0, 0, 0.18);
  border-radius: 10px;
}

::-webkit-scrollbar-thumb:hover {
  background: rgba(0, 0, 0, 0.21);
}

/* END: Change scrollbar */
</style>
