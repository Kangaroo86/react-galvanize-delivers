export default function getMenuItems() {
  return fectch('/data/menu-items.js').then(response => response.json());
}
