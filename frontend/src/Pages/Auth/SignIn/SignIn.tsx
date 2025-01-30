import React, { useState } from 'react'
import styles from './SignIn.module.css'
import Input from '../../../components/common/Input/Input'
import Button from '../../../components/common/Button/Button';
import texts from '../../../constants/en.json'

function SignIn() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

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
                {texts.auth.signIn.footer} <a href="" className={styles.hyperlink}>{texts.auth.signIn.signUpNow}</a>
            </div>
        </div>
    )
}

export default SignIn
