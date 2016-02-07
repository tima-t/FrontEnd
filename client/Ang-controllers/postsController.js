/**
 * Created by Tito on 2/6/2016.
 */
honeyApp.controller('postsController',['$scope','$resource', function($scope,$resource) {
    // create a message to display in our view
    $scope.comInfo = '';
    var Post= $resource('/api/posts');
    Post.query(function(results){
        $scope.posts=results;
   });
    window.scrollTo(0, 600);

    $scope.comments=[
        {name:"Nick",srcT:"post.jpg", info:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sit amet aliquam lacus. Mauris luctus tincidunt eros, in viverra arcu rhoncus molestie. I"   },
        {name:"Joe",srcT:"post.jpg", info:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sit amet aliquam lacus. Mauris luctus tincidunt eros, in viverra arcu rhoncus molestie. I"   },
        {name:"Ana",srcT:"post.jpg", info:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sit amet aliquam lacus. Mauris luctus tincidunt eros, in viverra arcu rhoncus molestie. I"   },
    ];


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