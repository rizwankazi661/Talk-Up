import React from 'react'
import './Auth.styles.scss';
import logo from '../../assets/logo.png'

const Auth = () => {
    return (
        <div className='main_container'>
            <div className="image_container"></div>
            <div className="form_container">
                <div className="title_and_icon_container">
                    <div className="img">
                        <img src={logo} alt="Talk-up" />
                    </div>
                    <div className="title">
                        Talk-Up
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Auth
