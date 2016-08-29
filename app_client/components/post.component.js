var app = angular.module('ngBlog');

app.component("postComponent", {
  template : `
    <div id="postContent">
      <div>
        <h2>{{post.title}} <small>{{post.author}}</small></h2>
      </div>
      <p>{{post.date | date}}</p>
      <p class="postBody">{{post.body}}</p>

      <div class="tagContainer">
        <div ng-repeat="tag in post.tags">
          <span class="tag">{{tag.body}}</span>
        </div>
      </div>

      <button type="button" ng-click="deletePost(post._id)">Delete Post</button>
      <hr>

      <h3>Comments</h3>
      <form>
        <input type="text" placeholder="Name" ng-model="comment.author">
        <input type="text" placeholder="Leave a Comment" ng-model="comment.body">
        <button ng-click="addComment(post._id, comment)">Submit</button>
      </form>
      <div ng-repeat="comment in post.comments" ng-show="post.comments">
        <p>{{comment.author}}</p>
        <p class="commentBody">{{comment.body}}</p>
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
      if(!$scope.post.comments){
        $scope.post.comments = [];
      }
      blogDataService.addComment(id, comment).then(function(response){
        var commentCopy = angular.copy($scope.comment);
        $scope.post.comments.push(commentCopy);
        $scope.comment = {};
      });
    };

    $scope.comment = {};
  },
  bindings : {
    post : "="
  }
});
