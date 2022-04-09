<template>
  <v-container class="align-start" fill-height>
    <v-tabs v-model="tab" grow>
      <v-tabs-items v-model="tab">
        <v-tab-item key="1">
          <div class="a-text__subtitle">
            Sua solicitação refere-se a um bem ou a um serviço?
          </div>
          <SelectCardGroup
            :options="step1Options"
            @cardSelected="onCategorySelected"
          />
        </v-tab-item>
        <v-tab-item key="2">
          <div class="a-text__subtitle">No que você precisa de ajuda?</div>
          <v-container>
            <SelectCardGroup
              :options="step2Options"
              @cardSelected="onSubcategorySelected"
            />
          </v-container>
        </v-tab-item>
        <v-tab-item key="3">
          <div class="a-text__subtitle">
            Para finalizar, conte um pouco mais sobre a sua solicitação.
          </div>
        </v-tab-item>
      </v-tabs-items>
    </v-tabs>
    <v-col class="justify-center align-self-end">
      <v-row class="justify-center mb-5">
        <Stepper :number="tab + 1" class="align-center"></Stepper>
      </v-row>
      <v-row class="justify-center mb-4 align-self-end">
        <Button
          class="mr-2 a-button"
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
    </v-col>
  </v-container>
</template>

<script>
import Vue from "vue";
import Button from "../../shared/components/Button.vue";
import Stepper from "../../shared/components/Stepper.vue";
import SelectCardGroup from "../../shared/components/SelectCards/SelectCardGroup.vue";
import CategoryUtils from "../../shared/enums/Category";
import { Category } from "../../shared/enums/Category";
import Subcategory from "../../shared/enums/Subcategory";
export default Vue.extend({
  components: { Button, Stepper, SelectCardGroup },
  data: () => ({
    tab: 0,
    step1Options: [
      CategoryUtils.toSingularObject(Category.asset),
      CategoryUtils.toSingularObject(Category.service),
    ],
    step2Options: Subcategory.allObjects(),
    necessity: {},
  }),
  methods: {
    onNextButtonClick() {
      if (this.tab < 2) this.tab++;
    },
    onBackButtonClick() {
      if (this.tab > 0) this.tab--;
    },
    onCategorySelected(category) {
      this.necessity.category = category;
      console.log(this.necessity);
    },
    onSubcategorySelected(subcategory) {
      this.necessity.subcategory = subcategory;
      console.log(this.necessity);
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
.align-center {
  align-items: center;
}
</style>
