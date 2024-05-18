import React, { useState } from "react";
import { Modal, Box, Button, TextField, Typography } from "@mui/material";
import { createGroup } from "../../../../actions/groupActions";

const CreateGroups = ({ addGroupToList }) => {
  const [open, setOpen] = useState(false);
  const [groupName, setGroupName] = useState("");
  const [maxPeople, setMaxPeople] = useState("");

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle the form submission here
    console.log("Group Name:", groupName);
    console.log("Max People:", maxPeople);
    createGroup(groupName, maxPeople).then((res) => addGroupToList(res));
    handleClose();
  };

  return (
    <Box
      sx={{
        position: "fixed",
        bottom: 0,
      }}
    >
      <Button
        variant="contained"
        color="primary"
        onClick={handleOpen}
        sx={{ alignSelf: "center", mb: 2 }}
      >
        Create Group
      </Button>

      <Modal open={open} onClose={handleClose}>
        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 400,
            bgcolor: "background.paper",
            boxShadow: 24,
            p: 4,
            display: "flex",
            flexDirection: "column",
            gap: 2,
          }}
        >
          <Typography variant="h6" component="h2">
            Create Group
          </Typography>
          <TextField
            label="Group Name"
            value={groupName}
            onChange={(e) => setGroupName(e.target.value)}
            required
          />
          <TextField
            label="Max People"
            type="number"
            value={maxPeople}
            onChange={(e) => setMaxPeople(e.target.value)}
            required
          />
          <Button type="submit" variant="contained" color="primary">
            Create
          </Button>
        </Box>
      </Modal>
    </Box>
  );
};

export default CreateGroups;
