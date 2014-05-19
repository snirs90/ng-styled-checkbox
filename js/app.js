'use strict';

var myApp = angular.module('myApp', [])
myApp.directive('styledCheckbox', function($compile) {
  return {
    restrict: 'A',
    scope: {},
    templateUrl: function(tElement, tAttributes) {
      return 'js/directives/checkbox-' + tAttributes.layout + '.html';
    },
    link: function(scope, elem, attrs) {
      var button = $compile(elem.find('div').clone())(scope);
      elem.html('');
      elem.after(button);
      elem.addClass('ng-hide');

      var checked = false;

      scope.toggleCheckbox = function() {
        if (checked === false) {
          button.addClass('checked');
          checked = true;
          elem.attr('checked', true);
        }
        else {
          button.removeClass('checked');
          checked = false;
          elem.attr('checked', false);
        }
      }
    }
  }
});
