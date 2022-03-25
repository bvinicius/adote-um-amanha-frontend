<template>
  <div class="container">
    <h1>{{ title }}</h1>
    <span>{{ description }}</span>
  </div>
</template>

<script>
import Vue from "vue";
export default Vue.extend({
  name: "Welcome",
  props: {
    title: String,
    description: String,
  },
  data: () => ({}),
});
</script>
