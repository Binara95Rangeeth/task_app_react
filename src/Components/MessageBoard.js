import React, { useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import WarningIcon from "@material-ui/icons/Warning";
import ErrorIcon from "@material-ui/icons/Error";
import CheckBoxIcon from "@material-ui/icons/CheckBox";
import { useDispatch, useSelector } from "react-redux";
import { messageBoardActions } from "../Redux/Actions/messageBoard.actions";

import "./MessageBoard.css";

function MessageBoard() {
  const [msgColor, setMsgColor] = useState("");
  const dispatch = useDispatch();
  const message = useSelector((state) => state.messageBoard);

  useEffect(() => {
    console.log(message);
    let timer = setTimeout(() => {
      dispatch(messageBoardActions.clear());
    }, 3000);
    switch (message.type) {
      case "success":
        setMsgColor("#43d787");
        break;
      case "warning":
        setMsgColor("#ffbb00");
        break;
      case "error":
        setMsgColor("#fa461b");
        break;
      default:
        break;
    }
    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <div className="messageBoard">
      <Box
        p={1}
        mb={1}
        style={{
          width: "97%",
          backgroundColor: "#35353d",
          borderLeft: `5px solid ${msgColor || "#ffbb00"}`,
        }}
      >
        <Grid
          container
          direction="row"
          justifyContent="left"
          alignItems="center"
        >
          <div>
            {message.type === "warning" ? (
              <WarningIcon style={{ color: "#ffbb00" }} />
            ) : (
              ""
            )}
            {message.type === "error" ? (
              <ErrorIcon style={{ color: "#fa461b" }} />
            ) : (
              ""
            )}
            {message.type === "success" ? (
              <CheckBoxIcon style={{ color: "#43d787" }} />
            ) : (
              ""
            )}
          </div>
          <div style={{ marginLeft: "10px" }}>
            {message.topic && (
              <h3 style={{ color: "white" }}>{message.topic}</h3>
            )}
            {message.body && <p style={{ color: "white" }}>{message.body}</p>}
          </div>
        </Grid>
      </Box>
    </div>
  );
}

export default MessageBoard;
