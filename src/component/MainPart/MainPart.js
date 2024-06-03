import React from 'react';
import "./mainpart.css"
import SideBar from './SideBar';
import WorkArea from './WorkArea';

const MainPart = () => {
    return (
        <div className='msgArea'>
          
        <SideBar></SideBar>
        <WorkArea></WorkArea>
            
        
        </div>
    );
};

export default MainPart;