// Compiled by ClojureScript 0.0-2173
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
var GET__delegate = function (url,p__31771){var map__31773 = p__31771;var map__31773__$1 = ((cljs.core.seq_QMARK_(map__31773))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31773):map__31773);var raw = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31773__$1,cljs.core.constant$keyword$565);var comm = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);goog.net.XhrIo.send(url,(function (event){cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,(function (d){if(cljs.core.truth_(raw))
{return d;
} else
{return cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(d,cljs.core.array_seq([cljs.core.constant$keyword$546,true], 0));
}
}).call(null,((JSON.parse.cljs$core$IFn$_invoke$arity$1 ? JSON.parse.cljs$core$IFn$_invoke$arity$1(event.target.getResponseText()) : JSON.parse.call(null,event.target.getResponseText()))["data"])));
return cljs.core.async.close_BANG_(comm);
}));
return comm;
};
var GET = function (url,var_args){
var p__31771 = null;if (arguments.length > 1) {
  p__31771 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return GET__delegate.call(this,url,p__31771);};
GET.cljs$lang$maxFixedArity = 1;
GET.cljs$lang$applyTo = (function (arglist__31774){
var url = cljs.core.first(arglist__31774);
var p__31771 = cljs.core.rest(arglist__31774);
return GET__delegate(url,p__31771);
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
clustermap.api.ordered_api_results = (function ordered_api_results(ocomm,handler){var c__5562__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_31907){var state_val_31908 = (state_31907[1]);if((state_val_31908 === 1))
{var state_31907__$1 = state_31907;var statearr_31909_31945 = state_31907__$1;(statearr_31909_31945[2] = null);
(statearr_31909_31945[1] = 2);
return cljs.core.constant$keyword$551;
} else
{if((state_val_31908 === 2))
{var state_31907__$1 = state_31907;if(true)
{var statearr_31910_31946 = state_31907__$1;(statearr_31910_31946[1] = 4);
} else
{var statearr_31911_31947 = state_31907__$1;(statearr_31911_31947[1] = 5);
}
return cljs.core.constant$keyword$551;
} else
{if((state_val_31908 === 3))
{var inst_31905 = (state_31907[2]);var state_31907__$1 = state_31907;return cljs.core.async.impl.ioc_helpers.return_chan(state_31907__$1,inst_31905);
} else
{if((state_val_31908 === 4))
{var state_31907__$1 = state_31907;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31907__$1,7,ocomm);
} else
{if((state_val_31908 === 5))
{var state_31907__$1 = state_31907;var statearr_31912_31948 = state_31907__$1;(statearr_31912_31948[2] = null);
(statearr_31912_31948[1] = 6);
return cljs.core.constant$keyword$551;
} else
{if((state_val_31908 === 6))
{var inst_31903 = (state_31907[2]);var state_31907__$1 = state_31907;var statearr_31913_31949 = state_31907__$1;(statearr_31913_31949[2] = inst_31903);
(statearr_31913_31949[1] = 3);
return cljs.core.constant$keyword$551;
} else
{if((state_val_31908 === 7))
{var inst_31865 = (state_31907[7]);var inst_31864 = (state_31907[2]);var inst_31865__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31864,0,null);var inst_31866 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31864,1,null);var inst_31867 = cljs.core.sequential_QMARK_(inst_31865__$1);var state_31907__$1 = (function (){var statearr_31914 = state_31907;(statearr_31914[8] = inst_31866);
(statearr_31914[7] = inst_31865__$1);
return statearr_31914;
})();if(inst_31867)
{var statearr_31915_31950 = state_31907__$1;(statearr_31915_31950[1] = 8);
} else
{var statearr_31916_31951 = state_31907__$1;(statearr_31916_31951[1] = 9);
}
return cljs.core.constant$keyword$551;
} else
{if((state_val_31908 === 8))
{var inst_31865 = (state_31907[7]);var inst_31869 = inst_31865;var inst_31870 = cljs.core.PersistentVector.EMPTY;var state_31907__$1 = (function (){var statearr_31917 = state_31907;(statearr_31917[9] = inst_31869);
(statearr_31917[10] = inst_31870);
return statearr_31917;
})();var statearr_31918_31952 = state_31907__$1;(statearr_31918_31952[2] = null);
(statearr_31918_31952[1] = 11);
return cljs.core.constant$keyword$551;
} else
{if((state_val_31908 === 9))
{var inst_31865 = (state_31907[7]);var state_31907__$1 = state_31907;if(cljs.core.truth_(inst_31865))
{var statearr_31919_31953 = state_31907__$1;(statearr_31919_31953[1] = 20);
} else
{var statearr_31920_31954 = state_31907__$1;(statearr_31920_31954[1] = 21);
}
return cljs.core.constant$keyword$551;
} else
{if((state_val_31908 === 10))
{var inst_31866 = (state_31907[8]);var inst_31898 = (state_31907[2]);var inst_31899 = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(handler,inst_31898,inst_31866);var state_31907__$1 = (function (){var statearr_31921 = state_31907;(statearr_31921[11] = inst_31899);
return statearr_31921;
})();var statearr_31922_31955 = state_31907__$1;(statearr_31922_31955[2] = null);
(statearr_31922_31955[1] = 2);
return cljs.core.constant$keyword$551;
} else
{if((state_val_31908 === 11))
{var inst_31869 = (state_31907[9]);var inst_31872 = cljs.core.empty_QMARK_(inst_31869);var state_31907__$1 = state_31907;if(inst_31872)
{var statearr_31923_31956 = state_31907__$1;(statearr_31923_31956[1] = 13);
} else
{var statearr_31924_31957 = state_31907__$1;(statearr_31924_31957[1] = 14);
}
return cljs.core.constant$keyword$551;
} else
{if((state_val_31908 === 12))
{var inst_31889 = (state_31907[2]);var state_31907__$1 = state_31907;var statearr_31925_31958 = state_31907__$1;(statearr_31925_31958[2] = inst_31889);
(statearr_31925_31958[1] = 10);
return cljs.core.constant$keyword$551;
} else
{if((state_val_31908 === 13))
{var inst_31870 = (state_31907[10]);var state_31907__$1 = state_31907;var statearr_31926_31959 = state_31907__$1;(statearr_31926_31959[2] = inst_31870);
(statearr_31926_31959[1] = 15);
return cljs.core.constant$keyword$551;
} else
{if((state_val_31908 === 14))
{var inst_31869 = (state_31907[9]);var inst_31875 = cljs.core.rest(inst_31869);var inst_31876 = cljs.core.first(inst_31869);var state_31907__$1 = (function (){var statearr_31927 = state_31907;(statearr_31927[12] = inst_31875);
return statearr_31927;
})();if(cljs.core.truth_(inst_31876))
{var statearr_31928_31960 = state_31907__$1;(statearr_31928_31960[1] = 16);
} else
{var statearr_31929_31961 = state_31907__$1;(statearr_31929_31961[1] = 17);
}
return cljs.core.constant$keyword$551;
} else
{if((state_val_31908 === 15))
{var inst_31887 = (state_31907[2]);var state_31907__$1 = state_31907;var statearr_31930_31962 = state_31907__$1;(statearr_31930_31962[2] = inst_31887);
(statearr_31930_31962[1] = 12);
return cljs.core.constant$keyword$551;
} else
{if((state_val_31908 === 16))
{var inst_31869 = (state_31907[9]);var inst_31878 = cljs.core.first(inst_31869);var state_31907__$1 = state_31907;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31907__$1,19,inst_31878);
} else
{if((state_val_31908 === 17))
{var state_31907__$1 = state_31907;var statearr_31931_31963 = state_31907__$1;(statearr_31931_31963[2] = null);
(statearr_31931_31963[1] = 18);
return cljs.core.constant$keyword$551;
} else
{if((state_val_31908 === 18))
{var inst_31875 = (state_31907[12]);var inst_31870 = (state_31907[10]);var inst_31883 = (state_31907[2]);var inst_31884 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(inst_31870,inst_31883);var inst_31869 = inst_31875;var inst_31870__$1 = inst_31884;var state_31907__$1 = (function (){var statearr_31932 = state_31907;(statearr_31932[9] = inst_31869);
(statearr_31932[10] = inst_31870__$1);
return statearr_31932;
})();var statearr_31933_31964 = state_31907__$1;(statearr_31933_31964[2] = null);
(statearr_31933_31964[1] = 11);
return cljs.core.constant$keyword$551;
} else
{if((state_val_31908 === 19))
{var inst_31880 = (state_31907[2]);var state_31907__$1 = state_31907;var statearr_31934_31965 = state_31907__$1;(statearr_31934_31965[2] = inst_31880);
(statearr_31934_31965[1] = 18);
return cljs.core.constant$keyword$551;
} else
{if((state_val_31908 === 20))
{var inst_31865 = (state_31907[7]);var state_31907__$1 = state_31907;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31907__$1,23,inst_31865);
} else
{if((state_val_31908 === 21))
{var state_31907__$1 = state_31907;var statearr_31935_31966 = state_31907__$1;(statearr_31935_31966[2] = null);
(statearr_31935_31966[1] = 22);
return cljs.core.constant$keyword$551;
} else
{if((state_val_31908 === 22))
{var inst_31896 = (state_31907[2]);var state_31907__$1 = state_31907;var statearr_31936_31967 = state_31907__$1;(statearr_31936_31967[2] = inst_31896);
(statearr_31936_31967[1] = 10);
return cljs.core.constant$keyword$551;
} else
{if((state_val_31908 === 23))
{var inst_31893 = (state_31907[2]);var state_31907__$1 = state_31907;var statearr_31937_31968 = state_31907__$1;(statearr_31937_31968[2] = inst_31893);
(statearr_31937_31968[1] = 22);
return cljs.core.constant$keyword$551;
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
});return ((function (switch__5547__auto__){
return (function() {
var state_machine__5548__auto__ = null;
var state_machine__5548__auto____0 = (function (){var statearr_31941 = [null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_31941[0] = state_machine__5548__auto__);
(statearr_31941[1] = 1);
return statearr_31941;
});
var state_machine__5548__auto____1 = (function (state_31907){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__(state_31907);if(cljs.core.keyword_identical_QMARK_(result__5550__auto__,cljs.core.constant$keyword$551))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e31942){if((e31942 instanceof Object))
{var ex__5551__auto__ = e31942;var statearr_31943_31969 = state_31907;(statearr_31943_31969[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_31907);
return cljs.core.constant$keyword$551;
} else
{if(cljs.core.constant$keyword$540)
{throw e31942;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5549__auto__,cljs.core.constant$keyword$551))
{{
var G__31970 = state_31907;
state_31907 = G__31970;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_31907){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_31907);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_31944 = (f__5563__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5563__auto__.cljs$core$IFn$_invoke$arity$0() : f__5563__auto__.call(null));(statearr_31944[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto__);
return statearr_31944;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5564__auto__);
}));
return c__5562__auto__;
});
/**
* order responses from an async API according to the order of requests
* - request-handler: fn to send an async API request, returning a channel of a single result value,
* and optional additional args for the result-handler. return nil to
* abandon request
* - result-handler: function of API result and optional additional args from request-handler result
*/
clustermap.api.ordered_api = (function ordered_api(request_handler,result_handler){var ocomm = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer(1));var _ = clustermap.api.ordered_api_results(ocomm,result_handler);return (function() { 
var G__31973__delegate = function (req_args){var temp__4090__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(request_handler,req_args);if(cljs.core.truth_(temp__4090__auto__))
{var r = temp__4090__auto__;var rseq = ((cljs.core.sequential_QMARK_(r))?r:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [r], null));var vec__31972 = rseq;var rcomm = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31972,0,null);var result_handler_args = cljs.core.nthnext(vec__31972,1);return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(ocomm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rcomm,result_handler_args], null));
} else
{return null;
}
};
var G__31973 = function (var_args){
var req_args = null;if (arguments.length > 0) {
  req_args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__31973__delegate.call(this,req_args);};
G__31973.cljs$lang$maxFixedArity = 0;
G__31973.cljs$lang$applyTo = (function (arglist__31974){
var req_args = cljs.core.seq(arglist__31974);
return G__31973__delegate(req_args);
});
G__31973.cljs$core$IFn$_invoke$arity$variadic = G__31973__delegate;
return G__31973;
})()
;
});
/**
* @param {...*} var_args
*/
clustermap.api.log_api = (function() { 
var log_api__delegate = function (f,args){var ch = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,args);var c__5562__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_31992){var state_val_31993 = (state_31992[1]);if((state_val_31993 === 2))
{var inst_31989 = (state_31992[2]);var inst_31990 = console.log(inst_31989);var state_31992__$1 = state_31992;return cljs.core.async.impl.ioc_helpers.return_chan(state_31992__$1,inst_31990);
} else
{if((state_val_31993 === 1))
{var state_31992__$1 = state_31992;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31992__$1,2,ch);
} else
{return null;
}
}
});return ((function (switch__5547__auto__){
return (function() {
var state_machine__5548__auto__ = null;
var state_machine__5548__auto____0 = (function (){var statearr_31997 = [null,null,null,null,null,null,null];(statearr_31997[0] = state_machine__5548__auto__);
(statearr_31997[1] = 1);
return statearr_31997;
});
var state_machine__5548__auto____1 = (function (state_31992){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__(state_31992);if(cljs.core.keyword_identical_QMARK_(result__5550__auto__,cljs.core.constant$keyword$551))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e31998){if((e31998 instanceof Object))
{var ex__5551__auto__ = e31998;var statearr_31999_32001 = state_31992;(statearr_31999_32001[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_31992);
return cljs.core.constant$keyword$551;
} else
{if(cljs.core.constant$keyword$540)
{throw e31998;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5549__auto__,cljs.core.constant$keyword$551))
{{
var G__32002 = state_31992;
state_31992 = G__32002;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_31992){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_31992);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_32000 = (f__5563__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5563__auto__.cljs$core$IFn$_invoke$arity$0() : f__5563__auto__.call(null));(statearr_32000[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto__);
return statearr_32000;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5564__auto__);
}));
return c__5562__auto__;
};
var log_api = function (f,var_args){
var args = null;if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return log_api__delegate.call(this,f,args);};
log_api.cljs$lang$maxFixedArity = 1;
log_api.cljs$lang$applyTo = (function (arglist__32003){
var f = cljs.core.first(arglist__32003);
var args = cljs.core.rest(arglist__32003);
return log_api__delegate(f,args);
});
log_api.cljs$core$IFn$_invoke$arity$variadic = log_api__delegate;
return log_api;
})()
;
clustermap.api.map_json_params = (function map_json_params(m){return clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__32006){var vec__32007 = p__32006;var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32007,0,null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32007,1,null);return [cljs.core.str(cljs.core.name(k)),cljs.core.str("="),cljs.core.str(JSON.stringify(cljs.core.clj__GT_js(v)))].join('');
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
boundarylines.cljs$lang$applyTo = (function (arglist__32008){
var id = cljs.core.first(arglist__32008);
arglist__32008 = cljs.core.next(arglist__32008);
var tolerance = cljs.core.first(arglist__32008);
var opts = cljs.core.rest(arglist__32008);
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
boundaryline_collection_index.cljs$lang$applyTo = (function (arglist__32009){
var id = cljs.core.first(arglist__32009);
var opts = cljs.core.rest(arglist__32009);
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
clustermap.api.portfolio_company = (function portfolio_company(id){return clustermap.api.GET([cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/portfolio-companies/"),cljs.core.str(id)].join(''));
});
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_sites = (function() { 
var portfolio_company_sites__delegate = function (p__32010){var vec__32012 = p__32010;var type_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32012,0,null);var type_ids__$1 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$566,100,cljs.core.constant$keyword$567,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$568,"desc"], null)], null)], null),type_ids], 0));return clustermap.api.GET([cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/portfolio-company-sites?"),cljs.core.str(clustermap.api.map_json_params(type_ids__$1))].join(''));
};
var portfolio_company_sites = function (var_args){
var p__32010 = null;if (arguments.length > 0) {
  p__32010 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_sites__delegate.call(this,p__32010);};
portfolio_company_sites.cljs$lang$maxFixedArity = 0;
portfolio_company_sites.cljs$lang$applyTo = (function (arglist__32013){
var p__32010 = cljs.core.seq(arglist__32013);
return portfolio_company_sites__delegate(p__32010);
});
portfolio_company_sites.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_sites__delegate;
return portfolio_company_sites;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_sites_by_company = (function() { 
var portfolio_company_sites_by_company__delegate = function (p__32014){var vec__32016 = p__32014;var type_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32016,0,null);var type_ids__$1 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$566,100,cljs.core.constant$keyword$567,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$568,"desc"], null)], null)], null),type_ids], 0));return clustermap.api.GET([cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/portfolio-company-sites-by-company?"),cljs.core.str(clustermap.api.map_json_params(type_ids__$1))].join(''));
};
var portfolio_company_sites_by_company = function (var_args){
var p__32014 = null;if (arguments.length > 0) {
  p__32014 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_sites_by_company__delegate.call(this,p__32014);};
portfolio_company_sites_by_company.cljs$lang$maxFixedArity = 0;
portfolio_company_sites_by_company.cljs$lang$applyTo = (function (arglist__32017){
var p__32014 = cljs.core.seq(arglist__32017);
return portfolio_company_sites_by_company__delegate(p__32014);
});
portfolio_company_sites_by_company.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_sites_by_company__delegate;
return portfolio_company_sites_by_company;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_locations = (function() { 
var portfolio_company_locations__delegate = function (p__32018){var vec__32020 = p__32018;var type_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32020,0,null);return clustermap.api.GET([cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/portfolio-company-locations?"),cljs.core.str(clustermap.api.map_json_params(type_ids))].join(''));
};
var portfolio_company_locations = function (var_args){
var p__32018 = null;if (arguments.length > 0) {
  p__32018 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_locations__delegate.call(this,p__32018);};
portfolio_company_locations.cljs$lang$maxFixedArity = 0;
portfolio_company_locations.cljs$lang$applyTo = (function (arglist__32021){
var p__32018 = cljs.core.seq(arglist__32021);
return portfolio_company_locations__delegate(p__32018);
});
portfolio_company_locations.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_locations__delegate;
return portfolio_company_locations;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_site_stats = (function() { 
var portfolio_company_site_stats__delegate = function (p__32022){var vec__32024 = p__32022;var type_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32024,0,null);return clustermap.api.GET([cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/portfolio-company-site-stats?"),cljs.core.str(clustermap.api.map_json_params(type_ids))].join(''));
};
var portfolio_company_site_stats = function (var_args){
var p__32022 = null;if (arguments.length > 0) {
  p__32022 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_site_stats__delegate.call(this,p__32022);};
portfolio_company_site_stats.cljs$lang$maxFixedArity = 0;
portfolio_company_site_stats.cljs$lang$applyTo = (function (arglist__32025){
var p__32022 = cljs.core.seq(arglist__32025);
return portfolio_company_site_stats__delegate(p__32022);
});
portfolio_company_site_stats.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_site_stats__delegate;
return portfolio_company_site_stats;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_site_account_timelines = (function() { 
var portfolio_company_site_account_timelines__delegate = function (p__32026){var vec__32028 = p__32026;var type_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32028,0,null);return clustermap.api.GET([cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/portfolio-company-site-account-timelines?"),cljs.core.str(clustermap.api.map_json_params(type_ids))].join(''));
};
var portfolio_company_site_account_timelines = function (var_args){
var p__32026 = null;if (arguments.length > 0) {
  p__32026 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_site_account_timelines__delegate.call(this,p__32026);};
portfolio_company_site_account_timelines.cljs$lang$maxFixedArity = 0;
portfolio_company_site_account_timelines.cljs$lang$applyTo = (function (arglist__32029){
var p__32026 = cljs.core.seq(arglist__32029);
return portfolio_company_site_account_timelines__delegate(p__32026);
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
clustermap.api.investment_account_timelines = (function() { 
var investment_account_timelines__delegate = function (p__32030){var vec__32032 = p__32030;var type_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32032,0,null);return clustermap.api.GET([cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/investment-account-timelines?"),cljs.core.str(clustermap.api.map_json_params(type_ids))].join(''));
};
var investment_account_timelines = function (var_args){
var p__32030 = null;if (arguments.length > 0) {
  p__32030 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return investment_account_timelines__delegate.call(this,p__32030);};
investment_account_timelines.cljs$lang$maxFixedArity = 0;
investment_account_timelines.cljs$lang$applyTo = (function (arglist__32033){
var p__32030 = cljs.core.seq(arglist__32033);
return investment_account_timelines__delegate(p__32030);
});
investment_account_timelines.cljs$core$IFn$_invoke$arity$variadic = investment_account_timelines__delegate;
return investment_account_timelines;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.investment_stats = (function() { 
var investment_stats__delegate = function (p__32034){var vec__32036 = p__32034;var type_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32036,0,null);return clustermap.api.GET([cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/investment-stats?"),cljs.core.str(clustermap.api.map_json_params(type_ids))].join(''));
};
var investment_stats = function (var_args){
var p__32034 = null;if (arguments.length > 0) {
  p__32034 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return investment_stats__delegate.call(this,p__32034);};
investment_stats.cljs$lang$maxFixedArity = 0;
investment_stats.cljs$lang$applyTo = (function (arglist__32037){
var p__32034 = cljs.core.seq(arglist__32037);
return investment_stats__delegate(p__32034);
});
investment_stats.cljs$core$IFn$_invoke$arity$variadic = investment_stats__delegate;
return investment_stats;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.investment_aggs = (function() { 
var investment_aggs__delegate = function (p__32038){var vec__32040 = p__32038;var type_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32040,0,null);var type_ids__$1 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$566,50,cljs.core.constant$keyword$569,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$570,"desc"], null)], null),type_ids], 0));return clustermap.api.GET([cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/investment-aggs?"),cljs.core.str(clustermap.api.map_json_params(type_ids__$1))].join(''));
};
var investment_aggs = function (var_args){
var p__32038 = null;if (arguments.length > 0) {
  p__32038 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return investment_aggs__delegate.call(this,p__32038);};
investment_aggs.cljs$lang$maxFixedArity = 0;
investment_aggs.cljs$lang$applyTo = (function (arglist__32041){
var p__32038 = cljs.core.seq(arglist__32041);
return investment_aggs__delegate(p__32038);
});
investment_aggs.cljs$core$IFn$_invoke$arity$variadic = investment_aggs__delegate;
return investment_aggs;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.investments = (function() { 
var investments__delegate = function (p__32042){var vec__32044 = p__32042;var type_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32044,0,null);var type_ids__$1 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$566,50,cljs.core.constant$keyword$569,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$571,"asc"], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$572,"asc"], null)], null)], null),type_ids], 0));return clustermap.api.GET([cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/investments?"),cljs.core.str(clustermap.api.map_json_params(type_ids__$1))].join(''));
};
var investments = function (var_args){
var p__32042 = null;if (arguments.length > 0) {
  p__32042 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return investments__delegate.call(this,p__32042);};
investments.cljs$lang$maxFixedArity = 0;
investments.cljs$lang$applyTo = (function (arglist__32045){
var p__32042 = cljs.core.seq(arglist__32045);
return investments__delegate(p__32042);
});
investments.cljs$core$IFn$_invoke$arity$variadic = investments__delegate;
return investments;
})()
;
