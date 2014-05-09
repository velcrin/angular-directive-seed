angular.module 'directiveSeed', []
.controller 'controller', ['$scope'
  ($scope) ->
    $scope.awesome = '... wait for it ... awesome'
]
.directive 'directiveSeed', ->
  restrict: 'E'
  controller: 'controller'
  scope: {}
  templateUrl: 'directive-seed.html'