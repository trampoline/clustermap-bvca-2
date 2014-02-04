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
var GET__delegate = function (url,p__19841){var map__19843 = p__19841;var map__19843__$1 = ((cljs.core.seq_QMARK_(map__19843))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19843):map__19843);var raw = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19843__$1,cljs.core.constant$keyword$223);var comm = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);goog.net.XhrIo.send(url,(function (event){cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,(function (d){if(cljs.core.truth_(raw))
{return d;
} else
{return cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(d,cljs.core.array_seq([cljs.core.constant$keyword$204,true], 0));
}
}).call(null,((JSON.parse.cljs$core$IFn$_invoke$arity$1 ? JSON.parse.cljs$core$IFn$_invoke$arity$1(event.target.getResponseText()) : JSON.parse.call(null,event.target.getResponseText()))["data"])));
return cljs.core.async.close_BANG_(comm);
}));
return comm;
};
var GET = function (url,var_args){
var p__19841 = null;if (arguments.length > 1) {
  p__19841 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return GET__delegate.call(this,url,p__19841);};
GET.cljs$lang$maxFixedArity = 1;
GET.cljs$lang$applyTo = (function (arglist__19844){
var url = cljs.core.first(arglist__19844);
var p__19841 = cljs.core.rest(arglist__19844);
return GET__delegate(url,p__19841);
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
clustermap.api.ordered_api_results = (function ordered_api_results(ocomm,handler){var c__5521__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_19977){var state_val_19978 = (state_19977[1]);if((state_val_19978 === 1))
{var state_19977__$1 = state_19977;var statearr_19979_20015 = state_19977__$1;(statearr_19979_20015[2] = null);
(statearr_19979_20015[1] = 2);
return cljs.core.constant$keyword$209;
} else
{if((state_val_19978 === 2))
{var state_19977__$1 = state_19977;if(true)
{var statearr_19980_20016 = state_19977__$1;(statearr_19980_20016[1] = 4);
} else
{var statearr_19981_20017 = state_19977__$1;(statearr_19981_20017[1] = 5);
}
return cljs.core.constant$keyword$209;
} else
{if((state_val_19978 === 3))
{var inst_19975 = (state_19977[2]);var state_19977__$1 = state_19977;return cljs.core.async.impl.ioc_helpers.return_chan(state_19977__$1,inst_19975);
} else
{if((state_val_19978 === 4))
{var state_19977__$1 = state_19977;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19977__$1,7,ocomm);
} else
{if((state_val_19978 === 5))
{var state_19977__$1 = state_19977;var statearr_19982_20018 = state_19977__$1;(statearr_19982_20018[2] = null);
(statearr_19982_20018[1] = 6);
return cljs.core.constant$keyword$209;
} else
{if((state_val_19978 === 6))
{var inst_19973 = (state_19977[2]);var state_19977__$1 = state_19977;var statearr_19983_20019 = state_19977__$1;(statearr_19983_20019[2] = inst_19973);
(statearr_19983_20019[1] = 3);
return cljs.core.constant$keyword$209;
} else
{if((state_val_19978 === 7))
{var inst_19935 = (state_19977[7]);var inst_19934 = (state_19977[2]);var inst_19935__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_19934,0,null);var inst_19936 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_19934,1,null);var inst_19937 = cljs.core.sequential_QMARK_(inst_19935__$1);var state_19977__$1 = (function (){var statearr_19984 = state_19977;(statearr_19984[8] = inst_19936);
(statearr_19984[7] = inst_19935__$1);
return statearr_19984;
})();if(inst_19937)
{var statearr_19985_20020 = state_19977__$1;(statearr_19985_20020[1] = 8);
} else
{var statearr_19986_20021 = state_19977__$1;(statearr_19986_20021[1] = 9);
}
return cljs.core.constant$keyword$209;
} else
{if((state_val_19978 === 8))
{var inst_19935 = (state_19977[7]);var inst_19939 = inst_19935;var inst_19940 = cljs.core.PersistentVector.EMPTY;var state_19977__$1 = (function (){var statearr_19987 = state_19977;(statearr_19987[9] = inst_19939);
(statearr_19987[10] = inst_19940);
return statearr_19987;
})();var statearr_19988_20022 = state_19977__$1;(statearr_19988_20022[2] = null);
(statearr_19988_20022[1] = 11);
return cljs.core.constant$keyword$209;
} else
{if((state_val_19978 === 9))
{var inst_19935 = (state_19977[7]);var state_19977__$1 = state_19977;if(cljs.core.truth_(inst_19935))
{var statearr_19989_20023 = state_19977__$1;(statearr_19989_20023[1] = 20);
} else
{var statearr_19990_20024 = state_19977__$1;(statearr_19990_20024[1] = 21);
}
return cljs.core.constant$keyword$209;
} else
{if((state_val_19978 === 10))
{var inst_19936 = (state_19977[8]);var inst_19968 = (state_19977[2]);var inst_19969 = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(handler,inst_19968,inst_19936);var state_19977__$1 = (function (){var statearr_19991 = state_19977;(statearr_19991[11] = inst_19969);
return statearr_19991;
})();var statearr_19992_20025 = state_19977__$1;(statearr_19992_20025[2] = null);
(statearr_19992_20025[1] = 2);
return cljs.core.constant$keyword$209;
} else
{if((state_val_19978 === 11))
{var inst_19939 = (state_19977[9]);var inst_19942 = cljs.core.empty_QMARK_(inst_19939);var state_19977__$1 = state_19977;if(inst_19942)
{var statearr_19993_20026 = state_19977__$1;(statearr_19993_20026[1] = 13);
} else
{var statearr_19994_20027 = state_19977__$1;(statearr_19994_20027[1] = 14);
}
return cljs.core.constant$keyword$209;
} else
{if((state_val_19978 === 12))
{var inst_19959 = (state_19977[2]);var state_19977__$1 = state_19977;var statearr_19995_20028 = state_19977__$1;(statearr_19995_20028[2] = inst_19959);
(statearr_19995_20028[1] = 10);
return cljs.core.constant$keyword$209;
} else
{if((state_val_19978 === 13))
{var inst_19940 = (state_19977[10]);var state_19977__$1 = state_19977;var statearr_19996_20029 = state_19977__$1;(statearr_19996_20029[2] = inst_19940);
(statearr_19996_20029[1] = 15);
return cljs.core.constant$keyword$209;
} else
{if((state_val_19978 === 14))
{var inst_19939 = (state_19977[9]);var inst_19945 = cljs.core.rest(inst_19939);var inst_19946 = cljs.core.first(inst_19939);var state_19977__$1 = (function (){var statearr_19997 = state_19977;(statearr_19997[12] = inst_19945);
return statearr_19997;
})();if(cljs.core.truth_(inst_19946))
{var statearr_19998_20030 = state_19977__$1;(statearr_19998_20030[1] = 16);
} else
{var statearr_19999_20031 = state_19977__$1;(statearr_19999_20031[1] = 17);
}
return cljs.core.constant$keyword$209;
} else
{if((state_val_19978 === 15))
{var inst_19957 = (state_19977[2]);var state_19977__$1 = state_19977;var statearr_20000_20032 = state_19977__$1;(statearr_20000_20032[2] = inst_19957);
(statearr_20000_20032[1] = 12);
return cljs.core.constant$keyword$209;
} else
{if((state_val_19978 === 16))
{var inst_19939 = (state_19977[9]);var inst_19948 = cljs.core.first(inst_19939);var state_19977__$1 = state_19977;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19977__$1,19,inst_19948);
} else
{if((state_val_19978 === 17))
{var state_19977__$1 = state_19977;var statearr_20001_20033 = state_19977__$1;(statearr_20001_20033[2] = null);
(statearr_20001_20033[1] = 18);
return cljs.core.constant$keyword$209;
} else
{if((state_val_19978 === 18))
{var inst_19945 = (state_19977[12]);var inst_19940 = (state_19977[10]);var inst_19953 = (state_19977[2]);var inst_19954 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(inst_19940,inst_19953);var inst_19939 = inst_19945;var inst_19940__$1 = inst_19954;var state_19977__$1 = (function (){var statearr_20002 = state_19977;(statearr_20002[9] = inst_19939);
(statearr_20002[10] = inst_19940__$1);
return statearr_20002;
})();var statearr_20003_20034 = state_19977__$1;(statearr_20003_20034[2] = null);
(statearr_20003_20034[1] = 11);
return cljs.core.constant$keyword$209;
} else
{if((state_val_19978 === 19))
{var inst_19950 = (state_19977[2]);var state_19977__$1 = state_19977;var statearr_20004_20035 = state_19977__$1;(statearr_20004_20035[2] = inst_19950);
(statearr_20004_20035[1] = 18);
return cljs.core.constant$keyword$209;
} else
{if((state_val_19978 === 20))
{var inst_19935 = (state_19977[7]);var state_19977__$1 = state_19977;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19977__$1,23,inst_19935);
} else
{if((state_val_19978 === 21))
{var state_19977__$1 = state_19977;var statearr_20005_20036 = state_19977__$1;(statearr_20005_20036[2] = null);
(statearr_20005_20036[1] = 22);
return cljs.core.constant$keyword$209;
} else
{if((state_val_19978 === 22))
{var inst_19966 = (state_19977[2]);var state_19977__$1 = state_19977;var statearr_20006_20037 = state_19977__$1;(statearr_20006_20037[2] = inst_19966);
(statearr_20006_20037[1] = 10);
return cljs.core.constant$keyword$209;
} else
{if((state_val_19978 === 23))
{var inst_19963 = (state_19977[2]);var state_19977__$1 = state_19977;var statearr_20007_20038 = state_19977__$1;(statearr_20007_20038[2] = inst_19963);
(statearr_20007_20038[1] = 22);
return cljs.core.constant$keyword$209;
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
var state_machine__5507__auto____0 = (function (){var statearr_20011 = [null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_20011[0] = state_machine__5507__auto__);
(statearr_20011[1] = 1);
return statearr_20011;
});
var state_machine__5507__auto____1 = (function (state_19977){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_19977);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$209))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e20012){if((e20012 instanceof Object))
{var ex__5510__auto__ = e20012;var statearr_20013_20039 = state_19977;(statearr_20013_20039[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_19977);
return cljs.core.constant$keyword$209;
} else
{if(cljs.core.constant$keyword$198)
{throw e20012;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$209))
{{
var G__20040 = state_19977;
state_19977 = G__20040;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_19977){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_19977);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_20014 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_20014[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_20014;
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
var G__20043__delegate = function (req_args){var temp__4090__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(request_handler,req_args);if(cljs.core.truth_(temp__4090__auto__))
{var r = temp__4090__auto__;var rseq = ((cljs.core.sequential_QMARK_(r))?r:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [r], null));var vec__20042 = rseq;var rcomm = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20042,0,null);var result_handler_args = cljs.core.nthnext(vec__20042,1);return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(ocomm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rcomm,result_handler_args], null));
} else
{return null;
}
};
var G__20043 = function (var_args){
var req_args = null;if (arguments.length > 0) {
  req_args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__20043__delegate.call(this,req_args);};
G__20043.cljs$lang$maxFixedArity = 0;
G__20043.cljs$lang$applyTo = (function (arglist__20044){
var req_args = cljs.core.seq(arglist__20044);
return G__20043__delegate(req_args);
});
G__20043.cljs$core$IFn$_invoke$arity$variadic = G__20043__delegate;
return G__20043;
})()
;
});
/**
* @param {...*} var_args
*/
clustermap.api.log_api = (function() { 
var log_api__delegate = function (f,args){var ch = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,args);var c__5521__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_20062){var state_val_20063 = (state_20062[1]);if((state_val_20063 === 2))
{var inst_20059 = (state_20062[2]);var inst_20060 = console.log(inst_20059);var state_20062__$1 = state_20062;return cljs.core.async.impl.ioc_helpers.return_chan(state_20062__$1,inst_20060);
} else
{if((state_val_20063 === 1))
{var state_20062__$1 = state_20062;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20062__$1,2,ch);
} else
{return null;
}
}
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_20067 = [null,null,null,null,null,null,null];(statearr_20067[0] = state_machine__5507__auto__);
(statearr_20067[1] = 1);
return statearr_20067;
});
var state_machine__5507__auto____1 = (function (state_20062){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_20062);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$209))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e20068){if((e20068 instanceof Object))
{var ex__5510__auto__ = e20068;var statearr_20069_20071 = state_20062;(statearr_20069_20071[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_20062);
return cljs.core.constant$keyword$209;
} else
{if(cljs.core.constant$keyword$198)
{throw e20068;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$209))
{{
var G__20072 = state_20062;
state_20062 = G__20072;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_20062){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_20062);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_20070 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_20070[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_20070;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5523__auto__);
}));
return c__5521__auto__;
};
var log_api = function (f,var_args){
var args = null;if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return log_api__delegate.call(this,f,args);};
log_api.cljs$lang$maxFixedArity = 1;
log_api.cljs$lang$applyTo = (function (arglist__20073){
var f = cljs.core.first(arglist__20073);
var args = cljs.core.rest(arglist__20073);
return log_api__delegate(f,args);
});
log_api.cljs$core$IFn$_invoke$arity$variadic = log_api__delegate;
return log_api;
})()
;
clustermap.api.map_json_params = (function map_json_params(m){return clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__20076){var vec__20077 = p__20076;var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20077,0,null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20077,1,null);return [cljs.core.str(cljs.core.name(k)),cljs.core.str("="),cljs.core.str(JSON.stringify(cljs.core.clj__GT_js(v)))].join('');
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
boundarylines.cljs$lang$applyTo = (function (arglist__20078){
var id = cljs.core.first(arglist__20078);
arglist__20078 = cljs.core.next(arglist__20078);
var tolerance = cljs.core.first(arglist__20078);
var opts = cljs.core.rest(arglist__20078);
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
boundaryline_collection_index.cljs$lang$applyTo = (function (arglist__20079){
var id = cljs.core.first(arglist__20079);
var opts = cljs.core.rest(arglist__20079);
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
var constituencies__delegate = function (p__20080){var vec__20082 = p__20080;var type_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20082,0,null);return clustermap.api.GET.cljs$core$IFn$_invoke$arity$variadic("/api/",cljs.core.array_seq([clustermap.api.api_prefix,"/constituencies?",clustermap.api.map_json_params(type_ids)], 0));
};
var constituencies = function (var_args){
var p__20080 = null;if (arguments.length > 0) {
  p__20080 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return constituencies__delegate.call(this,p__20080);};
constituencies.cljs$lang$maxFixedArity = 0;
constituencies.cljs$lang$applyTo = (function (arglist__20083){
var p__20080 = cljs.core.seq(arglist__20083);
return constituencies__delegate(p__20080);
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
var portfolio_companies__delegate = function (p__20084){var vec__20086 = p__20084;var type_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20086,0,null);return clustermap.api.GET([cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/portfolio-companies?sort={\"!latest_turnover\":\"desc\"}&"),cljs.core.str(clustermap.api.map_json_params(type_ids))].join(''));
};
var portfolio_companies = function (var_args){
var p__20084 = null;if (arguments.length > 0) {
  p__20084 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_companies__delegate.call(this,p__20084);};
portfolio_companies.cljs$lang$maxFixedArity = 0;
portfolio_companies.cljs$lang$applyTo = (function (arglist__20087){
var p__20084 = cljs.core.seq(arglist__20087);
return portfolio_companies__delegate(p__20084);
});
portfolio_companies.cljs$core$IFn$_invoke$arity$variadic = portfolio_companies__delegate;
return portfolio_companies;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_stats = (function() { 
var portfolio_company_stats__delegate = function (p__20088){var vec__20090 = p__20088;var type_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20090,0,null);return clustermap.api.GET([cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/portfolio-company-stats?"),cljs.core.str(clustermap.api.map_json_params(type_ids))].join(''));
};
var portfolio_company_stats = function (var_args){
var p__20088 = null;if (arguments.length > 0) {
  p__20088 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_stats__delegate.call(this,p__20088);};
portfolio_company_stats.cljs$lang$maxFixedArity = 0;
portfolio_company_stats.cljs$lang$applyTo = (function (arglist__20091){
var p__20088 = cljs.core.seq(arglist__20091);
return portfolio_company_stats__delegate(p__20088);
});
portfolio_company_stats.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_stats__delegate;
return portfolio_company_stats;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_account_stats = (function() { 
var portfolio_company_account_stats__delegate = function (p__20092){var vec__20094 = p__20092;var type_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20094,0,null);return clustermap.api.GET([cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/portfolio-company-account-stats?"),cljs.core.str(clustermap.api.map_json_params(type_ids))].join(''));
};
var portfolio_company_account_stats = function (var_args){
var p__20092 = null;if (arguments.length > 0) {
  p__20092 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_account_stats__delegate.call(this,p__20092);};
portfolio_company_account_stats.cljs$lang$maxFixedArity = 0;
portfolio_company_account_stats.cljs$lang$applyTo = (function (arglist__20095){
var p__20092 = cljs.core.seq(arglist__20095);
return portfolio_company_account_stats__delegate(p__20092);
});
portfolio_company_account_stats.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_account_stats__delegate;
return portfolio_company_account_stats;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_sites = (function() { 
var portfolio_company_sites__delegate = function (p__20096){var vec__20098 = p__20096;var type_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20098,0,null);return clustermap.api.GET([cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/portfolio-company-sites?"),cljs.core.str(clustermap.api.map_json_params(type_ids))].join(''));
};
var portfolio_company_sites = function (var_args){
var p__20096 = null;if (arguments.length > 0) {
  p__20096 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_sites__delegate.call(this,p__20096);};
portfolio_company_sites.cljs$lang$maxFixedArity = 0;
portfolio_company_sites.cljs$lang$applyTo = (function (arglist__20099){
var p__20096 = cljs.core.seq(arglist__20099);
return portfolio_company_sites__delegate(p__20096);
});
portfolio_company_sites.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_sites__delegate;
return portfolio_company_sites;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_locations = (function() { 
var portfolio_company_locations__delegate = function (p__20100){var vec__20102 = p__20100;var type_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20102,0,null);return clustermap.api.GET([cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/portfolio-company-locations?"),cljs.core.str(clustermap.api.map_json_params(type_ids))].join(''));
};
var portfolio_company_locations = function (var_args){
var p__20100 = null;if (arguments.length > 0) {
  p__20100 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_locations__delegate.call(this,p__20100);};
portfolio_company_locations.cljs$lang$maxFixedArity = 0;
portfolio_company_locations.cljs$lang$applyTo = (function (arglist__20103){
var p__20100 = cljs.core.seq(arglist__20103);
return portfolio_company_locations__delegate(p__20100);
});
portfolio_company_locations.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_locations__delegate;
return portfolio_company_locations;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_site_stats = (function() { 
var portfolio_company_site_stats__delegate = function (p__20104){var vec__20106 = p__20104;var type_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20106,0,null);return clustermap.api.GET([cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/portfolio-company-site-stats?"),cljs.core.str(clustermap.api.map_json_params(type_ids))].join(''));
};
var portfolio_company_site_stats = function (var_args){
var p__20104 = null;if (arguments.length > 0) {
  p__20104 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_site_stats__delegate.call(this,p__20104);};
portfolio_company_site_stats.cljs$lang$maxFixedArity = 0;
portfolio_company_site_stats.cljs$lang$applyTo = (function (arglist__20107){
var p__20104 = cljs.core.seq(arglist__20107);
return portfolio_company_site_stats__delegate(p__20104);
});
portfolio_company_site_stats.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_site_stats__delegate;
return portfolio_company_site_stats;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_site_account_timelines = (function() { 
var portfolio_company_site_account_timelines__delegate = function (p__20108){var vec__20110 = p__20108;var type_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20110,0,null);return clustermap.api.GET([cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/portfolio-company-site-account-timelines?"),cljs.core.str(clustermap.api.map_json_params(type_ids))].join(''));
};
var portfolio_company_site_account_timelines = function (var_args){
var p__20108 = null;if (arguments.length > 0) {
  p__20108 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_site_account_timelines__delegate.call(this,p__20108);};
portfolio_company_site_account_timelines.cljs$lang$maxFixedArity = 0;
portfolio_company_site_account_timelines.cljs$lang$applyTo = (function (arglist__20111){
var p__20108 = cljs.core.seq(arglist__20111);
return portfolio_company_site_account_timelines__delegate(p__20108);
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
var investor_comapnies__delegate = function (p__20112){var vec__20114 = p__20112;var type_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20114,0,null);return clustermap.api.GET([cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/investor-companies?"),cljs.core.str(clustermap.api.map_json_params(type_ids))].join(''));
};
var investor_comapnies = function (var_args){
var p__20112 = null;if (arguments.length > 0) {
  p__20112 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return investor_comapnies__delegate.call(this,p__20112);};
investor_comapnies.cljs$lang$maxFixedArity = 0;
investor_comapnies.cljs$lang$applyTo = (function (arglist__20115){
var p__20112 = cljs.core.seq(arglist__20115);
return investor_comapnies__delegate(p__20112);
});
investor_comapnies.cljs$core$IFn$_invoke$arity$variadic = investor_comapnies__delegate;
return investor_comapnies;
})()
;
