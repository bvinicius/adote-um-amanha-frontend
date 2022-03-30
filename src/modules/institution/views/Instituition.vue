<template>
  <v-container class="align-start" fill-height>
    <v-container class="align-start px-7" v-if="instituition">
      <v-row class="mt-3 mb-4">
       <div class="header">
            <img width="65px" src="../../../assets/img/instituition-logo.png"/>
            <div class="a-text__bold-title">{{ instituition.name }}</div>
       </div>
      </v-row>
      <v-row
        class="justify-space-between mb-3"
        v-for="attribute in attributes"
        :key="attribute.key"
      >
        <div class="a-text">{{ attribute.key }}</div>
        <div class="a-text light">{{ attribute.value }}</div>
      </v-row>

<v-row class>
  <v-column >
    <a  v-bind:href="getUrl">Endereço</a>
       <div class="">Meu dereno</div>
      </v-column>
</v-row>
    
   
     
      
      
    </v-container>


    <v-container class="align-end">
      <v-row class="justify-center">
        <Button
          class="mr-4"
          title="Voltar"
          color="primary"
          prependIcon="mdi-arrow-left"
          outlined
        />
        <Button title="Editar" color="primary" prependIcon="mdi-pencil" />
      </v-row>
    </v-container>
  </v-container>
</template>

<script>
import Vue from "vue";
import { getInstituition } from "../services/InstituitionService";
import Button from "../../shared/components/Button.vue";
import InstituitionEntity from "../../institution/models/InstituitionEntity";


export default Vue.extend({
  data: () => ({
    instituition: null,
  }),
  async mounted() {
    this.$root.showToolbar("Perfil da instituição");
    this.instituition = await getInstituition(1)
  },
  components: {
    Button,
  },
  computed: {
    attributes() {
      return [
        {
          key: "Telefone",
          value: this.instituition.phone
        },
        {
          key: "Email",
          value: this.instituition.email
        },
        {
          key: "Site",
          value: this.instituition.site
        },
        

      ];

    },
     getUrl(){
       return "https://www.google.com/maps/search/"+this.instituition.adress
    }
  },
});
</script>

<style>
.a-text {
  color: #000000;
}

.header{
    display: flex;
    align-items: center;
}

.a-text__bold-title{
    padding: 30px;
}





</style>

