<template>
	<router-view></router-view>
</template>

<style>
*{ margin : 0; padding : 0;}
ul,li{ list-style: none;}
img{ display: block;}
html,body{ height:100%;}
.clearfix:after{ content:""; display: block; clear:both;}
#main{ height: 100%; display: flex; flex-direction:column;}
#content{ flex:1; overflow:auto; margin-bottom: 50px; position: relative;}
@import url("./assets/iconfont/iconfont.css");
</style>
