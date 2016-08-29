var app = angular.module('ngBlog');

app.component("postComponent", {
  template : `
    <div id="postContent">
      <div>
        <h2>{{post.title}}</h2>
      </div>
      <h6>{{post.author}}</h6>
      <p>{{post.date}}</p>
      <p>{{post.body}}</p>

      <button type="button" ng-click="deletePost(post._id)">Delete Post</button>
      <hr>

      <h3>Comments</h3>
      <form>
        <input type="text" placeholder="Name" ng-model="comment.author">
        <input type="text" placeholder="Leave a Comment" ng-model="comment.body">
        <button ng-click="addComment(post._id, comment)">Submit</button>
      </form>
      <div ng-repeat="comment in post.comments">
        <p>{{comment.author}}</p>
        <p>{{comment.body}}</p>
      </div>

    </div>
  `,
  controller : function($scope, $location, postService, blogDataService){
    $scope.post = {};
    $scope.post.comments = [];
    $scope.post = postService.get();

    $scope.deletePost = function(id){
      blogDataService.deletePost(id).then(function(response){
        $location.url('/');
      });
    };

    $scope.addComment = function(id, comment){
      blogDataService.addComment(id, comment).then(function(response){
        $scope.post.comments.push(comment);
      });
    };

    $scope.comment = {};
  },
  bindings : {
    post : "="
  }
});
