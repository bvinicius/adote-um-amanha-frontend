<template>
  <v-container class="px-8">
    <v-row class="mt-8">
      <Input label="Assunto" v-model="necessity.title" />
    </v-row>
    <v-row>
      <Select
        :items="testItems"
        placeholder="Subcategoria"
        v-model="necessity.subcategory"
      />
    </v-row>
    <v-row>
      <TextArea
        outlined
        name="input-descricao"
        label="Descrição"
        value="Descrição da necessidade."
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
import Categories, { Category } from "../../shared/enums/Category";
import SubCategories, { Subcategory } from "../../shared/enums/Subcategory";
export default Vue.extend({
  mounted() {
    this.$root.showToolbar("NECESSIDADE");
  },
  components: {
    Input,
    Button,
    Select,
    TextArea,
  },
  data: () => ({
    testItems: ["Valor1", "Valor2", "Valor3"],
    necessity: {
      id: 12,
      title: "Necessidade x",
      createdDate: new Date(),
      category: Category.service,
      subcategory: Subcategory.health,
      url: "google.com",
      description: "Teste descrição",
    },
  }),
});
Button;
</script>

<style></style>
