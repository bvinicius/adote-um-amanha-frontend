<template>
  <v-container class="px-8">
    <v-row class="mt-8">
      <Input label="Assunto" v-model="necessity.title" />
    </v-row>
    <v-row>
      <Select
        :items="allSubcategories"
        placeholder="Subcategoria"
        v-model="necessity.subcategory"
      />
    </v-row>
    <v-row>
      <TextArea
        name="input-descricao"
        label="Descrição"
        v-model="necessity.description"
      ></TextArea>
    </v-row>
    <v-row>
      <v-radio-group v-model="necessity.category">
        <v-radio :label="`Radio ${n}`" :value="n - 1"></v-radio>
      </v-radio-group>
    </v-row>
    <v-row class="justify-center">
      <Button title="Excluir" class="mr-6" />
      <Button title="Salvar" />
    </v-row>
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
  }),
  computed: {
    allSubcategories() {
      return SubcategoriesUtils.allEntries();
    },
  },
});
Button;
</script>

<style></style>
