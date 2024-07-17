<script setup>
import { defineProps, defineModel, ref, onMounted } from "vue";
import { useVueFlow } from "@vue-flow/core";
import { clickPreview, downloadApk, viewTab } from "../../../utils";
import Cookies from "js-cookie";
import VueCookies from 'vue-cookies';

defineProps({
  focusedNodeData: Object,
});

const baseUrl = import.meta.env.VITE_BACKEND_BASE_URL;

const userCookie = Cookies.get("userid");
const userData = userCookie || "";

const { toObject } = useVueFlow();

const descriptionType = defineModel("descriptionType", { required: true });
const token = VueCookies.get('token');

const iframeSrc = ref('');

onMounted(() => {
  // Set the iframe src
  setIframeSrc();
});

function setIframeSrc() {
  const jwtToken = VueCookies.get('token');
  
  // Uncomment below line on server side
  // const domain = import.meta.env.VITE_FRONTEND_BASE_URL;
  // document.cookie = `jwtToken=${jwtToken}; path=/; domain=${domain}`;
  document.cookie = `jwtToken=${jwtToken}; path=/`;
  
  // Set the iframe src
  iframeSrc.value = userData
    ? `${baseUrl}/public/projects/users/${userData}/index.html`
    : '/iframe-window-not-found';
}
</script>

<template>
  <div
    id="rightpanel"
    class="col-md-3"
    style="
      height: 87vh;
      overflow-y: hidden;
      overflow-x: hidden;
      background-color: #EBEEE0 !important;
      padding: 0;
    "
  >
    <div
      class="row embed-responsive embed-responsive-16by9 z-depth-1-half"
      style="height: 40%; margin-top: 5px; margin-right: 1px; margin-left: 2px"
    >
    <iframe
      id="ifremere"
      ref="vrframe"
      class="embed-responsive-item"
      :src="iframeSrc"
      allowfullscreen
      style="padding: 0"
    ></iframe>
    </div>
    <div class="row btns-group">
      <div class="text-center col-md-4" style="padding-bottom: 5px">
        <b-button
          type="button"
          class="btn btn-success btn-xs btn-save"
          @click="clickPreview(toObject)"
          style="height: auto; width: 50%; margin-top: 5px"
          title="Click to Save scene"
          ><img
            src="../../../assets/logo/csave.png"
            class="img-responsive fit-image"
          />
        </b-button>
      </div>
      <div class="text-center col-md-4" style="padding-bottom: 5px">
        <b-button
          type="button"
          class="btn btn-primary btn-xs btn-view"
          @click="viewTab(baseUrl, userCookie, token)"
          style="height: auto; width: 50%; margin-top: 5px"
          title="Click to View in Tab"
          ><img
            src="../../../assets/logo/cview.png"
            class="img-responsive fit-image"
          />
        </b-button>
      </div>
      <div class="text-center col-md-4" style="padding-bottom: 5px">
        <b-button
          type="button"
          class="btn btn-warning btn-xs btn-apk"
          @click="downloadApk(baseUrl, userCookie)"
          style="height: auto; width: 50%; margin-top: 5px"
          title="Click to Download APK"
        >
          <img
            src="../../../assets/logo/cdownload.png"
            class="img-responsive fit-image"
          />
        </b-button>
      </div>
    </div>
    <DescriptionPanel
      :focusedNodeData="focusedNodeData"
      v-model:descriptionType="descriptionType"
    />
  </div>
</template>

<style scoped>
.preview-h {
  background-color: #ffffff !important;
  margin-top: 0px;
  margin-bottom: -3px;
  padding: 8px 20px 5px 20px;
  height: 30px;
  display: flex;
  justify-content: start;
  align-items: center;
  cursor: default;
  font-weight: 600;
  color: black;
}
.btns-group div b-button {
  margin-top: 20px !important;
  display: flex;
  margin: auto;
  border-radius: 7px;
}

.btns-group div b-button img {
  width: 65px;
  margin: auto !important;
}

.btn-save {
  background-color: rgba(27, 158, 62, 0.6) !important;
}
.btn-view {
  background-color: rgba(88, 86, 214, 0.6) !important;
}
.btn-apk {
  background-color: rgba(249, 177, 21, 0.6) !important;
}

.btn-save:hover {
  background-color: rgba(27, 158, 62, 0.75) !important;
}
.btn-view:hover {
  background-color: rgba(88, 86, 214, 0.75) !important;
}
.btn-apk:hover {
  background-color: rgba(249, 177, 21, 0.75) !important;
}
* {
  font-family: Arial, Helvetica, sans-serif !important;
  font-size: 14px;
  text-transform: capitalize;
}
</style>
