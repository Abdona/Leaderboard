const fetch = require('cross-fetch');

export const createGame = () => {
  const res = fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/', {
    method: 'POST',
    body: JSON.stringify({
      name: 'My ScoreBoard',
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
  const resParse = res.json();
  return resParse.result;
};

export const getGamescore = (gameId) => {
  const res = fetch(`https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${gameId}/scores`);
  const resParse = res.json();
  const scores = resParse.result;
  return scores;
};

export const addScore = (userName, userScore) => {
  fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/', {
    method: 'POST',
    body: JSON.stringify({
      user: userName,
      score: userScore,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
};
