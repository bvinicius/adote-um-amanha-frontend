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
        <Input class="mx-10" label="E-mail" v-model="login" />
        <PasswordInput class="mx-10" label="Senha" v-model="password" />
        <div class="d-flex justify-center">
          <Button
            title="Entrar"
            color="primary"
            @click="onLoginButtonClick"
            :loading="loginButtonLoading"
          />
        </div>
      </div>
    </v-container>
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
import Input from "@/components/Input.vue";
import Vue from "vue";
import PasswordInput from "../components/PasswordInput.vue";
import Button from "../components/Button.vue";

export default Vue.extend({
  components: {
    PasswordInput,
    Input,
    Button,
  },
  data: () => ({
    login: "",
    password: "",
    loginButtonLoading: false,
  }),
  methods: {
    onLoginButtonClick() {
      console.log(this.login);
      console.log(this.password);
    },
  },
});
</script>

<style lang="scss">
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
</style>
