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
var AJAX__delegate = function (url,p__22335){var map__22339 = p__22335;var map__22339__$1 = ((cljs.core.seq_QMARK_.call(null,map__22339))?cljs.core.apply.call(null,cljs.core.hash_map,map__22339):map__22339);var opts = map__22339__$1;var content = cljs.core.get.call(null,map__22339__$1,new cljs.core.Keyword(null,"content","content",15833224));var method = cljs.core.get.call(null,map__22339__$1,new cljs.core.Keyword(null,"method","method",55703592));var raw = cljs.core.get.call(null,map__22339__$1,new cljs.core.Keyword(null,"raw","raw",1604651272));var comm = cljs.core.async.chan.call(null,(1));goog.net.XhrIo.send(url,((function (comm,map__22339,map__22339__$1,opts,content,method,raw){
return (function (event){cljs.core.async.put_BANG_.call(null,comm,((function (comm,map__22339,map__22339__$1,opts,content,method,raw){
return (function (d){if(cljs.core.truth_(raw))
{return d;
} else
{return cljs.core.js__GT_clj.call(null,d,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true);
}
});})(comm,map__22339,map__22339__$1,opts,content,method,raw))
.call(null,(JSON.parse(event.target.getResponseText())["data"])));
return cljs.core.async.close_BANG_.call(null,comm);
});})(comm,map__22339,map__22339__$1,opts,content,method,raw))
,(function (){var or__3541__auto__ = (function (){var G__22341 = method;var G__22341__$1 = (((G__22341 == null))?null:cljs.core.name.call(null,G__22341));var G__22341__$2 = (((G__22341__$1 == null))?null:clojure.string.upper_case.call(null,G__22341__$1));return G__22341__$2;
})();if(cljs.core.truth_(or__3541__auto__))
{return or__3541__auto__;
} else
{return "GET";
}
})(),(cljs.core.truth_(content)?JSON.stringify(cljs.core.clj__GT_js.call(null,content)):null),(cljs.core.truth_(content)?cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, ["Content-Type","application/json"], null)):null));
return comm;
};
var AJAX = function (url,var_args){
var p__22335 = null;if (arguments.length > 1) {
  p__22335 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return AJAX__delegate.call(this,url,p__22335);};
AJAX.cljs$lang$maxFixedArity = 1;
AJAX.cljs$lang$applyTo = (function (arglist__22342){
var url = cljs.core.first(arglist__22342);
var p__22335 = cljs.core.rest(arglist__22342);
return AJAX__delegate(url,p__22335);
});
AJAX.cljs$core$IFn$_invoke$arity$variadic = AJAX__delegate;
return AJAX;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.GET = (function() { 
var GET__delegate = function (url,p__22343){var map__22345 = p__22343;var map__22345__$1 = ((cljs.core.seq_QMARK_.call(null,map__22345))?cljs.core.apply.call(null,cljs.core.hash_map,map__22345):map__22345);var opts = map__22345__$1;return cljs.core.apply.call(null,clustermap.api.AJAX,url,cljs.core.apply.call(null,cljs.core.concat,cljs.core.merge.call(null,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"method","method",55703592),"GET"], null))));
};
var GET = function (url,var_args){
var p__22343 = null;if (arguments.length > 1) {
  p__22343 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return GET__delegate.call(this,url,p__22343);};
GET.cljs$lang$maxFixedArity = 1;
GET.cljs$lang$applyTo = (function (arglist__22346){
var url = cljs.core.first(arglist__22346);
var p__22343 = cljs.core.rest(arglist__22346);
return GET__delegate(url,p__22343);
});
GET.cljs$core$IFn$_invoke$arity$variadic = GET__delegate;
return GET;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.POST = (function() { 
var POST__delegate = function (url,content,p__22347){var map__22349 = p__22347;var map__22349__$1 = ((cljs.core.seq_QMARK_.call(null,map__22349))?cljs.core.apply.call(null,cljs.core.hash_map,map__22349):map__22349);var opts = map__22349__$1;return cljs.core.apply.call(null,clustermap.api.AJAX,url,cljs.core.apply.call(null,cljs.core.concat,cljs.core.merge.call(null,opts,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"content","content",15833224),content], null))));
};
var POST = function (url,content,var_args){
var p__22347 = null;if (arguments.length > 2) {
  p__22347 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return POST__delegate.call(this,url,content,p__22347);};
POST.cljs$lang$maxFixedArity = 2;
POST.cljs$lang$applyTo = (function (arglist__22350){
var url = cljs.core.first(arglist__22350);
arglist__22350 = cljs.core.next(arglist__22350);
var content = cljs.core.first(arglist__22350);
var p__22347 = cljs.core.rest(arglist__22350);
return POST__delegate(url,content,p__22347);
});
POST.cljs$core$IFn$_invoke$arity$variadic = POST__delegate;
return POST;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.PUT = (function() { 
var PUT__delegate = function (url,content,p__22351){var map__22353 = p__22351;var map__22353__$1 = ((cljs.core.seq_QMARK_.call(null,map__22353))?cljs.core.apply.call(null,cljs.core.hash_map,map__22353):map__22353);var opts = map__22353__$1;return cljs.core.apply.call(null,clustermap.api.AJAX,url,cljs.core.apply.call(null,cljs.core.concat,cljs.core.merge.call(null,opts,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"PUT",new cljs.core.Keyword(null,"content","content",15833224),content], null))));
};
var PUT = function (url,content,var_args){
var p__22351 = null;if (arguments.length > 2) {
  p__22351 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return PUT__delegate.call(this,url,content,p__22351);};
PUT.cljs$lang$maxFixedArity = 2;
PUT.cljs$lang$applyTo = (function (arglist__22354){
var url = cljs.core.first(arglist__22354);
arglist__22354 = cljs.core.next(arglist__22354);
var content = cljs.core.first(arglist__22354);
var p__22351 = cljs.core.rest(arglist__22354);
return PUT__delegate(url,content,p__22351);
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
clustermap.api.ordered_api_results = (function ordered_api_results(ocomm,handler){var c__5691__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5691__auto__){
return (function (){var f__5692__auto__ = (function (){var switch__5676__auto__ = ((function (c__5691__auto__){
return (function (state_22487){var state_val_22488 = (state_22487[(1)]);if((state_val_22488 === (7)))
{var inst_22445 = (state_22487[(7)]);var inst_22444 = (state_22487[(2)]);var inst_22445__$1 = cljs.core.nth.call(null,inst_22444,(0),null);var inst_22446 = cljs.core.nth.call(null,inst_22444,(1),null);var inst_22447 = cljs.core.sequential_QMARK_.call(null,inst_22445__$1);var state_22487__$1 = (function (){var statearr_22489 = state_22487;(statearr_22489[(7)] = inst_22445__$1);
(statearr_22489[(8)] = inst_22446);
return statearr_22489;
})();if(inst_22447)
{var statearr_22490_22525 = state_22487__$1;(statearr_22490_22525[(1)] = (8));
} else
{var statearr_22491_22526 = state_22487__$1;(statearr_22491_22526[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22488 === (20)))
{var inst_22445 = (state_22487[(7)]);var state_22487__$1 = state_22487;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22487__$1,(23),inst_22445);
} else
{if((state_val_22488 === (1)))
{var state_22487__$1 = state_22487;var statearr_22492_22527 = state_22487__$1;(statearr_22492_22527[(2)] = null);
(statearr_22492_22527[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22488 === (4)))
{var state_22487__$1 = state_22487;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22487__$1,(7),ocomm);
} else
{if((state_val_22488 === (15)))
{var inst_22467 = (state_22487[(2)]);var state_22487__$1 = state_22487;var statearr_22493_22528 = state_22487__$1;(statearr_22493_22528[(2)] = inst_22467);
(statearr_22493_22528[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22488 === (21)))
{var state_22487__$1 = state_22487;var statearr_22494_22529 = state_22487__$1;(statearr_22494_22529[(2)] = null);
(statearr_22494_22529[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22488 === (13)))
{var inst_22450 = (state_22487[(9)]);var state_22487__$1 = state_22487;var statearr_22495_22530 = state_22487__$1;(statearr_22495_22530[(2)] = inst_22450);
(statearr_22495_22530[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22488 === (22)))
{var inst_22476 = (state_22487[(2)]);var state_22487__$1 = state_22487;var statearr_22496_22531 = state_22487__$1;(statearr_22496_22531[(2)] = inst_22476);
(statearr_22496_22531[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22488 === (6)))
{var inst_22483 = (state_22487[(2)]);var state_22487__$1 = state_22487;var statearr_22497_22532 = state_22487__$1;(statearr_22497_22532[(2)] = inst_22483);
(statearr_22497_22532[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22488 === (17)))
{var state_22487__$1 = state_22487;var statearr_22498_22533 = state_22487__$1;(statearr_22498_22533[(2)] = null);
(statearr_22498_22533[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22488 === (3)))
{var inst_22485 = (state_22487[(2)]);var state_22487__$1 = state_22487;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22487__$1,inst_22485);
} else
{if((state_val_22488 === (12)))
{var inst_22469 = (state_22487[(2)]);var state_22487__$1 = state_22487;var statearr_22499_22534 = state_22487__$1;(statearr_22499_22534[(2)] = inst_22469);
(statearr_22499_22534[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22488 === (2)))
{var state_22487__$1 = state_22487;if(true)
{var statearr_22500_22535 = state_22487__$1;(statearr_22500_22535[(1)] = (4));
} else
{var statearr_22501_22536 = state_22487__$1;(statearr_22501_22536[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22488 === (23)))
{var inst_22473 = (state_22487[(2)]);var state_22487__$1 = state_22487;var statearr_22502_22537 = state_22487__$1;(statearr_22502_22537[(2)] = inst_22473);
(statearr_22502_22537[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22488 === (19)))
{var inst_22460 = (state_22487[(2)]);var state_22487__$1 = state_22487;var statearr_22503_22538 = state_22487__$1;(statearr_22503_22538[(2)] = inst_22460);
(statearr_22503_22538[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22488 === (11)))
{var inst_22449 = (state_22487[(10)]);var inst_22452 = cljs.core.empty_QMARK_.call(null,inst_22449);var state_22487__$1 = state_22487;if(inst_22452)
{var statearr_22504_22539 = state_22487__$1;(statearr_22504_22539[(1)] = (13));
} else
{var statearr_22505_22540 = state_22487__$1;(statearr_22505_22540[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22488 === (9)))
{var inst_22445 = (state_22487[(7)]);var state_22487__$1 = state_22487;if(cljs.core.truth_(inst_22445))
{var statearr_22506_22541 = state_22487__$1;(statearr_22506_22541[(1)] = (20));
} else
{var statearr_22507_22542 = state_22487__$1;(statearr_22507_22542[(1)] = (21));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22488 === (5)))
{var state_22487__$1 = state_22487;var statearr_22508_22543 = state_22487__$1;(statearr_22508_22543[(2)] = null);
(statearr_22508_22543[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22488 === (14)))
{var inst_22449 = (state_22487[(10)]);var inst_22455 = cljs.core.rest.call(null,inst_22449);var inst_22456 = cljs.core.first.call(null,inst_22449);var state_22487__$1 = (function (){var statearr_22509 = state_22487;(statearr_22509[(11)] = inst_22455);
return statearr_22509;
})();if(cljs.core.truth_(inst_22456))
{var statearr_22510_22544 = state_22487__$1;(statearr_22510_22544[(1)] = (16));
} else
{var statearr_22511_22545 = state_22487__$1;(statearr_22511_22545[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22488 === (16)))
{var inst_22449 = (state_22487[(10)]);var inst_22458 = cljs.core.first.call(null,inst_22449);var state_22487__$1 = state_22487;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22487__$1,(19),inst_22458);
} else
{if((state_val_22488 === (10)))
{var inst_22446 = (state_22487[(8)]);var inst_22478 = (state_22487[(2)]);var inst_22479 = cljs.core.apply.call(null,handler,inst_22478,inst_22446);var state_22487__$1 = (function (){var statearr_22512 = state_22487;(statearr_22512[(12)] = inst_22479);
return statearr_22512;
})();var statearr_22513_22546 = state_22487__$1;(statearr_22513_22546[(2)] = null);
(statearr_22513_22546[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22488 === (18)))
{var inst_22450 = (state_22487[(9)]);var inst_22455 = (state_22487[(11)]);var inst_22463 = (state_22487[(2)]);var inst_22464 = cljs.core.conj.call(null,inst_22450,inst_22463);var inst_22449 = inst_22455;var inst_22450__$1 = inst_22464;var state_22487__$1 = (function (){var statearr_22514 = state_22487;(statearr_22514[(9)] = inst_22450__$1);
(statearr_22514[(10)] = inst_22449);
return statearr_22514;
})();var statearr_22515_22547 = state_22487__$1;(statearr_22515_22547[(2)] = null);
(statearr_22515_22547[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22488 === (8)))
{var inst_22445 = (state_22487[(7)]);var inst_22449 = inst_22445;var inst_22450 = cljs.core.PersistentVector.EMPTY;var state_22487__$1 = (function (){var statearr_22516 = state_22487;(statearr_22516[(9)] = inst_22450);
(statearr_22516[(10)] = inst_22449);
return statearr_22516;
})();var statearr_22517_22548 = state_22487__$1;(statearr_22517_22548[(2)] = null);
(statearr_22517_22548[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__5691__auto__))
;return ((function (switch__5676__auto__,c__5691__auto__){
return (function() {
var state_machine__5677__auto__ = null;
var state_machine__5677__auto____0 = (function (){var statearr_22521 = [null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_22521[(0)] = state_machine__5677__auto__);
(statearr_22521[(1)] = (1));
return statearr_22521;
});
var state_machine__5677__auto____1 = (function (state_22487){while(true){
var ret_value__5678__auto__ = (function (){try{while(true){
var result__5679__auto__ = switch__5676__auto__.call(null,state_22487);if(cljs.core.keyword_identical_QMARK_.call(null,result__5679__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5679__auto__;
}
break;
}
}catch (e22522){if((e22522 instanceof Object))
{var ex__5680__auto__ = e22522;var statearr_22523_22549 = state_22487;(statearr_22523_22549[(5)] = ex__5680__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22487);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e22522;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5678__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__22550 = state_22487;
state_22487 = G__22550;
continue;
}
} else
{return ret_value__5678__auto__;
}
break;
}
});
state_machine__5677__auto__ = function(state_22487){
switch(arguments.length){
case 0:
return state_machine__5677__auto____0.call(this);
case 1:
return state_machine__5677__auto____1.call(this,state_22487);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5677__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5677__auto____0;
state_machine__5677__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5677__auto____1;
return state_machine__5677__auto__;
})()
;})(switch__5676__auto__,c__5691__auto__))
})();var state__5693__auto__ = (function (){var statearr_22524 = f__5692__auto__.call(null);(statearr_22524[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5691__auto__);
return statearr_22524;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5693__auto__);
});})(c__5691__auto__))
);
return c__5691__auto__;
});
/**
* order responses from an async API according to the order of requests
* - request-handler: fn to send an async API request, returning a channel of a single result value,
* and optional additional args for the result-handler. return nil to
* abandon request
* - result-handler: function of API result and optional additional args from request-handler result
*/
clustermap.api.ordered_api = (function ordered_api(request_handler,result_handler){var ocomm = cljs.core.async.chan.call(null,cljs.core.async.sliding_buffer.call(null,(1)));var _ = clustermap.api.ordered_api_results.call(null,ocomm,result_handler);return ((function (ocomm,_){
return (function() { 
var G__22553__delegate = function (req_args){var temp__4124__auto__ = cljs.core.apply.call(null,request_handler,req_args);if(cljs.core.truth_(temp__4124__auto__))
{var r = temp__4124__auto__;var rseq = ((cljs.core.sequential_QMARK_.call(null,r))?r:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [r], null));var vec__22552 = rseq;var rcomm = cljs.core.nth.call(null,vec__22552,(0),null);var result_handler_args = cljs.core.nthnext.call(null,vec__22552,(1));return cljs.core.async.put_BANG_.call(null,ocomm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rcomm,result_handler_args], null));
} else
{return null;
}
};
var G__22553 = function (var_args){
var req_args = null;if (arguments.length > 0) {
  req_args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__22553__delegate.call(this,req_args);};
G__22553.cljs$lang$maxFixedArity = 0;
G__22553.cljs$lang$applyTo = (function (arglist__22554){
var req_args = cljs.core.seq(arglist__22554);
return G__22553__delegate(req_args);
});
G__22553.cljs$core$IFn$_invoke$arity$variadic = G__22553__delegate;
return G__22553;
})()
;
;})(ocomm,_))
});
/**
* @param {...*} var_args
*/
clustermap.api.log_api = (function() { 
var log_api__delegate = function (f,args){var ch = cljs.core.apply.call(null,f,args);var c__5691__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5691__auto__,ch){
return (function (){var f__5692__auto__ = (function (){var switch__5676__auto__ = ((function (c__5691__auto__,ch){
return (function (state_22572){var state_val_22573 = (state_22572[(1)]);if((state_val_22573 === (2)))
{var inst_22569 = (state_22572[(2)]);var inst_22570 = console.log(inst_22569);var state_22572__$1 = state_22572;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22572__$1,inst_22570);
} else
{if((state_val_22573 === (1)))
{var state_22572__$1 = state_22572;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22572__$1,(2),ch);
} else
{return null;
}
}
});})(c__5691__auto__,ch))
;return ((function (switch__5676__auto__,c__5691__auto__,ch){
return (function() {
var state_machine__5677__auto__ = null;
var state_machine__5677__auto____0 = (function (){var statearr_22577 = [null,null,null,null,null,null,null];(statearr_22577[(0)] = state_machine__5677__auto__);
(statearr_22577[(1)] = (1));
return statearr_22577;
});
var state_machine__5677__auto____1 = (function (state_22572){while(true){
var ret_value__5678__auto__ = (function (){try{while(true){
var result__5679__auto__ = switch__5676__auto__.call(null,state_22572);if(cljs.core.keyword_identical_QMARK_.call(null,result__5679__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5679__auto__;
}
break;
}
}catch (e22578){if((e22578 instanceof Object))
{var ex__5680__auto__ = e22578;var statearr_22579_22581 = state_22572;(statearr_22579_22581[(5)] = ex__5680__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22572);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e22578;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5678__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__22582 = state_22572;
state_22572 = G__22582;
continue;
}
} else
{return ret_value__5678__auto__;
}
break;
}
});
state_machine__5677__auto__ = function(state_22572){
switch(arguments.length){
case 0:
return state_machine__5677__auto____0.call(this);
case 1:
return state_machine__5677__auto____1.call(this,state_22572);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5677__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5677__auto____0;
state_machine__5677__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5677__auto____1;
return state_machine__5677__auto__;
})()
;})(switch__5676__auto__,c__5691__auto__,ch))
})();var state__5693__auto__ = (function (){var statearr_22580 = f__5692__auto__.call(null);(statearr_22580[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5691__auto__);
return statearr_22580;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5693__auto__);
});})(c__5691__auto__,ch))
);
return c__5691__auto__;
};
var log_api = function (f,var_args){
var args = null;if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return log_api__delegate.call(this,f,args);};
log_api.cljs$lang$maxFixedArity = 1;
log_api.cljs$lang$applyTo = (function (arglist__22583){
var f = cljs.core.first(arglist__22583);
var args = cljs.core.rest(arglist__22583);
return log_api__delegate(f,args);
});
log_api.cljs$core$IFn$_invoke$arity$variadic = log_api__delegate;
return log_api;
})()
;
clustermap.api.map_json_params = (function map_json_params(m){return clojure.string.join.call(null,"&",cljs.core.map.call(null,(function (p__22586){var vec__22587 = p__22586;var k = cljs.core.nth.call(null,vec__22587,(0),null);var v = cljs.core.nth.call(null,vec__22587,(1),null);return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,k))+"="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(JSON.stringify(cljs.core.clj__GT_js.call(null,v))));
}),m));
});
/**
* put the results of an api call into an atom... makes ad-hoc api calls easy
*/
clustermap.api.fetch = (function fetch(comm){var r = cljs.core.atom.call(null,null);var c__5691__auto___22614 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5691__auto___22614,r){
return (function (){var f__5692__auto__ = (function (){var switch__5676__auto__ = ((function (c__5691__auto___22614,r){
return (function (state_22605){var state_val_22606 = (state_22605[(1)]);if((state_val_22606 === (2)))
{var inst_22602 = (state_22605[(2)]);var inst_22603 = cljs.core.reset_BANG_.call(null,r,inst_22602);var state_22605__$1 = state_22605;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22605__$1,inst_22603);
} else
{if((state_val_22606 === (1)))
{var state_22605__$1 = state_22605;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22605__$1,(2),comm);
} else
{return null;
}
}
});})(c__5691__auto___22614,r))
;return ((function (switch__5676__auto__,c__5691__auto___22614,r){
return (function() {
var state_machine__5677__auto__ = null;
var state_machine__5677__auto____0 = (function (){var statearr_22610 = [null,null,null,null,null,null,null];(statearr_22610[(0)] = state_machine__5677__auto__);
(statearr_22610[(1)] = (1));
return statearr_22610;
});
var state_machine__5677__auto____1 = (function (state_22605){while(true){
var ret_value__5678__auto__ = (function (){try{while(true){
var result__5679__auto__ = switch__5676__auto__.call(null,state_22605);if(cljs.core.keyword_identical_QMARK_.call(null,result__5679__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5679__auto__;
}
break;
}
}catch (e22611){if((e22611 instanceof Object))
{var ex__5680__auto__ = e22611;var statearr_22612_22615 = state_22605;(statearr_22612_22615[(5)] = ex__5680__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22605);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e22611;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5678__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__22616 = state_22605;
state_22605 = G__22616;
continue;
}
} else
{return ret_value__5678__auto__;
}
break;
}
});
state_machine__5677__auto__ = function(state_22605){
switch(arguments.length){
case 0:
return state_machine__5677__auto____0.call(this);
case 1:
return state_machine__5677__auto____1.call(this,state_22605);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5677__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5677__auto____0;
state_machine__5677__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5677__auto____1;
return state_machine__5677__auto__;
})()
;})(switch__5676__auto__,c__5691__auto___22614,r))
})();var state__5693__auto__ = (function (){var statearr_22613 = f__5692__auto__.call(null);(statearr_22613[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5691__auto___22614);
return statearr_22613;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5693__auto__);
});})(c__5691__auto___22614,r))
);
return r;
});
clustermap.api.api_prefix = config.api.prefix;
/**
* @param {...*} var_args
*/
clustermap.api.boundarylines = (function() { 
var boundarylines__delegate = function (id,tolerance,opts){return cljs.core.apply.call(null,clustermap.api.GET,("/api/boundarylines/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(tolerance)),opts);
};
var boundarylines = function (id,tolerance,var_args){
var opts = null;if (arguments.length > 2) {
  opts = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return boundarylines__delegate.call(this,id,tolerance,opts);};
boundarylines.cljs$lang$maxFixedArity = 2;
boundarylines.cljs$lang$applyTo = (function (arglist__22617){
var id = cljs.core.first(arglist__22617);
arglist__22617 = cljs.core.next(arglist__22617);
var tolerance = cljs.core.first(arglist__22617);
var opts = cljs.core.rest(arglist__22617);
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
var boundaryline_collection_index__delegate = function (id,opts){return cljs.core.apply.call(null,clustermap.api.GET,("/api/boundaryline-collection-index/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,id))),opts);
};
var boundaryline_collection_index = function (id,var_args){
var opts = null;if (arguments.length > 1) {
  opts = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return boundaryline_collection_index__delegate.call(this,id,opts);};
boundaryline_collection_index.cljs$lang$maxFixedArity = 1;
boundaryline_collection_index.cljs$lang$applyTo = (function (arglist__22618){
var id = cljs.core.first(arglist__22618);
var opts = cljs.core.rest(arglist__22618);
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
var boundaryline_set__delegate = function (ids,tolerance,opts){return cljs.core.apply.call(null,clustermap.api.POST,"/api/boundaryline-set",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ids","ids",-998535796),ids,new cljs.core.Keyword(null,"tolerance","tolerance",406811818),tolerance], null),opts);
};
var boundaryline_set = function (ids,tolerance,var_args){
var opts = null;if (arguments.length > 2) {
  opts = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return boundaryline_set__delegate.call(this,ids,tolerance,opts);};
boundaryline_set.cljs$lang$maxFixedArity = 2;
boundaryline_set.cljs$lang$applyTo = (function (arglist__22619){
var ids = cljs.core.first(arglist__22619);
arglist__22619 = cljs.core.next(arglist__22619);
var tolerance = cljs.core.first(arglist__22619);
var opts = cljs.core.rest(arglist__22619);
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
var boundaryline_collection_view__delegate = function (collection_id,tolerance,bounds,p__22620){var map__22622 = p__22620;var map__22622__$1 = ((cljs.core.seq_QMARK_.call(null,map__22622))?cljs.core.apply.call(null,cljs.core.hash_map,map__22622):map__22622);var opts = map__22622__$1;var boundaryline_ids = cljs.core.get.call(null,map__22622__$1,new cljs.core.Keyword(null,"boundaryline-ids","boundaryline-ids",1352066869));var opts__$1 = cljs.core.flatten.call(null,cljs.core.seq.call(null,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"boundaryline-ids","boundaryline-ids",1352066869))));return cljs.core.apply.call(null,clustermap.api.POST,("/api/boundaryline-collection-view/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,collection_id))+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(tolerance)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"bounds","bounds",1691609455),bounds,new cljs.core.Keyword(null,"boundaryline-ids","boundaryline-ids",1352066869),boundaryline_ids], null),opts__$1);
};
var boundaryline_collection_view = function (collection_id,tolerance,bounds,var_args){
var p__22620 = null;if (arguments.length > 3) {
  p__22620 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return boundaryline_collection_view__delegate.call(this,collection_id,tolerance,bounds,p__22620);};
boundaryline_collection_view.cljs$lang$maxFixedArity = 3;
boundaryline_collection_view.cljs$lang$applyTo = (function (arglist__22623){
var collection_id = cljs.core.first(arglist__22623);
arglist__22623 = cljs.core.next(arglist__22623);
var tolerance = cljs.core.first(arglist__22623);
arglist__22623 = cljs.core.next(arglist__22623);
var bounds = cljs.core.first(arglist__22623);
var p__22620 = cljs.core.rest(arglist__22623);
return boundaryline_collection_view__delegate(collection_id,tolerance,bounds,p__22620);
});
boundaryline_collection_view.cljs$core$IFn$_invoke$arity$variadic = boundaryline_collection_view__delegate;
return boundaryline_collection_view;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.boundaryline_aggregation = (function() { 
var boundaryline_aggregation__delegate = function (index,type,blcoll,attr,filter,bounds,p__22624){var vec__22626 = p__22624;var type_ids = cljs.core.nth.call(null,vec__22626,(0),null);return clustermap.api.POST.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/boundaryline-agg/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(index)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(blcoll)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(attr)+"?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids))),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"filter","filter",-948537934),filter,new cljs.core.Keyword(null,"bounds","bounds",1691609455),bounds], null));
};
var boundaryline_aggregation = function (index,type,blcoll,attr,filter,bounds,var_args){
var p__22624 = null;if (arguments.length > 6) {
  p__22624 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 6),0);} 
return boundaryline_aggregation__delegate.call(this,index,type,blcoll,attr,filter,bounds,p__22624);};
boundaryline_aggregation.cljs$lang$maxFixedArity = 6;
boundaryline_aggregation.cljs$lang$applyTo = (function (arglist__22627){
var index = cljs.core.first(arglist__22627);
arglist__22627 = cljs.core.next(arglist__22627);
var type = cljs.core.first(arglist__22627);
arglist__22627 = cljs.core.next(arglist__22627);
var blcoll = cljs.core.first(arglist__22627);
arglist__22627 = cljs.core.next(arglist__22627);
var attr = cljs.core.first(arglist__22627);
arglist__22627 = cljs.core.next(arglist__22627);
var filter = cljs.core.first(arglist__22627);
arglist__22627 = cljs.core.next(arglist__22627);
var bounds = cljs.core.first(arglist__22627);
var p__22624 = cljs.core.rest(arglist__22627);
return boundaryline_aggregation__delegate(index,type,blcoll,attr,filter,bounds,p__22624);
});
boundaryline_aggregation.cljs$core$IFn$_invoke$arity$variadic = boundaryline_aggregation__delegate;
return boundaryline_aggregation;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.location_lists = (function() { 
var location_lists__delegate = function (index,type,location_attr,attrs,max_count,filter,bounds,p__22628){var vec__22630 = p__22628;var type_ids = cljs.core.nth.call(null,vec__22630,(0),null);return clustermap.api.POST.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/location-lists/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(index)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(location_attr)+"?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids))),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"max-count","max-count",1539185305),max_count,new cljs.core.Keyword(null,"attrs","attrs",-2090668713),attrs,new cljs.core.Keyword(null,"filter","filter",-948537934),filter,new cljs.core.Keyword(null,"bounds","bounds",1691609455),bounds], null));
};
var location_lists = function (index,type,location_attr,attrs,max_count,filter,bounds,var_args){
var p__22628 = null;if (arguments.length > 7) {
  p__22628 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 7),0);} 
return location_lists__delegate.call(this,index,type,location_attr,attrs,max_count,filter,bounds,p__22628);};
location_lists.cljs$lang$maxFixedArity = 7;
location_lists.cljs$lang$applyTo = (function (arglist__22631){
var index = cljs.core.first(arglist__22631);
arglist__22631 = cljs.core.next(arglist__22631);
var type = cljs.core.first(arglist__22631);
arglist__22631 = cljs.core.next(arglist__22631);
var location_attr = cljs.core.first(arglist__22631);
arglist__22631 = cljs.core.next(arglist__22631);
var attrs = cljs.core.first(arglist__22631);
arglist__22631 = cljs.core.next(arglist__22631);
var max_count = cljs.core.first(arglist__22631);
arglist__22631 = cljs.core.next(arglist__22631);
var filter = cljs.core.first(arglist__22631);
arglist__22631 = cljs.core.next(arglist__22631);
var bounds = cljs.core.first(arglist__22631);
var p__22628 = cljs.core.rest(arglist__22631);
return location_lists__delegate(index,type,location_attr,attrs,max_count,filter,bounds,p__22628);
});
location_lists.cljs$core$IFn$_invoke$arity$variadic = location_lists__delegate;
return location_lists;
})()
;
clustermap.api.search = (function search(q){if((cljs.core.count.call(null,clojure.string.trim.call(null,q)) > (0)))
{return clustermap.api.GET.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/search?q="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(q)));
} else
{return cljs.core.async.to_chan.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [{}], null));
}
});
clustermap.api.constituency = (function constituency(id){return clustermap.api.GET.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/constituencies/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)));
});
clustermap.api.portfolio_company = (function portfolio_company(id){return clustermap.api.GET.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/portfolio-companies/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)));
});
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_sites = (function() { 
var portfolio_company_sites__delegate = function (p__22632){var vec__22634 = p__22632;var type_ids = cljs.core.nth.call(null,vec__22634,(0),null);var type_ids__$1 = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"size","size",1098693007),(100),new cljs.core.Keyword(null,"sort","sort",953465918),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"!latest_turnover","!latest_turnover",-1853433972),"desc"], null)], null)], null),type_ids);return clustermap.api.GET.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/portfolio-company-sites?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids__$1))));
};
var portfolio_company_sites = function (var_args){
var p__22632 = null;if (arguments.length > 0) {
  p__22632 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_sites__delegate.call(this,p__22632);};
portfolio_company_sites.cljs$lang$maxFixedArity = 0;
portfolio_company_sites.cljs$lang$applyTo = (function (arglist__22635){
var p__22632 = cljs.core.seq(arglist__22635);
return portfolio_company_sites__delegate(p__22632);
});
portfolio_company_sites.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_sites__delegate;
return portfolio_company_sites;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_sites_by_company = (function() { 
var portfolio_company_sites_by_company__delegate = function (p__22636){var vec__22638 = p__22636;var type_ids = cljs.core.nth.call(null,vec__22638,(0),null);var type_ids__$1 = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"size","size",1098693007),(100),new cljs.core.Keyword(null,"sort","sort",953465918),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"!latest_turnover","!latest_turnover",-1853433972),"desc"], null)], null)], null),type_ids);return clustermap.api.GET.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/portfolio-company-sites-by-company?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids__$1))));
};
var portfolio_company_sites_by_company = function (var_args){
var p__22636 = null;if (arguments.length > 0) {
  p__22636 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_sites_by_company__delegate.call(this,p__22636);};
portfolio_company_sites_by_company.cljs$lang$maxFixedArity = 0;
portfolio_company_sites_by_company.cljs$lang$applyTo = (function (arglist__22639){
var p__22636 = cljs.core.seq(arglist__22639);
return portfolio_company_sites_by_company__delegate(p__22636);
});
portfolio_company_sites_by_company.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_sites_by_company__delegate;
return portfolio_company_sites_by_company;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_locations = (function() { 
var portfolio_company_locations__delegate = function (p__22640){var vec__22642 = p__22640;var type_ids = cljs.core.nth.call(null,vec__22642,(0),null);return clustermap.api.GET.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/portfolio-company-locations?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids))));
};
var portfolio_company_locations = function (var_args){
var p__22640 = null;if (arguments.length > 0) {
  p__22640 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_locations__delegate.call(this,p__22640);};
portfolio_company_locations.cljs$lang$maxFixedArity = 0;
portfolio_company_locations.cljs$lang$applyTo = (function (arglist__22643){
var p__22640 = cljs.core.seq(arglist__22643);
return portfolio_company_locations__delegate(p__22640);
});
portfolio_company_locations.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_locations__delegate;
return portfolio_company_locations;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_site_stats = (function() { 
var portfolio_company_site_stats__delegate = function (p__22644){var vec__22646 = p__22644;var type_ids = cljs.core.nth.call(null,vec__22646,(0),null);return clustermap.api.GET.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/portfolio-company-site-stats?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids))));
};
var portfolio_company_site_stats = function (var_args){
var p__22644 = null;if (arguments.length > 0) {
  p__22644 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_site_stats__delegate.call(this,p__22644);};
portfolio_company_site_stats.cljs$lang$maxFixedArity = 0;
portfolio_company_site_stats.cljs$lang$applyTo = (function (arglist__22647){
var p__22644 = cljs.core.seq(arglist__22647);
return portfolio_company_site_stats__delegate(p__22644);
});
portfolio_company_site_stats.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_site_stats__delegate;
return portfolio_company_site_stats;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_site_account_timelines = (function() { 
var portfolio_company_site_account_timelines__delegate = function (p__22648){var vec__22650 = p__22648;var type_ids = cljs.core.nth.call(null,vec__22650,(0),null);return clustermap.api.GET.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/portfolio-company-site-account-timelines?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids))));
};
var portfolio_company_site_account_timelines = function (var_args){
var p__22648 = null;if (arguments.length > 0) {
  p__22648 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_site_account_timelines__delegate.call(this,p__22648);};
portfolio_company_site_account_timelines.cljs$lang$maxFixedArity = 0;
portfolio_company_site_account_timelines.cljs$lang$applyTo = (function (arglist__22651){
var p__22648 = cljs.core.seq(arglist__22651);
return portfolio_company_site_account_timelines__delegate(p__22648);
});
portfolio_company_site_account_timelines.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_site_account_timelines__delegate;
return portfolio_company_site_account_timelines;
})()
;
clustermap.api.investor_company = (function investor_company(id){return clustermap.api.GET.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/investor-companies/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)));
});
/**
* @param {...*} var_args
*/
clustermap.api.investment_account_timelines = (function() { 
var investment_account_timelines__delegate = function (p__22652){var vec__22654 = p__22652;var type_ids = cljs.core.nth.call(null,vec__22654,(0),null);return clustermap.api.GET.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/investment-account-timelines?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids))));
};
var investment_account_timelines = function (var_args){
var p__22652 = null;if (arguments.length > 0) {
  p__22652 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return investment_account_timelines__delegate.call(this,p__22652);};
investment_account_timelines.cljs$lang$maxFixedArity = 0;
investment_account_timelines.cljs$lang$applyTo = (function (arglist__22655){
var p__22652 = cljs.core.seq(arglist__22655);
return investment_account_timelines__delegate(p__22652);
});
investment_account_timelines.cljs$core$IFn$_invoke$arity$variadic = investment_account_timelines__delegate;
return investment_account_timelines;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.investment_stats = (function() { 
var investment_stats__delegate = function (p__22656){var vec__22658 = p__22656;var type_ids = cljs.core.nth.call(null,vec__22658,(0),null);return clustermap.api.GET.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/investment-stats?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids))));
};
var investment_stats = function (var_args){
var p__22656 = null;if (arguments.length > 0) {
  p__22656 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return investment_stats__delegate.call(this,p__22656);};
investment_stats.cljs$lang$maxFixedArity = 0;
investment_stats.cljs$lang$applyTo = (function (arglist__22659){
var p__22656 = cljs.core.seq(arglist__22659);
return investment_stats__delegate(p__22656);
});
investment_stats.cljs$core$IFn$_invoke$arity$variadic = investment_stats__delegate;
return investment_stats;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.investment_aggs = (function() { 
var investment_aggs__delegate = function (p__22660){var vec__22662 = p__22660;var type_ids = cljs.core.nth.call(null,vec__22662,(0),null);var type_ids__$1 = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"size","size",1098693007),(50),new cljs.core.Keyword(null,"order","order",-1254677256),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"latest_turnover","latest_turnover",-1335568590),"desc"], null)], null),type_ids);return clustermap.api.GET.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/investment-aggs?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids__$1))));
};
var investment_aggs = function (var_args){
var p__22660 = null;if (arguments.length > 0) {
  p__22660 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return investment_aggs__delegate.call(this,p__22660);};
investment_aggs.cljs$lang$maxFixedArity = 0;
investment_aggs.cljs$lang$applyTo = (function (arglist__22663){
var p__22660 = cljs.core.seq(arglist__22663);
return investment_aggs__delegate(p__22660);
});
investment_aggs.cljs$core$IFn$_invoke$arity$variadic = investment_aggs__delegate;
return investment_aggs;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.investments = (function() { 
var investments__delegate = function (p__22664){var vec__22666 = p__22664;var type_ids = cljs.core.nth.call(null,vec__22666,(0),null);var type_ids__$1 = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"size","size",1098693007),(50),new cljs.core.Keyword(null,"order","order",-1254677256),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"?boundaryline_compact_name_na","?boundaryline_compact_name_na",35068819),"asc"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"?investor_company_name_na","?investor_company_name_na",2080546953),"asc"], null)], null)], null),type_ids);return clustermap.api.GET.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/investments?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids__$1))));
};
var investments = function (var_args){
var p__22664 = null;if (arguments.length > 0) {
  p__22664 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return investments__delegate.call(this,p__22664);};
investments.cljs$lang$maxFixedArity = 0;
investments.cljs$lang$applyTo = (function (arglist__22667){
var p__22664 = cljs.core.seq(arglist__22667);
return investments__delegate(p__22664);
});
investments.cljs$core$IFn$_invoke$arity$variadic = investments__delegate;
return investments;
})()
;
