(function() {
    'use strict';

    angular
        .module('app')
        .factory('BreweryFactory', BreweryFactory);

    BreweryFactory.$inject = ['$http'];

    /* @ngInject */
    function BreweryFactory($http) {
        var service = {
            getBreweryDetails: getBreweryDetails
        };
        return service;

        ////////////////

        // Pull from API

        function getBreweryDetails(brew) {

            return $http({
                method: 'GET',
                url: 'http://api.brewerydb.com/v2/locations',
                params: {
                    key: '847a772f9cf659a286bfa3db5c8f38c3',
                    locality: 'San Diego',
                    region: 'california',
                    countryIsoCode: 'US',
                    p: 1


                },

            }).then(function(response) {
                return response;
            });

        }
    }
})();
