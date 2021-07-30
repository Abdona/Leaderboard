export default function creatHtml(game) {
  const list = document.getElementById('listcontainer');
  list.innerHTML = '';
  let flag = true;
  game.forEach((item) => {
    const listelem = document.createElement('li');
    listelem.innerText = `${item.user} ${item.score}`;
    if (flag === false) {
      listelem.style.backgroundColor = '#DCDCDC';
    }
    list.appendChild(listelem);
    flag = !flag;
  });
}