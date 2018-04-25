angular.module('app.gems').controller('GemDescriptionController', ['gemsService', '$stateParams','$rootScope', gemDescriptionController]);

function gemDescriptionController(gemsService, $stateParams, $rootScope) {
    var gemDescriptionController = this;

    function init() {
        gemDescriptionController.gemDescription = gemsService.getGemDescription();
    }
    init();

    $rootScope.$on("onDescriptionChanged", onDescriptionChanged);
    function onDescriptionChanged(event, args) {
        init();
    }
};
