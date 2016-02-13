/**
 * Created by Tito on 2/6/2016.
 */
honeyApp.controller('postsController',['$scope','$resource', function($scope,$resource) {
    // create a message to display in our view
    $scope.comInfo = '';
    var Post= $resource('/api/posts');
    Post.query(function(results){
        $scope.comments=results;
   });
    window.scrollTo(0, 600);
    var PostMain= $resource('/api/postsAdm');
        PostMain.query(function(results){
            $scope.posts=results;
       });

    $scope.comments=[];
    $scope.posts=[];


    $scope.createPost= function(){
        var post =new Post();
        post.name = $scope.commentUser;
        post.src= "post.jpg";
        post.info=$scope.comInfo;
        post.$save( function(result){
            $scope.comments.push(result);
        });

        /*$scope.comments.push({name: $scope.commentUser,srcT:"post.jpg",info:$scope.comInfo});
        $scope.commentUser="";
        $scope.commentEmail="";
        $scope.comInfo=""; */

    }
}]);