<template>
<div class="onboarding">

<img src="../assets/Logo_white.svg" alt="">
<router-link tag="button" class="home_btn" :to="{ name: 'Dashboard' }">Dashboard</router-link>
</div>
</template>

<script>

export default {
  name: 'Home',
  components: {
   
  }
}
</script>

<style scoped>
.home_btn {
  margin-top: 2em;
  padding: 0.7em;
  text-decoration: none;
  color: #4b7fb9;
  background: #FFf;
  border-radius: 5px;
}
</style>