<template>
  <div class="register"> 
      <h1>registerComponent</h1>
  </div>
</template>
<script lang="ts">
  import Vue from 'vue';
  import Component from 'vue-class-component';

  @Component({})
  export default class RegisterComponent extends Vue {

    mounted (){
      console.log('hello from app');
    }
    
  }

</script>

<style scoped lang="scss">
  .register {

  }
</style>
