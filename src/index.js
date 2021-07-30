import './style.css';
import Game from './LeaderScore.js';
import { creatHtml, creatSubhtml } from './DomManipultaion.js';

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
submButt.addEventListener('click', async (e) => {
  e.preventDefault();
  const userName = document.getElementById('username');
  const userScore = document.getElementById('userscore');
  creatSubhtml(userName.value, userScore.value);
  await newGame.addNewscore(userName.value, userScore.value);
  userName.value = '';
  userScore.value = '';
});