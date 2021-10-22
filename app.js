'use strict';

const moleculer = require('./lib/moleculer');

module.exports = app => {
  if (app.config.moleculer.app) moleculer(app);
};
