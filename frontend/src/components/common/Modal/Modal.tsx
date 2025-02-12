import React from 'react';
import styles from './Modal.module.css';
import ReactDOM from 'react-dom';

function Modal({ children }: any) {
    const modalRoot = document.getElementById("modal-root");
    if (!modalRoot) return null;

    return ReactDOM.createPortal(
        <>
            <div className={styles.backdrop}></div>
            <div className={styles.main_container}>
                {children}
            </div>
        </>,
        modalRoot
    );
}

export default Modal;
