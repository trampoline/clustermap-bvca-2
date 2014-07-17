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
var AJAX__delegate = function (url,p__33848){var map__33852 = p__33848;var map__33852__$1 = ((cljs.core.seq_QMARK_(map__33852))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33852):map__33852);var content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33852__$1,cljs.core.constant$keyword$785);var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33852__$1,cljs.core.constant$keyword$786);var raw = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33852__$1,cljs.core.constant$keyword$787);var comm = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));goog.net.XhrIo.send(url,((function (comm,map__33852,map__33852__$1,content,method,raw){
return (function (event){cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,((function (comm,map__33852,map__33852__$1,content,method,raw){
return (function (d){if(cljs.core.truth_(raw))
{return d;
} else
{return cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(d,cljs.core.array_seq([cljs.core.constant$keyword$766,true], 0));
}
});})(comm,map__33852,map__33852__$1,content,method,raw))
.call(null,(JSON.parse(event.target.getResponseText())["data"])));
return cljs.core.async.close_BANG_(comm);
});})(comm,map__33852,map__33852__$1,content,method,raw))
,(function (){var or__3543__auto__ = (function (){var G__33854 = method;var G__33854__$1 = (((G__33854 == null))?null:cljs.core.name(G__33854));var G__33854__$2 = (((G__33854__$1 == null))?null:clojure.string.upper_case(G__33854__$1));return G__33854__$2;
})();if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return "GET";
}
})(),(cljs.core.truth_(content)?JSON.stringify(cljs.core.clj__GT_js(content)):null),(cljs.core.truth_(content)?cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 1, ["Content-Type","application/json"], null)):null));
return comm;
};
var AJAX = function (url,var_args){
var p__33848 = null;if (arguments.length > 1) {
  p__33848 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return AJAX__delegate.call(this,url,p__33848);};
AJAX.cljs$lang$maxFixedArity = 1;
AJAX.cljs$lang$applyTo = (function (arglist__33855){
var url = cljs.core.first(arglist__33855);
var p__33848 = cljs.core.rest(arglist__33855);
return AJAX__delegate(url,p__33848);
});
AJAX.cljs$core$IFn$_invoke$arity$variadic = AJAX__delegate;
return AJAX;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.GET = (function() { 
var GET__delegate = function (url,p__33856){var map__33858 = p__33856;var map__33858__$1 = ((cljs.core.seq_QMARK_(map__33858))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33858):map__33858);var opts = map__33858__$1;return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(clustermap.api.AJAX,url,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([opts,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$786,"GET"], null)], 0))));
};
var GET = function (url,var_args){
var p__33856 = null;if (arguments.length > 1) {
  p__33856 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return GET__delegate.call(this,url,p__33856);};
GET.cljs$lang$maxFixedArity = 1;
GET.cljs$lang$applyTo = (function (arglist__33859){
var url = cljs.core.first(arglist__33859);
var p__33856 = cljs.core.rest(arglist__33859);
return GET__delegate(url,p__33856);
});
GET.cljs$core$IFn$_invoke$arity$variadic = GET__delegate;
return GET;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.POST = (function() { 
var POST__delegate = function (url,content,p__33860){var map__33862 = p__33860;var map__33862__$1 = ((cljs.core.seq_QMARK_(map__33862))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33862):map__33862);var opts = map__33862__$1;return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(clustermap.api.AJAX,url,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([opts,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$786,"POST",cljs.core.constant$keyword$785,content], null)], 0))));
};
var POST = function (url,content,var_args){
var p__33860 = null;if (arguments.length > 2) {
  p__33860 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return POST__delegate.call(this,url,content,p__33860);};
POST.cljs$lang$maxFixedArity = 2;
POST.cljs$lang$applyTo = (function (arglist__33863){
var url = cljs.core.first(arglist__33863);
arglist__33863 = cljs.core.next(arglist__33863);
var content = cljs.core.first(arglist__33863);
var p__33860 = cljs.core.rest(arglist__33863);
return POST__delegate(url,content,p__33860);
});
POST.cljs$core$IFn$_invoke$arity$variadic = POST__delegate;
return POST;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.PUT = (function() { 
var PUT__delegate = function (url,content,p__33864){var map__33866 = p__33864;var map__33866__$1 = ((cljs.core.seq_QMARK_(map__33866))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33866):map__33866);var opts = map__33866__$1;return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(clustermap.api.AJAX,url,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([opts,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$786,"PUT",cljs.core.constant$keyword$785,content], null)], 0))));
};
var PUT = function (url,content,var_args){
var p__33864 = null;if (arguments.length > 2) {
  p__33864 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return PUT__delegate.call(this,url,content,p__33864);};
PUT.cljs$lang$maxFixedArity = 2;
PUT.cljs$lang$applyTo = (function (arglist__33867){
var url = cljs.core.first(arglist__33867);
arglist__33867 = cljs.core.next(arglist__33867);
var content = cljs.core.first(arglist__33867);
var p__33864 = cljs.core.rest(arglist__33867);
return PUT__delegate(url,content,p__33864);
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
clustermap.api.ordered_api_results = (function ordered_api_results(ocomm,handler){var c__5693__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5693__auto__){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto__){
return (function (state_34000){var state_val_34001 = (state_34000[(1)]);if((state_val_34001 === (7)))
{var inst_33958 = (state_34000[(7)]);var inst_33957 = (state_34000[(2)]);var inst_33958__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33957,(0),null);var inst_33959 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33957,(1),null);var inst_33960 = cljs.core.sequential_QMARK_(inst_33958__$1);var state_34000__$1 = (function (){var statearr_34002 = state_34000;(statearr_34002[(7)] = inst_33958__$1);
(statearr_34002[(8)] = inst_33959);
return statearr_34002;
})();if(inst_33960)
{var statearr_34003_34038 = state_34000__$1;(statearr_34003_34038[(1)] = (8));
} else
{var statearr_34004_34039 = state_34000__$1;(statearr_34004_34039[(1)] = (9));
}
return cljs.core.constant$keyword$771;
} else
{if((state_val_34001 === (20)))
{var inst_33958 = (state_34000[(7)]);var state_34000__$1 = state_34000;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34000__$1,(23),inst_33958);
} else
{if((state_val_34001 === (1)))
{var state_34000__$1 = state_34000;var statearr_34005_34040 = state_34000__$1;(statearr_34005_34040[(2)] = null);
(statearr_34005_34040[(1)] = (2));
return cljs.core.constant$keyword$771;
} else
{if((state_val_34001 === (4)))
{var state_34000__$1 = state_34000;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34000__$1,(7),ocomm);
} else
{if((state_val_34001 === (15)))
{var inst_33980 = (state_34000[(2)]);var state_34000__$1 = state_34000;var statearr_34006_34041 = state_34000__$1;(statearr_34006_34041[(2)] = inst_33980);
(statearr_34006_34041[(1)] = (12));
return cljs.core.constant$keyword$771;
} else
{if((state_val_34001 === (21)))
{var state_34000__$1 = state_34000;var statearr_34007_34042 = state_34000__$1;(statearr_34007_34042[(2)] = null);
(statearr_34007_34042[(1)] = (22));
return cljs.core.constant$keyword$771;
} else
{if((state_val_34001 === (13)))
{var inst_33963 = (state_34000[(9)]);var state_34000__$1 = state_34000;var statearr_34008_34043 = state_34000__$1;(statearr_34008_34043[(2)] = inst_33963);
(statearr_34008_34043[(1)] = (15));
return cljs.core.constant$keyword$771;
} else
{if((state_val_34001 === (22)))
{var inst_33989 = (state_34000[(2)]);var state_34000__$1 = state_34000;var statearr_34009_34044 = state_34000__$1;(statearr_34009_34044[(2)] = inst_33989);
(statearr_34009_34044[(1)] = (10));
return cljs.core.constant$keyword$771;
} else
{if((state_val_34001 === (6)))
{var inst_33996 = (state_34000[(2)]);var state_34000__$1 = state_34000;var statearr_34010_34045 = state_34000__$1;(statearr_34010_34045[(2)] = inst_33996);
(statearr_34010_34045[(1)] = (3));
return cljs.core.constant$keyword$771;
} else
{if((state_val_34001 === (17)))
{var state_34000__$1 = state_34000;var statearr_34011_34046 = state_34000__$1;(statearr_34011_34046[(2)] = null);
(statearr_34011_34046[(1)] = (18));
return cljs.core.constant$keyword$771;
} else
{if((state_val_34001 === (3)))
{var inst_33998 = (state_34000[(2)]);var state_34000__$1 = state_34000;return cljs.core.async.impl.ioc_helpers.return_chan(state_34000__$1,inst_33998);
} else
{if((state_val_34001 === (12)))
{var inst_33982 = (state_34000[(2)]);var state_34000__$1 = state_34000;var statearr_34012_34047 = state_34000__$1;(statearr_34012_34047[(2)] = inst_33982);
(statearr_34012_34047[(1)] = (10));
return cljs.core.constant$keyword$771;
} else
{if((state_val_34001 === (2)))
{var state_34000__$1 = state_34000;if(true)
{var statearr_34013_34048 = state_34000__$1;(statearr_34013_34048[(1)] = (4));
} else
{var statearr_34014_34049 = state_34000__$1;(statearr_34014_34049[(1)] = (5));
}
return cljs.core.constant$keyword$771;
} else
{if((state_val_34001 === (23)))
{var inst_33986 = (state_34000[(2)]);var state_34000__$1 = state_34000;var statearr_34015_34050 = state_34000__$1;(statearr_34015_34050[(2)] = inst_33986);
(statearr_34015_34050[(1)] = (22));
return cljs.core.constant$keyword$771;
} else
{if((state_val_34001 === (19)))
{var inst_33973 = (state_34000[(2)]);var state_34000__$1 = state_34000;var statearr_34016_34051 = state_34000__$1;(statearr_34016_34051[(2)] = inst_33973);
(statearr_34016_34051[(1)] = (18));
return cljs.core.constant$keyword$771;
} else
{if((state_val_34001 === (11)))
{var inst_33962 = (state_34000[(10)]);var inst_33965 = cljs.core.empty_QMARK_(inst_33962);var state_34000__$1 = state_34000;if(inst_33965)
{var statearr_34017_34052 = state_34000__$1;(statearr_34017_34052[(1)] = (13));
} else
{var statearr_34018_34053 = state_34000__$1;(statearr_34018_34053[(1)] = (14));
}
return cljs.core.constant$keyword$771;
} else
{if((state_val_34001 === (9)))
{var inst_33958 = (state_34000[(7)]);var state_34000__$1 = state_34000;if(cljs.core.truth_(inst_33958))
{var statearr_34019_34054 = state_34000__$1;(statearr_34019_34054[(1)] = (20));
} else
{var statearr_34020_34055 = state_34000__$1;(statearr_34020_34055[(1)] = (21));
}
return cljs.core.constant$keyword$771;
} else
{if((state_val_34001 === (5)))
{var state_34000__$1 = state_34000;var statearr_34021_34056 = state_34000__$1;(statearr_34021_34056[(2)] = null);
(statearr_34021_34056[(1)] = (6));
return cljs.core.constant$keyword$771;
} else
{if((state_val_34001 === (14)))
{var inst_33962 = (state_34000[(10)]);var inst_33968 = cljs.core.rest(inst_33962);var inst_33969 = cljs.core.first(inst_33962);var state_34000__$1 = (function (){var statearr_34022 = state_34000;(statearr_34022[(11)] = inst_33968);
return statearr_34022;
})();if(cljs.core.truth_(inst_33969))
{var statearr_34023_34057 = state_34000__$1;(statearr_34023_34057[(1)] = (16));
} else
{var statearr_34024_34058 = state_34000__$1;(statearr_34024_34058[(1)] = (17));
}
return cljs.core.constant$keyword$771;
} else
{if((state_val_34001 === (16)))
{var inst_33962 = (state_34000[(10)]);var inst_33971 = cljs.core.first(inst_33962);var state_34000__$1 = state_34000;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34000__$1,(19),inst_33971);
} else
{if((state_val_34001 === (10)))
{var inst_33959 = (state_34000[(8)]);var inst_33991 = (state_34000[(2)]);var inst_33992 = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(handler,inst_33991,inst_33959);var state_34000__$1 = (function (){var statearr_34025 = state_34000;(statearr_34025[(12)] = inst_33992);
return statearr_34025;
})();var statearr_34026_34059 = state_34000__$1;(statearr_34026_34059[(2)] = null);
(statearr_34026_34059[(1)] = (2));
return cljs.core.constant$keyword$771;
} else
{if((state_val_34001 === (18)))
{var inst_33963 = (state_34000[(9)]);var inst_33968 = (state_34000[(11)]);var inst_33976 = (state_34000[(2)]);var inst_33977 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(inst_33963,inst_33976);var inst_33962 = inst_33968;var inst_33963__$1 = inst_33977;var state_34000__$1 = (function (){var statearr_34027 = state_34000;(statearr_34027[(10)] = inst_33962);
(statearr_34027[(9)] = inst_33963__$1);
return statearr_34027;
})();var statearr_34028_34060 = state_34000__$1;(statearr_34028_34060[(2)] = null);
(statearr_34028_34060[(1)] = (11));
return cljs.core.constant$keyword$771;
} else
{if((state_val_34001 === (8)))
{var inst_33958 = (state_34000[(7)]);var inst_33962 = inst_33958;var inst_33963 = cljs.core.PersistentVector.EMPTY;var state_34000__$1 = (function (){var statearr_34029 = state_34000;(statearr_34029[(10)] = inst_33962);
(statearr_34029[(9)] = inst_33963);
return statearr_34029;
})();var statearr_34030_34061 = state_34000__$1;(statearr_34030_34061[(2)] = null);
(statearr_34030_34061[(1)] = (11));
return cljs.core.constant$keyword$771;
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
var state_machine__5679__auto____0 = (function (){var statearr_34034 = [null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_34034[(0)] = state_machine__5679__auto__);
(statearr_34034[(1)] = (1));
return statearr_34034;
});
var state_machine__5679__auto____1 = (function (state_34000){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__(state_34000);if(cljs.core.keyword_identical_QMARK_(result__5681__auto__,cljs.core.constant$keyword$771))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e34035){if((e34035 instanceof Object))
{var ex__5682__auto__ = e34035;var statearr_34036_34062 = state_34000;(statearr_34036_34062[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_34000);
return cljs.core.constant$keyword$771;
} else
{if(cljs.core.constant$keyword$762)
{throw e34035;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5680__auto__,cljs.core.constant$keyword$771))
{{
var G__34063 = state_34000;
state_34000 = G__34063;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_34000){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_34000);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto__))
})();var state__5695__auto__ = (function (){var statearr_34037 = (f__5694__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5694__auto__.cljs$core$IFn$_invoke$arity$0() : f__5694__auto__.call(null));(statearr_34037[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto__);
return statearr_34037;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5695__auto__);
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
clustermap.api.ordered_api = (function ordered_api(request_handler,result_handler){var ocomm = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));var _ = clustermap.api.ordered_api_results(ocomm,result_handler);return ((function (ocomm,_){
return (function() { 
var G__34066__delegate = function (req_args){var temp__4124__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(request_handler,req_args);if(cljs.core.truth_(temp__4124__auto__))
{var r = temp__4124__auto__;var rseq = ((cljs.core.sequential_QMARK_(r))?r:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [r], null));var vec__34065 = rseq;var rcomm = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34065,(0),null);var result_handler_args = cljs.core.nthnext(vec__34065,(1));return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(ocomm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rcomm,result_handler_args], null));
} else
{return null;
}
};
var G__34066 = function (var_args){
var req_args = null;if (arguments.length > 0) {
  req_args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__34066__delegate.call(this,req_args);};
G__34066.cljs$lang$maxFixedArity = 0;
G__34066.cljs$lang$applyTo = (function (arglist__34067){
var req_args = cljs.core.seq(arglist__34067);
return G__34066__delegate(req_args);
});
G__34066.cljs$core$IFn$_invoke$arity$variadic = G__34066__delegate;
return G__34066;
})()
;
;})(ocomm,_))
});
/**
* @param {...*} var_args
*/
clustermap.api.log_api = (function() { 
var log_api__delegate = function (f,args){var ch = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,args);var c__5693__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5693__auto__,ch){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto__,ch){
return (function (state_34085){var state_val_34086 = (state_34085[(1)]);if((state_val_34086 === (2)))
{var inst_34082 = (state_34085[(2)]);var inst_34083 = console.log(inst_34082);var state_34085__$1 = state_34085;return cljs.core.async.impl.ioc_helpers.return_chan(state_34085__$1,inst_34083);
} else
{if((state_val_34086 === (1)))
{var state_34085__$1 = state_34085;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34085__$1,(2),ch);
} else
{return null;
}
}
});})(c__5693__auto__,ch))
;return ((function (switch__5678__auto__,c__5693__auto__,ch){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_34090 = [null,null,null,null,null,null,null];(statearr_34090[(0)] = state_machine__5679__auto__);
(statearr_34090[(1)] = (1));
return statearr_34090;
});
var state_machine__5679__auto____1 = (function (state_34085){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__(state_34085);if(cljs.core.keyword_identical_QMARK_(result__5681__auto__,cljs.core.constant$keyword$771))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e34091){if((e34091 instanceof Object))
{var ex__5682__auto__ = e34091;var statearr_34092_34094 = state_34085;(statearr_34092_34094[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_34085);
return cljs.core.constant$keyword$771;
} else
{if(cljs.core.constant$keyword$762)
{throw e34091;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5680__auto__,cljs.core.constant$keyword$771))
{{
var G__34095 = state_34085;
state_34085 = G__34095;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_34085){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_34085);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto__,ch))
})();var state__5695__auto__ = (function (){var statearr_34093 = (f__5694__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5694__auto__.cljs$core$IFn$_invoke$arity$0() : f__5694__auto__.call(null));(statearr_34093[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto__);
return statearr_34093;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5695__auto__);
});})(c__5693__auto__,ch))
);
return c__5693__auto__;
};
var log_api = function (f,var_args){
var args = null;if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return log_api__delegate.call(this,f,args);};
log_api.cljs$lang$maxFixedArity = 1;
log_api.cljs$lang$applyTo = (function (arglist__34096){
var f = cljs.core.first(arglist__34096);
var args = cljs.core.rest(arglist__34096);
return log_api__delegate(f,args);
});
log_api.cljs$core$IFn$_invoke$arity$variadic = log_api__delegate;
return log_api;
})()
;
clustermap.api.map_json_params = (function map_json_params(m){return clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__34099){var vec__34100 = p__34099;var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34100,(0),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34100,(1),null);return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(k))+"="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(JSON.stringify(cljs.core.clj__GT_js(v))));
}),m));
});
/**
* put the results of an api call into an atom... makes ad-hoc api calls easy
*/
clustermap.api.fetch = (function fetch(comm){var r = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);var c__5693__auto___34127 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5693__auto___34127,r){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto___34127,r){
return (function (state_34118){var state_val_34119 = (state_34118[(1)]);if((state_val_34119 === (2)))
{var inst_34115 = (state_34118[(2)]);var inst_34116 = cljs.core.reset_BANG_(r,inst_34115);var state_34118__$1 = state_34118;return cljs.core.async.impl.ioc_helpers.return_chan(state_34118__$1,inst_34116);
} else
{if((state_val_34119 === (1)))
{var state_34118__$1 = state_34118;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34118__$1,(2),comm);
} else
{return null;
}
}
});})(c__5693__auto___34127,r))
;return ((function (switch__5678__auto__,c__5693__auto___34127,r){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_34123 = [null,null,null,null,null,null,null];(statearr_34123[(0)] = state_machine__5679__auto__);
(statearr_34123[(1)] = (1));
return statearr_34123;
});
var state_machine__5679__auto____1 = (function (state_34118){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__(state_34118);if(cljs.core.keyword_identical_QMARK_(result__5681__auto__,cljs.core.constant$keyword$771))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e34124){if((e34124 instanceof Object))
{var ex__5682__auto__ = e34124;var statearr_34125_34128 = state_34118;(statearr_34125_34128[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_34118);
return cljs.core.constant$keyword$771;
} else
{if(cljs.core.constant$keyword$762)
{throw e34124;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5680__auto__,cljs.core.constant$keyword$771))
{{
var G__34129 = state_34118;
state_34118 = G__34129;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_34118){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_34118);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto___34127,r))
})();var state__5695__auto__ = (function (){var statearr_34126 = (f__5694__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5694__auto__.cljs$core$IFn$_invoke$arity$0() : f__5694__auto__.call(null));(statearr_34126[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto___34127);
return statearr_34126;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5695__auto__);
});})(c__5693__auto___34127,r))
);
return r;
});
clustermap.api.api_prefix = config.api.prefix;
/**
* @param {...*} var_args
*/
clustermap.api.boundarylines = (function() { 
var boundarylines__delegate = function (id,tolerance,opts){return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(clustermap.api.GET,("/api/boundarylines/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(tolerance)),opts);
};
var boundarylines = function (id,tolerance,var_args){
var opts = null;if (arguments.length > 2) {
  opts = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return boundarylines__delegate.call(this,id,tolerance,opts);};
boundarylines.cljs$lang$maxFixedArity = 2;
boundarylines.cljs$lang$applyTo = (function (arglist__34130){
var id = cljs.core.first(arglist__34130);
arglist__34130 = cljs.core.next(arglist__34130);
var tolerance = cljs.core.first(arglist__34130);
var opts = cljs.core.rest(arglist__34130);
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
var boundaryline_collection_index__delegate = function (id,opts){return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(clustermap.api.GET,("/api/boundaryline-collection-index/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(id))),opts);
};
var boundaryline_collection_index = function (id,var_args){
var opts = null;if (arguments.length > 1) {
  opts = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return boundaryline_collection_index__delegate.call(this,id,opts);};
boundaryline_collection_index.cljs$lang$maxFixedArity = 1;
boundaryline_collection_index.cljs$lang$applyTo = (function (arglist__34131){
var id = cljs.core.first(arglist__34131);
var opts = cljs.core.rest(arglist__34131);
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
var boundaryline_aggregation__delegate = function (index,type,blcoll,attr,filter,p__34132){var vec__34134 = p__34132;var type_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34134,(0),null);return clustermap.api.POST(("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/boundaryline-agg/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(index)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(blcoll)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(attr)+"?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params(type_ids))),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$788,filter], null));
};
var boundaryline_aggregation = function (index,type,blcoll,attr,filter,var_args){
var p__34132 = null;if (arguments.length > 5) {
  p__34132 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);} 
return boundaryline_aggregation__delegate.call(this,index,type,blcoll,attr,filter,p__34132);};
boundaryline_aggregation.cljs$lang$maxFixedArity = 5;
boundaryline_aggregation.cljs$lang$applyTo = (function (arglist__34135){
var index = cljs.core.first(arglist__34135);
arglist__34135 = cljs.core.next(arglist__34135);
var type = cljs.core.first(arglist__34135);
arglist__34135 = cljs.core.next(arglist__34135);
var blcoll = cljs.core.first(arglist__34135);
arglist__34135 = cljs.core.next(arglist__34135);
var attr = cljs.core.first(arglist__34135);
arglist__34135 = cljs.core.next(arglist__34135);
var filter = cljs.core.first(arglist__34135);
var p__34132 = cljs.core.rest(arglist__34135);
return boundaryline_aggregation__delegate(index,type,blcoll,attr,filter,p__34132);
});
boundaryline_aggregation.cljs$core$IFn$_invoke$arity$variadic = boundaryline_aggregation__delegate;
return boundaryline_aggregation;
})()
;
clustermap.api.search = (function search(q){if((cljs.core.count(clojure.string.trim(q)) > (0)))
{return clustermap.api.GET(("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/search?q="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(q)));
} else
{return cljs.core.async.to_chan(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [{}], null));
}
});
clustermap.api.constituency = (function constituency(id){return clustermap.api.GET(("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/constituencies/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)));
});
clustermap.api.portfolio_company = (function portfolio_company(id){return clustermap.api.GET(("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/portfolio-companies/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)));
});
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_sites = (function() { 
var portfolio_company_sites__delegate = function (p__34136){var vec__34138 = p__34136;var type_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34138,(0),null);var type_ids__$1 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$789,(100),cljs.core.constant$keyword$790,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$791,"desc"], null)], null)], null),type_ids], 0));return clustermap.api.GET(("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/portfolio-company-sites?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params(type_ids__$1))));
};
var portfolio_company_sites = function (var_args){
var p__34136 = null;if (arguments.length > 0) {
  p__34136 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_sites__delegate.call(this,p__34136);};
portfolio_company_sites.cljs$lang$maxFixedArity = 0;
portfolio_company_sites.cljs$lang$applyTo = (function (arglist__34139){
var p__34136 = cljs.core.seq(arglist__34139);
return portfolio_company_sites__delegate(p__34136);
});
portfolio_company_sites.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_sites__delegate;
return portfolio_company_sites;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_sites_by_company = (function() { 
var portfolio_company_sites_by_company__delegate = function (p__34140){var vec__34142 = p__34140;var type_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34142,(0),null);var type_ids__$1 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$789,(100),cljs.core.constant$keyword$790,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$791,"desc"], null)], null)], null),type_ids], 0));return clustermap.api.GET(("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/portfolio-company-sites-by-company?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params(type_ids__$1))));
};
var portfolio_company_sites_by_company = function (var_args){
var p__34140 = null;if (arguments.length > 0) {
  p__34140 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_sites_by_company__delegate.call(this,p__34140);};
portfolio_company_sites_by_company.cljs$lang$maxFixedArity = 0;
portfolio_company_sites_by_company.cljs$lang$applyTo = (function (arglist__34143){
var p__34140 = cljs.core.seq(arglist__34143);
return portfolio_company_sites_by_company__delegate(p__34140);
});
portfolio_company_sites_by_company.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_sites_by_company__delegate;
return portfolio_company_sites_by_company;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_locations = (function() { 
var portfolio_company_locations__delegate = function (p__34144){var vec__34146 = p__34144;var type_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34146,(0),null);return clustermap.api.GET(("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/portfolio-company-locations?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params(type_ids))));
};
var portfolio_company_locations = function (var_args){
var p__34144 = null;if (arguments.length > 0) {
  p__34144 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_locations__delegate.call(this,p__34144);};
portfolio_company_locations.cljs$lang$maxFixedArity = 0;
portfolio_company_locations.cljs$lang$applyTo = (function (arglist__34147){
var p__34144 = cljs.core.seq(arglist__34147);
return portfolio_company_locations__delegate(p__34144);
});
portfolio_company_locations.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_locations__delegate;
return portfolio_company_locations;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_site_stats = (function() { 
var portfolio_company_site_stats__delegate = function (p__34148){var vec__34150 = p__34148;var type_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34150,(0),null);return clustermap.api.GET(("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/portfolio-company-site-stats?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params(type_ids))));
};
var portfolio_company_site_stats = function (var_args){
var p__34148 = null;if (arguments.length > 0) {
  p__34148 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_site_stats__delegate.call(this,p__34148);};
portfolio_company_site_stats.cljs$lang$maxFixedArity = 0;
portfolio_company_site_stats.cljs$lang$applyTo = (function (arglist__34151){
var p__34148 = cljs.core.seq(arglist__34151);
return portfolio_company_site_stats__delegate(p__34148);
});
portfolio_company_site_stats.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_site_stats__delegate;
return portfolio_company_site_stats;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_site_account_timelines = (function() { 
var portfolio_company_site_account_timelines__delegate = function (p__34152){var vec__34154 = p__34152;var type_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34154,(0),null);return clustermap.api.GET(("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/portfolio-company-site-account-timelines?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params(type_ids))));
};
var portfolio_company_site_account_timelines = function (var_args){
var p__34152 = null;if (arguments.length > 0) {
  p__34152 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_site_account_timelines__delegate.call(this,p__34152);};
portfolio_company_site_account_timelines.cljs$lang$maxFixedArity = 0;
portfolio_company_site_account_timelines.cljs$lang$applyTo = (function (arglist__34155){
var p__34152 = cljs.core.seq(arglist__34155);
return portfolio_company_site_account_timelines__delegate(p__34152);
});
portfolio_company_site_account_timelines.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_site_account_timelines__delegate;
return portfolio_company_site_account_timelines;
})()
;
clustermap.api.investor_company = (function investor_company(id){return clustermap.api.GET(("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/investor-companies/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)));
});
/**
* @param {...*} var_args
*/
clustermap.api.investment_account_timelines = (function() { 
var investment_account_timelines__delegate = function (p__34156){var vec__34158 = p__34156;var type_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34158,(0),null);return clustermap.api.GET(("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/investment-account-timelines?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params(type_ids))));
};
var investment_account_timelines = function (var_args){
var p__34156 = null;if (arguments.length > 0) {
  p__34156 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return investment_account_timelines__delegate.call(this,p__34156);};
investment_account_timelines.cljs$lang$maxFixedArity = 0;
investment_account_timelines.cljs$lang$applyTo = (function (arglist__34159){
var p__34156 = cljs.core.seq(arglist__34159);
return investment_account_timelines__delegate(p__34156);
});
investment_account_timelines.cljs$core$IFn$_invoke$arity$variadic = investment_account_timelines__delegate;
return investment_account_timelines;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.investment_stats = (function() { 
var investment_stats__delegate = function (p__34160){var vec__34162 = p__34160;var type_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34162,(0),null);return clustermap.api.GET(("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/investment-stats?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params(type_ids))));
};
var investment_stats = function (var_args){
var p__34160 = null;if (arguments.length > 0) {
  p__34160 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return investment_stats__delegate.call(this,p__34160);};
investment_stats.cljs$lang$maxFixedArity = 0;
investment_stats.cljs$lang$applyTo = (function (arglist__34163){
var p__34160 = cljs.core.seq(arglist__34163);
return investment_stats__delegate(p__34160);
});
investment_stats.cljs$core$IFn$_invoke$arity$variadic = investment_stats__delegate;
return investment_stats;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.investment_aggs = (function() { 
var investment_aggs__delegate = function (p__34164){var vec__34166 = p__34164;var type_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34166,(0),null);var type_ids__$1 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$789,(50),cljs.core.constant$keyword$792,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$793,"desc"], null)], null),type_ids], 0));return clustermap.api.GET(("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/investment-aggs?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params(type_ids__$1))));
};
var investment_aggs = function (var_args){
var p__34164 = null;if (arguments.length > 0) {
  p__34164 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return investment_aggs__delegate.call(this,p__34164);};
investment_aggs.cljs$lang$maxFixedArity = 0;
investment_aggs.cljs$lang$applyTo = (function (arglist__34167){
var p__34164 = cljs.core.seq(arglist__34167);
return investment_aggs__delegate(p__34164);
});
investment_aggs.cljs$core$IFn$_invoke$arity$variadic = investment_aggs__delegate;
return investment_aggs;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.investments = (function() { 
var investments__delegate = function (p__34168){var vec__34170 = p__34168;var type_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34170,(0),null);var type_ids__$1 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$789,(50),cljs.core.constant$keyword$792,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$794,"asc"], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$795,"asc"], null)], null)], null),type_ids], 0));return clustermap.api.GET(("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/investments?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params(type_ids__$1))));
};
var investments = function (var_args){
var p__34168 = null;if (arguments.length > 0) {
  p__34168 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return investments__delegate.call(this,p__34168);};
investments.cljs$lang$maxFixedArity = 0;
investments.cljs$lang$applyTo = (function (arglist__34171){
var p__34168 = cljs.core.seq(arglist__34171);
return investments__delegate(p__34168);
});
investments.cljs$core$IFn$_invoke$arity$variadic = investments__delegate;
return investments;
})()
;
