<template>
  <div class="teams">
    <!-- <h1>Teams</h1> -->
            <button class="create_btn">
<Icon icon="akar-icons:circle-plus-fill" width="30" />        
</button>
<div class="teams_wrapper">
      <TeamCard class="team_card_d" />
      <TeamCard class="team_card_d" />
      <TeamCard class="team_card_d" />
      <TeamCard class="team_card_d" />
      <TeamCard class="team_card_d" />
      <TeamCard class="team_card_d" />
      <TeamCard class="team_card_d" />
      <TeamCard class="team_card_d" />
      <TeamCard class="team_card_d" />
      <TeamCard class="team_card_d" />
      <TeamCard class="team_card_d" />
      <TeamCard class="team_card_d" />
      <TeamCard class="team_card_d" />
      <TeamCard class="team_card_d" />
    </div>
  </div>
</template>

<script>
import { Icon } from "@iconify/vue";
import TeamCard from "../components/TeamCard.vue";
export default {
  name: "Teams",
  components: {
    Icon,
    TeamCard
  },
};
</script>

<style scoped>
.create_btn {
  position: relative;
 left: 90%;
}

.teams_wrapper {
  margin-top: 2em;
display: flex;
justify-content: space-between;
align-content: space-around;
flex-wrap: wrap;
}

.teams_wrapper>*{
  margin-bottom: 2em;
}

.teams_wrapper .team_card_d:nth-child(even) {
background: #ffdb5a41;
}

</style>