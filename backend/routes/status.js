const slugGenerator = require('random-word-slugs');
const name = slugGenerator.generateSlug();

async function routes(router) {
  router.get(
    '/',
    {
      schema: {
        summary: 'Get the random generated slug.',
        tags: ['Status'],

        response: {
          200: {
            type: 'object',
            properties: {
              name: { type: 'string' },
              time: { type: 'string' },
              version: { type: 'string' },
            },
          },
        },
      },
    },
    async (req, res) => {
      const time = Date.now();
      const version = '0.1';

      return res.send({ name: name, time: time, version: version });
    }
  );
}

module.exports = routes;
