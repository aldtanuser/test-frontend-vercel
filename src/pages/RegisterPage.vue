<script setup>
import axios from "axios";
import Swal from "sweetalert2";
import { ref } from "vue";
import { useRouter } from "vue-router";
import bg from "../assets/images/login-page/bg.webp";
import v2 from "../assets/images/login-page/v2.mp4";
import logo from "../assets/images/logo.webp";

const fullName = ref("");
const email = ref("");
const password = ref("");
const passwordConfig = ref("");
const message = ref("");
const router = useRouter();

const baseUrl = import.meta.env.VITE_BACKEND_BASE_URL;

const register = async () => {
  try {
    const response = await axios.post(`${baseUrl}/api/auth/register`, {
      fullName: fullName.value,
      email: email.value,
      password: password.value,
      passwordConfig: passwordConfig.value,
    });
    message.value = response.data.message;

    if (response.data.success) {
      Swal.fire({
        title: "Registration Successful",
        text: response.data.message,
        icon: "success",
      }).then(() => {
        router.push("/login");
      });
    } else {
      Swal.fire({
        icon: "error",
        title: "Registration failed",
        text: response.data.message || "An error occurred during registration",
      });
    }
  } catch (error) {
    console.error(error);

    let errorMessage = "An error occurred during registration";
    if (error.response && error.response.data && error.response.data.message) {
      errorMessage = error.response.data.message;
    }

    Swal.fire({
      icon: "error",
      title: "Registration failed",
      text: errorMessage,
    });
  }
};
</script>

<template>
  <section style="background-color: #000000">
    <img :src="bg" alt="" class="bg-image" />
    <div class="container py-5 h-100">
      <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="col col-xl-10 form-div">
          <div class="card" style="border-radius: 1rem">
            <div class="row g-0">
              <div class="col-md-6 col-lg-5 d-none d-md-block">
                <!-- <img
                  src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img1.webp"
                  alt="login form"
                  class="img-fluid"
                  style="border-radius: 1rem 0 0 1rem"
                /> -->
                <video
                  loop
                  autoplay
                  muted
                  style="border-radius: 10px"
                  class="img-fluid"
                >
                  <source :src="v2" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
              <div class="col-md-6 col-lg-7 d-flex align-items-center">
                <div class="card-body p-4 p-lg-5 text-black">
                  <form @submit.prevent="register">
                    <div class="d-flex align-items-center mb-3 pb-1">
                      <RouterLink to="/"
                        ><img :src="logo" class="logo" alt="LOGO"
                      /></RouterLink>
                    </div>

                    <h5 class="fw-normal mb-3 pb-3" style="letter-spacing: 1px">
                      Sign up now
                    </h5>

                    <div data-mdb-input-init class="form-outline mb-4">
                      <input
                        id="fullName"
                        name="fullName"
                        v-model="fullName"
                        placeholder="Full Name"
                        class="form-control form-control-lg"
                        required
                      />
                      <label class="form-label" for="fullName">Full Name</label>
                    </div>

                    <div data-mdb-input-init class="form-outline mb-4">
                      <input
                        type="email"
                        id="email"
                        v-model="email"
                        placeholder="Email"
                        name="email"
                        required
                        class="form-control form-control-lg"
                      />
                      <label class="form-label" for="email"
                        >Email address</label
                      >
                    </div>

                    <div data-mdb-input-init class="form-outline mb-4">
                      <div class="d-flex gap-3">
                        <div class="flex-fill">
                          <input
                            type="password"
                            v-model="password"
                            placeholder="Password"
                            id="password"
                            name="password"
                            required
                            class="form-control form-control-lg"
                          />
                          <label
                            class="form-label"
                            style="width: fit-content"
                            for="password"
                            >Password</label
                          >
                        </div>
                        <div class="flex-fill">
                          <input
                            type="password"
                            v-model="passwordConfig"
                            id="passwordConfig"
                            name="passwordConfig"
                            placeholder="Confirm Password"
                            required
                            class="form-control form-control-lg"
                          />
                          <label
                            class="form-label"
                            style="width: fit-content"
                            for="passwordConfig"
                            >Re-type Password</label
                          >
                        </div>
                      </div>
                    </div>
                    <div class="msg">
                      <p style="color: tomato" v-if="message">{{ message }}</p>
                    </div>
                    <div class="pt-1 mb-4">
                      <button
                        data-mdb-button-init
                        data-mdb-ripple-init
                        class="btn btn-light btn-lg btn-block submit-btn"
                        type="submit"
                      >
                        Register
                      </button>
                    </div>

                    <p class="mb-4 pb-lg-2 d-flex" style="color: #393f81">
                      Do you have account ? &nbsp;
                      <RouterLink
                        to="/login"
                        class="nav-link"
                        style="color: #393f81"
                        >Login here</RouterLink
                      >
                    </p>
                    <a href="#!" class="small text-muted">Terms of use.</a>
                    <a href="#!" class="small text-muted">Privacy policy</a>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Meera+Inimai&family=Playwrite+HR:wght@100..400&display=swap');
*{
  font-family: "Meera Inimai", sans-serif;
}
* {
  /* font-family: "JetBrains", monospace; */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  font-size: 14px;
  margin: 0;
  text-decoration: none;
}

.card {
  border: 1px solid rgba(85, 44, 126, 0.842);
  box-shadow: inset 0 0 50px rgba(255, 255, 255, 0.1),
    /* inner white */ inset 20px 0 80px rgba(255, 0, 255, 0.1),
    /* inner left magenta short */ inset -20px 0 80px rgba(0, 255, 255, 0.1),
    /* inner right cyan short */ inset 20px 0 300px rgba(255, 0, 255, 0.1),
    /* inner left magenta broad */ inset -20px 0 300px rgba(0, 255, 255, 0.1),
    /* inner right cyan broad */ 0 0 50px rgba(255, 255, 255, 0.1),
    /* outer white */ -10px 0 80px rgba(255, 0, 255, 0.1),
    /* outer left magenta */ 10px 0 80px rgba(0, 255, 255, 0.1); /* outer right cyan */
}

input,
input[type="text"] {
  height: 40px;
  transition: 0.5s;
  background-size: 200% auto;
  border-radius: 10px;
  display: block;
  border-radius: 80px;
  text-decoration: none;
}

.submit-btn {
  margin: 0px 10px 8px 10px;
  height: 40px;
  padding: auto 45px;
  text-align: center;
  text-transform: uppercase;
  transition: 0.5s;
  background-size: 200% auto;
  border-radius: 10px;
  display: block;
  border-radius: 80px;
  font-weight: 700;
  /* width: 250px; */
  margin-inline: auto;
  text-decoration: none;
}

.submit-btn {
  background-image: linear-gradient(
    to right,
    #e64791 0%,
    #d5ffbc 51%,
    #510b8b 100%
  );
  text-shadow: 0 0 20px rgb(128, 21, 21);
  color: black;
  box-shadow: 0 0 0px #eee;
}
.submit-btn:hover {
  background-position: right center;
  color: #fff;
  transition: 0.5s;
  text-decoration: none;
}

.logo {
  width: 150px;
  margin-left: -7px;
  filter: brightness(0) invert(1);
}
.card {
  backdrop-filter: blur(0px);
  background-color: rgba(255, 255, 255, 0.03);
}

form h5,
form label,
form a,
form p {
  color: white !important;
}

form label {
  font-weight: 400;
  padding-left: 10px;
}

.form-div {
  margin: auto !important;
}

.bg-image {
  position: absolute;
  right: 0;
  left: 0;
  width: 100%;
  filter: blur(50px);
  height: 800px;
}

.img-fluid {
  height: 100%;
  object-fit: cover;
  border-radius: 10px 0px 0px 10px !important;
}
h1 {
  color: bisque;
}
h5 {
  font-size: 22px !important;
}
</style>
