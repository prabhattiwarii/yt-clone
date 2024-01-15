import React from 'react'
import {createIcon, menuIcon,mikeIcon,notificationIcon,searchIcon,youtubelogoIcon} from '../../helpers/Icons'
import './Header.css'
const Header = () => {
  return (
    <div className="header d-flex align-items-center justify-content-space-between">
        <div className="header-left-items d-flex align-items-center">
            <div className="menu-bar">
                <a href="/">{menuIcon({width:24,height:24})}</a>
            </div>
            <div className="logo">
                <a href="/">{youtubelogoIcon({width:90,height:20})}</a>
            </div>
        </div>
        <div className="header-middle-items d-flex align-items-center">
            <div className="input-box relative">
                <input type="text" className="input" placeholder="Search"/>
                <div className="search-box absolute d-flex align-items-center justify-content-center pointer">
                    {searchIcon({width:24,height:24})}
                </div>
            </div>
            <div className="voice-search d-flex align-items-center">
                {mikeIcon({width:24,height:24})}
            </div>
        </div>
        <div className="header-rightbar d-flex align-items-center">
            <div className="create-icon pointer">
                {createIcon({width:24,height:24})}
            </div>
            <div className="notification-icon pointer">
                {notificationIcon({width:24,height:24})}
            </div>
            <div className="profile-menu pointer">
                <div className="profile-img">
                    <img src="https://yt3.ggpht.com/ytc/AMLnZu9vk_jSZZqpKOw6TohZDkc4e2ekKVYPlcioQjttfQ=s176-c-k-c0x00ffffff-no-rj-mo" alt="profile" className="dp mxy-15"/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Header