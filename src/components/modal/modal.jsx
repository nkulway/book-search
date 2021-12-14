import { useEffect, useState } from 'react';
import { connect } from 'react-redux'
import Overlay from '../overlay/overlay';
import { setModalMessage } from '../../redux/actions/actions';
import './style.css';

function Modal({ modalMessage, setModalMessage }) {


  // by default the isOpen is closed
  const [isOpen, setIsOpen] = useState(false)
  
  useEffect(() => {
    // when isOpen first mounts it will check to see if there is a description
    if (modalMessage) {
      setIsOpen(true);
    } else {
      setIsOpen(false)
    } 
    // the '[modalMessage] is saying watch for changes with the modal message
  }, [modalMessage])

  const closeModal = () => {
    setModalMessage('')
  }

  return (
    <>
      <div className="modal" onClick={closeModal}>
        {modalMessage}
      </div>
      {/* gives description and when open gives the Overlay */}
      {isOpen && <Overlay />}
    </>
  );
}

const mapStateToProps = state => ({
  modalMessage: state.modal.message
})

const mapDispatchToProps = {
  setModalMessage
}

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
