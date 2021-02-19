import React from 'react';
import './chatListItem.css';

export default () => {
  return(
    <div className="chatListItem">
      <img src="https://www.w3schools.com/howto/img_avatar2.png" alt="avatar" className="chatListItem--avatar"/>
      <div className="chatListItem--lines">
        <div className="chatListItem--line">
          <div className="chatListItem--name">Diego Apolinário</div>
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