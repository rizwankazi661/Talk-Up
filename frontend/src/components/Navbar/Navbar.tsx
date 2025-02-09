import React from 'react';
import styles from './Navbar.module.css'
import texts from '../../constants/en.json'
import notificationIcon from '../../assets/svg/notification-icon.svg'
import searchIcon from '../../assets/svg/search-icon.svg'
import profileIcon from '../../assets/svg/profile-icon.svg'
import arrowDownIcon from '../../assets/svg/arrow-down-icon.svg'

function Navbar() {
    return (
        <div className={styles.main_container}>
            <div className={styles.left_container}>
                <div className={styles.search_container}>
                    <img className={styles.search_icon} src={searchIcon} alt="" />
                    <div className={styles.search_title}>Search User</div>
                </div>
            </div>
            <div className={styles.title}>{texts.appTitle}</div>
            <div className={styles.right_container}>
                <div className={styles.notification_container}>
                    <img className={styles.notification_icon} src={notificationIcon} alt="" />
                </div>
                <div className={styles.profile_container}>
                    <img className={styles.profile_icon} src={profileIcon} alt="" />
                    <img className={styles.arrow_icon} src={arrowDownIcon} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Navbar
