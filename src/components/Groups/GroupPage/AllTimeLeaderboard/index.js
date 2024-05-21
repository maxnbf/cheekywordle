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
    backgroundColor: theme.palette.common.white,
    color: theme.palette.common.black,
    paddingLeft: 0,
    // padding: 3,
    // paddingTop: 12,
    // paddingBottom: 12,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
    paddingLeft: 0,
    // padding: 3,
    // paddingTop: 12,
    // paddingBottom: 12,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];

const AllTimeLeaderboard = ({ allTimeScores }) => {
  return (
    <TableContainer component={Box}>
      <Table aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell style={{ paddingLeft: "16px" }}>
              User
            </StyledTableCell>
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
        <TableBody>
          {allTimeScores.map((row) => (
            <StyledTableRow key={row.userId}>
              <StyledTableCell
                style={{ paddingLeft: "16px" }}
                component="th"
                scope="row"
              >
                {row.userId.substring(0, 18)}
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
