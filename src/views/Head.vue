<template>
  <div>
    <!--    首行-->
    <div style="box-shadow:1px 1px 10px lightgray">
      <div class="container">
        <div class="row">
          <div class="col-1" style="margin:15px 0 5px 0;padding: 0">
            <img :src="require('../assets/logo.png')" alt="xqcow"
                 style="height: 100%;width: 100%;max-height: 56px;max-width: 56px">
          </div>
          <div class="col-4" style="padding: 0">
            <div style="margin: 7%;display: inline-block;">
              <i class="bi-geo-alt"></i>
              莆田
            </div>
            <router-link to="main" style="display: inline-block;height: 100%;margin-right: 10%">
              <div class="select" style="display: inline-block;margin-top: 70%" ref="main" @click="selecttitle('main')">
                首页
              </div>
            </router-link>
            <router-link to="sort" style="display: inline-block;height: 100%;">
              <div style="display: inline-block;margin-top: 70%;" ref="sort" @click="selecttitle('sort')">分类</div>
            </router-link>
          </div>
          <div class="col-4 offset-1">
            <span class="spansearch">
              <i class="bi-search" style="position: absolute;left: 50%;top: 50%;transform: translate(-60%,-50%);"></i>
            </span>
            <input class="search" type="text" style="height: 50%" placeholder="输入ISBN">
            <div class="searchbutton">
              <div class="d-none d-md-block"
                   style="position: absolute;left: 30%;top: 50%;transform: translate(-30%,-50%);font-size: 12px">搜索
              </div>
            </div>
          </div>
          <div class="col-2">
            <div class="login" >
              <i class="bi-person-circle d-md-none"
                 style="position: absolute;left: -5%;top: 50%;transform: translate(0,-50%);"></i>
              <i class="bi-person-circle d-none d-md-block"
                 style="position: absolute;left: 30%;top: 50%;transform: translate(-60%,-50%);"></i>
              <span style="position: absolute;left: 50%;top: 50%;transform: translate(-60%,-50%);">登录</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'Head',
  methods: {
    selecttitle (str) {
      if (str === 'main') {
        this.$refs.main.className = 'select'
        this.$refs.sort.className = ''
      } else {
        this.$refs.main.className = ''
        this.$refs.sort.className = 'select'
      }
    }
  }
}
</script>

<style scoped>
@media screen and (max-width: 768px) {
  .search {
    margin-top: 14% !important;
  }
}

@media screen and (min-width: 768px) {
  .search {
    margin-top: 10% !important;
  }
}

@media screen and (min-width: 992px) {
  .search {
    margin-top: 6% !important;
  }
}
@media screen and (min-width: 1200px){
  .login{
    font-size: 18px!important;
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
  width: 20%;
  height: 50%;
  text-align: center;
  line-height: 150%;
  /*border: 1px solid red;*/
  vertical-align: middle;
  background: rgb(255, 18, 104);
  color: white;
  border-bottom-right-radius: 50%;
  border-top-right-radius: 50%;
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
</style>
