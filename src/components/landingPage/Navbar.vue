<script setup>
import logo from "../../assets/images/logo.webp";
</script>

<template>
  <nav class="navbar navbar navbar-expand-lg">
    <RouterLink to="/"><img :src="logo" class="logo" alt="LOGO" /></RouterLink>

    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarText"
      aria-controls="navbarText"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarText">
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a
            class="nav-link active"
            aria-current="page"
            href="https://aldtan.com"
            target="_blank"
            >ALDTAN</a
          >
        </li>
        <!-- <li class="nav-item">
          <RouterLink to="/vr" class="nav-link">VR Creator</RouterLink>
        </li> -->
        <li class="nav-item">
          <RouterLink to="/pricing" class="nav-link">Pricing</RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink to="/login" class="nav-link">Login</RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink to="/register" class="nav-link">Register</RouterLink>
        </li>
      </ul>
    </div>
  </nav>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Meera+Inimai&family=Playwrite+HR:wght@100..400&display=swap');
*{
  font-family: "Meera Inimai", sans-serif;
}
* {
  letter-spacing:.1rem;
  text-transform: uppercase;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 14px;
  text-decoration: none;
}

.logo {
  width: 200px;
  cursor: pointer;
  filter: brightness(0) invert(1);
  transform: translateY(-8px);
}

.navbar {
  color: wheat !important;
  background-color: transparent !important;
  z-index: 10;
  padding-top: 30px !important;
  padding-inline: 50px !important;
}

.nav-link {
  color: white !important;
  text-decoration: none;
  transition: all .5s;
}

.nav-link{
  box-shadow: inset 0 0 0 0 #3a7d9668;
  color: #54b3d6;
  /* margin: 0 -.25rem; */
  padding: .15rem .9rem !important;
  border-radius: 50px;
}

.nav-link:hover {
  /* color: rgb(213, 103, 103) !important; */
  box-shadow: inset 100px 0 0 0 #54b3d635;
  color: white;
  text-decoration: none;
}

.navbar-nav {
  position: absolute;
  right: 0;
  margin-right: 50px !important;
  margin-top: -20px;
}

.navbar-nav .nav-item .nav-link {
  margin-left: 15px !important;
}
</style>
