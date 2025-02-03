import React from 'react';
import styles from './Navbar.module.css'
import texts from '../../constants/en.json'
import notificationIcon from '../../assets/svg/notification-icon.svg'
import Input from '../common/Input/Input';

function Navbar() {
    return (
        <div className={styles.main_container}>
            <div className={styles.left_container}>
                <img className={styles.notification_icon} src={notificationIcon} alt="" />
                <img className={styles.notification_icon} src={notificationIcon} alt="" />
            </div>
            <div className={styles.title}>{texts.appTitle}</div>
            <div className={styles.right_container}>
                <img className={styles.notification_icon} src={notificationIcon} alt="" />
                <img className={styles.notification_icon} src={notificationIcon} alt="" />
            </div>
        </div>
    )
}

export default Navbar
