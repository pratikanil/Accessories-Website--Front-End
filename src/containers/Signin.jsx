import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { signIn } from '../reducks/users/operations';
import Home from '../containers/Home';
import CrossX from '../assets/img/cross.png';
import { push } from 'connected-react-router';

const Signin = () => {
    const dispatch = useDispatch();

    const closeButton = () => {
        dispatch(push('/'));
    };

    const [email, setEmail] = useState(''),
        [password, setPassword] = useState('');

    const inputEmail = event => {
        setEmail(event.target.value);
    };

    const inputPassword = event => {
        setPassword(event.target.value);
    };

    const signInButton = () => {
        dispatch(signIn(email, password));
        setEmail('');
        setPassword('');
    };
    return (
        <>
            <Home />
            <section className="gradient">
                <section class="popup">
                    <div class="popup-inner">
                        <span onClick={closeButton}>
                            <a href="/">
                                {' '}
                                <img src={CrossX} class="close" />{' '}
                            </a>
                        </span>
                    </div>
                    <div class="popup-preview">
                        <div class="input">
                            <div className="heading-sign-in">
                                <h2>Log In</h2>
                                <p> Login to shop for Accessories</p>
                            </div>
                            <div className="input-feilds">
                                <input
                                    type="email"
                                    onChange={inputEmail}
                                    required
                                    placeholder="Email address"
                                    value={email}
                                />{' '}
                                
                                <input
                                    type="password"
                                    onChange={inputPassword}
                                    required
                                    placeholder="Password"
                                    vlaue={password}
                                />
                             
                                   
                                <button class="button" onClick={signInButton}>
                                    SIGN IN
                                </button>
                                
                                <p class="bottom">
                                    Not a Member Yet?{' '}
                                    <a href="/signup">
                                        <u>Sign Up</u>
                                    </a>{' '}
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </section>
        </>
    );
};

export default Signin;
