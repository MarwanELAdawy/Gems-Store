angular.module('app.gems').controller('GemDetailsController', ['gemsService', '$stateParams', '$state','$rootScope', gemDetailsController]);

function gemDetailsController(gemsService, $stateParams, $state, $rootScope) {
    var gemDetailsCntrl = this;

    function init() {
        gemsService.getById($stateParams.gemId, getGemDetailsSucess, getGemDetailsFailed);
    }
    init();

    function getGemDetailsSucess(res) {
        gemDetailsCntrl.gem = res.data;
        gemsService.setGemDescription(gemDetailsCntrl.gem.Description);
        if ($state.current.name === "gems.details")
            $state.go('gems.details.description');
        $rootScope.$broadcast("onDescriptionChanged");
    }

    function getGemDetailsFailed(err) {
        console.log(err);
    }
};
