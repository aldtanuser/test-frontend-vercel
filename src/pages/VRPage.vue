<script setup>
import { useVueFlow } from "@vue-flow/core";
import Cookies from "js-cookie";
import { ref } from "vue";
import { flowSave, logout } from "../utils";
import Swal from "sweetalert2";
import { store } from '../store/store.js';

const { findNode, toObject } = useVueFlow();

const userCookie = Cookies.get("userid");
const userProfile = userCookie || "";

var focusedNode = null;
var focusedNodeData = ref([""]);
var formType = ref("none");
var descriptionType = ref("none");
var formLabel = ref("none");
const showSidePanel = ref(false);

// START: for open description section, and side-panel
const setShow = () => {
  showSidePanel.value = true;
};

function openForm(e) {
  focusedNode = e.node;
  const data = JSON.parse(e.node.data);
  data.id = e.node.id;
  focusedNodeData.value = data;
  //const type=e.node.class.slice(e.node.class.indexOf('__') + 7);
  formType.value = e.node.formType;
  formLabel.value = e.node.label;
  setShow();
}

function openDescription(e) {
  const data = JSON.parse(e.node.data);
  data.id = e.node.id;
  focusedNodeData.value = data;
  descriptionType.value = e.node.descriptionType;
  formLabel.value = e.node.label;
}
// END: for open description section, and side-panel

function clickSubmit() {
  if (focusedNode != null) {
    console.log("New focusedNode", focusedNode)
    focusedNode.data = JSON.stringify(focusedNodeData.value);
    if (focusedNodeData.value.properties.name !== undefined) {
      focusedNode.label = focusedNodeData.value.properties.name;
    }
    focusedNode.id = focusedNodeData.value.id;
    formType.value = "none";
    // const type = JSON.parse(focusedNode.data);
    const focusedNodeDataValues = JSON.parse(focusedNode.data);

    if (focusedNodeDataValues.category === "collider-check") {
      var src = focusedNodeDataValues.properties.src;
      src = src.replace(/#/g, ""); // Replace '#' with ''.
      const node = findNode(src);
      if (node) {
        const data = JSON.parse(node.data);
        // changed here
        const ke = "draggable-component";
        data.properties[ke] = "true";
        node.data = JSON.stringify(data);
      } else {
        console.error("Node not found for src:", src);
        Swal.fire({
          title: "Not found",
          text: "Node not found for src.",
          icon: "question",
        });
      }
    } else if (focusedNodeDataValues.category === "component") {
      console.log(focusedNodeDataValues.type)
      if (focusedNodeDataValues.type === "hand-controls-setup") {
        var src = focusedNodeDataValues.properties.src;
        src = src.replace(/#/g, ""); // Replace '#' with ''.
        const node = findNode(src);
        if (node) {
          const data = JSON.parse(node.data);
          // changed here
          const ke = "grabbable";
          data.properties[ke] = "";
          node.data = JSON.stringify(data);
        } else {
          console.error("Node not found for src:", src);
          Swal.fire({
            title: "Not found",
            text: "Node not found for src.",
            icon: "question",
          });
        }
      }

    } else if (focusedNodeDataValues.category === "function") {
      var src = focusedNodeDataValues.src;
      if (focusedNodeDataValues.src !== undefined) {
        //src=src.replace(/#/g,'');
        console.log("function src " + src);
        const node = findNode(src);
        const data = JSON.parse(node.data);
        console.log("data" + data);
        const key = focusedNodeDataValues.type;
        console.log("key :" + key);
        //const d=JSON.parse(node.data);
        console.log(focusedNodeDataValues.properties);

        const animationProperties = focusedNodeDataValues.properties;
        delete animationProperties.name;
        const animationString = Object.keys(animationProperties)
          .map((property) => `${property}: ${animationProperties[property]}`)
          .join("; ");

        data.properties[key] = animationString;

        console.log(data);
        //console.log(JSON.parse(d))
        console.log(JSON.stringify(data));
        node.data = JSON.stringify(data);
        console.log("node data" + node.data);
      }
    } else if (focusedNodeDataValues.category === 'control') {
      console.log('I am a contoller');
      const entity = document.createElement('a-plane');
      entity.setAttribute('id', "base");
      entity.setAttribute('color', nodeData.properties.color);
      entity.setAttribute('width', nodeData.properties.width);
      entity.setAttribute('height', nodeData.properties.height);
      entity.setAttribute('position', nodeData.properties.position);
      if (nodeData.type === 'true') {
        entity.setAttribute('material', `shader: standard; transparent: true; opacity:${nodeData.properties.opacity};`);
      }
      scene.appendChild(entity);
      planePositions.push(nodeData.properties.position);
    }
    // if (type.category === "component") {
    //   console.log("inside of component");
    //   const data = JSON.parse(focusedNode.data);
    //   const key = focusedNodeData.value.type;
    //   data.properties = {};

    //   const componentProperties = focusedNodeData.value.properties;
    //   delete componentProperties.name;
    //   const componentString = Object.keys(componentProperties)
    //     .map((property) => `${property}: ${componentProperties[property]}`)
    //     .join("; ");

    //   data.properties[key] = componentString;
    //   console.log("okk");
    //   focusedNode.data = JSON.stringify(data);
    // }
  }

  console.log("toObject", toObject().nodes);
  //console.log(JSON.parse(toObject))
  //console.log(JSON.stringify(toObject()))
  flowSave(toObject);
  clickPreview();
}

function clickPreview() {
  console.log("preview");
  console.log(toObject());
  console.log(toObject().nodes);
  //excuteJs(toObject().nodes.map(item => item.data))
  const jsonArray = toObject().nodes.map((item) => item.data);
  //excuteJs(toObject().nodes)
  // Parse each JSON string into a JavaScript object
  console.log("array:" + jsonArray);

  const jsonObjects = jsonArray.map((jsonString) => JSON.parse(jsonString));
  console.log("jsonObjects:" + jsonObjects);
}

function clickFlow() {
  if (formType !== "none") {
    formType.value = "none";
  }
}

function saveAndLogout() {
  flowSave(toObject);
  logout();
}
</script>

<template>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" />
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/sweetalert2@10.16.6/dist/sweetalert2.min.css" />
  <div class="vr-page">
    <div class="container-fluid">
      <div class="row" style="
          padding: 10px 0px 10px 15px;
          background-color: #EFF0F1;
          border-bottom: 2px solid #D3D2C7;
        ">
        <div class="col-md-2" style="background-color: #ffffff00">
          <RouterLink to="/"><img src="../assets/logo/aldtanlogo.webp" class="img-responsive fit-image"
              style="max-width: 100%; height: 7vh;" /></RouterLink>
        </div>
        <div class="col-md-6"></div>
        <div class="col-md-4">
          <div class="col-md-3"></div>
          <div class="col-md-12" style="padding-top: 8px">
            <div class="col-md-9 d-flex user-profile">
              <p class="user-profile-label d-flex">
                <i class="fa-solid fa-user" style="transform: translateY(3px)"></i>
              </p>

              <p class="user-profile-value" id="userCookie">
                {{ userProfile }}
              </p>
            </div>
            <div class="col-md-3 text-right">
              <button class="btn btn-danger" style="font-size: 16px; color: white" @click="saveAndLogout">
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <LeftPanel />
        <VueFlowPanel :openDescription="openDescription" :openForm="openForm" :clickFlow="clickFlow" />
        <RightPanel :focusedNodeData="focusedNodeData" v-model:descriptionType="descriptionType" />
        <SidePanel :showSidePanel="showSidePanel" :focusedNodeData="focusedNodeData" :formLabel="formLabel"
          :clickSubmit="clickSubmit" v-model:formType="formType" />
      </div>
    </div>
    <!-- <Footer /> -->
  </div>
</template>

<style scoped>
.user-profile {
  margin-top: 5px;
  color: #000000;
  font-size: 15px;
  display: flex;
  justify-content: end;
}

.user-profile .user-profile-label {
  background-color: #b6b8b896;
  font-weight: 900;
  color: rgba(0, 0, 0, 0.759);
  padding: 5px 10px;
  margin-top: -5px;
  border-radius: 4px;
  height: 33px;
}

.user-profile .user-profile-value {
  font-weight: 500;
  padding: 2px 5px;
  margin-top: -2px;
  border-radius: 3px;
  text-transform: lowercase;
}

* {
  font-family: Arial, Helvetica, sans-serif !important;
  font-size: 14px;
  text-transform: capitalize;
}
</style>
<style>
.vr-page {
  text-transform: uppercase;
  font-family: "JetBrains", monospace;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #3d7e50;
  font-size: 18px;
  font-weight: bold;
  margin: 0;
}
</style>
