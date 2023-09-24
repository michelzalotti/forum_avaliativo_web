const app = require("./src/app");
const port = 3000;

app.listen({ port }, function (err, address) {
  if (err) {
    app.log(err);
    process.exit(1);
  }
});
