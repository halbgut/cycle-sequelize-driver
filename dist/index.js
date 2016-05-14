'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.define = undefined;

var _toArray2 = require('babel-runtime/helpers/toArray');

var _toArray3 = _interopRequireDefault(_toArray2);

exports.makeSequelizeDriver = makeSequelizeDriver;

var _rx = require('rx');

var _immutable = require('immutable');

var _define = require('./lib/define');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.define = _define.createDefinitions;
function makeSequelizeDriver(sequelize) {
  var state = (0, _immutable.Map)({
    sequelize: sequelize,
    model: (0, _immutable.Map)()
  });
  return function (input$) {
    return _rx.Observable.create(function (observer) {
      input$.subscribe(function (_ref) {
        var _ref2 = (0, _toArray3.default)(_ref);

        var key = _ref2[0];

        var args = _ref2.slice(1);

        switch (key) {
          case _define.defineKey:
            (0, _define.executeDefinitions)(sequelize, args).subscribe(function (models) {
              state = state.merge(models);
            }, function (err) {
              return observer.onError(err);
            }, function () {
              observer.onNext(state);
            });
        }
      });
    });
  };
}