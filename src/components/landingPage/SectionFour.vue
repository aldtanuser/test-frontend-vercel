<script setup>
import footerRbg from "../../assets/images/landing-page/footer-rbg.webp";
</script>

<template>
  <div class="vrfeature-section">
    <div class="vrfeature-section-content">
      <h1>VIRTUAL REALITY</h1>
      <br>
      <br>
      <p>
        Ready to embark on an immersive journey like no other? Join us at <b>ALDTAN-VR Creator</b> and unlock the extraordinary possibilities of Virtual
        Reality. Whether you're a student, educator, or VR enthusiast, your
        adventure awaits.
      </p><br>
    </div>
    <img :src="footerRbg" alt="" class="feature-image" />
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Meera+Inimai&family=Playwrite+HR:wght@100..400&display=swap');
*{
  font-family: "Meera Inimai", sans-serif;
}
* {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 14px;
  text-decoration: none;
}

.vrfeature-section {
  text-align: center; /* Center-align the content */
  position: relative;
}

.feature-image {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
  margin-top: 50px;
  opacity: 0.5;
  margin: auto;
  width: 100%;
  max-width: 70%;
  /* transform: scale(.7); */
  height: auto;
  filter: blur(5px);
  transition: filter 0.8s ease-in-out, opacity 0.8s ease-in-out,
    z-index 0.8s ease-in-out;
}

.vrfeature-section .indicator {
  position: absolute;
  bottom: 10;
  right: 10;
  z-index: 20;
  cursor: pointer;
  color: wheat !important;
}

.vrfeature-section:hover .feature-image {
  filter: blur(0px) !important;
  z-index: 10 !important;
  opacity: 1;
}
.vrfeature-section:hover p,
.vrfeature-section:hover h1 {
  filter: blur(1px) !important;
  opacity: 0.2 !important;
}

.vrfeature-section-content p {
  z-index: 10;
  color: wheat;
  margin-inline: 250px;
  transition: opacity 0.8s ease-in-out;
}

.vrfeature-section-content h1 {
  opacity: 0.2;
  padding-top: 150px !important;
  background-clip: text;
  background-image: linear-gradient(
    to right,
    #09f1b8,
    #00a2ff,
    #ff00d2,
    #fed90f
  );
  color: #000119;
  font-size: 30vmin;
  font-weight: 700;
  letter-spacing: calc(1em / 8);
  padding: calc(calc(1em / 16) / 2);
  -webkit-text-stroke-color: transparent;
  -webkit-text-stroke-width: calc(1em / 16);
}
</style>
