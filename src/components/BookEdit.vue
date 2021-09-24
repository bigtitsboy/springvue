<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col-12" style="text-align: center;margin-top: 50px">
          <!--    bookedit{{ $route.params.obj }}-->
          <form action="http://localhost:8081/books_spingMVC/book/edit" method="get">
            <p>bookName:<input type="text" name="bookName" :value="book.bookName"/></p>
            <p>bookAuthor:<input type="text" name="bookAuthor" :value="book.bookAuthor"/></p>
            <p>bookPublic:<input type="text" name="bookPublic" :value="book.bookPublic"/></p>
            <p>bookPublicDate:<input type="text" name="bookPublicDate" :value="book.bookPublicDate"/></p>
            <p>bookSort:<input type="text" name="bookSort" :value="book.bookSort"/></p>
            <p>bookIsbn:<input type="text" name="bookIsbn" :value="book.bookIsbn" readonly/></p>
            <p><input type="submit" value="提交"/></p>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BookEdit',
  data: function () {
    return {
      book: null
    }
  },
  created () {
    this.book = this.$route.params.obj
  }
}
</script>

<style scoped>

</style>
