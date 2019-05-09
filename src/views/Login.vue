<template lang="html">
  <div class="main">
    <b-row align-v="center">
      <b-col md="3" offset-md="2">
        <b-img :src="require('../assets/logo.png')" ></b-img>
      </b-col>
      <b-col md="4" offset-md="2">
        <LoginForm :form="form" :onSubmit="onSubmit" :onReset="onReset" :show="show" />
      </b-col>
    </b-row>
  </div>
</template>

<script lang="js">

import LoginForm from '@/components/LoginForm.vue'

  export default  {
    name: 'login',
    components: {LoginForm},
    props: [],
    mounted() {

    },
    data() {
      return {
        form: {
          email: 'eve.holt@reqres.in',
          password: 'cityslicka'
        },
        show: true
      }
    },
     methods: {
      onSubmit(evt) {
        evt.preventDefault()
        // alert(JSON.stringify(this.form))
        const {email, password} = this.form
        this.$store.dispatch('login', {email, password}).then( () => {
          this.$router.push('/')
          this.flashMessage.success({
            message: 'Logado com Sucesso...'
          })
        })
        
      },
      logout: function () {
        this.$store.dispatch('logout').then(() => {})
      },
      onReset(evt) {
        evt.preventDefault()
        // Reset our form values
        this.form.email = ''
        this.form.senha = ''
        this.show = false
        this.$nextTick(() => {
          this.show = true
        })
      }
    }
}
</script>

<style scoped lang="scss">
</style>
