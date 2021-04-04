var root = (typeof global === 'object' && global) || this;
var arrayProto = Array.prototype,
    funcProto = Function.prototype,
    objectProto = Object.prototype,
    numberProto = Number.prototype,
    stringProto = String.prototype;
var phantom = root.phantom,
    process = root.process,
    amd = root.define ? define.amd : undefined,
    args = toArgs([1, 2, 3]),
    argv = process ? process.argv : undefined,
    defineProperty = Object.defineProperty,
    document = phantom ? undefined : root.document,
    body = root.document ? root.document.body : undefined,
    create = Object.create,
    fnToString = funcProto.toString,
    freeze = Object.freeze,
    getSymbols = Object.getOwnPropertySymbols,
    identity = function (value) { return value; },
    noop = function () { },
    objToString = objectProto.toString,
    params = argv,
    push = arrayProto.push,
    realm = {},
    slice = arrayProto.slice,
    strictArgs = (function () { 'use strict'; return arguments; }(1, 2, 3));
var isPhantom = phantom || (typeof callPhantom === 'function');
function toArgs(array) {
    return (function () { return arguments; }.apply(undefined, array));
}
export {
    identity, argv, isPhantom, push
};