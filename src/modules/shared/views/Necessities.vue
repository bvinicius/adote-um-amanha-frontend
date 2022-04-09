<template>
  <v-container>
    <v-row class="justify-center mt-3 mx-1">
      <Input
        label="Pesquisar..."
        prepend-inner-icon="mdi-magnify"
        class="mr-2"
      />
      <v-btn fab color="primary"
        ><v-icon color="black">mdi-filter-variant</v-icon></v-btn
      >
    </v-row>

    <v-row
      v-for="necessity in necessities"
      :key="necessity.id"
      class="justify-center mx-2 mb-2"
    >
      <NecessityCard
        :necessity="necessity"
        @click="onNecessityClick(necessity)"
      />
    </v-row>
  </v-container>
</template>

<script>
import { getNecessities } from "@/modules/institution/necessityService";
import Vue from "vue";
import Input from "../components/Input.vue";
import NecessityCard from "../components/NecessityCard.vue";
export default Vue.extend({
  components: { Input, NecessityCard },
  data: () => ({
    necessities: [],
  }),
  async mounted() {
    this.$root.showToolbar("NECESSIDADES");
    this.necessities = await getNecessities();
  },
  methods: {
    onNecessityClick(necessity) {
      this.$router.push(`/necessity/${necessity.id}`);
    },
  },
});
</script>

<style></style>
