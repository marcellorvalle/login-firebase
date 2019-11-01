<template>
  <div class="register">
    <h1>Create new Account</h1>
    <form @submit.prevent="register">
      <input type="text" placeholder="Email" v-model="email" />
      <input type="password" placeholder="Password" v-model="password" />
      <input type="password" placeholder="Repeat the password" />
      <button type="submit" @click="register">Register</button>
    </form>
    <br />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import auth from "../services/Auth";

@Component({})
export default class RegisterComponent extends Vue {
  private email: string = "";
  private password: string = "";

  mounted() {}

  private register() {
    auth
      .register(this.email, this.password)
      .then(user => this.onRegistered())
      .catch(err => this.onError(err));
  }

  private onRegistered() {
    alert("Your account has been created!");
    this.$router.replace("login");
  }

  private onError(error: TypeError) {
    //console.log(error);
    alert("Oops..." + error.message);
  }
}
</script>

<style scoped lang="scss">
.register {
  border: 1px solid black;
  border-radius: 5px;
  padding: 1.5rem;
  width: 300px;
  margin-left: auto;
  margin-right: auto;
  position: relative;
  overflow: hidden;
  .container-loading {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.3);
    img {
      width: 2rem;
      height: 2rem;
    }
  }
  form {
    display: flex;
    flex-flow: column;
    *:not(:last-child) {
      margin-bottom: 1rem;
    }
    input {
      padding: 0.5rem;
    }
    button {
      padding: 0.5rem;
      background-color: lightgray;
      border: 1px solid gray;
      border-radius: 3px;
      cursor: pointer;
      &:hover {
        background-color: lightslategray;
      }
    }
  }
}
</style>