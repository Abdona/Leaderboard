import score from './Scores.js';
import './style.css';

let flag = true;
const list = document.getElementById('listcontainer');
Object.keys(score()).forEach((key) => {
  const listelem = document.createElement('li');
  listelem.innerText = `${key} ${score()[key]}`;
  if (flag === false) {
    listelem.style.backgroundColor = '#DCDCDC';
  }
  list.appendChild(listelem);
  flag = !flag;
});