import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Box } from "@mui/system";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    // backgroundColor: theme.palette.common.black,
    // color: theme.palette.common.white,
    padding: 3,
    paddingTop: 12,
    paddingBottom: 12,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
    padding: 3,
    paddingTop: 12,
    paddingBottom: 12,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    // backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  //   "&:last-child td, &:last-child th": {
  //     border: 0,
  //   },
}));

const AllTimeLeaderboard = ({ allTimeScores }) => {
  return (
    <TableContainer component={Box}>
      <Table aria-label="customized table">
        <TableHead style={{ marginLeft: "20px", paddingRight: 40 }}>
          <TableRow style={{ marginLeft: "20px", paddingRight: 40 }}>
            <StyledTableCell>User</StyledTableCell>
            <StyledTableCell align="right">1</StyledTableCell>
            <StyledTableCell align="right">2</StyledTableCell>
            <StyledTableCell align="right">3</StyledTableCell>
            <StyledTableCell align="right">4</StyledTableCell>
            <StyledTableCell align="right">5</StyledTableCell>
            <StyledTableCell align="right">6</StyledTableCell>
            <StyledTableCell align="right">X</StyledTableCell>
            <StyledTableCell align="right">M</StyledTableCell>
            <StyledTableCell align="right">L</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody style={{ marginLeft: "20px", paddingRight: 40 }}>
          {allTimeScores.map((row) => (
            <StyledTableRow key={row.userId}>
              <StyledTableCell component="th" scope="row">
                {row.userId.substring(10)}
              </StyledTableCell>
              <StyledTableCell align="right">{row.stats[0]}</StyledTableCell>
              <StyledTableCell align="right">{row.stats[1]}</StyledTableCell>
              <StyledTableCell align="right">{row.stats[2]}</StyledTableCell>
              <StyledTableCell align="right">{row.stats[3]}</StyledTableCell>
              <StyledTableCell align="right">{row.stats[4]}</StyledTableCell>
              <StyledTableCell align="right">{row.stats[5]}</StyledTableCell>
              <StyledTableCell align="right">{row.stats[6]}</StyledTableCell>
              <StyledTableCell align="right">{row.gamesMissed}</StyledTableCell>
              <StyledTableCell align="right">{row.losses}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default AllTimeLeaderboard;
