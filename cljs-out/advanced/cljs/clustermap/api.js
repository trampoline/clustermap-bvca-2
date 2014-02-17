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
var GET__delegate = function (url,p__20205){var map__20207 = p__20205;var map__20207__$1 = ((cljs.core.seq_QMARK_(map__20207))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20207):map__20207);var raw = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20207__$1,cljs.core.constant$keyword$248);var comm = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);goog.net.XhrIo.send(url,(function (event){cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,(function (d){if(cljs.core.truth_(raw))
{return d;
} else
{return cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(d,cljs.core.array_seq([cljs.core.constant$keyword$229,true], 0));
}
}).call(null,((JSON.parse.cljs$core$IFn$_invoke$arity$1 ? JSON.parse.cljs$core$IFn$_invoke$arity$1(event.target.getResponseText()) : JSON.parse.call(null,event.target.getResponseText()))["data"])));
return cljs.core.async.close_BANG_(comm);
}));
return comm;
};
var GET = function (url,var_args){
var p__20205 = null;if (arguments.length > 1) {
  p__20205 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return GET__delegate.call(this,url,p__20205);};
GET.cljs$lang$maxFixedArity = 1;
GET.cljs$lang$applyTo = (function (arglist__20208){
var url = cljs.core.first(arglist__20208);
var p__20205 = cljs.core.rest(arglist__20208);
return GET__delegate(url,p__20205);
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
clustermap.api.ordered_api_results = (function ordered_api_results(ocomm,handler){var c__5521__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_20341){var state_val_20342 = (state_20341[1]);if((state_val_20342 === 1))
{var state_20341__$1 = state_20341;var statearr_20343_20379 = state_20341__$1;(statearr_20343_20379[2] = null);
(statearr_20343_20379[1] = 2);
return cljs.core.constant$keyword$234;
} else
{if((state_val_20342 === 2))
{var state_20341__$1 = state_20341;if(true)
{var statearr_20344_20380 = state_20341__$1;(statearr_20344_20380[1] = 4);
} else
{var statearr_20345_20381 = state_20341__$1;(statearr_20345_20381[1] = 5);
}
return cljs.core.constant$keyword$234;
} else
{if((state_val_20342 === 3))
{var inst_20339 = (state_20341[2]);var state_20341__$1 = state_20341;return cljs.core.async.impl.ioc_helpers.return_chan(state_20341__$1,inst_20339);
} else
{if((state_val_20342 === 4))
{var state_20341__$1 = state_20341;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20341__$1,7,ocomm);
} else
{if((state_val_20342 === 5))
{var state_20341__$1 = state_20341;var statearr_20346_20382 = state_20341__$1;(statearr_20346_20382[2] = null);
(statearr_20346_20382[1] = 6);
return cljs.core.constant$keyword$234;
} else
{if((state_val_20342 === 6))
{var inst_20337 = (state_20341[2]);var state_20341__$1 = state_20341;var statearr_20347_20383 = state_20341__$1;(statearr_20347_20383[2] = inst_20337);
(statearr_20347_20383[1] = 3);
return cljs.core.constant$keyword$234;
} else
{if((state_val_20342 === 7))
{var inst_20299 = (state_20341[7]);var inst_20298 = (state_20341[2]);var inst_20299__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_20298,0,null);var inst_20300 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_20298,1,null);var inst_20301 = cljs.core.sequential_QMARK_(inst_20299__$1);var state_20341__$1 = (function (){var statearr_20348 = state_20341;(statearr_20348[7] = inst_20299__$1);
(statearr_20348[8] = inst_20300);
return statearr_20348;
})();if(inst_20301)
{var statearr_20349_20384 = state_20341__$1;(statearr_20349_20384[1] = 8);
} else
{var statearr_20350_20385 = state_20341__$1;(statearr_20350_20385[1] = 9);
}
return cljs.core.constant$keyword$234;
} else
{if((state_val_20342 === 8))
{var inst_20299 = (state_20341[7]);var inst_20303 = inst_20299;var inst_20304 = cljs.core.PersistentVector.EMPTY;var state_20341__$1 = (function (){var statearr_20351 = state_20341;(statearr_20351[9] = inst_20304);
(statearr_20351[10] = inst_20303);
return statearr_20351;
})();var statearr_20352_20386 = state_20341__$1;(statearr_20352_20386[2] = null);
(statearr_20352_20386[1] = 11);
return cljs.core.constant$keyword$234;
} else
{if((state_val_20342 === 9))
{var inst_20299 = (state_20341[7]);var state_20341__$1 = state_20341;if(cljs.core.truth_(inst_20299))
{var statearr_20353_20387 = state_20341__$1;(statearr_20353_20387[1] = 20);
} else
{var statearr_20354_20388 = state_20341__$1;(statearr_20354_20388[1] = 21);
}
return cljs.core.constant$keyword$234;
} else
{if((state_val_20342 === 10))
{var inst_20300 = (state_20341[8]);var inst_20332 = (state_20341[2]);var inst_20333 = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(handler,inst_20332,inst_20300);var state_20341__$1 = (function (){var statearr_20355 = state_20341;(statearr_20355[11] = inst_20333);
return statearr_20355;
})();var statearr_20356_20389 = state_20341__$1;(statearr_20356_20389[2] = null);
(statearr_20356_20389[1] = 2);
return cljs.core.constant$keyword$234;
} else
{if((state_val_20342 === 11))
{var inst_20303 = (state_20341[10]);var inst_20306 = cljs.core.empty_QMARK_(inst_20303);var state_20341__$1 = state_20341;if(inst_20306)
{var statearr_20357_20390 = state_20341__$1;(statearr_20357_20390[1] = 13);
} else
{var statearr_20358_20391 = state_20341__$1;(statearr_20358_20391[1] = 14);
}
return cljs.core.constant$keyword$234;
} else
{if((state_val_20342 === 12))
{var inst_20323 = (state_20341[2]);var state_20341__$1 = state_20341;var statearr_20359_20392 = state_20341__$1;(statearr_20359_20392[2] = inst_20323);
(statearr_20359_20392[1] = 10);
return cljs.core.constant$keyword$234;
} else
{if((state_val_20342 === 13))
{var inst_20304 = (state_20341[9]);var state_20341__$1 = state_20341;var statearr_20360_20393 = state_20341__$1;(statearr_20360_20393[2] = inst_20304);
(statearr_20360_20393[1] = 15);
return cljs.core.constant$keyword$234;
} else
{if((state_val_20342 === 14))
{var inst_20303 = (state_20341[10]);var inst_20309 = cljs.core.rest(inst_20303);var inst_20310 = cljs.core.first(inst_20303);var state_20341__$1 = (function (){var statearr_20361 = state_20341;(statearr_20361[12] = inst_20309);
return statearr_20361;
})();if(cljs.core.truth_(inst_20310))
{var statearr_20362_20394 = state_20341__$1;(statearr_20362_20394[1] = 16);
} else
{var statearr_20363_20395 = state_20341__$1;(statearr_20363_20395[1] = 17);
}
return cljs.core.constant$keyword$234;
} else
{if((state_val_20342 === 15))
{var inst_20321 = (state_20341[2]);var state_20341__$1 = state_20341;var statearr_20364_20396 = state_20341__$1;(statearr_20364_20396[2] = inst_20321);
(statearr_20364_20396[1] = 12);
return cljs.core.constant$keyword$234;
} else
{if((state_val_20342 === 16))
{var inst_20303 = (state_20341[10]);var inst_20312 = cljs.core.first(inst_20303);var state_20341__$1 = state_20341;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20341__$1,19,inst_20312);
} else
{if((state_val_20342 === 17))
{var state_20341__$1 = state_20341;var statearr_20365_20397 = state_20341__$1;(statearr_20365_20397[2] = null);
(statearr_20365_20397[1] = 18);
return cljs.core.constant$keyword$234;
} else
{if((state_val_20342 === 18))
{var inst_20304 = (state_20341[9]);var inst_20309 = (state_20341[12]);var inst_20317 = (state_20341[2]);var inst_20318 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(inst_20304,inst_20317);var inst_20303 = inst_20309;var inst_20304__$1 = inst_20318;var state_20341__$1 = (function (){var statearr_20366 = state_20341;(statearr_20366[9] = inst_20304__$1);
(statearr_20366[10] = inst_20303);
return statearr_20366;
})();var statearr_20367_20398 = state_20341__$1;(statearr_20367_20398[2] = null);
(statearr_20367_20398[1] = 11);
return cljs.core.constant$keyword$234;
} else
{if((state_val_20342 === 19))
{var inst_20314 = (state_20341[2]);var state_20341__$1 = state_20341;var statearr_20368_20399 = state_20341__$1;(statearr_20368_20399[2] = inst_20314);
(statearr_20368_20399[1] = 18);
return cljs.core.constant$keyword$234;
} else
{if((state_val_20342 === 20))
{var inst_20299 = (state_20341[7]);var state_20341__$1 = state_20341;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20341__$1,23,inst_20299);
} else
{if((state_val_20342 === 21))
{var state_20341__$1 = state_20341;var statearr_20369_20400 = state_20341__$1;(statearr_20369_20400[2] = null);
(statearr_20369_20400[1] = 22);
return cljs.core.constant$keyword$234;
} else
{if((state_val_20342 === 22))
{var inst_20330 = (state_20341[2]);var state_20341__$1 = state_20341;var statearr_20370_20401 = state_20341__$1;(statearr_20370_20401[2] = inst_20330);
(statearr_20370_20401[1] = 10);
return cljs.core.constant$keyword$234;
} else
{if((state_val_20342 === 23))
{var inst_20327 = (state_20341[2]);var state_20341__$1 = state_20341;var statearr_20371_20402 = state_20341__$1;(statearr_20371_20402[2] = inst_20327);
(statearr_20371_20402[1] = 22);
return cljs.core.constant$keyword$234;
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
var state_machine__5507__auto____0 = (function (){var statearr_20375 = [null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_20375[0] = state_machine__5507__auto__);
(statearr_20375[1] = 1);
return statearr_20375;
});
var state_machine__5507__auto____1 = (function (state_20341){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_20341);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$234))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e20376){if((e20376 instanceof Object))
{var ex__5510__auto__ = e20376;var statearr_20377_20403 = state_20341;(statearr_20377_20403[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_20341);
return cljs.core.constant$keyword$234;
} else
{if(cljs.core.constant$keyword$223)
{throw e20376;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$234))
{{
var G__20404 = state_20341;
state_20341 = G__20404;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_20341){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_20341);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_20378 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_20378[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_20378;
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
var G__20407__delegate = function (req_args){var temp__4090__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(request_handler,req_args);if(cljs.core.truth_(temp__4090__auto__))
{var r = temp__4090__auto__;var rseq = ((cljs.core.sequential_QMARK_(r))?r:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [r], null));var vec__20406 = rseq;var rcomm = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20406,0,null);var result_handler_args = cljs.core.nthnext(vec__20406,1);return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(ocomm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rcomm,result_handler_args], null));
} else
{return null;
}
};
var G__20407 = function (var_args){
var req_args = null;if (arguments.length > 0) {
  req_args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__20407__delegate.call(this,req_args);};
G__20407.cljs$lang$maxFixedArity = 0;
G__20407.cljs$lang$applyTo = (function (arglist__20408){
var req_args = cljs.core.seq(arglist__20408);
return G__20407__delegate(req_args);
});
G__20407.cljs$core$IFn$_invoke$arity$variadic = G__20407__delegate;
return G__20407;
})()
;
});
/**
* @param {...*} var_args
*/
clustermap.api.log_api = (function() { 
var log_api__delegate = function (f,args){var ch = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,args);var c__5521__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_20426){var state_val_20427 = (state_20426[1]);if((state_val_20427 === 2))
{var inst_20423 = (state_20426[2]);var inst_20424 = console.log(inst_20423);var state_20426__$1 = state_20426;return cljs.core.async.impl.ioc_helpers.return_chan(state_20426__$1,inst_20424);
} else
{if((state_val_20427 === 1))
{var state_20426__$1 = state_20426;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20426__$1,2,ch);
} else
{return null;
}
}
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_20431 = [null,null,null,null,null,null,null];(statearr_20431[0] = state_machine__5507__auto__);
(statearr_20431[1] = 1);
return statearr_20431;
});
var state_machine__5507__auto____1 = (function (state_20426){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_20426);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$234))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e20432){if((e20432 instanceof Object))
{var ex__5510__auto__ = e20432;var statearr_20433_20435 = state_20426;(statearr_20433_20435[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_20426);
return cljs.core.constant$keyword$234;
} else
{if(cljs.core.constant$keyword$223)
{throw e20432;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$234))
{{
var G__20436 = state_20426;
state_20426 = G__20436;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_20426){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_20426);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_20434 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_20434[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_20434;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5523__auto__);
}));
return c__5521__auto__;
};
var log_api = function (f,var_args){
var args = null;if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return log_api__delegate.call(this,f,args);};
log_api.cljs$lang$maxFixedArity = 1;
log_api.cljs$lang$applyTo = (function (arglist__20437){
var f = cljs.core.first(arglist__20437);
var args = cljs.core.rest(arglist__20437);
return log_api__delegate(f,args);
});
log_api.cljs$core$IFn$_invoke$arity$variadic = log_api__delegate;
return log_api;
})()
;
clustermap.api.map_json_params = (function map_json_params(m){return clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__20440){var vec__20441 = p__20440;var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20441,0,null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20441,1,null);return [cljs.core.str(cljs.core.name(k)),cljs.core.str("="),cljs.core.str(JSON.stringify(cljs.core.clj__GT_js(v)))].join('');
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
boundarylines.cljs$lang$applyTo = (function (arglist__20442){
var id = cljs.core.first(arglist__20442);
arglist__20442 = cljs.core.next(arglist__20442);
var tolerance = cljs.core.first(arglist__20442);
var opts = cljs.core.rest(arglist__20442);
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
boundaryline_collection_index.cljs$lang$applyTo = (function (arglist__20443){
var id = cljs.core.first(arglist__20443);
var opts = cljs.core.rest(arglist__20443);
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
var constituencies__delegate = function (p__20444){var vec__20446 = p__20444;var type_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20446,0,null);return clustermap.api.GET.cljs$core$IFn$_invoke$arity$variadic("/api/",cljs.core.array_seq([clustermap.api.api_prefix,"/constituencies?",clustermap.api.map_json_params(type_ids)], 0));
};
var constituencies = function (var_args){
var p__20444 = null;if (arguments.length > 0) {
  p__20444 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return constituencies__delegate.call(this,p__20444);};
constituencies.cljs$lang$maxFixedArity = 0;
constituencies.cljs$lang$applyTo = (function (arglist__20447){
var p__20444 = cljs.core.seq(arglist__20447);
return constituencies__delegate(p__20444);
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
var portfolio_companies__delegate = function (p__20448){var vec__20450 = p__20448;var type_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20450,0,null);var type_ids__$1 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$249,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$250,"desc"], null)], null)], 0));return clustermap.api.GET([cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/portfolio-companies?"),cljs.core.str(clustermap.api.map_json_params(type_ids__$1))].join(''));
};
var portfolio_companies = function (var_args){
var p__20448 = null;if (arguments.length > 0) {
  p__20448 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_companies__delegate.call(this,p__20448);};
portfolio_companies.cljs$lang$maxFixedArity = 0;
portfolio_companies.cljs$lang$applyTo = (function (arglist__20451){
var p__20448 = cljs.core.seq(arglist__20451);
return portfolio_companies__delegate(p__20448);
});
portfolio_companies.cljs$core$IFn$_invoke$arity$variadic = portfolio_companies__delegate;
return portfolio_companies;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_stats = (function() { 
var portfolio_company_stats__delegate = function (p__20452){var vec__20454 = p__20452;var type_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20454,0,null);return clustermap.api.GET([cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/portfolio-company-stats?"),cljs.core.str(clustermap.api.map_json_params(type_ids))].join(''));
};
var portfolio_company_stats = function (var_args){
var p__20452 = null;if (arguments.length > 0) {
  p__20452 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_stats__delegate.call(this,p__20452);};
portfolio_company_stats.cljs$lang$maxFixedArity = 0;
portfolio_company_stats.cljs$lang$applyTo = (function (arglist__20455){
var p__20452 = cljs.core.seq(arglist__20455);
return portfolio_company_stats__delegate(p__20452);
});
portfolio_company_stats.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_stats__delegate;
return portfolio_company_stats;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_account_stats = (function() { 
var portfolio_company_account_stats__delegate = function (p__20456){var vec__20458 = p__20456;var type_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20458,0,null);return clustermap.api.GET([cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/portfolio-company-account-stats?"),cljs.core.str(clustermap.api.map_json_params(type_ids))].join(''));
};
var portfolio_company_account_stats = function (var_args){
var p__20456 = null;if (arguments.length > 0) {
  p__20456 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_account_stats__delegate.call(this,p__20456);};
portfolio_company_account_stats.cljs$lang$maxFixedArity = 0;
portfolio_company_account_stats.cljs$lang$applyTo = (function (arglist__20459){
var p__20456 = cljs.core.seq(arglist__20459);
return portfolio_company_account_stats__delegate(p__20456);
});
portfolio_company_account_stats.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_account_stats__delegate;
return portfolio_company_account_stats;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_sites = (function() { 
var portfolio_company_sites__delegate = function (p__20460){var vec__20462 = p__20460;var type_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20462,0,null);var type_ids__$1 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$251,100,cljs.core.constant$keyword$249,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$250,"desc"], null)], null)], null),type_ids], 0));return clustermap.api.GET([cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/portfolio-company-sites?"),cljs.core.str(clustermap.api.map_json_params(type_ids__$1))].join(''));
};
var portfolio_company_sites = function (var_args){
var p__20460 = null;if (arguments.length > 0) {
  p__20460 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_sites__delegate.call(this,p__20460);};
portfolio_company_sites.cljs$lang$maxFixedArity = 0;
portfolio_company_sites.cljs$lang$applyTo = (function (arglist__20463){
var p__20460 = cljs.core.seq(arglist__20463);
return portfolio_company_sites__delegate(p__20460);
});
portfolio_company_sites.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_sites__delegate;
return portfolio_company_sites;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_locations = (function() { 
var portfolio_company_locations__delegate = function (p__20464){var vec__20466 = p__20464;var type_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20466,0,null);return clustermap.api.GET([cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/portfolio-company-locations?"),cljs.core.str(clustermap.api.map_json_params(type_ids))].join(''));
};
var portfolio_company_locations = function (var_args){
var p__20464 = null;if (arguments.length > 0) {
  p__20464 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_locations__delegate.call(this,p__20464);};
portfolio_company_locations.cljs$lang$maxFixedArity = 0;
portfolio_company_locations.cljs$lang$applyTo = (function (arglist__20467){
var p__20464 = cljs.core.seq(arglist__20467);
return portfolio_company_locations__delegate(p__20464);
});
portfolio_company_locations.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_locations__delegate;
return portfolio_company_locations;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_site_stats = (function() { 
var portfolio_company_site_stats__delegate = function (p__20468){var vec__20470 = p__20468;var type_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20470,0,null);return clustermap.api.GET([cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/portfolio-company-site-stats?"),cljs.core.str(clustermap.api.map_json_params(type_ids))].join(''));
};
var portfolio_company_site_stats = function (var_args){
var p__20468 = null;if (arguments.length > 0) {
  p__20468 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_site_stats__delegate.call(this,p__20468);};
portfolio_company_site_stats.cljs$lang$maxFixedArity = 0;
portfolio_company_site_stats.cljs$lang$applyTo = (function (arglist__20471){
var p__20468 = cljs.core.seq(arglist__20471);
return portfolio_company_site_stats__delegate(p__20468);
});
portfolio_company_site_stats.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_site_stats__delegate;
return portfolio_company_site_stats;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_site_account_timelines = (function() { 
var portfolio_company_site_account_timelines__delegate = function (p__20472){var vec__20474 = p__20472;var type_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20474,0,null);return clustermap.api.GET([cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/portfolio-company-site-account-timelines?"),cljs.core.str(clustermap.api.map_json_params(type_ids))].join(''));
};
var portfolio_company_site_account_timelines = function (var_args){
var p__20472 = null;if (arguments.length > 0) {
  p__20472 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_site_account_timelines__delegate.call(this,p__20472);};
portfolio_company_site_account_timelines.cljs$lang$maxFixedArity = 0;
portfolio_company_site_account_timelines.cljs$lang$applyTo = (function (arglist__20475){
var p__20472 = cljs.core.seq(arglist__20475);
return portfolio_company_site_account_timelines__delegate(p__20472);
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
var investor_comapnies__delegate = function (p__20476){var vec__20478 = p__20476;var type_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20478,0,null);return clustermap.api.GET([cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/investor-companies?"),cljs.core.str(clustermap.api.map_json_params(type_ids))].join(''));
};
var investor_comapnies = function (var_args){
var p__20476 = null;if (arguments.length > 0) {
  p__20476 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return investor_comapnies__delegate.call(this,p__20476);};
investor_comapnies.cljs$lang$maxFixedArity = 0;
investor_comapnies.cljs$lang$applyTo = (function (arglist__20479){
var p__20476 = cljs.core.seq(arglist__20479);
return investor_comapnies__delegate(p__20476);
});
investor_comapnies.cljs$core$IFn$_invoke$arity$variadic = investor_comapnies__delegate;
return investor_comapnies;
})()
;
