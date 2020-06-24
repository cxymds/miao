<template>
	<div class="city_body">
			<div class="city_list">
				<div class="city_hot">
					<h2>热门城市</h2>
					<ul class="clearfix">
						<li v-for="city in citylist" :key="city['id']" v-show="city['isHot']">{{city['nm']}}</li>
					</ul>
				</div>
				<div class="city_sort">
					<div v-for="item in cityIndex" :key="item.index">
						<h2>{{item.index}}</h2>
						<ul>
							<li v-for="citt in item.list" :key="citt.id">{{citt.nm}}</li>
						</ul>
					</div>
				</div>
			</div>
			
			<div class="city_index">
				<ul>
					<li v-for="item in cityIndex">{{item.index}}</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data:function(){
		return {
			citylist:[],
			cityIndex:[],
		}
	},
	mounted:function(){
		this.axios.get('/api/citylist').then(({data})=>{
			this.citylist = data.data.cities;
			this.resetCities(this.citylist);
		})
	},
	// [
	// 	{
	// 		index:'A',
	// 		list:[
	// 			{cit},
	// 			{cit},
	// 			{cit},
	// 			{cit},
	// 		]
	// 	},
	// 	{},
	// ]
	methods:{
		resetCities(cities){
			for(let city=0;city< cities.length;city++){
				let index = cities[city]['py'].substr(0,1).toUpperCase();  //首字母
				let tag = false;
				for(let i=0;i< this.cityIndex.length;i++){
					if(index==this.cityIndex[i].index){
						this.cityIndex[i]['list'].push(cities[city]);
						tag = true;
					}
				}
				if(tag==false){
					this.cityIndex.push({
						index:index,
						list:[cities[city]]
					});
				}
				
			}
			this.cityIndex.sort((a,b)=>{
				if(a.index>b.index){
					return 1
				}else{
					return -1;
				}
			})
		}
	}
}
</script>

<style>
	
	#content .city_body{ margin-top: 45px; display: flex; width:100%; position: absolute; top: 0; bottom: 0;}
	.city_body .city_list{ flex:1; overflow: auto; background: #FFF5F0;}
	.city_body .city_hot{ margin-top: 20px;}
	.city_body .city_hot h2{ padding-left: 15px; line-height: 30px; font-size: 14px; background:#F0F0F0; font-weight: normal;}
	.city_body .city_hot ul{}
	.city_body .city_hot ul li{ float: left; background: #fff; width: 29%; height: 33px; margin-top: 15px; margin-left: 3%; padding: 0 4px; border: 1px solid #e6e6e6; border-radius: 3px; line-height: 33px; text-align: center; box-sizing: border-box;}
	.city_body .city_sort{}
	.city_body .city_sort div{ margin-top: 20px;}
	.city_body .city_sort h2{ padding-left: 15px; line-height: 30px; font-size: 14px; background:#F0F0F0; font-weight: normal;}
	.city_body .city_sort ul{ padding-left: 10px; margin-top: 10px;}
	.city_body .city_sort ul li{ line-height: 30px; line-height: 30px;}
	.city_body .city_index{ width:20px; display: flex; flex-direction:column; justify-content:center; text-align: center; border-left:1px #e6e6e6 solid;}
</style>
