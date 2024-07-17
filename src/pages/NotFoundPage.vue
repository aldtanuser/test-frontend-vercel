<script setup></script>

<template>
  <div class="page-body">
    <div
      class="div-body fs-1 text-uppercase position-absolute top-50 start-50 translate-middle"
    >
      <i class="fa-solid fa-face-sad-cry fa-2xl" style="color: #006170"></i>
      <h1>404: Page Not Found</h1>
      <p>Oops! Looks like this page doesn't exist.</p>
    </div>
  </div>
</template>

<style scoped>
.page-body {
  position: absolute;
  inset: 0;
  background-color: rgb(0, 0, 0);
}

.div-body {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 15px;
}

i {
  margin: auto;
  color: #008ca2;
}

h1 {
  color: #008ca2;
  margin: auto;
}

p {
  margin-top: -5px !important;
  color: #008ca2;
  margin: auto;
  font-size: 15px;
}
</style>
