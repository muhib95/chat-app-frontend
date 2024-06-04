import React from 'react';
import "./mainpart.css"
const ConversationItem = ({conversation}) => {
    return (
        <div className='conversation-container'>
            <div className='con-icon-container'>
              <p className='con-icon'>{conversation?.name[0]}</p>  
            </div>
           <div className='con-title-container'>
             <p className='con-title'>{conversation?.name}</p>
           <p className='con-lastMessage'>{conversation?.lastMessage}</p>
           </div>
           <div className='con-timeStamp-container'>
            <p className='con-timeStamp'>{conversation?.timeStamp}</p>
           </div>
          
           
        </div>
    );
};

export default ConversationItem;