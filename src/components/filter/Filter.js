import React, { useState } from 'react';
import './Filter.css';
import { leftarrowIcon, rightarrowIcon } from '../../helpers/Icons';

const Filter = () => {
  const [activeTab, setActiveTab] = useState("All");
  const filterData = [
    { id: 1, title: "All" },
    { id: 2, title: "Dramedy" },
    { id: 3, title: "Mantras" },
    { id: 4, title: "Music" },
    { id: 5, title: "Live" },
    { id: 6, title: "Gaming" },
    { id: 7, title: "News" },
    { id: 8, title: "Police Procedurals" },
    { id: 9, title: "Arjit Singh" },
    // { id: 10, title: "B Prak" },
    // { id: 11, title: "Reverberation" },
    // { id: 12, title: "Javascript" },
  ];

  const handleTabClick = (title) => {
    setActiveTab(title);
  };

  return (
    <div className="filter d-flex align-items-center">
      <div className="single-filter d-flex align-items-center">
        <span className="arrow pointer">{leftarrowIcon({width:28,height:28})}</span>
        {filterData.map((filter) => (
            <span key={filter.id} className={`filter-items pointer ${filter.title === activeTab ? 'active' : ''}`} onClick={() => handleTabClick(filter.title)}>
                {filter.title}
            </span>
        ))}
        <span className="arrow pointer">{rightarrowIcon({with:28,height:28})}</span>
      </div>
    </div>
  );
};

export default Filter;
