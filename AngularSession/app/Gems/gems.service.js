angular.module('app.common').factory('gemsService', function (commonData) {
    var gemDescription;

    var gemsService = {
        getAll: getAll,
        getById: getById,
        setGemDescription: setGemDescription,
        getGemDescription: getGemDescription
    };
    return gemsService;

    function getAll(successCallback, errCallBack) {
        commonData.get('/api/Gems').then(successCallback, errCallBack);
    }
    function getById(id, successCallback, errCallBack) {
        commonData.get('/api/Gems', { id: id }).then(successCallback, errCallBack);
    }
    function getGemDescription() {
        return this.gemDescription;
    }
    function setGemDescription(gemDescription) {
        this.gemDescription = gemDescription;
    }
});