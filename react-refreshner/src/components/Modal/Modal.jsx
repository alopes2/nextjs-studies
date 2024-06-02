import { useState } from 'react';
import classes from './Modal.module.css';

const Modal = ({ show, onClose, children }) => {
  return (
    <>
      <div className={classes.backdrop} onClick={onClose}></div>
      <dialog open={show} className={classes.modal}>
        {children}
      </dialog>
    </>
  );
};

export default Modal;
