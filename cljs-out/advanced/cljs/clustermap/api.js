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
var GET__delegate = function (url,p__20361){var map__20363 = p__20361;var map__20363__$1 = ((cljs.core.seq_QMARK_(map__20363))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20363):map__20363);var raw = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20363__$1,cljs.core.constant$keyword$262);var comm = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);goog.net.XhrIo.send(url,(function (event){cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,(function (d){if(cljs.core.truth_(raw))
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
var p__20361 = null;if (arguments.length > 1) {
  p__20361 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return GET__delegate.call(this,url,p__20361);};
GET.cljs$lang$maxFixedArity = 1;
GET.cljs$lang$applyTo = (function (arglist__20364){
var url = cljs.core.first(arglist__20364);
var p__20361 = cljs.core.rest(arglist__20364);
return GET__delegate(url,p__20361);
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
clustermap.api.ordered_api_results = (function ordered_api_results(ocomm,handler){var c__5521__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_20497){var state_val_20498 = (state_20497[1]);if((state_val_20498 === 1))
{var state_20497__$1 = state_20497;var statearr_20499_20535 = state_20497__$1;(statearr_20499_20535[2] = null);
(statearr_20499_20535[1] = 2);
return cljs.core.constant$keyword$248;
} else
{if((state_val_20498 === 2))
{var state_20497__$1 = state_20497;if(true)
{var statearr_20500_20536 = state_20497__$1;(statearr_20500_20536[1] = 4);
} else
{var statearr_20501_20537 = state_20497__$1;(statearr_20501_20537[1] = 5);
}
return cljs.core.constant$keyword$248;
} else
{if((state_val_20498 === 3))
{var inst_20495 = (state_20497[2]);var state_20497__$1 = state_20497;return cljs.core.async.impl.ioc_helpers.return_chan(state_20497__$1,inst_20495);
} else
{if((state_val_20498 === 4))
{var state_20497__$1 = state_20497;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20497__$1,7,ocomm);
} else
{if((state_val_20498 === 5))
{var state_20497__$1 = state_20497;var statearr_20502_20538 = state_20497__$1;(statearr_20502_20538[2] = null);
(statearr_20502_20538[1] = 6);
return cljs.core.constant$keyword$248;
} else
{if((state_val_20498 === 6))
{var inst_20493 = (state_20497[2]);var state_20497__$1 = state_20497;var statearr_20503_20539 = state_20497__$1;(statearr_20503_20539[2] = inst_20493);
(statearr_20503_20539[1] = 3);
return cljs.core.constant$keyword$248;
} else
{if((state_val_20498 === 7))
{var inst_20455 = (state_20497[7]);var inst_20454 = (state_20497[2]);var inst_20455__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_20454,0,null);var inst_20456 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_20454,1,null);var inst_20457 = cljs.core.sequential_QMARK_(inst_20455__$1);var state_20497__$1 = (function (){var statearr_20504 = state_20497;(statearr_20504[7] = inst_20455__$1);
(statearr_20504[8] = inst_20456);
return statearr_20504;
})();if(inst_20457)
{var statearr_20505_20540 = state_20497__$1;(statearr_20505_20540[1] = 8);
} else
{var statearr_20506_20541 = state_20497__$1;(statearr_20506_20541[1] = 9);
}
return cljs.core.constant$keyword$248;
} else
{if((state_val_20498 === 8))
{var inst_20455 = (state_20497[7]);var inst_20459 = inst_20455;var inst_20460 = cljs.core.PersistentVector.EMPTY;var state_20497__$1 = (function (){var statearr_20507 = state_20497;(statearr_20507[9] = inst_20459);
(statearr_20507[10] = inst_20460);
return statearr_20507;
})();var statearr_20508_20542 = state_20497__$1;(statearr_20508_20542[2] = null);
(statearr_20508_20542[1] = 11);
return cljs.core.constant$keyword$248;
} else
{if((state_val_20498 === 9))
{var inst_20455 = (state_20497[7]);var state_20497__$1 = state_20497;if(cljs.core.truth_(inst_20455))
{var statearr_20509_20543 = state_20497__$1;(statearr_20509_20543[1] = 20);
} else
{var statearr_20510_20544 = state_20497__$1;(statearr_20510_20544[1] = 21);
}
return cljs.core.constant$keyword$248;
} else
{if((state_val_20498 === 10))
{var inst_20456 = (state_20497[8]);var inst_20488 = (state_20497[2]);var inst_20489 = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(handler,inst_20488,inst_20456);var state_20497__$1 = (function (){var statearr_20511 = state_20497;(statearr_20511[11] = inst_20489);
return statearr_20511;
})();var statearr_20512_20545 = state_20497__$1;(statearr_20512_20545[2] = null);
(statearr_20512_20545[1] = 2);
return cljs.core.constant$keyword$248;
} else
{if((state_val_20498 === 11))
{var inst_20459 = (state_20497[9]);var inst_20462 = cljs.core.empty_QMARK_(inst_20459);var state_20497__$1 = state_20497;if(inst_20462)
{var statearr_20513_20546 = state_20497__$1;(statearr_20513_20546[1] = 13);
} else
{var statearr_20514_20547 = state_20497__$1;(statearr_20514_20547[1] = 14);
}
return cljs.core.constant$keyword$248;
} else
{if((state_val_20498 === 12))
{var inst_20479 = (state_20497[2]);var state_20497__$1 = state_20497;var statearr_20515_20548 = state_20497__$1;(statearr_20515_20548[2] = inst_20479);
(statearr_20515_20548[1] = 10);
return cljs.core.constant$keyword$248;
} else
{if((state_val_20498 === 13))
{var inst_20460 = (state_20497[10]);var state_20497__$1 = state_20497;var statearr_20516_20549 = state_20497__$1;(statearr_20516_20549[2] = inst_20460);
(statearr_20516_20549[1] = 15);
return cljs.core.constant$keyword$248;
} else
{if((state_val_20498 === 14))
{var inst_20459 = (state_20497[9]);var inst_20465 = cljs.core.rest(inst_20459);var inst_20466 = cljs.core.first(inst_20459);var state_20497__$1 = (function (){var statearr_20517 = state_20497;(statearr_20517[12] = inst_20465);
return statearr_20517;
})();if(cljs.core.truth_(inst_20466))
{var statearr_20518_20550 = state_20497__$1;(statearr_20518_20550[1] = 16);
} else
{var statearr_20519_20551 = state_20497__$1;(statearr_20519_20551[1] = 17);
}
return cljs.core.constant$keyword$248;
} else
{if((state_val_20498 === 15))
{var inst_20477 = (state_20497[2]);var state_20497__$1 = state_20497;var statearr_20520_20552 = state_20497__$1;(statearr_20520_20552[2] = inst_20477);
(statearr_20520_20552[1] = 12);
return cljs.core.constant$keyword$248;
} else
{if((state_val_20498 === 16))
{var inst_20459 = (state_20497[9]);var inst_20468 = cljs.core.first(inst_20459);var state_20497__$1 = state_20497;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20497__$1,19,inst_20468);
} else
{if((state_val_20498 === 17))
{var state_20497__$1 = state_20497;var statearr_20521_20553 = state_20497__$1;(statearr_20521_20553[2] = null);
(statearr_20521_20553[1] = 18);
return cljs.core.constant$keyword$248;
} else
{if((state_val_20498 === 18))
{var inst_20460 = (state_20497[10]);var inst_20465 = (state_20497[12]);var inst_20473 = (state_20497[2]);var inst_20474 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(inst_20460,inst_20473);var inst_20459 = inst_20465;var inst_20460__$1 = inst_20474;var state_20497__$1 = (function (){var statearr_20522 = state_20497;(statearr_20522[9] = inst_20459);
(statearr_20522[10] = inst_20460__$1);
return statearr_20522;
})();var statearr_20523_20554 = state_20497__$1;(statearr_20523_20554[2] = null);
(statearr_20523_20554[1] = 11);
return cljs.core.constant$keyword$248;
} else
{if((state_val_20498 === 19))
{var inst_20470 = (state_20497[2]);var state_20497__$1 = state_20497;var statearr_20524_20555 = state_20497__$1;(statearr_20524_20555[2] = inst_20470);
(statearr_20524_20555[1] = 18);
return cljs.core.constant$keyword$248;
} else
{if((state_val_20498 === 20))
{var inst_20455 = (state_20497[7]);var state_20497__$1 = state_20497;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20497__$1,23,inst_20455);
} else
{if((state_val_20498 === 21))
{var state_20497__$1 = state_20497;var statearr_20525_20556 = state_20497__$1;(statearr_20525_20556[2] = null);
(statearr_20525_20556[1] = 22);
return cljs.core.constant$keyword$248;
} else
{if((state_val_20498 === 22))
{var inst_20486 = (state_20497[2]);var state_20497__$1 = state_20497;var statearr_20526_20557 = state_20497__$1;(statearr_20526_20557[2] = inst_20486);
(statearr_20526_20557[1] = 10);
return cljs.core.constant$keyword$248;
} else
{if((state_val_20498 === 23))
{var inst_20483 = (state_20497[2]);var state_20497__$1 = state_20497;var statearr_20527_20558 = state_20497__$1;(statearr_20527_20558[2] = inst_20483);
(statearr_20527_20558[1] = 22);
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
var state_machine__5507__auto____0 = (function (){var statearr_20531 = [null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_20531[0] = state_machine__5507__auto__);
(statearr_20531[1] = 1);
return statearr_20531;
});
var state_machine__5507__auto____1 = (function (state_20497){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_20497);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$248))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e20532){if((e20532 instanceof Object))
{var ex__5510__auto__ = e20532;var statearr_20533_20559 = state_20497;(statearr_20533_20559[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_20497);
return cljs.core.constant$keyword$248;
} else
{if(cljs.core.constant$keyword$237)
{throw e20532;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$248))
{{
var G__20560 = state_20497;
state_20497 = G__20560;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_20497){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_20497);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_20534 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_20534[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_20534;
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
var G__20563__delegate = function (req_args){var temp__4090__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(request_handler,req_args);if(cljs.core.truth_(temp__4090__auto__))
{var r = temp__4090__auto__;var rseq = ((cljs.core.sequential_QMARK_(r))?r:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [r], null));var vec__20562 = rseq;var rcomm = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20562,0,null);var result_handler_args = cljs.core.nthnext(vec__20562,1);return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(ocomm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rcomm,result_handler_args], null));
} else
{return null;
}
};
var G__20563 = function (var_args){
var req_args = null;if (arguments.length > 0) {
  req_args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__20563__delegate.call(this,req_args);};
G__20563.cljs$lang$maxFixedArity = 0;
G__20563.cljs$lang$applyTo = (function (arglist__20564){
var req_args = cljs.core.seq(arglist__20564);
return G__20563__delegate(req_args);
});
G__20563.cljs$core$IFn$_invoke$arity$variadic = G__20563__delegate;
return G__20563;
})()
;
});
/**
* @param {...*} var_args
*/
clustermap.api.log_api = (function() { 
var log_api__delegate = function (f,args){var ch = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,args);var c__5521__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_20582){var state_val_20583 = (state_20582[1]);if((state_val_20583 === 2))
{var inst_20579 = (state_20582[2]);var inst_20580 = console.log(inst_20579);var state_20582__$1 = state_20582;return cljs.core.async.impl.ioc_helpers.return_chan(state_20582__$1,inst_20580);
} else
{if((state_val_20583 === 1))
{var state_20582__$1 = state_20582;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20582__$1,2,ch);
} else
{return null;
}
}
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_20587 = [null,null,null,null,null,null,null];(statearr_20587[0] = state_machine__5507__auto__);
(statearr_20587[1] = 1);
return statearr_20587;
});
var state_machine__5507__auto____1 = (function (state_20582){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_20582);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$248))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e20588){if((e20588 instanceof Object))
{var ex__5510__auto__ = e20588;var statearr_20589_20591 = state_20582;(statearr_20589_20591[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_20582);
return cljs.core.constant$keyword$248;
} else
{if(cljs.core.constant$keyword$237)
{throw e20588;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$248))
{{
var G__20592 = state_20582;
state_20582 = G__20592;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_20582){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_20582);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_20590 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_20590[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_20590;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5523__auto__);
}));
return c__5521__auto__;
};
var log_api = function (f,var_args){
var args = null;if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return log_api__delegate.call(this,f,args);};
log_api.cljs$lang$maxFixedArity = 1;
log_api.cljs$lang$applyTo = (function (arglist__20593){
var f = cljs.core.first(arglist__20593);
var args = cljs.core.rest(arglist__20593);
return log_api__delegate(f,args);
});
log_api.cljs$core$IFn$_invoke$arity$variadic = log_api__delegate;
return log_api;
})()
;
clustermap.api.map_json_params = (function map_json_params(m){return clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__20596){var vec__20597 = p__20596;var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20597,0,null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20597,1,null);return [cljs.core.str(cljs.core.name(k)),cljs.core.str("="),cljs.core.str(JSON.stringify(cljs.core.clj__GT_js(v)))].join('');
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
boundarylines.cljs$lang$applyTo = (function (arglist__20598){
var id = cljs.core.first(arglist__20598);
arglist__20598 = cljs.core.next(arglist__20598);
var tolerance = cljs.core.first(arglist__20598);
var opts = cljs.core.rest(arglist__20598);
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
boundaryline_collection_index.cljs$lang$applyTo = (function (arglist__20599){
var id = cljs.core.first(arglist__20599);
var opts = cljs.core.rest(arglist__20599);
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
var constituencies__delegate = function (p__20600){var vec__20602 = p__20600;var type_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20602,0,null);return clustermap.api.GET.cljs$core$IFn$_invoke$arity$variadic("/api/",cljs.core.array_seq([clustermap.api.api_prefix,"/constituencies?",clustermap.api.map_json_params(type_ids)], 0));
};
var constituencies = function (var_args){
var p__20600 = null;if (arguments.length > 0) {
  p__20600 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return constituencies__delegate.call(this,p__20600);};
constituencies.cljs$lang$maxFixedArity = 0;
constituencies.cljs$lang$applyTo = (function (arglist__20603){
var p__20600 = cljs.core.seq(arglist__20603);
return constituencies__delegate(p__20600);
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
var portfolio_companies__delegate = function (p__20604){var vec__20606 = p__20604;var type_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20606,0,null);var type_ids__$1 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$263,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$264,"desc"], null)], null)], 0));return clustermap.api.GET([cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/portfolio-companies?"),cljs.core.str(clustermap.api.map_json_params(type_ids__$1))].join(''));
};
var portfolio_companies = function (var_args){
var p__20604 = null;if (arguments.length > 0) {
  p__20604 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_companies__delegate.call(this,p__20604);};
portfolio_companies.cljs$lang$maxFixedArity = 0;
portfolio_companies.cljs$lang$applyTo = (function (arglist__20607){
var p__20604 = cljs.core.seq(arglist__20607);
return portfolio_companies__delegate(p__20604);
});
portfolio_companies.cljs$core$IFn$_invoke$arity$variadic = portfolio_companies__delegate;
return portfolio_companies;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_stats = (function() { 
var portfolio_company_stats__delegate = function (p__20608){var vec__20610 = p__20608;var type_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20610,0,null);return clustermap.api.GET([cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/portfolio-company-stats?"),cljs.core.str(clustermap.api.map_json_params(type_ids))].join(''));
};
var portfolio_company_stats = function (var_args){
var p__20608 = null;if (arguments.length > 0) {
  p__20608 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_stats__delegate.call(this,p__20608);};
portfolio_company_stats.cljs$lang$maxFixedArity = 0;
portfolio_company_stats.cljs$lang$applyTo = (function (arglist__20611){
var p__20608 = cljs.core.seq(arglist__20611);
return portfolio_company_stats__delegate(p__20608);
});
portfolio_company_stats.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_stats__delegate;
return portfolio_company_stats;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_account_stats = (function() { 
var portfolio_company_account_stats__delegate = function (p__20612){var vec__20614 = p__20612;var type_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20614,0,null);return clustermap.api.GET([cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/portfolio-company-account-stats?"),cljs.core.str(clustermap.api.map_json_params(type_ids))].join(''));
};
var portfolio_company_account_stats = function (var_args){
var p__20612 = null;if (arguments.length > 0) {
  p__20612 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_account_stats__delegate.call(this,p__20612);};
portfolio_company_account_stats.cljs$lang$maxFixedArity = 0;
portfolio_company_account_stats.cljs$lang$applyTo = (function (arglist__20615){
var p__20612 = cljs.core.seq(arglist__20615);
return portfolio_company_account_stats__delegate(p__20612);
});
portfolio_company_account_stats.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_account_stats__delegate;
return portfolio_company_account_stats;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_sites = (function() { 
var portfolio_company_sites__delegate = function (p__20616){var vec__20618 = p__20616;var type_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20618,0,null);var type_ids__$1 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$265,100,cljs.core.constant$keyword$263,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$264,"desc"], null)], null)], null),type_ids], 0));return clustermap.api.GET([cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/portfolio-company-sites?"),cljs.core.str(clustermap.api.map_json_params(type_ids__$1))].join(''));
};
var portfolio_company_sites = function (var_args){
var p__20616 = null;if (arguments.length > 0) {
  p__20616 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_sites__delegate.call(this,p__20616);};
portfolio_company_sites.cljs$lang$maxFixedArity = 0;
portfolio_company_sites.cljs$lang$applyTo = (function (arglist__20619){
var p__20616 = cljs.core.seq(arglist__20619);
return portfolio_company_sites__delegate(p__20616);
});
portfolio_company_sites.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_sites__delegate;
return portfolio_company_sites;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_sites_by_company = (function() { 
var portfolio_company_sites_by_company__delegate = function (p__20620){var vec__20622 = p__20620;var type_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20622,0,null);var type_ids__$1 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$265,100,cljs.core.constant$keyword$263,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$264,"desc"], null)], null)], null),type_ids], 0));return clustermap.api.GET([cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/portfolio-company-sites-by-company?"),cljs.core.str(clustermap.api.map_json_params(type_ids__$1))].join(''));
};
var portfolio_company_sites_by_company = function (var_args){
var p__20620 = null;if (arguments.length > 0) {
  p__20620 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_sites_by_company__delegate.call(this,p__20620);};
portfolio_company_sites_by_company.cljs$lang$maxFixedArity = 0;
portfolio_company_sites_by_company.cljs$lang$applyTo = (function (arglist__20623){
var p__20620 = cljs.core.seq(arglist__20623);
return portfolio_company_sites_by_company__delegate(p__20620);
});
portfolio_company_sites_by_company.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_sites_by_company__delegate;
return portfolio_company_sites_by_company;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_locations = (function() { 
var portfolio_company_locations__delegate = function (p__20624){var vec__20626 = p__20624;var type_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20626,0,null);return clustermap.api.GET([cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/portfolio-company-locations?"),cljs.core.str(clustermap.api.map_json_params(type_ids))].join(''));
};
var portfolio_company_locations = function (var_args){
var p__20624 = null;if (arguments.length > 0) {
  p__20624 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_locations__delegate.call(this,p__20624);};
portfolio_company_locations.cljs$lang$maxFixedArity = 0;
portfolio_company_locations.cljs$lang$applyTo = (function (arglist__20627){
var p__20624 = cljs.core.seq(arglist__20627);
return portfolio_company_locations__delegate(p__20624);
});
portfolio_company_locations.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_locations__delegate;
return portfolio_company_locations;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_site_stats = (function() { 
var portfolio_company_site_stats__delegate = function (p__20628){var vec__20630 = p__20628;var type_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20630,0,null);return clustermap.api.GET([cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/portfolio-company-site-stats?"),cljs.core.str(clustermap.api.map_json_params(type_ids))].join(''));
};
var portfolio_company_site_stats = function (var_args){
var p__20628 = null;if (arguments.length > 0) {
  p__20628 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_site_stats__delegate.call(this,p__20628);};
portfolio_company_site_stats.cljs$lang$maxFixedArity = 0;
portfolio_company_site_stats.cljs$lang$applyTo = (function (arglist__20631){
var p__20628 = cljs.core.seq(arglist__20631);
return portfolio_company_site_stats__delegate(p__20628);
});
portfolio_company_site_stats.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_site_stats__delegate;
return portfolio_company_site_stats;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_site_account_timelines = (function() { 
var portfolio_company_site_account_timelines__delegate = function (p__20632){var vec__20634 = p__20632;var type_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20634,0,null);return clustermap.api.GET([cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/portfolio-company-site-account-timelines?"),cljs.core.str(clustermap.api.map_json_params(type_ids))].join(''));
};
var portfolio_company_site_account_timelines = function (var_args){
var p__20632 = null;if (arguments.length > 0) {
  p__20632 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_site_account_timelines__delegate.call(this,p__20632);};
portfolio_company_site_account_timelines.cljs$lang$maxFixedArity = 0;
portfolio_company_site_account_timelines.cljs$lang$applyTo = (function (arglist__20635){
var p__20632 = cljs.core.seq(arglist__20635);
return portfolio_company_site_account_timelines__delegate(p__20632);
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
var investor_comapnies__delegate = function (p__20636){var vec__20638 = p__20636;var type_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20638,0,null);return clustermap.api.GET([cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/investor-companies?"),cljs.core.str(clustermap.api.map_json_params(type_ids))].join(''));
};
var investor_comapnies = function (var_args){
var p__20636 = null;if (arguments.length > 0) {
  p__20636 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return investor_comapnies__delegate.call(this,p__20636);};
investor_comapnies.cljs$lang$maxFixedArity = 0;
investor_comapnies.cljs$lang$applyTo = (function (arglist__20639){
var p__20636 = cljs.core.seq(arglist__20639);
return investor_comapnies__delegate(p__20636);
});
investor_comapnies.cljs$core$IFn$_invoke$arity$variadic = investor_comapnies__delegate;
return investor_comapnies;
})()
;
