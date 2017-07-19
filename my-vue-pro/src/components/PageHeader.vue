<!--路由view模块-->
<template>
  <div class="PageHeader">
    <div class='navbar-default'>
      <ul class='nav nav-pills'>
        <li>
          <router-link to='/Page1' class="active">Page1</router-link>
        </li>
        <li>
          <router-link to='/Page2' class="">Page2</router-link>
        </li>
        <li>
          <router-link to='/BaiDuMap' class="">BaiDuMap</router-link>
        </li>
        <li>
          <router-link to='/Swiper' class="">Swiper</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  //  import $ from 'jquery'
  export default {
    name: 'PageHeader'
  }
</script>

<style>
  a {
    text-decoration: none;
  }
</style>
