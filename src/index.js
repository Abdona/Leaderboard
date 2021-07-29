import './style.css';
import creatHtml from './fsfsaf.js';
import { getGamescore } from './GameAPI.js';

const refreshButt = document.getElementById('refreshbutt');
refreshButt.addEventListener('click', async () => {
  const scores = await getGamescore();
  creatHtml(scores.result);
});