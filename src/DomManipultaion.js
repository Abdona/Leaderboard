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