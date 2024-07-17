<script setup>
import { useMotion } from "@vueuse/motion";
import { ref } from "vue";
import vrvid from "../../assets/images/landing-page/vrvid.webp";
// import vrvid from "../../assets/images/landing-page/vrvid.mp4";
const targetEl = ref();

useMotion(targetEl, {
  initial: {
    opacity: 0,
    scale: 0.5,
    y: 50,
  },
  visibleOnce: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      // type: 'spring',
      type: "keyframes",
      stiffness: 250,
      damping: 25,
      mass: 0.5,
      ease: "easeIn",
      y: {
        delay: 0,
      },
      scale: {
        duration: 1500,
      },
    },
  },
});
</script>

<template>
  <div class="parallax__group info-container">
    <!-- <video loop autoplay muted playbackRate="0.6" style="border-radius: 10px; margin:auto" ref="targetEl">
      <source :src="vrvid" type="video/mp4" />
      Your browser does not support the video tag.
      </video> -->
    <img :src="vrvid" alt="" style="border-radius: 10px; margin:auto">
    <div class="cus-container">
      <section class="one">
        <div>
          <div class="text-container">
            <h3 class="mb-3 csm-heading" style="font-weight: 900;">
              Unlock the Boundless Potential of Virtual Reality
            </h3>
            <p>
              Immerse yourself in the captivating world of Virtual Reality (VR)
              with <b>ALDTAN-VR Creator</b>. Whether you're a student eager to
              explore educational opportunities or an enthusiast seeking
              thrilling VR experiences, you've come to the right place.
            </p>
            <!-- <p>- Vincent Van Gogh</p> -->
          </div>
        </div>
      </section>
      <section class="two">
        <div>
          <div class="text-container">
            <h3 class="mb-3 csm-heading" style="font-weight: 900;">
              Experience Education Like Never Before
            </h3>
            <p>
              Step into a realm where learning knows no bounds. With VR
              technology, education transcends traditional boundaries, offering
              immersive and interactive experiences that bring subjects to life.
              Explore ancient civilizations, journey to the far reaches of the
              universe, or dissect complex biological structures - all from the
              comfort of your own home.
            </p>
            <!-- <p>- Vincent Van Gogh</p> -->
          </div>
        </div>
      </section>
      <section class="three">
        <div>
          <div class="text-container">
            <h3 class="mb-3 csm-heading" style="font-weight: 900;">From Classroom to Cosmos</h3>
            <p>
              Our platform provides a diverse range of educational VR content,
              curated to enhance learning across various disciplines. Engage in
              hands-on experiments, collaborate with peers in virtual
              classrooms, and delve into interactive simulations that make
              learning a thrilling adventure.
            </p>
            <!-- <p>- Vincent Van Gogh</p> -->
          </div>
        </div>
      </section>
      <section class="four">
        <div>
          <div class="text-container">
            <h3 class="mb-3 csm-heading " style="font-weight: 900; transform: translateX(-100px); transform: translateY(30px);">Begin Your Exploration</h3>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Meera+Inimai&family=Playwrite+HR:wght@100..400&display=swap');
*{
  font-family: "Meera Inimai", sans-serif;
}
.text-container{
  width: 520px;
  max-width: 520px;
}

.four .text-container h3{
  color: hsl(0 0% 100% / 0.2);
  background-clip: text;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  background-image: linear-gradient(90deg, #ffabe3, #9858ff);
  font-weight: 500;
  font-size: 100px;
  margin-bottom: 60px !important;
}

.cus-container {
  scroll-snap-type: y mandatory;
  overflow-y: scroll;
  overflow-x: hidden;
  height: 100vh;
  width: 100%;
  transform: translateZ(50px);
  margin-top: px;
  /* margin-bottom: 67px !important; */
  -ms-overflow-style: none;
  scrollbar-width: none;
}

.cus-container::-webkit-scrollbar {
  display: none;
}

section {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  scroll-snap-align: start;
}

.parallax__group {
  position: relative;
  min-height: 100vh;
  width: 100vw;
  transform-style: preserve-3d;
  transform: translateY(-350px);
}

.csm-heading {
  font-size: 50px;
  font-weight: 500;
  color: #d8c0ff;
}

.text-container p:nth-of-type(1) {
  font-weight: 400;
  font-size: 0.75rem;
  margin: 1rem 2.5rem;
}

.text-container p:nth-of-type(2) {
  font-size: 0.6rem;
  margin-bottom: 3rem;
}

@media (min-width: 760px) {
  .text-container p:nth-of-type(1) {
    font-size: 1rem;
    width: 75%;
    margin: 1rem 0;
  }

  .text-container p:nth-of-type(1) {
    font-size: 0.86rem;
  }
}

.info-container {
  position: relative;
  z-index: 8;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: auto;
  padding-top: 150px;
}

.info-container::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: url("../../assets/images/landing-page/h2.webp") no-repeat center;
  background-size: cover;
  filter: blur(100px);
  z-index: -1;
}

.info-container video {
  width: 75%;
  filter: saturate(0.65);
  margin: auto auto 30rem auto;
  z-index: 10;
  border-radius: 10px 10px 10px 10px !important;
}

.info-container img {
  width: 75%;
  filter: saturate(0.65);
  margin: auto auto 30rem auto;
  z-index: 10;
  border-radius: 10px 10px 10px 10px !important;
}

.info-container h2,
.info-container p {
  margin-bottom: 1rem;
  color: #fff;
}

.info-container p{
  font-size: 14px !important;
}

@media (min-width: 760px) {
  .info-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 3rem;
    align-items: center;
    text-align: left;
  }

  .info-container video {
    justify-self: end;
    width: 75%;
  }
}

.info-container video {
  position: sticky;
  top: 0;
}
</style>
