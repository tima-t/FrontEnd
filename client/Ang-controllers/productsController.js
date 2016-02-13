/**
 * Created by Tito on 2/6/2016.
 */
honeyApp.controller('productsController',['$scope','$resource', function($scope,$resource)  {
    $scope.message = 'Look! I am an about page.';
    $scope.$on('$routeChangeSuccess', function () {
        window.scrollTo(0, 600);
        var Prods= $resource('/api/productsAdm');
        Prods.query(function(results){
            $scope.products=results;
        });
        window.scrollTo(0, 600);

        $scope.products=[];
    });
}]);