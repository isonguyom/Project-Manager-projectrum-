<template>
  <div>
    <Header />
    <div class="main_body">
      <Sidemenu />
      <div class="content">
        <router-view />
      </div>
    </div>
    
  </div>
</template>

<script>
import { Icon } from "@iconify/vue";
import Header from "../components/Header.vue";
import Sidemenu from "../components/Sidemenu.vue";
export default {
  name: "Main",
  components: {
    Icon,
    Header,
    Sidemenu,
  },
};
</script>

<style>
.main_body {
  display: flex;
}

.content {
  width: 100%;
  padding: 1em 4%;
}

@media screen and (min-width: 768px) {
  .content {
    width: 70%;
  }
}

@media screen and (min-width: 1024px) {
  .content {
    width: 80%;
  }
}
</style>