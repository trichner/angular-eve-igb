describe('EveIMG', function () {
    beforeEach(module('trichner.angular-eve-igb'));

    var service;
    beforeEach(inject(function (_EveIGB_) {
        service = _EveIGB_;
    }));

    it('should return IGB state', function () {
        expect(service.isIGB()).toEqual(false);
    });

});