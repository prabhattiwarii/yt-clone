import React from 'react'
import {menuIcon} from '../../helpers/Icons'

const Header = () => {
  return (
    <div className="header">
        <div className="headre-left">
            <div className="header-top">
                <div className="menu-bar">
                    {menuIcon({width:22,height:22})}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Header