<template>
  <v-text-field
    label="Senha"
    :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
    outlined
    @click:append="onIconClick"
    :type="showPassword ? 'text' : 'password'"
  />
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  data: () => ({
    showPassword: false,
  }),
  methods: {
    onIconClick() {
      this.showPassword = !this.showPassword;
    },
  },
});
</script>

<style></style>
