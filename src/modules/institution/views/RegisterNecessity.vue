<template>
  <v-container class="align-end" fill-height>
    <v-tabs v-model="tab" background-color="transparent" color="basil" grow>
      <v-tabs-items v-model="tab">
        <v-tab-item key="1"> <NecessityStep1 /> </v-tab-item>
        <v-tab-item key="2"> conteudo 2 </v-tab-item>
        <v-tab-item key="3"> conteudo 3 </v-tab-item>
      </v-tabs-items>
    </v-tabs>
    <v-row class="justify-center mb-4">
      <Button
        class="mr-4 a-button"
        title="Voltar"
        color="primary"
        prependIcon="mdi-arrow-left"
        outlined
        @click="onBackButtonClick"
      />
      <Button
        class="a-button"
        :title="buttonTitle"
        color="primary"
        :appendIcon="buttonIcon"
        @click="onNextButtonClick"
      />
    </v-row>
  </v-container>
</template>

<script>
import Vue from "vue";
import Button from "../../shared/components/Button.vue";
import NecessityStep1 from "../../shared/components/RegisterNecessitySteps/NecessityStep1.vue";
export default Vue.extend({
  components: { Button, NecessityStep1 },
  data: () => ({
    tab: 0,
  }),
  methods: {
    onNextButtonClick() {
      if (this.tab < 2) this.tab++;
    },
    onBackButtonClick() {
      if (this.tab > 0) this.tab--;
    },
  },
  mounted() {
    this.$root.showToolbar("CADASTRAR NECESSIDADE");
  },
  computed: {
    buttonTitle() {
      if (this.tab == 2) return "Confirmar";
      return "Continuar";
    },
    buttonIcon() {
      if (this.tab == 2) return "mdi-check";
      else return "mdi-arrow-right";
    },
  },
});
</script>

<style>
.a-text {
  color: #0000;
}
.a-button {
  max-width: 160px;
}
</style>
