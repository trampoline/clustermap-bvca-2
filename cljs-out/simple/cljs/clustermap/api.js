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
var AJAX__delegate = function (url,p__21868){var map__21872 = p__21868;var map__21872__$1 = ((cljs.core.seq_QMARK_.call(null,map__21872))?cljs.core.apply.call(null,cljs.core.hash_map,map__21872):map__21872);var content = cljs.core.get.call(null,map__21872__$1,new cljs.core.Keyword(null,"content","content",15833224));var method = cljs.core.get.call(null,map__21872__$1,new cljs.core.Keyword(null,"method","method",55703592));var raw = cljs.core.get.call(null,map__21872__$1,new cljs.core.Keyword(null,"raw","raw",1604651272));var comm = cljs.core.async.chan.call(null,(1));goog.net.XhrIo.send(url,((function (comm,map__21872,map__21872__$1,content,method,raw){
return (function (event){cljs.core.async.put_BANG_.call(null,comm,((function (comm,map__21872,map__21872__$1,content,method,raw){
return (function (d){if(cljs.core.truth_(raw))
{return d;
} else
{return cljs.core.js__GT_clj.call(null,d,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true);
}
});})(comm,map__21872,map__21872__$1,content,method,raw))
.call(null,(JSON.parse(event.target.getResponseText())["data"])));
return cljs.core.async.close_BANG_.call(null,comm);
});})(comm,map__21872,map__21872__$1,content,method,raw))
,(function (){var or__3543__auto__ = (function (){var G__21874 = method;var G__21874__$1 = (((G__21874 == null))?null:cljs.core.name.call(null,G__21874));var G__21874__$2 = (((G__21874__$1 == null))?null:clojure.string.upper_case.call(null,G__21874__$1));return G__21874__$2;
})();if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return "GET";
}
})(),(cljs.core.truth_(content)?JSON.stringify(cljs.core.clj__GT_js.call(null,content)):null),(cljs.core.truth_(content)?cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, ["Content-Type","application/json"], null)):null));
return comm;
};
var AJAX = function (url,var_args){
var p__21868 = null;if (arguments.length > 1) {
  p__21868 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return AJAX__delegate.call(this,url,p__21868);};
AJAX.cljs$lang$maxFixedArity = 1;
AJAX.cljs$lang$applyTo = (function (arglist__21875){
var url = cljs.core.first(arglist__21875);
var p__21868 = cljs.core.rest(arglist__21875);
return AJAX__delegate(url,p__21868);
});
AJAX.cljs$core$IFn$_invoke$arity$variadic = AJAX__delegate;
return AJAX;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.GET = (function() { 
var GET__delegate = function (url,p__21876){var map__21878 = p__21876;var map__21878__$1 = ((cljs.core.seq_QMARK_.call(null,map__21878))?cljs.core.apply.call(null,cljs.core.hash_map,map__21878):map__21878);var opts = map__21878__$1;return cljs.core.apply.call(null,clustermap.api.AJAX,url,cljs.core.apply.call(null,cljs.core.concat,cljs.core.merge.call(null,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"method","method",55703592),"GET"], null))));
};
var GET = function (url,var_args){
var p__21876 = null;if (arguments.length > 1) {
  p__21876 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return GET__delegate.call(this,url,p__21876);};
GET.cljs$lang$maxFixedArity = 1;
GET.cljs$lang$applyTo = (function (arglist__21879){
var url = cljs.core.first(arglist__21879);
var p__21876 = cljs.core.rest(arglist__21879);
return GET__delegate(url,p__21876);
});
GET.cljs$core$IFn$_invoke$arity$variadic = GET__delegate;
return GET;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.POST = (function() { 
var POST__delegate = function (url,content,p__21880){var map__21882 = p__21880;var map__21882__$1 = ((cljs.core.seq_QMARK_.call(null,map__21882))?cljs.core.apply.call(null,cljs.core.hash_map,map__21882):map__21882);var opts = map__21882__$1;return cljs.core.apply.call(null,clustermap.api.AJAX,url,cljs.core.apply.call(null,cljs.core.concat,cljs.core.merge.call(null,opts,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"content","content",15833224),content], null))));
};
var POST = function (url,content,var_args){
var p__21880 = null;if (arguments.length > 2) {
  p__21880 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return POST__delegate.call(this,url,content,p__21880);};
POST.cljs$lang$maxFixedArity = 2;
POST.cljs$lang$applyTo = (function (arglist__21883){
var url = cljs.core.first(arglist__21883);
arglist__21883 = cljs.core.next(arglist__21883);
var content = cljs.core.first(arglist__21883);
var p__21880 = cljs.core.rest(arglist__21883);
return POST__delegate(url,content,p__21880);
});
POST.cljs$core$IFn$_invoke$arity$variadic = POST__delegate;
return POST;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.PUT = (function() { 
var PUT__delegate = function (url,content,p__21884){var map__21886 = p__21884;var map__21886__$1 = ((cljs.core.seq_QMARK_.call(null,map__21886))?cljs.core.apply.call(null,cljs.core.hash_map,map__21886):map__21886);var opts = map__21886__$1;return cljs.core.apply.call(null,clustermap.api.AJAX,url,cljs.core.apply.call(null,cljs.core.concat,cljs.core.merge.call(null,opts,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"PUT",new cljs.core.Keyword(null,"content","content",15833224),content], null))));
};
var PUT = function (url,content,var_args){
var p__21884 = null;if (arguments.length > 2) {
  p__21884 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return PUT__delegate.call(this,url,content,p__21884);};
PUT.cljs$lang$maxFixedArity = 2;
PUT.cljs$lang$applyTo = (function (arglist__21887){
var url = cljs.core.first(arglist__21887);
arglist__21887 = cljs.core.next(arglist__21887);
var content = cljs.core.first(arglist__21887);
var p__21884 = cljs.core.rest(arglist__21887);
return PUT__delegate(url,content,p__21884);
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
return (function (state_22020){var state_val_22021 = (state_22020[(1)]);if((state_val_22021 === (7)))
{var inst_21978 = (state_22020[(7)]);var inst_21977 = (state_22020[(2)]);var inst_21978__$1 = cljs.core.nth.call(null,inst_21977,(0),null);var inst_21979 = cljs.core.nth.call(null,inst_21977,(1),null);var inst_21980 = cljs.core.sequential_QMARK_.call(null,inst_21978__$1);var state_22020__$1 = (function (){var statearr_22022 = state_22020;(statearr_22022[(8)] = inst_21979);
(statearr_22022[(7)] = inst_21978__$1);
return statearr_22022;
})();if(inst_21980)
{var statearr_22023_22058 = state_22020__$1;(statearr_22023_22058[(1)] = (8));
} else
{var statearr_22024_22059 = state_22020__$1;(statearr_22024_22059[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22021 === (20)))
{var inst_21978 = (state_22020[(7)]);var state_22020__$1 = state_22020;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22020__$1,(23),inst_21978);
} else
{if((state_val_22021 === (1)))
{var state_22020__$1 = state_22020;var statearr_22025_22060 = state_22020__$1;(statearr_22025_22060[(2)] = null);
(statearr_22025_22060[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22021 === (4)))
{var state_22020__$1 = state_22020;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22020__$1,(7),ocomm);
} else
{if((state_val_22021 === (15)))
{var inst_22000 = (state_22020[(2)]);var state_22020__$1 = state_22020;var statearr_22026_22061 = state_22020__$1;(statearr_22026_22061[(2)] = inst_22000);
(statearr_22026_22061[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22021 === (21)))
{var state_22020__$1 = state_22020;var statearr_22027_22062 = state_22020__$1;(statearr_22027_22062[(2)] = null);
(statearr_22027_22062[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22021 === (13)))
{var inst_21983 = (state_22020[(9)]);var state_22020__$1 = state_22020;var statearr_22028_22063 = state_22020__$1;(statearr_22028_22063[(2)] = inst_21983);
(statearr_22028_22063[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22021 === (22)))
{var inst_22009 = (state_22020[(2)]);var state_22020__$1 = state_22020;var statearr_22029_22064 = state_22020__$1;(statearr_22029_22064[(2)] = inst_22009);
(statearr_22029_22064[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22021 === (6)))
{var inst_22016 = (state_22020[(2)]);var state_22020__$1 = state_22020;var statearr_22030_22065 = state_22020__$1;(statearr_22030_22065[(2)] = inst_22016);
(statearr_22030_22065[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22021 === (17)))
{var state_22020__$1 = state_22020;var statearr_22031_22066 = state_22020__$1;(statearr_22031_22066[(2)] = null);
(statearr_22031_22066[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22021 === (3)))
{var inst_22018 = (state_22020[(2)]);var state_22020__$1 = state_22020;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22020__$1,inst_22018);
} else
{if((state_val_22021 === (12)))
{var inst_22002 = (state_22020[(2)]);var state_22020__$1 = state_22020;var statearr_22032_22067 = state_22020__$1;(statearr_22032_22067[(2)] = inst_22002);
(statearr_22032_22067[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22021 === (2)))
{var state_22020__$1 = state_22020;if(true)
{var statearr_22033_22068 = state_22020__$1;(statearr_22033_22068[(1)] = (4));
} else
{var statearr_22034_22069 = state_22020__$1;(statearr_22034_22069[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22021 === (23)))
{var inst_22006 = (state_22020[(2)]);var state_22020__$1 = state_22020;var statearr_22035_22070 = state_22020__$1;(statearr_22035_22070[(2)] = inst_22006);
(statearr_22035_22070[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22021 === (19)))
{var inst_21993 = (state_22020[(2)]);var state_22020__$1 = state_22020;var statearr_22036_22071 = state_22020__$1;(statearr_22036_22071[(2)] = inst_21993);
(statearr_22036_22071[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22021 === (11)))
{var inst_21982 = (state_22020[(10)]);var inst_21985 = cljs.core.empty_QMARK_.call(null,inst_21982);var state_22020__$1 = state_22020;if(inst_21985)
{var statearr_22037_22072 = state_22020__$1;(statearr_22037_22072[(1)] = (13));
} else
{var statearr_22038_22073 = state_22020__$1;(statearr_22038_22073[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22021 === (9)))
{var inst_21978 = (state_22020[(7)]);var state_22020__$1 = state_22020;if(cljs.core.truth_(inst_21978))
{var statearr_22039_22074 = state_22020__$1;(statearr_22039_22074[(1)] = (20));
} else
{var statearr_22040_22075 = state_22020__$1;(statearr_22040_22075[(1)] = (21));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22021 === (5)))
{var state_22020__$1 = state_22020;var statearr_22041_22076 = state_22020__$1;(statearr_22041_22076[(2)] = null);
(statearr_22041_22076[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22021 === (14)))
{var inst_21982 = (state_22020[(10)]);var inst_21988 = cljs.core.rest.call(null,inst_21982);var inst_21989 = cljs.core.first.call(null,inst_21982);var state_22020__$1 = (function (){var statearr_22042 = state_22020;(statearr_22042[(11)] = inst_21988);
return statearr_22042;
})();if(cljs.core.truth_(inst_21989))
{var statearr_22043_22077 = state_22020__$1;(statearr_22043_22077[(1)] = (16));
} else
{var statearr_22044_22078 = state_22020__$1;(statearr_22044_22078[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22021 === (16)))
{var inst_21982 = (state_22020[(10)]);var inst_21991 = cljs.core.first.call(null,inst_21982);var state_22020__$1 = state_22020;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22020__$1,(19),inst_21991);
} else
{if((state_val_22021 === (10)))
{var inst_21979 = (state_22020[(8)]);var inst_22011 = (state_22020[(2)]);var inst_22012 = cljs.core.apply.call(null,handler,inst_22011,inst_21979);var state_22020__$1 = (function (){var statearr_22045 = state_22020;(statearr_22045[(12)] = inst_22012);
return statearr_22045;
})();var statearr_22046_22079 = state_22020__$1;(statearr_22046_22079[(2)] = null);
(statearr_22046_22079[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22021 === (18)))
{var inst_21983 = (state_22020[(9)]);var inst_21988 = (state_22020[(11)]);var inst_21996 = (state_22020[(2)]);var inst_21997 = cljs.core.conj.call(null,inst_21983,inst_21996);var inst_21982 = inst_21988;var inst_21983__$1 = inst_21997;var state_22020__$1 = (function (){var statearr_22047 = state_22020;(statearr_22047[(9)] = inst_21983__$1);
(statearr_22047[(10)] = inst_21982);
return statearr_22047;
})();var statearr_22048_22080 = state_22020__$1;(statearr_22048_22080[(2)] = null);
(statearr_22048_22080[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22021 === (8)))
{var inst_21978 = (state_22020[(7)]);var inst_21982 = inst_21978;var inst_21983 = cljs.core.PersistentVector.EMPTY;var state_22020__$1 = (function (){var statearr_22049 = state_22020;(statearr_22049[(9)] = inst_21983);
(statearr_22049[(10)] = inst_21982);
return statearr_22049;
})();var statearr_22050_22081 = state_22020__$1;(statearr_22050_22081[(2)] = null);
(statearr_22050_22081[(1)] = (11));
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
var state_machine__5679__auto____0 = (function (){var statearr_22054 = [null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_22054[(0)] = state_machine__5679__auto__);
(statearr_22054[(1)] = (1));
return statearr_22054;
});
var state_machine__5679__auto____1 = (function (state_22020){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_22020);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e22055){if((e22055 instanceof Object))
{var ex__5682__auto__ = e22055;var statearr_22056_22082 = state_22020;(statearr_22056_22082[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22020);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e22055;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__22083 = state_22020;
state_22020 = G__22083;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_22020){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_22020);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto__))
})();var state__5695__auto__ = (function (){var statearr_22057 = f__5694__auto__.call(null);(statearr_22057[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto__);
return statearr_22057;
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
var G__22086__delegate = function (req_args){var temp__4124__auto__ = cljs.core.apply.call(null,request_handler,req_args);if(cljs.core.truth_(temp__4124__auto__))
{var r = temp__4124__auto__;var rseq = ((cljs.core.sequential_QMARK_.call(null,r))?r:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [r], null));var vec__22085 = rseq;var rcomm = cljs.core.nth.call(null,vec__22085,(0),null);var result_handler_args = cljs.core.nthnext.call(null,vec__22085,(1));return cljs.core.async.put_BANG_.call(null,ocomm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rcomm,result_handler_args], null));
} else
{return null;
}
};
var G__22086 = function (var_args){
var req_args = null;if (arguments.length > 0) {
  req_args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__22086__delegate.call(this,req_args);};
G__22086.cljs$lang$maxFixedArity = 0;
G__22086.cljs$lang$applyTo = (function (arglist__22087){
var req_args = cljs.core.seq(arglist__22087);
return G__22086__delegate(req_args);
});
G__22086.cljs$core$IFn$_invoke$arity$variadic = G__22086__delegate;
return G__22086;
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
return (function (state_22105){var state_val_22106 = (state_22105[(1)]);if((state_val_22106 === (2)))
{var inst_22102 = (state_22105[(2)]);var inst_22103 = console.log(inst_22102);var state_22105__$1 = state_22105;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22105__$1,inst_22103);
} else
{if((state_val_22106 === (1)))
{var state_22105__$1 = state_22105;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22105__$1,(2),ch);
} else
{return null;
}
}
});})(c__5693__auto__,ch))
;return ((function (switch__5678__auto__,c__5693__auto__,ch){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_22110 = [null,null,null,null,null,null,null];(statearr_22110[(0)] = state_machine__5679__auto__);
(statearr_22110[(1)] = (1));
return statearr_22110;
});
var state_machine__5679__auto____1 = (function (state_22105){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_22105);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e22111){if((e22111 instanceof Object))
{var ex__5682__auto__ = e22111;var statearr_22112_22114 = state_22105;(statearr_22112_22114[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22105);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e22111;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__22115 = state_22105;
state_22105 = G__22115;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_22105){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_22105);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto__,ch))
})();var state__5695__auto__ = (function (){var statearr_22113 = f__5694__auto__.call(null);(statearr_22113[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto__);
return statearr_22113;
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
log_api.cljs$lang$applyTo = (function (arglist__22116){
var f = cljs.core.first(arglist__22116);
var args = cljs.core.rest(arglist__22116);
return log_api__delegate(f,args);
});
log_api.cljs$core$IFn$_invoke$arity$variadic = log_api__delegate;
return log_api;
})()
;
clustermap.api.map_json_params = (function map_json_params(m){return clojure.string.join.call(null,"&",cljs.core.map.call(null,(function (p__22119){var vec__22120 = p__22119;var k = cljs.core.nth.call(null,vec__22120,(0),null);var v = cljs.core.nth.call(null,vec__22120,(1),null);return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,k))+"="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(JSON.stringify(cljs.core.clj__GT_js.call(null,v))));
}),m));
});
/**
* put the results of an api call into an atom... makes ad-hoc api calls easy
*/
clustermap.api.fetch = (function fetch(comm){var r = cljs.core.atom.call(null,null);var c__5693__auto___22147 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5693__auto___22147,r){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto___22147,r){
return (function (state_22138){var state_val_22139 = (state_22138[(1)]);if((state_val_22139 === (2)))
{var inst_22135 = (state_22138[(2)]);var inst_22136 = cljs.core.reset_BANG_.call(null,r,inst_22135);var state_22138__$1 = state_22138;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22138__$1,inst_22136);
} else
{if((state_val_22139 === (1)))
{var state_22138__$1 = state_22138;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22138__$1,(2),comm);
} else
{return null;
}
}
});})(c__5693__auto___22147,r))
;return ((function (switch__5678__auto__,c__5693__auto___22147,r){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_22143 = [null,null,null,null,null,null,null];(statearr_22143[(0)] = state_machine__5679__auto__);
(statearr_22143[(1)] = (1));
return statearr_22143;
});
var state_machine__5679__auto____1 = (function (state_22138){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_22138);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e22144){if((e22144 instanceof Object))
{var ex__5682__auto__ = e22144;var statearr_22145_22148 = state_22138;(statearr_22145_22148[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22138);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e22144;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__22149 = state_22138;
state_22138 = G__22149;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_22138){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_22138);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto___22147,r))
})();var state__5695__auto__ = (function (){var statearr_22146 = f__5694__auto__.call(null);(statearr_22146[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto___22147);
return statearr_22146;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5695__auto__);
});})(c__5693__auto___22147,r))
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
boundarylines.cljs$lang$applyTo = (function (arglist__22150){
var id = cljs.core.first(arglist__22150);
arglist__22150 = cljs.core.next(arglist__22150);
var tolerance = cljs.core.first(arglist__22150);
var opts = cljs.core.rest(arglist__22150);
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
boundaryline_collection_index.cljs$lang$applyTo = (function (arglist__22151){
var id = cljs.core.first(arglist__22151);
var opts = cljs.core.rest(arglist__22151);
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
var boundaryline_aggregation__delegate = function (index,type,blcoll,attr,filter,p__22152){var vec__22154 = p__22152;var type_ids = cljs.core.nth.call(null,vec__22154,(0),null);return clustermap.api.POST.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/boundaryline-agg/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(index)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(blcoll)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(attr)+"?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids))),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"filter","filter",-948537934),filter], null));
};
var boundaryline_aggregation = function (index,type,blcoll,attr,filter,var_args){
var p__22152 = null;if (arguments.length > 5) {
  p__22152 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);} 
return boundaryline_aggregation__delegate.call(this,index,type,blcoll,attr,filter,p__22152);};
boundaryline_aggregation.cljs$lang$maxFixedArity = 5;
boundaryline_aggregation.cljs$lang$applyTo = (function (arglist__22155){
var index = cljs.core.first(arglist__22155);
arglist__22155 = cljs.core.next(arglist__22155);
var type = cljs.core.first(arglist__22155);
arglist__22155 = cljs.core.next(arglist__22155);
var blcoll = cljs.core.first(arglist__22155);
arglist__22155 = cljs.core.next(arglist__22155);
var attr = cljs.core.first(arglist__22155);
arglist__22155 = cljs.core.next(arglist__22155);
var filter = cljs.core.first(arglist__22155);
var p__22152 = cljs.core.rest(arglist__22155);
return boundaryline_aggregation__delegate(index,type,blcoll,attr,filter,p__22152);
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
var portfolio_company_sites__delegate = function (p__22156){var vec__22158 = p__22156;var type_ids = cljs.core.nth.call(null,vec__22158,(0),null);var type_ids__$1 = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"size","size",1098693007),(100),new cljs.core.Keyword(null,"sort","sort",953465918),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"!latest_turnover","!latest_turnover",-1853433972),"desc"], null)], null)], null),type_ids);return clustermap.api.GET.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/portfolio-company-sites?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids__$1))));
};
var portfolio_company_sites = function (var_args){
var p__22156 = null;if (arguments.length > 0) {
  p__22156 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_sites__delegate.call(this,p__22156);};
portfolio_company_sites.cljs$lang$maxFixedArity = 0;
portfolio_company_sites.cljs$lang$applyTo = (function (arglist__22159){
var p__22156 = cljs.core.seq(arglist__22159);
return portfolio_company_sites__delegate(p__22156);
});
portfolio_company_sites.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_sites__delegate;
return portfolio_company_sites;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_sites_by_company = (function() { 
var portfolio_company_sites_by_company__delegate = function (p__22160){var vec__22162 = p__22160;var type_ids = cljs.core.nth.call(null,vec__22162,(0),null);var type_ids__$1 = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"size","size",1098693007),(100),new cljs.core.Keyword(null,"sort","sort",953465918),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"!latest_turnover","!latest_turnover",-1853433972),"desc"], null)], null)], null),type_ids);return clustermap.api.GET.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/portfolio-company-sites-by-company?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids__$1))));
};
var portfolio_company_sites_by_company = function (var_args){
var p__22160 = null;if (arguments.length > 0) {
  p__22160 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_sites_by_company__delegate.call(this,p__22160);};
portfolio_company_sites_by_company.cljs$lang$maxFixedArity = 0;
portfolio_company_sites_by_company.cljs$lang$applyTo = (function (arglist__22163){
var p__22160 = cljs.core.seq(arglist__22163);
return portfolio_company_sites_by_company__delegate(p__22160);
});
portfolio_company_sites_by_company.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_sites_by_company__delegate;
return portfolio_company_sites_by_company;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_locations = (function() { 
var portfolio_company_locations__delegate = function (p__22164){var vec__22166 = p__22164;var type_ids = cljs.core.nth.call(null,vec__22166,(0),null);return clustermap.api.GET.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/portfolio-company-locations?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids))));
};
var portfolio_company_locations = function (var_args){
var p__22164 = null;if (arguments.length > 0) {
  p__22164 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_locations__delegate.call(this,p__22164);};
portfolio_company_locations.cljs$lang$maxFixedArity = 0;
portfolio_company_locations.cljs$lang$applyTo = (function (arglist__22167){
var p__22164 = cljs.core.seq(arglist__22167);
return portfolio_company_locations__delegate(p__22164);
});
portfolio_company_locations.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_locations__delegate;
return portfolio_company_locations;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_site_stats = (function() { 
var portfolio_company_site_stats__delegate = function (p__22168){var vec__22170 = p__22168;var type_ids = cljs.core.nth.call(null,vec__22170,(0),null);return clustermap.api.GET.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/portfolio-company-site-stats?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids))));
};
var portfolio_company_site_stats = function (var_args){
var p__22168 = null;if (arguments.length > 0) {
  p__22168 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_site_stats__delegate.call(this,p__22168);};
portfolio_company_site_stats.cljs$lang$maxFixedArity = 0;
portfolio_company_site_stats.cljs$lang$applyTo = (function (arglist__22171){
var p__22168 = cljs.core.seq(arglist__22171);
return portfolio_company_site_stats__delegate(p__22168);
});
portfolio_company_site_stats.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_site_stats__delegate;
return portfolio_company_site_stats;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_site_account_timelines = (function() { 
var portfolio_company_site_account_timelines__delegate = function (p__22172){var vec__22174 = p__22172;var type_ids = cljs.core.nth.call(null,vec__22174,(0),null);return clustermap.api.GET.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/portfolio-company-site-account-timelines?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids))));
};
var portfolio_company_site_account_timelines = function (var_args){
var p__22172 = null;if (arguments.length > 0) {
  p__22172 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_site_account_timelines__delegate.call(this,p__22172);};
portfolio_company_site_account_timelines.cljs$lang$maxFixedArity = 0;
portfolio_company_site_account_timelines.cljs$lang$applyTo = (function (arglist__22175){
var p__22172 = cljs.core.seq(arglist__22175);
return portfolio_company_site_account_timelines__delegate(p__22172);
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
var investment_account_timelines__delegate = function (p__22176){var vec__22178 = p__22176;var type_ids = cljs.core.nth.call(null,vec__22178,(0),null);return clustermap.api.GET.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/investment-account-timelines?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids))));
};
var investment_account_timelines = function (var_args){
var p__22176 = null;if (arguments.length > 0) {
  p__22176 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return investment_account_timelines__delegate.call(this,p__22176);};
investment_account_timelines.cljs$lang$maxFixedArity = 0;
investment_account_timelines.cljs$lang$applyTo = (function (arglist__22179){
var p__22176 = cljs.core.seq(arglist__22179);
return investment_account_timelines__delegate(p__22176);
});
investment_account_timelines.cljs$core$IFn$_invoke$arity$variadic = investment_account_timelines__delegate;
return investment_account_timelines;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.investment_stats = (function() { 
var investment_stats__delegate = function (p__22180){var vec__22182 = p__22180;var type_ids = cljs.core.nth.call(null,vec__22182,(0),null);return clustermap.api.GET.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/investment-stats?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids))));
};
var investment_stats = function (var_args){
var p__22180 = null;if (arguments.length > 0) {
  p__22180 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return investment_stats__delegate.call(this,p__22180);};
investment_stats.cljs$lang$maxFixedArity = 0;
investment_stats.cljs$lang$applyTo = (function (arglist__22183){
var p__22180 = cljs.core.seq(arglist__22183);
return investment_stats__delegate(p__22180);
});
investment_stats.cljs$core$IFn$_invoke$arity$variadic = investment_stats__delegate;
return investment_stats;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.investment_aggs = (function() { 
var investment_aggs__delegate = function (p__22184){var vec__22186 = p__22184;var type_ids = cljs.core.nth.call(null,vec__22186,(0),null);var type_ids__$1 = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"size","size",1098693007),(50),new cljs.core.Keyword(null,"order","order",-1254677256),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"latest_turnover","latest_turnover",-1335568590),"desc"], null)], null),type_ids);return clustermap.api.GET.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/investment-aggs?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids__$1))));
};
var investment_aggs = function (var_args){
var p__22184 = null;if (arguments.length > 0) {
  p__22184 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return investment_aggs__delegate.call(this,p__22184);};
investment_aggs.cljs$lang$maxFixedArity = 0;
investment_aggs.cljs$lang$applyTo = (function (arglist__22187){
var p__22184 = cljs.core.seq(arglist__22187);
return investment_aggs__delegate(p__22184);
});
investment_aggs.cljs$core$IFn$_invoke$arity$variadic = investment_aggs__delegate;
return investment_aggs;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.investments = (function() { 
var investments__delegate = function (p__22188){var vec__22190 = p__22188;var type_ids = cljs.core.nth.call(null,vec__22190,(0),null);var type_ids__$1 = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"size","size",1098693007),(50),new cljs.core.Keyword(null,"order","order",-1254677256),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"?boundaryline_compact_name_na","?boundaryline_compact_name_na",35068819),"asc"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"?investor_company_name_na","?investor_company_name_na",2080546953),"asc"], null)], null)], null),type_ids);return clustermap.api.GET.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/investments?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids__$1))));
};
var investments = function (var_args){
var p__22188 = null;if (arguments.length > 0) {
  p__22188 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return investments__delegate.call(this,p__22188);};
investments.cljs$lang$maxFixedArity = 0;
investments.cljs$lang$applyTo = (function (arglist__22191){
var p__22188 = cljs.core.seq(arglist__22191);
return investments__delegate(p__22188);
});
investments.cljs$core$IFn$_invoke$arity$variadic = investments__delegate;
return investments;
})()
;
