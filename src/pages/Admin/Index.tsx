import * as React from 'react';
import { useState } from 'react';
import Sidebar from '../../components/Sidebar';


const HomeAdmin = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button onClick={handleClose}>Toggle Sidebar</button>
      <Sidebar isOpen={isOpen} onClose={handleClose} />
      <div>
        <h1>Home</h1>
      </div>
    </div>
  );

}

export default HomeAdmin;