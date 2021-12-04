
import './style.css';


function Modal({ descirption, closeModal }) {
  return (
    <div className="modal" onClick={closeModal}>
    {descirption}
    </div>
  );
}

export default Modal;
