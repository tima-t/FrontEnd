/**
 * Created by Tito on 2/6/2016.
 */

honeyApp.controller('loginController',['$scope','$resource', function($scope,$resource) {
    // create a message to display in our view
    $scope.message = 'Everyone come and see how good I look!';
    window.scrollTo(0, 600);

    var User= $resource('/api/logUser');





    $scope.logUser=function() {




        //var salt="timat" for password security
        var user = new User();
        user.name = $scope.logName;
        user.pass = CryptoJS.MD5($scope.logPass).toString();


        user.$save(function (result) {
           console.log(result);
            if(result.role){

                localStorage.setItem('role',result.role);
                localStorage.setItem('name',result.name);
                if(localStorage.getItem("role") == "user"){
                    window.location.href = "./";
                }
                if(localStorage.getItem("role") == "admin"){
                    window.location.href = "./#/postAdm";
                }

            }
            else{
                console.log("problem");
                $scope.logName="mb wrong name or pass";
                $scope.logPass=""
            }

        });
    }

}]);