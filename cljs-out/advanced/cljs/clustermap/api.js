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
var GET__delegate = function (url,p__20335){var map__20337 = p__20335;var map__20337__$1 = ((cljs.core.seq_QMARK_(map__20337))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20337):map__20337);var raw = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20337__$1,cljs.core.constant$keyword$255);var comm = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);goog.net.XhrIo.send(url,(function (event){cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,(function (d){if(cljs.core.truth_(raw))
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
var p__20335 = null;if (arguments.length > 1) {
  p__20335 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return GET__delegate.call(this,url,p__20335);};
GET.cljs$lang$maxFixedArity = 1;
GET.cljs$lang$applyTo = (function (arglist__20338){
var url = cljs.core.first(arglist__20338);
var p__20335 = cljs.core.rest(arglist__20338);
return GET__delegate(url,p__20335);
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
clustermap.api.ordered_api_results = (function ordered_api_results(ocomm,handler){var c__5521__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_20471){var state_val_20472 = (state_20471[1]);if((state_val_20472 === 1))
{var state_20471__$1 = state_20471;var statearr_20473_20509 = state_20471__$1;(statearr_20473_20509[2] = null);
(statearr_20473_20509[1] = 2);
return cljs.core.constant$keyword$241;
} else
{if((state_val_20472 === 2))
{var state_20471__$1 = state_20471;if(true)
{var statearr_20474_20510 = state_20471__$1;(statearr_20474_20510[1] = 4);
} else
{var statearr_20475_20511 = state_20471__$1;(statearr_20475_20511[1] = 5);
}
return cljs.core.constant$keyword$241;
} else
{if((state_val_20472 === 3))
{var inst_20469 = (state_20471[2]);var state_20471__$1 = state_20471;return cljs.core.async.impl.ioc_helpers.return_chan(state_20471__$1,inst_20469);
} else
{if((state_val_20472 === 4))
{var state_20471__$1 = state_20471;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20471__$1,7,ocomm);
} else
{if((state_val_20472 === 5))
{var state_20471__$1 = state_20471;var statearr_20476_20512 = state_20471__$1;(statearr_20476_20512[2] = null);
(statearr_20476_20512[1] = 6);
return cljs.core.constant$keyword$241;
} else
{if((state_val_20472 === 6))
{var inst_20467 = (state_20471[2]);var state_20471__$1 = state_20471;var statearr_20477_20513 = state_20471__$1;(statearr_20477_20513[2] = inst_20467);
(statearr_20477_20513[1] = 3);
return cljs.core.constant$keyword$241;
} else
{if((state_val_20472 === 7))
{var inst_20429 = (state_20471[7]);var inst_20428 = (state_20471[2]);var inst_20429__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_20428,0,null);var inst_20430 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_20428,1,null);var inst_20431 = cljs.core.sequential_QMARK_(inst_20429__$1);var state_20471__$1 = (function (){var statearr_20478 = state_20471;(statearr_20478[7] = inst_20429__$1);
(statearr_20478[8] = inst_20430);
return statearr_20478;
})();if(inst_20431)
{var statearr_20479_20514 = state_20471__$1;(statearr_20479_20514[1] = 8);
} else
{var statearr_20480_20515 = state_20471__$1;(statearr_20480_20515[1] = 9);
}
return cljs.core.constant$keyword$241;
} else
{if((state_val_20472 === 8))
{var inst_20429 = (state_20471[7]);var inst_20433 = inst_20429;var inst_20434 = cljs.core.PersistentVector.EMPTY;var state_20471__$1 = (function (){var statearr_20481 = state_20471;(statearr_20481[9] = inst_20433);
(statearr_20481[10] = inst_20434);
return statearr_20481;
})();var statearr_20482_20516 = state_20471__$1;(statearr_20482_20516[2] = null);
(statearr_20482_20516[1] = 11);
return cljs.core.constant$keyword$241;
} else
{if((state_val_20472 === 9))
{var inst_20429 = (state_20471[7]);var state_20471__$1 = state_20471;if(cljs.core.truth_(inst_20429))
{var statearr_20483_20517 = state_20471__$1;(statearr_20483_20517[1] = 20);
} else
{var statearr_20484_20518 = state_20471__$1;(statearr_20484_20518[1] = 21);
}
return cljs.core.constant$keyword$241;
} else
{if((state_val_20472 === 10))
{var inst_20430 = (state_20471[8]);var inst_20462 = (state_20471[2]);var inst_20463 = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(handler,inst_20462,inst_20430);var state_20471__$1 = (function (){var statearr_20485 = state_20471;(statearr_20485[11] = inst_20463);
return statearr_20485;
})();var statearr_20486_20519 = state_20471__$1;(statearr_20486_20519[2] = null);
(statearr_20486_20519[1] = 2);
return cljs.core.constant$keyword$241;
} else
{if((state_val_20472 === 11))
{var inst_20433 = (state_20471[9]);var inst_20436 = cljs.core.empty_QMARK_(inst_20433);var state_20471__$1 = state_20471;if(inst_20436)
{var statearr_20487_20520 = state_20471__$1;(statearr_20487_20520[1] = 13);
} else
{var statearr_20488_20521 = state_20471__$1;(statearr_20488_20521[1] = 14);
}
return cljs.core.constant$keyword$241;
} else
{if((state_val_20472 === 12))
{var inst_20453 = (state_20471[2]);var state_20471__$1 = state_20471;var statearr_20489_20522 = state_20471__$1;(statearr_20489_20522[2] = inst_20453);
(statearr_20489_20522[1] = 10);
return cljs.core.constant$keyword$241;
} else
{if((state_val_20472 === 13))
{var inst_20434 = (state_20471[10]);var state_20471__$1 = state_20471;var statearr_20490_20523 = state_20471__$1;(statearr_20490_20523[2] = inst_20434);
(statearr_20490_20523[1] = 15);
return cljs.core.constant$keyword$241;
} else
{if((state_val_20472 === 14))
{var inst_20433 = (state_20471[9]);var inst_20439 = cljs.core.rest(inst_20433);var inst_20440 = cljs.core.first(inst_20433);var state_20471__$1 = (function (){var statearr_20491 = state_20471;(statearr_20491[12] = inst_20439);
return statearr_20491;
})();if(cljs.core.truth_(inst_20440))
{var statearr_20492_20524 = state_20471__$1;(statearr_20492_20524[1] = 16);
} else
{var statearr_20493_20525 = state_20471__$1;(statearr_20493_20525[1] = 17);
}
return cljs.core.constant$keyword$241;
} else
{if((state_val_20472 === 15))
{var inst_20451 = (state_20471[2]);var state_20471__$1 = state_20471;var statearr_20494_20526 = state_20471__$1;(statearr_20494_20526[2] = inst_20451);
(statearr_20494_20526[1] = 12);
return cljs.core.constant$keyword$241;
} else
{if((state_val_20472 === 16))
{var inst_20433 = (state_20471[9]);var inst_20442 = cljs.core.first(inst_20433);var state_20471__$1 = state_20471;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20471__$1,19,inst_20442);
} else
{if((state_val_20472 === 17))
{var state_20471__$1 = state_20471;var statearr_20495_20527 = state_20471__$1;(statearr_20495_20527[2] = null);
(statearr_20495_20527[1] = 18);
return cljs.core.constant$keyword$241;
} else
{if((state_val_20472 === 18))
{var inst_20434 = (state_20471[10]);var inst_20439 = (state_20471[12]);var inst_20447 = (state_20471[2]);var inst_20448 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(inst_20434,inst_20447);var inst_20433 = inst_20439;var inst_20434__$1 = inst_20448;var state_20471__$1 = (function (){var statearr_20496 = state_20471;(statearr_20496[9] = inst_20433);
(statearr_20496[10] = inst_20434__$1);
return statearr_20496;
})();var statearr_20497_20528 = state_20471__$1;(statearr_20497_20528[2] = null);
(statearr_20497_20528[1] = 11);
return cljs.core.constant$keyword$241;
} else
{if((state_val_20472 === 19))
{var inst_20444 = (state_20471[2]);var state_20471__$1 = state_20471;var statearr_20498_20529 = state_20471__$1;(statearr_20498_20529[2] = inst_20444);
(statearr_20498_20529[1] = 18);
return cljs.core.constant$keyword$241;
} else
{if((state_val_20472 === 20))
{var inst_20429 = (state_20471[7]);var state_20471__$1 = state_20471;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20471__$1,23,inst_20429);
} else
{if((state_val_20472 === 21))
{var state_20471__$1 = state_20471;var statearr_20499_20530 = state_20471__$1;(statearr_20499_20530[2] = null);
(statearr_20499_20530[1] = 22);
return cljs.core.constant$keyword$241;
} else
{if((state_val_20472 === 22))
{var inst_20460 = (state_20471[2]);var state_20471__$1 = state_20471;var statearr_20500_20531 = state_20471__$1;(statearr_20500_20531[2] = inst_20460);
(statearr_20500_20531[1] = 10);
return cljs.core.constant$keyword$241;
} else
{if((state_val_20472 === 23))
{var inst_20457 = (state_20471[2]);var state_20471__$1 = state_20471;var statearr_20501_20532 = state_20471__$1;(statearr_20501_20532[2] = inst_20457);
(statearr_20501_20532[1] = 22);
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
var state_machine__5507__auto____0 = (function (){var statearr_20505 = [null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_20505[0] = state_machine__5507__auto__);
(statearr_20505[1] = 1);
return statearr_20505;
});
var state_machine__5507__auto____1 = (function (state_20471){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_20471);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$241))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e20506){if((e20506 instanceof Object))
{var ex__5510__auto__ = e20506;var statearr_20507_20533 = state_20471;(statearr_20507_20533[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_20471);
return cljs.core.constant$keyword$241;
} else
{if(cljs.core.constant$keyword$230)
{throw e20506;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$241))
{{
var G__20534 = state_20471;
state_20471 = G__20534;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_20471){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_20471);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_20508 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_20508[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_20508;
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
var G__20537__delegate = function (req_args){var temp__4090__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(request_handler,req_args);if(cljs.core.truth_(temp__4090__auto__))
{var r = temp__4090__auto__;var rseq = ((cljs.core.sequential_QMARK_(r))?r:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [r], null));var vec__20536 = rseq;var rcomm = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20536,0,null);var result_handler_args = cljs.core.nthnext(vec__20536,1);return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(ocomm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rcomm,result_handler_args], null));
} else
{return null;
}
};
var G__20537 = function (var_args){
var req_args = null;if (arguments.length > 0) {
  req_args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__20537__delegate.call(this,req_args);};
G__20537.cljs$lang$maxFixedArity = 0;
G__20537.cljs$lang$applyTo = (function (arglist__20538){
var req_args = cljs.core.seq(arglist__20538);
return G__20537__delegate(req_args);
});
G__20537.cljs$core$IFn$_invoke$arity$variadic = G__20537__delegate;
return G__20537;
})()
;
});
/**
* @param {...*} var_args
*/
clustermap.api.log_api = (function() { 
var log_api__delegate = function (f,args){var ch = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,args);var c__5521__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_20556){var state_val_20557 = (state_20556[1]);if((state_val_20557 === 2))
{var inst_20553 = (state_20556[2]);var inst_20554 = console.log(inst_20553);var state_20556__$1 = state_20556;return cljs.core.async.impl.ioc_helpers.return_chan(state_20556__$1,inst_20554);
} else
{if((state_val_20557 === 1))
{var state_20556__$1 = state_20556;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20556__$1,2,ch);
} else
{return null;
}
}
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_20561 = [null,null,null,null,null,null,null];(statearr_20561[0] = state_machine__5507__auto__);
(statearr_20561[1] = 1);
return statearr_20561;
});
var state_machine__5507__auto____1 = (function (state_20556){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_20556);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$241))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e20562){if((e20562 instanceof Object))
{var ex__5510__auto__ = e20562;var statearr_20563_20565 = state_20556;(statearr_20563_20565[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_20556);
return cljs.core.constant$keyword$241;
} else
{if(cljs.core.constant$keyword$230)
{throw e20562;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$241))
{{
var G__20566 = state_20556;
state_20556 = G__20566;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_20556){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_20556);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_20564 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_20564[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_20564;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5523__auto__);
}));
return c__5521__auto__;
};
var log_api = function (f,var_args){
var args = null;if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return log_api__delegate.call(this,f,args);};
log_api.cljs$lang$maxFixedArity = 1;
log_api.cljs$lang$applyTo = (function (arglist__20567){
var f = cljs.core.first(arglist__20567);
var args = cljs.core.rest(arglist__20567);
return log_api__delegate(f,args);
});
log_api.cljs$core$IFn$_invoke$arity$variadic = log_api__delegate;
return log_api;
})()
;
clustermap.api.map_json_params = (function map_json_params(m){return clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__20570){var vec__20571 = p__20570;var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20571,0,null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20571,1,null);return [cljs.core.str(cljs.core.name(k)),cljs.core.str("="),cljs.core.str(JSON.stringify(cljs.core.clj__GT_js(v)))].join('');
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
boundarylines.cljs$lang$applyTo = (function (arglist__20572){
var id = cljs.core.first(arglist__20572);
arglist__20572 = cljs.core.next(arglist__20572);
var tolerance = cljs.core.first(arglist__20572);
var opts = cljs.core.rest(arglist__20572);
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
boundaryline_collection_index.cljs$lang$applyTo = (function (arglist__20573){
var id = cljs.core.first(arglist__20573);
var opts = cljs.core.rest(arglist__20573);
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
var constituencies__delegate = function (p__20574){var vec__20576 = p__20574;var type_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20576,0,null);return clustermap.api.GET.cljs$core$IFn$_invoke$arity$variadic("/api/",cljs.core.array_seq([clustermap.api.api_prefix,"/constituencies?",clustermap.api.map_json_params(type_ids)], 0));
};
var constituencies = function (var_args){
var p__20574 = null;if (arguments.length > 0) {
  p__20574 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return constituencies__delegate.call(this,p__20574);};
constituencies.cljs$lang$maxFixedArity = 0;
constituencies.cljs$lang$applyTo = (function (arglist__20577){
var p__20574 = cljs.core.seq(arglist__20577);
return constituencies__delegate(p__20574);
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
var portfolio_companies__delegate = function (p__20578){var vec__20580 = p__20578;var type_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20580,0,null);var type_ids__$1 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$256,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$257,"desc"], null)], null)], 0));return clustermap.api.GET([cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/portfolio-companies?"),cljs.core.str(clustermap.api.map_json_params(type_ids__$1))].join(''));
};
var portfolio_companies = function (var_args){
var p__20578 = null;if (arguments.length > 0) {
  p__20578 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_companies__delegate.call(this,p__20578);};
portfolio_companies.cljs$lang$maxFixedArity = 0;
portfolio_companies.cljs$lang$applyTo = (function (arglist__20581){
var p__20578 = cljs.core.seq(arglist__20581);
return portfolio_companies__delegate(p__20578);
});
portfolio_companies.cljs$core$IFn$_invoke$arity$variadic = portfolio_companies__delegate;
return portfolio_companies;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_stats = (function() { 
var portfolio_company_stats__delegate = function (p__20582){var vec__20584 = p__20582;var type_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20584,0,null);return clustermap.api.GET([cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/portfolio-company-stats?"),cljs.core.str(clustermap.api.map_json_params(type_ids))].join(''));
};
var portfolio_company_stats = function (var_args){
var p__20582 = null;if (arguments.length > 0) {
  p__20582 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_stats__delegate.call(this,p__20582);};
portfolio_company_stats.cljs$lang$maxFixedArity = 0;
portfolio_company_stats.cljs$lang$applyTo = (function (arglist__20585){
var p__20582 = cljs.core.seq(arglist__20585);
return portfolio_company_stats__delegate(p__20582);
});
portfolio_company_stats.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_stats__delegate;
return portfolio_company_stats;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_account_stats = (function() { 
var portfolio_company_account_stats__delegate = function (p__20586){var vec__20588 = p__20586;var type_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20588,0,null);return clustermap.api.GET([cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/portfolio-company-account-stats?"),cljs.core.str(clustermap.api.map_json_params(type_ids))].join(''));
};
var portfolio_company_account_stats = function (var_args){
var p__20586 = null;if (arguments.length > 0) {
  p__20586 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_account_stats__delegate.call(this,p__20586);};
portfolio_company_account_stats.cljs$lang$maxFixedArity = 0;
portfolio_company_account_stats.cljs$lang$applyTo = (function (arglist__20589){
var p__20586 = cljs.core.seq(arglist__20589);
return portfolio_company_account_stats__delegate(p__20586);
});
portfolio_company_account_stats.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_account_stats__delegate;
return portfolio_company_account_stats;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_sites = (function() { 
var portfolio_company_sites__delegate = function (p__20590){var vec__20592 = p__20590;var type_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20592,0,null);var type_ids__$1 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$258,100,cljs.core.constant$keyword$256,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$257,"desc"], null)], null)], null),type_ids], 0));return clustermap.api.GET([cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/portfolio-company-sites?"),cljs.core.str(clustermap.api.map_json_params(type_ids__$1))].join(''));
};
var portfolio_company_sites = function (var_args){
var p__20590 = null;if (arguments.length > 0) {
  p__20590 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_sites__delegate.call(this,p__20590);};
portfolio_company_sites.cljs$lang$maxFixedArity = 0;
portfolio_company_sites.cljs$lang$applyTo = (function (arglist__20593){
var p__20590 = cljs.core.seq(arglist__20593);
return portfolio_company_sites__delegate(p__20590);
});
portfolio_company_sites.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_sites__delegate;
return portfolio_company_sites;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_sites_by_company = (function() { 
var portfolio_company_sites_by_company__delegate = function (p__20594){var vec__20596 = p__20594;var type_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20596,0,null);var type_ids__$1 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$258,100,cljs.core.constant$keyword$256,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$257,"desc"], null)], null)], null),type_ids], 0));return clustermap.api.GET([cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/portfolio-company-sites-by-company?"),cljs.core.str(clustermap.api.map_json_params(type_ids__$1))].join(''));
};
var portfolio_company_sites_by_company = function (var_args){
var p__20594 = null;if (arguments.length > 0) {
  p__20594 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_sites_by_company__delegate.call(this,p__20594);};
portfolio_company_sites_by_company.cljs$lang$maxFixedArity = 0;
portfolio_company_sites_by_company.cljs$lang$applyTo = (function (arglist__20597){
var p__20594 = cljs.core.seq(arglist__20597);
return portfolio_company_sites_by_company__delegate(p__20594);
});
portfolio_company_sites_by_company.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_sites_by_company__delegate;
return portfolio_company_sites_by_company;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_locations = (function() { 
var portfolio_company_locations__delegate = function (p__20598){var vec__20600 = p__20598;var type_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20600,0,null);return clustermap.api.GET([cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/portfolio-company-locations?"),cljs.core.str(clustermap.api.map_json_params(type_ids))].join(''));
};
var portfolio_company_locations = function (var_args){
var p__20598 = null;if (arguments.length > 0) {
  p__20598 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_locations__delegate.call(this,p__20598);};
portfolio_company_locations.cljs$lang$maxFixedArity = 0;
portfolio_company_locations.cljs$lang$applyTo = (function (arglist__20601){
var p__20598 = cljs.core.seq(arglist__20601);
return portfolio_company_locations__delegate(p__20598);
});
portfolio_company_locations.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_locations__delegate;
return portfolio_company_locations;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_site_stats = (function() { 
var portfolio_company_site_stats__delegate = function (p__20602){var vec__20604 = p__20602;var type_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20604,0,null);return clustermap.api.GET([cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/portfolio-company-site-stats?"),cljs.core.str(clustermap.api.map_json_params(type_ids))].join(''));
};
var portfolio_company_site_stats = function (var_args){
var p__20602 = null;if (arguments.length > 0) {
  p__20602 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_site_stats__delegate.call(this,p__20602);};
portfolio_company_site_stats.cljs$lang$maxFixedArity = 0;
portfolio_company_site_stats.cljs$lang$applyTo = (function (arglist__20605){
var p__20602 = cljs.core.seq(arglist__20605);
return portfolio_company_site_stats__delegate(p__20602);
});
portfolio_company_site_stats.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_site_stats__delegate;
return portfolio_company_site_stats;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_site_account_timelines = (function() { 
var portfolio_company_site_account_timelines__delegate = function (p__20606){var vec__20608 = p__20606;var type_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20608,0,null);return clustermap.api.GET([cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/portfolio-company-site-account-timelines?"),cljs.core.str(clustermap.api.map_json_params(type_ids))].join(''));
};
var portfolio_company_site_account_timelines = function (var_args){
var p__20606 = null;if (arguments.length > 0) {
  p__20606 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_site_account_timelines__delegate.call(this,p__20606);};
portfolio_company_site_account_timelines.cljs$lang$maxFixedArity = 0;
portfolio_company_site_account_timelines.cljs$lang$applyTo = (function (arglist__20609){
var p__20606 = cljs.core.seq(arglist__20609);
return portfolio_company_site_account_timelines__delegate(p__20606);
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
var investor_comapnies__delegate = function (p__20610){var vec__20612 = p__20610;var type_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20612,0,null);return clustermap.api.GET([cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/investor-companies?"),cljs.core.str(clustermap.api.map_json_params(type_ids))].join(''));
};
var investor_comapnies = function (var_args){
var p__20610 = null;if (arguments.length > 0) {
  p__20610 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return investor_comapnies__delegate.call(this,p__20610);};
investor_comapnies.cljs$lang$maxFixedArity = 0;
investor_comapnies.cljs$lang$applyTo = (function (arglist__20613){
var p__20610 = cljs.core.seq(arglist__20613);
return investor_comapnies__delegate(p__20610);
});
investor_comapnies.cljs$core$IFn$_invoke$arity$variadic = investor_comapnies__delegate;
return investor_comapnies;
})()
;
