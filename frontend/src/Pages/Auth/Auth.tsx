import React from 'react'
import styles from './Auth.module.css'
import logo from '../../assets/png/logo.png'
import texts from '../../constants/en.json';
import SignIn from './SignIn/SignIn';

function Auth() {
    return (
        <div className={styles.main_container}>
            <div className={styles.left_container}></div>
            <div className={styles.right_container}>
                <div className={styles.header}>
                    <img src={logo} alt="app-logo" className={styles.logo} />
                    <div className={styles.title}>{texts.appTitle}</div>
                </div>
                <div className={styles.content}>
                    <SignIn />
                </div>
                {/* <div className={styles.footer}></div> */}
            </div>
        </div>
    )
}

export default Auth
