import initializeFirebase from '../Pages/Firebase/firebase.init';
import { useState, useEffect } from 'react';
import { getAuth, createUserWithEmailAndPassword,updateProfile, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";


initializeFirebase();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [authError, setAuthError] = useState('');
    const [admin, setAdmin] = useState(false);

    const auth = getAuth();

    const registerUser = (email, password, name, history) => {
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                setAuthError('');
                const newUser = {email, displayName:name};
                setUser(newUser);
                saveUser(email, name)
                updateProfile(auth.currentUser, {
                    displayName: name
                }).then(()=>{

                }).catch((error) =>{

                });
                history.replace('/');
            })
            .catch((error) => {
                setAuthError(error.message);
                console.log(error);
            })
            .finally(() => setIsLoading(false));
    }

    const loginUser = (email, password, location, history) => {
        setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const destination = location?.state?.from || '/';
                history.replace(destination);
                setAuthError('');
            })
            .catch((error) => {
                setAuthError(error.message);
            })
            .finally(() => setIsLoading(false));
    }

    useEffect(() =>{
   fetch(`https://agile-hollows-82713.herokuapp.com/users/${user.email}`)
   .then(res => res.json())
   .then(data => setAdmin(data.admin))
    }, [user.email])
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else {
                setUser({})
            }
            setIsLoading(false);
        });
        return () => unsubscribed;
    }, [])

    const logout = () => {
        setIsLoading(true);
        signOut(auth).then(() => {
            // Sign-out successful.
        }).catch((error) => {
            // An error happened.
        })
            .finally(() => setIsLoading(false));
    }

    const saveUser = (email, displayName) =>{
          const user = {email, displayName};
          fetch('https://agile-hollows-82713.herokuapp.com/users',{
           method: 'POST',
           headers: {
               'content-type' : 'application/json'
           },
           body: JSON.stringify(user)
          })
          .then()
    }

    return {
        user,
        admin,
        isLoading,
        authError,
        registerUser,
        loginUser,
        logout,
    }
}

export default useFirebase;