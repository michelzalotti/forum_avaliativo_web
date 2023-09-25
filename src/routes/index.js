async function routes(fastify, options) {
  fastify.get("/", async (request, reply) => {
    return reply.view("home");
  });

  fastify.get("/products", async (request, reply) => {
    const products = [
      { id: 1, name: "Playstation 5", price: 3759.0 },
      { id: 2, name: "Nintendo Switch Lite", price: 1373.0 },
      { id: 3, name: "Xbox Series S", price: 2299.0 },
      { id: 4, name: "Xbox Series X", price: 6438.33 },
    ];

    return products;
  });
}

module.exports = routes;
