<!-- Unused -->
<script setup>
import Cookies from "js-cookie";
import { defineEmits } from "vue";
import "./assets/main.css";

const emits = defineEmits(["preview"]);
let userData = "";
// Access the 'userCookie' value from the cookie
const userCookie = Cookies.get("userid");

// Check if the cookie exists and set it to the userData variable
if (userCookie) {
  userData = userCookie;
}

function preview() {
  emits("preview");
  console.log("ok");
}
function apk() {
  emits("apk");
}
function view() {
  emits("view");
}

// document.addEventListener('DOMContentLoaded', function () {
//       const dropArea = document.getElementById('dropArea');
//       const folderInput = document.getElementById('uploadFolder');

//       dropArea.addEventListener('dragover', function (e) {
//         e.preventDefault();
//         dropArea.style.border = '2px dashed #333';
//       });

//       dropArea.addEventListener('dragleave', function () {
//         dropArea.style.border = '2px dashed #ccc';
//       });

//       dropArea.addEventListener('drop', function (e) {
//         e.preventDefault();
//         dropArea.style.border = '2px dashed #ccc';

//         const files = e.dataTransfer.files;

//         if (files.length === 0) {
//           alert('Please select a folder.');
//           return;
//         }

//         // Trigger folder upload when files are selected
//         folderInput.files = files;
//         handleFolderUpload(files);
//       });

//       // Open the folder selection dialog when the drop area is clicked
//       dropArea.addEventListener('click', function () {
//         folderInput.click();
//       });

//       // Handle folder selection via the file input
//       folderInput.addEventListener('change', function () {
//         const files = folderInput.files;

//         if (files.length === 0) {
//           alert('Please select a folder.');
//           return;
//         }

//         // Trigger folder upload when files are selected
//         handleFolderUpload(files);
//       });

//       // Handle folder upload logic
//       function handleFolderUpload(files) {
//         const formData = new FormData();

//         // Add each selected file to the FormData object
//         for (let i = 0; i < files.length; i++) {
//           formData.append('folder', files[i]);
//         }

//         // Send the FormData to the server using Fetch API or XMLHttpRequest
//         fetch('/upload', {
//           method: 'POST',
//           body: formData,
//         })
//           .then((response) => response.json())
//           .then((data) => {
//             // Handle the success response
//             console.log(data.message);
//             alert(data.message);
//           })
//           .catch((error) => {
//             // Handle the error response
//             console.error('Error:', error);
//             alert('Error uploading folder.');
//           });
//       }
//     });

document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("openButton").addEventListener("click", function () {
    document.getElementById("popup").style.display = "block";
  });

  // Close the popup window when the "Close" button is clicked
  document.getElementById("closeButton").addEventListener("click", function () {
    document.getElementById("popup").style.display = "none";
  });
});
</script>
<style>
/* Style for the popup window */
.popup {
  display: none;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 20px;
  background-color: #fff;
  border: 1px solid #ccc;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  width: 350px;
  height: 400px;
  border: 2px;
}

/* Style for the close button */
.close-btn {
  background-color: #ff0000;
  color: #fff;
  border: none;
  padding: 5px 10px;
  cursor: pointer;
  position: absolute;
  bottom: 10px;
  right: 20px;
}
</style>

<template>
  <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>

  <!-- Popup window -->
  <div id="popup" class="popup">
    <div
      id="dropArea"
      style="
        width: 300px;
        height: 300px;
        border: 2px dashed #ccc;
        text-align: center;
      "
    >
      <p>Choose a file or Drag it here</p>
      <input
        type="file"
        id="uploadFolder"
        webkitdirectory="true"
        multiple
        style="display: none"
      />
    </div>
    <button id="closeButton" class="close-btn">Close</button>
  </div>

  <div style="text-align: left"><div id="progress"></div></div>

  <div
    class="row"
    style="
      margin-left: 0 px;
      margin-top: 10px;
      border-bottom: 2px solid #013e42;
    "
  >
    <div class="text-left col-md-3" style="padding-bottom: 5px">
      <b-button
        id="openButton"
        type="button"
        class="btn btn-info"
        @click="preview"
        style="height: 100%"
        >Upload</b-button
      >
    </div>
    <div class="text-left col-md-3" style="padding-bottom: 5px">
      <b-button
        type="button"
        class="btn btn-success"
        @click="preview"
        style="height: 100%"
        >Save</b-button
      >
    </div>
    <div class="text-left col-md-3" style="padding-bottom: 5px">
      <b-button
        type="button"
        class="btn btn-primary"
        @click="view"
        style="height: 100%"
        >VIEW IN NEWTAB</b-button
      >
    </div>
    <div class="text-right col-md-3" style="padding-bottom: 5px">
      <button
        type="button"
        class="btn btn-warning"
        @click="apk"
        style="height: 100%; size: 10px"
      >
        DOWNLOAD APK
      </button>
    </div>
  </div>
</template>
