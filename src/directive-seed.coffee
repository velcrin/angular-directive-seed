try
  module = angular.module 'directiveSeed'
catch e
  module = angular.module 'directiveSeed', []

module.controller 'controller', ['$scope'
  ($scope) ->
    $scope.awesome = '... wait for it ... awesome'
]
.directive 'directiveSeed', ->
  restrict: 'E'
  controller: 'controller'
  scope: {}
  templateUrl: 'directive-seed.tpl.html'