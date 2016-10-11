(function() {
    'use strict';

    angular
        .module('app')
        .controller('BreweryController', BreweryController);

    BreweryController.$inject = ['BreweryFactory'];

    /* @ngInject */
    function BreweryController(BreweryFactory) {
        var vm = this;

        vm.breweryData
        vm.getBrewery = getBrewery;
        vm.nameList = [];

        activate();

        function activate() {
            getBrewery('all');
        }

        function getBrewery(breweryname) {
            var promise = BreweryFactory.getBreweryDetails(breweryname);
            promise.then(function(data) {
                vm.breweryData = data.data.data;

                // Test

                console.log(vm.breweryData)
                console.log(vm.breweryData[0].brewery.name)


            })
        }

    }
})();
