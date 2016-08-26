app.factory("postService", function(){
  var post = {};

  function set(data){
    post = data;
  }

  function get(){
    return post;
  }

  return {
    set : set,
    get: get
  };
});
