<template>
  <div class="container">
    <h1>{{ title }}</h1>
    <span>{{ description }}</span>

    <h3>Dados falsos vindos da API:</h3>
    <div v-for="fakeUser in fakeData" :key="fakeUser.id">
      {{ fakeUser }}
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { getAllFakeData, FakeUser } from "../services/fakeDataService";

export default Vue.extend({
  name: "Welcome",
  data: () => ({
    title: "Adote um Amanhã",
    description: "Este é um exemplo de componente vue.",
    fakeData: [] as FakeUser[],
  }),
  mounted() {
    this.getFakeData();
  },
  methods: {
    async getFakeData() {
      this.fakeData = await getAllFakeData();
    },
  },
});
</script>
