import React from 'react';
import styles from './Modal.module.css';
import ReactDOM from 'react-dom';

function Modal({ onClose, children }: any) {
    const modalRoot = document.getElementById("modal-root");
    if (!modalRoot) return null;

    return ReactDOM.createPortal(
        <>
            <div className={styles.backdrop} onClick={onClose}></div>
            <div className={styles.main_container}>
                {children}
            </div>
        </>,
        modalRoot
    );
}

export default Modal;
