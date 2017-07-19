<template>
  <div class="BaiDuMap">
    <PageHeader></PageHeader>
    <div class="box1">
      <baidu-map
        class="bm-view"
        :zoom="nearby.zoom"
        :center="{lng: 117.126042,lat: 36.65404}"
        :radius="nearby.radius"
        :dragging="true">
        <!--搜索-->
        <bm-local-search
          keyword="商家"
          :nearby="nearby"
          :auto-viewport="true"
          :panel="false">
        </bm-local-search>
        <!--图层-->
        <bm-circle
          :center="{lng: 117.126042,lat: 36.65404}"
          :radius="nearby.radius"
          strokeColor="#ff8822"
          fillColor="#eeeddd"
          :dragging="true"
          :editing="true"
          :enableMassClear="true"
        >
        </bm-circle>
        <!--缩放-->
        <bm-navigation
          anchor="BMAP_ANCHOR_TOP_RIGHT">

        </bm-navigation>
        <!--定位-->
        <bm-geolocation
          anchor="BMAP_ANCHOR_BOTTOM_RIGHT"
          :showAddressBar="true"
          :autoLocation="true">
        </bm-geolocation>
        <bm-scale
          anchor="BMAP_ANCHOR_TOP_RIGHT">
        </bm-scale>
        <!--标识点-->
        <bm-marker
          v-for="marker in markers"
          :position="{lng: marker[0], lat: marker[1]}"
          :clicking="true"
          @click="info1(marker[0],marker[1])">
        </bm-marker>
      </baidu-map>
    </div>
    <div class="box2">
      <div class="selectInfo">
        <div class="left1">
          ssssss
        </div>
        <div class="right1">
          <select v-model="value" @change="selDistance(value)">
            <option :value="1">1小时车程</option>
            <option :value="2">2小时车程</option>
            <option :value="3">3小时车程</option>
          </select>
        </div>
      </div>
      <div class="info2">
        <p class="title1"></p>
        <p class="title2"></p>
      </div>
      <div class="box3">
        <ul>
          <li v-for="i in markers.length">{{i}}</li>
          <!--<li>{{ nearby.center}}</li>-->
          <!--<li v-for="marker in markers">{ "lng":{{marker[0]}},"lat":{{marker[1]}} }</li>-->
          <!--<li v-for="marker in markers">{{ marker }}</li>-->
        </ul>
      </div>
    </div>
  </div>
</template>
<style>
  html, body, .BaiDuMap {
    width: 100%;
    height: 99.43%;
  }
.box1{
  width: 100%;
  height: 97%;
}
  .bm-view {
    width: 100%;
    height: 100%;
    margin: 20px auto 0;
  }

  .box2 {
    width: 100%;
    height: 20%;
    position: absolute;
    background-color: #eeeddd;
    top: 80%;
    overflow: hidden;
  }

  .box3 {
    width: 100%;
  }

  .selectInfo {
    width: 100%;
    height: 25%;
    background-color: paleturquoise;
  }

  .selectInfo div {
    float: left;
    text-align: center;
  }

  .left1, .right1 {
    width: 50%;
    height: 100%;
    font-size: 15px;
  }

  .right1 select {
    height: 60%;
    margin: 3%;
  }

  .info2 {
    width: 100%;
    height: 160px;
    background: rgba(255, 255, 255, .5);
    display: none;
  }
</style>
<script>
  import PageHeader from './PageHeader.vue'
  import $ from 'jquery'
  export default {
    name: 'BaiDuMap',
    components: {PageHeader},
    data () {
      return {
        value: 1,
        nearby: {
//            定位坐标
          center: {lng: 117.126042, lat: 36.65404},
          radius: 60000,
          zoom: 10
        },
        markers: [
          [
            121.5273285,
            31.21515044
          ],
          [
            117.0764409,
            36.66646499
          ],
          [
            119.052491,
            36.684999
          ],
          [
            118.479013,
            36.704908
          ],
          [
            119.176098,
            36.656746
          ],
          [
            115.597732,
            35.162133
          ],
          [
            117.397828,
            35.557086
          ],
          [
            117.066472,
            36.049145
          ],
          [
            117.268483,
            36.068694
          ],
          [
            116.964557,
            35.412954
          ],
          [
            115.601289,
            35.188304
          ],
          [
            117.015053,
            36.144334
          ],
          [
            120.752994,
            38.166396
          ],
          [
            116.85313,
            36.878284
          ],
          [
            118.09479,
            36.927851
          ],
          [
            120.482208,
            37.57356
          ],
          [
            116.713839,
            36.633769
          ],
          [
            119.052672,
            35.675614
          ],
          [
            116.605341,
            37.484428
          ],
          [
            117.197445,
            35.943409
          ],
          [
            118.672186,
            35.40435
          ],
          [
            121.996565,
            37.310038
          ],
          [
            120.487383,
            37.651313
          ],
          [
            117.905319,
            37.241895
          ],
          [
            117.261817,
            35.970466
          ],
          [
            116.863365,
            36.219828
          ],
          [
            117.955548,
            37.313404
          ],
          [
            117.955858,
            37.188455
          ],
          [
            118.810489,
            35.590129
          ],
          [
            122.007807,
            37.367816
          ],
          [
            115.981498,
            36.418641
          ],
          [
            117.725295,
            36.774993
          ],
          [
            117.723947,
            36.809515
          ],
          [
            118.355664,
            35.739383
          ],
          [
            117.887852,
            36.949796
          ],
          [
            121.768741,
            36.968208
          ],
          [
            116.784838,
            36.577144
          ],
          [
            118.522834,
            35.97628
          ],
          [
            120.737013,
            37.949583
          ],
          [
            120.632037,
            37.983948
          ],
          [
            117.292758,
            36.838595
          ],
          [
            116.507318,
            37.446791
          ],
          [
            116.991038,
            37.630495
          ],
          [
            117.437403,
            36.69941
          ],
          [
            117.020014,
            36.515445
          ],
          [
            120.740058,
            37.942839
          ],
          [
            121.831303,
            37.070455
          ],
          [
            118.339077,
            34.826055
          ],
          [
            121.606363,
            37.03804
          ],
          [
            118.860664,
            35.701583
          ],
          [
            121.578192,
            36.953675
          ],
          [
            120.6048,
            37.543351
          ],
          [
            118.825112,
            36.8620
          ]
        ]
      }
    },
    methods: {
      info1 (lng1, lat1) {
        $('.info2').slideToggle()
        console.log(lng1, lat1)
        $('.title1').html(lng1)
        $('.title2').html(lat1)
      },
      selDistance (value0) {
        if (value0 === 1) {
          this.nearby.radius = 60000
          this.nearby.zoom = 10
        } else if (value0 === 2) {
          this.nearby.radius = 120000
          this.nearby.zoom = 9
        } else {
          this.nearby.radius = 180000
          this.nearby.zoom = 8
        }
      }
    }
  }
</script>
