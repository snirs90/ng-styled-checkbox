'use strict';

var myApp = angular.module('myApp', [])
myApp.directive('styledCheckbox', function($compile) {

  var _layout_default = 'square';
  var _color_default = 'blue';

  return {
    restrict: 'A',
    scope: true,
    templateUrl: function(tElement, tAttributes) {
      var layout = angular.isDefined(tAttributes.layout) ? tAttributes.layout : _layout_default;

      return 'js/directives/styled-checkbox/checkbox-' + layout + '.html';
    },

    link: function(scope, elem, attrs) {
      scope.color = angular.isDefined(attrs.color) ? attrs.color : _color_default;

      scope.master = angular.isDefined(attrs.checked) ? true : false;

      var button = elem.find('div').clone();
      $compile(button)(scope);

      elem.html('');
      elem.after(button);
      elem.addClass('ng-hide');

      scope.$watch('master', function(value) {
        if (value) {
          button.addClass('checked');
        }
        else {
          button.removeClass('checked');
        }
      });

      scope.toggleCheckbox = function() {
        scope.master = !scope.master;
      }
    }
  }
});

