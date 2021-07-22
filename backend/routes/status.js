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
            },
          },
        },
      },
    },
    async (req, res) => {
      return res.send({ name: name });
    }
  );
}

module.exports = routes;
