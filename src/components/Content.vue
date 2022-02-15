<template>
    <div class="content_area">
{{ content}}
    </div>
</template>

<script>
import { Icon } from "@iconify/vue";
export default {
  name: "Content",
  components: {
    Icon,
  },
  props: {
        content: {
            type: String
        }
    }
};
</script>

<style>
.content_area {
    width: 100%;
    padding: 1em 4%;
}

@media screen and (min-width: 768px) {
    .content_area {
        width: 68%;
    }
}

@media screen and (min-width: 1024px) {
    .content_area {
        width: 78%;
    }
}
</style>