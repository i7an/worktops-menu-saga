var reducer = require('../../src/reducers/surfaceColours');

describe('surfaceColours', () => {

  it('should not change the passed state', (done) => {

    const state = Object.freeze({});
    reducer(state, {type: 'INVALID'});

    done();
  });
});
