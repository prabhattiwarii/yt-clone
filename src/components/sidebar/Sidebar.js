import React from "react";
import "./Sidebar.css";
import { channelIcon, histroryIcon, homeIcon, likedIcon, shortvideoIcon, subscriptionIcon, videoIcon, watchIcon } from "../../helpers/Icons";
function Sidebar() {
  return (
    <div className="sidebar d-flex align-items-center pointer">
        <div className="sidebar-item d-flex align-items-center active">
            {homeIcon({width:24,height:24})}
            <span className="sidebar-text">Home</span>
        </div>
        <div className="sidebar-item d-flex align-items-center active">
            {shortvideoIcon({width:24,height:24})}
            <span className="sidebar-text">Shorts</span>
        </div>
        <div className="sidebar-item d-flex align-items-center active">
            {subscriptionIcon({width:24,height:24})}
            <span className="sidebar-text">Subscription</span>
        </div>
        <div className="sidebar-item d-flex align-items-center active">
            {channelIcon({width:24,height:24})}
            <span className="sidebar-text">Your Channel</span>
        </div>
        <div className="sidebar-item d-flex align-items-center active">
            {histroryIcon({width:24,height:24})}
            <span className="sidebar-text">History</span>
        </div>
        <div className="sidebar-item d-flex align-items-center active">
            {videoIcon({width:24,height:24})}
            <span className="sidebar-text">Your Videos</span>
        </div>
        <div className="sidebar-item d-flex align-items-center active">
            {watchIcon({width:24,height:24})}
            <span className="sidebar-text">Watch Later</span>
        </div>
        <div className="sidebar-item d-flex align-items-center active">
            {likedIcon({width:24,height:24})}
            <span className="sidebar-text">Liked Videos</span>
        </div>
    </div>
  );
}
export default Sidebar;
