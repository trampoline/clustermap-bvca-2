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
var GET__delegate = function (url,p__20345){var map__20347 = p__20345;var map__20347__$1 = ((cljs.core.seq_QMARK_(map__20347))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20347):map__20347);var raw = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20347__$1,cljs.core.constant$keyword$269);var comm = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);goog.net.XhrIo.send(url,(function (event){cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,(function (d){if(cljs.core.truth_(raw))
{return d;
} else
{return cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(d,cljs.core.array_seq([cljs.core.constant$keyword$250,true], 0));
}
}).call(null,((JSON.parse.cljs$core$IFn$_invoke$arity$1 ? JSON.parse.cljs$core$IFn$_invoke$arity$1(event.target.getResponseText()) : JSON.parse.call(null,event.target.getResponseText()))["data"])));
return cljs.core.async.close_BANG_(comm);
}));
return comm;
};
var GET = function (url,var_args){
var p__20345 = null;if (arguments.length > 1) {
  p__20345 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return GET__delegate.call(this,url,p__20345);};
GET.cljs$lang$maxFixedArity = 1;
GET.cljs$lang$applyTo = (function (arglist__20348){
var url = cljs.core.first(arglist__20348);
var p__20345 = cljs.core.rest(arglist__20348);
return GET__delegate(url,p__20345);
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
clustermap.api.ordered_api_results = (function ordered_api_results(ocomm,handler){var c__5521__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_20481){var state_val_20482 = (state_20481[1]);if((state_val_20482 === 1))
{var state_20481__$1 = state_20481;var statearr_20483_20519 = state_20481__$1;(statearr_20483_20519[2] = null);
(statearr_20483_20519[1] = 2);
return cljs.core.constant$keyword$255;
} else
{if((state_val_20482 === 2))
{var state_20481__$1 = state_20481;if(true)
{var statearr_20484_20520 = state_20481__$1;(statearr_20484_20520[1] = 4);
} else
{var statearr_20485_20521 = state_20481__$1;(statearr_20485_20521[1] = 5);
}
return cljs.core.constant$keyword$255;
} else
{if((state_val_20482 === 3))
{var inst_20479 = (state_20481[2]);var state_20481__$1 = state_20481;return cljs.core.async.impl.ioc_helpers.return_chan(state_20481__$1,inst_20479);
} else
{if((state_val_20482 === 4))
{var state_20481__$1 = state_20481;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20481__$1,7,ocomm);
} else
{if((state_val_20482 === 5))
{var state_20481__$1 = state_20481;var statearr_20486_20522 = state_20481__$1;(statearr_20486_20522[2] = null);
(statearr_20486_20522[1] = 6);
return cljs.core.constant$keyword$255;
} else
{if((state_val_20482 === 6))
{var inst_20477 = (state_20481[2]);var state_20481__$1 = state_20481;var statearr_20487_20523 = state_20481__$1;(statearr_20487_20523[2] = inst_20477);
(statearr_20487_20523[1] = 3);
return cljs.core.constant$keyword$255;
} else
{if((state_val_20482 === 7))
{var inst_20439 = (state_20481[7]);var inst_20438 = (state_20481[2]);var inst_20439__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_20438,0,null);var inst_20440 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_20438,1,null);var inst_20441 = cljs.core.sequential_QMARK_(inst_20439__$1);var state_20481__$1 = (function (){var statearr_20488 = state_20481;(statearr_20488[8] = inst_20440);
(statearr_20488[7] = inst_20439__$1);
return statearr_20488;
})();if(inst_20441)
{var statearr_20489_20524 = state_20481__$1;(statearr_20489_20524[1] = 8);
} else
{var statearr_20490_20525 = state_20481__$1;(statearr_20490_20525[1] = 9);
}
return cljs.core.constant$keyword$255;
} else
{if((state_val_20482 === 8))
{var inst_20439 = (state_20481[7]);var inst_20443 = inst_20439;var inst_20444 = cljs.core.PersistentVector.EMPTY;var state_20481__$1 = (function (){var statearr_20491 = state_20481;(statearr_20491[9] = inst_20443);
(statearr_20491[10] = inst_20444);
return statearr_20491;
})();var statearr_20492_20526 = state_20481__$1;(statearr_20492_20526[2] = null);
(statearr_20492_20526[1] = 11);
return cljs.core.constant$keyword$255;
} else
{if((state_val_20482 === 9))
{var inst_20439 = (state_20481[7]);var state_20481__$1 = state_20481;if(cljs.core.truth_(inst_20439))
{var statearr_20493_20527 = state_20481__$1;(statearr_20493_20527[1] = 20);
} else
{var statearr_20494_20528 = state_20481__$1;(statearr_20494_20528[1] = 21);
}
return cljs.core.constant$keyword$255;
} else
{if((state_val_20482 === 10))
{var inst_20440 = (state_20481[8]);var inst_20472 = (state_20481[2]);var inst_20473 = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(handler,inst_20472,inst_20440);var state_20481__$1 = (function (){var statearr_20495 = state_20481;(statearr_20495[11] = inst_20473);
return statearr_20495;
})();var statearr_20496_20529 = state_20481__$1;(statearr_20496_20529[2] = null);
(statearr_20496_20529[1] = 2);
return cljs.core.constant$keyword$255;
} else
{if((state_val_20482 === 11))
{var inst_20443 = (state_20481[9]);var inst_20446 = cljs.core.empty_QMARK_(inst_20443);var state_20481__$1 = state_20481;if(inst_20446)
{var statearr_20497_20530 = state_20481__$1;(statearr_20497_20530[1] = 13);
} else
{var statearr_20498_20531 = state_20481__$1;(statearr_20498_20531[1] = 14);
}
return cljs.core.constant$keyword$255;
} else
{if((state_val_20482 === 12))
{var inst_20463 = (state_20481[2]);var state_20481__$1 = state_20481;var statearr_20499_20532 = state_20481__$1;(statearr_20499_20532[2] = inst_20463);
(statearr_20499_20532[1] = 10);
return cljs.core.constant$keyword$255;
} else
{if((state_val_20482 === 13))
{var inst_20444 = (state_20481[10]);var state_20481__$1 = state_20481;var statearr_20500_20533 = state_20481__$1;(statearr_20500_20533[2] = inst_20444);
(statearr_20500_20533[1] = 15);
return cljs.core.constant$keyword$255;
} else
{if((state_val_20482 === 14))
{var inst_20443 = (state_20481[9]);var inst_20449 = cljs.core.rest(inst_20443);var inst_20450 = cljs.core.first(inst_20443);var state_20481__$1 = (function (){var statearr_20501 = state_20481;(statearr_20501[12] = inst_20449);
return statearr_20501;
})();if(cljs.core.truth_(inst_20450))
{var statearr_20502_20534 = state_20481__$1;(statearr_20502_20534[1] = 16);
} else
{var statearr_20503_20535 = state_20481__$1;(statearr_20503_20535[1] = 17);
}
return cljs.core.constant$keyword$255;
} else
{if((state_val_20482 === 15))
{var inst_20461 = (state_20481[2]);var state_20481__$1 = state_20481;var statearr_20504_20536 = state_20481__$1;(statearr_20504_20536[2] = inst_20461);
(statearr_20504_20536[1] = 12);
return cljs.core.constant$keyword$255;
} else
{if((state_val_20482 === 16))
{var inst_20443 = (state_20481[9]);var inst_20452 = cljs.core.first(inst_20443);var state_20481__$1 = state_20481;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20481__$1,19,inst_20452);
} else
{if((state_val_20482 === 17))
{var state_20481__$1 = state_20481;var statearr_20505_20537 = state_20481__$1;(statearr_20505_20537[2] = null);
(statearr_20505_20537[1] = 18);
return cljs.core.constant$keyword$255;
} else
{if((state_val_20482 === 18))
{var inst_20444 = (state_20481[10]);var inst_20449 = (state_20481[12]);var inst_20457 = (state_20481[2]);var inst_20458 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(inst_20444,inst_20457);var inst_20443 = inst_20449;var inst_20444__$1 = inst_20458;var state_20481__$1 = (function (){var statearr_20506 = state_20481;(statearr_20506[9] = inst_20443);
(statearr_20506[10] = inst_20444__$1);
return statearr_20506;
})();var statearr_20507_20538 = state_20481__$1;(statearr_20507_20538[2] = null);
(statearr_20507_20538[1] = 11);
return cljs.core.constant$keyword$255;
} else
{if((state_val_20482 === 19))
{var inst_20454 = (state_20481[2]);var state_20481__$1 = state_20481;var statearr_20508_20539 = state_20481__$1;(statearr_20508_20539[2] = inst_20454);
(statearr_20508_20539[1] = 18);
return cljs.core.constant$keyword$255;
} else
{if((state_val_20482 === 20))
{var inst_20439 = (state_20481[7]);var state_20481__$1 = state_20481;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20481__$1,23,inst_20439);
} else
{if((state_val_20482 === 21))
{var state_20481__$1 = state_20481;var statearr_20509_20540 = state_20481__$1;(statearr_20509_20540[2] = null);
(statearr_20509_20540[1] = 22);
return cljs.core.constant$keyword$255;
} else
{if((state_val_20482 === 22))
{var inst_20470 = (state_20481[2]);var state_20481__$1 = state_20481;var statearr_20510_20541 = state_20481__$1;(statearr_20510_20541[2] = inst_20470);
(statearr_20510_20541[1] = 10);
return cljs.core.constant$keyword$255;
} else
{if((state_val_20482 === 23))
{var inst_20467 = (state_20481[2]);var state_20481__$1 = state_20481;var statearr_20511_20542 = state_20481__$1;(statearr_20511_20542[2] = inst_20467);
(statearr_20511_20542[1] = 22);
return cljs.core.constant$keyword$255;
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
var state_machine__5507__auto____0 = (function (){var statearr_20515 = [null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_20515[0] = state_machine__5507__auto__);
(statearr_20515[1] = 1);
return statearr_20515;
});
var state_machine__5507__auto____1 = (function (state_20481){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_20481);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$255))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e20516){if((e20516 instanceof Object))
{var ex__5510__auto__ = e20516;var statearr_20517_20543 = state_20481;(statearr_20517_20543[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_20481);
return cljs.core.constant$keyword$255;
} else
{if(cljs.core.constant$keyword$244)
{throw e20516;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$255))
{{
var G__20544 = state_20481;
state_20481 = G__20544;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_20481){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_20481);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_20518 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_20518[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_20518;
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
var G__20547__delegate = function (req_args){var temp__4090__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(request_handler,req_args);if(cljs.core.truth_(temp__4090__auto__))
{var r = temp__4090__auto__;var rseq = ((cljs.core.sequential_QMARK_(r))?r:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [r], null));var vec__20546 = rseq;var rcomm = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20546,0,null);var result_handler_args = cljs.core.nthnext(vec__20546,1);return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(ocomm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rcomm,result_handler_args], null));
} else
{return null;
}
};
var G__20547 = function (var_args){
var req_args = null;if (arguments.length > 0) {
  req_args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__20547__delegate.call(this,req_args);};
G__20547.cljs$lang$maxFixedArity = 0;
G__20547.cljs$lang$applyTo = (function (arglist__20548){
var req_args = cljs.core.seq(arglist__20548);
return G__20547__delegate(req_args);
});
G__20547.cljs$core$IFn$_invoke$arity$variadic = G__20547__delegate;
return G__20547;
})()
;
});
/**
* @param {...*} var_args
*/
clustermap.api.log_api = (function() { 
var log_api__delegate = function (f,args){var ch = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,args);var c__5521__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_20566){var state_val_20567 = (state_20566[1]);if((state_val_20567 === 2))
{var inst_20563 = (state_20566[2]);var inst_20564 = console.log(inst_20563);var state_20566__$1 = state_20566;return cljs.core.async.impl.ioc_helpers.return_chan(state_20566__$1,inst_20564);
} else
{if((state_val_20567 === 1))
{var state_20566__$1 = state_20566;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20566__$1,2,ch);
} else
{return null;
}
}
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_20571 = [null,null,null,null,null,null,null];(statearr_20571[0] = state_machine__5507__auto__);
(statearr_20571[1] = 1);
return statearr_20571;
});
var state_machine__5507__auto____1 = (function (state_20566){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_20566);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$255))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e20572){if((e20572 instanceof Object))
{var ex__5510__auto__ = e20572;var statearr_20573_20575 = state_20566;(statearr_20573_20575[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_20566);
return cljs.core.constant$keyword$255;
} else
{if(cljs.core.constant$keyword$244)
{throw e20572;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$255))
{{
var G__20576 = state_20566;
state_20566 = G__20576;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_20566){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_20566);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_20574 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_20574[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_20574;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5523__auto__);
}));
return c__5521__auto__;
};
var log_api = function (f,var_args){
var args = null;if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return log_api__delegate.call(this,f,args);};
log_api.cljs$lang$maxFixedArity = 1;
log_api.cljs$lang$applyTo = (function (arglist__20577){
var f = cljs.core.first(arglist__20577);
var args = cljs.core.rest(arglist__20577);
return log_api__delegate(f,args);
});
log_api.cljs$core$IFn$_invoke$arity$variadic = log_api__delegate;
return log_api;
})()
;
clustermap.api.map_json_params = (function map_json_params(m){return clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__20580){var vec__20581 = p__20580;var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20581,0,null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20581,1,null);return [cljs.core.str(cljs.core.name(k)),cljs.core.str("="),cljs.core.str(JSON.stringify(cljs.core.clj__GT_js(v)))].join('');
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
boundarylines.cljs$lang$applyTo = (function (arglist__20582){
var id = cljs.core.first(arglist__20582);
arglist__20582 = cljs.core.next(arglist__20582);
var tolerance = cljs.core.first(arglist__20582);
var opts = cljs.core.rest(arglist__20582);
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
boundaryline_collection_index.cljs$lang$applyTo = (function (arglist__20583){
var id = cljs.core.first(arglist__20583);
var opts = cljs.core.rest(arglist__20583);
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
var portfolio_company_sites__delegate = function (p__20584){var vec__20586 = p__20584;var type_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20586,0,null);var type_ids__$1 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$270,100,cljs.core.constant$keyword$271,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$272,"desc"], null)], null)], null),type_ids], 0));return clustermap.api.GET([cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/portfolio-company-sites?"),cljs.core.str(clustermap.api.map_json_params(type_ids__$1))].join(''));
};
var portfolio_company_sites = function (var_args){
var p__20584 = null;if (arguments.length > 0) {
  p__20584 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_sites__delegate.call(this,p__20584);};
portfolio_company_sites.cljs$lang$maxFixedArity = 0;
portfolio_company_sites.cljs$lang$applyTo = (function (arglist__20587){
var p__20584 = cljs.core.seq(arglist__20587);
return portfolio_company_sites__delegate(p__20584);
});
portfolio_company_sites.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_sites__delegate;
return portfolio_company_sites;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_sites_by_company = (function() { 
var portfolio_company_sites_by_company__delegate = function (p__20588){var vec__20590 = p__20588;var type_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20590,0,null);var type_ids__$1 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$270,100,cljs.core.constant$keyword$271,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$272,"desc"], null)], null)], null),type_ids], 0));return clustermap.api.GET([cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/portfolio-company-sites-by-company?"),cljs.core.str(clustermap.api.map_json_params(type_ids__$1))].join(''));
};
var portfolio_company_sites_by_company = function (var_args){
var p__20588 = null;if (arguments.length > 0) {
  p__20588 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_sites_by_company__delegate.call(this,p__20588);};
portfolio_company_sites_by_company.cljs$lang$maxFixedArity = 0;
portfolio_company_sites_by_company.cljs$lang$applyTo = (function (arglist__20591){
var p__20588 = cljs.core.seq(arglist__20591);
return portfolio_company_sites_by_company__delegate(p__20588);
});
portfolio_company_sites_by_company.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_sites_by_company__delegate;
return portfolio_company_sites_by_company;
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
clustermap.api.investment_account_timelines = (function() { 
var investment_account_timelines__delegate = function (p__20604){var vec__20606 = p__20604;var type_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20606,0,null);return clustermap.api.GET([cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/investment-account-timelines?"),cljs.core.str(clustermap.api.map_json_params(type_ids))].join(''));
};
var investment_account_timelines = function (var_args){
var p__20604 = null;if (arguments.length > 0) {
  p__20604 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return investment_account_timelines__delegate.call(this,p__20604);};
investment_account_timelines.cljs$lang$maxFixedArity = 0;
investment_account_timelines.cljs$lang$applyTo = (function (arglist__20607){
var p__20604 = cljs.core.seq(arglist__20607);
return investment_account_timelines__delegate(p__20604);
});
investment_account_timelines.cljs$core$IFn$_invoke$arity$variadic = investment_account_timelines__delegate;
return investment_account_timelines;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.investment_stats = (function() { 
var investment_stats__delegate = function (p__20608){var vec__20610 = p__20608;var type_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20610,0,null);return clustermap.api.GET([cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/investment-stats?"),cljs.core.str(clustermap.api.map_json_params(type_ids))].join(''));
};
var investment_stats = function (var_args){
var p__20608 = null;if (arguments.length > 0) {
  p__20608 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return investment_stats__delegate.call(this,p__20608);};
investment_stats.cljs$lang$maxFixedArity = 0;
investment_stats.cljs$lang$applyTo = (function (arglist__20611){
var p__20608 = cljs.core.seq(arglist__20611);
return investment_stats__delegate(p__20608);
});
investment_stats.cljs$core$IFn$_invoke$arity$variadic = investment_stats__delegate;
return investment_stats;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.investment_aggs = (function() { 
var investment_aggs__delegate = function (p__20612){var vec__20614 = p__20612;var type_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20614,0,null);var type_ids__$1 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$270,50,cljs.core.constant$keyword$273,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$274,"desc"], null)], null)], null),type_ids], 0));return clustermap.api.GET([cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/investment-aggs?"),cljs.core.str(clustermap.api.map_json_params(type_ids__$1))].join(''));
};
var investment_aggs = function (var_args){
var p__20612 = null;if (arguments.length > 0) {
  p__20612 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return investment_aggs__delegate.call(this,p__20612);};
investment_aggs.cljs$lang$maxFixedArity = 0;
investment_aggs.cljs$lang$applyTo = (function (arglist__20615){
var p__20612 = cljs.core.seq(arglist__20615);
return investment_aggs__delegate(p__20612);
});
investment_aggs.cljs$core$IFn$_invoke$arity$variadic = investment_aggs__delegate;
return investment_aggs;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.investments = (function() { 
var investments__delegate = function (p__20616){var vec__20618 = p__20616;var type_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20618,0,null);var type_ids__$1 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$270,50], null),type_ids], 0));return clustermap.api.GET([cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/investments?"),cljs.core.str(clustermap.api.map_json_params(type_ids__$1))].join(''));
};
var investments = function (var_args){
var p__20616 = null;if (arguments.length > 0) {
  p__20616 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return investments__delegate.call(this,p__20616);};
investments.cljs$lang$maxFixedArity = 0;
investments.cljs$lang$applyTo = (function (arglist__20619){
var p__20616 = cljs.core.seq(arglist__20619);
return investments__delegate(p__20616);
});
investments.cljs$core$IFn$_invoke$arity$variadic = investments__delegate;
return investments;
})()
;
