import React from 'react';
import './Contact.css';

const avatar = 'https://randomuser.me/api/portraits/men/99.jpg';
const name = 'Raul Mendoza';
const online = true;
const statusOnline = (
  <span className='status-online'>&nbsp;&nbsp;&nbsp;Online</span>
);
const statusOffline = (
  <span className='status-offline'>&nbsp;&nbsp;&nbsp;Offline</span>
);

function Contact() {
  return (
    <div className='Contact'>
      <img className='avatar' src={avatar} alt='Avatar' />
      <div>
        <h4 className='name'>{name}</h4>
        <div className='status'>
          <span className='status-text'>
            {online ? statusOnline : statusOffline}
          </span>
        </div>
      </div>
    </div>
  );
}

export default Contact;
