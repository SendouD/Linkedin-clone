import React, { useState } from 'react'
import './Login.css';
import { useDispatch } from 'react-redux';
import {login} from "./features/userSlice";
import { getAuth, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import {signInWithEmailAndPassword } from "firebase/auth";
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [namee, setName] = useState("");
  const [profilePic, setprofilePic] = useState("");
  const dispatch = useDispatch();

  const Logintoapp = (e) => {
   
    e.preventDefault();
    const auth=getAuth();
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential)=>{
      dispatch(login({
        email:userCredential.user.email,
        uid:userCredential.user.uid,
        displayName:userCredential.user.displayName,
        profileURL:userCredential.user.photoURL, 
      })

      )

    }).catch(error=>alert(error));
    // Handle sign in logic
  };

  const register = () => {
    if (!namee) {
      return alert('Please enter a name!');
    }
  
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed up 
        const user=userCredential.user;
        updateProfile(user,{
          displayName: namee,
          photoURL: profilePic
        }).then(() => {
          // Update successful
          dispatch(login({
            email: user.email,
            uid: user.uid,
            displayName:namee,
            photoURL: profilePic
          }));
        }).catch((error) => {
          // An error occurred
          console.error('Error updating profile:', error);
          alert('An error occurred while signing up. Please try again.');
        });
      })
      .catch((error) => {
        // Handle errors
        console.error('Error signing up:', error);
        if (error.code === 'auth/email-already-in-use') {
          alert('The email address is already in use by another account.');
        } else {
          alert('An error occurred while signing up. Please try again.');
        }
      });
  };
  
  return (
    <div className='login'>
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/LinkedIn_Logo.svg/2560px-LinkedIn_Logo.svg.png" alt="" />
      <form action=""></form>
      <input 
        value={namee}
        onChange={(e) => setName(e.target.value)}
        placeholder="Full Name"  
        type="text" 
      />
      <input 
        value={profilePic}
        onChange={(e) => setprofilePic(e.target.value)}
        placeholder="Profile pic URL (optional)"  
        type="text" 
      />
      <input 
        value={email} 
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"  
        type="email" 
      />
      <input 
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"  
        type="password" 
      />

      <button type='submit' onClick={Logintoapp}>Sign in</button>
      <p>Not a member ?
        <span className='login__register' onClick={register}> Register Now</span>
      </p>
    </div>
  )
}

export default Login

