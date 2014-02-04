// Compiled by ClojureScript 0.0-2138
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
clustermap.api.GET = (function() { 
var GET__delegate = function (url,p__19821){var map__19823 = p__19821;var map__19823__$1 = ((cljs.core.seq_QMARK_(map__19823))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19823):map__19823);var raw = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19823__$1,cljs.core.constant$keyword$224);var comm = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);goog.net.XhrIo.send(url,(function (event){cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,(function (d){if(cljs.core.truth_(raw))
{return d;
} else
{return cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(d,cljs.core.array_seq([cljs.core.constant$keyword$205,true], 0));
}
}).call(null,((JSON.parse.cljs$core$IFn$_invoke$arity$1 ? JSON.parse.cljs$core$IFn$_invoke$arity$1(event.target.getResponseText()) : JSON.parse.call(null,event.target.getResponseText()))["data"])));
return cljs.core.async.close_BANG_(comm);
}));
return comm;
};
var GET = function (url,var_args){
var p__19821 = null;if (arguments.length > 1) {
  p__19821 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return GET__delegate.call(this,url,p__19821);};
GET.cljs$lang$maxFixedArity = 1;
GET.cljs$lang$applyTo = (function (arglist__19824){
var url = cljs.core.first(arglist__19824);
var p__19821 = cljs.core.rest(arglist__19824);
return GET__delegate(url,p__19821);
});
GET.cljs$core$IFn$_invoke$arity$variadic = GET__delegate;
return GET;
})()
;
/**
* - ocomm : a channel containing [result-chans result-handler-args]
* gather results from the one-or-more result-chans, and
* pass them to the handler along with any result-handler-args
* - handler : invoked with (apply handler result-or-results result-handler-args)
*/
clustermap.api.ordered_api_results = (function ordered_api_results(ocomm,handler){var c__5521__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_19957){var state_val_19958 = (state_19957[1]);if((state_val_19958 === 1))
{var state_19957__$1 = state_19957;var statearr_19959_19995 = state_19957__$1;(statearr_19959_19995[2] = null);
(statearr_19959_19995[1] = 2);
return cljs.core.constant$keyword$210;
} else
{if((state_val_19958 === 2))
{var state_19957__$1 = state_19957;if(true)
{var statearr_19960_19996 = state_19957__$1;(statearr_19960_19996[1] = 4);
} else
{var statearr_19961_19997 = state_19957__$1;(statearr_19961_19997[1] = 5);
}
return cljs.core.constant$keyword$210;
} else
{if((state_val_19958 === 3))
{var inst_19955 = (state_19957[2]);var state_19957__$1 = state_19957;return cljs.core.async.impl.ioc_helpers.return_chan(state_19957__$1,inst_19955);
} else
{if((state_val_19958 === 4))
{var state_19957__$1 = state_19957;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19957__$1,7,ocomm);
} else
{if((state_val_19958 === 5))
{var state_19957__$1 = state_19957;var statearr_19962_19998 = state_19957__$1;(statearr_19962_19998[2] = null);
(statearr_19962_19998[1] = 6);
return cljs.core.constant$keyword$210;
} else
{if((state_val_19958 === 6))
{var inst_19953 = (state_19957[2]);var state_19957__$1 = state_19957;var statearr_19963_19999 = state_19957__$1;(statearr_19963_19999[2] = inst_19953);
(statearr_19963_19999[1] = 3);
return cljs.core.constant$keyword$210;
} else
{if((state_val_19958 === 7))
{var inst_19915 = (state_19957[7]);var inst_19914 = (state_19957[2]);var inst_19915__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_19914,0,null);var inst_19916 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_19914,1,null);var inst_19917 = cljs.core.sequential_QMARK_(inst_19915__$1);var state_19957__$1 = (function (){var statearr_19964 = state_19957;(statearr_19964[7] = inst_19915__$1);
(statearr_19964[8] = inst_19916);
return statearr_19964;
})();if(inst_19917)
{var statearr_19965_20000 = state_19957__$1;(statearr_19965_20000[1] = 8);
} else
{var statearr_19966_20001 = state_19957__$1;(statearr_19966_20001[1] = 9);
}
return cljs.core.constant$keyword$210;
} else
{if((state_val_19958 === 8))
{var inst_19915 = (state_19957[7]);var inst_19919 = inst_19915;var inst_19920 = cljs.core.PersistentVector.EMPTY;var state_19957__$1 = (function (){var statearr_19967 = state_19957;(statearr_19967[9] = inst_19919);
(statearr_19967[10] = inst_19920);
return statearr_19967;
})();var statearr_19968_20002 = state_19957__$1;(statearr_19968_20002[2] = null);
(statearr_19968_20002[1] = 11);
return cljs.core.constant$keyword$210;
} else
{if((state_val_19958 === 9))
{var inst_19915 = (state_19957[7]);var state_19957__$1 = state_19957;if(cljs.core.truth_(inst_19915))
{var statearr_19969_20003 = state_19957__$1;(statearr_19969_20003[1] = 20);
} else
{var statearr_19970_20004 = state_19957__$1;(statearr_19970_20004[1] = 21);
}
return cljs.core.constant$keyword$210;
} else
{if((state_val_19958 === 10))
{var inst_19916 = (state_19957[8]);var inst_19948 = (state_19957[2]);var inst_19949 = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(handler,inst_19948,inst_19916);var state_19957__$1 = (function (){var statearr_19971 = state_19957;(statearr_19971[11] = inst_19949);
return statearr_19971;
})();var statearr_19972_20005 = state_19957__$1;(statearr_19972_20005[2] = null);
(statearr_19972_20005[1] = 2);
return cljs.core.constant$keyword$210;
} else
{if((state_val_19958 === 11))
{var inst_19919 = (state_19957[9]);var inst_19922 = cljs.core.empty_QMARK_(inst_19919);var state_19957__$1 = state_19957;if(inst_19922)
{var statearr_19973_20006 = state_19957__$1;(statearr_19973_20006[1] = 13);
} else
{var statearr_19974_20007 = state_19957__$1;(statearr_19974_20007[1] = 14);
}
return cljs.core.constant$keyword$210;
} else
{if((state_val_19958 === 12))
{var inst_19939 = (state_19957[2]);var state_19957__$1 = state_19957;var statearr_19975_20008 = state_19957__$1;(statearr_19975_20008[2] = inst_19939);
(statearr_19975_20008[1] = 10);
return cljs.core.constant$keyword$210;
} else
{if((state_val_19958 === 13))
{var inst_19920 = (state_19957[10]);var state_19957__$1 = state_19957;var statearr_19976_20009 = state_19957__$1;(statearr_19976_20009[2] = inst_19920);
(statearr_19976_20009[1] = 15);
return cljs.core.constant$keyword$210;
} else
{if((state_val_19958 === 14))
{var inst_19919 = (state_19957[9]);var inst_19925 = cljs.core.rest(inst_19919);var inst_19926 = cljs.core.first(inst_19919);var state_19957__$1 = (function (){var statearr_19977 = state_19957;(statearr_19977[12] = inst_19925);
return statearr_19977;
})();if(cljs.core.truth_(inst_19926))
{var statearr_19978_20010 = state_19957__$1;(statearr_19978_20010[1] = 16);
} else
{var statearr_19979_20011 = state_19957__$1;(statearr_19979_20011[1] = 17);
}
return cljs.core.constant$keyword$210;
} else
{if((state_val_19958 === 15))
{var inst_19937 = (state_19957[2]);var state_19957__$1 = state_19957;var statearr_19980_20012 = state_19957__$1;(statearr_19980_20012[2] = inst_19937);
(statearr_19980_20012[1] = 12);
return cljs.core.constant$keyword$210;
} else
{if((state_val_19958 === 16))
{var inst_19919 = (state_19957[9]);var inst_19928 = cljs.core.first(inst_19919);var state_19957__$1 = state_19957;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19957__$1,19,inst_19928);
} else
{if((state_val_19958 === 17))
{var state_19957__$1 = state_19957;var statearr_19981_20013 = state_19957__$1;(statearr_19981_20013[2] = null);
(statearr_19981_20013[1] = 18);
return cljs.core.constant$keyword$210;
} else
{if((state_val_19958 === 18))
{var inst_19925 = (state_19957[12]);var inst_19920 = (state_19957[10]);var inst_19933 = (state_19957[2]);var inst_19934 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(inst_19920,inst_19933);var inst_19919 = inst_19925;var inst_19920__$1 = inst_19934;var state_19957__$1 = (function (){var statearr_19982 = state_19957;(statearr_19982[9] = inst_19919);
(statearr_19982[10] = inst_19920__$1);
return statearr_19982;
})();var statearr_19983_20014 = state_19957__$1;(statearr_19983_20014[2] = null);
(statearr_19983_20014[1] = 11);
return cljs.core.constant$keyword$210;
} else
{if((state_val_19958 === 19))
{var inst_19930 = (state_19957[2]);var state_19957__$1 = state_19957;var statearr_19984_20015 = state_19957__$1;(statearr_19984_20015[2] = inst_19930);
(statearr_19984_20015[1] = 18);
return cljs.core.constant$keyword$210;
} else
{if((state_val_19958 === 20))
{var inst_19915 = (state_19957[7]);var state_19957__$1 = state_19957;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19957__$1,23,inst_19915);
} else
{if((state_val_19958 === 21))
{var state_19957__$1 = state_19957;var statearr_19985_20016 = state_19957__$1;(statearr_19985_20016[2] = null);
(statearr_19985_20016[1] = 22);
return cljs.core.constant$keyword$210;
} else
{if((state_val_19958 === 22))
{var inst_19946 = (state_19957[2]);var state_19957__$1 = state_19957;var statearr_19986_20017 = state_19957__$1;(statearr_19986_20017[2] = inst_19946);
(statearr_19986_20017[1] = 10);
return cljs.core.constant$keyword$210;
} else
{if((state_val_19958 === 23))
{var inst_19943 = (state_19957[2]);var state_19957__$1 = state_19957;var statearr_19987_20018 = state_19957__$1;(statearr_19987_20018[2] = inst_19943);
(statearr_19987_20018[1] = 22);
return cljs.core.constant$keyword$210;
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
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_19991 = [null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_19991[0] = state_machine__5507__auto__);
(statearr_19991[1] = 1);
return statearr_19991;
});
var state_machine__5507__auto____1 = (function (state_19957){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_19957);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$210))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e19992){if((e19992 instanceof Object))
{var ex__5510__auto__ = e19992;var statearr_19993_20019 = state_19957;(statearr_19993_20019[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_19957);
return cljs.core.constant$keyword$210;
} else
{if(cljs.core.constant$keyword$199)
{throw e19992;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$210))
{{
var G__20020 = state_19957;
state_19957 = G__20020;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_19957){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_19957);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_19994 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_19994[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_19994;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5523__auto__);
}));
return c__5521__auto__;
});
/**
* order responses from an async API according to the order of requests
* - request-handler: fn to send an async API request, returning a channel of a single result value,
* and optional additional args for the result-handler. return nil to
* abandon request
* - result-handler: function of API result and optional additional args from request-handler result
*/
clustermap.api.ordered_api = (function ordered_api(request_handler,result_handler){var ocomm = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer(1));var _ = clustermap.api.ordered_api_results(ocomm,result_handler);return (function() { 
var G__20023__delegate = function (req_args){var temp__4090__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(request_handler,req_args);if(cljs.core.truth_(temp__4090__auto__))
{var r = temp__4090__auto__;var rseq = ((cljs.core.sequential_QMARK_(r))?r:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [r], null));var vec__20022 = rseq;var rcomm = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20022,0,null);var result_handler_args = cljs.core.nthnext(vec__20022,1);return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(ocomm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rcomm,result_handler_args], null));
} else
{return null;
}
};
var G__20023 = function (var_args){
var req_args = null;if (arguments.length > 0) {
  req_args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__20023__delegate.call(this,req_args);};
G__20023.cljs$lang$maxFixedArity = 0;
G__20023.cljs$lang$applyTo = (function (arglist__20024){
var req_args = cljs.core.seq(arglist__20024);
return G__20023__delegate(req_args);
});
G__20023.cljs$core$IFn$_invoke$arity$variadic = G__20023__delegate;
return G__20023;
})()
;
});
/**
* @param {...*} var_args
*/
clustermap.api.log_api = (function() { 
var log_api__delegate = function (f,args){var ch = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,args);var c__5521__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_20042){var state_val_20043 = (state_20042[1]);if((state_val_20043 === 2))
{var inst_20039 = (state_20042[2]);var inst_20040 = console.log(inst_20039);var state_20042__$1 = state_20042;return cljs.core.async.impl.ioc_helpers.return_chan(state_20042__$1,inst_20040);
} else
{if((state_val_20043 === 1))
{var state_20042__$1 = state_20042;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20042__$1,2,ch);
} else
{return null;
}
}
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_20047 = [null,null,null,null,null,null,null];(statearr_20047[0] = state_machine__5507__auto__);
(statearr_20047[1] = 1);
return statearr_20047;
});
var state_machine__5507__auto____1 = (function (state_20042){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_20042);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$210))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e20048){if((e20048 instanceof Object))
{var ex__5510__auto__ = e20048;var statearr_20049_20051 = state_20042;(statearr_20049_20051[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_20042);
return cljs.core.constant$keyword$210;
} else
{if(cljs.core.constant$keyword$199)
{throw e20048;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$210))
{{
var G__20052 = state_20042;
state_20042 = G__20052;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_20042){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_20042);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_20050 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_20050[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_20050;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5523__auto__);
}));
return c__5521__auto__;
};
var log_api = function (f,var_args){
var args = null;if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return log_api__delegate.call(this,f,args);};
log_api.cljs$lang$maxFixedArity = 1;
log_api.cljs$lang$applyTo = (function (arglist__20053){
var f = cljs.core.first(arglist__20053);
var args = cljs.core.rest(arglist__20053);
return log_api__delegate(f,args);
});
log_api.cljs$core$IFn$_invoke$arity$variadic = log_api__delegate;
return log_api;
})()
;
clustermap.api.map_json_params = (function map_json_params(m){return clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__20056){var vec__20057 = p__20056;var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20057,0,null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20057,1,null);return [cljs.core.str(cljs.core.name(k)),cljs.core.str("="),cljs.core.str(JSON.stringify(cljs.core.clj__GT_js(v)))].join('');
}),m));
});
clustermap.api.api_prefix = config.api.prefix;
/**
* @param {...*} var_args
*/
clustermap.api.boundarylines = (function() { 
var boundarylines__delegate = function (id,tolerance,opts){return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(clustermap.api.GET,[cljs.core.str("/api/boundarylines/"),cljs.core.str(id),cljs.core.str("/"),cljs.core.str(tolerance)].join(''),opts);
};
var boundarylines = function (id,tolerance,var_args){
var opts = null;if (arguments.length > 2) {
  opts = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return boundarylines__delegate.call(this,id,tolerance,opts);};
boundarylines.cljs$lang$maxFixedArity = 2;
boundarylines.cljs$lang$applyTo = (function (arglist__20058){
var id = cljs.core.first(arglist__20058);
arglist__20058 = cljs.core.next(arglist__20058);
var tolerance = cljs.core.first(arglist__20058);
var opts = cljs.core.rest(arglist__20058);
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
var boundaryline_collection_index__delegate = function (id,opts){return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(clustermap.api.GET,[cljs.core.str("/api/boundaryline-collection-index/"),cljs.core.str(id)].join(''),opts);
};
var boundaryline_collection_index = function (id,var_args){
var opts = null;if (arguments.length > 1) {
  opts = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return boundaryline_collection_index__delegate.call(this,id,opts);};
boundaryline_collection_index.cljs$lang$maxFixedArity = 1;
boundaryline_collection_index.cljs$lang$applyTo = (function (arglist__20059){
var id = cljs.core.first(arglist__20059);
var opts = cljs.core.rest(arglist__20059);
return boundaryline_collection_index__delegate(id,opts);
});
boundaryline_collection_index.cljs$core$IFn$_invoke$arity$variadic = boundaryline_collection_index__delegate;
return boundaryline_collection_index;
})()
;
clustermap.api.search = (function search(q){if((cljs.core.count(clojure.string.trim(q)) > 0))
{return clustermap.api.GET([cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/search?q="),cljs.core.str(q)].join(''));
} else
{return cljs.core.async.to_chan(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [{}], null));
}
});
clustermap.api.constituency = (function constituency(id){return clustermap.api.GET([cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/constituencies/"),cljs.core.str(id)].join(''));
});
/**
* @param {...*} var_args
*/
clustermap.api.constituencies = (function() { 
var constituencies__delegate = function (p__20060){var vec__20062 = p__20060;var type_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20062,0,null);return clustermap.api.GET.cljs$core$IFn$_invoke$arity$variadic("/api/",cljs.core.array_seq([clustermap.api.api_prefix,"/constituencies?",clustermap.api.map_json_params(type_ids)], 0));
};
var constituencies = function (var_args){
var p__20060 = null;if (arguments.length > 0) {
  p__20060 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return constituencies__delegate.call(this,p__20060);};
constituencies.cljs$lang$maxFixedArity = 0;
constituencies.cljs$lang$applyTo = (function (arglist__20063){
var p__20060 = cljs.core.seq(arglist__20063);
return constituencies__delegate(p__20060);
});
constituencies.cljs$core$IFn$_invoke$arity$variadic = constituencies__delegate;
return constituencies;
})()
;
clustermap.api.portfolio_company = (function portfolio_company(id){return clustermap.api.GET([cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/portfolio-companies/"),cljs.core.str(id)].join(''));
});
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_companies = (function() { 
var portfolio_companies__delegate = function (p__20064){var vec__20066 = p__20064;var type_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20066,0,null);return clustermap.api.GET([cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/portfolio-companies?sort={\"!latest_turnover\":\"desc\"}&"),cljs.core.str(clustermap.api.map_json_params(type_ids))].join(''));
};
var portfolio_companies = function (var_args){
var p__20064 = null;if (arguments.length > 0) {
  p__20064 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_companies__delegate.call(this,p__20064);};
portfolio_companies.cljs$lang$maxFixedArity = 0;
portfolio_companies.cljs$lang$applyTo = (function (arglist__20067){
var p__20064 = cljs.core.seq(arglist__20067);
return portfolio_companies__delegate(p__20064);
});
portfolio_companies.cljs$core$IFn$_invoke$arity$variadic = portfolio_companies__delegate;
return portfolio_companies;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_stats = (function() { 
var portfolio_company_stats__delegate = function (p__20068){var vec__20070 = p__20068;var type_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20070,0,null);return clustermap.api.GET([cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/portfolio-company-stats?"),cljs.core.str(clustermap.api.map_json_params(type_ids))].join(''));
};
var portfolio_company_stats = function (var_args){
var p__20068 = null;if (arguments.length > 0) {
  p__20068 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_stats__delegate.call(this,p__20068);};
portfolio_company_stats.cljs$lang$maxFixedArity = 0;
portfolio_company_stats.cljs$lang$applyTo = (function (arglist__20071){
var p__20068 = cljs.core.seq(arglist__20071);
return portfolio_company_stats__delegate(p__20068);
});
portfolio_company_stats.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_stats__delegate;
return portfolio_company_stats;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_account_stats = (function() { 
var portfolio_company_account_stats__delegate = function (p__20072){var vec__20074 = p__20072;var type_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20074,0,null);return clustermap.api.GET([cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/portfolio-company-account-stats?"),cljs.core.str(clustermap.api.map_json_params(type_ids))].join(''));
};
var portfolio_company_account_stats = function (var_args){
var p__20072 = null;if (arguments.length > 0) {
  p__20072 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_account_stats__delegate.call(this,p__20072);};
portfolio_company_account_stats.cljs$lang$maxFixedArity = 0;
portfolio_company_account_stats.cljs$lang$applyTo = (function (arglist__20075){
var p__20072 = cljs.core.seq(arglist__20075);
return portfolio_company_account_stats__delegate(p__20072);
});
portfolio_company_account_stats.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_account_stats__delegate;
return portfolio_company_account_stats;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_sites = (function() { 
var portfolio_company_sites__delegate = function (p__20076){var vec__20078 = p__20076;var type_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20078,0,null);return clustermap.api.GET([cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/portfolio-company-sites?"),cljs.core.str(clustermap.api.map_json_params(type_ids))].join(''));
};
var portfolio_company_sites = function (var_args){
var p__20076 = null;if (arguments.length > 0) {
  p__20076 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_sites__delegate.call(this,p__20076);};
portfolio_company_sites.cljs$lang$maxFixedArity = 0;
portfolio_company_sites.cljs$lang$applyTo = (function (arglist__20079){
var p__20076 = cljs.core.seq(arglist__20079);
return portfolio_company_sites__delegate(p__20076);
});
portfolio_company_sites.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_sites__delegate;
return portfolio_company_sites;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_locations = (function() { 
var portfolio_company_locations__delegate = function (p__20080){var vec__20082 = p__20080;var type_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20082,0,null);return clustermap.api.GET([cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/portfolio-company-locations?"),cljs.core.str(clustermap.api.map_json_params(type_ids))].join(''));
};
var portfolio_company_locations = function (var_args){
var p__20080 = null;if (arguments.length > 0) {
  p__20080 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_locations__delegate.call(this,p__20080);};
portfolio_company_locations.cljs$lang$maxFixedArity = 0;
portfolio_company_locations.cljs$lang$applyTo = (function (arglist__20083){
var p__20080 = cljs.core.seq(arglist__20083);
return portfolio_company_locations__delegate(p__20080);
});
portfolio_company_locations.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_locations__delegate;
return portfolio_company_locations;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_site_stats = (function() { 
var portfolio_company_site_stats__delegate = function (p__20084){var vec__20086 = p__20084;var type_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20086,0,null);return clustermap.api.GET([cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/portfolio-company-site-stats?"),cljs.core.str(clustermap.api.map_json_params(type_ids))].join(''));
};
var portfolio_company_site_stats = function (var_args){
var p__20084 = null;if (arguments.length > 0) {
  p__20084 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_site_stats__delegate.call(this,p__20084);};
portfolio_company_site_stats.cljs$lang$maxFixedArity = 0;
portfolio_company_site_stats.cljs$lang$applyTo = (function (arglist__20087){
var p__20084 = cljs.core.seq(arglist__20087);
return portfolio_company_site_stats__delegate(p__20084);
});
portfolio_company_site_stats.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_site_stats__delegate;
return portfolio_company_site_stats;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_site_account_timelines = (function() { 
var portfolio_company_site_account_timelines__delegate = function (p__20088){var vec__20090 = p__20088;var type_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20090,0,null);return clustermap.api.GET([cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/portfolio-company-site-account-timelines?"),cljs.core.str(clustermap.api.map_json_params(type_ids))].join(''));
};
var portfolio_company_site_account_timelines = function (var_args){
var p__20088 = null;if (arguments.length > 0) {
  p__20088 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_site_account_timelines__delegate.call(this,p__20088);};
portfolio_company_site_account_timelines.cljs$lang$maxFixedArity = 0;
portfolio_company_site_account_timelines.cljs$lang$applyTo = (function (arglist__20091){
var p__20088 = cljs.core.seq(arglist__20091);
return portfolio_company_site_account_timelines__delegate(p__20088);
});
portfolio_company_site_account_timelines.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_site_account_timelines__delegate;
return portfolio_company_site_account_timelines;
})()
;
clustermap.api.investor_company = (function investor_company(id){return clustermap.api.GET([cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/investor-companies/"),cljs.core.str(id)].join(''));
});
/**
* @param {...*} var_args
*/
clustermap.api.investor_comapnies = (function() { 
var investor_comapnies__delegate = function (p__20092){var vec__20094 = p__20092;var type_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20094,0,null);return clustermap.api.GET([cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/investor-companies?"),cljs.core.str(clustermap.api.map_json_params(type_ids))].join(''));
};
var investor_comapnies = function (var_args){
var p__20092 = null;if (arguments.length > 0) {
  p__20092 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return investor_comapnies__delegate.call(this,p__20092);};
investor_comapnies.cljs$lang$maxFixedArity = 0;
investor_comapnies.cljs$lang$applyTo = (function (arglist__20095){
var p__20092 = cljs.core.seq(arglist__20095);
return investor_comapnies__delegate(p__20092);
});
investor_comapnies.cljs$core$IFn$_invoke$arity$variadic = investor_comapnies__delegate;
return investor_comapnies;
})()
;
