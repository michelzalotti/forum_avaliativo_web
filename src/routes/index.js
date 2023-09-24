async function routes(fastify, options) {
  fastify.get("/", async (request, reply) => {
    return reply.view("home");
  });
}

module.exports = routes;
