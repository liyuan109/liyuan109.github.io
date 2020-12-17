var blogApp = angular.module('blogApp', []);
blogApp.controller('TabbleListController',
function TabbleListController($scope) {
  $scope.tabLists = [
    {
      name: 'Personal Info',
    },
    {
      name: 'Occupation',
    },
    {
      name: 'Summary',
    },
    {
      name: 'GitHub',
    },
    {
      name: 'Current Project',
    },
    {
      name: 'SSO'
    }
  ];
});
var digitalData = {
  test: "value",
  cart: {
    cartID: "123",
    price: {
      cartTotal: "18"
    }
  }
}
blogApp.controller('Simple', ['$rootScope', function ($rootScope) {
    $rootScope.tabName = 'Personal Info'
    $rootScope.info = 'My name is Yuan Li.' + ' People Call me Nate.' +
    ' I graduated from UCSD in 2015.' + ' I am currently working at BIOVIA Corp.'

    $rootScope.showTab= function (tabName) {
       if(tabName == 'Personal Info'){
        $rootScope.tabName = 'Personal Info'
        $rootScope.info = 'My name is Yuan Li.' + ' People Call me Nate.' +
        ' I graduated from UCSD in 2015.' + ' I am currently working at BIOVIA Corp.'
      }
      else if(tabName == 'Occupation'){
        $rootScope.tabName = 'Occupation'
        $rootScope.info = 'BIOVIA Corp: Software Test Engineer 2015 - 2017' +
                          'BIOVIA Corp: Software Engineer 2017 - present.'
      }
      else if(tabName == 'Summary'){
        $rootScope.tabName = 'Summary'
        $rootScope.info = 'Currently work on security team of BIOVIA'/*'Currently write code to automate tests ' +
        'for web applications by using Geb and Spock' + ' Also, used Http builder'
        + ' a very handy Restful client to test API of web applications ' +
        'In addition, all of these are running in continuous integration' +
        ' environment in order to automate the entire process and to achieve regression tests. '+
        'Familiar with agile software development and alway very enthusiastic of ' +
        ' solving problems'*/
      }
      else if(tabName == 'GitHub'){
        $rootScope.tabName = 'GitHub'
        $rootScope.info = 'https://github.com/liyuan109'
      }
      else if(tabName == 'Current Project'){
        $rootScope.tabName = 'Current Project'
        $rootScope.info = 'https://liyuan109.github.io/angularReviewApp'
      }
      else if(tabName == 'SSO'){
        $rootScope.tabName = 'SSO'
        $rootScope.info = 'SSO handshake seems to be a tricky problem. I usually' +
                          'For java implementation, there are trust store and key store' +
                          'These two things are both derived from java keystore class' +
                          'Usually client needs to trust server and server has to provide its' +
                          'public key to client and has to be stored in the trust store of client' +
                          'If mutual authentication needs to be set up, then the server has to trust' +
                          'the client as well'
      }
    }
}]);
