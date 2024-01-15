import React, { useState } from "react";
import "./Sidebar.css";
import { channelIcon, histroryIcon, homeIcon, likedIcon, rightarrowIcon, shortvideoIcon, subscriptionIcon, videoIcon, watchIcon } from "../../helpers/Icons";
function Sidebar() {
    const [active,setActive] = useState("Home")
    const sidebarData = [
        { id: 1, icon:"home", title: "Home" },
        { id: 2, icon:"shortvideo", title: "Shorts" },
        { id: 3, icon:"subscription", title: "Subscription" },
        { id: 4, icon:"arrow",text: "You"  },
        { id: 5, icon:"channel", title: "Your Channel" },
        { id: 6, icon:"history", title: "History" },
        { id: 7, icon:"video", title: "Your Videos" },
        { id: 8, icon:"watch", title: "Watch Later" },
        { id: 9, icon:"liked", title: "Liked Videos" },
        { id: 9, text: "Subscriptions" },
    ];
    const svgIcon = (icon) => {
        switch (icon) {
        case "home":
            return (homeIcon({width:24,height:24}));
        case "shortvideo":
            return (shortvideoIcon({width:24,height:24}));
        case "subscription":
            return (subscriptionIcon({width:24,height:24}));
        case "channel":
            return (channelIcon({width:24,height:24}));
        case "history":
            return (histroryIcon({width:24,height:24}));
        case "video":
            return (videoIcon({width:24,height:24}));
        case "watch":
            return (watchIcon({width:24,height:24}));
        case "liked":
            return (likedIcon({width:24,height:24}));
        case "arrow":
            return (rightarrowIcon({width:20,height:20}));
        default:
            return null;
        }
      };
      const handleTabClick = (title) => (
        setActive(title)
      )
  return (
    <div className="sidebar d-flex align-items-center pointer">
        {sidebarData.map((sidebar,index) => (
            <div key={index} className={`sidebar-item d-flex align-items-center ${sidebar.title == active ? "active" : ""}`} onClick={() => handleTabClick(sidebar.title)}>
                
                {sidebar.text ?(
                    <div className="top-line d-flex align-items-center">
                        <span className="sidebar-title">{sidebar.text}</span>
                        <span>{svgIcon(sidebar.icon)}</span>
                    </div>
                ): (
                    <>
                        <span>{svgIcon(sidebar.icon)}</span>
                        <span className="sidebar-text">{sidebar.title}</span>
                    </>
                )}
            </div>
        ))}
    </div>
  );
}
export default Sidebar;
