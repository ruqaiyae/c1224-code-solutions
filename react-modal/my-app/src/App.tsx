import { useState } from 'react';
import { Modal } from './Modal';
import './App.css';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  function handleClose() {
    setIsOpen(false);
  }

  function handleDelete() {
    alert('Deleted successfully');
    setIsOpen(false);
  }

  return (
    <>
      <button onClick={() => setIsOpen(true)}>Delete Me!</button>
      <Modal isOpen={isOpen} onClose={handleClose}>
        <p>Are you sure you want to delete this?</p>
        <button onClick={handleClose}>Cancel</button>
        <button onClick={handleDelete}>Delete</button>
      </Modal>
    </>
  );
}

export default App;
