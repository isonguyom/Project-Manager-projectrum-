<template>
  <div class="about">
    <Content
      :content="'Nothing on about'"
    />
  </div>
</template>
<script>
import { Icon } from "@iconify/vue";
import Content from "../components/Content.vue";
export default {
  name: "Main",
  components: {
    Icon,
    Content
  },
};
</script>

<style>

.about {
  position: relative;
}
</style>