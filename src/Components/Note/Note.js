
import React from 'react';
import deleteIcon from '../../Assets/Delete-icon.png';
import './Note.css';


export default function Note(props) {

  const formatTime = (value) => {
    let time = new Date(value);
    const monthNames = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];

    let hrs = time.getHours();
    let amPm = hrs >= 12 ? 'PM' : 'AM';
    hrs = hrs ? hrs : '12';
    hrs = hrs > 12 ? (hrs - 12) : hrs;
    hrs = hrs < 10 ? '0'+ hrs : hrs;

    let min = time.getMinutes();
    min = min < 10 ? '0'+ min : min;

    let day = time.getDate();
    const month = monthNames[time.getMonth()];
    let year = time.getFullYear();

    return `${hrs}:${min} ${amPm} ${day} ${month} ${year}`;

  }


  return (
    <div className='note' style={{backgroundColor: props.note.color}} >
      <textarea className='note_text' defaultValue={props.note.text} onChange={(e) => props.updateText(e.target.value, props.note.id)} placeholder='Write here...' />
      <div className='note_footer'>
        <p>{formatTime(props.note.time)}</p>
        <img src={deleteIcon} alt='DELETE' onClick={() => props.deleteNote(props.note.id)} title='Delete Note' />
      </div>
    </div>
  )
}
