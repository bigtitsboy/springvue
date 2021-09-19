<template>
  <div>
    <div style="display: none" ref="loginalert">
      <div class="toast d-flex align-items-center" role="alert" aria-live="assertive" aria-atomic="true"
           style="width: 100%;background: #E25C3DF2">
        <div class="toast-body" style="width: 100%;text-align: center;font-size: 15px;padding: 20px 0;color: #ffffff">
          Exist account.
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
        <div class="col-12"><h3 style="font-weight: bold">Join</h3></div>
        <div class="col-12" style="font-size: 15px;font-family: Arial,sans-serif;color: #111111;margin-top: 10px">
          Already have an account?
          <router-link to="login" style="font-size: 15px;font-family: Arial,sans-serif;color: #767676;"> Login</router-link>
        </div>
      </div>
      <!--      Join with Email-->
      <div class="row" style="text-align: center;margin: 30px 5px 0 5px">
        <div class="col-12 col-lg-6 offset-lg-3"
             style="background:#1778f2;display: inline-block;padding: 8px 0;color: #ffffff;border-radius: 5px">
          <span style="">
            <i class="bi-envelope" style="margin-right: 10px"></i>
            Join using Email
          </span>
        </div>
        <div class="col-12" style="font-size: 12px;color:#111111;margin: 40px 0">OR</div>
      </div>
      <!--      input1-->
      <div class="row" style="margin: 10px 5px 0 5px">
        <div class="col-12 col-lg-6 offset-lg-3" style="text-align: left;padding: 0">Mobile Phone
          <span style="color:#767676;margin: 0 4px;font-size: 15px">(only Mobile Phone)</span>
        </div>
      </div>
      <div class="row" style="margin: 10px 5px 0 5px">
        <div class="col-12 col-lg-6 offset-lg-3" style="padding: 0">
          <input @blur="testaccount" ref="joinaccount" type="text"
                 style="border: 1px solid #767676;border-radius: 4px;width: 100%;padding: 8px"
                 v-model="account">
        </div>
      </div>
      <!--      input2-->
      <div class="row" style="margin: 10px 5px 0 5px">
        <div class="col-12 col-lg-6 offset-lg-3" style="text-align: left;padding: 0">
          <span>Password</span>
          <span style="color:#767676;margin: 0 4px;font-size: 15px">(min 6 char max 12 char)</span>
          <span style="float: right;"><a href="#" style="color:#767676;font-size: 12px">Forgot your password?</a></span>
        </div>
      </div>
      <div class="row" style="margin: 10px 5px 0 5px">
        <div class="col-12 col-lg-6 offset-lg-3" style="padding: 0">
          <input @blur="testpwd" ref="joinpwd" type="password"
                 style="border: 1px solid #767676;border-radius: 4px;width: 100%;padding: 8px"
                 v-model="upwd">
        </div>
      </div>
      <!--      join button-->
      <div class="row" style="text-align: center;margin: 30px 5px 0 5px">
        <div @click="join" id="loginbutton" class="col-12 col-lg-6 offset-lg-3"
             style="background:black;display: inline-block;padding: 8px 0;color: #ffffff;border-radius: 5px">
          <span style="">
            Join
          </span>
        </div>
      </div>
      <!--      Join-->
      <div class="row" style="text-align: center;margin-top: 32px;">
        <div class="col-12" style="color: black;font-size: 15px">
          <span style="color:#767676;font-size: 15px">
              By joining, you agree to the Terms and Privacy Policy
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Join',
  data: function () {
    return {
      account: '',
      upwd: ''
    }
  },
  methods: {
    testaccount () {
      const reg = /^(13[0-9]|14[5|7]|15[0|1|2|3|4|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/
      if (!reg.test(this.account)) {
        this.$refs.joinaccount.style.border = '1px solid red'
      } else {
        this.$refs.joinaccount.style.border = '1px solid #767676'
      }
    },
    testpwd () {
      const reg = /^[\d\w\W]{6,12}$/
      if (!reg.test(this.upwd)) {
        this.$refs.joinpwd.style.border = '1px solid red'
      } else {
        this.$refs.joinpwd.style.border = '1px solid #767676'
      }
    },
    join () {
      this.$axios({
        method: 'get',
        url: '/login/join',
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
