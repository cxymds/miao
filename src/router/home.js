export default [
	{
		path:'/movies',
		name:'movies',
		component: ()=>import('../views/movies/index.vue')
	},
	{
		path:'/cniemas',
		name:'cniemas',
		component: ()=>import('../views/cniemas/index.vue')
	},
	{
		path:"/mine",
		name:'mine',
		component: ()=>import('../views/mine/index.vue')
	}
]