import Game from '../src/LeaderScore.js';

describe('test the functionality of class Game', () => {
  test('test create new game', async () => {
    const newgame = new Game();
    const gameId = await newgame.Create();
    expect(gameId).toEqual('Game with ID: FL0xyDKVydcxcMiZHpqU added.');
  });
});