<template>
  <div class="Page2">
    <PageHeader></PageHeader>
    <h1>{{ msg }}</h1>
    <a class="btn btn-primary" role="button" data-toggle="collapse" href="#collapseExample" aria-expanded="false"
       aria-controls="collapseExample">
      slide1
    </a>
    <button class="btn btn-primary" type="button" data-toggle="collapse" data-target="#collapseExample"
            aria-expanded="false" aria-controls="collapseExample">
      slide2
    </button>
    <div class="collapse" id="collapseExample">
      <div class="well">
        <h2>aaaaaaa</h2>
      </div>
    </div>
    <div class="timerNow">
      <h3 class="h31"></h3>
      <h3 class="h32"></h3>
    </div>
    <!--时间选择器-->
    <div class="timerPick">
      <div class="block">
        <span class="demonstration">选择时间</span>
        <el-time-select
          v-model="value1"
          :picker-options="{
    start: '08:30',
    step: '00:15',
    end: '18:30'
  }"
          placeholder="选择时间">
        </el-time-select>
      </div>
      <div class="block">
        <span class="demonstration">选择日期</span>
        <el-date-picker
          v-model="value1"
          type="date"
          placeholder="选择日期"
          :picker-options="pickerOptions0">
        </el-date-picker>
      </div>

      <div class="block">
        <span class="demonstration">选择日期时间</span>
        <el-date-picker
          v-model="value1"
          type="datetime"
          placeholder="选择日期时间"
          :clearable="false">
        </el-date-picker>
      </div>

      <div class="block">
        <span class="demonstration">选择日期时间</span>
        <el-date-picker
          v-model="value2"
          type="datetime"
          placeholder="选择日期时间"
          align="right"
          :picker-options="pickerOptions1">
        </el-date-picker>
      </div>
    </div>

  </div>
</template>

<script>
  import $ from 'jquery'
  import PageHeader from './PageHeader.vue'
  export default {
    name: 'Page2',
    data () {
      return {
        msg: 'Welcome to Page2',
        pickerOptions0: {
          disabledDate (time) {
            return time.getTime() < Date.now() - 8.64e7
          }
        },
        pickerOptions1: {
          shortcuts: [{
            text: '今天',
            onClick (picker) {
              picker.$emit('pick', new Date())
            }
          }, {
            text: '昨天',
            onClick (picker) {
              const date = new Date()
              date.setTime(date.getTime() - 3600 * 1000 * 24)
              picker.$emit('pick', date)
            }
          }, {
            text: '一周前',
            onClick (picker) {
              const date = new Date()
              date.setTime(date.getTime() - 3600 * 1000 * 24 * 7)
              picker.$emit('pick', date)
            }
          }]
        },
        value1: '',
        value2: ''
      }
    },
    components: {PageHeader},
    mounted () {
      setInterval(function () {
        let timer1 = new Date()
        let yearNow = timer1.getFullYear()
        let monthNow = timer1.getMonth() + 1
        let dateNow = timer1.getDate()
        let dayNow = timer1.getDay()
        let hourNow = timer1.getHours()
        let minutesNow = timer1.getMinutes()
        let secondsNow = timer1.getSeconds()
        let timer2 = yearNow + '年' + monthNow + '月' + dateNow + '日' + ' ' + '星期' + dayNow + ' ' + hourNow + '时' + minutesNow + '分' + secondsNow + '秒'
        $('.timerNow .h31').html(timer1)
        $('.timerNow .h32').html(timer2)
      }, 1000)
    }
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1 {
    font-weight: normal;
  }

  .timerNow {
    width: 100%;
  }

  h3 {
    line-height: 90px;
    font-size: 30px;
  }

  .timerPick {
    width: 100%;
    margin-top: 3%;
  }
  .block{
    display: inline-block;
    margin: 1%;
  }
</style>
