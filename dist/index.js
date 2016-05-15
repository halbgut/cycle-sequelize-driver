"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}function makeSequelizeDriver(e){var r=(0,_immutable.Map)({sequelize:e,model:(0,_immutable.Map)()});return function(t){return _rx.Observable.create(function(i){t.subscribe(function(t){var n=(0,_toArray3["default"])(t),a=n[0],u=n.slice(1);switch(a){case _define.defineKey:(0,_define.executeDefinitions)(e,u).subscribe(function(e){r=r.merge(e)},function(e){return i.onError(e)},function(){i.onNext(r)});break;case _create.createKey:_create.executeCreates.apply(void 0,[r].concat((0,_toConsumableArray3["default"])(u))).subscribe(function(){},function(e){return i.onError(e)},function(){});break;default:i.onError(new Error("Undefined operation: "+a))}},function(e){return i.onError(e)})})}}Object.defineProperty(exports,"__esModule",{value:!0}),exports.create=exports.define=void 0;var _toConsumableArray2=require("babel-runtime/helpers/toConsumableArray"),_toConsumableArray3=_interopRequireDefault(_toConsumableArray2),_toArray2=require("babel-runtime/helpers/toArray"),_toArray3=_interopRequireDefault(_toArray2);exports.makeSequelizeDriver=makeSequelizeDriver;var _rx=require("rx"),_immutable=require("immutable"),_define=require("./lib/define"),_create=require("./lib/create");exports.define=_define.createDefinitions,exports.create=_create.createCreates;