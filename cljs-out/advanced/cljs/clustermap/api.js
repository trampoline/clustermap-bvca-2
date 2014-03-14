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
var GET__delegate = function (url,p__31691){var map__31693 = p__31691;var map__31693__$1 = ((cljs.core.seq_QMARK_(map__31693))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31693):map__31693);var raw = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31693__$1,cljs.core.constant$keyword$565);var comm = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);goog.net.XhrIo.send(url,(function (event){cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,(function (d){if(cljs.core.truth_(raw))
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
var p__31691 = null;if (arguments.length > 1) {
  p__31691 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return GET__delegate.call(this,url,p__31691);};
GET.cljs$lang$maxFixedArity = 1;
GET.cljs$lang$applyTo = (function (arglist__31694){
var url = cljs.core.first(arglist__31694);
var p__31691 = cljs.core.rest(arglist__31694);
return GET__delegate(url,p__31691);
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
clustermap.api.ordered_api_results = (function ordered_api_results(ocomm,handler){var c__5562__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_31827){var state_val_31828 = (state_31827[1]);if((state_val_31828 === 1))
{var state_31827__$1 = state_31827;var statearr_31829_31865 = state_31827__$1;(statearr_31829_31865[2] = null);
(statearr_31829_31865[1] = 2);
return cljs.core.constant$keyword$551;
} else
{if((state_val_31828 === 2))
{var state_31827__$1 = state_31827;if(true)
{var statearr_31830_31866 = state_31827__$1;(statearr_31830_31866[1] = 4);
} else
{var statearr_31831_31867 = state_31827__$1;(statearr_31831_31867[1] = 5);
}
return cljs.core.constant$keyword$551;
} else
{if((state_val_31828 === 3))
{var inst_31825 = (state_31827[2]);var state_31827__$1 = state_31827;return cljs.core.async.impl.ioc_helpers.return_chan(state_31827__$1,inst_31825);
} else
{if((state_val_31828 === 4))
{var state_31827__$1 = state_31827;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31827__$1,7,ocomm);
} else
{if((state_val_31828 === 5))
{var state_31827__$1 = state_31827;var statearr_31832_31868 = state_31827__$1;(statearr_31832_31868[2] = null);
(statearr_31832_31868[1] = 6);
return cljs.core.constant$keyword$551;
} else
{if((state_val_31828 === 6))
{var inst_31823 = (state_31827[2]);var state_31827__$1 = state_31827;var statearr_31833_31869 = state_31827__$1;(statearr_31833_31869[2] = inst_31823);
(statearr_31833_31869[1] = 3);
return cljs.core.constant$keyword$551;
} else
{if((state_val_31828 === 7))
{var inst_31785 = (state_31827[7]);var inst_31784 = (state_31827[2]);var inst_31785__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31784,0,null);var inst_31786 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31784,1,null);var inst_31787 = cljs.core.sequential_QMARK_(inst_31785__$1);var state_31827__$1 = (function (){var statearr_31834 = state_31827;(statearr_31834[7] = inst_31785__$1);
(statearr_31834[8] = inst_31786);
return statearr_31834;
})();if(inst_31787)
{var statearr_31835_31870 = state_31827__$1;(statearr_31835_31870[1] = 8);
} else
{var statearr_31836_31871 = state_31827__$1;(statearr_31836_31871[1] = 9);
}
return cljs.core.constant$keyword$551;
} else
{if((state_val_31828 === 8))
{var inst_31785 = (state_31827[7]);var inst_31789 = inst_31785;var inst_31790 = cljs.core.PersistentVector.EMPTY;var state_31827__$1 = (function (){var statearr_31837 = state_31827;(statearr_31837[9] = inst_31789);
(statearr_31837[10] = inst_31790);
return statearr_31837;
})();var statearr_31838_31872 = state_31827__$1;(statearr_31838_31872[2] = null);
(statearr_31838_31872[1] = 11);
return cljs.core.constant$keyword$551;
} else
{if((state_val_31828 === 9))
{var inst_31785 = (state_31827[7]);var state_31827__$1 = state_31827;if(cljs.core.truth_(inst_31785))
{var statearr_31839_31873 = state_31827__$1;(statearr_31839_31873[1] = 20);
} else
{var statearr_31840_31874 = state_31827__$1;(statearr_31840_31874[1] = 21);
}
return cljs.core.constant$keyword$551;
} else
{if((state_val_31828 === 10))
{var inst_31786 = (state_31827[8]);var inst_31818 = (state_31827[2]);var inst_31819 = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(handler,inst_31818,inst_31786);var state_31827__$1 = (function (){var statearr_31841 = state_31827;(statearr_31841[11] = inst_31819);
return statearr_31841;
})();var statearr_31842_31875 = state_31827__$1;(statearr_31842_31875[2] = null);
(statearr_31842_31875[1] = 2);
return cljs.core.constant$keyword$551;
} else
{if((state_val_31828 === 11))
{var inst_31789 = (state_31827[9]);var inst_31792 = cljs.core.empty_QMARK_(inst_31789);var state_31827__$1 = state_31827;if(inst_31792)
{var statearr_31843_31876 = state_31827__$1;(statearr_31843_31876[1] = 13);
} else
{var statearr_31844_31877 = state_31827__$1;(statearr_31844_31877[1] = 14);
}
return cljs.core.constant$keyword$551;
} else
{if((state_val_31828 === 12))
{var inst_31809 = (state_31827[2]);var state_31827__$1 = state_31827;var statearr_31845_31878 = state_31827__$1;(statearr_31845_31878[2] = inst_31809);
(statearr_31845_31878[1] = 10);
return cljs.core.constant$keyword$551;
} else
{if((state_val_31828 === 13))
{var inst_31790 = (state_31827[10]);var state_31827__$1 = state_31827;var statearr_31846_31879 = state_31827__$1;(statearr_31846_31879[2] = inst_31790);
(statearr_31846_31879[1] = 15);
return cljs.core.constant$keyword$551;
} else
{if((state_val_31828 === 14))
{var inst_31789 = (state_31827[9]);var inst_31795 = cljs.core.rest(inst_31789);var inst_31796 = cljs.core.first(inst_31789);var state_31827__$1 = (function (){var statearr_31847 = state_31827;(statearr_31847[12] = inst_31795);
return statearr_31847;
})();if(cljs.core.truth_(inst_31796))
{var statearr_31848_31880 = state_31827__$1;(statearr_31848_31880[1] = 16);
} else
{var statearr_31849_31881 = state_31827__$1;(statearr_31849_31881[1] = 17);
}
return cljs.core.constant$keyword$551;
} else
{if((state_val_31828 === 15))
{var inst_31807 = (state_31827[2]);var state_31827__$1 = state_31827;var statearr_31850_31882 = state_31827__$1;(statearr_31850_31882[2] = inst_31807);
(statearr_31850_31882[1] = 12);
return cljs.core.constant$keyword$551;
} else
{if((state_val_31828 === 16))
{var inst_31789 = (state_31827[9]);var inst_31798 = cljs.core.first(inst_31789);var state_31827__$1 = state_31827;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31827__$1,19,inst_31798);
} else
{if((state_val_31828 === 17))
{var state_31827__$1 = state_31827;var statearr_31851_31883 = state_31827__$1;(statearr_31851_31883[2] = null);
(statearr_31851_31883[1] = 18);
return cljs.core.constant$keyword$551;
} else
{if((state_val_31828 === 18))
{var inst_31790 = (state_31827[10]);var inst_31795 = (state_31827[12]);var inst_31803 = (state_31827[2]);var inst_31804 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(inst_31790,inst_31803);var inst_31789 = inst_31795;var inst_31790__$1 = inst_31804;var state_31827__$1 = (function (){var statearr_31852 = state_31827;(statearr_31852[9] = inst_31789);
(statearr_31852[10] = inst_31790__$1);
return statearr_31852;
})();var statearr_31853_31884 = state_31827__$1;(statearr_31853_31884[2] = null);
(statearr_31853_31884[1] = 11);
return cljs.core.constant$keyword$551;
} else
{if((state_val_31828 === 19))
{var inst_31800 = (state_31827[2]);var state_31827__$1 = state_31827;var statearr_31854_31885 = state_31827__$1;(statearr_31854_31885[2] = inst_31800);
(statearr_31854_31885[1] = 18);
return cljs.core.constant$keyword$551;
} else
{if((state_val_31828 === 20))
{var inst_31785 = (state_31827[7]);var state_31827__$1 = state_31827;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31827__$1,23,inst_31785);
} else
{if((state_val_31828 === 21))
{var state_31827__$1 = state_31827;var statearr_31855_31886 = state_31827__$1;(statearr_31855_31886[2] = null);
(statearr_31855_31886[1] = 22);
return cljs.core.constant$keyword$551;
} else
{if((state_val_31828 === 22))
{var inst_31816 = (state_31827[2]);var state_31827__$1 = state_31827;var statearr_31856_31887 = state_31827__$1;(statearr_31856_31887[2] = inst_31816);
(statearr_31856_31887[1] = 10);
return cljs.core.constant$keyword$551;
} else
{if((state_val_31828 === 23))
{var inst_31813 = (state_31827[2]);var state_31827__$1 = state_31827;var statearr_31857_31888 = state_31827__$1;(statearr_31857_31888[2] = inst_31813);
(statearr_31857_31888[1] = 22);
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
var state_machine__5548__auto____0 = (function (){var statearr_31861 = [null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_31861[0] = state_machine__5548__auto__);
(statearr_31861[1] = 1);
return statearr_31861;
});
var state_machine__5548__auto____1 = (function (state_31827){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__(state_31827);if(cljs.core.keyword_identical_QMARK_(result__5550__auto__,cljs.core.constant$keyword$551))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e31862){if((e31862 instanceof Object))
{var ex__5551__auto__ = e31862;var statearr_31863_31889 = state_31827;(statearr_31863_31889[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_31827);
return cljs.core.constant$keyword$551;
} else
{if(cljs.core.constant$keyword$540)
{throw e31862;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5549__auto__,cljs.core.constant$keyword$551))
{{
var G__31890 = state_31827;
state_31827 = G__31890;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_31827){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_31827);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_31864 = (f__5563__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5563__auto__.cljs$core$IFn$_invoke$arity$0() : f__5563__auto__.call(null));(statearr_31864[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto__);
return statearr_31864;
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
var G__31893__delegate = function (req_args){var temp__4090__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(request_handler,req_args);if(cljs.core.truth_(temp__4090__auto__))
{var r = temp__4090__auto__;var rseq = ((cljs.core.sequential_QMARK_(r))?r:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [r], null));var vec__31892 = rseq;var rcomm = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31892,0,null);var result_handler_args = cljs.core.nthnext(vec__31892,1);return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(ocomm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rcomm,result_handler_args], null));
} else
{return null;
}
};
var G__31893 = function (var_args){
var req_args = null;if (arguments.length > 0) {
  req_args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__31893__delegate.call(this,req_args);};
G__31893.cljs$lang$maxFixedArity = 0;
G__31893.cljs$lang$applyTo = (function (arglist__31894){
var req_args = cljs.core.seq(arglist__31894);
return G__31893__delegate(req_args);
});
G__31893.cljs$core$IFn$_invoke$arity$variadic = G__31893__delegate;
return G__31893;
})()
;
});
/**
* @param {...*} var_args
*/
clustermap.api.log_api = (function() { 
var log_api__delegate = function (f,args){var ch = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,args);var c__5562__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_31912){var state_val_31913 = (state_31912[1]);if((state_val_31913 === 2))
{var inst_31909 = (state_31912[2]);var inst_31910 = console.log(inst_31909);var state_31912__$1 = state_31912;return cljs.core.async.impl.ioc_helpers.return_chan(state_31912__$1,inst_31910);
} else
{if((state_val_31913 === 1))
{var state_31912__$1 = state_31912;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31912__$1,2,ch);
} else
{return null;
}
}
});return ((function (switch__5547__auto__){
return (function() {
var state_machine__5548__auto__ = null;
var state_machine__5548__auto____0 = (function (){var statearr_31917 = [null,null,null,null,null,null,null];(statearr_31917[0] = state_machine__5548__auto__);
(statearr_31917[1] = 1);
return statearr_31917;
});
var state_machine__5548__auto____1 = (function (state_31912){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__(state_31912);if(cljs.core.keyword_identical_QMARK_(result__5550__auto__,cljs.core.constant$keyword$551))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e31918){if((e31918 instanceof Object))
{var ex__5551__auto__ = e31918;var statearr_31919_31921 = state_31912;(statearr_31919_31921[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_31912);
return cljs.core.constant$keyword$551;
} else
{if(cljs.core.constant$keyword$540)
{throw e31918;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5549__auto__,cljs.core.constant$keyword$551))
{{
var G__31922 = state_31912;
state_31912 = G__31922;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_31912){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_31912);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_31920 = (f__5563__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5563__auto__.cljs$core$IFn$_invoke$arity$0() : f__5563__auto__.call(null));(statearr_31920[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto__);
return statearr_31920;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5564__auto__);
}));
return c__5562__auto__;
};
var log_api = function (f,var_args){
var args = null;if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return log_api__delegate.call(this,f,args);};
log_api.cljs$lang$maxFixedArity = 1;
log_api.cljs$lang$applyTo = (function (arglist__31923){
var f = cljs.core.first(arglist__31923);
var args = cljs.core.rest(arglist__31923);
return log_api__delegate(f,args);
});
log_api.cljs$core$IFn$_invoke$arity$variadic = log_api__delegate;
return log_api;
})()
;
clustermap.api.map_json_params = (function map_json_params(m){return clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__31926){var vec__31927 = p__31926;var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31927,0,null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31927,1,null);return [cljs.core.str(cljs.core.name(k)),cljs.core.str("="),cljs.core.str(JSON.stringify(cljs.core.clj__GT_js(v)))].join('');
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
boundarylines.cljs$lang$applyTo = (function (arglist__31928){
var id = cljs.core.first(arglist__31928);
arglist__31928 = cljs.core.next(arglist__31928);
var tolerance = cljs.core.first(arglist__31928);
var opts = cljs.core.rest(arglist__31928);
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
boundaryline_collection_index.cljs$lang$applyTo = (function (arglist__31929){
var id = cljs.core.first(arglist__31929);
var opts = cljs.core.rest(arglist__31929);
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
var portfolio_company_sites__delegate = function (p__31930){var vec__31932 = p__31930;var type_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31932,0,null);var type_ids__$1 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$566,100,cljs.core.constant$keyword$567,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$568,"desc"], null)], null)], null),type_ids], 0));return clustermap.api.GET([cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/portfolio-company-sites?"),cljs.core.str(clustermap.api.map_json_params(type_ids__$1))].join(''));
};
var portfolio_company_sites = function (var_args){
var p__31930 = null;if (arguments.length > 0) {
  p__31930 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_sites__delegate.call(this,p__31930);};
portfolio_company_sites.cljs$lang$maxFixedArity = 0;
portfolio_company_sites.cljs$lang$applyTo = (function (arglist__31933){
var p__31930 = cljs.core.seq(arglist__31933);
return portfolio_company_sites__delegate(p__31930);
});
portfolio_company_sites.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_sites__delegate;
return portfolio_company_sites;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_sites_by_company = (function() { 
var portfolio_company_sites_by_company__delegate = function (p__31934){var vec__31936 = p__31934;var type_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31936,0,null);var type_ids__$1 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$566,100,cljs.core.constant$keyword$567,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$568,"desc"], null)], null)], null),type_ids], 0));return clustermap.api.GET([cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/portfolio-company-sites-by-company?"),cljs.core.str(clustermap.api.map_json_params(type_ids__$1))].join(''));
};
var portfolio_company_sites_by_company = function (var_args){
var p__31934 = null;if (arguments.length > 0) {
  p__31934 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_sites_by_company__delegate.call(this,p__31934);};
portfolio_company_sites_by_company.cljs$lang$maxFixedArity = 0;
portfolio_company_sites_by_company.cljs$lang$applyTo = (function (arglist__31937){
var p__31934 = cljs.core.seq(arglist__31937);
return portfolio_company_sites_by_company__delegate(p__31934);
});
portfolio_company_sites_by_company.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_sites_by_company__delegate;
return portfolio_company_sites_by_company;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_locations = (function() { 
var portfolio_company_locations__delegate = function (p__31938){var vec__31940 = p__31938;var type_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31940,0,null);return clustermap.api.GET([cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/portfolio-company-locations?"),cljs.core.str(clustermap.api.map_json_params(type_ids))].join(''));
};
var portfolio_company_locations = function (var_args){
var p__31938 = null;if (arguments.length > 0) {
  p__31938 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_locations__delegate.call(this,p__31938);};
portfolio_company_locations.cljs$lang$maxFixedArity = 0;
portfolio_company_locations.cljs$lang$applyTo = (function (arglist__31941){
var p__31938 = cljs.core.seq(arglist__31941);
return portfolio_company_locations__delegate(p__31938);
});
portfolio_company_locations.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_locations__delegate;
return portfolio_company_locations;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_site_stats = (function() { 
var portfolio_company_site_stats__delegate = function (p__31942){var vec__31944 = p__31942;var type_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31944,0,null);return clustermap.api.GET([cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/portfolio-company-site-stats?"),cljs.core.str(clustermap.api.map_json_params(type_ids))].join(''));
};
var portfolio_company_site_stats = function (var_args){
var p__31942 = null;if (arguments.length > 0) {
  p__31942 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_site_stats__delegate.call(this,p__31942);};
portfolio_company_site_stats.cljs$lang$maxFixedArity = 0;
portfolio_company_site_stats.cljs$lang$applyTo = (function (arglist__31945){
var p__31942 = cljs.core.seq(arglist__31945);
return portfolio_company_site_stats__delegate(p__31942);
});
portfolio_company_site_stats.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_site_stats__delegate;
return portfolio_company_site_stats;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_site_account_timelines = (function() { 
var portfolio_company_site_account_timelines__delegate = function (p__31946){var vec__31948 = p__31946;var type_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31948,0,null);return clustermap.api.GET([cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/portfolio-company-site-account-timelines?"),cljs.core.str(clustermap.api.map_json_params(type_ids))].join(''));
};
var portfolio_company_site_account_timelines = function (var_args){
var p__31946 = null;if (arguments.length > 0) {
  p__31946 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_site_account_timelines__delegate.call(this,p__31946);};
portfolio_company_site_account_timelines.cljs$lang$maxFixedArity = 0;
portfolio_company_site_account_timelines.cljs$lang$applyTo = (function (arglist__31949){
var p__31946 = cljs.core.seq(arglist__31949);
return portfolio_company_site_account_timelines__delegate(p__31946);
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
var investment_account_timelines__delegate = function (p__31950){var vec__31952 = p__31950;var type_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31952,0,null);return clustermap.api.GET([cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/investment-account-timelines?"),cljs.core.str(clustermap.api.map_json_params(type_ids))].join(''));
};
var investment_account_timelines = function (var_args){
var p__31950 = null;if (arguments.length > 0) {
  p__31950 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return investment_account_timelines__delegate.call(this,p__31950);};
investment_account_timelines.cljs$lang$maxFixedArity = 0;
investment_account_timelines.cljs$lang$applyTo = (function (arglist__31953){
var p__31950 = cljs.core.seq(arglist__31953);
return investment_account_timelines__delegate(p__31950);
});
investment_account_timelines.cljs$core$IFn$_invoke$arity$variadic = investment_account_timelines__delegate;
return investment_account_timelines;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.investment_stats = (function() { 
var investment_stats__delegate = function (p__31954){var vec__31956 = p__31954;var type_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31956,0,null);return clustermap.api.GET([cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/investment-stats?"),cljs.core.str(clustermap.api.map_json_params(type_ids))].join(''));
};
var investment_stats = function (var_args){
var p__31954 = null;if (arguments.length > 0) {
  p__31954 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return investment_stats__delegate.call(this,p__31954);};
investment_stats.cljs$lang$maxFixedArity = 0;
investment_stats.cljs$lang$applyTo = (function (arglist__31957){
var p__31954 = cljs.core.seq(arglist__31957);
return investment_stats__delegate(p__31954);
});
investment_stats.cljs$core$IFn$_invoke$arity$variadic = investment_stats__delegate;
return investment_stats;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.investment_aggs = (function() { 
var investment_aggs__delegate = function (p__31958){var vec__31960 = p__31958;var type_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31960,0,null);var type_ids__$1 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$566,50,cljs.core.constant$keyword$569,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$570,"desc"], null)], null),type_ids], 0));return clustermap.api.GET([cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/investment-aggs?"),cljs.core.str(clustermap.api.map_json_params(type_ids__$1))].join(''));
};
var investment_aggs = function (var_args){
var p__31958 = null;if (arguments.length > 0) {
  p__31958 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return investment_aggs__delegate.call(this,p__31958);};
investment_aggs.cljs$lang$maxFixedArity = 0;
investment_aggs.cljs$lang$applyTo = (function (arglist__31961){
var p__31958 = cljs.core.seq(arglist__31961);
return investment_aggs__delegate(p__31958);
});
investment_aggs.cljs$core$IFn$_invoke$arity$variadic = investment_aggs__delegate;
return investment_aggs;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.investments = (function() { 
var investments__delegate = function (p__31962){var vec__31964 = p__31962;var type_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31964,0,null);var type_ids__$1 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$566,50,cljs.core.constant$keyword$569,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$571,"asc"], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$572,"asc"], null)], null)], null),type_ids], 0));return clustermap.api.GET([cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/investments?"),cljs.core.str(clustermap.api.map_json_params(type_ids__$1))].join(''));
};
var investments = function (var_args){
var p__31962 = null;if (arguments.length > 0) {
  p__31962 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return investments__delegate.call(this,p__31962);};
investments.cljs$lang$maxFixedArity = 0;
investments.cljs$lang$applyTo = (function (arglist__31965){
var p__31962 = cljs.core.seq(arglist__31965);
return investments__delegate(p__31962);
});
investments.cljs$core$IFn$_invoke$arity$variadic = investments__delegate;
return investments;
})()
;
