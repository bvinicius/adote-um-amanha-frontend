<template>
  <div class="home">
    <Welcome :title="title" :description="description" />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Welcome from "../components/Welcome.vue";

export default Vue.extend({
  name: "Home",
  components: { Welcome },
  data: () => ({
    title: "Título!!",
    description: "Descrição!!!",
  }),
});
</script>
