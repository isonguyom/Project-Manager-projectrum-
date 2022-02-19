<template>
  <div class="teams">
    <!-- <h1>Pending Tasks</h1> -->
    <table id="tasksTable">
      <tr>
        <th></th>
        <th>Tasks</th>
        <th>Projects</th>
        <th>Assignees</th>
        <th>Deadline</th>
      </tr>
      <TaskCard />
      <TaskCard />
      <TaskCard />
      <TaskCard />
      <TaskCard />
      <TaskCard />
      <TaskCard />
      <TaskCard />
      <TaskCard />
      <TaskCard />
    </table>

  </div>
</template>

<script>
import { Icon } from "@iconify/vue";
import TaskCard from "../../components/TaskCard.vue";
export default {
  name: "PendingTasks",
  components: {
    Icon,
    TaskCard
  },
};
</script>

<style>

</style>