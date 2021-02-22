import React from 'react';
import './chatListItem.css';

export default ({onClick, active, data}) => {
  return(
    <div
     className={`chatListItem ${active ? 'active' : ''}`}
     onClick={onClick}
    >
      <img src={data.image} alt="avatar" className="chatListItem--avatar"/>
      <div className="chatListItem--lines">
        <div className="chatListItem--line">
          <div className="chatListItem--name">{data.title}</div>
          <div className="chatListItem--date">19:00</div>
        </div>
        <div className="chatListItem--line">
          <div className="chatListItem--lastMsg">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem vero nisi eius cumque doloribus temporibus magni dolores, laudantium quis perferendis, fugit, voluptates earum pariatur eum at quisquam placeat eaque. Ipsa.</p>
          </div>
        </div>
      </div>
    </div>
  )
}