// Compiled by ClojureScript 0.0-2138
goog.provide('clustermap.api');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('goog.net.XhrIo');
goog.require('goog.net.XhrIo');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
goog.require('clojure.string');
goog.require('clojure.string');
/**
* @param {...*} var_args
*/
clustermap.api.GET = (function() { 
var GET__delegate = function (url,p__20167){var map__20169 = p__20167;var map__20169__$1 = ((cljs.core.seq_QMARK_(map__20169))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20169):map__20169);var raw = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20169__$1,cljs.core.constant$keyword$247);var comm = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);goog.net.XhrIo.send(url,(function (event){cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,(function (d){if(cljs.core.truth_(raw))
{return d;
} else
{return cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(d,cljs.core.array_seq([cljs.core.constant$keyword$228,true], 0));
}
}).call(null,((JSON.parse.cljs$core$IFn$_invoke$arity$1 ? JSON.parse.cljs$core$IFn$_invoke$arity$1(event.target.getResponseText()) : JSON.parse.call(null,event.target.getResponseText()))["data"])));
return cljs.core.async.close_BANG_(comm);
}));
return comm;
};
var GET = function (url,var_args){
var p__20167 = null;if (arguments.length > 1) {
  p__20167 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return GET__delegate.call(this,url,p__20167);};
GET.cljs$lang$maxFixedArity = 1;
GET.cljs$lang$applyTo = (function (arglist__20170){
var url = cljs.core.first(arglist__20170);
var p__20167 = cljs.core.rest(arglist__20170);
return GET__delegate(url,p__20167);
});
GET.cljs$core$IFn$_invoke$arity$variadic = GET__delegate;
return GET;
})()
;
/**
* - ocomm : a channel containing [result-chans result-handler-args]
* gather results from the one-or-more result-chans, and
* pass them to the handler along with any result-handler-args
* - handler : invoked with (apply handler result-or-results result-handler-args)
*/
clustermap.api.ordered_api_results = (function ordered_api_results(ocomm,handler){var c__5521__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_20303){var state_val_20304 = (state_20303[1]);if((state_val_20304 === 1))
{var state_20303__$1 = state_20303;var statearr_20305_20341 = state_20303__$1;(statearr_20305_20341[2] = null);
(statearr_20305_20341[1] = 2);
return cljs.core.constant$keyword$233;
} else
{if((state_val_20304 === 2))
{var state_20303__$1 = state_20303;if(true)
{var statearr_20306_20342 = state_20303__$1;(statearr_20306_20342[1] = 4);
} else
{var statearr_20307_20343 = state_20303__$1;(statearr_20307_20343[1] = 5);
}
return cljs.core.constant$keyword$233;
} else
{if((state_val_20304 === 3))
{var inst_20301 = (state_20303[2]);var state_20303__$1 = state_20303;return cljs.core.async.impl.ioc_helpers.return_chan(state_20303__$1,inst_20301);
} else
{if((state_val_20304 === 4))
{var state_20303__$1 = state_20303;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20303__$1,7,ocomm);
} else
{if((state_val_20304 === 5))
{var state_20303__$1 = state_20303;var statearr_20308_20344 = state_20303__$1;(statearr_20308_20344[2] = null);
(statearr_20308_20344[1] = 6);
return cljs.core.constant$keyword$233;
} else
{if((state_val_20304 === 6))
{var inst_20299 = (state_20303[2]);var state_20303__$1 = state_20303;var statearr_20309_20345 = state_20303__$1;(statearr_20309_20345[2] = inst_20299);
(statearr_20309_20345[1] = 3);
return cljs.core.constant$keyword$233;
} else
{if((state_val_20304 === 7))
{var inst_20261 = (state_20303[7]);var inst_20260 = (state_20303[2]);var inst_20261__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_20260,0,null);var inst_20262 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_20260,1,null);var inst_20263 = cljs.core.sequential_QMARK_(inst_20261__$1);var state_20303__$1 = (function (){var statearr_20310 = state_20303;(statearr_20310[7] = inst_20261__$1);
(statearr_20310[8] = inst_20262);
return statearr_20310;
})();if(inst_20263)
{var statearr_20311_20346 = state_20303__$1;(statearr_20311_20346[1] = 8);
} else
{var statearr_20312_20347 = state_20303__$1;(statearr_20312_20347[1] = 9);
}
return cljs.core.constant$keyword$233;
} else
{if((state_val_20304 === 8))
{var inst_20261 = (state_20303[7]);var inst_20265 = inst_20261;var inst_20266 = cljs.core.PersistentVector.EMPTY;var state_20303__$1 = (function (){var statearr_20313 = state_20303;(statearr_20313[9] = inst_20266);
(statearr_20313[10] = inst_20265);
return statearr_20313;
})();var statearr_20314_20348 = state_20303__$1;(statearr_20314_20348[2] = null);
(statearr_20314_20348[1] = 11);
return cljs.core.constant$keyword$233;
} else
{if((state_val_20304 === 9))
{var inst_20261 = (state_20303[7]);var state_20303__$1 = state_20303;if(cljs.core.truth_(inst_20261))
{var statearr_20315_20349 = state_20303__$1;(statearr_20315_20349[1] = 20);
} else
{var statearr_20316_20350 = state_20303__$1;(statearr_20316_20350[1] = 21);
}
return cljs.core.constant$keyword$233;
} else
{if((state_val_20304 === 10))
{var inst_20262 = (state_20303[8]);var inst_20294 = (state_20303[2]);var inst_20295 = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(handler,inst_20294,inst_20262);var state_20303__$1 = (function (){var statearr_20317 = state_20303;(statearr_20317[11] = inst_20295);
return statearr_20317;
})();var statearr_20318_20351 = state_20303__$1;(statearr_20318_20351[2] = null);
(statearr_20318_20351[1] = 2);
return cljs.core.constant$keyword$233;
} else
{if((state_val_20304 === 11))
{var inst_20265 = (state_20303[10]);var inst_20268 = cljs.core.empty_QMARK_(inst_20265);var state_20303__$1 = state_20303;if(inst_20268)
{var statearr_20319_20352 = state_20303__$1;(statearr_20319_20352[1] = 13);
} else
{var statearr_20320_20353 = state_20303__$1;(statearr_20320_20353[1] = 14);
}
return cljs.core.constant$keyword$233;
} else
{if((state_val_20304 === 12))
{var inst_20285 = (state_20303[2]);var state_20303__$1 = state_20303;var statearr_20321_20354 = state_20303__$1;(statearr_20321_20354[2] = inst_20285);
(statearr_20321_20354[1] = 10);
return cljs.core.constant$keyword$233;
} else
{if((state_val_20304 === 13))
{var inst_20266 = (state_20303[9]);var state_20303__$1 = state_20303;var statearr_20322_20355 = state_20303__$1;(statearr_20322_20355[2] = inst_20266);
(statearr_20322_20355[1] = 15);
return cljs.core.constant$keyword$233;
} else
{if((state_val_20304 === 14))
{var inst_20265 = (state_20303[10]);var inst_20271 = cljs.core.rest(inst_20265);var inst_20272 = cljs.core.first(inst_20265);var state_20303__$1 = (function (){var statearr_20323 = state_20303;(statearr_20323[12] = inst_20271);
return statearr_20323;
})();if(cljs.core.truth_(inst_20272))
{var statearr_20324_20356 = state_20303__$1;(statearr_20324_20356[1] = 16);
} else
{var statearr_20325_20357 = state_20303__$1;(statearr_20325_20357[1] = 17);
}
return cljs.core.constant$keyword$233;
} else
{if((state_val_20304 === 15))
{var inst_20283 = (state_20303[2]);var state_20303__$1 = state_20303;var statearr_20326_20358 = state_20303__$1;(statearr_20326_20358[2] = inst_20283);
(statearr_20326_20358[1] = 12);
return cljs.core.constant$keyword$233;
} else
{if((state_val_20304 === 16))
{var inst_20265 = (state_20303[10]);var inst_20274 = cljs.core.first(inst_20265);var state_20303__$1 = state_20303;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20303__$1,19,inst_20274);
} else
{if((state_val_20304 === 17))
{var state_20303__$1 = state_20303;var statearr_20327_20359 = state_20303__$1;(statearr_20327_20359[2] = null);
(statearr_20327_20359[1] = 18);
return cljs.core.constant$keyword$233;
} else
{if((state_val_20304 === 18))
{var inst_20271 = (state_20303[12]);var inst_20266 = (state_20303[9]);var inst_20279 = (state_20303[2]);var inst_20280 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(inst_20266,inst_20279);var inst_20265 = inst_20271;var inst_20266__$1 = inst_20280;var state_20303__$1 = (function (){var statearr_20328 = state_20303;(statearr_20328[9] = inst_20266__$1);
(statearr_20328[10] = inst_20265);
return statearr_20328;
})();var statearr_20329_20360 = state_20303__$1;(statearr_20329_20360[2] = null);
(statearr_20329_20360[1] = 11);
return cljs.core.constant$keyword$233;
} else
{if((state_val_20304 === 19))
{var inst_20276 = (state_20303[2]);var state_20303__$1 = state_20303;var statearr_20330_20361 = state_20303__$1;(statearr_20330_20361[2] = inst_20276);
(statearr_20330_20361[1] = 18);
return cljs.core.constant$keyword$233;
} else
{if((state_val_20304 === 20))
{var inst_20261 = (state_20303[7]);var state_20303__$1 = state_20303;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20303__$1,23,inst_20261);
} else
{if((state_val_20304 === 21))
{var state_20303__$1 = state_20303;var statearr_20331_20362 = state_20303__$1;(statearr_20331_20362[2] = null);
(statearr_20331_20362[1] = 22);
return cljs.core.constant$keyword$233;
} else
{if((state_val_20304 === 22))
{var inst_20292 = (state_20303[2]);var state_20303__$1 = state_20303;var statearr_20332_20363 = state_20303__$1;(statearr_20332_20363[2] = inst_20292);
(statearr_20332_20363[1] = 10);
return cljs.core.constant$keyword$233;
} else
{if((state_val_20304 === 23))
{var inst_20289 = (state_20303[2]);var state_20303__$1 = state_20303;var statearr_20333_20364 = state_20303__$1;(statearr_20333_20364[2] = inst_20289);
(statearr_20333_20364[1] = 22);
return cljs.core.constant$keyword$233;
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_20337 = [null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_20337[0] = state_machine__5507__auto__);
(statearr_20337[1] = 1);
return statearr_20337;
});
var state_machine__5507__auto____1 = (function (state_20303){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_20303);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$233))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e20338){if((e20338 instanceof Object))
{var ex__5510__auto__ = e20338;var statearr_20339_20365 = state_20303;(statearr_20339_20365[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_20303);
return cljs.core.constant$keyword$233;
} else
{if(cljs.core.constant$keyword$222)
{throw e20338;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$233))
{{
var G__20366 = state_20303;
state_20303 = G__20366;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_20303){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_20303);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_20340 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_20340[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_20340;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5523__auto__);
}));
return c__5521__auto__;
});
/**
* order responses from an async API according to the order of requests
* - request-handler: fn to send an async API request, returning a channel of a single result value,
* and optional additional args for the result-handler. return nil to
* abandon request
* - result-handler: function of API result and optional additional args from request-handler result
*/
clustermap.api.ordered_api = (function ordered_api(request_handler,result_handler){var ocomm = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer(1));var _ = clustermap.api.ordered_api_results(ocomm,result_handler);return (function() { 
var G__20369__delegate = function (req_args){var temp__4090__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(request_handler,req_args);if(cljs.core.truth_(temp__4090__auto__))
{var r = temp__4090__auto__;var rseq = ((cljs.core.sequential_QMARK_(r))?r:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [r], null));var vec__20368 = rseq;var rcomm = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20368,0,null);var result_handler_args = cljs.core.nthnext(vec__20368,1);return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(ocomm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rcomm,result_handler_args], null));
} else
{return null;
}
};
var G__20369 = function (var_args){
var req_args = null;if (arguments.length > 0) {
  req_args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__20369__delegate.call(this,req_args);};
G__20369.cljs$lang$maxFixedArity = 0;
G__20369.cljs$lang$applyTo = (function (arglist__20370){
var req_args = cljs.core.seq(arglist__20370);
return G__20369__delegate(req_args);
});
G__20369.cljs$core$IFn$_invoke$arity$variadic = G__20369__delegate;
return G__20369;
})()
;
});
/**
* @param {...*} var_args
*/
clustermap.api.log_api = (function() { 
var log_api__delegate = function (f,args){var ch = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,args);var c__5521__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_20388){var state_val_20389 = (state_20388[1]);if((state_val_20389 === 2))
{var inst_20385 = (state_20388[2]);var inst_20386 = console.log(inst_20385);var state_20388__$1 = state_20388;return cljs.core.async.impl.ioc_helpers.return_chan(state_20388__$1,inst_20386);
} else
{if((state_val_20389 === 1))
{var state_20388__$1 = state_20388;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20388__$1,2,ch);
} else
{return null;
}
}
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_20393 = [null,null,null,null,null,null,null];(statearr_20393[0] = state_machine__5507__auto__);
(statearr_20393[1] = 1);
return statearr_20393;
});
var state_machine__5507__auto____1 = (function (state_20388){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_20388);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$233))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e20394){if((e20394 instanceof Object))
{var ex__5510__auto__ = e20394;var statearr_20395_20397 = state_20388;(statearr_20395_20397[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_20388);
return cljs.core.constant$keyword$233;
} else
{if(cljs.core.constant$keyword$222)
{throw e20394;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$233))
{{
var G__20398 = state_20388;
state_20388 = G__20398;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_20388){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_20388);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_20396 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_20396[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_20396;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5523__auto__);
}));
return c__5521__auto__;
};
var log_api = function (f,var_args){
var args = null;if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return log_api__delegate.call(this,f,args);};
log_api.cljs$lang$maxFixedArity = 1;
log_api.cljs$lang$applyTo = (function (arglist__20399){
var f = cljs.core.first(arglist__20399);
var args = cljs.core.rest(arglist__20399);
return log_api__delegate(f,args);
});
log_api.cljs$core$IFn$_invoke$arity$variadic = log_api__delegate;
return log_api;
})()
;
clustermap.api.map_json_params = (function map_json_params(m){return clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__20402){var vec__20403 = p__20402;var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20403,0,null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20403,1,null);return [cljs.core.str(cljs.core.name(k)),cljs.core.str("="),cljs.core.str(JSON.stringify(cljs.core.clj__GT_js(v)))].join('');
}),m));
});
clustermap.api.api_prefix = config.api.prefix;
/**
* @param {...*} var_args
*/
clustermap.api.boundarylines = (function() { 
var boundarylines__delegate = function (id,tolerance,opts){return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(clustermap.api.GET,[cljs.core.str("/api/boundarylines/"),cljs.core.str(id),cljs.core.str("/"),cljs.core.str(tolerance)].join(''),opts);
};
var boundarylines = function (id,tolerance,var_args){
var opts = null;if (arguments.length > 2) {
  opts = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return boundarylines__delegate.call(this,id,tolerance,opts);};
boundarylines.cljs$lang$maxFixedArity = 2;
boundarylines.cljs$lang$applyTo = (function (arglist__20404){
var id = cljs.core.first(arglist__20404);
arglist__20404 = cljs.core.next(arglist__20404);
var tolerance = cljs.core.first(arglist__20404);
var opts = cljs.core.rest(arglist__20404);
return boundarylines__delegate(id,tolerance,opts);
});
boundarylines.cljs$core$IFn$_invoke$arity$variadic = boundarylines__delegate;
return boundarylines;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.boundaryline_collection_index = (function() { 
var boundaryline_collection_index__delegate = function (id,opts){return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(clustermap.api.GET,[cljs.core.str("/api/boundaryline-collection-index/"),cljs.core.str(id)].join(''),opts);
};
var boundaryline_collection_index = function (id,var_args){
var opts = null;if (arguments.length > 1) {
  opts = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return boundaryline_collection_index__delegate.call(this,id,opts);};
boundaryline_collection_index.cljs$lang$maxFixedArity = 1;
boundaryline_collection_index.cljs$lang$applyTo = (function (arglist__20405){
var id = cljs.core.first(arglist__20405);
var opts = cljs.core.rest(arglist__20405);
return boundaryline_collection_index__delegate(id,opts);
});
boundaryline_collection_index.cljs$core$IFn$_invoke$arity$variadic = boundaryline_collection_index__delegate;
return boundaryline_collection_index;
})()
;
clustermap.api.search = (function search(q){if((cljs.core.count(clojure.string.trim(q)) > 0))
{return clustermap.api.GET([cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/search?q="),cljs.core.str(q)].join(''));
} else
{return cljs.core.async.to_chan(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [{}], null));
}
});
clustermap.api.constituency = (function constituency(id){return clustermap.api.GET([cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/constituencies/"),cljs.core.str(id)].join(''));
});
/**
* @param {...*} var_args
*/
clustermap.api.constituencies = (function() { 
var constituencies__delegate = function (p__20406){var vec__20408 = p__20406;var type_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20408,0,null);return clustermap.api.GET.cljs$core$IFn$_invoke$arity$variadic("/api/",cljs.core.array_seq([clustermap.api.api_prefix,"/constituencies?",clustermap.api.map_json_params(type_ids)], 0));
};
var constituencies = function (var_args){
var p__20406 = null;if (arguments.length > 0) {
  p__20406 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return constituencies__delegate.call(this,p__20406);};
constituencies.cljs$lang$maxFixedArity = 0;
constituencies.cljs$lang$applyTo = (function (arglist__20409){
var p__20406 = cljs.core.seq(arglist__20409);
return constituencies__delegate(p__20406);
});
constituencies.cljs$core$IFn$_invoke$arity$variadic = constituencies__delegate;
return constituencies;
})()
;
clustermap.api.portfolio_company = (function portfolio_company(id){return clustermap.api.GET([cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/portfolio-companies/"),cljs.core.str(id)].join(''));
});
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_companies = (function() { 
var portfolio_companies__delegate = function (p__20410){var vec__20412 = p__20410;var type_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20412,0,null);var type_ids__$1 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$248,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$249,"desc"], null)], null)], 0));return clustermap.api.GET([cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/portfolio-companies?"),cljs.core.str(clustermap.api.map_json_params(type_ids__$1))].join(''));
};
var portfolio_companies = function (var_args){
var p__20410 = null;if (arguments.length > 0) {
  p__20410 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_companies__delegate.call(this,p__20410);};
portfolio_companies.cljs$lang$maxFixedArity = 0;
portfolio_companies.cljs$lang$applyTo = (function (arglist__20413){
var p__20410 = cljs.core.seq(arglist__20413);
return portfolio_companies__delegate(p__20410);
});
portfolio_companies.cljs$core$IFn$_invoke$arity$variadic = portfolio_companies__delegate;
return portfolio_companies;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_stats = (function() { 
var portfolio_company_stats__delegate = function (p__20414){var vec__20416 = p__20414;var type_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20416,0,null);return clustermap.api.GET([cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/portfolio-company-stats?"),cljs.core.str(clustermap.api.map_json_params(type_ids))].join(''));
};
var portfolio_company_stats = function (var_args){
var p__20414 = null;if (arguments.length > 0) {
  p__20414 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_stats__delegate.call(this,p__20414);};
portfolio_company_stats.cljs$lang$maxFixedArity = 0;
portfolio_company_stats.cljs$lang$applyTo = (function (arglist__20417){
var p__20414 = cljs.core.seq(arglist__20417);
return portfolio_company_stats__delegate(p__20414);
});
portfolio_company_stats.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_stats__delegate;
return portfolio_company_stats;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_account_stats = (function() { 
var portfolio_company_account_stats__delegate = function (p__20418){var vec__20420 = p__20418;var type_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20420,0,null);return clustermap.api.GET([cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/portfolio-company-account-stats?"),cljs.core.str(clustermap.api.map_json_params(type_ids))].join(''));
};
var portfolio_company_account_stats = function (var_args){
var p__20418 = null;if (arguments.length > 0) {
  p__20418 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_account_stats__delegate.call(this,p__20418);};
portfolio_company_account_stats.cljs$lang$maxFixedArity = 0;
portfolio_company_account_stats.cljs$lang$applyTo = (function (arglist__20421){
var p__20418 = cljs.core.seq(arglist__20421);
return portfolio_company_account_stats__delegate(p__20418);
});
portfolio_company_account_stats.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_account_stats__delegate;
return portfolio_company_account_stats;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_sites = (function() { 
var portfolio_company_sites__delegate = function (p__20422){var vec__20424 = p__20422;var type_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20424,0,null);var type_ids__$1 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$250,100,cljs.core.constant$keyword$248,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$249,"desc"], null)], null)], null),type_ids], 0));return clustermap.api.GET([cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/portfolio-company-sites?"),cljs.core.str(clustermap.api.map_json_params(type_ids__$1))].join(''));
};
var portfolio_company_sites = function (var_args){
var p__20422 = null;if (arguments.length > 0) {
  p__20422 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_sites__delegate.call(this,p__20422);};
portfolio_company_sites.cljs$lang$maxFixedArity = 0;
portfolio_company_sites.cljs$lang$applyTo = (function (arglist__20425){
var p__20422 = cljs.core.seq(arglist__20425);
return portfolio_company_sites__delegate(p__20422);
});
portfolio_company_sites.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_sites__delegate;
return portfolio_company_sites;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_locations = (function() { 
var portfolio_company_locations__delegate = function (p__20426){var vec__20428 = p__20426;var type_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20428,0,null);return clustermap.api.GET([cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/portfolio-company-locations?"),cljs.core.str(clustermap.api.map_json_params(type_ids))].join(''));
};
var portfolio_company_locations = function (var_args){
var p__20426 = null;if (arguments.length > 0) {
  p__20426 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_locations__delegate.call(this,p__20426);};
portfolio_company_locations.cljs$lang$maxFixedArity = 0;
portfolio_company_locations.cljs$lang$applyTo = (function (arglist__20429){
var p__20426 = cljs.core.seq(arglist__20429);
return portfolio_company_locations__delegate(p__20426);
});
portfolio_company_locations.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_locations__delegate;
return portfolio_company_locations;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_site_stats = (function() { 
var portfolio_company_site_stats__delegate = function (p__20430){var vec__20432 = p__20430;var type_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20432,0,null);return clustermap.api.GET([cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/portfolio-company-site-stats?"),cljs.core.str(clustermap.api.map_json_params(type_ids))].join(''));
};
var portfolio_company_site_stats = function (var_args){
var p__20430 = null;if (arguments.length > 0) {
  p__20430 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_site_stats__delegate.call(this,p__20430);};
portfolio_company_site_stats.cljs$lang$maxFixedArity = 0;
portfolio_company_site_stats.cljs$lang$applyTo = (function (arglist__20433){
var p__20430 = cljs.core.seq(arglist__20433);
return portfolio_company_site_stats__delegate(p__20430);
});
portfolio_company_site_stats.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_site_stats__delegate;
return portfolio_company_site_stats;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_site_account_timelines = (function() { 
var portfolio_company_site_account_timelines__delegate = function (p__20434){var vec__20436 = p__20434;var type_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20436,0,null);return clustermap.api.GET([cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/portfolio-company-site-account-timelines?"),cljs.core.str(clustermap.api.map_json_params(type_ids))].join(''));
};
var portfolio_company_site_account_timelines = function (var_args){
var p__20434 = null;if (arguments.length > 0) {
  p__20434 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_site_account_timelines__delegate.call(this,p__20434);};
portfolio_company_site_account_timelines.cljs$lang$maxFixedArity = 0;
portfolio_company_site_account_timelines.cljs$lang$applyTo = (function (arglist__20437){
var p__20434 = cljs.core.seq(arglist__20437);
return portfolio_company_site_account_timelines__delegate(p__20434);
});
portfolio_company_site_account_timelines.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_site_account_timelines__delegate;
return portfolio_company_site_account_timelines;
})()
;
clustermap.api.investor_company = (function investor_company(id){return clustermap.api.GET([cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/investor-companies/"),cljs.core.str(id)].join(''));
});
/**
* @param {...*} var_args
*/
clustermap.api.investor_comapnies = (function() { 
var investor_comapnies__delegate = function (p__20438){var vec__20440 = p__20438;var type_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20440,0,null);return clustermap.api.GET([cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/investor-companies?"),cljs.core.str(clustermap.api.map_json_params(type_ids))].join(''));
};
var investor_comapnies = function (var_args){
var p__20438 = null;if (arguments.length > 0) {
  p__20438 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return investor_comapnies__delegate.call(this,p__20438);};
investor_comapnies.cljs$lang$maxFixedArity = 0;
investor_comapnies.cljs$lang$applyTo = (function (arglist__20441){
var p__20438 = cljs.core.seq(arglist__20441);
return investor_comapnies__delegate(p__20438);
});
investor_comapnies.cljs$core$IFn$_invoke$arity$variadic = investor_comapnies__delegate;
return investor_comapnies;
})()
;
