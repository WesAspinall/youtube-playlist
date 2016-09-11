const showSpinner = function() {

    return {
        restrict: 'EA',

        scope: {
            txt: '=' // two way binding to ctrl
        },

        template: '<input type="text" ng-model="txt"/>'+
        '<button ng-click="rid()">click to save</button>',

        link: function(scope, element, attrs) {
            scope.rid = function () {
              element.remove();
            }
        }
    }
}

showSpinner.$inject = [];

export default showSpinner;