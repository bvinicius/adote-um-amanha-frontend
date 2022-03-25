<template>
  <div class="container">
    <div class="title mt-5">Adote um Amanhã</div>
    <div class="img-container">
      <img src="../assets/img/logo.svg" alt="" />
    </div>
    <div class="title mt-6">Bem-vindo!</div>
    <div class="inputs mt-6">
      <v-text-field class="mx-10" outlined label="E-mail"></v-text-field>
      <PasswordInput class="mx-10" />
      <div class="d-flex justify-center">
        <v-btn elevation="1" rounded class="px-10">Entrar</v-btn>
      </div>
    </div>

    <div class="footer-texts">
      <v-row>
        <span>Esqueceu sua senha?</span>
      </v-row>
      <v-row>
        <span>Esqueceu sua senha?</span>
      </v-row>
    </div>
  </div>
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
.title {
  font-size: 24px;
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
</style>
