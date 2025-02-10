import React from 'react'
import styles from './ProfileModal.module.css'

function ProfileModal({ onClose }: any) {
    return (
        <div className={styles.main_container}>
            <h2>ProfileModal Works</h2>
            <button onClick={onClose}>Close</button>
        </div>
    )
}

export default ProfileModal
