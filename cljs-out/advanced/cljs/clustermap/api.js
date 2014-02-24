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
var GET__delegate = function (url,p__20337){var map__20339 = p__20337;var map__20339__$1 = ((cljs.core.seq_QMARK_(map__20339))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20339):map__20339);var raw = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20339__$1,cljs.core.constant$keyword$262);var comm = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);goog.net.XhrIo.send(url,(function (event){cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,(function (d){if(cljs.core.truth_(raw))
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
var p__20337 = null;if (arguments.length > 1) {
  p__20337 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return GET__delegate.call(this,url,p__20337);};
GET.cljs$lang$maxFixedArity = 1;
GET.cljs$lang$applyTo = (function (arglist__20340){
var url = cljs.core.first(arglist__20340);
var p__20337 = cljs.core.rest(arglist__20340);
return GET__delegate(url,p__20337);
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
clustermap.api.ordered_api_results = (function ordered_api_results(ocomm,handler){var c__5521__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_20473){var state_val_20474 = (state_20473[1]);if((state_val_20474 === 1))
{var state_20473__$1 = state_20473;var statearr_20475_20511 = state_20473__$1;(statearr_20475_20511[2] = null);
(statearr_20475_20511[1] = 2);
return cljs.core.constant$keyword$248;
} else
{if((state_val_20474 === 2))
{var state_20473__$1 = state_20473;if(true)
{var statearr_20476_20512 = state_20473__$1;(statearr_20476_20512[1] = 4);
} else
{var statearr_20477_20513 = state_20473__$1;(statearr_20477_20513[1] = 5);
}
return cljs.core.constant$keyword$248;
} else
{if((state_val_20474 === 3))
{var inst_20471 = (state_20473[2]);var state_20473__$1 = state_20473;return cljs.core.async.impl.ioc_helpers.return_chan(state_20473__$1,inst_20471);
} else
{if((state_val_20474 === 4))
{var state_20473__$1 = state_20473;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20473__$1,7,ocomm);
} else
{if((state_val_20474 === 5))
{var state_20473__$1 = state_20473;var statearr_20478_20514 = state_20473__$1;(statearr_20478_20514[2] = null);
(statearr_20478_20514[1] = 6);
return cljs.core.constant$keyword$248;
} else
{if((state_val_20474 === 6))
{var inst_20469 = (state_20473[2]);var state_20473__$1 = state_20473;var statearr_20479_20515 = state_20473__$1;(statearr_20479_20515[2] = inst_20469);
(statearr_20479_20515[1] = 3);
return cljs.core.constant$keyword$248;
} else
{if((state_val_20474 === 7))
{var inst_20431 = (state_20473[7]);var inst_20430 = (state_20473[2]);var inst_20431__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_20430,0,null);var inst_20432 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_20430,1,null);var inst_20433 = cljs.core.sequential_QMARK_(inst_20431__$1);var state_20473__$1 = (function (){var statearr_20480 = state_20473;(statearr_20480[8] = inst_20432);
(statearr_20480[7] = inst_20431__$1);
return statearr_20480;
})();if(inst_20433)
{var statearr_20481_20516 = state_20473__$1;(statearr_20481_20516[1] = 8);
} else
{var statearr_20482_20517 = state_20473__$1;(statearr_20482_20517[1] = 9);
}
return cljs.core.constant$keyword$248;
} else
{if((state_val_20474 === 8))
{var inst_20431 = (state_20473[7]);var inst_20435 = inst_20431;var inst_20436 = cljs.core.PersistentVector.EMPTY;var state_20473__$1 = (function (){var statearr_20483 = state_20473;(statearr_20483[9] = inst_20435);
(statearr_20483[10] = inst_20436);
return statearr_20483;
})();var statearr_20484_20518 = state_20473__$1;(statearr_20484_20518[2] = null);
(statearr_20484_20518[1] = 11);
return cljs.core.constant$keyword$248;
} else
{if((state_val_20474 === 9))
{var inst_20431 = (state_20473[7]);var state_20473__$1 = state_20473;if(cljs.core.truth_(inst_20431))
{var statearr_20485_20519 = state_20473__$1;(statearr_20485_20519[1] = 20);
} else
{var statearr_20486_20520 = state_20473__$1;(statearr_20486_20520[1] = 21);
}
return cljs.core.constant$keyword$248;
} else
{if((state_val_20474 === 10))
{var inst_20432 = (state_20473[8]);var inst_20464 = (state_20473[2]);var inst_20465 = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(handler,inst_20464,inst_20432);var state_20473__$1 = (function (){var statearr_20487 = state_20473;(statearr_20487[11] = inst_20465);
return statearr_20487;
})();var statearr_20488_20521 = state_20473__$1;(statearr_20488_20521[2] = null);
(statearr_20488_20521[1] = 2);
return cljs.core.constant$keyword$248;
} else
{if((state_val_20474 === 11))
{var inst_20435 = (state_20473[9]);var inst_20438 = cljs.core.empty_QMARK_(inst_20435);var state_20473__$1 = state_20473;if(inst_20438)
{var statearr_20489_20522 = state_20473__$1;(statearr_20489_20522[1] = 13);
} else
{var statearr_20490_20523 = state_20473__$1;(statearr_20490_20523[1] = 14);
}
return cljs.core.constant$keyword$248;
} else
{if((state_val_20474 === 12))
{var inst_20455 = (state_20473[2]);var state_20473__$1 = state_20473;var statearr_20491_20524 = state_20473__$1;(statearr_20491_20524[2] = inst_20455);
(statearr_20491_20524[1] = 10);
return cljs.core.constant$keyword$248;
} else
{if((state_val_20474 === 13))
{var inst_20436 = (state_20473[10]);var state_20473__$1 = state_20473;var statearr_20492_20525 = state_20473__$1;(statearr_20492_20525[2] = inst_20436);
(statearr_20492_20525[1] = 15);
return cljs.core.constant$keyword$248;
} else
{if((state_val_20474 === 14))
{var inst_20435 = (state_20473[9]);var inst_20441 = cljs.core.rest(inst_20435);var inst_20442 = cljs.core.first(inst_20435);var state_20473__$1 = (function (){var statearr_20493 = state_20473;(statearr_20493[12] = inst_20441);
return statearr_20493;
})();if(cljs.core.truth_(inst_20442))
{var statearr_20494_20526 = state_20473__$1;(statearr_20494_20526[1] = 16);
} else
{var statearr_20495_20527 = state_20473__$1;(statearr_20495_20527[1] = 17);
}
return cljs.core.constant$keyword$248;
} else
{if((state_val_20474 === 15))
{var inst_20453 = (state_20473[2]);var state_20473__$1 = state_20473;var statearr_20496_20528 = state_20473__$1;(statearr_20496_20528[2] = inst_20453);
(statearr_20496_20528[1] = 12);
return cljs.core.constant$keyword$248;
} else
{if((state_val_20474 === 16))
{var inst_20435 = (state_20473[9]);var inst_20444 = cljs.core.first(inst_20435);var state_20473__$1 = state_20473;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20473__$1,19,inst_20444);
} else
{if((state_val_20474 === 17))
{var state_20473__$1 = state_20473;var statearr_20497_20529 = state_20473__$1;(statearr_20497_20529[2] = null);
(statearr_20497_20529[1] = 18);
return cljs.core.constant$keyword$248;
} else
{if((state_val_20474 === 18))
{var inst_20441 = (state_20473[12]);var inst_20436 = (state_20473[10]);var inst_20449 = (state_20473[2]);var inst_20450 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(inst_20436,inst_20449);var inst_20435 = inst_20441;var inst_20436__$1 = inst_20450;var state_20473__$1 = (function (){var statearr_20498 = state_20473;(statearr_20498[9] = inst_20435);
(statearr_20498[10] = inst_20436__$1);
return statearr_20498;
})();var statearr_20499_20530 = state_20473__$1;(statearr_20499_20530[2] = null);
(statearr_20499_20530[1] = 11);
return cljs.core.constant$keyword$248;
} else
{if((state_val_20474 === 19))
{var inst_20446 = (state_20473[2]);var state_20473__$1 = state_20473;var statearr_20500_20531 = state_20473__$1;(statearr_20500_20531[2] = inst_20446);
(statearr_20500_20531[1] = 18);
return cljs.core.constant$keyword$248;
} else
{if((state_val_20474 === 20))
{var inst_20431 = (state_20473[7]);var state_20473__$1 = state_20473;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20473__$1,23,inst_20431);
} else
{if((state_val_20474 === 21))
{var state_20473__$1 = state_20473;var statearr_20501_20532 = state_20473__$1;(statearr_20501_20532[2] = null);
(statearr_20501_20532[1] = 22);
return cljs.core.constant$keyword$248;
} else
{if((state_val_20474 === 22))
{var inst_20462 = (state_20473[2]);var state_20473__$1 = state_20473;var statearr_20502_20533 = state_20473__$1;(statearr_20502_20533[2] = inst_20462);
(statearr_20502_20533[1] = 10);
return cljs.core.constant$keyword$248;
} else
{if((state_val_20474 === 23))
{var inst_20459 = (state_20473[2]);var state_20473__$1 = state_20473;var statearr_20503_20534 = state_20473__$1;(statearr_20503_20534[2] = inst_20459);
(statearr_20503_20534[1] = 22);
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
var state_machine__5507__auto____0 = (function (){var statearr_20507 = [null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_20507[0] = state_machine__5507__auto__);
(statearr_20507[1] = 1);
return statearr_20507;
});
var state_machine__5507__auto____1 = (function (state_20473){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_20473);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$248))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e20508){if((e20508 instanceof Object))
{var ex__5510__auto__ = e20508;var statearr_20509_20535 = state_20473;(statearr_20509_20535[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_20473);
return cljs.core.constant$keyword$248;
} else
{if(cljs.core.constant$keyword$237)
{throw e20508;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$248))
{{
var G__20536 = state_20473;
state_20473 = G__20536;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_20473){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_20473);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_20510 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_20510[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_20510;
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
var G__20539__delegate = function (req_args){var temp__4090__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(request_handler,req_args);if(cljs.core.truth_(temp__4090__auto__))
{var r = temp__4090__auto__;var rseq = ((cljs.core.sequential_QMARK_(r))?r:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [r], null));var vec__20538 = rseq;var rcomm = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20538,0,null);var result_handler_args = cljs.core.nthnext(vec__20538,1);return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(ocomm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rcomm,result_handler_args], null));
} else
{return null;
}
};
var G__20539 = function (var_args){
var req_args = null;if (arguments.length > 0) {
  req_args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__20539__delegate.call(this,req_args);};
G__20539.cljs$lang$maxFixedArity = 0;
G__20539.cljs$lang$applyTo = (function (arglist__20540){
var req_args = cljs.core.seq(arglist__20540);
return G__20539__delegate(req_args);
});
G__20539.cljs$core$IFn$_invoke$arity$variadic = G__20539__delegate;
return G__20539;
})()
;
});
/**
* @param {...*} var_args
*/
clustermap.api.log_api = (function() { 
var log_api__delegate = function (f,args){var ch = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,args);var c__5521__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_20558){var state_val_20559 = (state_20558[1]);if((state_val_20559 === 2))
{var inst_20555 = (state_20558[2]);var inst_20556 = console.log(inst_20555);var state_20558__$1 = state_20558;return cljs.core.async.impl.ioc_helpers.return_chan(state_20558__$1,inst_20556);
} else
{if((state_val_20559 === 1))
{var state_20558__$1 = state_20558;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20558__$1,2,ch);
} else
{return null;
}
}
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_20563 = [null,null,null,null,null,null,null];(statearr_20563[0] = state_machine__5507__auto__);
(statearr_20563[1] = 1);
return statearr_20563;
});
var state_machine__5507__auto____1 = (function (state_20558){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_20558);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$248))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e20564){if((e20564 instanceof Object))
{var ex__5510__auto__ = e20564;var statearr_20565_20567 = state_20558;(statearr_20565_20567[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_20558);
return cljs.core.constant$keyword$248;
} else
{if(cljs.core.constant$keyword$237)
{throw e20564;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$248))
{{
var G__20568 = state_20558;
state_20558 = G__20568;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_20558){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_20558);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_20566 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_20566[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_20566;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5523__auto__);
}));
return c__5521__auto__;
};
var log_api = function (f,var_args){
var args = null;if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return log_api__delegate.call(this,f,args);};
log_api.cljs$lang$maxFixedArity = 1;
log_api.cljs$lang$applyTo = (function (arglist__20569){
var f = cljs.core.first(arglist__20569);
var args = cljs.core.rest(arglist__20569);
return log_api__delegate(f,args);
});
log_api.cljs$core$IFn$_invoke$arity$variadic = log_api__delegate;
return log_api;
})()
;
clustermap.api.map_json_params = (function map_json_params(m){return clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__20572){var vec__20573 = p__20572;var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20573,0,null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20573,1,null);return [cljs.core.str(cljs.core.name(k)),cljs.core.str("="),cljs.core.str(JSON.stringify(cljs.core.clj__GT_js(v)))].join('');
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
boundarylines.cljs$lang$applyTo = (function (arglist__20574){
var id = cljs.core.first(arglist__20574);
arglist__20574 = cljs.core.next(arglist__20574);
var tolerance = cljs.core.first(arglist__20574);
var opts = cljs.core.rest(arglist__20574);
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
boundaryline_collection_index.cljs$lang$applyTo = (function (arglist__20575){
var id = cljs.core.first(arglist__20575);
var opts = cljs.core.rest(arglist__20575);
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
clustermap.api.portfolio_company = (function portfolio_company(id){return clustermap.api.GET([cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/portfolio-companies/"),cljs.core.str(id)].join(''));
});
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_sites = (function() { 
var portfolio_company_sites__delegate = function (p__20576){var vec__20578 = p__20576;var type_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20578,0,null);var type_ids__$1 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$263,100,cljs.core.constant$keyword$264,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$265,"desc"], null)], null)], null),type_ids], 0));return clustermap.api.GET([cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/portfolio-company-sites?"),cljs.core.str(clustermap.api.map_json_params(type_ids__$1))].join(''));
};
var portfolio_company_sites = function (var_args){
var p__20576 = null;if (arguments.length > 0) {
  p__20576 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_sites__delegate.call(this,p__20576);};
portfolio_company_sites.cljs$lang$maxFixedArity = 0;
portfolio_company_sites.cljs$lang$applyTo = (function (arglist__20579){
var p__20576 = cljs.core.seq(arglist__20579);
return portfolio_company_sites__delegate(p__20576);
});
portfolio_company_sites.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_sites__delegate;
return portfolio_company_sites;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_sites_by_company = (function() { 
var portfolio_company_sites_by_company__delegate = function (p__20580){var vec__20582 = p__20580;var type_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20582,0,null);var type_ids__$1 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$263,100,cljs.core.constant$keyword$264,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$265,"desc"], null)], null)], null),type_ids], 0));return clustermap.api.GET([cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/portfolio-company-sites-by-company?"),cljs.core.str(clustermap.api.map_json_params(type_ids__$1))].join(''));
};
var portfolio_company_sites_by_company = function (var_args){
var p__20580 = null;if (arguments.length > 0) {
  p__20580 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_sites_by_company__delegate.call(this,p__20580);};
portfolio_company_sites_by_company.cljs$lang$maxFixedArity = 0;
portfolio_company_sites_by_company.cljs$lang$applyTo = (function (arglist__20583){
var p__20580 = cljs.core.seq(arglist__20583);
return portfolio_company_sites_by_company__delegate(p__20580);
});
portfolio_company_sites_by_company.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_sites_by_company__delegate;
return portfolio_company_sites_by_company;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_locations = (function() { 
var portfolio_company_locations__delegate = function (p__20584){var vec__20586 = p__20584;var type_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20586,0,null);return clustermap.api.GET([cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/portfolio-company-locations?"),cljs.core.str(clustermap.api.map_json_params(type_ids))].join(''));
};
var portfolio_company_locations = function (var_args){
var p__20584 = null;if (arguments.length > 0) {
  p__20584 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_locations__delegate.call(this,p__20584);};
portfolio_company_locations.cljs$lang$maxFixedArity = 0;
portfolio_company_locations.cljs$lang$applyTo = (function (arglist__20587){
var p__20584 = cljs.core.seq(arglist__20587);
return portfolio_company_locations__delegate(p__20584);
});
portfolio_company_locations.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_locations__delegate;
return portfolio_company_locations;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_site_stats = (function() { 
var portfolio_company_site_stats__delegate = function (p__20588){var vec__20590 = p__20588;var type_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20590,0,null);return clustermap.api.GET([cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/portfolio-company-site-stats?"),cljs.core.str(clustermap.api.map_json_params(type_ids))].join(''));
};
var portfolio_company_site_stats = function (var_args){
var p__20588 = null;if (arguments.length > 0) {
  p__20588 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_site_stats__delegate.call(this,p__20588);};
portfolio_company_site_stats.cljs$lang$maxFixedArity = 0;
portfolio_company_site_stats.cljs$lang$applyTo = (function (arglist__20591){
var p__20588 = cljs.core.seq(arglist__20591);
return portfolio_company_site_stats__delegate(p__20588);
});
portfolio_company_site_stats.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_site_stats__delegate;
return portfolio_company_site_stats;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_site_account_timelines = (function() { 
var portfolio_company_site_account_timelines__delegate = function (p__20592){var vec__20594 = p__20592;var type_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20594,0,null);return clustermap.api.GET([cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/portfolio-company-site-account-timelines?"),cljs.core.str(clustermap.api.map_json_params(type_ids))].join(''));
};
var portfolio_company_site_account_timelines = function (var_args){
var p__20592 = null;if (arguments.length > 0) {
  p__20592 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_site_account_timelines__delegate.call(this,p__20592);};
portfolio_company_site_account_timelines.cljs$lang$maxFixedArity = 0;
portfolio_company_site_account_timelines.cljs$lang$applyTo = (function (arglist__20595){
var p__20592 = cljs.core.seq(arglist__20595);
return portfolio_company_site_account_timelines__delegate(p__20592);
});
portfolio_company_site_account_timelines.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_site_account_timelines__delegate;
return portfolio_company_site_account_timelines;
})()
;
clustermap.api.investor_company = (function investor_company(id){return clustermap.api.GET([cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/investor-companies/"),cljs.core.str(id)].join(''));
});
