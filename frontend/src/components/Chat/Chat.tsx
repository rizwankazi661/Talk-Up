import React from 'react'
import styles from './Chat.module.css'
import Navbar from '../Navbar/Navbar'

function Chat() {
    return (
        <div className={styles.main_container}>
            {/* <Navbar /> */}
            <div className={styles.title}>
                Click on user to start chatting
            </div>
        </div>
    )
}

export default Chat
