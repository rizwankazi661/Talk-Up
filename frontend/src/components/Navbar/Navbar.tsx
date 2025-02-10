import React, { useState } from 'react';
import styles from './Navbar.module.css'
import texts from '../../constants/en.json'
import notificationIcon from '../../assets/svg/notification-icon.svg'
import searchIcon from '../../assets/svg/search-icon.svg'
import profileIcon from '../../assets/svg/profile-icon.svg'
import arrowDownIcon from '../../assets/svg/arrow-down-icon.svg'
import Modal from '../common/Modal/Modal';
import SearchModal from './SearchModal/SearchModal';
import ProfileModal from './ProfileModal/ProfileModal';
import NotificationModal from './NotificationModal/NotificationModal';
import { useNavbar } from './Navbar.hook';

function Navbar() {

    const { activeModal, openModal, closeModal } = useNavbar();

    const modalComponents = {
        search: <SearchModal onClose={closeModal} />,
        notification: <NotificationModal onClose={closeModal} />,
        profile: <ProfileModal onClose={closeModal} />,
    };

    return (
        <>
            <div className={styles.main_container}>
                <div className={styles.left_container}>
                    <div className={styles.search_container} onClick={() => openModal("search")}>
                        <img className={styles.search_icon} src={searchIcon} alt="" />
                        <div className={styles.search_title}>Search User</div>
                    </div>
                </div>
                <div className={styles.title}>{texts.appTitle}</div>
                <div className={styles.right_container}>
                    <div className={styles.notification_container} onClick={() => openModal("notification")}>
                        <img className={styles.notification_icon} src={notificationIcon} alt="" />
                    </div>
                    <div className={styles.profile_container} onClick={() => openModal("profile")}>
                        <img className={styles.profile_icon} src={profileIcon} alt="" />
                        <img className={styles.arrow_icon} src={arrowDownIcon} alt="" />
                    </div>
                </div>
            </div>
            {activeModal && <Modal onClose={closeModal}>{modalComponents[activeModal]}</Modal>}
        </>
    )
}

export default Navbar
