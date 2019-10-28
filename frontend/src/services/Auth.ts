import firebase from 'firebase';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAMhDuQMunele_bNu9ih18dT6r1DZd75Ek',
  authDomain: 'vue-auth-ea2ec.firebaseapp.com',
  databaseURL: 'https://vue-auth-ea2ec.firebaseio.com',
  projectId: 'vue-auth-ea2ec',
  storageBucket: 'vue-auth-ea2ec.appspot.com',
  messagingSenderId: '311293599298',
  appId: '1:311293599298:web:955637aad627d89f0b57db'
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

class Auth {
  public register(
    email: string,
    password: string
  ): Promise<firebase.auth.UserCredential> {
    return firebase.auth().createUserWithEmailAndPassword(email, password);
  }

  public login(
    email: string,
    password: string
  ): Promise<firebase.auth.UserCredential> {
    return firebase.auth().signInWithEmailAndPassword(email, password);
  }

  public getIdToken(): Promise<string> {
    const user = this.getLoggedUser();
    if (user != null) {
      return user.getIdToken();
    }

    return Promise.resolve('');
  }

  public userIsLogged(): boolean {
    return this.getLoggedUser() != null;
  }

  public getLoggedUser(): firebase.User | null {
    return firebase.auth().currentUser;
  }
}

export default new Auth();
