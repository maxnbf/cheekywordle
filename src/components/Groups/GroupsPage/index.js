import HomeIcon from "@mui/icons-material/Home";
import ShareIcon from "@mui/icons-material/Share";
import LoginIcon from "@mui/icons-material/Login";
import Settings from "../../Gameplay/Settings";
import { useParams, useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import ImageIcon from "@mui/icons-material/Image";
import { useSelector } from "react-redux";
import { getGroup, getGroups, joinGroup } from "../../../actions/groupActions";
import CreateGroups from "./CreateGroups";

export const GroupsPage = () => {
  const { id } = useParams();

  const navigate = useNavigate();
  const [groups, setGroups] = useState([]);
  const [inviteGroup, setInviteGroup] = useState(null);

  const auth = useSelector((state) => state.auth);

  useEffect(() => {
    if (!auth.isAuthenticated) {
      navigate("/login", { state: { groupId: id } });
    }
  }, [auth]);

  useEffect(() => {
    // get all the groups, and then the group they are invited to. If eihter fails, show error.
    getGroups().then((groups) => {
      getGroup(id).then((group) => {
        if (
          !groups.some((groupItem) => groupItem.groupKey === group?.groupKey)
        ) {
          setInviteGroup(group);
        }

        setGroups(groups);
      });
    });
  }, [id]);

  const acceptInvite = (inviteId) => {
    joinGroup(inviteId).then((res) => {
      console.log(res);
      setGroups((groups) => [inviteGroup, ...groups]);
      setInviteGroup(null);
    });
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

  const sendInvite = (groupKey) => {
    navigator.clipboard.writeText(`localhost:3007/groups/${groupKey}`);
  };

  return (
    <div style={{ height: "100%" }}>
      <div className="navbar flex w-100 justify-between items-center pt-5 py-3 sm:pt-3 text-black dark:text-white">
        <HomeIcon sx={{ cursor: "pointer" }} onClick={goHome} />
        <h1 className="text-3xl font-bold tracking-wider">GROUPS</h1>
        <Settings sx={{ cursor: "pointer" }} />
      </div>
      <hr />
      <List
        sx={{
          height: "85%",
          overflow: "overlay",
          width: "100%",
          bgcolor: "background.paper",
        }}
      >
        {inviteGroup && (
          <>
            <ListItem>
              <ListItemAvatar>
                <Avatar>
                  <ImageIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary={inviteGroup.groupName}
                secondary={`${inviteGroup.currentUserCount}/${inviteGroup.maxUserCount} Members`}
              />
              <LoginIcon
                sx={{ cursor: "pointer" }}
                onClick={() => acceptInvite(inviteGroup.groupKey)}
              />
            </ListItem>
            <hr />
          </>
        )}
        {groups.map((group) => {
          return (
            <>
              <ListItem>
                <div
                  style={{ display: "contents", cursor: "pointer" }}
                  onClick={() => goToGroup(group.groupKey)}
                >
                  <ListItemAvatar>
                    <Avatar>
                      <ImageIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary={group.groupName}
                    secondary={`${group.currentUserCount}/${group.maxUserCount} Members`}
                  />
                </div>
                <ShareIcon
                  sx={{ cursor: "pointer" }}
                  onClick={() => sendInvite(group.groupKey)}
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
