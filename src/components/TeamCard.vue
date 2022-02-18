<template>
  <div class="team_card">
    <img class="team_card_avatar" src="../assets/header_potrait.jpg" alt="">
    <h2 class="team_card_name">Team Name</h2>
    <hr>
    <div class="team_card_footer">
        <div>
            <span><Icon icon="heroicons-solid:users" :inline="true" /> 3</span>
            <span><Icon class="menu_icon" icon="zondicons:travel-case" :inline="true" /> 4</span>
        </div>
        <a href="http://">View team</a>
    </div>
  </div>
</template>

<script>
import { Icon } from "@iconify/vue";
export default {
  name: "TeamCard",
  components: {
    Icon,
  },
};
</script>

<style scoped>
.team_card {
  width: 100%;
  max-width: 200px;
  border-radius: 5px;
  padding: 0.7em;
  line-height: 1.5em;
  text-align: center;
  background: #4b7eb923;
}

.team_card>* {
  margin: 0.2em 0;
}

.team_card .team_card_avatar {
  width: 80px;
  height: 80px;
  border-radius: 50%;
}

.team_card .team_card_name {
  color: #404040;
  font-size: 0.9rem;
}

.team_card hr {
border: 1px solid #DCDCDC;
border-radius: 50%;
margin: 1em auto 0.5em;
width: 100px;
}

.team_card .team_card_footer {
  display: flex;
  justify-content: space-between;
  font-size: 0.8rem;
  color: #707070;
}

.team_card .team_card_footer span:first-child {
  margin-right: 0.8em;
}

</style>