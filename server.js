const app = require("./src/app");
const port = 3000;
const host = "localhost";

app.listen({ host, port }, function (err, address) {
  if (err) {
    app.log(err);
    process.exit(1);
  }
});
