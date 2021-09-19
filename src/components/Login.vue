<template>
  <div>
    <div style="display: none" ref="loginalert">
      <div class="toast d-flex align-items-center" role="alert" aria-live="assertive" aria-atomic="true"
           style="width: 100%;background: #E25C3DF2">
        <div class="toast-body" style="width: 100%;text-align: center;font-size: 15px;padding: 20px 0;color: #ffffff">
          Invalid account or password.
        </div>
        <button type="button" class="btn-close ms-auto me-2" data-bs-dismiss="toast" aria-label="Close"
                @click="toastclose"></button>
      </div>
    </div>
    <div class="container" style="margin-top: 10%">
      <!--      head-->
      <div class="row" style="margin-bottom: 24px">
        <div class="col-12" style="text-align: center;margin-top: 10px">
          <img
            :src="require('../assets/person-circle.svg')"
            style="height: 64px;width: 64px" alt="">
        </div>
      </div>
      <!--      title-->
      <div class="row" style="text-align: center">
        <div class="col-12"><h3 style="font-weight: bold">Login</h3></div>
        <div class="col-12" style="font-size: 15px;font-family: Arial,sans-serif;color: #111111;margin-top: 10px">
          Welcome back.
        </div>
      </div>
      <!--      login with Email-->
      <div class="row" style="text-align: center;margin: 30px 5px 0 5px">
        <div class="col-12 col-lg-6 offset-lg-3"
             style="background:#1778f2;display: inline-block;padding: 8px 0;color: #ffffff;border-radius: 5px">
          <span style="">
            <i class="bi-envelope" style="margin-right: 10px"></i>
            Login with Email
          </span>
        </div>
        <div class="col-12" style="font-size: 12px;color:#111111;margin: 40px 0">OR</div>
      </div>
      <!--      input1-->
      <div class="row" style="margin: 10px 5px 0 5px">
        <div class="col-12 col-lg-6 offset-lg-3" style="text-align: left;padding: 0">Mobile Phone</div>
      </div>
      <div class="row" style="margin: 10px 5px 0 5px">
        <div class="col-12 col-lg-6 offset-lg-3" style="padding: 0">
          <input type="text" style="border: 1px solid #767676;border-radius: 4px;width: 100%;padding: 8px"
                 v-model="account">
        </div>
      </div>
      <!--      input2-->
      <div class="row" style="margin: 10px 5px 0 5px">
        <div class="col-12 col-lg-6 offset-lg-3" style="text-align: left;padding: 0">
          <span>Password</span>
          <span style="float: right;"><a href="#" style="color:#767676;font-size: 12px">Forgot your password?</a></span>
        </div>
      </div>
      <div class="row" style="margin: 10px 5px 0 5px">
        <div class="col-12 col-lg-6 offset-lg-3" style="padding: 0">
          <input type="password" style="border: 1px solid #767676;border-radius: 4px;width: 100%;padding: 8px"
                 v-model="upwd">
        </div>
      </div>
      <!--      login button-->
      <div class="row" style="text-align: center;margin: 30px 5px 0 5px">
        <div id="loginbutton" class="col-12 col-lg-6 offset-lg-3"
             style="background:black;display: inline-block;padding: 8px 0;color: #ffffff;border-radius: 5px"
             @click="login">
          <span style="">
            Login
          </span>
        </div>
      </div>
      <!--      Join-->
      <div class="row" style="text-align: center;margin-top: 32px;">
        <div class="col-12" style="color: black;font-size: 15px">
          Don't have an account?
          <router-link to="/join" style="color:#767676;font-size: 15px">
            Join
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Login',
  data: function () {
    return {
      account: '',
      upwd: ''
    }
  },
  methods: {
    login () {
      this.$axios({
        method: 'get',
        url: '/login/check',
        params: {
          account: this.account,
          upwd: this.upwd
        }
      }).then(res => {
        console.log(res)
        if (res === true) {
          this.$cookies.set('account', this.account, '1d')
          this.$router.push('/')
        } else {
          // console.log(this.$refs.loginalert)
          this.$refs.loginalert.style.display = 'block'
        }
      }).catch(err => {
        console.log(err)
      })
    },
    toastclose () {
      this.$refs.loginalert.style.display = 'none'
    }
  },
  created () {
  }
}
</script>

<style scoped>
#loginbutton:hover {
  cursor: pointer;
}
</style>
