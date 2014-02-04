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
var GET__delegate = function (url,p__29929){var map__29931 = p__29929;var map__29931__$1 = ((cljs.core.seq_QMARK_.call(null,map__29931))?cljs.core.apply.call(null,cljs.core.hash_map,map__29931):map__29931);var raw = cljs.core.get.call(null,map__29931__$1,new cljs.core.Keyword(null,"raw","raw",1014016922));var comm = cljs.core.async.chan.call(null,1);goog.net.XhrIo.send(url,(function (event){cljs.core.async.put_BANG_.call(null,comm,(function (d){if(cljs.core.truth_(raw))
{return d;
} else
{return cljs.core.js__GT_clj.call(null,d,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",4191781672),true);
}
}).call(null,(JSON.parse.call(null,event.target.getResponseText())["data"])));
return cljs.core.async.close_BANG_.call(null,comm);
}));
return comm;
};
var GET = function (url,var_args){
var p__29929 = null;if (arguments.length > 1) {
  p__29929 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return GET__delegate.call(this,url,p__29929);};
GET.cljs$lang$maxFixedArity = 1;
GET.cljs$lang$applyTo = (function (arglist__29932){
var url = cljs.core.first(arglist__29932);
var p__29929 = cljs.core.rest(arglist__29932);
return GET__delegate(url,p__29929);
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
clustermap.api.ordered_api_results = (function ordered_api_results(ocomm,handler){var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_30065){var state_val_30066 = (state_30065[1]);if((state_val_30066 === 1))
{var state_30065__$1 = state_30065;var statearr_30067_30103 = state_30065__$1;(statearr_30067_30103[2] = null);
(statearr_30067_30103[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30066 === 2))
{var state_30065__$1 = state_30065;if(true)
{var statearr_30068_30104 = state_30065__$1;(statearr_30068_30104[1] = 4);
} else
{var statearr_30069_30105 = state_30065__$1;(statearr_30069_30105[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30066 === 3))
{var inst_30063 = (state_30065[2]);var state_30065__$1 = state_30065;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30065__$1,inst_30063);
} else
{if((state_val_30066 === 4))
{var state_30065__$1 = state_30065;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30065__$1,7,ocomm);
} else
{if((state_val_30066 === 5))
{var state_30065__$1 = state_30065;var statearr_30070_30106 = state_30065__$1;(statearr_30070_30106[2] = null);
(statearr_30070_30106[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30066 === 6))
{var inst_30061 = (state_30065[2]);var state_30065__$1 = state_30065;var statearr_30071_30107 = state_30065__$1;(statearr_30071_30107[2] = inst_30061);
(statearr_30071_30107[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30066 === 7))
{var inst_30023 = (state_30065[7]);var inst_30022 = (state_30065[2]);var inst_30023__$1 = cljs.core.nth.call(null,inst_30022,0,null);var inst_30024 = cljs.core.nth.call(null,inst_30022,1,null);var inst_30025 = cljs.core.sequential_QMARK_.call(null,inst_30023__$1);var state_30065__$1 = (function (){var statearr_30072 = state_30065;(statearr_30072[8] = inst_30024);
(statearr_30072[7] = inst_30023__$1);
return statearr_30072;
})();if(inst_30025)
{var statearr_30073_30108 = state_30065__$1;(statearr_30073_30108[1] = 8);
} else
{var statearr_30074_30109 = state_30065__$1;(statearr_30074_30109[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30066 === 8))
{var inst_30023 = (state_30065[7]);var inst_30027 = inst_30023;var inst_30028 = cljs.core.PersistentVector.EMPTY;var state_30065__$1 = (function (){var statearr_30075 = state_30065;(statearr_30075[9] = inst_30028);
(statearr_30075[10] = inst_30027);
return statearr_30075;
})();var statearr_30076_30110 = state_30065__$1;(statearr_30076_30110[2] = null);
(statearr_30076_30110[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30066 === 9))
{var inst_30023 = (state_30065[7]);var state_30065__$1 = state_30065;if(cljs.core.truth_(inst_30023))
{var statearr_30077_30111 = state_30065__$1;(statearr_30077_30111[1] = 20);
} else
{var statearr_30078_30112 = state_30065__$1;(statearr_30078_30112[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30066 === 10))
{var inst_30024 = (state_30065[8]);var inst_30056 = (state_30065[2]);var inst_30057 = cljs.core.apply.call(null,handler,inst_30056,inst_30024);var state_30065__$1 = (function (){var statearr_30079 = state_30065;(statearr_30079[11] = inst_30057);
return statearr_30079;
})();var statearr_30080_30113 = state_30065__$1;(statearr_30080_30113[2] = null);
(statearr_30080_30113[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30066 === 11))
{var inst_30027 = (state_30065[10]);var inst_30030 = cljs.core.empty_QMARK_.call(null,inst_30027);var state_30065__$1 = state_30065;if(inst_30030)
{var statearr_30081_30114 = state_30065__$1;(statearr_30081_30114[1] = 13);
} else
{var statearr_30082_30115 = state_30065__$1;(statearr_30082_30115[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30066 === 12))
{var inst_30047 = (state_30065[2]);var state_30065__$1 = state_30065;var statearr_30083_30116 = state_30065__$1;(statearr_30083_30116[2] = inst_30047);
(statearr_30083_30116[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30066 === 13))
{var inst_30028 = (state_30065[9]);var state_30065__$1 = state_30065;var statearr_30084_30117 = state_30065__$1;(statearr_30084_30117[2] = inst_30028);
(statearr_30084_30117[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30066 === 14))
{var inst_30027 = (state_30065[10]);var inst_30033 = cljs.core.rest.call(null,inst_30027);var inst_30034 = cljs.core.first.call(null,inst_30027);var state_30065__$1 = (function (){var statearr_30085 = state_30065;(statearr_30085[12] = inst_30033);
return statearr_30085;
})();if(cljs.core.truth_(inst_30034))
{var statearr_30086_30118 = state_30065__$1;(statearr_30086_30118[1] = 16);
} else
{var statearr_30087_30119 = state_30065__$1;(statearr_30087_30119[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30066 === 15))
{var inst_30045 = (state_30065[2]);var state_30065__$1 = state_30065;var statearr_30088_30120 = state_30065__$1;(statearr_30088_30120[2] = inst_30045);
(statearr_30088_30120[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30066 === 16))
{var inst_30027 = (state_30065[10]);var inst_30036 = cljs.core.first.call(null,inst_30027);var state_30065__$1 = state_30065;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30065__$1,19,inst_30036);
} else
{if((state_val_30066 === 17))
{var state_30065__$1 = state_30065;var statearr_30089_30121 = state_30065__$1;(statearr_30089_30121[2] = null);
(statearr_30089_30121[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30066 === 18))
{var inst_30028 = (state_30065[9]);var inst_30033 = (state_30065[12]);var inst_30041 = (state_30065[2]);var inst_30042 = cljs.core.conj.call(null,inst_30028,inst_30041);var inst_30027 = inst_30033;var inst_30028__$1 = inst_30042;var state_30065__$1 = (function (){var statearr_30090 = state_30065;(statearr_30090[9] = inst_30028__$1);
(statearr_30090[10] = inst_30027);
return statearr_30090;
})();var statearr_30091_30122 = state_30065__$1;(statearr_30091_30122[2] = null);
(statearr_30091_30122[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30066 === 19))
{var inst_30038 = (state_30065[2]);var state_30065__$1 = state_30065;var statearr_30092_30123 = state_30065__$1;(statearr_30092_30123[2] = inst_30038);
(statearr_30092_30123[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30066 === 20))
{var inst_30023 = (state_30065[7]);var state_30065__$1 = state_30065;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30065__$1,23,inst_30023);
} else
{if((state_val_30066 === 21))
{var state_30065__$1 = state_30065;var statearr_30093_30124 = state_30065__$1;(statearr_30093_30124[2] = null);
(statearr_30093_30124[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30066 === 22))
{var inst_30054 = (state_30065[2]);var state_30065__$1 = state_30065;var statearr_30094_30125 = state_30065__$1;(statearr_30094_30125[2] = inst_30054);
(statearr_30094_30125[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30066 === 23))
{var inst_30051 = (state_30065[2]);var state_30065__$1 = state_30065;var statearr_30095_30126 = state_30065__$1;(statearr_30095_30126[2] = inst_30051);
(statearr_30095_30126[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
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
var state_machine__5507__auto____0 = (function (){var statearr_30099 = [null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_30099[0] = state_machine__5507__auto__);
(statearr_30099[1] = 1);
return statearr_30099;
});
var state_machine__5507__auto____1 = (function (state_30065){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_30065);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e30100){if((e30100 instanceof Object))
{var ex__5510__auto__ = e30100;var statearr_30101_30127 = state_30065;(statearr_30101_30127[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30065);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e30100;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__30128 = state_30065;
state_30065 = G__30128;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_30065){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_30065);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_30102 = f__5522__auto__.call(null);(statearr_30102[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_30102;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5523__auto__);
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
clustermap.api.ordered_api = (function ordered_api(request_handler,result_handler){var ocomm = cljs.core.async.chan.call(null,cljs.core.async.sliding_buffer.call(null,1));var _ = clustermap.api.ordered_api_results.call(null,ocomm,result_handler);return (function() { 
var G__30131__delegate = function (req_args){var temp__4090__auto__ = cljs.core.apply.call(null,request_handler,req_args);if(cljs.core.truth_(temp__4090__auto__))
{var r = temp__4090__auto__;var rseq = ((cljs.core.sequential_QMARK_.call(null,r))?r:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [r], null));var vec__30130 = rseq;var rcomm = cljs.core.nth.call(null,vec__30130,0,null);var result_handler_args = cljs.core.nthnext.call(null,vec__30130,1);return cljs.core.async.put_BANG_.call(null,ocomm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rcomm,result_handler_args], null));
} else
{return null;
}
};
var G__30131 = function (var_args){
var req_args = null;if (arguments.length > 0) {
  req_args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__30131__delegate.call(this,req_args);};
G__30131.cljs$lang$maxFixedArity = 0;
G__30131.cljs$lang$applyTo = (function (arglist__30132){
var req_args = cljs.core.seq(arglist__30132);
return G__30131__delegate(req_args);
});
G__30131.cljs$core$IFn$_invoke$arity$variadic = G__30131__delegate;
return G__30131;
})()
;
});
/**
* @param {...*} var_args
*/
clustermap.api.log_api = (function() { 
var log_api__delegate = function (f,args){var ch = cljs.core.apply.call(null,f,args);var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_30150){var state_val_30151 = (state_30150[1]);if((state_val_30151 === 2))
{var inst_30147 = (state_30150[2]);var inst_30148 = console.log(inst_30147);var state_30150__$1 = state_30150;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30150__$1,inst_30148);
} else
{if((state_val_30151 === 1))
{var state_30150__$1 = state_30150;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30150__$1,2,ch);
} else
{return null;
}
}
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_30155 = [null,null,null,null,null,null,null];(statearr_30155[0] = state_machine__5507__auto__);
(statearr_30155[1] = 1);
return statearr_30155;
});
var state_machine__5507__auto____1 = (function (state_30150){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_30150);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e30156){if((e30156 instanceof Object))
{var ex__5510__auto__ = e30156;var statearr_30157_30159 = state_30150;(statearr_30157_30159[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30150);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e30156;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__30160 = state_30150;
state_30150 = G__30160;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_30150){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_30150);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_30158 = f__5522__auto__.call(null);(statearr_30158[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_30158;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5523__auto__);
}));
return c__5521__auto__;
};
var log_api = function (f,var_args){
var args = null;if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return log_api__delegate.call(this,f,args);};
log_api.cljs$lang$maxFixedArity = 1;
log_api.cljs$lang$applyTo = (function (arglist__30161){
var f = cljs.core.first(arglist__30161);
var args = cljs.core.rest(arglist__30161);
return log_api__delegate(f,args);
});
log_api.cljs$core$IFn$_invoke$arity$variadic = log_api__delegate;
return log_api;
})()
;
clustermap.api.map_json_params = (function map_json_params(m){return clojure.string.join.call(null,"&",cljs.core.map.call(null,(function (p__30164){var vec__30165 = p__30164;var k = cljs.core.nth.call(null,vec__30165,0,null);var v = cljs.core.nth.call(null,vec__30165,1,null);return [cljs.core.str(cljs.core.name.call(null,k)),cljs.core.str("="),cljs.core.str(JSON.stringify(cljs.core.clj__GT_js.call(null,v)))].join('');
}),m));
});
clustermap.api.api_prefix = config.api.prefix;
/**
* @param {...*} var_args
*/
clustermap.api.boundarylines = (function() { 
var boundarylines__delegate = function (id,tolerance,opts){return cljs.core.apply.call(null,clustermap.api.GET,[cljs.core.str("/api/boundarylines/"),cljs.core.str(id),cljs.core.str("/"),cljs.core.str(tolerance)].join(''),opts);
};
var boundarylines = function (id,tolerance,var_args){
var opts = null;if (arguments.length > 2) {
  opts = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return boundarylines__delegate.call(this,id,tolerance,opts);};
boundarylines.cljs$lang$maxFixedArity = 2;
boundarylines.cljs$lang$applyTo = (function (arglist__30166){
var id = cljs.core.first(arglist__30166);
arglist__30166 = cljs.core.next(arglist__30166);
var tolerance = cljs.core.first(arglist__30166);
var opts = cljs.core.rest(arglist__30166);
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
var boundaryline_collection_index__delegate = function (id,opts){return cljs.core.apply.call(null,clustermap.api.GET,[cljs.core.str("/api/boundaryline-collection-index/"),cljs.core.str(id)].join(''),opts);
};
var boundaryline_collection_index = function (id,var_args){
var opts = null;if (arguments.length > 1) {
  opts = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return boundaryline_collection_index__delegate.call(this,id,opts);};
boundaryline_collection_index.cljs$lang$maxFixedArity = 1;
boundaryline_collection_index.cljs$lang$applyTo = (function (arglist__30167){
var id = cljs.core.first(arglist__30167);
var opts = cljs.core.rest(arglist__30167);
return boundaryline_collection_index__delegate(id,opts);
});
boundaryline_collection_index.cljs$core$IFn$_invoke$arity$variadic = boundaryline_collection_index__delegate;
return boundaryline_collection_index;
})()
;
clustermap.api.search = (function search(q){if((cljs.core.count.call(null,clojure.string.trim.call(null,q)) > 0))
{return clustermap.api.GET.call(null,[cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/search?q="),cljs.core.str(q)].join(''));
} else
{return cljs.core.async.to_chan.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [{}], null));
}
});
clustermap.api.constituency = (function constituency(id){return clustermap.api.GET.call(null,[cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/constituencies/"),cljs.core.str(id)].join(''));
});
/**
* @param {...*} var_args
*/
clustermap.api.constituencies = (function() { 
var constituencies__delegate = function (p__30168){var vec__30170 = p__30168;var type_ids = cljs.core.nth.call(null,vec__30170,0,null);return clustermap.api.GET.call(null,"/api/",clustermap.api.api_prefix,"/constituencies?",clustermap.api.map_json_params.call(null,type_ids));
};
var constituencies = function (var_args){
var p__30168 = null;if (arguments.length > 0) {
  p__30168 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return constituencies__delegate.call(this,p__30168);};
constituencies.cljs$lang$maxFixedArity = 0;
constituencies.cljs$lang$applyTo = (function (arglist__30171){
var p__30168 = cljs.core.seq(arglist__30171);
return constituencies__delegate(p__30168);
});
constituencies.cljs$core$IFn$_invoke$arity$variadic = constituencies__delegate;
return constituencies;
})()
;
clustermap.api.portfolio_company = (function portfolio_company(id){return clustermap.api.GET.call(null,[cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/portfolio-companies/"),cljs.core.str(id)].join(''));
});
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_companies = (function() { 
var portfolio_companies__delegate = function (p__30172){var vec__30174 = p__30172;var type_ids = cljs.core.nth.call(null,vec__30174,0,null);return clustermap.api.GET.call(null,[cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/portfolio-companies?sort={\"!latest_turnover\":\"desc\"}&"),cljs.core.str(clustermap.api.map_json_params.call(null,type_ids))].join(''));
};
var portfolio_companies = function (var_args){
var p__30172 = null;if (arguments.length > 0) {
  p__30172 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_companies__delegate.call(this,p__30172);};
portfolio_companies.cljs$lang$maxFixedArity = 0;
portfolio_companies.cljs$lang$applyTo = (function (arglist__30175){
var p__30172 = cljs.core.seq(arglist__30175);
return portfolio_companies__delegate(p__30172);
});
portfolio_companies.cljs$core$IFn$_invoke$arity$variadic = portfolio_companies__delegate;
return portfolio_companies;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_stats = (function() { 
var portfolio_company_stats__delegate = function (p__30176){var vec__30178 = p__30176;var type_ids = cljs.core.nth.call(null,vec__30178,0,null);return clustermap.api.GET.call(null,[cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/portfolio-company-stats?"),cljs.core.str(clustermap.api.map_json_params.call(null,type_ids))].join(''));
};
var portfolio_company_stats = function (var_args){
var p__30176 = null;if (arguments.length > 0) {
  p__30176 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_stats__delegate.call(this,p__30176);};
portfolio_company_stats.cljs$lang$maxFixedArity = 0;
portfolio_company_stats.cljs$lang$applyTo = (function (arglist__30179){
var p__30176 = cljs.core.seq(arglist__30179);
return portfolio_company_stats__delegate(p__30176);
});
portfolio_company_stats.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_stats__delegate;
return portfolio_company_stats;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_account_stats = (function() { 
var portfolio_company_account_stats__delegate = function (p__30180){var vec__30182 = p__30180;var type_ids = cljs.core.nth.call(null,vec__30182,0,null);return clustermap.api.GET.call(null,[cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/portfolio-company-account-stats?"),cljs.core.str(clustermap.api.map_json_params.call(null,type_ids))].join(''));
};
var portfolio_company_account_stats = function (var_args){
var p__30180 = null;if (arguments.length > 0) {
  p__30180 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_account_stats__delegate.call(this,p__30180);};
portfolio_company_account_stats.cljs$lang$maxFixedArity = 0;
portfolio_company_account_stats.cljs$lang$applyTo = (function (arglist__30183){
var p__30180 = cljs.core.seq(arglist__30183);
return portfolio_company_account_stats__delegate(p__30180);
});
portfolio_company_account_stats.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_account_stats__delegate;
return portfolio_company_account_stats;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_sites = (function() { 
var portfolio_company_sites__delegate = function (p__30184){var vec__30186 = p__30184;var type_ids = cljs.core.nth.call(null,vec__30186,0,null);return clustermap.api.GET.call(null,[cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/portfolio-company-sites?"),cljs.core.str(clustermap.api.map_json_params.call(null,type_ids))].join(''));
};
var portfolio_company_sites = function (var_args){
var p__30184 = null;if (arguments.length > 0) {
  p__30184 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_sites__delegate.call(this,p__30184);};
portfolio_company_sites.cljs$lang$maxFixedArity = 0;
portfolio_company_sites.cljs$lang$applyTo = (function (arglist__30187){
var p__30184 = cljs.core.seq(arglist__30187);
return portfolio_company_sites__delegate(p__30184);
});
portfolio_company_sites.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_sites__delegate;
return portfolio_company_sites;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_locations = (function() { 
var portfolio_company_locations__delegate = function (p__30188){var vec__30190 = p__30188;var type_ids = cljs.core.nth.call(null,vec__30190,0,null);return clustermap.api.GET.call(null,[cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/portfolio-company-locations?"),cljs.core.str(clustermap.api.map_json_params.call(null,type_ids))].join(''));
};
var portfolio_company_locations = function (var_args){
var p__30188 = null;if (arguments.length > 0) {
  p__30188 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_locations__delegate.call(this,p__30188);};
portfolio_company_locations.cljs$lang$maxFixedArity = 0;
portfolio_company_locations.cljs$lang$applyTo = (function (arglist__30191){
var p__30188 = cljs.core.seq(arglist__30191);
return portfolio_company_locations__delegate(p__30188);
});
portfolio_company_locations.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_locations__delegate;
return portfolio_company_locations;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_site_stats = (function() { 
var portfolio_company_site_stats__delegate = function (p__30192){var vec__30194 = p__30192;var type_ids = cljs.core.nth.call(null,vec__30194,0,null);return clustermap.api.GET.call(null,[cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/portfolio-company-site-stats?"),cljs.core.str(clustermap.api.map_json_params.call(null,type_ids))].join(''));
};
var portfolio_company_site_stats = function (var_args){
var p__30192 = null;if (arguments.length > 0) {
  p__30192 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_site_stats__delegate.call(this,p__30192);};
portfolio_company_site_stats.cljs$lang$maxFixedArity = 0;
portfolio_company_site_stats.cljs$lang$applyTo = (function (arglist__30195){
var p__30192 = cljs.core.seq(arglist__30195);
return portfolio_company_site_stats__delegate(p__30192);
});
portfolio_company_site_stats.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_site_stats__delegate;
return portfolio_company_site_stats;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_site_account_timelines = (function() { 
var portfolio_company_site_account_timelines__delegate = function (p__30196){var vec__30198 = p__30196;var type_ids = cljs.core.nth.call(null,vec__30198,0,null);return clustermap.api.GET.call(null,[cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/portfolio-company-site-account-timelines?"),cljs.core.str(clustermap.api.map_json_params.call(null,type_ids))].join(''));
};
var portfolio_company_site_account_timelines = function (var_args){
var p__30196 = null;if (arguments.length > 0) {
  p__30196 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_site_account_timelines__delegate.call(this,p__30196);};
portfolio_company_site_account_timelines.cljs$lang$maxFixedArity = 0;
portfolio_company_site_account_timelines.cljs$lang$applyTo = (function (arglist__30199){
var p__30196 = cljs.core.seq(arglist__30199);
return portfolio_company_site_account_timelines__delegate(p__30196);
});
portfolio_company_site_account_timelines.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_site_account_timelines__delegate;
return portfolio_company_site_account_timelines;
})()
;
clustermap.api.investor_company = (function investor_company(id){return clustermap.api.GET.call(null,[cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/investor-companies/"),cljs.core.str(id)].join(''));
});
/**
* @param {...*} var_args
*/
clustermap.api.investor_comapnies = (function() { 
var investor_comapnies__delegate = function (p__30200){var vec__30202 = p__30200;var type_ids = cljs.core.nth.call(null,vec__30202,0,null);return clustermap.api.GET.call(null,[cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/investor-companies?"),cljs.core.str(clustermap.api.map_json_params.call(null,type_ids))].join(''));
};
var investor_comapnies = function (var_args){
var p__30200 = null;if (arguments.length > 0) {
  p__30200 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return investor_comapnies__delegate.call(this,p__30200);};
investor_comapnies.cljs$lang$maxFixedArity = 0;
investor_comapnies.cljs$lang$applyTo = (function (arglist__30203){
var p__30200 = cljs.core.seq(arglist__30203);
return investor_comapnies__delegate(p__30200);
});
investor_comapnies.cljs$core$IFn$_invoke$arity$variadic = investor_comapnies__delegate;
return investor_comapnies;
})()
;
