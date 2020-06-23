export default [
	{
		path:'city',
		name:'city',
		component: ()=>import('../../views/movies/city.vue')
	},
	{
		path:'now',
		name:'now',
		component: ()=>import('../../views/movies/now.vue')
	},
	{
		path:'coming',
		name:'coming',
		component: ()=>import('../../views/movies/coming.vue')
	},
	{
		path:'search',
		name:'search',
		component: ()=>import('../../views/movies/search.vue')
	},
	{
		path:'/',
		redirect:'now'
	}
	
]