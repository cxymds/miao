<template>
	<div class="movie_body" ref="movie_body">
		<ul>
			<li v-for="item in movieList" :key="item.id">
				<div class="pic_show"><img :src="item.img | setSize('128.180')"></div>
				<div class="info_list">
					<h2>{{item.nm}}</h2>
					<p>上映时间 <span class="grade">{{item.comingTitle}}</span></p>
					<p>主演: {{item.star}}</p>
					<p>今天55家影院放映{{item.wish}}场</p>
				</div>
				<div class="btn_mall">
					购票
				</div>
			</li>
		</ul>
	</div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
	name:'now',
	data:()=>{
		return{
			movieList:[]
		}
	},
	mounted:function() {
		this.axios.get('/api/movieOnInfoList?cityId=10').then(({data})=>{
			this.movieList = data.data.movieList;
			new BScroll(this.$refs.movie_body)
		})
	}
}
</script>

<style>
</style>
