import axios from "axios";

export const joinGroup = (groupKey) => {
  return new Promise((resolve, reject) => {
    axios
      .post("http://localhost:3000/api/group/join", { groupKey })
      .then((res) => {
        console.log("joinedGroup");
        resolve(res);
      })
      .catch((err) => {
        console.log("failed", err);
        reject(err);
      });
  });
};

export const createGroup = (groupName, maxUserCount) => {
  return new Promise((resolve, reject) => {
    axios
      .post("http://localhost:3000/api/group/create", {
        groupName,
        maxUserCount,
      })
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        console.log("failed", err);
        reject(err);
      });
  });
};

export const getGroup = (groupKey) => {
  return new Promise((resolve, reject) => {
    axios
      .get(`http://localhost:3000/api/group/group/${groupKey}`)
      .then((res) => {
        console.log("getting group", groupKey);
        resolve(res.data);
      })
      .catch((err) => {
        console.log("failed", err);
        reject(err);
      });
  });
};

export const getGroups = () => {
  return new Promise((resolve, reject) => {
    axios
      .get("http://localhost:3000/api/user/groups")
      .then((res) => {
        console.log("getting groups for user");
        resolve(res.data);
      })
      .catch((err) => {
        console.log("failed", err);
        reject(err);
      });
  });
};
