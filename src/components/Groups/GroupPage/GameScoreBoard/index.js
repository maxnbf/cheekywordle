import React from "react";
import { Box, Typography } from "@mui/material";

const getEmoji = (letter, index, correctWord, guessedWord) => {
  if (correctWord[index] === letter) {
    return "🟩"; // Correct letter in the correct position
  } else if (correctWord.includes(letter)) {
    return "🟨"; // Correct letter in the wrong position
  } else {
    return "⬛"; // Incorrect letter
  }
};

const GameScoreBoard = ({ guessedWords, correctWord }) => {
  return (
    <Box>
      {guessedWords.map((guessedWord, i) => (
        <Box key={i}>
          {guessedWord.split("").map((letter, j) => (
            <Typography
              key={j}
              variant="h6"
              component="span"
              sx={{ marginRight: "3px", lineHeight: "1.15" }}
            >
              {getEmoji(letter, j, correctWord, guessedWord)}
            </Typography>
          ))}
        </Box>
      ))}
    </Box>
  );
};

export default GameScoreBoard;
