<template>
  <v-container class="px-8 d-flex align-start" v-if="newNecessity" fill-height>
    <v-container class="px-0">
      <v-form v-model="isFormValid">
        <v-row class="mt-8">
          <Input
            label="Assunto"
            v-model="newNecessity.title"
            :rules="[inputValidations.required]"
          />
        </v-row>
        <v-row>
          <Select
            :items="allSubcategories"
            label="Subcategoria"
            v-model="currentSubcategoryObject"
            item-text="name"
            item-value="value"
            :rules="[inputValidations.required]"
          />
        </v-row>
        <v-row>
          <TextArea
            name="input-descricao"
            label="Descrição"
            v-model="newNecessity.description"
          ></TextArea>
        </v-row>
        <v-row>
          <v-radio-group v-model="newNecessity.category">
            <v-radio
              v-for="category of allCategories"
              :key="category.value"
              :value="parseInt(category.value)"
              :label="category.name"
            >
            </v-radio>
          </v-radio-group>
        </v-row>
      </v-form>
    </v-container>
    <v-container class="px-0">
      <v-row class="justify-center">
        <Button
          title="Excluir"
          class="mr-6"
          color="error"
          outlined
          prependIcon="mdi-delete"
        />
        <Button
          title="Salvar"
          color="primary"
          :disabled="!isSaveButtonDisabled"
          prependIcon="mdi-content-save"
        />
      </v-row>
    </v-container>
  </v-container>
</template>

<script>
import Vue from "vue";
import Input from "../../shared/components/Input.vue";
import Button from "../../shared/components/Button.vue";
import Select from "../../shared/components/Select.vue";
import TextArea from "../../shared/components/TextArea.vue";
import CategoryUtils, { Category } from "../../shared/enums/Category";
import SubcategoriesUtils, {
  Subcategory,
} from "../../shared/enums/Subcategory";
import InputValidations from "../../shared/utils/InputValidations";

export default Vue.extend({
  mounted() {
    this.$root.showToolbar("NECESSIDADE");
    this.newNecessity = { ...this.necessity };
  },
  components: {
    Input,
    Button,
    Select,
    TextArea,
  },
  data: () => ({
    necessity: {
      id: 12,
      title: "Necessidade x",
      createdDate: new Date(),
      category: Category.service,
      subcategory: Subcategory.health,
      url: "google.com",
      description: "Teste descrição",
    },
    newNecessity: null,
    isFormValid: true,
  }),
  computed: {
    allSubcategories() {
      return SubcategoriesUtils.allObjects();
    },
    allCategories() {
      return CategoryUtils.allPluralObjects();
    },
    currentSubcategoryObject: {
      get() {
        return SubcategoriesUtils.toObject(this.newNecessity.subcategory);
      },
      set(value) {
        this.newNecessity.subcategory = value;
      },
    },
    currentCategoryObject: {
      get() {
        return CategoryUtils.toSingularObject(this.newNecessity.category);
      },
      set(value) {
        this.newNecessity.category = value;
      },
    },
    isSaveButtonDisabled() {
      return this.necessityHasChanged && this.isFormValid;
    },
    necessityHasChanged() {
      return (
        JSON.stringify(this.newNecessity) !== JSON.stringify(this.necessity)
      );
    },
    inputValidations() {
      return InputValidations;
    },
  },
});
Button;
</script>

<style></style>
