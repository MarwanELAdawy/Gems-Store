angular.module('app.gems')
    .config(function ($stateProvider, $urlRouterProvider) {

      //For any unmatched url, redirect to /gems
      $urlRouterProvider.otherwise("/gems");

      //Now set up the states
      $stateProvider
          .state('gems', {
            url: "/gems",
            templateUrl: '../app/Gems/gems.html',
            controller: 'GemsController as gemsCntrl'
          })
          .state('gems.details', {
              url: "/:gemId",
              templateUrl: '../app/Gems/gem.details.html'
          })
          .state('gems.details.description', {
              url: "/description",
              templateUrl: '../app/Gems/Description/gems.description.html',
              controller: 'GemDescriptionController as gemDescriptionController'
          })

    });