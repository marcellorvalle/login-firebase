<template>
  <div class="create-user"> 
      <h1>create-userComponent</h1>
  </div>
</template>
<script lang="ts">
  import Vue from 'vue';
  import Component from 'vue-class-component';

  @Component({})
  export default class CreateUserComponent extends Vue {

    mounted (){
      console.log('hello from app');
    }
    
  }

</script>

<style scoped lang="scss">
  .create-user {

  }
</style>
