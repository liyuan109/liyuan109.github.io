angular.
  module('blogApp').
  component('tabbleList', {
    template:
        '<ul>' +
          '<li ng-repeat="tabs in $ctrl.tabbleList">' +
            '<span>{{tabbleList.name}}</span>' +
            '<p>{{tabbleList.snippet}}</p>' +
          '</li>' +
        '</ul>',
    controller: function TabbleListController() {
      this.tabbleLists = [
        {
          name: 'Personal',
          snippet: 'Fast just got faster with Nexus S.'
        }, {
          name: 'Interests',
          snippet: 'The Next, Next Generation tablet.'
        }, {
          name: 'Projects',
          snippet: 'The Next, Next Generation tablet.'
        }
      ];
    }
  });
