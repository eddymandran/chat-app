import React from 'react';
import PropTypes from 'prop-types';
import './Contact.css';

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOnline: props.online,
    };
  }
  render() {
    return (
      <div className='Contact'>
        <img src={this.props.avatar} className='avatar' alt='Avatar' />
        <div>
          <p className='name'>{this.props.name}</p>
          <div className='status'>
            <div
              className={
                this.state.isOnline ? 'status-online' : 'status-offline'
              }
              onClick={(event) => {
                const offline = !this.state.isOnline;
                this.setState({ isOnline: offline });
              }}
            ></div>
            {this.state.isOnline ? 'Online' : 'Offline'}
          </div>
        </div>
      </div>
    );
  }
}

Contact.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  online: PropTypes.bool,
};

export default Contact;
