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

// 1.send a req using api to create a new game
// 2.receive a json from api with the game id
// 3.save game Id for later usage
// 4.send a req to get score info using the id
// 5.receive json with the score data.
// 6.send a new score to the game.