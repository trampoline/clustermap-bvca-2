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
var GET__delegate = function (url,p__20357){var map__20359 = p__20357;var map__20359__$1 = ((cljs.core.seq_QMARK_(map__20359))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20359):map__20359);var raw = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20359__$1,cljs.core.constant$keyword$262);var comm = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);goog.net.XhrIo.send(url,(function (event){cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,(function (d){if(cljs.core.truth_(raw))
{return d;
} else
{return cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(d,cljs.core.array_seq([cljs.core.constant$keyword$243,true], 0));
}
}).call(null,((JSON.parse.cljs$core$IFn$_invoke$arity$1 ? JSON.parse.cljs$core$IFn$_invoke$arity$1(event.target.getResponseText()) : JSON.parse.call(null,event.target.getResponseText()))["data"])));
return cljs.core.async.close_BANG_(comm);
}));
return comm;
};
var GET = function (url,var_args){
var p__20357 = null;if (arguments.length > 1) {
  p__20357 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return GET__delegate.call(this,url,p__20357);};
GET.cljs$lang$maxFixedArity = 1;
GET.cljs$lang$applyTo = (function (arglist__20360){
var url = cljs.core.first(arglist__20360);
var p__20357 = cljs.core.rest(arglist__20360);
return GET__delegate(url,p__20357);
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
clustermap.api.ordered_api_results = (function ordered_api_results(ocomm,handler){var c__5521__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_20493){var state_val_20494 = (state_20493[1]);if((state_val_20494 === 1))
{var state_20493__$1 = state_20493;var statearr_20495_20531 = state_20493__$1;(statearr_20495_20531[2] = null);
(statearr_20495_20531[1] = 2);
return cljs.core.constant$keyword$248;
} else
{if((state_val_20494 === 2))
{var state_20493__$1 = state_20493;if(true)
{var statearr_20496_20532 = state_20493__$1;(statearr_20496_20532[1] = 4);
} else
{var statearr_20497_20533 = state_20493__$1;(statearr_20497_20533[1] = 5);
}
return cljs.core.constant$keyword$248;
} else
{if((state_val_20494 === 3))
{var inst_20491 = (state_20493[2]);var state_20493__$1 = state_20493;return cljs.core.async.impl.ioc_helpers.return_chan(state_20493__$1,inst_20491);
} else
{if((state_val_20494 === 4))
{var state_20493__$1 = state_20493;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20493__$1,7,ocomm);
} else
{if((state_val_20494 === 5))
{var state_20493__$1 = state_20493;var statearr_20498_20534 = state_20493__$1;(statearr_20498_20534[2] = null);
(statearr_20498_20534[1] = 6);
return cljs.core.constant$keyword$248;
} else
{if((state_val_20494 === 6))
{var inst_20489 = (state_20493[2]);var state_20493__$1 = state_20493;var statearr_20499_20535 = state_20493__$1;(statearr_20499_20535[2] = inst_20489);
(statearr_20499_20535[1] = 3);
return cljs.core.constant$keyword$248;
} else
{if((state_val_20494 === 7))
{var inst_20451 = (state_20493[7]);var inst_20450 = (state_20493[2]);var inst_20451__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_20450,0,null);var inst_20452 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_20450,1,null);var inst_20453 = cljs.core.sequential_QMARK_(inst_20451__$1);var state_20493__$1 = (function (){var statearr_20500 = state_20493;(statearr_20500[8] = inst_20452);
(statearr_20500[7] = inst_20451__$1);
return statearr_20500;
})();if(inst_20453)
{var statearr_20501_20536 = state_20493__$1;(statearr_20501_20536[1] = 8);
} else
{var statearr_20502_20537 = state_20493__$1;(statearr_20502_20537[1] = 9);
}
return cljs.core.constant$keyword$248;
} else
{if((state_val_20494 === 8))
{var inst_20451 = (state_20493[7]);var inst_20455 = inst_20451;var inst_20456 = cljs.core.PersistentVector.EMPTY;var state_20493__$1 = (function (){var statearr_20503 = state_20493;(statearr_20503[9] = inst_20455);
(statearr_20503[10] = inst_20456);
return statearr_20503;
})();var statearr_20504_20538 = state_20493__$1;(statearr_20504_20538[2] = null);
(statearr_20504_20538[1] = 11);
return cljs.core.constant$keyword$248;
} else
{if((state_val_20494 === 9))
{var inst_20451 = (state_20493[7]);var state_20493__$1 = state_20493;if(cljs.core.truth_(inst_20451))
{var statearr_20505_20539 = state_20493__$1;(statearr_20505_20539[1] = 20);
} else
{var statearr_20506_20540 = state_20493__$1;(statearr_20506_20540[1] = 21);
}
return cljs.core.constant$keyword$248;
} else
{if((state_val_20494 === 10))
{var inst_20452 = (state_20493[8]);var inst_20484 = (state_20493[2]);var inst_20485 = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(handler,inst_20484,inst_20452);var state_20493__$1 = (function (){var statearr_20507 = state_20493;(statearr_20507[11] = inst_20485);
return statearr_20507;
})();var statearr_20508_20541 = state_20493__$1;(statearr_20508_20541[2] = null);
(statearr_20508_20541[1] = 2);
return cljs.core.constant$keyword$248;
} else
{if((state_val_20494 === 11))
{var inst_20455 = (state_20493[9]);var inst_20458 = cljs.core.empty_QMARK_(inst_20455);var state_20493__$1 = state_20493;if(inst_20458)
{var statearr_20509_20542 = state_20493__$1;(statearr_20509_20542[1] = 13);
} else
{var statearr_20510_20543 = state_20493__$1;(statearr_20510_20543[1] = 14);
}
return cljs.core.constant$keyword$248;
} else
{if((state_val_20494 === 12))
{var inst_20475 = (state_20493[2]);var state_20493__$1 = state_20493;var statearr_20511_20544 = state_20493__$1;(statearr_20511_20544[2] = inst_20475);
(statearr_20511_20544[1] = 10);
return cljs.core.constant$keyword$248;
} else
{if((state_val_20494 === 13))
{var inst_20456 = (state_20493[10]);var state_20493__$1 = state_20493;var statearr_20512_20545 = state_20493__$1;(statearr_20512_20545[2] = inst_20456);
(statearr_20512_20545[1] = 15);
return cljs.core.constant$keyword$248;
} else
{if((state_val_20494 === 14))
{var inst_20455 = (state_20493[9]);var inst_20461 = cljs.core.rest(inst_20455);var inst_20462 = cljs.core.first(inst_20455);var state_20493__$1 = (function (){var statearr_20513 = state_20493;(statearr_20513[12] = inst_20461);
return statearr_20513;
})();if(cljs.core.truth_(inst_20462))
{var statearr_20514_20546 = state_20493__$1;(statearr_20514_20546[1] = 16);
} else
{var statearr_20515_20547 = state_20493__$1;(statearr_20515_20547[1] = 17);
}
return cljs.core.constant$keyword$248;
} else
{if((state_val_20494 === 15))
{var inst_20473 = (state_20493[2]);var state_20493__$1 = state_20493;var statearr_20516_20548 = state_20493__$1;(statearr_20516_20548[2] = inst_20473);
(statearr_20516_20548[1] = 12);
return cljs.core.constant$keyword$248;
} else
{if((state_val_20494 === 16))
{var inst_20455 = (state_20493[9]);var inst_20464 = cljs.core.first(inst_20455);var state_20493__$1 = state_20493;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20493__$1,19,inst_20464);
} else
{if((state_val_20494 === 17))
{var state_20493__$1 = state_20493;var statearr_20517_20549 = state_20493__$1;(statearr_20517_20549[2] = null);
(statearr_20517_20549[1] = 18);
return cljs.core.constant$keyword$248;
} else
{if((state_val_20494 === 18))
{var inst_20456 = (state_20493[10]);var inst_20461 = (state_20493[12]);var inst_20469 = (state_20493[2]);var inst_20470 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(inst_20456,inst_20469);var inst_20455 = inst_20461;var inst_20456__$1 = inst_20470;var state_20493__$1 = (function (){var statearr_20518 = state_20493;(statearr_20518[9] = inst_20455);
(statearr_20518[10] = inst_20456__$1);
return statearr_20518;
})();var statearr_20519_20550 = state_20493__$1;(statearr_20519_20550[2] = null);
(statearr_20519_20550[1] = 11);
return cljs.core.constant$keyword$248;
} else
{if((state_val_20494 === 19))
{var inst_20466 = (state_20493[2]);var state_20493__$1 = state_20493;var statearr_20520_20551 = state_20493__$1;(statearr_20520_20551[2] = inst_20466);
(statearr_20520_20551[1] = 18);
return cljs.core.constant$keyword$248;
} else
{if((state_val_20494 === 20))
{var inst_20451 = (state_20493[7]);var state_20493__$1 = state_20493;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20493__$1,23,inst_20451);
} else
{if((state_val_20494 === 21))
{var state_20493__$1 = state_20493;var statearr_20521_20552 = state_20493__$1;(statearr_20521_20552[2] = null);
(statearr_20521_20552[1] = 22);
return cljs.core.constant$keyword$248;
} else
{if((state_val_20494 === 22))
{var inst_20482 = (state_20493[2]);var state_20493__$1 = state_20493;var statearr_20522_20553 = state_20493__$1;(statearr_20522_20553[2] = inst_20482);
(statearr_20522_20553[1] = 10);
return cljs.core.constant$keyword$248;
} else
{if((state_val_20494 === 23))
{var inst_20479 = (state_20493[2]);var state_20493__$1 = state_20493;var statearr_20523_20554 = state_20493__$1;(statearr_20523_20554[2] = inst_20479);
(statearr_20523_20554[1] = 22);
return cljs.core.constant$keyword$248;
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
var state_machine__5507__auto____0 = (function (){var statearr_20527 = [null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_20527[0] = state_machine__5507__auto__);
(statearr_20527[1] = 1);
return statearr_20527;
});
var state_machine__5507__auto____1 = (function (state_20493){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_20493);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$248))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e20528){if((e20528 instanceof Object))
{var ex__5510__auto__ = e20528;var statearr_20529_20555 = state_20493;(statearr_20529_20555[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_20493);
return cljs.core.constant$keyword$248;
} else
{if(cljs.core.constant$keyword$237)
{throw e20528;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$248))
{{
var G__20556 = state_20493;
state_20493 = G__20556;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_20493){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_20493);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_20530 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_20530[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_20530;
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
var G__20559__delegate = function (req_args){var temp__4090__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(request_handler,req_args);if(cljs.core.truth_(temp__4090__auto__))
{var r = temp__4090__auto__;var rseq = ((cljs.core.sequential_QMARK_(r))?r:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [r], null));var vec__20558 = rseq;var rcomm = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20558,0,null);var result_handler_args = cljs.core.nthnext(vec__20558,1);return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(ocomm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rcomm,result_handler_args], null));
} else
{return null;
}
};
var G__20559 = function (var_args){
var req_args = null;if (arguments.length > 0) {
  req_args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__20559__delegate.call(this,req_args);};
G__20559.cljs$lang$maxFixedArity = 0;
G__20559.cljs$lang$applyTo = (function (arglist__20560){
var req_args = cljs.core.seq(arglist__20560);
return G__20559__delegate(req_args);
});
G__20559.cljs$core$IFn$_invoke$arity$variadic = G__20559__delegate;
return G__20559;
})()
;
});
/**
* @param {...*} var_args
*/
clustermap.api.log_api = (function() { 
var log_api__delegate = function (f,args){var ch = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,args);var c__5521__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_20578){var state_val_20579 = (state_20578[1]);if((state_val_20579 === 2))
{var inst_20575 = (state_20578[2]);var inst_20576 = console.log(inst_20575);var state_20578__$1 = state_20578;return cljs.core.async.impl.ioc_helpers.return_chan(state_20578__$1,inst_20576);
} else
{if((state_val_20579 === 1))
{var state_20578__$1 = state_20578;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20578__$1,2,ch);
} else
{return null;
}
}
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_20583 = [null,null,null,null,null,null,null];(statearr_20583[0] = state_machine__5507__auto__);
(statearr_20583[1] = 1);
return statearr_20583;
});
var state_machine__5507__auto____1 = (function (state_20578){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_20578);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$248))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e20584){if((e20584 instanceof Object))
{var ex__5510__auto__ = e20584;var statearr_20585_20587 = state_20578;(statearr_20585_20587[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_20578);
return cljs.core.constant$keyword$248;
} else
{if(cljs.core.constant$keyword$237)
{throw e20584;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$248))
{{
var G__20588 = state_20578;
state_20578 = G__20588;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_20578){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_20578);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_20586 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_20586[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_20586;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5523__auto__);
}));
return c__5521__auto__;
};
var log_api = function (f,var_args){
var args = null;if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return log_api__delegate.call(this,f,args);};
log_api.cljs$lang$maxFixedArity = 1;
log_api.cljs$lang$applyTo = (function (arglist__20589){
var f = cljs.core.first(arglist__20589);
var args = cljs.core.rest(arglist__20589);
return log_api__delegate(f,args);
});
log_api.cljs$core$IFn$_invoke$arity$variadic = log_api__delegate;
return log_api;
})()
;
clustermap.api.map_json_params = (function map_json_params(m){return clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__20592){var vec__20593 = p__20592;var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20593,0,null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20593,1,null);return [cljs.core.str(cljs.core.name(k)),cljs.core.str("="),cljs.core.str(JSON.stringify(cljs.core.clj__GT_js(v)))].join('');
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
boundarylines.cljs$lang$applyTo = (function (arglist__20594){
var id = cljs.core.first(arglist__20594);
arglist__20594 = cljs.core.next(arglist__20594);
var tolerance = cljs.core.first(arglist__20594);
var opts = cljs.core.rest(arglist__20594);
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
boundaryline_collection_index.cljs$lang$applyTo = (function (arglist__20595){
var id = cljs.core.first(arglist__20595);
var opts = cljs.core.rest(arglist__20595);
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
var constituencies__delegate = function (p__20596){var vec__20598 = p__20596;var type_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20598,0,null);return clustermap.api.GET.cljs$core$IFn$_invoke$arity$variadic("/api/",cljs.core.array_seq([clustermap.api.api_prefix,"/constituencies?",clustermap.api.map_json_params(type_ids)], 0));
};
var constituencies = function (var_args){
var p__20596 = null;if (arguments.length > 0) {
  p__20596 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return constituencies__delegate.call(this,p__20596);};
constituencies.cljs$lang$maxFixedArity = 0;
constituencies.cljs$lang$applyTo = (function (arglist__20599){
var p__20596 = cljs.core.seq(arglist__20599);
return constituencies__delegate(p__20596);
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
var portfolio_companies__delegate = function (p__20600){var vec__20602 = p__20600;var type_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20602,0,null);var type_ids__$1 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$263,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$264,"desc"], null)], null)], 0));return clustermap.api.GET([cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/portfolio-companies?"),cljs.core.str(clustermap.api.map_json_params(type_ids__$1))].join(''));
};
var portfolio_companies = function (var_args){
var p__20600 = null;if (arguments.length > 0) {
  p__20600 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_companies__delegate.call(this,p__20600);};
portfolio_companies.cljs$lang$maxFixedArity = 0;
portfolio_companies.cljs$lang$applyTo = (function (arglist__20603){
var p__20600 = cljs.core.seq(arglist__20603);
return portfolio_companies__delegate(p__20600);
});
portfolio_companies.cljs$core$IFn$_invoke$arity$variadic = portfolio_companies__delegate;
return portfolio_companies;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_stats = (function() { 
var portfolio_company_stats__delegate = function (p__20604){var vec__20606 = p__20604;var type_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20606,0,null);return clustermap.api.GET([cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/portfolio-company-stats?"),cljs.core.str(clustermap.api.map_json_params(type_ids))].join(''));
};
var portfolio_company_stats = function (var_args){
var p__20604 = null;if (arguments.length > 0) {
  p__20604 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_stats__delegate.call(this,p__20604);};
portfolio_company_stats.cljs$lang$maxFixedArity = 0;
portfolio_company_stats.cljs$lang$applyTo = (function (arglist__20607){
var p__20604 = cljs.core.seq(arglist__20607);
return portfolio_company_stats__delegate(p__20604);
});
portfolio_company_stats.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_stats__delegate;
return portfolio_company_stats;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_account_stats = (function() { 
var portfolio_company_account_stats__delegate = function (p__20608){var vec__20610 = p__20608;var type_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20610,0,null);return clustermap.api.GET([cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/portfolio-company-account-stats?"),cljs.core.str(clustermap.api.map_json_params(type_ids))].join(''));
};
var portfolio_company_account_stats = function (var_args){
var p__20608 = null;if (arguments.length > 0) {
  p__20608 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_account_stats__delegate.call(this,p__20608);};
portfolio_company_account_stats.cljs$lang$maxFixedArity = 0;
portfolio_company_account_stats.cljs$lang$applyTo = (function (arglist__20611){
var p__20608 = cljs.core.seq(arglist__20611);
return portfolio_company_account_stats__delegate(p__20608);
});
portfolio_company_account_stats.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_account_stats__delegate;
return portfolio_company_account_stats;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_sites = (function() { 
var portfolio_company_sites__delegate = function (p__20612){var vec__20614 = p__20612;var type_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20614,0,null);var type_ids__$1 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$265,100,cljs.core.constant$keyword$263,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$264,"desc"], null)], null)], null),type_ids], 0));return clustermap.api.GET([cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/portfolio-company-sites?"),cljs.core.str(clustermap.api.map_json_params(type_ids__$1))].join(''));
};
var portfolio_company_sites = function (var_args){
var p__20612 = null;if (arguments.length > 0) {
  p__20612 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_sites__delegate.call(this,p__20612);};
portfolio_company_sites.cljs$lang$maxFixedArity = 0;
portfolio_company_sites.cljs$lang$applyTo = (function (arglist__20615){
var p__20612 = cljs.core.seq(arglist__20615);
return portfolio_company_sites__delegate(p__20612);
});
portfolio_company_sites.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_sites__delegate;
return portfolio_company_sites;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_sites_by_company = (function() { 
var portfolio_company_sites_by_company__delegate = function (p__20616){var vec__20618 = p__20616;var type_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20618,0,null);var type_ids__$1 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$265,100,cljs.core.constant$keyword$263,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$264,"desc"], null)], null)], null),type_ids], 0));return clustermap.api.GET([cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/portfolio-company-sites-by-company?"),cljs.core.str(clustermap.api.map_json_params(type_ids__$1))].join(''));
};
var portfolio_company_sites_by_company = function (var_args){
var p__20616 = null;if (arguments.length > 0) {
  p__20616 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_sites_by_company__delegate.call(this,p__20616);};
portfolio_company_sites_by_company.cljs$lang$maxFixedArity = 0;
portfolio_company_sites_by_company.cljs$lang$applyTo = (function (arglist__20619){
var p__20616 = cljs.core.seq(arglist__20619);
return portfolio_company_sites_by_company__delegate(p__20616);
});
portfolio_company_sites_by_company.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_sites_by_company__delegate;
return portfolio_company_sites_by_company;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_locations = (function() { 
var portfolio_company_locations__delegate = function (p__20620){var vec__20622 = p__20620;var type_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20622,0,null);return clustermap.api.GET([cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/portfolio-company-locations?"),cljs.core.str(clustermap.api.map_json_params(type_ids))].join(''));
};
var portfolio_company_locations = function (var_args){
var p__20620 = null;if (arguments.length > 0) {
  p__20620 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_locations__delegate.call(this,p__20620);};
portfolio_company_locations.cljs$lang$maxFixedArity = 0;
portfolio_company_locations.cljs$lang$applyTo = (function (arglist__20623){
var p__20620 = cljs.core.seq(arglist__20623);
return portfolio_company_locations__delegate(p__20620);
});
portfolio_company_locations.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_locations__delegate;
return portfolio_company_locations;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_site_stats = (function() { 
var portfolio_company_site_stats__delegate = function (p__20624){var vec__20626 = p__20624;var type_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20626,0,null);return clustermap.api.GET([cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/portfolio-company-site-stats?"),cljs.core.str(clustermap.api.map_json_params(type_ids))].join(''));
};
var portfolio_company_site_stats = function (var_args){
var p__20624 = null;if (arguments.length > 0) {
  p__20624 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_site_stats__delegate.call(this,p__20624);};
portfolio_company_site_stats.cljs$lang$maxFixedArity = 0;
portfolio_company_site_stats.cljs$lang$applyTo = (function (arglist__20627){
var p__20624 = cljs.core.seq(arglist__20627);
return portfolio_company_site_stats__delegate(p__20624);
});
portfolio_company_site_stats.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_site_stats__delegate;
return portfolio_company_site_stats;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_site_account_timelines = (function() { 
var portfolio_company_site_account_timelines__delegate = function (p__20628){var vec__20630 = p__20628;var type_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20630,0,null);return clustermap.api.GET([cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/portfolio-company-site-account-timelines?"),cljs.core.str(clustermap.api.map_json_params(type_ids))].join(''));
};
var portfolio_company_site_account_timelines = function (var_args){
var p__20628 = null;if (arguments.length > 0) {
  p__20628 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_site_account_timelines__delegate.call(this,p__20628);};
portfolio_company_site_account_timelines.cljs$lang$maxFixedArity = 0;
portfolio_company_site_account_timelines.cljs$lang$applyTo = (function (arglist__20631){
var p__20628 = cljs.core.seq(arglist__20631);
return portfolio_company_site_account_timelines__delegate(p__20628);
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
var investor_comapnies__delegate = function (p__20632){var vec__20634 = p__20632;var type_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20634,0,null);return clustermap.api.GET([cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/investor-companies?"),cljs.core.str(clustermap.api.map_json_params(type_ids))].join(''));
};
var investor_comapnies = function (var_args){
var p__20632 = null;if (arguments.length > 0) {
  p__20632 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return investor_comapnies__delegate.call(this,p__20632);};
investor_comapnies.cljs$lang$maxFixedArity = 0;
investor_comapnies.cljs$lang$applyTo = (function (arglist__20635){
var p__20632 = cljs.core.seq(arglist__20635);
return investor_comapnies__delegate(p__20632);
});
investor_comapnies.cljs$core$IFn$_invoke$arity$variadic = investor_comapnies__delegate;
return investor_comapnies;
})()
;
