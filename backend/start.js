const app = require('./server');

app.listen(3000, '0.0.0.0', function (err) {
  if (err) {
    app.log.error(err);
  }

  app.swagger();
});
