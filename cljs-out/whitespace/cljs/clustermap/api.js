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
var AJAX__delegate = function (url,p__8523){var map__8527 = p__8523;var map__8527__$1 = ((cljs.core.seq_QMARK_.call(null,map__8527))?cljs.core.apply.call(null,cljs.core.hash_map,map__8527):map__8527);var opts = map__8527__$1;var content = cljs.core.get.call(null,map__8527__$1,new cljs.core.Keyword(null,"content","content",15833224));var method = cljs.core.get.call(null,map__8527__$1,new cljs.core.Keyword(null,"method","method",55703592));var raw = cljs.core.get.call(null,map__8527__$1,new cljs.core.Keyword(null,"raw","raw",1604651272));var comm = cljs.core.async.chan.call(null,(1));goog.net.XhrIo.send(url,((function (comm,map__8527,map__8527__$1,opts,content,method,raw){
return (function (event){cljs.core.async.put_BANG_.call(null,comm,((function (comm,map__8527,map__8527__$1,opts,content,method,raw){
return (function (d){if(cljs.core.truth_(raw))
{return d;
} else
{return cljs.core.js__GT_clj.call(null,d,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true);
}
});})(comm,map__8527,map__8527__$1,opts,content,method,raw))
.call(null,(JSON.parse(event.target.getResponseText())["data"])));
return cljs.core.async.close_BANG_.call(null,comm);
});})(comm,map__8527,map__8527__$1,opts,content,method,raw))
,(function (){var or__3541__auto__ = (function (){var G__8529 = method;var G__8529__$1 = (((G__8529 == null))?null:cljs.core.name.call(null,G__8529));var G__8529__$2 = (((G__8529__$1 == null))?null:clojure.string.upper_case.call(null,G__8529__$1));return G__8529__$2;
})();if(cljs.core.truth_(or__3541__auto__))
{return or__3541__auto__;
} else
{return "GET";
}
})(),(cljs.core.truth_(content)?JSON.stringify(cljs.core.clj__GT_js.call(null,content)):null),(cljs.core.truth_(content)?cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, ["Content-Type","application/json"], null)):null));
return comm;
};
var AJAX = function (url,var_args){
var p__8523 = null;if (arguments.length > 1) {
  p__8523 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return AJAX__delegate.call(this,url,p__8523);};
AJAX.cljs$lang$maxFixedArity = 1;
AJAX.cljs$lang$applyTo = (function (arglist__8530){
var url = cljs.core.first(arglist__8530);
var p__8523 = cljs.core.rest(arglist__8530);
return AJAX__delegate(url,p__8523);
});
AJAX.cljs$core$IFn$_invoke$arity$variadic = AJAX__delegate;
return AJAX;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.GET = (function() { 
var GET__delegate = function (url,p__8531){var map__8533 = p__8531;var map__8533__$1 = ((cljs.core.seq_QMARK_.call(null,map__8533))?cljs.core.apply.call(null,cljs.core.hash_map,map__8533):map__8533);var opts = map__8533__$1;return cljs.core.apply.call(null,clustermap.api.AJAX,url,cljs.core.apply.call(null,cljs.core.concat,cljs.core.merge.call(null,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"method","method",55703592),"GET"], null))));
};
var GET = function (url,var_args){
var p__8531 = null;if (arguments.length > 1) {
  p__8531 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return GET__delegate.call(this,url,p__8531);};
GET.cljs$lang$maxFixedArity = 1;
GET.cljs$lang$applyTo = (function (arglist__8534){
var url = cljs.core.first(arglist__8534);
var p__8531 = cljs.core.rest(arglist__8534);
return GET__delegate(url,p__8531);
});
GET.cljs$core$IFn$_invoke$arity$variadic = GET__delegate;
return GET;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.POST = (function() { 
var POST__delegate = function (url,content,p__8535){var map__8537 = p__8535;var map__8537__$1 = ((cljs.core.seq_QMARK_.call(null,map__8537))?cljs.core.apply.call(null,cljs.core.hash_map,map__8537):map__8537);var opts = map__8537__$1;return cljs.core.apply.call(null,clustermap.api.AJAX,url,cljs.core.apply.call(null,cljs.core.concat,cljs.core.merge.call(null,opts,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"content","content",15833224),content], null))));
};
var POST = function (url,content,var_args){
var p__8535 = null;if (arguments.length > 2) {
  p__8535 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return POST__delegate.call(this,url,content,p__8535);};
POST.cljs$lang$maxFixedArity = 2;
POST.cljs$lang$applyTo = (function (arglist__8538){
var url = cljs.core.first(arglist__8538);
arglist__8538 = cljs.core.next(arglist__8538);
var content = cljs.core.first(arglist__8538);
var p__8535 = cljs.core.rest(arglist__8538);
return POST__delegate(url,content,p__8535);
});
POST.cljs$core$IFn$_invoke$arity$variadic = POST__delegate;
return POST;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.PUT = (function() { 
var PUT__delegate = function (url,content,p__8539){var map__8541 = p__8539;var map__8541__$1 = ((cljs.core.seq_QMARK_.call(null,map__8541))?cljs.core.apply.call(null,cljs.core.hash_map,map__8541):map__8541);var opts = map__8541__$1;return cljs.core.apply.call(null,clustermap.api.AJAX,url,cljs.core.apply.call(null,cljs.core.concat,cljs.core.merge.call(null,opts,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"PUT",new cljs.core.Keyword(null,"content","content",15833224),content], null))));
};
var PUT = function (url,content,var_args){
var p__8539 = null;if (arguments.length > 2) {
  p__8539 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return PUT__delegate.call(this,url,content,p__8539);};
PUT.cljs$lang$maxFixedArity = 2;
PUT.cljs$lang$applyTo = (function (arglist__8542){
var url = cljs.core.first(arglist__8542);
arglist__8542 = cljs.core.next(arglist__8542);
var content = cljs.core.first(arglist__8542);
var p__8539 = cljs.core.rest(arglist__8542);
return PUT__delegate(url,content,p__8539);
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
return (function (state_8675){var state_val_8676 = (state_8675[(1)]);if((state_val_8676 === (7)))
{var inst_8633 = (state_8675[(7)]);var inst_8632 = (state_8675[(2)]);var inst_8633__$1 = cljs.core.nth.call(null,inst_8632,(0),null);var inst_8634 = cljs.core.nth.call(null,inst_8632,(1),null);var inst_8635 = cljs.core.sequential_QMARK_.call(null,inst_8633__$1);var state_8675__$1 = (function (){var statearr_8677 = state_8675;(statearr_8677[(8)] = inst_8634);
(statearr_8677[(7)] = inst_8633__$1);
return statearr_8677;
})();if(inst_8635)
{var statearr_8678_8713 = state_8675__$1;(statearr_8678_8713[(1)] = (8));
} else
{var statearr_8679_8714 = state_8675__$1;(statearr_8679_8714[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_8676 === (20)))
{var inst_8633 = (state_8675[(7)]);var state_8675__$1 = state_8675;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_8675__$1,(23),inst_8633);
} else
{if((state_val_8676 === (1)))
{var state_8675__$1 = state_8675;var statearr_8680_8715 = state_8675__$1;(statearr_8680_8715[(2)] = null);
(statearr_8680_8715[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_8676 === (4)))
{var state_8675__$1 = state_8675;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_8675__$1,(7),ocomm);
} else
{if((state_val_8676 === (15)))
{var inst_8655 = (state_8675[(2)]);var state_8675__$1 = state_8675;var statearr_8681_8716 = state_8675__$1;(statearr_8681_8716[(2)] = inst_8655);
(statearr_8681_8716[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_8676 === (21)))
{var state_8675__$1 = state_8675;var statearr_8682_8717 = state_8675__$1;(statearr_8682_8717[(2)] = null);
(statearr_8682_8717[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_8676 === (13)))
{var inst_8638 = (state_8675[(9)]);var state_8675__$1 = state_8675;var statearr_8683_8718 = state_8675__$1;(statearr_8683_8718[(2)] = inst_8638);
(statearr_8683_8718[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_8676 === (22)))
{var inst_8664 = (state_8675[(2)]);var state_8675__$1 = state_8675;var statearr_8684_8719 = state_8675__$1;(statearr_8684_8719[(2)] = inst_8664);
(statearr_8684_8719[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_8676 === (6)))
{var inst_8671 = (state_8675[(2)]);var state_8675__$1 = state_8675;var statearr_8685_8720 = state_8675__$1;(statearr_8685_8720[(2)] = inst_8671);
(statearr_8685_8720[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_8676 === (17)))
{var state_8675__$1 = state_8675;var statearr_8686_8721 = state_8675__$1;(statearr_8686_8721[(2)] = null);
(statearr_8686_8721[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_8676 === (3)))
{var inst_8673 = (state_8675[(2)]);var state_8675__$1 = state_8675;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_8675__$1,inst_8673);
} else
{if((state_val_8676 === (12)))
{var inst_8657 = (state_8675[(2)]);var state_8675__$1 = state_8675;var statearr_8687_8722 = state_8675__$1;(statearr_8687_8722[(2)] = inst_8657);
(statearr_8687_8722[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_8676 === (2)))
{var state_8675__$1 = state_8675;if(true)
{var statearr_8688_8723 = state_8675__$1;(statearr_8688_8723[(1)] = (4));
} else
{var statearr_8689_8724 = state_8675__$1;(statearr_8689_8724[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_8676 === (23)))
{var inst_8661 = (state_8675[(2)]);var state_8675__$1 = state_8675;var statearr_8690_8725 = state_8675__$1;(statearr_8690_8725[(2)] = inst_8661);
(statearr_8690_8725[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_8676 === (19)))
{var inst_8648 = (state_8675[(2)]);var state_8675__$1 = state_8675;var statearr_8691_8726 = state_8675__$1;(statearr_8691_8726[(2)] = inst_8648);
(statearr_8691_8726[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_8676 === (11)))
{var inst_8637 = (state_8675[(10)]);var inst_8640 = cljs.core.empty_QMARK_.call(null,inst_8637);var state_8675__$1 = state_8675;if(inst_8640)
{var statearr_8692_8727 = state_8675__$1;(statearr_8692_8727[(1)] = (13));
} else
{var statearr_8693_8728 = state_8675__$1;(statearr_8693_8728[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_8676 === (9)))
{var inst_8633 = (state_8675[(7)]);var state_8675__$1 = state_8675;if(cljs.core.truth_(inst_8633))
{var statearr_8694_8729 = state_8675__$1;(statearr_8694_8729[(1)] = (20));
} else
{var statearr_8695_8730 = state_8675__$1;(statearr_8695_8730[(1)] = (21));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_8676 === (5)))
{var state_8675__$1 = state_8675;var statearr_8696_8731 = state_8675__$1;(statearr_8696_8731[(2)] = null);
(statearr_8696_8731[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_8676 === (14)))
{var inst_8637 = (state_8675[(10)]);var inst_8643 = cljs.core.rest.call(null,inst_8637);var inst_8644 = cljs.core.first.call(null,inst_8637);var state_8675__$1 = (function (){var statearr_8697 = state_8675;(statearr_8697[(11)] = inst_8643);
return statearr_8697;
})();if(cljs.core.truth_(inst_8644))
{var statearr_8698_8732 = state_8675__$1;(statearr_8698_8732[(1)] = (16));
} else
{var statearr_8699_8733 = state_8675__$1;(statearr_8699_8733[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_8676 === (16)))
{var inst_8637 = (state_8675[(10)]);var inst_8646 = cljs.core.first.call(null,inst_8637);var state_8675__$1 = state_8675;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_8675__$1,(19),inst_8646);
} else
{if((state_val_8676 === (10)))
{var inst_8634 = (state_8675[(8)]);var inst_8666 = (state_8675[(2)]);var inst_8667 = cljs.core.apply.call(null,handler,inst_8666,inst_8634);var state_8675__$1 = (function (){var statearr_8700 = state_8675;(statearr_8700[(12)] = inst_8667);
return statearr_8700;
})();var statearr_8701_8734 = state_8675__$1;(statearr_8701_8734[(2)] = null);
(statearr_8701_8734[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_8676 === (18)))
{var inst_8638 = (state_8675[(9)]);var inst_8643 = (state_8675[(11)]);var inst_8651 = (state_8675[(2)]);var inst_8652 = cljs.core.conj.call(null,inst_8638,inst_8651);var inst_8637 = inst_8643;var inst_8638__$1 = inst_8652;var state_8675__$1 = (function (){var statearr_8702 = state_8675;(statearr_8702[(9)] = inst_8638__$1);
(statearr_8702[(10)] = inst_8637);
return statearr_8702;
})();var statearr_8703_8735 = state_8675__$1;(statearr_8703_8735[(2)] = null);
(statearr_8703_8735[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_8676 === (8)))
{var inst_8633 = (state_8675[(7)]);var inst_8637 = inst_8633;var inst_8638 = cljs.core.PersistentVector.EMPTY;var state_8675__$1 = (function (){var statearr_8704 = state_8675;(statearr_8704[(9)] = inst_8638);
(statearr_8704[(10)] = inst_8637);
return statearr_8704;
})();var statearr_8705_8736 = state_8675__$1;(statearr_8705_8736[(2)] = null);
(statearr_8705_8736[(1)] = (11));
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
var state_machine__5677__auto____0 = (function (){var statearr_8709 = [null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_8709[(0)] = state_machine__5677__auto__);
(statearr_8709[(1)] = (1));
return statearr_8709;
});
var state_machine__5677__auto____1 = (function (state_8675){while(true){
var ret_value__5678__auto__ = (function (){try{while(true){
var result__5679__auto__ = switch__5676__auto__.call(null,state_8675);if(cljs.core.keyword_identical_QMARK_.call(null,result__5679__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5679__auto__;
}
break;
}
}catch (e8710){if((e8710 instanceof Object))
{var ex__5680__auto__ = e8710;var statearr_8711_8737 = state_8675;(statearr_8711_8737[(5)] = ex__5680__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_8675);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e8710;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5678__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__8738 = state_8675;
state_8675 = G__8738;
continue;
}
} else
{return ret_value__5678__auto__;
}
break;
}
});
state_machine__5677__auto__ = function(state_8675){
switch(arguments.length){
case 0:
return state_machine__5677__auto____0.call(this);
case 1:
return state_machine__5677__auto____1.call(this,state_8675);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5677__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5677__auto____0;
state_machine__5677__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5677__auto____1;
return state_machine__5677__auto__;
})()
;})(switch__5676__auto__,c__5691__auto__))
})();var state__5693__auto__ = (function (){var statearr_8712 = f__5692__auto__.call(null);(statearr_8712[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5691__auto__);
return statearr_8712;
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
var G__8741__delegate = function (req_args){var temp__4124__auto__ = cljs.core.apply.call(null,request_handler,req_args);if(cljs.core.truth_(temp__4124__auto__))
{var r = temp__4124__auto__;var rseq = ((cljs.core.sequential_QMARK_.call(null,r))?r:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [r], null));var vec__8740 = rseq;var rcomm = cljs.core.nth.call(null,vec__8740,(0),null);var result_handler_args = cljs.core.nthnext.call(null,vec__8740,(1));return cljs.core.async.put_BANG_.call(null,ocomm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rcomm,result_handler_args], null));
} else
{return null;
}
};
var G__8741 = function (var_args){
var req_args = null;if (arguments.length > 0) {
  req_args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__8741__delegate.call(this,req_args);};
G__8741.cljs$lang$maxFixedArity = 0;
G__8741.cljs$lang$applyTo = (function (arglist__8742){
var req_args = cljs.core.seq(arglist__8742);
return G__8741__delegate(req_args);
});
G__8741.cljs$core$IFn$_invoke$arity$variadic = G__8741__delegate;
return G__8741;
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
return (function (state_8760){var state_val_8761 = (state_8760[(1)]);if((state_val_8761 === (2)))
{var inst_8757 = (state_8760[(2)]);var inst_8758 = console.log(inst_8757);var state_8760__$1 = state_8760;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_8760__$1,inst_8758);
} else
{if((state_val_8761 === (1)))
{var state_8760__$1 = state_8760;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_8760__$1,(2),ch);
} else
{return null;
}
}
});})(c__5691__auto__,ch))
;return ((function (switch__5676__auto__,c__5691__auto__,ch){
return (function() {
var state_machine__5677__auto__ = null;
var state_machine__5677__auto____0 = (function (){var statearr_8765 = [null,null,null,null,null,null,null];(statearr_8765[(0)] = state_machine__5677__auto__);
(statearr_8765[(1)] = (1));
return statearr_8765;
});
var state_machine__5677__auto____1 = (function (state_8760){while(true){
var ret_value__5678__auto__ = (function (){try{while(true){
var result__5679__auto__ = switch__5676__auto__.call(null,state_8760);if(cljs.core.keyword_identical_QMARK_.call(null,result__5679__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5679__auto__;
}
break;
}
}catch (e8766){if((e8766 instanceof Object))
{var ex__5680__auto__ = e8766;var statearr_8767_8769 = state_8760;(statearr_8767_8769[(5)] = ex__5680__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_8760);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e8766;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5678__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__8770 = state_8760;
state_8760 = G__8770;
continue;
}
} else
{return ret_value__5678__auto__;
}
break;
}
});
state_machine__5677__auto__ = function(state_8760){
switch(arguments.length){
case 0:
return state_machine__5677__auto____0.call(this);
case 1:
return state_machine__5677__auto____1.call(this,state_8760);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5677__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5677__auto____0;
state_machine__5677__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5677__auto____1;
return state_machine__5677__auto__;
})()
;})(switch__5676__auto__,c__5691__auto__,ch))
})();var state__5693__auto__ = (function (){var statearr_8768 = f__5692__auto__.call(null);(statearr_8768[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5691__auto__);
return statearr_8768;
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
log_api.cljs$lang$applyTo = (function (arglist__8771){
var f = cljs.core.first(arglist__8771);
var args = cljs.core.rest(arglist__8771);
return log_api__delegate(f,args);
});
log_api.cljs$core$IFn$_invoke$arity$variadic = log_api__delegate;
return log_api;
})()
;
clustermap.api.map_json_params = (function map_json_params(m){return clojure.string.join.call(null,"&",cljs.core.map.call(null,(function (p__8774){var vec__8775 = p__8774;var k = cljs.core.nth.call(null,vec__8775,(0),null);var v = cljs.core.nth.call(null,vec__8775,(1),null);return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,k))+"="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(JSON.stringify(cljs.core.clj__GT_js.call(null,v))));
}),m));
});
/**
* put the results of an api call into an atom... makes ad-hoc api calls easy
*/
clustermap.api.fetch = (function fetch(comm){var r = cljs.core.atom.call(null,null);var c__5691__auto___8802 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5691__auto___8802,r){
return (function (){var f__5692__auto__ = (function (){var switch__5676__auto__ = ((function (c__5691__auto___8802,r){
return (function (state_8793){var state_val_8794 = (state_8793[(1)]);if((state_val_8794 === (2)))
{var inst_8790 = (state_8793[(2)]);var inst_8791 = cljs.core.reset_BANG_.call(null,r,inst_8790);var state_8793__$1 = state_8793;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_8793__$1,inst_8791);
} else
{if((state_val_8794 === (1)))
{var state_8793__$1 = state_8793;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_8793__$1,(2),comm);
} else
{return null;
}
}
});})(c__5691__auto___8802,r))
;return ((function (switch__5676__auto__,c__5691__auto___8802,r){
return (function() {
var state_machine__5677__auto__ = null;
var state_machine__5677__auto____0 = (function (){var statearr_8798 = [null,null,null,null,null,null,null];(statearr_8798[(0)] = state_machine__5677__auto__);
(statearr_8798[(1)] = (1));
return statearr_8798;
});
var state_machine__5677__auto____1 = (function (state_8793){while(true){
var ret_value__5678__auto__ = (function (){try{while(true){
var result__5679__auto__ = switch__5676__auto__.call(null,state_8793);if(cljs.core.keyword_identical_QMARK_.call(null,result__5679__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5679__auto__;
}
break;
}
}catch (e8799){if((e8799 instanceof Object))
{var ex__5680__auto__ = e8799;var statearr_8800_8803 = state_8793;(statearr_8800_8803[(5)] = ex__5680__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_8793);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e8799;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5678__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__8804 = state_8793;
state_8793 = G__8804;
continue;
}
} else
{return ret_value__5678__auto__;
}
break;
}
});
state_machine__5677__auto__ = function(state_8793){
switch(arguments.length){
case 0:
return state_machine__5677__auto____0.call(this);
case 1:
return state_machine__5677__auto____1.call(this,state_8793);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5677__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5677__auto____0;
state_machine__5677__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5677__auto____1;
return state_machine__5677__auto__;
})()
;})(switch__5676__auto__,c__5691__auto___8802,r))
})();var state__5693__auto__ = (function (){var statearr_8801 = f__5692__auto__.call(null);(statearr_8801[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5691__auto___8802);
return statearr_8801;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5693__auto__);
});})(c__5691__auto___8802,r))
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
boundarylines.cljs$lang$applyTo = (function (arglist__8805){
var id = cljs.core.first(arglist__8805);
arglist__8805 = cljs.core.next(arglist__8805);
var tolerance = cljs.core.first(arglist__8805);
var opts = cljs.core.rest(arglist__8805);
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
boundaryline_collection_index.cljs$lang$applyTo = (function (arglist__8806){
var id = cljs.core.first(arglist__8806);
var opts = cljs.core.rest(arglist__8806);
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
boundaryline_set.cljs$lang$applyTo = (function (arglist__8807){
var ids = cljs.core.first(arglist__8807);
arglist__8807 = cljs.core.next(arglist__8807);
var tolerance = cljs.core.first(arglist__8807);
var opts = cljs.core.rest(arglist__8807);
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
var boundaryline_collection_view__delegate = function (collection_id,tolerance,bounds,p__8808){var map__8810 = p__8808;var map__8810__$1 = ((cljs.core.seq_QMARK_.call(null,map__8810))?cljs.core.apply.call(null,cljs.core.hash_map,map__8810):map__8810);var opts = map__8810__$1;var boundaryline_ids = cljs.core.get.call(null,map__8810__$1,new cljs.core.Keyword(null,"boundaryline-ids","boundaryline-ids",1352066869));var opts__$1 = cljs.core.flatten.call(null,cljs.core.seq.call(null,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"boundaryline-ids","boundaryline-ids",1352066869))));return cljs.core.apply.call(null,clustermap.api.POST,("/api/boundaryline-collection-view/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,collection_id))+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(tolerance)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"bounds","bounds",1691609455),bounds,new cljs.core.Keyword(null,"boundaryline-ids","boundaryline-ids",1352066869),boundaryline_ids], null),opts__$1);
};
var boundaryline_collection_view = function (collection_id,tolerance,bounds,var_args){
var p__8808 = null;if (arguments.length > 3) {
  p__8808 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return boundaryline_collection_view__delegate.call(this,collection_id,tolerance,bounds,p__8808);};
boundaryline_collection_view.cljs$lang$maxFixedArity = 3;
boundaryline_collection_view.cljs$lang$applyTo = (function (arglist__8811){
var collection_id = cljs.core.first(arglist__8811);
arglist__8811 = cljs.core.next(arglist__8811);
var tolerance = cljs.core.first(arglist__8811);
arglist__8811 = cljs.core.next(arglist__8811);
var bounds = cljs.core.first(arglist__8811);
var p__8808 = cljs.core.rest(arglist__8811);
return boundaryline_collection_view__delegate(collection_id,tolerance,bounds,p__8808);
});
boundaryline_collection_view.cljs$core$IFn$_invoke$arity$variadic = boundaryline_collection_view__delegate;
return boundaryline_collection_view;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.boundaryline_aggregation = (function() { 
var boundaryline_aggregation__delegate = function (index,type,blcoll,attr,filter,bounds,p__8812){var vec__8814 = p__8812;var type_ids = cljs.core.nth.call(null,vec__8814,(0),null);return clustermap.api.POST.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/boundaryline-agg/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(index)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(blcoll)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(attr)+"?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids))),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"filter","filter",-948537934),filter,new cljs.core.Keyword(null,"bounds","bounds",1691609455),bounds], null));
};
var boundaryline_aggregation = function (index,type,blcoll,attr,filter,bounds,var_args){
var p__8812 = null;if (arguments.length > 6) {
  p__8812 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 6),0);} 
return boundaryline_aggregation__delegate.call(this,index,type,blcoll,attr,filter,bounds,p__8812);};
boundaryline_aggregation.cljs$lang$maxFixedArity = 6;
boundaryline_aggregation.cljs$lang$applyTo = (function (arglist__8815){
var index = cljs.core.first(arglist__8815);
arglist__8815 = cljs.core.next(arglist__8815);
var type = cljs.core.first(arglist__8815);
arglist__8815 = cljs.core.next(arglist__8815);
var blcoll = cljs.core.first(arglist__8815);
arglist__8815 = cljs.core.next(arglist__8815);
var attr = cljs.core.first(arglist__8815);
arglist__8815 = cljs.core.next(arglist__8815);
var filter = cljs.core.first(arglist__8815);
arglist__8815 = cljs.core.next(arglist__8815);
var bounds = cljs.core.first(arglist__8815);
var p__8812 = cljs.core.rest(arglist__8815);
return boundaryline_aggregation__delegate(index,type,blcoll,attr,filter,bounds,p__8812);
});
boundaryline_aggregation.cljs$core$IFn$_invoke$arity$variadic = boundaryline_aggregation__delegate;
return boundaryline_aggregation;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.location_lists = (function() { 
var location_lists__delegate = function (index,type,location_attr,attrs,max_count,filter,bounds,p__8816){var vec__8818 = p__8816;var type_ids = cljs.core.nth.call(null,vec__8818,(0),null);return clustermap.api.POST.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/location-lists/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(index)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(location_attr)+"?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids))),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"max-count","max-count",1539185305),max_count,new cljs.core.Keyword(null,"attrs","attrs",-2090668713),attrs,new cljs.core.Keyword(null,"filter","filter",-948537934),filter,new cljs.core.Keyword(null,"bounds","bounds",1691609455),bounds], null));
};
var location_lists = function (index,type,location_attr,attrs,max_count,filter,bounds,var_args){
var p__8816 = null;if (arguments.length > 7) {
  p__8816 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 7),0);} 
return location_lists__delegate.call(this,index,type,location_attr,attrs,max_count,filter,bounds,p__8816);};
location_lists.cljs$lang$maxFixedArity = 7;
location_lists.cljs$lang$applyTo = (function (arglist__8819){
var index = cljs.core.first(arglist__8819);
arglist__8819 = cljs.core.next(arglist__8819);
var type = cljs.core.first(arglist__8819);
arglist__8819 = cljs.core.next(arglist__8819);
var location_attr = cljs.core.first(arglist__8819);
arglist__8819 = cljs.core.next(arglist__8819);
var attrs = cljs.core.first(arglist__8819);
arglist__8819 = cljs.core.next(arglist__8819);
var max_count = cljs.core.first(arglist__8819);
arglist__8819 = cljs.core.next(arglist__8819);
var filter = cljs.core.first(arglist__8819);
arglist__8819 = cljs.core.next(arglist__8819);
var bounds = cljs.core.first(arglist__8819);
var p__8816 = cljs.core.rest(arglist__8819);
return location_lists__delegate(index,type,location_attr,attrs,max_count,filter,bounds,p__8816);
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
var portfolio_company_sites__delegate = function (p__8820){var vec__8822 = p__8820;var type_ids = cljs.core.nth.call(null,vec__8822,(0),null);var type_ids__$1 = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"size","size",1098693007),(100),new cljs.core.Keyword(null,"sort","sort",953465918),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"!latest_turnover","!latest_turnover",-1853433972),"desc"], null)], null)], null),type_ids);return clustermap.api.GET.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/portfolio-company-sites?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids__$1))));
};
var portfolio_company_sites = function (var_args){
var p__8820 = null;if (arguments.length > 0) {
  p__8820 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_sites__delegate.call(this,p__8820);};
portfolio_company_sites.cljs$lang$maxFixedArity = 0;
portfolio_company_sites.cljs$lang$applyTo = (function (arglist__8823){
var p__8820 = cljs.core.seq(arglist__8823);
return portfolio_company_sites__delegate(p__8820);
});
portfolio_company_sites.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_sites__delegate;
return portfolio_company_sites;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_sites_by_company = (function() { 
var portfolio_company_sites_by_company__delegate = function (p__8824){var vec__8826 = p__8824;var type_ids = cljs.core.nth.call(null,vec__8826,(0),null);var type_ids__$1 = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"size","size",1098693007),(100),new cljs.core.Keyword(null,"sort","sort",953465918),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"!latest_turnover","!latest_turnover",-1853433972),"desc"], null)], null)], null),type_ids);return clustermap.api.GET.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/portfolio-company-sites-by-company?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids__$1))));
};
var portfolio_company_sites_by_company = function (var_args){
var p__8824 = null;if (arguments.length > 0) {
  p__8824 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_sites_by_company__delegate.call(this,p__8824);};
portfolio_company_sites_by_company.cljs$lang$maxFixedArity = 0;
portfolio_company_sites_by_company.cljs$lang$applyTo = (function (arglist__8827){
var p__8824 = cljs.core.seq(arglist__8827);
return portfolio_company_sites_by_company__delegate(p__8824);
});
portfolio_company_sites_by_company.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_sites_by_company__delegate;
return portfolio_company_sites_by_company;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_locations = (function() { 
var portfolio_company_locations__delegate = function (p__8828){var vec__8830 = p__8828;var type_ids = cljs.core.nth.call(null,vec__8830,(0),null);return clustermap.api.GET.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/portfolio-company-locations?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids))));
};
var portfolio_company_locations = function (var_args){
var p__8828 = null;if (arguments.length > 0) {
  p__8828 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_locations__delegate.call(this,p__8828);};
portfolio_company_locations.cljs$lang$maxFixedArity = 0;
portfolio_company_locations.cljs$lang$applyTo = (function (arglist__8831){
var p__8828 = cljs.core.seq(arglist__8831);
return portfolio_company_locations__delegate(p__8828);
});
portfolio_company_locations.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_locations__delegate;
return portfolio_company_locations;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_site_stats = (function() { 
var portfolio_company_site_stats__delegate = function (p__8832){var vec__8834 = p__8832;var type_ids = cljs.core.nth.call(null,vec__8834,(0),null);return clustermap.api.GET.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/portfolio-company-site-stats?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids))));
};
var portfolio_company_site_stats = function (var_args){
var p__8832 = null;if (arguments.length > 0) {
  p__8832 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_site_stats__delegate.call(this,p__8832);};
portfolio_company_site_stats.cljs$lang$maxFixedArity = 0;
portfolio_company_site_stats.cljs$lang$applyTo = (function (arglist__8835){
var p__8832 = cljs.core.seq(arglist__8835);
return portfolio_company_site_stats__delegate(p__8832);
});
portfolio_company_site_stats.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_site_stats__delegate;
return portfolio_company_site_stats;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_site_account_timelines = (function() { 
var portfolio_company_site_account_timelines__delegate = function (p__8836){var vec__8838 = p__8836;var type_ids = cljs.core.nth.call(null,vec__8838,(0),null);return clustermap.api.GET.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/portfolio-company-site-account-timelines?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids))));
};
var portfolio_company_site_account_timelines = function (var_args){
var p__8836 = null;if (arguments.length > 0) {
  p__8836 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_site_account_timelines__delegate.call(this,p__8836);};
portfolio_company_site_account_timelines.cljs$lang$maxFixedArity = 0;
portfolio_company_site_account_timelines.cljs$lang$applyTo = (function (arglist__8839){
var p__8836 = cljs.core.seq(arglist__8839);
return portfolio_company_site_account_timelines__delegate(p__8836);
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
var investment_account_timelines__delegate = function (p__8840){var vec__8842 = p__8840;var type_ids = cljs.core.nth.call(null,vec__8842,(0),null);return clustermap.api.GET.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/investment-account-timelines?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids))));
};
var investment_account_timelines = function (var_args){
var p__8840 = null;if (arguments.length > 0) {
  p__8840 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return investment_account_timelines__delegate.call(this,p__8840);};
investment_account_timelines.cljs$lang$maxFixedArity = 0;
investment_account_timelines.cljs$lang$applyTo = (function (arglist__8843){
var p__8840 = cljs.core.seq(arglist__8843);
return investment_account_timelines__delegate(p__8840);
});
investment_account_timelines.cljs$core$IFn$_invoke$arity$variadic = investment_account_timelines__delegate;
return investment_account_timelines;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.investment_stats = (function() { 
var investment_stats__delegate = function (p__8844){var vec__8846 = p__8844;var type_ids = cljs.core.nth.call(null,vec__8846,(0),null);return clustermap.api.GET.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/investment-stats?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids))));
};
var investment_stats = function (var_args){
var p__8844 = null;if (arguments.length > 0) {
  p__8844 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return investment_stats__delegate.call(this,p__8844);};
investment_stats.cljs$lang$maxFixedArity = 0;
investment_stats.cljs$lang$applyTo = (function (arglist__8847){
var p__8844 = cljs.core.seq(arglist__8847);
return investment_stats__delegate(p__8844);
});
investment_stats.cljs$core$IFn$_invoke$arity$variadic = investment_stats__delegate;
return investment_stats;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.investment_aggs = (function() { 
var investment_aggs__delegate = function (p__8848){var vec__8850 = p__8848;var type_ids = cljs.core.nth.call(null,vec__8850,(0),null);var type_ids__$1 = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"size","size",1098693007),(50),new cljs.core.Keyword(null,"order","order",-1254677256),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"latest_turnover","latest_turnover",-1335568590),"desc"], null)], null),type_ids);return clustermap.api.GET.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/investment-aggs?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids__$1))));
};
var investment_aggs = function (var_args){
var p__8848 = null;if (arguments.length > 0) {
  p__8848 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return investment_aggs__delegate.call(this,p__8848);};
investment_aggs.cljs$lang$maxFixedArity = 0;
investment_aggs.cljs$lang$applyTo = (function (arglist__8851){
var p__8848 = cljs.core.seq(arglist__8851);
return investment_aggs__delegate(p__8848);
});
investment_aggs.cljs$core$IFn$_invoke$arity$variadic = investment_aggs__delegate;
return investment_aggs;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.investments = (function() { 
var investments__delegate = function (p__8852){var vec__8854 = p__8852;var type_ids = cljs.core.nth.call(null,vec__8854,(0),null);var type_ids__$1 = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"size","size",1098693007),(50),new cljs.core.Keyword(null,"order","order",-1254677256),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"?boundaryline_compact_name_na","?boundaryline_compact_name_na",35068819),"asc"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"?investor_company_name_na","?investor_company_name_na",2080546953),"asc"], null)], null)], null),type_ids);return clustermap.api.GET.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/investments?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids__$1))));
};
var investments = function (var_args){
var p__8852 = null;if (arguments.length > 0) {
  p__8852 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return investments__delegate.call(this,p__8852);};
investments.cljs$lang$maxFixedArity = 0;
investments.cljs$lang$applyTo = (function (arglist__8855){
var p__8852 = cljs.core.seq(arglist__8855);
return investments__delegate(p__8852);
});
investments.cljs$core$IFn$_invoke$arity$variadic = investments__delegate;
return investments;
})()
;
