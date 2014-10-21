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
var AJAX__delegate = function (url,p__40835){var map__40839 = p__40835;var map__40839__$1 = ((cljs.core.seq_QMARK_(map__40839))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40839):map__40839);var opts = map__40839__$1;var content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40839__$1,cljs.core.constant$keyword$1114);var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40839__$1,cljs.core.constant$keyword$1115);var raw = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40839__$1,cljs.core.constant$keyword$1116);var comm = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));goog.net.XhrIo.send(url,((function (comm,map__40839,map__40839__$1,opts,content,method,raw){
return (function (event){cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,((function (comm,map__40839,map__40839__$1,opts,content,method,raw){
return (function (d){if(cljs.core.truth_(raw))
{return d;
} else
{return cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(d,cljs.core.array_seq([cljs.core.constant$keyword$1095,true], 0));
}
});})(comm,map__40839,map__40839__$1,opts,content,method,raw))
.call(null,(JSON.parse(event.target.getResponseText())["data"])));
return cljs.core.async.close_BANG_(comm);
});})(comm,map__40839,map__40839__$1,opts,content,method,raw))
,(function (){var or__3558__auto__ = (function (){var G__40841 = method;var G__40841__$1 = (((G__40841 == null))?null:cljs.core.name(G__40841));var G__40841__$2 = (((G__40841__$1 == null))?null:clojure.string.upper_case(G__40841__$1));return G__40841__$2;
})();if(cljs.core.truth_(or__3558__auto__))
{return or__3558__auto__;
} else
{return "GET";
}
})(),(cljs.core.truth_(content)?JSON.stringify(cljs.core.clj__GT_js(content)):null),(cljs.core.truth_(content)?cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 1, ["Content-Type","application/json"], null)):null));
return comm;
};
var AJAX = function (url,var_args){
var p__40835 = null;if (arguments.length > 1) {
  p__40835 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return AJAX__delegate.call(this,url,p__40835);};
AJAX.cljs$lang$maxFixedArity = 1;
AJAX.cljs$lang$applyTo = (function (arglist__40842){
var url = cljs.core.first(arglist__40842);
var p__40835 = cljs.core.rest(arglist__40842);
return AJAX__delegate(url,p__40835);
});
AJAX.cljs$core$IFn$_invoke$arity$variadic = AJAX__delegate;
return AJAX;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.GET = (function() { 
var GET__delegate = function (url,p__40843){var map__40845 = p__40843;var map__40845__$1 = ((cljs.core.seq_QMARK_(map__40845))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40845):map__40845);var opts = map__40845__$1;return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(clustermap.api.AJAX,url,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([opts,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1115,"GET"], null)], 0))));
};
var GET = function (url,var_args){
var p__40843 = null;if (arguments.length > 1) {
  p__40843 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return GET__delegate.call(this,url,p__40843);};
GET.cljs$lang$maxFixedArity = 1;
GET.cljs$lang$applyTo = (function (arglist__40846){
var url = cljs.core.first(arglist__40846);
var p__40843 = cljs.core.rest(arglist__40846);
return GET__delegate(url,p__40843);
});
GET.cljs$core$IFn$_invoke$arity$variadic = GET__delegate;
return GET;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.POST = (function() { 
var POST__delegate = function (url,content,p__40847){var map__40849 = p__40847;var map__40849__$1 = ((cljs.core.seq_QMARK_(map__40849))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40849):map__40849);var opts = map__40849__$1;return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(clustermap.api.AJAX,url,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([opts,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1115,"POST",cljs.core.constant$keyword$1114,content], null)], 0))));
};
var POST = function (url,content,var_args){
var p__40847 = null;if (arguments.length > 2) {
  p__40847 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return POST__delegate.call(this,url,content,p__40847);};
POST.cljs$lang$maxFixedArity = 2;
POST.cljs$lang$applyTo = (function (arglist__40850){
var url = cljs.core.first(arglist__40850);
arglist__40850 = cljs.core.next(arglist__40850);
var content = cljs.core.first(arglist__40850);
var p__40847 = cljs.core.rest(arglist__40850);
return POST__delegate(url,content,p__40847);
});
POST.cljs$core$IFn$_invoke$arity$variadic = POST__delegate;
return POST;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.PUT = (function() { 
var PUT__delegate = function (url,content,p__40851){var map__40853 = p__40851;var map__40853__$1 = ((cljs.core.seq_QMARK_(map__40853))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40853):map__40853);var opts = map__40853__$1;return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(clustermap.api.AJAX,url,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([opts,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1115,"PUT",cljs.core.constant$keyword$1114,content], null)], 0))));
};
var PUT = function (url,content,var_args){
var p__40851 = null;if (arguments.length > 2) {
  p__40851 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return PUT__delegate.call(this,url,content,p__40851);};
PUT.cljs$lang$maxFixedArity = 2;
PUT.cljs$lang$applyTo = (function (arglist__40854){
var url = cljs.core.first(arglist__40854);
arglist__40854 = cljs.core.next(arglist__40854);
var content = cljs.core.first(arglist__40854);
var p__40851 = cljs.core.rest(arglist__40854);
return PUT__delegate(url,content,p__40851);
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
clustermap.api.ordered_api_results = (function ordered_api_results(ocomm,handler){var c__5708__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5708__auto__){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto__){
return (function (state_40989){var state_val_40990 = (state_40989[(1)]);if((state_val_40990 === (7)))
{var inst_40946 = (state_40989[(7)]);var inst_40945 = (state_40989[(2)]);var inst_40946__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_40945,(0),null);var inst_40947 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_40945,(1),null);var inst_40948 = cljs.core.sequential_QMARK_(inst_40946__$1);var state_40989__$1 = (function (){var statearr_40991 = state_40989;(statearr_40991[(7)] = inst_40946__$1);
(statearr_40991[(8)] = inst_40947);
return statearr_40991;
})();if(inst_40948)
{var statearr_40992_41027 = state_40989__$1;(statearr_40992_41027[(1)] = (8));
} else
{var statearr_40993_41028 = state_40989__$1;(statearr_40993_41028[(1)] = (9));
}
return cljs.core.constant$keyword$1100;
} else
{if((state_val_40990 === (20)))
{var inst_40946 = (state_40989[(7)]);var state_40989__$1 = state_40989;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_40989__$1,(23),inst_40946);
} else
{if((state_val_40990 === (1)))
{var state_40989__$1 = state_40989;var statearr_40994_41029 = state_40989__$1;(statearr_40994_41029[(2)] = null);
(statearr_40994_41029[(1)] = (2));
return cljs.core.constant$keyword$1100;
} else
{if((state_val_40990 === (4)))
{var state_40989__$1 = state_40989;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_40989__$1,(7),ocomm);
} else
{if((state_val_40990 === (15)))
{var inst_40969 = (state_40989[(2)]);var state_40989__$1 = state_40989;var statearr_40995_41030 = state_40989__$1;(statearr_40995_41030[(2)] = inst_40969);
(statearr_40995_41030[(1)] = (12));
return cljs.core.constant$keyword$1100;
} else
{if((state_val_40990 === (21)))
{var state_40989__$1 = state_40989;var statearr_40996_41031 = state_40989__$1;(statearr_40996_41031[(2)] = null);
(statearr_40996_41031[(1)] = (22));
return cljs.core.constant$keyword$1100;
} else
{if((state_val_40990 === (13)))
{var inst_40952 = (state_40989[(9)]);var state_40989__$1 = state_40989;var statearr_40997_41032 = state_40989__$1;(statearr_40997_41032[(2)] = inst_40952);
(statearr_40997_41032[(1)] = (15));
return cljs.core.constant$keyword$1100;
} else
{if((state_val_40990 === (22)))
{var inst_40978 = (state_40989[(2)]);var state_40989__$1 = state_40989;var statearr_40998_41033 = state_40989__$1;(statearr_40998_41033[(2)] = inst_40978);
(statearr_40998_41033[(1)] = (10));
return cljs.core.constant$keyword$1100;
} else
{if((state_val_40990 === (6)))
{var inst_40985 = (state_40989[(2)]);var state_40989__$1 = state_40989;var statearr_40999_41034 = state_40989__$1;(statearr_40999_41034[(2)] = inst_40985);
(statearr_40999_41034[(1)] = (3));
return cljs.core.constant$keyword$1100;
} else
{if((state_val_40990 === (17)))
{var state_40989__$1 = state_40989;var statearr_41000_41035 = state_40989__$1;(statearr_41000_41035[(2)] = null);
(statearr_41000_41035[(1)] = (18));
return cljs.core.constant$keyword$1100;
} else
{if((state_val_40990 === (3)))
{var inst_40987 = (state_40989[(2)]);var state_40989__$1 = state_40989;return cljs.core.async.impl.ioc_helpers.return_chan(state_40989__$1,inst_40987);
} else
{if((state_val_40990 === (12)))
{var inst_40971 = (state_40989[(2)]);var state_40989__$1 = state_40989;var statearr_41001_41036 = state_40989__$1;(statearr_41001_41036[(2)] = inst_40971);
(statearr_41001_41036[(1)] = (10));
return cljs.core.constant$keyword$1100;
} else
{if((state_val_40990 === (2)))
{var state_40989__$1 = state_40989;var statearr_41002_41037 = state_40989__$1;(statearr_41002_41037[(1)] = (4));

return cljs.core.constant$keyword$1100;
} else
{if((state_val_40990 === (23)))
{var inst_40975 = (state_40989[(2)]);var state_40989__$1 = state_40989;var statearr_41004_41038 = state_40989__$1;(statearr_41004_41038[(2)] = inst_40975);
(statearr_41004_41038[(1)] = (22));
return cljs.core.constant$keyword$1100;
} else
{if((state_val_40990 === (19)))
{var inst_40962 = (state_40989[(2)]);var state_40989__$1 = state_40989;var statearr_41005_41039 = state_40989__$1;(statearr_41005_41039[(2)] = inst_40962);
(statearr_41005_41039[(1)] = (18));
return cljs.core.constant$keyword$1100;
} else
{if((state_val_40990 === (11)))
{var inst_40951 = (state_40989[(10)]);var inst_40954 = cljs.core.empty_QMARK_(inst_40951);var state_40989__$1 = state_40989;if(inst_40954)
{var statearr_41006_41040 = state_40989__$1;(statearr_41006_41040[(1)] = (13));
} else
{var statearr_41007_41041 = state_40989__$1;(statearr_41007_41041[(1)] = (14));
}
return cljs.core.constant$keyword$1100;
} else
{if((state_val_40990 === (9)))
{var inst_40946 = (state_40989[(7)]);var state_40989__$1 = state_40989;if(cljs.core.truth_(inst_40946))
{var statearr_41008_41042 = state_40989__$1;(statearr_41008_41042[(1)] = (20));
} else
{var statearr_41009_41043 = state_40989__$1;(statearr_41009_41043[(1)] = (21));
}
return cljs.core.constant$keyword$1100;
} else
{if((state_val_40990 === (5)))
{var state_40989__$1 = state_40989;var statearr_41010_41044 = state_40989__$1;(statearr_41010_41044[(2)] = null);
(statearr_41010_41044[(1)] = (6));
return cljs.core.constant$keyword$1100;
} else
{if((state_val_40990 === (14)))
{var inst_40951 = (state_40989[(10)]);var inst_40957 = cljs.core.rest(inst_40951);var inst_40958 = cljs.core.first(inst_40951);var state_40989__$1 = (function (){var statearr_41011 = state_40989;(statearr_41011[(11)] = inst_40957);
return statearr_41011;
})();if(cljs.core.truth_(inst_40958))
{var statearr_41012_41045 = state_40989__$1;(statearr_41012_41045[(1)] = (16));
} else
{var statearr_41013_41046 = state_40989__$1;(statearr_41013_41046[(1)] = (17));
}
return cljs.core.constant$keyword$1100;
} else
{if((state_val_40990 === (16)))
{var inst_40951 = (state_40989[(10)]);var inst_40960 = cljs.core.first(inst_40951);var state_40989__$1 = state_40989;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_40989__$1,(19),inst_40960);
} else
{if((state_val_40990 === (10)))
{var inst_40947 = (state_40989[(8)]);var inst_40980 = (state_40989[(2)]);var inst_40981 = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(handler,inst_40980,inst_40947);var state_40989__$1 = (function (){var statearr_41014 = state_40989;(statearr_41014[(12)] = inst_40981);
return statearr_41014;
})();var statearr_41015_41047 = state_40989__$1;(statearr_41015_41047[(2)] = null);
(statearr_41015_41047[(1)] = (2));
return cljs.core.constant$keyword$1100;
} else
{if((state_val_40990 === (18)))
{var inst_40957 = (state_40989[(11)]);var inst_40952 = (state_40989[(9)]);var inst_40965 = (state_40989[(2)]);var inst_40966 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(inst_40952,inst_40965);var inst_40951 = inst_40957;var inst_40952__$1 = inst_40966;var state_40989__$1 = (function (){var statearr_41016 = state_40989;(statearr_41016[(10)] = inst_40951);
(statearr_41016[(9)] = inst_40952__$1);
return statearr_41016;
})();var statearr_41017_41048 = state_40989__$1;(statearr_41017_41048[(2)] = null);
(statearr_41017_41048[(1)] = (11));
return cljs.core.constant$keyword$1100;
} else
{if((state_val_40990 === (8)))
{var inst_40946 = (state_40989[(7)]);var inst_40950 = cljs.core.PersistentVector.EMPTY;var inst_40951 = inst_40946;var inst_40952 = inst_40950;var state_40989__$1 = (function (){var statearr_41018 = state_40989;(statearr_41018[(10)] = inst_40951);
(statearr_41018[(9)] = inst_40952);
return statearr_41018;
})();var statearr_41019_41049 = state_40989__$1;(statearr_41019_41049[(2)] = null);
(statearr_41019_41049[(1)] = (11));
return cljs.core.constant$keyword$1100;
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
var state_machine__5694__auto____0 = (function (){var statearr_41023 = [null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_41023[(0)] = state_machine__5694__auto__);
(statearr_41023[(1)] = (1));
return statearr_41023;
});
var state_machine__5694__auto____1 = (function (state_40989){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__(state_40989);if(cljs.core.keyword_identical_QMARK_(result__5696__auto__,cljs.core.constant$keyword$1100))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e41024){if((e41024 instanceof Object))
{var ex__5697__auto__ = e41024;var statearr_41025_41050 = state_40989;(statearr_41025_41050[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_40989);
return cljs.core.constant$keyword$1100;
} else
{throw e41024;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5695__auto__,cljs.core.constant$keyword$1100))
{{
var G__41051 = state_40989;
state_40989 = G__41051;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_40989){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_40989);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto__))
})();var state__5710__auto__ = (function (){var statearr_41026 = (f__5709__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5709__auto__.cljs$core$IFn$_invoke$arity$0() : f__5709__auto__.call(null));(statearr_41026[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto__);
return statearr_41026;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5710__auto__);
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
clustermap.api.ordered_api = (function ordered_api(request_handler,result_handler){var ocomm = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));var _ = clustermap.api.ordered_api_results(ocomm,result_handler);return ((function (ocomm,_){
return (function() { 
var G__41054__delegate = function (req_args){var temp__4124__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(request_handler,req_args);if(cljs.core.truth_(temp__4124__auto__))
{var r = temp__4124__auto__;var rseq = ((cljs.core.sequential_QMARK_(r))?r:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [r], null));var vec__41053 = rseq;var rcomm = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41053,(0),null);var result_handler_args = cljs.core.nthnext(vec__41053,(1));return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(ocomm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rcomm,result_handler_args], null));
} else
{return null;
}
};
var G__41054 = function (var_args){
var req_args = null;if (arguments.length > 0) {
  req_args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__41054__delegate.call(this,req_args);};
G__41054.cljs$lang$maxFixedArity = 0;
G__41054.cljs$lang$applyTo = (function (arglist__41055){
var req_args = cljs.core.seq(arglist__41055);
return G__41054__delegate(req_args);
});
G__41054.cljs$core$IFn$_invoke$arity$variadic = G__41054__delegate;
return G__41054;
})()
;
;})(ocomm,_))
});
/**
* @param {...*} var_args
*/
clustermap.api.log_api = (function() { 
var log_api__delegate = function (f,args){var ch = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,args);var c__5708__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5708__auto__,ch){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto__,ch){
return (function (state_41073){var state_val_41074 = (state_41073[(1)]);if((state_val_41074 === (2)))
{var inst_41070 = (state_41073[(2)]);var inst_41071 = console.log(inst_41070);var state_41073__$1 = state_41073;return cljs.core.async.impl.ioc_helpers.return_chan(state_41073__$1,inst_41071);
} else
{if((state_val_41074 === (1)))
{var state_41073__$1 = state_41073;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_41073__$1,(2),ch);
} else
{return null;
}
}
});})(c__5708__auto__,ch))
;return ((function (switch__5693__auto__,c__5708__auto__,ch){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_41078 = [null,null,null,null,null,null,null];(statearr_41078[(0)] = state_machine__5694__auto__);
(statearr_41078[(1)] = (1));
return statearr_41078;
});
var state_machine__5694__auto____1 = (function (state_41073){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__(state_41073);if(cljs.core.keyword_identical_QMARK_(result__5696__auto__,cljs.core.constant$keyword$1100))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e41079){if((e41079 instanceof Object))
{var ex__5697__auto__ = e41079;var statearr_41080_41082 = state_41073;(statearr_41080_41082[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_41073);
return cljs.core.constant$keyword$1100;
} else
{throw e41079;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5695__auto__,cljs.core.constant$keyword$1100))
{{
var G__41083 = state_41073;
state_41073 = G__41083;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_41073){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_41073);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto__,ch))
})();var state__5710__auto__ = (function (){var statearr_41081 = (f__5709__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5709__auto__.cljs$core$IFn$_invoke$arity$0() : f__5709__auto__.call(null));(statearr_41081[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto__);
return statearr_41081;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5710__auto__);
});})(c__5708__auto__,ch))
);
return c__5708__auto__;
};
var log_api = function (f,var_args){
var args = null;if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return log_api__delegate.call(this,f,args);};
log_api.cljs$lang$maxFixedArity = 1;
log_api.cljs$lang$applyTo = (function (arglist__41084){
var f = cljs.core.first(arglist__41084);
var args = cljs.core.rest(arglist__41084);
return log_api__delegate(f,args);
});
log_api.cljs$core$IFn$_invoke$arity$variadic = log_api__delegate;
return log_api;
})()
;
clustermap.api.map_json_params = (function map_json_params(m){return clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__41087){var vec__41088 = p__41087;var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41088,(0),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41088,(1),null);return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(k))+"="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(JSON.stringify(cljs.core.clj__GT_js(v))));
}),m));
});
/**
* put the results of an api call into an atom... makes ad-hoc api calls easy
*/
clustermap.api.fetch = (function fetch(comm){var r = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null) : cljs.core.atom.call(null,null));var c__5708__auto___41115 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5708__auto___41115,r){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___41115,r){
return (function (state_41106){var state_val_41107 = (state_41106[(1)]);if((state_val_41107 === (2)))
{var inst_41103 = (state_41106[(2)]);var inst_41104 = (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(r,inst_41103) : cljs.core.reset_BANG_.call(null,r,inst_41103));var state_41106__$1 = state_41106;return cljs.core.async.impl.ioc_helpers.return_chan(state_41106__$1,inst_41104);
} else
{if((state_val_41107 === (1)))
{var state_41106__$1 = state_41106;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_41106__$1,(2),comm);
} else
{return null;
}
}
});})(c__5708__auto___41115,r))
;return ((function (switch__5693__auto__,c__5708__auto___41115,r){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_41111 = [null,null,null,null,null,null,null];(statearr_41111[(0)] = state_machine__5694__auto__);
(statearr_41111[(1)] = (1));
return statearr_41111;
});
var state_machine__5694__auto____1 = (function (state_41106){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__(state_41106);if(cljs.core.keyword_identical_QMARK_(result__5696__auto__,cljs.core.constant$keyword$1100))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e41112){if((e41112 instanceof Object))
{var ex__5697__auto__ = e41112;var statearr_41113_41116 = state_41106;(statearr_41113_41116[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_41106);
return cljs.core.constant$keyword$1100;
} else
{throw e41112;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5695__auto__,cljs.core.constant$keyword$1100))
{{
var G__41117 = state_41106;
state_41106 = G__41117;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_41106){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_41106);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___41115,r))
})();var state__5710__auto__ = (function (){var statearr_41114 = (f__5709__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5709__auto__.cljs$core$IFn$_invoke$arity$0() : f__5709__auto__.call(null));(statearr_41114[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___41115);
return statearr_41114;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5710__auto__);
});})(c__5708__auto___41115,r))
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
boundarylines.cljs$lang$applyTo = (function (arglist__41118){
var id = cljs.core.first(arglist__41118);
arglist__41118 = cljs.core.next(arglist__41118);
var tolerance = cljs.core.first(arglist__41118);
var opts = cljs.core.rest(arglist__41118);
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
boundaryline_collection_index.cljs$lang$applyTo = (function (arglist__41119){
var id = cljs.core.first(arglist__41119);
var opts = cljs.core.rest(arglist__41119);
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
var boundaryline_set__delegate = function (ids,tolerance,opts){return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(clustermap.api.POST,"/api/boundaryline-set",new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1117,ids,cljs.core.constant$keyword$1118,tolerance], null),opts);
};
var boundaryline_set = function (ids,tolerance,var_args){
var opts = null;if (arguments.length > 2) {
  opts = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return boundaryline_set__delegate.call(this,ids,tolerance,opts);};
boundaryline_set.cljs$lang$maxFixedArity = 2;
boundaryline_set.cljs$lang$applyTo = (function (arglist__41120){
var ids = cljs.core.first(arglist__41120);
arglist__41120 = cljs.core.next(arglist__41120);
var tolerance = cljs.core.first(arglist__41120);
var opts = cljs.core.rest(arglist__41120);
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
var boundaryline_collection_view__delegate = function (collection_id,tolerance,bounds,p__41121){var map__41123 = p__41121;var map__41123__$1 = ((cljs.core.seq_QMARK_(map__41123))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41123):map__41123);var opts = map__41123__$1;var boundaryline_ids = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41123__$1,cljs.core.constant$keyword$1119);var opts__$1 = cljs.core.flatten(cljs.core.seq(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(opts,cljs.core.constant$keyword$1119)));return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(clustermap.api.POST,("/api/boundaryline-collection-view/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(collection_id))+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(tolerance)),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1120,bounds,cljs.core.constant$keyword$1119,boundaryline_ids], null),opts__$1);
};
var boundaryline_collection_view = function (collection_id,tolerance,bounds,var_args){
var p__41121 = null;if (arguments.length > 3) {
  p__41121 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return boundaryline_collection_view__delegate.call(this,collection_id,tolerance,bounds,p__41121);};
boundaryline_collection_view.cljs$lang$maxFixedArity = 3;
boundaryline_collection_view.cljs$lang$applyTo = (function (arglist__41124){
var collection_id = cljs.core.first(arglist__41124);
arglist__41124 = cljs.core.next(arglist__41124);
var tolerance = cljs.core.first(arglist__41124);
arglist__41124 = cljs.core.next(arglist__41124);
var bounds = cljs.core.first(arglist__41124);
var p__41121 = cljs.core.rest(arglist__41124);
return boundaryline_collection_view__delegate(collection_id,tolerance,bounds,p__41121);
});
boundaryline_collection_view.cljs$core$IFn$_invoke$arity$variadic = boundaryline_collection_view__delegate;
return boundaryline_collection_view;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.boundaryline_aggregation = (function() { 
var boundaryline_aggregation__delegate = function (index,type,blcoll,attr,filter,bounds,p__41125){var vec__41127 = p__41125;var type_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41127,(0),null);return clustermap.api.POST(("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/boundaryline-agg/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(index)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(blcoll)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(attr)+"?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params(type_ids))),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1121,filter,cljs.core.constant$keyword$1120,bounds], null));
};
var boundaryline_aggregation = function (index,type,blcoll,attr,filter,bounds,var_args){
var p__41125 = null;if (arguments.length > 6) {
  p__41125 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 6),0);} 
return boundaryline_aggregation__delegate.call(this,index,type,blcoll,attr,filter,bounds,p__41125);};
boundaryline_aggregation.cljs$lang$maxFixedArity = 6;
boundaryline_aggregation.cljs$lang$applyTo = (function (arglist__41128){
var index = cljs.core.first(arglist__41128);
arglist__41128 = cljs.core.next(arglist__41128);
var type = cljs.core.first(arglist__41128);
arglist__41128 = cljs.core.next(arglist__41128);
var blcoll = cljs.core.first(arglist__41128);
arglist__41128 = cljs.core.next(arglist__41128);
var attr = cljs.core.first(arglist__41128);
arglist__41128 = cljs.core.next(arglist__41128);
var filter = cljs.core.first(arglist__41128);
arglist__41128 = cljs.core.next(arglist__41128);
var bounds = cljs.core.first(arglist__41128);
var p__41125 = cljs.core.rest(arglist__41128);
return boundaryline_aggregation__delegate(index,type,blcoll,attr,filter,bounds,p__41125);
});
boundaryline_aggregation.cljs$core$IFn$_invoke$arity$variadic = boundaryline_aggregation__delegate;
return boundaryline_aggregation;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.summary_stats = (function() { 
var summary_stats__delegate = function (index,type,statsattrs,filter,bounds,p__41129){var vec__41131 = p__41129;var type_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41131,(0),null);return clustermap.api.POST(("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/summary-stats/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(index)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)+"?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params(type_ids))),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$1122,statsattrs,cljs.core.constant$keyword$1121,filter,cljs.core.constant$keyword$1120,bounds], null));
};
var summary_stats = function (index,type,statsattrs,filter,bounds,var_args){
var p__41129 = null;if (arguments.length > 5) {
  p__41129 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);} 
return summary_stats__delegate.call(this,index,type,statsattrs,filter,bounds,p__41129);};
summary_stats.cljs$lang$maxFixedArity = 5;
summary_stats.cljs$lang$applyTo = (function (arglist__41132){
var index = cljs.core.first(arglist__41132);
arglist__41132 = cljs.core.next(arglist__41132);
var type = cljs.core.first(arglist__41132);
arglist__41132 = cljs.core.next(arglist__41132);
var statsattrs = cljs.core.first(arglist__41132);
arglist__41132 = cljs.core.next(arglist__41132);
var filter = cljs.core.first(arglist__41132);
arglist__41132 = cljs.core.next(arglist__41132);
var bounds = cljs.core.first(arglist__41132);
var p__41129 = cljs.core.rest(arglist__41132);
return summary_stats__delegate(index,type,statsattrs,filter,bounds,p__41129);
});
summary_stats.cljs$core$IFn$_invoke$arity$variadic = summary_stats__delegate;
return summary_stats;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.location_lists = (function() { 
var location_lists__delegate = function (index,type,location_attr,attrs,max_count,filter,bounds,p__41133){var vec__41135 = p__41133;var type_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41135,(0),null);return clustermap.api.POST(("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/location-lists/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(index)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(location_attr)+"?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params(type_ids))),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$1123,max_count,cljs.core.constant$keyword$1124,attrs,cljs.core.constant$keyword$1121,filter,cljs.core.constant$keyword$1120,bounds], null));
};
var location_lists = function (index,type,location_attr,attrs,max_count,filter,bounds,var_args){
var p__41133 = null;if (arguments.length > 7) {
  p__41133 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 7),0);} 
return location_lists__delegate.call(this,index,type,location_attr,attrs,max_count,filter,bounds,p__41133);};
location_lists.cljs$lang$maxFixedArity = 7;
location_lists.cljs$lang$applyTo = (function (arglist__41136){
var index = cljs.core.first(arglist__41136);
arglist__41136 = cljs.core.next(arglist__41136);
var type = cljs.core.first(arglist__41136);
arglist__41136 = cljs.core.next(arglist__41136);
var location_attr = cljs.core.first(arglist__41136);
arglist__41136 = cljs.core.next(arglist__41136);
var attrs = cljs.core.first(arglist__41136);
arglist__41136 = cljs.core.next(arglist__41136);
var max_count = cljs.core.first(arglist__41136);
arglist__41136 = cljs.core.next(arglist__41136);
var filter = cljs.core.first(arglist__41136);
arglist__41136 = cljs.core.next(arglist__41136);
var bounds = cljs.core.first(arglist__41136);
var p__41133 = cljs.core.rest(arglist__41136);
return location_lists__delegate(index,type,location_attr,attrs,max_count,filter,bounds,p__41133);
});
location_lists.cljs$core$IFn$_invoke$arity$variadic = location_lists__delegate;
return location_lists;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.simple_table = (function() { 
var simple_table__delegate = function (index,type,filter_spec,bounds,sort_spec,from,size,p__41137){var vec__41139 = p__41137;var type_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41139,(0),null);return clustermap.api.POST(("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/simple-table/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(index)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)+"?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params(type_ids))),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$1121,filter_spec,cljs.core.constant$keyword$1120,bounds,cljs.core.constant$keyword$1125,sort_spec,cljs.core.constant$keyword$1126,from,cljs.core.constant$keyword$1127,size], null));
};
var simple_table = function (index,type,filter_spec,bounds,sort_spec,from,size,var_args){
var p__41137 = null;if (arguments.length > 7) {
  p__41137 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 7),0);} 
return simple_table__delegate.call(this,index,type,filter_spec,bounds,sort_spec,from,size,p__41137);};
simple_table.cljs$lang$maxFixedArity = 7;
simple_table.cljs$lang$applyTo = (function (arglist__41140){
var index = cljs.core.first(arglist__41140);
arglist__41140 = cljs.core.next(arglist__41140);
var type = cljs.core.first(arglist__41140);
arglist__41140 = cljs.core.next(arglist__41140);
var filter_spec = cljs.core.first(arglist__41140);
arglist__41140 = cljs.core.next(arglist__41140);
var bounds = cljs.core.first(arglist__41140);
arglist__41140 = cljs.core.next(arglist__41140);
var sort_spec = cljs.core.first(arglist__41140);
arglist__41140 = cljs.core.next(arglist__41140);
var from = cljs.core.first(arglist__41140);
arglist__41140 = cljs.core.next(arglist__41140);
var size = cljs.core.first(arglist__41140);
var p__41137 = cljs.core.rest(arglist__41140);
return simple_table__delegate(index,type,filter_spec,bounds,sort_spec,from,size,p__41137);
});
simple_table.cljs$core$IFn$_invoke$arity$variadic = simple_table__delegate;
return simple_table;
})()
;
clustermap.api.timeline = (function timeline(index,type,filter_spec,bounds,time_variable,after,before,interval,metric_variables){return clustermap.api.POST(("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/timeline/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(index)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)),new cljs.core.PersistentArrayMap(null, 7, [cljs.core.constant$keyword$1128,filter_spec,cljs.core.constant$keyword$1120,bounds,cljs.core.constant$keyword$1129,time_variable,cljs.core.constant$keyword$1130,after,cljs.core.constant$keyword$1131,before,cljs.core.constant$keyword$1132,interval,cljs.core.constant$keyword$1133,metric_variables], null));
});
