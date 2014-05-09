chai.Should();

describe('DirectiveSeed', function () {
    var $compile, $controller, $rootScope;

    beforeEach(module('directiveSeed'));

    beforeEach(inject(function (_$compile_, _$controller_, _$rootScope_) {
        $compile = _$compile_;
        $controller = _$controller_;
        $rootScope = _$rootScope_;
    }));

    describe('controller', function () {
        it('should an awesome value to the scope', function () {
            var scope = {};

            $controller('controller', { $scope: scope });

            scope.should.deep.equal({'awesome' : '... wait for it ... awesome'});
        });
    });

    describe('directive', function () {
        it('should contains welcome message', function () {
            var compiled = $compile('<directive-seed></directive-seed>')($rootScope);
            $rootScope.$apply();

            compiled.text().trim().should.equal('Angular directives are ... wait for it ... awesome');
        });
    });

});
