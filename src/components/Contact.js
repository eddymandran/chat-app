import React from 'react';
import PropTypes from 'prop-types';
import './Contact.css';

const Contact = (props) => {
  return (
    <div className='Contact'>
      <img src={props.avatar} className='avatar' alt='Avatar' />
      <div>
        <p className='name'>{props.name}</p>
        <div className='status'>
          <div
            className={props.online ? 'status-online' : 'status-offline'}
          ></div>
          {props.online ? 'Online' : 'Offline'}
        </div>
      </div>
    </div>
  );
};

Contact.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  online: PropTypes.bool,
};

export default Contact;
