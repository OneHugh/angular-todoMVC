(function (angular) {
	'use strict';//避免全局对象的产生

	// 从这里开始,享受这个旅程!
	var app = angular.module('todoApp',[])
	app.controller('todoController',['$scope','$filter',function($scope){
		// 1.初始显示界面
		//假设已经得到数据
		$scope.todos = [
			
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
		var isEditingId = -1;
		$scope.edit = function(id){
			$scope.isEditingId = id;
		}

		$scope.save = function(){
			$scope.isEditingId = -1;
		}


		// 5.勾选 切换任务完成与否的状态,已完成的加中划线
			//让他的li标签class等于item.completed就行,input中有checkbox复选框时ng-model true ,false表示选中和未选中

		// 6.点击 all批量切换任务状态
		$scope.selectAll = false;
		$scope.toggleAll = function(){
			for (var i = 0; i < $scope.todos.length; i++) {
				var item = $scope.todos[i];
				item.completed = $scope.selectAll; 
			}
			//$scope.selectAll=true;
		}

		// 7.左下角未完成的任务数同步
		$scope.getActive = function() {
			var num = 0;
			for (let i = 0; i < $scope.todos.length; i++) {
				const element = $scope.todos[i];
				if (!element.completed) {
					num++;
				}
			}
			return num
		}

		// 8.右下角 点击 清除所有以完成任务,没有已完成任务不显示clear completed
		$scope.clearAll = function () {
			for (let i = $scope.todos.length - 1; i >= 0; i--) {
				const element = $scope.todos[i];
				if (element.completed) {
					$scope.todos.splice(i,1);
				}
			}
		}
		// 9.点击  下中 all  显示所有;active 显示未完成任务 ;completed 显示已完成任务
		$scope.all = function() {
			$scope.state = {};
		}
		$scope.active = function() {
			$scope.state = {completed:false};
		}
		$scope.completed = function() {
			$scope.state = {completed:true};
		}
	}])

})(angular);
