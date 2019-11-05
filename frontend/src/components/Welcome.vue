<template>
  <div class="welcome"> 
      <h1>Welcome {{username}} !</h1>
  </div>
</template>
<script lang="ts">
  import Vue from 'vue';
  import Component from 'vue-class-component';

  @Component({})
  export default class WelcomeComponent extends Vue {
    username: string = '';

    mounted() {
      this.username = this.$store.getters.username
    }
  }

</script>

<style scoped lang="scss">
  .welcome {

  }
</style>
