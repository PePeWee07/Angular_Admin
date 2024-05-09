import { Injectable } from '@angular/core';

import { from, map } from 'rxjs';
import { User } from '../../store/Authentication/auth.models';
import { getFirebaseBackend } from '../../authUtils';


@Injectable({ providedIn: 'root' })

export class AuthenticationService {

    user!: User;

    constructor() {
    }

    /**
     * Returns the current user
     */
    public currentUser(): User {
        return getFirebaseBackend().getAuthenticatedUser();
    }


    /**
     * Performs the auth
     * @param email email of user
     * @param password password of user
     */
    login(email: string, password: string) {
        return from(getFirebaseBackend().loginUser(email, password).then(user => {
            return user;
        })
        );
    }

    /**
     * Performs the register
     * @param email email
     * @param password password
     */
    register(email:any,username:any,password:any) {
        return from(getFirebaseBackend().registerUser(email,username,password).then((response: any) => {
            const user = response;
            return user;
        }));
    }

    /**
     * Reset password
     * @param email email
     */
    resetPassword(email: string) {
        return getFirebaseBackend().forgetPassword(email).then((response: any) => {
            const message = response.data;
            return message;
        });
    }

    /**
     * Logout the user
     */
    logout() {
        // logout the user
        getFirebaseBackend().logout();
    }
}

