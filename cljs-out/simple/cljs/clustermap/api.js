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
var AJAX__delegate = function (url,p__21913){var map__21917 = p__21913;var map__21917__$1 = ((cljs.core.seq_QMARK_.call(null,map__21917))?cljs.core.apply.call(null,cljs.core.hash_map,map__21917):map__21917);var content = cljs.core.get.call(null,map__21917__$1,new cljs.core.Keyword(null,"content","content",15833224));var method = cljs.core.get.call(null,map__21917__$1,new cljs.core.Keyword(null,"method","method",55703592));var raw = cljs.core.get.call(null,map__21917__$1,new cljs.core.Keyword(null,"raw","raw",1604651272));var comm = cljs.core.async.chan.call(null,(1));goog.net.XhrIo.send(url,((function (comm,map__21917,map__21917__$1,content,method,raw){
return (function (event){cljs.core.async.put_BANG_.call(null,comm,((function (comm,map__21917,map__21917__$1,content,method,raw){
return (function (d){if(cljs.core.truth_(raw))
{return d;
} else
{return cljs.core.js__GT_clj.call(null,d,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true);
}
});})(comm,map__21917,map__21917__$1,content,method,raw))
.call(null,(JSON.parse(event.target.getResponseText())["data"])));
return cljs.core.async.close_BANG_.call(null,comm);
});})(comm,map__21917,map__21917__$1,content,method,raw))
,(function (){var or__3543__auto__ = (function (){var G__21919 = method;var G__21919__$1 = (((G__21919 == null))?null:cljs.core.name.call(null,G__21919));var G__21919__$2 = (((G__21919__$1 == null))?null:clojure.string.upper_case.call(null,G__21919__$1));return G__21919__$2;
})();if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return "GET";
}
})(),(cljs.core.truth_(content)?JSON.stringify(cljs.core.clj__GT_js.call(null,content)):null),(cljs.core.truth_(content)?cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, ["Content-Type","application/json"], null)):null));
return comm;
};
var AJAX = function (url,var_args){
var p__21913 = null;if (arguments.length > 1) {
  p__21913 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return AJAX__delegate.call(this,url,p__21913);};
AJAX.cljs$lang$maxFixedArity = 1;
AJAX.cljs$lang$applyTo = (function (arglist__21920){
var url = cljs.core.first(arglist__21920);
var p__21913 = cljs.core.rest(arglist__21920);
return AJAX__delegate(url,p__21913);
});
AJAX.cljs$core$IFn$_invoke$arity$variadic = AJAX__delegate;
return AJAX;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.GET = (function() { 
var GET__delegate = function (url,p__21921){var map__21923 = p__21921;var map__21923__$1 = ((cljs.core.seq_QMARK_.call(null,map__21923))?cljs.core.apply.call(null,cljs.core.hash_map,map__21923):map__21923);var opts = map__21923__$1;return cljs.core.apply.call(null,clustermap.api.AJAX,url,cljs.core.apply.call(null,cljs.core.concat,cljs.core.merge.call(null,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"method","method",55703592),"GET"], null))));
};
var GET = function (url,var_args){
var p__21921 = null;if (arguments.length > 1) {
  p__21921 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return GET__delegate.call(this,url,p__21921);};
GET.cljs$lang$maxFixedArity = 1;
GET.cljs$lang$applyTo = (function (arglist__21924){
var url = cljs.core.first(arglist__21924);
var p__21921 = cljs.core.rest(arglist__21924);
return GET__delegate(url,p__21921);
});
GET.cljs$core$IFn$_invoke$arity$variadic = GET__delegate;
return GET;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.POST = (function() { 
var POST__delegate = function (url,content,p__21925){var map__21927 = p__21925;var map__21927__$1 = ((cljs.core.seq_QMARK_.call(null,map__21927))?cljs.core.apply.call(null,cljs.core.hash_map,map__21927):map__21927);var opts = map__21927__$1;return cljs.core.apply.call(null,clustermap.api.AJAX,url,cljs.core.apply.call(null,cljs.core.concat,cljs.core.merge.call(null,opts,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"content","content",15833224),content], null))));
};
var POST = function (url,content,var_args){
var p__21925 = null;if (arguments.length > 2) {
  p__21925 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return POST__delegate.call(this,url,content,p__21925);};
POST.cljs$lang$maxFixedArity = 2;
POST.cljs$lang$applyTo = (function (arglist__21928){
var url = cljs.core.first(arglist__21928);
arglist__21928 = cljs.core.next(arglist__21928);
var content = cljs.core.first(arglist__21928);
var p__21925 = cljs.core.rest(arglist__21928);
return POST__delegate(url,content,p__21925);
});
POST.cljs$core$IFn$_invoke$arity$variadic = POST__delegate;
return POST;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.PUT = (function() { 
var PUT__delegate = function (url,content,p__21929){var map__21931 = p__21929;var map__21931__$1 = ((cljs.core.seq_QMARK_.call(null,map__21931))?cljs.core.apply.call(null,cljs.core.hash_map,map__21931):map__21931);var opts = map__21931__$1;return cljs.core.apply.call(null,clustermap.api.AJAX,url,cljs.core.apply.call(null,cljs.core.concat,cljs.core.merge.call(null,opts,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"PUT",new cljs.core.Keyword(null,"content","content",15833224),content], null))));
};
var PUT = function (url,content,var_args){
var p__21929 = null;if (arguments.length > 2) {
  p__21929 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return PUT__delegate.call(this,url,content,p__21929);};
PUT.cljs$lang$maxFixedArity = 2;
PUT.cljs$lang$applyTo = (function (arglist__21932){
var url = cljs.core.first(arglist__21932);
arglist__21932 = cljs.core.next(arglist__21932);
var content = cljs.core.first(arglist__21932);
var p__21929 = cljs.core.rest(arglist__21932);
return PUT__delegate(url,content,p__21929);
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
return (function (state_22065){var state_val_22066 = (state_22065[(1)]);if((state_val_22066 === (7)))
{var inst_22023 = (state_22065[(7)]);var inst_22022 = (state_22065[(2)]);var inst_22023__$1 = cljs.core.nth.call(null,inst_22022,(0),null);var inst_22024 = cljs.core.nth.call(null,inst_22022,(1),null);var inst_22025 = cljs.core.sequential_QMARK_.call(null,inst_22023__$1);var state_22065__$1 = (function (){var statearr_22067 = state_22065;(statearr_22067[(7)] = inst_22023__$1);
(statearr_22067[(8)] = inst_22024);
return statearr_22067;
})();if(inst_22025)
{var statearr_22068_22103 = state_22065__$1;(statearr_22068_22103[(1)] = (8));
} else
{var statearr_22069_22104 = state_22065__$1;(statearr_22069_22104[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22066 === (20)))
{var inst_22023 = (state_22065[(7)]);var state_22065__$1 = state_22065;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22065__$1,(23),inst_22023);
} else
{if((state_val_22066 === (1)))
{var state_22065__$1 = state_22065;var statearr_22070_22105 = state_22065__$1;(statearr_22070_22105[(2)] = null);
(statearr_22070_22105[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22066 === (4)))
{var state_22065__$1 = state_22065;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22065__$1,(7),ocomm);
} else
{if((state_val_22066 === (15)))
{var inst_22045 = (state_22065[(2)]);var state_22065__$1 = state_22065;var statearr_22071_22106 = state_22065__$1;(statearr_22071_22106[(2)] = inst_22045);
(statearr_22071_22106[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22066 === (21)))
{var state_22065__$1 = state_22065;var statearr_22072_22107 = state_22065__$1;(statearr_22072_22107[(2)] = null);
(statearr_22072_22107[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22066 === (13)))
{var inst_22028 = (state_22065[(9)]);var state_22065__$1 = state_22065;var statearr_22073_22108 = state_22065__$1;(statearr_22073_22108[(2)] = inst_22028);
(statearr_22073_22108[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22066 === (22)))
{var inst_22054 = (state_22065[(2)]);var state_22065__$1 = state_22065;var statearr_22074_22109 = state_22065__$1;(statearr_22074_22109[(2)] = inst_22054);
(statearr_22074_22109[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22066 === (6)))
{var inst_22061 = (state_22065[(2)]);var state_22065__$1 = state_22065;var statearr_22075_22110 = state_22065__$1;(statearr_22075_22110[(2)] = inst_22061);
(statearr_22075_22110[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22066 === (17)))
{var state_22065__$1 = state_22065;var statearr_22076_22111 = state_22065__$1;(statearr_22076_22111[(2)] = null);
(statearr_22076_22111[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22066 === (3)))
{var inst_22063 = (state_22065[(2)]);var state_22065__$1 = state_22065;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22065__$1,inst_22063);
} else
{if((state_val_22066 === (12)))
{var inst_22047 = (state_22065[(2)]);var state_22065__$1 = state_22065;var statearr_22077_22112 = state_22065__$1;(statearr_22077_22112[(2)] = inst_22047);
(statearr_22077_22112[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22066 === (2)))
{var state_22065__$1 = state_22065;if(true)
{var statearr_22078_22113 = state_22065__$1;(statearr_22078_22113[(1)] = (4));
} else
{var statearr_22079_22114 = state_22065__$1;(statearr_22079_22114[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22066 === (23)))
{var inst_22051 = (state_22065[(2)]);var state_22065__$1 = state_22065;var statearr_22080_22115 = state_22065__$1;(statearr_22080_22115[(2)] = inst_22051);
(statearr_22080_22115[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22066 === (19)))
{var inst_22038 = (state_22065[(2)]);var state_22065__$1 = state_22065;var statearr_22081_22116 = state_22065__$1;(statearr_22081_22116[(2)] = inst_22038);
(statearr_22081_22116[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22066 === (11)))
{var inst_22027 = (state_22065[(10)]);var inst_22030 = cljs.core.empty_QMARK_.call(null,inst_22027);var state_22065__$1 = state_22065;if(inst_22030)
{var statearr_22082_22117 = state_22065__$1;(statearr_22082_22117[(1)] = (13));
} else
{var statearr_22083_22118 = state_22065__$1;(statearr_22083_22118[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22066 === (9)))
{var inst_22023 = (state_22065[(7)]);var state_22065__$1 = state_22065;if(cljs.core.truth_(inst_22023))
{var statearr_22084_22119 = state_22065__$1;(statearr_22084_22119[(1)] = (20));
} else
{var statearr_22085_22120 = state_22065__$1;(statearr_22085_22120[(1)] = (21));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22066 === (5)))
{var state_22065__$1 = state_22065;var statearr_22086_22121 = state_22065__$1;(statearr_22086_22121[(2)] = null);
(statearr_22086_22121[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22066 === (14)))
{var inst_22027 = (state_22065[(10)]);var inst_22033 = cljs.core.rest.call(null,inst_22027);var inst_22034 = cljs.core.first.call(null,inst_22027);var state_22065__$1 = (function (){var statearr_22087 = state_22065;(statearr_22087[(11)] = inst_22033);
return statearr_22087;
})();if(cljs.core.truth_(inst_22034))
{var statearr_22088_22122 = state_22065__$1;(statearr_22088_22122[(1)] = (16));
} else
{var statearr_22089_22123 = state_22065__$1;(statearr_22089_22123[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22066 === (16)))
{var inst_22027 = (state_22065[(10)]);var inst_22036 = cljs.core.first.call(null,inst_22027);var state_22065__$1 = state_22065;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22065__$1,(19),inst_22036);
} else
{if((state_val_22066 === (10)))
{var inst_22024 = (state_22065[(8)]);var inst_22056 = (state_22065[(2)]);var inst_22057 = cljs.core.apply.call(null,handler,inst_22056,inst_22024);var state_22065__$1 = (function (){var statearr_22090 = state_22065;(statearr_22090[(12)] = inst_22057);
return statearr_22090;
})();var statearr_22091_22124 = state_22065__$1;(statearr_22091_22124[(2)] = null);
(statearr_22091_22124[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22066 === (18)))
{var inst_22028 = (state_22065[(9)]);var inst_22033 = (state_22065[(11)]);var inst_22041 = (state_22065[(2)]);var inst_22042 = cljs.core.conj.call(null,inst_22028,inst_22041);var inst_22027 = inst_22033;var inst_22028__$1 = inst_22042;var state_22065__$1 = (function (){var statearr_22092 = state_22065;(statearr_22092[(9)] = inst_22028__$1);
(statearr_22092[(10)] = inst_22027);
return statearr_22092;
})();var statearr_22093_22125 = state_22065__$1;(statearr_22093_22125[(2)] = null);
(statearr_22093_22125[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22066 === (8)))
{var inst_22023 = (state_22065[(7)]);var inst_22027 = inst_22023;var inst_22028 = cljs.core.PersistentVector.EMPTY;var state_22065__$1 = (function (){var statearr_22094 = state_22065;(statearr_22094[(9)] = inst_22028);
(statearr_22094[(10)] = inst_22027);
return statearr_22094;
})();var statearr_22095_22126 = state_22065__$1;(statearr_22095_22126[(2)] = null);
(statearr_22095_22126[(1)] = (11));
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
var state_machine__5679__auto____0 = (function (){var statearr_22099 = [null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_22099[(0)] = state_machine__5679__auto__);
(statearr_22099[(1)] = (1));
return statearr_22099;
});
var state_machine__5679__auto____1 = (function (state_22065){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_22065);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e22100){if((e22100 instanceof Object))
{var ex__5682__auto__ = e22100;var statearr_22101_22127 = state_22065;(statearr_22101_22127[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22065);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e22100;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__22128 = state_22065;
state_22065 = G__22128;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_22065){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_22065);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto__))
})();var state__5695__auto__ = (function (){var statearr_22102 = f__5694__auto__.call(null);(statearr_22102[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto__);
return statearr_22102;
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
var G__22131__delegate = function (req_args){var temp__4124__auto__ = cljs.core.apply.call(null,request_handler,req_args);if(cljs.core.truth_(temp__4124__auto__))
{var r = temp__4124__auto__;var rseq = ((cljs.core.sequential_QMARK_.call(null,r))?r:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [r], null));var vec__22130 = rseq;var rcomm = cljs.core.nth.call(null,vec__22130,(0),null);var result_handler_args = cljs.core.nthnext.call(null,vec__22130,(1));return cljs.core.async.put_BANG_.call(null,ocomm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rcomm,result_handler_args], null));
} else
{return null;
}
};
var G__22131 = function (var_args){
var req_args = null;if (arguments.length > 0) {
  req_args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__22131__delegate.call(this,req_args);};
G__22131.cljs$lang$maxFixedArity = 0;
G__22131.cljs$lang$applyTo = (function (arglist__22132){
var req_args = cljs.core.seq(arglist__22132);
return G__22131__delegate(req_args);
});
G__22131.cljs$core$IFn$_invoke$arity$variadic = G__22131__delegate;
return G__22131;
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
return (function (state_22150){var state_val_22151 = (state_22150[(1)]);if((state_val_22151 === (2)))
{var inst_22147 = (state_22150[(2)]);var inst_22148 = console.log(inst_22147);var state_22150__$1 = state_22150;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22150__$1,inst_22148);
} else
{if((state_val_22151 === (1)))
{var state_22150__$1 = state_22150;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22150__$1,(2),ch);
} else
{return null;
}
}
});})(c__5693__auto__,ch))
;return ((function (switch__5678__auto__,c__5693__auto__,ch){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_22155 = [null,null,null,null,null,null,null];(statearr_22155[(0)] = state_machine__5679__auto__);
(statearr_22155[(1)] = (1));
return statearr_22155;
});
var state_machine__5679__auto____1 = (function (state_22150){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_22150);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e22156){if((e22156 instanceof Object))
{var ex__5682__auto__ = e22156;var statearr_22157_22159 = state_22150;(statearr_22157_22159[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22150);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e22156;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__22160 = state_22150;
state_22150 = G__22160;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_22150){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_22150);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto__,ch))
})();var state__5695__auto__ = (function (){var statearr_22158 = f__5694__auto__.call(null);(statearr_22158[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto__);
return statearr_22158;
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
log_api.cljs$lang$applyTo = (function (arglist__22161){
var f = cljs.core.first(arglist__22161);
var args = cljs.core.rest(arglist__22161);
return log_api__delegate(f,args);
});
log_api.cljs$core$IFn$_invoke$arity$variadic = log_api__delegate;
return log_api;
})()
;
clustermap.api.map_json_params = (function map_json_params(m){return clojure.string.join.call(null,"&",cljs.core.map.call(null,(function (p__22164){var vec__22165 = p__22164;var k = cljs.core.nth.call(null,vec__22165,(0),null);var v = cljs.core.nth.call(null,vec__22165,(1),null);return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,k))+"="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(JSON.stringify(cljs.core.clj__GT_js.call(null,v))));
}),m));
});
/**
* put the results of an api call into an atom... makes ad-hoc api calls easy
*/
clustermap.api.fetch = (function fetch(comm){var r = cljs.core.atom.call(null,null);var c__5693__auto___22192 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5693__auto___22192,r){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto___22192,r){
return (function (state_22183){var state_val_22184 = (state_22183[(1)]);if((state_val_22184 === (2)))
{var inst_22180 = (state_22183[(2)]);var inst_22181 = cljs.core.reset_BANG_.call(null,r,inst_22180);var state_22183__$1 = state_22183;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22183__$1,inst_22181);
} else
{if((state_val_22184 === (1)))
{var state_22183__$1 = state_22183;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22183__$1,(2),comm);
} else
{return null;
}
}
});})(c__5693__auto___22192,r))
;return ((function (switch__5678__auto__,c__5693__auto___22192,r){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_22188 = [null,null,null,null,null,null,null];(statearr_22188[(0)] = state_machine__5679__auto__);
(statearr_22188[(1)] = (1));
return statearr_22188;
});
var state_machine__5679__auto____1 = (function (state_22183){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_22183);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e22189){if((e22189 instanceof Object))
{var ex__5682__auto__ = e22189;var statearr_22190_22193 = state_22183;(statearr_22190_22193[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22183);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e22189;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__22194 = state_22183;
state_22183 = G__22194;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_22183){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_22183);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto___22192,r))
})();var state__5695__auto__ = (function (){var statearr_22191 = f__5694__auto__.call(null);(statearr_22191[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto___22192);
return statearr_22191;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5695__auto__);
});})(c__5693__auto___22192,r))
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
boundarylines.cljs$lang$applyTo = (function (arglist__22195){
var id = cljs.core.first(arglist__22195);
arglist__22195 = cljs.core.next(arglist__22195);
var tolerance = cljs.core.first(arglist__22195);
var opts = cljs.core.rest(arglist__22195);
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
boundaryline_collection_index.cljs$lang$applyTo = (function (arglist__22196){
var id = cljs.core.first(arglist__22196);
var opts = cljs.core.rest(arglist__22196);
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
var boundaryline_aggregation__delegate = function (index,type,blcoll,attr,filter,p__22197){var vec__22199 = p__22197;var type_ids = cljs.core.nth.call(null,vec__22199,(0),null);return clustermap.api.POST.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/boundaryline-agg/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(index)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(blcoll)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(attr)+"?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids))),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"filter","filter",-948537934),filter], null));
};
var boundaryline_aggregation = function (index,type,blcoll,attr,filter,var_args){
var p__22197 = null;if (arguments.length > 5) {
  p__22197 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);} 
return boundaryline_aggregation__delegate.call(this,index,type,blcoll,attr,filter,p__22197);};
boundaryline_aggregation.cljs$lang$maxFixedArity = 5;
boundaryline_aggregation.cljs$lang$applyTo = (function (arglist__22200){
var index = cljs.core.first(arglist__22200);
arglist__22200 = cljs.core.next(arglist__22200);
var type = cljs.core.first(arglist__22200);
arglist__22200 = cljs.core.next(arglist__22200);
var blcoll = cljs.core.first(arglist__22200);
arglist__22200 = cljs.core.next(arglist__22200);
var attr = cljs.core.first(arglist__22200);
arglist__22200 = cljs.core.next(arglist__22200);
var filter = cljs.core.first(arglist__22200);
var p__22197 = cljs.core.rest(arglist__22200);
return boundaryline_aggregation__delegate(index,type,blcoll,attr,filter,p__22197);
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
var portfolio_company_sites__delegate = function (p__22201){var vec__22203 = p__22201;var type_ids = cljs.core.nth.call(null,vec__22203,(0),null);var type_ids__$1 = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"size","size",1098693007),(100),new cljs.core.Keyword(null,"sort","sort",953465918),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"!latest_turnover","!latest_turnover",-1853433972),"desc"], null)], null)], null),type_ids);return clustermap.api.GET.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/portfolio-company-sites?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids__$1))));
};
var portfolio_company_sites = function (var_args){
var p__22201 = null;if (arguments.length > 0) {
  p__22201 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_sites__delegate.call(this,p__22201);};
portfolio_company_sites.cljs$lang$maxFixedArity = 0;
portfolio_company_sites.cljs$lang$applyTo = (function (arglist__22204){
var p__22201 = cljs.core.seq(arglist__22204);
return portfolio_company_sites__delegate(p__22201);
});
portfolio_company_sites.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_sites__delegate;
return portfolio_company_sites;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_sites_by_company = (function() { 
var portfolio_company_sites_by_company__delegate = function (p__22205){var vec__22207 = p__22205;var type_ids = cljs.core.nth.call(null,vec__22207,(0),null);var type_ids__$1 = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"size","size",1098693007),(100),new cljs.core.Keyword(null,"sort","sort",953465918),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"!latest_turnover","!latest_turnover",-1853433972),"desc"], null)], null)], null),type_ids);return clustermap.api.GET.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/portfolio-company-sites-by-company?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids__$1))));
};
var portfolio_company_sites_by_company = function (var_args){
var p__22205 = null;if (arguments.length > 0) {
  p__22205 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_sites_by_company__delegate.call(this,p__22205);};
portfolio_company_sites_by_company.cljs$lang$maxFixedArity = 0;
portfolio_company_sites_by_company.cljs$lang$applyTo = (function (arglist__22208){
var p__22205 = cljs.core.seq(arglist__22208);
return portfolio_company_sites_by_company__delegate(p__22205);
});
portfolio_company_sites_by_company.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_sites_by_company__delegate;
return portfolio_company_sites_by_company;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_locations = (function() { 
var portfolio_company_locations__delegate = function (p__22209){var vec__22211 = p__22209;var type_ids = cljs.core.nth.call(null,vec__22211,(0),null);return clustermap.api.GET.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/portfolio-company-locations?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids))));
};
var portfolio_company_locations = function (var_args){
var p__22209 = null;if (arguments.length > 0) {
  p__22209 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_locations__delegate.call(this,p__22209);};
portfolio_company_locations.cljs$lang$maxFixedArity = 0;
portfolio_company_locations.cljs$lang$applyTo = (function (arglist__22212){
var p__22209 = cljs.core.seq(arglist__22212);
return portfolio_company_locations__delegate(p__22209);
});
portfolio_company_locations.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_locations__delegate;
return portfolio_company_locations;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_site_stats = (function() { 
var portfolio_company_site_stats__delegate = function (p__22213){var vec__22215 = p__22213;var type_ids = cljs.core.nth.call(null,vec__22215,(0),null);return clustermap.api.GET.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/portfolio-company-site-stats?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids))));
};
var portfolio_company_site_stats = function (var_args){
var p__22213 = null;if (arguments.length > 0) {
  p__22213 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_site_stats__delegate.call(this,p__22213);};
portfolio_company_site_stats.cljs$lang$maxFixedArity = 0;
portfolio_company_site_stats.cljs$lang$applyTo = (function (arglist__22216){
var p__22213 = cljs.core.seq(arglist__22216);
return portfolio_company_site_stats__delegate(p__22213);
});
portfolio_company_site_stats.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_site_stats__delegate;
return portfolio_company_site_stats;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_site_account_timelines = (function() { 
var portfolio_company_site_account_timelines__delegate = function (p__22217){var vec__22219 = p__22217;var type_ids = cljs.core.nth.call(null,vec__22219,(0),null);return clustermap.api.GET.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/portfolio-company-site-account-timelines?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids))));
};
var portfolio_company_site_account_timelines = function (var_args){
var p__22217 = null;if (arguments.length > 0) {
  p__22217 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_site_account_timelines__delegate.call(this,p__22217);};
portfolio_company_site_account_timelines.cljs$lang$maxFixedArity = 0;
portfolio_company_site_account_timelines.cljs$lang$applyTo = (function (arglist__22220){
var p__22217 = cljs.core.seq(arglist__22220);
return portfolio_company_site_account_timelines__delegate(p__22217);
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
var investment_account_timelines__delegate = function (p__22221){var vec__22223 = p__22221;var type_ids = cljs.core.nth.call(null,vec__22223,(0),null);return clustermap.api.GET.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/investment-account-timelines?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids))));
};
var investment_account_timelines = function (var_args){
var p__22221 = null;if (arguments.length > 0) {
  p__22221 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return investment_account_timelines__delegate.call(this,p__22221);};
investment_account_timelines.cljs$lang$maxFixedArity = 0;
investment_account_timelines.cljs$lang$applyTo = (function (arglist__22224){
var p__22221 = cljs.core.seq(arglist__22224);
return investment_account_timelines__delegate(p__22221);
});
investment_account_timelines.cljs$core$IFn$_invoke$arity$variadic = investment_account_timelines__delegate;
return investment_account_timelines;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.investment_stats = (function() { 
var investment_stats__delegate = function (p__22225){var vec__22227 = p__22225;var type_ids = cljs.core.nth.call(null,vec__22227,(0),null);return clustermap.api.GET.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/investment-stats?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids))));
};
var investment_stats = function (var_args){
var p__22225 = null;if (arguments.length > 0) {
  p__22225 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return investment_stats__delegate.call(this,p__22225);};
investment_stats.cljs$lang$maxFixedArity = 0;
investment_stats.cljs$lang$applyTo = (function (arglist__22228){
var p__22225 = cljs.core.seq(arglist__22228);
return investment_stats__delegate(p__22225);
});
investment_stats.cljs$core$IFn$_invoke$arity$variadic = investment_stats__delegate;
return investment_stats;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.investment_aggs = (function() { 
var investment_aggs__delegate = function (p__22229){var vec__22231 = p__22229;var type_ids = cljs.core.nth.call(null,vec__22231,(0),null);var type_ids__$1 = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"size","size",1098693007),(50),new cljs.core.Keyword(null,"order","order",-1254677256),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"latest_turnover","latest_turnover",-1335568590),"desc"], null)], null),type_ids);return clustermap.api.GET.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/investment-aggs?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids__$1))));
};
var investment_aggs = function (var_args){
var p__22229 = null;if (arguments.length > 0) {
  p__22229 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return investment_aggs__delegate.call(this,p__22229);};
investment_aggs.cljs$lang$maxFixedArity = 0;
investment_aggs.cljs$lang$applyTo = (function (arglist__22232){
var p__22229 = cljs.core.seq(arglist__22232);
return investment_aggs__delegate(p__22229);
});
investment_aggs.cljs$core$IFn$_invoke$arity$variadic = investment_aggs__delegate;
return investment_aggs;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.investments = (function() { 
var investments__delegate = function (p__22233){var vec__22235 = p__22233;var type_ids = cljs.core.nth.call(null,vec__22235,(0),null);var type_ids__$1 = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"size","size",1098693007),(50),new cljs.core.Keyword(null,"order","order",-1254677256),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"?boundaryline_compact_name_na","?boundaryline_compact_name_na",35068819),"asc"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"?investor_company_name_na","?investor_company_name_na",2080546953),"asc"], null)], null)], null),type_ids);return clustermap.api.GET.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/investments?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids__$1))));
};
var investments = function (var_args){
var p__22233 = null;if (arguments.length > 0) {
  p__22233 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return investments__delegate.call(this,p__22233);};
investments.cljs$lang$maxFixedArity = 0;
investments.cljs$lang$applyTo = (function (arglist__22236){
var p__22233 = cljs.core.seq(arglist__22236);
return investments__delegate(p__22233);
});
investments.cljs$core$IFn$_invoke$arity$variadic = investments__delegate;
return investments;
})()
;
