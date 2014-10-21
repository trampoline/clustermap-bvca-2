// Compiled by ClojureScript 0.0-2356
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
var AJAX__delegate = function (url,p__29608){var map__29612 = p__29608;var map__29612__$1 = ((cljs.core.seq_QMARK_.call(null,map__29612))?cljs.core.apply.call(null,cljs.core.hash_map,map__29612):map__29612);var opts = map__29612__$1;var content = cljs.core.get.call(null,map__29612__$1,new cljs.core.Keyword(null,"content","content",15833224));var method = cljs.core.get.call(null,map__29612__$1,new cljs.core.Keyword(null,"method","method",55703592));var raw = cljs.core.get.call(null,map__29612__$1,new cljs.core.Keyword(null,"raw","raw",1604651272));var comm = cljs.core.async.chan.call(null,(1));goog.net.XhrIo.send(url,((function (comm,map__29612,map__29612__$1,opts,content,method,raw){
return (function (event){cljs.core.async.put_BANG_.call(null,comm,((function (comm,map__29612,map__29612__$1,opts,content,method,raw){
return (function (d){if(cljs.core.truth_(raw))
{return d;
} else
{return cljs.core.js__GT_clj.call(null,d,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true);
}
});})(comm,map__29612,map__29612__$1,opts,content,method,raw))
.call(null,(JSON.parse(event.target.getResponseText())["data"])));
return cljs.core.async.close_BANG_.call(null,comm);
});})(comm,map__29612,map__29612__$1,opts,content,method,raw))
,(function (){var or__3637__auto__ = (function (){var G__29614 = method;var G__29614__$1 = (((G__29614 == null))?null:cljs.core.name.call(null,G__29614));var G__29614__$2 = (((G__29614__$1 == null))?null:clojure.string.upper_case.call(null,G__29614__$1));return G__29614__$2;
})();if(cljs.core.truth_(or__3637__auto__))
{return or__3637__auto__;
} else
{return "GET";
}
})(),(cljs.core.truth_(content)?JSON.stringify(cljs.core.clj__GT_js.call(null,content)):null),(cljs.core.truth_(content)?cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, ["Content-Type","application/json"], null)):null));
return comm;
};
var AJAX = function (url,var_args){
var p__29608 = null;if (arguments.length > 1) {
  p__29608 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return AJAX__delegate.call(this,url,p__29608);};
AJAX.cljs$lang$maxFixedArity = 1;
AJAX.cljs$lang$applyTo = (function (arglist__29615){
var url = cljs.core.first(arglist__29615);
var p__29608 = cljs.core.rest(arglist__29615);
return AJAX__delegate(url,p__29608);
});
AJAX.cljs$core$IFn$_invoke$arity$variadic = AJAX__delegate;
return AJAX;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.GET = (function() { 
var GET__delegate = function (url,p__29616){var map__29618 = p__29616;var map__29618__$1 = ((cljs.core.seq_QMARK_.call(null,map__29618))?cljs.core.apply.call(null,cljs.core.hash_map,map__29618):map__29618);var opts = map__29618__$1;return cljs.core.apply.call(null,clustermap.api.AJAX,url,cljs.core.apply.call(null,cljs.core.concat,cljs.core.merge.call(null,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"method","method",55703592),"GET"], null))));
};
var GET = function (url,var_args){
var p__29616 = null;if (arguments.length > 1) {
  p__29616 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return GET__delegate.call(this,url,p__29616);};
GET.cljs$lang$maxFixedArity = 1;
GET.cljs$lang$applyTo = (function (arglist__29619){
var url = cljs.core.first(arglist__29619);
var p__29616 = cljs.core.rest(arglist__29619);
return GET__delegate(url,p__29616);
});
GET.cljs$core$IFn$_invoke$arity$variadic = GET__delegate;
return GET;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.POST = (function() { 
var POST__delegate = function (url,content,p__29620){var map__29622 = p__29620;var map__29622__$1 = ((cljs.core.seq_QMARK_.call(null,map__29622))?cljs.core.apply.call(null,cljs.core.hash_map,map__29622):map__29622);var opts = map__29622__$1;return cljs.core.apply.call(null,clustermap.api.AJAX,url,cljs.core.apply.call(null,cljs.core.concat,cljs.core.merge.call(null,opts,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"content","content",15833224),content], null))));
};
var POST = function (url,content,var_args){
var p__29620 = null;if (arguments.length > 2) {
  p__29620 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return POST__delegate.call(this,url,content,p__29620);};
POST.cljs$lang$maxFixedArity = 2;
POST.cljs$lang$applyTo = (function (arglist__29623){
var url = cljs.core.first(arglist__29623);
arglist__29623 = cljs.core.next(arglist__29623);
var content = cljs.core.first(arglist__29623);
var p__29620 = cljs.core.rest(arglist__29623);
return POST__delegate(url,content,p__29620);
});
POST.cljs$core$IFn$_invoke$arity$variadic = POST__delegate;
return POST;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.PUT = (function() { 
var PUT__delegate = function (url,content,p__29624){var map__29626 = p__29624;var map__29626__$1 = ((cljs.core.seq_QMARK_.call(null,map__29626))?cljs.core.apply.call(null,cljs.core.hash_map,map__29626):map__29626);var opts = map__29626__$1;return cljs.core.apply.call(null,clustermap.api.AJAX,url,cljs.core.apply.call(null,cljs.core.concat,cljs.core.merge.call(null,opts,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"PUT",new cljs.core.Keyword(null,"content","content",15833224),content], null))));
};
var PUT = function (url,content,var_args){
var p__29624 = null;if (arguments.length > 2) {
  p__29624 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return PUT__delegate.call(this,url,content,p__29624);};
PUT.cljs$lang$maxFixedArity = 2;
PUT.cljs$lang$applyTo = (function (arglist__29627){
var url = cljs.core.first(arglist__29627);
arglist__29627 = cljs.core.next(arglist__29627);
var content = cljs.core.first(arglist__29627);
var p__29624 = cljs.core.rest(arglist__29627);
return PUT__delegate(url,content,p__29624);
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
clustermap.api.ordered_api_results = (function ordered_api_results(ocomm,handler){var c__5819__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5819__auto__){
return (function (){var f__5820__auto__ = (function (){var switch__5804__auto__ = ((function (c__5819__auto__){
return (function (state_29762){var state_val_29763 = (state_29762[(1)]);if((state_val_29763 === (7)))
{var inst_29719 = (state_29762[(7)]);var inst_29718 = (state_29762[(2)]);var inst_29719__$1 = cljs.core.nth.call(null,inst_29718,(0),null);var inst_29720 = cljs.core.nth.call(null,inst_29718,(1),null);var inst_29721 = cljs.core.sequential_QMARK_.call(null,inst_29719__$1);var state_29762__$1 = (function (){var statearr_29764 = state_29762;(statearr_29764[(7)] = inst_29719__$1);
(statearr_29764[(8)] = inst_29720);
return statearr_29764;
})();if(inst_29721)
{var statearr_29765_29800 = state_29762__$1;(statearr_29765_29800[(1)] = (8));
} else
{var statearr_29766_29801 = state_29762__$1;(statearr_29766_29801[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29763 === (20)))
{var inst_29719 = (state_29762[(7)]);var state_29762__$1 = state_29762;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29762__$1,(23),inst_29719);
} else
{if((state_val_29763 === (1)))
{var state_29762__$1 = state_29762;var statearr_29767_29802 = state_29762__$1;(statearr_29767_29802[(2)] = null);
(statearr_29767_29802[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29763 === (4)))
{var state_29762__$1 = state_29762;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29762__$1,(7),ocomm);
} else
{if((state_val_29763 === (15)))
{var inst_29742 = (state_29762[(2)]);var state_29762__$1 = state_29762;var statearr_29768_29803 = state_29762__$1;(statearr_29768_29803[(2)] = inst_29742);
(statearr_29768_29803[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29763 === (21)))
{var state_29762__$1 = state_29762;var statearr_29769_29804 = state_29762__$1;(statearr_29769_29804[(2)] = null);
(statearr_29769_29804[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29763 === (13)))
{var inst_29725 = (state_29762[(9)]);var state_29762__$1 = state_29762;var statearr_29770_29805 = state_29762__$1;(statearr_29770_29805[(2)] = inst_29725);
(statearr_29770_29805[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29763 === (22)))
{var inst_29751 = (state_29762[(2)]);var state_29762__$1 = state_29762;var statearr_29771_29806 = state_29762__$1;(statearr_29771_29806[(2)] = inst_29751);
(statearr_29771_29806[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29763 === (6)))
{var inst_29758 = (state_29762[(2)]);var state_29762__$1 = state_29762;var statearr_29772_29807 = state_29762__$1;(statearr_29772_29807[(2)] = inst_29758);
(statearr_29772_29807[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29763 === (17)))
{var state_29762__$1 = state_29762;var statearr_29773_29808 = state_29762__$1;(statearr_29773_29808[(2)] = null);
(statearr_29773_29808[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29763 === (3)))
{var inst_29760 = (state_29762[(2)]);var state_29762__$1 = state_29762;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29762__$1,inst_29760);
} else
{if((state_val_29763 === (12)))
{var inst_29744 = (state_29762[(2)]);var state_29762__$1 = state_29762;var statearr_29774_29809 = state_29762__$1;(statearr_29774_29809[(2)] = inst_29744);
(statearr_29774_29809[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29763 === (2)))
{var state_29762__$1 = state_29762;var statearr_29775_29810 = state_29762__$1;(statearr_29775_29810[(1)] = (4));

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29763 === (23)))
{var inst_29748 = (state_29762[(2)]);var state_29762__$1 = state_29762;var statearr_29777_29811 = state_29762__$1;(statearr_29777_29811[(2)] = inst_29748);
(statearr_29777_29811[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29763 === (19)))
{var inst_29735 = (state_29762[(2)]);var state_29762__$1 = state_29762;var statearr_29778_29812 = state_29762__$1;(statearr_29778_29812[(2)] = inst_29735);
(statearr_29778_29812[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29763 === (11)))
{var inst_29724 = (state_29762[(10)]);var inst_29727 = cljs.core.empty_QMARK_.call(null,inst_29724);var state_29762__$1 = state_29762;if(inst_29727)
{var statearr_29779_29813 = state_29762__$1;(statearr_29779_29813[(1)] = (13));
} else
{var statearr_29780_29814 = state_29762__$1;(statearr_29780_29814[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29763 === (9)))
{var inst_29719 = (state_29762[(7)]);var state_29762__$1 = state_29762;if(cljs.core.truth_(inst_29719))
{var statearr_29781_29815 = state_29762__$1;(statearr_29781_29815[(1)] = (20));
} else
{var statearr_29782_29816 = state_29762__$1;(statearr_29782_29816[(1)] = (21));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29763 === (5)))
{var state_29762__$1 = state_29762;var statearr_29783_29817 = state_29762__$1;(statearr_29783_29817[(2)] = null);
(statearr_29783_29817[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29763 === (14)))
{var inst_29724 = (state_29762[(10)]);var inst_29730 = cljs.core.rest.call(null,inst_29724);var inst_29731 = cljs.core.first.call(null,inst_29724);var state_29762__$1 = (function (){var statearr_29784 = state_29762;(statearr_29784[(11)] = inst_29730);
return statearr_29784;
})();if(cljs.core.truth_(inst_29731))
{var statearr_29785_29818 = state_29762__$1;(statearr_29785_29818[(1)] = (16));
} else
{var statearr_29786_29819 = state_29762__$1;(statearr_29786_29819[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29763 === (16)))
{var inst_29724 = (state_29762[(10)]);var inst_29733 = cljs.core.first.call(null,inst_29724);var state_29762__$1 = state_29762;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29762__$1,(19),inst_29733);
} else
{if((state_val_29763 === (10)))
{var inst_29720 = (state_29762[(8)]);var inst_29753 = (state_29762[(2)]);var inst_29754 = cljs.core.apply.call(null,handler,inst_29753,inst_29720);var state_29762__$1 = (function (){var statearr_29787 = state_29762;(statearr_29787[(12)] = inst_29754);
return statearr_29787;
})();var statearr_29788_29820 = state_29762__$1;(statearr_29788_29820[(2)] = null);
(statearr_29788_29820[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29763 === (18)))
{var inst_29725 = (state_29762[(9)]);var inst_29730 = (state_29762[(11)]);var inst_29738 = (state_29762[(2)]);var inst_29739 = cljs.core.conj.call(null,inst_29725,inst_29738);var inst_29724 = inst_29730;var inst_29725__$1 = inst_29739;var state_29762__$1 = (function (){var statearr_29789 = state_29762;(statearr_29789[(9)] = inst_29725__$1);
(statearr_29789[(10)] = inst_29724);
return statearr_29789;
})();var statearr_29790_29821 = state_29762__$1;(statearr_29790_29821[(2)] = null);
(statearr_29790_29821[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29763 === (8)))
{var inst_29719 = (state_29762[(7)]);var inst_29723 = cljs.core.PersistentVector.EMPTY;var inst_29724 = inst_29719;var inst_29725 = inst_29723;var state_29762__$1 = (function (){var statearr_29791 = state_29762;(statearr_29791[(9)] = inst_29725);
(statearr_29791[(10)] = inst_29724);
return statearr_29791;
})();var statearr_29792_29822 = state_29762__$1;(statearr_29792_29822[(2)] = null);
(statearr_29792_29822[(1)] = (11));
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
});})(c__5819__auto__))
;return ((function (switch__5804__auto__,c__5819__auto__){
return (function() {
var state_machine__5805__auto__ = null;
var state_machine__5805__auto____0 = (function (){var statearr_29796 = [null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_29796[(0)] = state_machine__5805__auto__);
(statearr_29796[(1)] = (1));
return statearr_29796;
});
var state_machine__5805__auto____1 = (function (state_29762){while(true){
var ret_value__5806__auto__ = (function (){try{while(true){
var result__5807__auto__ = switch__5804__auto__.call(null,state_29762);if(cljs.core.keyword_identical_QMARK_.call(null,result__5807__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5807__auto__;
}
break;
}
}catch (e29797){if((e29797 instanceof Object))
{var ex__5808__auto__ = e29797;var statearr_29798_29823 = state_29762;(statearr_29798_29823[(5)] = ex__5808__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29762);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e29797;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5806__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__29824 = state_29762;
state_29762 = G__29824;
continue;
}
} else
{return ret_value__5806__auto__;
}
break;
}
});
state_machine__5805__auto__ = function(state_29762){
switch(arguments.length){
case 0:
return state_machine__5805__auto____0.call(this);
case 1:
return state_machine__5805__auto____1.call(this,state_29762);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5805__auto____0;
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5805__auto____1;
return state_machine__5805__auto__;
})()
;})(switch__5804__auto__,c__5819__auto__))
})();var state__5821__auto__ = (function (){var statearr_29799 = f__5820__auto__.call(null);(statearr_29799[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5819__auto__);
return statearr_29799;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5821__auto__);
});})(c__5819__auto__))
);
return c__5819__auto__;
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
var G__29827__delegate = function (req_args){var temp__4124__auto__ = cljs.core.apply.call(null,request_handler,req_args);if(cljs.core.truth_(temp__4124__auto__))
{var r = temp__4124__auto__;var rseq = ((cljs.core.sequential_QMARK_.call(null,r))?r:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [r], null));var vec__29826 = rseq;var rcomm = cljs.core.nth.call(null,vec__29826,(0),null);var result_handler_args = cljs.core.nthnext.call(null,vec__29826,(1));return cljs.core.async.put_BANG_.call(null,ocomm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rcomm,result_handler_args], null));
} else
{return null;
}
};
var G__29827 = function (var_args){
var req_args = null;if (arguments.length > 0) {
  req_args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__29827__delegate.call(this,req_args);};
G__29827.cljs$lang$maxFixedArity = 0;
G__29827.cljs$lang$applyTo = (function (arglist__29828){
var req_args = cljs.core.seq(arglist__29828);
return G__29827__delegate(req_args);
});
G__29827.cljs$core$IFn$_invoke$arity$variadic = G__29827__delegate;
return G__29827;
})()
;
;})(ocomm,_))
});
/**
* @param {...*} var_args
*/
clustermap.api.log_api = (function() { 
var log_api__delegate = function (f,args){var ch = cljs.core.apply.call(null,f,args);var c__5819__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5819__auto__,ch){
return (function (){var f__5820__auto__ = (function (){var switch__5804__auto__ = ((function (c__5819__auto__,ch){
return (function (state_29846){var state_val_29847 = (state_29846[(1)]);if((state_val_29847 === (2)))
{var inst_29843 = (state_29846[(2)]);var inst_29844 = console.log(inst_29843);var state_29846__$1 = state_29846;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29846__$1,inst_29844);
} else
{if((state_val_29847 === (1)))
{var state_29846__$1 = state_29846;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29846__$1,(2),ch);
} else
{return null;
}
}
});})(c__5819__auto__,ch))
;return ((function (switch__5804__auto__,c__5819__auto__,ch){
return (function() {
var state_machine__5805__auto__ = null;
var state_machine__5805__auto____0 = (function (){var statearr_29851 = [null,null,null,null,null,null,null];(statearr_29851[(0)] = state_machine__5805__auto__);
(statearr_29851[(1)] = (1));
return statearr_29851;
});
var state_machine__5805__auto____1 = (function (state_29846){while(true){
var ret_value__5806__auto__ = (function (){try{while(true){
var result__5807__auto__ = switch__5804__auto__.call(null,state_29846);if(cljs.core.keyword_identical_QMARK_.call(null,result__5807__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5807__auto__;
}
break;
}
}catch (e29852){if((e29852 instanceof Object))
{var ex__5808__auto__ = e29852;var statearr_29853_29855 = state_29846;(statearr_29853_29855[(5)] = ex__5808__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29846);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e29852;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5806__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__29856 = state_29846;
state_29846 = G__29856;
continue;
}
} else
{return ret_value__5806__auto__;
}
break;
}
});
state_machine__5805__auto__ = function(state_29846){
switch(arguments.length){
case 0:
return state_machine__5805__auto____0.call(this);
case 1:
return state_machine__5805__auto____1.call(this,state_29846);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5805__auto____0;
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5805__auto____1;
return state_machine__5805__auto__;
})()
;})(switch__5804__auto__,c__5819__auto__,ch))
})();var state__5821__auto__ = (function (){var statearr_29854 = f__5820__auto__.call(null);(statearr_29854[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5819__auto__);
return statearr_29854;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5821__auto__);
});})(c__5819__auto__,ch))
);
return c__5819__auto__;
};
var log_api = function (f,var_args){
var args = null;if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return log_api__delegate.call(this,f,args);};
log_api.cljs$lang$maxFixedArity = 1;
log_api.cljs$lang$applyTo = (function (arglist__29857){
var f = cljs.core.first(arglist__29857);
var args = cljs.core.rest(arglist__29857);
return log_api__delegate(f,args);
});
log_api.cljs$core$IFn$_invoke$arity$variadic = log_api__delegate;
return log_api;
})()
;
clustermap.api.map_json_params = (function map_json_params(m){return clojure.string.join.call(null,"&",cljs.core.map.call(null,(function (p__29860){var vec__29861 = p__29860;var k = cljs.core.nth.call(null,vec__29861,(0),null);var v = cljs.core.nth.call(null,vec__29861,(1),null);return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,k))+"="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(JSON.stringify(cljs.core.clj__GT_js.call(null,v))));
}),m));
});
/**
* put the results of an api call into an atom... makes ad-hoc api calls easy
*/
clustermap.api.fetch = (function fetch(comm){var r = cljs.core.atom.call(null,null);var c__5819__auto___29888 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5819__auto___29888,r){
return (function (){var f__5820__auto__ = (function (){var switch__5804__auto__ = ((function (c__5819__auto___29888,r){
return (function (state_29879){var state_val_29880 = (state_29879[(1)]);if((state_val_29880 === (2)))
{var inst_29876 = (state_29879[(2)]);var inst_29877 = cljs.core.reset_BANG_.call(null,r,inst_29876);var state_29879__$1 = state_29879;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29879__$1,inst_29877);
} else
{if((state_val_29880 === (1)))
{var state_29879__$1 = state_29879;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29879__$1,(2),comm);
} else
{return null;
}
}
});})(c__5819__auto___29888,r))
;return ((function (switch__5804__auto__,c__5819__auto___29888,r){
return (function() {
var state_machine__5805__auto__ = null;
var state_machine__5805__auto____0 = (function (){var statearr_29884 = [null,null,null,null,null,null,null];(statearr_29884[(0)] = state_machine__5805__auto__);
(statearr_29884[(1)] = (1));
return statearr_29884;
});
var state_machine__5805__auto____1 = (function (state_29879){while(true){
var ret_value__5806__auto__ = (function (){try{while(true){
var result__5807__auto__ = switch__5804__auto__.call(null,state_29879);if(cljs.core.keyword_identical_QMARK_.call(null,result__5807__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5807__auto__;
}
break;
}
}catch (e29885){if((e29885 instanceof Object))
{var ex__5808__auto__ = e29885;var statearr_29886_29889 = state_29879;(statearr_29886_29889[(5)] = ex__5808__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29879);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e29885;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5806__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__29890 = state_29879;
state_29879 = G__29890;
continue;
}
} else
{return ret_value__5806__auto__;
}
break;
}
});
state_machine__5805__auto__ = function(state_29879){
switch(arguments.length){
case 0:
return state_machine__5805__auto____0.call(this);
case 1:
return state_machine__5805__auto____1.call(this,state_29879);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5805__auto____0;
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5805__auto____1;
return state_machine__5805__auto__;
})()
;})(switch__5804__auto__,c__5819__auto___29888,r))
})();var state__5821__auto__ = (function (){var statearr_29887 = f__5820__auto__.call(null);(statearr_29887[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5819__auto___29888);
return statearr_29887;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5821__auto__);
});})(c__5819__auto___29888,r))
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
boundarylines.cljs$lang$applyTo = (function (arglist__29891){
var id = cljs.core.first(arglist__29891);
arglist__29891 = cljs.core.next(arglist__29891);
var tolerance = cljs.core.first(arglist__29891);
var opts = cljs.core.rest(arglist__29891);
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
boundaryline_collection_index.cljs$lang$applyTo = (function (arglist__29892){
var id = cljs.core.first(arglist__29892);
var opts = cljs.core.rest(arglist__29892);
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
boundaryline_set.cljs$lang$applyTo = (function (arglist__29893){
var ids = cljs.core.first(arglist__29893);
arglist__29893 = cljs.core.next(arglist__29893);
var tolerance = cljs.core.first(arglist__29893);
var opts = cljs.core.rest(arglist__29893);
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
var boundaryline_collection_view__delegate = function (collection_id,tolerance,bounds,p__29894){var map__29896 = p__29894;var map__29896__$1 = ((cljs.core.seq_QMARK_.call(null,map__29896))?cljs.core.apply.call(null,cljs.core.hash_map,map__29896):map__29896);var opts = map__29896__$1;var boundaryline_ids = cljs.core.get.call(null,map__29896__$1,new cljs.core.Keyword(null,"boundaryline-ids","boundaryline-ids",1352066869));var opts__$1 = cljs.core.flatten.call(null,cljs.core.seq.call(null,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"boundaryline-ids","boundaryline-ids",1352066869))));return cljs.core.apply.call(null,clustermap.api.POST,("/api/boundaryline-collection-view/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,collection_id))+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(tolerance)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"bounds","bounds",1691609455),bounds,new cljs.core.Keyword(null,"boundaryline-ids","boundaryline-ids",1352066869),boundaryline_ids], null),opts__$1);
};
var boundaryline_collection_view = function (collection_id,tolerance,bounds,var_args){
var p__29894 = null;if (arguments.length > 3) {
  p__29894 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return boundaryline_collection_view__delegate.call(this,collection_id,tolerance,bounds,p__29894);};
boundaryline_collection_view.cljs$lang$maxFixedArity = 3;
boundaryline_collection_view.cljs$lang$applyTo = (function (arglist__29897){
var collection_id = cljs.core.first(arglist__29897);
arglist__29897 = cljs.core.next(arglist__29897);
var tolerance = cljs.core.first(arglist__29897);
arglist__29897 = cljs.core.next(arglist__29897);
var bounds = cljs.core.first(arglist__29897);
var p__29894 = cljs.core.rest(arglist__29897);
return boundaryline_collection_view__delegate(collection_id,tolerance,bounds,p__29894);
});
boundaryline_collection_view.cljs$core$IFn$_invoke$arity$variadic = boundaryline_collection_view__delegate;
return boundaryline_collection_view;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.boundaryline_aggregation = (function() { 
var boundaryline_aggregation__delegate = function (index,type,blcoll,attr,filter,bounds,p__29898){var vec__29900 = p__29898;var type_ids = cljs.core.nth.call(null,vec__29900,(0),null);return clustermap.api.POST.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/boundaryline-agg/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(index)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(blcoll)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(attr)+"?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids))),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"filter","filter",-948537934),filter,new cljs.core.Keyword(null,"bounds","bounds",1691609455),bounds], null));
};
var boundaryline_aggregation = function (index,type,blcoll,attr,filter,bounds,var_args){
var p__29898 = null;if (arguments.length > 6) {
  p__29898 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 6),0);} 
return boundaryline_aggregation__delegate.call(this,index,type,blcoll,attr,filter,bounds,p__29898);};
boundaryline_aggregation.cljs$lang$maxFixedArity = 6;
boundaryline_aggregation.cljs$lang$applyTo = (function (arglist__29901){
var index = cljs.core.first(arglist__29901);
arglist__29901 = cljs.core.next(arglist__29901);
var type = cljs.core.first(arglist__29901);
arglist__29901 = cljs.core.next(arglist__29901);
var blcoll = cljs.core.first(arglist__29901);
arglist__29901 = cljs.core.next(arglist__29901);
var attr = cljs.core.first(arglist__29901);
arglist__29901 = cljs.core.next(arglist__29901);
var filter = cljs.core.first(arglist__29901);
arglist__29901 = cljs.core.next(arglist__29901);
var bounds = cljs.core.first(arglist__29901);
var p__29898 = cljs.core.rest(arglist__29901);
return boundaryline_aggregation__delegate(index,type,blcoll,attr,filter,bounds,p__29898);
});
boundaryline_aggregation.cljs$core$IFn$_invoke$arity$variadic = boundaryline_aggregation__delegate;
return boundaryline_aggregation;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.summary_stats = (function() { 
var summary_stats__delegate = function (index,type,statsattrs,filter,bounds,p__29902){var vec__29904 = p__29902;var type_ids = cljs.core.nth.call(null,vec__29904,(0),null);return clustermap.api.POST.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/summary-stats/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(index)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)+"?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids))),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"statsattrs","statsattrs",1724366357),statsattrs,new cljs.core.Keyword(null,"filter","filter",-948537934),filter,new cljs.core.Keyword(null,"bounds","bounds",1691609455),bounds], null));
};
var summary_stats = function (index,type,statsattrs,filter,bounds,var_args){
var p__29902 = null;if (arguments.length > 5) {
  p__29902 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);} 
return summary_stats__delegate.call(this,index,type,statsattrs,filter,bounds,p__29902);};
summary_stats.cljs$lang$maxFixedArity = 5;
summary_stats.cljs$lang$applyTo = (function (arglist__29905){
var index = cljs.core.first(arglist__29905);
arglist__29905 = cljs.core.next(arglist__29905);
var type = cljs.core.first(arglist__29905);
arglist__29905 = cljs.core.next(arglist__29905);
var statsattrs = cljs.core.first(arglist__29905);
arglist__29905 = cljs.core.next(arglist__29905);
var filter = cljs.core.first(arglist__29905);
arglist__29905 = cljs.core.next(arglist__29905);
var bounds = cljs.core.first(arglist__29905);
var p__29902 = cljs.core.rest(arglist__29905);
return summary_stats__delegate(index,type,statsattrs,filter,bounds,p__29902);
});
summary_stats.cljs$core$IFn$_invoke$arity$variadic = summary_stats__delegate;
return summary_stats;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.location_lists = (function() { 
var location_lists__delegate = function (index,type,location_attr,attrs,max_count,filter,bounds,p__29906){var vec__29908 = p__29906;var type_ids = cljs.core.nth.call(null,vec__29908,(0),null);return clustermap.api.POST.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/location-lists/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(index)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(location_attr)+"?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids))),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"max-count","max-count",1539185305),max_count,new cljs.core.Keyword(null,"attrs","attrs",-2090668713),attrs,new cljs.core.Keyword(null,"filter","filter",-948537934),filter,new cljs.core.Keyword(null,"bounds","bounds",1691609455),bounds], null));
};
var location_lists = function (index,type,location_attr,attrs,max_count,filter,bounds,var_args){
var p__29906 = null;if (arguments.length > 7) {
  p__29906 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 7),0);} 
return location_lists__delegate.call(this,index,type,location_attr,attrs,max_count,filter,bounds,p__29906);};
location_lists.cljs$lang$maxFixedArity = 7;
location_lists.cljs$lang$applyTo = (function (arglist__29909){
var index = cljs.core.first(arglist__29909);
arglist__29909 = cljs.core.next(arglist__29909);
var type = cljs.core.first(arglist__29909);
arglist__29909 = cljs.core.next(arglist__29909);
var location_attr = cljs.core.first(arglist__29909);
arglist__29909 = cljs.core.next(arglist__29909);
var attrs = cljs.core.first(arglist__29909);
arglist__29909 = cljs.core.next(arglist__29909);
var max_count = cljs.core.first(arglist__29909);
arglist__29909 = cljs.core.next(arglist__29909);
var filter = cljs.core.first(arglist__29909);
arglist__29909 = cljs.core.next(arglist__29909);
var bounds = cljs.core.first(arglist__29909);
var p__29906 = cljs.core.rest(arglist__29909);
return location_lists__delegate(index,type,location_attr,attrs,max_count,filter,bounds,p__29906);
});
location_lists.cljs$core$IFn$_invoke$arity$variadic = location_lists__delegate;
return location_lists;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.simple_table = (function() { 
var simple_table__delegate = function (index,type,filter_spec,bounds,sort_spec,from,size,p__29910){var vec__29912 = p__29910;var type_ids = cljs.core.nth.call(null,vec__29912,(0),null);return clustermap.api.POST.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/simple-table/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(index)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)+"?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids))),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"filter","filter",-948537934),filter_spec,new cljs.core.Keyword(null,"bounds","bounds",1691609455),bounds,new cljs.core.Keyword(null,"sort","sort",953465918),sort_spec,new cljs.core.Keyword(null,"from","from",1815293044),from,new cljs.core.Keyword(null,"size","size",1098693007),size], null));
};
var simple_table = function (index,type,filter_spec,bounds,sort_spec,from,size,var_args){
var p__29910 = null;if (arguments.length > 7) {
  p__29910 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 7),0);} 
return simple_table__delegate.call(this,index,type,filter_spec,bounds,sort_spec,from,size,p__29910);};
simple_table.cljs$lang$maxFixedArity = 7;
simple_table.cljs$lang$applyTo = (function (arglist__29913){
var index = cljs.core.first(arglist__29913);
arglist__29913 = cljs.core.next(arglist__29913);
var type = cljs.core.first(arglist__29913);
arglist__29913 = cljs.core.next(arglist__29913);
var filter_spec = cljs.core.first(arglist__29913);
arglist__29913 = cljs.core.next(arglist__29913);
var bounds = cljs.core.first(arglist__29913);
arglist__29913 = cljs.core.next(arglist__29913);
var sort_spec = cljs.core.first(arglist__29913);
arglist__29913 = cljs.core.next(arglist__29913);
var from = cljs.core.first(arglist__29913);
arglist__29913 = cljs.core.next(arglist__29913);
var size = cljs.core.first(arglist__29913);
var p__29910 = cljs.core.rest(arglist__29913);
return simple_table__delegate(index,type,filter_spec,bounds,sort_spec,from,size,p__29910);
});
simple_table.cljs$core$IFn$_invoke$arity$variadic = simple_table__delegate;
return simple_table;
})()
;
clustermap.api.timeline = (function timeline(index,type,filter_spec,bounds,time_variable,after,before,interval,metric_variables){return clustermap.api.POST.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/timeline/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(index)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),filter_spec,new cljs.core.Keyword(null,"bounds","bounds",1691609455),bounds,new cljs.core.Keyword(null,"time-variable","time-variable",-1643449307),time_variable,new cljs.core.Keyword(null,"after","after",594996914),after,new cljs.core.Keyword(null,"before","before",-1633692388),before,new cljs.core.Keyword(null,"interval","interval",1708495417),interval,new cljs.core.Keyword(null,"metric-variables","metric-variables",-1123283594),metric_variables], null));
});
