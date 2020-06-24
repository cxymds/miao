import moviesRouter from  './movies/index.js'
export default [
	{
		path:'/movies',
		name:'movies',
		component: ()=>import('../views/movies/index.vue'),
		children: moviesRouter
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
	},
	{
		path:"/*",
		name:"redirect",
		redirect:"/movies/now"
	}
]