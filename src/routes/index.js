const products = [
  { id: 1, name: "Playstation 5", price: 3759.0 },
  { id: 2, name: "Nintendo Switch Lite", price: 1373.0 },
  { id: 3, name: "Xbox Series S", price: 2299.0 },
  { id: 4, name: "Xbox Series X", price: 6438.33 },
];

async function routes(fastify, options) {
  fastify.get("/", async (request, reply) => {
    return reply.view("home");
  });

  fastify.get("/products", async (request, reply) => {
    return products;
  });

  fastify.get("/products/:id", async (request, reply) => {
    const { id } = request.params;
    const product = products.find((p) => p.id === parseInt(id));
    return product;
  });

  fastify.post("/products", async (request, reply) => {
    const { id, name, price } = request.body;
    products.push({ id, name, price });
  });
}

module.exports = routes;
