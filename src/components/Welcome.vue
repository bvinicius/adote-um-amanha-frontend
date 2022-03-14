<template>
  <div class="container">
    <h1>{{ title }}</h1>
    <span>{{ description }}</span>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "Welcome",
  data: () => ({
    title: "Adote um Amanhã",
    description: "Este é um exemplo de componente vue.",
  }),
});
</script>
