export const mockGroup = {
  groupKey: "71b91077-6dd8-4258-bd74-9bdd63a4a421",
  groupName: "Wordle Club",
  groupOwnerId: "6646d979cc49d103022494f0",
  currentUserCount: 3,
  maxUserCount: 7,
};

export const todaysScores = {
  day: 1064,
  date: "05/20/2024",
  word: "SLATE",
  inProgress: "true",
  players: [
    {
      username: "username4",
      inProgress: "false",
      guesses: ["SMELT", "SLATE"],
    },
    {
      username: "test",
      inProgress: "false",
      guesses: ["SMELT", "STOLE", "SLATE"],
    },
    {
      username: "maxnbf",
      inProgress: "true",
      guesses: ["PLATE", "STOLE", "SLATE"],
    },
    { username: "longer username", inProgress: "true", guesses: [] },
    {
      username: "jfriedman",
      inProgress: "false",
      guesses: [],
    },
  ],
};

export const allTimeGroupLeaderBoardMock = [
  {
    username: "maxnbf",
    totalPlays: 20,
    noPlays: 2,
    losses: 5,
    //          1  2  3  4  5  6  x
    scoreDist: [0, 1, 6, 7, 3, 0, 3],
  },
  {
    username: "jakefriedman",
    totalPlays: 20,
    noPlays: 0,
    losses: 13,
    //          1  2  3  4  5  6  x
    scoreDist: [0, 0, 0, 8, 3, 0, 9],
  },
];
