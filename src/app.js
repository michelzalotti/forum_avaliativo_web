const Fastify = require("fastify");
const path = require("path");

const routes = require("./routes");
const app = Fastify({ logger: true });

app.register(require("@fastify/view"), {
  engine: {
    handlebars: require("handlebars"),
  },
  root: path.join(__dirname, "./views"),
  layout: "./templates/layout",
  viewExt: "handlebars",
  options: {
    partials: {
      form: "./partials/form.handlebars",
    },
  },
});

app.register(require("@fastify/static"), {
  root: path.resolve("public"),
  prefix: "/",
});

app.register(routes);

module.exports = app;
