import React from 'react';
import "./mainpart.css"
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { IconButton } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import NightlightIcon from '@mui/icons-material/Nightlight';
import SearchIcon from '@mui/icons-material/Search';
const SideBar = () => {
    return (
        <div className='sidebar'>
          <div className='sb-header'>
            <div>
                <IconButton>
               <AccountCircleIcon/> 
            </IconButton> 
            </div>
            <div>
                <IconButton>
               <PersonIcon/> 
            </IconButton>
            <IconButton>
               <GroupAddIcon/> 
            </IconButton>
            <IconButton>
               <AddCircleIcon/> 
            </IconButton>
            <IconButton>
               <NightlightIcon/> 
            </IconButton>
            </div>
          
           

          </div>
          <div className='sb-search'>
            <SearchIcon></SearchIcon>
            <input type='text' placeholder='search' className='search-box'></input>

          </div>
          <div className='sb-conversation'>

          </div>
        </div>
    );
};

export default SideBar;