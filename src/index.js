import './style.css';
import creatHtml from './fsfsaf.js';
import { getGamescore, addScore } from './GameAPI.js';

const refreshButt = document.getElementById('refreshbutt');
refreshButt.addEventListener('click', async () => {
  const scores = await getGamescore();
  creatHtml(scores.result);
});

const submButt = document.getElementById('submbutt');
submButt.addEventListener('click', async () => {
  const userName = document.getElementById('username');
  const userScore = document.getElementById('userscore');
  alert(await addScore(userName.value, userScore.value));
  userName.value = '';
  userScore.value = '';
});