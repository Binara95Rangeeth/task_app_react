import { messageBoardConstants } from "../Constants/messageBoard.constants";

const initialState = { type: "", topic: "", body: "" };

export function messageBoard(state = initialState, action) {
  switch (action.type) {
    case messageBoardConstants.SUCCESS:
      console.log(action.messageCont);
      return {
        type: "success",
        topic: action.messageCont.topic,
        body: action.messageCont.body,
      };
    case messageBoardConstants.WARNING:
      return {
        type: "warning",
        topic: action.messageCont.topic,
        body: action.messageCont.body,
      };
    case messageBoardConstants.ERROR:
      return {
        type: "error",
        topic: action.messageCont.topic,
        body: action.messageCont.body,
      };
    case messageBoardConstants.CLEAR:
      return initialState;
    default:
      return state;
  }
}
