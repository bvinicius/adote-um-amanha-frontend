<template>
  <div class="card px-5 py-3">
    <v-col class="py-0 px-0">
      <div class="card__title">Titulo</div>
      <div class="card__subtitle">Bens</div>
      <div class="card__subtitle">01/01/2022</div>
    </v-col>
    <div class="status-container d-flex align-end">
      <v-icon class="mr-1" :color="statusIconColor">{{ statusIcon }}</v-icon>
      <div class="card__status card__subtitle">Pendente</div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import { Status } from "../enums/Status";

export default Vue.extend({
  props: {
    necessity: Object,
  },
  computed: {
    statusIcon() {
      return this.necessity.status == Status.resolved
        ? "mdi-checkbox-marked-circle-outline"
        : "mdi-dots-horizontal-circle";
    },
    statusIconColor() {
      return this.necessity.status == Status.resolved ? "#3BB54A" : "#FFAA5A";
    },
  },
});
</script>

<style lang="scss" scoped>
.card {
  border: 1px solid #ffc700;
  border-radius: 20px;
  width: 100%;
  display: flex;

  &__title {
    font-size: 17px;
    font-weight: 400;
    color: #000;
  }

  &__subtitle {
    font-size: 14px;
    font-weight: 400;
    color: #00000099;
  }

  &__status {
    font-style: italic;
    line-height: 1.5;
    vertical-align: baseline;
  }
}
</style>
