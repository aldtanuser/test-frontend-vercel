<script setup>
import { onMounted, ref, computed } from "vue";

const baseUrl = import.meta.env.VITE_BACKEND_BASE_URL;
const glbContent = ref([]);
const jpgContent = ref([]);

function scanDefaultDirectory() {
  fetch(`${baseUrl}/api/services/get-default-assets-content`)
    .then((response) => response.json())
    .then((data) => {
      glbContent.value = data.contents.filter((filename) =>
        filename.endsWith(".glb")
      );
      jpgContent.value = data.contents.filter((filename) =>
        filename.endsWith(".jpg")
      );
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}

onMounted(() => {
  scanDefaultDirectory();
});

const glbModels = computed(() => {
  return glbContent.value.map(
    (filename) => `${baseUrl}/public/twin/assets/${filename}`
  );
});

const jpgModels = computed(() => {
  return jpgContent.value.map(
    (filename) => `${baseUrl}/public/twin/assets/${filename}`
  );
});


const notification = ref('');

function copyFilename(filename) {
  navigator.clipboard.writeText(filename.slice(filename.lastIndexOf('/') + 1))
    .then(() => {
      notification.value = 'Copied!';
      setTimeout(() => {
        notification.value = '';
      }, 2000); // Clear notification after 2 seconds
    });
}

function truncateFilename(filename, limit = 15) {
  const name = filename.slice(filename.lastIndexOf('/') + 1);
  return name.length > limit ? name.substring(0, limit) + '...' : name;
}
</script>

<style scoped>
.box {
  display: flex;
}

model-viewer {
  width: 800px;
  height: 500px;
  margin: 0 auto;
}
</style>

<template>
  <div class="d-flex justify-content-between" style="
      padding: 10px 0px 10px 15px;
      background-color: #ffffff;
      border-bottom: 0px solid #013e42;
    ">
    <div class="col-md-2" style="background-color: #ffffff00">
      <RouterLink to="/"><img src="../assets/logo/aldtanlogo.webp" class="img-responsive fit-image"
          style="max-width: 100%; height: 7vh" /></RouterLink>
    </div>
    <div class="nav-links" style="background-color: #ffffff; padding-top: 15px;margin-right: 30px;">
      <RouterLink to="/assets-library">All</RouterLink>
      <RouterLink to="/assets-library/3d-models">3D Model</RouterLink>
      <RouterLink to="/assets-library/images">Images</RouterLink>
      <RouterLink to="/assets-library/videos">Videos</RouterLink>
      <RouterLink to="/assets-library/audios">Audios</RouterLink>
    </div>
  </div>
  <!-- End of navbar -->
  
  <div v-if="notification" class="notification">{{ notification }}</div>
  <div>
    <div class="container container-text">
      <div class="header-content">
        <p><span>Welcome to the Aldtan library!</span> <br />Below, you'll find a collection of assets that are
          readily available for
          use in our system. These assets are provided to enhance your projects and expedite your workflow. Feel free to
          explore and utilize them in your creations.</p>
      </div>
    </div>
  </div>

  <div id="3D-model" style="padding-bottom: 50px;">
    <div class="container container-text">
      <h1 class="heading">GLB Model</h1>
    </div>
    <div class="d-flex justify-content-start flex-wrap container container-cus">
      <div v-for="(src, index) in glbModels" :key="index" class="div-model">
        <model-viewer class="model-views" camera-controls alt="Model" :src="src"></model-viewer>
        <div class="content-div d-flex justify-content-between">
          <p>{{ truncateFilename(src) }}</p>
          <button class="copy-btn" @click="copyFilename(src)"><i class="fa-solid fa-copy fa-lg"
              style="background-color: rgba(240, 248, 255, 0);"></i></button>
        </div>
      </div>
    </div>
  </div>
  <!-- End glb -->
  
</template>

<style scoped>
.notification{
  background-color: #5ca1ac56;
  border: #006170 1px solid;
  border-radius: 5px;
  padding: 5px 15px;
  position: absolute;
  top: 80px;
  right: 30px;
  font-size: 12px;
}
.header-content {
  margin-top: 50px;
  margin-bottom: 50px;
  width: 100%;
}

span {
  font-size: 30px;
  font-weight: 900;
}

.nav-links a {
  text-decoration: none;
  margin-left: 8px;
  background-color: #ffffff;
}

* {
  text-transform: none;
  background-color: aliceblue;
  color: rgb(0, 0, 0);
  line-height: 1.6;
  letter-spacing: .05rem;
  font-size: 12px;
}

.heading {
  color: #006170;
  margin-top: 20px;
  font-size: 18px;
  font-weight: 600;
}

.container-text {
  padding-left: 15px;
}

.container-cus {
  margin-top: 5px;
  text-align: center;
  align-items: center;
  place-content: center;
}

.div-model {
  /* border: 1px solid black; */
  border-radius: 50px;
  margin: 5px 5px;
}

.content-div {
  text-align: left;
  padding: 5px 4px;
  text-transform: capitalize !important;
  background-color: #00617044;
  border-radius: 0 0 8px 8px;
}

.content-div p {
  text-align: left;
  padding: 5px 4px;
  text-transform: capitalize !important;
  background-color: rgba(240, 248, 255, 0);
}

.model-views {
  width: 200px !important;
  height: 250px !important;
  margin: 0 auto !important;
  background-color: #0061700e !important;
  border-radius: 8px 8px 0 0 !important;
}

.copy-btn {
  background-color: rgba(255, 255, 255, 0);
  border-color: rgba(230, 0, 0, 0);
  padding: 0 !important;
  margin: 0 !important;
  height: fit-content;
  width: fit-content;
  transform: translateY(2px);
  color: #006170 !important;
}
</style>
