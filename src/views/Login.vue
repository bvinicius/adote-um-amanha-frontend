<template>
  <v-container fill-height class="align-start">
    <v-container class="align-start">
      <div class="a-title">Adote um Amanhã</div>
      <div class="img-container">
        <img src="../assets/img/logo.svg" alt="" />
      </div>
      <div class="a-title mt-6">Bem-vindo!</div>
    </v-container>
    <v-container class="align-center">
      <div class="inputs mt-6">
        <v-text-field class="mx-10" outlined label="E-mail"></v-text-field>
        <PasswordInput class="mx-10" />
        <div class="d-flex justify-center">
          <v-btn elevation="1" rounded class="px-10">Entrar</v-btn>
        </div>
      </div>
    </v-container>

    <!-- <v-spacer /> -->
    <v-container class="align-end">
      <v-col class="mt-10" align-self="stretch">
        <v-row class="d-flex justify-center">
          <span>Ainda não tem conta?</span>&nbsp;<a>Cadastre-se!</a>
        </v-row>
      </v-col>
    </v-container>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
import PasswordInput from "../components/PasswordInput.vue";

export default Vue.extend({
  components: {
    PasswordInput,
  },
});
</script>

<style lang="scss">
.v-application {
  .a-title {
    font-size: 26px;
    font-weight: 400;
    color: #191919;
    text-align: center;
  }

  .img {
    &-container {
      width: 100%;
      display: flex;
      justify-content: center;
    }
  }
}
</style>
