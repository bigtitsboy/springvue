<template>
  <div>
    <div class="container" style="margin-top: 20px">
      <div class="row" v-if="bookitems.length === 0" style="margin: 20% 0">
        <div class="col-11 " style="text-align: center">
          <img :src="require('../assets/carnothing.png')" alt="" style="max-height: 100%;max-width: 100%">还未借阅图书
        </div>
      </div>
      <div v-if="bookitems.length !== 0" class="row">
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
            <div class="col-2" style="padding: 0;">作者</div>
            <div class="col-2" style="padding: 0;text-align: center">数量</div>
            <div class="col-1" style="padding: 0">Isbn</div>
            <div class="col-1" style="padding: 0">操作</div>
          </div>
          <!--          body-->
          <div v-if="bookitems" class="row" style="padding: 10px;font-size: 12px;text-align: left;">
            <div class="row" v-for="(item,index) in bookitems" :key="'car'+index"
                 style="background: #fff4e8;margin-top: 10px;padding-top: 10px;padding-bottom: 10px;padding-right: 0">
              <div class="col-6">
                <input type="checkbox" style="vertical-align: middle" v-model="check[index]">
                <img :src="item.bookPic" alt="" style="height: 80px;width: 80px;margin-left: 10px">
                <div class="overhide"
                     style="display: inline-block;vertical-align: top;width: 40%;margin: 10px 0 10px 10px;">
                  {{ item.bookName }}
                </div>
              </div>
              <div class="col-2" style="margin-top: 10px">{{ item.bookAuthor }}</div>
              <div class="col-2" style="text-align: center;margin-top: 10px">
                <button :disabled="item.num ===1?'disabled':false"
                        @click="$store.commit('booknumless',index),$forceUpdate()"
                        style="border: 1px solid #999999;margin:0 2px"
                        class="d-none d-md-inline-block">-
                </button>
                <input type="text" style="width: 40%;text-align: center" v-model="item.num" readonly>
                <button @click="$store.commit('booknumadd',index),$forceUpdate()"
                        style="border: 1px solid #999999;margin:0 2px" class="d-none d-md-inline-block">+
                </button>
              </div>
              <div class="col-1"
                   style="padding: 0;margin-top: 10px;overflow: hidden;text-overflow: ellipsis;white-space: normal">
                <span>{{ item.bookIsbn }}</span>
              </div>
              <div @click="$store.commit('bookremoveitem',index),$forceUpdate" class="col-1"
                   style="padding: 0 0 0 10px;margin-top: 10px;color:#666;cursor: pointer">移除
              </div>
            </div>
          </div>
          <!--          total-->
          <div class="row" style="border: 1px solid rgb(240, 240, 240);padding: 10px;font-size: 12px;text-align: right">
            <div class="col-12" style="color: #999;font-size: 12px">
              <span
                style="display: inline-block;height: 100%;padding: 15px;background: #e54346;font-size: 18px;color: #fff;margin-left: 10px">借阅</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import store from '../store'
import { mapState } from 'vuex'

export default {
  name: 'BookCar',
  store,
  data: function () {
    return {
      ischeck: false,
      check: []
    }
  },
  methods: {
    checkall () {
      this.ischeck = !this.ischeck
      this.check = []
      for (var i = 0; i < this.bookitems.length; i++) {
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
    ...mapState(['bookitems'])
  },
  created () {
    // console.log(this.bookitems.length)
    for (var i = 0; i < this.bookitems.length; i++) {
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
