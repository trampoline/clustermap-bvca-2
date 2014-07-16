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
clustermap.api.AJAX = (function() { 
var AJAX__delegate = function (url,p__45471){var map__45475 = p__45471;var map__45475__$1 = ((cljs.core.seq_QMARK_.call(null,map__45475))?cljs.core.apply.call(null,cljs.core.hash_map,map__45475):map__45475);var content = cljs.core.get.call(null,map__45475__$1,new cljs.core.Keyword(null,"content","content",15833224));var method = cljs.core.get.call(null,map__45475__$1,new cljs.core.Keyword(null,"method","method",55703592));var raw = cljs.core.get.call(null,map__45475__$1,new cljs.core.Keyword(null,"raw","raw",1604651272));var comm = cljs.core.async.chan.call(null,(1));goog.net.XhrIo.send(url,((function (comm,map__45475,map__45475__$1,content,method,raw){
return (function (event){cljs.core.async.put_BANG_.call(null,comm,((function (comm,map__45475,map__45475__$1,content,method,raw){
return (function (d){if(cljs.core.truth_(raw))
{return d;
} else
{return cljs.core.js__GT_clj.call(null,d,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true);
}
});})(comm,map__45475,map__45475__$1,content,method,raw))
.call(null,(JSON.parse(event.target.getResponseText())["data"])));
return cljs.core.async.close_BANG_.call(null,comm);
});})(comm,map__45475,map__45475__$1,content,method,raw))
,(function (){var or__3543__auto__ = (function (){var G__45477 = method;var G__45477__$1 = (((G__45477 == null))?null:cljs.core.name.call(null,G__45477));var G__45477__$2 = (((G__45477__$1 == null))?null:clojure.string.upper_case.call(null,G__45477__$1));return G__45477__$2;
})();if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return "GET";
}
})(),(cljs.core.truth_(content)?JSON.stringify(cljs.core.clj__GT_js.call(null,content)):null),(cljs.core.truth_(content)?cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, ["Content-Type","application/json"], null)):null));
return comm;
};
var AJAX = function (url,var_args){
var p__45471 = null;if (arguments.length > 1) {
  p__45471 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return AJAX__delegate.call(this,url,p__45471);};
AJAX.cljs$lang$maxFixedArity = 1;
AJAX.cljs$lang$applyTo = (function (arglist__45478){
var url = cljs.core.first(arglist__45478);
var p__45471 = cljs.core.rest(arglist__45478);
return AJAX__delegate(url,p__45471);
});
AJAX.cljs$core$IFn$_invoke$arity$variadic = AJAX__delegate;
return AJAX;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.GET = (function() { 
var GET__delegate = function (url,p__45479){var map__45481 = p__45479;var map__45481__$1 = ((cljs.core.seq_QMARK_.call(null,map__45481))?cljs.core.apply.call(null,cljs.core.hash_map,map__45481):map__45481);var opts = map__45481__$1;return cljs.core.apply.call(null,clustermap.api.AJAX,url,cljs.core.apply.call(null,cljs.core.concat,cljs.core.merge.call(null,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"method","method",55703592),"GET"], null))));
};
var GET = function (url,var_args){
var p__45479 = null;if (arguments.length > 1) {
  p__45479 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return GET__delegate.call(this,url,p__45479);};
GET.cljs$lang$maxFixedArity = 1;
GET.cljs$lang$applyTo = (function (arglist__45482){
var url = cljs.core.first(arglist__45482);
var p__45479 = cljs.core.rest(arglist__45482);
return GET__delegate(url,p__45479);
});
GET.cljs$core$IFn$_invoke$arity$variadic = GET__delegate;
return GET;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.POST = (function() { 
var POST__delegate = function (url,content,p__45483){var map__45485 = p__45483;var map__45485__$1 = ((cljs.core.seq_QMARK_.call(null,map__45485))?cljs.core.apply.call(null,cljs.core.hash_map,map__45485):map__45485);var opts = map__45485__$1;return cljs.core.apply.call(null,clustermap.api.AJAX,url,cljs.core.apply.call(null,cljs.core.concat,cljs.core.merge.call(null,opts,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"content","content",15833224),content], null))));
};
var POST = function (url,content,var_args){
var p__45483 = null;if (arguments.length > 2) {
  p__45483 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return POST__delegate.call(this,url,content,p__45483);};
POST.cljs$lang$maxFixedArity = 2;
POST.cljs$lang$applyTo = (function (arglist__45486){
var url = cljs.core.first(arglist__45486);
arglist__45486 = cljs.core.next(arglist__45486);
var content = cljs.core.first(arglist__45486);
var p__45483 = cljs.core.rest(arglist__45486);
return POST__delegate(url,content,p__45483);
});
POST.cljs$core$IFn$_invoke$arity$variadic = POST__delegate;
return POST;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.PUT = (function() { 
var PUT__delegate = function (url,content,p__45487){var map__45489 = p__45487;var map__45489__$1 = ((cljs.core.seq_QMARK_.call(null,map__45489))?cljs.core.apply.call(null,cljs.core.hash_map,map__45489):map__45489);var opts = map__45489__$1;return cljs.core.apply.call(null,clustermap.api.AJAX,url,cljs.core.apply.call(null,cljs.core.concat,cljs.core.merge.call(null,opts,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"PUT",new cljs.core.Keyword(null,"content","content",15833224),content], null))));
};
var PUT = function (url,content,var_args){
var p__45487 = null;if (arguments.length > 2) {
  p__45487 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return PUT__delegate.call(this,url,content,p__45487);};
PUT.cljs$lang$maxFixedArity = 2;
PUT.cljs$lang$applyTo = (function (arglist__45490){
var url = cljs.core.first(arglist__45490);
arglist__45490 = cljs.core.next(arglist__45490);
var content = cljs.core.first(arglist__45490);
var p__45487 = cljs.core.rest(arglist__45490);
return PUT__delegate(url,content,p__45487);
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
clustermap.api.ordered_api_results = (function ordered_api_results(ocomm,handler){var c__5693__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5693__auto__){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto__){
return (function (state_45623){var state_val_45624 = (state_45623[(1)]);if((state_val_45624 === (7)))
{var inst_45581 = (state_45623[(7)]);var inst_45580 = (state_45623[(2)]);var inst_45581__$1 = cljs.core.nth.call(null,inst_45580,(0),null);var inst_45582 = cljs.core.nth.call(null,inst_45580,(1),null);var inst_45583 = cljs.core.sequential_QMARK_.call(null,inst_45581__$1);var state_45623__$1 = (function (){var statearr_45625 = state_45623;(statearr_45625[(8)] = inst_45582);
(statearr_45625[(7)] = inst_45581__$1);
return statearr_45625;
})();if(inst_45583)
{var statearr_45626_45661 = state_45623__$1;(statearr_45626_45661[(1)] = (8));
} else
{var statearr_45627_45662 = state_45623__$1;(statearr_45627_45662[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_45624 === (20)))
{var inst_45581 = (state_45623[(7)]);var state_45623__$1 = state_45623;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45623__$1,(23),inst_45581);
} else
{if((state_val_45624 === (1)))
{var state_45623__$1 = state_45623;var statearr_45628_45663 = state_45623__$1;(statearr_45628_45663[(2)] = null);
(statearr_45628_45663[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_45624 === (4)))
{var state_45623__$1 = state_45623;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45623__$1,(7),ocomm);
} else
{if((state_val_45624 === (15)))
{var inst_45603 = (state_45623[(2)]);var state_45623__$1 = state_45623;var statearr_45629_45664 = state_45623__$1;(statearr_45629_45664[(2)] = inst_45603);
(statearr_45629_45664[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_45624 === (21)))
{var state_45623__$1 = state_45623;var statearr_45630_45665 = state_45623__$1;(statearr_45630_45665[(2)] = null);
(statearr_45630_45665[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_45624 === (13)))
{var inst_45586 = (state_45623[(9)]);var state_45623__$1 = state_45623;var statearr_45631_45666 = state_45623__$1;(statearr_45631_45666[(2)] = inst_45586);
(statearr_45631_45666[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_45624 === (22)))
{var inst_45612 = (state_45623[(2)]);var state_45623__$1 = state_45623;var statearr_45632_45667 = state_45623__$1;(statearr_45632_45667[(2)] = inst_45612);
(statearr_45632_45667[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_45624 === (6)))
{var inst_45619 = (state_45623[(2)]);var state_45623__$1 = state_45623;var statearr_45633_45668 = state_45623__$1;(statearr_45633_45668[(2)] = inst_45619);
(statearr_45633_45668[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_45624 === (17)))
{var state_45623__$1 = state_45623;var statearr_45634_45669 = state_45623__$1;(statearr_45634_45669[(2)] = null);
(statearr_45634_45669[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_45624 === (3)))
{var inst_45621 = (state_45623[(2)]);var state_45623__$1 = state_45623;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45623__$1,inst_45621);
} else
{if((state_val_45624 === (12)))
{var inst_45605 = (state_45623[(2)]);var state_45623__$1 = state_45623;var statearr_45635_45670 = state_45623__$1;(statearr_45635_45670[(2)] = inst_45605);
(statearr_45635_45670[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_45624 === (2)))
{var state_45623__$1 = state_45623;if(true)
{var statearr_45636_45671 = state_45623__$1;(statearr_45636_45671[(1)] = (4));
} else
{var statearr_45637_45672 = state_45623__$1;(statearr_45637_45672[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_45624 === (23)))
{var inst_45609 = (state_45623[(2)]);var state_45623__$1 = state_45623;var statearr_45638_45673 = state_45623__$1;(statearr_45638_45673[(2)] = inst_45609);
(statearr_45638_45673[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_45624 === (19)))
{var inst_45596 = (state_45623[(2)]);var state_45623__$1 = state_45623;var statearr_45639_45674 = state_45623__$1;(statearr_45639_45674[(2)] = inst_45596);
(statearr_45639_45674[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_45624 === (11)))
{var inst_45585 = (state_45623[(10)]);var inst_45588 = cljs.core.empty_QMARK_.call(null,inst_45585);var state_45623__$1 = state_45623;if(inst_45588)
{var statearr_45640_45675 = state_45623__$1;(statearr_45640_45675[(1)] = (13));
} else
{var statearr_45641_45676 = state_45623__$1;(statearr_45641_45676[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_45624 === (9)))
{var inst_45581 = (state_45623[(7)]);var state_45623__$1 = state_45623;if(cljs.core.truth_(inst_45581))
{var statearr_45642_45677 = state_45623__$1;(statearr_45642_45677[(1)] = (20));
} else
{var statearr_45643_45678 = state_45623__$1;(statearr_45643_45678[(1)] = (21));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_45624 === (5)))
{var state_45623__$1 = state_45623;var statearr_45644_45679 = state_45623__$1;(statearr_45644_45679[(2)] = null);
(statearr_45644_45679[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_45624 === (14)))
{var inst_45585 = (state_45623[(10)]);var inst_45591 = cljs.core.rest.call(null,inst_45585);var inst_45592 = cljs.core.first.call(null,inst_45585);var state_45623__$1 = (function (){var statearr_45645 = state_45623;(statearr_45645[(11)] = inst_45591);
return statearr_45645;
})();if(cljs.core.truth_(inst_45592))
{var statearr_45646_45680 = state_45623__$1;(statearr_45646_45680[(1)] = (16));
} else
{var statearr_45647_45681 = state_45623__$1;(statearr_45647_45681[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_45624 === (16)))
{var inst_45585 = (state_45623[(10)]);var inst_45594 = cljs.core.first.call(null,inst_45585);var state_45623__$1 = state_45623;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45623__$1,(19),inst_45594);
} else
{if((state_val_45624 === (10)))
{var inst_45582 = (state_45623[(8)]);var inst_45614 = (state_45623[(2)]);var inst_45615 = cljs.core.apply.call(null,handler,inst_45614,inst_45582);var state_45623__$1 = (function (){var statearr_45648 = state_45623;(statearr_45648[(12)] = inst_45615);
return statearr_45648;
})();var statearr_45649_45682 = state_45623__$1;(statearr_45649_45682[(2)] = null);
(statearr_45649_45682[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_45624 === (18)))
{var inst_45586 = (state_45623[(9)]);var inst_45591 = (state_45623[(11)]);var inst_45599 = (state_45623[(2)]);var inst_45600 = cljs.core.conj.call(null,inst_45586,inst_45599);var inst_45585 = inst_45591;var inst_45586__$1 = inst_45600;var state_45623__$1 = (function (){var statearr_45650 = state_45623;(statearr_45650[(9)] = inst_45586__$1);
(statearr_45650[(10)] = inst_45585);
return statearr_45650;
})();var statearr_45651_45683 = state_45623__$1;(statearr_45651_45683[(2)] = null);
(statearr_45651_45683[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_45624 === (8)))
{var inst_45581 = (state_45623[(7)]);var inst_45585 = inst_45581;var inst_45586 = cljs.core.PersistentVector.EMPTY;var state_45623__$1 = (function (){var statearr_45652 = state_45623;(statearr_45652[(9)] = inst_45586);
(statearr_45652[(10)] = inst_45585);
return statearr_45652;
})();var statearr_45653_45684 = state_45623__$1;(statearr_45653_45684[(2)] = null);
(statearr_45653_45684[(1)] = (11));
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
var state_machine__5679__auto____0 = (function (){var statearr_45657 = [null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_45657[(0)] = state_machine__5679__auto__);
(statearr_45657[(1)] = (1));
return statearr_45657;
});
var state_machine__5679__auto____1 = (function (state_45623){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_45623);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e45658){if((e45658 instanceof Object))
{var ex__5682__auto__ = e45658;var statearr_45659_45685 = state_45623;(statearr_45659_45685[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45623);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e45658;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__45686 = state_45623;
state_45623 = G__45686;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_45623){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_45623);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto__))
})();var state__5695__auto__ = (function (){var statearr_45660 = f__5694__auto__.call(null);(statearr_45660[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto__);
return statearr_45660;
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
var G__45689__delegate = function (req_args){var temp__4124__auto__ = cljs.core.apply.call(null,request_handler,req_args);if(cljs.core.truth_(temp__4124__auto__))
{var r = temp__4124__auto__;var rseq = ((cljs.core.sequential_QMARK_.call(null,r))?r:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [r], null));var vec__45688 = rseq;var rcomm = cljs.core.nth.call(null,vec__45688,(0),null);var result_handler_args = cljs.core.nthnext.call(null,vec__45688,(1));return cljs.core.async.put_BANG_.call(null,ocomm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rcomm,result_handler_args], null));
} else
{return null;
}
};
var G__45689 = function (var_args){
var req_args = null;if (arguments.length > 0) {
  req_args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__45689__delegate.call(this,req_args);};
G__45689.cljs$lang$maxFixedArity = 0;
G__45689.cljs$lang$applyTo = (function (arglist__45690){
var req_args = cljs.core.seq(arglist__45690);
return G__45689__delegate(req_args);
});
G__45689.cljs$core$IFn$_invoke$arity$variadic = G__45689__delegate;
return G__45689;
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
return (function (state_45708){var state_val_45709 = (state_45708[(1)]);if((state_val_45709 === (2)))
{var inst_45705 = (state_45708[(2)]);var inst_45706 = console.log(inst_45705);var state_45708__$1 = state_45708;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45708__$1,inst_45706);
} else
{if((state_val_45709 === (1)))
{var state_45708__$1 = state_45708;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45708__$1,(2),ch);
} else
{return null;
}
}
});})(c__5693__auto__,ch))
;return ((function (switch__5678__auto__,c__5693__auto__,ch){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_45713 = [null,null,null,null,null,null,null];(statearr_45713[(0)] = state_machine__5679__auto__);
(statearr_45713[(1)] = (1));
return statearr_45713;
});
var state_machine__5679__auto____1 = (function (state_45708){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_45708);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e45714){if((e45714 instanceof Object))
{var ex__5682__auto__ = e45714;var statearr_45715_45717 = state_45708;(statearr_45715_45717[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45708);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e45714;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__45718 = state_45708;
state_45708 = G__45718;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_45708){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_45708);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto__,ch))
})();var state__5695__auto__ = (function (){var statearr_45716 = f__5694__auto__.call(null);(statearr_45716[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto__);
return statearr_45716;
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
log_api.cljs$lang$applyTo = (function (arglist__45719){
var f = cljs.core.first(arglist__45719);
var args = cljs.core.rest(arglist__45719);
return log_api__delegate(f,args);
});
log_api.cljs$core$IFn$_invoke$arity$variadic = log_api__delegate;
return log_api;
})()
;
clustermap.api.map_json_params = (function map_json_params(m){return clojure.string.join.call(null,"&",cljs.core.map.call(null,(function (p__45722){var vec__45723 = p__45722;var k = cljs.core.nth.call(null,vec__45723,(0),null);var v = cljs.core.nth.call(null,vec__45723,(1),null);return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,k))+"="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(JSON.stringify(cljs.core.clj__GT_js.call(null,v))));
}),m));
});
/**
* put the results of an api call into an atom... makes ad-hoc api calls easy
*/
clustermap.api.fetch = (function fetch(comm){var r = cljs.core.atom.call(null,null);var c__5693__auto___45750 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5693__auto___45750,r){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto___45750,r){
return (function (state_45741){var state_val_45742 = (state_45741[(1)]);if((state_val_45742 === (2)))
{var inst_45738 = (state_45741[(2)]);var inst_45739 = cljs.core.reset_BANG_.call(null,r,inst_45738);var state_45741__$1 = state_45741;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45741__$1,inst_45739);
} else
{if((state_val_45742 === (1)))
{var state_45741__$1 = state_45741;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45741__$1,(2),comm);
} else
{return null;
}
}
});})(c__5693__auto___45750,r))
;return ((function (switch__5678__auto__,c__5693__auto___45750,r){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_45746 = [null,null,null,null,null,null,null];(statearr_45746[(0)] = state_machine__5679__auto__);
(statearr_45746[(1)] = (1));
return statearr_45746;
});
var state_machine__5679__auto____1 = (function (state_45741){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_45741);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e45747){if((e45747 instanceof Object))
{var ex__5682__auto__ = e45747;var statearr_45748_45751 = state_45741;(statearr_45748_45751[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45741);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e45747;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__45752 = state_45741;
state_45741 = G__45752;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_45741){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_45741);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto___45750,r))
})();var state__5695__auto__ = (function (){var statearr_45749 = f__5694__auto__.call(null);(statearr_45749[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto___45750);
return statearr_45749;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5695__auto__);
});})(c__5693__auto___45750,r))
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
boundarylines.cljs$lang$applyTo = (function (arglist__45753){
var id = cljs.core.first(arglist__45753);
arglist__45753 = cljs.core.next(arglist__45753);
var tolerance = cljs.core.first(arglist__45753);
var opts = cljs.core.rest(arglist__45753);
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
boundaryline_collection_index.cljs$lang$applyTo = (function (arglist__45754){
var id = cljs.core.first(arglist__45754);
var opts = cljs.core.rest(arglist__45754);
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
var boundaryline_aggregation__delegate = function (index,type,blcoll,attr,filter,p__45755){var vec__45757 = p__45755;var type_ids = cljs.core.nth.call(null,vec__45757,(0),null);return clustermap.api.POST.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/boundaryline-agg/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(index)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(blcoll)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(attr)+"?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids))),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"filter","filter",-948537934),filter], null));
};
var boundaryline_aggregation = function (index,type,blcoll,attr,filter,var_args){
var p__45755 = null;if (arguments.length > 5) {
  p__45755 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);} 
return boundaryline_aggregation__delegate.call(this,index,type,blcoll,attr,filter,p__45755);};
boundaryline_aggregation.cljs$lang$maxFixedArity = 5;
boundaryline_aggregation.cljs$lang$applyTo = (function (arglist__45758){
var index = cljs.core.first(arglist__45758);
arglist__45758 = cljs.core.next(arglist__45758);
var type = cljs.core.first(arglist__45758);
arglist__45758 = cljs.core.next(arglist__45758);
var blcoll = cljs.core.first(arglist__45758);
arglist__45758 = cljs.core.next(arglist__45758);
var attr = cljs.core.first(arglist__45758);
arglist__45758 = cljs.core.next(arglist__45758);
var filter = cljs.core.first(arglist__45758);
var p__45755 = cljs.core.rest(arglist__45758);
return boundaryline_aggregation__delegate(index,type,blcoll,attr,filter,p__45755);
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
var portfolio_company_sites__delegate = function (p__45759){var vec__45761 = p__45759;var type_ids = cljs.core.nth.call(null,vec__45761,(0),null);var type_ids__$1 = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"size","size",1098693007),(100),new cljs.core.Keyword(null,"sort","sort",953465918),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"!latest_turnover","!latest_turnover",-1853433972),"desc"], null)], null)], null),type_ids);return clustermap.api.GET.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/portfolio-company-sites?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids__$1))));
};
var portfolio_company_sites = function (var_args){
var p__45759 = null;if (arguments.length > 0) {
  p__45759 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_sites__delegate.call(this,p__45759);};
portfolio_company_sites.cljs$lang$maxFixedArity = 0;
portfolio_company_sites.cljs$lang$applyTo = (function (arglist__45762){
var p__45759 = cljs.core.seq(arglist__45762);
return portfolio_company_sites__delegate(p__45759);
});
portfolio_company_sites.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_sites__delegate;
return portfolio_company_sites;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_sites_by_company = (function() { 
var portfolio_company_sites_by_company__delegate = function (p__45763){var vec__45765 = p__45763;var type_ids = cljs.core.nth.call(null,vec__45765,(0),null);var type_ids__$1 = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"size","size",1098693007),(100),new cljs.core.Keyword(null,"sort","sort",953465918),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"!latest_turnover","!latest_turnover",-1853433972),"desc"], null)], null)], null),type_ids);return clustermap.api.GET.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/portfolio-company-sites-by-company?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids__$1))));
};
var portfolio_company_sites_by_company = function (var_args){
var p__45763 = null;if (arguments.length > 0) {
  p__45763 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_sites_by_company__delegate.call(this,p__45763);};
portfolio_company_sites_by_company.cljs$lang$maxFixedArity = 0;
portfolio_company_sites_by_company.cljs$lang$applyTo = (function (arglist__45766){
var p__45763 = cljs.core.seq(arglist__45766);
return portfolio_company_sites_by_company__delegate(p__45763);
});
portfolio_company_sites_by_company.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_sites_by_company__delegate;
return portfolio_company_sites_by_company;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_locations = (function() { 
var portfolio_company_locations__delegate = function (p__45767){var vec__45769 = p__45767;var type_ids = cljs.core.nth.call(null,vec__45769,(0),null);return clustermap.api.GET.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/portfolio-company-locations?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids))));
};
var portfolio_company_locations = function (var_args){
var p__45767 = null;if (arguments.length > 0) {
  p__45767 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_locations__delegate.call(this,p__45767);};
portfolio_company_locations.cljs$lang$maxFixedArity = 0;
portfolio_company_locations.cljs$lang$applyTo = (function (arglist__45770){
var p__45767 = cljs.core.seq(arglist__45770);
return portfolio_company_locations__delegate(p__45767);
});
portfolio_company_locations.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_locations__delegate;
return portfolio_company_locations;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_site_stats = (function() { 
var portfolio_company_site_stats__delegate = function (p__45771){var vec__45773 = p__45771;var type_ids = cljs.core.nth.call(null,vec__45773,(0),null);return clustermap.api.GET.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/portfolio-company-site-stats?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids))));
};
var portfolio_company_site_stats = function (var_args){
var p__45771 = null;if (arguments.length > 0) {
  p__45771 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_site_stats__delegate.call(this,p__45771);};
portfolio_company_site_stats.cljs$lang$maxFixedArity = 0;
portfolio_company_site_stats.cljs$lang$applyTo = (function (arglist__45774){
var p__45771 = cljs.core.seq(arglist__45774);
return portfolio_company_site_stats__delegate(p__45771);
});
portfolio_company_site_stats.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_site_stats__delegate;
return portfolio_company_site_stats;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_site_account_timelines = (function() { 
var portfolio_company_site_account_timelines__delegate = function (p__45775){var vec__45777 = p__45775;var type_ids = cljs.core.nth.call(null,vec__45777,(0),null);return clustermap.api.GET.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/portfolio-company-site-account-timelines?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids))));
};
var portfolio_company_site_account_timelines = function (var_args){
var p__45775 = null;if (arguments.length > 0) {
  p__45775 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_site_account_timelines__delegate.call(this,p__45775);};
portfolio_company_site_account_timelines.cljs$lang$maxFixedArity = 0;
portfolio_company_site_account_timelines.cljs$lang$applyTo = (function (arglist__45778){
var p__45775 = cljs.core.seq(arglist__45778);
return portfolio_company_site_account_timelines__delegate(p__45775);
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
var investment_account_timelines__delegate = function (p__45779){var vec__45781 = p__45779;var type_ids = cljs.core.nth.call(null,vec__45781,(0),null);return clustermap.api.GET.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/investment-account-timelines?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids))));
};
var investment_account_timelines = function (var_args){
var p__45779 = null;if (arguments.length > 0) {
  p__45779 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return investment_account_timelines__delegate.call(this,p__45779);};
investment_account_timelines.cljs$lang$maxFixedArity = 0;
investment_account_timelines.cljs$lang$applyTo = (function (arglist__45782){
var p__45779 = cljs.core.seq(arglist__45782);
return investment_account_timelines__delegate(p__45779);
});
investment_account_timelines.cljs$core$IFn$_invoke$arity$variadic = investment_account_timelines__delegate;
return investment_account_timelines;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.investment_stats = (function() { 
var investment_stats__delegate = function (p__45783){var vec__45785 = p__45783;var type_ids = cljs.core.nth.call(null,vec__45785,(0),null);return clustermap.api.GET.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/investment-stats?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids))));
};
var investment_stats = function (var_args){
var p__45783 = null;if (arguments.length > 0) {
  p__45783 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return investment_stats__delegate.call(this,p__45783);};
investment_stats.cljs$lang$maxFixedArity = 0;
investment_stats.cljs$lang$applyTo = (function (arglist__45786){
var p__45783 = cljs.core.seq(arglist__45786);
return investment_stats__delegate(p__45783);
});
investment_stats.cljs$core$IFn$_invoke$arity$variadic = investment_stats__delegate;
return investment_stats;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.investment_aggs = (function() { 
var investment_aggs__delegate = function (p__45787){var vec__45789 = p__45787;var type_ids = cljs.core.nth.call(null,vec__45789,(0),null);var type_ids__$1 = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"size","size",1098693007),(50),new cljs.core.Keyword(null,"order","order",-1254677256),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"latest_turnover","latest_turnover",-1335568590),"desc"], null)], null),type_ids);return clustermap.api.GET.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/investment-aggs?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids__$1))));
};
var investment_aggs = function (var_args){
var p__45787 = null;if (arguments.length > 0) {
  p__45787 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return investment_aggs__delegate.call(this,p__45787);};
investment_aggs.cljs$lang$maxFixedArity = 0;
investment_aggs.cljs$lang$applyTo = (function (arglist__45790){
var p__45787 = cljs.core.seq(arglist__45790);
return investment_aggs__delegate(p__45787);
});
investment_aggs.cljs$core$IFn$_invoke$arity$variadic = investment_aggs__delegate;
return investment_aggs;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.investments = (function() { 
var investments__delegate = function (p__45791){var vec__45793 = p__45791;var type_ids = cljs.core.nth.call(null,vec__45793,(0),null);var type_ids__$1 = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"size","size",1098693007),(50),new cljs.core.Keyword(null,"order","order",-1254677256),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"?boundaryline_compact_name_na","?boundaryline_compact_name_na",35068819),"asc"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"?investor_company_name_na","?investor_company_name_na",2080546953),"asc"], null)], null)], null),type_ids);return clustermap.api.GET.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/investments?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids__$1))));
};
var investments = function (var_args){
var p__45791 = null;if (arguments.length > 0) {
  p__45791 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return investments__delegate.call(this,p__45791);};
investments.cljs$lang$maxFixedArity = 0;
investments.cljs$lang$applyTo = (function (arglist__45794){
var p__45791 = cljs.core.seq(arglist__45794);
return investments__delegate(p__45791);
});
investments.cljs$core$IFn$_invoke$arity$variadic = investments__delegate;
return investments;
})()
;

//# sourceMappingURL=api.js.map