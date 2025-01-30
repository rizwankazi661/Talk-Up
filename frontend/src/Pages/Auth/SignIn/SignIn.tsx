import React, { useState } from 'react'
import styles from './SignIn.module.css'
import Input from '../../../components/common/Input/Input'
import Button from '../../../components/common/Button/Button';
import texts from '../../../constants/en.json'
import { useSignIn } from './SignIn.hook';

export type SignInProps = {
    setSignInActive: React.Dispatch<React.SetStateAction<boolean>>
}

function SignIn(props: SignInProps) {

    const { email, password, setEmail, setPassword, goToSignUpPage } = useSignIn(props);
    const { setSignInActive } = props;

    return (
        <div className={styles.main_container}>
            <div className={styles.input_container}>
                <Input
                    type="email"
                    label="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <Input
                    type="password"
                    label="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>
            <div className={styles.btn_container}>
                <Button label="Sign In" type="submit" />
            </div>
            <div className={styles.footer}>
                {texts.auth.signIn.footer} <span onClick={goToSignUpPage} className={styles.hyperlink}>{texts.auth.signIn.signUpNow}</span>
            </div>
        </div>
    )
}

export default SignIn
