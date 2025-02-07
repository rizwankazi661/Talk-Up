import React from 'react'
import styles from './AllChats.module.css'
import Button from '../../components/common/Button/Button'
import ChatListItem from '../../components/ChatListItem/ChatListItem'

function AllChats() {
    return (
        <div className={styles.main_container}>
            <div className={styles.header}>
                <div className={styles.title}>My Chats</div>
                <div className={styles.btn_container}>
                    <Button label="New Group Chat" type="button" className={styles.addNewChat} />
                </div>
            </div>
            <div className={styles.content}>
                <ChatListItem />
                <ChatListItem />
                <ChatListItem />
                <ChatListItem />
            </div>
        </div>
    )
}

export default AllChats
