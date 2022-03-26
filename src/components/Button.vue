<template>
  <v-btn
    class="a-button px-9 py-5"
    elevation="0"
    v-bind="$attrs"
    v-on="$listeners"
    >{{ title }}</v-btn
  >
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  props: {
    title: String,
  },
});
</script>

<style scoped>
.a-button {
  text-transform: none !important;
  border-radius: 16px !important;
  color: #191919 !important;
  font-size: 16px !important;
  font-weight: 400 !important;
}
</style>
