import React from 'react';
import Contact from './components/Contact';

function App() {
  return (
    <div className='App'>
      <Contact
        avatar='https://randomuser.me/api/portraits/women/53.jpg'
        name='Christy Cole'
        online
      />
      <Contact
        avatar='https://randomuser.me/api/portraits/men/45.jpg'
        name='Jimmy Miles'
      />
      <Contact
        avatar='https://randomuser.me/api/portraits/women/46.jpg'
        name='Rhonda Green'
        online
      />
    </div>
  );
}

export default App;
