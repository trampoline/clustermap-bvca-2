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
var GET__delegate = function (url,p__19842){var map__19844 = p__19842;var map__19844__$1 = ((cljs.core.seq_QMARK_(map__19844))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19844):map__19844);var raw = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19844__$1,cljs.core.constant$keyword$224);var comm = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);goog.net.XhrIo.send(url,(function (event){cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,(function (d){if(cljs.core.truth_(raw))
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
var p__19842 = null;if (arguments.length > 1) {
  p__19842 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return GET__delegate.call(this,url,p__19842);};
GET.cljs$lang$maxFixedArity = 1;
GET.cljs$lang$applyTo = (function (arglist__19845){
var url = cljs.core.first(arglist__19845);
var p__19842 = cljs.core.rest(arglist__19845);
return GET__delegate(url,p__19842);
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
clustermap.api.ordered_api_results = (function ordered_api_results(ocomm,handler){var c__5521__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_19978){var state_val_19979 = (state_19978[1]);if((state_val_19979 === 1))
{var state_19978__$1 = state_19978;var statearr_19980_20016 = state_19978__$1;(statearr_19980_20016[2] = null);
(statearr_19980_20016[1] = 2);
return cljs.core.constant$keyword$210;
} else
{if((state_val_19979 === 2))
{var state_19978__$1 = state_19978;if(true)
{var statearr_19981_20017 = state_19978__$1;(statearr_19981_20017[1] = 4);
} else
{var statearr_19982_20018 = state_19978__$1;(statearr_19982_20018[1] = 5);
}
return cljs.core.constant$keyword$210;
} else
{if((state_val_19979 === 3))
{var inst_19976 = (state_19978[2]);var state_19978__$1 = state_19978;return cljs.core.async.impl.ioc_helpers.return_chan(state_19978__$1,inst_19976);
} else
{if((state_val_19979 === 4))
{var state_19978__$1 = state_19978;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19978__$1,7,ocomm);
} else
{if((state_val_19979 === 5))
{var state_19978__$1 = state_19978;var statearr_19983_20019 = state_19978__$1;(statearr_19983_20019[2] = null);
(statearr_19983_20019[1] = 6);
return cljs.core.constant$keyword$210;
} else
{if((state_val_19979 === 6))
{var inst_19974 = (state_19978[2]);var state_19978__$1 = state_19978;var statearr_19984_20020 = state_19978__$1;(statearr_19984_20020[2] = inst_19974);
(statearr_19984_20020[1] = 3);
return cljs.core.constant$keyword$210;
} else
{if((state_val_19979 === 7))
{var inst_19936 = (state_19978[7]);var inst_19935 = (state_19978[2]);var inst_19936__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_19935,0,null);var inst_19937 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_19935,1,null);var inst_19938 = cljs.core.sequential_QMARK_(inst_19936__$1);var state_19978__$1 = (function (){var statearr_19985 = state_19978;(statearr_19985[8] = inst_19937);
(statearr_19985[7] = inst_19936__$1);
return statearr_19985;
})();if(inst_19938)
{var statearr_19986_20021 = state_19978__$1;(statearr_19986_20021[1] = 8);
} else
{var statearr_19987_20022 = state_19978__$1;(statearr_19987_20022[1] = 9);
}
return cljs.core.constant$keyword$210;
} else
{if((state_val_19979 === 8))
{var inst_19936 = (state_19978[7]);var inst_19940 = inst_19936;var inst_19941 = cljs.core.PersistentVector.EMPTY;var state_19978__$1 = (function (){var statearr_19988 = state_19978;(statearr_19988[9] = inst_19940);
(statearr_19988[10] = inst_19941);
return statearr_19988;
})();var statearr_19989_20023 = state_19978__$1;(statearr_19989_20023[2] = null);
(statearr_19989_20023[1] = 11);
return cljs.core.constant$keyword$210;
} else
{if((state_val_19979 === 9))
{var inst_19936 = (state_19978[7]);var state_19978__$1 = state_19978;if(cljs.core.truth_(inst_19936))
{var statearr_19990_20024 = state_19978__$1;(statearr_19990_20024[1] = 20);
} else
{var statearr_19991_20025 = state_19978__$1;(statearr_19991_20025[1] = 21);
}
return cljs.core.constant$keyword$210;
} else
{if((state_val_19979 === 10))
{var inst_19937 = (state_19978[8]);var inst_19969 = (state_19978[2]);var inst_19970 = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(handler,inst_19969,inst_19937);var state_19978__$1 = (function (){var statearr_19992 = state_19978;(statearr_19992[11] = inst_19970);
return statearr_19992;
})();var statearr_19993_20026 = state_19978__$1;(statearr_19993_20026[2] = null);
(statearr_19993_20026[1] = 2);
return cljs.core.constant$keyword$210;
} else
{if((state_val_19979 === 11))
{var inst_19940 = (state_19978[9]);var inst_19943 = cljs.core.empty_QMARK_(inst_19940);var state_19978__$1 = state_19978;if(inst_19943)
{var statearr_19994_20027 = state_19978__$1;(statearr_19994_20027[1] = 13);
} else
{var statearr_19995_20028 = state_19978__$1;(statearr_19995_20028[1] = 14);
}
return cljs.core.constant$keyword$210;
} else
{if((state_val_19979 === 12))
{var inst_19960 = (state_19978[2]);var state_19978__$1 = state_19978;var statearr_19996_20029 = state_19978__$1;(statearr_19996_20029[2] = inst_19960);
(statearr_19996_20029[1] = 10);
return cljs.core.constant$keyword$210;
} else
{if((state_val_19979 === 13))
{var inst_19941 = (state_19978[10]);var state_19978__$1 = state_19978;var statearr_19997_20030 = state_19978__$1;(statearr_19997_20030[2] = inst_19941);
(statearr_19997_20030[1] = 15);
return cljs.core.constant$keyword$210;
} else
{if((state_val_19979 === 14))
{var inst_19940 = (state_19978[9]);var inst_19946 = cljs.core.rest(inst_19940);var inst_19947 = cljs.core.first(inst_19940);var state_19978__$1 = (function (){var statearr_19998 = state_19978;(statearr_19998[12] = inst_19946);
return statearr_19998;
})();if(cljs.core.truth_(inst_19947))
{var statearr_19999_20031 = state_19978__$1;(statearr_19999_20031[1] = 16);
} else
{var statearr_20000_20032 = state_19978__$1;(statearr_20000_20032[1] = 17);
}
return cljs.core.constant$keyword$210;
} else
{if((state_val_19979 === 15))
{var inst_19958 = (state_19978[2]);var state_19978__$1 = state_19978;var statearr_20001_20033 = state_19978__$1;(statearr_20001_20033[2] = inst_19958);
(statearr_20001_20033[1] = 12);
return cljs.core.constant$keyword$210;
} else
{if((state_val_19979 === 16))
{var inst_19940 = (state_19978[9]);var inst_19949 = cljs.core.first(inst_19940);var state_19978__$1 = state_19978;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19978__$1,19,inst_19949);
} else
{if((state_val_19979 === 17))
{var state_19978__$1 = state_19978;var statearr_20002_20034 = state_19978__$1;(statearr_20002_20034[2] = null);
(statearr_20002_20034[1] = 18);
return cljs.core.constant$keyword$210;
} else
{if((state_val_19979 === 18))
{var inst_19946 = (state_19978[12]);var inst_19941 = (state_19978[10]);var inst_19954 = (state_19978[2]);var inst_19955 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(inst_19941,inst_19954);var inst_19940 = inst_19946;var inst_19941__$1 = inst_19955;var state_19978__$1 = (function (){var statearr_20003 = state_19978;(statearr_20003[9] = inst_19940);
(statearr_20003[10] = inst_19941__$1);
return statearr_20003;
})();var statearr_20004_20035 = state_19978__$1;(statearr_20004_20035[2] = null);
(statearr_20004_20035[1] = 11);
return cljs.core.constant$keyword$210;
} else
{if((state_val_19979 === 19))
{var inst_19951 = (state_19978[2]);var state_19978__$1 = state_19978;var statearr_20005_20036 = state_19978__$1;(statearr_20005_20036[2] = inst_19951);
(statearr_20005_20036[1] = 18);
return cljs.core.constant$keyword$210;
} else
{if((state_val_19979 === 20))
{var inst_19936 = (state_19978[7]);var state_19978__$1 = state_19978;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19978__$1,23,inst_19936);
} else
{if((state_val_19979 === 21))
{var state_19978__$1 = state_19978;var statearr_20006_20037 = state_19978__$1;(statearr_20006_20037[2] = null);
(statearr_20006_20037[1] = 22);
return cljs.core.constant$keyword$210;
} else
{if((state_val_19979 === 22))
{var inst_19967 = (state_19978[2]);var state_19978__$1 = state_19978;var statearr_20007_20038 = state_19978__$1;(statearr_20007_20038[2] = inst_19967);
(statearr_20007_20038[1] = 10);
return cljs.core.constant$keyword$210;
} else
{if((state_val_19979 === 23))
{var inst_19964 = (state_19978[2]);var state_19978__$1 = state_19978;var statearr_20008_20039 = state_19978__$1;(statearr_20008_20039[2] = inst_19964);
(statearr_20008_20039[1] = 22);
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
var state_machine__5507__auto____0 = (function (){var statearr_20012 = [null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_20012[0] = state_machine__5507__auto__);
(statearr_20012[1] = 1);
return statearr_20012;
});
var state_machine__5507__auto____1 = (function (state_19978){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_19978);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$210))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e20013){if((e20013 instanceof Object))
{var ex__5510__auto__ = e20013;var statearr_20014_20040 = state_19978;(statearr_20014_20040[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_19978);
return cljs.core.constant$keyword$210;
} else
{if(cljs.core.constant$keyword$199)
{throw e20013;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$210))
{{
var G__20041 = state_19978;
state_19978 = G__20041;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_19978){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_19978);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_20015 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_20015[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_20015;
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
var G__20044__delegate = function (req_args){var temp__4090__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(request_handler,req_args);if(cljs.core.truth_(temp__4090__auto__))
{var r = temp__4090__auto__;var rseq = ((cljs.core.sequential_QMARK_(r))?r:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [r], null));var vec__20043 = rseq;var rcomm = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20043,0,null);var result_handler_args = cljs.core.nthnext(vec__20043,1);return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(ocomm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rcomm,result_handler_args], null));
} else
{return null;
}
};
var G__20044 = function (var_args){
var req_args = null;if (arguments.length > 0) {
  req_args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__20044__delegate.call(this,req_args);};
G__20044.cljs$lang$maxFixedArity = 0;
G__20044.cljs$lang$applyTo = (function (arglist__20045){
var req_args = cljs.core.seq(arglist__20045);
return G__20044__delegate(req_args);
});
G__20044.cljs$core$IFn$_invoke$arity$variadic = G__20044__delegate;
return G__20044;
})()
;
});
/**
* @param {...*} var_args
*/
clustermap.api.log_api = (function() { 
var log_api__delegate = function (f,args){var ch = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,args);var c__5521__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_20063){var state_val_20064 = (state_20063[1]);if((state_val_20064 === 2))
{var inst_20060 = (state_20063[2]);var inst_20061 = console.log(inst_20060);var state_20063__$1 = state_20063;return cljs.core.async.impl.ioc_helpers.return_chan(state_20063__$1,inst_20061);
} else
{if((state_val_20064 === 1))
{var state_20063__$1 = state_20063;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20063__$1,2,ch);
} else
{return null;
}
}
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_20068 = [null,null,null,null,null,null,null];(statearr_20068[0] = state_machine__5507__auto__);
(statearr_20068[1] = 1);
return statearr_20068;
});
var state_machine__5507__auto____1 = (function (state_20063){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_20063);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$210))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e20069){if((e20069 instanceof Object))
{var ex__5510__auto__ = e20069;var statearr_20070_20072 = state_20063;(statearr_20070_20072[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_20063);
return cljs.core.constant$keyword$210;
} else
{if(cljs.core.constant$keyword$199)
{throw e20069;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$210))
{{
var G__20073 = state_20063;
state_20063 = G__20073;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_20063){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_20063);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_20071 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_20071[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_20071;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5523__auto__);
}));
return c__5521__auto__;
};
var log_api = function (f,var_args){
var args = null;if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return log_api__delegate.call(this,f,args);};
log_api.cljs$lang$maxFixedArity = 1;
log_api.cljs$lang$applyTo = (function (arglist__20074){
var f = cljs.core.first(arglist__20074);
var args = cljs.core.rest(arglist__20074);
return log_api__delegate(f,args);
});
log_api.cljs$core$IFn$_invoke$arity$variadic = log_api__delegate;
return log_api;
})()
;
clustermap.api.map_json_params = (function map_json_params(m){return clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__20077){var vec__20078 = p__20077;var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20078,0,null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20078,1,null);return [cljs.core.str(cljs.core.name(k)),cljs.core.str("="),cljs.core.str(JSON.stringify(cljs.core.clj__GT_js(v)))].join('');
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
boundarylines.cljs$lang$applyTo = (function (arglist__20079){
var id = cljs.core.first(arglist__20079);
arglist__20079 = cljs.core.next(arglist__20079);
var tolerance = cljs.core.first(arglist__20079);
var opts = cljs.core.rest(arglist__20079);
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
boundaryline_collection_index.cljs$lang$applyTo = (function (arglist__20080){
var id = cljs.core.first(arglist__20080);
var opts = cljs.core.rest(arglist__20080);
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
var constituencies__delegate = function (p__20081){var vec__20083 = p__20081;var type_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20083,0,null);return clustermap.api.GET.cljs$core$IFn$_invoke$arity$variadic("/api/",cljs.core.array_seq([clustermap.api.api_prefix,"/constituencies?",clustermap.api.map_json_params(type_ids)], 0));
};
var constituencies = function (var_args){
var p__20081 = null;if (arguments.length > 0) {
  p__20081 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return constituencies__delegate.call(this,p__20081);};
constituencies.cljs$lang$maxFixedArity = 0;
constituencies.cljs$lang$applyTo = (function (arglist__20084){
var p__20081 = cljs.core.seq(arglist__20084);
return constituencies__delegate(p__20081);
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
var portfolio_companies__delegate = function (p__20085){var vec__20087 = p__20085;var type_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20087,0,null);return clustermap.api.GET([cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/portfolio-companies?sort={\"!latest_turnover\":\"desc\"}&"),cljs.core.str(clustermap.api.map_json_params(type_ids))].join(''));
};
var portfolio_companies = function (var_args){
var p__20085 = null;if (arguments.length > 0) {
  p__20085 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_companies__delegate.call(this,p__20085);};
portfolio_companies.cljs$lang$maxFixedArity = 0;
portfolio_companies.cljs$lang$applyTo = (function (arglist__20088){
var p__20085 = cljs.core.seq(arglist__20088);
return portfolio_companies__delegate(p__20085);
});
portfolio_companies.cljs$core$IFn$_invoke$arity$variadic = portfolio_companies__delegate;
return portfolio_companies;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_stats = (function() { 
var portfolio_company_stats__delegate = function (p__20089){var vec__20091 = p__20089;var type_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20091,0,null);return clustermap.api.GET([cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/portfolio-company-stats?"),cljs.core.str(clustermap.api.map_json_params(type_ids))].join(''));
};
var portfolio_company_stats = function (var_args){
var p__20089 = null;if (arguments.length > 0) {
  p__20089 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_stats__delegate.call(this,p__20089);};
portfolio_company_stats.cljs$lang$maxFixedArity = 0;
portfolio_company_stats.cljs$lang$applyTo = (function (arglist__20092){
var p__20089 = cljs.core.seq(arglist__20092);
return portfolio_company_stats__delegate(p__20089);
});
portfolio_company_stats.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_stats__delegate;
return portfolio_company_stats;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_account_stats = (function() { 
var portfolio_company_account_stats__delegate = function (p__20093){var vec__20095 = p__20093;var type_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20095,0,null);return clustermap.api.GET([cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/portfolio-company-account-stats?"),cljs.core.str(clustermap.api.map_json_params(type_ids))].join(''));
};
var portfolio_company_account_stats = function (var_args){
var p__20093 = null;if (arguments.length > 0) {
  p__20093 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_account_stats__delegate.call(this,p__20093);};
portfolio_company_account_stats.cljs$lang$maxFixedArity = 0;
portfolio_company_account_stats.cljs$lang$applyTo = (function (arglist__20096){
var p__20093 = cljs.core.seq(arglist__20096);
return portfolio_company_account_stats__delegate(p__20093);
});
portfolio_company_account_stats.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_account_stats__delegate;
return portfolio_company_account_stats;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_sites = (function() { 
var portfolio_company_sites__delegate = function (p__20097){var vec__20099 = p__20097;var type_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20099,0,null);return clustermap.api.GET([cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/portfolio-company-sites?"),cljs.core.str(clustermap.api.map_json_params(type_ids))].join(''));
};
var portfolio_company_sites = function (var_args){
var p__20097 = null;if (arguments.length > 0) {
  p__20097 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_sites__delegate.call(this,p__20097);};
portfolio_company_sites.cljs$lang$maxFixedArity = 0;
portfolio_company_sites.cljs$lang$applyTo = (function (arglist__20100){
var p__20097 = cljs.core.seq(arglist__20100);
return portfolio_company_sites__delegate(p__20097);
});
portfolio_company_sites.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_sites__delegate;
return portfolio_company_sites;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_locations = (function() { 
var portfolio_company_locations__delegate = function (p__20101){var vec__20103 = p__20101;var type_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20103,0,null);return clustermap.api.GET([cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/portfolio-company-locations?"),cljs.core.str(clustermap.api.map_json_params(type_ids))].join(''));
};
var portfolio_company_locations = function (var_args){
var p__20101 = null;if (arguments.length > 0) {
  p__20101 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_locations__delegate.call(this,p__20101);};
portfolio_company_locations.cljs$lang$maxFixedArity = 0;
portfolio_company_locations.cljs$lang$applyTo = (function (arglist__20104){
var p__20101 = cljs.core.seq(arglist__20104);
return portfolio_company_locations__delegate(p__20101);
});
portfolio_company_locations.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_locations__delegate;
return portfolio_company_locations;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_site_stats = (function() { 
var portfolio_company_site_stats__delegate = function (p__20105){var vec__20107 = p__20105;var type_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20107,0,null);return clustermap.api.GET([cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/portfolio-company-site-stats?"),cljs.core.str(clustermap.api.map_json_params(type_ids))].join(''));
};
var portfolio_company_site_stats = function (var_args){
var p__20105 = null;if (arguments.length > 0) {
  p__20105 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_site_stats__delegate.call(this,p__20105);};
portfolio_company_site_stats.cljs$lang$maxFixedArity = 0;
portfolio_company_site_stats.cljs$lang$applyTo = (function (arglist__20108){
var p__20105 = cljs.core.seq(arglist__20108);
return portfolio_company_site_stats__delegate(p__20105);
});
portfolio_company_site_stats.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_site_stats__delegate;
return portfolio_company_site_stats;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_site_account_timelines = (function() { 
var portfolio_company_site_account_timelines__delegate = function (p__20109){var vec__20111 = p__20109;var type_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20111,0,null);return clustermap.api.GET([cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/portfolio-company-site-account-timelines?"),cljs.core.str(clustermap.api.map_json_params(type_ids))].join(''));
};
var portfolio_company_site_account_timelines = function (var_args){
var p__20109 = null;if (arguments.length > 0) {
  p__20109 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_site_account_timelines__delegate.call(this,p__20109);};
portfolio_company_site_account_timelines.cljs$lang$maxFixedArity = 0;
portfolio_company_site_account_timelines.cljs$lang$applyTo = (function (arglist__20112){
var p__20109 = cljs.core.seq(arglist__20112);
return portfolio_company_site_account_timelines__delegate(p__20109);
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
var investor_comapnies__delegate = function (p__20113){var vec__20115 = p__20113;var type_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20115,0,null);return clustermap.api.GET([cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/investor-companies?"),cljs.core.str(clustermap.api.map_json_params(type_ids))].join(''));
};
var investor_comapnies = function (var_args){
var p__20113 = null;if (arguments.length > 0) {
  p__20113 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return investor_comapnies__delegate.call(this,p__20113);};
investor_comapnies.cljs$lang$maxFixedArity = 0;
investor_comapnies.cljs$lang$applyTo = (function (arglist__20116){
var p__20113 = cljs.core.seq(arglist__20116);
return investor_comapnies__delegate(p__20113);
});
investor_comapnies.cljs$core$IFn$_invoke$arity$variadic = investor_comapnies__delegate;
return investor_comapnies;
})()
;
