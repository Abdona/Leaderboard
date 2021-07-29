// Fetching Scores from the API
import { createGame, getGamescore, addScore } from './GameAPI.js';

export default class Game {
  // eslint-disable-next-line class-methods-use-this
  async Create() {
    this.gameId = await createGame();
    return this.gameId;
  }

  async getScores() {
    await getGamescore(this.gameId);
  }

  // eslint-disable-next-line class-methods-use-this
  async addNewscore(userName, userScore) {
    await addScore(userName, userScore);
  }
}