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

  var createPost = function (author, title, body){
    var post = {
      author : author,
      title : title,
      body : body
    };
    return $http({
        method : 'POST',
        url : '/api/posts/',
        data : post
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
    deletePost : deletePost
  };
});
