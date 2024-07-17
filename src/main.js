import "@fortawesome/fontawesome-free/css/all.css";
import "@fortawesome/fontawesome-free/js/all.js";
import "bootstrap-vue/dist/bootstrap-vue.min.css";
import "bootstrap/dist/css/bootstrap.css";

import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./style.css";
import "./assets/node-colors.css";

// -------START: import component
import Footer from "./components/vrPage/Footer.vue";

import LeftPanel from "./components/vrPage/mainWindow/LeftPanel.vue";
import VueFlowPanel from "./components/vrPage/mainWindow/VueFlowPanel.vue";
import RightPanel from "./components/vrPage/mainWindow/RightPanel.vue";

import DescriptionPanel from "./components/vrPage/subWindow/DescriptionPanel.vue";
import SidePanel from "./components/vrPage/subWindow/SidePanel.vue";

import NodeDescription from "./components/vrPage/nodes/description/NodeDescription.vue";

import NewComponent from "./components/vrPage/nodes/form/newComponent/NewComponent.vue";

import Animation from "./components/vrPage/nodes/form/basic/Animation.vue";
import ThreeDModels from "./components/vrPage/nodes/form/basic/ThreeDModels.vue";
import Assets from "./components/vrPage/nodes/form/basic/Assets.vue";
import DefaultGeom from "./components/vrPage/nodes/form/basic/DefaultGeom.vue";
import EnvObjects from "./components/vrPage/nodes/form/basic/EnvObjects.vue";
import Scene from "./components/vrPage/nodes/form/basic/Scene.vue";
import Function from "./components/vrPage/nodes/form/basic/Function.vue";

import ChangePosition from "./components/vrPage/nodes/form/functions/ChangePosition.vue";
import InstructionalText from "./components/vrPage/nodes/form/functions/InstructionalText.vue";
import ChangeRotation from "./components/vrPage/nodes/form/functions/ChangeRotation.vue";
import ChangeScale from "./components/vrPage/nodes/form/functions/ChangeScale.vue";
import Interactive from "./components/vrPage/nodes/form/functions/Interactive.vue";
import ChangeColor from "./components/vrPage/nodes/form/functions/ChangeColor.vue";
import DragAndDrop from "./components/vrPage/nodes/form/functions/DragAndDrop.vue";
import SeperHand from "./components/vrPage/nodes/form/functions/SeperHand.vue";

import GuiButton from "./components/vrPage/nodes/form/gui/GuiButton.vue";
import GuiButtons from "./components/vrPage/nodes/form/gui/GuiButtons.vue";
import GuiToggleButton from "./components/vrPage/nodes/form/gui/GuiToggleButton.vue";
import ControlPanel from "./components/vrPage/nodes/form/gui/ControlPanel.vue";
import GuiComponent from "./components/vrPage/nodes/form/gui/GuiComponent.vue";
import Component from "./components/vrPage/nodes/form/gui/Component.vue";
import ControllerComponent from "./components/vrPage/nodes/form/gui/ControllerComponent.vue";
import GuiSlider from "./components/vrPage/nodes/form/gui/GuiSlider.vue";

import Box from "./components/vrPage/nodes/form/3dObjects/BoxObject.vue";
import Line from "./components/vrPage/nodes/form/3dObjects/LineObject.vue";
import Circle from "./components/vrPage/nodes/form/3dObjects/CircleObject.vue";
import Cone from "./components/vrPage/nodes/form/3dObjects/ConeObject.vue";
import Cylinder from "./components/vrPage/nodes/form/3dObjects/CylinderObject.vue";
import Dodecahedron from "./components/vrPage/nodes/form/3dObjects/DodecahedronObject.vue";
import Icosahedron from "./components/vrPage/nodes/form/3dObjects/IcosahedronObject.vue";
import Octahedron from "./components/vrPage/nodes/form/3dObjects/OctahedronObject.vue";
import Ring from "./components/vrPage/nodes/form/3dObjects/RingObject.vue";
import Sphere from "./components/vrPage/nodes/form/3dObjects/SphereObject.vue";
import Tetrahedron from "./components/vrPage/nodes/form/3dObjects/TetrahedronObject.vue";
import TorusKnot from "./components/vrPage/nodes/form/3dObjects/TorusKnotObject.vue";
import Torus from "./components/vrPage/nodes/form/3dObjects/TorusObject.vue";
import Triangle from "./components/vrPage/nodes/form/3dObjects/TriangleObject.vue";

import ImageController from "./components/vrPage/nodes/form/multimediaController/ImageController.vue";
import VideoController from "./components/vrPage/nodes/form/multimediaController/VideoController.vue";
import AudioController from "./components/vrPage/nodes/form/multimediaController/AudioController.vue";
// -------END: import component

import CoreuiVue from "@coreui/vue";
import CIcon from "@coreui/icons-vue";
import { CAlert } from "@coreui/vue";
import "@coreui/coreui/dist/css/coreui.min.css";
import { useVueFlow } from "@vue-flow/core";

const app = createApp(App);
app.use(CoreuiVue);
app.component("CIcon", CIcon);

app.use(router);

const { findNode, toObject } = useVueFlow();

app.provide("vueFlowContext", {
  findNode,
  toObject,
});

// START: Global Registration
app.component("Footer", Footer);

app.component("LeftPanel", LeftPanel);
app.component("VueFlowPanel", VueFlowPanel);
app.component("RightPanel", RightPanel);

app.component("DescriptionPanel", DescriptionPanel);
app.component("SidePanel", SidePanel);

app.component("NodeDescription", NodeDescription);

app.component("NewComponent", NewComponent);

app.component("Animation", Animation);
app.component("ThreeDModels", ThreeDModels);
app.component("Assets", Assets);
app.component("Animation", Animation);
app.component("DefaultGeom", DefaultGeom);
app.component("EnvObjects", EnvObjects);
app.component("Scene", Scene);
app.component("Function", Function);

app.component("ChangePosition", ChangePosition);
app.component("InstructionalText", InstructionalText);
app.component("ChangeRotation", ChangeRotation);
app.component("ChangeScale", ChangeScale);
app.component("Interactive", Interactive);
app.component("ChangeColor", ChangeColor);
app.component("DragAndDrop", DragAndDrop);
app.component("SeperHand", SeperHand);

app.component("GuiButton", GuiButton);
app.component("GuiButtons", GuiButtons);
// app.component("gui-button-component", GuiButton);
app.component("GuiToggleButton", GuiToggleButton);
app.component("ControlPanel", ControlPanel);
app.component("GuiComponent", GuiComponent);
app.component("Component", Component);
app.component("ControllerComponent", ControllerComponent);
app.component("GuiSlider", GuiSlider);

app.component("box", Box);
app.component("line", Line);
app.component("circle", Circle);
app.component("cone", Cone);
app.component("cylinder", Cylinder);
app.component("dodecahedron", Dodecahedron);
app.component("icosahedron", Icosahedron);
app.component("octahedron", Octahedron);
app.component("ring", Ring);
app.component("sphere", Sphere);
app.component("tetrahedron", Tetrahedron);
app.component("torusKnot", TorusKnot);
app.component("torus", Torus);
app.component("triangle", Triangle);

app.component("image-controller", ImageController);
app.component("video-controller", VideoController);
app.component("audio-controller", AudioController);
// END: Global Registration

// Suppress specific warnings in the custom warning handler.
app.config.warnHandler = (message, vm, trace) => {
  if (/Failed to resolve component: b-button/.test(message)) {
    return;
  }

  // Log or handle other warnings
  console.warn(message, vm, trace);
};

app.mount("#app");

import "bootstrap/dist/js/bootstrap.js";
