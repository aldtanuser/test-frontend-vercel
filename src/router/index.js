import { createRouter, createWebHistory } from "vue-router";
import LandingPage from "../pages/LandingPage.vue";
import LoginPage from "../pages/LoginPage.vue";
import EmailVerifySuccess from "../pages/EmailVerifySuccess.vue";
import EmailVerifyFailed from "../pages/EmailVerifyFailed.vue";
import NotFoundIframePage from "../pages/NotFoundIframePage.vue";
import AssetsLibrary from "../pages/AssetsLibrary.vue";
import AssetsLibraryImages from "../pages/AssetsLibraryImages.vue";
import AssetsLibraryThreeDModel from "../pages/AssetsLibraryThreeDModel.vue";
import AssetsLibraryVideos from "../pages/AssetsLibraryVideos.vue";
import AssetsLibraryAudio from "../pages/AssetsLibraryAudio.vue";
import NotFoundPage from "../pages/NotFoundPage.vue";
import PricingPage from "../pages/PricingPage.vue";
import RegisterPage from "../pages/RegisterPage.vue";
import TestPage from "../pages/TestPage.vue";
import VRPage from "../pages/VRPage.vue";
import { getCookie } from "../services";

const routes = [
  {
    path: "/",
    name: "LandingPage",
    component: LandingPage,
    meta: {
      isAuth: false,
    },
  },
  {
    path: "/vr",
    name: "VRPage",
    component: VRPage,
    meta: {
      isAuth: true,
    },
  },
  {
    path: "/pricing",
    name: "PricingPage",
    component: PricingPage,
    meta: {
      isAuth: false,
    },
  },
  {
    path: "/register",
    name: "RegisterPage",
    component: RegisterPage,
    meta: {
      isAuth: false,
    },
  },
  {
    path: "/login",
    name: "LoginPage",
    component: LoginPage,
    meta: {
      isAuth: false,
    },
  },
  {
    path: "/test",
    name: "TestPage",
    component: TestPage,
    meta: {
      isAuth: false,
    },
  },
  {
    path: "/email-verified",
    name: "EmailVerifySuccess",
    component: EmailVerifySuccess,
    meta: {
      isAuth: false,
    },
  },
  {
    path: "/email-failed",
    name: "EmailVerifyFailed",
    component: EmailVerifyFailed,
    meta: {
      isAuth: false,
    },
  },
  {
    path: "/assets-library",
    name: "AssetsLibrary",
    component: AssetsLibrary,
    meta: {
      isAuth: true,
    },
  },
  {
    path: "/assets-library/images",
    name: "AssetsLibraryImages",
    component: AssetsLibraryImages,
    meta: {
      isAuth: true,
    },
  },
  {
    path: "/assets-library/3d-models",
    name: "AssetsLibraryThreeDModel",
    component: AssetsLibraryThreeDModel,
    meta: {
      isAuth: true,
    },
  },
  {
    path: "/assets-library/videos",
    name: "AssetsLibraryVideos",
    component: AssetsLibraryVideos,
    meta: {
      isAuth: true,
    },
  },
  {
    path: "/assets-library/audios",
    name: "AssetsLibraryAudio",
    component: AssetsLibraryAudio,
    meta: {
      isAuth: true,
    },
  },
  {
    path: "/iframe-window-not-found",
    name: "NotFoundIframePage",
    component: NotFoundIframePage,
    meta: {
      isAuth: false,
    },
  },
  {
    path: "/:catchAll(.*)",
    name: "NotFoundPage",
    component: NotFoundPage,
    meta: {
      isAuth: false,
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  let user = getCookie("userid");
  if (to.matched.some((record) => record.meta.isAuth)) {
    if (!user) {
      next("/login");
    }
  }
  if (user) {
    if (to.matched.some((record) => !record.meta.isAuth)) {
      next("/vr");
    }
  }

  next();
});

export default router;
