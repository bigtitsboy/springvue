<template>
  <div>
    <div class="container" style="margin-top: 20px">
      <div class="row">
        <div class="col-12">
          <div class="row" style="background: #f3f3f3;padding: 10px;font-size: 12px;text-align: center">
            <div class="col-2">
              <input type="checkbox" style="vertical-align: middle">
              <span style="display: inline-block;vertical-align: middle;margin-left: 5px">全选</span>
            </div>
            <div class="col-4">
              商品
            </div>
            <div class="col-2">单价</div>
            <div class="col-2">数量</div>
            <div class="col-1" style="padding: 0">小计</div>
            <div class="col-1" style="padding: 0">操作</div>
          </div>
        </div>
      </div>
      <div class="row">
        {{items[0].name}}
      </div>
    </div>
  </div>
</template>

<script>
import store from '../store'
import { mapState } from 'vuex'

export default {
  name: 'ShoppingCar',
  store,
  computed: {
    ...mapState(['items'])
  }
}
</script>

<style scoped>

</style>
