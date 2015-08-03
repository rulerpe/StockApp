'use strict';

describe('Service: getStock', function () {

  // load the service's module
  beforeEach(module('stockappApp'));

  // instantiate service
  var getStock;
  beforeEach(inject(function (_getStock_) {
    getStock = _getStock_;
  }));

  it('should do something', function () {
    expect(!!getStock).toBe(true);
  });

});
