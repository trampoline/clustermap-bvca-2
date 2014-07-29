// Compiled by ClojureScript 0.0-2268
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
clustermap.api.AJAX = (function() { 
var AJAX__delegate = function (url,p__34383){var map__34387 = p__34383;var map__34387__$1 = ((cljs.core.seq_QMARK_(map__34387))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34387):map__34387);var opts = map__34387__$1;var content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34387__$1,cljs.core.constant$keyword$797);var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34387__$1,cljs.core.constant$keyword$798);var raw = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34387__$1,cljs.core.constant$keyword$799);var comm = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));goog.net.XhrIo.send(url,((function (comm,map__34387,map__34387__$1,opts,content,method,raw){
return (function (event){cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,((function (comm,map__34387,map__34387__$1,opts,content,method,raw){
return (function (d){if(cljs.core.truth_(raw))
{return d;
} else
{return cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(d,cljs.core.array_seq([cljs.core.constant$keyword$778,true], 0));
}
});})(comm,map__34387,map__34387__$1,opts,content,method,raw))
.call(null,(JSON.parse(event.target.getResponseText())["data"])));
return cljs.core.async.close_BANG_(comm);
});})(comm,map__34387,map__34387__$1,opts,content,method,raw))
,(function (){var or__3543__auto__ = (function (){var G__34389 = method;var G__34389__$1 = (((G__34389 == null))?null:cljs.core.name(G__34389));var G__34389__$2 = (((G__34389__$1 == null))?null:clojure.string.upper_case(G__34389__$1));return G__34389__$2;
})();if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return "GET";
}
})(),(cljs.core.truth_(content)?JSON.stringify(cljs.core.clj__GT_js(content)):null),(cljs.core.truth_(content)?cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 1, ["Content-Type","application/json"], null)):null));
return comm;
};
var AJAX = function (url,var_args){
var p__34383 = null;if (arguments.length > 1) {
  p__34383 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return AJAX__delegate.call(this,url,p__34383);};
AJAX.cljs$lang$maxFixedArity = 1;
AJAX.cljs$lang$applyTo = (function (arglist__34390){
var url = cljs.core.first(arglist__34390);
var p__34383 = cljs.core.rest(arglist__34390);
return AJAX__delegate(url,p__34383);
});
AJAX.cljs$core$IFn$_invoke$arity$variadic = AJAX__delegate;
return AJAX;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.GET = (function() { 
var GET__delegate = function (url,p__34391){var map__34393 = p__34391;var map__34393__$1 = ((cljs.core.seq_QMARK_(map__34393))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34393):map__34393);var opts = map__34393__$1;return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(clustermap.api.AJAX,url,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([opts,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$798,"GET"], null)], 0))));
};
var GET = function (url,var_args){
var p__34391 = null;if (arguments.length > 1) {
  p__34391 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return GET__delegate.call(this,url,p__34391);};
GET.cljs$lang$maxFixedArity = 1;
GET.cljs$lang$applyTo = (function (arglist__34394){
var url = cljs.core.first(arglist__34394);
var p__34391 = cljs.core.rest(arglist__34394);
return GET__delegate(url,p__34391);
});
GET.cljs$core$IFn$_invoke$arity$variadic = GET__delegate;
return GET;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.POST = (function() { 
var POST__delegate = function (url,content,p__34395){var map__34397 = p__34395;var map__34397__$1 = ((cljs.core.seq_QMARK_(map__34397))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34397):map__34397);var opts = map__34397__$1;return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(clustermap.api.AJAX,url,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([opts,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$798,"POST",cljs.core.constant$keyword$797,content], null)], 0))));
};
var POST = function (url,content,var_args){
var p__34395 = null;if (arguments.length > 2) {
  p__34395 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return POST__delegate.call(this,url,content,p__34395);};
POST.cljs$lang$maxFixedArity = 2;
POST.cljs$lang$applyTo = (function (arglist__34398){
var url = cljs.core.first(arglist__34398);
arglist__34398 = cljs.core.next(arglist__34398);
var content = cljs.core.first(arglist__34398);
var p__34395 = cljs.core.rest(arglist__34398);
return POST__delegate(url,content,p__34395);
});
POST.cljs$core$IFn$_invoke$arity$variadic = POST__delegate;
return POST;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.PUT = (function() { 
var PUT__delegate = function (url,content,p__34399){var map__34401 = p__34399;var map__34401__$1 = ((cljs.core.seq_QMARK_(map__34401))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34401):map__34401);var opts = map__34401__$1;return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(clustermap.api.AJAX,url,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([opts,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$798,"PUT",cljs.core.constant$keyword$797,content], null)], 0))));
};
var PUT = function (url,content,var_args){
var p__34399 = null;if (arguments.length > 2) {
  p__34399 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return PUT__delegate.call(this,url,content,p__34399);};
PUT.cljs$lang$maxFixedArity = 2;
PUT.cljs$lang$applyTo = (function (arglist__34402){
var url = cljs.core.first(arglist__34402);
arglist__34402 = cljs.core.next(arglist__34402);
var content = cljs.core.first(arglist__34402);
var p__34399 = cljs.core.rest(arglist__34402);
return PUT__delegate(url,content,p__34399);
});
PUT.cljs$core$IFn$_invoke$arity$variadic = PUT__delegate;
return PUT;
})()
;
/**
* - ocomm : a channel containing [result-chans result-handler-args]
* gather results from the one-or-more result-chans, and
* pass them to the handler along with any result-handler-args
* - handler : invoked with (apply handler result-or-results result-handler-args)
*/
clustermap.api.ordered_api_results = (function ordered_api_results(ocomm,handler){var c__5693__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5693__auto__){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto__){
return (function (state_34535){var state_val_34536 = (state_34535[(1)]);if((state_val_34536 === (7)))
{var inst_34493 = (state_34535[(7)]);var inst_34492 = (state_34535[(2)]);var inst_34493__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34492,(0),null);var inst_34494 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34492,(1),null);var inst_34495 = cljs.core.sequential_QMARK_(inst_34493__$1);var state_34535__$1 = (function (){var statearr_34537 = state_34535;(statearr_34537[(7)] = inst_34493__$1);
(statearr_34537[(8)] = inst_34494);
return statearr_34537;
})();if(inst_34495)
{var statearr_34538_34573 = state_34535__$1;(statearr_34538_34573[(1)] = (8));
} else
{var statearr_34539_34574 = state_34535__$1;(statearr_34539_34574[(1)] = (9));
}
return cljs.core.constant$keyword$783;
} else
{if((state_val_34536 === (20)))
{var inst_34493 = (state_34535[(7)]);var state_34535__$1 = state_34535;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34535__$1,(23),inst_34493);
} else
{if((state_val_34536 === (1)))
{var state_34535__$1 = state_34535;var statearr_34540_34575 = state_34535__$1;(statearr_34540_34575[(2)] = null);
(statearr_34540_34575[(1)] = (2));
return cljs.core.constant$keyword$783;
} else
{if((state_val_34536 === (4)))
{var state_34535__$1 = state_34535;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34535__$1,(7),ocomm);
} else
{if((state_val_34536 === (15)))
{var inst_34515 = (state_34535[(2)]);var state_34535__$1 = state_34535;var statearr_34541_34576 = state_34535__$1;(statearr_34541_34576[(2)] = inst_34515);
(statearr_34541_34576[(1)] = (12));
return cljs.core.constant$keyword$783;
} else
{if((state_val_34536 === (21)))
{var state_34535__$1 = state_34535;var statearr_34542_34577 = state_34535__$1;(statearr_34542_34577[(2)] = null);
(statearr_34542_34577[(1)] = (22));
return cljs.core.constant$keyword$783;
} else
{if((state_val_34536 === (13)))
{var inst_34498 = (state_34535[(9)]);var state_34535__$1 = state_34535;var statearr_34543_34578 = state_34535__$1;(statearr_34543_34578[(2)] = inst_34498);
(statearr_34543_34578[(1)] = (15));
return cljs.core.constant$keyword$783;
} else
{if((state_val_34536 === (22)))
{var inst_34524 = (state_34535[(2)]);var state_34535__$1 = state_34535;var statearr_34544_34579 = state_34535__$1;(statearr_34544_34579[(2)] = inst_34524);
(statearr_34544_34579[(1)] = (10));
return cljs.core.constant$keyword$783;
} else
{if((state_val_34536 === (6)))
{var inst_34531 = (state_34535[(2)]);var state_34535__$1 = state_34535;var statearr_34545_34580 = state_34535__$1;(statearr_34545_34580[(2)] = inst_34531);
(statearr_34545_34580[(1)] = (3));
return cljs.core.constant$keyword$783;
} else
{if((state_val_34536 === (17)))
{var state_34535__$1 = state_34535;var statearr_34546_34581 = state_34535__$1;(statearr_34546_34581[(2)] = null);
(statearr_34546_34581[(1)] = (18));
return cljs.core.constant$keyword$783;
} else
{if((state_val_34536 === (3)))
{var inst_34533 = (state_34535[(2)]);var state_34535__$1 = state_34535;return cljs.core.async.impl.ioc_helpers.return_chan(state_34535__$1,inst_34533);
} else
{if((state_val_34536 === (12)))
{var inst_34517 = (state_34535[(2)]);var state_34535__$1 = state_34535;var statearr_34547_34582 = state_34535__$1;(statearr_34547_34582[(2)] = inst_34517);
(statearr_34547_34582[(1)] = (10));
return cljs.core.constant$keyword$783;
} else
{if((state_val_34536 === (2)))
{var state_34535__$1 = state_34535;if(true)
{var statearr_34548_34583 = state_34535__$1;(statearr_34548_34583[(1)] = (4));
} else
{var statearr_34549_34584 = state_34535__$1;(statearr_34549_34584[(1)] = (5));
}
return cljs.core.constant$keyword$783;
} else
{if((state_val_34536 === (23)))
{var inst_34521 = (state_34535[(2)]);var state_34535__$1 = state_34535;var statearr_34550_34585 = state_34535__$1;(statearr_34550_34585[(2)] = inst_34521);
(statearr_34550_34585[(1)] = (22));
return cljs.core.constant$keyword$783;
} else
{if((state_val_34536 === (19)))
{var inst_34508 = (state_34535[(2)]);var state_34535__$1 = state_34535;var statearr_34551_34586 = state_34535__$1;(statearr_34551_34586[(2)] = inst_34508);
(statearr_34551_34586[(1)] = (18));
return cljs.core.constant$keyword$783;
} else
{if((state_val_34536 === (11)))
{var inst_34497 = (state_34535[(10)]);var inst_34500 = cljs.core.empty_QMARK_(inst_34497);var state_34535__$1 = state_34535;if(inst_34500)
{var statearr_34552_34587 = state_34535__$1;(statearr_34552_34587[(1)] = (13));
} else
{var statearr_34553_34588 = state_34535__$1;(statearr_34553_34588[(1)] = (14));
}
return cljs.core.constant$keyword$783;
} else
{if((state_val_34536 === (9)))
{var inst_34493 = (state_34535[(7)]);var state_34535__$1 = state_34535;if(cljs.core.truth_(inst_34493))
{var statearr_34554_34589 = state_34535__$1;(statearr_34554_34589[(1)] = (20));
} else
{var statearr_34555_34590 = state_34535__$1;(statearr_34555_34590[(1)] = (21));
}
return cljs.core.constant$keyword$783;
} else
{if((state_val_34536 === (5)))
{var state_34535__$1 = state_34535;var statearr_34556_34591 = state_34535__$1;(statearr_34556_34591[(2)] = null);
(statearr_34556_34591[(1)] = (6));
return cljs.core.constant$keyword$783;
} else
{if((state_val_34536 === (14)))
{var inst_34497 = (state_34535[(10)]);var inst_34503 = cljs.core.rest(inst_34497);var inst_34504 = cljs.core.first(inst_34497);var state_34535__$1 = (function (){var statearr_34557 = state_34535;(statearr_34557[(11)] = inst_34503);
return statearr_34557;
})();if(cljs.core.truth_(inst_34504))
{var statearr_34558_34592 = state_34535__$1;(statearr_34558_34592[(1)] = (16));
} else
{var statearr_34559_34593 = state_34535__$1;(statearr_34559_34593[(1)] = (17));
}
return cljs.core.constant$keyword$783;
} else
{if((state_val_34536 === (16)))
{var inst_34497 = (state_34535[(10)]);var inst_34506 = cljs.core.first(inst_34497);var state_34535__$1 = state_34535;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34535__$1,(19),inst_34506);
} else
{if((state_val_34536 === (10)))
{var inst_34494 = (state_34535[(8)]);var inst_34526 = (state_34535[(2)]);var inst_34527 = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(handler,inst_34526,inst_34494);var state_34535__$1 = (function (){var statearr_34560 = state_34535;(statearr_34560[(12)] = inst_34527);
return statearr_34560;
})();var statearr_34561_34594 = state_34535__$1;(statearr_34561_34594[(2)] = null);
(statearr_34561_34594[(1)] = (2));
return cljs.core.constant$keyword$783;
} else
{if((state_val_34536 === (18)))
{var inst_34503 = (state_34535[(11)]);var inst_34498 = (state_34535[(9)]);var inst_34511 = (state_34535[(2)]);var inst_34512 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(inst_34498,inst_34511);var inst_34497 = inst_34503;var inst_34498__$1 = inst_34512;var state_34535__$1 = (function (){var statearr_34562 = state_34535;(statearr_34562[(9)] = inst_34498__$1);
(statearr_34562[(10)] = inst_34497);
return statearr_34562;
})();var statearr_34563_34595 = state_34535__$1;(statearr_34563_34595[(2)] = null);
(statearr_34563_34595[(1)] = (11));
return cljs.core.constant$keyword$783;
} else
{if((state_val_34536 === (8)))
{var inst_34493 = (state_34535[(7)]);var inst_34497 = inst_34493;var inst_34498 = cljs.core.PersistentVector.EMPTY;var state_34535__$1 = (function (){var statearr_34564 = state_34535;(statearr_34564[(9)] = inst_34498);
(statearr_34564[(10)] = inst_34497);
return statearr_34564;
})();var statearr_34565_34596 = state_34535__$1;(statearr_34565_34596[(2)] = null);
(statearr_34565_34596[(1)] = (11));
return cljs.core.constant$keyword$783;
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
});})(c__5693__auto__))
;return ((function (switch__5678__auto__,c__5693__auto__){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_34569 = [null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_34569[(0)] = state_machine__5679__auto__);
(statearr_34569[(1)] = (1));
return statearr_34569;
});
var state_machine__5679__auto____1 = (function (state_34535){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__(state_34535);if(cljs.core.keyword_identical_QMARK_(result__5681__auto__,cljs.core.constant$keyword$783))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e34570){if((e34570 instanceof Object))
{var ex__5682__auto__ = e34570;var statearr_34571_34597 = state_34535;(statearr_34571_34597[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_34535);
return cljs.core.constant$keyword$783;
} else
{if(cljs.core.constant$keyword$774)
{throw e34570;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5680__auto__,cljs.core.constant$keyword$783))
{{
var G__34598 = state_34535;
state_34535 = G__34598;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_34535){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_34535);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto__))
})();var state__5695__auto__ = (function (){var statearr_34572 = (f__5694__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5694__auto__.cljs$core$IFn$_invoke$arity$0() : f__5694__auto__.call(null));(statearr_34572[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto__);
return statearr_34572;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5695__auto__);
});})(c__5693__auto__))
);
return c__5693__auto__;
});
/**
* order responses from an async API according to the order of requests
* - request-handler: fn to send an async API request, returning a channel of a single result value,
* and optional additional args for the result-handler. return nil to
* abandon request
* - result-handler: function of API result and optional additional args from request-handler result
*/
clustermap.api.ordered_api = (function ordered_api(request_handler,result_handler){var ocomm = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));var _ = clustermap.api.ordered_api_results(ocomm,result_handler);return ((function (ocomm,_){
return (function() { 
var G__34601__delegate = function (req_args){var temp__4124__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(request_handler,req_args);if(cljs.core.truth_(temp__4124__auto__))
{var r = temp__4124__auto__;var rseq = ((cljs.core.sequential_QMARK_(r))?r:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [r], null));var vec__34600 = rseq;var rcomm = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34600,(0),null);var result_handler_args = cljs.core.nthnext(vec__34600,(1));return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(ocomm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rcomm,result_handler_args], null));
} else
{return null;
}
};
var G__34601 = function (var_args){
var req_args = null;if (arguments.length > 0) {
  req_args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__34601__delegate.call(this,req_args);};
G__34601.cljs$lang$maxFixedArity = 0;
G__34601.cljs$lang$applyTo = (function (arglist__34602){
var req_args = cljs.core.seq(arglist__34602);
return G__34601__delegate(req_args);
});
G__34601.cljs$core$IFn$_invoke$arity$variadic = G__34601__delegate;
return G__34601;
})()
;
;})(ocomm,_))
});
/**
* @param {...*} var_args
*/
clustermap.api.log_api = (function() { 
var log_api__delegate = function (f,args){var ch = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,args);var c__5693__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5693__auto__,ch){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto__,ch){
return (function (state_34620){var state_val_34621 = (state_34620[(1)]);if((state_val_34621 === (2)))
{var inst_34617 = (state_34620[(2)]);var inst_34618 = console.log(inst_34617);var state_34620__$1 = state_34620;return cljs.core.async.impl.ioc_helpers.return_chan(state_34620__$1,inst_34618);
} else
{if((state_val_34621 === (1)))
{var state_34620__$1 = state_34620;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34620__$1,(2),ch);
} else
{return null;
}
}
});})(c__5693__auto__,ch))
;return ((function (switch__5678__auto__,c__5693__auto__,ch){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_34625 = [null,null,null,null,null,null,null];(statearr_34625[(0)] = state_machine__5679__auto__);
(statearr_34625[(1)] = (1));
return statearr_34625;
});
var state_machine__5679__auto____1 = (function (state_34620){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__(state_34620);if(cljs.core.keyword_identical_QMARK_(result__5681__auto__,cljs.core.constant$keyword$783))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e34626){if((e34626 instanceof Object))
{var ex__5682__auto__ = e34626;var statearr_34627_34629 = state_34620;(statearr_34627_34629[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_34620);
return cljs.core.constant$keyword$783;
} else
{if(cljs.core.constant$keyword$774)
{throw e34626;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5680__auto__,cljs.core.constant$keyword$783))
{{
var G__34630 = state_34620;
state_34620 = G__34630;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_34620){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_34620);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto__,ch))
})();var state__5695__auto__ = (function (){var statearr_34628 = (f__5694__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5694__auto__.cljs$core$IFn$_invoke$arity$0() : f__5694__auto__.call(null));(statearr_34628[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto__);
return statearr_34628;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5695__auto__);
});})(c__5693__auto__,ch))
);
return c__5693__auto__;
};
var log_api = function (f,var_args){
var args = null;if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return log_api__delegate.call(this,f,args);};
log_api.cljs$lang$maxFixedArity = 1;
log_api.cljs$lang$applyTo = (function (arglist__34631){
var f = cljs.core.first(arglist__34631);
var args = cljs.core.rest(arglist__34631);
return log_api__delegate(f,args);
});
log_api.cljs$core$IFn$_invoke$arity$variadic = log_api__delegate;
return log_api;
})()
;
clustermap.api.map_json_params = (function map_json_params(m){return clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__34634){var vec__34635 = p__34634;var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34635,(0),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34635,(1),null);return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(k))+"="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(JSON.stringify(cljs.core.clj__GT_js(v))));
}),m));
});
/**
* put the results of an api call into an atom... makes ad-hoc api calls easy
*/
clustermap.api.fetch = (function fetch(comm){var r = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);var c__5693__auto___34662 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5693__auto___34662,r){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto___34662,r){
return (function (state_34653){var state_val_34654 = (state_34653[(1)]);if((state_val_34654 === (2)))
{var inst_34650 = (state_34653[(2)]);var inst_34651 = cljs.core.reset_BANG_(r,inst_34650);var state_34653__$1 = state_34653;return cljs.core.async.impl.ioc_helpers.return_chan(state_34653__$1,inst_34651);
} else
{if((state_val_34654 === (1)))
{var state_34653__$1 = state_34653;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34653__$1,(2),comm);
} else
{return null;
}
}
});})(c__5693__auto___34662,r))
;return ((function (switch__5678__auto__,c__5693__auto___34662,r){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_34658 = [null,null,null,null,null,null,null];(statearr_34658[(0)] = state_machine__5679__auto__);
(statearr_34658[(1)] = (1));
return statearr_34658;
});
var state_machine__5679__auto____1 = (function (state_34653){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__(state_34653);if(cljs.core.keyword_identical_QMARK_(result__5681__auto__,cljs.core.constant$keyword$783))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e34659){if((e34659 instanceof Object))
{var ex__5682__auto__ = e34659;var statearr_34660_34663 = state_34653;(statearr_34660_34663[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_34653);
return cljs.core.constant$keyword$783;
} else
{if(cljs.core.constant$keyword$774)
{throw e34659;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5680__auto__,cljs.core.constant$keyword$783))
{{
var G__34664 = state_34653;
state_34653 = G__34664;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_34653){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_34653);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto___34662,r))
})();var state__5695__auto__ = (function (){var statearr_34661 = (f__5694__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5694__auto__.cljs$core$IFn$_invoke$arity$0() : f__5694__auto__.call(null));(statearr_34661[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto___34662);
return statearr_34661;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5695__auto__);
});})(c__5693__auto___34662,r))
);
return r;
});
clustermap.api.api_prefix = config.api.prefix;
/**
* @param {...*} var_args
*/
clustermap.api.boundarylines = (function() { 
var boundarylines__delegate = function (id,tolerance,opts){return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(clustermap.api.GET,("/api/boundarylines/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(tolerance)),opts);
};
var boundarylines = function (id,tolerance,var_args){
var opts = null;if (arguments.length > 2) {
  opts = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return boundarylines__delegate.call(this,id,tolerance,opts);};
boundarylines.cljs$lang$maxFixedArity = 2;
boundarylines.cljs$lang$applyTo = (function (arglist__34665){
var id = cljs.core.first(arglist__34665);
arglist__34665 = cljs.core.next(arglist__34665);
var tolerance = cljs.core.first(arglist__34665);
var opts = cljs.core.rest(arglist__34665);
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
var boundaryline_collection_index__delegate = function (id,opts){return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(clustermap.api.GET,("/api/boundaryline-collection-index/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(id))),opts);
};
var boundaryline_collection_index = function (id,var_args){
var opts = null;if (arguments.length > 1) {
  opts = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return boundaryline_collection_index__delegate.call(this,id,opts);};
boundaryline_collection_index.cljs$lang$maxFixedArity = 1;
boundaryline_collection_index.cljs$lang$applyTo = (function (arglist__34666){
var id = cljs.core.first(arglist__34666);
var opts = cljs.core.rest(arglist__34666);
return boundaryline_collection_index__delegate(id,opts);
});
boundaryline_collection_index.cljs$core$IFn$_invoke$arity$variadic = boundaryline_collection_index__delegate;
return boundaryline_collection_index;
})()
;
/**
* fetch a whole set of boundarylines in one api hit
* @param {...*} var_args
*/
clustermap.api.boundaryline_set = (function() { 
var boundaryline_set__delegate = function (ids,tolerance,opts){return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(clustermap.api.POST,"/api/boundaryline-set",new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$800,ids,cljs.core.constant$keyword$801,tolerance], null),opts);
};
var boundaryline_set = function (ids,tolerance,var_args){
var opts = null;if (arguments.length > 2) {
  opts = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return boundaryline_set__delegate.call(this,ids,tolerance,opts);};
boundaryline_set.cljs$lang$maxFixedArity = 2;
boundaryline_set.cljs$lang$applyTo = (function (arglist__34667){
var ids = cljs.core.first(arglist__34667);
arglist__34667 = cljs.core.next(arglist__34667);
var tolerance = cljs.core.first(arglist__34667);
var opts = cljs.core.rest(arglist__34667);
return boundaryline_set__delegate(ids,tolerance,opts);
});
boundaryline_set.cljs$core$IFn$_invoke$arity$variadic = boundaryline_set__delegate;
return boundaryline_set;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.boundaryline_collection_view = (function() { 
var boundaryline_collection_view__delegate = function (collection_id,tolerance,bounds,p__34668){var map__34670 = p__34668;var map__34670__$1 = ((cljs.core.seq_QMARK_(map__34670))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34670):map__34670);var opts = map__34670__$1;var boundaryline_ids = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34670__$1,cljs.core.constant$keyword$802);var opts__$1 = cljs.core.flatten(cljs.core.seq(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(opts,cljs.core.constant$keyword$802)));return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(clustermap.api.POST,("/api/boundaryline-collection-view/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(collection_id))+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(tolerance)),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$803,bounds,cljs.core.constant$keyword$802,boundaryline_ids], null),opts__$1);
};
var boundaryline_collection_view = function (collection_id,tolerance,bounds,var_args){
var p__34668 = null;if (arguments.length > 3) {
  p__34668 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return boundaryline_collection_view__delegate.call(this,collection_id,tolerance,bounds,p__34668);};
boundaryline_collection_view.cljs$lang$maxFixedArity = 3;
boundaryline_collection_view.cljs$lang$applyTo = (function (arglist__34671){
var collection_id = cljs.core.first(arglist__34671);
arglist__34671 = cljs.core.next(arglist__34671);
var tolerance = cljs.core.first(arglist__34671);
arglist__34671 = cljs.core.next(arglist__34671);
var bounds = cljs.core.first(arglist__34671);
var p__34668 = cljs.core.rest(arglist__34671);
return boundaryline_collection_view__delegate(collection_id,tolerance,bounds,p__34668);
});
boundaryline_collection_view.cljs$core$IFn$_invoke$arity$variadic = boundaryline_collection_view__delegate;
return boundaryline_collection_view;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.boundaryline_aggregation = (function() { 
var boundaryline_aggregation__delegate = function (index,type,blcoll,attr,filter,bounds,p__34672){var vec__34674 = p__34672;var type_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34674,(0),null);return clustermap.api.POST(("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/boundaryline-agg/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(index)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(blcoll)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(attr)+"?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params(type_ids))),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$804,filter,cljs.core.constant$keyword$803,bounds], null));
};
var boundaryline_aggregation = function (index,type,blcoll,attr,filter,bounds,var_args){
var p__34672 = null;if (arguments.length > 6) {
  p__34672 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 6),0);} 
return boundaryline_aggregation__delegate.call(this,index,type,blcoll,attr,filter,bounds,p__34672);};
boundaryline_aggregation.cljs$lang$maxFixedArity = 6;
boundaryline_aggregation.cljs$lang$applyTo = (function (arglist__34675){
var index = cljs.core.first(arglist__34675);
arglist__34675 = cljs.core.next(arglist__34675);
var type = cljs.core.first(arglist__34675);
arglist__34675 = cljs.core.next(arglist__34675);
var blcoll = cljs.core.first(arglist__34675);
arglist__34675 = cljs.core.next(arglist__34675);
var attr = cljs.core.first(arglist__34675);
arglist__34675 = cljs.core.next(arglist__34675);
var filter = cljs.core.first(arglist__34675);
arglist__34675 = cljs.core.next(arglist__34675);
var bounds = cljs.core.first(arglist__34675);
var p__34672 = cljs.core.rest(arglist__34675);
return boundaryline_aggregation__delegate(index,type,blcoll,attr,filter,bounds,p__34672);
});
boundaryline_aggregation.cljs$core$IFn$_invoke$arity$variadic = boundaryline_aggregation__delegate;
return boundaryline_aggregation;
})()
;
clustermap.api.search = (function search(q){if((cljs.core.count(clojure.string.trim(q)) > (0)))
{return clustermap.api.GET(("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/search?q="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(q)));
} else
{return cljs.core.async.to_chan(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [{}], null));
}
});
clustermap.api.constituency = (function constituency(id){return clustermap.api.GET(("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/constituencies/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)));
});
clustermap.api.portfolio_company = (function portfolio_company(id){return clustermap.api.GET(("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/portfolio-companies/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)));
});
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_sites = (function() { 
var portfolio_company_sites__delegate = function (p__34676){var vec__34678 = p__34676;var type_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34678,(0),null);var type_ids__$1 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$805,(100),cljs.core.constant$keyword$806,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$807,"desc"], null)], null)], null),type_ids], 0));return clustermap.api.GET(("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/portfolio-company-sites?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params(type_ids__$1))));
};
var portfolio_company_sites = function (var_args){
var p__34676 = null;if (arguments.length > 0) {
  p__34676 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_sites__delegate.call(this,p__34676);};
portfolio_company_sites.cljs$lang$maxFixedArity = 0;
portfolio_company_sites.cljs$lang$applyTo = (function (arglist__34679){
var p__34676 = cljs.core.seq(arglist__34679);
return portfolio_company_sites__delegate(p__34676);
});
portfolio_company_sites.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_sites__delegate;
return portfolio_company_sites;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_sites_by_company = (function() { 
var portfolio_company_sites_by_company__delegate = function (p__34680){var vec__34682 = p__34680;var type_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34682,(0),null);var type_ids__$1 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$805,(100),cljs.core.constant$keyword$806,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$807,"desc"], null)], null)], null),type_ids], 0));return clustermap.api.GET(("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/portfolio-company-sites-by-company?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params(type_ids__$1))));
};
var portfolio_company_sites_by_company = function (var_args){
var p__34680 = null;if (arguments.length > 0) {
  p__34680 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_sites_by_company__delegate.call(this,p__34680);};
portfolio_company_sites_by_company.cljs$lang$maxFixedArity = 0;
portfolio_company_sites_by_company.cljs$lang$applyTo = (function (arglist__34683){
var p__34680 = cljs.core.seq(arglist__34683);
return portfolio_company_sites_by_company__delegate(p__34680);
});
portfolio_company_sites_by_company.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_sites_by_company__delegate;
return portfolio_company_sites_by_company;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_locations = (function() { 
var portfolio_company_locations__delegate = function (p__34684){var vec__34686 = p__34684;var type_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34686,(0),null);return clustermap.api.GET(("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/portfolio-company-locations?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params(type_ids))));
};
var portfolio_company_locations = function (var_args){
var p__34684 = null;if (arguments.length > 0) {
  p__34684 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_locations__delegate.call(this,p__34684);};
portfolio_company_locations.cljs$lang$maxFixedArity = 0;
portfolio_company_locations.cljs$lang$applyTo = (function (arglist__34687){
var p__34684 = cljs.core.seq(arglist__34687);
return portfolio_company_locations__delegate(p__34684);
});
portfolio_company_locations.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_locations__delegate;
return portfolio_company_locations;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_site_stats = (function() { 
var portfolio_company_site_stats__delegate = function (p__34688){var vec__34690 = p__34688;var type_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34690,(0),null);return clustermap.api.GET(("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/portfolio-company-site-stats?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params(type_ids))));
};
var portfolio_company_site_stats = function (var_args){
var p__34688 = null;if (arguments.length > 0) {
  p__34688 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_site_stats__delegate.call(this,p__34688);};
portfolio_company_site_stats.cljs$lang$maxFixedArity = 0;
portfolio_company_site_stats.cljs$lang$applyTo = (function (arglist__34691){
var p__34688 = cljs.core.seq(arglist__34691);
return portfolio_company_site_stats__delegate(p__34688);
});
portfolio_company_site_stats.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_site_stats__delegate;
return portfolio_company_site_stats;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_site_account_timelines = (function() { 
var portfolio_company_site_account_timelines__delegate = function (p__34692){var vec__34694 = p__34692;var type_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34694,(0),null);return clustermap.api.GET(("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/portfolio-company-site-account-timelines?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params(type_ids))));
};
var portfolio_company_site_account_timelines = function (var_args){
var p__34692 = null;if (arguments.length > 0) {
  p__34692 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_site_account_timelines__delegate.call(this,p__34692);};
portfolio_company_site_account_timelines.cljs$lang$maxFixedArity = 0;
portfolio_company_site_account_timelines.cljs$lang$applyTo = (function (arglist__34695){
var p__34692 = cljs.core.seq(arglist__34695);
return portfolio_company_site_account_timelines__delegate(p__34692);
});
portfolio_company_site_account_timelines.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_site_account_timelines__delegate;
return portfolio_company_site_account_timelines;
})()
;
clustermap.api.investor_company = (function investor_company(id){return clustermap.api.GET(("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/investor-companies/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)));
});
/**
* @param {...*} var_args
*/
clustermap.api.investment_account_timelines = (function() { 
var investment_account_timelines__delegate = function (p__34696){var vec__34698 = p__34696;var type_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34698,(0),null);return clustermap.api.GET(("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/investment-account-timelines?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params(type_ids))));
};
var investment_account_timelines = function (var_args){
var p__34696 = null;if (arguments.length > 0) {
  p__34696 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return investment_account_timelines__delegate.call(this,p__34696);};
investment_account_timelines.cljs$lang$maxFixedArity = 0;
investment_account_timelines.cljs$lang$applyTo = (function (arglist__34699){
var p__34696 = cljs.core.seq(arglist__34699);
return investment_account_timelines__delegate(p__34696);
});
investment_account_timelines.cljs$core$IFn$_invoke$arity$variadic = investment_account_timelines__delegate;
return investment_account_timelines;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.investment_stats = (function() { 
var investment_stats__delegate = function (p__34700){var vec__34702 = p__34700;var type_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34702,(0),null);return clustermap.api.GET(("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/investment-stats?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params(type_ids))));
};
var investment_stats = function (var_args){
var p__34700 = null;if (arguments.length > 0) {
  p__34700 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return investment_stats__delegate.call(this,p__34700);};
investment_stats.cljs$lang$maxFixedArity = 0;
investment_stats.cljs$lang$applyTo = (function (arglist__34703){
var p__34700 = cljs.core.seq(arglist__34703);
return investment_stats__delegate(p__34700);
});
investment_stats.cljs$core$IFn$_invoke$arity$variadic = investment_stats__delegate;
return investment_stats;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.investment_aggs = (function() { 
var investment_aggs__delegate = function (p__34704){var vec__34706 = p__34704;var type_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34706,(0),null);var type_ids__$1 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$805,(50),cljs.core.constant$keyword$808,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$809,"desc"], null)], null),type_ids], 0));return clustermap.api.GET(("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/investment-aggs?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params(type_ids__$1))));
};
var investment_aggs = function (var_args){
var p__34704 = null;if (arguments.length > 0) {
  p__34704 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return investment_aggs__delegate.call(this,p__34704);};
investment_aggs.cljs$lang$maxFixedArity = 0;
investment_aggs.cljs$lang$applyTo = (function (arglist__34707){
var p__34704 = cljs.core.seq(arglist__34707);
return investment_aggs__delegate(p__34704);
});
investment_aggs.cljs$core$IFn$_invoke$arity$variadic = investment_aggs__delegate;
return investment_aggs;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.investments = (function() { 
var investments__delegate = function (p__34708){var vec__34710 = p__34708;var type_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34710,(0),null);var type_ids__$1 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$805,(50),cljs.core.constant$keyword$808,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$810,"asc"], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$811,"asc"], null)], null)], null),type_ids], 0));return clustermap.api.GET(("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/investments?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params(type_ids__$1))));
};
var investments = function (var_args){
var p__34708 = null;if (arguments.length > 0) {
  p__34708 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return investments__delegate.call(this,p__34708);};
investments.cljs$lang$maxFixedArity = 0;
investments.cljs$lang$applyTo = (function (arglist__34711){
var p__34708 = cljs.core.seq(arglist__34711);
return investments__delegate(p__34708);
});
investments.cljs$core$IFn$_invoke$arity$variadic = investments__delegate;
return investments;
})()
;
