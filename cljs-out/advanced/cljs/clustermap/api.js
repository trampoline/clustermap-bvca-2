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
var GET__delegate = function (url,p__8321){var map__8323 = p__8321;var map__8323__$1 = ((cljs.core.seq_QMARK_(map__8323))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__8323):map__8323);var raw = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8323__$1,cljs.core.constant$keyword$31);var comm = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);goog.net.XhrIo.send(url,(function (event){cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,(function (d){if(cljs.core.truth_(raw))
{return d;
} else
{return cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(d,cljs.core.array_seq([cljs.core.constant$keyword$12,true], 0));
}
}).call(null,((JSON.parse.cljs$core$IFn$_invoke$arity$1 ? JSON.parse.cljs$core$IFn$_invoke$arity$1(event.target.getResponseText()) : JSON.parse.call(null,event.target.getResponseText()))["data"])));
return cljs.core.async.close_BANG_(comm);
}));
return comm;
};
var GET = function (url,var_args){
var p__8321 = null;if (arguments.length > 1) {
  p__8321 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return GET__delegate.call(this,url,p__8321);};
GET.cljs$lang$maxFixedArity = 1;
GET.cljs$lang$applyTo = (function (arglist__8324){
var url = cljs.core.first(arglist__8324);
var p__8321 = cljs.core.rest(arglist__8324);
return GET__delegate(url,p__8321);
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
clustermap.api.ordered_api_results = (function ordered_api_results(ocomm,handler){var c__5521__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_8457){var state_val_8458 = (state_8457[1]);if((state_val_8458 === 1))
{var state_8457__$1 = state_8457;var statearr_8459_8495 = state_8457__$1;(statearr_8459_8495[2] = null);
(statearr_8459_8495[1] = 2);
return cljs.core.constant$keyword$17;
} else
{if((state_val_8458 === 2))
{var state_8457__$1 = state_8457;if(true)
{var statearr_8460_8496 = state_8457__$1;(statearr_8460_8496[1] = 4);
} else
{var statearr_8461_8497 = state_8457__$1;(statearr_8461_8497[1] = 5);
}
return cljs.core.constant$keyword$17;
} else
{if((state_val_8458 === 3))
{var inst_8455 = (state_8457[2]);var state_8457__$1 = state_8457;return cljs.core.async.impl.ioc_helpers.return_chan(state_8457__$1,inst_8455);
} else
{if((state_val_8458 === 4))
{var state_8457__$1 = state_8457;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_8457__$1,7,ocomm);
} else
{if((state_val_8458 === 5))
{var state_8457__$1 = state_8457;var statearr_8462_8498 = state_8457__$1;(statearr_8462_8498[2] = null);
(statearr_8462_8498[1] = 6);
return cljs.core.constant$keyword$17;
} else
{if((state_val_8458 === 6))
{var inst_8453 = (state_8457[2]);var state_8457__$1 = state_8457;var statearr_8463_8499 = state_8457__$1;(statearr_8463_8499[2] = inst_8453);
(statearr_8463_8499[1] = 3);
return cljs.core.constant$keyword$17;
} else
{if((state_val_8458 === 7))
{var inst_8415 = (state_8457[7]);var inst_8414 = (state_8457[2]);var inst_8415__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_8414,0,null);var inst_8416 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_8414,1,null);var inst_8417 = cljs.core.sequential_QMARK_(inst_8415__$1);var state_8457__$1 = (function (){var statearr_8464 = state_8457;(statearr_8464[8] = inst_8416);
(statearr_8464[7] = inst_8415__$1);
return statearr_8464;
})();if(inst_8417)
{var statearr_8465_8500 = state_8457__$1;(statearr_8465_8500[1] = 8);
} else
{var statearr_8466_8501 = state_8457__$1;(statearr_8466_8501[1] = 9);
}
return cljs.core.constant$keyword$17;
} else
{if((state_val_8458 === 8))
{var inst_8415 = (state_8457[7]);var inst_8419 = inst_8415;var inst_8420 = cljs.core.PersistentVector.EMPTY;var state_8457__$1 = (function (){var statearr_8467 = state_8457;(statearr_8467[9] = inst_8419);
(statearr_8467[10] = inst_8420);
return statearr_8467;
})();var statearr_8468_8502 = state_8457__$1;(statearr_8468_8502[2] = null);
(statearr_8468_8502[1] = 11);
return cljs.core.constant$keyword$17;
} else
{if((state_val_8458 === 9))
{var inst_8415 = (state_8457[7]);var state_8457__$1 = state_8457;if(cljs.core.truth_(inst_8415))
{var statearr_8469_8503 = state_8457__$1;(statearr_8469_8503[1] = 20);
} else
{var statearr_8470_8504 = state_8457__$1;(statearr_8470_8504[1] = 21);
}
return cljs.core.constant$keyword$17;
} else
{if((state_val_8458 === 10))
{var inst_8416 = (state_8457[8]);var inst_8448 = (state_8457[2]);var inst_8449 = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(handler,inst_8448,inst_8416);var state_8457__$1 = (function (){var statearr_8471 = state_8457;(statearr_8471[11] = inst_8449);
return statearr_8471;
})();var statearr_8472_8505 = state_8457__$1;(statearr_8472_8505[2] = null);
(statearr_8472_8505[1] = 2);
return cljs.core.constant$keyword$17;
} else
{if((state_val_8458 === 11))
{var inst_8419 = (state_8457[9]);var inst_8422 = cljs.core.empty_QMARK_(inst_8419);var state_8457__$1 = state_8457;if(inst_8422)
{var statearr_8473_8506 = state_8457__$1;(statearr_8473_8506[1] = 13);
} else
{var statearr_8474_8507 = state_8457__$1;(statearr_8474_8507[1] = 14);
}
return cljs.core.constant$keyword$17;
} else
{if((state_val_8458 === 12))
{var inst_8439 = (state_8457[2]);var state_8457__$1 = state_8457;var statearr_8475_8508 = state_8457__$1;(statearr_8475_8508[2] = inst_8439);
(statearr_8475_8508[1] = 10);
return cljs.core.constant$keyword$17;
} else
{if((state_val_8458 === 13))
{var inst_8420 = (state_8457[10]);var state_8457__$1 = state_8457;var statearr_8476_8509 = state_8457__$1;(statearr_8476_8509[2] = inst_8420);
(statearr_8476_8509[1] = 15);
return cljs.core.constant$keyword$17;
} else
{if((state_val_8458 === 14))
{var inst_8419 = (state_8457[9]);var inst_8425 = cljs.core.rest(inst_8419);var inst_8426 = cljs.core.first(inst_8419);var state_8457__$1 = (function (){var statearr_8477 = state_8457;(statearr_8477[12] = inst_8425);
return statearr_8477;
})();if(cljs.core.truth_(inst_8426))
{var statearr_8478_8510 = state_8457__$1;(statearr_8478_8510[1] = 16);
} else
{var statearr_8479_8511 = state_8457__$1;(statearr_8479_8511[1] = 17);
}
return cljs.core.constant$keyword$17;
} else
{if((state_val_8458 === 15))
{var inst_8437 = (state_8457[2]);var state_8457__$1 = state_8457;var statearr_8480_8512 = state_8457__$1;(statearr_8480_8512[2] = inst_8437);
(statearr_8480_8512[1] = 12);
return cljs.core.constant$keyword$17;
} else
{if((state_val_8458 === 16))
{var inst_8419 = (state_8457[9]);var inst_8428 = cljs.core.first(inst_8419);var state_8457__$1 = state_8457;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_8457__$1,19,inst_8428);
} else
{if((state_val_8458 === 17))
{var state_8457__$1 = state_8457;var statearr_8481_8513 = state_8457__$1;(statearr_8481_8513[2] = null);
(statearr_8481_8513[1] = 18);
return cljs.core.constant$keyword$17;
} else
{if((state_val_8458 === 18))
{var inst_8425 = (state_8457[12]);var inst_8420 = (state_8457[10]);var inst_8433 = (state_8457[2]);var inst_8434 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(inst_8420,inst_8433);var inst_8419 = inst_8425;var inst_8420__$1 = inst_8434;var state_8457__$1 = (function (){var statearr_8482 = state_8457;(statearr_8482[9] = inst_8419);
(statearr_8482[10] = inst_8420__$1);
return statearr_8482;
})();var statearr_8483_8514 = state_8457__$1;(statearr_8483_8514[2] = null);
(statearr_8483_8514[1] = 11);
return cljs.core.constant$keyword$17;
} else
{if((state_val_8458 === 19))
{var inst_8430 = (state_8457[2]);var state_8457__$1 = state_8457;var statearr_8484_8515 = state_8457__$1;(statearr_8484_8515[2] = inst_8430);
(statearr_8484_8515[1] = 18);
return cljs.core.constant$keyword$17;
} else
{if((state_val_8458 === 20))
{var inst_8415 = (state_8457[7]);var state_8457__$1 = state_8457;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_8457__$1,23,inst_8415);
} else
{if((state_val_8458 === 21))
{var state_8457__$1 = state_8457;var statearr_8485_8516 = state_8457__$1;(statearr_8485_8516[2] = null);
(statearr_8485_8516[1] = 22);
return cljs.core.constant$keyword$17;
} else
{if((state_val_8458 === 22))
{var inst_8446 = (state_8457[2]);var state_8457__$1 = state_8457;var statearr_8486_8517 = state_8457__$1;(statearr_8486_8517[2] = inst_8446);
(statearr_8486_8517[1] = 10);
return cljs.core.constant$keyword$17;
} else
{if((state_val_8458 === 23))
{var inst_8443 = (state_8457[2]);var state_8457__$1 = state_8457;var statearr_8487_8518 = state_8457__$1;(statearr_8487_8518[2] = inst_8443);
(statearr_8487_8518[1] = 22);
return cljs.core.constant$keyword$17;
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
var state_machine__5507__auto____0 = (function (){var statearr_8491 = [null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_8491[0] = state_machine__5507__auto__);
(statearr_8491[1] = 1);
return statearr_8491;
});
var state_machine__5507__auto____1 = (function (state_8457){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_8457);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$17))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e8492){if((e8492 instanceof Object))
{var ex__5510__auto__ = e8492;var statearr_8493_8519 = state_8457;(statearr_8493_8519[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_8457);
return cljs.core.constant$keyword$17;
} else
{if(cljs.core.constant$keyword$6)
{throw e8492;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$17))
{{
var G__8520 = state_8457;
state_8457 = G__8520;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_8457){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_8457);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_8494 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_8494[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_8494;
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
var G__8523__delegate = function (req_args){var temp__4090__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(request_handler,req_args);if(cljs.core.truth_(temp__4090__auto__))
{var r = temp__4090__auto__;var rseq = ((cljs.core.sequential_QMARK_(r))?r:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [r], null));var vec__8522 = rseq;var rcomm = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8522,0,null);var result_handler_args = cljs.core.nthnext(vec__8522,1);return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(ocomm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rcomm,result_handler_args], null));
} else
{return null;
}
};
var G__8523 = function (var_args){
var req_args = null;if (arguments.length > 0) {
  req_args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__8523__delegate.call(this,req_args);};
G__8523.cljs$lang$maxFixedArity = 0;
G__8523.cljs$lang$applyTo = (function (arglist__8524){
var req_args = cljs.core.seq(arglist__8524);
return G__8523__delegate(req_args);
});
G__8523.cljs$core$IFn$_invoke$arity$variadic = G__8523__delegate;
return G__8523;
})()
;
});
/**
* @param {...*} var_args
*/
clustermap.api.log_api = (function() { 
var log_api__delegate = function (f,args){var ch = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,args);var c__5521__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_8542){var state_val_8543 = (state_8542[1]);if((state_val_8543 === 2))
{var inst_8539 = (state_8542[2]);var inst_8540 = console.log(inst_8539);var state_8542__$1 = state_8542;return cljs.core.async.impl.ioc_helpers.return_chan(state_8542__$1,inst_8540);
} else
{if((state_val_8543 === 1))
{var state_8542__$1 = state_8542;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_8542__$1,2,ch);
} else
{return null;
}
}
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_8547 = [null,null,null,null,null,null,null];(statearr_8547[0] = state_machine__5507__auto__);
(statearr_8547[1] = 1);
return statearr_8547;
});
var state_machine__5507__auto____1 = (function (state_8542){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_8542);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$17))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e8548){if((e8548 instanceof Object))
{var ex__5510__auto__ = e8548;var statearr_8549_8551 = state_8542;(statearr_8549_8551[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_8542);
return cljs.core.constant$keyword$17;
} else
{if(cljs.core.constant$keyword$6)
{throw e8548;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$17))
{{
var G__8552 = state_8542;
state_8542 = G__8552;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_8542){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_8542);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_8550 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_8550[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_8550;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5523__auto__);
}));
return c__5521__auto__;
};
var log_api = function (f,var_args){
var args = null;if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return log_api__delegate.call(this,f,args);};
log_api.cljs$lang$maxFixedArity = 1;
log_api.cljs$lang$applyTo = (function (arglist__8553){
var f = cljs.core.first(arglist__8553);
var args = cljs.core.rest(arglist__8553);
return log_api__delegate(f,args);
});
log_api.cljs$core$IFn$_invoke$arity$variadic = log_api__delegate;
return log_api;
})()
;
clustermap.api.map_json_params = (function map_json_params(m){return clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__8556){var vec__8557 = p__8556;var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8557,0,null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8557,1,null);return [cljs.core.str(cljs.core.name(k)),cljs.core.str("="),cljs.core.str(JSON.stringify(cljs.core.clj__GT_js(v)))].join('');
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
boundarylines.cljs$lang$applyTo = (function (arglist__8558){
var id = cljs.core.first(arglist__8558);
arglist__8558 = cljs.core.next(arglist__8558);
var tolerance = cljs.core.first(arglist__8558);
var opts = cljs.core.rest(arglist__8558);
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
boundaryline_collection_index.cljs$lang$applyTo = (function (arglist__8559){
var id = cljs.core.first(arglist__8559);
var opts = cljs.core.rest(arglist__8559);
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
var constituencies__delegate = function (p__8560){var vec__8562 = p__8560;var type_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8562,0,null);return clustermap.api.GET.cljs$core$IFn$_invoke$arity$variadic("/api/",cljs.core.array_seq([clustermap.api.api_prefix,"/constituencies?",clustermap.api.map_json_params(type_ids)], 0));
};
var constituencies = function (var_args){
var p__8560 = null;if (arguments.length > 0) {
  p__8560 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return constituencies__delegate.call(this,p__8560);};
constituencies.cljs$lang$maxFixedArity = 0;
constituencies.cljs$lang$applyTo = (function (arglist__8563){
var p__8560 = cljs.core.seq(arglist__8563);
return constituencies__delegate(p__8560);
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
var portfolio_companies__delegate = function (p__8564){var vec__8566 = p__8564;var type_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8566,0,null);return clustermap.api.GET([cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/portfolio-companies?sort={\"!latest_turnover\":\"desc\"}&"),cljs.core.str(clustermap.api.map_json_params(type_ids))].join(''));
};
var portfolio_companies = function (var_args){
var p__8564 = null;if (arguments.length > 0) {
  p__8564 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_companies__delegate.call(this,p__8564);};
portfolio_companies.cljs$lang$maxFixedArity = 0;
portfolio_companies.cljs$lang$applyTo = (function (arglist__8567){
var p__8564 = cljs.core.seq(arglist__8567);
return portfolio_companies__delegate(p__8564);
});
portfolio_companies.cljs$core$IFn$_invoke$arity$variadic = portfolio_companies__delegate;
return portfolio_companies;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_stats = (function() { 
var portfolio_company_stats__delegate = function (p__8568){var vec__8570 = p__8568;var type_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8570,0,null);return clustermap.api.GET([cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/portfolio-company-stats?"),cljs.core.str(clustermap.api.map_json_params(type_ids))].join(''));
};
var portfolio_company_stats = function (var_args){
var p__8568 = null;if (arguments.length > 0) {
  p__8568 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_stats__delegate.call(this,p__8568);};
portfolio_company_stats.cljs$lang$maxFixedArity = 0;
portfolio_company_stats.cljs$lang$applyTo = (function (arglist__8571){
var p__8568 = cljs.core.seq(arglist__8571);
return portfolio_company_stats__delegate(p__8568);
});
portfolio_company_stats.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_stats__delegate;
return portfolio_company_stats;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_account_stats = (function() { 
var portfolio_company_account_stats__delegate = function (p__8572){var vec__8574 = p__8572;var type_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8574,0,null);return clustermap.api.GET([cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/portfolio-company-account-stats?"),cljs.core.str(clustermap.api.map_json_params(type_ids))].join(''));
};
var portfolio_company_account_stats = function (var_args){
var p__8572 = null;if (arguments.length > 0) {
  p__8572 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_account_stats__delegate.call(this,p__8572);};
portfolio_company_account_stats.cljs$lang$maxFixedArity = 0;
portfolio_company_account_stats.cljs$lang$applyTo = (function (arglist__8575){
var p__8572 = cljs.core.seq(arglist__8575);
return portfolio_company_account_stats__delegate(p__8572);
});
portfolio_company_account_stats.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_account_stats__delegate;
return portfolio_company_account_stats;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_sites = (function() { 
var portfolio_company_sites__delegate = function (p__8576){var vec__8578 = p__8576;var type_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8578,0,null);var type_ids__$1 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$32,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["?boundarylinecolls.uk_constituencies"], null)], null),type_ids], 0));return clustermap.api.GET([cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/portfolio-company-sites?"),cljs.core.str(clustermap.api.map_json_params(type_ids__$1))].join(''));
};
var portfolio_company_sites = function (var_args){
var p__8576 = null;if (arguments.length > 0) {
  p__8576 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_sites__delegate.call(this,p__8576);};
portfolio_company_sites.cljs$lang$maxFixedArity = 0;
portfolio_company_sites.cljs$lang$applyTo = (function (arglist__8579){
var p__8576 = cljs.core.seq(arglist__8579);
return portfolio_company_sites__delegate(p__8576);
});
portfolio_company_sites.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_sites__delegate;
return portfolio_company_sites;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_locations = (function() { 
var portfolio_company_locations__delegate = function (p__8580){var vec__8582 = p__8580;var type_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8582,0,null);return clustermap.api.GET([cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/portfolio-company-locations?"),cljs.core.str(clustermap.api.map_json_params(type_ids))].join(''));
};
var portfolio_company_locations = function (var_args){
var p__8580 = null;if (arguments.length > 0) {
  p__8580 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_locations__delegate.call(this,p__8580);};
portfolio_company_locations.cljs$lang$maxFixedArity = 0;
portfolio_company_locations.cljs$lang$applyTo = (function (arglist__8583){
var p__8580 = cljs.core.seq(arglist__8583);
return portfolio_company_locations__delegate(p__8580);
});
portfolio_company_locations.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_locations__delegate;
return portfolio_company_locations;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_site_stats = (function() { 
var portfolio_company_site_stats__delegate = function (p__8584){var vec__8586 = p__8584;var type_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8586,0,null);return clustermap.api.GET([cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/portfolio-company-site-stats?"),cljs.core.str(clustermap.api.map_json_params(type_ids))].join(''));
};
var portfolio_company_site_stats = function (var_args){
var p__8584 = null;if (arguments.length > 0) {
  p__8584 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_site_stats__delegate.call(this,p__8584);};
portfolio_company_site_stats.cljs$lang$maxFixedArity = 0;
portfolio_company_site_stats.cljs$lang$applyTo = (function (arglist__8587){
var p__8584 = cljs.core.seq(arglist__8587);
return portfolio_company_site_stats__delegate(p__8584);
});
portfolio_company_site_stats.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_site_stats__delegate;
return portfolio_company_site_stats;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_site_account_timelines = (function() { 
var portfolio_company_site_account_timelines__delegate = function (p__8588){var vec__8590 = p__8588;var type_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8590,0,null);return clustermap.api.GET([cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/portfolio-company-site-account-timelines?"),cljs.core.str(clustermap.api.map_json_params(type_ids))].join(''));
};
var portfolio_company_site_account_timelines = function (var_args){
var p__8588 = null;if (arguments.length > 0) {
  p__8588 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_site_account_timelines__delegate.call(this,p__8588);};
portfolio_company_site_account_timelines.cljs$lang$maxFixedArity = 0;
portfolio_company_site_account_timelines.cljs$lang$applyTo = (function (arglist__8591){
var p__8588 = cljs.core.seq(arglist__8591);
return portfolio_company_site_account_timelines__delegate(p__8588);
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
var investor_comapnies__delegate = function (p__8592){var vec__8594 = p__8592;var type_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8594,0,null);return clustermap.api.GET([cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/investor-companies?"),cljs.core.str(clustermap.api.map_json_params(type_ids))].join(''));
};
var investor_comapnies = function (var_args){
var p__8592 = null;if (arguments.length > 0) {
  p__8592 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return investor_comapnies__delegate.call(this,p__8592);};
investor_comapnies.cljs$lang$maxFixedArity = 0;
investor_comapnies.cljs$lang$applyTo = (function (arglist__8595){
var p__8592 = cljs.core.seq(arglist__8595);
return investor_comapnies__delegate(p__8592);
});
investor_comapnies.cljs$core$IFn$_invoke$arity$variadic = investor_comapnies__delegate;
return investor_comapnies;
})()
;
