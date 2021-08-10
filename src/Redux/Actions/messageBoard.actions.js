import { messageBoardConstants } from "../Constants/messageBoard.constants";

export const messageBoardActions = {
  success,
  warning,
  error,
  clear,
};
/* 
{
    showMsgBorad:true,
    type:success,
    topic:main topic,
    body:some content
}
*/
function success(messageCont) {
  console.log(messageCont);
  return { type: messageBoardConstants.SUCCESS, messageCont };
}
function warning(messageCont) {
  return { type: messageBoardConstants.WARNING, messageCont };
}
function error(messageCont) {
  return { type: messageBoardConstants.ERROR, messageCont };
}
function clear() {
  return { type: messageBoardConstants.CLEAR };
}
