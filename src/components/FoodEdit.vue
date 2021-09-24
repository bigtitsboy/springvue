<template>
  <div>
    <!--    editfood{{$route.params.obj}}-->
    <div class="container">
      <div class="row">
        <div class="col-12" style="text-align: center;margin-top: 50px">
          <!--    bookedit{{ $route.params.obj }}-->
          <form action="http://localhost:8081/books_spingMVC/food/edit" method="get">
            <p>foodName:<input type="text" name="foodname" :value="food.foodname" readonly/></p>
            <p>price:<input type="text" name="price" :value="food.price"/></p>
            <p><input type="submit" value="提交"/></p>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FoodEdit',
  data: function () {
    return {
      food: null
    }
  },
  created () {
    this.food = this.$route.params.obj
  }
}
</script>

<style scoped>

</style>
