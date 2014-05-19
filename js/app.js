'use strict';

var myApp = angular.module('myApp', [])
myApp.directive('styledCheckbox', function($compile) {

  var _layout_default = 'square';

  return {
    restrict: 'A',
    scope: true,
    templateUrl: function(tElement, tAttributes) {
      var layout = angular.isDefined(tAttributes.layout) ? tAttributes.layout : _layout_default;

      return 'js/directives/styled-checkbox/checkbox-' + layout + '.html';
    },
    link: function(scope, elem, attrs) {
      scope.checkbox = angular.isDefined(attrs.checked) ? true : false;

      // Take the div outside of the input element.
      var button = elem.find('div').clone();
      $compile(button)(scope);

      elem.html('');
      elem.after(button);
      elem.addClass('ng-hide');

      // Watch on the checkbox scope variable.
      scope.$watch('checkbox', function(value) {
        if (value) {
          button.addClass('checked');
        }
        else {
          button.removeClass('checked');
        }
      });

      // Toggle the checkbox.
      scope.toggleCheckbox = function() {
        scope.checkbox = !scope.checkbox;
      }
    }
  }
});

