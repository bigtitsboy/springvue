<template>
  <div>
    <div style="display: none" ref="addtocar">
      <div class="toast d-flex align-items-center" role="alert" aria-live="assertive" aria-atomic="true"
           style="width: 100%;background: rgb(209, 231, 221)">
        <div class="toast-body"
             style="width: 100%;text-align: center;font-size: 15px;padding: 20px 0;color: rgb(15, 81, 50)">
          添加成功
        </div>
        <button type="button" class="btn-close ms-auto me-2" data-bs-dismiss="toast" aria-label="Close"
                @click="toastclose"></button>
      </div>
    </div>
    <div class="container allfoods">
      <!--      内容-->
      <div class="row"
           style="padding-top: 20px;margin-bottom: 10px">
        <div class="col-12" v-if="allfoods">
          <div class="row" style="padding-bottom: 20px;border-bottom: 1px solid #e5e5e5;"
               v-for="(item,index) in allfoods" :key="'foods'+index">
            <!--        img-->
            <div class="col-5 col-md-3 col-lg-2" style="text-align: center;margin-top: 10px">
              <img :src="item.foodpic" alt=""
                   style="min-width: 150px;min-height: 150px;max-width: 150px;max-height: 150px">
            </div>
            <!--        detail-->
            <div class="col-7" style="text-align:left;margin-top: 10px;font-family: Microsoft YaHei,sans-serif">
              <div class="row" style="font-size: 18px;color: #222;padding-top: 10px">
                <div class="col-12">{{ item.foodname }}</div>
              </div>
              <div class="row">
                <div class="col-12" style="color: #f60;font-size: 30px">
                  <span style="font-size: 14px;color: #f60">￥</span>
                  <span>{{ item.price }}</span>
                  <!--        购物车-->
                  <span @click="sendtocar(item)"
                        style="float: right;background: #f90;padding:10px 20px;font-size: 18px;text-align: center;color:#fff;border-radius: 40px;cursor: pointer">
                添加至购物车
              </span>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
      <!--      分页-->
      <div class="row">
        <div class="col-12" style="text-align: center;margin: 10px 0">
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
import store from '../store'

export default {
  name: 'Food',
  data: function () {
    return {
      count: null,
      allfoods: null,
      totalfoods: null,
      start: 1, // 当前页
      end: 1 // 最后一页
    }
  },
  store,
  methods: {
    getFoods () {
      this.$axios({
        method: 'get',
        url: '/food/all'
      }).then(res => {
        this.count = Object.keys(res).length
        this.end = Math.ceil(this.count / 6)
        this.totalfoods = res
        this.allfoods = this.totalfoods.slice(0, 6)
        // console.log(res)
      }).catch(err => {
        console.log(err)
      })
    },
    changepage (page) {
      this.start = page // start变更之后computed会自动重新计算，页面会重新渲染
      this.allfoods = this.totalfoods.slice((page - 1) * 6, page * 6)
      window.scrollTo(0, 0)
      // console.log(page)
    },
    sendtocar (item) {
      if (this.$cookies.get('account')) {
        this.$store.commit('insert', item)
        this.$refs.addtocar.style.display = 'block'
        setTimeout(() => {
          this.toastclose()
        }, 3000)
      } else {
        this.$router.push({ name: 'login' })
      }
      // console.log(item.foodname)
      // console.log(item.foodpic)
      // console.log(item.price)
      // this.$cookies.set('shopcar', { item1: item }, -1)
    },
    toastclose () {
      this.$refs.addtocar.style.display = 'none'
    }
  },
  created () {
    this.getFoods()
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
.allfoods {
  margin-top: 20px;
  box-shadow: 1px 5px 10px 0 lightgray;
}

.pageselect {
  background: #ff1268 !important;
  color: #fff !important;
}

.pages:hover {
  cursor: pointer;
}
</style>
