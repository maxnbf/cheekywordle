import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  Paper,
} from "@mui/material";
import GameScoreBoard from "../GameScoreBoard";

const TodaysScores = ({ todaysScores }) => {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>
              <Typography variant="h6" fontWeight="bolder">
                Player
              </Typography>
            </TableCell>
            <TableCell align="right">
              <Typography variant="h6" fontWeight="bolder">
                Today's Score
              </Typography>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {todaysScores.players.map((player) => {
            let children;
            console.log(player.inProgress);
            if (player.guesses.length > 0) {
              children = (
                <GameScoreBoard
                  guessedWords={player.guesses}
                  correctWord={todaysScores.word}
                />
              );
            } else {
              children = "Hasn't started";
            }

            return (
              <TableRow key={player.userId}>
                <TableCell component="th" scope="row">
                  {player.userId}
                </TableCell>
                <TableCell sx={{ justifyContent: "right", display: "flex" }}>
                  {children}
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TodaysScores;
