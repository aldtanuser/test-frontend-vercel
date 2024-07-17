<script setup>
import { ref, watch } from "vue";
import { useRoute } from "vue-router";
import Navbar from "./components/landingPage/Navbar.vue";

const route = useRoute();

const showNavbar = ref(true);
const wrapperClass = ref("wrapper");

watch(route, (to, from) => {
  if (to.path === "/vr") {
    showNavbar.value = false;
  } else if (to.path === "/iframe-window-not-found") {
    showNavbar.value = false;
  } else if (to.path === "/email-verified") {
    showNavbar.value = false;
  } else if (to.path === "/email-failed") {
    showNavbar.value = false;
  } else if (to.path === "/assets-library") {
    showNavbar.value = false;
  } else if (to.path === "/assets-library/images") {
    showNavbar.value = false;
  } else if (to.path === "/assets-library/3d-models") {
    showNavbar.value = false;
  } else if (to.path === "/assets-library/videos") {
    showNavbar.value = false;
  } else if (to.path === "/assets-library/audios") {
    showNavbar.value = false;
  } else {
    showNavbar.value = true;
  }

  if (to.path === "/vr") {
    wrapperClass.value = "wrapper-vr"
  }
});
</script>

<template>
  <div :class="wrapperClass">
    <Navbar v-if="showNavbar" />
    <main>
      <RouterView />
    </main>
  </div>
</template>

<style scoped>
.wrapper {
  height: 100vh;
  width: 100% !important;
  overflow-x: hidden !important;
  overflow-y: auto;
  /* perspective: 10px; */
  background-color: black;
}

.wrapper-vr {
  height: 100vh;
  width: 100% !important;
  overflow-x: hidden !important;
  overflow-y: auto;
  /* perspective: 10px; */
  background-color: #D3D2C7;
}

.wrapper::-webkit-scrollbar {
  display: none;
}

/* Hide scrollbar for IE, Edge and Firefox */
.wrapper {
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}
</style>
