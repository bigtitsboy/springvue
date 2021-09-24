<template>
  <div>
    <div class="container">
      <!--      前台-->
      <div class="row">
        <div class="col-8 offset-2 forward">
          前台
        </div>
      </div>
      <!--      vip-->
      <div class="row" v-if="vipseatList.length>1">
        <div class="col-12 vip">
          <div class="row" v-for="(item,index) in vipseatList" :key="'vipseatList'+index" style="margin: 10px 0">
            <!--            第一列-->
            <div class="col-3 offset-1">
              <div class="row">
                <div class="col-4" style="padding: 0;text-align: center" v-for="count in 3" :key="'first'+count">
                  <span :class="item[count - 1].sign==='true'?'order':'preorder'"
                        @click="item[count - 1].sign==='false' && ordersit($event,item[count - 1].seat)"></span>
                </div>
              </div>
            </div>
            <!--            第2列-->
            <div class="col-3 offset-1">
              <div class="row">
                <div class="col-4" style="padding: 0" v-for="count in 3" :key="'second'+count">
                  <span :class="item[count +2].sign==='true'?'order':'preorder'"
                        @click="item[count +2].sign==='false' &&ordersit($event,item[count +2].seat)"></span>
                </div>
              </div>
            </div>
            <!--            第3列-->
            <div class="col-3 offset-1">
              <div class="row">
                <div class="col-4" style="padding: 0" v-for="count in 3" :key="'third'+count">
                  <span :class="item[count +5].sign==='true'?'order':'preorder'"
                        @click="item[count +5].sign==='false' &&ordersit($event,item[count +5].seat)"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!--      normal-->
      <div class="row normal" v-if="normalseatList.length>1">
        <div class="col-12">
          <div class="row" v-for="(item,index) in normalseatList" :key="'normalseatList'+index" style="margin: 10px 0">
            <!--            第一列-->
            <div class="col-5 offset-1">
              <div class="row">
                <div class="col-3" style="padding: 0;text-align: center" v-for="count in 4"
                     :key="'normalseatList_first'+count">
                  <span :class="item[count -1].sign==='true'?'order':'preorder'"
                        @click="item[count - 1].sign==='false' &&ordersit($event,item[count - 1].seat)"></span>
                </div>
              </div>
            </div>
            <!--            第二列-->
            <div class="col-5 offset-1">
              <div class="row">
                <div class="col-3" style="padding: 0" v-for="count in 4" :key="'normalseatList_third'+count">
                  <span :class="item[count +3].sign==='true'?'order':'preorder'"
                        @click="item[count +3].sign==='false' &&ordersit($event,item[count + 3].seat)"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!--      提交-->
      <div class="row" style="margin-top: 10px">
        <div class="col-12" style="text-align: center">
          <button @click="sendorder"
                  style="box-shadow: 0 2px 10px -2px #f03d37;background: #f03d37;padding:10px 20px;border: none;font-size: 16px;color: #fff;border-radius: 40px">
            确认选座
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Order',
  data: function () {
    return {
      vipseatList: [[]],
      normalseatList: [[]],
      orderlist: []
    }
  },
  methods: {
    getSit () {
      this.$axios({
        method: 'get',
        url: 'sit/all'
      }).then(res => {
        for (var i = 0; i < 9; i++) {
          if (i < 4) {
            this.vipseatList[i] = []
            for (var j = 0; j < 9; j++) {
              this.vipseatList[i][j] = res[9 * i + j]
            }
          } else {
            this.normalseatList[i - 4] = []
            for (var k = 0; k < 8; k++) {
              this.normalseatList[i - 4][k] = res[8 * i + k + 4]
            }
          }
        }
        this.vipseatList.push()
        this.normalseatList.push()
      }).catch(err => {
        console.log(err)
      })
    },
    ordersit (e, item) {
      if (e.target.className === 'sitselect') {
        e.target.className = 'preorder'
        var index = this.orderlist.findIndex(x => x === item)
        this.orderlist.splice(index, 1)
        // console.log(index)
        // console.log(item)
      } else {
        if (this.orderlist.length < 1) {
          e.target.className = 'sitselect'
          this.orderlist.push(item)
        } else {
          alert('只能预约一个座位')
        }
      }
    },
    sendorder () {
      this.$axios({
        method: 'get',
        url: 'sit/order',
        params: {
          situpdate: this.orderlist[0]
        }
      }).then(res => {
        alert('预定成功')
        location.reload()
      }).catch(err => {
        console.log(err)
      })
    }
  },
  created () {
    this.getSit()
  }
}
</script>

<style scoped>
.forward {
  background: rgb(238, 235, 252);
  text-align: center;
  color: dimgrey;
  padding: 30px 50px;
  font-weight: bolder;
  border-bottom-right-radius: 40px;
  border-bottom-left-radius: 40px;
}

.vip {
  background: rgb(205, 253, 215);
  text-align: center;
  margin-top: 50px;
}

.normal {
  background: rgb(255, 214, 196);
  text-align: center;
  margin-top: 50px;
}

.order {
  display: inline-block;
  vertical-align: middle;
  height: 100%;
  width: 100%;
  background: url("../assets/order.png") no-repeat;
}

.preorder {
  cursor: pointer;
  display: inline-block;
  vertical-align: middle;
  height: 100%;
  width: 100%;
  background: url("../assets/preorder.png") no-repeat;
}

.sitselect {
  cursor: pointer;
  display: inline-block;
  vertical-align: middle;
  height: 100%;
  width: 100%;
  background: url("../assets/sitselect.png") no-repeat;
}
</style>
