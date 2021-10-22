'use strict';

const moleculer = require('./lib/moleculer');

module.exports = agent => {
  if (agent.config.moleculer.agent) moleculer(agent);
};
