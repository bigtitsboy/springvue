<template>
  <div>
    <div class="container" style="margin-top: 20px">
      <div class="row" v-if="items.length === 0" style="margin: 20% 0">
        <div class="col-11 " style="text-align: center">
          <img :src="require('../assets/carnothing.png')" alt="" style="max-height: 100%;max-width: 100%">购物车空空的哦~，去看看心仪的商品吧~
        </div>
      </div>
      <div v-if="items.length !== 0" class="row">
        <div class="col-12">
          <!--          head-->
          <div class="row" style="background: #f3f3f3;padding: 10px;font-size: 12px;text-align: left">
            <div class="col-3 col-md-2 col-xl-1" style="text-align: left">
              <input type="checkbox" style="vertical-align: middle" @click="checkall" v-model="ischeck">
              <span style="display: inline-block;vertical-align: middle;margin-left: 5px">全选</span>
            </div>
            <div class="col-3 col-md-4 col-xl-5" style="text-align: left">
              商品
            </div>
            <div class="col-2" style="padding: 0;">单价</div>
            <div class="col-2" style="padding: 0;text-align: center">数量</div>
            <div class="col-1" style="padding: 0">小计</div>
            <div class="col-1" style="padding: 0">操作</div>
          </div>
          <!--          body-->
          <div v-if="items" class="row" style="padding: 10px 0 10px 10px;font-size: 12px;text-align: left;">
            <div class="row" v-for="(item,index) in items" :key="'car'+index"
                 style="background: #fff4e8;margin-top: 10px;padding-top: 10px;padding-bottom: 10px">
              <div class="col-6">
                <input type="checkbox" style="vertical-align: middle" v-model="check[index]">
                <img :src="item.foodpic" alt="" style="height: 80px;width: 80px;margin-left: 10px">
                <div class="overhide"
                     style="display: inline-block;vertical-align: top;width: 40%;margin: 10px 0 10px 10px;">
                  {{ item.foodname }}
                </div>
              </div>
              <div class="col-2" style="margin-top: 10px">￥{{ item.price }}</div>
              <div class="col-2" style="text-align: center;margin-top: 10px">
                <button :disabled="item.num ===1?'disabled':false"
                        @click="$store.commit('numless',index),$forceUpdate(),forcomputed++"
                        style="border: 1px solid #999999;margin:0 2px"
                        class="d-none d-md-inline-block">-
                </button>
                <input type="text" style="width: 40%;text-align: center" v-model="item.num" readonly>
                <button @click="$store.commit('numadd',index),$forceUpdate(),forcomputed--"
                        style="border: 1px solid #999999;margin:0 2px" class="d-none d-md-inline-block">+
                </button>
              </div>
              <div class="col-1" style="padding: 0 0 0 10px;margin-top: 10px">¥{{ item.sum }}</div>
              <div @click="$store.commit('removeitem',index),$forceUpdate" class="col-1"
                   style="padding: 0 0 0 10px;margin-top: 10px;color:#666;cursor: pointer">移除
              </div>
            </div>
          </div>
          <!--          total-->
          <div class="row" style="border: 1px solid rgb(240, 240, 240);padding: 10px;font-size: 12px;text-align: right">
            <div class="col-12" style="color: #999;font-size: 12px">
              总价：<span style="font-size: 16px;color:#e2231a;">￥{{ totalprice }}</span>
              <span
                style="display: inline-block;height: 100%;padding: 10px;background: #e54346;font-size: 18px;color: #fff;margin-left: 10px">去结算</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import store from '../store'
import { mapState, mapGetters } from 'vuex'

export default {
  name: 'ShoppingCar',
  store,
  data: function () {
    return {
      ischeck: false,
      check: [],
      forcomputed: 0
    }
  },
  methods: {
    checkall () {
      this.ischeck = !this.ischeck
      this.check = []
      for (var i = 0; i < this.items.length; i++) {
        this.check.push(this.ischeck)
      }
    }
  },
  watch: {
    check (val, odd) {
      // console.log(val)
      var allcheck = val.some(item => {
        if (item === false) {
          // console.log(item)
          return true
        }
        return false
      })
      // console.log(allcheck)
      if (!allcheck) {
        this.ischeck = true
      } else {
        this.ischeck = false
      }
    }
  },
  computed: {
    ...mapState(['items']),
    ...mapGetters(['showchange']),
    totalprice () {
      // eslint-disable-next-line no-unused-vars
      var a = this.forcomputed
      var chekindex = this.check.map((x, index) => {
        if (x === true) {
          return index
        }
      })
      let countsum = 0
      chekindex.forEach(item => {
        if (item !== undefined && item !== null) {
          countsum += parseInt(this.$store.state.items[item].sum)
        }
      })
      return countsum.toFixed(2)
    }
  },
  created () {
    // console.log(this.items.length)
    for (var i = 0; i < this.items.length; i++) {
      this.check.push(false)
    }
  }
}
</script>

<style scoped>
.overhide {
  text-overflow: ellipsis;
  overflow: hidden;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  word-break: break-all;
}
</style>
