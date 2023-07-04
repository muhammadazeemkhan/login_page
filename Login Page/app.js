import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
  import {getAuth,createUserWithEmailAndPassword, signInWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js";


    const firebaseConfig = {
        apiKey: "AIzaSyDQA0si2XpORXEw4Ju91S4ATfjB9zKgYkQ",
        authDomain: "e-commere-web.firebaseapp.com",
        projectId: "e-commere-web",
        storageBucket: "e-commere-web.appspot.com",
        messagingSenderId: "1084848038601",
        appId: "1:1084848038601:web:9013a9dfc7d367e953e318",
        measurementId: "G-R9E6QPLHZ7"
      };
    
      const app = initializeApp(firebaseConfig);
      const auth = getAuth(app);
      


const registerBtn = document.getElementById('signupBtn')
const loginBtn = document.getElementById('loginBtn')


registerBtn.addEventListener('click', register)
loginBtn.addEventListener('click', login)
// logoutBtn.addEventListener('click', logout)


function register() {
    const reg_email = document.getElementById('signupEmail')
    const reg_password = document.getElementById('signupPassword')
    createUserWithEmailAndPassword(auth, reg_email.value, reg_password.value)
        .then((userCredential) => {
            const user = userCredential.user;
            console.log('user--->', user)
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log('errorMessage--->', errorMessage)
        });
}

function login() {
    const reg_email = document.getElementById('loginEmail')
    const reg_password = document.getElementById('loginPassword')
    signInWithEmailAndPassword(auth, reg_email.value, reg_password.value)
        .then((userCredential) => {
            const user = userCredential.user;
            console.log('user--->', user)
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log('errorMessage--->', errorMessage)
        });
}

// function logout() {
//     signOut(auth).then(() => {
//         // Sign-out successful.
//     }).catch((error) => {
//         // An error happened.
//     });
// }