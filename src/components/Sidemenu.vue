<template>
  <div class="side_menu">
    <ul class="main_nav">
      <li><a href="">Dashboard</a></li>
      <li><a href="">Projects</a></li>
      <li><a href="">Tasks</a></li>
      <li><a href="">Calendar</a></li>
      <li><a href="">Messages</a></li>
      <li><a href="">Files</a></li>
      <li><a href="">Settings</a></li>
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

.main_nav li a {
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