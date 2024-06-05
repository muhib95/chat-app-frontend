import React, { useState } from 'react';
import "./mainpart.css"
import SideBar from './SideBar';
import WorkArea from './WorkArea';

const MainPart = () => {
    const [conversations,setConversations]=useState([
        {
           name:"Test#1",
           lastMessage:"Last message #1",
           timeStamp:"today"
        },
        {
           name:"Test#2",
           lastMessage:"Last message #2",
           timeStamp:"today"
        },
        {
           name:"Test#3",
           lastMessage:"Last message #3",
           timeStamp:"today"
        },
     ]);
    return (
        <div className='msgArea'>
          
        <SideBar conversations={conversations}></SideBar>
        <WorkArea conversations={conversations}></WorkArea>
            
        
        </div>
    );
};

export default MainPart;