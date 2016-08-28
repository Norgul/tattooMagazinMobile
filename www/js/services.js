angular.module('app.services', [])

    .factory('Injection', ['ResourceFactory',
        function (ResourceFactory) {
            return {
                ResourceFactory: ResourceFactory
            }
        }])


    .factory('ResourceFactory', function () {
        return {
            getResource: function ($http, SERVER, route) {
                return $http({
                    method: 'GET',
                    url: SERVER + route
                })
            },
            postResource: function ($http, SERVER, route, parameters, data) {
                return $http({
                    method: 'POST',
                    url: SERVER + route,
                    data: data,
                    params: parameters
                })
            }
        }
    })

