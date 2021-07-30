let flag = true;
export function creatHtml(game) {
  const list = document.getElementById('listcontainer');
  list.innerHTML = '';
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

export function creatSubhtml(userName, userScore) {
  const list = document.getElementById('listcontainer');
  const listelem = document.createElement('li');
  listelem.innerText = `${userName} ${userScore}`;
  if (flag === false) {
    listelem.style.backgroundColor = '#DCDCDC';
  }
  list.appendChild(listelem);
  flag = !flag;
}