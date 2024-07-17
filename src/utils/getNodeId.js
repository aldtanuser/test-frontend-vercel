export function getNodeId() {
  const currentDate = new Date();
  const nodeId = `node${currentDate.getTime()}`;
  return nodeId;
}
