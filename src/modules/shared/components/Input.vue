<template>
  <v-text-field class="a-input" outlined v-bind="$attrs" v-on="$listeners" />
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  inheritAttrs: false,
});
</script>

<style lang="scss" scoped>
.a-input {
  border-radius: 10px !important;
  color: #ffc700 !important;
  border-color: #ffc700 !important;
}
</style>
