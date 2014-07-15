// Compiled by ClojureScript 0.0-2261
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
var GET__delegate = function (url,p__21357){var map__21359 = p__21357;var map__21359__$1 = ((cljs.core.seq_QMARK_.call(null,map__21359))?cljs.core.apply.call(null,cljs.core.hash_map,map__21359):map__21359);var raw = cljs.core.get.call(null,map__21359__$1,new cljs.core.Keyword(null,"raw","raw",1604651272));var comm = cljs.core.async.chan.call(null,(1));goog.net.XhrIo.send(url,((function (comm,map__21359,map__21359__$1,raw){
return (function (event){cljs.core.async.put_BANG_.call(null,comm,((function (comm,map__21359,map__21359__$1,raw){
return (function (d){if(cljs.core.truth_(raw))
{return d;
} else
{return cljs.core.js__GT_clj.call(null,d,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true);
}
});})(comm,map__21359,map__21359__$1,raw))
.call(null,(JSON.parse(event.target.getResponseText())["data"])));
return cljs.core.async.close_BANG_.call(null,comm);
});})(comm,map__21359,map__21359__$1,raw))
);
return comm;
};
var GET = function (url,var_args){
var p__21357 = null;if (arguments.length > 1) {
  p__21357 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return GET__delegate.call(this,url,p__21357);};
GET.cljs$lang$maxFixedArity = 1;
GET.cljs$lang$applyTo = (function (arglist__21360){
var url = cljs.core.first(arglist__21360);
var p__21357 = cljs.core.rest(arglist__21360);
return GET__delegate(url,p__21357);
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
clustermap.api.ordered_api_results = (function ordered_api_results(ocomm,handler){var c__5693__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5693__auto__){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto__){
return (function (state_21493){var state_val_21494 = (state_21493[(1)]);if((state_val_21494 === (7)))
{var inst_21451 = (state_21493[(7)]);var inst_21450 = (state_21493[(2)]);var inst_21451__$1 = cljs.core.nth.call(null,inst_21450,(0),null);var inst_21452 = cljs.core.nth.call(null,inst_21450,(1),null);var inst_21453 = cljs.core.sequential_QMARK_.call(null,inst_21451__$1);var state_21493__$1 = (function (){var statearr_21495 = state_21493;(statearr_21495[(7)] = inst_21451__$1);
(statearr_21495[(8)] = inst_21452);
return statearr_21495;
})();if(inst_21453)
{var statearr_21496_21531 = state_21493__$1;(statearr_21496_21531[(1)] = (8));
} else
{var statearr_21497_21532 = state_21493__$1;(statearr_21497_21532[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21494 === (20)))
{var inst_21451 = (state_21493[(7)]);var state_21493__$1 = state_21493;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21493__$1,(23),inst_21451);
} else
{if((state_val_21494 === (1)))
{var state_21493__$1 = state_21493;var statearr_21498_21533 = state_21493__$1;(statearr_21498_21533[(2)] = null);
(statearr_21498_21533[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21494 === (4)))
{var state_21493__$1 = state_21493;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21493__$1,(7),ocomm);
} else
{if((state_val_21494 === (15)))
{var inst_21473 = (state_21493[(2)]);var state_21493__$1 = state_21493;var statearr_21499_21534 = state_21493__$1;(statearr_21499_21534[(2)] = inst_21473);
(statearr_21499_21534[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21494 === (21)))
{var state_21493__$1 = state_21493;var statearr_21500_21535 = state_21493__$1;(statearr_21500_21535[(2)] = null);
(statearr_21500_21535[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21494 === (13)))
{var inst_21456 = (state_21493[(9)]);var state_21493__$1 = state_21493;var statearr_21501_21536 = state_21493__$1;(statearr_21501_21536[(2)] = inst_21456);
(statearr_21501_21536[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21494 === (22)))
{var inst_21482 = (state_21493[(2)]);var state_21493__$1 = state_21493;var statearr_21502_21537 = state_21493__$1;(statearr_21502_21537[(2)] = inst_21482);
(statearr_21502_21537[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21494 === (6)))
{var inst_21489 = (state_21493[(2)]);var state_21493__$1 = state_21493;var statearr_21503_21538 = state_21493__$1;(statearr_21503_21538[(2)] = inst_21489);
(statearr_21503_21538[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21494 === (17)))
{var state_21493__$1 = state_21493;var statearr_21504_21539 = state_21493__$1;(statearr_21504_21539[(2)] = null);
(statearr_21504_21539[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21494 === (3)))
{var inst_21491 = (state_21493[(2)]);var state_21493__$1 = state_21493;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21493__$1,inst_21491);
} else
{if((state_val_21494 === (12)))
{var inst_21475 = (state_21493[(2)]);var state_21493__$1 = state_21493;var statearr_21505_21540 = state_21493__$1;(statearr_21505_21540[(2)] = inst_21475);
(statearr_21505_21540[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21494 === (2)))
{var state_21493__$1 = state_21493;if(true)
{var statearr_21506_21541 = state_21493__$1;(statearr_21506_21541[(1)] = (4));
} else
{var statearr_21507_21542 = state_21493__$1;(statearr_21507_21542[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21494 === (23)))
{var inst_21479 = (state_21493[(2)]);var state_21493__$1 = state_21493;var statearr_21508_21543 = state_21493__$1;(statearr_21508_21543[(2)] = inst_21479);
(statearr_21508_21543[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21494 === (19)))
{var inst_21466 = (state_21493[(2)]);var state_21493__$1 = state_21493;var statearr_21509_21544 = state_21493__$1;(statearr_21509_21544[(2)] = inst_21466);
(statearr_21509_21544[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21494 === (11)))
{var inst_21455 = (state_21493[(10)]);var inst_21458 = cljs.core.empty_QMARK_.call(null,inst_21455);var state_21493__$1 = state_21493;if(inst_21458)
{var statearr_21510_21545 = state_21493__$1;(statearr_21510_21545[(1)] = (13));
} else
{var statearr_21511_21546 = state_21493__$1;(statearr_21511_21546[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21494 === (9)))
{var inst_21451 = (state_21493[(7)]);var state_21493__$1 = state_21493;if(cljs.core.truth_(inst_21451))
{var statearr_21512_21547 = state_21493__$1;(statearr_21512_21547[(1)] = (20));
} else
{var statearr_21513_21548 = state_21493__$1;(statearr_21513_21548[(1)] = (21));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21494 === (5)))
{var state_21493__$1 = state_21493;var statearr_21514_21549 = state_21493__$1;(statearr_21514_21549[(2)] = null);
(statearr_21514_21549[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21494 === (14)))
{var inst_21455 = (state_21493[(10)]);var inst_21461 = cljs.core.rest.call(null,inst_21455);var inst_21462 = cljs.core.first.call(null,inst_21455);var state_21493__$1 = (function (){var statearr_21515 = state_21493;(statearr_21515[(11)] = inst_21461);
return statearr_21515;
})();if(cljs.core.truth_(inst_21462))
{var statearr_21516_21550 = state_21493__$1;(statearr_21516_21550[(1)] = (16));
} else
{var statearr_21517_21551 = state_21493__$1;(statearr_21517_21551[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21494 === (16)))
{var inst_21455 = (state_21493[(10)]);var inst_21464 = cljs.core.first.call(null,inst_21455);var state_21493__$1 = state_21493;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21493__$1,(19),inst_21464);
} else
{if((state_val_21494 === (10)))
{var inst_21452 = (state_21493[(8)]);var inst_21484 = (state_21493[(2)]);var inst_21485 = cljs.core.apply.call(null,handler,inst_21484,inst_21452);var state_21493__$1 = (function (){var statearr_21518 = state_21493;(statearr_21518[(12)] = inst_21485);
return statearr_21518;
})();var statearr_21519_21552 = state_21493__$1;(statearr_21519_21552[(2)] = null);
(statearr_21519_21552[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21494 === (18)))
{var inst_21456 = (state_21493[(9)]);var inst_21461 = (state_21493[(11)]);var inst_21469 = (state_21493[(2)]);var inst_21470 = cljs.core.conj.call(null,inst_21456,inst_21469);var inst_21455 = inst_21461;var inst_21456__$1 = inst_21470;var state_21493__$1 = (function (){var statearr_21520 = state_21493;(statearr_21520[(9)] = inst_21456__$1);
(statearr_21520[(10)] = inst_21455);
return statearr_21520;
})();var statearr_21521_21553 = state_21493__$1;(statearr_21521_21553[(2)] = null);
(statearr_21521_21553[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21494 === (8)))
{var inst_21451 = (state_21493[(7)]);var inst_21455 = inst_21451;var inst_21456 = cljs.core.PersistentVector.EMPTY;var state_21493__$1 = (function (){var statearr_21522 = state_21493;(statearr_21522[(9)] = inst_21456);
(statearr_21522[(10)] = inst_21455);
return statearr_21522;
})();var statearr_21523_21554 = state_21493__$1;(statearr_21523_21554[(2)] = null);
(statearr_21523_21554[(1)] = (11));
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
});})(c__5693__auto__))
;return ((function (switch__5678__auto__,c__5693__auto__){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_21527 = [null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_21527[(0)] = state_machine__5679__auto__);
(statearr_21527[(1)] = (1));
return statearr_21527;
});
var state_machine__5679__auto____1 = (function (state_21493){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_21493);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e21528){if((e21528 instanceof Object))
{var ex__5682__auto__ = e21528;var statearr_21529_21555 = state_21493;(statearr_21529_21555[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21493);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e21528;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__21556 = state_21493;
state_21493 = G__21556;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_21493){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_21493);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto__))
})();var state__5695__auto__ = (function (){var statearr_21530 = f__5694__auto__.call(null);(statearr_21530[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto__);
return statearr_21530;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5695__auto__);
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
clustermap.api.ordered_api = (function ordered_api(request_handler,result_handler){var ocomm = cljs.core.async.chan.call(null,cljs.core.async.sliding_buffer.call(null,(1)));var _ = clustermap.api.ordered_api_results.call(null,ocomm,result_handler);return ((function (ocomm,_){
return (function() { 
var G__21559__delegate = function (req_args){var temp__4124__auto__ = cljs.core.apply.call(null,request_handler,req_args);if(cljs.core.truth_(temp__4124__auto__))
{var r = temp__4124__auto__;var rseq = ((cljs.core.sequential_QMARK_.call(null,r))?r:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [r], null));var vec__21558 = rseq;var rcomm = cljs.core.nth.call(null,vec__21558,(0),null);var result_handler_args = cljs.core.nthnext.call(null,vec__21558,(1));return cljs.core.async.put_BANG_.call(null,ocomm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rcomm,result_handler_args], null));
} else
{return null;
}
};
var G__21559 = function (var_args){
var req_args = null;if (arguments.length > 0) {
  req_args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__21559__delegate.call(this,req_args);};
G__21559.cljs$lang$maxFixedArity = 0;
G__21559.cljs$lang$applyTo = (function (arglist__21560){
var req_args = cljs.core.seq(arglist__21560);
return G__21559__delegate(req_args);
});
G__21559.cljs$core$IFn$_invoke$arity$variadic = G__21559__delegate;
return G__21559;
})()
;
;})(ocomm,_))
});
/**
* @param {...*} var_args
*/
clustermap.api.log_api = (function() { 
var log_api__delegate = function (f,args){var ch = cljs.core.apply.call(null,f,args);var c__5693__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5693__auto__,ch){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto__,ch){
return (function (state_21578){var state_val_21579 = (state_21578[(1)]);if((state_val_21579 === (2)))
{var inst_21575 = (state_21578[(2)]);var inst_21576 = console.log(inst_21575);var state_21578__$1 = state_21578;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21578__$1,inst_21576);
} else
{if((state_val_21579 === (1)))
{var state_21578__$1 = state_21578;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21578__$1,(2),ch);
} else
{return null;
}
}
});})(c__5693__auto__,ch))
;return ((function (switch__5678__auto__,c__5693__auto__,ch){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_21583 = [null,null,null,null,null,null,null];(statearr_21583[(0)] = state_machine__5679__auto__);
(statearr_21583[(1)] = (1));
return statearr_21583;
});
var state_machine__5679__auto____1 = (function (state_21578){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_21578);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e21584){if((e21584 instanceof Object))
{var ex__5682__auto__ = e21584;var statearr_21585_21587 = state_21578;(statearr_21585_21587[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21578);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e21584;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__21588 = state_21578;
state_21578 = G__21588;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_21578){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_21578);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto__,ch))
})();var state__5695__auto__ = (function (){var statearr_21586 = f__5694__auto__.call(null);(statearr_21586[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto__);
return statearr_21586;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5695__auto__);
});})(c__5693__auto__,ch))
);
return c__5693__auto__;
};
var log_api = function (f,var_args){
var args = null;if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return log_api__delegate.call(this,f,args);};
log_api.cljs$lang$maxFixedArity = 1;
log_api.cljs$lang$applyTo = (function (arglist__21589){
var f = cljs.core.first(arglist__21589);
var args = cljs.core.rest(arglist__21589);
return log_api__delegate(f,args);
});
log_api.cljs$core$IFn$_invoke$arity$variadic = log_api__delegate;
return log_api;
})()
;
clustermap.api.map_json_params = (function map_json_params(m){return clojure.string.join.call(null,"&",cljs.core.map.call(null,(function (p__21592){var vec__21593 = p__21592;var k = cljs.core.nth.call(null,vec__21593,(0),null);var v = cljs.core.nth.call(null,vec__21593,(1),null);return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,k))+"="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(JSON.stringify(cljs.core.clj__GT_js.call(null,v))));
}),m));
});
/**
* put the results of an api call into an atom... makes ad-hoc api calls easy
*/
clustermap.api.fetch = (function fetch(comm){var r = cljs.core.atom.call(null,null);var c__5693__auto___21620 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5693__auto___21620,r){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto___21620,r){
return (function (state_21611){var state_val_21612 = (state_21611[(1)]);if((state_val_21612 === (2)))
{var inst_21608 = (state_21611[(2)]);var inst_21609 = cljs.core.reset_BANG_.call(null,r,inst_21608);var state_21611__$1 = state_21611;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21611__$1,inst_21609);
} else
{if((state_val_21612 === (1)))
{var state_21611__$1 = state_21611;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21611__$1,(2),comm);
} else
{return null;
}
}
});})(c__5693__auto___21620,r))
;return ((function (switch__5678__auto__,c__5693__auto___21620,r){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_21616 = [null,null,null,null,null,null,null];(statearr_21616[(0)] = state_machine__5679__auto__);
(statearr_21616[(1)] = (1));
return statearr_21616;
});
var state_machine__5679__auto____1 = (function (state_21611){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_21611);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e21617){if((e21617 instanceof Object))
{var ex__5682__auto__ = e21617;var statearr_21618_21621 = state_21611;(statearr_21618_21621[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21611);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e21617;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__21622 = state_21611;
state_21611 = G__21622;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_21611){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_21611);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto___21620,r))
})();var state__5695__auto__ = (function (){var statearr_21619 = f__5694__auto__.call(null);(statearr_21619[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto___21620);
return statearr_21619;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5695__auto__);
});})(c__5693__auto___21620,r))
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
boundarylines.cljs$lang$applyTo = (function (arglist__21623){
var id = cljs.core.first(arglist__21623);
arglist__21623 = cljs.core.next(arglist__21623);
var tolerance = cljs.core.first(arglist__21623);
var opts = cljs.core.rest(arglist__21623);
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
boundaryline_collection_index.cljs$lang$applyTo = (function (arglist__21624){
var id = cljs.core.first(arglist__21624);
var opts = cljs.core.rest(arglist__21624);
return boundaryline_collection_index__delegate(id,opts);
});
boundaryline_collection_index.cljs$core$IFn$_invoke$arity$variadic = boundaryline_collection_index__delegate;
return boundaryline_collection_index;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.boundaryline_aggregation = (function() { 
var boundaryline_aggregation__delegate = function (index,type,blcoll,attr,p__21625){var vec__21627 = p__21625;var type_ids = cljs.core.nth.call(null,vec__21627,(0),null);return clustermap.api.GET.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/boundaryline-agg/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(index)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(blcoll)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(attr)+"?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids))));
};
var boundaryline_aggregation = function (index,type,blcoll,attr,var_args){
var p__21625 = null;if (arguments.length > 4) {
  p__21625 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);} 
return boundaryline_aggregation__delegate.call(this,index,type,blcoll,attr,p__21625);};
boundaryline_aggregation.cljs$lang$maxFixedArity = 4;
boundaryline_aggregation.cljs$lang$applyTo = (function (arglist__21628){
var index = cljs.core.first(arglist__21628);
arglist__21628 = cljs.core.next(arglist__21628);
var type = cljs.core.first(arglist__21628);
arglist__21628 = cljs.core.next(arglist__21628);
var blcoll = cljs.core.first(arglist__21628);
arglist__21628 = cljs.core.next(arglist__21628);
var attr = cljs.core.first(arglist__21628);
var p__21625 = cljs.core.rest(arglist__21628);
return boundaryline_aggregation__delegate(index,type,blcoll,attr,p__21625);
});
boundaryline_aggregation.cljs$core$IFn$_invoke$arity$variadic = boundaryline_aggregation__delegate;
return boundaryline_aggregation;
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
var portfolio_company_sites__delegate = function (p__21629){var vec__21631 = p__21629;var type_ids = cljs.core.nth.call(null,vec__21631,(0),null);var type_ids__$1 = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"size","size",1098693007),(100),new cljs.core.Keyword(null,"sort","sort",953465918),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"!latest_turnover","!latest_turnover",-1853433972),"desc"], null)], null)], null),type_ids);return clustermap.api.GET.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/portfolio-company-sites?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids__$1))));
};
var portfolio_company_sites = function (var_args){
var p__21629 = null;if (arguments.length > 0) {
  p__21629 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_sites__delegate.call(this,p__21629);};
portfolio_company_sites.cljs$lang$maxFixedArity = 0;
portfolio_company_sites.cljs$lang$applyTo = (function (arglist__21632){
var p__21629 = cljs.core.seq(arglist__21632);
return portfolio_company_sites__delegate(p__21629);
});
portfolio_company_sites.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_sites__delegate;
return portfolio_company_sites;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_sites_by_company = (function() { 
var portfolio_company_sites_by_company__delegate = function (p__21633){var vec__21635 = p__21633;var type_ids = cljs.core.nth.call(null,vec__21635,(0),null);var type_ids__$1 = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"size","size",1098693007),(100),new cljs.core.Keyword(null,"sort","sort",953465918),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"!latest_turnover","!latest_turnover",-1853433972),"desc"], null)], null)], null),type_ids);return clustermap.api.GET.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/portfolio-company-sites-by-company?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids__$1))));
};
var portfolio_company_sites_by_company = function (var_args){
var p__21633 = null;if (arguments.length > 0) {
  p__21633 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_sites_by_company__delegate.call(this,p__21633);};
portfolio_company_sites_by_company.cljs$lang$maxFixedArity = 0;
portfolio_company_sites_by_company.cljs$lang$applyTo = (function (arglist__21636){
var p__21633 = cljs.core.seq(arglist__21636);
return portfolio_company_sites_by_company__delegate(p__21633);
});
portfolio_company_sites_by_company.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_sites_by_company__delegate;
return portfolio_company_sites_by_company;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_locations = (function() { 
var portfolio_company_locations__delegate = function (p__21637){var vec__21639 = p__21637;var type_ids = cljs.core.nth.call(null,vec__21639,(0),null);return clustermap.api.GET.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/portfolio-company-locations?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids))));
};
var portfolio_company_locations = function (var_args){
var p__21637 = null;if (arguments.length > 0) {
  p__21637 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_locations__delegate.call(this,p__21637);};
portfolio_company_locations.cljs$lang$maxFixedArity = 0;
portfolio_company_locations.cljs$lang$applyTo = (function (arglist__21640){
var p__21637 = cljs.core.seq(arglist__21640);
return portfolio_company_locations__delegate(p__21637);
});
portfolio_company_locations.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_locations__delegate;
return portfolio_company_locations;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_site_stats = (function() { 
var portfolio_company_site_stats__delegate = function (p__21641){var vec__21643 = p__21641;var type_ids = cljs.core.nth.call(null,vec__21643,(0),null);return clustermap.api.GET.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/portfolio-company-site-stats?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids))));
};
var portfolio_company_site_stats = function (var_args){
var p__21641 = null;if (arguments.length > 0) {
  p__21641 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_site_stats__delegate.call(this,p__21641);};
portfolio_company_site_stats.cljs$lang$maxFixedArity = 0;
portfolio_company_site_stats.cljs$lang$applyTo = (function (arglist__21644){
var p__21641 = cljs.core.seq(arglist__21644);
return portfolio_company_site_stats__delegate(p__21641);
});
portfolio_company_site_stats.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_site_stats__delegate;
return portfolio_company_site_stats;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_site_account_timelines = (function() { 
var portfolio_company_site_account_timelines__delegate = function (p__21645){var vec__21647 = p__21645;var type_ids = cljs.core.nth.call(null,vec__21647,(0),null);return clustermap.api.GET.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/portfolio-company-site-account-timelines?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids))));
};
var portfolio_company_site_account_timelines = function (var_args){
var p__21645 = null;if (arguments.length > 0) {
  p__21645 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_site_account_timelines__delegate.call(this,p__21645);};
portfolio_company_site_account_timelines.cljs$lang$maxFixedArity = 0;
portfolio_company_site_account_timelines.cljs$lang$applyTo = (function (arglist__21648){
var p__21645 = cljs.core.seq(arglist__21648);
return portfolio_company_site_account_timelines__delegate(p__21645);
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
var investment_account_timelines__delegate = function (p__21649){var vec__21651 = p__21649;var type_ids = cljs.core.nth.call(null,vec__21651,(0),null);return clustermap.api.GET.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/investment-account-timelines?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids))));
};
var investment_account_timelines = function (var_args){
var p__21649 = null;if (arguments.length > 0) {
  p__21649 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return investment_account_timelines__delegate.call(this,p__21649);};
investment_account_timelines.cljs$lang$maxFixedArity = 0;
investment_account_timelines.cljs$lang$applyTo = (function (arglist__21652){
var p__21649 = cljs.core.seq(arglist__21652);
return investment_account_timelines__delegate(p__21649);
});
investment_account_timelines.cljs$core$IFn$_invoke$arity$variadic = investment_account_timelines__delegate;
return investment_account_timelines;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.investment_stats = (function() { 
var investment_stats__delegate = function (p__21653){var vec__21655 = p__21653;var type_ids = cljs.core.nth.call(null,vec__21655,(0),null);return clustermap.api.GET.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/investment-stats?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids))));
};
var investment_stats = function (var_args){
var p__21653 = null;if (arguments.length > 0) {
  p__21653 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return investment_stats__delegate.call(this,p__21653);};
investment_stats.cljs$lang$maxFixedArity = 0;
investment_stats.cljs$lang$applyTo = (function (arglist__21656){
var p__21653 = cljs.core.seq(arglist__21656);
return investment_stats__delegate(p__21653);
});
investment_stats.cljs$core$IFn$_invoke$arity$variadic = investment_stats__delegate;
return investment_stats;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.investment_aggs = (function() { 
var investment_aggs__delegate = function (p__21657){var vec__21659 = p__21657;var type_ids = cljs.core.nth.call(null,vec__21659,(0),null);var type_ids__$1 = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"size","size",1098693007),(50),new cljs.core.Keyword(null,"order","order",-1254677256),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"latest_turnover","latest_turnover",-1335568590),"desc"], null)], null),type_ids);return clustermap.api.GET.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/investment-aggs?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids__$1))));
};
var investment_aggs = function (var_args){
var p__21657 = null;if (arguments.length > 0) {
  p__21657 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return investment_aggs__delegate.call(this,p__21657);};
investment_aggs.cljs$lang$maxFixedArity = 0;
investment_aggs.cljs$lang$applyTo = (function (arglist__21660){
var p__21657 = cljs.core.seq(arglist__21660);
return investment_aggs__delegate(p__21657);
});
investment_aggs.cljs$core$IFn$_invoke$arity$variadic = investment_aggs__delegate;
return investment_aggs;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.investments = (function() { 
var investments__delegate = function (p__21661){var vec__21663 = p__21661;var type_ids = cljs.core.nth.call(null,vec__21663,(0),null);var type_ids__$1 = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"size","size",1098693007),(50),new cljs.core.Keyword(null,"order","order",-1254677256),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"?boundaryline_compact_name_na","?boundaryline_compact_name_na",35068819),"asc"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"?investor_company_name_na","?investor_company_name_na",2080546953),"asc"], null)], null)], null),type_ids);return clustermap.api.GET.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/investments?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids__$1))));
};
var investments = function (var_args){
var p__21661 = null;if (arguments.length > 0) {
  p__21661 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return investments__delegate.call(this,p__21661);};
investments.cljs$lang$maxFixedArity = 0;
investments.cljs$lang$applyTo = (function (arglist__21664){
var p__21661 = cljs.core.seq(arglist__21664);
return investments__delegate(p__21661);
});
investments.cljs$core$IFn$_invoke$arity$variadic = investments__delegate;
return investments;
})()
;
