import React from 'react'
import styles from './NotificationModal.module.css'

function NotificationModal({ onClose }: any) {
    return (
        <div className={styles.main_container}>
            <h2>NotificationModal Works</h2>
            <button onClick={onClose}>Close</button>
        </div>
    )
}

export default NotificationModal
