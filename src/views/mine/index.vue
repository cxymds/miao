<template>
	<div class="main">
		<my-head></my-head>
		我的
		<my-foot></my-foot>
	</div>
</template>

<script>
	import myHead from '../../components/head'
	import myFoot from '../../components/foot'
	export default {
		name:'movies',
		components:{
			myHead,
			myFoot
		}
	}
</script>

<style>
</style>
