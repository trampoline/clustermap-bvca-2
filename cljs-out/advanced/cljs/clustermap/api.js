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
var GET__delegate = function (url,p__31715){var map__31717 = p__31715;var map__31717__$1 = ((cljs.core.seq_QMARK_(map__31717))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31717):map__31717);var raw = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31717__$1,cljs.core.constant$keyword$565);var comm = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);goog.net.XhrIo.send(url,(function (event){cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,(function (d){if(cljs.core.truth_(raw))
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
var p__31715 = null;if (arguments.length > 1) {
  p__31715 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return GET__delegate.call(this,url,p__31715);};
GET.cljs$lang$maxFixedArity = 1;
GET.cljs$lang$applyTo = (function (arglist__31718){
var url = cljs.core.first(arglist__31718);
var p__31715 = cljs.core.rest(arglist__31718);
return GET__delegate(url,p__31715);
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
clustermap.api.ordered_api_results = (function ordered_api_results(ocomm,handler){var c__5562__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_31851){var state_val_31852 = (state_31851[1]);if((state_val_31852 === 1))
{var state_31851__$1 = state_31851;var statearr_31853_31889 = state_31851__$1;(statearr_31853_31889[2] = null);
(statearr_31853_31889[1] = 2);
return cljs.core.constant$keyword$551;
} else
{if((state_val_31852 === 2))
{var state_31851__$1 = state_31851;if(true)
{var statearr_31854_31890 = state_31851__$1;(statearr_31854_31890[1] = 4);
} else
{var statearr_31855_31891 = state_31851__$1;(statearr_31855_31891[1] = 5);
}
return cljs.core.constant$keyword$551;
} else
{if((state_val_31852 === 3))
{var inst_31849 = (state_31851[2]);var state_31851__$1 = state_31851;return cljs.core.async.impl.ioc_helpers.return_chan(state_31851__$1,inst_31849);
} else
{if((state_val_31852 === 4))
{var state_31851__$1 = state_31851;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31851__$1,7,ocomm);
} else
{if((state_val_31852 === 5))
{var state_31851__$1 = state_31851;var statearr_31856_31892 = state_31851__$1;(statearr_31856_31892[2] = null);
(statearr_31856_31892[1] = 6);
return cljs.core.constant$keyword$551;
} else
{if((state_val_31852 === 6))
{var inst_31847 = (state_31851[2]);var state_31851__$1 = state_31851;var statearr_31857_31893 = state_31851__$1;(statearr_31857_31893[2] = inst_31847);
(statearr_31857_31893[1] = 3);
return cljs.core.constant$keyword$551;
} else
{if((state_val_31852 === 7))
{var inst_31809 = (state_31851[7]);var inst_31808 = (state_31851[2]);var inst_31809__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31808,0,null);var inst_31810 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31808,1,null);var inst_31811 = cljs.core.sequential_QMARK_(inst_31809__$1);var state_31851__$1 = (function (){var statearr_31858 = state_31851;(statearr_31858[8] = inst_31810);
(statearr_31858[7] = inst_31809__$1);
return statearr_31858;
})();if(inst_31811)
{var statearr_31859_31894 = state_31851__$1;(statearr_31859_31894[1] = 8);
} else
{var statearr_31860_31895 = state_31851__$1;(statearr_31860_31895[1] = 9);
}
return cljs.core.constant$keyword$551;
} else
{if((state_val_31852 === 8))
{var inst_31809 = (state_31851[7]);var inst_31813 = inst_31809;var inst_31814 = cljs.core.PersistentVector.EMPTY;var state_31851__$1 = (function (){var statearr_31861 = state_31851;(statearr_31861[9] = inst_31813);
(statearr_31861[10] = inst_31814);
return statearr_31861;
})();var statearr_31862_31896 = state_31851__$1;(statearr_31862_31896[2] = null);
(statearr_31862_31896[1] = 11);
return cljs.core.constant$keyword$551;
} else
{if((state_val_31852 === 9))
{var inst_31809 = (state_31851[7]);var state_31851__$1 = state_31851;if(cljs.core.truth_(inst_31809))
{var statearr_31863_31897 = state_31851__$1;(statearr_31863_31897[1] = 20);
} else
{var statearr_31864_31898 = state_31851__$1;(statearr_31864_31898[1] = 21);
}
return cljs.core.constant$keyword$551;
} else
{if((state_val_31852 === 10))
{var inst_31810 = (state_31851[8]);var inst_31842 = (state_31851[2]);var inst_31843 = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(handler,inst_31842,inst_31810);var state_31851__$1 = (function (){var statearr_31865 = state_31851;(statearr_31865[11] = inst_31843);
return statearr_31865;
})();var statearr_31866_31899 = state_31851__$1;(statearr_31866_31899[2] = null);
(statearr_31866_31899[1] = 2);
return cljs.core.constant$keyword$551;
} else
{if((state_val_31852 === 11))
{var inst_31813 = (state_31851[9]);var inst_31816 = cljs.core.empty_QMARK_(inst_31813);var state_31851__$1 = state_31851;if(inst_31816)
{var statearr_31867_31900 = state_31851__$1;(statearr_31867_31900[1] = 13);
} else
{var statearr_31868_31901 = state_31851__$1;(statearr_31868_31901[1] = 14);
}
return cljs.core.constant$keyword$551;
} else
{if((state_val_31852 === 12))
{var inst_31833 = (state_31851[2]);var state_31851__$1 = state_31851;var statearr_31869_31902 = state_31851__$1;(statearr_31869_31902[2] = inst_31833);
(statearr_31869_31902[1] = 10);
return cljs.core.constant$keyword$551;
} else
{if((state_val_31852 === 13))
{var inst_31814 = (state_31851[10]);var state_31851__$1 = state_31851;var statearr_31870_31903 = state_31851__$1;(statearr_31870_31903[2] = inst_31814);
(statearr_31870_31903[1] = 15);
return cljs.core.constant$keyword$551;
} else
{if((state_val_31852 === 14))
{var inst_31813 = (state_31851[9]);var inst_31819 = cljs.core.rest(inst_31813);var inst_31820 = cljs.core.first(inst_31813);var state_31851__$1 = (function (){var statearr_31871 = state_31851;(statearr_31871[12] = inst_31819);
return statearr_31871;
})();if(cljs.core.truth_(inst_31820))
{var statearr_31872_31904 = state_31851__$1;(statearr_31872_31904[1] = 16);
} else
{var statearr_31873_31905 = state_31851__$1;(statearr_31873_31905[1] = 17);
}
return cljs.core.constant$keyword$551;
} else
{if((state_val_31852 === 15))
{var inst_31831 = (state_31851[2]);var state_31851__$1 = state_31851;var statearr_31874_31906 = state_31851__$1;(statearr_31874_31906[2] = inst_31831);
(statearr_31874_31906[1] = 12);
return cljs.core.constant$keyword$551;
} else
{if((state_val_31852 === 16))
{var inst_31813 = (state_31851[9]);var inst_31822 = cljs.core.first(inst_31813);var state_31851__$1 = state_31851;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31851__$1,19,inst_31822);
} else
{if((state_val_31852 === 17))
{var state_31851__$1 = state_31851;var statearr_31875_31907 = state_31851__$1;(statearr_31875_31907[2] = null);
(statearr_31875_31907[1] = 18);
return cljs.core.constant$keyword$551;
} else
{if((state_val_31852 === 18))
{var inst_31819 = (state_31851[12]);var inst_31814 = (state_31851[10]);var inst_31827 = (state_31851[2]);var inst_31828 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(inst_31814,inst_31827);var inst_31813 = inst_31819;var inst_31814__$1 = inst_31828;var state_31851__$1 = (function (){var statearr_31876 = state_31851;(statearr_31876[9] = inst_31813);
(statearr_31876[10] = inst_31814__$1);
return statearr_31876;
})();var statearr_31877_31908 = state_31851__$1;(statearr_31877_31908[2] = null);
(statearr_31877_31908[1] = 11);
return cljs.core.constant$keyword$551;
} else
{if((state_val_31852 === 19))
{var inst_31824 = (state_31851[2]);var state_31851__$1 = state_31851;var statearr_31878_31909 = state_31851__$1;(statearr_31878_31909[2] = inst_31824);
(statearr_31878_31909[1] = 18);
return cljs.core.constant$keyword$551;
} else
{if((state_val_31852 === 20))
{var inst_31809 = (state_31851[7]);var state_31851__$1 = state_31851;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31851__$1,23,inst_31809);
} else
{if((state_val_31852 === 21))
{var state_31851__$1 = state_31851;var statearr_31879_31910 = state_31851__$1;(statearr_31879_31910[2] = null);
(statearr_31879_31910[1] = 22);
return cljs.core.constant$keyword$551;
} else
{if((state_val_31852 === 22))
{var inst_31840 = (state_31851[2]);var state_31851__$1 = state_31851;var statearr_31880_31911 = state_31851__$1;(statearr_31880_31911[2] = inst_31840);
(statearr_31880_31911[1] = 10);
return cljs.core.constant$keyword$551;
} else
{if((state_val_31852 === 23))
{var inst_31837 = (state_31851[2]);var state_31851__$1 = state_31851;var statearr_31881_31912 = state_31851__$1;(statearr_31881_31912[2] = inst_31837);
(statearr_31881_31912[1] = 22);
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
var state_machine__5548__auto____0 = (function (){var statearr_31885 = [null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_31885[0] = state_machine__5548__auto__);
(statearr_31885[1] = 1);
return statearr_31885;
});
var state_machine__5548__auto____1 = (function (state_31851){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__(state_31851);if(cljs.core.keyword_identical_QMARK_(result__5550__auto__,cljs.core.constant$keyword$551))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e31886){if((e31886 instanceof Object))
{var ex__5551__auto__ = e31886;var statearr_31887_31913 = state_31851;(statearr_31887_31913[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_31851);
return cljs.core.constant$keyword$551;
} else
{if(cljs.core.constant$keyword$540)
{throw e31886;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5549__auto__,cljs.core.constant$keyword$551))
{{
var G__31914 = state_31851;
state_31851 = G__31914;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_31851){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_31851);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_31888 = (f__5563__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5563__auto__.cljs$core$IFn$_invoke$arity$0() : f__5563__auto__.call(null));(statearr_31888[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto__);
return statearr_31888;
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
var G__31917__delegate = function (req_args){var temp__4090__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(request_handler,req_args);if(cljs.core.truth_(temp__4090__auto__))
{var r = temp__4090__auto__;var rseq = ((cljs.core.sequential_QMARK_(r))?r:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [r], null));var vec__31916 = rseq;var rcomm = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31916,0,null);var result_handler_args = cljs.core.nthnext(vec__31916,1);return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(ocomm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rcomm,result_handler_args], null));
} else
{return null;
}
};
var G__31917 = function (var_args){
var req_args = null;if (arguments.length > 0) {
  req_args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__31917__delegate.call(this,req_args);};
G__31917.cljs$lang$maxFixedArity = 0;
G__31917.cljs$lang$applyTo = (function (arglist__31918){
var req_args = cljs.core.seq(arglist__31918);
return G__31917__delegate(req_args);
});
G__31917.cljs$core$IFn$_invoke$arity$variadic = G__31917__delegate;
return G__31917;
})()
;
});
/**
* @param {...*} var_args
*/
clustermap.api.log_api = (function() { 
var log_api__delegate = function (f,args){var ch = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,args);var c__5562__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_31936){var state_val_31937 = (state_31936[1]);if((state_val_31937 === 2))
{var inst_31933 = (state_31936[2]);var inst_31934 = console.log(inst_31933);var state_31936__$1 = state_31936;return cljs.core.async.impl.ioc_helpers.return_chan(state_31936__$1,inst_31934);
} else
{if((state_val_31937 === 1))
{var state_31936__$1 = state_31936;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31936__$1,2,ch);
} else
{return null;
}
}
});return ((function (switch__5547__auto__){
return (function() {
var state_machine__5548__auto__ = null;
var state_machine__5548__auto____0 = (function (){var statearr_31941 = [null,null,null,null,null,null,null];(statearr_31941[0] = state_machine__5548__auto__);
(statearr_31941[1] = 1);
return statearr_31941;
});
var state_machine__5548__auto____1 = (function (state_31936){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__(state_31936);if(cljs.core.keyword_identical_QMARK_(result__5550__auto__,cljs.core.constant$keyword$551))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e31942){if((e31942 instanceof Object))
{var ex__5551__auto__ = e31942;var statearr_31943_31945 = state_31936;(statearr_31943_31945[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_31936);
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
var G__31946 = state_31936;
state_31936 = G__31946;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_31936){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_31936);
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
};
var log_api = function (f,var_args){
var args = null;if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return log_api__delegate.call(this,f,args);};
log_api.cljs$lang$maxFixedArity = 1;
log_api.cljs$lang$applyTo = (function (arglist__31947){
var f = cljs.core.first(arglist__31947);
var args = cljs.core.rest(arglist__31947);
return log_api__delegate(f,args);
});
log_api.cljs$core$IFn$_invoke$arity$variadic = log_api__delegate;
return log_api;
})()
;
clustermap.api.map_json_params = (function map_json_params(m){return clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__31950){var vec__31951 = p__31950;var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31951,0,null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31951,1,null);return [cljs.core.str(cljs.core.name(k)),cljs.core.str("="),cljs.core.str(JSON.stringify(cljs.core.clj__GT_js(v)))].join('');
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
boundarylines.cljs$lang$applyTo = (function (arglist__31952){
var id = cljs.core.first(arglist__31952);
arglist__31952 = cljs.core.next(arglist__31952);
var tolerance = cljs.core.first(arglist__31952);
var opts = cljs.core.rest(arglist__31952);
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
boundaryline_collection_index.cljs$lang$applyTo = (function (arglist__31953){
var id = cljs.core.first(arglist__31953);
var opts = cljs.core.rest(arglist__31953);
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
var portfolio_company_sites__delegate = function (p__31954){var vec__31956 = p__31954;var type_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31956,0,null);var type_ids__$1 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$566,100,cljs.core.constant$keyword$567,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$568,"desc"], null)], null)], null),type_ids], 0));return clustermap.api.GET([cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/portfolio-company-sites?"),cljs.core.str(clustermap.api.map_json_params(type_ids__$1))].join(''));
};
var portfolio_company_sites = function (var_args){
var p__31954 = null;if (arguments.length > 0) {
  p__31954 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_sites__delegate.call(this,p__31954);};
portfolio_company_sites.cljs$lang$maxFixedArity = 0;
portfolio_company_sites.cljs$lang$applyTo = (function (arglist__31957){
var p__31954 = cljs.core.seq(arglist__31957);
return portfolio_company_sites__delegate(p__31954);
});
portfolio_company_sites.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_sites__delegate;
return portfolio_company_sites;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_sites_by_company = (function() { 
var portfolio_company_sites_by_company__delegate = function (p__31958){var vec__31960 = p__31958;var type_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31960,0,null);var type_ids__$1 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$566,100,cljs.core.constant$keyword$567,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$568,"desc"], null)], null)], null),type_ids], 0));return clustermap.api.GET([cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/portfolio-company-sites-by-company?"),cljs.core.str(clustermap.api.map_json_params(type_ids__$1))].join(''));
};
var portfolio_company_sites_by_company = function (var_args){
var p__31958 = null;if (arguments.length > 0) {
  p__31958 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_sites_by_company__delegate.call(this,p__31958);};
portfolio_company_sites_by_company.cljs$lang$maxFixedArity = 0;
portfolio_company_sites_by_company.cljs$lang$applyTo = (function (arglist__31961){
var p__31958 = cljs.core.seq(arglist__31961);
return portfolio_company_sites_by_company__delegate(p__31958);
});
portfolio_company_sites_by_company.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_sites_by_company__delegate;
return portfolio_company_sites_by_company;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_locations = (function() { 
var portfolio_company_locations__delegate = function (p__31962){var vec__31964 = p__31962;var type_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31964,0,null);return clustermap.api.GET([cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/portfolio-company-locations?"),cljs.core.str(clustermap.api.map_json_params(type_ids))].join(''));
};
var portfolio_company_locations = function (var_args){
var p__31962 = null;if (arguments.length > 0) {
  p__31962 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_locations__delegate.call(this,p__31962);};
portfolio_company_locations.cljs$lang$maxFixedArity = 0;
portfolio_company_locations.cljs$lang$applyTo = (function (arglist__31965){
var p__31962 = cljs.core.seq(arglist__31965);
return portfolio_company_locations__delegate(p__31962);
});
portfolio_company_locations.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_locations__delegate;
return portfolio_company_locations;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_site_stats = (function() { 
var portfolio_company_site_stats__delegate = function (p__31966){var vec__31968 = p__31966;var type_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31968,0,null);return clustermap.api.GET([cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/portfolio-company-site-stats?"),cljs.core.str(clustermap.api.map_json_params(type_ids))].join(''));
};
var portfolio_company_site_stats = function (var_args){
var p__31966 = null;if (arguments.length > 0) {
  p__31966 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_site_stats__delegate.call(this,p__31966);};
portfolio_company_site_stats.cljs$lang$maxFixedArity = 0;
portfolio_company_site_stats.cljs$lang$applyTo = (function (arglist__31969){
var p__31966 = cljs.core.seq(arglist__31969);
return portfolio_company_site_stats__delegate(p__31966);
});
portfolio_company_site_stats.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_site_stats__delegate;
return portfolio_company_site_stats;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_site_account_timelines = (function() { 
var portfolio_company_site_account_timelines__delegate = function (p__31970){var vec__31972 = p__31970;var type_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31972,0,null);return clustermap.api.GET([cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/portfolio-company-site-account-timelines?"),cljs.core.str(clustermap.api.map_json_params(type_ids))].join(''));
};
var portfolio_company_site_account_timelines = function (var_args){
var p__31970 = null;if (arguments.length > 0) {
  p__31970 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_site_account_timelines__delegate.call(this,p__31970);};
portfolio_company_site_account_timelines.cljs$lang$maxFixedArity = 0;
portfolio_company_site_account_timelines.cljs$lang$applyTo = (function (arglist__31973){
var p__31970 = cljs.core.seq(arglist__31973);
return portfolio_company_site_account_timelines__delegate(p__31970);
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
var investment_account_timelines__delegate = function (p__31974){var vec__31976 = p__31974;var type_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31976,0,null);return clustermap.api.GET([cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/investment-account-timelines?"),cljs.core.str(clustermap.api.map_json_params(type_ids))].join(''));
};
var investment_account_timelines = function (var_args){
var p__31974 = null;if (arguments.length > 0) {
  p__31974 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return investment_account_timelines__delegate.call(this,p__31974);};
investment_account_timelines.cljs$lang$maxFixedArity = 0;
investment_account_timelines.cljs$lang$applyTo = (function (arglist__31977){
var p__31974 = cljs.core.seq(arglist__31977);
return investment_account_timelines__delegate(p__31974);
});
investment_account_timelines.cljs$core$IFn$_invoke$arity$variadic = investment_account_timelines__delegate;
return investment_account_timelines;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.investment_stats = (function() { 
var investment_stats__delegate = function (p__31978){var vec__31980 = p__31978;var type_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31980,0,null);return clustermap.api.GET([cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/investment-stats?"),cljs.core.str(clustermap.api.map_json_params(type_ids))].join(''));
};
var investment_stats = function (var_args){
var p__31978 = null;if (arguments.length > 0) {
  p__31978 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return investment_stats__delegate.call(this,p__31978);};
investment_stats.cljs$lang$maxFixedArity = 0;
investment_stats.cljs$lang$applyTo = (function (arglist__31981){
var p__31978 = cljs.core.seq(arglist__31981);
return investment_stats__delegate(p__31978);
});
investment_stats.cljs$core$IFn$_invoke$arity$variadic = investment_stats__delegate;
return investment_stats;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.investment_aggs = (function() { 
var investment_aggs__delegate = function (p__31982){var vec__31984 = p__31982;var type_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31984,0,null);var type_ids__$1 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$566,50,cljs.core.constant$keyword$569,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$570,"desc"], null)], null),type_ids], 0));return clustermap.api.GET([cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/investment-aggs?"),cljs.core.str(clustermap.api.map_json_params(type_ids__$1))].join(''));
};
var investment_aggs = function (var_args){
var p__31982 = null;if (arguments.length > 0) {
  p__31982 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return investment_aggs__delegate.call(this,p__31982);};
investment_aggs.cljs$lang$maxFixedArity = 0;
investment_aggs.cljs$lang$applyTo = (function (arglist__31985){
var p__31982 = cljs.core.seq(arglist__31985);
return investment_aggs__delegate(p__31982);
});
investment_aggs.cljs$core$IFn$_invoke$arity$variadic = investment_aggs__delegate;
return investment_aggs;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.investments = (function() { 
var investments__delegate = function (p__31986){var vec__31988 = p__31986;var type_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31988,0,null);var type_ids__$1 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$566,50,cljs.core.constant$keyword$569,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$571,"asc"], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$572,"asc"], null)], null)], null),type_ids], 0));return clustermap.api.GET([cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/investments?"),cljs.core.str(clustermap.api.map_json_params(type_ids__$1))].join(''));
};
var investments = function (var_args){
var p__31986 = null;if (arguments.length > 0) {
  p__31986 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return investments__delegate.call(this,p__31986);};
investments.cljs$lang$maxFixedArity = 0;
investments.cljs$lang$applyTo = (function (arglist__31989){
var p__31986 = cljs.core.seq(arglist__31989);
return investments__delegate(p__31986);
});
investments.cljs$core$IFn$_invoke$arity$variadic = investments__delegate;
return investments;
})()
;
