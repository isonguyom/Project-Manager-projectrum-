<template>
  <div class="teams">
    <!-- <h1>Trash Projects</h1> -->
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
  name: "TrashProjects",
  components: {
    Icon,
    ProjectCard
  },
};
</script>

<style scoped>

</style>