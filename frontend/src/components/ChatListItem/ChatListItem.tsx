import React from 'react'
import styles from './ChatListItem.module.css'

function ChatListItem() {
    return (
        <div className={styles.main_container}>
            <div className={styles.chatName}>John Doe</div>
            <div className={styles.lastMessage}>Where are you?</div>
        </div>
    )
}

export default ChatListItem
