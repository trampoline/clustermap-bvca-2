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
var AJAX__delegate = function (url,p__47851){var map__47855 = p__47851;var map__47855__$1 = ((cljs.core.seq_QMARK_.call(null,map__47855))?cljs.core.apply.call(null,cljs.core.hash_map,map__47855):map__47855);var opts = map__47855__$1;var content = cljs.core.get.call(null,map__47855__$1,new cljs.core.Keyword(null,"content","content",15833224));var method = cljs.core.get.call(null,map__47855__$1,new cljs.core.Keyword(null,"method","method",55703592));var raw = cljs.core.get.call(null,map__47855__$1,new cljs.core.Keyword(null,"raw","raw",1604651272));var comm = cljs.core.async.chan.call(null,(1));goog.net.XhrIo.send(url,((function (comm,map__47855,map__47855__$1,opts,content,method,raw){
return (function (event){cljs.core.async.put_BANG_.call(null,comm,((function (comm,map__47855,map__47855__$1,opts,content,method,raw){
return (function (d){if(cljs.core.truth_(raw))
{return d;
} else
{return cljs.core.js__GT_clj.call(null,d,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true);
}
});})(comm,map__47855,map__47855__$1,opts,content,method,raw))
.call(null,(JSON.parse(event.target.getResponseText())["data"])));
return cljs.core.async.close_BANG_.call(null,comm);
});})(comm,map__47855,map__47855__$1,opts,content,method,raw))
,(function (){var or__3543__auto__ = (function (){var G__47857 = method;var G__47857__$1 = (((G__47857 == null))?null:cljs.core.name.call(null,G__47857));var G__47857__$2 = (((G__47857__$1 == null))?null:clojure.string.upper_case.call(null,G__47857__$1));return G__47857__$2;
})();if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return "GET";
}
})(),(cljs.core.truth_(content)?JSON.stringify(cljs.core.clj__GT_js.call(null,content)):null),(cljs.core.truth_(content)?cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, ["Content-Type","application/json"], null)):null));
return comm;
};
var AJAX = function (url,var_args){
var p__47851 = null;if (arguments.length > 1) {
  p__47851 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return AJAX__delegate.call(this,url,p__47851);};
AJAX.cljs$lang$maxFixedArity = 1;
AJAX.cljs$lang$applyTo = (function (arglist__47858){
var url = cljs.core.first(arglist__47858);
var p__47851 = cljs.core.rest(arglist__47858);
return AJAX__delegate(url,p__47851);
});
AJAX.cljs$core$IFn$_invoke$arity$variadic = AJAX__delegate;
return AJAX;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.GET = (function() { 
var GET__delegate = function (url,p__47859){var map__47861 = p__47859;var map__47861__$1 = ((cljs.core.seq_QMARK_.call(null,map__47861))?cljs.core.apply.call(null,cljs.core.hash_map,map__47861):map__47861);var opts = map__47861__$1;return cljs.core.apply.call(null,clustermap.api.AJAX,url,cljs.core.apply.call(null,cljs.core.concat,cljs.core.merge.call(null,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"method","method",55703592),"GET"], null))));
};
var GET = function (url,var_args){
var p__47859 = null;if (arguments.length > 1) {
  p__47859 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return GET__delegate.call(this,url,p__47859);};
GET.cljs$lang$maxFixedArity = 1;
GET.cljs$lang$applyTo = (function (arglist__47862){
var url = cljs.core.first(arglist__47862);
var p__47859 = cljs.core.rest(arglist__47862);
return GET__delegate(url,p__47859);
});
GET.cljs$core$IFn$_invoke$arity$variadic = GET__delegate;
return GET;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.POST = (function() { 
var POST__delegate = function (url,content,p__47863){var map__47865 = p__47863;var map__47865__$1 = ((cljs.core.seq_QMARK_.call(null,map__47865))?cljs.core.apply.call(null,cljs.core.hash_map,map__47865):map__47865);var opts = map__47865__$1;return cljs.core.apply.call(null,clustermap.api.AJAX,url,cljs.core.apply.call(null,cljs.core.concat,cljs.core.merge.call(null,opts,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"content","content",15833224),content], null))));
};
var POST = function (url,content,var_args){
var p__47863 = null;if (arguments.length > 2) {
  p__47863 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return POST__delegate.call(this,url,content,p__47863);};
POST.cljs$lang$maxFixedArity = 2;
POST.cljs$lang$applyTo = (function (arglist__47866){
var url = cljs.core.first(arglist__47866);
arglist__47866 = cljs.core.next(arglist__47866);
var content = cljs.core.first(arglist__47866);
var p__47863 = cljs.core.rest(arglist__47866);
return POST__delegate(url,content,p__47863);
});
POST.cljs$core$IFn$_invoke$arity$variadic = POST__delegate;
return POST;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.PUT = (function() { 
var PUT__delegate = function (url,content,p__47867){var map__47869 = p__47867;var map__47869__$1 = ((cljs.core.seq_QMARK_.call(null,map__47869))?cljs.core.apply.call(null,cljs.core.hash_map,map__47869):map__47869);var opts = map__47869__$1;return cljs.core.apply.call(null,clustermap.api.AJAX,url,cljs.core.apply.call(null,cljs.core.concat,cljs.core.merge.call(null,opts,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"PUT",new cljs.core.Keyword(null,"content","content",15833224),content], null))));
};
var PUT = function (url,content,var_args){
var p__47867 = null;if (arguments.length > 2) {
  p__47867 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return PUT__delegate.call(this,url,content,p__47867);};
PUT.cljs$lang$maxFixedArity = 2;
PUT.cljs$lang$applyTo = (function (arglist__47870){
var url = cljs.core.first(arglist__47870);
arglist__47870 = cljs.core.next(arglist__47870);
var content = cljs.core.first(arglist__47870);
var p__47867 = cljs.core.rest(arglist__47870);
return PUT__delegate(url,content,p__47867);
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
return (function (state_48003){var state_val_48004 = (state_48003[(1)]);if((state_val_48004 === (7)))
{var inst_47961 = (state_48003[(7)]);var inst_47960 = (state_48003[(2)]);var inst_47961__$1 = cljs.core.nth.call(null,inst_47960,(0),null);var inst_47962 = cljs.core.nth.call(null,inst_47960,(1),null);var inst_47963 = cljs.core.sequential_QMARK_.call(null,inst_47961__$1);var state_48003__$1 = (function (){var statearr_48005 = state_48003;(statearr_48005[(7)] = inst_47961__$1);
(statearr_48005[(8)] = inst_47962);
return statearr_48005;
})();if(inst_47963)
{var statearr_48006_48041 = state_48003__$1;(statearr_48006_48041[(1)] = (8));
} else
{var statearr_48007_48042 = state_48003__$1;(statearr_48007_48042[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_48004 === (20)))
{var inst_47961 = (state_48003[(7)]);var state_48003__$1 = state_48003;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48003__$1,(23),inst_47961);
} else
{if((state_val_48004 === (1)))
{var state_48003__$1 = state_48003;var statearr_48008_48043 = state_48003__$1;(statearr_48008_48043[(2)] = null);
(statearr_48008_48043[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_48004 === (4)))
{var state_48003__$1 = state_48003;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48003__$1,(7),ocomm);
} else
{if((state_val_48004 === (15)))
{var inst_47983 = (state_48003[(2)]);var state_48003__$1 = state_48003;var statearr_48009_48044 = state_48003__$1;(statearr_48009_48044[(2)] = inst_47983);
(statearr_48009_48044[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_48004 === (21)))
{var state_48003__$1 = state_48003;var statearr_48010_48045 = state_48003__$1;(statearr_48010_48045[(2)] = null);
(statearr_48010_48045[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_48004 === (13)))
{var inst_47966 = (state_48003[(9)]);var state_48003__$1 = state_48003;var statearr_48011_48046 = state_48003__$1;(statearr_48011_48046[(2)] = inst_47966);
(statearr_48011_48046[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_48004 === (22)))
{var inst_47992 = (state_48003[(2)]);var state_48003__$1 = state_48003;var statearr_48012_48047 = state_48003__$1;(statearr_48012_48047[(2)] = inst_47992);
(statearr_48012_48047[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_48004 === (6)))
{var inst_47999 = (state_48003[(2)]);var state_48003__$1 = state_48003;var statearr_48013_48048 = state_48003__$1;(statearr_48013_48048[(2)] = inst_47999);
(statearr_48013_48048[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_48004 === (17)))
{var state_48003__$1 = state_48003;var statearr_48014_48049 = state_48003__$1;(statearr_48014_48049[(2)] = null);
(statearr_48014_48049[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_48004 === (3)))
{var inst_48001 = (state_48003[(2)]);var state_48003__$1 = state_48003;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48003__$1,inst_48001);
} else
{if((state_val_48004 === (12)))
{var inst_47985 = (state_48003[(2)]);var state_48003__$1 = state_48003;var statearr_48015_48050 = state_48003__$1;(statearr_48015_48050[(2)] = inst_47985);
(statearr_48015_48050[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_48004 === (2)))
{var state_48003__$1 = state_48003;if(true)
{var statearr_48016_48051 = state_48003__$1;(statearr_48016_48051[(1)] = (4));
} else
{var statearr_48017_48052 = state_48003__$1;(statearr_48017_48052[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_48004 === (23)))
{var inst_47989 = (state_48003[(2)]);var state_48003__$1 = state_48003;var statearr_48018_48053 = state_48003__$1;(statearr_48018_48053[(2)] = inst_47989);
(statearr_48018_48053[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_48004 === (19)))
{var inst_47976 = (state_48003[(2)]);var state_48003__$1 = state_48003;var statearr_48019_48054 = state_48003__$1;(statearr_48019_48054[(2)] = inst_47976);
(statearr_48019_48054[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_48004 === (11)))
{var inst_47965 = (state_48003[(10)]);var inst_47968 = cljs.core.empty_QMARK_.call(null,inst_47965);var state_48003__$1 = state_48003;if(inst_47968)
{var statearr_48020_48055 = state_48003__$1;(statearr_48020_48055[(1)] = (13));
} else
{var statearr_48021_48056 = state_48003__$1;(statearr_48021_48056[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_48004 === (9)))
{var inst_47961 = (state_48003[(7)]);var state_48003__$1 = state_48003;if(cljs.core.truth_(inst_47961))
{var statearr_48022_48057 = state_48003__$1;(statearr_48022_48057[(1)] = (20));
} else
{var statearr_48023_48058 = state_48003__$1;(statearr_48023_48058[(1)] = (21));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_48004 === (5)))
{var state_48003__$1 = state_48003;var statearr_48024_48059 = state_48003__$1;(statearr_48024_48059[(2)] = null);
(statearr_48024_48059[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_48004 === (14)))
{var inst_47965 = (state_48003[(10)]);var inst_47971 = cljs.core.rest.call(null,inst_47965);var inst_47972 = cljs.core.first.call(null,inst_47965);var state_48003__$1 = (function (){var statearr_48025 = state_48003;(statearr_48025[(11)] = inst_47971);
return statearr_48025;
})();if(cljs.core.truth_(inst_47972))
{var statearr_48026_48060 = state_48003__$1;(statearr_48026_48060[(1)] = (16));
} else
{var statearr_48027_48061 = state_48003__$1;(statearr_48027_48061[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_48004 === (16)))
{var inst_47965 = (state_48003[(10)]);var inst_47974 = cljs.core.first.call(null,inst_47965);var state_48003__$1 = state_48003;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48003__$1,(19),inst_47974);
} else
{if((state_val_48004 === (10)))
{var inst_47962 = (state_48003[(8)]);var inst_47994 = (state_48003[(2)]);var inst_47995 = cljs.core.apply.call(null,handler,inst_47994,inst_47962);var state_48003__$1 = (function (){var statearr_48028 = state_48003;(statearr_48028[(12)] = inst_47995);
return statearr_48028;
})();var statearr_48029_48062 = state_48003__$1;(statearr_48029_48062[(2)] = null);
(statearr_48029_48062[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_48004 === (18)))
{var inst_47971 = (state_48003[(11)]);var inst_47966 = (state_48003[(9)]);var inst_47979 = (state_48003[(2)]);var inst_47980 = cljs.core.conj.call(null,inst_47966,inst_47979);var inst_47965 = inst_47971;var inst_47966__$1 = inst_47980;var state_48003__$1 = (function (){var statearr_48030 = state_48003;(statearr_48030[(10)] = inst_47965);
(statearr_48030[(9)] = inst_47966__$1);
return statearr_48030;
})();var statearr_48031_48063 = state_48003__$1;(statearr_48031_48063[(2)] = null);
(statearr_48031_48063[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_48004 === (8)))
{var inst_47961 = (state_48003[(7)]);var inst_47965 = inst_47961;var inst_47966 = cljs.core.PersistentVector.EMPTY;var state_48003__$1 = (function (){var statearr_48032 = state_48003;(statearr_48032[(10)] = inst_47965);
(statearr_48032[(9)] = inst_47966);
return statearr_48032;
})();var statearr_48033_48064 = state_48003__$1;(statearr_48033_48064[(2)] = null);
(statearr_48033_48064[(1)] = (11));
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
var state_machine__5679__auto____0 = (function (){var statearr_48037 = [null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_48037[(0)] = state_machine__5679__auto__);
(statearr_48037[(1)] = (1));
return statearr_48037;
});
var state_machine__5679__auto____1 = (function (state_48003){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_48003);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e48038){if((e48038 instanceof Object))
{var ex__5682__auto__ = e48038;var statearr_48039_48065 = state_48003;(statearr_48039_48065[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48003);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e48038;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__48066 = state_48003;
state_48003 = G__48066;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_48003){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_48003);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto__))
})();var state__5695__auto__ = (function (){var statearr_48040 = f__5694__auto__.call(null);(statearr_48040[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto__);
return statearr_48040;
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
var G__48069__delegate = function (req_args){var temp__4124__auto__ = cljs.core.apply.call(null,request_handler,req_args);if(cljs.core.truth_(temp__4124__auto__))
{var r = temp__4124__auto__;var rseq = ((cljs.core.sequential_QMARK_.call(null,r))?r:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [r], null));var vec__48068 = rseq;var rcomm = cljs.core.nth.call(null,vec__48068,(0),null);var result_handler_args = cljs.core.nthnext.call(null,vec__48068,(1));return cljs.core.async.put_BANG_.call(null,ocomm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rcomm,result_handler_args], null));
} else
{return null;
}
};
var G__48069 = function (var_args){
var req_args = null;if (arguments.length > 0) {
  req_args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__48069__delegate.call(this,req_args);};
G__48069.cljs$lang$maxFixedArity = 0;
G__48069.cljs$lang$applyTo = (function (arglist__48070){
var req_args = cljs.core.seq(arglist__48070);
return G__48069__delegate(req_args);
});
G__48069.cljs$core$IFn$_invoke$arity$variadic = G__48069__delegate;
return G__48069;
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
return (function (state_48088){var state_val_48089 = (state_48088[(1)]);if((state_val_48089 === (2)))
{var inst_48085 = (state_48088[(2)]);var inst_48086 = console.log(inst_48085);var state_48088__$1 = state_48088;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48088__$1,inst_48086);
} else
{if((state_val_48089 === (1)))
{var state_48088__$1 = state_48088;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48088__$1,(2),ch);
} else
{return null;
}
}
});})(c__5693__auto__,ch))
;return ((function (switch__5678__auto__,c__5693__auto__,ch){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_48093 = [null,null,null,null,null,null,null];(statearr_48093[(0)] = state_machine__5679__auto__);
(statearr_48093[(1)] = (1));
return statearr_48093;
});
var state_machine__5679__auto____1 = (function (state_48088){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_48088);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e48094){if((e48094 instanceof Object))
{var ex__5682__auto__ = e48094;var statearr_48095_48097 = state_48088;(statearr_48095_48097[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48088);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e48094;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__48098 = state_48088;
state_48088 = G__48098;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_48088){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_48088);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto__,ch))
})();var state__5695__auto__ = (function (){var statearr_48096 = f__5694__auto__.call(null);(statearr_48096[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto__);
return statearr_48096;
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
log_api.cljs$lang$applyTo = (function (arglist__48099){
var f = cljs.core.first(arglist__48099);
var args = cljs.core.rest(arglist__48099);
return log_api__delegate(f,args);
});
log_api.cljs$core$IFn$_invoke$arity$variadic = log_api__delegate;
return log_api;
})()
;
clustermap.api.map_json_params = (function map_json_params(m){return clojure.string.join.call(null,"&",cljs.core.map.call(null,(function (p__48102){var vec__48103 = p__48102;var k = cljs.core.nth.call(null,vec__48103,(0),null);var v = cljs.core.nth.call(null,vec__48103,(1),null);return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,k))+"="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(JSON.stringify(cljs.core.clj__GT_js.call(null,v))));
}),m));
});
/**
* put the results of an api call into an atom... makes ad-hoc api calls easy
*/
clustermap.api.fetch = (function fetch(comm){var r = cljs.core.atom.call(null,null);var c__5693__auto___48130 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5693__auto___48130,r){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto___48130,r){
return (function (state_48121){var state_val_48122 = (state_48121[(1)]);if((state_val_48122 === (2)))
{var inst_48118 = (state_48121[(2)]);var inst_48119 = cljs.core.reset_BANG_.call(null,r,inst_48118);var state_48121__$1 = state_48121;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48121__$1,inst_48119);
} else
{if((state_val_48122 === (1)))
{var state_48121__$1 = state_48121;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48121__$1,(2),comm);
} else
{return null;
}
}
});})(c__5693__auto___48130,r))
;return ((function (switch__5678__auto__,c__5693__auto___48130,r){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_48126 = [null,null,null,null,null,null,null];(statearr_48126[(0)] = state_machine__5679__auto__);
(statearr_48126[(1)] = (1));
return statearr_48126;
});
var state_machine__5679__auto____1 = (function (state_48121){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_48121);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e48127){if((e48127 instanceof Object))
{var ex__5682__auto__ = e48127;var statearr_48128_48131 = state_48121;(statearr_48128_48131[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48121);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e48127;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__48132 = state_48121;
state_48121 = G__48132;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_48121){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_48121);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto___48130,r))
})();var state__5695__auto__ = (function (){var statearr_48129 = f__5694__auto__.call(null);(statearr_48129[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto___48130);
return statearr_48129;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5695__auto__);
});})(c__5693__auto___48130,r))
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
boundarylines.cljs$lang$applyTo = (function (arglist__48133){
var id = cljs.core.first(arglist__48133);
arglist__48133 = cljs.core.next(arglist__48133);
var tolerance = cljs.core.first(arglist__48133);
var opts = cljs.core.rest(arglist__48133);
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
boundaryline_collection_index.cljs$lang$applyTo = (function (arglist__48134){
var id = cljs.core.first(arglist__48134);
var opts = cljs.core.rest(arglist__48134);
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
boundaryline_set.cljs$lang$applyTo = (function (arglist__48135){
var ids = cljs.core.first(arglist__48135);
arglist__48135 = cljs.core.next(arglist__48135);
var tolerance = cljs.core.first(arglist__48135);
var opts = cljs.core.rest(arglist__48135);
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
var boundaryline_aggregation__delegate = function (index,type,blcoll,attr,filter,p__48136){var vec__48138 = p__48136;var type_ids = cljs.core.nth.call(null,vec__48138,(0),null);return clustermap.api.POST.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/boundaryline-agg/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(index)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(blcoll)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(attr)+"?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids))),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"filter","filter",-948537934),filter], null));
};
var boundaryline_aggregation = function (index,type,blcoll,attr,filter,var_args){
var p__48136 = null;if (arguments.length > 5) {
  p__48136 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);} 
return boundaryline_aggregation__delegate.call(this,index,type,blcoll,attr,filter,p__48136);};
boundaryline_aggregation.cljs$lang$maxFixedArity = 5;
boundaryline_aggregation.cljs$lang$applyTo = (function (arglist__48139){
var index = cljs.core.first(arglist__48139);
arglist__48139 = cljs.core.next(arglist__48139);
var type = cljs.core.first(arglist__48139);
arglist__48139 = cljs.core.next(arglist__48139);
var blcoll = cljs.core.first(arglist__48139);
arglist__48139 = cljs.core.next(arglist__48139);
var attr = cljs.core.first(arglist__48139);
arglist__48139 = cljs.core.next(arglist__48139);
var filter = cljs.core.first(arglist__48139);
var p__48136 = cljs.core.rest(arglist__48139);
return boundaryline_aggregation__delegate(index,type,blcoll,attr,filter,p__48136);
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
var portfolio_company_sites__delegate = function (p__48140){var vec__48142 = p__48140;var type_ids = cljs.core.nth.call(null,vec__48142,(0),null);var type_ids__$1 = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"size","size",1098693007),(100),new cljs.core.Keyword(null,"sort","sort",953465918),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"!latest_turnover","!latest_turnover",-1853433972),"desc"], null)], null)], null),type_ids);return clustermap.api.GET.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/portfolio-company-sites?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids__$1))));
};
var portfolio_company_sites = function (var_args){
var p__48140 = null;if (arguments.length > 0) {
  p__48140 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_sites__delegate.call(this,p__48140);};
portfolio_company_sites.cljs$lang$maxFixedArity = 0;
portfolio_company_sites.cljs$lang$applyTo = (function (arglist__48143){
var p__48140 = cljs.core.seq(arglist__48143);
return portfolio_company_sites__delegate(p__48140);
});
portfolio_company_sites.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_sites__delegate;
return portfolio_company_sites;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_sites_by_company = (function() { 
var portfolio_company_sites_by_company__delegate = function (p__48144){var vec__48146 = p__48144;var type_ids = cljs.core.nth.call(null,vec__48146,(0),null);var type_ids__$1 = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"size","size",1098693007),(100),new cljs.core.Keyword(null,"sort","sort",953465918),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"!latest_turnover","!latest_turnover",-1853433972),"desc"], null)], null)], null),type_ids);return clustermap.api.GET.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/portfolio-company-sites-by-company?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids__$1))));
};
var portfolio_company_sites_by_company = function (var_args){
var p__48144 = null;if (arguments.length > 0) {
  p__48144 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_sites_by_company__delegate.call(this,p__48144);};
portfolio_company_sites_by_company.cljs$lang$maxFixedArity = 0;
portfolio_company_sites_by_company.cljs$lang$applyTo = (function (arglist__48147){
var p__48144 = cljs.core.seq(arglist__48147);
return portfolio_company_sites_by_company__delegate(p__48144);
});
portfolio_company_sites_by_company.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_sites_by_company__delegate;
return portfolio_company_sites_by_company;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_locations = (function() { 
var portfolio_company_locations__delegate = function (p__48148){var vec__48150 = p__48148;var type_ids = cljs.core.nth.call(null,vec__48150,(0),null);return clustermap.api.GET.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/portfolio-company-locations?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids))));
};
var portfolio_company_locations = function (var_args){
var p__48148 = null;if (arguments.length > 0) {
  p__48148 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_locations__delegate.call(this,p__48148);};
portfolio_company_locations.cljs$lang$maxFixedArity = 0;
portfolio_company_locations.cljs$lang$applyTo = (function (arglist__48151){
var p__48148 = cljs.core.seq(arglist__48151);
return portfolio_company_locations__delegate(p__48148);
});
portfolio_company_locations.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_locations__delegate;
return portfolio_company_locations;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_site_stats = (function() { 
var portfolio_company_site_stats__delegate = function (p__48152){var vec__48154 = p__48152;var type_ids = cljs.core.nth.call(null,vec__48154,(0),null);return clustermap.api.GET.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/portfolio-company-site-stats?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids))));
};
var portfolio_company_site_stats = function (var_args){
var p__48152 = null;if (arguments.length > 0) {
  p__48152 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_site_stats__delegate.call(this,p__48152);};
portfolio_company_site_stats.cljs$lang$maxFixedArity = 0;
portfolio_company_site_stats.cljs$lang$applyTo = (function (arglist__48155){
var p__48152 = cljs.core.seq(arglist__48155);
return portfolio_company_site_stats__delegate(p__48152);
});
portfolio_company_site_stats.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_site_stats__delegate;
return portfolio_company_site_stats;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_site_account_timelines = (function() { 
var portfolio_company_site_account_timelines__delegate = function (p__48156){var vec__48158 = p__48156;var type_ids = cljs.core.nth.call(null,vec__48158,(0),null);return clustermap.api.GET.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/portfolio-company-site-account-timelines?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids))));
};
var portfolio_company_site_account_timelines = function (var_args){
var p__48156 = null;if (arguments.length > 0) {
  p__48156 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_site_account_timelines__delegate.call(this,p__48156);};
portfolio_company_site_account_timelines.cljs$lang$maxFixedArity = 0;
portfolio_company_site_account_timelines.cljs$lang$applyTo = (function (arglist__48159){
var p__48156 = cljs.core.seq(arglist__48159);
return portfolio_company_site_account_timelines__delegate(p__48156);
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
var investment_account_timelines__delegate = function (p__48160){var vec__48162 = p__48160;var type_ids = cljs.core.nth.call(null,vec__48162,(0),null);return clustermap.api.GET.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/investment-account-timelines?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids))));
};
var investment_account_timelines = function (var_args){
var p__48160 = null;if (arguments.length > 0) {
  p__48160 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return investment_account_timelines__delegate.call(this,p__48160);};
investment_account_timelines.cljs$lang$maxFixedArity = 0;
investment_account_timelines.cljs$lang$applyTo = (function (arglist__48163){
var p__48160 = cljs.core.seq(arglist__48163);
return investment_account_timelines__delegate(p__48160);
});
investment_account_timelines.cljs$core$IFn$_invoke$arity$variadic = investment_account_timelines__delegate;
return investment_account_timelines;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.investment_stats = (function() { 
var investment_stats__delegate = function (p__48164){var vec__48166 = p__48164;var type_ids = cljs.core.nth.call(null,vec__48166,(0),null);return clustermap.api.GET.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/investment-stats?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids))));
};
var investment_stats = function (var_args){
var p__48164 = null;if (arguments.length > 0) {
  p__48164 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return investment_stats__delegate.call(this,p__48164);};
investment_stats.cljs$lang$maxFixedArity = 0;
investment_stats.cljs$lang$applyTo = (function (arglist__48167){
var p__48164 = cljs.core.seq(arglist__48167);
return investment_stats__delegate(p__48164);
});
investment_stats.cljs$core$IFn$_invoke$arity$variadic = investment_stats__delegate;
return investment_stats;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.investment_aggs = (function() { 
var investment_aggs__delegate = function (p__48168){var vec__48170 = p__48168;var type_ids = cljs.core.nth.call(null,vec__48170,(0),null);var type_ids__$1 = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"size","size",1098693007),(50),new cljs.core.Keyword(null,"order","order",-1254677256),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"latest_turnover","latest_turnover",-1335568590),"desc"], null)], null),type_ids);return clustermap.api.GET.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/investment-aggs?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids__$1))));
};
var investment_aggs = function (var_args){
var p__48168 = null;if (arguments.length > 0) {
  p__48168 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return investment_aggs__delegate.call(this,p__48168);};
investment_aggs.cljs$lang$maxFixedArity = 0;
investment_aggs.cljs$lang$applyTo = (function (arglist__48171){
var p__48168 = cljs.core.seq(arglist__48171);
return investment_aggs__delegate(p__48168);
});
investment_aggs.cljs$core$IFn$_invoke$arity$variadic = investment_aggs__delegate;
return investment_aggs;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.investments = (function() { 
var investments__delegate = function (p__48172){var vec__48174 = p__48172;var type_ids = cljs.core.nth.call(null,vec__48174,(0),null);var type_ids__$1 = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"size","size",1098693007),(50),new cljs.core.Keyword(null,"order","order",-1254677256),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"?boundaryline_compact_name_na","?boundaryline_compact_name_na",35068819),"asc"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"?investor_company_name_na","?investor_company_name_na",2080546953),"asc"], null)], null)], null),type_ids);return clustermap.api.GET.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/investments?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids__$1))));
};
var investments = function (var_args){
var p__48172 = null;if (arguments.length > 0) {
  p__48172 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return investments__delegate.call(this,p__48172);};
investments.cljs$lang$maxFixedArity = 0;
investments.cljs$lang$applyTo = (function (arglist__48175){
var p__48172 = cljs.core.seq(arglist__48175);
return investments__delegate(p__48172);
});
investments.cljs$core$IFn$_invoke$arity$variadic = investments__delegate;
return investments;
})()
;

//# sourceMappingURL=api.js.map