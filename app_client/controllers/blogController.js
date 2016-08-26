app.controller('blogController', function($scope, $location, blogDataService, postService){
  $scope.posts = [];

  $scope.loadPosts = function(){
    blogDataService.getPosts().then(
      function(response){
        $scope.posts = response.data;
      }
    );
  };
  $scope.loadPosts();

  $scope.displayPost = function(post){
    postService.set(post);
    $location.url('/post');
  };

  $scope.createPost = function(author, title, body){
    blogDataService.createPost(author, title, body).then(
      function(response){
        $scope.posts = response.data;
        $location.url('/');
      }
    );
  };

  $scope.deleteTodo =  function(id){
    blogDataService.deletePost(id).then(function(response){
        $scope.loadPosts();
    });
  };
});
