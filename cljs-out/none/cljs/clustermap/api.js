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
var AJAX__delegate = function (url,p__45783){var map__45787 = p__45783;var map__45787__$1 = ((cljs.core.seq_QMARK_.call(null,map__45787))?cljs.core.apply.call(null,cljs.core.hash_map,map__45787):map__45787);var content = cljs.core.get.call(null,map__45787__$1,new cljs.core.Keyword(null,"content","content",15833224));var method = cljs.core.get.call(null,map__45787__$1,new cljs.core.Keyword(null,"method","method",55703592));var raw = cljs.core.get.call(null,map__45787__$1,new cljs.core.Keyword(null,"raw","raw",1604651272));var comm = cljs.core.async.chan.call(null,(1));goog.net.XhrIo.send(url,((function (comm,map__45787,map__45787__$1,content,method,raw){
return (function (event){cljs.core.async.put_BANG_.call(null,comm,((function (comm,map__45787,map__45787__$1,content,method,raw){
return (function (d){if(cljs.core.truth_(raw))
{return d;
} else
{return cljs.core.js__GT_clj.call(null,d,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true);
}
});})(comm,map__45787,map__45787__$1,content,method,raw))
.call(null,(JSON.parse(event.target.getResponseText())["data"])));
return cljs.core.async.close_BANG_.call(null,comm);
});})(comm,map__45787,map__45787__$1,content,method,raw))
,(function (){var or__3543__auto__ = (function (){var G__45789 = method;var G__45789__$1 = (((G__45789 == null))?null:cljs.core.name.call(null,G__45789));var G__45789__$2 = (((G__45789__$1 == null))?null:clojure.string.upper_case.call(null,G__45789__$1));return G__45789__$2;
})();if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return "GET";
}
})(),(cljs.core.truth_(content)?JSON.stringify(cljs.core.clj__GT_js.call(null,content)):null),(cljs.core.truth_(content)?cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, ["Content-Type","application/json"], null)):null));
return comm;
};
var AJAX = function (url,var_args){
var p__45783 = null;if (arguments.length > 1) {
  p__45783 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return AJAX__delegate.call(this,url,p__45783);};
AJAX.cljs$lang$maxFixedArity = 1;
AJAX.cljs$lang$applyTo = (function (arglist__45790){
var url = cljs.core.first(arglist__45790);
var p__45783 = cljs.core.rest(arglist__45790);
return AJAX__delegate(url,p__45783);
});
AJAX.cljs$core$IFn$_invoke$arity$variadic = AJAX__delegate;
return AJAX;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.GET = (function() { 
var GET__delegate = function (url,p__45791){var map__45793 = p__45791;var map__45793__$1 = ((cljs.core.seq_QMARK_.call(null,map__45793))?cljs.core.apply.call(null,cljs.core.hash_map,map__45793):map__45793);var opts = map__45793__$1;return cljs.core.apply.call(null,clustermap.api.AJAX,url,cljs.core.apply.call(null,cljs.core.concat,cljs.core.merge.call(null,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"method","method",55703592),"GET"], null))));
};
var GET = function (url,var_args){
var p__45791 = null;if (arguments.length > 1) {
  p__45791 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return GET__delegate.call(this,url,p__45791);};
GET.cljs$lang$maxFixedArity = 1;
GET.cljs$lang$applyTo = (function (arglist__45794){
var url = cljs.core.first(arglist__45794);
var p__45791 = cljs.core.rest(arglist__45794);
return GET__delegate(url,p__45791);
});
GET.cljs$core$IFn$_invoke$arity$variadic = GET__delegate;
return GET;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.POST = (function() { 
var POST__delegate = function (url,content,p__45795){var map__45797 = p__45795;var map__45797__$1 = ((cljs.core.seq_QMARK_.call(null,map__45797))?cljs.core.apply.call(null,cljs.core.hash_map,map__45797):map__45797);var opts = map__45797__$1;return cljs.core.apply.call(null,clustermap.api.AJAX,url,cljs.core.apply.call(null,cljs.core.concat,cljs.core.merge.call(null,opts,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"content","content",15833224),content], null))));
};
var POST = function (url,content,var_args){
var p__45795 = null;if (arguments.length > 2) {
  p__45795 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return POST__delegate.call(this,url,content,p__45795);};
POST.cljs$lang$maxFixedArity = 2;
POST.cljs$lang$applyTo = (function (arglist__45798){
var url = cljs.core.first(arglist__45798);
arglist__45798 = cljs.core.next(arglist__45798);
var content = cljs.core.first(arglist__45798);
var p__45795 = cljs.core.rest(arglist__45798);
return POST__delegate(url,content,p__45795);
});
POST.cljs$core$IFn$_invoke$arity$variadic = POST__delegate;
return POST;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.PUT = (function() { 
var PUT__delegate = function (url,content,p__45799){var map__45801 = p__45799;var map__45801__$1 = ((cljs.core.seq_QMARK_.call(null,map__45801))?cljs.core.apply.call(null,cljs.core.hash_map,map__45801):map__45801);var opts = map__45801__$1;return cljs.core.apply.call(null,clustermap.api.AJAX,url,cljs.core.apply.call(null,cljs.core.concat,cljs.core.merge.call(null,opts,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"PUT",new cljs.core.Keyword(null,"content","content",15833224),content], null))));
};
var PUT = function (url,content,var_args){
var p__45799 = null;if (arguments.length > 2) {
  p__45799 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return PUT__delegate.call(this,url,content,p__45799);};
PUT.cljs$lang$maxFixedArity = 2;
PUT.cljs$lang$applyTo = (function (arglist__45802){
var url = cljs.core.first(arglist__45802);
arglist__45802 = cljs.core.next(arglist__45802);
var content = cljs.core.first(arglist__45802);
var p__45799 = cljs.core.rest(arglist__45802);
return PUT__delegate(url,content,p__45799);
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
return (function (state_45935){var state_val_45936 = (state_45935[(1)]);if((state_val_45936 === (7)))
{var inst_45893 = (state_45935[(7)]);var inst_45892 = (state_45935[(2)]);var inst_45893__$1 = cljs.core.nth.call(null,inst_45892,(0),null);var inst_45894 = cljs.core.nth.call(null,inst_45892,(1),null);var inst_45895 = cljs.core.sequential_QMARK_.call(null,inst_45893__$1);var state_45935__$1 = (function (){var statearr_45937 = state_45935;(statearr_45937[(8)] = inst_45894);
(statearr_45937[(7)] = inst_45893__$1);
return statearr_45937;
})();if(inst_45895)
{var statearr_45938_45973 = state_45935__$1;(statearr_45938_45973[(1)] = (8));
} else
{var statearr_45939_45974 = state_45935__$1;(statearr_45939_45974[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_45936 === (20)))
{var inst_45893 = (state_45935[(7)]);var state_45935__$1 = state_45935;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45935__$1,(23),inst_45893);
} else
{if((state_val_45936 === (1)))
{var state_45935__$1 = state_45935;var statearr_45940_45975 = state_45935__$1;(statearr_45940_45975[(2)] = null);
(statearr_45940_45975[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_45936 === (4)))
{var state_45935__$1 = state_45935;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45935__$1,(7),ocomm);
} else
{if((state_val_45936 === (15)))
{var inst_45915 = (state_45935[(2)]);var state_45935__$1 = state_45935;var statearr_45941_45976 = state_45935__$1;(statearr_45941_45976[(2)] = inst_45915);
(statearr_45941_45976[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_45936 === (21)))
{var state_45935__$1 = state_45935;var statearr_45942_45977 = state_45935__$1;(statearr_45942_45977[(2)] = null);
(statearr_45942_45977[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_45936 === (13)))
{var inst_45898 = (state_45935[(9)]);var state_45935__$1 = state_45935;var statearr_45943_45978 = state_45935__$1;(statearr_45943_45978[(2)] = inst_45898);
(statearr_45943_45978[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_45936 === (22)))
{var inst_45924 = (state_45935[(2)]);var state_45935__$1 = state_45935;var statearr_45944_45979 = state_45935__$1;(statearr_45944_45979[(2)] = inst_45924);
(statearr_45944_45979[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_45936 === (6)))
{var inst_45931 = (state_45935[(2)]);var state_45935__$1 = state_45935;var statearr_45945_45980 = state_45935__$1;(statearr_45945_45980[(2)] = inst_45931);
(statearr_45945_45980[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_45936 === (17)))
{var state_45935__$1 = state_45935;var statearr_45946_45981 = state_45935__$1;(statearr_45946_45981[(2)] = null);
(statearr_45946_45981[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_45936 === (3)))
{var inst_45933 = (state_45935[(2)]);var state_45935__$1 = state_45935;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45935__$1,inst_45933);
} else
{if((state_val_45936 === (12)))
{var inst_45917 = (state_45935[(2)]);var state_45935__$1 = state_45935;var statearr_45947_45982 = state_45935__$1;(statearr_45947_45982[(2)] = inst_45917);
(statearr_45947_45982[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_45936 === (2)))
{var state_45935__$1 = state_45935;if(true)
{var statearr_45948_45983 = state_45935__$1;(statearr_45948_45983[(1)] = (4));
} else
{var statearr_45949_45984 = state_45935__$1;(statearr_45949_45984[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_45936 === (23)))
{var inst_45921 = (state_45935[(2)]);var state_45935__$1 = state_45935;var statearr_45950_45985 = state_45935__$1;(statearr_45950_45985[(2)] = inst_45921);
(statearr_45950_45985[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_45936 === (19)))
{var inst_45908 = (state_45935[(2)]);var state_45935__$1 = state_45935;var statearr_45951_45986 = state_45935__$1;(statearr_45951_45986[(2)] = inst_45908);
(statearr_45951_45986[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_45936 === (11)))
{var inst_45897 = (state_45935[(10)]);var inst_45900 = cljs.core.empty_QMARK_.call(null,inst_45897);var state_45935__$1 = state_45935;if(inst_45900)
{var statearr_45952_45987 = state_45935__$1;(statearr_45952_45987[(1)] = (13));
} else
{var statearr_45953_45988 = state_45935__$1;(statearr_45953_45988[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_45936 === (9)))
{var inst_45893 = (state_45935[(7)]);var state_45935__$1 = state_45935;if(cljs.core.truth_(inst_45893))
{var statearr_45954_45989 = state_45935__$1;(statearr_45954_45989[(1)] = (20));
} else
{var statearr_45955_45990 = state_45935__$1;(statearr_45955_45990[(1)] = (21));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_45936 === (5)))
{var state_45935__$1 = state_45935;var statearr_45956_45991 = state_45935__$1;(statearr_45956_45991[(2)] = null);
(statearr_45956_45991[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_45936 === (14)))
{var inst_45897 = (state_45935[(10)]);var inst_45903 = cljs.core.rest.call(null,inst_45897);var inst_45904 = cljs.core.first.call(null,inst_45897);var state_45935__$1 = (function (){var statearr_45957 = state_45935;(statearr_45957[(11)] = inst_45903);
return statearr_45957;
})();if(cljs.core.truth_(inst_45904))
{var statearr_45958_45992 = state_45935__$1;(statearr_45958_45992[(1)] = (16));
} else
{var statearr_45959_45993 = state_45935__$1;(statearr_45959_45993[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_45936 === (16)))
{var inst_45897 = (state_45935[(10)]);var inst_45906 = cljs.core.first.call(null,inst_45897);var state_45935__$1 = state_45935;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45935__$1,(19),inst_45906);
} else
{if((state_val_45936 === (10)))
{var inst_45894 = (state_45935[(8)]);var inst_45926 = (state_45935[(2)]);var inst_45927 = cljs.core.apply.call(null,handler,inst_45926,inst_45894);var state_45935__$1 = (function (){var statearr_45960 = state_45935;(statearr_45960[(12)] = inst_45927);
return statearr_45960;
})();var statearr_45961_45994 = state_45935__$1;(statearr_45961_45994[(2)] = null);
(statearr_45961_45994[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_45936 === (18)))
{var inst_45903 = (state_45935[(11)]);var inst_45898 = (state_45935[(9)]);var inst_45911 = (state_45935[(2)]);var inst_45912 = cljs.core.conj.call(null,inst_45898,inst_45911);var inst_45897 = inst_45903;var inst_45898__$1 = inst_45912;var state_45935__$1 = (function (){var statearr_45962 = state_45935;(statearr_45962[(10)] = inst_45897);
(statearr_45962[(9)] = inst_45898__$1);
return statearr_45962;
})();var statearr_45963_45995 = state_45935__$1;(statearr_45963_45995[(2)] = null);
(statearr_45963_45995[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_45936 === (8)))
{var inst_45893 = (state_45935[(7)]);var inst_45897 = inst_45893;var inst_45898 = cljs.core.PersistentVector.EMPTY;var state_45935__$1 = (function (){var statearr_45964 = state_45935;(statearr_45964[(10)] = inst_45897);
(statearr_45964[(9)] = inst_45898);
return statearr_45964;
})();var statearr_45965_45996 = state_45935__$1;(statearr_45965_45996[(2)] = null);
(statearr_45965_45996[(1)] = (11));
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
var state_machine__5679__auto____0 = (function (){var statearr_45969 = [null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_45969[(0)] = state_machine__5679__auto__);
(statearr_45969[(1)] = (1));
return statearr_45969;
});
var state_machine__5679__auto____1 = (function (state_45935){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_45935);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e45970){if((e45970 instanceof Object))
{var ex__5682__auto__ = e45970;var statearr_45971_45997 = state_45935;(statearr_45971_45997[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45935);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e45970;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__45998 = state_45935;
state_45935 = G__45998;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_45935){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_45935);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto__))
})();var state__5695__auto__ = (function (){var statearr_45972 = f__5694__auto__.call(null);(statearr_45972[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto__);
return statearr_45972;
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
var G__46001__delegate = function (req_args){var temp__4124__auto__ = cljs.core.apply.call(null,request_handler,req_args);if(cljs.core.truth_(temp__4124__auto__))
{var r = temp__4124__auto__;var rseq = ((cljs.core.sequential_QMARK_.call(null,r))?r:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [r], null));var vec__46000 = rseq;var rcomm = cljs.core.nth.call(null,vec__46000,(0),null);var result_handler_args = cljs.core.nthnext.call(null,vec__46000,(1));return cljs.core.async.put_BANG_.call(null,ocomm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rcomm,result_handler_args], null));
} else
{return null;
}
};
var G__46001 = function (var_args){
var req_args = null;if (arguments.length > 0) {
  req_args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__46001__delegate.call(this,req_args);};
G__46001.cljs$lang$maxFixedArity = 0;
G__46001.cljs$lang$applyTo = (function (arglist__46002){
var req_args = cljs.core.seq(arglist__46002);
return G__46001__delegate(req_args);
});
G__46001.cljs$core$IFn$_invoke$arity$variadic = G__46001__delegate;
return G__46001;
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
return (function (state_46020){var state_val_46021 = (state_46020[(1)]);if((state_val_46021 === (2)))
{var inst_46017 = (state_46020[(2)]);var inst_46018 = console.log(inst_46017);var state_46020__$1 = state_46020;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46020__$1,inst_46018);
} else
{if((state_val_46021 === (1)))
{var state_46020__$1 = state_46020;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46020__$1,(2),ch);
} else
{return null;
}
}
});})(c__5693__auto__,ch))
;return ((function (switch__5678__auto__,c__5693__auto__,ch){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_46025 = [null,null,null,null,null,null,null];(statearr_46025[(0)] = state_machine__5679__auto__);
(statearr_46025[(1)] = (1));
return statearr_46025;
});
var state_machine__5679__auto____1 = (function (state_46020){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_46020);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e46026){if((e46026 instanceof Object))
{var ex__5682__auto__ = e46026;var statearr_46027_46029 = state_46020;(statearr_46027_46029[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46020);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e46026;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__46030 = state_46020;
state_46020 = G__46030;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_46020){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_46020);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto__,ch))
})();var state__5695__auto__ = (function (){var statearr_46028 = f__5694__auto__.call(null);(statearr_46028[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto__);
return statearr_46028;
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
log_api.cljs$lang$applyTo = (function (arglist__46031){
var f = cljs.core.first(arglist__46031);
var args = cljs.core.rest(arglist__46031);
return log_api__delegate(f,args);
});
log_api.cljs$core$IFn$_invoke$arity$variadic = log_api__delegate;
return log_api;
})()
;
clustermap.api.map_json_params = (function map_json_params(m){return clojure.string.join.call(null,"&",cljs.core.map.call(null,(function (p__46034){var vec__46035 = p__46034;var k = cljs.core.nth.call(null,vec__46035,(0),null);var v = cljs.core.nth.call(null,vec__46035,(1),null);return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,k))+"="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(JSON.stringify(cljs.core.clj__GT_js.call(null,v))));
}),m));
});
/**
* put the results of an api call into an atom... makes ad-hoc api calls easy
*/
clustermap.api.fetch = (function fetch(comm){var r = cljs.core.atom.call(null,null);var c__5693__auto___46062 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5693__auto___46062,r){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto___46062,r){
return (function (state_46053){var state_val_46054 = (state_46053[(1)]);if((state_val_46054 === (2)))
{var inst_46050 = (state_46053[(2)]);var inst_46051 = cljs.core.reset_BANG_.call(null,r,inst_46050);var state_46053__$1 = state_46053;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46053__$1,inst_46051);
} else
{if((state_val_46054 === (1)))
{var state_46053__$1 = state_46053;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46053__$1,(2),comm);
} else
{return null;
}
}
});})(c__5693__auto___46062,r))
;return ((function (switch__5678__auto__,c__5693__auto___46062,r){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_46058 = [null,null,null,null,null,null,null];(statearr_46058[(0)] = state_machine__5679__auto__);
(statearr_46058[(1)] = (1));
return statearr_46058;
});
var state_machine__5679__auto____1 = (function (state_46053){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_46053);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e46059){if((e46059 instanceof Object))
{var ex__5682__auto__ = e46059;var statearr_46060_46063 = state_46053;(statearr_46060_46063[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46053);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e46059;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__46064 = state_46053;
state_46053 = G__46064;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_46053){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_46053);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto___46062,r))
})();var state__5695__auto__ = (function (){var statearr_46061 = f__5694__auto__.call(null);(statearr_46061[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto___46062);
return statearr_46061;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5695__auto__);
});})(c__5693__auto___46062,r))
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
boundarylines.cljs$lang$applyTo = (function (arglist__46065){
var id = cljs.core.first(arglist__46065);
arglist__46065 = cljs.core.next(arglist__46065);
var tolerance = cljs.core.first(arglist__46065);
var opts = cljs.core.rest(arglist__46065);
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
boundaryline_collection_index.cljs$lang$applyTo = (function (arglist__46066){
var id = cljs.core.first(arglist__46066);
var opts = cljs.core.rest(arglist__46066);
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
var boundaryline_aggregation__delegate = function (index,type,blcoll,attr,filter,p__46067){var vec__46069 = p__46067;var type_ids = cljs.core.nth.call(null,vec__46069,(0),null);return clustermap.api.POST.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/boundaryline-agg/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(index)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(blcoll)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(attr)+"?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids))),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"filter","filter",-948537934),filter], null));
};
var boundaryline_aggregation = function (index,type,blcoll,attr,filter,var_args){
var p__46067 = null;if (arguments.length > 5) {
  p__46067 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);} 
return boundaryline_aggregation__delegate.call(this,index,type,blcoll,attr,filter,p__46067);};
boundaryline_aggregation.cljs$lang$maxFixedArity = 5;
boundaryline_aggregation.cljs$lang$applyTo = (function (arglist__46070){
var index = cljs.core.first(arglist__46070);
arglist__46070 = cljs.core.next(arglist__46070);
var type = cljs.core.first(arglist__46070);
arglist__46070 = cljs.core.next(arglist__46070);
var blcoll = cljs.core.first(arglist__46070);
arglist__46070 = cljs.core.next(arglist__46070);
var attr = cljs.core.first(arglist__46070);
arglist__46070 = cljs.core.next(arglist__46070);
var filter = cljs.core.first(arglist__46070);
var p__46067 = cljs.core.rest(arglist__46070);
return boundaryline_aggregation__delegate(index,type,blcoll,attr,filter,p__46067);
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
var portfolio_company_sites__delegate = function (p__46071){var vec__46073 = p__46071;var type_ids = cljs.core.nth.call(null,vec__46073,(0),null);var type_ids__$1 = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"size","size",1098693007),(100),new cljs.core.Keyword(null,"sort","sort",953465918),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"!latest_turnover","!latest_turnover",-1853433972),"desc"], null)], null)], null),type_ids);return clustermap.api.GET.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/portfolio-company-sites?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids__$1))));
};
var portfolio_company_sites = function (var_args){
var p__46071 = null;if (arguments.length > 0) {
  p__46071 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_sites__delegate.call(this,p__46071);};
portfolio_company_sites.cljs$lang$maxFixedArity = 0;
portfolio_company_sites.cljs$lang$applyTo = (function (arglist__46074){
var p__46071 = cljs.core.seq(arglist__46074);
return portfolio_company_sites__delegate(p__46071);
});
portfolio_company_sites.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_sites__delegate;
return portfolio_company_sites;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_sites_by_company = (function() { 
var portfolio_company_sites_by_company__delegate = function (p__46075){var vec__46077 = p__46075;var type_ids = cljs.core.nth.call(null,vec__46077,(0),null);var type_ids__$1 = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"size","size",1098693007),(100),new cljs.core.Keyword(null,"sort","sort",953465918),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"!latest_turnover","!latest_turnover",-1853433972),"desc"], null)], null)], null),type_ids);return clustermap.api.GET.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/portfolio-company-sites-by-company?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids__$1))));
};
var portfolio_company_sites_by_company = function (var_args){
var p__46075 = null;if (arguments.length > 0) {
  p__46075 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_sites_by_company__delegate.call(this,p__46075);};
portfolio_company_sites_by_company.cljs$lang$maxFixedArity = 0;
portfolio_company_sites_by_company.cljs$lang$applyTo = (function (arglist__46078){
var p__46075 = cljs.core.seq(arglist__46078);
return portfolio_company_sites_by_company__delegate(p__46075);
});
portfolio_company_sites_by_company.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_sites_by_company__delegate;
return portfolio_company_sites_by_company;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_locations = (function() { 
var portfolio_company_locations__delegate = function (p__46079){var vec__46081 = p__46079;var type_ids = cljs.core.nth.call(null,vec__46081,(0),null);return clustermap.api.GET.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/portfolio-company-locations?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids))));
};
var portfolio_company_locations = function (var_args){
var p__46079 = null;if (arguments.length > 0) {
  p__46079 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_locations__delegate.call(this,p__46079);};
portfolio_company_locations.cljs$lang$maxFixedArity = 0;
portfolio_company_locations.cljs$lang$applyTo = (function (arglist__46082){
var p__46079 = cljs.core.seq(arglist__46082);
return portfolio_company_locations__delegate(p__46079);
});
portfolio_company_locations.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_locations__delegate;
return portfolio_company_locations;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_site_stats = (function() { 
var portfolio_company_site_stats__delegate = function (p__46083){var vec__46085 = p__46083;var type_ids = cljs.core.nth.call(null,vec__46085,(0),null);return clustermap.api.GET.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/portfolio-company-site-stats?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids))));
};
var portfolio_company_site_stats = function (var_args){
var p__46083 = null;if (arguments.length > 0) {
  p__46083 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_site_stats__delegate.call(this,p__46083);};
portfolio_company_site_stats.cljs$lang$maxFixedArity = 0;
portfolio_company_site_stats.cljs$lang$applyTo = (function (arglist__46086){
var p__46083 = cljs.core.seq(arglist__46086);
return portfolio_company_site_stats__delegate(p__46083);
});
portfolio_company_site_stats.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_site_stats__delegate;
return portfolio_company_site_stats;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_site_account_timelines = (function() { 
var portfolio_company_site_account_timelines__delegate = function (p__46087){var vec__46089 = p__46087;var type_ids = cljs.core.nth.call(null,vec__46089,(0),null);return clustermap.api.GET.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/portfolio-company-site-account-timelines?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids))));
};
var portfolio_company_site_account_timelines = function (var_args){
var p__46087 = null;if (arguments.length > 0) {
  p__46087 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_site_account_timelines__delegate.call(this,p__46087);};
portfolio_company_site_account_timelines.cljs$lang$maxFixedArity = 0;
portfolio_company_site_account_timelines.cljs$lang$applyTo = (function (arglist__46090){
var p__46087 = cljs.core.seq(arglist__46090);
return portfolio_company_site_account_timelines__delegate(p__46087);
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
var investment_account_timelines__delegate = function (p__46091){var vec__46093 = p__46091;var type_ids = cljs.core.nth.call(null,vec__46093,(0),null);return clustermap.api.GET.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/investment-account-timelines?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids))));
};
var investment_account_timelines = function (var_args){
var p__46091 = null;if (arguments.length > 0) {
  p__46091 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return investment_account_timelines__delegate.call(this,p__46091);};
investment_account_timelines.cljs$lang$maxFixedArity = 0;
investment_account_timelines.cljs$lang$applyTo = (function (arglist__46094){
var p__46091 = cljs.core.seq(arglist__46094);
return investment_account_timelines__delegate(p__46091);
});
investment_account_timelines.cljs$core$IFn$_invoke$arity$variadic = investment_account_timelines__delegate;
return investment_account_timelines;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.investment_stats = (function() { 
var investment_stats__delegate = function (p__46095){var vec__46097 = p__46095;var type_ids = cljs.core.nth.call(null,vec__46097,(0),null);return clustermap.api.GET.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/investment-stats?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids))));
};
var investment_stats = function (var_args){
var p__46095 = null;if (arguments.length > 0) {
  p__46095 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return investment_stats__delegate.call(this,p__46095);};
investment_stats.cljs$lang$maxFixedArity = 0;
investment_stats.cljs$lang$applyTo = (function (arglist__46098){
var p__46095 = cljs.core.seq(arglist__46098);
return investment_stats__delegate(p__46095);
});
investment_stats.cljs$core$IFn$_invoke$arity$variadic = investment_stats__delegate;
return investment_stats;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.investment_aggs = (function() { 
var investment_aggs__delegate = function (p__46099){var vec__46101 = p__46099;var type_ids = cljs.core.nth.call(null,vec__46101,(0),null);var type_ids__$1 = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"size","size",1098693007),(50),new cljs.core.Keyword(null,"order","order",-1254677256),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"latest_turnover","latest_turnover",-1335568590),"desc"], null)], null),type_ids);return clustermap.api.GET.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/investment-aggs?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids__$1))));
};
var investment_aggs = function (var_args){
var p__46099 = null;if (arguments.length > 0) {
  p__46099 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return investment_aggs__delegate.call(this,p__46099);};
investment_aggs.cljs$lang$maxFixedArity = 0;
investment_aggs.cljs$lang$applyTo = (function (arglist__46102){
var p__46099 = cljs.core.seq(arglist__46102);
return investment_aggs__delegate(p__46099);
});
investment_aggs.cljs$core$IFn$_invoke$arity$variadic = investment_aggs__delegate;
return investment_aggs;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.investments = (function() { 
var investments__delegate = function (p__46103){var vec__46105 = p__46103;var type_ids = cljs.core.nth.call(null,vec__46105,(0),null);var type_ids__$1 = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"size","size",1098693007),(50),new cljs.core.Keyword(null,"order","order",-1254677256),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"?boundaryline_compact_name_na","?boundaryline_compact_name_na",35068819),"asc"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"?investor_company_name_na","?investor_company_name_na",2080546953),"asc"], null)], null)], null),type_ids);return clustermap.api.GET.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/investments?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids__$1))));
};
var investments = function (var_args){
var p__46103 = null;if (arguments.length > 0) {
  p__46103 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return investments__delegate.call(this,p__46103);};
investments.cljs$lang$maxFixedArity = 0;
investments.cljs$lang$applyTo = (function (arglist__46106){
var p__46103 = cljs.core.seq(arglist__46106);
return investments__delegate(p__46103);
});
investments.cljs$core$IFn$_invoke$arity$variadic = investments__delegate;
return investments;
})()
;

//# sourceMappingURL=api.js.map