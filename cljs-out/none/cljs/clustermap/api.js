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
var AJAX__delegate = function (url,p__47866){var map__47870 = p__47866;var map__47870__$1 = ((cljs.core.seq_QMARK_.call(null,map__47870))?cljs.core.apply.call(null,cljs.core.hash_map,map__47870):map__47870);var opts = map__47870__$1;var content = cljs.core.get.call(null,map__47870__$1,new cljs.core.Keyword(null,"content","content",15833224));var method = cljs.core.get.call(null,map__47870__$1,new cljs.core.Keyword(null,"method","method",55703592));var raw = cljs.core.get.call(null,map__47870__$1,new cljs.core.Keyword(null,"raw","raw",1604651272));var comm = cljs.core.async.chan.call(null,(1));goog.net.XhrIo.send(url,((function (comm,map__47870,map__47870__$1,opts,content,method,raw){
return (function (event){cljs.core.async.put_BANG_.call(null,comm,((function (comm,map__47870,map__47870__$1,opts,content,method,raw){
return (function (d){if(cljs.core.truth_(raw))
{return d;
} else
{return cljs.core.js__GT_clj.call(null,d,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true);
}
});})(comm,map__47870,map__47870__$1,opts,content,method,raw))
.call(null,(JSON.parse(event.target.getResponseText())["data"])));
return cljs.core.async.close_BANG_.call(null,comm);
});})(comm,map__47870,map__47870__$1,opts,content,method,raw))
,(function (){var or__3543__auto__ = (function (){var G__47872 = method;var G__47872__$1 = (((G__47872 == null))?null:cljs.core.name.call(null,G__47872));var G__47872__$2 = (((G__47872__$1 == null))?null:clojure.string.upper_case.call(null,G__47872__$1));return G__47872__$2;
})();if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return "GET";
}
})(),(cljs.core.truth_(content)?JSON.stringify(cljs.core.clj__GT_js.call(null,content)):null),(cljs.core.truth_(content)?cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, ["Content-Type","application/json"], null)):null));
return comm;
};
var AJAX = function (url,var_args){
var p__47866 = null;if (arguments.length > 1) {
  p__47866 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return AJAX__delegate.call(this,url,p__47866);};
AJAX.cljs$lang$maxFixedArity = 1;
AJAX.cljs$lang$applyTo = (function (arglist__47873){
var url = cljs.core.first(arglist__47873);
var p__47866 = cljs.core.rest(arglist__47873);
return AJAX__delegate(url,p__47866);
});
AJAX.cljs$core$IFn$_invoke$arity$variadic = AJAX__delegate;
return AJAX;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.GET = (function() { 
var GET__delegate = function (url,p__47874){var map__47876 = p__47874;var map__47876__$1 = ((cljs.core.seq_QMARK_.call(null,map__47876))?cljs.core.apply.call(null,cljs.core.hash_map,map__47876):map__47876);var opts = map__47876__$1;return cljs.core.apply.call(null,clustermap.api.AJAX,url,cljs.core.apply.call(null,cljs.core.concat,cljs.core.merge.call(null,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"method","method",55703592),"GET"], null))));
};
var GET = function (url,var_args){
var p__47874 = null;if (arguments.length > 1) {
  p__47874 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return GET__delegate.call(this,url,p__47874);};
GET.cljs$lang$maxFixedArity = 1;
GET.cljs$lang$applyTo = (function (arglist__47877){
var url = cljs.core.first(arglist__47877);
var p__47874 = cljs.core.rest(arglist__47877);
return GET__delegate(url,p__47874);
});
GET.cljs$core$IFn$_invoke$arity$variadic = GET__delegate;
return GET;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.POST = (function() { 
var POST__delegate = function (url,content,p__47878){var map__47880 = p__47878;var map__47880__$1 = ((cljs.core.seq_QMARK_.call(null,map__47880))?cljs.core.apply.call(null,cljs.core.hash_map,map__47880):map__47880);var opts = map__47880__$1;return cljs.core.apply.call(null,clustermap.api.AJAX,url,cljs.core.apply.call(null,cljs.core.concat,cljs.core.merge.call(null,opts,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"content","content",15833224),content], null))));
};
var POST = function (url,content,var_args){
var p__47878 = null;if (arguments.length > 2) {
  p__47878 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return POST__delegate.call(this,url,content,p__47878);};
POST.cljs$lang$maxFixedArity = 2;
POST.cljs$lang$applyTo = (function (arglist__47881){
var url = cljs.core.first(arglist__47881);
arglist__47881 = cljs.core.next(arglist__47881);
var content = cljs.core.first(arglist__47881);
var p__47878 = cljs.core.rest(arglist__47881);
return POST__delegate(url,content,p__47878);
});
POST.cljs$core$IFn$_invoke$arity$variadic = POST__delegate;
return POST;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.PUT = (function() { 
var PUT__delegate = function (url,content,p__47882){var map__47884 = p__47882;var map__47884__$1 = ((cljs.core.seq_QMARK_.call(null,map__47884))?cljs.core.apply.call(null,cljs.core.hash_map,map__47884):map__47884);var opts = map__47884__$1;return cljs.core.apply.call(null,clustermap.api.AJAX,url,cljs.core.apply.call(null,cljs.core.concat,cljs.core.merge.call(null,opts,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"PUT",new cljs.core.Keyword(null,"content","content",15833224),content], null))));
};
var PUT = function (url,content,var_args){
var p__47882 = null;if (arguments.length > 2) {
  p__47882 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return PUT__delegate.call(this,url,content,p__47882);};
PUT.cljs$lang$maxFixedArity = 2;
PUT.cljs$lang$applyTo = (function (arglist__47885){
var url = cljs.core.first(arglist__47885);
arglist__47885 = cljs.core.next(arglist__47885);
var content = cljs.core.first(arglist__47885);
var p__47882 = cljs.core.rest(arglist__47885);
return PUT__delegate(url,content,p__47882);
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
return (function (state_48018){var state_val_48019 = (state_48018[(1)]);if((state_val_48019 === (7)))
{var inst_47976 = (state_48018[(7)]);var inst_47975 = (state_48018[(2)]);var inst_47976__$1 = cljs.core.nth.call(null,inst_47975,(0),null);var inst_47977 = cljs.core.nth.call(null,inst_47975,(1),null);var inst_47978 = cljs.core.sequential_QMARK_.call(null,inst_47976__$1);var state_48018__$1 = (function (){var statearr_48020 = state_48018;(statearr_48020[(7)] = inst_47976__$1);
(statearr_48020[(8)] = inst_47977);
return statearr_48020;
})();if(inst_47978)
{var statearr_48021_48056 = state_48018__$1;(statearr_48021_48056[(1)] = (8));
} else
{var statearr_48022_48057 = state_48018__$1;(statearr_48022_48057[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_48019 === (20)))
{var inst_47976 = (state_48018[(7)]);var state_48018__$1 = state_48018;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48018__$1,(23),inst_47976);
} else
{if((state_val_48019 === (1)))
{var state_48018__$1 = state_48018;var statearr_48023_48058 = state_48018__$1;(statearr_48023_48058[(2)] = null);
(statearr_48023_48058[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_48019 === (4)))
{var state_48018__$1 = state_48018;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48018__$1,(7),ocomm);
} else
{if((state_val_48019 === (15)))
{var inst_47998 = (state_48018[(2)]);var state_48018__$1 = state_48018;var statearr_48024_48059 = state_48018__$1;(statearr_48024_48059[(2)] = inst_47998);
(statearr_48024_48059[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_48019 === (21)))
{var state_48018__$1 = state_48018;var statearr_48025_48060 = state_48018__$1;(statearr_48025_48060[(2)] = null);
(statearr_48025_48060[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_48019 === (13)))
{var inst_47981 = (state_48018[(9)]);var state_48018__$1 = state_48018;var statearr_48026_48061 = state_48018__$1;(statearr_48026_48061[(2)] = inst_47981);
(statearr_48026_48061[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_48019 === (22)))
{var inst_48007 = (state_48018[(2)]);var state_48018__$1 = state_48018;var statearr_48027_48062 = state_48018__$1;(statearr_48027_48062[(2)] = inst_48007);
(statearr_48027_48062[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_48019 === (6)))
{var inst_48014 = (state_48018[(2)]);var state_48018__$1 = state_48018;var statearr_48028_48063 = state_48018__$1;(statearr_48028_48063[(2)] = inst_48014);
(statearr_48028_48063[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_48019 === (17)))
{var state_48018__$1 = state_48018;var statearr_48029_48064 = state_48018__$1;(statearr_48029_48064[(2)] = null);
(statearr_48029_48064[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_48019 === (3)))
{var inst_48016 = (state_48018[(2)]);var state_48018__$1 = state_48018;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48018__$1,inst_48016);
} else
{if((state_val_48019 === (12)))
{var inst_48000 = (state_48018[(2)]);var state_48018__$1 = state_48018;var statearr_48030_48065 = state_48018__$1;(statearr_48030_48065[(2)] = inst_48000);
(statearr_48030_48065[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_48019 === (2)))
{var state_48018__$1 = state_48018;if(true)
{var statearr_48031_48066 = state_48018__$1;(statearr_48031_48066[(1)] = (4));
} else
{var statearr_48032_48067 = state_48018__$1;(statearr_48032_48067[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_48019 === (23)))
{var inst_48004 = (state_48018[(2)]);var state_48018__$1 = state_48018;var statearr_48033_48068 = state_48018__$1;(statearr_48033_48068[(2)] = inst_48004);
(statearr_48033_48068[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_48019 === (19)))
{var inst_47991 = (state_48018[(2)]);var state_48018__$1 = state_48018;var statearr_48034_48069 = state_48018__$1;(statearr_48034_48069[(2)] = inst_47991);
(statearr_48034_48069[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_48019 === (11)))
{var inst_47980 = (state_48018[(10)]);var inst_47983 = cljs.core.empty_QMARK_.call(null,inst_47980);var state_48018__$1 = state_48018;if(inst_47983)
{var statearr_48035_48070 = state_48018__$1;(statearr_48035_48070[(1)] = (13));
} else
{var statearr_48036_48071 = state_48018__$1;(statearr_48036_48071[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_48019 === (9)))
{var inst_47976 = (state_48018[(7)]);var state_48018__$1 = state_48018;if(cljs.core.truth_(inst_47976))
{var statearr_48037_48072 = state_48018__$1;(statearr_48037_48072[(1)] = (20));
} else
{var statearr_48038_48073 = state_48018__$1;(statearr_48038_48073[(1)] = (21));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_48019 === (5)))
{var state_48018__$1 = state_48018;var statearr_48039_48074 = state_48018__$1;(statearr_48039_48074[(2)] = null);
(statearr_48039_48074[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_48019 === (14)))
{var inst_47980 = (state_48018[(10)]);var inst_47986 = cljs.core.rest.call(null,inst_47980);var inst_47987 = cljs.core.first.call(null,inst_47980);var state_48018__$1 = (function (){var statearr_48040 = state_48018;(statearr_48040[(11)] = inst_47986);
return statearr_48040;
})();if(cljs.core.truth_(inst_47987))
{var statearr_48041_48075 = state_48018__$1;(statearr_48041_48075[(1)] = (16));
} else
{var statearr_48042_48076 = state_48018__$1;(statearr_48042_48076[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_48019 === (16)))
{var inst_47980 = (state_48018[(10)]);var inst_47989 = cljs.core.first.call(null,inst_47980);var state_48018__$1 = state_48018;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48018__$1,(19),inst_47989);
} else
{if((state_val_48019 === (10)))
{var inst_47977 = (state_48018[(8)]);var inst_48009 = (state_48018[(2)]);var inst_48010 = cljs.core.apply.call(null,handler,inst_48009,inst_47977);var state_48018__$1 = (function (){var statearr_48043 = state_48018;(statearr_48043[(12)] = inst_48010);
return statearr_48043;
})();var statearr_48044_48077 = state_48018__$1;(statearr_48044_48077[(2)] = null);
(statearr_48044_48077[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_48019 === (18)))
{var inst_47981 = (state_48018[(9)]);var inst_47986 = (state_48018[(11)]);var inst_47994 = (state_48018[(2)]);var inst_47995 = cljs.core.conj.call(null,inst_47981,inst_47994);var inst_47980 = inst_47986;var inst_47981__$1 = inst_47995;var state_48018__$1 = (function (){var statearr_48045 = state_48018;(statearr_48045[(9)] = inst_47981__$1);
(statearr_48045[(10)] = inst_47980);
return statearr_48045;
})();var statearr_48046_48078 = state_48018__$1;(statearr_48046_48078[(2)] = null);
(statearr_48046_48078[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_48019 === (8)))
{var inst_47976 = (state_48018[(7)]);var inst_47980 = inst_47976;var inst_47981 = cljs.core.PersistentVector.EMPTY;var state_48018__$1 = (function (){var statearr_48047 = state_48018;(statearr_48047[(9)] = inst_47981);
(statearr_48047[(10)] = inst_47980);
return statearr_48047;
})();var statearr_48048_48079 = state_48018__$1;(statearr_48048_48079[(2)] = null);
(statearr_48048_48079[(1)] = (11));
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
var state_machine__5679__auto____0 = (function (){var statearr_48052 = [null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_48052[(0)] = state_machine__5679__auto__);
(statearr_48052[(1)] = (1));
return statearr_48052;
});
var state_machine__5679__auto____1 = (function (state_48018){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_48018);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e48053){if((e48053 instanceof Object))
{var ex__5682__auto__ = e48053;var statearr_48054_48080 = state_48018;(statearr_48054_48080[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48018);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e48053;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__48081 = state_48018;
state_48018 = G__48081;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_48018){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_48018);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto__))
})();var state__5695__auto__ = (function (){var statearr_48055 = f__5694__auto__.call(null);(statearr_48055[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto__);
return statearr_48055;
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
var G__48084__delegate = function (req_args){var temp__4124__auto__ = cljs.core.apply.call(null,request_handler,req_args);if(cljs.core.truth_(temp__4124__auto__))
{var r = temp__4124__auto__;var rseq = ((cljs.core.sequential_QMARK_.call(null,r))?r:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [r], null));var vec__48083 = rseq;var rcomm = cljs.core.nth.call(null,vec__48083,(0),null);var result_handler_args = cljs.core.nthnext.call(null,vec__48083,(1));return cljs.core.async.put_BANG_.call(null,ocomm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rcomm,result_handler_args], null));
} else
{return null;
}
};
var G__48084 = function (var_args){
var req_args = null;if (arguments.length > 0) {
  req_args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__48084__delegate.call(this,req_args);};
G__48084.cljs$lang$maxFixedArity = 0;
G__48084.cljs$lang$applyTo = (function (arglist__48085){
var req_args = cljs.core.seq(arglist__48085);
return G__48084__delegate(req_args);
});
G__48084.cljs$core$IFn$_invoke$arity$variadic = G__48084__delegate;
return G__48084;
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
return (function (state_48103){var state_val_48104 = (state_48103[(1)]);if((state_val_48104 === (2)))
{var inst_48100 = (state_48103[(2)]);var inst_48101 = console.log(inst_48100);var state_48103__$1 = state_48103;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48103__$1,inst_48101);
} else
{if((state_val_48104 === (1)))
{var state_48103__$1 = state_48103;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48103__$1,(2),ch);
} else
{return null;
}
}
});})(c__5693__auto__,ch))
;return ((function (switch__5678__auto__,c__5693__auto__,ch){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_48108 = [null,null,null,null,null,null,null];(statearr_48108[(0)] = state_machine__5679__auto__);
(statearr_48108[(1)] = (1));
return statearr_48108;
});
var state_machine__5679__auto____1 = (function (state_48103){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_48103);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e48109){if((e48109 instanceof Object))
{var ex__5682__auto__ = e48109;var statearr_48110_48112 = state_48103;(statearr_48110_48112[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48103);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e48109;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__48113 = state_48103;
state_48103 = G__48113;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_48103){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_48103);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto__,ch))
})();var state__5695__auto__ = (function (){var statearr_48111 = f__5694__auto__.call(null);(statearr_48111[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto__);
return statearr_48111;
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
log_api.cljs$lang$applyTo = (function (arglist__48114){
var f = cljs.core.first(arglist__48114);
var args = cljs.core.rest(arglist__48114);
return log_api__delegate(f,args);
});
log_api.cljs$core$IFn$_invoke$arity$variadic = log_api__delegate;
return log_api;
})()
;
clustermap.api.map_json_params = (function map_json_params(m){return clojure.string.join.call(null,"&",cljs.core.map.call(null,(function (p__48117){var vec__48118 = p__48117;var k = cljs.core.nth.call(null,vec__48118,(0),null);var v = cljs.core.nth.call(null,vec__48118,(1),null);return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,k))+"="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(JSON.stringify(cljs.core.clj__GT_js.call(null,v))));
}),m));
});
/**
* put the results of an api call into an atom... makes ad-hoc api calls easy
*/
clustermap.api.fetch = (function fetch(comm){var r = cljs.core.atom.call(null,null);var c__5693__auto___48145 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5693__auto___48145,r){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto___48145,r){
return (function (state_48136){var state_val_48137 = (state_48136[(1)]);if((state_val_48137 === (2)))
{var inst_48133 = (state_48136[(2)]);var inst_48134 = cljs.core.reset_BANG_.call(null,r,inst_48133);var state_48136__$1 = state_48136;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48136__$1,inst_48134);
} else
{if((state_val_48137 === (1)))
{var state_48136__$1 = state_48136;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48136__$1,(2),comm);
} else
{return null;
}
}
});})(c__5693__auto___48145,r))
;return ((function (switch__5678__auto__,c__5693__auto___48145,r){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_48141 = [null,null,null,null,null,null,null];(statearr_48141[(0)] = state_machine__5679__auto__);
(statearr_48141[(1)] = (1));
return statearr_48141;
});
var state_machine__5679__auto____1 = (function (state_48136){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_48136);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e48142){if((e48142 instanceof Object))
{var ex__5682__auto__ = e48142;var statearr_48143_48146 = state_48136;(statearr_48143_48146[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48136);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e48142;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__48147 = state_48136;
state_48136 = G__48147;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_48136){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_48136);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto___48145,r))
})();var state__5695__auto__ = (function (){var statearr_48144 = f__5694__auto__.call(null);(statearr_48144[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto___48145);
return statearr_48144;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5695__auto__);
});})(c__5693__auto___48145,r))
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
boundarylines.cljs$lang$applyTo = (function (arglist__48148){
var id = cljs.core.first(arglist__48148);
arglist__48148 = cljs.core.next(arglist__48148);
var tolerance = cljs.core.first(arglist__48148);
var opts = cljs.core.rest(arglist__48148);
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
boundaryline_collection_index.cljs$lang$applyTo = (function (arglist__48149){
var id = cljs.core.first(arglist__48149);
var opts = cljs.core.rest(arglist__48149);
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
boundaryline_set.cljs$lang$applyTo = (function (arglist__48150){
var ids = cljs.core.first(arglist__48150);
arglist__48150 = cljs.core.next(arglist__48150);
var tolerance = cljs.core.first(arglist__48150);
var opts = cljs.core.rest(arglist__48150);
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
boundaryline_collection_view.cljs$lang$applyTo = (function (arglist__48151){
var collection_id = cljs.core.first(arglist__48151);
arglist__48151 = cljs.core.next(arglist__48151);
var tolerance = cljs.core.first(arglist__48151);
arglist__48151 = cljs.core.next(arglist__48151);
var bounds = cljs.core.first(arglist__48151);
var opts = cljs.core.rest(arglist__48151);
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
var boundaryline_aggregation__delegate = function (index,type,blcoll,attr,filter,bounds,p__48152){var vec__48154 = p__48152;var type_ids = cljs.core.nth.call(null,vec__48154,(0),null);return clustermap.api.POST.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/boundaryline-agg/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(index)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(blcoll)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(attr)+"?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids))),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"filter","filter",-948537934),filter,new cljs.core.Keyword(null,"bounds","bounds",1691609455),bounds], null));
};
var boundaryline_aggregation = function (index,type,blcoll,attr,filter,bounds,var_args){
var p__48152 = null;if (arguments.length > 6) {
  p__48152 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 6),0);} 
return boundaryline_aggregation__delegate.call(this,index,type,blcoll,attr,filter,bounds,p__48152);};
boundaryline_aggregation.cljs$lang$maxFixedArity = 6;
boundaryline_aggregation.cljs$lang$applyTo = (function (arglist__48155){
var index = cljs.core.first(arglist__48155);
arglist__48155 = cljs.core.next(arglist__48155);
var type = cljs.core.first(arglist__48155);
arglist__48155 = cljs.core.next(arglist__48155);
var blcoll = cljs.core.first(arglist__48155);
arglist__48155 = cljs.core.next(arglist__48155);
var attr = cljs.core.first(arglist__48155);
arglist__48155 = cljs.core.next(arglist__48155);
var filter = cljs.core.first(arglist__48155);
arglist__48155 = cljs.core.next(arglist__48155);
var bounds = cljs.core.first(arglist__48155);
var p__48152 = cljs.core.rest(arglist__48155);
return boundaryline_aggregation__delegate(index,type,blcoll,attr,filter,bounds,p__48152);
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
var portfolio_company_sites__delegate = function (p__48156){var vec__48158 = p__48156;var type_ids = cljs.core.nth.call(null,vec__48158,(0),null);var type_ids__$1 = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"size","size",1098693007),(100),new cljs.core.Keyword(null,"sort","sort",953465918),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"!latest_turnover","!latest_turnover",-1853433972),"desc"], null)], null)], null),type_ids);return clustermap.api.GET.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/portfolio-company-sites?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids__$1))));
};
var portfolio_company_sites = function (var_args){
var p__48156 = null;if (arguments.length > 0) {
  p__48156 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_sites__delegate.call(this,p__48156);};
portfolio_company_sites.cljs$lang$maxFixedArity = 0;
portfolio_company_sites.cljs$lang$applyTo = (function (arglist__48159){
var p__48156 = cljs.core.seq(arglist__48159);
return portfolio_company_sites__delegate(p__48156);
});
portfolio_company_sites.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_sites__delegate;
return portfolio_company_sites;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_sites_by_company = (function() { 
var portfolio_company_sites_by_company__delegate = function (p__48160){var vec__48162 = p__48160;var type_ids = cljs.core.nth.call(null,vec__48162,(0),null);var type_ids__$1 = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"size","size",1098693007),(100),new cljs.core.Keyword(null,"sort","sort",953465918),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"!latest_turnover","!latest_turnover",-1853433972),"desc"], null)], null)], null),type_ids);return clustermap.api.GET.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/portfolio-company-sites-by-company?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids__$1))));
};
var portfolio_company_sites_by_company = function (var_args){
var p__48160 = null;if (arguments.length > 0) {
  p__48160 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_sites_by_company__delegate.call(this,p__48160);};
portfolio_company_sites_by_company.cljs$lang$maxFixedArity = 0;
portfolio_company_sites_by_company.cljs$lang$applyTo = (function (arglist__48163){
var p__48160 = cljs.core.seq(arglist__48163);
return portfolio_company_sites_by_company__delegate(p__48160);
});
portfolio_company_sites_by_company.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_sites_by_company__delegate;
return portfolio_company_sites_by_company;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_locations = (function() { 
var portfolio_company_locations__delegate = function (p__48164){var vec__48166 = p__48164;var type_ids = cljs.core.nth.call(null,vec__48166,(0),null);return clustermap.api.GET.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/portfolio-company-locations?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids))));
};
var portfolio_company_locations = function (var_args){
var p__48164 = null;if (arguments.length > 0) {
  p__48164 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_locations__delegate.call(this,p__48164);};
portfolio_company_locations.cljs$lang$maxFixedArity = 0;
portfolio_company_locations.cljs$lang$applyTo = (function (arglist__48167){
var p__48164 = cljs.core.seq(arglist__48167);
return portfolio_company_locations__delegate(p__48164);
});
portfolio_company_locations.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_locations__delegate;
return portfolio_company_locations;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_site_stats = (function() { 
var portfolio_company_site_stats__delegate = function (p__48168){var vec__48170 = p__48168;var type_ids = cljs.core.nth.call(null,vec__48170,(0),null);return clustermap.api.GET.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/portfolio-company-site-stats?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids))));
};
var portfolio_company_site_stats = function (var_args){
var p__48168 = null;if (arguments.length > 0) {
  p__48168 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_site_stats__delegate.call(this,p__48168);};
portfolio_company_site_stats.cljs$lang$maxFixedArity = 0;
portfolio_company_site_stats.cljs$lang$applyTo = (function (arglist__48171){
var p__48168 = cljs.core.seq(arglist__48171);
return portfolio_company_site_stats__delegate(p__48168);
});
portfolio_company_site_stats.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_site_stats__delegate;
return portfolio_company_site_stats;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_site_account_timelines = (function() { 
var portfolio_company_site_account_timelines__delegate = function (p__48172){var vec__48174 = p__48172;var type_ids = cljs.core.nth.call(null,vec__48174,(0),null);return clustermap.api.GET.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/portfolio-company-site-account-timelines?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids))));
};
var portfolio_company_site_account_timelines = function (var_args){
var p__48172 = null;if (arguments.length > 0) {
  p__48172 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_site_account_timelines__delegate.call(this,p__48172);};
portfolio_company_site_account_timelines.cljs$lang$maxFixedArity = 0;
portfolio_company_site_account_timelines.cljs$lang$applyTo = (function (arglist__48175){
var p__48172 = cljs.core.seq(arglist__48175);
return portfolio_company_site_account_timelines__delegate(p__48172);
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
var investment_account_timelines__delegate = function (p__48176){var vec__48178 = p__48176;var type_ids = cljs.core.nth.call(null,vec__48178,(0),null);return clustermap.api.GET.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/investment-account-timelines?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids))));
};
var investment_account_timelines = function (var_args){
var p__48176 = null;if (arguments.length > 0) {
  p__48176 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return investment_account_timelines__delegate.call(this,p__48176);};
investment_account_timelines.cljs$lang$maxFixedArity = 0;
investment_account_timelines.cljs$lang$applyTo = (function (arglist__48179){
var p__48176 = cljs.core.seq(arglist__48179);
return investment_account_timelines__delegate(p__48176);
});
investment_account_timelines.cljs$core$IFn$_invoke$arity$variadic = investment_account_timelines__delegate;
return investment_account_timelines;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.investment_stats = (function() { 
var investment_stats__delegate = function (p__48180){var vec__48182 = p__48180;var type_ids = cljs.core.nth.call(null,vec__48182,(0),null);return clustermap.api.GET.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/investment-stats?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids))));
};
var investment_stats = function (var_args){
var p__48180 = null;if (arguments.length > 0) {
  p__48180 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return investment_stats__delegate.call(this,p__48180);};
investment_stats.cljs$lang$maxFixedArity = 0;
investment_stats.cljs$lang$applyTo = (function (arglist__48183){
var p__48180 = cljs.core.seq(arglist__48183);
return investment_stats__delegate(p__48180);
});
investment_stats.cljs$core$IFn$_invoke$arity$variadic = investment_stats__delegate;
return investment_stats;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.investment_aggs = (function() { 
var investment_aggs__delegate = function (p__48184){var vec__48186 = p__48184;var type_ids = cljs.core.nth.call(null,vec__48186,(0),null);var type_ids__$1 = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"size","size",1098693007),(50),new cljs.core.Keyword(null,"order","order",-1254677256),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"latest_turnover","latest_turnover",-1335568590),"desc"], null)], null),type_ids);return clustermap.api.GET.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/investment-aggs?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids__$1))));
};
var investment_aggs = function (var_args){
var p__48184 = null;if (arguments.length > 0) {
  p__48184 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return investment_aggs__delegate.call(this,p__48184);};
investment_aggs.cljs$lang$maxFixedArity = 0;
investment_aggs.cljs$lang$applyTo = (function (arglist__48187){
var p__48184 = cljs.core.seq(arglist__48187);
return investment_aggs__delegate(p__48184);
});
investment_aggs.cljs$core$IFn$_invoke$arity$variadic = investment_aggs__delegate;
return investment_aggs;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.investments = (function() { 
var investments__delegate = function (p__48188){var vec__48190 = p__48188;var type_ids = cljs.core.nth.call(null,vec__48190,(0),null);var type_ids__$1 = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"size","size",1098693007),(50),new cljs.core.Keyword(null,"order","order",-1254677256),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"?boundaryline_compact_name_na","?boundaryline_compact_name_na",35068819),"asc"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"?investor_company_name_na","?investor_company_name_na",2080546953),"asc"], null)], null)], null),type_ids);return clustermap.api.GET.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/investments?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids__$1))));
};
var investments = function (var_args){
var p__48188 = null;if (arguments.length > 0) {
  p__48188 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return investments__delegate.call(this,p__48188);};
investments.cljs$lang$maxFixedArity = 0;
investments.cljs$lang$applyTo = (function (arglist__48191){
var p__48188 = cljs.core.seq(arglist__48191);
return investments__delegate(p__48188);
});
investments.cljs$core$IFn$_invoke$arity$variadic = investments__delegate;
return investments;
})()
;

//# sourceMappingURL=api.js.map