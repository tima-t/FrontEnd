/**
 * Created by Tito on 2/13/2016.
 */
honeyApp.controller('productsAdmController',['$scope','$resource', function($scope,$resource) {
    // create a message to display in our view
    var ProductAdm= $resource('/api/productsAdm');
    var images=["prod.jpg","prod1.jpg","prod2.jpg","prod3.jpg"];
    $scope.nameAdm=localStorage.getItem("name");



    $scope.products=[];

    $scope.viewProducts= function(){
        if(localStorage.getItem("role") == "admin") {
            ProductAdm.query(function (results) {
                $scope.products = results;
            });
            window.scrollTo(0, 600);
        }

    }


    $scope.uploadProduct= function(){

        if(localStorage.getItem("role") == "admin") {

            var product = new ProductAdm();
            product.heading = $scope.heading;
            product.img = images[parseInt($scope.pic)];
            product.info = $scope.info;
            product.price= parseFloat($scope.price);
            product.$save(function (result) {
                $scope.products.push(result);
            });

            //$scope.postsA.push({heading: $scope.postHeadingA, img: $scope.postImgA, info: $scope.postInfoA});
            $scope.heading= "";
            $scope.img = "";
            $scope.info = "";
            $scope.price="";
        }

    }
}]);