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
var AJAX__delegate = function (url,p__22623){var map__22627 = p__22623;var map__22627__$1 = ((cljs.core.seq_QMARK_.call(null,map__22627))?cljs.core.apply.call(null,cljs.core.hash_map,map__22627):map__22627);var opts = map__22627__$1;var content = cljs.core.get.call(null,map__22627__$1,new cljs.core.Keyword(null,"content","content",15833224));var method = cljs.core.get.call(null,map__22627__$1,new cljs.core.Keyword(null,"method","method",55703592));var raw = cljs.core.get.call(null,map__22627__$1,new cljs.core.Keyword(null,"raw","raw",1604651272));var comm = cljs.core.async.chan.call(null,(1));goog.net.XhrIo.send(url,((function (comm,map__22627,map__22627__$1,opts,content,method,raw){
return (function (event){cljs.core.async.put_BANG_.call(null,comm,((function (comm,map__22627,map__22627__$1,opts,content,method,raw){
return (function (d){if(cljs.core.truth_(raw))
{return d;
} else
{return cljs.core.js__GT_clj.call(null,d,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true);
}
});})(comm,map__22627,map__22627__$1,opts,content,method,raw))
.call(null,(JSON.parse(event.target.getResponseText())["data"])));
return cljs.core.async.close_BANG_.call(null,comm);
});})(comm,map__22627,map__22627__$1,opts,content,method,raw))
,(function (){var or__3543__auto__ = (function (){var G__22629 = method;var G__22629__$1 = (((G__22629 == null))?null:cljs.core.name.call(null,G__22629));var G__22629__$2 = (((G__22629__$1 == null))?null:clojure.string.upper_case.call(null,G__22629__$1));return G__22629__$2;
})();if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return "GET";
}
})(),(cljs.core.truth_(content)?JSON.stringify(cljs.core.clj__GT_js.call(null,content)):null),(cljs.core.truth_(content)?cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, ["Content-Type","application/json"], null)):null));
return comm;
};
var AJAX = function (url,var_args){
var p__22623 = null;if (arguments.length > 1) {
  p__22623 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return AJAX__delegate.call(this,url,p__22623);};
AJAX.cljs$lang$maxFixedArity = 1;
AJAX.cljs$lang$applyTo = (function (arglist__22630){
var url = cljs.core.first(arglist__22630);
var p__22623 = cljs.core.rest(arglist__22630);
return AJAX__delegate(url,p__22623);
});
AJAX.cljs$core$IFn$_invoke$arity$variadic = AJAX__delegate;
return AJAX;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.GET = (function() { 
var GET__delegate = function (url,p__22631){var map__22633 = p__22631;var map__22633__$1 = ((cljs.core.seq_QMARK_.call(null,map__22633))?cljs.core.apply.call(null,cljs.core.hash_map,map__22633):map__22633);var opts = map__22633__$1;return cljs.core.apply.call(null,clustermap.api.AJAX,url,cljs.core.apply.call(null,cljs.core.concat,cljs.core.merge.call(null,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"method","method",55703592),"GET"], null))));
};
var GET = function (url,var_args){
var p__22631 = null;if (arguments.length > 1) {
  p__22631 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return GET__delegate.call(this,url,p__22631);};
GET.cljs$lang$maxFixedArity = 1;
GET.cljs$lang$applyTo = (function (arglist__22634){
var url = cljs.core.first(arglist__22634);
var p__22631 = cljs.core.rest(arglist__22634);
return GET__delegate(url,p__22631);
});
GET.cljs$core$IFn$_invoke$arity$variadic = GET__delegate;
return GET;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.POST = (function() { 
var POST__delegate = function (url,content,p__22635){var map__22637 = p__22635;var map__22637__$1 = ((cljs.core.seq_QMARK_.call(null,map__22637))?cljs.core.apply.call(null,cljs.core.hash_map,map__22637):map__22637);var opts = map__22637__$1;return cljs.core.apply.call(null,clustermap.api.AJAX,url,cljs.core.apply.call(null,cljs.core.concat,cljs.core.merge.call(null,opts,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"content","content",15833224),content], null))));
};
var POST = function (url,content,var_args){
var p__22635 = null;if (arguments.length > 2) {
  p__22635 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return POST__delegate.call(this,url,content,p__22635);};
POST.cljs$lang$maxFixedArity = 2;
POST.cljs$lang$applyTo = (function (arglist__22638){
var url = cljs.core.first(arglist__22638);
arglist__22638 = cljs.core.next(arglist__22638);
var content = cljs.core.first(arglist__22638);
var p__22635 = cljs.core.rest(arglist__22638);
return POST__delegate(url,content,p__22635);
});
POST.cljs$core$IFn$_invoke$arity$variadic = POST__delegate;
return POST;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.PUT = (function() { 
var PUT__delegate = function (url,content,p__22639){var map__22641 = p__22639;var map__22641__$1 = ((cljs.core.seq_QMARK_.call(null,map__22641))?cljs.core.apply.call(null,cljs.core.hash_map,map__22641):map__22641);var opts = map__22641__$1;return cljs.core.apply.call(null,clustermap.api.AJAX,url,cljs.core.apply.call(null,cljs.core.concat,cljs.core.merge.call(null,opts,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"PUT",new cljs.core.Keyword(null,"content","content",15833224),content], null))));
};
var PUT = function (url,content,var_args){
var p__22639 = null;if (arguments.length > 2) {
  p__22639 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return PUT__delegate.call(this,url,content,p__22639);};
PUT.cljs$lang$maxFixedArity = 2;
PUT.cljs$lang$applyTo = (function (arglist__22642){
var url = cljs.core.first(arglist__22642);
arglist__22642 = cljs.core.next(arglist__22642);
var content = cljs.core.first(arglist__22642);
var p__22639 = cljs.core.rest(arglist__22642);
return PUT__delegate(url,content,p__22639);
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
return (function (state_22775){var state_val_22776 = (state_22775[(1)]);if((state_val_22776 === (7)))
{var inst_22733 = (state_22775[(7)]);var inst_22732 = (state_22775[(2)]);var inst_22733__$1 = cljs.core.nth.call(null,inst_22732,(0),null);var inst_22734 = cljs.core.nth.call(null,inst_22732,(1),null);var inst_22735 = cljs.core.sequential_QMARK_.call(null,inst_22733__$1);var state_22775__$1 = (function (){var statearr_22777 = state_22775;(statearr_22777[(8)] = inst_22734);
(statearr_22777[(7)] = inst_22733__$1);
return statearr_22777;
})();if(inst_22735)
{var statearr_22778_22813 = state_22775__$1;(statearr_22778_22813[(1)] = (8));
} else
{var statearr_22779_22814 = state_22775__$1;(statearr_22779_22814[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22776 === (20)))
{var inst_22733 = (state_22775[(7)]);var state_22775__$1 = state_22775;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22775__$1,(23),inst_22733);
} else
{if((state_val_22776 === (1)))
{var state_22775__$1 = state_22775;var statearr_22780_22815 = state_22775__$1;(statearr_22780_22815[(2)] = null);
(statearr_22780_22815[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22776 === (4)))
{var state_22775__$1 = state_22775;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22775__$1,(7),ocomm);
} else
{if((state_val_22776 === (15)))
{var inst_22755 = (state_22775[(2)]);var state_22775__$1 = state_22775;var statearr_22781_22816 = state_22775__$1;(statearr_22781_22816[(2)] = inst_22755);
(statearr_22781_22816[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22776 === (21)))
{var state_22775__$1 = state_22775;var statearr_22782_22817 = state_22775__$1;(statearr_22782_22817[(2)] = null);
(statearr_22782_22817[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22776 === (13)))
{var inst_22738 = (state_22775[(9)]);var state_22775__$1 = state_22775;var statearr_22783_22818 = state_22775__$1;(statearr_22783_22818[(2)] = inst_22738);
(statearr_22783_22818[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22776 === (22)))
{var inst_22764 = (state_22775[(2)]);var state_22775__$1 = state_22775;var statearr_22784_22819 = state_22775__$1;(statearr_22784_22819[(2)] = inst_22764);
(statearr_22784_22819[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22776 === (6)))
{var inst_22771 = (state_22775[(2)]);var state_22775__$1 = state_22775;var statearr_22785_22820 = state_22775__$1;(statearr_22785_22820[(2)] = inst_22771);
(statearr_22785_22820[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22776 === (17)))
{var state_22775__$1 = state_22775;var statearr_22786_22821 = state_22775__$1;(statearr_22786_22821[(2)] = null);
(statearr_22786_22821[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22776 === (3)))
{var inst_22773 = (state_22775[(2)]);var state_22775__$1 = state_22775;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22775__$1,inst_22773);
} else
{if((state_val_22776 === (12)))
{var inst_22757 = (state_22775[(2)]);var state_22775__$1 = state_22775;var statearr_22787_22822 = state_22775__$1;(statearr_22787_22822[(2)] = inst_22757);
(statearr_22787_22822[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22776 === (2)))
{var state_22775__$1 = state_22775;if(true)
{var statearr_22788_22823 = state_22775__$1;(statearr_22788_22823[(1)] = (4));
} else
{var statearr_22789_22824 = state_22775__$1;(statearr_22789_22824[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22776 === (23)))
{var inst_22761 = (state_22775[(2)]);var state_22775__$1 = state_22775;var statearr_22790_22825 = state_22775__$1;(statearr_22790_22825[(2)] = inst_22761);
(statearr_22790_22825[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22776 === (19)))
{var inst_22748 = (state_22775[(2)]);var state_22775__$1 = state_22775;var statearr_22791_22826 = state_22775__$1;(statearr_22791_22826[(2)] = inst_22748);
(statearr_22791_22826[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22776 === (11)))
{var inst_22737 = (state_22775[(10)]);var inst_22740 = cljs.core.empty_QMARK_.call(null,inst_22737);var state_22775__$1 = state_22775;if(inst_22740)
{var statearr_22792_22827 = state_22775__$1;(statearr_22792_22827[(1)] = (13));
} else
{var statearr_22793_22828 = state_22775__$1;(statearr_22793_22828[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22776 === (9)))
{var inst_22733 = (state_22775[(7)]);var state_22775__$1 = state_22775;if(cljs.core.truth_(inst_22733))
{var statearr_22794_22829 = state_22775__$1;(statearr_22794_22829[(1)] = (20));
} else
{var statearr_22795_22830 = state_22775__$1;(statearr_22795_22830[(1)] = (21));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22776 === (5)))
{var state_22775__$1 = state_22775;var statearr_22796_22831 = state_22775__$1;(statearr_22796_22831[(2)] = null);
(statearr_22796_22831[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22776 === (14)))
{var inst_22737 = (state_22775[(10)]);var inst_22743 = cljs.core.rest.call(null,inst_22737);var inst_22744 = cljs.core.first.call(null,inst_22737);var state_22775__$1 = (function (){var statearr_22797 = state_22775;(statearr_22797[(11)] = inst_22743);
return statearr_22797;
})();if(cljs.core.truth_(inst_22744))
{var statearr_22798_22832 = state_22775__$1;(statearr_22798_22832[(1)] = (16));
} else
{var statearr_22799_22833 = state_22775__$1;(statearr_22799_22833[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22776 === (16)))
{var inst_22737 = (state_22775[(10)]);var inst_22746 = cljs.core.first.call(null,inst_22737);var state_22775__$1 = state_22775;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22775__$1,(19),inst_22746);
} else
{if((state_val_22776 === (10)))
{var inst_22734 = (state_22775[(8)]);var inst_22766 = (state_22775[(2)]);var inst_22767 = cljs.core.apply.call(null,handler,inst_22766,inst_22734);var state_22775__$1 = (function (){var statearr_22800 = state_22775;(statearr_22800[(12)] = inst_22767);
return statearr_22800;
})();var statearr_22801_22834 = state_22775__$1;(statearr_22801_22834[(2)] = null);
(statearr_22801_22834[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22776 === (18)))
{var inst_22743 = (state_22775[(11)]);var inst_22738 = (state_22775[(9)]);var inst_22751 = (state_22775[(2)]);var inst_22752 = cljs.core.conj.call(null,inst_22738,inst_22751);var inst_22737 = inst_22743;var inst_22738__$1 = inst_22752;var state_22775__$1 = (function (){var statearr_22802 = state_22775;(statearr_22802[(9)] = inst_22738__$1);
(statearr_22802[(10)] = inst_22737);
return statearr_22802;
})();var statearr_22803_22835 = state_22775__$1;(statearr_22803_22835[(2)] = null);
(statearr_22803_22835[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22776 === (8)))
{var inst_22733 = (state_22775[(7)]);var inst_22737 = inst_22733;var inst_22738 = cljs.core.PersistentVector.EMPTY;var state_22775__$1 = (function (){var statearr_22804 = state_22775;(statearr_22804[(9)] = inst_22738);
(statearr_22804[(10)] = inst_22737);
return statearr_22804;
})();var statearr_22805_22836 = state_22775__$1;(statearr_22805_22836[(2)] = null);
(statearr_22805_22836[(1)] = (11));
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
var state_machine__5679__auto____0 = (function (){var statearr_22809 = [null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_22809[(0)] = state_machine__5679__auto__);
(statearr_22809[(1)] = (1));
return statearr_22809;
});
var state_machine__5679__auto____1 = (function (state_22775){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_22775);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e22810){if((e22810 instanceof Object))
{var ex__5682__auto__ = e22810;var statearr_22811_22837 = state_22775;(statearr_22811_22837[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22775);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e22810;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__22838 = state_22775;
state_22775 = G__22838;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_22775){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_22775);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto__))
})();var state__5695__auto__ = (function (){var statearr_22812 = f__5694__auto__.call(null);(statearr_22812[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto__);
return statearr_22812;
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
var G__22841__delegate = function (req_args){var temp__4124__auto__ = cljs.core.apply.call(null,request_handler,req_args);if(cljs.core.truth_(temp__4124__auto__))
{var r = temp__4124__auto__;var rseq = ((cljs.core.sequential_QMARK_.call(null,r))?r:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [r], null));var vec__22840 = rseq;var rcomm = cljs.core.nth.call(null,vec__22840,(0),null);var result_handler_args = cljs.core.nthnext.call(null,vec__22840,(1));return cljs.core.async.put_BANG_.call(null,ocomm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rcomm,result_handler_args], null));
} else
{return null;
}
};
var G__22841 = function (var_args){
var req_args = null;if (arguments.length > 0) {
  req_args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__22841__delegate.call(this,req_args);};
G__22841.cljs$lang$maxFixedArity = 0;
G__22841.cljs$lang$applyTo = (function (arglist__22842){
var req_args = cljs.core.seq(arglist__22842);
return G__22841__delegate(req_args);
});
G__22841.cljs$core$IFn$_invoke$arity$variadic = G__22841__delegate;
return G__22841;
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
return (function (state_22860){var state_val_22861 = (state_22860[(1)]);if((state_val_22861 === (2)))
{var inst_22857 = (state_22860[(2)]);var inst_22858 = console.log(inst_22857);var state_22860__$1 = state_22860;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22860__$1,inst_22858);
} else
{if((state_val_22861 === (1)))
{var state_22860__$1 = state_22860;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22860__$1,(2),ch);
} else
{return null;
}
}
});})(c__5693__auto__,ch))
;return ((function (switch__5678__auto__,c__5693__auto__,ch){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_22865 = [null,null,null,null,null,null,null];(statearr_22865[(0)] = state_machine__5679__auto__);
(statearr_22865[(1)] = (1));
return statearr_22865;
});
var state_machine__5679__auto____1 = (function (state_22860){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_22860);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e22866){if((e22866 instanceof Object))
{var ex__5682__auto__ = e22866;var statearr_22867_22869 = state_22860;(statearr_22867_22869[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22860);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e22866;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__22870 = state_22860;
state_22860 = G__22870;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_22860){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_22860);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto__,ch))
})();var state__5695__auto__ = (function (){var statearr_22868 = f__5694__auto__.call(null);(statearr_22868[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto__);
return statearr_22868;
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
log_api.cljs$lang$applyTo = (function (arglist__22871){
var f = cljs.core.first(arglist__22871);
var args = cljs.core.rest(arglist__22871);
return log_api__delegate(f,args);
});
log_api.cljs$core$IFn$_invoke$arity$variadic = log_api__delegate;
return log_api;
})()
;
clustermap.api.map_json_params = (function map_json_params(m){return clojure.string.join.call(null,"&",cljs.core.map.call(null,(function (p__22874){var vec__22875 = p__22874;var k = cljs.core.nth.call(null,vec__22875,(0),null);var v = cljs.core.nth.call(null,vec__22875,(1),null);return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,k))+"="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(JSON.stringify(cljs.core.clj__GT_js.call(null,v))));
}),m));
});
/**
* put the results of an api call into an atom... makes ad-hoc api calls easy
*/
clustermap.api.fetch = (function fetch(comm){var r = cljs.core.atom.call(null,null);var c__5693__auto___22902 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5693__auto___22902,r){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto___22902,r){
return (function (state_22893){var state_val_22894 = (state_22893[(1)]);if((state_val_22894 === (2)))
{var inst_22890 = (state_22893[(2)]);var inst_22891 = cljs.core.reset_BANG_.call(null,r,inst_22890);var state_22893__$1 = state_22893;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22893__$1,inst_22891);
} else
{if((state_val_22894 === (1)))
{var state_22893__$1 = state_22893;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22893__$1,(2),comm);
} else
{return null;
}
}
});})(c__5693__auto___22902,r))
;return ((function (switch__5678__auto__,c__5693__auto___22902,r){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_22898 = [null,null,null,null,null,null,null];(statearr_22898[(0)] = state_machine__5679__auto__);
(statearr_22898[(1)] = (1));
return statearr_22898;
});
var state_machine__5679__auto____1 = (function (state_22893){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_22893);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e22899){if((e22899 instanceof Object))
{var ex__5682__auto__ = e22899;var statearr_22900_22903 = state_22893;(statearr_22900_22903[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22893);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e22899;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__22904 = state_22893;
state_22893 = G__22904;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_22893){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_22893);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto___22902,r))
})();var state__5695__auto__ = (function (){var statearr_22901 = f__5694__auto__.call(null);(statearr_22901[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto___22902);
return statearr_22901;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5695__auto__);
});})(c__5693__auto___22902,r))
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
boundarylines.cljs$lang$applyTo = (function (arglist__22905){
var id = cljs.core.first(arglist__22905);
arglist__22905 = cljs.core.next(arglist__22905);
var tolerance = cljs.core.first(arglist__22905);
var opts = cljs.core.rest(arglist__22905);
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
boundaryline_collection_index.cljs$lang$applyTo = (function (arglist__22906){
var id = cljs.core.first(arglist__22906);
var opts = cljs.core.rest(arglist__22906);
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
boundaryline_set.cljs$lang$applyTo = (function (arglist__22907){
var ids = cljs.core.first(arglist__22907);
arglist__22907 = cljs.core.next(arglist__22907);
var tolerance = cljs.core.first(arglist__22907);
var opts = cljs.core.rest(arglist__22907);
return boundaryline_set__delegate(ids,tolerance,opts);
});
boundaryline_set.cljs$core$IFn$_invoke$arity$variadic = boundaryline_set__delegate;
return boundaryline_set;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.boundaryline_aggregation = (function() { 
var boundaryline_aggregation__delegate = function (index,type,blcoll,attr,filter,p__22908){var vec__22910 = p__22908;var type_ids = cljs.core.nth.call(null,vec__22910,(0),null);return clustermap.api.POST.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/boundaryline-agg/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(index)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(blcoll)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(attr)+"?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids))),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"filter","filter",-948537934),filter], null));
};
var boundaryline_aggregation = function (index,type,blcoll,attr,filter,var_args){
var p__22908 = null;if (arguments.length > 5) {
  p__22908 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);} 
return boundaryline_aggregation__delegate.call(this,index,type,blcoll,attr,filter,p__22908);};
boundaryline_aggregation.cljs$lang$maxFixedArity = 5;
boundaryline_aggregation.cljs$lang$applyTo = (function (arglist__22911){
var index = cljs.core.first(arglist__22911);
arglist__22911 = cljs.core.next(arglist__22911);
var type = cljs.core.first(arglist__22911);
arglist__22911 = cljs.core.next(arglist__22911);
var blcoll = cljs.core.first(arglist__22911);
arglist__22911 = cljs.core.next(arglist__22911);
var attr = cljs.core.first(arglist__22911);
arglist__22911 = cljs.core.next(arglist__22911);
var filter = cljs.core.first(arglist__22911);
var p__22908 = cljs.core.rest(arglist__22911);
return boundaryline_aggregation__delegate(index,type,blcoll,attr,filter,p__22908);
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
var portfolio_company_sites__delegate = function (p__22912){var vec__22914 = p__22912;var type_ids = cljs.core.nth.call(null,vec__22914,(0),null);var type_ids__$1 = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"size","size",1098693007),(100),new cljs.core.Keyword(null,"sort","sort",953465918),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"!latest_turnover","!latest_turnover",-1853433972),"desc"], null)], null)], null),type_ids);return clustermap.api.GET.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/portfolio-company-sites?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids__$1))));
};
var portfolio_company_sites = function (var_args){
var p__22912 = null;if (arguments.length > 0) {
  p__22912 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_sites__delegate.call(this,p__22912);};
portfolio_company_sites.cljs$lang$maxFixedArity = 0;
portfolio_company_sites.cljs$lang$applyTo = (function (arglist__22915){
var p__22912 = cljs.core.seq(arglist__22915);
return portfolio_company_sites__delegate(p__22912);
});
portfolio_company_sites.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_sites__delegate;
return portfolio_company_sites;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_sites_by_company = (function() { 
var portfolio_company_sites_by_company__delegate = function (p__22916){var vec__22918 = p__22916;var type_ids = cljs.core.nth.call(null,vec__22918,(0),null);var type_ids__$1 = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"size","size",1098693007),(100),new cljs.core.Keyword(null,"sort","sort",953465918),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"!latest_turnover","!latest_turnover",-1853433972),"desc"], null)], null)], null),type_ids);return clustermap.api.GET.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/portfolio-company-sites-by-company?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids__$1))));
};
var portfolio_company_sites_by_company = function (var_args){
var p__22916 = null;if (arguments.length > 0) {
  p__22916 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_sites_by_company__delegate.call(this,p__22916);};
portfolio_company_sites_by_company.cljs$lang$maxFixedArity = 0;
portfolio_company_sites_by_company.cljs$lang$applyTo = (function (arglist__22919){
var p__22916 = cljs.core.seq(arglist__22919);
return portfolio_company_sites_by_company__delegate(p__22916);
});
portfolio_company_sites_by_company.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_sites_by_company__delegate;
return portfolio_company_sites_by_company;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_locations = (function() { 
var portfolio_company_locations__delegate = function (p__22920){var vec__22922 = p__22920;var type_ids = cljs.core.nth.call(null,vec__22922,(0),null);return clustermap.api.GET.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/portfolio-company-locations?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids))));
};
var portfolio_company_locations = function (var_args){
var p__22920 = null;if (arguments.length > 0) {
  p__22920 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_locations__delegate.call(this,p__22920);};
portfolio_company_locations.cljs$lang$maxFixedArity = 0;
portfolio_company_locations.cljs$lang$applyTo = (function (arglist__22923){
var p__22920 = cljs.core.seq(arglist__22923);
return portfolio_company_locations__delegate(p__22920);
});
portfolio_company_locations.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_locations__delegate;
return portfolio_company_locations;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_site_stats = (function() { 
var portfolio_company_site_stats__delegate = function (p__22924){var vec__22926 = p__22924;var type_ids = cljs.core.nth.call(null,vec__22926,(0),null);return clustermap.api.GET.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/portfolio-company-site-stats?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids))));
};
var portfolio_company_site_stats = function (var_args){
var p__22924 = null;if (arguments.length > 0) {
  p__22924 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_site_stats__delegate.call(this,p__22924);};
portfolio_company_site_stats.cljs$lang$maxFixedArity = 0;
portfolio_company_site_stats.cljs$lang$applyTo = (function (arglist__22927){
var p__22924 = cljs.core.seq(arglist__22927);
return portfolio_company_site_stats__delegate(p__22924);
});
portfolio_company_site_stats.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_site_stats__delegate;
return portfolio_company_site_stats;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_site_account_timelines = (function() { 
var portfolio_company_site_account_timelines__delegate = function (p__22928){var vec__22930 = p__22928;var type_ids = cljs.core.nth.call(null,vec__22930,(0),null);return clustermap.api.GET.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/portfolio-company-site-account-timelines?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids))));
};
var portfolio_company_site_account_timelines = function (var_args){
var p__22928 = null;if (arguments.length > 0) {
  p__22928 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_site_account_timelines__delegate.call(this,p__22928);};
portfolio_company_site_account_timelines.cljs$lang$maxFixedArity = 0;
portfolio_company_site_account_timelines.cljs$lang$applyTo = (function (arglist__22931){
var p__22928 = cljs.core.seq(arglist__22931);
return portfolio_company_site_account_timelines__delegate(p__22928);
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
var investment_account_timelines__delegate = function (p__22932){var vec__22934 = p__22932;var type_ids = cljs.core.nth.call(null,vec__22934,(0),null);return clustermap.api.GET.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/investment-account-timelines?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids))));
};
var investment_account_timelines = function (var_args){
var p__22932 = null;if (arguments.length > 0) {
  p__22932 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return investment_account_timelines__delegate.call(this,p__22932);};
investment_account_timelines.cljs$lang$maxFixedArity = 0;
investment_account_timelines.cljs$lang$applyTo = (function (arglist__22935){
var p__22932 = cljs.core.seq(arglist__22935);
return investment_account_timelines__delegate(p__22932);
});
investment_account_timelines.cljs$core$IFn$_invoke$arity$variadic = investment_account_timelines__delegate;
return investment_account_timelines;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.investment_stats = (function() { 
var investment_stats__delegate = function (p__22936){var vec__22938 = p__22936;var type_ids = cljs.core.nth.call(null,vec__22938,(0),null);return clustermap.api.GET.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/investment-stats?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids))));
};
var investment_stats = function (var_args){
var p__22936 = null;if (arguments.length > 0) {
  p__22936 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return investment_stats__delegate.call(this,p__22936);};
investment_stats.cljs$lang$maxFixedArity = 0;
investment_stats.cljs$lang$applyTo = (function (arglist__22939){
var p__22936 = cljs.core.seq(arglist__22939);
return investment_stats__delegate(p__22936);
});
investment_stats.cljs$core$IFn$_invoke$arity$variadic = investment_stats__delegate;
return investment_stats;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.investment_aggs = (function() { 
var investment_aggs__delegate = function (p__22940){var vec__22942 = p__22940;var type_ids = cljs.core.nth.call(null,vec__22942,(0),null);var type_ids__$1 = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"size","size",1098693007),(50),new cljs.core.Keyword(null,"order","order",-1254677256),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"latest_turnover","latest_turnover",-1335568590),"desc"], null)], null),type_ids);return clustermap.api.GET.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/investment-aggs?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids__$1))));
};
var investment_aggs = function (var_args){
var p__22940 = null;if (arguments.length > 0) {
  p__22940 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return investment_aggs__delegate.call(this,p__22940);};
investment_aggs.cljs$lang$maxFixedArity = 0;
investment_aggs.cljs$lang$applyTo = (function (arglist__22943){
var p__22940 = cljs.core.seq(arglist__22943);
return investment_aggs__delegate(p__22940);
});
investment_aggs.cljs$core$IFn$_invoke$arity$variadic = investment_aggs__delegate;
return investment_aggs;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.investments = (function() { 
var investments__delegate = function (p__22944){var vec__22946 = p__22944;var type_ids = cljs.core.nth.call(null,vec__22946,(0),null);var type_ids__$1 = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"size","size",1098693007),(50),new cljs.core.Keyword(null,"order","order",-1254677256),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"?boundaryline_compact_name_na","?boundaryline_compact_name_na",35068819),"asc"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"?investor_company_name_na","?investor_company_name_na",2080546953),"asc"], null)], null)], null),type_ids);return clustermap.api.GET.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/investments?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids__$1))));
};
var investments = function (var_args){
var p__22944 = null;if (arguments.length > 0) {
  p__22944 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return investments__delegate.call(this,p__22944);};
investments.cljs$lang$maxFixedArity = 0;
investments.cljs$lang$applyTo = (function (arglist__22947){
var p__22944 = cljs.core.seq(arglist__22947);
return investments__delegate(p__22944);
});
investments.cljs$core$IFn$_invoke$arity$variadic = investments__delegate;
return investments;
})()
;
