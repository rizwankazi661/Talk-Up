import React from 'react'
import styles from './ChatListItem.module.css'
import { useChatListitem } from './ChatListItem.hook'

function ChatListItem(props: any) {

    const { isSelected } = useChatListitem(props);

    return (
        <div className={`${styles.main_container} ${isSelected && styles.isSelected}`}
        >
            <div className={styles.chatName}>John Doe</div>
            <div className={styles.lastMessage}>Where are you?</div>
        </div>
    )
}

export default ChatListItem
