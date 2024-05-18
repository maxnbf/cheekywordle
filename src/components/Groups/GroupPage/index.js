import React, { useEffect, useState } from "react";
import HomeIcon from "@mui/icons-material/Home";
import { useParams, useNavigate } from "react-router-dom";
import Settings from "../../Gameplay/Settings";
import { getGroup } from "../../../actions/groupActions";

export const GroupPage = () => {
  const { id } = useParams();
  const [group, setGroup] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    getGroup(id).then((res) => setGroup(res));
  }, [id]);
  const goHome = () => {
    navigate("/home");
  };

  return (
    <div>
      <div className="navbar flex w-100 justify-between items-center pt-5 py-3 sm:pt-3 text-black dark:text-white">
        <HomeIcon sx={{ cursor: "pointer" }} onClick={goHome} />
        <h1 className="text-3xl font-bold tracking-wider">Group</h1>
        <Settings sx={{ cursor: "pointer" }} />
      </div>
      {group && (
        <>
          <div>{group.groupName}</div>
          <div>
            {group.currentUserCount}/{group.maxUserCount} Members
          </div>
        </>
      )}
    </div>
  );
};
