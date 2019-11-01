import get = Reflect.get;
import firebase from "firebase";

export class User {
    private readonly _name: string;
    private readonly _email: string;
    private readonly _token: string;

    constructor(name: string, email: string, token: string) {
        this._name = name;
        this._email = email;
        this._token = token;
    }

    static async  fromFirebase(firebaseUser: firebase.User) {
        return new User(
            firebaseUser.email || 'undefined',
            firebaseUser.email || 'undefined',
            await firebaseUser.getIdToken()
        );
    }

    get name(): string {
        return this._name;
    }

    get email(): string {
        return this._email;
    }

    get token(): string {
        return this._token;
    }
}