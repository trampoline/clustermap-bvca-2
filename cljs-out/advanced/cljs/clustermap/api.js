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
var GET__delegate = function (url,p__20316){var map__20318 = p__20316;var map__20318__$1 = ((cljs.core.seq_QMARK_(map__20318))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20318):map__20318);var raw = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20318__$1,cljs.core.constant$keyword$255);var comm = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);goog.net.XhrIo.send(url,(function (event){cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,(function (d){if(cljs.core.truth_(raw))
{return d;
} else
{return cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(d,cljs.core.array_seq([cljs.core.constant$keyword$236,true], 0));
}
}).call(null,((JSON.parse.cljs$core$IFn$_invoke$arity$1 ? JSON.parse.cljs$core$IFn$_invoke$arity$1(event.target.getResponseText()) : JSON.parse.call(null,event.target.getResponseText()))["data"])));
return cljs.core.async.close_BANG_(comm);
}));
return comm;
};
var GET = function (url,var_args){
var p__20316 = null;if (arguments.length > 1) {
  p__20316 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return GET__delegate.call(this,url,p__20316);};
GET.cljs$lang$maxFixedArity = 1;
GET.cljs$lang$applyTo = (function (arglist__20319){
var url = cljs.core.first(arglist__20319);
var p__20316 = cljs.core.rest(arglist__20319);
return GET__delegate(url,p__20316);
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
clustermap.api.ordered_api_results = (function ordered_api_results(ocomm,handler){var c__5521__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_20452){var state_val_20453 = (state_20452[1]);if((state_val_20453 === 1))
{var state_20452__$1 = state_20452;var statearr_20454_20490 = state_20452__$1;(statearr_20454_20490[2] = null);
(statearr_20454_20490[1] = 2);
return cljs.core.constant$keyword$241;
} else
{if((state_val_20453 === 2))
{var state_20452__$1 = state_20452;if(true)
{var statearr_20455_20491 = state_20452__$1;(statearr_20455_20491[1] = 4);
} else
{var statearr_20456_20492 = state_20452__$1;(statearr_20456_20492[1] = 5);
}
return cljs.core.constant$keyword$241;
} else
{if((state_val_20453 === 3))
{var inst_20450 = (state_20452[2]);var state_20452__$1 = state_20452;return cljs.core.async.impl.ioc_helpers.return_chan(state_20452__$1,inst_20450);
} else
{if((state_val_20453 === 4))
{var state_20452__$1 = state_20452;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20452__$1,7,ocomm);
} else
{if((state_val_20453 === 5))
{var state_20452__$1 = state_20452;var statearr_20457_20493 = state_20452__$1;(statearr_20457_20493[2] = null);
(statearr_20457_20493[1] = 6);
return cljs.core.constant$keyword$241;
} else
{if((state_val_20453 === 6))
{var inst_20448 = (state_20452[2]);var state_20452__$1 = state_20452;var statearr_20458_20494 = state_20452__$1;(statearr_20458_20494[2] = inst_20448);
(statearr_20458_20494[1] = 3);
return cljs.core.constant$keyword$241;
} else
{if((state_val_20453 === 7))
{var inst_20410 = (state_20452[7]);var inst_20409 = (state_20452[2]);var inst_20410__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_20409,0,null);var inst_20411 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_20409,1,null);var inst_20412 = cljs.core.sequential_QMARK_(inst_20410__$1);var state_20452__$1 = (function (){var statearr_20459 = state_20452;(statearr_20459[7] = inst_20410__$1);
(statearr_20459[8] = inst_20411);
return statearr_20459;
})();if(inst_20412)
{var statearr_20460_20495 = state_20452__$1;(statearr_20460_20495[1] = 8);
} else
{var statearr_20461_20496 = state_20452__$1;(statearr_20461_20496[1] = 9);
}
return cljs.core.constant$keyword$241;
} else
{if((state_val_20453 === 8))
{var inst_20410 = (state_20452[7]);var inst_20414 = inst_20410;var inst_20415 = cljs.core.PersistentVector.EMPTY;var state_20452__$1 = (function (){var statearr_20462 = state_20452;(statearr_20462[9] = inst_20415);
(statearr_20462[10] = inst_20414);
return statearr_20462;
})();var statearr_20463_20497 = state_20452__$1;(statearr_20463_20497[2] = null);
(statearr_20463_20497[1] = 11);
return cljs.core.constant$keyword$241;
} else
{if((state_val_20453 === 9))
{var inst_20410 = (state_20452[7]);var state_20452__$1 = state_20452;if(cljs.core.truth_(inst_20410))
{var statearr_20464_20498 = state_20452__$1;(statearr_20464_20498[1] = 20);
} else
{var statearr_20465_20499 = state_20452__$1;(statearr_20465_20499[1] = 21);
}
return cljs.core.constant$keyword$241;
} else
{if((state_val_20453 === 10))
{var inst_20411 = (state_20452[8]);var inst_20443 = (state_20452[2]);var inst_20444 = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(handler,inst_20443,inst_20411);var state_20452__$1 = (function (){var statearr_20466 = state_20452;(statearr_20466[11] = inst_20444);
return statearr_20466;
})();var statearr_20467_20500 = state_20452__$1;(statearr_20467_20500[2] = null);
(statearr_20467_20500[1] = 2);
return cljs.core.constant$keyword$241;
} else
{if((state_val_20453 === 11))
{var inst_20414 = (state_20452[10]);var inst_20417 = cljs.core.empty_QMARK_(inst_20414);var state_20452__$1 = state_20452;if(inst_20417)
{var statearr_20468_20501 = state_20452__$1;(statearr_20468_20501[1] = 13);
} else
{var statearr_20469_20502 = state_20452__$1;(statearr_20469_20502[1] = 14);
}
return cljs.core.constant$keyword$241;
} else
{if((state_val_20453 === 12))
{var inst_20434 = (state_20452[2]);var state_20452__$1 = state_20452;var statearr_20470_20503 = state_20452__$1;(statearr_20470_20503[2] = inst_20434);
(statearr_20470_20503[1] = 10);
return cljs.core.constant$keyword$241;
} else
{if((state_val_20453 === 13))
{var inst_20415 = (state_20452[9]);var state_20452__$1 = state_20452;var statearr_20471_20504 = state_20452__$1;(statearr_20471_20504[2] = inst_20415);
(statearr_20471_20504[1] = 15);
return cljs.core.constant$keyword$241;
} else
{if((state_val_20453 === 14))
{var inst_20414 = (state_20452[10]);var inst_20420 = cljs.core.rest(inst_20414);var inst_20421 = cljs.core.first(inst_20414);var state_20452__$1 = (function (){var statearr_20472 = state_20452;(statearr_20472[12] = inst_20420);
return statearr_20472;
})();if(cljs.core.truth_(inst_20421))
{var statearr_20473_20505 = state_20452__$1;(statearr_20473_20505[1] = 16);
} else
{var statearr_20474_20506 = state_20452__$1;(statearr_20474_20506[1] = 17);
}
return cljs.core.constant$keyword$241;
} else
{if((state_val_20453 === 15))
{var inst_20432 = (state_20452[2]);var state_20452__$1 = state_20452;var statearr_20475_20507 = state_20452__$1;(statearr_20475_20507[2] = inst_20432);
(statearr_20475_20507[1] = 12);
return cljs.core.constant$keyword$241;
} else
{if((state_val_20453 === 16))
{var inst_20414 = (state_20452[10]);var inst_20423 = cljs.core.first(inst_20414);var state_20452__$1 = state_20452;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20452__$1,19,inst_20423);
} else
{if((state_val_20453 === 17))
{var state_20452__$1 = state_20452;var statearr_20476_20508 = state_20452__$1;(statearr_20476_20508[2] = null);
(statearr_20476_20508[1] = 18);
return cljs.core.constant$keyword$241;
} else
{if((state_val_20453 === 18))
{var inst_20415 = (state_20452[9]);var inst_20420 = (state_20452[12]);var inst_20428 = (state_20452[2]);var inst_20429 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(inst_20415,inst_20428);var inst_20414 = inst_20420;var inst_20415__$1 = inst_20429;var state_20452__$1 = (function (){var statearr_20477 = state_20452;(statearr_20477[9] = inst_20415__$1);
(statearr_20477[10] = inst_20414);
return statearr_20477;
})();var statearr_20478_20509 = state_20452__$1;(statearr_20478_20509[2] = null);
(statearr_20478_20509[1] = 11);
return cljs.core.constant$keyword$241;
} else
{if((state_val_20453 === 19))
{var inst_20425 = (state_20452[2]);var state_20452__$1 = state_20452;var statearr_20479_20510 = state_20452__$1;(statearr_20479_20510[2] = inst_20425);
(statearr_20479_20510[1] = 18);
return cljs.core.constant$keyword$241;
} else
{if((state_val_20453 === 20))
{var inst_20410 = (state_20452[7]);var state_20452__$1 = state_20452;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20452__$1,23,inst_20410);
} else
{if((state_val_20453 === 21))
{var state_20452__$1 = state_20452;var statearr_20480_20511 = state_20452__$1;(statearr_20480_20511[2] = null);
(statearr_20480_20511[1] = 22);
return cljs.core.constant$keyword$241;
} else
{if((state_val_20453 === 22))
{var inst_20441 = (state_20452[2]);var state_20452__$1 = state_20452;var statearr_20481_20512 = state_20452__$1;(statearr_20481_20512[2] = inst_20441);
(statearr_20481_20512[1] = 10);
return cljs.core.constant$keyword$241;
} else
{if((state_val_20453 === 23))
{var inst_20438 = (state_20452[2]);var state_20452__$1 = state_20452;var statearr_20482_20513 = state_20452__$1;(statearr_20482_20513[2] = inst_20438);
(statearr_20482_20513[1] = 22);
return cljs.core.constant$keyword$241;
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
var state_machine__5507__auto____0 = (function (){var statearr_20486 = [null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_20486[0] = state_machine__5507__auto__);
(statearr_20486[1] = 1);
return statearr_20486;
});
var state_machine__5507__auto____1 = (function (state_20452){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_20452);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$241))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e20487){if((e20487 instanceof Object))
{var ex__5510__auto__ = e20487;var statearr_20488_20514 = state_20452;(statearr_20488_20514[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_20452);
return cljs.core.constant$keyword$241;
} else
{if(cljs.core.constant$keyword$230)
{throw e20487;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$241))
{{
var G__20515 = state_20452;
state_20452 = G__20515;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_20452){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_20452);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_20489 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_20489[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_20489;
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
var G__20518__delegate = function (req_args){var temp__4090__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(request_handler,req_args);if(cljs.core.truth_(temp__4090__auto__))
{var r = temp__4090__auto__;var rseq = ((cljs.core.sequential_QMARK_(r))?r:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [r], null));var vec__20517 = rseq;var rcomm = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20517,0,null);var result_handler_args = cljs.core.nthnext(vec__20517,1);return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(ocomm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rcomm,result_handler_args], null));
} else
{return null;
}
};
var G__20518 = function (var_args){
var req_args = null;if (arguments.length > 0) {
  req_args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__20518__delegate.call(this,req_args);};
G__20518.cljs$lang$maxFixedArity = 0;
G__20518.cljs$lang$applyTo = (function (arglist__20519){
var req_args = cljs.core.seq(arglist__20519);
return G__20518__delegate(req_args);
});
G__20518.cljs$core$IFn$_invoke$arity$variadic = G__20518__delegate;
return G__20518;
})()
;
});
/**
* @param {...*} var_args
*/
clustermap.api.log_api = (function() { 
var log_api__delegate = function (f,args){var ch = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,args);var c__5521__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_20537){var state_val_20538 = (state_20537[1]);if((state_val_20538 === 2))
{var inst_20534 = (state_20537[2]);var inst_20535 = console.log(inst_20534);var state_20537__$1 = state_20537;return cljs.core.async.impl.ioc_helpers.return_chan(state_20537__$1,inst_20535);
} else
{if((state_val_20538 === 1))
{var state_20537__$1 = state_20537;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20537__$1,2,ch);
} else
{return null;
}
}
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_20542 = [null,null,null,null,null,null,null];(statearr_20542[0] = state_machine__5507__auto__);
(statearr_20542[1] = 1);
return statearr_20542;
});
var state_machine__5507__auto____1 = (function (state_20537){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_20537);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$241))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e20543){if((e20543 instanceof Object))
{var ex__5510__auto__ = e20543;var statearr_20544_20546 = state_20537;(statearr_20544_20546[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_20537);
return cljs.core.constant$keyword$241;
} else
{if(cljs.core.constant$keyword$230)
{throw e20543;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$241))
{{
var G__20547 = state_20537;
state_20537 = G__20547;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_20537){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_20537);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_20545 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_20545[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_20545;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5523__auto__);
}));
return c__5521__auto__;
};
var log_api = function (f,var_args){
var args = null;if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return log_api__delegate.call(this,f,args);};
log_api.cljs$lang$maxFixedArity = 1;
log_api.cljs$lang$applyTo = (function (arglist__20548){
var f = cljs.core.first(arglist__20548);
var args = cljs.core.rest(arglist__20548);
return log_api__delegate(f,args);
});
log_api.cljs$core$IFn$_invoke$arity$variadic = log_api__delegate;
return log_api;
})()
;
clustermap.api.map_json_params = (function map_json_params(m){return clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__20551){var vec__20552 = p__20551;var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20552,0,null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20552,1,null);return [cljs.core.str(cljs.core.name(k)),cljs.core.str("="),cljs.core.str(JSON.stringify(cljs.core.clj__GT_js(v)))].join('');
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
boundarylines.cljs$lang$applyTo = (function (arglist__20553){
var id = cljs.core.first(arglist__20553);
arglist__20553 = cljs.core.next(arglist__20553);
var tolerance = cljs.core.first(arglist__20553);
var opts = cljs.core.rest(arglist__20553);
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
boundaryline_collection_index.cljs$lang$applyTo = (function (arglist__20554){
var id = cljs.core.first(arglist__20554);
var opts = cljs.core.rest(arglist__20554);
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
var constituencies__delegate = function (p__20555){var vec__20557 = p__20555;var type_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20557,0,null);return clustermap.api.GET.cljs$core$IFn$_invoke$arity$variadic("/api/",cljs.core.array_seq([clustermap.api.api_prefix,"/constituencies?",clustermap.api.map_json_params(type_ids)], 0));
};
var constituencies = function (var_args){
var p__20555 = null;if (arguments.length > 0) {
  p__20555 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return constituencies__delegate.call(this,p__20555);};
constituencies.cljs$lang$maxFixedArity = 0;
constituencies.cljs$lang$applyTo = (function (arglist__20558){
var p__20555 = cljs.core.seq(arglist__20558);
return constituencies__delegate(p__20555);
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
var portfolio_companies__delegate = function (p__20559){var vec__20561 = p__20559;var type_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20561,0,null);var type_ids__$1 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$256,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$257,"desc"], null)], null)], 0));return clustermap.api.GET([cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/portfolio-companies?"),cljs.core.str(clustermap.api.map_json_params(type_ids__$1))].join(''));
};
var portfolio_companies = function (var_args){
var p__20559 = null;if (arguments.length > 0) {
  p__20559 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_companies__delegate.call(this,p__20559);};
portfolio_companies.cljs$lang$maxFixedArity = 0;
portfolio_companies.cljs$lang$applyTo = (function (arglist__20562){
var p__20559 = cljs.core.seq(arglist__20562);
return portfolio_companies__delegate(p__20559);
});
portfolio_companies.cljs$core$IFn$_invoke$arity$variadic = portfolio_companies__delegate;
return portfolio_companies;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_stats = (function() { 
var portfolio_company_stats__delegate = function (p__20563){var vec__20565 = p__20563;var type_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20565,0,null);return clustermap.api.GET([cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/portfolio-company-stats?"),cljs.core.str(clustermap.api.map_json_params(type_ids))].join(''));
};
var portfolio_company_stats = function (var_args){
var p__20563 = null;if (arguments.length > 0) {
  p__20563 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_stats__delegate.call(this,p__20563);};
portfolio_company_stats.cljs$lang$maxFixedArity = 0;
portfolio_company_stats.cljs$lang$applyTo = (function (arglist__20566){
var p__20563 = cljs.core.seq(arglist__20566);
return portfolio_company_stats__delegate(p__20563);
});
portfolio_company_stats.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_stats__delegate;
return portfolio_company_stats;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_account_stats = (function() { 
var portfolio_company_account_stats__delegate = function (p__20567){var vec__20569 = p__20567;var type_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20569,0,null);return clustermap.api.GET([cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/portfolio-company-account-stats?"),cljs.core.str(clustermap.api.map_json_params(type_ids))].join(''));
};
var portfolio_company_account_stats = function (var_args){
var p__20567 = null;if (arguments.length > 0) {
  p__20567 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_account_stats__delegate.call(this,p__20567);};
portfolio_company_account_stats.cljs$lang$maxFixedArity = 0;
portfolio_company_account_stats.cljs$lang$applyTo = (function (arglist__20570){
var p__20567 = cljs.core.seq(arglist__20570);
return portfolio_company_account_stats__delegate(p__20567);
});
portfolio_company_account_stats.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_account_stats__delegate;
return portfolio_company_account_stats;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_sites = (function() { 
var portfolio_company_sites__delegate = function (p__20571){var vec__20573 = p__20571;var type_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20573,0,null);var type_ids__$1 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$258,100,cljs.core.constant$keyword$256,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$257,"desc"], null)], null)], null),type_ids], 0));return clustermap.api.GET([cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/portfolio-company-sites?"),cljs.core.str(clustermap.api.map_json_params(type_ids__$1))].join(''));
};
var portfolio_company_sites = function (var_args){
var p__20571 = null;if (arguments.length > 0) {
  p__20571 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_sites__delegate.call(this,p__20571);};
portfolio_company_sites.cljs$lang$maxFixedArity = 0;
portfolio_company_sites.cljs$lang$applyTo = (function (arglist__20574){
var p__20571 = cljs.core.seq(arglist__20574);
return portfolio_company_sites__delegate(p__20571);
});
portfolio_company_sites.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_sites__delegate;
return portfolio_company_sites;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_locations = (function() { 
var portfolio_company_locations__delegate = function (p__20575){var vec__20577 = p__20575;var type_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20577,0,null);return clustermap.api.GET([cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/portfolio-company-locations?"),cljs.core.str(clustermap.api.map_json_params(type_ids))].join(''));
};
var portfolio_company_locations = function (var_args){
var p__20575 = null;if (arguments.length > 0) {
  p__20575 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_locations__delegate.call(this,p__20575);};
portfolio_company_locations.cljs$lang$maxFixedArity = 0;
portfolio_company_locations.cljs$lang$applyTo = (function (arglist__20578){
var p__20575 = cljs.core.seq(arglist__20578);
return portfolio_company_locations__delegate(p__20575);
});
portfolio_company_locations.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_locations__delegate;
return portfolio_company_locations;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_site_stats = (function() { 
var portfolio_company_site_stats__delegate = function (p__20579){var vec__20581 = p__20579;var type_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20581,0,null);return clustermap.api.GET([cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/portfolio-company-site-stats?"),cljs.core.str(clustermap.api.map_json_params(type_ids))].join(''));
};
var portfolio_company_site_stats = function (var_args){
var p__20579 = null;if (arguments.length > 0) {
  p__20579 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_site_stats__delegate.call(this,p__20579);};
portfolio_company_site_stats.cljs$lang$maxFixedArity = 0;
portfolio_company_site_stats.cljs$lang$applyTo = (function (arglist__20582){
var p__20579 = cljs.core.seq(arglist__20582);
return portfolio_company_site_stats__delegate(p__20579);
});
portfolio_company_site_stats.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_site_stats__delegate;
return portfolio_company_site_stats;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_site_account_timelines = (function() { 
var portfolio_company_site_account_timelines__delegate = function (p__20583){var vec__20585 = p__20583;var type_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20585,0,null);return clustermap.api.GET([cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/portfolio-company-site-account-timelines?"),cljs.core.str(clustermap.api.map_json_params(type_ids))].join(''));
};
var portfolio_company_site_account_timelines = function (var_args){
var p__20583 = null;if (arguments.length > 0) {
  p__20583 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_site_account_timelines__delegate.call(this,p__20583);};
portfolio_company_site_account_timelines.cljs$lang$maxFixedArity = 0;
portfolio_company_site_account_timelines.cljs$lang$applyTo = (function (arglist__20586){
var p__20583 = cljs.core.seq(arglist__20586);
return portfolio_company_site_account_timelines__delegate(p__20583);
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
var investor_comapnies__delegate = function (p__20587){var vec__20589 = p__20587;var type_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20589,0,null);return clustermap.api.GET([cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/investor-companies?"),cljs.core.str(clustermap.api.map_json_params(type_ids))].join(''));
};
var investor_comapnies = function (var_args){
var p__20587 = null;if (arguments.length > 0) {
  p__20587 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return investor_comapnies__delegate.call(this,p__20587);};
investor_comapnies.cljs$lang$maxFixedArity = 0;
investor_comapnies.cljs$lang$applyTo = (function (arglist__20590){
var p__20587 = cljs.core.seq(arglist__20590);
return investor_comapnies__delegate(p__20587);
});
investor_comapnies.cljs$core$IFn$_invoke$arity$variadic = investor_comapnies__delegate;
return investor_comapnies;
})()
;
