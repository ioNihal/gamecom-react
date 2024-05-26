
import React from 'react';
import '../styles/ConnectWithUs.css';

const ConnectWithUs = () => {
  return (
    <div className="page-connect-con">
      <h2>CONNECT WITH US</h2>
      <div className="icon-list">
        <a href="https://www.youtube.com/channel/UC123456789" target="_blank" rel="noopener noreferrer">
          <img src="../images/youtubeIcon32.png" alt="YouTube" className="icon" />
        </a>
        <a href="https://www.instagram.com/io.nihal" target="_blank" rel="noopener noreferrer">
          <img src="../images/instaIcon32.png" alt="Instagram" className="icon" />
        </a>
        <a href="https://discord.gg/invitecode" target="_blank" rel="noopener noreferrer">
          <img src="../images/discordicon32.png" alt="Discord" className="icon" />
        </a>
      </div>
    </div>
  );
};

export default ConnectWithUs;
