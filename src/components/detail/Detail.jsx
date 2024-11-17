import React, { useState } from 'react';
import "./detail.css";


const Detail = () => {
  const [showPhotos, setShowPhotos] = useState(false);

  const togglePhotos = () => {
    setShowPhotos(!showPhotos);
  };

  return (
    <div className="detail">
      <div className="user">
        <img src="./avatar.png" alt="" />
        <h2>Jane Doe</h2>
        <p>Lorem ipsum dolor sit amet. </p>
      </div>
      <div className="info">
        <div className="option">
          <div className="title">
            <span>Chat Settings</span>
            <img src="./arrowUp.png" alt="" />
          </div>
        </div>
        <div className="option">
          <div className="title">
            <span>Privacy & Help</span>
            <img src="./arrowUp.png" alt="" />
          </div>
        </div>
        <div className="option">
      <div className="title" onClick={togglePhotos} style={{ cursor: 'pointer' }}>
        <span>Shared Photos</span>
        <img src="./arrowDown.png" alt="Toggle Photos" />
      </div>
      {showPhotos && (
        <div className="photos">
          <div className="photoItem">
            <div className="photoDetail">
              <img src="https://www.w3schools.com/w3css/img_lights.jpg" alt="" />
              <span>photo_2024_2.png</span>
            </div>
            <img src="./download.png" alt="" className="icon" />
          </div>
          <div className="photoItem">
            <div className="photoDetail">
              <img src="https://www.w3schools.com/w3css/img_lights.jpg" alt="" />
              <span>photo_2024_2.png</span>
            </div>
            <img src="./download.png" alt="" className="icon" />
          </div>
          <div className="photoItem">
            <div className="photoDetail">
              <img src="https://www.w3schools.com/w3css/img_lights.jpg" alt="" />
              <span>photo_2024_2.png</span>
            </div>
            <img src="./download.png" alt="" className="icon" />
          </div>
          <div className="photoItem">
            <div className="photoDetail">
              <img src="https://www.w3schools.com/w3css/img_lights.jpg" alt="" />
              <span>photo_2024_2.png</span>
            </div>
            <img src="./download.png" alt="" className="icon" />
          </div>
        </div>
      )}
    </div>
        <div className="option">
          <div className="title">
            <span>Shared Files</span>
            <img src="./arrowUp.png" alt="" />
          </div>
        </div>
        <button>Block User</button>
        <button className='logout'>Log Out</button>
      </div>
    </div>
  );
}

export default Detail;