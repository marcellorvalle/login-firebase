<template>
  <div class="login"> 
      <h1>loginComponent</h1>
  </div>
</template>
<script lang="ts">
  import Vue from 'vue';
  import Component from 'vue-class-component';

  @Component({})
  export default class LoginComponent extends Vue {

    mounted (){
      console.log('hello from app');
    }
    
  }

</script>

<style scoped lang="scss">
  .login {

  }
</style>
