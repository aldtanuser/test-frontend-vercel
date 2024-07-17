import Swal from "sweetalert2";

function onSave(toObject) {
  const parsedFlow = toObject();
  const jsonString = JSON.stringify(parsedFlow);

  const blob = new Blob([jsonString], { type: "application/json" });

  const a = document.createElement("a");
  a.href = window.URL.createObjectURL(blob);
  a.download = "vr_scene.json";
  a.click();
  window.URL.revokeObjectURL(a.href);
  a.remove();
}

// START: Download and Upload flow json file.
export function downloadFlowJson(toObject) {
  Swal.fire({
    title: "Are you sure Download file?",
    showDenyButton: false,
    showCancelButton: true,
    confirmButtonText: "Download",
  }).then((result) => {
    if (result.isConfirmed) {
      onSave(toObject);
      Swal.fire("Downloaded!", "", "success");
    }
  });
}

export const handleUploadFlowJson = (
  event,
  setNodes,
  setEdges,
  setViewport
) => {
  //   const flow = ref(null);
  const selectedFile = event.target.files[0];
  if (selectedFile) {
    const reader = new FileReader();
    reader.onload = (event) => {
      const jsonStr = event.target.result;
      try {
        const parsedFlow = JSON.parse(jsonStr);
        if (parsedFlow) {
          const [x = 0, y = 0] = parsedFlow.position;
          // flow.value = parsedFlow;
          setNodes(parsedFlow.nodes);
          setEdges(parsedFlow.edges);
          setViewport({ x, y, zoom: parsedFlow.zoom || 0 });
        }
      } catch (error) {
        console.error("Error parsing JSON:", error);
      }
    };
    reader.readAsText(selectedFile);
  } else {
    console.error("No file selected for reading.");
  }
};
// END: Download and Upload flow json file.
