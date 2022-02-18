<template>
  <div>
    <router-view />
  </div>
</template>

<script>
import { Icon } from "@iconify/vue";
export default {
  name: "App",
  components: {
    Icon,
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins&display=swap");

*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html,
body {
  -webkit-text-size-adjust: 100%;
  text-size-adjust: 100%;
  font-size: 100%;
  font-family: "Poppins", sans-serif;
  color: #202020;
  scroll-behavior: smooth;
  font-weight: 400;
}

*:focus {
  outline: 1px solid #cac8be;
}

img {
  max-width: 100%;
}

a {
  color: #4b7fb9;
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}

.onboarding {
  width: 100%;
  min-height: 100vh;
  background: #4b7fb9;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
}

.onboarding img {
  display: block;
  width: 40%;
}

.main_nav a.router-link-exact-active, .main_nav a.router-link-active {
  background: #4b7fb9;
  color: #fff !important;
  font-weight: 500;
}

.main_nav a:hover {
  background: #4b7fb9;
  color: #fff !important;
  font-weight: 500;
}

.lower_nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-right: 3.5em;
  width: 100%;
}

.lower_menu .nav_link {
  margin-right: 1.5em;
  text-decoration: none;
  font-size: 0.9rem;
  color: #404040;
}

.create_btn {
  color: #4b7fb9;
  border: none;
  background: transparent;
  cursor: pointer;
}

.create_btn:hover {
  color: #ffda5a;
}

.lower_menu a.router-link-exact-active {
  color: #4b7fb9 !important;
}

.lower_menu a:hover {
  color: #4b7fb9 !important;
}
</style>
