(function (angular) {
	'use strict';//避免全局对象的产生

	// 从这里开始,享受这个旅程!
	var app = angular.module('todoApp',[])
	app.controller('todoController',['$scope',function($scope){
		// 1.初始显示界面
		//假设已经得到数据
		$scope.todos = [
			{id:1,name:'吃饭',completed:false},
			{id:1,name:'吃饭',completed:true},
			{id:2,name:'睡觉',completed:false},
			{id:3,name:'打豆豆',completed:true},
			{id:4,name:'学习',completed:false},
			{id:5,name:'看片',completed:true},
		]

		// 2.Enter 添加任务
		$scope.newTodo='';
		$scope.add = function(){
			if($scope.newTodo!==''){
				$scope.todos.push({
					id:Math.random,
					name:$scope.newTodo,
					completed:false
				});
			}
			
			$scope.newTodo='';
		}

		// 3.点击 X删除任务
		$scope.remove=function(id){
			for(var i=0;i<$scope.todos.length;i++){
				var item = $scope.todos[i];
				if(item.id == id){
					$scope.todos.splice(i,1);
					return
				}
			}
		}

		// 4.双击 修改任务

		// 5.勾选 切换任务完成与否的状态,已完成的加中划线

		// 6.点击 all批量切换任务状态

		// 7.左下角未完成的任务数同步

		// 8.右下角 点击 清除所有以完成任务,没有已完成任务不显示clear completed

		// 9.点击  下中 all  显示所有;active 显示未完成任务 ;completed 显示已完成任务
	}])

})(angular);