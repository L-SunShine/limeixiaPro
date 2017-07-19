<template>
  <div class="Page1">
    <PageHeader></PageHeader>
    <h1>
      {{ msg }}
    </h1>
    <div id="carousel-example-generic" class="carousel slide" data-ride="carousel" data-interval="2000">
      <!-- Indicators -->
      <ol class="carousel-indicators">
        <li data-target="#carousel-example-generic" data-slide-to="0" class="active"></li>
        <li data-target="#carousel-example-generic" data-slide-to="1"></li>
      </ol>

      <!-- Wrapper for slides -->
      <div class="carousel-inner" role="listbox">
        <div class="item active">
          <img src="../assets/banner/banner1.jpg" alt="...">
        </div>
        <div class="item">
          <img src="../assets/banner/banner2.jpg" alt="...">
        </div>
      </div>

      <!-- Controls -->
      <a class="left carousel-control" href="#carousel-example-generic" role="button" data-slide="prev">
        <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a class="right carousel-control" href="#carousel-example-generic" role="button" data-slide="next">
        <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>
    <!--时间选择器-->
    <div class="pickerTime">
      <datepicker :value="state.date"></datepicker>
    </div>


  </div>
</template>

<script>
//  import $ from 'jquery'
  import PageHeader from './PageHeader.vue'
  import Datepicker from 'vuejs-datepicker'
  export default {
    name: 'Page1',
    data () {
      return {
        msg: 'Welcome to Page1',
        state: {
          date: new Date()
        }
      }
    },
    components: {
      PageHeader,
      Datepicker
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1 {
    font-weight: normal;
  }

  .item {
    width: 100%;
    height: 446px;
  }

  .item img {
    width: 100%;
    height: 100%;
  }
  .pickerTime{
    width: 80%;
    margin: 15% auto;
  }
</style>
