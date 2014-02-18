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
var GET__delegate = function (url,p__20333){var map__20335 = p__20333;var map__20335__$1 = ((cljs.core.seq_QMARK_(map__20335))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20335):map__20335);var raw = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20335__$1,cljs.core.constant$keyword$257);var comm = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);goog.net.XhrIo.send(url,(function (event){cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,(function (d){if(cljs.core.truth_(raw))
{return d;
} else
{return cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(d,cljs.core.array_seq([cljs.core.constant$keyword$238,true], 0));
}
}).call(null,((JSON.parse.cljs$core$IFn$_invoke$arity$1 ? JSON.parse.cljs$core$IFn$_invoke$arity$1(event.target.getResponseText()) : JSON.parse.call(null,event.target.getResponseText()))["data"])));
return cljs.core.async.close_BANG_(comm);
}));
return comm;
};
var GET = function (url,var_args){
var p__20333 = null;if (arguments.length > 1) {
  p__20333 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return GET__delegate.call(this,url,p__20333);};
GET.cljs$lang$maxFixedArity = 1;
GET.cljs$lang$applyTo = (function (arglist__20336){
var url = cljs.core.first(arglist__20336);
var p__20333 = cljs.core.rest(arglist__20336);
return GET__delegate(url,p__20333);
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
clustermap.api.ordered_api_results = (function ordered_api_results(ocomm,handler){var c__5521__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_20469){var state_val_20470 = (state_20469[1]);if((state_val_20470 === 1))
{var state_20469__$1 = state_20469;var statearr_20471_20507 = state_20469__$1;(statearr_20471_20507[2] = null);
(statearr_20471_20507[1] = 2);
return cljs.core.constant$keyword$243;
} else
{if((state_val_20470 === 2))
{var state_20469__$1 = state_20469;if(true)
{var statearr_20472_20508 = state_20469__$1;(statearr_20472_20508[1] = 4);
} else
{var statearr_20473_20509 = state_20469__$1;(statearr_20473_20509[1] = 5);
}
return cljs.core.constant$keyword$243;
} else
{if((state_val_20470 === 3))
{var inst_20467 = (state_20469[2]);var state_20469__$1 = state_20469;return cljs.core.async.impl.ioc_helpers.return_chan(state_20469__$1,inst_20467);
} else
{if((state_val_20470 === 4))
{var state_20469__$1 = state_20469;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20469__$1,7,ocomm);
} else
{if((state_val_20470 === 5))
{var state_20469__$1 = state_20469;var statearr_20474_20510 = state_20469__$1;(statearr_20474_20510[2] = null);
(statearr_20474_20510[1] = 6);
return cljs.core.constant$keyword$243;
} else
{if((state_val_20470 === 6))
{var inst_20465 = (state_20469[2]);var state_20469__$1 = state_20469;var statearr_20475_20511 = state_20469__$1;(statearr_20475_20511[2] = inst_20465);
(statearr_20475_20511[1] = 3);
return cljs.core.constant$keyword$243;
} else
{if((state_val_20470 === 7))
{var inst_20427 = (state_20469[7]);var inst_20426 = (state_20469[2]);var inst_20427__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_20426,0,null);var inst_20428 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_20426,1,null);var inst_20429 = cljs.core.sequential_QMARK_(inst_20427__$1);var state_20469__$1 = (function (){var statearr_20476 = state_20469;(statearr_20476[8] = inst_20428);
(statearr_20476[7] = inst_20427__$1);
return statearr_20476;
})();if(inst_20429)
{var statearr_20477_20512 = state_20469__$1;(statearr_20477_20512[1] = 8);
} else
{var statearr_20478_20513 = state_20469__$1;(statearr_20478_20513[1] = 9);
}
return cljs.core.constant$keyword$243;
} else
{if((state_val_20470 === 8))
{var inst_20427 = (state_20469[7]);var inst_20431 = inst_20427;var inst_20432 = cljs.core.PersistentVector.EMPTY;var state_20469__$1 = (function (){var statearr_20479 = state_20469;(statearr_20479[9] = inst_20432);
(statearr_20479[10] = inst_20431);
return statearr_20479;
})();var statearr_20480_20514 = state_20469__$1;(statearr_20480_20514[2] = null);
(statearr_20480_20514[1] = 11);
return cljs.core.constant$keyword$243;
} else
{if((state_val_20470 === 9))
{var inst_20427 = (state_20469[7]);var state_20469__$1 = state_20469;if(cljs.core.truth_(inst_20427))
{var statearr_20481_20515 = state_20469__$1;(statearr_20481_20515[1] = 20);
} else
{var statearr_20482_20516 = state_20469__$1;(statearr_20482_20516[1] = 21);
}
return cljs.core.constant$keyword$243;
} else
{if((state_val_20470 === 10))
{var inst_20428 = (state_20469[8]);var inst_20460 = (state_20469[2]);var inst_20461 = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(handler,inst_20460,inst_20428);var state_20469__$1 = (function (){var statearr_20483 = state_20469;(statearr_20483[11] = inst_20461);
return statearr_20483;
})();var statearr_20484_20517 = state_20469__$1;(statearr_20484_20517[2] = null);
(statearr_20484_20517[1] = 2);
return cljs.core.constant$keyword$243;
} else
{if((state_val_20470 === 11))
{var inst_20431 = (state_20469[10]);var inst_20434 = cljs.core.empty_QMARK_(inst_20431);var state_20469__$1 = state_20469;if(inst_20434)
{var statearr_20485_20518 = state_20469__$1;(statearr_20485_20518[1] = 13);
} else
{var statearr_20486_20519 = state_20469__$1;(statearr_20486_20519[1] = 14);
}
return cljs.core.constant$keyword$243;
} else
{if((state_val_20470 === 12))
{var inst_20451 = (state_20469[2]);var state_20469__$1 = state_20469;var statearr_20487_20520 = state_20469__$1;(statearr_20487_20520[2] = inst_20451);
(statearr_20487_20520[1] = 10);
return cljs.core.constant$keyword$243;
} else
{if((state_val_20470 === 13))
{var inst_20432 = (state_20469[9]);var state_20469__$1 = state_20469;var statearr_20488_20521 = state_20469__$1;(statearr_20488_20521[2] = inst_20432);
(statearr_20488_20521[1] = 15);
return cljs.core.constant$keyword$243;
} else
{if((state_val_20470 === 14))
{var inst_20431 = (state_20469[10]);var inst_20437 = cljs.core.rest(inst_20431);var inst_20438 = cljs.core.first(inst_20431);var state_20469__$1 = (function (){var statearr_20489 = state_20469;(statearr_20489[12] = inst_20437);
return statearr_20489;
})();if(cljs.core.truth_(inst_20438))
{var statearr_20490_20522 = state_20469__$1;(statearr_20490_20522[1] = 16);
} else
{var statearr_20491_20523 = state_20469__$1;(statearr_20491_20523[1] = 17);
}
return cljs.core.constant$keyword$243;
} else
{if((state_val_20470 === 15))
{var inst_20449 = (state_20469[2]);var state_20469__$1 = state_20469;var statearr_20492_20524 = state_20469__$1;(statearr_20492_20524[2] = inst_20449);
(statearr_20492_20524[1] = 12);
return cljs.core.constant$keyword$243;
} else
{if((state_val_20470 === 16))
{var inst_20431 = (state_20469[10]);var inst_20440 = cljs.core.first(inst_20431);var state_20469__$1 = state_20469;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20469__$1,19,inst_20440);
} else
{if((state_val_20470 === 17))
{var state_20469__$1 = state_20469;var statearr_20493_20525 = state_20469__$1;(statearr_20493_20525[2] = null);
(statearr_20493_20525[1] = 18);
return cljs.core.constant$keyword$243;
} else
{if((state_val_20470 === 18))
{var inst_20432 = (state_20469[9]);var inst_20437 = (state_20469[12]);var inst_20445 = (state_20469[2]);var inst_20446 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(inst_20432,inst_20445);var inst_20431 = inst_20437;var inst_20432__$1 = inst_20446;var state_20469__$1 = (function (){var statearr_20494 = state_20469;(statearr_20494[9] = inst_20432__$1);
(statearr_20494[10] = inst_20431);
return statearr_20494;
})();var statearr_20495_20526 = state_20469__$1;(statearr_20495_20526[2] = null);
(statearr_20495_20526[1] = 11);
return cljs.core.constant$keyword$243;
} else
{if((state_val_20470 === 19))
{var inst_20442 = (state_20469[2]);var state_20469__$1 = state_20469;var statearr_20496_20527 = state_20469__$1;(statearr_20496_20527[2] = inst_20442);
(statearr_20496_20527[1] = 18);
return cljs.core.constant$keyword$243;
} else
{if((state_val_20470 === 20))
{var inst_20427 = (state_20469[7]);var state_20469__$1 = state_20469;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20469__$1,23,inst_20427);
} else
{if((state_val_20470 === 21))
{var state_20469__$1 = state_20469;var statearr_20497_20528 = state_20469__$1;(statearr_20497_20528[2] = null);
(statearr_20497_20528[1] = 22);
return cljs.core.constant$keyword$243;
} else
{if((state_val_20470 === 22))
{var inst_20458 = (state_20469[2]);var state_20469__$1 = state_20469;var statearr_20498_20529 = state_20469__$1;(statearr_20498_20529[2] = inst_20458);
(statearr_20498_20529[1] = 10);
return cljs.core.constant$keyword$243;
} else
{if((state_val_20470 === 23))
{var inst_20455 = (state_20469[2]);var state_20469__$1 = state_20469;var statearr_20499_20530 = state_20469__$1;(statearr_20499_20530[2] = inst_20455);
(statearr_20499_20530[1] = 22);
return cljs.core.constant$keyword$243;
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
var state_machine__5507__auto____0 = (function (){var statearr_20503 = [null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_20503[0] = state_machine__5507__auto__);
(statearr_20503[1] = 1);
return statearr_20503;
});
var state_machine__5507__auto____1 = (function (state_20469){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_20469);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$243))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e20504){if((e20504 instanceof Object))
{var ex__5510__auto__ = e20504;var statearr_20505_20531 = state_20469;(statearr_20505_20531[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_20469);
return cljs.core.constant$keyword$243;
} else
{if(cljs.core.constant$keyword$232)
{throw e20504;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$243))
{{
var G__20532 = state_20469;
state_20469 = G__20532;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_20469){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_20469);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_20506 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_20506[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_20506;
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
var G__20535__delegate = function (req_args){var temp__4090__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(request_handler,req_args);if(cljs.core.truth_(temp__4090__auto__))
{var r = temp__4090__auto__;var rseq = ((cljs.core.sequential_QMARK_(r))?r:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [r], null));var vec__20534 = rseq;var rcomm = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20534,0,null);var result_handler_args = cljs.core.nthnext(vec__20534,1);return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(ocomm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rcomm,result_handler_args], null));
} else
{return null;
}
};
var G__20535 = function (var_args){
var req_args = null;if (arguments.length > 0) {
  req_args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__20535__delegate.call(this,req_args);};
G__20535.cljs$lang$maxFixedArity = 0;
G__20535.cljs$lang$applyTo = (function (arglist__20536){
var req_args = cljs.core.seq(arglist__20536);
return G__20535__delegate(req_args);
});
G__20535.cljs$core$IFn$_invoke$arity$variadic = G__20535__delegate;
return G__20535;
})()
;
});
/**
* @param {...*} var_args
*/
clustermap.api.log_api = (function() { 
var log_api__delegate = function (f,args){var ch = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,args);var c__5521__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_20554){var state_val_20555 = (state_20554[1]);if((state_val_20555 === 2))
{var inst_20551 = (state_20554[2]);var inst_20552 = console.log(inst_20551);var state_20554__$1 = state_20554;return cljs.core.async.impl.ioc_helpers.return_chan(state_20554__$1,inst_20552);
} else
{if((state_val_20555 === 1))
{var state_20554__$1 = state_20554;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20554__$1,2,ch);
} else
{return null;
}
}
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_20559 = [null,null,null,null,null,null,null];(statearr_20559[0] = state_machine__5507__auto__);
(statearr_20559[1] = 1);
return statearr_20559;
});
var state_machine__5507__auto____1 = (function (state_20554){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_20554);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$243))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e20560){if((e20560 instanceof Object))
{var ex__5510__auto__ = e20560;var statearr_20561_20563 = state_20554;(statearr_20561_20563[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_20554);
return cljs.core.constant$keyword$243;
} else
{if(cljs.core.constant$keyword$232)
{throw e20560;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$243))
{{
var G__20564 = state_20554;
state_20554 = G__20564;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_20554){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_20554);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_20562 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_20562[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_20562;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5523__auto__);
}));
return c__5521__auto__;
};
var log_api = function (f,var_args){
var args = null;if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return log_api__delegate.call(this,f,args);};
log_api.cljs$lang$maxFixedArity = 1;
log_api.cljs$lang$applyTo = (function (arglist__20565){
var f = cljs.core.first(arglist__20565);
var args = cljs.core.rest(arglist__20565);
return log_api__delegate(f,args);
});
log_api.cljs$core$IFn$_invoke$arity$variadic = log_api__delegate;
return log_api;
})()
;
clustermap.api.map_json_params = (function map_json_params(m){return clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__20568){var vec__20569 = p__20568;var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20569,0,null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20569,1,null);return [cljs.core.str(cljs.core.name(k)),cljs.core.str("="),cljs.core.str(JSON.stringify(cljs.core.clj__GT_js(v)))].join('');
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
boundarylines.cljs$lang$applyTo = (function (arglist__20570){
var id = cljs.core.first(arglist__20570);
arglist__20570 = cljs.core.next(arglist__20570);
var tolerance = cljs.core.first(arglist__20570);
var opts = cljs.core.rest(arglist__20570);
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
boundaryline_collection_index.cljs$lang$applyTo = (function (arglist__20571){
var id = cljs.core.first(arglist__20571);
var opts = cljs.core.rest(arglist__20571);
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
var constituencies__delegate = function (p__20572){var vec__20574 = p__20572;var type_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20574,0,null);return clustermap.api.GET.cljs$core$IFn$_invoke$arity$variadic("/api/",cljs.core.array_seq([clustermap.api.api_prefix,"/constituencies?",clustermap.api.map_json_params(type_ids)], 0));
};
var constituencies = function (var_args){
var p__20572 = null;if (arguments.length > 0) {
  p__20572 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return constituencies__delegate.call(this,p__20572);};
constituencies.cljs$lang$maxFixedArity = 0;
constituencies.cljs$lang$applyTo = (function (arglist__20575){
var p__20572 = cljs.core.seq(arglist__20575);
return constituencies__delegate(p__20572);
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
var portfolio_companies__delegate = function (p__20576){var vec__20578 = p__20576;var type_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20578,0,null);var type_ids__$1 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$258,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$259,"desc"], null)], null)], 0));return clustermap.api.GET([cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/portfolio-companies?"),cljs.core.str(clustermap.api.map_json_params(type_ids__$1))].join(''));
};
var portfolio_companies = function (var_args){
var p__20576 = null;if (arguments.length > 0) {
  p__20576 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_companies__delegate.call(this,p__20576);};
portfolio_companies.cljs$lang$maxFixedArity = 0;
portfolio_companies.cljs$lang$applyTo = (function (arglist__20579){
var p__20576 = cljs.core.seq(arglist__20579);
return portfolio_companies__delegate(p__20576);
});
portfolio_companies.cljs$core$IFn$_invoke$arity$variadic = portfolio_companies__delegate;
return portfolio_companies;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_stats = (function() { 
var portfolio_company_stats__delegate = function (p__20580){var vec__20582 = p__20580;var type_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20582,0,null);return clustermap.api.GET([cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/portfolio-company-stats?"),cljs.core.str(clustermap.api.map_json_params(type_ids))].join(''));
};
var portfolio_company_stats = function (var_args){
var p__20580 = null;if (arguments.length > 0) {
  p__20580 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_stats__delegate.call(this,p__20580);};
portfolio_company_stats.cljs$lang$maxFixedArity = 0;
portfolio_company_stats.cljs$lang$applyTo = (function (arglist__20583){
var p__20580 = cljs.core.seq(arglist__20583);
return portfolio_company_stats__delegate(p__20580);
});
portfolio_company_stats.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_stats__delegate;
return portfolio_company_stats;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_account_stats = (function() { 
var portfolio_company_account_stats__delegate = function (p__20584){var vec__20586 = p__20584;var type_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20586,0,null);return clustermap.api.GET([cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/portfolio-company-account-stats?"),cljs.core.str(clustermap.api.map_json_params(type_ids))].join(''));
};
var portfolio_company_account_stats = function (var_args){
var p__20584 = null;if (arguments.length > 0) {
  p__20584 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_account_stats__delegate.call(this,p__20584);};
portfolio_company_account_stats.cljs$lang$maxFixedArity = 0;
portfolio_company_account_stats.cljs$lang$applyTo = (function (arglist__20587){
var p__20584 = cljs.core.seq(arglist__20587);
return portfolio_company_account_stats__delegate(p__20584);
});
portfolio_company_account_stats.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_account_stats__delegate;
return portfolio_company_account_stats;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_sites = (function() { 
var portfolio_company_sites__delegate = function (p__20588){var vec__20590 = p__20588;var type_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20590,0,null);var type_ids__$1 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$260,100,cljs.core.constant$keyword$258,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$259,"desc"], null)], null)], null),type_ids], 0));return clustermap.api.GET([cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/portfolio-company-sites?"),cljs.core.str(clustermap.api.map_json_params(type_ids__$1))].join(''));
};
var portfolio_company_sites = function (var_args){
var p__20588 = null;if (arguments.length > 0) {
  p__20588 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_sites__delegate.call(this,p__20588);};
portfolio_company_sites.cljs$lang$maxFixedArity = 0;
portfolio_company_sites.cljs$lang$applyTo = (function (arglist__20591){
var p__20588 = cljs.core.seq(arglist__20591);
return portfolio_company_sites__delegate(p__20588);
});
portfolio_company_sites.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_sites__delegate;
return portfolio_company_sites;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_locations = (function() { 
var portfolio_company_locations__delegate = function (p__20592){var vec__20594 = p__20592;var type_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20594,0,null);return clustermap.api.GET([cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/portfolio-company-locations?"),cljs.core.str(clustermap.api.map_json_params(type_ids))].join(''));
};
var portfolio_company_locations = function (var_args){
var p__20592 = null;if (arguments.length > 0) {
  p__20592 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_locations__delegate.call(this,p__20592);};
portfolio_company_locations.cljs$lang$maxFixedArity = 0;
portfolio_company_locations.cljs$lang$applyTo = (function (arglist__20595){
var p__20592 = cljs.core.seq(arglist__20595);
return portfolio_company_locations__delegate(p__20592);
});
portfolio_company_locations.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_locations__delegate;
return portfolio_company_locations;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_site_stats = (function() { 
var portfolio_company_site_stats__delegate = function (p__20596){var vec__20598 = p__20596;var type_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20598,0,null);return clustermap.api.GET([cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/portfolio-company-site-stats?"),cljs.core.str(clustermap.api.map_json_params(type_ids))].join(''));
};
var portfolio_company_site_stats = function (var_args){
var p__20596 = null;if (arguments.length > 0) {
  p__20596 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_site_stats__delegate.call(this,p__20596);};
portfolio_company_site_stats.cljs$lang$maxFixedArity = 0;
portfolio_company_site_stats.cljs$lang$applyTo = (function (arglist__20599){
var p__20596 = cljs.core.seq(arglist__20599);
return portfolio_company_site_stats__delegate(p__20596);
});
portfolio_company_site_stats.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_site_stats__delegate;
return portfolio_company_site_stats;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_site_account_timelines = (function() { 
var portfolio_company_site_account_timelines__delegate = function (p__20600){var vec__20602 = p__20600;var type_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20602,0,null);return clustermap.api.GET([cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/portfolio-company-site-account-timelines?"),cljs.core.str(clustermap.api.map_json_params(type_ids))].join(''));
};
var portfolio_company_site_account_timelines = function (var_args){
var p__20600 = null;if (arguments.length > 0) {
  p__20600 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_site_account_timelines__delegate.call(this,p__20600);};
portfolio_company_site_account_timelines.cljs$lang$maxFixedArity = 0;
portfolio_company_site_account_timelines.cljs$lang$applyTo = (function (arglist__20603){
var p__20600 = cljs.core.seq(arglist__20603);
return portfolio_company_site_account_timelines__delegate(p__20600);
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
var investor_comapnies__delegate = function (p__20604){var vec__20606 = p__20604;var type_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20606,0,null);return clustermap.api.GET([cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/investor-companies?"),cljs.core.str(clustermap.api.map_json_params(type_ids))].join(''));
};
var investor_comapnies = function (var_args){
var p__20604 = null;if (arguments.length > 0) {
  p__20604 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return investor_comapnies__delegate.call(this,p__20604);};
investor_comapnies.cljs$lang$maxFixedArity = 0;
investor_comapnies.cljs$lang$applyTo = (function (arglist__20607){
var p__20604 = cljs.core.seq(arglist__20607);
return investor_comapnies__delegate(p__20604);
});
investor_comapnies.cljs$core$IFn$_invoke$arity$variadic = investor_comapnies__delegate;
return investor_comapnies;
})()
;
