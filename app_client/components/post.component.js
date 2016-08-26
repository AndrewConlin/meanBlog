var app = angular.module('ngBlog');

app.component("postComponent", {
  template : `
    <div id="postContent">
      <h2>{{post.title}}</h2>
      <h6>{{post.author}}</h6>
      <p>{{post.date}}</p>
      <p>{{post.body}}</p>

      <button type="button" ng-click="deletePost(post._id)">Delete Post</button>
    </div>
  `,
  controller : function($scope, $location, postService, blogDataService){
    $scope.post = postService.get();

    $scope.deletePost = function(id){
      blogDataService.deletePost(id).then(function(response){
        $location.url('/');
      });
    };
  },
  bindings : {
    post : "="
  }
});
