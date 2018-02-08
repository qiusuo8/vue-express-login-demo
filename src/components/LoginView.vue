<template>
  <div>
      <input class="form-control" id="input-email" placeholder="请输入账号" v-model="account">
      <input type="password" name="form-control" id="input-password" placeholder="请输入密码" v-model="password">
      <button type="submit" class="btn btn-default" @click="login">登录</button>
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
      console.log('logint')
      this.$http.get('/api/login/getAccount')
        .then((response) => {
          console.log(response)
          let params = {
            account: this.account,
            password: this.password
          }
          return this.$http.post('/api/login/createAccount', params)
        })
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
