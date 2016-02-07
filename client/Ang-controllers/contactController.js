/**
 * Created by Tito on 2/6/2016.
 */
honeyApp.controller('contactController',['$scope','$resource', function($scope,$resource) {
    $scope.message = 'Look! I am an about page.';
    $scope.$on('$routeChangeSuccess', function () {

        window.scrollTo(0, 600);
    });
    $scope.contacts=[
        {name:"phone",srcT:"post.jpg", info:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sit amet aliquam lacus. Mauris luctus tincidunt eros, in viverra arcu rhoncus molestie. I"   },
        {name:"email",srcT:"post.jpg", info:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sit amet aliquam lacus. Mauris luctus tincidunt eros, in viverra arcu rhoncus molestie. I"   },
        {name:"address",srcT:"post.jpg", info:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sit amet aliquam lacus. Mauris luctus tincidunt eros, in viverra arcu rhoncus molestie. I"   },
    ];
}]);