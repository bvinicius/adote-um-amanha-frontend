<template>
  <v-container fill-height class="align-start">
    <v-container class="align-start">
      <div class="a-text__title">Adote um Amanhã</div>
    </v-container>
    <v-container class="align-center justify-center">
      <div class="d-flex justify-center">
        <img width="200px" src="../../../assets/img/logo.svg" />
      </div>
      <div class="a-text__subtitle mt-6">Bem-vindo!</div>
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

<script>
import Input from "../components/Input.vue";
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
  mounted() {
    this.$root.hideToolbar();
  },
  methods: {
    onLoginButtonClick() {
      console.log(this.login);
      console.log(this.password);
    },
  },
});
</script>

<style lang="scss">
.a-text__title,
.a-text__subtitle {
  text-align: center;
}

.inputs {
  max-width: 500px;
  margin: 0 auto;
}

.img {
  &-container {
    width: 100%;
    display: flex;
    justify-content: center;
  }
}
</style>
