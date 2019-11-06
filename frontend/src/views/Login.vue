<template>
    <v-card width="400" class="mx-auto mt-5">
        <v-card-title>
            <h1 class="display-1">Login</h1>
        </v-card-title>
        <v-card-text>
            <v-form>
                <v-text-field 
                    type="email"
                    v-model="email"
                    label="Email"
                    prepend-icon="mdi-account-circle"/> 
                <v-text-field
                    v-model="password" 
                    :type="showPassword ? 'text' : 'password'" 
                    :rules="[loginError]"
                    label="Password"
                    prepend-icon="mdi-lock"
                    :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                    @click:append="showPassword = !showPassword" />
            </v-form>
        </v-card-text>
        <v-divider/>
        <v-card-actions>
            <v-btn 
                @click="register" 
                color="success">Register</v-btn>
            <v-spacer></v-spacer>
            <v-btn 
                @click="login" 
                color="info">Login</v-btn>            
        </v-card-actions>
    </v-card>
</template>
<script lang="ts">
    import firebase from "firebase";
    import Vue from "vue";
    import Component from "vue-class-component";
    import auth from "../services/Auth";
    import {User} from "../dtos/User";

    @Component({})
    export default class LoginComponent extends Vue {
        private email: string = '';
        private password: string = '';
        private loginError: string = '';
        private loggingIn: boolean = false;
        private showPassword: boolean = false;

        mounted() {
        }

        login() {
            this.loggingIn = true;

            auth.login(this.email, this.password)
                .then(user => this.onLoginSucess(user))
                .catch(err => this.onLoginError(err));
        }

        register() {
            this.$router.replace("/register");
        }

        private onLoginSucess(user: firebase.auth.UserCredential) {
            const firebaseUser = auth.getLoggedUser();

            if (firebaseUser != null) {
                User.fromFirebase(firebaseUser)
                    .then(user => this.executeLogin(user));
            }
        }

        private executeLogin(user: User) {
            this.$store.commit('setUser', user);
            this.loggingIn = false;
            this.loginError = "";
            this.$router.replace("/");
        }

        private onLoginError(err: TypeError) {
            this.loggingIn = false;
            this.loginError = err.message;
        }

        private error() {
            return () => (this.loginError)
        }
    }
</script>

