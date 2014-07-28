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
var AJAX__delegate = function (url,p__8525){var map__8529 = p__8525;var map__8529__$1 = ((cljs.core.seq_QMARK_.call(null,map__8529))?cljs.core.apply.call(null,cljs.core.hash_map,map__8529):map__8529);var opts = map__8529__$1;var content = cljs.core.get.call(null,map__8529__$1,new cljs.core.Keyword(null,"content","content",15833224));var method = cljs.core.get.call(null,map__8529__$1,new cljs.core.Keyword(null,"method","method",55703592));var raw = cljs.core.get.call(null,map__8529__$1,new cljs.core.Keyword(null,"raw","raw",1604651272));var comm = cljs.core.async.chan.call(null,(1));goog.net.XhrIo.send(url,((function (comm,map__8529,map__8529__$1,opts,content,method,raw){
return (function (event){cljs.core.async.put_BANG_.call(null,comm,((function (comm,map__8529,map__8529__$1,opts,content,method,raw){
return (function (d){if(cljs.core.truth_(raw))
{return d;
} else
{return cljs.core.js__GT_clj.call(null,d,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true);
}
});})(comm,map__8529,map__8529__$1,opts,content,method,raw))
.call(null,(JSON.parse(event.target.getResponseText())["data"])));
return cljs.core.async.close_BANG_.call(null,comm);
});})(comm,map__8529,map__8529__$1,opts,content,method,raw))
,(function (){var or__3543__auto__ = (function (){var G__8531 = method;var G__8531__$1 = (((G__8531 == null))?null:cljs.core.name.call(null,G__8531));var G__8531__$2 = (((G__8531__$1 == null))?null:clojure.string.upper_case.call(null,G__8531__$1));return G__8531__$2;
})();if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return "GET";
}
})(),(cljs.core.truth_(content)?JSON.stringify(cljs.core.clj__GT_js.call(null,content)):null),(cljs.core.truth_(content)?cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, ["Content-Type","application/json"], null)):null));
return comm;
};
var AJAX = function (url,var_args){
var p__8525 = null;if (arguments.length > 1) {
  p__8525 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return AJAX__delegate.call(this,url,p__8525);};
AJAX.cljs$lang$maxFixedArity = 1;
AJAX.cljs$lang$applyTo = (function (arglist__8532){
var url = cljs.core.first(arglist__8532);
var p__8525 = cljs.core.rest(arglist__8532);
return AJAX__delegate(url,p__8525);
});
AJAX.cljs$core$IFn$_invoke$arity$variadic = AJAX__delegate;
return AJAX;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.GET = (function() { 
var GET__delegate = function (url,p__8533){var map__8535 = p__8533;var map__8535__$1 = ((cljs.core.seq_QMARK_.call(null,map__8535))?cljs.core.apply.call(null,cljs.core.hash_map,map__8535):map__8535);var opts = map__8535__$1;return cljs.core.apply.call(null,clustermap.api.AJAX,url,cljs.core.apply.call(null,cljs.core.concat,cljs.core.merge.call(null,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"method","method",55703592),"GET"], null))));
};
var GET = function (url,var_args){
var p__8533 = null;if (arguments.length > 1) {
  p__8533 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return GET__delegate.call(this,url,p__8533);};
GET.cljs$lang$maxFixedArity = 1;
GET.cljs$lang$applyTo = (function (arglist__8536){
var url = cljs.core.first(arglist__8536);
var p__8533 = cljs.core.rest(arglist__8536);
return GET__delegate(url,p__8533);
});
GET.cljs$core$IFn$_invoke$arity$variadic = GET__delegate;
return GET;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.POST = (function() { 
var POST__delegate = function (url,content,p__8537){var map__8539 = p__8537;var map__8539__$1 = ((cljs.core.seq_QMARK_.call(null,map__8539))?cljs.core.apply.call(null,cljs.core.hash_map,map__8539):map__8539);var opts = map__8539__$1;return cljs.core.apply.call(null,clustermap.api.AJAX,url,cljs.core.apply.call(null,cljs.core.concat,cljs.core.merge.call(null,opts,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"content","content",15833224),content], null))));
};
var POST = function (url,content,var_args){
var p__8537 = null;if (arguments.length > 2) {
  p__8537 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return POST__delegate.call(this,url,content,p__8537);};
POST.cljs$lang$maxFixedArity = 2;
POST.cljs$lang$applyTo = (function (arglist__8540){
var url = cljs.core.first(arglist__8540);
arglist__8540 = cljs.core.next(arglist__8540);
var content = cljs.core.first(arglist__8540);
var p__8537 = cljs.core.rest(arglist__8540);
return POST__delegate(url,content,p__8537);
});
POST.cljs$core$IFn$_invoke$arity$variadic = POST__delegate;
return POST;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.PUT = (function() { 
var PUT__delegate = function (url,content,p__8541){var map__8543 = p__8541;var map__8543__$1 = ((cljs.core.seq_QMARK_.call(null,map__8543))?cljs.core.apply.call(null,cljs.core.hash_map,map__8543):map__8543);var opts = map__8543__$1;return cljs.core.apply.call(null,clustermap.api.AJAX,url,cljs.core.apply.call(null,cljs.core.concat,cljs.core.merge.call(null,opts,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"PUT",new cljs.core.Keyword(null,"content","content",15833224),content], null))));
};
var PUT = function (url,content,var_args){
var p__8541 = null;if (arguments.length > 2) {
  p__8541 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return PUT__delegate.call(this,url,content,p__8541);};
PUT.cljs$lang$maxFixedArity = 2;
PUT.cljs$lang$applyTo = (function (arglist__8544){
var url = cljs.core.first(arglist__8544);
arglist__8544 = cljs.core.next(arglist__8544);
var content = cljs.core.first(arglist__8544);
var p__8541 = cljs.core.rest(arglist__8544);
return PUT__delegate(url,content,p__8541);
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
return (function (state_8677){var state_val_8678 = (state_8677[(1)]);if((state_val_8678 === (7)))
{var inst_8635 = (state_8677[(7)]);var inst_8634 = (state_8677[(2)]);var inst_8635__$1 = cljs.core.nth.call(null,inst_8634,(0),null);var inst_8636 = cljs.core.nth.call(null,inst_8634,(1),null);var inst_8637 = cljs.core.sequential_QMARK_.call(null,inst_8635__$1);var state_8677__$1 = (function (){var statearr_8679 = state_8677;(statearr_8679[(8)] = inst_8636);
(statearr_8679[(7)] = inst_8635__$1);
return statearr_8679;
})();if(inst_8637)
{var statearr_8680_8715 = state_8677__$1;(statearr_8680_8715[(1)] = (8));
} else
{var statearr_8681_8716 = state_8677__$1;(statearr_8681_8716[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_8678 === (20)))
{var inst_8635 = (state_8677[(7)]);var state_8677__$1 = state_8677;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_8677__$1,(23),inst_8635);
} else
{if((state_val_8678 === (1)))
{var state_8677__$1 = state_8677;var statearr_8682_8717 = state_8677__$1;(statearr_8682_8717[(2)] = null);
(statearr_8682_8717[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_8678 === (4)))
{var state_8677__$1 = state_8677;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_8677__$1,(7),ocomm);
} else
{if((state_val_8678 === (15)))
{var inst_8657 = (state_8677[(2)]);var state_8677__$1 = state_8677;var statearr_8683_8718 = state_8677__$1;(statearr_8683_8718[(2)] = inst_8657);
(statearr_8683_8718[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_8678 === (21)))
{var state_8677__$1 = state_8677;var statearr_8684_8719 = state_8677__$1;(statearr_8684_8719[(2)] = null);
(statearr_8684_8719[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_8678 === (13)))
{var inst_8640 = (state_8677[(9)]);var state_8677__$1 = state_8677;var statearr_8685_8720 = state_8677__$1;(statearr_8685_8720[(2)] = inst_8640);
(statearr_8685_8720[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_8678 === (22)))
{var inst_8666 = (state_8677[(2)]);var state_8677__$1 = state_8677;var statearr_8686_8721 = state_8677__$1;(statearr_8686_8721[(2)] = inst_8666);
(statearr_8686_8721[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_8678 === (6)))
{var inst_8673 = (state_8677[(2)]);var state_8677__$1 = state_8677;var statearr_8687_8722 = state_8677__$1;(statearr_8687_8722[(2)] = inst_8673);
(statearr_8687_8722[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_8678 === (17)))
{var state_8677__$1 = state_8677;var statearr_8688_8723 = state_8677__$1;(statearr_8688_8723[(2)] = null);
(statearr_8688_8723[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_8678 === (3)))
{var inst_8675 = (state_8677[(2)]);var state_8677__$1 = state_8677;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_8677__$1,inst_8675);
} else
{if((state_val_8678 === (12)))
{var inst_8659 = (state_8677[(2)]);var state_8677__$1 = state_8677;var statearr_8689_8724 = state_8677__$1;(statearr_8689_8724[(2)] = inst_8659);
(statearr_8689_8724[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_8678 === (2)))
{var state_8677__$1 = state_8677;if(true)
{var statearr_8690_8725 = state_8677__$1;(statearr_8690_8725[(1)] = (4));
} else
{var statearr_8691_8726 = state_8677__$1;(statearr_8691_8726[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_8678 === (23)))
{var inst_8663 = (state_8677[(2)]);var state_8677__$1 = state_8677;var statearr_8692_8727 = state_8677__$1;(statearr_8692_8727[(2)] = inst_8663);
(statearr_8692_8727[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_8678 === (19)))
{var inst_8650 = (state_8677[(2)]);var state_8677__$1 = state_8677;var statearr_8693_8728 = state_8677__$1;(statearr_8693_8728[(2)] = inst_8650);
(statearr_8693_8728[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_8678 === (11)))
{var inst_8639 = (state_8677[(10)]);var inst_8642 = cljs.core.empty_QMARK_.call(null,inst_8639);var state_8677__$1 = state_8677;if(inst_8642)
{var statearr_8694_8729 = state_8677__$1;(statearr_8694_8729[(1)] = (13));
} else
{var statearr_8695_8730 = state_8677__$1;(statearr_8695_8730[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_8678 === (9)))
{var inst_8635 = (state_8677[(7)]);var state_8677__$1 = state_8677;if(cljs.core.truth_(inst_8635))
{var statearr_8696_8731 = state_8677__$1;(statearr_8696_8731[(1)] = (20));
} else
{var statearr_8697_8732 = state_8677__$1;(statearr_8697_8732[(1)] = (21));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_8678 === (5)))
{var state_8677__$1 = state_8677;var statearr_8698_8733 = state_8677__$1;(statearr_8698_8733[(2)] = null);
(statearr_8698_8733[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_8678 === (14)))
{var inst_8639 = (state_8677[(10)]);var inst_8645 = cljs.core.rest.call(null,inst_8639);var inst_8646 = cljs.core.first.call(null,inst_8639);var state_8677__$1 = (function (){var statearr_8699 = state_8677;(statearr_8699[(11)] = inst_8645);
return statearr_8699;
})();if(cljs.core.truth_(inst_8646))
{var statearr_8700_8734 = state_8677__$1;(statearr_8700_8734[(1)] = (16));
} else
{var statearr_8701_8735 = state_8677__$1;(statearr_8701_8735[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_8678 === (16)))
{var inst_8639 = (state_8677[(10)]);var inst_8648 = cljs.core.first.call(null,inst_8639);var state_8677__$1 = state_8677;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_8677__$1,(19),inst_8648);
} else
{if((state_val_8678 === (10)))
{var inst_8636 = (state_8677[(8)]);var inst_8668 = (state_8677[(2)]);var inst_8669 = cljs.core.apply.call(null,handler,inst_8668,inst_8636);var state_8677__$1 = (function (){var statearr_8702 = state_8677;(statearr_8702[(12)] = inst_8669);
return statearr_8702;
})();var statearr_8703_8736 = state_8677__$1;(statearr_8703_8736[(2)] = null);
(statearr_8703_8736[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_8678 === (18)))
{var inst_8645 = (state_8677[(11)]);var inst_8640 = (state_8677[(9)]);var inst_8653 = (state_8677[(2)]);var inst_8654 = cljs.core.conj.call(null,inst_8640,inst_8653);var inst_8639 = inst_8645;var inst_8640__$1 = inst_8654;var state_8677__$1 = (function (){var statearr_8704 = state_8677;(statearr_8704[(9)] = inst_8640__$1);
(statearr_8704[(10)] = inst_8639);
return statearr_8704;
})();var statearr_8705_8737 = state_8677__$1;(statearr_8705_8737[(2)] = null);
(statearr_8705_8737[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_8678 === (8)))
{var inst_8635 = (state_8677[(7)]);var inst_8639 = inst_8635;var inst_8640 = cljs.core.PersistentVector.EMPTY;var state_8677__$1 = (function (){var statearr_8706 = state_8677;(statearr_8706[(9)] = inst_8640);
(statearr_8706[(10)] = inst_8639);
return statearr_8706;
})();var statearr_8707_8738 = state_8677__$1;(statearr_8707_8738[(2)] = null);
(statearr_8707_8738[(1)] = (11));
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
var state_machine__5679__auto____0 = (function (){var statearr_8711 = [null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_8711[(0)] = state_machine__5679__auto__);
(statearr_8711[(1)] = (1));
return statearr_8711;
});
var state_machine__5679__auto____1 = (function (state_8677){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_8677);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e8712){if((e8712 instanceof Object))
{var ex__5682__auto__ = e8712;var statearr_8713_8739 = state_8677;(statearr_8713_8739[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_8677);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e8712;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__8740 = state_8677;
state_8677 = G__8740;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_8677){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_8677);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto__))
})();var state__5695__auto__ = (function (){var statearr_8714 = f__5694__auto__.call(null);(statearr_8714[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto__);
return statearr_8714;
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
var G__8743__delegate = function (req_args){var temp__4124__auto__ = cljs.core.apply.call(null,request_handler,req_args);if(cljs.core.truth_(temp__4124__auto__))
{var r = temp__4124__auto__;var rseq = ((cljs.core.sequential_QMARK_.call(null,r))?r:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [r], null));var vec__8742 = rseq;var rcomm = cljs.core.nth.call(null,vec__8742,(0),null);var result_handler_args = cljs.core.nthnext.call(null,vec__8742,(1));return cljs.core.async.put_BANG_.call(null,ocomm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rcomm,result_handler_args], null));
} else
{return null;
}
};
var G__8743 = function (var_args){
var req_args = null;if (arguments.length > 0) {
  req_args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__8743__delegate.call(this,req_args);};
G__8743.cljs$lang$maxFixedArity = 0;
G__8743.cljs$lang$applyTo = (function (arglist__8744){
var req_args = cljs.core.seq(arglist__8744);
return G__8743__delegate(req_args);
});
G__8743.cljs$core$IFn$_invoke$arity$variadic = G__8743__delegate;
return G__8743;
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
return (function (state_8762){var state_val_8763 = (state_8762[(1)]);if((state_val_8763 === (2)))
{var inst_8759 = (state_8762[(2)]);var inst_8760 = console.log(inst_8759);var state_8762__$1 = state_8762;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_8762__$1,inst_8760);
} else
{if((state_val_8763 === (1)))
{var state_8762__$1 = state_8762;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_8762__$1,(2),ch);
} else
{return null;
}
}
});})(c__5693__auto__,ch))
;return ((function (switch__5678__auto__,c__5693__auto__,ch){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_8767 = [null,null,null,null,null,null,null];(statearr_8767[(0)] = state_machine__5679__auto__);
(statearr_8767[(1)] = (1));
return statearr_8767;
});
var state_machine__5679__auto____1 = (function (state_8762){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_8762);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e8768){if((e8768 instanceof Object))
{var ex__5682__auto__ = e8768;var statearr_8769_8771 = state_8762;(statearr_8769_8771[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_8762);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e8768;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__8772 = state_8762;
state_8762 = G__8772;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_8762){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_8762);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto__,ch))
})();var state__5695__auto__ = (function (){var statearr_8770 = f__5694__auto__.call(null);(statearr_8770[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto__);
return statearr_8770;
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
log_api.cljs$lang$applyTo = (function (arglist__8773){
var f = cljs.core.first(arglist__8773);
var args = cljs.core.rest(arglist__8773);
return log_api__delegate(f,args);
});
log_api.cljs$core$IFn$_invoke$arity$variadic = log_api__delegate;
return log_api;
})()
;
clustermap.api.map_json_params = (function map_json_params(m){return clojure.string.join.call(null,"&",cljs.core.map.call(null,(function (p__8776){var vec__8777 = p__8776;var k = cljs.core.nth.call(null,vec__8777,(0),null);var v = cljs.core.nth.call(null,vec__8777,(1),null);return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,k))+"="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(JSON.stringify(cljs.core.clj__GT_js.call(null,v))));
}),m));
});
/**
* put the results of an api call into an atom... makes ad-hoc api calls easy
*/
clustermap.api.fetch = (function fetch(comm){var r = cljs.core.atom.call(null,null);var c__5693__auto___8804 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5693__auto___8804,r){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto___8804,r){
return (function (state_8795){var state_val_8796 = (state_8795[(1)]);if((state_val_8796 === (2)))
{var inst_8792 = (state_8795[(2)]);var inst_8793 = cljs.core.reset_BANG_.call(null,r,inst_8792);var state_8795__$1 = state_8795;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_8795__$1,inst_8793);
} else
{if((state_val_8796 === (1)))
{var state_8795__$1 = state_8795;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_8795__$1,(2),comm);
} else
{return null;
}
}
});})(c__5693__auto___8804,r))
;return ((function (switch__5678__auto__,c__5693__auto___8804,r){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_8800 = [null,null,null,null,null,null,null];(statearr_8800[(0)] = state_machine__5679__auto__);
(statearr_8800[(1)] = (1));
return statearr_8800;
});
var state_machine__5679__auto____1 = (function (state_8795){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_8795);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e8801){if((e8801 instanceof Object))
{var ex__5682__auto__ = e8801;var statearr_8802_8805 = state_8795;(statearr_8802_8805[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_8795);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e8801;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__8806 = state_8795;
state_8795 = G__8806;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_8795){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_8795);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto___8804,r))
})();var state__5695__auto__ = (function (){var statearr_8803 = f__5694__auto__.call(null);(statearr_8803[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto___8804);
return statearr_8803;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5695__auto__);
});})(c__5693__auto___8804,r))
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
boundarylines.cljs$lang$applyTo = (function (arglist__8807){
var id = cljs.core.first(arglist__8807);
arglist__8807 = cljs.core.next(arglist__8807);
var tolerance = cljs.core.first(arglist__8807);
var opts = cljs.core.rest(arglist__8807);
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
boundaryline_collection_index.cljs$lang$applyTo = (function (arglist__8808){
var id = cljs.core.first(arglist__8808);
var opts = cljs.core.rest(arglist__8808);
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
boundaryline_set.cljs$lang$applyTo = (function (arglist__8809){
var ids = cljs.core.first(arglist__8809);
arglist__8809 = cljs.core.next(arglist__8809);
var tolerance = cljs.core.first(arglist__8809);
var opts = cljs.core.rest(arglist__8809);
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
var boundaryline_collection_view__delegate = function (collection_id,tolerance,bounds,opts){return cljs.core.apply.call(null,clustermap.api.POST,("/api/boundaryline-collection-view/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,collection_id))+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(tolerance)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"bounds","bounds",1691609455),bounds], null),opts);
};
var boundaryline_collection_view = function (collection_id,tolerance,bounds,var_args){
var opts = null;if (arguments.length > 3) {
  opts = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return boundaryline_collection_view__delegate.call(this,collection_id,tolerance,bounds,opts);};
boundaryline_collection_view.cljs$lang$maxFixedArity = 3;
boundaryline_collection_view.cljs$lang$applyTo = (function (arglist__8810){
var collection_id = cljs.core.first(arglist__8810);
arglist__8810 = cljs.core.next(arglist__8810);
var tolerance = cljs.core.first(arglist__8810);
arglist__8810 = cljs.core.next(arglist__8810);
var bounds = cljs.core.first(arglist__8810);
var opts = cljs.core.rest(arglist__8810);
return boundaryline_collection_view__delegate(collection_id,tolerance,bounds,opts);
});
boundaryline_collection_view.cljs$core$IFn$_invoke$arity$variadic = boundaryline_collection_view__delegate;
return boundaryline_collection_view;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.boundaryline_aggregation = (function() { 
var boundaryline_aggregation__delegate = function (index,type,blcoll,attr,filter,bounds,p__8811){var vec__8813 = p__8811;var type_ids = cljs.core.nth.call(null,vec__8813,(0),null);return clustermap.api.POST.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/boundaryline-agg/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(index)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(blcoll)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(attr)+"?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids))),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"filter","filter",-948537934),filter,new cljs.core.Keyword(null,"bounds","bounds",1691609455),bounds], null));
};
var boundaryline_aggregation = function (index,type,blcoll,attr,filter,bounds,var_args){
var p__8811 = null;if (arguments.length > 6) {
  p__8811 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 6),0);} 
return boundaryline_aggregation__delegate.call(this,index,type,blcoll,attr,filter,bounds,p__8811);};
boundaryline_aggregation.cljs$lang$maxFixedArity = 6;
boundaryline_aggregation.cljs$lang$applyTo = (function (arglist__8814){
var index = cljs.core.first(arglist__8814);
arglist__8814 = cljs.core.next(arglist__8814);
var type = cljs.core.first(arglist__8814);
arglist__8814 = cljs.core.next(arglist__8814);
var blcoll = cljs.core.first(arglist__8814);
arglist__8814 = cljs.core.next(arglist__8814);
var attr = cljs.core.first(arglist__8814);
arglist__8814 = cljs.core.next(arglist__8814);
var filter = cljs.core.first(arglist__8814);
arglist__8814 = cljs.core.next(arglist__8814);
var bounds = cljs.core.first(arglist__8814);
var p__8811 = cljs.core.rest(arglist__8814);
return boundaryline_aggregation__delegate(index,type,blcoll,attr,filter,bounds,p__8811);
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
var portfolio_company_sites__delegate = function (p__8815){var vec__8817 = p__8815;var type_ids = cljs.core.nth.call(null,vec__8817,(0),null);var type_ids__$1 = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"size","size",1098693007),(100),new cljs.core.Keyword(null,"sort","sort",953465918),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"!latest_turnover","!latest_turnover",-1853433972),"desc"], null)], null)], null),type_ids);return clustermap.api.GET.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/portfolio-company-sites?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids__$1))));
};
var portfolio_company_sites = function (var_args){
var p__8815 = null;if (arguments.length > 0) {
  p__8815 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_sites__delegate.call(this,p__8815);};
portfolio_company_sites.cljs$lang$maxFixedArity = 0;
portfolio_company_sites.cljs$lang$applyTo = (function (arglist__8818){
var p__8815 = cljs.core.seq(arglist__8818);
return portfolio_company_sites__delegate(p__8815);
});
portfolio_company_sites.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_sites__delegate;
return portfolio_company_sites;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_sites_by_company = (function() { 
var portfolio_company_sites_by_company__delegate = function (p__8819){var vec__8821 = p__8819;var type_ids = cljs.core.nth.call(null,vec__8821,(0),null);var type_ids__$1 = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"size","size",1098693007),(100),new cljs.core.Keyword(null,"sort","sort",953465918),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"!latest_turnover","!latest_turnover",-1853433972),"desc"], null)], null)], null),type_ids);return clustermap.api.GET.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/portfolio-company-sites-by-company?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids__$1))));
};
var portfolio_company_sites_by_company = function (var_args){
var p__8819 = null;if (arguments.length > 0) {
  p__8819 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_sites_by_company__delegate.call(this,p__8819);};
portfolio_company_sites_by_company.cljs$lang$maxFixedArity = 0;
portfolio_company_sites_by_company.cljs$lang$applyTo = (function (arglist__8822){
var p__8819 = cljs.core.seq(arglist__8822);
return portfolio_company_sites_by_company__delegate(p__8819);
});
portfolio_company_sites_by_company.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_sites_by_company__delegate;
return portfolio_company_sites_by_company;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_locations = (function() { 
var portfolio_company_locations__delegate = function (p__8823){var vec__8825 = p__8823;var type_ids = cljs.core.nth.call(null,vec__8825,(0),null);return clustermap.api.GET.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/portfolio-company-locations?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids))));
};
var portfolio_company_locations = function (var_args){
var p__8823 = null;if (arguments.length > 0) {
  p__8823 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_locations__delegate.call(this,p__8823);};
portfolio_company_locations.cljs$lang$maxFixedArity = 0;
portfolio_company_locations.cljs$lang$applyTo = (function (arglist__8826){
var p__8823 = cljs.core.seq(arglist__8826);
return portfolio_company_locations__delegate(p__8823);
});
portfolio_company_locations.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_locations__delegate;
return portfolio_company_locations;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_site_stats = (function() { 
var portfolio_company_site_stats__delegate = function (p__8827){var vec__8829 = p__8827;var type_ids = cljs.core.nth.call(null,vec__8829,(0),null);return clustermap.api.GET.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/portfolio-company-site-stats?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids))));
};
var portfolio_company_site_stats = function (var_args){
var p__8827 = null;if (arguments.length > 0) {
  p__8827 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_site_stats__delegate.call(this,p__8827);};
portfolio_company_site_stats.cljs$lang$maxFixedArity = 0;
portfolio_company_site_stats.cljs$lang$applyTo = (function (arglist__8830){
var p__8827 = cljs.core.seq(arglist__8830);
return portfolio_company_site_stats__delegate(p__8827);
});
portfolio_company_site_stats.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_site_stats__delegate;
return portfolio_company_site_stats;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_site_account_timelines = (function() { 
var portfolio_company_site_account_timelines__delegate = function (p__8831){var vec__8833 = p__8831;var type_ids = cljs.core.nth.call(null,vec__8833,(0),null);return clustermap.api.GET.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/portfolio-company-site-account-timelines?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids))));
};
var portfolio_company_site_account_timelines = function (var_args){
var p__8831 = null;if (arguments.length > 0) {
  p__8831 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_site_account_timelines__delegate.call(this,p__8831);};
portfolio_company_site_account_timelines.cljs$lang$maxFixedArity = 0;
portfolio_company_site_account_timelines.cljs$lang$applyTo = (function (arglist__8834){
var p__8831 = cljs.core.seq(arglist__8834);
return portfolio_company_site_account_timelines__delegate(p__8831);
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
var investment_account_timelines__delegate = function (p__8835){var vec__8837 = p__8835;var type_ids = cljs.core.nth.call(null,vec__8837,(0),null);return clustermap.api.GET.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/investment-account-timelines?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids))));
};
var investment_account_timelines = function (var_args){
var p__8835 = null;if (arguments.length > 0) {
  p__8835 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return investment_account_timelines__delegate.call(this,p__8835);};
investment_account_timelines.cljs$lang$maxFixedArity = 0;
investment_account_timelines.cljs$lang$applyTo = (function (arglist__8838){
var p__8835 = cljs.core.seq(arglist__8838);
return investment_account_timelines__delegate(p__8835);
});
investment_account_timelines.cljs$core$IFn$_invoke$arity$variadic = investment_account_timelines__delegate;
return investment_account_timelines;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.investment_stats = (function() { 
var investment_stats__delegate = function (p__8839){var vec__8841 = p__8839;var type_ids = cljs.core.nth.call(null,vec__8841,(0),null);return clustermap.api.GET.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/investment-stats?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids))));
};
var investment_stats = function (var_args){
var p__8839 = null;if (arguments.length > 0) {
  p__8839 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return investment_stats__delegate.call(this,p__8839);};
investment_stats.cljs$lang$maxFixedArity = 0;
investment_stats.cljs$lang$applyTo = (function (arglist__8842){
var p__8839 = cljs.core.seq(arglist__8842);
return investment_stats__delegate(p__8839);
});
investment_stats.cljs$core$IFn$_invoke$arity$variadic = investment_stats__delegate;
return investment_stats;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.investment_aggs = (function() { 
var investment_aggs__delegate = function (p__8843){var vec__8845 = p__8843;var type_ids = cljs.core.nth.call(null,vec__8845,(0),null);var type_ids__$1 = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"size","size",1098693007),(50),new cljs.core.Keyword(null,"order","order",-1254677256),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"latest_turnover","latest_turnover",-1335568590),"desc"], null)], null),type_ids);return clustermap.api.GET.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/investment-aggs?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids__$1))));
};
var investment_aggs = function (var_args){
var p__8843 = null;if (arguments.length > 0) {
  p__8843 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return investment_aggs__delegate.call(this,p__8843);};
investment_aggs.cljs$lang$maxFixedArity = 0;
investment_aggs.cljs$lang$applyTo = (function (arglist__8846){
var p__8843 = cljs.core.seq(arglist__8846);
return investment_aggs__delegate(p__8843);
});
investment_aggs.cljs$core$IFn$_invoke$arity$variadic = investment_aggs__delegate;
return investment_aggs;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.investments = (function() { 
var investments__delegate = function (p__8847){var vec__8849 = p__8847;var type_ids = cljs.core.nth.call(null,vec__8849,(0),null);var type_ids__$1 = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"size","size",1098693007),(50),new cljs.core.Keyword(null,"order","order",-1254677256),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"?boundaryline_compact_name_na","?boundaryline_compact_name_na",35068819),"asc"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"?investor_company_name_na","?investor_company_name_na",2080546953),"asc"], null)], null)], null),type_ids);return clustermap.api.GET.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/investments?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids__$1))));
};
var investments = function (var_args){
var p__8847 = null;if (arguments.length > 0) {
  p__8847 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return investments__delegate.call(this,p__8847);};
investments.cljs$lang$maxFixedArity = 0;
investments.cljs$lang$applyTo = (function (arglist__8850){
var p__8847 = cljs.core.seq(arglist__8850);
return investments__delegate(p__8847);
});
investments.cljs$core$IFn$_invoke$arity$variadic = investments__delegate;
return investments;
})()
;
