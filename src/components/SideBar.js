import React from 'react'
import './SideBar.css'
import SideBarOption from './SideBarOption'
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import { useDataLayerValue } from '../DataLayer';

function SideBar() {
  const [ {playlists} ,dispatch] = useDataLayerValue();
  return (
    <div className='sidebar'>
      <img
        className="sidebar_logo"
        src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
        alt=""
      />
      <SideBarOption title = "home" Icon = {HomeIcon}/>
      <SideBarOption title = "search" Icon={SearchIcon}/>
      <SideBarOption title = "Your library" Icon={LibraryMusicIcon}/>
      <br />
      <strong className='sidebar_title'>PLAYLISTS</strong>
      <hr />
      {playlists?.items?.map(playlist =>(

        <SideBarOption title={playlist.name}/>
      ))}
    </div>
  )
}

export default SideBar
