<template>
  <v-app-bar app class="toolbar">
    <v-spacer />
    <v-toolbar-title class="font-weight-black">{{ title }}</v-toolbar-title>
    <v-spacer />
  </v-app-bar>
</template>

<script>
import Vue from "vue";
export default Vue.extend({
  props: {
    title: String,
  },
});
</script>
<style lang="scss" scoped>
.toolbar {
  background-image: linear-gradient(90deg, #fff05a, #ffc700);
}
</style>
