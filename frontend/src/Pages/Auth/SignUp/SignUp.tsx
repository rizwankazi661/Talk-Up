import React, { useState } from 'react'
import styles from './SignUp.module.css'
import Input from '../../../components/common/Input/Input'
import Button from '../../../components/common/Button/Button';
import texts from '../../../constants/en.json'
import { useSignUp } from './SignUp.hook';

export type SignUpProps = {
    setSignInActive: React.Dispatch<React.SetStateAction<boolean>>
}

function SignUp(props: SignUpProps) {

    const { name, email, password, setName, setEmail, setPassword, goToSignInPage } = useSignUp(props);
    const { setSignInActive } = props;

    return (
        <div className={styles.main_container}>
            <div className={styles.input_container}>
                <Input
                    type="text"
                    label="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
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
                <Button label="Sign Up" type="submit" />
            </div>
            <div className={styles.footer}>
                {texts.auth.signUp.footer} <span onClick={goToSignInPage} className={styles.hyperlink}>{texts.auth.signUp.signIn}</span>
            </div>
        </div>
    )
}

export default SignUp
