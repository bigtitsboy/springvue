<template>
  <div>
    <!--    轮播图-->
    <div class="container" style="padding: 0">
      <div class="row">
        <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
          <ol class="carousel-indicators">
            <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active"></li>
            <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"></li>
            <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"></li>
          </ol>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img :src="require('../assets/turnimgs/img.png')" class="d-block w-100" alt="...">
            </div>
            <div class="carousel-item">
              <img :src="require('../assets/turnimgs/img_1.png')" class="d-block w-100" alt="...">
            </div>
            <div class="carousel-item">
              <img :src="require('../assets/turnimgs/img_2.png')" class="d-block w-100" alt="...">
            </div>
          </div>
          <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-bs-slide="prev">
            <span style="background:rgba(19, 38, 37,0.5) ">
              <span class="carousel-control-prev-icon" aria-hidden="true" style="margin: 30% 0 30% 0"></span>
              <span class="visually-hidden">Previous</span>
            </span>
          </a>
          <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-bs-slide="next">
            <span style="background:rgba(19, 38, 37,0.5)">
              <span class="carousel-control-next-icon" aria-hidden="true" style="margin: 30% 0 30% 0"></span>
              <span class="visually-hidden">Next</span>
             </span>
          </a>
        </div>
      </div>
    </div>
    <!--    分类-->
    <div class="container" style="margin-top: 10px">
      <div class="row" style="border:1px solid #EBEBEB">
        <ul>
          <li class="col-1 offset-1">
            <span class="liback" style="background-position:  0 0"></span>
            <div>
              <router-link :to="{name:'sort',query:{sort:'音乐'}}">音乐</router-link>
            </div>
          </li>
          <li class="col-1">
            <span class="liback" style="background-position:  0 -64px"></span>
            <div>
              <router-link :to="{name:'sort',query:{sort:'艺术'}}">艺术</router-link>
            </div>
          </li>
          <li class="col-1 ">
            <span class="liback" style="background-position:  0 -120px"></span>
            <div>
              <router-link :to="{name:'sort',query:{sort:'体育'}}">体育</router-link>
            </div>
          </li>
          <li class="col-1">
            <span class="liback" style="background-position:  0 -180px"></span>
            <div>
              <router-link :to="{name:'sort',query:{sort:'儿童亲子'}}">儿童亲子</router-link>
            </div>
          </li>
          <li class="col-1 ">
            <span class="liback" style="background-position:  0 -240px"></span>
            <div>
              <router-link :to="{name:'sort',query:{sort:'绘画'}}">绘画</router-link>
            </div>
          </li>
          <li class="col-1">
            <span class="liback" style="background-position:  0 -297px"></span>
            <div>
              <router-link :to="{name:'sort',query:{sort:'传记'}}">传记</router-link>
            </div>
          </li>
          <li class="col-1 ">
            <span class="liback" style="background-position:  0 -360px"></span>
            <div>
              <router-link :to="{name:'sort',query:{sort:'戏剧'}}">戏剧</router-link>
            </div>
          </li>
          <li class="col-1">
            <span class="liback" style="background-position:  0 -420px"></span>
            <div>
              <router-link :to="{name:'sort',query:{sort:'设计'}}">设计</router-link>
            </div>
          </li>
          <li class="col-1">
            <span class="liback" style="background-position:  0 -480px"></span>
            <div>
              <router-link :to="{name:'sort',query:{sort:'流行'}}">流行</router-link>
            </div>
          </li>
          <li class="col-1">
            <span class="liback" style="background-position:  0 -540px"></span>
            <div>
              <router-link :to="{name:'sort',query:{sort:'自助游'}}">自助游</router-link>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <!--    音乐-->
    <div class="container" style="border:1px solid #EBEBEB;margin-top: 10px">
      <div class="row">
        <h3 style="margin: 2%">音乐</h3>
      </div>
      <div class="row" style="margin-bottom: 15px">
        <div class="col-3">
          <div style="width: 100%;height: 100%;position: relative">
            <router-link v-if="hotmap.music" :to="{name:'book',query:{ISBN:hotmap.music[0].bookIsbn}}">
              <img :src="hotmap.music[0].bookPic" alt="" style="width: 100%;height: 100%">
            </router-link>
            <div v-if="hotmap.music" class="d-none d-md-block"
                 style="position: absolute;background: rgba(0,0,0,.5);height: 30%;width: 100%;bottom: 0">
              <div class="overhide">
                {{ hotmap.music[0].bookName }}
              </div>
              <div class="overhide" style="overflow: hidden;text-overflow: ellipsis;white-space: nowrap">
                {{ hotmap.music[0].bookAuthor }}
              </div>
            </div>
          </div>
        </div>
        <div class="col-9">
          <!--          上-->
          <div class="row size" style="height: 50%" v-if="hotmap.music">
            <div class="col-4" v-for="(count,index) in 3" :key="'music'+index" style="height: 100%">
              <div class="row" style="height: 100%">
                <div class="col-md-6 col-12" style="height: 100%">
                  <router-link v-if="hotmap.music" :to="{name:'book',query:{ISBN:hotmap.music[count].bookIsbn}}">
                    <img :src="hotmap.music[count].bookPic" alt="" style="height: 100%;width: 100%">
                  </router-link>
                </div>
                <div class="col-md-6 col-0 d-none d-md-block"
                     style="padding-left: 0;padding-right: 20px;color:#4A4A4A;font-family: '\5FAE\8F6F\96C5\9ED1',sans-serif;font-size: 15px;position: relative">
                  <div
                    style="margin-top: 2%;width: 100%;height: 60%;overflow: hidden;text-overflow: ellipsis;white-space: nowrap">
                    <a href="#">{{ hotmap.music[count].bookName }}</a>
                  </div>
                  <br>
                  <div
                    style="color:#9B9B9B;font-size: 12px;position: absolute;bottom: 0;width: 100%;height: 40%;overflow: hidden;text-overflow: ellipsis;white-space: nowrap;">
                    <a href="#" style="color:#9B9B9B">{{ hotmap.music[count].bookAuthor }}</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!--          下-->
          <div class="row downsize" style="height: 48%;margin-top: 2%" v-if="hotmap.music">
            <div class="col-4" v-for="(count,index) in [4,5,6]" :key="'music'+index" style="height: 100%">
              <div class="row" style="height: 100%">
                <div class="col-md-6 col-12" style="height: 100%">
                  <router-link v-if="hotmap.music" :to="{name:'book',query:{ISBN:hotmap.music[count].bookIsbn}}">
                    <img :src="hotmap.music[count].bookPic" alt="" style="height: 100%;width: 100%">
                  </router-link>
                </div>
                <div class="col-md-6 col-0 d-none d-md-block"
                     style="padding-left: 0;padding-right: 20px;color:#4A4A4A;font-family: '\5FAE\8F6F\96C5\9ED1',sans-serif;font-size: 15px;position: relative">
                  <div
                    style="margin-top: 2%;width: 100%;height: 60%;overflow: hidden;text-overflow: ellipsis;white-space: nowrap">
                    <a href="#">{{ hotmap.music[count].bookName }}</a>
                  </div>
                  <br>
                  <div
                    style="color:#9B9B9B;font-size: 12px;position: absolute;bottom: 0;width: 100%;height: 40%;overflow: hidden;text-overflow: ellipsis;white-space: nowrap;">
                    <a href="#" style="color:#9B9B9B">{{ hotmap.music[count].bookAuthor }}</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--    艺术-->
    <div class="container" style="border:1px solid #EBEBEB;margin-top: 10px">
      <div class="row">
        <h3 style="margin: 2%">艺术</h3>
      </div>
      <div class="row" style="margin-bottom: 15px">
        <div class="col-3">
          <div style="width: 100%;height: 100%;position: relative">
            <router-link v-if="hotmap.art" :to="{name:'book',query:{ISBN:hotmap.art[0].bookIsbn}}">
              <img v-if="hotmap.art" :src="hotmap.art[0].bookPic" alt="" style="width: 100%;height: 100%">
            </router-link>
            <div v-if="hotmap.art" class="d-none d-md-block"
                 style="position: absolute;background: rgba(0,0,0,.5);height: 30%;width: 100%;bottom: 0">
              <div class="overhide">
                {{ hotmap.art[0].bookName }}
              </div>
              <div class="overhide" style="overflow: hidden;text-overflow: ellipsis;white-space: nowrap">
                {{ hotmap.art[0].bookAuthor }}
              </div>
            </div>
          </div>
        </div>
        <div class="col-9">
          <!--          上-->
          <div class="row size" style="height: 50%" v-if="hotmap.art">
            <div class="col-4" v-for="(count,index) in 3" :key="'art'+index" style="height: 100%">
              <div class="row" style="height: 100%">
                <div class="col-md-6 col-12" style="height: 100%">
                  <router-link v-if="hotmap.art" :to="{name:'book',query:{ISBN:hotmap.art[count].bookIsbn}}">
                    <img :src="hotmap.art[count].bookPic" alt="" style="height: 100%;width: 100%">
                  </router-link>
                </div>
                <div class="col-md-6 col-0 d-none d-md-block"
                     style="padding-left: 0;padding-right: 20px;color:#4A4A4A;font-family: '\5FAE\8F6F\96C5\9ED1',sans-serif;font-size: 15px;position: relative">
                  <div
                    style="margin-top: 2%;width: 100%;height: 60%;overflow: hidden;text-overflow: ellipsis;white-space: nowrap">
                    <a href="#">{{ hotmap.art[count].bookName }}</a>
                  </div>
                  <br>
                  <div
                    style="color:#9B9B9B;font-size: 12px;position: absolute;bottom: 0;width: 100%;height: 40%;overflow: hidden;text-overflow: ellipsis;white-space: nowrap;">
                    <a href="#" style="color:#9B9B9B">{{ hotmap.art[count].bookAuthor }}</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!--          下-->
          <div class="row downsize" style="height: 48%;margin-top: 2%" v-if="hotmap.art">
            <div class="col-4" v-for="(count,index) in [4,5,6]" :key="'art'+index" style="height: 100%">
              <div class="row" style="height: 100%">
                <div class="col-md-6 col-12" style="height: 100%">
                  <router-link v-if="hotmap.art" :to="{name:'book',query:{ISBN:hotmap.art[count].bookIsbn}}">
                    <img :src="hotmap.art[count].bookPic" alt="" style="height: 100%;width: 100%">
                  </router-link>
                </div>
                <div class="col-md-6 col-0 d-none d-md-block"
                     style="padding-left: 0;padding-right: 20px;color:#4A4A4A;font-family: '\5FAE\8F6F\96C5\9ED1',sans-serif;font-size: 15px;position: relative">
                  <div
                    style="margin-top: 2%;width: 100%;height: 60%;overflow: hidden;text-overflow: ellipsis;white-space: nowrap">
                    <a href="#">{{ hotmap.art[count].bookName }}</a>
                  </div>
                  <br>
                  <div
                    style="color:#9B9B9B;font-size: 12px;position: absolute;bottom: 0;width: 100%;height: 40%;overflow: hidden;text-overflow: ellipsis;white-space: nowrap;">
                    <a href="#" style="color:#9B9B9B">{{ hotmap.art[count].bookAuthor }}</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--    体育-->
    <div class="container" style="border:1px solid #EBEBEB;margin-top: 10px">
      <div class="row">
        <h3 style="margin: 2%">体育</h3>
      </div>
      <div class="row" style="margin-bottom: 15px">
        <div class="col-3">
          <div style="width: 100%;height: 100%;position: relative">
            <router-link v-if="hotmap.sport" :to="{name:'book',query:{ISBN:hotmap.sport[0].bookIsbn}}">
              <img v-if="hotmap.sport" :src="hotmap.sport[0].bookPic" alt="" style="width: 100%;height: 100%">
            </router-link>
            <div v-if="hotmap.sport" class="d-none d-md-block"
                 style="position: absolute;background: rgba(0,0,0,.5);height: 30%;width: 100%;bottom: 0">
              <div class="overhide">
                {{ hotmap.sport[0].bookName }}
              </div>
              <div class="overhide" style="overflow: hidden;text-overflow: ellipsis;white-space: nowrap">
                {{ hotmap.sport[0].bookAuthor }}
              </div>
            </div>
          </div>
        </div>
        <div class="col-9">
          <!--          上-->
          <div class="row size" style="height: 50%" v-if="hotmap.sport">
            <div class="col-4" v-for="(count,index) in 3" :key="'sport'+index" style="height: 100%">
              <div class="row" style="height: 100%">
                <div class="col-md-6 col-12" style="height: 100%">
                  <router-link v-if="hotmap.sport" :to="{name:'book',query:{ISBN:hotmap.sport[count].bookIsbn}}">
                    <img :src="hotmap.sport[count].bookPic" alt="" style="height: 100%;width: 100%">
                  </router-link>
                </div>
                <div class="col-md-6 col-0 d-none d-md-block"
                     style="padding-left: 0;padding-right: 20px;color:#4A4A4A;font-family: '\5FAE\8F6F\96C5\9ED1',sans-serif;font-size: 15px;position: relative">
                  <div
                    style="margin-top: 2%;width: 100%;height: 60%;overflow: hidden;text-overflow: ellipsis;white-space: nowrap">
                    <a href="#">{{ hotmap.sport[count].bookName }}</a>
                  </div>
                  <br>
                  <div
                    style="color:#9B9B9B;font-size: 12px;position: absolute;bottom: 0;width: 100%;height: 40%;overflow: hidden;text-overflow: ellipsis;white-space: nowrap;">
                    <a href="#" style="color:#9B9B9B">{{ hotmap.sport[count].bookAuthor }}</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!--          下-->
          <div class="row downsize" style="height: 48%;margin-top: 2%" v-if="hotmap.sport">
            <div class="col-4" v-for="(count,index) in [4,5,6]" :key="'sport'+index" style="height: 100%">
              <div class="row" style="height: 100%">
                <div class="col-md-6 col-12" style="height: 100%">
                  <router-link v-if="hotmap.sport" :to="{name:'book',query:{ISBN:hotmap.sport[count].bookIsbn}}">
                    <img :src="hotmap.sport[count].bookPic" alt="" style="height: 100%;width: 100%">
                  </router-link>
                </div>
                <div class="col-md-6 col-0 d-none d-md-block"
                     style="padding-left: 0;padding-right: 20px;color:#4A4A4A;font-family: '\5FAE\8F6F\96C5\9ED1',sans-serif;font-size: 15px;position: relative">
                  <div
                    style="margin-top: 2%;width: 100%;height: 60%;overflow: hidden;text-overflow: ellipsis;white-space: nowrap">
                    <a href="#">{{ hotmap.sport[count].bookName }}</a>

                  </div>
                  <br>
                  <div
                    style="color:#9B9B9B;font-size: 12px;position: absolute;bottom: 0;width: 100%;height: 40%;overflow: hidden;text-overflow: ellipsis;white-space: nowrap;">
                    <a href="#" style="color:#9B9B9B">{{ hotmap.sport[count].bookAuthor }}</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--    儿童-->
    <div class="container" style="border:1px solid #EBEBEB;margin-top: 10px">
      <div class="row">
        <h3 style="margin: 2%">儿童文学</h3>
      </div>
      <div class="row" style="margin-bottom: 15px">
        <div class="col-3">
          <div style="width: 100%;height: 100%;position: relative">
            <router-link v-if="hotmap.child" :to="{name:'book',query:{ISBN:hotmap.child[0].bookIsbn}}">
              <img v-if="hotmap.child" :src="hotmap.child[0].bookPic" alt="" style="width: 100%;height: 100%">
            </router-link>
            <div v-if="hotmap.child" class="d-none d-md-block"
                 style="position: absolute;background: rgba(0,0,0,.5);height: 30%;width: 100%;bottom: 0">
              <div class="overhide">
                {{ hotmap.child[0].bookName }}
              </div>
              <div class="overhide" style="overflow: hidden;text-overflow: ellipsis;white-space: nowrap">
                {{ hotmap.child[0].bookAuthor }}
              </div>
            </div>
          </div>
        </div>
        <div class="col-9">
          <!--          上-->
          <div class="row size" style="height: 50%" v-if="hotmap.child">
            <div class="col-4" v-for="(count,index) in 3" :key="'child'+index" style="height: 100%">
              <div class="row" style="height: 100%">
                <div class="col-md-6 col-12" style="height: 100%">
                  <router-link v-if="hotmap.child" :to="{name:'book',query:{ISBN:hotmap.child[count].bookIsbn}}">
                    <img :src="hotmap.child[count].bookPic" alt="" style="height: 100%;width: 100%">
                  </router-link>
                </div>
                <div class="col-md-6 col-0 d-none d-md-block"
                     style="padding-left: 0;padding-right: 20px;color:#4A4A4A;font-family: '\5FAE\8F6F\96C5\9ED1',sans-serif;font-size: 15px;position: relative">
                  <div
                    style="margin-top: 2%;width: 100%;height: 60%;overflow: hidden;text-overflow: ellipsis;white-space: nowrap">
                    <a href="#">{{ hotmap.child[count].bookName }}</a>
                  </div>
                  <br>
                  <div
                    style="color:#9B9B9B;font-size: 12px;position: absolute;bottom: 0;width: 100%;height: 40%;overflow: hidden;text-overflow: ellipsis;white-space: nowrap;">
                    <a href="#" style="color:#9B9B9B">{{ hotmap.child[count].bookAuthor }}</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!--          下-->
          <div class="row downsize" style="height: 48%;margin-top: 2%" v-if="hotmap.child">
            <div class="col-4" v-for="(count,index) in [4,5,6]" :key="'child'+index" style="height: 100%">
              <div class="row" style="height: 100%">
                <div class="col-md-6 col-12" style="height: 100%">
                  <router-link v-if="hotmap.child" :to="{name:'book',query:{ISBN:hotmap.child[count].bookIsbn}}">
                    <img :src="hotmap.child[count].bookPic" alt="" style="height: 100%;width: 100%">
                  </router-link>
                </div>
                <div class="col-md-6 col-0 d-none d-md-block"
                     style="padding-left: 0;padding-right: 20px;color:#4A4A4A;font-family: '\5FAE\8F6F\96C5\9ED1',sans-serif;font-size: 15px;position: relative">
                  <div
                    style="margin-top: 2%;width: 100%;height: 60%;overflow: hidden;text-overflow: ellipsis;white-space: nowrap">
                    <a href="#">{{ hotmap.child[count].bookName }}</a>
                  </div>
                  <br>
                  <div
                    style="color:#9B9B9B;font-size: 12px;position: absolute;bottom: 0;width: 100%;height: 40%;overflow: hidden;text-overflow: ellipsis;white-space: nowrap;">
                    <a href="#" style="color:#9B9B9B">{{ hotmap.child[count].bookAuthor }}</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// 添加响应拦截器
import axios from 'axios'

axios.interceptors.response.use(function (response) {
  // 对响应数据做点什么
  return response.data
}, function (error) {
  // 对响应错误做点什么
  return Promise.reject(error)
})
export default {
  name: 'Home',
  data: function () {
    return {
      hotmap: {
        music: null,
        art: null,
        sport: null,
        child: null
      }
    }
  },
  methods: {
    getHot () {
      // 获取四个资源
      axios.get('/book/hot?key=音乐').then(res => {
        // console.log(res)
        this.hotmap.music = res
      }).catch(err => {
        console.log(err)
      })
      axios.get('http://localhost:8081/books_spingMVC/book/hot?key=艺术').then(res => {
        this.hotmap.art = res
      }).catch(err => {
        console.log(err)
      })
      axios.get('http://localhost:8081/books_spingMVC/book/hot?key=体育').then(res => {
        this.hotmap.sport = res
      }).catch(err => {
        console.log(err)
      })
      axios.get('http://localhost:8081/books_spingMVC/book/hot?key=儿童亲子').then(res => {
        this.hotmap.child = res
      }).catch(err => {
        console.log(err)
      })
    }
  },
  created () {
    this.getHot()
    // console.log(this.hotmap)
  }
}
</script>
<style scoped>
@media screen and (max-width: 767px) {
  .size {
    height: 100% !important;
  }

  .downsize {
    display: none !important;
  }
}

ul {
  list-style: none;
  margin: 0;
}

ul li {
  display: inline-block;
  vertical-align: middle;
  text-align: center;
}

.liback {
  display: inline-block;
  height: 48px;
  width: 48px;
  background: url("../assets/sortlogo.png") no-repeat;
  background-size: 100% auto;
  /*background: red;*/
}

li div {
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}

.detail {
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}

a {
  text-decoration: none;
  color: black;
}

a:hover {
  color: #FF1268 !important;
}

.overhide {
  display: -webkit-box !important;
  text-overflow: ellipsis;
  overflow: hidden;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  word-break: break-all;
  color: #ffffff;
  font-size: 16px;
  font-family: 'Microsoft YaHei UI', sans-serif;
  padding: 17px 10px;
  font-weight: bold;
}
</style>
