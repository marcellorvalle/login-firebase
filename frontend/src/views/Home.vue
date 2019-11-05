<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <Welcome />
  </div>
</template>

<script>
// @ is an alias to /src
import Welcome from '@/components/Welcome'

export default {
  name: 'home',
  components: {
    Welcome
  }
}
</script>
