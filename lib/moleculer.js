'use strict';

const assert = require('assert');
const {
  ServiceBroker
} = require('moleculer');

module.exports = app => {
  app.addSingleton('moleculer', createOneClient);
};

async function createOneClient(config, app) {
  const {
    host,
    port,
    username,
    password,
    namespace,
    nodeID
  } = config;

  assert(host && port && username && password);

  app.coreLogger.info('[egg-moleculer] connecting %s@%s:%s',
    username, host, port);
  const client = new ServiceBroker({
    transporter: `amqp://${username}:${password}@${host}:${port}`,
    namespace,
    nodeID
  })

  app.beforeStart(async () => {
    app.coreLogger.info('[egg-moleculer] init instance success');
  });

  client.start();

  return client;
}