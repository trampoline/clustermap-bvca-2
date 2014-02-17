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
var GET__delegate = function (url,p__20229){var map__20231 = p__20229;var map__20231__$1 = ((cljs.core.seq_QMARK_(map__20231))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20231):map__20231);var raw = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20231__$1,cljs.core.constant$keyword$249);var comm = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);goog.net.XhrIo.send(url,(function (event){cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,(function (d){if(cljs.core.truth_(raw))
{return d;
} else
{return cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(d,cljs.core.array_seq([cljs.core.constant$keyword$230,true], 0));
}
}).call(null,((JSON.parse.cljs$core$IFn$_invoke$arity$1 ? JSON.parse.cljs$core$IFn$_invoke$arity$1(event.target.getResponseText()) : JSON.parse.call(null,event.target.getResponseText()))["data"])));
return cljs.core.async.close_BANG_(comm);
}));
return comm;
};
var GET = function (url,var_args){
var p__20229 = null;if (arguments.length > 1) {
  p__20229 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return GET__delegate.call(this,url,p__20229);};
GET.cljs$lang$maxFixedArity = 1;
GET.cljs$lang$applyTo = (function (arglist__20232){
var url = cljs.core.first(arglist__20232);
var p__20229 = cljs.core.rest(arglist__20232);
return GET__delegate(url,p__20229);
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
clustermap.api.ordered_api_results = (function ordered_api_results(ocomm,handler){var c__5521__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_20365){var state_val_20366 = (state_20365[1]);if((state_val_20366 === 1))
{var state_20365__$1 = state_20365;var statearr_20367_20403 = state_20365__$1;(statearr_20367_20403[2] = null);
(statearr_20367_20403[1] = 2);
return cljs.core.constant$keyword$235;
} else
{if((state_val_20366 === 2))
{var state_20365__$1 = state_20365;if(true)
{var statearr_20368_20404 = state_20365__$1;(statearr_20368_20404[1] = 4);
} else
{var statearr_20369_20405 = state_20365__$1;(statearr_20369_20405[1] = 5);
}
return cljs.core.constant$keyword$235;
} else
{if((state_val_20366 === 3))
{var inst_20363 = (state_20365[2]);var state_20365__$1 = state_20365;return cljs.core.async.impl.ioc_helpers.return_chan(state_20365__$1,inst_20363);
} else
{if((state_val_20366 === 4))
{var state_20365__$1 = state_20365;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20365__$1,7,ocomm);
} else
{if((state_val_20366 === 5))
{var state_20365__$1 = state_20365;var statearr_20370_20406 = state_20365__$1;(statearr_20370_20406[2] = null);
(statearr_20370_20406[1] = 6);
return cljs.core.constant$keyword$235;
} else
{if((state_val_20366 === 6))
{var inst_20361 = (state_20365[2]);var state_20365__$1 = state_20365;var statearr_20371_20407 = state_20365__$1;(statearr_20371_20407[2] = inst_20361);
(statearr_20371_20407[1] = 3);
return cljs.core.constant$keyword$235;
} else
{if((state_val_20366 === 7))
{var inst_20323 = (state_20365[7]);var inst_20322 = (state_20365[2]);var inst_20323__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_20322,0,null);var inst_20324 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_20322,1,null);var inst_20325 = cljs.core.sequential_QMARK_(inst_20323__$1);var state_20365__$1 = (function (){var statearr_20372 = state_20365;(statearr_20372[7] = inst_20323__$1);
(statearr_20372[8] = inst_20324);
return statearr_20372;
})();if(inst_20325)
{var statearr_20373_20408 = state_20365__$1;(statearr_20373_20408[1] = 8);
} else
{var statearr_20374_20409 = state_20365__$1;(statearr_20374_20409[1] = 9);
}
return cljs.core.constant$keyword$235;
} else
{if((state_val_20366 === 8))
{var inst_20323 = (state_20365[7]);var inst_20327 = inst_20323;var inst_20328 = cljs.core.PersistentVector.EMPTY;var state_20365__$1 = (function (){var statearr_20375 = state_20365;(statearr_20375[9] = inst_20327);
(statearr_20375[10] = inst_20328);
return statearr_20375;
})();var statearr_20376_20410 = state_20365__$1;(statearr_20376_20410[2] = null);
(statearr_20376_20410[1] = 11);
return cljs.core.constant$keyword$235;
} else
{if((state_val_20366 === 9))
{var inst_20323 = (state_20365[7]);var state_20365__$1 = state_20365;if(cljs.core.truth_(inst_20323))
{var statearr_20377_20411 = state_20365__$1;(statearr_20377_20411[1] = 20);
} else
{var statearr_20378_20412 = state_20365__$1;(statearr_20378_20412[1] = 21);
}
return cljs.core.constant$keyword$235;
} else
{if((state_val_20366 === 10))
{var inst_20324 = (state_20365[8]);var inst_20356 = (state_20365[2]);var inst_20357 = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(handler,inst_20356,inst_20324);var state_20365__$1 = (function (){var statearr_20379 = state_20365;(statearr_20379[11] = inst_20357);
return statearr_20379;
})();var statearr_20380_20413 = state_20365__$1;(statearr_20380_20413[2] = null);
(statearr_20380_20413[1] = 2);
return cljs.core.constant$keyword$235;
} else
{if((state_val_20366 === 11))
{var inst_20327 = (state_20365[9]);var inst_20330 = cljs.core.empty_QMARK_(inst_20327);var state_20365__$1 = state_20365;if(inst_20330)
{var statearr_20381_20414 = state_20365__$1;(statearr_20381_20414[1] = 13);
} else
{var statearr_20382_20415 = state_20365__$1;(statearr_20382_20415[1] = 14);
}
return cljs.core.constant$keyword$235;
} else
{if((state_val_20366 === 12))
{var inst_20347 = (state_20365[2]);var state_20365__$1 = state_20365;var statearr_20383_20416 = state_20365__$1;(statearr_20383_20416[2] = inst_20347);
(statearr_20383_20416[1] = 10);
return cljs.core.constant$keyword$235;
} else
{if((state_val_20366 === 13))
{var inst_20328 = (state_20365[10]);var state_20365__$1 = state_20365;var statearr_20384_20417 = state_20365__$1;(statearr_20384_20417[2] = inst_20328);
(statearr_20384_20417[1] = 15);
return cljs.core.constant$keyword$235;
} else
{if((state_val_20366 === 14))
{var inst_20327 = (state_20365[9]);var inst_20333 = cljs.core.rest(inst_20327);var inst_20334 = cljs.core.first(inst_20327);var state_20365__$1 = (function (){var statearr_20385 = state_20365;(statearr_20385[12] = inst_20333);
return statearr_20385;
})();if(cljs.core.truth_(inst_20334))
{var statearr_20386_20418 = state_20365__$1;(statearr_20386_20418[1] = 16);
} else
{var statearr_20387_20419 = state_20365__$1;(statearr_20387_20419[1] = 17);
}
return cljs.core.constant$keyword$235;
} else
{if((state_val_20366 === 15))
{var inst_20345 = (state_20365[2]);var state_20365__$1 = state_20365;var statearr_20388_20420 = state_20365__$1;(statearr_20388_20420[2] = inst_20345);
(statearr_20388_20420[1] = 12);
return cljs.core.constant$keyword$235;
} else
{if((state_val_20366 === 16))
{var inst_20327 = (state_20365[9]);var inst_20336 = cljs.core.first(inst_20327);var state_20365__$1 = state_20365;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20365__$1,19,inst_20336);
} else
{if((state_val_20366 === 17))
{var state_20365__$1 = state_20365;var statearr_20389_20421 = state_20365__$1;(statearr_20389_20421[2] = null);
(statearr_20389_20421[1] = 18);
return cljs.core.constant$keyword$235;
} else
{if((state_val_20366 === 18))
{var inst_20328 = (state_20365[10]);var inst_20333 = (state_20365[12]);var inst_20341 = (state_20365[2]);var inst_20342 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(inst_20328,inst_20341);var inst_20327 = inst_20333;var inst_20328__$1 = inst_20342;var state_20365__$1 = (function (){var statearr_20390 = state_20365;(statearr_20390[9] = inst_20327);
(statearr_20390[10] = inst_20328__$1);
return statearr_20390;
})();var statearr_20391_20422 = state_20365__$1;(statearr_20391_20422[2] = null);
(statearr_20391_20422[1] = 11);
return cljs.core.constant$keyword$235;
} else
{if((state_val_20366 === 19))
{var inst_20338 = (state_20365[2]);var state_20365__$1 = state_20365;var statearr_20392_20423 = state_20365__$1;(statearr_20392_20423[2] = inst_20338);
(statearr_20392_20423[1] = 18);
return cljs.core.constant$keyword$235;
} else
{if((state_val_20366 === 20))
{var inst_20323 = (state_20365[7]);var state_20365__$1 = state_20365;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20365__$1,23,inst_20323);
} else
{if((state_val_20366 === 21))
{var state_20365__$1 = state_20365;var statearr_20393_20424 = state_20365__$1;(statearr_20393_20424[2] = null);
(statearr_20393_20424[1] = 22);
return cljs.core.constant$keyword$235;
} else
{if((state_val_20366 === 22))
{var inst_20354 = (state_20365[2]);var state_20365__$1 = state_20365;var statearr_20394_20425 = state_20365__$1;(statearr_20394_20425[2] = inst_20354);
(statearr_20394_20425[1] = 10);
return cljs.core.constant$keyword$235;
} else
{if((state_val_20366 === 23))
{var inst_20351 = (state_20365[2]);var state_20365__$1 = state_20365;var statearr_20395_20426 = state_20365__$1;(statearr_20395_20426[2] = inst_20351);
(statearr_20395_20426[1] = 22);
return cljs.core.constant$keyword$235;
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
var state_machine__5507__auto____0 = (function (){var statearr_20399 = [null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_20399[0] = state_machine__5507__auto__);
(statearr_20399[1] = 1);
return statearr_20399;
});
var state_machine__5507__auto____1 = (function (state_20365){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_20365);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$235))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e20400){if((e20400 instanceof Object))
{var ex__5510__auto__ = e20400;var statearr_20401_20427 = state_20365;(statearr_20401_20427[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_20365);
return cljs.core.constant$keyword$235;
} else
{if(cljs.core.constant$keyword$224)
{throw e20400;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$235))
{{
var G__20428 = state_20365;
state_20365 = G__20428;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_20365){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_20365);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_20402 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_20402[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_20402;
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
var G__20431__delegate = function (req_args){var temp__4090__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(request_handler,req_args);if(cljs.core.truth_(temp__4090__auto__))
{var r = temp__4090__auto__;var rseq = ((cljs.core.sequential_QMARK_(r))?r:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [r], null));var vec__20430 = rseq;var rcomm = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20430,0,null);var result_handler_args = cljs.core.nthnext(vec__20430,1);return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(ocomm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rcomm,result_handler_args], null));
} else
{return null;
}
};
var G__20431 = function (var_args){
var req_args = null;if (arguments.length > 0) {
  req_args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__20431__delegate.call(this,req_args);};
G__20431.cljs$lang$maxFixedArity = 0;
G__20431.cljs$lang$applyTo = (function (arglist__20432){
var req_args = cljs.core.seq(arglist__20432);
return G__20431__delegate(req_args);
});
G__20431.cljs$core$IFn$_invoke$arity$variadic = G__20431__delegate;
return G__20431;
})()
;
});
/**
* @param {...*} var_args
*/
clustermap.api.log_api = (function() { 
var log_api__delegate = function (f,args){var ch = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,args);var c__5521__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_20450){var state_val_20451 = (state_20450[1]);if((state_val_20451 === 2))
{var inst_20447 = (state_20450[2]);var inst_20448 = console.log(inst_20447);var state_20450__$1 = state_20450;return cljs.core.async.impl.ioc_helpers.return_chan(state_20450__$1,inst_20448);
} else
{if((state_val_20451 === 1))
{var state_20450__$1 = state_20450;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20450__$1,2,ch);
} else
{return null;
}
}
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_20455 = [null,null,null,null,null,null,null];(statearr_20455[0] = state_machine__5507__auto__);
(statearr_20455[1] = 1);
return statearr_20455;
});
var state_machine__5507__auto____1 = (function (state_20450){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_20450);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$235))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e20456){if((e20456 instanceof Object))
{var ex__5510__auto__ = e20456;var statearr_20457_20459 = state_20450;(statearr_20457_20459[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_20450);
return cljs.core.constant$keyword$235;
} else
{if(cljs.core.constant$keyword$224)
{throw e20456;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$235))
{{
var G__20460 = state_20450;
state_20450 = G__20460;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_20450){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_20450);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_20458 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_20458[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_20458;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5523__auto__);
}));
return c__5521__auto__;
};
var log_api = function (f,var_args){
var args = null;if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return log_api__delegate.call(this,f,args);};
log_api.cljs$lang$maxFixedArity = 1;
log_api.cljs$lang$applyTo = (function (arglist__20461){
var f = cljs.core.first(arglist__20461);
var args = cljs.core.rest(arglist__20461);
return log_api__delegate(f,args);
});
log_api.cljs$core$IFn$_invoke$arity$variadic = log_api__delegate;
return log_api;
})()
;
clustermap.api.map_json_params = (function map_json_params(m){return clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__20464){var vec__20465 = p__20464;var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20465,0,null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20465,1,null);return [cljs.core.str(cljs.core.name(k)),cljs.core.str("="),cljs.core.str(JSON.stringify(cljs.core.clj__GT_js(v)))].join('');
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
boundarylines.cljs$lang$applyTo = (function (arglist__20466){
var id = cljs.core.first(arglist__20466);
arglist__20466 = cljs.core.next(arglist__20466);
var tolerance = cljs.core.first(arglist__20466);
var opts = cljs.core.rest(arglist__20466);
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
boundaryline_collection_index.cljs$lang$applyTo = (function (arglist__20467){
var id = cljs.core.first(arglist__20467);
var opts = cljs.core.rest(arglist__20467);
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
var constituencies__delegate = function (p__20468){var vec__20470 = p__20468;var type_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20470,0,null);return clustermap.api.GET.cljs$core$IFn$_invoke$arity$variadic("/api/",cljs.core.array_seq([clustermap.api.api_prefix,"/constituencies?",clustermap.api.map_json_params(type_ids)], 0));
};
var constituencies = function (var_args){
var p__20468 = null;if (arguments.length > 0) {
  p__20468 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return constituencies__delegate.call(this,p__20468);};
constituencies.cljs$lang$maxFixedArity = 0;
constituencies.cljs$lang$applyTo = (function (arglist__20471){
var p__20468 = cljs.core.seq(arglist__20471);
return constituencies__delegate(p__20468);
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
var portfolio_companies__delegate = function (p__20472){var vec__20474 = p__20472;var type_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20474,0,null);var type_ids__$1 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$250,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$251,"desc"], null)], null)], 0));return clustermap.api.GET([cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/portfolio-companies?"),cljs.core.str(clustermap.api.map_json_params(type_ids__$1))].join(''));
};
var portfolio_companies = function (var_args){
var p__20472 = null;if (arguments.length > 0) {
  p__20472 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_companies__delegate.call(this,p__20472);};
portfolio_companies.cljs$lang$maxFixedArity = 0;
portfolio_companies.cljs$lang$applyTo = (function (arglist__20475){
var p__20472 = cljs.core.seq(arglist__20475);
return portfolio_companies__delegate(p__20472);
});
portfolio_companies.cljs$core$IFn$_invoke$arity$variadic = portfolio_companies__delegate;
return portfolio_companies;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_stats = (function() { 
var portfolio_company_stats__delegate = function (p__20476){var vec__20478 = p__20476;var type_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20478,0,null);return clustermap.api.GET([cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/portfolio-company-stats?"),cljs.core.str(clustermap.api.map_json_params(type_ids))].join(''));
};
var portfolio_company_stats = function (var_args){
var p__20476 = null;if (arguments.length > 0) {
  p__20476 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_stats__delegate.call(this,p__20476);};
portfolio_company_stats.cljs$lang$maxFixedArity = 0;
portfolio_company_stats.cljs$lang$applyTo = (function (arglist__20479){
var p__20476 = cljs.core.seq(arglist__20479);
return portfolio_company_stats__delegate(p__20476);
});
portfolio_company_stats.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_stats__delegate;
return portfolio_company_stats;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_account_stats = (function() { 
var portfolio_company_account_stats__delegate = function (p__20480){var vec__20482 = p__20480;var type_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20482,0,null);return clustermap.api.GET([cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/portfolio-company-account-stats?"),cljs.core.str(clustermap.api.map_json_params(type_ids))].join(''));
};
var portfolio_company_account_stats = function (var_args){
var p__20480 = null;if (arguments.length > 0) {
  p__20480 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_account_stats__delegate.call(this,p__20480);};
portfolio_company_account_stats.cljs$lang$maxFixedArity = 0;
portfolio_company_account_stats.cljs$lang$applyTo = (function (arglist__20483){
var p__20480 = cljs.core.seq(arglist__20483);
return portfolio_company_account_stats__delegate(p__20480);
});
portfolio_company_account_stats.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_account_stats__delegate;
return portfolio_company_account_stats;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_sites = (function() { 
var portfolio_company_sites__delegate = function (p__20484){var vec__20486 = p__20484;var type_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20486,0,null);var type_ids__$1 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$252,100,cljs.core.constant$keyword$250,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$251,"desc"], null)], null)], null),type_ids], 0));return clustermap.api.GET([cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/portfolio-company-sites?"),cljs.core.str(clustermap.api.map_json_params(type_ids__$1))].join(''));
};
var portfolio_company_sites = function (var_args){
var p__20484 = null;if (arguments.length > 0) {
  p__20484 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_sites__delegate.call(this,p__20484);};
portfolio_company_sites.cljs$lang$maxFixedArity = 0;
portfolio_company_sites.cljs$lang$applyTo = (function (arglist__20487){
var p__20484 = cljs.core.seq(arglist__20487);
return portfolio_company_sites__delegate(p__20484);
});
portfolio_company_sites.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_sites__delegate;
return portfolio_company_sites;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_locations = (function() { 
var portfolio_company_locations__delegate = function (p__20488){var vec__20490 = p__20488;var type_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20490,0,null);return clustermap.api.GET([cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/portfolio-company-locations?"),cljs.core.str(clustermap.api.map_json_params(type_ids))].join(''));
};
var portfolio_company_locations = function (var_args){
var p__20488 = null;if (arguments.length > 0) {
  p__20488 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_locations__delegate.call(this,p__20488);};
portfolio_company_locations.cljs$lang$maxFixedArity = 0;
portfolio_company_locations.cljs$lang$applyTo = (function (arglist__20491){
var p__20488 = cljs.core.seq(arglist__20491);
return portfolio_company_locations__delegate(p__20488);
});
portfolio_company_locations.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_locations__delegate;
return portfolio_company_locations;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_site_stats = (function() { 
var portfolio_company_site_stats__delegate = function (p__20492){var vec__20494 = p__20492;var type_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20494,0,null);return clustermap.api.GET([cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/portfolio-company-site-stats?"),cljs.core.str(clustermap.api.map_json_params(type_ids))].join(''));
};
var portfolio_company_site_stats = function (var_args){
var p__20492 = null;if (arguments.length > 0) {
  p__20492 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_site_stats__delegate.call(this,p__20492);};
portfolio_company_site_stats.cljs$lang$maxFixedArity = 0;
portfolio_company_site_stats.cljs$lang$applyTo = (function (arglist__20495){
var p__20492 = cljs.core.seq(arglist__20495);
return portfolio_company_site_stats__delegate(p__20492);
});
portfolio_company_site_stats.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_site_stats__delegate;
return portfolio_company_site_stats;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_site_account_timelines = (function() { 
var portfolio_company_site_account_timelines__delegate = function (p__20496){var vec__20498 = p__20496;var type_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20498,0,null);return clustermap.api.GET([cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/portfolio-company-site-account-timelines?"),cljs.core.str(clustermap.api.map_json_params(type_ids))].join(''));
};
var portfolio_company_site_account_timelines = function (var_args){
var p__20496 = null;if (arguments.length > 0) {
  p__20496 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_site_account_timelines__delegate.call(this,p__20496);};
portfolio_company_site_account_timelines.cljs$lang$maxFixedArity = 0;
portfolio_company_site_account_timelines.cljs$lang$applyTo = (function (arglist__20499){
var p__20496 = cljs.core.seq(arglist__20499);
return portfolio_company_site_account_timelines__delegate(p__20496);
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
var investor_comapnies__delegate = function (p__20500){var vec__20502 = p__20500;var type_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20502,0,null);return clustermap.api.GET([cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/investor-companies?"),cljs.core.str(clustermap.api.map_json_params(type_ids))].join(''));
};
var investor_comapnies = function (var_args){
var p__20500 = null;if (arguments.length > 0) {
  p__20500 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return investor_comapnies__delegate.call(this,p__20500);};
investor_comapnies.cljs$lang$maxFixedArity = 0;
investor_comapnies.cljs$lang$applyTo = (function (arglist__20503){
var p__20500 = cljs.core.seq(arglist__20503);
return investor_comapnies__delegate(p__20500);
});
investor_comapnies.cljs$core$IFn$_invoke$arity$variadic = investor_comapnies__delegate;
return investor_comapnies;
})()
;
