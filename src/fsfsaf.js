export default function creatHtml(game) {
  game.forEach((item) => {
    let flag = true;
    const list = document.getElementById('listcontainer');
    const listelem = document.createElement('li');
    listelem.innerText = `${item.user} ${item.score}`;
    if (flag === false) {
      listelem.style.backgroundColor = '#DCDCDC';
    }
    list.appendChild(listelem);
    flag = !flag;
  });
}
// const fetch = require('cross-fetch');

// fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/Zl4d7IVkemOTTVg2fUdz/scores/').then((res) => res.json()).then((res) => console.log(res.result[0].user));
