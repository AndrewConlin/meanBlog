var app = angular.module('ngBlog', ['ngRoute'])
.config(function($routeProvider, $locationProvider){
  $routeProvider
  .when('/',{
    templateUrl: 'views/posts.view.html',
    controller: 'blogController'
  })
  .when('/create',{
    templateUrl: 'views/createPost.view.html',
    controller: 'blogController'
  })
  .when('/post', {
    template : "<post-component></post-component>"
  })
  .when('/about', {
    templateUrl: 'views/about.view.html',
  })
  .when('/contact', {
    templateUrl: 'views/contact.view.html',
  })
  .otherwise({
    redirectTo:'/'
  });

  $locationProvider.html5Mode({
      enabled: true, // turn html5Mode on
      requireBase: true // require a '<base> tag'
    });
});
