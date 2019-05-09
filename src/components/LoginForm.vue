<template lang="html">
  <b-form @submit="onSubmit" v-if="show">
    <b-form-group
      id="input-group-1"
      label="E-mail:"
      label-for="input-1"
      description="Informe seu e-mail."
    >
      <b-form-input
        id="input-1"
        v-model="form.email"
        type="email"
        required
        placeholder="E-mail"
        autofocus
      ></b-form-input>
    </b-form-group>

    <b-form-group id="input-group-2" label="Senha:" label-for="input-2">
      <b-form-input
        id="input-2"
        v-model="form.password"
        type="password"
        placeholder="Senha"
      ></b-form-input>
    </b-form-group>

    <b-button type="submit" variant="primary">Acessar</b-button>
  </b-form>
</template>

<script>
export default {
    name: 'LoginForm',
    props: ['form', 'show', 'onSubmit', 'onReset']
};
</script>
