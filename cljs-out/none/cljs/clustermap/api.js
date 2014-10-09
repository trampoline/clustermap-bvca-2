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
var AJAX__delegate = function (url,p__56770){var map__56774 = p__56770;var map__56774__$1 = ((cljs.core.seq_QMARK_.call(null,map__56774))?cljs.core.apply.call(null,cljs.core.hash_map,map__56774):map__56774);var opts = map__56774__$1;var content = cljs.core.get.call(null,map__56774__$1,new cljs.core.Keyword(null,"content","content",15833224));var method = cljs.core.get.call(null,map__56774__$1,new cljs.core.Keyword(null,"method","method",55703592));var raw = cljs.core.get.call(null,map__56774__$1,new cljs.core.Keyword(null,"raw","raw",1604651272));var comm = cljs.core.async.chan.call(null,(1));goog.net.XhrIo.send(url,((function (comm,map__56774,map__56774__$1,opts,content,method,raw){
return (function (event){cljs.core.async.put_BANG_.call(null,comm,((function (comm,map__56774,map__56774__$1,opts,content,method,raw){
return (function (d){if(cljs.core.truth_(raw))
{return d;
} else
{return cljs.core.js__GT_clj.call(null,d,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true);
}
});})(comm,map__56774,map__56774__$1,opts,content,method,raw))
.call(null,(JSON.parse(event.target.getResponseText())["data"])));
return cljs.core.async.close_BANG_.call(null,comm);
});})(comm,map__56774,map__56774__$1,opts,content,method,raw))
,(function (){var or__3558__auto__ = (function (){var G__56776 = method;var G__56776__$1 = (((G__56776 == null))?null:cljs.core.name.call(null,G__56776));var G__56776__$2 = (((G__56776__$1 == null))?null:clojure.string.upper_case.call(null,G__56776__$1));return G__56776__$2;
})();if(cljs.core.truth_(or__3558__auto__))
{return or__3558__auto__;
} else
{return "GET";
}
})(),(cljs.core.truth_(content)?JSON.stringify(cljs.core.clj__GT_js.call(null,content)):null),(cljs.core.truth_(content)?cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, ["Content-Type","application/json"], null)):null));
return comm;
};
var AJAX = function (url,var_args){
var p__56770 = null;if (arguments.length > 1) {
  p__56770 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return AJAX__delegate.call(this,url,p__56770);};
AJAX.cljs$lang$maxFixedArity = 1;
AJAX.cljs$lang$applyTo = (function (arglist__56777){
var url = cljs.core.first(arglist__56777);
var p__56770 = cljs.core.rest(arglist__56777);
return AJAX__delegate(url,p__56770);
});
AJAX.cljs$core$IFn$_invoke$arity$variadic = AJAX__delegate;
return AJAX;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.GET = (function() { 
var GET__delegate = function (url,p__56778){var map__56780 = p__56778;var map__56780__$1 = ((cljs.core.seq_QMARK_.call(null,map__56780))?cljs.core.apply.call(null,cljs.core.hash_map,map__56780):map__56780);var opts = map__56780__$1;return cljs.core.apply.call(null,clustermap.api.AJAX,url,cljs.core.apply.call(null,cljs.core.concat,cljs.core.merge.call(null,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"method","method",55703592),"GET"], null))));
};
var GET = function (url,var_args){
var p__56778 = null;if (arguments.length > 1) {
  p__56778 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return GET__delegate.call(this,url,p__56778);};
GET.cljs$lang$maxFixedArity = 1;
GET.cljs$lang$applyTo = (function (arglist__56781){
var url = cljs.core.first(arglist__56781);
var p__56778 = cljs.core.rest(arglist__56781);
return GET__delegate(url,p__56778);
});
GET.cljs$core$IFn$_invoke$arity$variadic = GET__delegate;
return GET;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.POST = (function() { 
var POST__delegate = function (url,content,p__56782){var map__56784 = p__56782;var map__56784__$1 = ((cljs.core.seq_QMARK_.call(null,map__56784))?cljs.core.apply.call(null,cljs.core.hash_map,map__56784):map__56784);var opts = map__56784__$1;return cljs.core.apply.call(null,clustermap.api.AJAX,url,cljs.core.apply.call(null,cljs.core.concat,cljs.core.merge.call(null,opts,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"content","content",15833224),content], null))));
};
var POST = function (url,content,var_args){
var p__56782 = null;if (arguments.length > 2) {
  p__56782 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return POST__delegate.call(this,url,content,p__56782);};
POST.cljs$lang$maxFixedArity = 2;
POST.cljs$lang$applyTo = (function (arglist__56785){
var url = cljs.core.first(arglist__56785);
arglist__56785 = cljs.core.next(arglist__56785);
var content = cljs.core.first(arglist__56785);
var p__56782 = cljs.core.rest(arglist__56785);
return POST__delegate(url,content,p__56782);
});
POST.cljs$core$IFn$_invoke$arity$variadic = POST__delegate;
return POST;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.PUT = (function() { 
var PUT__delegate = function (url,content,p__56786){var map__56788 = p__56786;var map__56788__$1 = ((cljs.core.seq_QMARK_.call(null,map__56788))?cljs.core.apply.call(null,cljs.core.hash_map,map__56788):map__56788);var opts = map__56788__$1;return cljs.core.apply.call(null,clustermap.api.AJAX,url,cljs.core.apply.call(null,cljs.core.concat,cljs.core.merge.call(null,opts,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"PUT",new cljs.core.Keyword(null,"content","content",15833224),content], null))));
};
var PUT = function (url,content,var_args){
var p__56786 = null;if (arguments.length > 2) {
  p__56786 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return PUT__delegate.call(this,url,content,p__56786);};
PUT.cljs$lang$maxFixedArity = 2;
PUT.cljs$lang$applyTo = (function (arglist__56789){
var url = cljs.core.first(arglist__56789);
arglist__56789 = cljs.core.next(arglist__56789);
var content = cljs.core.first(arglist__56789);
var p__56786 = cljs.core.rest(arglist__56789);
return PUT__delegate(url,content,p__56786);
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
return (function (state_56924){var state_val_56925 = (state_56924[(1)]);if((state_val_56925 === (7)))
{var inst_56881 = (state_56924[(7)]);var inst_56880 = (state_56924[(2)]);var inst_56881__$1 = cljs.core.nth.call(null,inst_56880,(0),null);var inst_56882 = cljs.core.nth.call(null,inst_56880,(1),null);var inst_56883 = cljs.core.sequential_QMARK_.call(null,inst_56881__$1);var state_56924__$1 = (function (){var statearr_56926 = state_56924;(statearr_56926[(7)] = inst_56881__$1);
(statearr_56926[(8)] = inst_56882);
return statearr_56926;
})();if(inst_56883)
{var statearr_56927_56962 = state_56924__$1;(statearr_56927_56962[(1)] = (8));
} else
{var statearr_56928_56963 = state_56924__$1;(statearr_56928_56963[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_56925 === (20)))
{var inst_56881 = (state_56924[(7)]);var state_56924__$1 = state_56924;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_56924__$1,(23),inst_56881);
} else
{if((state_val_56925 === (1)))
{var state_56924__$1 = state_56924;var statearr_56929_56964 = state_56924__$1;(statearr_56929_56964[(2)] = null);
(statearr_56929_56964[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_56925 === (4)))
{var state_56924__$1 = state_56924;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_56924__$1,(7),ocomm);
} else
{if((state_val_56925 === (15)))
{var inst_56904 = (state_56924[(2)]);var state_56924__$1 = state_56924;var statearr_56930_56965 = state_56924__$1;(statearr_56930_56965[(2)] = inst_56904);
(statearr_56930_56965[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_56925 === (21)))
{var state_56924__$1 = state_56924;var statearr_56931_56966 = state_56924__$1;(statearr_56931_56966[(2)] = null);
(statearr_56931_56966[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_56925 === (13)))
{var inst_56887 = (state_56924[(9)]);var state_56924__$1 = state_56924;var statearr_56932_56967 = state_56924__$1;(statearr_56932_56967[(2)] = inst_56887);
(statearr_56932_56967[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_56925 === (22)))
{var inst_56913 = (state_56924[(2)]);var state_56924__$1 = state_56924;var statearr_56933_56968 = state_56924__$1;(statearr_56933_56968[(2)] = inst_56913);
(statearr_56933_56968[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_56925 === (6)))
{var inst_56920 = (state_56924[(2)]);var state_56924__$1 = state_56924;var statearr_56934_56969 = state_56924__$1;(statearr_56934_56969[(2)] = inst_56920);
(statearr_56934_56969[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_56925 === (17)))
{var state_56924__$1 = state_56924;var statearr_56935_56970 = state_56924__$1;(statearr_56935_56970[(2)] = null);
(statearr_56935_56970[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_56925 === (3)))
{var inst_56922 = (state_56924[(2)]);var state_56924__$1 = state_56924;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_56924__$1,inst_56922);
} else
{if((state_val_56925 === (12)))
{var inst_56906 = (state_56924[(2)]);var state_56924__$1 = state_56924;var statearr_56936_56971 = state_56924__$1;(statearr_56936_56971[(2)] = inst_56906);
(statearr_56936_56971[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_56925 === (2)))
{var state_56924__$1 = state_56924;var statearr_56937_56972 = state_56924__$1;(statearr_56937_56972[(1)] = (4));

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_56925 === (23)))
{var inst_56910 = (state_56924[(2)]);var state_56924__$1 = state_56924;var statearr_56939_56973 = state_56924__$1;(statearr_56939_56973[(2)] = inst_56910);
(statearr_56939_56973[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_56925 === (19)))
{var inst_56897 = (state_56924[(2)]);var state_56924__$1 = state_56924;var statearr_56940_56974 = state_56924__$1;(statearr_56940_56974[(2)] = inst_56897);
(statearr_56940_56974[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_56925 === (11)))
{var inst_56886 = (state_56924[(10)]);var inst_56889 = cljs.core.empty_QMARK_.call(null,inst_56886);var state_56924__$1 = state_56924;if(inst_56889)
{var statearr_56941_56975 = state_56924__$1;(statearr_56941_56975[(1)] = (13));
} else
{var statearr_56942_56976 = state_56924__$1;(statearr_56942_56976[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_56925 === (9)))
{var inst_56881 = (state_56924[(7)]);var state_56924__$1 = state_56924;if(cljs.core.truth_(inst_56881))
{var statearr_56943_56977 = state_56924__$1;(statearr_56943_56977[(1)] = (20));
} else
{var statearr_56944_56978 = state_56924__$1;(statearr_56944_56978[(1)] = (21));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_56925 === (5)))
{var state_56924__$1 = state_56924;var statearr_56945_56979 = state_56924__$1;(statearr_56945_56979[(2)] = null);
(statearr_56945_56979[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_56925 === (14)))
{var inst_56886 = (state_56924[(10)]);var inst_56892 = cljs.core.rest.call(null,inst_56886);var inst_56893 = cljs.core.first.call(null,inst_56886);var state_56924__$1 = (function (){var statearr_56946 = state_56924;(statearr_56946[(11)] = inst_56892);
return statearr_56946;
})();if(cljs.core.truth_(inst_56893))
{var statearr_56947_56980 = state_56924__$1;(statearr_56947_56980[(1)] = (16));
} else
{var statearr_56948_56981 = state_56924__$1;(statearr_56948_56981[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_56925 === (16)))
{var inst_56886 = (state_56924[(10)]);var inst_56895 = cljs.core.first.call(null,inst_56886);var state_56924__$1 = state_56924;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_56924__$1,(19),inst_56895);
} else
{if((state_val_56925 === (10)))
{var inst_56882 = (state_56924[(8)]);var inst_56915 = (state_56924[(2)]);var inst_56916 = cljs.core.apply.call(null,handler,inst_56915,inst_56882);var state_56924__$1 = (function (){var statearr_56949 = state_56924;(statearr_56949[(12)] = inst_56916);
return statearr_56949;
})();var statearr_56950_56982 = state_56924__$1;(statearr_56950_56982[(2)] = null);
(statearr_56950_56982[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_56925 === (18)))
{var inst_56892 = (state_56924[(11)]);var inst_56887 = (state_56924[(9)]);var inst_56900 = (state_56924[(2)]);var inst_56901 = cljs.core.conj.call(null,inst_56887,inst_56900);var inst_56886 = inst_56892;var inst_56887__$1 = inst_56901;var state_56924__$1 = (function (){var statearr_56951 = state_56924;(statearr_56951[(9)] = inst_56887__$1);
(statearr_56951[(10)] = inst_56886);
return statearr_56951;
})();var statearr_56952_56983 = state_56924__$1;(statearr_56952_56983[(2)] = null);
(statearr_56952_56983[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_56925 === (8)))
{var inst_56881 = (state_56924[(7)]);var inst_56885 = cljs.core.PersistentVector.EMPTY;var inst_56886 = inst_56881;var inst_56887 = inst_56885;var state_56924__$1 = (function (){var statearr_56953 = state_56924;(statearr_56953[(9)] = inst_56887);
(statearr_56953[(10)] = inst_56886);
return statearr_56953;
})();var statearr_56954_56984 = state_56924__$1;(statearr_56954_56984[(2)] = null);
(statearr_56954_56984[(1)] = (11));
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
var state_machine__5694__auto____0 = (function (){var statearr_56958 = [null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_56958[(0)] = state_machine__5694__auto__);
(statearr_56958[(1)] = (1));
return statearr_56958;
});
var state_machine__5694__auto____1 = (function (state_56924){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_56924);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e56959){if((e56959 instanceof Object))
{var ex__5697__auto__ = e56959;var statearr_56960_56985 = state_56924;(statearr_56960_56985[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_56924);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e56959;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__56986 = state_56924;
state_56924 = G__56986;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_56924){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_56924);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto__))
})();var state__5710__auto__ = (function (){var statearr_56961 = f__5709__auto__.call(null);(statearr_56961[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto__);
return statearr_56961;
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
var G__56989__delegate = function (req_args){var temp__4124__auto__ = cljs.core.apply.call(null,request_handler,req_args);if(cljs.core.truth_(temp__4124__auto__))
{var r = temp__4124__auto__;var rseq = ((cljs.core.sequential_QMARK_.call(null,r))?r:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [r], null));var vec__56988 = rseq;var rcomm = cljs.core.nth.call(null,vec__56988,(0),null);var result_handler_args = cljs.core.nthnext.call(null,vec__56988,(1));return cljs.core.async.put_BANG_.call(null,ocomm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rcomm,result_handler_args], null));
} else
{return null;
}
};
var G__56989 = function (var_args){
var req_args = null;if (arguments.length > 0) {
  req_args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__56989__delegate.call(this,req_args);};
G__56989.cljs$lang$maxFixedArity = 0;
G__56989.cljs$lang$applyTo = (function (arglist__56990){
var req_args = cljs.core.seq(arglist__56990);
return G__56989__delegate(req_args);
});
G__56989.cljs$core$IFn$_invoke$arity$variadic = G__56989__delegate;
return G__56989;
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
return (function (state_57008){var state_val_57009 = (state_57008[(1)]);if((state_val_57009 === (2)))
{var inst_57005 = (state_57008[(2)]);var inst_57006 = console.log(inst_57005);var state_57008__$1 = state_57008;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_57008__$1,inst_57006);
} else
{if((state_val_57009 === (1)))
{var state_57008__$1 = state_57008;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_57008__$1,(2),ch);
} else
{return null;
}
}
});})(c__5708__auto__,ch))
;return ((function (switch__5693__auto__,c__5708__auto__,ch){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_57013 = [null,null,null,null,null,null,null];(statearr_57013[(0)] = state_machine__5694__auto__);
(statearr_57013[(1)] = (1));
return statearr_57013;
});
var state_machine__5694__auto____1 = (function (state_57008){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_57008);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e57014){if((e57014 instanceof Object))
{var ex__5697__auto__ = e57014;var statearr_57015_57017 = state_57008;(statearr_57015_57017[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_57008);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e57014;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__57018 = state_57008;
state_57008 = G__57018;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_57008){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_57008);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto__,ch))
})();var state__5710__auto__ = (function (){var statearr_57016 = f__5709__auto__.call(null);(statearr_57016[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto__);
return statearr_57016;
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
log_api.cljs$lang$applyTo = (function (arglist__57019){
var f = cljs.core.first(arglist__57019);
var args = cljs.core.rest(arglist__57019);
return log_api__delegate(f,args);
});
log_api.cljs$core$IFn$_invoke$arity$variadic = log_api__delegate;
return log_api;
})()
;
clustermap.api.map_json_params = (function map_json_params(m){return clojure.string.join.call(null,"&",cljs.core.map.call(null,(function (p__57022){var vec__57023 = p__57022;var k = cljs.core.nth.call(null,vec__57023,(0),null);var v = cljs.core.nth.call(null,vec__57023,(1),null);return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,k))+"="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(JSON.stringify(cljs.core.clj__GT_js.call(null,v))));
}),m));
});
/**
* put the results of an api call into an atom... makes ad-hoc api calls easy
*/
clustermap.api.fetch = (function fetch(comm){var r = cljs.core.atom.call(null,null);var c__5708__auto___57050 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5708__auto___57050,r){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___57050,r){
return (function (state_57041){var state_val_57042 = (state_57041[(1)]);if((state_val_57042 === (2)))
{var inst_57038 = (state_57041[(2)]);var inst_57039 = cljs.core.reset_BANG_.call(null,r,inst_57038);var state_57041__$1 = state_57041;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_57041__$1,inst_57039);
} else
{if((state_val_57042 === (1)))
{var state_57041__$1 = state_57041;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_57041__$1,(2),comm);
} else
{return null;
}
}
});})(c__5708__auto___57050,r))
;return ((function (switch__5693__auto__,c__5708__auto___57050,r){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_57046 = [null,null,null,null,null,null,null];(statearr_57046[(0)] = state_machine__5694__auto__);
(statearr_57046[(1)] = (1));
return statearr_57046;
});
var state_machine__5694__auto____1 = (function (state_57041){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_57041);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e57047){if((e57047 instanceof Object))
{var ex__5697__auto__ = e57047;var statearr_57048_57051 = state_57041;(statearr_57048_57051[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_57041);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e57047;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__57052 = state_57041;
state_57041 = G__57052;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_57041){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_57041);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___57050,r))
})();var state__5710__auto__ = (function (){var statearr_57049 = f__5709__auto__.call(null);(statearr_57049[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___57050);
return statearr_57049;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
});})(c__5708__auto___57050,r))
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
boundarylines.cljs$lang$applyTo = (function (arglist__57053){
var id = cljs.core.first(arglist__57053);
arglist__57053 = cljs.core.next(arglist__57053);
var tolerance = cljs.core.first(arglist__57053);
var opts = cljs.core.rest(arglist__57053);
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
boundaryline_collection_index.cljs$lang$applyTo = (function (arglist__57054){
var id = cljs.core.first(arglist__57054);
var opts = cljs.core.rest(arglist__57054);
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
boundaryline_set.cljs$lang$applyTo = (function (arglist__57055){
var ids = cljs.core.first(arglist__57055);
arglist__57055 = cljs.core.next(arglist__57055);
var tolerance = cljs.core.first(arglist__57055);
var opts = cljs.core.rest(arglist__57055);
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
var boundaryline_collection_view__delegate = function (collection_id,tolerance,bounds,p__57056){var map__57058 = p__57056;var map__57058__$1 = ((cljs.core.seq_QMARK_.call(null,map__57058))?cljs.core.apply.call(null,cljs.core.hash_map,map__57058):map__57058);var opts = map__57058__$1;var boundaryline_ids = cljs.core.get.call(null,map__57058__$1,new cljs.core.Keyword(null,"boundaryline-ids","boundaryline-ids",1352066869));var opts__$1 = cljs.core.flatten.call(null,cljs.core.seq.call(null,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"boundaryline-ids","boundaryline-ids",1352066869))));return cljs.core.apply.call(null,clustermap.api.POST,("/api/boundaryline-collection-view/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,collection_id))+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(tolerance)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"bounds","bounds",1691609455),bounds,new cljs.core.Keyword(null,"boundaryline-ids","boundaryline-ids",1352066869),boundaryline_ids], null),opts__$1);
};
var boundaryline_collection_view = function (collection_id,tolerance,bounds,var_args){
var p__57056 = null;if (arguments.length > 3) {
  p__57056 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return boundaryline_collection_view__delegate.call(this,collection_id,tolerance,bounds,p__57056);};
boundaryline_collection_view.cljs$lang$maxFixedArity = 3;
boundaryline_collection_view.cljs$lang$applyTo = (function (arglist__57059){
var collection_id = cljs.core.first(arglist__57059);
arglist__57059 = cljs.core.next(arglist__57059);
var tolerance = cljs.core.first(arglist__57059);
arglist__57059 = cljs.core.next(arglist__57059);
var bounds = cljs.core.first(arglist__57059);
var p__57056 = cljs.core.rest(arglist__57059);
return boundaryline_collection_view__delegate(collection_id,tolerance,bounds,p__57056);
});
boundaryline_collection_view.cljs$core$IFn$_invoke$arity$variadic = boundaryline_collection_view__delegate;
return boundaryline_collection_view;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.boundaryline_aggregation = (function() { 
var boundaryline_aggregation__delegate = function (index,type,blcoll,attr,filter,bounds,p__57060){var vec__57062 = p__57060;var type_ids = cljs.core.nth.call(null,vec__57062,(0),null);return clustermap.api.POST.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/boundaryline-agg/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(index)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(blcoll)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(attr)+"?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids))),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"filter","filter",-948537934),filter,new cljs.core.Keyword(null,"bounds","bounds",1691609455),bounds], null));
};
var boundaryline_aggregation = function (index,type,blcoll,attr,filter,bounds,var_args){
var p__57060 = null;if (arguments.length > 6) {
  p__57060 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 6),0);} 
return boundaryline_aggregation__delegate.call(this,index,type,blcoll,attr,filter,bounds,p__57060);};
boundaryline_aggregation.cljs$lang$maxFixedArity = 6;
boundaryline_aggregation.cljs$lang$applyTo = (function (arglist__57063){
var index = cljs.core.first(arglist__57063);
arglist__57063 = cljs.core.next(arglist__57063);
var type = cljs.core.first(arglist__57063);
arglist__57063 = cljs.core.next(arglist__57063);
var blcoll = cljs.core.first(arglist__57063);
arglist__57063 = cljs.core.next(arglist__57063);
var attr = cljs.core.first(arglist__57063);
arglist__57063 = cljs.core.next(arglist__57063);
var filter = cljs.core.first(arglist__57063);
arglist__57063 = cljs.core.next(arglist__57063);
var bounds = cljs.core.first(arglist__57063);
var p__57060 = cljs.core.rest(arglist__57063);
return boundaryline_aggregation__delegate(index,type,blcoll,attr,filter,bounds,p__57060);
});
boundaryline_aggregation.cljs$core$IFn$_invoke$arity$variadic = boundaryline_aggregation__delegate;
return boundaryline_aggregation;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.summary_stats = (function() { 
var summary_stats__delegate = function (index,type,statsattrs,filter,bounds,p__57064){var vec__57066 = p__57064;var type_ids = cljs.core.nth.call(null,vec__57066,(0),null);return clustermap.api.POST.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/summary-stats/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(index)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)+"?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids))),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"statsattrs","statsattrs",1724366357),statsattrs,new cljs.core.Keyword(null,"filter","filter",-948537934),filter,new cljs.core.Keyword(null,"bounds","bounds",1691609455),bounds], null));
};
var summary_stats = function (index,type,statsattrs,filter,bounds,var_args){
var p__57064 = null;if (arguments.length > 5) {
  p__57064 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);} 
return summary_stats__delegate.call(this,index,type,statsattrs,filter,bounds,p__57064);};
summary_stats.cljs$lang$maxFixedArity = 5;
summary_stats.cljs$lang$applyTo = (function (arglist__57067){
var index = cljs.core.first(arglist__57067);
arglist__57067 = cljs.core.next(arglist__57067);
var type = cljs.core.first(arglist__57067);
arglist__57067 = cljs.core.next(arglist__57067);
var statsattrs = cljs.core.first(arglist__57067);
arglist__57067 = cljs.core.next(arglist__57067);
var filter = cljs.core.first(arglist__57067);
arglist__57067 = cljs.core.next(arglist__57067);
var bounds = cljs.core.first(arglist__57067);
var p__57064 = cljs.core.rest(arglist__57067);
return summary_stats__delegate(index,type,statsattrs,filter,bounds,p__57064);
});
summary_stats.cljs$core$IFn$_invoke$arity$variadic = summary_stats__delegate;
return summary_stats;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.location_lists = (function() { 
var location_lists__delegate = function (index,type,location_attr,attrs,max_count,filter,bounds,p__57068){var vec__57070 = p__57068;var type_ids = cljs.core.nth.call(null,vec__57070,(0),null);return clustermap.api.POST.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/location-lists/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(index)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(location_attr)+"?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids))),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"max-count","max-count",1539185305),max_count,new cljs.core.Keyword(null,"attrs","attrs",-2090668713),attrs,new cljs.core.Keyword(null,"filter","filter",-948537934),filter,new cljs.core.Keyword(null,"bounds","bounds",1691609455),bounds], null));
};
var location_lists = function (index,type,location_attr,attrs,max_count,filter,bounds,var_args){
var p__57068 = null;if (arguments.length > 7) {
  p__57068 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 7),0);} 
return location_lists__delegate.call(this,index,type,location_attr,attrs,max_count,filter,bounds,p__57068);};
location_lists.cljs$lang$maxFixedArity = 7;
location_lists.cljs$lang$applyTo = (function (arglist__57071){
var index = cljs.core.first(arglist__57071);
arglist__57071 = cljs.core.next(arglist__57071);
var type = cljs.core.first(arglist__57071);
arglist__57071 = cljs.core.next(arglist__57071);
var location_attr = cljs.core.first(arglist__57071);
arglist__57071 = cljs.core.next(arglist__57071);
var attrs = cljs.core.first(arglist__57071);
arglist__57071 = cljs.core.next(arglist__57071);
var max_count = cljs.core.first(arglist__57071);
arglist__57071 = cljs.core.next(arglist__57071);
var filter = cljs.core.first(arglist__57071);
arglist__57071 = cljs.core.next(arglist__57071);
var bounds = cljs.core.first(arglist__57071);
var p__57068 = cljs.core.rest(arglist__57071);
return location_lists__delegate(index,type,location_attr,attrs,max_count,filter,bounds,p__57068);
});
location_lists.cljs$core$IFn$_invoke$arity$variadic = location_lists__delegate;
return location_lists;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.simple_table = (function() { 
var simple_table__delegate = function (index,type,filter_spec,bounds,sort_spec,from,size,p__57072){var vec__57074 = p__57072;var type_ids = cljs.core.nth.call(null,vec__57074,(0),null);return clustermap.api.POST.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/simple-table/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(index)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)+"?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids))),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"filter","filter",-948537934),filter_spec,new cljs.core.Keyword(null,"bounds","bounds",1691609455),bounds,new cljs.core.Keyword(null,"sort","sort",953465918),sort_spec,new cljs.core.Keyword(null,"from","from",1815293044),from,new cljs.core.Keyword(null,"size","size",1098693007),size], null));
};
var simple_table = function (index,type,filter_spec,bounds,sort_spec,from,size,var_args){
var p__57072 = null;if (arguments.length > 7) {
  p__57072 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 7),0);} 
return simple_table__delegate.call(this,index,type,filter_spec,bounds,sort_spec,from,size,p__57072);};
simple_table.cljs$lang$maxFixedArity = 7;
simple_table.cljs$lang$applyTo = (function (arglist__57075){
var index = cljs.core.first(arglist__57075);
arglist__57075 = cljs.core.next(arglist__57075);
var type = cljs.core.first(arglist__57075);
arglist__57075 = cljs.core.next(arglist__57075);
var filter_spec = cljs.core.first(arglist__57075);
arglist__57075 = cljs.core.next(arglist__57075);
var bounds = cljs.core.first(arglist__57075);
arglist__57075 = cljs.core.next(arglist__57075);
var sort_spec = cljs.core.first(arglist__57075);
arglist__57075 = cljs.core.next(arglist__57075);
var from = cljs.core.first(arglist__57075);
arglist__57075 = cljs.core.next(arglist__57075);
var size = cljs.core.first(arglist__57075);
var p__57072 = cljs.core.rest(arglist__57075);
return simple_table__delegate(index,type,filter_spec,bounds,sort_spec,from,size,p__57072);
});
simple_table.cljs$core$IFn$_invoke$arity$variadic = simple_table__delegate;
return simple_table;
})()
;
clustermap.api.timeline = (function timeline(index,type,filter_spec,bounds,time_variable,after,before,interval,metric_variables){return clustermap.api.POST.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/timeline/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(index)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),filter_spec,new cljs.core.Keyword(null,"bounds","bounds",1691609455),bounds,new cljs.core.Keyword(null,"time-variable","time-variable",-1643449307),time_variable,new cljs.core.Keyword(null,"after","after",594996914),after,new cljs.core.Keyword(null,"before","before",-1633692388),before,new cljs.core.Keyword(null,"interval","interval",1708495417),interval,new cljs.core.Keyword(null,"metric-variables","metric-variables",-1123283594),metric_variables], null));
});

//# sourceMappingURL=api.js.map