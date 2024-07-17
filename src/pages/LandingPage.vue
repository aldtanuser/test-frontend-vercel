<script setup>
import Header from "../components/landingPage/Header.vue";
import PricingSection from "../components/landingPage/PricingSection.vue";
import SectionFour from "../components/landingPage/SectionFour.vue";
import SectionThree from "../components/landingPage/SectionThree.vue";
import SectionTwo from "../components/landingPage/SectionTwo.vue";
</script>

<template>
  <Header></Header>
  <SectionTwo></SectionTwo>
  <SectionThree></SectionThree>
  <PricingSection></PricingSection>
  <SectionFour></SectionFour>
</template>

<style scoped>
*{
  line-height: 1.6;
  letter-spacing:.05rem;
}
</style>
