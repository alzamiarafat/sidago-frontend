/** Build in-page navigation entries from legal block data. */
export function tocFromBlocks(blocks) {
  if (!Array.isArray(blocks)) {
    return [];
  }
  return blocks
    .filter((b) => b?.type === "h2" && typeof b.id === "string" && b.id.length > 0)
    .map((b) => ({ id: b.id, label: b.text }));
}
