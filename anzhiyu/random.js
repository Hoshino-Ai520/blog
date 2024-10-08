var posts=["2024/10/08/Online Engineering Learning 1/","2024/10/08/Overview of online learning/","2024/10/08/hello-world/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };