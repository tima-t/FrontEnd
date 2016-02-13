honeyApp.controller('newsController',['$scope','$resource', function($scope,$resource) {
    // create a message to display in our view
    $scope.message = 'Everyone come and see how good I look!';
    window.scrollTo(0, 600);

    $scope.allPosts=[];
    $scope.indexT=0;
    var PostMain= $resource('/api/postsAdm');
    PostMain.query(function(results){
        $scope.allPosts=results;
        $scope.name=$scope.allPosts[0].name;
        $scope.src=$scope.allPosts[0].src;
        $scope.info=$scope.allPosts[0].info;
    });




          //  $scope.name=$scope.allPosts[$scope.indexT].name;
         //   $scope.src=$scope.allPosts[$scope.indexT].src;
         //   $scope.info=$scope.allPosts[$scope.indexT].info;


}]);/**
 * Created by Tito on 2/6/2016.
 */
