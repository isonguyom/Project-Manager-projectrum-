<template>
  <div class="project_card" v-for="project in projects" :key="project.title">
    <div class="project_card_header">
      <div>
        <h2 class="project_card_title">{{ project.title }}</h2>
        <p class="project_card_description">{{ project.description }}</p>
      </div>
      <div class="project_card_nav">
        <button class="project_card_morebtn" @click="toggleMenu">
          <Icon icon="akar-icons:more-horizontal-fill" color="#606060" />
        </button>
        <ul class="project_card_menu" v-if="showMenu">
          <li><a href="">View project</a></li>
          <li><a href="">Share</a></li>
          <li><a href="">Archive</a></li>
          <li><a href="">Trash</a></li>
        </ul>
      </div>
    </div>
    <div class="project_card_date">
      <span
        >Created: <a href="http://">{{ project.date_created }}</a></span
      >
      <span
        >Deadline: <a href="http://">{{ project.deadline }}</a></span
      >
    </div>
    <div class="project_card_progress">{{ project.range }}</div>
    <div class="project_card_footer">
      <div class="project_card_collaborators">
        <p>Collabators</p>
        <div>
          <!-- {{ project.collaborators }} -->
          <img src="../assets/header_potrait.jpg" alt="" srcset="" />
          <img src="../assets/header_potrait.jpg" alt="" srcset="" />
          <img src="../assets/header_potrait.jpg" alt="" srcset="" />
        </div>
      </div>
      <a class="project_card_comment" href="http://"
        >{{ project.comment }} Comments</a
      >
    </div>
  </div>
</template>

<script>
import { Icon } from "@iconify/vue";
export default {
  name: "ProjectCard",
  components: {
    Icon,
  },
  data() {
    return {
      showMenu: false,
      projects: [
        {
          title: "Task Title",
          description: "Description",
          date_created: "Today",
          deadline: "Tomorrow",
          range: "10/25",
          comment: 7,
          collaborators: [
            {
              collab1: "../assets/header_potrait.jpg",
            },
          ],
        },
      ],
    };
  },

  methods: {
    toggleMenu() {
      this.showMenu = !this.showMenu;
    },
  },
};
</script>

<style scoped>
.project_card {
  width: 100%;
  max-width: 300px;
  border: 1px solid #dcdcdc;
  border-radius: 5px;
  padding: 0.7em;
  line-height: 1.5em;
}

.project_card > div {
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5em;
}

.project_card > div:last-child {
  margin-bottom: 0;
}

.project_card a {
  font-size: 0.8rem;
}

.project_card .project_card_header {
  align-items: flex-start;
}

.project_card .project_card_title {
  color: #252525;
  font-size: 0.9rem;
}

.project_card .project_card_description {
  color: #606060;
  font-size: 0.85rem;
}

.project_card .project_card_nav {
  position: relative;
  text-align: right;
}

.project_card .project_card_morebtn {
  background: transparent;
  border: none;
  cursor: pointer;
}

.project_card .project_card_menu {
  text-align: left;
  list-style: none;
  background: white;
  border-radius: 5px;
  box-shadow: 2px 2px 5px #25252523, -2px -2px 5px #25252523;
  padding: 0.7em;
  position: absolute;
  right: 0;
  width: 115px;
}

.project_card .project_card_menu a {
  color: #404040;
  font-size: 0.85rem;
}

.project_card .project_card_date {
  color: #707070;
  font-size: 0.8rem;
  justify-content: start;
}

.project_card .project_card_date span:first-child {
  margin-right: 1.5em;
}

.project_card .project_card_progress {
  width: 110px;
  height: 110px;
  align-items: center;
  justify-content: center;
  margin: 0 auto 0.5em;
  border: 8px solid #dcdcdc;
  border-radius: 50%;
  font-size: 0.8rem;
  color: #707070;
}

.project_card .project_card_footer {
  align-items: flex-end;
}

.project_card .project_card_collaborators {
  color: #606060;
  font-size: 0.85rem;
}

.project_card .project_card_collaborators img {
  width: 35px;
  height: 35px;
  border-radius: 50%;
  margin-right: 0.1em;
  cursor: pointer;
}
</style>