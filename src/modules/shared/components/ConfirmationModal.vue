<template>
  <v-dialog max-width="330" height="auto" v-bind="$attrs" v-on="$listeners">
    <v-card>
      <v-card-title class="text-h5">
        {{ title }}
      </v-card-title>

      <v-card-text>
        {{ message }}
      </v-card-text>

      <v-card-actions class="justify-center">
        <Button
          class="button--confirm mr-2"
          title="Cancelar"
          color="primary"
          @click="onCancelClick"
          outlined
        />
        <Button
          class="button--confirm"
          title="Confirmar"
          color="primary"
          @click="onConfirmClick"
        />
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
<script>
import Vue from "vue";
import Button from "./Button.vue";
export default Vue.extend({
  props: {
    title: String,
    message: String,
  },
  components: {
    Button,
  },
  methods: {
    onCancelClick() {
      this.$emit("cancel");
    },
    onConfirmClick() {
      this.$emit("confirm");
    },
  },
});
</script>

<style scoped>
.button--confirm {
  max-width: 120px;
}
</style>
