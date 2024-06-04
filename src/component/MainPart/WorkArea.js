import React from 'react';
import "./mainpart.css"
import DeleteIcon from '@mui/icons-material/Delete';
import { IconButton } from '@mui/material';
const WorkArea = () => {
    return (
        <div className='workarea'>
         <div className='chat-header'>
            <div>
            <IconButton>
            <DeleteIcon></DeleteIcon>
            </IconButton> 
                

            </div>
            </div> 
         <div className='chat-body'>Chat area body</div> 
         <div className='chat-footer'>Chat area footer</div> 
        </div>
    );
};

export default WorkArea;