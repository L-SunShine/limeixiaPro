<template>
  <baidu-map :center="nearby.center" :zoom="nearby.zoom"  :dragging="true" class="app">
    <bm-view class="map"></bm-view>
       <bm-navigation anchor="BMAP_ANCHOR_TOP_RIGHT"></bm-navigation>
      <bm-scale anchor="BMAP_ANCHOR_TOP_RIGHT"></bm-scale>
    	 <bm-marker v-for="i in add" :position={lng:i.adds[0],lat:i.adds[1]} :dragging="true" animation="BMAP_ANIMATION_DROP" @click="show(i.id)" >
	    </bm-marker>
    <bm-circle class="circle" :center="nearby.center" :radius="nearby.radius" strokeColor="rgb(143,188,143)" fillColor="rgb(240,255,255)" :editing="true"></bm-circle>
    <select name="2" id="select" v-model="value" @change="chooseMedicine(value)">
    	<option :value="1">一个小时车程</option>
    	<option :value="2">两个小时车程</option>
    	<option :value="3">三个小时车程</option>
    </select>
    <ul class="list"  v-bind:class="{ active: isActive}">
    	<li>11111</li>
    	<li>2222</li>
    	<li>33333</li>
    	<li>44444</li>
    	<li>55555</li>
    	<li>66666</li>
    	<li>11111</li>
    	<li>2222</li>
    	<li>33333</li>
    	<li>44444</li>
    	<li>55555</li>
    </ul>
    <p class="detail" v-bind:class="{ on: isOn}">111111</p>
  </baidu-map>
</template>

<script>

export default {
  	name:'map',
	  data () {
	    return {
	    	isActive:false,
	    	isOn:false,
	    	value:1,
	    	add:[
	    		{
	    			id:1,
	    			adds:
	    			[
	    			117.00,
	    			36.40
	    		],

	    		},
	    		{
	    			id:2,
	    			adds:
	    			[
	    			117.5,
	    			37.40
	    		],

	    		},{
	    			id:3,
	    			adds:
	    			[
	    			118.00,
	    			35.40
	    		],

	    		}
	    		,{
	    			id:4,
	    			adds:
	    			[
	    			116.00,
	    			33.40
	    		],

	    		}

	    	],
	      nearby: {
	        center: {
	          lng: 117.00,
	          lat: 36.40
	        },
	        radius:60000,
	        zoom:11,
	      }
	    }
	  },
	   methods: {
    show (value) {
    	this.isOn = true,
    	this.isActive = true,
      console.log(value)
    },
    chooseMedicine(value){

    	if(value === 1){
    		this.nearby.radius = 60000;
    		this.nearby.zoom = 11;
    	}
    	else if(value === 2){
    		this.nearby.radius = 120000;
    		this.nearby.zoom = 10;

    	}
    	else{
    		this.nearby.radius = 180000;
    		this.nearby.zoom = 9;
    	}
    }
  }
}
</script>
<style>
.app,.map{
	width:100%;
	height:100%;
}
.app{
	position:relative;
}
.list{
	position:absolute;
	width:100%;
	bottom:-50px;
	background:red;
}
.active{
		bottom:-1000px;
		transition:bottom 2s;
}
.detail{
	position:absolute;
	width:100%;
	height:100px;
	bottom:-500px;
	background:yellow;
}
.on{
		bottom:0px;
		transition:bottom 1s;
}
#select{
	width:200px;
	height:30px;
	font-size: 24px;
	position:absolute;
	bottom:400px;
}
</style>
