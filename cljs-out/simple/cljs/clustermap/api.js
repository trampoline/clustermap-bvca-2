// Compiled by ClojureScript 0.0-2322
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
var AJAX__delegate = function (url,p__26770){var map__26774 = p__26770;var map__26774__$1 = ((cljs.core.seq_QMARK_.call(null,map__26774))?cljs.core.apply.call(null,cljs.core.hash_map,map__26774):map__26774);var opts = map__26774__$1;var content = cljs.core.get.call(null,map__26774__$1,new cljs.core.Keyword(null,"content","content",15833224));var method = cljs.core.get.call(null,map__26774__$1,new cljs.core.Keyword(null,"method","method",55703592));var raw = cljs.core.get.call(null,map__26774__$1,new cljs.core.Keyword(null,"raw","raw",1604651272));var comm = cljs.core.async.chan.call(null,(1));goog.net.XhrIo.send(url,((function (comm,map__26774,map__26774__$1,opts,content,method,raw){
return (function (event){cljs.core.async.put_BANG_.call(null,comm,((function (comm,map__26774,map__26774__$1,opts,content,method,raw){
return (function (d){if(cljs.core.truth_(raw))
{return d;
} else
{return cljs.core.js__GT_clj.call(null,d,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true);
}
});})(comm,map__26774,map__26774__$1,opts,content,method,raw))
.call(null,(JSON.parse(event.target.getResponseText())["data"])));
return cljs.core.async.close_BANG_.call(null,comm);
});})(comm,map__26774,map__26774__$1,opts,content,method,raw))
,(function (){var or__3558__auto__ = (function (){var G__26776 = method;var G__26776__$1 = (((G__26776 == null))?null:cljs.core.name.call(null,G__26776));var G__26776__$2 = (((G__26776__$1 == null))?null:clojure.string.upper_case.call(null,G__26776__$1));return G__26776__$2;
})();if(cljs.core.truth_(or__3558__auto__))
{return or__3558__auto__;
} else
{return "GET";
}
})(),(cljs.core.truth_(content)?JSON.stringify(cljs.core.clj__GT_js.call(null,content)):null),(cljs.core.truth_(content)?cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, ["Content-Type","application/json"], null)):null));
return comm;
};
var AJAX = function (url,var_args){
var p__26770 = null;if (arguments.length > 1) {
  p__26770 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return AJAX__delegate.call(this,url,p__26770);};
AJAX.cljs$lang$maxFixedArity = 1;
AJAX.cljs$lang$applyTo = (function (arglist__26777){
var url = cljs.core.first(arglist__26777);
var p__26770 = cljs.core.rest(arglist__26777);
return AJAX__delegate(url,p__26770);
});
AJAX.cljs$core$IFn$_invoke$arity$variadic = AJAX__delegate;
return AJAX;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.GET = (function() { 
var GET__delegate = function (url,p__26778){var map__26780 = p__26778;var map__26780__$1 = ((cljs.core.seq_QMARK_.call(null,map__26780))?cljs.core.apply.call(null,cljs.core.hash_map,map__26780):map__26780);var opts = map__26780__$1;return cljs.core.apply.call(null,clustermap.api.AJAX,url,cljs.core.apply.call(null,cljs.core.concat,cljs.core.merge.call(null,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"method","method",55703592),"GET"], null))));
};
var GET = function (url,var_args){
var p__26778 = null;if (arguments.length > 1) {
  p__26778 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return GET__delegate.call(this,url,p__26778);};
GET.cljs$lang$maxFixedArity = 1;
GET.cljs$lang$applyTo = (function (arglist__26781){
var url = cljs.core.first(arglist__26781);
var p__26778 = cljs.core.rest(arglist__26781);
return GET__delegate(url,p__26778);
});
GET.cljs$core$IFn$_invoke$arity$variadic = GET__delegate;
return GET;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.POST = (function() { 
var POST__delegate = function (url,content,p__26782){var map__26784 = p__26782;var map__26784__$1 = ((cljs.core.seq_QMARK_.call(null,map__26784))?cljs.core.apply.call(null,cljs.core.hash_map,map__26784):map__26784);var opts = map__26784__$1;return cljs.core.apply.call(null,clustermap.api.AJAX,url,cljs.core.apply.call(null,cljs.core.concat,cljs.core.merge.call(null,opts,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"content","content",15833224),content], null))));
};
var POST = function (url,content,var_args){
var p__26782 = null;if (arguments.length > 2) {
  p__26782 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return POST__delegate.call(this,url,content,p__26782);};
POST.cljs$lang$maxFixedArity = 2;
POST.cljs$lang$applyTo = (function (arglist__26785){
var url = cljs.core.first(arglist__26785);
arglist__26785 = cljs.core.next(arglist__26785);
var content = cljs.core.first(arglist__26785);
var p__26782 = cljs.core.rest(arglist__26785);
return POST__delegate(url,content,p__26782);
});
POST.cljs$core$IFn$_invoke$arity$variadic = POST__delegate;
return POST;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.PUT = (function() { 
var PUT__delegate = function (url,content,p__26786){var map__26788 = p__26786;var map__26788__$1 = ((cljs.core.seq_QMARK_.call(null,map__26788))?cljs.core.apply.call(null,cljs.core.hash_map,map__26788):map__26788);var opts = map__26788__$1;return cljs.core.apply.call(null,clustermap.api.AJAX,url,cljs.core.apply.call(null,cljs.core.concat,cljs.core.merge.call(null,opts,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"PUT",new cljs.core.Keyword(null,"content","content",15833224),content], null))));
};
var PUT = function (url,content,var_args){
var p__26786 = null;if (arguments.length > 2) {
  p__26786 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return PUT__delegate.call(this,url,content,p__26786);};
PUT.cljs$lang$maxFixedArity = 2;
PUT.cljs$lang$applyTo = (function (arglist__26789){
var url = cljs.core.first(arglist__26789);
arglist__26789 = cljs.core.next(arglist__26789);
var content = cljs.core.first(arglist__26789);
var p__26786 = cljs.core.rest(arglist__26789);
return PUT__delegate(url,content,p__26786);
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
clustermap.api.ordered_api_results = (function ordered_api_results(ocomm,handler){var c__5708__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5708__auto__){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto__){
return (function (state_26924){var state_val_26925 = (state_26924[(1)]);if((state_val_26925 === (7)))
{var inst_26881 = (state_26924[(7)]);var inst_26880 = (state_26924[(2)]);var inst_26881__$1 = cljs.core.nth.call(null,inst_26880,(0),null);var inst_26882 = cljs.core.nth.call(null,inst_26880,(1),null);var inst_26883 = cljs.core.sequential_QMARK_.call(null,inst_26881__$1);var state_26924__$1 = (function (){var statearr_26926 = state_26924;(statearr_26926[(8)] = inst_26882);
(statearr_26926[(7)] = inst_26881__$1);
return statearr_26926;
})();if(inst_26883)
{var statearr_26927_26962 = state_26924__$1;(statearr_26927_26962[(1)] = (8));
} else
{var statearr_26928_26963 = state_26924__$1;(statearr_26928_26963[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26925 === (20)))
{var inst_26881 = (state_26924[(7)]);var state_26924__$1 = state_26924;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26924__$1,(23),inst_26881);
} else
{if((state_val_26925 === (1)))
{var state_26924__$1 = state_26924;var statearr_26929_26964 = state_26924__$1;(statearr_26929_26964[(2)] = null);
(statearr_26929_26964[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26925 === (4)))
{var state_26924__$1 = state_26924;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26924__$1,(7),ocomm);
} else
{if((state_val_26925 === (15)))
{var inst_26904 = (state_26924[(2)]);var state_26924__$1 = state_26924;var statearr_26930_26965 = state_26924__$1;(statearr_26930_26965[(2)] = inst_26904);
(statearr_26930_26965[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26925 === (21)))
{var state_26924__$1 = state_26924;var statearr_26931_26966 = state_26924__$1;(statearr_26931_26966[(2)] = null);
(statearr_26931_26966[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26925 === (13)))
{var inst_26887 = (state_26924[(9)]);var state_26924__$1 = state_26924;var statearr_26932_26967 = state_26924__$1;(statearr_26932_26967[(2)] = inst_26887);
(statearr_26932_26967[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26925 === (22)))
{var inst_26913 = (state_26924[(2)]);var state_26924__$1 = state_26924;var statearr_26933_26968 = state_26924__$1;(statearr_26933_26968[(2)] = inst_26913);
(statearr_26933_26968[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26925 === (6)))
{var inst_26920 = (state_26924[(2)]);var state_26924__$1 = state_26924;var statearr_26934_26969 = state_26924__$1;(statearr_26934_26969[(2)] = inst_26920);
(statearr_26934_26969[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26925 === (17)))
{var state_26924__$1 = state_26924;var statearr_26935_26970 = state_26924__$1;(statearr_26935_26970[(2)] = null);
(statearr_26935_26970[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26925 === (3)))
{var inst_26922 = (state_26924[(2)]);var state_26924__$1 = state_26924;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26924__$1,inst_26922);
} else
{if((state_val_26925 === (12)))
{var inst_26906 = (state_26924[(2)]);var state_26924__$1 = state_26924;var statearr_26936_26971 = state_26924__$1;(statearr_26936_26971[(2)] = inst_26906);
(statearr_26936_26971[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26925 === (2)))
{var state_26924__$1 = state_26924;var statearr_26937_26972 = state_26924__$1;(statearr_26937_26972[(1)] = (4));

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26925 === (23)))
{var inst_26910 = (state_26924[(2)]);var state_26924__$1 = state_26924;var statearr_26939_26973 = state_26924__$1;(statearr_26939_26973[(2)] = inst_26910);
(statearr_26939_26973[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26925 === (19)))
{var inst_26897 = (state_26924[(2)]);var state_26924__$1 = state_26924;var statearr_26940_26974 = state_26924__$1;(statearr_26940_26974[(2)] = inst_26897);
(statearr_26940_26974[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26925 === (11)))
{var inst_26886 = (state_26924[(10)]);var inst_26889 = cljs.core.empty_QMARK_.call(null,inst_26886);var state_26924__$1 = state_26924;if(inst_26889)
{var statearr_26941_26975 = state_26924__$1;(statearr_26941_26975[(1)] = (13));
} else
{var statearr_26942_26976 = state_26924__$1;(statearr_26942_26976[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26925 === (9)))
{var inst_26881 = (state_26924[(7)]);var state_26924__$1 = state_26924;if(cljs.core.truth_(inst_26881))
{var statearr_26943_26977 = state_26924__$1;(statearr_26943_26977[(1)] = (20));
} else
{var statearr_26944_26978 = state_26924__$1;(statearr_26944_26978[(1)] = (21));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26925 === (5)))
{var state_26924__$1 = state_26924;var statearr_26945_26979 = state_26924__$1;(statearr_26945_26979[(2)] = null);
(statearr_26945_26979[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26925 === (14)))
{var inst_26886 = (state_26924[(10)]);var inst_26892 = cljs.core.rest.call(null,inst_26886);var inst_26893 = cljs.core.first.call(null,inst_26886);var state_26924__$1 = (function (){var statearr_26946 = state_26924;(statearr_26946[(11)] = inst_26892);
return statearr_26946;
})();if(cljs.core.truth_(inst_26893))
{var statearr_26947_26980 = state_26924__$1;(statearr_26947_26980[(1)] = (16));
} else
{var statearr_26948_26981 = state_26924__$1;(statearr_26948_26981[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26925 === (16)))
{var inst_26886 = (state_26924[(10)]);var inst_26895 = cljs.core.first.call(null,inst_26886);var state_26924__$1 = state_26924;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26924__$1,(19),inst_26895);
} else
{if((state_val_26925 === (10)))
{var inst_26882 = (state_26924[(8)]);var inst_26915 = (state_26924[(2)]);var inst_26916 = cljs.core.apply.call(null,handler,inst_26915,inst_26882);var state_26924__$1 = (function (){var statearr_26949 = state_26924;(statearr_26949[(12)] = inst_26916);
return statearr_26949;
})();var statearr_26950_26982 = state_26924__$1;(statearr_26950_26982[(2)] = null);
(statearr_26950_26982[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26925 === (18)))
{var inst_26887 = (state_26924[(9)]);var inst_26892 = (state_26924[(11)]);var inst_26900 = (state_26924[(2)]);var inst_26901 = cljs.core.conj.call(null,inst_26887,inst_26900);var inst_26886 = inst_26892;var inst_26887__$1 = inst_26901;var state_26924__$1 = (function (){var statearr_26951 = state_26924;(statearr_26951[(9)] = inst_26887__$1);
(statearr_26951[(10)] = inst_26886);
return statearr_26951;
})();var statearr_26952_26983 = state_26924__$1;(statearr_26952_26983[(2)] = null);
(statearr_26952_26983[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26925 === (8)))
{var inst_26881 = (state_26924[(7)]);var inst_26885 = cljs.core.PersistentVector.EMPTY;var inst_26886 = inst_26881;var inst_26887 = inst_26885;var state_26924__$1 = (function (){var statearr_26953 = state_26924;(statearr_26953[(9)] = inst_26887);
(statearr_26953[(10)] = inst_26886);
return statearr_26953;
})();var statearr_26954_26984 = state_26924__$1;(statearr_26954_26984[(2)] = null);
(statearr_26954_26984[(1)] = (11));
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
});})(c__5708__auto__))
;return ((function (switch__5693__auto__,c__5708__auto__){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_26958 = [null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_26958[(0)] = state_machine__5694__auto__);
(statearr_26958[(1)] = (1));
return statearr_26958;
});
var state_machine__5694__auto____1 = (function (state_26924){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_26924);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e26959){if((e26959 instanceof Object))
{var ex__5697__auto__ = e26959;var statearr_26960_26985 = state_26924;(statearr_26960_26985[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26924);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e26959;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__26986 = state_26924;
state_26924 = G__26986;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_26924){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_26924);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto__))
})();var state__5710__auto__ = (function (){var statearr_26961 = f__5709__auto__.call(null);(statearr_26961[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto__);
return statearr_26961;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
});})(c__5708__auto__))
);
return c__5708__auto__;
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
var G__26989__delegate = function (req_args){var temp__4124__auto__ = cljs.core.apply.call(null,request_handler,req_args);if(cljs.core.truth_(temp__4124__auto__))
{var r = temp__4124__auto__;var rseq = ((cljs.core.sequential_QMARK_.call(null,r))?r:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [r], null));var vec__26988 = rseq;var rcomm = cljs.core.nth.call(null,vec__26988,(0),null);var result_handler_args = cljs.core.nthnext.call(null,vec__26988,(1));return cljs.core.async.put_BANG_.call(null,ocomm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rcomm,result_handler_args], null));
} else
{return null;
}
};
var G__26989 = function (var_args){
var req_args = null;if (arguments.length > 0) {
  req_args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__26989__delegate.call(this,req_args);};
G__26989.cljs$lang$maxFixedArity = 0;
G__26989.cljs$lang$applyTo = (function (arglist__26990){
var req_args = cljs.core.seq(arglist__26990);
return G__26989__delegate(req_args);
});
G__26989.cljs$core$IFn$_invoke$arity$variadic = G__26989__delegate;
return G__26989;
})()
;
;})(ocomm,_))
});
/**
* @param {...*} var_args
*/
clustermap.api.log_api = (function() { 
var log_api__delegate = function (f,args){var ch = cljs.core.apply.call(null,f,args);var c__5708__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5708__auto__,ch){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto__,ch){
return (function (state_27008){var state_val_27009 = (state_27008[(1)]);if((state_val_27009 === (2)))
{var inst_27005 = (state_27008[(2)]);var inst_27006 = console.log(inst_27005);var state_27008__$1 = state_27008;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27008__$1,inst_27006);
} else
{if((state_val_27009 === (1)))
{var state_27008__$1 = state_27008;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27008__$1,(2),ch);
} else
{return null;
}
}
});})(c__5708__auto__,ch))
;return ((function (switch__5693__auto__,c__5708__auto__,ch){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_27013 = [null,null,null,null,null,null,null];(statearr_27013[(0)] = state_machine__5694__auto__);
(statearr_27013[(1)] = (1));
return statearr_27013;
});
var state_machine__5694__auto____1 = (function (state_27008){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_27008);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e27014){if((e27014 instanceof Object))
{var ex__5697__auto__ = e27014;var statearr_27015_27017 = state_27008;(statearr_27015_27017[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27008);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e27014;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__27018 = state_27008;
state_27008 = G__27018;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_27008){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_27008);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto__,ch))
})();var state__5710__auto__ = (function (){var statearr_27016 = f__5709__auto__.call(null);(statearr_27016[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto__);
return statearr_27016;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
});})(c__5708__auto__,ch))
);
return c__5708__auto__;
};
var log_api = function (f,var_args){
var args = null;if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return log_api__delegate.call(this,f,args);};
log_api.cljs$lang$maxFixedArity = 1;
log_api.cljs$lang$applyTo = (function (arglist__27019){
var f = cljs.core.first(arglist__27019);
var args = cljs.core.rest(arglist__27019);
return log_api__delegate(f,args);
});
log_api.cljs$core$IFn$_invoke$arity$variadic = log_api__delegate;
return log_api;
})()
;
clustermap.api.map_json_params = (function map_json_params(m){return clojure.string.join.call(null,"&",cljs.core.map.call(null,(function (p__27022){var vec__27023 = p__27022;var k = cljs.core.nth.call(null,vec__27023,(0),null);var v = cljs.core.nth.call(null,vec__27023,(1),null);return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,k))+"="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(JSON.stringify(cljs.core.clj__GT_js.call(null,v))));
}),m));
});
/**
* put the results of an api call into an atom... makes ad-hoc api calls easy
*/
clustermap.api.fetch = (function fetch(comm){var r = cljs.core.atom.call(null,null);var c__5708__auto___27050 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5708__auto___27050,r){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___27050,r){
return (function (state_27041){var state_val_27042 = (state_27041[(1)]);if((state_val_27042 === (2)))
{var inst_27038 = (state_27041[(2)]);var inst_27039 = cljs.core.reset_BANG_.call(null,r,inst_27038);var state_27041__$1 = state_27041;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27041__$1,inst_27039);
} else
{if((state_val_27042 === (1)))
{var state_27041__$1 = state_27041;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27041__$1,(2),comm);
} else
{return null;
}
}
});})(c__5708__auto___27050,r))
;return ((function (switch__5693__auto__,c__5708__auto___27050,r){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_27046 = [null,null,null,null,null,null,null];(statearr_27046[(0)] = state_machine__5694__auto__);
(statearr_27046[(1)] = (1));
return statearr_27046;
});
var state_machine__5694__auto____1 = (function (state_27041){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_27041);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e27047){if((e27047 instanceof Object))
{var ex__5697__auto__ = e27047;var statearr_27048_27051 = state_27041;(statearr_27048_27051[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27041);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e27047;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__27052 = state_27041;
state_27041 = G__27052;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_27041){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_27041);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___27050,r))
})();var state__5710__auto__ = (function (){var statearr_27049 = f__5709__auto__.call(null);(statearr_27049[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___27050);
return statearr_27049;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
});})(c__5708__auto___27050,r))
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
boundarylines.cljs$lang$applyTo = (function (arglist__27053){
var id = cljs.core.first(arglist__27053);
arglist__27053 = cljs.core.next(arglist__27053);
var tolerance = cljs.core.first(arglist__27053);
var opts = cljs.core.rest(arglist__27053);
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
boundaryline_collection_index.cljs$lang$applyTo = (function (arglist__27054){
var id = cljs.core.first(arglist__27054);
var opts = cljs.core.rest(arglist__27054);
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
boundaryline_set.cljs$lang$applyTo = (function (arglist__27055){
var ids = cljs.core.first(arglist__27055);
arglist__27055 = cljs.core.next(arglist__27055);
var tolerance = cljs.core.first(arglist__27055);
var opts = cljs.core.rest(arglist__27055);
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
var boundaryline_collection_view__delegate = function (collection_id,tolerance,bounds,p__27056){var map__27058 = p__27056;var map__27058__$1 = ((cljs.core.seq_QMARK_.call(null,map__27058))?cljs.core.apply.call(null,cljs.core.hash_map,map__27058):map__27058);var opts = map__27058__$1;var boundaryline_ids = cljs.core.get.call(null,map__27058__$1,new cljs.core.Keyword(null,"boundaryline-ids","boundaryline-ids",1352066869));var opts__$1 = cljs.core.flatten.call(null,cljs.core.seq.call(null,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"boundaryline-ids","boundaryline-ids",1352066869))));return cljs.core.apply.call(null,clustermap.api.POST,("/api/boundaryline-collection-view/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,collection_id))+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(tolerance)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"bounds","bounds",1691609455),bounds,new cljs.core.Keyword(null,"boundaryline-ids","boundaryline-ids",1352066869),boundaryline_ids], null),opts__$1);
};
var boundaryline_collection_view = function (collection_id,tolerance,bounds,var_args){
var p__27056 = null;if (arguments.length > 3) {
  p__27056 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return boundaryline_collection_view__delegate.call(this,collection_id,tolerance,bounds,p__27056);};
boundaryline_collection_view.cljs$lang$maxFixedArity = 3;
boundaryline_collection_view.cljs$lang$applyTo = (function (arglist__27059){
var collection_id = cljs.core.first(arglist__27059);
arglist__27059 = cljs.core.next(arglist__27059);
var tolerance = cljs.core.first(arglist__27059);
arglist__27059 = cljs.core.next(arglist__27059);
var bounds = cljs.core.first(arglist__27059);
var p__27056 = cljs.core.rest(arglist__27059);
return boundaryline_collection_view__delegate(collection_id,tolerance,bounds,p__27056);
});
boundaryline_collection_view.cljs$core$IFn$_invoke$arity$variadic = boundaryline_collection_view__delegate;
return boundaryline_collection_view;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.boundaryline_aggregation = (function() { 
var boundaryline_aggregation__delegate = function (index,type,blcoll,attr,filter,bounds,p__27060){var vec__27062 = p__27060;var type_ids = cljs.core.nth.call(null,vec__27062,(0),null);return clustermap.api.POST.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/boundaryline-agg/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(index)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(blcoll)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(attr)+"?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids))),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"filter","filter",-948537934),filter,new cljs.core.Keyword(null,"bounds","bounds",1691609455),bounds], null));
};
var boundaryline_aggregation = function (index,type,blcoll,attr,filter,bounds,var_args){
var p__27060 = null;if (arguments.length > 6) {
  p__27060 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 6),0);} 
return boundaryline_aggregation__delegate.call(this,index,type,blcoll,attr,filter,bounds,p__27060);};
boundaryline_aggregation.cljs$lang$maxFixedArity = 6;
boundaryline_aggregation.cljs$lang$applyTo = (function (arglist__27063){
var index = cljs.core.first(arglist__27063);
arglist__27063 = cljs.core.next(arglist__27063);
var type = cljs.core.first(arglist__27063);
arglist__27063 = cljs.core.next(arglist__27063);
var blcoll = cljs.core.first(arglist__27063);
arglist__27063 = cljs.core.next(arglist__27063);
var attr = cljs.core.first(arglist__27063);
arglist__27063 = cljs.core.next(arglist__27063);
var filter = cljs.core.first(arglist__27063);
arglist__27063 = cljs.core.next(arglist__27063);
var bounds = cljs.core.first(arglist__27063);
var p__27060 = cljs.core.rest(arglist__27063);
return boundaryline_aggregation__delegate(index,type,blcoll,attr,filter,bounds,p__27060);
});
boundaryline_aggregation.cljs$core$IFn$_invoke$arity$variadic = boundaryline_aggregation__delegate;
return boundaryline_aggregation;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.summary_stats = (function() { 
var summary_stats__delegate = function (index,type,statsattrs,filter,bounds,p__27064){var vec__27066 = p__27064;var type_ids = cljs.core.nth.call(null,vec__27066,(0),null);return clustermap.api.POST.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/summary-stats/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(index)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)+"?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids))),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"statsattrs","statsattrs",1724366357),statsattrs,new cljs.core.Keyword(null,"filter","filter",-948537934),filter,new cljs.core.Keyword(null,"bounds","bounds",1691609455),bounds], null));
};
var summary_stats = function (index,type,statsattrs,filter,bounds,var_args){
var p__27064 = null;if (arguments.length > 5) {
  p__27064 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);} 
return summary_stats__delegate.call(this,index,type,statsattrs,filter,bounds,p__27064);};
summary_stats.cljs$lang$maxFixedArity = 5;
summary_stats.cljs$lang$applyTo = (function (arglist__27067){
var index = cljs.core.first(arglist__27067);
arglist__27067 = cljs.core.next(arglist__27067);
var type = cljs.core.first(arglist__27067);
arglist__27067 = cljs.core.next(arglist__27067);
var statsattrs = cljs.core.first(arglist__27067);
arglist__27067 = cljs.core.next(arglist__27067);
var filter = cljs.core.first(arglist__27067);
arglist__27067 = cljs.core.next(arglist__27067);
var bounds = cljs.core.first(arglist__27067);
var p__27064 = cljs.core.rest(arglist__27067);
return summary_stats__delegate(index,type,statsattrs,filter,bounds,p__27064);
});
summary_stats.cljs$core$IFn$_invoke$arity$variadic = summary_stats__delegate;
return summary_stats;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.location_lists = (function() { 
var location_lists__delegate = function (index,type,location_attr,attrs,max_count,filter,bounds,p__27068){var vec__27070 = p__27068;var type_ids = cljs.core.nth.call(null,vec__27070,(0),null);return clustermap.api.POST.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/location-lists/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(index)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(location_attr)+"?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids))),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"max-count","max-count",1539185305),max_count,new cljs.core.Keyword(null,"attrs","attrs",-2090668713),attrs,new cljs.core.Keyword(null,"filter","filter",-948537934),filter,new cljs.core.Keyword(null,"bounds","bounds",1691609455),bounds], null));
};
var location_lists = function (index,type,location_attr,attrs,max_count,filter,bounds,var_args){
var p__27068 = null;if (arguments.length > 7) {
  p__27068 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 7),0);} 
return location_lists__delegate.call(this,index,type,location_attr,attrs,max_count,filter,bounds,p__27068);};
location_lists.cljs$lang$maxFixedArity = 7;
location_lists.cljs$lang$applyTo = (function (arglist__27071){
var index = cljs.core.first(arglist__27071);
arglist__27071 = cljs.core.next(arglist__27071);
var type = cljs.core.first(arglist__27071);
arglist__27071 = cljs.core.next(arglist__27071);
var location_attr = cljs.core.first(arglist__27071);
arglist__27071 = cljs.core.next(arglist__27071);
var attrs = cljs.core.first(arglist__27071);
arglist__27071 = cljs.core.next(arglist__27071);
var max_count = cljs.core.first(arglist__27071);
arglist__27071 = cljs.core.next(arglist__27071);
var filter = cljs.core.first(arglist__27071);
arglist__27071 = cljs.core.next(arglist__27071);
var bounds = cljs.core.first(arglist__27071);
var p__27068 = cljs.core.rest(arglist__27071);
return location_lists__delegate(index,type,location_attr,attrs,max_count,filter,bounds,p__27068);
});
location_lists.cljs$core$IFn$_invoke$arity$variadic = location_lists__delegate;
return location_lists;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.simple_table = (function() { 
var simple_table__delegate = function (index,type,filter_spec,bounds,sort_spec,from,size,p__27072){var vec__27074 = p__27072;var type_ids = cljs.core.nth.call(null,vec__27074,(0),null);return clustermap.api.POST.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/simple-table/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(index)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)+"?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids))),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"filter","filter",-948537934),filter_spec,new cljs.core.Keyword(null,"bounds","bounds",1691609455),bounds,new cljs.core.Keyword(null,"sort","sort",953465918),sort_spec,new cljs.core.Keyword(null,"from","from",1815293044),from,new cljs.core.Keyword(null,"size","size",1098693007),size], null));
};
var simple_table = function (index,type,filter_spec,bounds,sort_spec,from,size,var_args){
var p__27072 = null;if (arguments.length > 7) {
  p__27072 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 7),0);} 
return simple_table__delegate.call(this,index,type,filter_spec,bounds,sort_spec,from,size,p__27072);};
simple_table.cljs$lang$maxFixedArity = 7;
simple_table.cljs$lang$applyTo = (function (arglist__27075){
var index = cljs.core.first(arglist__27075);
arglist__27075 = cljs.core.next(arglist__27075);
var type = cljs.core.first(arglist__27075);
arglist__27075 = cljs.core.next(arglist__27075);
var filter_spec = cljs.core.first(arglist__27075);
arglist__27075 = cljs.core.next(arglist__27075);
var bounds = cljs.core.first(arglist__27075);
arglist__27075 = cljs.core.next(arglist__27075);
var sort_spec = cljs.core.first(arglist__27075);
arglist__27075 = cljs.core.next(arglist__27075);
var from = cljs.core.first(arglist__27075);
arglist__27075 = cljs.core.next(arglist__27075);
var size = cljs.core.first(arglist__27075);
var p__27072 = cljs.core.rest(arglist__27075);
return simple_table__delegate(index,type,filter_spec,bounds,sort_spec,from,size,p__27072);
});
simple_table.cljs$core$IFn$_invoke$arity$variadic = simple_table__delegate;
return simple_table;
})()
;
clustermap.api.timeline = (function timeline(index,type,filter_spec,bounds,time_variable,after,before,interval,metric_variables){return clustermap.api.POST.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/timeline/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(index)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),filter_spec,new cljs.core.Keyword(null,"bounds","bounds",1691609455),bounds,new cljs.core.Keyword(null,"time-variable","time-variable",-1643449307),time_variable,new cljs.core.Keyword(null,"after","after",594996914),after,new cljs.core.Keyword(null,"before","before",-1633692388),before,new cljs.core.Keyword(null,"interval","interval",1708495417),interval,new cljs.core.Keyword(null,"metric-variables","metric-variables",-1123283594),metric_variables], null));
});
