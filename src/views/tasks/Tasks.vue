<template>
  <div class="tasks">
    <!-- <h1>Tasks</h1> -->
    <div class="lower_nav">
      <ul class="lower_menu">
        <router-link tag="li" class="nav_link" :to="{ name: 'PendingTasks' }"
          >Pending</router-link
        >
        <router-link tag="li" class="nav_link" :to="{ name: 'CompletedTasks' }"
          >Completed</router-link
        >
        <router-link tag="li" class="nav_link" :to="{ name: 'ArchiveTasks' }"
          >Archive</router-link
        >
        <router-link tag="li" class="nav_link" :to="{ name: 'TrashTasks' }"
          >Trash</router-link
        >
      </ul>
      <button class="create_btn">
        <Icon icon="akar-icons:circle-plus-fill" width="30" />
      </button>
    </div>
    <router-view />
  </div>
</template>

<script>
import { Icon } from "@iconify/vue";
export default {
  name: "Tasks",
  components: {
    Icon,
  },
};
</script>

<style scoped>
</style>