<template>
    <div>
        <Header></Header>
        <div class="main_body">
        <Sidemenu />
        <Content   
        :content="'Nothing on dashboard'" 
         />
        </div>
    </div>
</template>

<script>
import { Icon } from "@iconify/vue";
import Header from "../components/Header.vue";
import Sidemenu from "../components/Sidemenu.vue";
import Content from "../components/Content.vue";
export default {
  name: "Main Dashboard",
  components: {
    Icon,
    Header,
    Sidemenu,
    Content
  },
};
</script>

<style>
.main_body {
  display: flex;
  align-items: flex-start;
}
</style>