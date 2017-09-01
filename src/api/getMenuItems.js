export default function getMenuItems() {
  //return fetch('/data/menu-items.js').then(response => response.json());
  return fetch('/data/menu-items.json').then(response => response.json());
  // .then(collection => {
  //   let data = collection;
  //   return data;
  //   //console.log('result---------', data);
  //   //return data;
  // });
}

//export default getMenuItems;

// module.exports = class NBAScraper {
//   scrape(url) {
//     return fetch(`http://cors-bypass-proxy.axiomlogic.com/${url}`)
//     //return fetch(url)
//     //var fetch(url)
//       .then(response => response.text())
//       .then(html => {
//         const parser = new DOMParser();
//         const doc = parser.parseFromString(html, 'text/html');
//         const rows = doc
//           .querySelector('table')
//           .querySelectorAll('tr[class*="player-"'); //https://en.wikipedia.org/wiki/Cascading_Style_Sheets  //E[foo*="bar"]

//         const teamName = doc
//         .querySelector('b').innerText
//
//         const teamLogo = doc
//         // .querySelector('.teamlogo').src
//         .getElementsByTagName('img')[5].src;
