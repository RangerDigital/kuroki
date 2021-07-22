const app = (fastify = require('fastify')({
  logger: { level: 'warn' },
}));

app.register(require('fastify-swagger'), {
  routePrefix: '/docs',
  exposeRoute: true,

  openapi: {
    info: {
      title: 'Kuroki - API Service',
      description: '🦇 Application designed for testing deployments on Kubernetes cluster.',
      version: '0.1.0',
    },
    tags: [{ name: 'Status', description: '🥙 Gets auto-generated pod name.' }],
    servers: [
      { url: 'http://127.0.0.1:3000', description: 'Development' },
      { url: 'https://api.kuroki.bednarski.dev', description: 'Production' },
      { url: 'https://kuroki.bednarski.dev/api', description: 'Production - Proxied' },
    ],
  },
});

const status = require('./routes/status');

app.register(status, { prefix: '/status' });

module.exports = app;
