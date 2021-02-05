import {useState} from 'react';
import Modal from './Modal';
import './App.css';

function App() {
  const [openModal, setModal] =useState(false);

  return (
    <div className="App">
     {openModal && <Modal setModal={setModal}/>}
    <button  id="centered-toggle-button"  onClick={()=> setModal(!openModal)}>Open Modal</button>
    </div>
  );
}

export default App;
