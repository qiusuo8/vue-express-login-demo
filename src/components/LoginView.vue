<template>
  <div>
      <input class="form-control" id="input-email" placeholder="Account name" v-model="account">
      <input type="password" name="form-control" id="input-password" placeholder="Password" v-model="password">
      <button type="submit" class="btn btn-default" @click="login">Sign In</button>
      <button type="submit" class="btn btn-default" @click="register">Register</button>
      <button type="submit" class="btn btn-default" @click="getAllAccount">Get all accounts</button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      account: '',
      password: ''
    }
  },
  methods: {
    login () {
      let params = {
        account: this.account,
        password: this.password
      }
      this.$http.post('/api/user/login', params)
        .then((response) => {
          console.log(response)
          var message = response.body.message
          if (response.body.status === 1000) {
            message = response.body.data[0].account + ' ' + message
          }
          alert(message)
        })
        .catch((reject) => {
          console.log(reject)
        })
    },
    register () {
      let params = {
        account: this.account,
        password: this.password
      }
      this.$http.post('/api/user/register', params)
        .then((response) => {
          console.log(response)
          var message = response.body.message
          if (response.body.status === 1000) {
            message = this.account + ' ' + message
          }
          alert(message)
        })
        .catch((reject) => {
          console.log(reject)
        })
    },
    getAllAccount () {
      console.log('call getAllAccount')
      this.$http.get('/api/user/all')
        .then((response) => {
          console.log(response)
        })
        .catch((reject) => {
          console.log(reject)
        })
    }
  }
}
</script>
