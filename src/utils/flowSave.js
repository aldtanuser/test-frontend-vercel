import Cookies from "js-cookie";

const baseUrl = import.meta.env.VITE_BACKEND_BASE_URL;

export function flowSave(toObject) {
  // localStorage.setItem(flowKey, JSON.stringify(toObject()))
  const userCookie = Cookies.get("userid");
  const dataToSave = toObject();

  fetch(`${baseUrl}/api/user/save-flow-properties?userData=${userCookie}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(dataToSave),
  })
    .then((response) => {
      if (response.ok) {
        console.log("Data saved successfully");
      } else {
        console.error("Error saving data");
      }
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}
