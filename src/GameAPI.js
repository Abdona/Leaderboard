import fetch from 'cross-fetch';

export const createGame = async () => {
  const res = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/', {
    method: 'POST',
    body: JSON.stringify({
      name: 'My ScoreBoard',
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
  const resParse = await res.json();
  return resParse;
};

export const getGamescore = async (gameId) => {
  const res = await fetch(`https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${gameId}/scores`);
  const resParse = res.json();
  const scores = await resParse.result;
  return scores;
};

export const addScore = async (userName, userScore) => {
  await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/', {
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
