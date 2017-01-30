const User = require('../users/model');

module.exports = function(app) {
  app.get('/users', function*(req, res) {
    const users = yield User.query();

    res.send(users);
  });
};

