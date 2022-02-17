<template>
  <div class="teams">
    <!-- <h1>Teams</h1> -->
            <button class="create_btn">
<Icon icon="akar-icons:circle-plus-fill" width="30" />        
</button>
  </div>
</template>

<script>
import { Icon } from "@iconify/vue";
export default {
  name: "Teams",
  components: {
    Icon,
  },
};
</script>

<style scoped>
.create_btn {
  position: relative;
 left: 90%;
}
</style>