import React from 'react'
import styles from './SearchModal.module.css'

function SearchModal({ onClose }: any) {
    return (
        <div className={styles.main_container}>
            <h2>SearchModal Works</h2>
            <button onClick={onClose}>Close</button>
        </div>
    )
}

export default SearchModal
