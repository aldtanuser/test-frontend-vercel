<script setup>
import { useMouseInElement } from "@vueuse/core";
import { computed, ref } from "vue";
import headerImageP from "../../assets/images/landing-page/h-par.webp";
import headerImage from "../../assets/images/landing-page/pricingrbg.webp";
const target1 = ref(null);
const target2 = ref(null);

const {
  elementX: elementX1,
  elementY: elementY1,
  isOutside: isOutside1,
  elementHeight: elementHeight1,
  elementWidth: elementWidth1,
} = useMouseInElement(target1);

const {
  elementX: elementX2,
  elementY: elementY2,
  isOutside: isOutside2,
  elementHeight: elementHeight2,
  elementWidth: elementWidth2,
} = useMouseInElement(target2);

const cardTransform1 = computed(() => {
  const MAX_ROTATION = 6;
  const rX = (
    MAX_ROTATION / 2 -
    (elementX1.value / elementHeight1.value) * MAX_ROTATION
  ).toFixed(2); //handles x-axis
  const rY = (
    (elementY1.value / elementHeight1.value) * MAX_ROTATION -
    MAX_ROTATION / 2
  ).toFixed(2); //handles y-axis

  return isOutside1.value
    ? ""
    : `perspective(${elementWidth1.value}px) rotateX(${rX}deg) rotateY(${rY}deg)`;
});

const cardTransform2 = computed(() => {
  const MAX_ROTATION = 35;
  const rX = (
    MAX_ROTATION / 2 -
    (elementX2.value / elementHeight2.value) * MAX_ROTATION
  ).toFixed(2); //handles x-axis
  const rY = (
    (elementY2.value / elementHeight2.value) * MAX_ROTATION -
    MAX_ROTATION / 2
  ).toFixed(2); //handles y-axis

  return isOutside2.value
    ? ""
    : `perspective(${elementWidth2.value}px) rotateX(${rX}deg) rotateY(${rY}deg)`;
});
</script>

<template>
  <div class="parallax__group hero-container">
    <div>
      <div class="header-gallery">
        <img
          :src="headerImageP"
          alt=""
          class="header-image header-imag-p"
          ref="target1"
          :style="{
            transform: cardTransform1,
            transition: 'transform 0.25s ease-out',
          }"
        />
        <img
          :src="headerImage"
          alt=""
          class="header-image header-image-bg-removed"
          ref="target2"
          :style="{
            transform: cardTransform2,
            transition: 'transform 0.25s ease-out',
            zIndex: 50,
            opacity: 1,
          }"
        />
      </div>
      <!-- <video
        loop
        autoplay
        playbackRate="0.5"
        muted
        style="border-radius: 10px"
        class="header-video"
        ref="target"
        :style="{
          transform: cardTransform2,
          transition: 'transform 0.25s ease-out',
        }"
      >
        <source :src="headerVid" type="video/mp4" />
        Your browser does not support the video tag.
      </video> -->
      <!-- <div class="parallax__layer sky"></div> -->
      <div class="parallax__layer hero-text">
        <div class="year-container" style="position: relative">
          <p style="position: sticky; top: 0; margin-top: -100px;" class="boujee-text">
            ARE YOU <br /><span class="fancy" style="font-size: 11vw;">READY?</span>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Comfortaa:wght@300..700&display=swap");
.parallax__group {
  position: relative;
  min-height: 100vh;
  width: 100vw;
  transform-style: preserve-3d;
  transform: translateY(-100px);
}

.hero-container {
  /* background: url(/public/pricing.webp); */
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}

.header-gallery {
  margin-top: -80px !important;
  transition: transform 0.4s ease-in-out;
  transform: scale(1.1);
}

.header-imag-p {
  transform: scale(1.1);
}

.header-image-bg-removed {
  /* position: absolute; */
  margin: -320px auto 100px auto !important;
  display: flex;
  width: 70% !important;
  z-index: 50 !important;
  height: auto;
}

.header-imag-p {
  object-fit: cover !important;
  z-index: -2;
}

.header-image {
  position: sticky;
  top: 10;
  left: 0;
  width: 100%;
  height: auto;
  z-index: -1;
  -webkit-mask-image: linear-gradient(to top, transparent 10%, black 100%);
  mask-image: linear-gradient(to top, transparent 10%, black 100%);
}

.header-video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: auto;
  opacity: 0.2;
  z-index: -1;
  filter: blur(20px);
}

@media (min-width: 768px) {
  .header-image {
    position: sticky;
    top: 0;
  }
}

.parallax__layer {
  position: absolute !important;
  
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}

.sky {
  /* background: url("../pricing.webp") no-repeat center; */
  background-size: cover;
  transform: translateZ(-600px) scale(3);
  z-index: 1;
  opacity: 0.05;
}

.hero-text ul {
  margin-right: 150px;
  margin-top: 200px;
}

.year-container {
  /* display: flex; */
  margin: 0px auto -10px auto;
  padding: 387px 150px 367px 150px;
}

.year-container p {
  align-items: center;
  justify-content: center;
  color: #ffffffbd;
  font-family: "Work Sans", sans-serif;
  font-weight: 900;
  font-size: 8vw;
  text-transform: uppercase;
  text-align: center;
  line-height: 1;
}

.year-container .fancy {
  color: #00a080; /* Fallback color */
  background-image: url("data:image/svg+xml,%3Csvg width='2250' height='900' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg%3E%3Cpath fill='%2300A080' d='M0 0h2255v899H0z'/%3E%3Ccircle cx='366' cy='207' r='366' fill='%2300FDCF'/%3E%3Ccircle cx='1777.5' cy='318.5' r='477.5' fill='%2300FDCF'/%3E%3Ccircle cx='1215' cy='737' r='366' fill='%23008060'/%3E%3C/g%3E%3C/svg%3E%0A");
  background-size: 110% auto;
  background-position: center;
  background-repeat: no-repeat;
  font-weight: 900;
  color: transparent;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  text-fill-color: transparent;
}

.year-container img {
  width: 1000px;
  opacity: 0.5;
}

.year-container h1 {
  font-family: Bebas, sans-serif !important;
  font-weight: 400;
  font-size: 12.5rem;
  color: wheat;
}

.hero-text {
  position: sticky;
  /* top: 1110 !important; */
  height: auto;
  background: linear-gradient(
    rgba(105, 210, 252, 0.103) 0%,
    rgba(0, 0, 0, 0.25) 86%,
    rgba(1, 0, 0, 0.25) 100%
  );
  /* background-size: cover; */
  transform: translateZ(0) scale(1);
  z-index: 7;
  -webkit-mask-image: linear-gradient(to top, transparent 10%, black 100%);
  mask-image: linear-gradient(to top, transparent 10%, black 100%);
}



@keyframes textShine {
  0% {
    background-position: 0% 50%;
  }
  100% {
    background-position: 100% 50%;
  }
}

p {
  font-size: clamp(2.8rem, 1.5vw, 3rem);
  font-weight: bold;
  margin: 5px;
  background: linear-gradient(
    to right,
    #cb9ad4 20%,
    #e9d185 30%,
    #6fd4ff 70%,
    #d38beb 80%
  );
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  text-fill-color: transparent;
  background-size: 500% auto;
  animation: textShine 5s ease-in-out infinite alternate;
}
</style>
