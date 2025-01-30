import React from "react";
import styles from "./Auth.module.css";
import logo from "../../assets/png/logo.png";
import texts from "../../constants/en.json";
import SignIn from "./SignIn/SignIn";
import { useAuth } from "./Auth.hook";
import SignUp from "./SignUp/SignUp";

function Auth() {
    const { isSignInActive, setSignInActive } = useAuth();

    return (
        <div className={styles.main_container}>
            <div className={styles.left_container}></div>
            <div className={styles.right_container}>
                <div className={styles.header}>
                    <div className={styles.logo_and_name}>
                        <img src={logo} alt="app-logo" className={styles.logo} />
                        <div className={styles.title}>{texts.appTitle}</div>
                    </div>
                </div>
                <div className={styles.content}>
                    {isSignInActive ? <SignIn setSignInActive={setSignInActive} /> : <SignUp setSignInActive={setSignInActive} />}
                </div>
            </div>
        </div>
    );
}

export default Auth;
