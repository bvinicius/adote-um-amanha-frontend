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
  .v-input__slot {
    border-radius: 20px !important;
    caret-color: #ffc700 !important;
    color: white;
  }
}
</style>
