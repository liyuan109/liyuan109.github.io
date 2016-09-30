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
    }
  ];
});
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
        $rootScope.info = 'BIOVIA Corp: Software Test Engineer 2015 - present'
      }
      else if(tabName == 'Summary'){
        $rootScope.tabName = 'Summary'
        $rootScope.info = 'Currently write codes to automate tests ' +
        'for web applications by using Geb and Spock' + ' Also, used Http builder'
        + ' a very handy Restful client to test API of web applications ' +
        'In addition, all of these are running in continuous integration' +
        ' environment in order to automate the entire process and to achieve regression tests. '+
        'Familiar with agile software development and alway very enthusiastic of ' +
        ' solving problems'
      }
      else if(tabName == 'GitHub'){
        $rootScope.tabName = 'GitHub'
        $rootScope.info = 'https://github.com/liyuan109'

      }
    }
}]);
