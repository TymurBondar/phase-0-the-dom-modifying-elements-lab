// Write your code here!
const el = document.getElementById("main");
el.remove();

const newHeader = document.createElement("h1");

newHeader.id = 'victory';
newHeader.textContent = 'Tymur Bondar is the champion';

document.body.appendChild(newHeader);