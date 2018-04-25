angular.module('app.gems').controller('GemsController', ['gemsService', '$state', '$stateParams','$rootScope', gemsController]);

function gemsController(gemsService, $state, $stateParams, $rootScope) {
    var gemsCntrl = this;


    function init() {
        gemsService.getAll(getGemDetailsSucess, getGemDetailsFailed);
    }
    init();

   
    function getGemDetailsSucess(res) {
        gemsCntrl.gems = res.data;
        console.log($state);
        if ($state.current.name === "gems")
            $state.go('gems.details', { gemId: 1 });
    }

    function getGemDetailsFailed(err) {
        console.log(err);
    }

};
