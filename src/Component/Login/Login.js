import React, { useContext, useState } from 'react';
import logo from '../../resources/logos/Group 1329.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGooglePlusG } from '@fortawesome/free-brands-svg-icons';
import './Login.css'
import { useHistory, useLocation } from 'react-router-dom';
import * as firebase from "firebase/app";
import "firebase/auth";
import { UserContext } from '../../App';
import firebaseConfig from '../../firebaseConfig';

const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [newUser, setNewUser] = useState(false);
    const [user, setUser] = useState({
        isSignedIn: false,
        name: '',
        email: '',
        password: '',
        photo: ''
    });

    const initializeLoginFramework = () => {
        if (firebase.apps.length === 0) {
            firebase.initializeApp(firebaseConfig);
        }
    }
    initializeLoginFramework();


    const history = useHistory();
    const location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };

    const googleSignIn = () => {
        handleGoogleSignIn()
            .then(res => {
                handleResponse(res, true);
            })
    }

    const handleGoogleSignIn = () => {
        const googleProvider = new firebase.auth.GoogleAuthProvider();
        return firebase.auth().signInWithPopup(googleProvider)
            .then(res => {
                const { displayName, photoURL, email } = res.user;
                const signedInUser = {
                    isSignedIn: true,
                    name: displayName,
                    email: email,
                    photo: photoURL,
                    success: true
                };
                return signedInUser;
            })
            .catch(err => {
                console.log(err);
                console.log(err.message);
            })
    }

    const signOut = () => {
        handleSignOut()
            .then(res => {
                handleResponse(res, false);
            })
    }
    const handleSignOut = () => {
        return firebase.auth().signOut()
            .then(res => {
                const signedOutUser = {
                    isSignedIn: false,
                    name: '',
                    email: '',
                    photo: '',
                    error: '',
                    success: false
                }
                return signedOutUser;
            }).catch(err => {
                // An error happened.
            });
    }

    const handleResponse = (res, redirect) => {
        setUser(res);
        setLoggedInUser(res);
        if (redirect) {
            history.replace(from);
        }
    }


    return (
        <div className="login ">
            <div className="d-flex row justify-content-center">
                <img src={logo} alt="" />
            </div>

            <br />
            <div className="loginForm">
                <h1 >Login With</h1>
                <span> <FontAwesomeIcon className="icons active-icons" icon={faGooglePlusG} />
                    <button onClick={googleSignIn} className="btn btn-primary">Continue with Google </button></span>
                <br />
                <br />
                <p>Don't have account.<a href="">Create an account</a></p>

            </div>

        </div>
    );
};

export default Login;