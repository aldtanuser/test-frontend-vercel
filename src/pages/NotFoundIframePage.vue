<script setup></script>

<template>
  <div class="page-body">
    <div
      class="div-body fs-1 text-uppercase position-absolute top-50 start-50 translate-middle"
    >
      <i class="fa-solid fa-face-sad-cry fa-2xl" style="color: #006170"></i>
      <h1>404: Page Not Found</h1>
      <p>You must log in to your own account.</p>
    </div>
  </div>
</template>

<style scoped>
.page-body {
  position: absolute;
  inset: 0;
  background-color: aliceblue;
}

.div-body {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 5px;
}

i {
  margin: auto;
  color: #006170 !important;
}

h1 {
  color: #006170;
  margin: auto;
  font-size: 17px;
  text-align-last: center;
  text-align: center;
}

p {
  color: #006170;
  margin: auto;
  font-size: 9px;
  text-align-last: center;
  text-align: center;
}
</style>
