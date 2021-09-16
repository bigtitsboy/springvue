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
            <div>音乐</div>
          </li>
          <li class="col-1">
            <span class="liback" style="background-position:  0 -64px"></span>
            <div>艺术</div>
          </li>
          <li class="col-1 ">
            <span class="liback" style="background-position:  0 -120px"></span>
            <div>体育</div>
          </li>
          <li class="col-1">
            <span class="liback" style="background-position:  0 -180px"></span>
            <div>儿童亲子</div>
          </li>
          <li class="col-1 ">
            <span class="liback" style="background-position:  0 -240px"></span>
            <div>绘画</div>
          </li>
          <li class="col-1">
            <span class="liback" style="background-position:  0 -297px"></span>
            <div>传记</div>
          </li>
          <li class="col-1 ">
            <span class="liback" style="background-position:  0 -360px"></span>
            <div>戏剧</div>
          </li>
          <li class="col-1">
            <span class="liback" style="background-position:  0 -420px"></span>
            <div>设计</div>
          </li>
          <li class="col-1">
            <span class="liback" style="background-position:  0 -480px"></span>
            <div>流行</div>
          </li>
          <li class="col-1">
            <span class="liback" style="background-position:  0 -540px"></span>
            <div>自助游</div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>

<style scoped>
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
li div{
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}
</style>
