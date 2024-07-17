import Cookies from "js-cookie";
import { flowSave } from "./flowSave";

const baseUrl = import.meta.env.VITE_BACKEND_BASE_URL;

export function clickPreview(toObject) {
  const jsonStringsArray = toObject().nodes.map((item) => item.data);
  const jsonObjectsArray = jsonStringsArray.map((jsonString) => JSON.parse(jsonString));
  excuteJs(jsonObjectsArray);
  flowSave(toObject);
}

function excuteJs(data) {
  const userCookie = Cookies.get("userid");
  const iframe = document.getElementById("ifremere");
  const iframeWindow = iframe.contentWindow;

  fetch(`${baseUrl}/api/user/create-scene?userData=${userCookie}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((data) => {
      iframeWindow.postMessage({ action: "reload" }, "*");
    })
    .catch((error) => {
      iframeWindow.postMessage({ action: "reload" }, "*");
    });
}
