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
var GET__delegate = function (url,p__19895){var map__19897 = p__19895;var map__19897__$1 = ((cljs.core.seq_QMARK_(map__19897))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19897):map__19897);var raw = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19897__$1,cljs.core.constant$keyword$235);var comm = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);goog.net.XhrIo.send(url,(function (event){cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,(function (d){if(cljs.core.truth_(raw))
{return d;
} else
{return cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(d,cljs.core.array_seq([cljs.core.constant$keyword$216,true], 0));
}
}).call(null,((JSON.parse.cljs$core$IFn$_invoke$arity$1 ? JSON.parse.cljs$core$IFn$_invoke$arity$1(event.target.getResponseText()) : JSON.parse.call(null,event.target.getResponseText()))["data"])));
return cljs.core.async.close_BANG_(comm);
}));
return comm;
};
var GET = function (url,var_args){
var p__19895 = null;if (arguments.length > 1) {
  p__19895 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return GET__delegate.call(this,url,p__19895);};
GET.cljs$lang$maxFixedArity = 1;
GET.cljs$lang$applyTo = (function (arglist__19898){
var url = cljs.core.first(arglist__19898);
var p__19895 = cljs.core.rest(arglist__19898);
return GET__delegate(url,p__19895);
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
clustermap.api.ordered_api_results = (function ordered_api_results(ocomm,handler){var c__5521__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_20031){var state_val_20032 = (state_20031[1]);if((state_val_20032 === 1))
{var state_20031__$1 = state_20031;var statearr_20033_20069 = state_20031__$1;(statearr_20033_20069[2] = null);
(statearr_20033_20069[1] = 2);
return cljs.core.constant$keyword$221;
} else
{if((state_val_20032 === 2))
{var state_20031__$1 = state_20031;if(true)
{var statearr_20034_20070 = state_20031__$1;(statearr_20034_20070[1] = 4);
} else
{var statearr_20035_20071 = state_20031__$1;(statearr_20035_20071[1] = 5);
}
return cljs.core.constant$keyword$221;
} else
{if((state_val_20032 === 3))
{var inst_20029 = (state_20031[2]);var state_20031__$1 = state_20031;return cljs.core.async.impl.ioc_helpers.return_chan(state_20031__$1,inst_20029);
} else
{if((state_val_20032 === 4))
{var state_20031__$1 = state_20031;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20031__$1,7,ocomm);
} else
{if((state_val_20032 === 5))
{var state_20031__$1 = state_20031;var statearr_20036_20072 = state_20031__$1;(statearr_20036_20072[2] = null);
(statearr_20036_20072[1] = 6);
return cljs.core.constant$keyword$221;
} else
{if((state_val_20032 === 6))
{var inst_20027 = (state_20031[2]);var state_20031__$1 = state_20031;var statearr_20037_20073 = state_20031__$1;(statearr_20037_20073[2] = inst_20027);
(statearr_20037_20073[1] = 3);
return cljs.core.constant$keyword$221;
} else
{if((state_val_20032 === 7))
{var inst_19989 = (state_20031[7]);var inst_19988 = (state_20031[2]);var inst_19989__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_19988,0,null);var inst_19990 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_19988,1,null);var inst_19991 = cljs.core.sequential_QMARK_(inst_19989__$1);var state_20031__$1 = (function (){var statearr_20038 = state_20031;(statearr_20038[7] = inst_19989__$1);
(statearr_20038[8] = inst_19990);
return statearr_20038;
})();if(inst_19991)
{var statearr_20039_20074 = state_20031__$1;(statearr_20039_20074[1] = 8);
} else
{var statearr_20040_20075 = state_20031__$1;(statearr_20040_20075[1] = 9);
}
return cljs.core.constant$keyword$221;
} else
{if((state_val_20032 === 8))
{var inst_19989 = (state_20031[7]);var inst_19993 = inst_19989;var inst_19994 = cljs.core.PersistentVector.EMPTY;var state_20031__$1 = (function (){var statearr_20041 = state_20031;(statearr_20041[9] = inst_19994);
(statearr_20041[10] = inst_19993);
return statearr_20041;
})();var statearr_20042_20076 = state_20031__$1;(statearr_20042_20076[2] = null);
(statearr_20042_20076[1] = 11);
return cljs.core.constant$keyword$221;
} else
{if((state_val_20032 === 9))
{var inst_19989 = (state_20031[7]);var state_20031__$1 = state_20031;if(cljs.core.truth_(inst_19989))
{var statearr_20043_20077 = state_20031__$1;(statearr_20043_20077[1] = 20);
} else
{var statearr_20044_20078 = state_20031__$1;(statearr_20044_20078[1] = 21);
}
return cljs.core.constant$keyword$221;
} else
{if((state_val_20032 === 10))
{var inst_19990 = (state_20031[8]);var inst_20022 = (state_20031[2]);var inst_20023 = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(handler,inst_20022,inst_19990);var state_20031__$1 = (function (){var statearr_20045 = state_20031;(statearr_20045[11] = inst_20023);
return statearr_20045;
})();var statearr_20046_20079 = state_20031__$1;(statearr_20046_20079[2] = null);
(statearr_20046_20079[1] = 2);
return cljs.core.constant$keyword$221;
} else
{if((state_val_20032 === 11))
{var inst_19993 = (state_20031[10]);var inst_19996 = cljs.core.empty_QMARK_(inst_19993);var state_20031__$1 = state_20031;if(inst_19996)
{var statearr_20047_20080 = state_20031__$1;(statearr_20047_20080[1] = 13);
} else
{var statearr_20048_20081 = state_20031__$1;(statearr_20048_20081[1] = 14);
}
return cljs.core.constant$keyword$221;
} else
{if((state_val_20032 === 12))
{var inst_20013 = (state_20031[2]);var state_20031__$1 = state_20031;var statearr_20049_20082 = state_20031__$1;(statearr_20049_20082[2] = inst_20013);
(statearr_20049_20082[1] = 10);
return cljs.core.constant$keyword$221;
} else
{if((state_val_20032 === 13))
{var inst_19994 = (state_20031[9]);var state_20031__$1 = state_20031;var statearr_20050_20083 = state_20031__$1;(statearr_20050_20083[2] = inst_19994);
(statearr_20050_20083[1] = 15);
return cljs.core.constant$keyword$221;
} else
{if((state_val_20032 === 14))
{var inst_19993 = (state_20031[10]);var inst_19999 = cljs.core.rest(inst_19993);var inst_20000 = cljs.core.first(inst_19993);var state_20031__$1 = (function (){var statearr_20051 = state_20031;(statearr_20051[12] = inst_19999);
return statearr_20051;
})();if(cljs.core.truth_(inst_20000))
{var statearr_20052_20084 = state_20031__$1;(statearr_20052_20084[1] = 16);
} else
{var statearr_20053_20085 = state_20031__$1;(statearr_20053_20085[1] = 17);
}
return cljs.core.constant$keyword$221;
} else
{if((state_val_20032 === 15))
{var inst_20011 = (state_20031[2]);var state_20031__$1 = state_20031;var statearr_20054_20086 = state_20031__$1;(statearr_20054_20086[2] = inst_20011);
(statearr_20054_20086[1] = 12);
return cljs.core.constant$keyword$221;
} else
{if((state_val_20032 === 16))
{var inst_19993 = (state_20031[10]);var inst_20002 = cljs.core.first(inst_19993);var state_20031__$1 = state_20031;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20031__$1,19,inst_20002);
} else
{if((state_val_20032 === 17))
{var state_20031__$1 = state_20031;var statearr_20055_20087 = state_20031__$1;(statearr_20055_20087[2] = null);
(statearr_20055_20087[1] = 18);
return cljs.core.constant$keyword$221;
} else
{if((state_val_20032 === 18))
{var inst_19994 = (state_20031[9]);var inst_19999 = (state_20031[12]);var inst_20007 = (state_20031[2]);var inst_20008 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(inst_19994,inst_20007);var inst_19993 = inst_19999;var inst_19994__$1 = inst_20008;var state_20031__$1 = (function (){var statearr_20056 = state_20031;(statearr_20056[9] = inst_19994__$1);
(statearr_20056[10] = inst_19993);
return statearr_20056;
})();var statearr_20057_20088 = state_20031__$1;(statearr_20057_20088[2] = null);
(statearr_20057_20088[1] = 11);
return cljs.core.constant$keyword$221;
} else
{if((state_val_20032 === 19))
{var inst_20004 = (state_20031[2]);var state_20031__$1 = state_20031;var statearr_20058_20089 = state_20031__$1;(statearr_20058_20089[2] = inst_20004);
(statearr_20058_20089[1] = 18);
return cljs.core.constant$keyword$221;
} else
{if((state_val_20032 === 20))
{var inst_19989 = (state_20031[7]);var state_20031__$1 = state_20031;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20031__$1,23,inst_19989);
} else
{if((state_val_20032 === 21))
{var state_20031__$1 = state_20031;var statearr_20059_20090 = state_20031__$1;(statearr_20059_20090[2] = null);
(statearr_20059_20090[1] = 22);
return cljs.core.constant$keyword$221;
} else
{if((state_val_20032 === 22))
{var inst_20020 = (state_20031[2]);var state_20031__$1 = state_20031;var statearr_20060_20091 = state_20031__$1;(statearr_20060_20091[2] = inst_20020);
(statearr_20060_20091[1] = 10);
return cljs.core.constant$keyword$221;
} else
{if((state_val_20032 === 23))
{var inst_20017 = (state_20031[2]);var state_20031__$1 = state_20031;var statearr_20061_20092 = state_20031__$1;(statearr_20061_20092[2] = inst_20017);
(statearr_20061_20092[1] = 22);
return cljs.core.constant$keyword$221;
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
var state_machine__5507__auto____0 = (function (){var statearr_20065 = [null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_20065[0] = state_machine__5507__auto__);
(statearr_20065[1] = 1);
return statearr_20065;
});
var state_machine__5507__auto____1 = (function (state_20031){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_20031);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$221))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e20066){if((e20066 instanceof Object))
{var ex__5510__auto__ = e20066;var statearr_20067_20093 = state_20031;(statearr_20067_20093[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_20031);
return cljs.core.constant$keyword$221;
} else
{if(cljs.core.constant$keyword$210)
{throw e20066;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$221))
{{
var G__20094 = state_20031;
state_20031 = G__20094;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_20031){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_20031);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_20068 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_20068[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_20068;
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
var G__20097__delegate = function (req_args){var temp__4090__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(request_handler,req_args);if(cljs.core.truth_(temp__4090__auto__))
{var r = temp__4090__auto__;var rseq = ((cljs.core.sequential_QMARK_(r))?r:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [r], null));var vec__20096 = rseq;var rcomm = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20096,0,null);var result_handler_args = cljs.core.nthnext(vec__20096,1);return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(ocomm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rcomm,result_handler_args], null));
} else
{return null;
}
};
var G__20097 = function (var_args){
var req_args = null;if (arguments.length > 0) {
  req_args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__20097__delegate.call(this,req_args);};
G__20097.cljs$lang$maxFixedArity = 0;
G__20097.cljs$lang$applyTo = (function (arglist__20098){
var req_args = cljs.core.seq(arglist__20098);
return G__20097__delegate(req_args);
});
G__20097.cljs$core$IFn$_invoke$arity$variadic = G__20097__delegate;
return G__20097;
})()
;
});
/**
* @param {...*} var_args
*/
clustermap.api.log_api = (function() { 
var log_api__delegate = function (f,args){var ch = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,args);var c__5521__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_20116){var state_val_20117 = (state_20116[1]);if((state_val_20117 === 2))
{var inst_20113 = (state_20116[2]);var inst_20114 = console.log(inst_20113);var state_20116__$1 = state_20116;return cljs.core.async.impl.ioc_helpers.return_chan(state_20116__$1,inst_20114);
} else
{if((state_val_20117 === 1))
{var state_20116__$1 = state_20116;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20116__$1,2,ch);
} else
{return null;
}
}
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_20121 = [null,null,null,null,null,null,null];(statearr_20121[0] = state_machine__5507__auto__);
(statearr_20121[1] = 1);
return statearr_20121;
});
var state_machine__5507__auto____1 = (function (state_20116){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_20116);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$221))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e20122){if((e20122 instanceof Object))
{var ex__5510__auto__ = e20122;var statearr_20123_20125 = state_20116;(statearr_20123_20125[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_20116);
return cljs.core.constant$keyword$221;
} else
{if(cljs.core.constant$keyword$210)
{throw e20122;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$221))
{{
var G__20126 = state_20116;
state_20116 = G__20126;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_20116){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_20116);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_20124 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_20124[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_20124;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5523__auto__);
}));
return c__5521__auto__;
};
var log_api = function (f,var_args){
var args = null;if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return log_api__delegate.call(this,f,args);};
log_api.cljs$lang$maxFixedArity = 1;
log_api.cljs$lang$applyTo = (function (arglist__20127){
var f = cljs.core.first(arglist__20127);
var args = cljs.core.rest(arglist__20127);
return log_api__delegate(f,args);
});
log_api.cljs$core$IFn$_invoke$arity$variadic = log_api__delegate;
return log_api;
})()
;
clustermap.api.map_json_params = (function map_json_params(m){return clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__20130){var vec__20131 = p__20130;var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20131,0,null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20131,1,null);return [cljs.core.str(cljs.core.name(k)),cljs.core.str("="),cljs.core.str(JSON.stringify(cljs.core.clj__GT_js(v)))].join('');
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
boundarylines.cljs$lang$applyTo = (function (arglist__20132){
var id = cljs.core.first(arglist__20132);
arglist__20132 = cljs.core.next(arglist__20132);
var tolerance = cljs.core.first(arglist__20132);
var opts = cljs.core.rest(arglist__20132);
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
boundaryline_collection_index.cljs$lang$applyTo = (function (arglist__20133){
var id = cljs.core.first(arglist__20133);
var opts = cljs.core.rest(arglist__20133);
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
var constituencies__delegate = function (p__20134){var vec__20136 = p__20134;var type_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20136,0,null);return clustermap.api.GET.cljs$core$IFn$_invoke$arity$variadic("/api/",cljs.core.array_seq([clustermap.api.api_prefix,"/constituencies?",clustermap.api.map_json_params(type_ids)], 0));
};
var constituencies = function (var_args){
var p__20134 = null;if (arguments.length > 0) {
  p__20134 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return constituencies__delegate.call(this,p__20134);};
constituencies.cljs$lang$maxFixedArity = 0;
constituencies.cljs$lang$applyTo = (function (arglist__20137){
var p__20134 = cljs.core.seq(arglist__20137);
return constituencies__delegate(p__20134);
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
var portfolio_companies__delegate = function (p__20138){var vec__20140 = p__20138;var type_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20140,0,null);return clustermap.api.GET([cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/portfolio-companies?sort={\"!latest_turnover\":\"desc\"}&"),cljs.core.str(clustermap.api.map_json_params(type_ids))].join(''));
};
var portfolio_companies = function (var_args){
var p__20138 = null;if (arguments.length > 0) {
  p__20138 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_companies__delegate.call(this,p__20138);};
portfolio_companies.cljs$lang$maxFixedArity = 0;
portfolio_companies.cljs$lang$applyTo = (function (arglist__20141){
var p__20138 = cljs.core.seq(arglist__20141);
return portfolio_companies__delegate(p__20138);
});
portfolio_companies.cljs$core$IFn$_invoke$arity$variadic = portfolio_companies__delegate;
return portfolio_companies;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_stats = (function() { 
var portfolio_company_stats__delegate = function (p__20142){var vec__20144 = p__20142;var type_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20144,0,null);return clustermap.api.GET([cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/portfolio-company-stats?"),cljs.core.str(clustermap.api.map_json_params(type_ids))].join(''));
};
var portfolio_company_stats = function (var_args){
var p__20142 = null;if (arguments.length > 0) {
  p__20142 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_stats__delegate.call(this,p__20142);};
portfolio_company_stats.cljs$lang$maxFixedArity = 0;
portfolio_company_stats.cljs$lang$applyTo = (function (arglist__20145){
var p__20142 = cljs.core.seq(arglist__20145);
return portfolio_company_stats__delegate(p__20142);
});
portfolio_company_stats.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_stats__delegate;
return portfolio_company_stats;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_account_stats = (function() { 
var portfolio_company_account_stats__delegate = function (p__20146){var vec__20148 = p__20146;var type_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20148,0,null);return clustermap.api.GET([cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/portfolio-company-account-stats?"),cljs.core.str(clustermap.api.map_json_params(type_ids))].join(''));
};
var portfolio_company_account_stats = function (var_args){
var p__20146 = null;if (arguments.length > 0) {
  p__20146 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_account_stats__delegate.call(this,p__20146);};
portfolio_company_account_stats.cljs$lang$maxFixedArity = 0;
portfolio_company_account_stats.cljs$lang$applyTo = (function (arglist__20149){
var p__20146 = cljs.core.seq(arglist__20149);
return portfolio_company_account_stats__delegate(p__20146);
});
portfolio_company_account_stats.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_account_stats__delegate;
return portfolio_company_account_stats;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_sites = (function() { 
var portfolio_company_sites__delegate = function (p__20150){var vec__20152 = p__20150;var type_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20152,0,null);return clustermap.api.GET([cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/portfolio-company-sites?"),cljs.core.str(clustermap.api.map_json_params(type_ids))].join(''));
};
var portfolio_company_sites = function (var_args){
var p__20150 = null;if (arguments.length > 0) {
  p__20150 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_sites__delegate.call(this,p__20150);};
portfolio_company_sites.cljs$lang$maxFixedArity = 0;
portfolio_company_sites.cljs$lang$applyTo = (function (arglist__20153){
var p__20150 = cljs.core.seq(arglist__20153);
return portfolio_company_sites__delegate(p__20150);
});
portfolio_company_sites.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_sites__delegate;
return portfolio_company_sites;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_locations = (function() { 
var portfolio_company_locations__delegate = function (p__20154){var vec__20156 = p__20154;var type_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20156,0,null);return clustermap.api.GET([cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/portfolio-company-locations?"),cljs.core.str(clustermap.api.map_json_params(type_ids))].join(''));
};
var portfolio_company_locations = function (var_args){
var p__20154 = null;if (arguments.length > 0) {
  p__20154 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_locations__delegate.call(this,p__20154);};
portfolio_company_locations.cljs$lang$maxFixedArity = 0;
portfolio_company_locations.cljs$lang$applyTo = (function (arglist__20157){
var p__20154 = cljs.core.seq(arglist__20157);
return portfolio_company_locations__delegate(p__20154);
});
portfolio_company_locations.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_locations__delegate;
return portfolio_company_locations;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_site_stats = (function() { 
var portfolio_company_site_stats__delegate = function (p__20158){var vec__20160 = p__20158;var type_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20160,0,null);return clustermap.api.GET([cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/portfolio-company-site-stats?"),cljs.core.str(clustermap.api.map_json_params(type_ids))].join(''));
};
var portfolio_company_site_stats = function (var_args){
var p__20158 = null;if (arguments.length > 0) {
  p__20158 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_site_stats__delegate.call(this,p__20158);};
portfolio_company_site_stats.cljs$lang$maxFixedArity = 0;
portfolio_company_site_stats.cljs$lang$applyTo = (function (arglist__20161){
var p__20158 = cljs.core.seq(arglist__20161);
return portfolio_company_site_stats__delegate(p__20158);
});
portfolio_company_site_stats.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_site_stats__delegate;
return portfolio_company_site_stats;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_site_account_timelines = (function() { 
var portfolio_company_site_account_timelines__delegate = function (p__20162){var vec__20164 = p__20162;var type_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20164,0,null);return clustermap.api.GET([cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/portfolio-company-site-account-timelines?"),cljs.core.str(clustermap.api.map_json_params(type_ids))].join(''));
};
var portfolio_company_site_account_timelines = function (var_args){
var p__20162 = null;if (arguments.length > 0) {
  p__20162 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_site_account_timelines__delegate.call(this,p__20162);};
portfolio_company_site_account_timelines.cljs$lang$maxFixedArity = 0;
portfolio_company_site_account_timelines.cljs$lang$applyTo = (function (arglist__20165){
var p__20162 = cljs.core.seq(arglist__20165);
return portfolio_company_site_account_timelines__delegate(p__20162);
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
var investor_comapnies__delegate = function (p__20166){var vec__20168 = p__20166;var type_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20168,0,null);return clustermap.api.GET([cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/investor-companies?"),cljs.core.str(clustermap.api.map_json_params(type_ids))].join(''));
};
var investor_comapnies = function (var_args){
var p__20166 = null;if (arguments.length > 0) {
  p__20166 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return investor_comapnies__delegate.call(this,p__20166);};
investor_comapnies.cljs$lang$maxFixedArity = 0;
investor_comapnies.cljs$lang$applyTo = (function (arglist__20169){
var p__20166 = cljs.core.seq(arglist__20169);
return investor_comapnies__delegate(p__20166);
});
investor_comapnies.cljs$core$IFn$_invoke$arity$variadic = investor_comapnies__delegate;
return investor_comapnies;
})()
;
