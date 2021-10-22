'use strict';

const mock = require('egg-mock');

describe('test/moleculer.test.js', () => {
  let app;
  before(() => {
    app = mock.app({
      baseDir: 'apps/moleculer-test',
    });
    return app.ready();
  });

  after(() => app.close());
  afterEach(mock.restore);

  it('should GET /', () => {
    return app.httpRequest()
      .get('/')
      .expect('hi, moleculer')
      .expect(200);
  });
});
