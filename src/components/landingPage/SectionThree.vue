<script setup>
import img2 from "../../assets/images/landing-page/h3.webp";
import img1 from "../../assets/images/landing-page/h4.webp";
</script>

<template>
  <div class="section-two">
    <div class="parallax__group info-container">
      <div class="text-container scroll-reveal">
        <h3 class="mb-3 csm-heading section-title">
          <span style="font-weight: 900;">Embark on Unforgettable VR Journeys</span>
        </h3>
        <p>
          <span>
            Escape reality and embark on unforgettable adventures with our
            curated selection of VR experiences. Whether you're craving
            adrenaline-pumping thrills or serene escapes, there's something for
            everyone. Dive into the depths of the ocean, soar through space, or
            conquer mythical realms - the possibilities are endless.
          </span>
        </p>
        <!-- <p>- Vincent Van Gogh</p> -->
      </div>
      <div class="image-container">
        <img :src="img1" alt="" class="section-two-images default-image" />
        <img :src="img2" alt="" class="section-two-images hover-image" />
      </div>
    </div>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Meera+Inimai&family=Playwrite+HR:wght@100..400&display=swap');
*{
  font-family: "Meera Inimai", sans-serif;
}
.scroll-reveal span {
  color: hsl(0 0% 100% / 0.2);
  background-clip: text;
  background-repeat: no-repeat;
  background-size: 0% 100%;
  background-image: linear-gradient(90deg, #ff98d7, #ffb4ff);
  animation: scroll-reveal linear forwards;
  animation-timeline: view(y);
  font-weight: 500;
}

.scroll-reveal h3 span {
  animation-range-start: cover -68vh;
  animation-range-end: cover -98vh;
}

.scroll-reveal p span {
  animation-range-start: cover -68vh;
  animation-range-end: cover -35vh;
}

@keyframes scroll-reveal {
  to {
    background-size: 100% 100%;
  }
}
.parallax__group {
  position: relative;
  min-height: 100vh;
  width: 100vw;
  transform-style: preserve-3d;
  transform: translateY(-500px);
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
  margin-bottom: 2.5rem;
  filter: saturate(0.65);
  margin: auto;
  z-index: 10;
}

.info-container h2,
.info-container p {
  margin-bottom: 2rem;
  color: #fff;
}

.info-container p {
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

.section-two {
  margin-top: 100px;
  margin-inline: 50px;
  position: relative;
  /* overflow: hidden; */
  width: 100%;
  height: 100%;
  margin-bottom: 50px;
}

.section-two .info-container {
  margin-left: 70px;
  /* padding-bottom: 1500px !important; */
}

.section-two .info-container .image-container {
  position: relative;
  display: inline-block;
}

.section-two .info-container .image-container img {
  border-radius: 50px;
  -webkit-mask-image: linear-gradient(to top, transparent 10%, black 100%);
  mask-image: linear-gradient(to top, transparent 10%, black 100%);
  filter: blur(0px);
  transition: filter 0.8s ease-in-out;
}

.section-two .info-container .image-container .hover-image {
  opacity: 0.3;
  position: absolute;
  top: 0;
  left: 0;
  transition: opacity 0.8s ease-in-out, transform 0.8s ease-in-out,
    filter 0.8s ease-in-out;
  transform: rotate(-2deg);
  filter: blur(100px);
}

.section-two .info-container .image-container .default-image {
  transform: rotate(0deg);
  opacity: 1;
  filter: blur(0px);
  transition: opacity 0.8s ease-in-out, transform 0.8s ease-in-out,
    filter 0.8s ease-in-out;
}

.section-two .info-container .image-container:hover .default-image {
  transform: rotate(-2deg);
  filter: blur(100px);
  opacity: 0.9;
}

.section-two .info-container .image-container:hover .hover-image {
  transform: rotate(0deg);
  opacity: 1;
  filter: blur(0px);
}

.section-two-images {
  /* width: 200%; */
}
</style>
