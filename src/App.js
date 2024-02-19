import React, { useEffect } from 'react';
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import Feed from './Feed';
import Login from './Login';
import LinkedinNew from './LinkedinNew';
import { useDispatch, useSelector } from 'react-redux';
import { login,logout,selectUser } from './features/userSlice';
import { getAuth, onAuthStateChanged } from "firebase/auth";

function App() {
  const user=useSelector(selectUser);
  const dispatch=useDispatch();
  useEffect(()=>{
    const auth = getAuth();
    onAuthStateChanged(auth, (userCredential) => {
      if (userCredential) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        dispatch(login({
          email: userCredential.email,
          uid: userCredential.uid,
          displayName: userCredential.displayName, // Use name from state
          photoURL: userCredential.photoURL
        }))
        // ...
      } else {
        // User is signed out
        // ...
        dispatch(logout());
      }
    });
    
  },[]

  )
  

  
      

  return (
    <div className="app">
     {
      // header
     }
     <Header />

     {user ? (
        <div className="app__body">
          <Sidebar />
          <Feed />
          <LinkedinNew/>
        </div>
      ) : (
        <Login />
      )}
         {/* <div className="app__body">
          <Sidebar />
          <Feed />
          <LinkedinNew/>
        </div> */}
        
   
    
    </div>
  );
}

export default App;
