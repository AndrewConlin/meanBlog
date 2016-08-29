app.factory("blogDataService", function($http){
  var getPosts = function (){
    return $http({
        method : 'GET',
        url : '/api/posts'
    });
  };

  var getPost = function (id){
    return $http({
        method : 'GET',
        url : '/api/posts/'+id
    });
  };

  var createPost = function (author, title, body, tags){
    var post = {
      author : author,
      title : title,
      body : body,
      tags : tags
    };
    return $http({
        method : 'POST',
        url : '/api/posts/',
        data : post
    });
  };

  var addComment = function (id, comment){
    return $http({
        method : 'POST',
        url : '/api/posts/'+id+'/comments',
        data : comment
    });
  };

  var deletePost = function(id){
    return $http({
        method : 'DELETE',
        url : '/api/posts/'+id
    });
  };

  return {
    getPosts : getPosts,
    getPost : getPost,
    createPost : createPost,
    deletePost : deletePost,
    addComment : addComment
  };
});
