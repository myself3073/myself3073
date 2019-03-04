

var Yike = angular.module('Yike',['ngRoute','Controller_copy']);

//路由
Yike.config(['$routeProvider',function($routeProvider){

	$routeProvider.when('/today',{
		templateUrl:'./views/today_copy.html',
		controller:'TodayController'
	}).when('/older',{
		templateUrl:'./views/older_copy.html',
		controller:'OlderController'
	}).otherwise({
		redirectTo:'/today'
	})

}])

//独立运行的模块
Yike.run(['$rootScope', function ($rootScope) {
	//初始类名
	$rootScope.collapsed = false;
	//全局方法
	$rootScope.toggle = function () {

		$rootScope.collapsed = !$rootScope.collapsed;

		var navs = document.querySelectorAll('.navs dd');

		if($rootScope.collapsed) {
			// 打开
			for(var i=0; i<navs.length; i++) {
				navs[i].style.transform = 'translate(0)';
				navs[i].style.transitionDuration = (i + 1) * 0.15 + 's';
				navs[i].style.transitionDelay = '0.2s';
			}
		} else {
            //关闭
			var len = navs.length - 1;
			for(var j=len; j>0; j--) {
				navs[j].style.transform = 'translate(-100%)';
				navs[j].style.transitionDuration = (len - j) * 0.15 + 's';
				navs[j].style.transitionDelay = '';
			}
		}
	}
}]);