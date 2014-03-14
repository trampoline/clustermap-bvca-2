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
var GET__delegate = function (url,p__31723){var map__31725 = p__31723;var map__31725__$1 = ((cljs.core.seq_QMARK_(map__31725))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31725):map__31725);var raw = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31725__$1,cljs.core.constant$keyword$563);var comm = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);goog.net.XhrIo.send(url,(function (event){cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,(function (d){if(cljs.core.truth_(raw))
{return d;
} else
{return cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(d,cljs.core.array_seq([cljs.core.constant$keyword$544,true], 0));
}
}).call(null,((JSON.parse.cljs$core$IFn$_invoke$arity$1 ? JSON.parse.cljs$core$IFn$_invoke$arity$1(event.target.getResponseText()) : JSON.parse.call(null,event.target.getResponseText()))["data"])));
return cljs.core.async.close_BANG_(comm);
}));
return comm;
};
var GET = function (url,var_args){
var p__31723 = null;if (arguments.length > 1) {
  p__31723 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return GET__delegate.call(this,url,p__31723);};
GET.cljs$lang$maxFixedArity = 1;
GET.cljs$lang$applyTo = (function (arglist__31726){
var url = cljs.core.first(arglist__31726);
var p__31723 = cljs.core.rest(arglist__31726);
return GET__delegate(url,p__31723);
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
clustermap.api.ordered_api_results = (function ordered_api_results(ocomm,handler){var c__5562__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_31859){var state_val_31860 = (state_31859[1]);if((state_val_31860 === 1))
{var state_31859__$1 = state_31859;var statearr_31861_31897 = state_31859__$1;(statearr_31861_31897[2] = null);
(statearr_31861_31897[1] = 2);
return cljs.core.constant$keyword$549;
} else
{if((state_val_31860 === 2))
{var state_31859__$1 = state_31859;if(true)
{var statearr_31862_31898 = state_31859__$1;(statearr_31862_31898[1] = 4);
} else
{var statearr_31863_31899 = state_31859__$1;(statearr_31863_31899[1] = 5);
}
return cljs.core.constant$keyword$549;
} else
{if((state_val_31860 === 3))
{var inst_31857 = (state_31859[2]);var state_31859__$1 = state_31859;return cljs.core.async.impl.ioc_helpers.return_chan(state_31859__$1,inst_31857);
} else
{if((state_val_31860 === 4))
{var state_31859__$1 = state_31859;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31859__$1,7,ocomm);
} else
{if((state_val_31860 === 5))
{var state_31859__$1 = state_31859;var statearr_31864_31900 = state_31859__$1;(statearr_31864_31900[2] = null);
(statearr_31864_31900[1] = 6);
return cljs.core.constant$keyword$549;
} else
{if((state_val_31860 === 6))
{var inst_31855 = (state_31859[2]);var state_31859__$1 = state_31859;var statearr_31865_31901 = state_31859__$1;(statearr_31865_31901[2] = inst_31855);
(statearr_31865_31901[1] = 3);
return cljs.core.constant$keyword$549;
} else
{if((state_val_31860 === 7))
{var inst_31817 = (state_31859[7]);var inst_31816 = (state_31859[2]);var inst_31817__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31816,0,null);var inst_31818 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31816,1,null);var inst_31819 = cljs.core.sequential_QMARK_(inst_31817__$1);var state_31859__$1 = (function (){var statearr_31866 = state_31859;(statearr_31866[8] = inst_31818);
(statearr_31866[7] = inst_31817__$1);
return statearr_31866;
})();if(inst_31819)
{var statearr_31867_31902 = state_31859__$1;(statearr_31867_31902[1] = 8);
} else
{var statearr_31868_31903 = state_31859__$1;(statearr_31868_31903[1] = 9);
}
return cljs.core.constant$keyword$549;
} else
{if((state_val_31860 === 8))
{var inst_31817 = (state_31859[7]);var inst_31821 = inst_31817;var inst_31822 = cljs.core.PersistentVector.EMPTY;var state_31859__$1 = (function (){var statearr_31869 = state_31859;(statearr_31869[9] = inst_31822);
(statearr_31869[10] = inst_31821);
return statearr_31869;
})();var statearr_31870_31904 = state_31859__$1;(statearr_31870_31904[2] = null);
(statearr_31870_31904[1] = 11);
return cljs.core.constant$keyword$549;
} else
{if((state_val_31860 === 9))
{var inst_31817 = (state_31859[7]);var state_31859__$1 = state_31859;if(cljs.core.truth_(inst_31817))
{var statearr_31871_31905 = state_31859__$1;(statearr_31871_31905[1] = 20);
} else
{var statearr_31872_31906 = state_31859__$1;(statearr_31872_31906[1] = 21);
}
return cljs.core.constant$keyword$549;
} else
{if((state_val_31860 === 10))
{var inst_31818 = (state_31859[8]);var inst_31850 = (state_31859[2]);var inst_31851 = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(handler,inst_31850,inst_31818);var state_31859__$1 = (function (){var statearr_31873 = state_31859;(statearr_31873[11] = inst_31851);
return statearr_31873;
})();var statearr_31874_31907 = state_31859__$1;(statearr_31874_31907[2] = null);
(statearr_31874_31907[1] = 2);
return cljs.core.constant$keyword$549;
} else
{if((state_val_31860 === 11))
{var inst_31821 = (state_31859[10]);var inst_31824 = cljs.core.empty_QMARK_(inst_31821);var state_31859__$1 = state_31859;if(inst_31824)
{var statearr_31875_31908 = state_31859__$1;(statearr_31875_31908[1] = 13);
} else
{var statearr_31876_31909 = state_31859__$1;(statearr_31876_31909[1] = 14);
}
return cljs.core.constant$keyword$549;
} else
{if((state_val_31860 === 12))
{var inst_31841 = (state_31859[2]);var state_31859__$1 = state_31859;var statearr_31877_31910 = state_31859__$1;(statearr_31877_31910[2] = inst_31841);
(statearr_31877_31910[1] = 10);
return cljs.core.constant$keyword$549;
} else
{if((state_val_31860 === 13))
{var inst_31822 = (state_31859[9]);var state_31859__$1 = state_31859;var statearr_31878_31911 = state_31859__$1;(statearr_31878_31911[2] = inst_31822);
(statearr_31878_31911[1] = 15);
return cljs.core.constant$keyword$549;
} else
{if((state_val_31860 === 14))
{var inst_31821 = (state_31859[10]);var inst_31827 = cljs.core.rest(inst_31821);var inst_31828 = cljs.core.first(inst_31821);var state_31859__$1 = (function (){var statearr_31879 = state_31859;(statearr_31879[12] = inst_31827);
return statearr_31879;
})();if(cljs.core.truth_(inst_31828))
{var statearr_31880_31912 = state_31859__$1;(statearr_31880_31912[1] = 16);
} else
{var statearr_31881_31913 = state_31859__$1;(statearr_31881_31913[1] = 17);
}
return cljs.core.constant$keyword$549;
} else
{if((state_val_31860 === 15))
{var inst_31839 = (state_31859[2]);var state_31859__$1 = state_31859;var statearr_31882_31914 = state_31859__$1;(statearr_31882_31914[2] = inst_31839);
(statearr_31882_31914[1] = 12);
return cljs.core.constant$keyword$549;
} else
{if((state_val_31860 === 16))
{var inst_31821 = (state_31859[10]);var inst_31830 = cljs.core.first(inst_31821);var state_31859__$1 = state_31859;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31859__$1,19,inst_31830);
} else
{if((state_val_31860 === 17))
{var state_31859__$1 = state_31859;var statearr_31883_31915 = state_31859__$1;(statearr_31883_31915[2] = null);
(statearr_31883_31915[1] = 18);
return cljs.core.constant$keyword$549;
} else
{if((state_val_31860 === 18))
{var inst_31822 = (state_31859[9]);var inst_31827 = (state_31859[12]);var inst_31835 = (state_31859[2]);var inst_31836 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(inst_31822,inst_31835);var inst_31821 = inst_31827;var inst_31822__$1 = inst_31836;var state_31859__$1 = (function (){var statearr_31884 = state_31859;(statearr_31884[9] = inst_31822__$1);
(statearr_31884[10] = inst_31821);
return statearr_31884;
})();var statearr_31885_31916 = state_31859__$1;(statearr_31885_31916[2] = null);
(statearr_31885_31916[1] = 11);
return cljs.core.constant$keyword$549;
} else
{if((state_val_31860 === 19))
{var inst_31832 = (state_31859[2]);var state_31859__$1 = state_31859;var statearr_31886_31917 = state_31859__$1;(statearr_31886_31917[2] = inst_31832);
(statearr_31886_31917[1] = 18);
return cljs.core.constant$keyword$549;
} else
{if((state_val_31860 === 20))
{var inst_31817 = (state_31859[7]);var state_31859__$1 = state_31859;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31859__$1,23,inst_31817);
} else
{if((state_val_31860 === 21))
{var state_31859__$1 = state_31859;var statearr_31887_31918 = state_31859__$1;(statearr_31887_31918[2] = null);
(statearr_31887_31918[1] = 22);
return cljs.core.constant$keyword$549;
} else
{if((state_val_31860 === 22))
{var inst_31848 = (state_31859[2]);var state_31859__$1 = state_31859;var statearr_31888_31919 = state_31859__$1;(statearr_31888_31919[2] = inst_31848);
(statearr_31888_31919[1] = 10);
return cljs.core.constant$keyword$549;
} else
{if((state_val_31860 === 23))
{var inst_31845 = (state_31859[2]);var state_31859__$1 = state_31859;var statearr_31889_31920 = state_31859__$1;(statearr_31889_31920[2] = inst_31845);
(statearr_31889_31920[1] = 22);
return cljs.core.constant$keyword$549;
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
var state_machine__5548__auto____0 = (function (){var statearr_31893 = [null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_31893[0] = state_machine__5548__auto__);
(statearr_31893[1] = 1);
return statearr_31893;
});
var state_machine__5548__auto____1 = (function (state_31859){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__(state_31859);if(cljs.core.keyword_identical_QMARK_(result__5550__auto__,cljs.core.constant$keyword$549))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e31894){if((e31894 instanceof Object))
{var ex__5551__auto__ = e31894;var statearr_31895_31921 = state_31859;(statearr_31895_31921[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_31859);
return cljs.core.constant$keyword$549;
} else
{if(cljs.core.constant$keyword$538)
{throw e31894;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5549__auto__,cljs.core.constant$keyword$549))
{{
var G__31922 = state_31859;
state_31859 = G__31922;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_31859){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_31859);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_31896 = (f__5563__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5563__auto__.cljs$core$IFn$_invoke$arity$0() : f__5563__auto__.call(null));(statearr_31896[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto__);
return statearr_31896;
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
var G__31925__delegate = function (req_args){var temp__4090__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(request_handler,req_args);if(cljs.core.truth_(temp__4090__auto__))
{var r = temp__4090__auto__;var rseq = ((cljs.core.sequential_QMARK_(r))?r:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [r], null));var vec__31924 = rseq;var rcomm = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31924,0,null);var result_handler_args = cljs.core.nthnext(vec__31924,1);return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(ocomm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rcomm,result_handler_args], null));
} else
{return null;
}
};
var G__31925 = function (var_args){
var req_args = null;if (arguments.length > 0) {
  req_args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__31925__delegate.call(this,req_args);};
G__31925.cljs$lang$maxFixedArity = 0;
G__31925.cljs$lang$applyTo = (function (arglist__31926){
var req_args = cljs.core.seq(arglist__31926);
return G__31925__delegate(req_args);
});
G__31925.cljs$core$IFn$_invoke$arity$variadic = G__31925__delegate;
return G__31925;
})()
;
});
/**
* @param {...*} var_args
*/
clustermap.api.log_api = (function() { 
var log_api__delegate = function (f,args){var ch = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,args);var c__5562__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_31944){var state_val_31945 = (state_31944[1]);if((state_val_31945 === 2))
{var inst_31941 = (state_31944[2]);var inst_31942 = console.log(inst_31941);var state_31944__$1 = state_31944;return cljs.core.async.impl.ioc_helpers.return_chan(state_31944__$1,inst_31942);
} else
{if((state_val_31945 === 1))
{var state_31944__$1 = state_31944;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31944__$1,2,ch);
} else
{return null;
}
}
});return ((function (switch__5547__auto__){
return (function() {
var state_machine__5548__auto__ = null;
var state_machine__5548__auto____0 = (function (){var statearr_31949 = [null,null,null,null,null,null,null];(statearr_31949[0] = state_machine__5548__auto__);
(statearr_31949[1] = 1);
return statearr_31949;
});
var state_machine__5548__auto____1 = (function (state_31944){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__(state_31944);if(cljs.core.keyword_identical_QMARK_(result__5550__auto__,cljs.core.constant$keyword$549))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e31950){if((e31950 instanceof Object))
{var ex__5551__auto__ = e31950;var statearr_31951_31953 = state_31944;(statearr_31951_31953[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_31944);
return cljs.core.constant$keyword$549;
} else
{if(cljs.core.constant$keyword$538)
{throw e31950;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5549__auto__,cljs.core.constant$keyword$549))
{{
var G__31954 = state_31944;
state_31944 = G__31954;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_31944){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_31944);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_31952 = (f__5563__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5563__auto__.cljs$core$IFn$_invoke$arity$0() : f__5563__auto__.call(null));(statearr_31952[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto__);
return statearr_31952;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5564__auto__);
}));
return c__5562__auto__;
};
var log_api = function (f,var_args){
var args = null;if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return log_api__delegate.call(this,f,args);};
log_api.cljs$lang$maxFixedArity = 1;
log_api.cljs$lang$applyTo = (function (arglist__31955){
var f = cljs.core.first(arglist__31955);
var args = cljs.core.rest(arglist__31955);
return log_api__delegate(f,args);
});
log_api.cljs$core$IFn$_invoke$arity$variadic = log_api__delegate;
return log_api;
})()
;
clustermap.api.map_json_params = (function map_json_params(m){return clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__31958){var vec__31959 = p__31958;var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31959,0,null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31959,1,null);return [cljs.core.str(cljs.core.name(k)),cljs.core.str("="),cljs.core.str(JSON.stringify(cljs.core.clj__GT_js(v)))].join('');
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
boundarylines.cljs$lang$applyTo = (function (arglist__31960){
var id = cljs.core.first(arglist__31960);
arglist__31960 = cljs.core.next(arglist__31960);
var tolerance = cljs.core.first(arglist__31960);
var opts = cljs.core.rest(arglist__31960);
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
boundaryline_collection_index.cljs$lang$applyTo = (function (arglist__31961){
var id = cljs.core.first(arglist__31961);
var opts = cljs.core.rest(arglist__31961);
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
var portfolio_company_sites__delegate = function (p__31962){var vec__31964 = p__31962;var type_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31964,0,null);var type_ids__$1 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$564,100,cljs.core.constant$keyword$565,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$566,"desc"], null)], null)], null),type_ids], 0));return clustermap.api.GET([cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/portfolio-company-sites?"),cljs.core.str(clustermap.api.map_json_params(type_ids__$1))].join(''));
};
var portfolio_company_sites = function (var_args){
var p__31962 = null;if (arguments.length > 0) {
  p__31962 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_sites__delegate.call(this,p__31962);};
portfolio_company_sites.cljs$lang$maxFixedArity = 0;
portfolio_company_sites.cljs$lang$applyTo = (function (arglist__31965){
var p__31962 = cljs.core.seq(arglist__31965);
return portfolio_company_sites__delegate(p__31962);
});
portfolio_company_sites.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_sites__delegate;
return portfolio_company_sites;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_sites_by_company = (function() { 
var portfolio_company_sites_by_company__delegate = function (p__31966){var vec__31968 = p__31966;var type_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31968,0,null);var type_ids__$1 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$564,100,cljs.core.constant$keyword$565,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$566,"desc"], null)], null)], null),type_ids], 0));return clustermap.api.GET([cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/portfolio-company-sites-by-company?"),cljs.core.str(clustermap.api.map_json_params(type_ids__$1))].join(''));
};
var portfolio_company_sites_by_company = function (var_args){
var p__31966 = null;if (arguments.length > 0) {
  p__31966 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_sites_by_company__delegate.call(this,p__31966);};
portfolio_company_sites_by_company.cljs$lang$maxFixedArity = 0;
portfolio_company_sites_by_company.cljs$lang$applyTo = (function (arglist__31969){
var p__31966 = cljs.core.seq(arglist__31969);
return portfolio_company_sites_by_company__delegate(p__31966);
});
portfolio_company_sites_by_company.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_sites_by_company__delegate;
return portfolio_company_sites_by_company;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_locations = (function() { 
var portfolio_company_locations__delegate = function (p__31970){var vec__31972 = p__31970;var type_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31972,0,null);return clustermap.api.GET([cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/portfolio-company-locations?"),cljs.core.str(clustermap.api.map_json_params(type_ids))].join(''));
};
var portfolio_company_locations = function (var_args){
var p__31970 = null;if (arguments.length > 0) {
  p__31970 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_locations__delegate.call(this,p__31970);};
portfolio_company_locations.cljs$lang$maxFixedArity = 0;
portfolio_company_locations.cljs$lang$applyTo = (function (arglist__31973){
var p__31970 = cljs.core.seq(arglist__31973);
return portfolio_company_locations__delegate(p__31970);
});
portfolio_company_locations.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_locations__delegate;
return portfolio_company_locations;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_site_stats = (function() { 
var portfolio_company_site_stats__delegate = function (p__31974){var vec__31976 = p__31974;var type_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31976,0,null);return clustermap.api.GET([cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/portfolio-company-site-stats?"),cljs.core.str(clustermap.api.map_json_params(type_ids))].join(''));
};
var portfolio_company_site_stats = function (var_args){
var p__31974 = null;if (arguments.length > 0) {
  p__31974 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_site_stats__delegate.call(this,p__31974);};
portfolio_company_site_stats.cljs$lang$maxFixedArity = 0;
portfolio_company_site_stats.cljs$lang$applyTo = (function (arglist__31977){
var p__31974 = cljs.core.seq(arglist__31977);
return portfolio_company_site_stats__delegate(p__31974);
});
portfolio_company_site_stats.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_site_stats__delegate;
return portfolio_company_site_stats;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_site_account_timelines = (function() { 
var portfolio_company_site_account_timelines__delegate = function (p__31978){var vec__31980 = p__31978;var type_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31980,0,null);return clustermap.api.GET([cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/portfolio-company-site-account-timelines?"),cljs.core.str(clustermap.api.map_json_params(type_ids))].join(''));
};
var portfolio_company_site_account_timelines = function (var_args){
var p__31978 = null;if (arguments.length > 0) {
  p__31978 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_site_account_timelines__delegate.call(this,p__31978);};
portfolio_company_site_account_timelines.cljs$lang$maxFixedArity = 0;
portfolio_company_site_account_timelines.cljs$lang$applyTo = (function (arglist__31981){
var p__31978 = cljs.core.seq(arglist__31981);
return portfolio_company_site_account_timelines__delegate(p__31978);
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
var investment_account_timelines__delegate = function (p__31982){var vec__31984 = p__31982;var type_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31984,0,null);return clustermap.api.GET([cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/investment-account-timelines?"),cljs.core.str(clustermap.api.map_json_params(type_ids))].join(''));
};
var investment_account_timelines = function (var_args){
var p__31982 = null;if (arguments.length > 0) {
  p__31982 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return investment_account_timelines__delegate.call(this,p__31982);};
investment_account_timelines.cljs$lang$maxFixedArity = 0;
investment_account_timelines.cljs$lang$applyTo = (function (arglist__31985){
var p__31982 = cljs.core.seq(arglist__31985);
return investment_account_timelines__delegate(p__31982);
});
investment_account_timelines.cljs$core$IFn$_invoke$arity$variadic = investment_account_timelines__delegate;
return investment_account_timelines;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.investment_stats = (function() { 
var investment_stats__delegate = function (p__31986){var vec__31988 = p__31986;var type_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31988,0,null);return clustermap.api.GET([cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/investment-stats?"),cljs.core.str(clustermap.api.map_json_params(type_ids))].join(''));
};
var investment_stats = function (var_args){
var p__31986 = null;if (arguments.length > 0) {
  p__31986 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return investment_stats__delegate.call(this,p__31986);};
investment_stats.cljs$lang$maxFixedArity = 0;
investment_stats.cljs$lang$applyTo = (function (arglist__31989){
var p__31986 = cljs.core.seq(arglist__31989);
return investment_stats__delegate(p__31986);
});
investment_stats.cljs$core$IFn$_invoke$arity$variadic = investment_stats__delegate;
return investment_stats;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.investment_aggs = (function() { 
var investment_aggs__delegate = function (p__31990){var vec__31992 = p__31990;var type_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31992,0,null);var type_ids__$1 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$564,50,cljs.core.constant$keyword$567,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$568,"desc"], null)], null),type_ids], 0));return clustermap.api.GET([cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/investment-aggs?"),cljs.core.str(clustermap.api.map_json_params(type_ids__$1))].join(''));
};
var investment_aggs = function (var_args){
var p__31990 = null;if (arguments.length > 0) {
  p__31990 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return investment_aggs__delegate.call(this,p__31990);};
investment_aggs.cljs$lang$maxFixedArity = 0;
investment_aggs.cljs$lang$applyTo = (function (arglist__31993){
var p__31990 = cljs.core.seq(arglist__31993);
return investment_aggs__delegate(p__31990);
});
investment_aggs.cljs$core$IFn$_invoke$arity$variadic = investment_aggs__delegate;
return investment_aggs;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.investments = (function() { 
var investments__delegate = function (p__31994){var vec__31996 = p__31994;var type_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31996,0,null);var type_ids__$1 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$564,50,cljs.core.constant$keyword$567,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$569,"asc"], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$570,"asc"], null)], null)], null),type_ids], 0));return clustermap.api.GET([cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/investments?"),cljs.core.str(clustermap.api.map_json_params(type_ids__$1))].join(''));
};
var investments = function (var_args){
var p__31994 = null;if (arguments.length > 0) {
  p__31994 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return investments__delegate.call(this,p__31994);};
investments.cljs$lang$maxFixedArity = 0;
investments.cljs$lang$applyTo = (function (arglist__31997){
var p__31994 = cljs.core.seq(arglist__31997);
return investments__delegate(p__31994);
});
investments.cljs$core$IFn$_invoke$arity$variadic = investments__delegate;
return investments;
})()
;
