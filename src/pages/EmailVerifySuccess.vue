<script setup>
function redirectToLogin() {
  window.location.href = "/login";
}
</script>

<template>
  <div class="page-body">
    <div
      class="div-body fs-1 text-uppercase position-absolute top-50 start-50 translate-middle"
    >
      <i class="fa-solid fa-certificate fa-2xl" style="color: #006170"></i>
      <h1>Thanks for your registration</h1>
      <p>
        Congratulations! Your email has been successfully verified. You're all
        set to explore AldtanVR. Welcome aboard!
      </p>

      <button class="log" @click="redirectToLogin">Login</button>
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

.log {
  color: #006170;
  background-color: rgba(255, 255, 255, 1);
  border: 1px solid #006170;
}
button {
  margin-top: 10px !important;
  cursor: pointer;
  border: 0;
  border-radius: 4px;
  font-weight: 600;
  margin: 0 10px;
  width: auto;
  padding: 5px 0 8px 0;
  box-shadow: 0 0 20px rgba(104, 85, 224, 0.2);
  transition: 0.4s;
}
button:hover {
  color: white;
  width: auto;
  box-shadow: 0 0 20px #006170;
  background-color: #006170;
}

* {
  text-transform: none;
}
</style>
