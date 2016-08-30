"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = cloneObject;
function cloneObject(obj) {
  return JSON.parse(JSON.stringify(obj));
}