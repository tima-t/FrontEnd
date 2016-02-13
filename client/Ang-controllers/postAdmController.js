/**
 * Created by Tito on 2/13/2016.
 */
honeyApp.controller('postAdmController',['$scope','$resource', function($scope,$resource) {
    // create a message to display in our view
    $scope.comInfo = '';
    var PostAdm= $resource('/api/postsAdm');
    var images=["post.jpg","post1.jpg","post2.jpg","post3.jpg"];
    $scope.nameAdm=localStorage.getItem("name");



    $scope.postsA=[];

    $scope.viewA= function(){
        if(localStorage.getItem("role") == "admin") {
            PostAdm.query(function (results) {
                $scope.postsA = results;
            });
            window.scrollTo(0, 600);
        }

    }


    $scope.createPostA= function(){

        if(localStorage.getItem("role") == "admin") {

            var post = new PostAdm();
            post.heading = $scope.postHeadingA;
            post.img = images[parseInt($scope.postImgA)];
            post.info = $scope.postInfoA;
            post.date=Date.now();
            post.$save(function (result) {
                $scope.postsA.push(result);
            });

            //$scope.postsA.push({heading: $scope.postHeadingA, img: $scope.postImgA, info: $scope.postInfoA});
            $scope.postInfoA = "";
            $scope.postHeadingA = "";
            $scope.postImgA = "";
        }

    }
}]);