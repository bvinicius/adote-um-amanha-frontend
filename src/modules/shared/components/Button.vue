<template>
  <v-btn
    class="a-button v-application px-9 py-5"
    :class="{ disabled: $attrs.disabled }"
    elevation="0"
    v-bind="$attrs"
    v-on="$listeners"
  >
    <v-icon v-if="prependIcon" left dark>{{ prependIcon }}</v-icon>
    {{ title }}
    <v-icon v-if="appendIcon" right dark>{{ appendIcon }}</v-icon>
  </v-btn>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  props: {
    title: String,
    prependIcon: String,
    appendIcon: String,
  },
});
</script>

<style scoped lang="scss">
.a-button {
  text-transform: none !important;
  border-radius: 16px !important;
  color: #191919 !important;
  font-size: 16px !important;
  font-weight: 400 !important;
  box-sizing: border-box;
  border: 2px solid #ffd25a !important;
  transition: 300ms;
}

.disabled {
  border: 2px solid rgba(0, 0, 0, 0) !important;
}
</style>
