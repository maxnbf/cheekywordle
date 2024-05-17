import axios from "axios";

export const setAuthToken = (token) => {
  if (token) {
    // Apply authorization token to every request if logged in
    axios.defaults.headers.common["Authorization"] = "Bearer " + token;
  } else {
    // Delete auth header
    delete axios.defaults.headers.common["Authorization"];
  }
};

export const getTodaysWordle = async () => {
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const day = String(today.getDate()).padStart(2, "0");

  const formattedDate = `${year}-${month}-${day}`;
  console.log(formattedDate);
  const url = `https://www.nytimes.com/svc/wordle/v2/${formattedDate}.json`;

  const response = await fetch(url);
  const data = await response.json();
  return data.solution;
};

// POSTS
// SIGN IN
// SIGN UP
// CREATE GROUP
// name of group
// password
// player limit

// return success with custom url invite
// UPLOAD STATS
// all stats on leaderboard
// TODAYS GAME PROGRESS
// provide current guesses
// subtask - update tournament data

// JOIN GROUP
// provide current user
// provide group
// provide password

// GETS
// TODAYS WORDLE WORD
// local time date

// return wordle
// TODAYS LEADERBOARD
// provide local time date
// provide group name

// return users and their gameplay of the day
// OVERALL ASS LEADERBOARD
// give date

// return ass counts
// MY GAME PROGRESS
// provide local time date

// return list of todays words
// GET TOURNAMENT
// provide local time stamp month
// get all tournament data
