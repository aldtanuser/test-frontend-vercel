import Cookies from "js-cookie";
const baseUrl = import.meta.env.VITE_BACKEND_BASE_URL;

export function flowRestore(setNodes, setEdges, setViewport) {
  const userCookie = Cookies.get("userid"); // Replace with the actual user ID
  fetch(`${baseUrl}/api/user/get-flow-properties?userData=${userCookie}`)
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw new Error("Network response was not ok.");
    })
    .then((data) => {
      if (Object.keys(data).length !== 0){
      const [x = 0, y = 0] = data.position;
      setNodes(data.nodes);
      setEdges(data.edges);
      setViewport({ x, y, zoom: data.zoom || 0 });}
    })
    .catch((error) => {
      console.error("Error retrieving data:", error);
    });
}
