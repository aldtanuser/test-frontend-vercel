import Swal from "sweetalert2";

export async function downloadApk(baseUrl, userData) {
  const loadingSwal = Swal.fire({
    title: "Building Apk.....",
    allowOutsideClick: false,
    timerProgressBar: true,
    showConfirmButton: false,
    willOpen: () => {
      Swal.showLoading();
    },
  });
  try {
    const response = await fetch(
      `${baseUrl}/api/services/build-apk?userData=${userData}`,
      { method: "POST" }
    );
    if (response.status === 200) {
      loadingSwal.close();
      Swal.fire({
        title: "Are you sure Download apk file?",
        showDenyButton: false,
        showCancelButton: true,
        allowOutsideClick: false,
        confirmButtonText: "Download",
      }).then((result) => {
        if (result.isConfirmed) {
          const downloadLink = document.createElement("a");
          downloadLink.href = `${baseUrl}/api/services/download-apk?userData=${userData}`;
          downloadLink.download = "app-debug.apk"; // Filename for the downloaded file
          downloadLink.click();
        }
      });
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
      });
    }
  } catch (error) {
    console.error("An error occurred:", error);
  }
}
