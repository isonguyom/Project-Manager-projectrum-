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

<style>
#tasksTable {
  width: 100%;
  text-align: left;
  border-collapse: collapse;
   margin-top: 1.5em;
}

#tasksTable th {
  color: #303030;
  font-size: 0.85rem;
  font-weight: 500;
  padding: 0.3em;
  height: 45px;
      border: 1px solid #DCDCDC;
}
</style>