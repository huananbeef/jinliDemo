console.log("js加载完成");

require.config({
	paths:{
		"jquery":"jquery-1.11.3",
		"jquery-cookie":"jquery.cookie",
		"index":"index",
		"tool":"tool",
		"list":"list"
	},
	//设置模块之间的依赖关系
	shim:{
		//保证先加载JQuery,再加载
		"jquery-cookie":["jquery"],
		/*定义不遵从AMD规范的js文件*/
		"tool":{
			exports:"_"
		}
	}
})

require(["index"],function(index){
	index.main();
})

require(["list"],function(list){
	list.list();
})