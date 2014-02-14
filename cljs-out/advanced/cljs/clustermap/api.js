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
var GET__delegate = function (url,p__20163){var map__20165 = p__20163;var map__20165__$1 = ((cljs.core.seq_QMARK_(map__20165))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20165):map__20165);var raw = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20165__$1,cljs.core.constant$keyword$246);var comm = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);goog.net.XhrIo.send(url,(function (event){cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,(function (d){if(cljs.core.truth_(raw))
{return d;
} else
{return cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(d,cljs.core.array_seq([cljs.core.constant$keyword$227,true], 0));
}
}).call(null,((JSON.parse.cljs$core$IFn$_invoke$arity$1 ? JSON.parse.cljs$core$IFn$_invoke$arity$1(event.target.getResponseText()) : JSON.parse.call(null,event.target.getResponseText()))["data"])));
return cljs.core.async.close_BANG_(comm);
}));
return comm;
};
var GET = function (url,var_args){
var p__20163 = null;if (arguments.length > 1) {
  p__20163 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return GET__delegate.call(this,url,p__20163);};
GET.cljs$lang$maxFixedArity = 1;
GET.cljs$lang$applyTo = (function (arglist__20166){
var url = cljs.core.first(arglist__20166);
var p__20163 = cljs.core.rest(arglist__20166);
return GET__delegate(url,p__20163);
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
clustermap.api.ordered_api_results = (function ordered_api_results(ocomm,handler){var c__5521__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_20299){var state_val_20300 = (state_20299[1]);if((state_val_20300 === 1))
{var state_20299__$1 = state_20299;var statearr_20301_20337 = state_20299__$1;(statearr_20301_20337[2] = null);
(statearr_20301_20337[1] = 2);
return cljs.core.constant$keyword$232;
} else
{if((state_val_20300 === 2))
{var state_20299__$1 = state_20299;if(true)
{var statearr_20302_20338 = state_20299__$1;(statearr_20302_20338[1] = 4);
} else
{var statearr_20303_20339 = state_20299__$1;(statearr_20303_20339[1] = 5);
}
return cljs.core.constant$keyword$232;
} else
{if((state_val_20300 === 3))
{var inst_20297 = (state_20299[2]);var state_20299__$1 = state_20299;return cljs.core.async.impl.ioc_helpers.return_chan(state_20299__$1,inst_20297);
} else
{if((state_val_20300 === 4))
{var state_20299__$1 = state_20299;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20299__$1,7,ocomm);
} else
{if((state_val_20300 === 5))
{var state_20299__$1 = state_20299;var statearr_20304_20340 = state_20299__$1;(statearr_20304_20340[2] = null);
(statearr_20304_20340[1] = 6);
return cljs.core.constant$keyword$232;
} else
{if((state_val_20300 === 6))
{var inst_20295 = (state_20299[2]);var state_20299__$1 = state_20299;var statearr_20305_20341 = state_20299__$1;(statearr_20305_20341[2] = inst_20295);
(statearr_20305_20341[1] = 3);
return cljs.core.constant$keyword$232;
} else
{if((state_val_20300 === 7))
{var inst_20257 = (state_20299[7]);var inst_20256 = (state_20299[2]);var inst_20257__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_20256,0,null);var inst_20258 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_20256,1,null);var inst_20259 = cljs.core.sequential_QMARK_(inst_20257__$1);var state_20299__$1 = (function (){var statearr_20306 = state_20299;(statearr_20306[7] = inst_20257__$1);
(statearr_20306[8] = inst_20258);
return statearr_20306;
})();if(inst_20259)
{var statearr_20307_20342 = state_20299__$1;(statearr_20307_20342[1] = 8);
} else
{var statearr_20308_20343 = state_20299__$1;(statearr_20308_20343[1] = 9);
}
return cljs.core.constant$keyword$232;
} else
{if((state_val_20300 === 8))
{var inst_20257 = (state_20299[7]);var inst_20261 = inst_20257;var inst_20262 = cljs.core.PersistentVector.EMPTY;var state_20299__$1 = (function (){var statearr_20309 = state_20299;(statearr_20309[9] = inst_20261);
(statearr_20309[10] = inst_20262);
return statearr_20309;
})();var statearr_20310_20344 = state_20299__$1;(statearr_20310_20344[2] = null);
(statearr_20310_20344[1] = 11);
return cljs.core.constant$keyword$232;
} else
{if((state_val_20300 === 9))
{var inst_20257 = (state_20299[7]);var state_20299__$1 = state_20299;if(cljs.core.truth_(inst_20257))
{var statearr_20311_20345 = state_20299__$1;(statearr_20311_20345[1] = 20);
} else
{var statearr_20312_20346 = state_20299__$1;(statearr_20312_20346[1] = 21);
}
return cljs.core.constant$keyword$232;
} else
{if((state_val_20300 === 10))
{var inst_20258 = (state_20299[8]);var inst_20290 = (state_20299[2]);var inst_20291 = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(handler,inst_20290,inst_20258);var state_20299__$1 = (function (){var statearr_20313 = state_20299;(statearr_20313[11] = inst_20291);
return statearr_20313;
})();var statearr_20314_20347 = state_20299__$1;(statearr_20314_20347[2] = null);
(statearr_20314_20347[1] = 2);
return cljs.core.constant$keyword$232;
} else
{if((state_val_20300 === 11))
{var inst_20261 = (state_20299[9]);var inst_20264 = cljs.core.empty_QMARK_(inst_20261);var state_20299__$1 = state_20299;if(inst_20264)
{var statearr_20315_20348 = state_20299__$1;(statearr_20315_20348[1] = 13);
} else
{var statearr_20316_20349 = state_20299__$1;(statearr_20316_20349[1] = 14);
}
return cljs.core.constant$keyword$232;
} else
{if((state_val_20300 === 12))
{var inst_20281 = (state_20299[2]);var state_20299__$1 = state_20299;var statearr_20317_20350 = state_20299__$1;(statearr_20317_20350[2] = inst_20281);
(statearr_20317_20350[1] = 10);
return cljs.core.constant$keyword$232;
} else
{if((state_val_20300 === 13))
{var inst_20262 = (state_20299[10]);var state_20299__$1 = state_20299;var statearr_20318_20351 = state_20299__$1;(statearr_20318_20351[2] = inst_20262);
(statearr_20318_20351[1] = 15);
return cljs.core.constant$keyword$232;
} else
{if((state_val_20300 === 14))
{var inst_20261 = (state_20299[9]);var inst_20267 = cljs.core.rest(inst_20261);var inst_20268 = cljs.core.first(inst_20261);var state_20299__$1 = (function (){var statearr_20319 = state_20299;(statearr_20319[12] = inst_20267);
return statearr_20319;
})();if(cljs.core.truth_(inst_20268))
{var statearr_20320_20352 = state_20299__$1;(statearr_20320_20352[1] = 16);
} else
{var statearr_20321_20353 = state_20299__$1;(statearr_20321_20353[1] = 17);
}
return cljs.core.constant$keyword$232;
} else
{if((state_val_20300 === 15))
{var inst_20279 = (state_20299[2]);var state_20299__$1 = state_20299;var statearr_20322_20354 = state_20299__$1;(statearr_20322_20354[2] = inst_20279);
(statearr_20322_20354[1] = 12);
return cljs.core.constant$keyword$232;
} else
{if((state_val_20300 === 16))
{var inst_20261 = (state_20299[9]);var inst_20270 = cljs.core.first(inst_20261);var state_20299__$1 = state_20299;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20299__$1,19,inst_20270);
} else
{if((state_val_20300 === 17))
{var state_20299__$1 = state_20299;var statearr_20323_20355 = state_20299__$1;(statearr_20323_20355[2] = null);
(statearr_20323_20355[1] = 18);
return cljs.core.constant$keyword$232;
} else
{if((state_val_20300 === 18))
{var inst_20262 = (state_20299[10]);var inst_20267 = (state_20299[12]);var inst_20275 = (state_20299[2]);var inst_20276 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(inst_20262,inst_20275);var inst_20261 = inst_20267;var inst_20262__$1 = inst_20276;var state_20299__$1 = (function (){var statearr_20324 = state_20299;(statearr_20324[9] = inst_20261);
(statearr_20324[10] = inst_20262__$1);
return statearr_20324;
})();var statearr_20325_20356 = state_20299__$1;(statearr_20325_20356[2] = null);
(statearr_20325_20356[1] = 11);
return cljs.core.constant$keyword$232;
} else
{if((state_val_20300 === 19))
{var inst_20272 = (state_20299[2]);var state_20299__$1 = state_20299;var statearr_20326_20357 = state_20299__$1;(statearr_20326_20357[2] = inst_20272);
(statearr_20326_20357[1] = 18);
return cljs.core.constant$keyword$232;
} else
{if((state_val_20300 === 20))
{var inst_20257 = (state_20299[7]);var state_20299__$1 = state_20299;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20299__$1,23,inst_20257);
} else
{if((state_val_20300 === 21))
{var state_20299__$1 = state_20299;var statearr_20327_20358 = state_20299__$1;(statearr_20327_20358[2] = null);
(statearr_20327_20358[1] = 22);
return cljs.core.constant$keyword$232;
} else
{if((state_val_20300 === 22))
{var inst_20288 = (state_20299[2]);var state_20299__$1 = state_20299;var statearr_20328_20359 = state_20299__$1;(statearr_20328_20359[2] = inst_20288);
(statearr_20328_20359[1] = 10);
return cljs.core.constant$keyword$232;
} else
{if((state_val_20300 === 23))
{var inst_20285 = (state_20299[2]);var state_20299__$1 = state_20299;var statearr_20329_20360 = state_20299__$1;(statearr_20329_20360[2] = inst_20285);
(statearr_20329_20360[1] = 22);
return cljs.core.constant$keyword$232;
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
var state_machine__5507__auto____0 = (function (){var statearr_20333 = [null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_20333[0] = state_machine__5507__auto__);
(statearr_20333[1] = 1);
return statearr_20333;
});
var state_machine__5507__auto____1 = (function (state_20299){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_20299);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$232))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e20334){if((e20334 instanceof Object))
{var ex__5510__auto__ = e20334;var statearr_20335_20361 = state_20299;(statearr_20335_20361[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_20299);
return cljs.core.constant$keyword$232;
} else
{if(cljs.core.constant$keyword$221)
{throw e20334;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$232))
{{
var G__20362 = state_20299;
state_20299 = G__20362;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_20299){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_20299);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_20336 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_20336[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_20336;
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
var G__20365__delegate = function (req_args){var temp__4090__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(request_handler,req_args);if(cljs.core.truth_(temp__4090__auto__))
{var r = temp__4090__auto__;var rseq = ((cljs.core.sequential_QMARK_(r))?r:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [r], null));var vec__20364 = rseq;var rcomm = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20364,0,null);var result_handler_args = cljs.core.nthnext(vec__20364,1);return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(ocomm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rcomm,result_handler_args], null));
} else
{return null;
}
};
var G__20365 = function (var_args){
var req_args = null;if (arguments.length > 0) {
  req_args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__20365__delegate.call(this,req_args);};
G__20365.cljs$lang$maxFixedArity = 0;
G__20365.cljs$lang$applyTo = (function (arglist__20366){
var req_args = cljs.core.seq(arglist__20366);
return G__20365__delegate(req_args);
});
G__20365.cljs$core$IFn$_invoke$arity$variadic = G__20365__delegate;
return G__20365;
})()
;
});
/**
* @param {...*} var_args
*/
clustermap.api.log_api = (function() { 
var log_api__delegate = function (f,args){var ch = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,args);var c__5521__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_20384){var state_val_20385 = (state_20384[1]);if((state_val_20385 === 2))
{var inst_20381 = (state_20384[2]);var inst_20382 = console.log(inst_20381);var state_20384__$1 = state_20384;return cljs.core.async.impl.ioc_helpers.return_chan(state_20384__$1,inst_20382);
} else
{if((state_val_20385 === 1))
{var state_20384__$1 = state_20384;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20384__$1,2,ch);
} else
{return null;
}
}
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_20389 = [null,null,null,null,null,null,null];(statearr_20389[0] = state_machine__5507__auto__);
(statearr_20389[1] = 1);
return statearr_20389;
});
var state_machine__5507__auto____1 = (function (state_20384){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_20384);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$232))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e20390){if((e20390 instanceof Object))
{var ex__5510__auto__ = e20390;var statearr_20391_20393 = state_20384;(statearr_20391_20393[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_20384);
return cljs.core.constant$keyword$232;
} else
{if(cljs.core.constant$keyword$221)
{throw e20390;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$232))
{{
var G__20394 = state_20384;
state_20384 = G__20394;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_20384){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_20384);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_20392 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_20392[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_20392;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5523__auto__);
}));
return c__5521__auto__;
};
var log_api = function (f,var_args){
var args = null;if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return log_api__delegate.call(this,f,args);};
log_api.cljs$lang$maxFixedArity = 1;
log_api.cljs$lang$applyTo = (function (arglist__20395){
var f = cljs.core.first(arglist__20395);
var args = cljs.core.rest(arglist__20395);
return log_api__delegate(f,args);
});
log_api.cljs$core$IFn$_invoke$arity$variadic = log_api__delegate;
return log_api;
})()
;
clustermap.api.map_json_params = (function map_json_params(m){return clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__20398){var vec__20399 = p__20398;var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20399,0,null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20399,1,null);return [cljs.core.str(cljs.core.name(k)),cljs.core.str("="),cljs.core.str(JSON.stringify(cljs.core.clj__GT_js(v)))].join('');
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
boundarylines.cljs$lang$applyTo = (function (arglist__20400){
var id = cljs.core.first(arglist__20400);
arglist__20400 = cljs.core.next(arglist__20400);
var tolerance = cljs.core.first(arglist__20400);
var opts = cljs.core.rest(arglist__20400);
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
boundaryline_collection_index.cljs$lang$applyTo = (function (arglist__20401){
var id = cljs.core.first(arglist__20401);
var opts = cljs.core.rest(arglist__20401);
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
var constituencies__delegate = function (p__20402){var vec__20404 = p__20402;var type_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20404,0,null);return clustermap.api.GET.cljs$core$IFn$_invoke$arity$variadic("/api/",cljs.core.array_seq([clustermap.api.api_prefix,"/constituencies?",clustermap.api.map_json_params(type_ids)], 0));
};
var constituencies = function (var_args){
var p__20402 = null;if (arguments.length > 0) {
  p__20402 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return constituencies__delegate.call(this,p__20402);};
constituencies.cljs$lang$maxFixedArity = 0;
constituencies.cljs$lang$applyTo = (function (arglist__20405){
var p__20402 = cljs.core.seq(arglist__20405);
return constituencies__delegate(p__20402);
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
var portfolio_companies__delegate = function (p__20406){var vec__20408 = p__20406;var type_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20408,0,null);return clustermap.api.GET([cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/portfolio-companies?sort={\"!latest_turnover\":\"desc\"}&"),cljs.core.str(clustermap.api.map_json_params(type_ids))].join(''));
};
var portfolio_companies = function (var_args){
var p__20406 = null;if (arguments.length > 0) {
  p__20406 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_companies__delegate.call(this,p__20406);};
portfolio_companies.cljs$lang$maxFixedArity = 0;
portfolio_companies.cljs$lang$applyTo = (function (arglist__20409){
var p__20406 = cljs.core.seq(arglist__20409);
return portfolio_companies__delegate(p__20406);
});
portfolio_companies.cljs$core$IFn$_invoke$arity$variadic = portfolio_companies__delegate;
return portfolio_companies;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_stats = (function() { 
var portfolio_company_stats__delegate = function (p__20410){var vec__20412 = p__20410;var type_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20412,0,null);return clustermap.api.GET([cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/portfolio-company-stats?"),cljs.core.str(clustermap.api.map_json_params(type_ids))].join(''));
};
var portfolio_company_stats = function (var_args){
var p__20410 = null;if (arguments.length > 0) {
  p__20410 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_stats__delegate.call(this,p__20410);};
portfolio_company_stats.cljs$lang$maxFixedArity = 0;
portfolio_company_stats.cljs$lang$applyTo = (function (arglist__20413){
var p__20410 = cljs.core.seq(arglist__20413);
return portfolio_company_stats__delegate(p__20410);
});
portfolio_company_stats.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_stats__delegate;
return portfolio_company_stats;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_account_stats = (function() { 
var portfolio_company_account_stats__delegate = function (p__20414){var vec__20416 = p__20414;var type_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20416,0,null);return clustermap.api.GET([cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/portfolio-company-account-stats?"),cljs.core.str(clustermap.api.map_json_params(type_ids))].join(''));
};
var portfolio_company_account_stats = function (var_args){
var p__20414 = null;if (arguments.length > 0) {
  p__20414 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_account_stats__delegate.call(this,p__20414);};
portfolio_company_account_stats.cljs$lang$maxFixedArity = 0;
portfolio_company_account_stats.cljs$lang$applyTo = (function (arglist__20417){
var p__20414 = cljs.core.seq(arglist__20417);
return portfolio_company_account_stats__delegate(p__20414);
});
portfolio_company_account_stats.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_account_stats__delegate;
return portfolio_company_account_stats;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_sites = (function() { 
var portfolio_company_sites__delegate = function (p__20418){var vec__20420 = p__20418;var type_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20420,0,null);var type_ids__$1 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$247,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["?boundarylinecolls.uk_constituencies"], null)], null),type_ids], 0));return clustermap.api.GET([cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/portfolio-company-sites?"),cljs.core.str(clustermap.api.map_json_params(type_ids__$1))].join(''));
};
var portfolio_company_sites = function (var_args){
var p__20418 = null;if (arguments.length > 0) {
  p__20418 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_sites__delegate.call(this,p__20418);};
portfolio_company_sites.cljs$lang$maxFixedArity = 0;
portfolio_company_sites.cljs$lang$applyTo = (function (arglist__20421){
var p__20418 = cljs.core.seq(arglist__20421);
return portfolio_company_sites__delegate(p__20418);
});
portfolio_company_sites.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_sites__delegate;
return portfolio_company_sites;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_locations = (function() { 
var portfolio_company_locations__delegate = function (p__20422){var vec__20424 = p__20422;var type_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20424,0,null);return clustermap.api.GET([cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/portfolio-company-locations?"),cljs.core.str(clustermap.api.map_json_params(type_ids))].join(''));
};
var portfolio_company_locations = function (var_args){
var p__20422 = null;if (arguments.length > 0) {
  p__20422 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_locations__delegate.call(this,p__20422);};
portfolio_company_locations.cljs$lang$maxFixedArity = 0;
portfolio_company_locations.cljs$lang$applyTo = (function (arglist__20425){
var p__20422 = cljs.core.seq(arglist__20425);
return portfolio_company_locations__delegate(p__20422);
});
portfolio_company_locations.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_locations__delegate;
return portfolio_company_locations;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_site_stats = (function() { 
var portfolio_company_site_stats__delegate = function (p__20426){var vec__20428 = p__20426;var type_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20428,0,null);return clustermap.api.GET([cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/portfolio-company-site-stats?"),cljs.core.str(clustermap.api.map_json_params(type_ids))].join(''));
};
var portfolio_company_site_stats = function (var_args){
var p__20426 = null;if (arguments.length > 0) {
  p__20426 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_site_stats__delegate.call(this,p__20426);};
portfolio_company_site_stats.cljs$lang$maxFixedArity = 0;
portfolio_company_site_stats.cljs$lang$applyTo = (function (arglist__20429){
var p__20426 = cljs.core.seq(arglist__20429);
return portfolio_company_site_stats__delegate(p__20426);
});
portfolio_company_site_stats.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_site_stats__delegate;
return portfolio_company_site_stats;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_site_account_timelines = (function() { 
var portfolio_company_site_account_timelines__delegate = function (p__20430){var vec__20432 = p__20430;var type_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20432,0,null);return clustermap.api.GET([cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/portfolio-company-site-account-timelines?"),cljs.core.str(clustermap.api.map_json_params(type_ids))].join(''));
};
var portfolio_company_site_account_timelines = function (var_args){
var p__20430 = null;if (arguments.length > 0) {
  p__20430 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_site_account_timelines__delegate.call(this,p__20430);};
portfolio_company_site_account_timelines.cljs$lang$maxFixedArity = 0;
portfolio_company_site_account_timelines.cljs$lang$applyTo = (function (arglist__20433){
var p__20430 = cljs.core.seq(arglist__20433);
return portfolio_company_site_account_timelines__delegate(p__20430);
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
var investor_comapnies__delegate = function (p__20434){var vec__20436 = p__20434;var type_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20436,0,null);return clustermap.api.GET([cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/investor-companies?"),cljs.core.str(clustermap.api.map_json_params(type_ids))].join(''));
};
var investor_comapnies = function (var_args){
var p__20434 = null;if (arguments.length > 0) {
  p__20434 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return investor_comapnies__delegate.call(this,p__20434);};
investor_comapnies.cljs$lang$maxFixedArity = 0;
investor_comapnies.cljs$lang$applyTo = (function (arglist__20437){
var p__20434 = cljs.core.seq(arglist__20437);
return investor_comapnies__delegate(p__20434);
});
investor_comapnies.cljs$core$IFn$_invoke$arity$variadic = investor_comapnies__delegate;
return investor_comapnies;
})()
;
