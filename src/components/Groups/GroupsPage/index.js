import HomeIcon from "@mui/icons-material/Home";
import Settings from "../../GameExperience/Settings";
import { useParams, useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import ImageIcon from "@mui/icons-material/Image";
import { useSelector } from "react-redux";
import { getGroups } from "../../../actions/groupActions";
import CreateGroups from "./CreateGroups";

export const GroupsPage = () => {
  const { id } = useParams();

  const navigate = useNavigate();
  const [groups, setGroups] = useState([]);
  const [inviteId, setInviteId] = useState(null);

  const auth = useSelector((state) => state.auth);

  useEffect(() => {
    if (!auth.isAuthenticated) {
      navigate("/login", { state: { groupId: id } });
    }
  }, [auth]);

  useEffect(() => {
    // call get groups
    getGroups().then((res) => {
      console.log(res);
      setGroups(res);
    });

    setInviteId(id);
  }, [id]);

  const acceptInvite = (inviteId) => {
    // joinGroup(inviteId).then((res) => {
    //   setInviteId(null);
    //   setGroups(res.groups);
    // });
  };

  const goToGroup = (groupId) => {
    navigate(`/group/${groupId}`);
  };

  const goHome = () => {
    navigate("/home");
  };

  const addGroupToList = (group) => {
    setGroups([...groups, group]);
  };

  return (
    <div style={{ height: "100%" }}>
      <div className="navbar flex w-100 justify-between items-center pt-5 py-3 sm:pt-3 text-black dark:text-white">
        <HomeIcon onClick={goHome} />
        <h1 className="text-3xl font-bold tracking-wider">GROUPS</h1>
        <Settings />
      </div>
      <hr />
      <List sx={{ width: "100%", bgcolor: "background.paper" }}>
        {inviteId && (
          <>
            <ListItem>
              <ListItemAvatar>
                <Avatar>
                  <ImageIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary={"Wordle Club"} secondary={"6/7 members"} />
              <div onClick={() => acceptInvite(inviteId)}>Accept Invite</div>
            </ListItem>
            <hr />
          </>
        )}
        {groups.map((group) => {
          return (
            <>
              <ListItem onClick={() => goToGroup(group.groupKey)}>
                <ListItemAvatar>
                  <Avatar>
                    <ImageIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary={group.groupName}
                  secondary={`${group.currentUserCount}/${group.maxUserCount} Members`}
                />
              </ListItem>
              <hr />
            </>
          );
        })}
      </List>

      <CreateGroups addGroupToList={addGroupToList} />
    </div>
  );
};
