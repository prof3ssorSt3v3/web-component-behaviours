document.addEventListener('DOMContentLoaded', () => {
  //HTML has loaded
  console.log('Main.js and the DOM are loaded');
});

function hello(ev) {
  console.log(ev);
  console.log('hello from a local function');
}
function goodbye() {
  console.log('goodbye from a local function');
  let bb = document.querySelector('big-bang');
  bb.remove();
}
