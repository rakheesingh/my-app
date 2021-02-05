import './App.css';

function Modal({setModal}) {
  return (
    <>
    <div class="modal" id="modal">
  <h2>Modal Window</h2>
  <div class="content">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis deserunt corrupti, ut fugit magni qui quasi nisi amet repellendus non fuga omnis a sed impedit explicabo accusantium nihil doloremque consequuntur.</div>
  <div class="actions">
    <button onClick={()=> setModal(false)} class="toggle-button">OK</button>
  </div>
</div>
    </>
  );
}

export default Modal;
