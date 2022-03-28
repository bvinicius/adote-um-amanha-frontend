<template>
  <v-app-bar app class="toolbar" v-if="visible">
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
    visible: Boolean,
  },
});
</script>
<style lang="scss" scoped>
.toolbar {
  background-image: linear-gradient(90deg, #fff05a, #ffc700);
}
</style>
