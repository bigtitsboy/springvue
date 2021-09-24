<template>
  <div class="overflow-hidden">
    <!--    首行-->
    <div style="box-shadow:1px 1px 10px lightgray">
      <div class="container">
        <div class="row">
          <div class="col-1" style="margin:15px 0 5px 0;padding: 0">
            <img :src="require('../assets/logo.png')" alt="xqcow"
                 style="height: 100%;width: 100%;max-height: 56px;max-width: 56px">
          </div>
          <div class="col-4" style="padding: 0">
            <div style="margin: 7%;display: none;" class="food">
              <i class="bi-geo-alt"></i>
              莆田
            </div>
            <router-link to="main" style="display: inline-block;height: 100%;margin-right: 10%;margin-left: 7%">
              <div :class="{'select':urlpath === 'home'}" style="display: inline-block;margin-top: 70%">
                首页
              </div>
            </router-link>
            <router-link :to="{name:'sort',query:{sort:'全部'}}" style="display: inline-block;height: 100%;">
              <div :class="{'select':urlpath === 'sort'}" style="display: inline-block;margin-top: 70%;">分类</div>
            </router-link>
            <router-link :to="{name:'food'}" style="margin-left: 10%">
              <div :class="{'select':urlpath === 'food'}" style="display: inline-block">点餐</div>
            </router-link>
          </div>
          <div class="col-4 offset-1">
            <span class="spansearch">
              <i class="bi-search" style="position: absolute;left: 50%;top: 50%;transform: translate(-60%,-50%);"></i>
            </span>
            <input class="search" type="text" style="height: 50%" placeholder="输入ISBN" v-model="isbn">
            <div class="searchbutton">
              <div class="d-none d-md-block"
                   style="position: absolute;left: 30%;top: 50%;transform: translate(-30%,-50%);font-size: 12px">
                <router-link :to="{name:'book',query:{ISBN:isbn}}" style="color: white!important;">
                  搜索
                </router-link>
              </div>
            </div>
          </div>
          <div class="col-2">
            <div class="login">
              <i @click="clickdownlist" class="bi-person-circle d-md-none"
                 style="position: absolute;left: -5%;top: 50%;transform: translate(0,-50%);font-size: 20px;z-index: 2"></i>
              <i @click="clickdownlist" class="bi-person-circle d-none d-md-block"
                 style="position: absolute;left: 30%;top: 50%;transform: translate(-60%,-50%);font-size: 20px;z-index: 2"></i>
              <!--              验证成功-->
              <span class="d-none d-lg-block"
                    style="position: absolute;left: 95%;top: 50%;transform: translate(-85%,-50%);">
                <span v-if="$cookies.get('account')">
                  {{ $cookies.get('account') }}
                </span>
              </span>
              <!--              下拉菜单-->
              <ul v-if="downlist" class="downlist">
                <li style="border-bottom: 1px solid #f2f2f2;margin-bottom: 10px">
                  <router-link :to="{name:'car'}">订单</router-link>
                </li>
                <li style="border-bottom: 1px solid #f2f2f2;margin-bottom: 10px">
                  <router-link :to="{name:'bookcar'}">图书</router-link>
                </li>
                <li style="border-bottom: 1px solid #f2f2f2;margin-bottom: 10px">
                  <router-link :to="{name:'order'}">预定</router-link>
                </li>
                <li v-if="$cookies.get('account')==='admin'"
                    style="border-bottom: 1px solid #f2f2f2;margin-bottom: 10px">
                  <router-link :to="{name:'sitedit'}">修改预定</router-link>
                </li>
                <li @click="leave" style="border-bottom: 1px solid #f2f2f2;">退出</li>
              </ul>
              <!--              无cookies-->
              <span style="position: absolute;left: 50%;top: 50%;transform: translate(-60%,-50%);">
                <router-link :to="'/login'" v-if="!$cookies.get('account')">
                    登录
                </router-link>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <router-view></router-view>
    <span style="position: fixed;right: 2%;bottom: 20%;text-align: center;border: 1px solid #EBEBEB;padding: 5px"
          v-if="btnFlag" id="scrollTop" @click="toTop">
      <i class="bi-align-top d-none d-sm-block"></i>
      <div class="d-none d-lg-block" style="font-size: 12px">返回顶部</div>
    </span>
    <div id="warming" style="background: rgb(248, 248, 248);">
      <div class="container">
        <div class="row" id="bottom">
          <div class="col-1 offset-1"><a href="#">帮助</a></div>
          <div class="col-2"><a href="#">公司介绍</a></div>
          <div class="col-2"><a href="#">廉正举报</a></div>
          <div class="col-2"><a href="#">联系合作</a></div>
          <div class="col-2"><a href="#">招聘信息</a></div>
          <div class="col-2"><a href="#">防骗秘籍</a></div>
        </div>
        <div class="row" style="margin-top: 40px">
          <div class="col-2 offset-2">
            <img :src="require('../assets/de4bde881f68d55c2a9fbb61f41402113d771183.jpg')" alt=""
                 style="max-width: 100%;max-height: 100%">
          </div>
          <div class="col-8">
            <img :src="require('../assets/warming.png')" style="max-width: 100%;max-height: 100%;margin-bottom: 40px">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Head',
  data: function () {
    return {
      urlpath: 'home',
      btnFlag: false,
      isbn: '',
      downlist: false
    }
  },
  methods: {
    scrollToTop () {
      const that = this
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
      if (scrollTop > 60) {
        that.btnFlag = true // btnFlag来控制a的显示隐藏
      } else {
        that.btnFlag = false
      }
    },
    toTop () {
      // console.log(1)
      window.scrollTo(0, 0)
    },
    clickdownlist () {
      // console.log(1)
      if (this.$cookies.get('account')) {
        this.downlist = !this.downlist
      }
    },
    leave () {
      this.$cookies.remove('account')
      localStorage.removeItem('foods')
      location.reload()
    },
    vuexreload () {
      if (localStorage.getItem('foods') !== null) {
        this.$store.commit('setFoods', JSON.parse(localStorage.getItem('foods')))
      }
    }
  },
  watch: {
    $route (to, from) {
      this.urlpath = to.name
    }
  },
  created () {
    if (this.$store.state.items.length === 0) {
      this.vuexreload()
    }
  },
  mounted () {
    window.addEventListener('scroll', this.scrollToTop)
  },
  destroyed () {
    window.removeEventListener('scroll', this.scrollToTop)
  }
}
</script>

<style scoped>
@media screen and (max-width: 768px) {
  .search {
    margin-top: 14% !important;
  }

  #warming {
    display: none;
  }

}

@media screen and (min-width: 768px) {
  .search {
    margin-top: 10% !important;
  }

  .downlist {
    left: 40% !important;
    bottom: -125% !important;
  }
}

@media screen and (min-width: 992px) {
  .search {
    margin-top: 6% !important;
  }

  .food {
    display: inline-block !important;
  }

  .downlist {
    bottom: -150% !important;
  }
}

@media screen and (min-width: 1200px) {
  .login {
    font-size: 18px !important;
  }

  .downlist {
    bottom: -190% !important;
  }
}

@media screen and (min-width: 1400px) {
  .downlist {
    bottom: -185% !important;
  }
}

a {
  text-decoration: none;
  color: black;
}

a:hover {
  color: #FF1268
}

.select {
  color: #FF1268
}

.search {
  width: 70%;
  margin-top: 6%;
  border: none;
  background: rgb(248, 248, 248);
}

.search:focus {
  outline: none;
  box-shadow: none;
}

.searchbutton {
  position: relative;
  display: inline-block;
  width: 18%;
  height: 50%;
  text-align: center;
  line-height: 150%;
  /*border: 1px solid red;*/
  vertical-align: middle;
  background: rgb(255, 18, 104);
  color: white;
  border-bottom-right-radius: 40px;
  border-top-right-radius: 40px;
}

.spansearch {
  display: inline-block;
  height: 50%;
  vertical-align: middle;
  position: relative;
  background: rgb(248, 248, 248);
  width: 10%;
  border-bottom-left-radius: 50%;
  border-top-left-radius: 50%;
}

.login {
  font-size: 12px;
  position: relative;
  height: 100%;
  width: 100%;
}

#bottom {
  margin-top: 20px;
  padding-top: 30px;
  text-align: center;
  font-size: 15px;
  color: #111111;
  font-family: "Microsoft YaHei UI", sans-serif;
}

#scrollTop {
  cursor: pointer;
}

i:hover {
  cursor: pointer;
}

li:hover {
  cursor: pointer;
}

.downlist {
  position: absolute;
  list-style: none;
  bottom: -160%;
  z-index: 2;
  border: 1px solid #F2f2f2f2;
  text-align: left;
  padding: 5%;
  left: 30%;
  background: white;
}
</style>
