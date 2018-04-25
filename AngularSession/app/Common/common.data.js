angular.module('app.common').factory('commonData', function ($http) {
    var commonData = {
        get: get,
        post: post
    };
    return commonData;

    function get(url, params, headers) {
        return $http.get(url,
            {
                params: params,
                headers: headers
            });
    }
    function post(url, data, headers) {
        return $http.post(url, data, { headers: headers });
    }
});