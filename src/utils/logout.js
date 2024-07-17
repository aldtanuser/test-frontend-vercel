import Swal from "sweetalert2";
import VueCookies from "vue-cookies";

export function logout() {
  Swal.fire({
    title: "Are you sure Logout?",
    showDenyButton: true,
    showCancelButton: true,
    showConfirmButton: false,
    denyButtonText: `Logout`,
  }).then(async (result) => {
    if (result.isDenied) {
      VueCookies.remove("userid");
      setTimeout(function () {
        window.location.href = "/";
      }, 1000);
    }
  });
}
