<script setup>
import { defineEmits, defineProps, ref, watch, onMounted, onBeforeUnmount, computed } from "vue";

const props = defineProps({
  objectType: String,
  opened: Boolean,
  focusedNodeData: Object,
  formLabel: String,
});

const emits = defineEmits(["formSubmitted"]);

var receivedFocusedNodeData = props.focusedNodeData;
var receivedFormLabel = props.formLabel;
var receivedObjectType = props.objectType;

console.log("receivedObjectType", receivedObjectType)

const isModalOpen = ref(props.opened);

function closeModal() {
  isModalOpen.value = false;
}

function saveModal() {
  receivedFocusedNodeData.properties.id = receivedFocusedNodeData.id;
  emits("formSubmitted");
  closeModal();
}

watch(
  () => props.objectType,
  (newType) => {
    if ('others' !== props.objectType) {
      receivedFocusedNodeData.type = props.objectType;
    }
  },
  { immediate: true } // This makes sure the watch is executed immediately with the current value
);

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
  <aside ref="sidebarRef" class="sidebar_container common-css-div" :class="isModalOpen && 'active'">
    <div class="form-content">
      <h1 class="form-heading">
        Edit {{ receivedObjectType || receivedFormLabel.toString().split(":")[1] }} Node
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
      <div class="modal-body d-flex flex-column">
        <div class="row">
          <div class="input-row gap-2 d-flex justify-content-between">
            <div class="input-row-col-2" v-if="receivedObjectType === 'others'">
              <label class="col-md-2" for="type">Select</label>
              <select class="col-md-6 select" id="type" v-model="receivedFocusedNodeData.type">
                <option value="dodecahedron">Dodecahedron</option>
                <option value="octahedron">Octahedron</option>
                <option value="icosahedron">Icosahedron</option>
                <option value="ring">Ring</option>
                <option value="torus">Torus</option>
                <option value="torus-knot">TorusKnot</option>
              </select>
            </div>
            <div class="input-row-col-2" v-else>
              <label class="col-md-2" for="node-name">Select</label>
              <input type="text" class="col-md-1" id="node-name" disabled v-model="receivedObjectType" />
            </div>
            <div class="input-row-col-2">
              <label class="col-md-2" for="name">Node_Name</label>
              <input type="text" class="col-md-1" id="name" v-model="receivedFocusedNodeData.properties.name" />
            </div>
          </div>
        </div>

        <div class="row" v-if="receivedFocusedNodeData.type === 'gltf-model'">
          <!-- Defaul obejct form type -->
          <div class="input-row gap-2 d-flex justify-content-between">
            <div class="input-row-col-2">
              <label class="col-md-2" for="pos">Position</label>
              <input type="text" class="col-md-1" id="pos" v-model="receivedFocusedNodeData.properties.position" />
            </div>
            <div class="input-row-col-2">
              <label class="col-md-2" for="scal">Scale</label>
              <input type="text" class="col-md-1" id="scal" v-model="receivedFocusedNodeData.properties.scale" />
            </div>
          </div>

          <div class="input-row gap-2 d-flex justify-content-between">
            <div class="input-row-col-2">
              <label class="col-md-2" for="rot">Rotation</label>
              <input type="text" class="col-md-1" id="rot" v-model="receivedFocusedNodeData.properties.rotation" />
              <input type="text" class="col-md-1" id="src" v-model="receivedFocusedNodeData.properties.src" readonly
                style="visibility: hidden" />
            </div>
            <div class="input-row-col-2">
            </div>
          </div>
          <div class="input-row gap-2 d-flex justify-content-between" style="justify-content: flex-start !important;">
            <div class="gap-2 d-flex">
              <label class="col-checkbox-name" style="width: fit-content !important;" for="class">Super hands
                interaction</label>
              <input type="checkbox" class="col-checkbox" style="width: fit-content !important;" id="class"
                v-model="classCheckbox" />
            </div>
            <div class="gap-2 d-flex">
              <label class="col-checkbox-name" style="width: fit-content !important;" for="hand-rotation">Hand
                rotation</label>
              <input type="checkbox" class="col-checkbox" style="width: fit-content !important;" id="hand-rotation"
                v-model="handRotationCheckbox" />
            </div>
          </div>
        </div>
        <div class="row">
          <!-- Change the form according to the selected 3D object's type -->
          <component :is="receivedFocusedNodeData.type" :focusedNodeData="focusedNodeData" />
        </div>
      </div>
      <!-- END: Object Type form  -->
    </div>
  </aside>
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
  padding: 0 !important;
  border-radius: 15px !important;
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
