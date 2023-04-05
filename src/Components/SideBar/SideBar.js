import React from 'react';

import plusIcon from '../../Assets/Plus-icon.png';

import './SideBar.css';
import { useState } from 'react';



export default function SideBar(props) {

  const colors = ['#fe9b72', '#fec971', '#00d4fe', '#b693fd', '#e4ee91'];
  const [listOpen, setListOpen] = useState(false);

  return (
    <div className="sidebar">
      <img src={plusIcon} alt="Add" onClick={() => setListOpen(!listOpen)} title='Create new note' />
      <ul className={`sidebar_list ${listOpen ? 'sidebar_list_active' : ''}`}>
        {colors.map((color, index) => (
          <li
            className="sidebar_list_item"
            key={index}
            style={{ backgroundColor: color }}
            onClick={() => props.addNote(color)}
          />
        ))}
      </ul>
    </div>
  );
}
