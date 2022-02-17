<template>
  <div class="side_menu">
    <ul class="main_nav">
      <router-link tag="li" class="nav_link" :to="{ name: 'Dashboard' }"><Icon class="menu_icon" icon="ic:round-space-dashboard" :inline="true" />Dashboard</router-link>
      <router-link tag="li" class="nav_link" :to="{ name: 'Projects' }"><Icon class="menu_icon" icon="zondicons:travel-case" :inline="true" />Projects</router-link>
      <router-link tag="li" class="nav_link" :to="{ name: 'Tasks' }"><Icon class="menu_icon" icon="fa-solid:tasks" :inline="true" />Tasks</router-link>
      <router-link tag="li" class="nav_link" :to="{ name: 'Teams' }"><Icon class="menu_icon" icon="bxl:microsoft-teams" :inline="true" />Teams</router-link>
      <router-link tag="li" class="nav_link" :to="{ name: 'Calendar' }"><Icon class="menu_icon" icon="clarity:calendar-solid" :inline="true" />Calendar</router-link>
      <router-link tag="li" class="nav_link" :to="{ name: 'Messages' }"><Icon class="menu_icon" icon="bi:envelope-open-fill" :inline="true" />Messages</router-link>
      <router-link tag="li" class="nav_link" :to="{ name: 'Files' }"><Icon class="menu_icon" icon="jam:files-f" :inline="true" />Files</router-link>
      <router-link tag="li" class="nav_link" :to="{ name: 'Settings' }"><Icon class="menu_icon" icon="eva:settings-2-fill" :inline="true" />Settings</router-link>
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

<style scoped>
.side_menu {
  padding: 1em 4%;
  display: none;
}

.main_nav {
  list-style: none;
}

.main_nav a.nav_link {
  display: block;
  padding: 0.8em;
  border: 1px solid #dcdcdc;
  border-radius: 5px;
  margin: 0.6em 0;
  color: #202020;
    text-decoration: none;
}

.main_nav a:first-child {
    margin-top: 0;
}

.menu_icon {
  margin-right: 0.55em;
}


@media screen and (min-width: 768px) {
    .side_menu {
        width: 30%;
        display: block;
    }
}

@media screen and (min-width: 1024px) {
    .side_menu {
        width: 20%;
    }
}
</style>