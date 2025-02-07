import React from 'react'
import styles from './Dashboard.module.css'
import Navbar from '../../components/Navbar/Navbar'
import Chat from '../../components/Chat/Chat'
import AllChats from '../AllChats/AllChats'

function Dashboard() {
    return (
        <div className={styles.main_container}>
            <Navbar />
            <div className={styles.section_container}>
                <div className={styles.left_section}>
                    <AllChats />
                </div>
                <div className={styles.right_section}>
                    <Chat />
                </div>
            </div>
        </div>
    )
}

export default Dashboard
