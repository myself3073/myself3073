
//实例一个 模块 ，管理项目所有的控制器

//该模块的名称是Controller app_copy哪里引入：var Yike = angular.module('Yike',['ngRoute','Controller']);
//那app那主模块就可以使用了
angular.module('Controller_copy',[]).controller('NavController',['$scope',function($scope){

    $scope.navs = [
        {
            link:'#/today',
            text:'今日一刻',
            icon:'icon-home'
        },
        {
            link:'#/older',
            text:'往期内容',
            icon:'icon-file-empty'
        },
        {
            link:'#/author',
            text:'热门作者',
            icon:'icon-pencil'
        },
        {
            link:'#/list',
            text:'栏目浏览',
            icon:'icon-menu'
        },
        {
            link:'#/favourite',
            text:'我的喜欢',
            icon:'icon-heart'
        },
        {
            link:'#/setting',
            text:'设置',
            icon:'icon-cog'
        }
    ]

}])
//今日一刻
.controller('TodayController',['$scope','$http',function($scope,$http){

    $http({
        url:'./api/today.php',
        method:'get'
    }).success(function(info){

        console.log(info);

        $scope.posts = info.posts;

    })

}])
//往期内容
.controller('OlderController',['$scope','$http',function($scope,$http){

    

}])
// //热门作者
// .controller('AuthorController',['$scope',function($scope){

    

// }])
// //栏目浏览
// .controller('ListController',['$scope',function($scope){

    

// }])
// //我的喜欢
// .controller('FavouriteController',['$scope',function($scope){

    

// }])
// //设置
// .controller('SettingController',['$scope',function($scope){

    

// }])