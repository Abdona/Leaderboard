/* mimick the Leaderboadr API */
// eslint-disable-next-line import/prefer-default-export

// const score = () => {
//   const scores = {
//     Abdulrahman: 50,
//     Amr: 60,
//     Ali: 70,
//     Manuel: 55,
//   };

//   return scores;
// };

// module.exports = score;

// Fetching Scores from the API
// const fetch = require('cross-fetch');
// // eslint-disable-next-line class-methods-use-this
// fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/', {
//   method: 'POST',
//   body: JSON.stringify({
//     name: 'My ScoreBoard',
//   }),
//   headers: {
//     'Content-type': 'application/json; charset=UTF-8',
//   },
// }).then((res) => res.json()).then((res) => console.log(JSON.stringify(res.result)));

const Game = require('./LeaderScore.js');

const newGame = new Game();

console.log (newGame.Create());