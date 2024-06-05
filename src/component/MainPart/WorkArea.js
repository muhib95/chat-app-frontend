import React from "react";
import "./mainpart.css";
import DeleteIcon from "@mui/icons-material/Delete";
import { IconButton } from "@mui/material";
import MessageOther from "./MessageOther";
import MessageSelf from "./MessageSelf";
import SendIcon from '@mui/icons-material/Send';
const WorkArea = ({ conversations }) => {
  return (
    <div className="workarea">
      <div className="chat-header">
        <div className="chat-info">
            <div className="head-logo">
            <p className="head-icon">
                {conversations[0].name[0]}
            </p>

        </div>
        <div>
               <div>
            <p>{conversations[0].name}</p>
            </div>   
            <div>
            <p>{conversations[0].timeStamp}</p>
            </div>  
        </div>
     
        </div>
     
        <div>
          <IconButton>
            <DeleteIcon></DeleteIcon>
          </IconButton>
        </div>
      </div>
      <div className="chat-body">
     <MessageOther></MessageOther>
     <MessageSelf></MessageSelf>
     <MessageOther></MessageOther>
     <MessageSelf></MessageSelf>
     <MessageOther></MessageOther>
     <MessageSelf></MessageSelf>
     <MessageOther></MessageOther>
     <MessageSelf></MessageSelf>
     <MessageOther></MessageOther>
     <MessageSelf></MessageSelf>
      </div>
      <div className="chat-footer">
        <div className="send-msgcont">
           <input type='text' placeholder='Type a Message' className="text-msg"></input>
           <IconButton>
           <SendIcon></SendIcon>  
            </IconButton>
      
        </div>
     

      </div>
    </div>
  );
};

export default WorkArea;
