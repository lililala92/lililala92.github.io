var myApp=angular.module('myapp',['ngRoute']);

myApp.config(function($routeProvider){
   $routeProvider

       .when('/home',{
       	  templateUrl:'pages/home.html',
       	  controller:'mainController'
       })
       .when('/about',{
       	  templateUrl:'pages/about.html',
       	  controller:'aboutController'
       })
       .when('/contact',{
       	  templateUrl:'pages/contact.html',
       	  controller:'contactController'
       })

});
myApp.controller('mainController',function($scope){
	$scope.message='Everyone come and see how good I look!';
});
myApp.controller('aboutController',function($scope){
	$scope.message='Look! I am an about page.';
});
myApp.controller('contactController',function($scope){
	$scope.message='Contact us! JK. This is just a demo.';
});