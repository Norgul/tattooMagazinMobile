angular.module('app.controllers', [])


    .constant('SERVER', 'http://tattoomagazin.de/api/v1/')
    .constant('thumbSERVER', 'http://tattoomagazin.de/upload/')
 /*
     .constant('SERVER', 'http://tattoo.dev/api/v1/')
     .constant('thumbSERVER', 'http://tattoo.dev/upload/')
*/
    .controller('newsCtrl', ['$state', 'Injection', '$scope', '$http', 'SERVER', 'thumbSERVER',
        function ($state, Injection, $scope, $http, SERVER, thumbSERVER) {

            Injection.ResourceFactory.getResource($http, SERVER, 'news')
                .then(function (response) {
                    $scope.news = response.data.news;
                }, function (error) {
                });

            $scope.thumbnailPath = thumbSERVER;
        }])

    .controller('NewsShowCtrl', ['$state', 'Injection', '$scope', '$http', 'SERVER', 'thumbSERVER', '$stateParams',
        function ($state, Injection, $scope, $http, SERVER, thumbSERVER, $stateParams) {

            Injection.ResourceFactory.getResource($http, SERVER, 'news/' + $stateParams.id)
                .then(function (response) {
                    $scope.news = response.data.news;
                }, function (error) {
                });

            $scope.thumbnailPath = thumbSERVER;

        }])

    .controller('KleinanzeigenCtrl', ['$state', 'Injection', '$scope', '$http', 'SERVER', 'thumbSERVER',
        function ($state, Injection, $scope, $http, SERVER, thumbSERVER) {

            Injection.ResourceFactory.getResource($http, SERVER, 'classifieds')
                .then(function (response) {
                    $scope.classifieds = response.data.classifieds;
                }, function (error) {
                });

            $scope.thumbnailPath = thumbSERVER;
        }])

    .controller('KleinanzeigenShowCtrl', ['$state', 'Injection', '$scope', '$http', 'SERVER', 'thumbSERVER', '$stateParams',
        function ($state, Injection, $scope, $http, SERVER, thumbSERVER, $stateParams) {

            Injection.ResourceFactory.getResource($http, SERVER, 'classifieds/' + $stateParams.id)
                .then(function (response) {
                    $scope.classified = response.data.classified;
                    console.log($scope.classified);
                }, function (error) {
                });

            $scope.thumbnailPath = thumbSERVER;

        }])

    .controller('TattooEventsCtrl', ['$state', 'Injection', '$scope', '$http', 'SERVER', 'thumbSERVER',
        function ($state, Injection, $scope, $http, SERVER, thumbSERVER) {

            Injection.ResourceFactory.getResource($http, SERVER, 'events')
                .then(function (response) {
                    $scope.events = response.data.events;
                }, function (error) {
                });

            $scope.thumbnailPath = thumbSERVER;
        }])

    .controller('EventsShowCtrl', ['$state', 'Injection', '$scope', '$http', 'SERVER', 'thumbSERVER', '$stateParams',
        function ($state, Injection, $scope, $http, SERVER, thumbSERVER, $stateParams) {

            Injection.ResourceFactory.getResource($http, SERVER, 'events/' + $stateParams.id)
                .then(function (response) {
                    $scope.event = response.data.event;
                }, function (error) {
                });

            $scope.thumbnailPath = thumbSERVER;

        }])

    .controller('TattooGalerieCtrl', ['$state', 'Injection', '$scope', '$http', 'SERVER', 'thumbSERVER', '$ionicSlideBoxDelegate',
        function ($state, Injection, $scope, $http, SERVER, thumbSERVER, $ionicSlideBoxDelegate) {

            Injection.ResourceFactory.getResource($http, SERVER, 'gallery')
                .then(function (response) {
                    $scope.gallery = response.data.gallery;
                }, function (error) {
                });
            $scope.thumbnailPath = thumbSERVER;
        }])

    .controller('GalerieShowCtrl', ['$state', 'Injection', '$scope', '$http', 'SERVER', 'thumbSERVER', '$stateParams',
        function ($state, Injection, $scope, $http, SERVER, thumbSERVER, $stateParams) {

            $scope.loaded = false;
            Injection.ResourceFactory.getResource($http, SERVER, 'gallery/' + $stateParams.id)
                .then(function (response) {
                    $scope.galerie = response.data.gallery;
                    $scope.loaded = true;
                }, function (error) {
                });

            $scope.thumbnailPath = thumbSERVER;


        }])

    .controller('LexikonCtrl', ['$state', 'Injection', '$scope', '$http', 'SERVER', 'thumbSERVER',
        function ($state, Injection, $scope, $http, SERVER, thumbSERVER) {

            Injection.ResourceFactory.getResource($http, SERVER, 'lexicon')
                .then(function (response) {
                    $scope.lexicon = response.data.lexicon;
                }, function (error) {
                });

            $scope.thumbnailPath = thumbSERVER;
        }])

    .controller('LexikonShowCtrl', ['$state', 'Injection', '$scope', '$http', 'SERVER', 'thumbSERVER', '$stateParams',
        function ($state, Injection, $scope, $http, SERVER, thumbSERVER, $stateParams) {

            Injection.ResourceFactory.getResource($http, SERVER, 'lexicon/' + $stateParams.id)
                .then(function (response) {
                    $scope.lexicon = response.data.lexicon;
                }, function (error) {
                });

            $scope.thumbnailPath = thumbSERVER;

        }])

    .controller('kontaktCtrl', ['$state', 'Injection', '$scope', '$http', 'SERVER', 'thumbSERVER',
        function ($state, Injection, $scope, $http, SERVER, thumbSERVER) {

            $scope.comment = {};
            $scope.sendCommentToAPI = function () {
                Injection.ResourceFactory.postResource($http, SERVER, 'contact', $scope.comment)
                    .then(function (resource) {
                        $state.go('menu.news')
                    }, function (error) {
                    })
            };

        }])

    .controller('datenschutzCtrl', ['$scope', '$stateParams', // TIP: Access Route Parameters for your page via $stateParams.parameterName
        function ($scope, $stateParams) {


        }])

    .controller('impressumCtrl', ['$scope', '$stateParams', // TIP: Access Route Parameters for your page via $stateParams.parameterName
        function ($scope, $stateParams) {


        }])
 