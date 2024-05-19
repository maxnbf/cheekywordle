import axios from "axios";

export const getTodaysGame = (gameNumber) => {
  return new Promise((resolve, reject) => {
    axios
      .get(`http://localhost:3000/api/user/todaysGame/${gameNumber}`)
      .then((res) => {
        console.log("getting todays progress", res);
        resolve(res.data);
      })
      .catch((err) => {
        console.log("failed", err);
        reject(err);
      });
  });
};

export const updateTodaysGame = (gameNumber, newGuess) => {
  return new Promise((resolve, reject) => {
    axios
      .post(`http://localhost:3000/api/user/updateTodaysGame`, {
        gameNumber,
        newGuess,
      })
      .then((res) => {
        console.log("updating todays progress", res);
        resolve(res.data);
      })
      .catch((err) => {
        console.log("failed", err);
        reject(err);
      });
  });
};

export const getTodaysScoresByGroup = (gameNumber, groupKey) => {
  return new Promise((resolve, reject) => {
    axios
      .get(
        `http://localhost:3000/api/group/todaysScores/${groupKey}/${gameNumber}`
      )
      .then((res) => {
        console.log("getting todays progress for the group", res);
        resolve(res.data);
      })
      .catch((err) => {
        console.log("failed", err);
        reject(err);
      });
  });
};
