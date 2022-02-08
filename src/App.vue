<template>
   <div>
    <router-view />
  </div>
</template>

<script>
import { Icon } from '@iconify/vue'
export default {
  name: 'App',
  components: {
		Icon,
	}
  }
  

</script>

<style>
*,
*::before,
*::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

*:focus {
  outline: 1px solid #FFDA5A;
}

img {
  max-width: 100%;
}

.onboarding {
  width: 100%;
  min-height: 100vh;
  background: #4B7FB9;
  display: flex;
  justify-content: center;
  align-items: center;
}

.onboarding img {
  display: block;
  width: 40%;
}
</style>
