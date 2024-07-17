<script setup>
import { Background, BackgroundVariant } from "@vue-flow/background";
import { Panel, Position, VueFlow, useVueFlow } from "@vue-flow/core";
import { nextTick, onMounted, onUnmounted, ref, watch, defineProps } from "vue";
import {
  flowRestore,
  downloadFlowJson,
  handleUploadFlowJson,
  getNodeId,
} from "../../../utils";

const props = defineProps({
  openDescription: Function,
  openForm: Function,
  clickFlow: Function,
});

var openDescription = props.openDescription;
var openForm = props.openForm;
var clickFlow = props.clickFlow;

const {
  findNode,
  onConnect,
  addEdges,
  addNodes,
  project,
  vueFlowRef,
  onNodeDragStop,
  dimensions,
  nodes,
  edges,
  setNodes,
  setEdges,
  toObject,
  setViewport,
} = useVueFlow();

onMounted(() => {
  flowRestore(setNodes, setEdges, setViewport);
});

onNodeDragStop((e) => {
  // console.log("drag stop", e);
});

function onDragOver(event) {
  event.preventDefault();
  if (event.dataTransfer) {
    event.dataTransfer.dropEffect = "move";
  }
}

// function for connect nodes with edge
onConnect((params) => {
  addEdges(params);

  const targetNode = findNode(params.target);
  const sourceNode = findNode(params.source);
  const targetData = JSON.parse(targetNode.data);
  const sourceData = JSON.parse(sourceNode.data);

  if (targetData.category === 'function') {
    if (sourceData.category === 'asset') {
      targetData.properties.path = "#" + params.source;
    } else {
      console.log("Not an asset");
      targetData.properties.src = "#" + params.source;
      targetData.src = params.source;
    }
  } else {
    console.log("Not a function");
    targetData.properties.src = "#" + params.source;
    targetData.src = params.source;
  }

  if (sourceData.category === 'component') {
    sourceData.properties.src = params.target;
    console.log("sourceData.properties", sourceData.properties)
  } else {
    console.log("Not a component");
  }

  sourceNode.data = JSON.stringify(sourceData);
  targetNode.data = JSON.stringify(targetData);
});

// function for Drag and Drop a node from left panel onto flow window
function onDrop(event) {
  const transferredData = JSON.parse(
    event.dataTransfer.getData("application/vueflow")
  );

  const nodeData = JSON.stringify(transferredData["data"]);

  const { left, top } = vueFlowRef.value.getBoundingClientRect();

  const position = project({
    x: event.clientX - left,
    y: event.clientY - top,
  });

  //new node
  const newNode = {
    id: getNodeId(),
    type: `${transferredData["type"]}`,
    position: position,
    label: `Node:${transferredData["label"]}`,
    class: `${transferredData["class"]}`,
    sourcePosition: Position.Right,
    targetPosition: Position.Left,
    data: nodeData,
    formType: `${transferredData["formType"]}`,
    descriptionType: `${transferredData["descriptionType"]}`,
  };

  // Change id of newNode data with newNode id
  const updatedData = JSON.parse(newNode.data);
  updatedData.id = newNode.id;
  newNode.data = JSON.stringify(updatedData);

  addNodes([newNode]);

  // align node position after drop, so it's centered to the mouse
  nextTick(() => {
    const node = findNode(newNode.id);

    const stop = watch(
      () => node.dimensions,
      (dimensions) => {
        if (dimensions.width > 0 && dimensions.height > 0) {
          node.position = {
            x: node.position.x - node.dimensions.width / 2,
            y: node.position.y - node.dimensions.height / 2,
          };
          stop();
        }
      },
      { deep: true, flush: "post" }
    );
  });
}

// START: Remove a node by ID
function removeNodeById(nodeId) {
  const thisNode = findNode(nodeId);
  const data = JSON.parse(thisNode.data);
  if (data.type === "function") {
    var targetNodeId;
    targetNodeId = data.src;
    //targetNodeId = targetNodeId.replace(/#/g,'');
    var key = data.category;
    //if(data.category==='animation'){
    const targetNode = findNode(targetNodeId);

    const objData = JSON.parse(targetNode.data);
    delete objData.properties[key];
    targetNode.data = JSON.stringify(objData);
    //objData.properties=JSON.stringify(objData)
  }
  nodes.value = nodes.value.filter((node) => node.id !== nodeId);
}

// Keydown event handler
const removeNode = (e) => {
  const nodeId = e.target.getAttribute("data-id");
  if (nodeId) {
    removeNodeById(nodeId);
  } else {
    console.error("errors");
  }
};
// END: Remove a node by ID

// START: Download and Upload flow json file.
const fileInputRef = ref(null);
const openFileInput = () => {
  fileInputRef.value.click();
};
// END: Download and Upload flow json file.

const isDropdownOpen = ref(false);

const toggleDropdown = () => {
  isDropdownOpen.value = !isDropdownOpen.value;
};

watch(isDropdownOpen, (newVal) => {
  if (newVal) {
    document.body.addEventListener('click', closeDropdownOnClickOutside);
  } else {
    document.body.removeEventListener('click', closeDropdownOnClickOutside);
  }
});

const closeDropdownOnClickOutside = (event) => {
  const dropdown = document.querySelector('.dropdown');
  if (dropdown && !dropdown.contains(event.target)) {
    isDropdownOpen.value = false;
  }
};
</script>

<template>
  <div class="editor col-md-7" @drop="onDrop" style="height: 87vh; padding: 0; background-color: rgb(151, 234, 197)">
    <Panel position="top-right" class="save-restore-controls" style="font-size: 12px">
      <div class="dropdown">
        <button class="dropbtn" @click="toggleDropdown"><i class="fa-solid fa-ellipsis-vertical"
            style="color: black !important;"></i></button>
        <div class="dropdown-content" v-if="isDropdownOpen">
          <button @click="downloadFlowJson(toObject)">
            <!-- <img src="../../../assets/logo/download.png" class="img-responsive fit-image" /> -->
            Export (.json)
          </button>
          <button id="btn-json-upload" for="fileInput" @click="openFileInput">
            <!-- <img src="../../../assets/logo/upload.png" class="img-responsive fit-image" /> -->
            Import (.json)
          </button>
          <input type="file" id="fileInput" accept=".json" style="display: none"
            @change="handleUploadFlowJson($event, setNodes, setEdges, setViewport)" ref="fileInputRef" />
        </div>
      </div>
    </Panel>
    <VueFlow ref="flowContainer" class="basicflow" @dragover="onDragOver" @keydown.delete="removeNode"
      @node-double-click="openForm" @node-click="openDescription" @click="clickFlow" :default-viewport="{ zoom: 0.2 }"
      :min-zoom="0.2" :max-zoom="4">
      <Background pattern-color="black" />
    </VueFlow>
  </div>
</template>
<style>
.save-restore-controls button:hover {
  transform: scale(105%);
  transition: 0.25s all ease-in-out;
}
</style>
<style scoped>
* {
  font-family: Arial, Helvetica, sans-serif !important;
  font-size: 14px;
  text-transform: capitalize;
}

.basicflow {
  background: #F2F1EF;
}
</style>
<style scoped>
.dropbtn {
  background-color: #d3d2c793;
  border: 1px solid #d3d2c7;
  color: white;
  padding: 2px 10px;
  font-size: 16px;
  border-radius: 5px;
}

.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown-content {
  display: none;
  position: absolute;
  right: 2px;
  position: absolute;
  background-color: #f1f1f1;
  min-width: max-content;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
  border-radius: 5px 5px 5px 5px;
  overflow: hidden;
}

.dropdown-content button {
  border: none;
  height: max-content;
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}

.dropdown-content button:hover {
  background-color: #ddd;
}

.dropdown .dropdown-content {
  display: block;
}

.dropdown:hover .dropbtn {
  background-color: #d3d2c7;
}
</style>