<template>
  <v-container fill-height class="align-start">
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
  </v-container>
</template>

<script>
import Vue from "vue";
import Input from "../components/Input.vue";
export default Vue.extend({
  components: { Input },
  data: () => ({
    necessities: [],
  }),
  mounted() {
    this.$root.showToolbar("NECESSIDADES");
  },
});
</script>

<style></style>
