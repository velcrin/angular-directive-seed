(function(module) {
try {
  module = angular.module('directiveSeed');
} catch (e) {
  module = angular.module('directiveSeed', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('directive-seed.tpl.html',
    '<div><p>Angular directives are {{ awesome }}</p></div>');
}]);
})();
