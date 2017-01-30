const _ = require('lodash');
const Promise = require('bluebird');

function monkeyPatchRouteMethods(app) {
  [ 'get', 'put', 'post', 'delete', 'patch' ].forEach(function(
    routeMethodName
  ) {
    const originalRouteMethod = app[routeMethodName];

    app[routeMethodName] = function() {
      const args = _.toArray(arguments);
      const originalRouteHandler = _.last(args);

      if (isGenerator(originalRouteHandler)) {
        const routeHandler = Promise.coroutine(originalRouteHandler);

        // Overwrite the route handler.
        args[args.length - 1] = function(req, res, next) {
          routeHandler(req, res, next).catch(next);
        };
      }

      return originalRouteMethod.apply(this, args);
    };
  });
}

function isGenerator(fn) {
  return fn && fn.constructor && fn.constructor.name === 'GeneratorFunction';
}

module.exports = monkeyPatchRouteMethods;

