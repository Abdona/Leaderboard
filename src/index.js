import './style.css';
import Game from './LeaderScore.js';
import creatHtml from './DomManipultaion.js';

const newGame = new Game();
const creatGame = document.getElementById('newgame');
creatGame.addEventListener('click', async () => {
  await newGame.create();
});

const refreshButt = document.getElementById('refreshbutt');
refreshButt.addEventListener('click', async () => {
  const scores = await newGame.getScores();
  creatHtml(scores.result);
});

const submButt = document.getElementById('submbutt');
submButt.addEventListener('click', async () => {
  const userName = document.getElementById('username');
  const userScore = document.getElementById('userscore');
  await newGame.addNewscore(userName.value, userScore.value);
  userName.value = '';
  userScore.value = '';
});