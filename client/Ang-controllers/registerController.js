honeyApp.controller('registerController',['$scope','$resource', function($scope,$resource)  {
    $scope.message = 'Look! I am an about page.';
    $scope.$on('$routeChangeSuccess', function () {
        window.scrollTo(0, 600);
        var User= $resource('/api/users');





        $scope.registerUser=function(){



            var  role="user";
            //var salt="timat" for password security
            var user= new User();
            user.name =$scope.regName;
            user.pass=CryptoJS.MD5($scope.regPass).toString();
            user.email=$scope.regEmail;
            user.role=role;

            user.$save( function(result){

                window.location.href="./#/postAdm";
            });


        }
    });
}]);/**
 * Created by Tito on 2/6/2016.
 */
