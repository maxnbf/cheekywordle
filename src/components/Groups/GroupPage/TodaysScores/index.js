import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Tabs,
  Tab,
  Typography,
  Paper,
} from "@mui/material";
import GameScoreBoard from "../GameScoreBoard";
import { sortedScores } from "../helper";
import { Box } from "@mui/system";

const TodaysScores = ({ todaysScores }) => {
  const { word, data } = todaysScores;
  const { scores: playerData, lastGameNumbers } = data;

  console.log(word, data);

  const [tab, setTab] = useState(lastGameNumbers.length - 1);
  const [scores, setScores] = useState(playerData[lastGameNumbers.length - 1]);

  const handleChange = (event, newValue) => {
    setTab(newValue);
    setScores(sortedScores(playerData[newValue], word));
  };

  return (
    <>
      <Tabs
        value={tab}
        onChange={handleChange}
        indicatorColor="secondary"
        textColor="inherit"
        variant="scrollable"
        sx={{ justifyContent: "center" }}
      >
        {todaysScores.data.lastGameNumbers.map((number) => {
          return <Tab label={`Game ${number}`} />;
        })}
      </Tabs>
      <hr />
      <TableContainer component={Box}>
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
            {scores.map((player) => {
              let children;
              if (player.guesses.length > 0) {
                children = (
                  <GameScoreBoard
                    guessedWords={player.guesses}
                    correctWord={word}
                  />
                );
              } else {
                children = "Unplayed";
              }

              return (
                <TableRow key={player.userId}>
                  <TableCell component="th" scope="row">
                    {player.userId.substring(0, 18)}
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
    </>
  );
};

export default TodaysScores;
