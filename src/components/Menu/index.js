import React, { useState } from "react";
import switchImg from '../../assets/images/mode-switch.png';
import './index.css';

const Menu = (props) => {
  const [menuList] = useState(['About', 'App', 'Feature', 'Career', 'Investor', 'Contact']);
  return (
    <div className="menu">
      {menuList.map((item, index) => {
        return <div className={'item ' + props.color} key={index}>{item}</div>
      })}
      {props.hasSwitch ? <img src={switchImg} alt="menu" /> : null}
    </div>
  );
}

export default Menu;