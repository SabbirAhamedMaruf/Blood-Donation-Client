import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import auth from "../firebase/Firebase.config";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";

// Security context
export const SecurityContext = createContext(null);

const SecurityProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Register Users
  const registerWithEmailAndPassword = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };


  // Login page
  const loginWithEmailAndPassword=(email,password)=>{
    return signInWithEmailAndPassword(auth,email,password);
  }


  // Sign Out User
  const handleSignOut =()=>{
    signOut(auth);
  }


  //   User observer
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      console.log("Log: Current User Data =",currentUser);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);



  

  // Security context values
  const securityContextValues = {
    user,
    loading,
    registerWithEmailAndPassword,
    handleSignOut,
    loginWithEmailAndPassword
  };
  return (
    <SecurityContext.Provider value={securityContextValues}>
      {children}
    </SecurityContext.Provider>
  );
};

SecurityProvider.propTypes = {
  children: PropTypes.node,
};

export default SecurityProvider;
