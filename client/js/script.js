// script.js

    // create the module and name it scotchApp
    var honeyApp = angular.module('honeyApp', ['ngRoute']);

    // create the controller and inject Angular's $scope
    honeyApp.controller('mainController', function($scope) {

        // create a message to display in our view
        $scope.message = 'Everyone come and see how good I look!';
    });
	
	  honeyApp.config(function($routeProvider) {
        $routeProvider
            // route for the home page
            .when('/', {
                templateUrl : 'client/Ang-templates/home.html',
                controller  : 'homeController'
            })

            // route for the about page
            .when('/products', {
                templateUrl : 'client/Ang-templates/products.html',
                controller  : 'productsController'
            })
            // route for the contact page
            .when('/posts', {
                templateUrl : 'client/Ang-templates/post.html',
                controller  : 'postsController'
            }).when('/contacts', {
                templateUrl : 'client/Ang-templates/contacts.html',
                controller  : 'contactController'
            }).when('/login', {
                templateUrl : 'client/Ang-templates/login.html',
                controller  : 'loginController'
            }).when('/register', {
                templateUrl : 'client/Ang-templates/register.html',
                controller  : 'registerController'
            }).when('/skin', {
                templateUrl : 'client/Ang-templates/index.html',
                controller  : 'skinController'
            });
    });
	
	honeyApp.controller('homeController', function($scope) {
        // create a message to display in our view
        $scope.message = 'Everyone come and see how good I look!';

        var imgSlider=function() {
            function swap(image) {
                document.getElementById("main").src = image.href;
            }


            //1. set ul width
//2. image when click prev/next button
            var ul;
            var liItems;
            var imageNumber;
            var imageWidth;
            var prev, next;
            var currentPostion = 0;
            var currentImage = 0;


            ul = document.getElementById('image_slider');
            liItems = ul.children;
            imageNumber = liItems.length;
            imageWidth = liItems[0].children[0].clientWidth;
            ul.style.width = parseInt(imageWidth * imageNumber) + 'px';
            prev = document.getElementById("prev");
            next = document.getElementById("next");
            generatePager(imageNumber);
            //.onclike = slide(-1) will be fired when onload;
            /*
             prev.onclick = function(){slide(-1);};
             next.onclick = function(){slide(1);};*/
            prev.onclick = function () {
                onClickPrev();
            };
            next.onclick = function () {
                onClickNext();
            };


            function animate(opts) {
                var start = new Date;
                var id = setInterval(function () {
                    var timePassed = new Date - start;
                    var progress = timePassed / opts.duration;
                    if (progress > 1) {
                        progress = 1;
                    }
                    var delta = opts.delta(progress);
                    opts.step(delta);
                    if (progress == 1) {
                        clearInterval(id);
                        opts.callback();
                    }
                }, opts.delay || 17);
                //return id;
            }

            function slideTo(imageToGo) {
                var direction;
                var numOfImageToGo = Math.abs(imageToGo - currentImage);
                // slide toward left

                direction = currentImage > imageToGo ? 1 : -1;
                currentPostion = -1 * currentImage * imageWidth;
                var opts = {
                    duration: 400,
                    delta: function (p) {
                        return p;
                    },
                    step: function (delta) {
                        ul.style.left = parseInt(currentPostion + direction * delta * imageWidth * numOfImageToGo) + 'px';
                    },
                    callback: function () {
                        currentImage = imageToGo;
                    }
                };
                animate(opts);
            }

            function onClickPrev() {
                if (currentImage == 0) {
                    slideTo(imageNumber - 1);
                }
                else {
                    slideTo(currentImage - 1);
                }
            }

            function onClickNext() {
                if (currentImage == imageNumber - 1) {
                    slideTo(0);
                }
                else {
                    slideTo(currentImage + 1);
                }
            }

            function generatePager(imageNumber) {
                var pageNumber;
                var pagerDiv = document.getElementById('pager');
                for (i = 0; i < imageNumber; i++) {
                    var li = document.createElement('li');
                    pageNumber = document.createTextNode(parseInt(i + 1));
                    li.appendChild(pageNumber);
                    pagerDiv.appendChild(li);
                    // add event inside a loop, closure issue.
                    li.onclick = function (i) {
                        return function () {
                            slideTo(i);
                        }
                    }(i);
                }
                var computedStyle = document.defaultView.getComputedStyle(li, null);
                //border width 1px; offsetWidth = 22
                var liWidth = parseInt(li.offsetWidth);
                var liMargin = parseInt(computedStyle.margin.replace('px', ""));
                pagerDiv.style.width = parseInt((liWidth + liMargin * 2) * imageNumber) + 'px';
            }


        };
        $scope.$on('$routeChangeSuccess', imgSlider);
       $scope.$watch('$viewContentLoaded', imgSlider);
      $scope.$on('$stateChangeSuccess', imgSlider);
       // imgSlider();




    });

    honeyApp.controller('productsController', function($scope) {
        $scope.message = 'Look! I am an about page.';
        $scope.$on('$routeChangeSuccess', function () {
            window.scrollTo(0, 600);
        });
    });

honeyApp.controller('postsController', function($scope) {
    // create a message to display in our view
    $scope.message = 'Everyone come and see how good I look!';
    window.scrollTo(0, 600);
});

honeyApp.controller('contactController', function($scope) {
    $scope.message = 'Look! I am an about page.';
    $scope.$on('$routeChangeSuccess', function () {

        window.scrollTo(0, 600);
    });
});

honeyApp.controller('loginController', function($scope) {
    // create a message to display in our view
    $scope.message = 'Everyone come and see how good I look!';
    window.scrollTo(0, 600);
});

honeyApp.controller('registerController', function($scope) {
    $scope.message = 'Look! I am an about page.';
    $scope.$on('$routeChangeSuccess', function () {
        window.scrollTo(0, 600);
    });
});
honeyApp.controller('skinController', function($scope) {
    // create a message to display in our view
    $scope.message = 'Everyone come and see how good I look!';
    window.scrollTo(0, 600);
});




