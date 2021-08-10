import React from "react";

import IconButton from "@material-ui/core/IconButton";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import MoreVertIcon from "@material-ui/icons/MoreVert";

import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";

import { useDispatch } from "react-redux";
import { tasksActions } from "../Redux/Actions/tasks.actions";

import { history } from "../Helpers/history";

function OptionMenu(task) {
  const dispatch = useDispatch();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const editTask = () => {
    setAnchorEl(null);
    console.log("edit", task.id);
    //goto edit
    history.push({ pathname: "/update-task", state: task });
    // console.log(task);
  };

  const deleteTask = () => {
    setAnchorEl(null);
    console.log("delete", task.id);
    //api call for deleting
    dispatch(tasksActions.deleteTask({ id: task.id }));
  };
  return (
    <>
      <IconButton onClick={handleClick} style={{ color: "white" }}>
        <MoreVertIcon />
      </IconButton>
      <Menu
        id="long-menu"
        anchorEl={anchorEl}
        keepMounted
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            backgroundColor: "#298C68",
          },
        }}
      >
        <MenuItem onClick={editTask} style={{ padding: "10px" }}>
          <IconButton aria-label="edit" style={{ padding: "0px" }}>
            <EditIcon size="small" style={{ color: "" }} />
          </IconButton>
        </MenuItem>
        <MenuItem onClick={deleteTask} style={{ padding: "10px" }}>
          <IconButton aria-label="delete" style={{ padding: "0px" }}>
            <DeleteIcon size="small" style={{ color: "" }} />
          </IconButton>
        </MenuItem>
      </Menu>
    </>
  );
}

export default OptionMenu;
