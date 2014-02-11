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
var GET__delegate = function (url,p__19881){var map__19883 = p__19881;var map__19883__$1 = ((cljs.core.seq_QMARK_(map__19883))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19883):map__19883);var raw = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19883__$1,cljs.core.constant$keyword$230);var comm = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);goog.net.XhrIo.send(url,(function (event){cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,(function (d){if(cljs.core.truth_(raw))
{return d;
} else
{return cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(d,cljs.core.array_seq([cljs.core.constant$keyword$211,true], 0));
}
}).call(null,((JSON.parse.cljs$core$IFn$_invoke$arity$1 ? JSON.parse.cljs$core$IFn$_invoke$arity$1(event.target.getResponseText()) : JSON.parse.call(null,event.target.getResponseText()))["data"])));
return cljs.core.async.close_BANG_(comm);
}));
return comm;
};
var GET = function (url,var_args){
var p__19881 = null;if (arguments.length > 1) {
  p__19881 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return GET__delegate.call(this,url,p__19881);};
GET.cljs$lang$maxFixedArity = 1;
GET.cljs$lang$applyTo = (function (arglist__19884){
var url = cljs.core.first(arglist__19884);
var p__19881 = cljs.core.rest(arglist__19884);
return GET__delegate(url,p__19881);
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
clustermap.api.ordered_api_results = (function ordered_api_results(ocomm,handler){var c__5521__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_20017){var state_val_20018 = (state_20017[1]);if((state_val_20018 === 1))
{var state_20017__$1 = state_20017;var statearr_20019_20055 = state_20017__$1;(statearr_20019_20055[2] = null);
(statearr_20019_20055[1] = 2);
return cljs.core.constant$keyword$216;
} else
{if((state_val_20018 === 2))
{var state_20017__$1 = state_20017;if(true)
{var statearr_20020_20056 = state_20017__$1;(statearr_20020_20056[1] = 4);
} else
{var statearr_20021_20057 = state_20017__$1;(statearr_20021_20057[1] = 5);
}
return cljs.core.constant$keyword$216;
} else
{if((state_val_20018 === 3))
{var inst_20015 = (state_20017[2]);var state_20017__$1 = state_20017;return cljs.core.async.impl.ioc_helpers.return_chan(state_20017__$1,inst_20015);
} else
{if((state_val_20018 === 4))
{var state_20017__$1 = state_20017;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20017__$1,7,ocomm);
} else
{if((state_val_20018 === 5))
{var state_20017__$1 = state_20017;var statearr_20022_20058 = state_20017__$1;(statearr_20022_20058[2] = null);
(statearr_20022_20058[1] = 6);
return cljs.core.constant$keyword$216;
} else
{if((state_val_20018 === 6))
{var inst_20013 = (state_20017[2]);var state_20017__$1 = state_20017;var statearr_20023_20059 = state_20017__$1;(statearr_20023_20059[2] = inst_20013);
(statearr_20023_20059[1] = 3);
return cljs.core.constant$keyword$216;
} else
{if((state_val_20018 === 7))
{var inst_19975 = (state_20017[7]);var inst_19974 = (state_20017[2]);var inst_19975__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_19974,0,null);var inst_19976 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_19974,1,null);var inst_19977 = cljs.core.sequential_QMARK_(inst_19975__$1);var state_20017__$1 = (function (){var statearr_20024 = state_20017;(statearr_20024[7] = inst_19975__$1);
(statearr_20024[8] = inst_19976);
return statearr_20024;
})();if(inst_19977)
{var statearr_20025_20060 = state_20017__$1;(statearr_20025_20060[1] = 8);
} else
{var statearr_20026_20061 = state_20017__$1;(statearr_20026_20061[1] = 9);
}
return cljs.core.constant$keyword$216;
} else
{if((state_val_20018 === 8))
{var inst_19975 = (state_20017[7]);var inst_19979 = inst_19975;var inst_19980 = cljs.core.PersistentVector.EMPTY;var state_20017__$1 = (function (){var statearr_20027 = state_20017;(statearr_20027[9] = inst_19980);
(statearr_20027[10] = inst_19979);
return statearr_20027;
})();var statearr_20028_20062 = state_20017__$1;(statearr_20028_20062[2] = null);
(statearr_20028_20062[1] = 11);
return cljs.core.constant$keyword$216;
} else
{if((state_val_20018 === 9))
{var inst_19975 = (state_20017[7]);var state_20017__$1 = state_20017;if(cljs.core.truth_(inst_19975))
{var statearr_20029_20063 = state_20017__$1;(statearr_20029_20063[1] = 20);
} else
{var statearr_20030_20064 = state_20017__$1;(statearr_20030_20064[1] = 21);
}
return cljs.core.constant$keyword$216;
} else
{if((state_val_20018 === 10))
{var inst_19976 = (state_20017[8]);var inst_20008 = (state_20017[2]);var inst_20009 = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(handler,inst_20008,inst_19976);var state_20017__$1 = (function (){var statearr_20031 = state_20017;(statearr_20031[11] = inst_20009);
return statearr_20031;
})();var statearr_20032_20065 = state_20017__$1;(statearr_20032_20065[2] = null);
(statearr_20032_20065[1] = 2);
return cljs.core.constant$keyword$216;
} else
{if((state_val_20018 === 11))
{var inst_19979 = (state_20017[10]);var inst_19982 = cljs.core.empty_QMARK_(inst_19979);var state_20017__$1 = state_20017;if(inst_19982)
{var statearr_20033_20066 = state_20017__$1;(statearr_20033_20066[1] = 13);
} else
{var statearr_20034_20067 = state_20017__$1;(statearr_20034_20067[1] = 14);
}
return cljs.core.constant$keyword$216;
} else
{if((state_val_20018 === 12))
{var inst_19999 = (state_20017[2]);var state_20017__$1 = state_20017;var statearr_20035_20068 = state_20017__$1;(statearr_20035_20068[2] = inst_19999);
(statearr_20035_20068[1] = 10);
return cljs.core.constant$keyword$216;
} else
{if((state_val_20018 === 13))
{var inst_19980 = (state_20017[9]);var state_20017__$1 = state_20017;var statearr_20036_20069 = state_20017__$1;(statearr_20036_20069[2] = inst_19980);
(statearr_20036_20069[1] = 15);
return cljs.core.constant$keyword$216;
} else
{if((state_val_20018 === 14))
{var inst_19979 = (state_20017[10]);var inst_19985 = cljs.core.rest(inst_19979);var inst_19986 = cljs.core.first(inst_19979);var state_20017__$1 = (function (){var statearr_20037 = state_20017;(statearr_20037[12] = inst_19985);
return statearr_20037;
})();if(cljs.core.truth_(inst_19986))
{var statearr_20038_20070 = state_20017__$1;(statearr_20038_20070[1] = 16);
} else
{var statearr_20039_20071 = state_20017__$1;(statearr_20039_20071[1] = 17);
}
return cljs.core.constant$keyword$216;
} else
{if((state_val_20018 === 15))
{var inst_19997 = (state_20017[2]);var state_20017__$1 = state_20017;var statearr_20040_20072 = state_20017__$1;(statearr_20040_20072[2] = inst_19997);
(statearr_20040_20072[1] = 12);
return cljs.core.constant$keyword$216;
} else
{if((state_val_20018 === 16))
{var inst_19979 = (state_20017[10]);var inst_19988 = cljs.core.first(inst_19979);var state_20017__$1 = state_20017;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20017__$1,19,inst_19988);
} else
{if((state_val_20018 === 17))
{var state_20017__$1 = state_20017;var statearr_20041_20073 = state_20017__$1;(statearr_20041_20073[2] = null);
(statearr_20041_20073[1] = 18);
return cljs.core.constant$keyword$216;
} else
{if((state_val_20018 === 18))
{var inst_19985 = (state_20017[12]);var inst_19980 = (state_20017[9]);var inst_19993 = (state_20017[2]);var inst_19994 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(inst_19980,inst_19993);var inst_19979 = inst_19985;var inst_19980__$1 = inst_19994;var state_20017__$1 = (function (){var statearr_20042 = state_20017;(statearr_20042[9] = inst_19980__$1);
(statearr_20042[10] = inst_19979);
return statearr_20042;
})();var statearr_20043_20074 = state_20017__$1;(statearr_20043_20074[2] = null);
(statearr_20043_20074[1] = 11);
return cljs.core.constant$keyword$216;
} else
{if((state_val_20018 === 19))
{var inst_19990 = (state_20017[2]);var state_20017__$1 = state_20017;var statearr_20044_20075 = state_20017__$1;(statearr_20044_20075[2] = inst_19990);
(statearr_20044_20075[1] = 18);
return cljs.core.constant$keyword$216;
} else
{if((state_val_20018 === 20))
{var inst_19975 = (state_20017[7]);var state_20017__$1 = state_20017;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20017__$1,23,inst_19975);
} else
{if((state_val_20018 === 21))
{var state_20017__$1 = state_20017;var statearr_20045_20076 = state_20017__$1;(statearr_20045_20076[2] = null);
(statearr_20045_20076[1] = 22);
return cljs.core.constant$keyword$216;
} else
{if((state_val_20018 === 22))
{var inst_20006 = (state_20017[2]);var state_20017__$1 = state_20017;var statearr_20046_20077 = state_20017__$1;(statearr_20046_20077[2] = inst_20006);
(statearr_20046_20077[1] = 10);
return cljs.core.constant$keyword$216;
} else
{if((state_val_20018 === 23))
{var inst_20003 = (state_20017[2]);var state_20017__$1 = state_20017;var statearr_20047_20078 = state_20017__$1;(statearr_20047_20078[2] = inst_20003);
(statearr_20047_20078[1] = 22);
return cljs.core.constant$keyword$216;
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
var state_machine__5507__auto____0 = (function (){var statearr_20051 = [null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_20051[0] = state_machine__5507__auto__);
(statearr_20051[1] = 1);
return statearr_20051;
});
var state_machine__5507__auto____1 = (function (state_20017){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_20017);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$216))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e20052){if((e20052 instanceof Object))
{var ex__5510__auto__ = e20052;var statearr_20053_20079 = state_20017;(statearr_20053_20079[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_20017);
return cljs.core.constant$keyword$216;
} else
{if(cljs.core.constant$keyword$205)
{throw e20052;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$216))
{{
var G__20080 = state_20017;
state_20017 = G__20080;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_20017){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_20017);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_20054 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_20054[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_20054;
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
var G__20083__delegate = function (req_args){var temp__4090__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(request_handler,req_args);if(cljs.core.truth_(temp__4090__auto__))
{var r = temp__4090__auto__;var rseq = ((cljs.core.sequential_QMARK_(r))?r:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [r], null));var vec__20082 = rseq;var rcomm = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20082,0,null);var result_handler_args = cljs.core.nthnext(vec__20082,1);return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(ocomm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rcomm,result_handler_args], null));
} else
{return null;
}
};
var G__20083 = function (var_args){
var req_args = null;if (arguments.length > 0) {
  req_args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__20083__delegate.call(this,req_args);};
G__20083.cljs$lang$maxFixedArity = 0;
G__20083.cljs$lang$applyTo = (function (arglist__20084){
var req_args = cljs.core.seq(arglist__20084);
return G__20083__delegate(req_args);
});
G__20083.cljs$core$IFn$_invoke$arity$variadic = G__20083__delegate;
return G__20083;
})()
;
});
/**
* @param {...*} var_args
*/
clustermap.api.log_api = (function() { 
var log_api__delegate = function (f,args){var ch = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,args);var c__5521__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_20102){var state_val_20103 = (state_20102[1]);if((state_val_20103 === 2))
{var inst_20099 = (state_20102[2]);var inst_20100 = console.log(inst_20099);var state_20102__$1 = state_20102;return cljs.core.async.impl.ioc_helpers.return_chan(state_20102__$1,inst_20100);
} else
{if((state_val_20103 === 1))
{var state_20102__$1 = state_20102;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20102__$1,2,ch);
} else
{return null;
}
}
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_20107 = [null,null,null,null,null,null,null];(statearr_20107[0] = state_machine__5507__auto__);
(statearr_20107[1] = 1);
return statearr_20107;
});
var state_machine__5507__auto____1 = (function (state_20102){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_20102);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$216))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e20108){if((e20108 instanceof Object))
{var ex__5510__auto__ = e20108;var statearr_20109_20111 = state_20102;(statearr_20109_20111[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_20102);
return cljs.core.constant$keyword$216;
} else
{if(cljs.core.constant$keyword$205)
{throw e20108;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$216))
{{
var G__20112 = state_20102;
state_20102 = G__20112;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_20102){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_20102);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_20110 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_20110[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_20110;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5523__auto__);
}));
return c__5521__auto__;
};
var log_api = function (f,var_args){
var args = null;if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return log_api__delegate.call(this,f,args);};
log_api.cljs$lang$maxFixedArity = 1;
log_api.cljs$lang$applyTo = (function (arglist__20113){
var f = cljs.core.first(arglist__20113);
var args = cljs.core.rest(arglist__20113);
return log_api__delegate(f,args);
});
log_api.cljs$core$IFn$_invoke$arity$variadic = log_api__delegate;
return log_api;
})()
;
clustermap.api.map_json_params = (function map_json_params(m){return clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__20116){var vec__20117 = p__20116;var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20117,0,null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20117,1,null);return [cljs.core.str(cljs.core.name(k)),cljs.core.str("="),cljs.core.str(JSON.stringify(cljs.core.clj__GT_js(v)))].join('');
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
boundarylines.cljs$lang$applyTo = (function (arglist__20118){
var id = cljs.core.first(arglist__20118);
arglist__20118 = cljs.core.next(arglist__20118);
var tolerance = cljs.core.first(arglist__20118);
var opts = cljs.core.rest(arglist__20118);
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
boundaryline_collection_index.cljs$lang$applyTo = (function (arglist__20119){
var id = cljs.core.first(arglist__20119);
var opts = cljs.core.rest(arglist__20119);
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
var constituencies__delegate = function (p__20120){var vec__20122 = p__20120;var type_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20122,0,null);return clustermap.api.GET.cljs$core$IFn$_invoke$arity$variadic("/api/",cljs.core.array_seq([clustermap.api.api_prefix,"/constituencies?",clustermap.api.map_json_params(type_ids)], 0));
};
var constituencies = function (var_args){
var p__20120 = null;if (arguments.length > 0) {
  p__20120 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return constituencies__delegate.call(this,p__20120);};
constituencies.cljs$lang$maxFixedArity = 0;
constituencies.cljs$lang$applyTo = (function (arglist__20123){
var p__20120 = cljs.core.seq(arglist__20123);
return constituencies__delegate(p__20120);
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
var portfolio_companies__delegate = function (p__20124){var vec__20126 = p__20124;var type_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20126,0,null);return clustermap.api.GET([cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/portfolio-companies?sort={\"!latest_turnover\":\"desc\"}&"),cljs.core.str(clustermap.api.map_json_params(type_ids))].join(''));
};
var portfolio_companies = function (var_args){
var p__20124 = null;if (arguments.length > 0) {
  p__20124 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_companies__delegate.call(this,p__20124);};
portfolio_companies.cljs$lang$maxFixedArity = 0;
portfolio_companies.cljs$lang$applyTo = (function (arglist__20127){
var p__20124 = cljs.core.seq(arglist__20127);
return portfolio_companies__delegate(p__20124);
});
portfolio_companies.cljs$core$IFn$_invoke$arity$variadic = portfolio_companies__delegate;
return portfolio_companies;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_stats = (function() { 
var portfolio_company_stats__delegate = function (p__20128){var vec__20130 = p__20128;var type_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20130,0,null);return clustermap.api.GET([cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/portfolio-company-stats?"),cljs.core.str(clustermap.api.map_json_params(type_ids))].join(''));
};
var portfolio_company_stats = function (var_args){
var p__20128 = null;if (arguments.length > 0) {
  p__20128 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_stats__delegate.call(this,p__20128);};
portfolio_company_stats.cljs$lang$maxFixedArity = 0;
portfolio_company_stats.cljs$lang$applyTo = (function (arglist__20131){
var p__20128 = cljs.core.seq(arglist__20131);
return portfolio_company_stats__delegate(p__20128);
});
portfolio_company_stats.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_stats__delegate;
return portfolio_company_stats;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_account_stats = (function() { 
var portfolio_company_account_stats__delegate = function (p__20132){var vec__20134 = p__20132;var type_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20134,0,null);return clustermap.api.GET([cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/portfolio-company-account-stats?"),cljs.core.str(clustermap.api.map_json_params(type_ids))].join(''));
};
var portfolio_company_account_stats = function (var_args){
var p__20132 = null;if (arguments.length > 0) {
  p__20132 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_account_stats__delegate.call(this,p__20132);};
portfolio_company_account_stats.cljs$lang$maxFixedArity = 0;
portfolio_company_account_stats.cljs$lang$applyTo = (function (arglist__20135){
var p__20132 = cljs.core.seq(arglist__20135);
return portfolio_company_account_stats__delegate(p__20132);
});
portfolio_company_account_stats.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_account_stats__delegate;
return portfolio_company_account_stats;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_sites = (function() { 
var portfolio_company_sites__delegate = function (p__20136){var vec__20138 = p__20136;var type_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20138,0,null);return clustermap.api.GET([cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/portfolio-company-sites?"),cljs.core.str(clustermap.api.map_json_params(type_ids))].join(''));
};
var portfolio_company_sites = function (var_args){
var p__20136 = null;if (arguments.length > 0) {
  p__20136 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_sites__delegate.call(this,p__20136);};
portfolio_company_sites.cljs$lang$maxFixedArity = 0;
portfolio_company_sites.cljs$lang$applyTo = (function (arglist__20139){
var p__20136 = cljs.core.seq(arglist__20139);
return portfolio_company_sites__delegate(p__20136);
});
portfolio_company_sites.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_sites__delegate;
return portfolio_company_sites;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_locations = (function() { 
var portfolio_company_locations__delegate = function (p__20140){var vec__20142 = p__20140;var type_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20142,0,null);return clustermap.api.GET([cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/portfolio-company-locations?"),cljs.core.str(clustermap.api.map_json_params(type_ids))].join(''));
};
var portfolio_company_locations = function (var_args){
var p__20140 = null;if (arguments.length > 0) {
  p__20140 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_locations__delegate.call(this,p__20140);};
portfolio_company_locations.cljs$lang$maxFixedArity = 0;
portfolio_company_locations.cljs$lang$applyTo = (function (arglist__20143){
var p__20140 = cljs.core.seq(arglist__20143);
return portfolio_company_locations__delegate(p__20140);
});
portfolio_company_locations.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_locations__delegate;
return portfolio_company_locations;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_site_stats = (function() { 
var portfolio_company_site_stats__delegate = function (p__20144){var vec__20146 = p__20144;var type_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20146,0,null);return clustermap.api.GET([cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/portfolio-company-site-stats?"),cljs.core.str(clustermap.api.map_json_params(type_ids))].join(''));
};
var portfolio_company_site_stats = function (var_args){
var p__20144 = null;if (arguments.length > 0) {
  p__20144 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_site_stats__delegate.call(this,p__20144);};
portfolio_company_site_stats.cljs$lang$maxFixedArity = 0;
portfolio_company_site_stats.cljs$lang$applyTo = (function (arglist__20147){
var p__20144 = cljs.core.seq(arglist__20147);
return portfolio_company_site_stats__delegate(p__20144);
});
portfolio_company_site_stats.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_site_stats__delegate;
return portfolio_company_site_stats;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_site_account_timelines = (function() { 
var portfolio_company_site_account_timelines__delegate = function (p__20148){var vec__20150 = p__20148;var type_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20150,0,null);return clustermap.api.GET([cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/portfolio-company-site-account-timelines?"),cljs.core.str(clustermap.api.map_json_params(type_ids))].join(''));
};
var portfolio_company_site_account_timelines = function (var_args){
var p__20148 = null;if (arguments.length > 0) {
  p__20148 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_site_account_timelines__delegate.call(this,p__20148);};
portfolio_company_site_account_timelines.cljs$lang$maxFixedArity = 0;
portfolio_company_site_account_timelines.cljs$lang$applyTo = (function (arglist__20151){
var p__20148 = cljs.core.seq(arglist__20151);
return portfolio_company_site_account_timelines__delegate(p__20148);
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
var investor_comapnies__delegate = function (p__20152){var vec__20154 = p__20152;var type_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20154,0,null);return clustermap.api.GET([cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/investor-companies?"),cljs.core.str(clustermap.api.map_json_params(type_ids))].join(''));
};
var investor_comapnies = function (var_args){
var p__20152 = null;if (arguments.length > 0) {
  p__20152 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return investor_comapnies__delegate.call(this,p__20152);};
investor_comapnies.cljs$lang$maxFixedArity = 0;
investor_comapnies.cljs$lang$applyTo = (function (arglist__20155){
var p__20152 = cljs.core.seq(arglist__20155);
return investor_comapnies__delegate(p__20152);
});
investor_comapnies.cljs$core$IFn$_invoke$arity$variadic = investor_comapnies__delegate;
return investor_comapnies;
})()
;
