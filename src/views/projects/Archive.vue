<template>
  <div class="teams">
    <!-- <h1>Archive Projects</h1> -->
<div class="projects_wrapper">
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
    </div>
  </div>
</template>

<script>
import { Icon } from "@iconify/vue";
import ProjectCard from "../../components/ProjectCard.vue";
export default {
  name: "ArchiveProjects",
  components: {
    Icon,
    ProjectCard
  },
};
</script>

<style scoped>

</style>