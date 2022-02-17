<template>
    <div class="projects">
        <!-- <h1>Projects</h1> -->
        <div class="lower_nav">
        <ul class="lower_menu">
                <router-link tag="li" class="nav_link" :to="{ name: 'PendingProjects' }">Pending</router-link>
                <router-link tag="li" class="nav_link" :to="{ name: 'CompletedProjects' }">Completed</router-link>
                <router-link tag="li" class="nav_link" :to="{ name: 'ArchiveProjects' }">Archive</router-link>
                <router-link tag="li" class="nav_link" :to="{ name: 'TrashProjects' }">Trash</router-link>

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
  name: "Projects",
  components: {
    Icon,
  },
};
</script>

<style scoped>

</style>