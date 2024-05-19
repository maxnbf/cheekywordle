import React, { useEffect, useState } from "react";
import HomeIcon from "@mui/icons-material/Home";
import { useParams, useNavigate } from "react-router-dom";
import Settings from "../../Gameplay/Settings";
import TodaysScores from "./TodaysScores";
import { getTodaysWord } from "../../../actions/utilActions";
import { getGroup } from "../../../actions/groupActions";
import { getTodaysScoresByGroup } from "../../../actions/gameActions";
import { sortedScores } from "./helper";

export const GroupPage = () => {
  const { id } = useParams();
  const [group, setGroup] = useState();
  const [todaysScores, setTodaysScores] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    getGroup(id).then((res) => setGroup(res));
  }, [id]);

  useEffect(() => {
    getTodaysWord().then((res) => {
      getTodaysScoresByGroup(res.gameNumber, id).then((todaysScoresByGroup) => {
        todaysScoresByGroup = {
          word: res.solution,
          gameNumber: res.gameNumber,
          players: sortedScores(todaysScoresByGroup, res.solution),
        };
        setTodaysScores(todaysScoresByGroup);
      });
    });
  }, []);

  const goHome = () => {
    navigate("/home");
  };

  return (
    <div>
      <div className="navbar flex w-100 justify-between items-center pt-5 py-3 sm:pt-3 text-black dark:text-white">
        <HomeIcon sx={{ cursor: "pointer" }} onClick={goHome} />
        <h1 className="text-3xl font-bold tracking-wider">
          {group ? group.groupName : ""}
        </h1>
        <Settings sx={{ cursor: "pointer" }} />
      </div>
      <hr />
      {todaysScores && <TodaysScores todaysScores={todaysScores} />}
    </div>
  );
};
