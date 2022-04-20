<template>
  <div class="projects">
    <!-- <h1>Pending Projects</h1> -->
    <div class="projects_wrapper">
      <ProjectCard />
    </div>
  </div>
</template>

<script>
import { Icon } from "@iconify/vue";
import ProjectCard from "../../components/ProjectCard.vue";
export default {
  name: "PendingProjects",
  components: {
    Icon,
    ProjectCard,
  },
};
</script>

<style scoped>

</style>