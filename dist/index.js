"use strict";var u=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var n=u(function(p,t){
var s=require('@stdlib/assert-is-nonnegative-integer/dist').isPrimitive,o=require('@stdlib/assert-is-integer-array/dist').primitives,v=require('@stdlib/assert-is-ndarray-like/dist'),g=require('@stdlib/ndarray-base-spread-dimensions/dist'),i=require('@stdlib/error-tools-fmtprodmsg/dist');function m(e,r,a){if(!s(e))throw new TypeError(i('null2d',e));if(!v(r))throw new TypeError(i('nullF1',r));if(!o(a))throw new TypeError(i("invalid argument. Third argument must be an array of integers. Value: `%s`.",a));return g(e,r,a,!1)}t.exports=m
});var f=n();module.exports=f;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
