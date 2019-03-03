
angular.module('Controllers', [])

.controller('NavController', ['$scope', function ($scope) {
	// 定义导航
	$scope.navs = [
		{link: '#/today', text: '今日一刻', icon: 'icon-home'},
		{link: '#/older', text: '往期内容', icon: 'icon-file-empty'},
		{link: '#/author', text: '热门作者', icon: 'icon-pencil'},
		{link: '#/category', text: '栏目浏览', icon: 'icon-menu'},
		// {link: '#/favourite', text: '我的喜欢', icon: 'icon-heart'},
		{link: '#/settings', text: '设置', icon: 'icon-cog'},
	];
}])

.controller('TodayController', ['$scope', '$rootScope', '$http', function ($scope, $rootScope, $http) {

	$rootScope.index = 0;
	$rootScope.title = '今日一刻';

	$rootScope.loaded = false;

	$http({
		url: '/proxy/today',
		method: 'post'
	}).success(function (info) {

		$rootScope.loaded = true;

		$scope.posts = info.posts;
		$scope.date = info.date;

	});
}])

// 往期内容
.controller('OlderController', ['$scope', '$rootScope', '$http', function ($scope, $rootScope, $http) {

	$rootScope.index = 1;
	$rootScope.title = '往期内容';

	$rootScope.loaded = false;

	$http({
		url: '/proxy/older',
		method: 'post'
	}).success(function (info) {

		$rootScope.loaded = true;

		$scope.posts = info.posts;
		$scope.date = info.date;

	});
}])

// 热门作者
.controller('AuthorController', ['$scope', '$rootScope', '$http', function ($scope, $rootScope, $http) {

	$rootScope.index = 2;
	$rootScope.title = '热门作者';

	$rootScope.loaded = false;

	$http({
		url: '/proxy/author',
		method: 'post'
	}).success(function (info) {
		
		$rootScope.loaded = true;

		$scope.rec = info.rec;
		$scope.all = info.all;
	});
}])

// 栏目浏览
.controller('CategoryController', ['$scope', '$rootScope', '$http', function ($scope, $rootScope, $http) {
	
	$rootScope.index = 3;
	$rootScope.title = '热门作者';

	$rootScope.loaded = false;

	$http({
		url: '/proxy/category',
		method: 'post'
	}).success(function (info) {

		$rootScope.loaded = true;

		$scope.columns = info.columns;
	});
}])

// 设置
.controller('SettingsController', ['$scope', '$rootScope', function ($scope, $rootScope) {
	
	$rootScope.index = 4;
	$rootScope.title = '设置';

	$rootScope.loaded = true;

}]);











