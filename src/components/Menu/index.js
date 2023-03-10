import React, { useState, useEffect } from "react";
import switchImg from '../../assets/images/mode-switch.png';
import optionsImg from '../../assets/images/options.svg'
import closeImg from '../../assets/images/close.svg'

import './index.css';

const Menu = (props) => {
  const [menuList] = useState(['About', 'App', 'Feature', 'Career', 'Investor', 'Contact']);
  const [openPopup, setOpenPopup] = useState(false);

  useEffect(() => {
    if (openPopup) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }
  }, [openPopup]);
  return (
    <div className={'menu ' + (props.class ? props.class : '')}>
      {props.left}
      {menuList.map((item, index) => {
        return <div className={'item ' + props.color} key={index}>{item}</div>
      })}
      {props.hasSwitch ? <img src={switchImg} alt="menu" /> : null}
      <button className="options" onClick={() => { setOpenPopup(!openPopup) }}><img src={optionsImg} alt="" /></button>
      <div className={openPopup ? 'popup show' : 'popup'}>
        <button className="options close" onClick={() => { setOpenPopup(!openPopup) }}><img src={closeImg} alt="" width={30} /></button>
        {menuList.map((item, index) => {
          return <div className={'item show ' + props.color} key={index}>{item}</div>
        })}
      </div>
      <div className={openPopup ? 'cover show' : 'cover'} onClick={() => { setOpenPopup(!openPopup) }}></div>
    </div>
  );
}

export default Menu;