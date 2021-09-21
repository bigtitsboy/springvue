<template>
  <div>
    <div class="container">
      <div class="row">
        <div style="font-size: 14px;font-family: 'Microsoft YaHei UI',sans-serif;color:#666;margin: 10px 0">
          共
          <span style="color:#ed0a75;">{{ count }}</span>
          个商品
        </div>
      </div>
    </div>
    <div class="container" style="border: 1px solid #e9e9e9">
      <div class="row"
           style="text-align: center;color: #333333;font-family: 'Microsoft YaHei UI',sans-serif;font-size: 14px;font-weight: bold">
        <div class="col-1" style="text-align: right;padding: 0;margin: 5px 0">分类:</div>
        <div class="col-11">
          <div class="row">
            <div v-for="(item,index) in typelist" :key="'typelist'+index" style="padding: 0;margin: 5px 0"
                 :class="{'col-2':true}">
              <span :class="{'typespan':true,'typeselect':$route.query.sort === item}" style="padding: 5px 10px"
                    @click="changetype(item)">{{ item }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container" style="margin-top: 15px;border: 1px solid #eaeaea">
      <!--      排序行-->
      <div class="row">
        <div class="col-2" style="background: white;text-align: center">
          <span style="color: #ed0a75;margin: 10px 0;display: inline-block;text-align: center">相关推荐</span>
        </div>
        <div class="col-10"
             style="background: #f5f5f5;border-left: 1px solid #eaeaea;border-bottom: 1px solid #eaeaea"></div>
      </div>
      <!--      内容-->
      <div v-if="allbooks">
        <div v-for="(item,index) in allbooks" :key="'all'+index" class="row"
             style="margin: 20px;border-bottom: 1px dotted gray">
          <div class="col-2" style="margin-bottom: 10px">
            <router-link :to="{name:'book',query:{ISBN:item.bookIsbn}}">
              <img :src="item.bookPic" alt="" style="width: 100%">
            </router-link>
          </div>
          <div class="col-10" style="margin-bottom: 10px">
            <!--          书名-->
            <div class="row">
              <div class="col-10 large"><i class="bi-book" style="color:#ed0b75;"></i>
                <a href="#" style="font-size: 18px;font-family: 'Microsoft YaHei UI',sans-serif">{{
                    item.bookName
                  }}</a>
              </div>
            </div>
            <!--          作者-->
            <div class="row">
              <div class="col-10 large"><i class="bi-person" style="color:#ed0b75;"></i>
                <a href="#" style="font-size: 14px;font-family: 'Microsoft YaHei UI',sans-serif;color: #999999">{{
                    item.bookAuthor
                  }}</a></div>
            </div>
            <!--          出版社-->
            <div class="row large">
              <div class="col-10"><i class="bi-archive" style="color:#ed0b75;"></i>
                <a href="#" style="font-size: 14px;font-family: 'Microsoft YaHei UI',sans-serif;color: #999999">{{
                    item.bookPublic
                  }}</a></div>
            </div>
            <!--          出版时间-->
            <div class="row large">
              <div class="col-10"><i class="bi-calendar-date" style="color:#ed0b75;"></i>
                <a href="#" style="font-size: 14px;font-family: 'Microsoft YaHei UI',sans-serif;color: #999999">{{
                    item.bookPublicDate
                  }}</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!--      分页-->
      <div class="row">
        <div class="col-12" style="text-align: center">
          <span @click='changepage(item)' v-for="(item, index) in pages" :key="index"
                :class="{ 'pageselect':start === item,'pages':true}"
                style="background: #f4f4f5;border-radius: 2px;font-weight: bold;color:#606266;display: inline-block;margin: 10px;padding: 0 10px">{{
              item
            }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Sort',
  data: function () {
    return {
      typelist: [
        '全部',
        '音乐',
        '艺术',
        '体育',
        '儿童亲子',
        '绘画',
        '传记',
        '戏剧',
        '设计',
        '流行',
        '自助游'
      ],
      count: null,
      allbooks: null,
      totalbooks: null,
      sort: this.$route.query.sort,
      start: 1, // 当前页
      end: 1 // 最后一页
    }
  },
  methods: {
    querybooks () {
      this.$axios({
        method: 'get',
        url: '/book/all',
        params: {
          sort: this.sort
        }
      }).then(res => {
        // console.log(typeof res)
        // console.log(Object.keys(res).length)
        this.count = Object.keys(res).length
        this.end = Math.ceil(this.count / 6)
        this.totalbooks = res
        this.allbooks = this.totalbooks.slice(0, 6)
      }).catch(err => {
        console.log(err)
      })
    },
    changepage (page) {
      this.start = page // start变更之后computed会自动重新计算，页面会重新渲染
      this.allbooks = this.totalbooks.slice((page - 1) * 6, page * 6)
      window.scrollTo(0, 0)
      // console.log(page)
    },
    changetype (item) {
      this.$route.query.sort = item
      this.start = 1
      this.sort = item
      this.querybooks()
      this.$forceUpdate()
      // console.log(item)
    }
  },
  created () {
    this.querybooks()
  },
  computed: {
    // 使用计算属性返回
    pages () {
      if (this.end < 10) return this.end// 省略号的添加是分页大于10的时候
      if (this.start <= 5) { // 当前页码小于等于5
        return [1, 2, 3, 4, 5, 6, '...', this.end]// [1,2,3,4,5,6,'...',最后一页]
      } else if (this.start > this.end - 5) { // 当前页码大于等于最后一页-5
        return [1, '...', this.end - 5, this.end - 4, this.end - 3, this.end - 2, this.end - 1, this.end]
        // [1,'...',尾页-5,尾页-4,尾页-3,尾页-2,尾页-1,尾页]
      } else { // 当前页码大于5并且当前页码小于最后一页页码-5
        return [1, '...', this.start - 3, this.start - 2, this.start - 1, this.start, this.start + 1, this.start + 2, this.start + 3, '...', this.end]
        // [1,'...',当前页-3,当前页-2,当前页-1,当前页,当前页+1,当前页+2,当前页+3,'...',尾页]
      }
    }
  }
}
</script>

<style scoped>
@media screen and (min-width: 992px) {
  .large {
    margin-top: 2%;
  }
}

a {
  text-decoration: none;
  color: black;
}

a:hover {
  color: #FF1268 !important;
}

i {
  margin-right: 10px;
}

.pageselect {
  background: #ff1268 !important;
  color: #fff !important;
}

.typeselect {
  background: #ff1268 !important;
  color: #fff !important;
}

.typespan:hover {
  cursor: pointer;
}

.pages:hover {
  cursor: pointer;
}
</style>
