 import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

class FirebaseAuthBackend {

    constructor(firebaseConfig: any) {
        if (firebaseConfig) {
            // Initialize Firebase
            firebase.initializeApp(firebaseConfig);
            firebase.auth().onAuthStateChanged((user: any) => {
                if (user) {
                    sessionStorage.setItem('authUser', JSON.stringify(user));
                } else {
                    sessionStorage.removeItem('authUser');
                }
            });
        }
    }

    /**
     * Registers the user with given details
     */
    registerUser = (email: any,username:any, password: any) => {
        return new Promise((resolve, reject) => {
            firebase.auth().createUserWithEmailAndPassword(email, password).then((userCredential: any) => {
                var user: any = userCredential.user;
                resolve(user);
            }, (error) => {
                reject(this._handleError(error, 'Registration failed'));
            });
        });
    }

    /**
     * Login user with given details
     */
    loginUser = (email: any, password: any) => {
        return new Promise((resolve, reject) => {
            firebase.auth().signInWithEmailAndPassword(email, password).then((userCredential: any) => {
                // eslint-disable-next-line no-redeclare
                const user = userCredential.user;
                resolve(user);
            }, (error) => {
                reject(this._handleError(error, 'Login failed'));
            });
        });
    }

    /**
     * Logout the user
     */
    logout = () => {
        return new Promise((resolve, reject) => {
            firebase.auth().signOut().then(() => {
                resolve(true);
            }).catch((error) => {
                reject(this._handleError(error, 'Logout failed'));
            });
        });
    }

    /**
     * forget Password user with given details
     */
    forgetPassword = (email: any) => {
        return new Promise((resolve, reject) => {
            // tslint:disable-next-line: max-line-length
            firebase.auth().sendPasswordResetEmail(email, { url: window.location.protocol + '//' + window.location.host + '/login' }).then(() => {
                resolve(true);
            }).catch((error) => {
                reject(this._handleError(error, ''));
            });
        });
    }

    setLoggeedInUser = (user: any) => {
        sessionStorage.setItem('authUser', JSON.stringify(user));
    }

    /**
     * Returns the authenticated user
     */
    getAuthenticatedUser = () => {
        if (!sessionStorage.getItem('authUser')) {
            return null;
        }
        return JSON.parse(sessionStorage.getItem('authUser')!);
    }

    /**
     * Handle the error
     * @param {*} error
     */
    _handleError(error: any, customMessage: any) {
        var errorMessage = customMessage || error.message;
        return errorMessage;
    }
}

// tslint:disable-next-line: variable-name
let _fireBaseBackend: FirebaseAuthBackend = null as any;

/**
 * Initilize the backend
 * @param {*} config
 */
const initFirebaseBackend = (config: any) => {
    if (!_fireBaseBackend) {
        _fireBaseBackend = new FirebaseAuthBackend(config);
    }
    return _fireBaseBackend;
};

/**
 * Returns the firebase backend
 */
const getFirebaseBackend = () => {
    return _fireBaseBackend;
};

export { initFirebaseBackend, getFirebaseBackend };
