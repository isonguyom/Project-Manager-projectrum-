<template>
  <div class="side_menu">
    <ul class="main_nav">
      <li><router-link class="nav_link" :to="{ name: 'Dashboard' }">Dashboard</router-link></li>
      <li><router-link class="nav_link" :to="{ name: 'Projects' }">Projects</router-link></li>
      <li><router-link class="nav_link" :to="{ name: 'Tasks' }">Tasks</router-link></li>
      <li><router-link class="nav_link" :to="{ name: 'Dashboard' }">Calendar</router-link></li>
      <li><router-link class="nav_link" :to="{ name: 'Dashboard' }">Messages</router-link></li>
      <li><router-link class="nav_link" :to="{ name: 'Dashboard' }">Files</router-link></li>
      <li><router-link class="nav_link" :to="{ name: 'Dashboard' }">Settings</router-link></li>
    </ul>
  </div>
</template>

<script>
import { Icon } from "@iconify/vue";
export default {
  name: "Sidemenu",
  components: {
    Icon,
  },
};
</script>

<style>
.side_menu {
  padding: 1em 4%;
}

.main_nav {
  list-style: none;
}

.main_nav li {
  padding: 0.8em;
  border: 1px solid #dcdcdc;
  border-radius: 7px;
  margin: 0.7em 0;
}

.main_nav li:first-child {
    margin-top: 0;
}

.main_nav li .nav_link {
    color: #202020;
    text-decoration: none;
    display: block;
}

@media screen and (min-width: 768px) {
    .side_menu {
        width: 30%;
    }
}

@media screen and (min-width: 1024px) {
    .side_menu {
        width: 20%;
    }
}
</style>