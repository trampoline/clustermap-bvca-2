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
var GET__delegate = function (url,p__30932){var map__30934 = p__30932;var map__30934__$1 = ((cljs.core.seq_QMARK_.call(null,map__30934))?cljs.core.apply.call(null,cljs.core.hash_map,map__30934):map__30934);var raw = cljs.core.get.call(null,map__30934__$1,new cljs.core.Keyword(null,"raw","raw",1014016922));var comm = cljs.core.async.chan.call(null,1);goog.net.XhrIo.send(url,(function (event){cljs.core.async.put_BANG_.call(null,comm,(function (d){if(cljs.core.truth_(raw))
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
var p__30932 = null;if (arguments.length > 1) {
  p__30932 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return GET__delegate.call(this,url,p__30932);};
GET.cljs$lang$maxFixedArity = 1;
GET.cljs$lang$applyTo = (function (arglist__30935){
var url = cljs.core.first(arglist__30935);
var p__30932 = cljs.core.rest(arglist__30935);
return GET__delegate(url,p__30932);
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
clustermap.api.ordered_api_results = (function ordered_api_results(ocomm,handler){var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_31068){var state_val_31069 = (state_31068[1]);if((state_val_31069 === 1))
{var state_31068__$1 = state_31068;var statearr_31070_31106 = state_31068__$1;(statearr_31070_31106[2] = null);
(statearr_31070_31106[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31069 === 2))
{var state_31068__$1 = state_31068;if(true)
{var statearr_31071_31107 = state_31068__$1;(statearr_31071_31107[1] = 4);
} else
{var statearr_31072_31108 = state_31068__$1;(statearr_31072_31108[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31069 === 3))
{var inst_31066 = (state_31068[2]);var state_31068__$1 = state_31068;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31068__$1,inst_31066);
} else
{if((state_val_31069 === 4))
{var state_31068__$1 = state_31068;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31068__$1,7,ocomm);
} else
{if((state_val_31069 === 5))
{var state_31068__$1 = state_31068;var statearr_31073_31109 = state_31068__$1;(statearr_31073_31109[2] = null);
(statearr_31073_31109[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31069 === 6))
{var inst_31064 = (state_31068[2]);var state_31068__$1 = state_31068;var statearr_31074_31110 = state_31068__$1;(statearr_31074_31110[2] = inst_31064);
(statearr_31074_31110[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31069 === 7))
{var inst_31026 = (state_31068[7]);var inst_31025 = (state_31068[2]);var inst_31026__$1 = cljs.core.nth.call(null,inst_31025,0,null);var inst_31027 = cljs.core.nth.call(null,inst_31025,1,null);var inst_31028 = cljs.core.sequential_QMARK_.call(null,inst_31026__$1);var state_31068__$1 = (function (){var statearr_31075 = state_31068;(statearr_31075[7] = inst_31026__$1);
(statearr_31075[8] = inst_31027);
return statearr_31075;
})();if(inst_31028)
{var statearr_31076_31111 = state_31068__$1;(statearr_31076_31111[1] = 8);
} else
{var statearr_31077_31112 = state_31068__$1;(statearr_31077_31112[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31069 === 8))
{var inst_31026 = (state_31068[7]);var inst_31030 = inst_31026;var inst_31031 = cljs.core.PersistentVector.EMPTY;var state_31068__$1 = (function (){var statearr_31078 = state_31068;(statearr_31078[9] = inst_31030);
(statearr_31078[10] = inst_31031);
return statearr_31078;
})();var statearr_31079_31113 = state_31068__$1;(statearr_31079_31113[2] = null);
(statearr_31079_31113[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31069 === 9))
{var inst_31026 = (state_31068[7]);var state_31068__$1 = state_31068;if(cljs.core.truth_(inst_31026))
{var statearr_31080_31114 = state_31068__$1;(statearr_31080_31114[1] = 20);
} else
{var statearr_31081_31115 = state_31068__$1;(statearr_31081_31115[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31069 === 10))
{var inst_31027 = (state_31068[8]);var inst_31059 = (state_31068[2]);var inst_31060 = cljs.core.apply.call(null,handler,inst_31059,inst_31027);var state_31068__$1 = (function (){var statearr_31082 = state_31068;(statearr_31082[11] = inst_31060);
return statearr_31082;
})();var statearr_31083_31116 = state_31068__$1;(statearr_31083_31116[2] = null);
(statearr_31083_31116[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31069 === 11))
{var inst_31030 = (state_31068[9]);var inst_31033 = cljs.core.empty_QMARK_.call(null,inst_31030);var state_31068__$1 = state_31068;if(inst_31033)
{var statearr_31084_31117 = state_31068__$1;(statearr_31084_31117[1] = 13);
} else
{var statearr_31085_31118 = state_31068__$1;(statearr_31085_31118[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31069 === 12))
{var inst_31050 = (state_31068[2]);var state_31068__$1 = state_31068;var statearr_31086_31119 = state_31068__$1;(statearr_31086_31119[2] = inst_31050);
(statearr_31086_31119[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31069 === 13))
{var inst_31031 = (state_31068[10]);var state_31068__$1 = state_31068;var statearr_31087_31120 = state_31068__$1;(statearr_31087_31120[2] = inst_31031);
(statearr_31087_31120[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31069 === 14))
{var inst_31030 = (state_31068[9]);var inst_31036 = cljs.core.rest.call(null,inst_31030);var inst_31037 = cljs.core.first.call(null,inst_31030);var state_31068__$1 = (function (){var statearr_31088 = state_31068;(statearr_31088[12] = inst_31036);
return statearr_31088;
})();if(cljs.core.truth_(inst_31037))
{var statearr_31089_31121 = state_31068__$1;(statearr_31089_31121[1] = 16);
} else
{var statearr_31090_31122 = state_31068__$1;(statearr_31090_31122[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31069 === 15))
{var inst_31048 = (state_31068[2]);var state_31068__$1 = state_31068;var statearr_31091_31123 = state_31068__$1;(statearr_31091_31123[2] = inst_31048);
(statearr_31091_31123[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31069 === 16))
{var inst_31030 = (state_31068[9]);var inst_31039 = cljs.core.first.call(null,inst_31030);var state_31068__$1 = state_31068;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31068__$1,19,inst_31039);
} else
{if((state_val_31069 === 17))
{var state_31068__$1 = state_31068;var statearr_31092_31124 = state_31068__$1;(statearr_31092_31124[2] = null);
(statearr_31092_31124[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31069 === 18))
{var inst_31031 = (state_31068[10]);var inst_31036 = (state_31068[12]);var inst_31044 = (state_31068[2]);var inst_31045 = cljs.core.conj.call(null,inst_31031,inst_31044);var inst_31030 = inst_31036;var inst_31031__$1 = inst_31045;var state_31068__$1 = (function (){var statearr_31093 = state_31068;(statearr_31093[9] = inst_31030);
(statearr_31093[10] = inst_31031__$1);
return statearr_31093;
})();var statearr_31094_31125 = state_31068__$1;(statearr_31094_31125[2] = null);
(statearr_31094_31125[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31069 === 19))
{var inst_31041 = (state_31068[2]);var state_31068__$1 = state_31068;var statearr_31095_31126 = state_31068__$1;(statearr_31095_31126[2] = inst_31041);
(statearr_31095_31126[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31069 === 20))
{var inst_31026 = (state_31068[7]);var state_31068__$1 = state_31068;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31068__$1,23,inst_31026);
} else
{if((state_val_31069 === 21))
{var state_31068__$1 = state_31068;var statearr_31096_31127 = state_31068__$1;(statearr_31096_31127[2] = null);
(statearr_31096_31127[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31069 === 22))
{var inst_31057 = (state_31068[2]);var state_31068__$1 = state_31068;var statearr_31097_31128 = state_31068__$1;(statearr_31097_31128[2] = inst_31057);
(statearr_31097_31128[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31069 === 23))
{var inst_31054 = (state_31068[2]);var state_31068__$1 = state_31068;var statearr_31098_31129 = state_31068__$1;(statearr_31098_31129[2] = inst_31054);
(statearr_31098_31129[1] = 22);
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
var state_machine__5507__auto____0 = (function (){var statearr_31102 = [null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_31102[0] = state_machine__5507__auto__);
(statearr_31102[1] = 1);
return statearr_31102;
});
var state_machine__5507__auto____1 = (function (state_31068){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_31068);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e31103){if((e31103 instanceof Object))
{var ex__5510__auto__ = e31103;var statearr_31104_31130 = state_31068;(statearr_31104_31130[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31068);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e31103;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__31131 = state_31068;
state_31068 = G__31131;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_31068){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_31068);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_31105 = f__5522__auto__.call(null);(statearr_31105[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_31105;
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
var G__31134__delegate = function (req_args){var temp__4090__auto__ = cljs.core.apply.call(null,request_handler,req_args);if(cljs.core.truth_(temp__4090__auto__))
{var r = temp__4090__auto__;var rseq = ((cljs.core.sequential_QMARK_.call(null,r))?r:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [r], null));var vec__31133 = rseq;var rcomm = cljs.core.nth.call(null,vec__31133,0,null);var result_handler_args = cljs.core.nthnext.call(null,vec__31133,1);return cljs.core.async.put_BANG_.call(null,ocomm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rcomm,result_handler_args], null));
} else
{return null;
}
};
var G__31134 = function (var_args){
var req_args = null;if (arguments.length > 0) {
  req_args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__31134__delegate.call(this,req_args);};
G__31134.cljs$lang$maxFixedArity = 0;
G__31134.cljs$lang$applyTo = (function (arglist__31135){
var req_args = cljs.core.seq(arglist__31135);
return G__31134__delegate(req_args);
});
G__31134.cljs$core$IFn$_invoke$arity$variadic = G__31134__delegate;
return G__31134;
})()
;
});
/**
* @param {...*} var_args
*/
clustermap.api.log_api = (function() { 
var log_api__delegate = function (f,args){var ch = cljs.core.apply.call(null,f,args);var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_31153){var state_val_31154 = (state_31153[1]);if((state_val_31154 === 2))
{var inst_31150 = (state_31153[2]);var inst_31151 = console.log(inst_31150);var state_31153__$1 = state_31153;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31153__$1,inst_31151);
} else
{if((state_val_31154 === 1))
{var state_31153__$1 = state_31153;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31153__$1,2,ch);
} else
{return null;
}
}
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_31158 = [null,null,null,null,null,null,null];(statearr_31158[0] = state_machine__5507__auto__);
(statearr_31158[1] = 1);
return statearr_31158;
});
var state_machine__5507__auto____1 = (function (state_31153){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_31153);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e31159){if((e31159 instanceof Object))
{var ex__5510__auto__ = e31159;var statearr_31160_31162 = state_31153;(statearr_31160_31162[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31153);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e31159;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__31163 = state_31153;
state_31153 = G__31163;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_31153){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_31153);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_31161 = f__5522__auto__.call(null);(statearr_31161[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_31161;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5523__auto__);
}));
return c__5521__auto__;
};
var log_api = function (f,var_args){
var args = null;if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return log_api__delegate.call(this,f,args);};
log_api.cljs$lang$maxFixedArity = 1;
log_api.cljs$lang$applyTo = (function (arglist__31164){
var f = cljs.core.first(arglist__31164);
var args = cljs.core.rest(arglist__31164);
return log_api__delegate(f,args);
});
log_api.cljs$core$IFn$_invoke$arity$variadic = log_api__delegate;
return log_api;
})()
;
clustermap.api.map_json_params = (function map_json_params(m){return clojure.string.join.call(null,"&",cljs.core.map.call(null,(function (p__31167){var vec__31168 = p__31167;var k = cljs.core.nth.call(null,vec__31168,0,null);var v = cljs.core.nth.call(null,vec__31168,1,null);return [cljs.core.str(cljs.core.name.call(null,k)),cljs.core.str("="),cljs.core.str(JSON.stringify(cljs.core.clj__GT_js.call(null,v)))].join('');
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
boundarylines.cljs$lang$applyTo = (function (arglist__31169){
var id = cljs.core.first(arglist__31169);
arglist__31169 = cljs.core.next(arglist__31169);
var tolerance = cljs.core.first(arglist__31169);
var opts = cljs.core.rest(arglist__31169);
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
boundaryline_collection_index.cljs$lang$applyTo = (function (arglist__31170){
var id = cljs.core.first(arglist__31170);
var opts = cljs.core.rest(arglist__31170);
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
clustermap.api.portfolio_company = (function portfolio_company(id){return clustermap.api.GET.call(null,[cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/portfolio-companies/"),cljs.core.str(id)].join(''));
});
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_sites = (function() { 
var portfolio_company_sites__delegate = function (p__31171){var vec__31173 = p__31171;var type_ids = cljs.core.nth.call(null,vec__31173,0,null);var type_ids__$1 = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"size","size",1017434995),100,new cljs.core.Keyword(null,"sort","sort",1017440528),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"!latest_turnover","!latest_turnover",2344676794),"desc"], null)], null)], null),type_ids);return clustermap.api.GET.call(null,[cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/portfolio-company-sites?"),cljs.core.str(clustermap.api.map_json_params.call(null,type_ids__$1))].join(''));
};
var portfolio_company_sites = function (var_args){
var p__31171 = null;if (arguments.length > 0) {
  p__31171 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_sites__delegate.call(this,p__31171);};
portfolio_company_sites.cljs$lang$maxFixedArity = 0;
portfolio_company_sites.cljs$lang$applyTo = (function (arglist__31174){
var p__31171 = cljs.core.seq(arglist__31174);
return portfolio_company_sites__delegate(p__31171);
});
portfolio_company_sites.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_sites__delegate;
return portfolio_company_sites;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_sites_by_company = (function() { 
var portfolio_company_sites_by_company__delegate = function (p__31175){var vec__31177 = p__31175;var type_ids = cljs.core.nth.call(null,vec__31177,0,null);var type_ids__$1 = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"size","size",1017434995),100,new cljs.core.Keyword(null,"sort","sort",1017440528),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"!latest_turnover","!latest_turnover",2344676794),"desc"], null)], null)], null),type_ids);return clustermap.api.GET.call(null,[cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/portfolio-company-sites-by-company?"),cljs.core.str(clustermap.api.map_json_params.call(null,type_ids__$1))].join(''));
};
var portfolio_company_sites_by_company = function (var_args){
var p__31175 = null;if (arguments.length > 0) {
  p__31175 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_sites_by_company__delegate.call(this,p__31175);};
portfolio_company_sites_by_company.cljs$lang$maxFixedArity = 0;
portfolio_company_sites_by_company.cljs$lang$applyTo = (function (arglist__31178){
var p__31175 = cljs.core.seq(arglist__31178);
return portfolio_company_sites_by_company__delegate(p__31175);
});
portfolio_company_sites_by_company.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_sites_by_company__delegate;
return portfolio_company_sites_by_company;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_locations = (function() { 
var portfolio_company_locations__delegate = function (p__31179){var vec__31181 = p__31179;var type_ids = cljs.core.nth.call(null,vec__31181,0,null);return clustermap.api.GET.call(null,[cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/portfolio-company-locations?"),cljs.core.str(clustermap.api.map_json_params.call(null,type_ids))].join(''));
};
var portfolio_company_locations = function (var_args){
var p__31179 = null;if (arguments.length > 0) {
  p__31179 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_locations__delegate.call(this,p__31179);};
portfolio_company_locations.cljs$lang$maxFixedArity = 0;
portfolio_company_locations.cljs$lang$applyTo = (function (arglist__31182){
var p__31179 = cljs.core.seq(arglist__31182);
return portfolio_company_locations__delegate(p__31179);
});
portfolio_company_locations.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_locations__delegate;
return portfolio_company_locations;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_site_stats = (function() { 
var portfolio_company_site_stats__delegate = function (p__31183){var vec__31185 = p__31183;var type_ids = cljs.core.nth.call(null,vec__31185,0,null);return clustermap.api.GET.call(null,[cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/portfolio-company-site-stats?"),cljs.core.str(clustermap.api.map_json_params.call(null,type_ids))].join(''));
};
var portfolio_company_site_stats = function (var_args){
var p__31183 = null;if (arguments.length > 0) {
  p__31183 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_site_stats__delegate.call(this,p__31183);};
portfolio_company_site_stats.cljs$lang$maxFixedArity = 0;
portfolio_company_site_stats.cljs$lang$applyTo = (function (arglist__31186){
var p__31183 = cljs.core.seq(arglist__31186);
return portfolio_company_site_stats__delegate(p__31183);
});
portfolio_company_site_stats.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_site_stats__delegate;
return portfolio_company_site_stats;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_site_account_timelines = (function() { 
var portfolio_company_site_account_timelines__delegate = function (p__31187){var vec__31189 = p__31187;var type_ids = cljs.core.nth.call(null,vec__31189,0,null);return clustermap.api.GET.call(null,[cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/portfolio-company-site-account-timelines?"),cljs.core.str(clustermap.api.map_json_params.call(null,type_ids))].join(''));
};
var portfolio_company_site_account_timelines = function (var_args){
var p__31187 = null;if (arguments.length > 0) {
  p__31187 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_site_account_timelines__delegate.call(this,p__31187);};
portfolio_company_site_account_timelines.cljs$lang$maxFixedArity = 0;
portfolio_company_site_account_timelines.cljs$lang$applyTo = (function (arglist__31190){
var p__31187 = cljs.core.seq(arglist__31190);
return portfolio_company_site_account_timelines__delegate(p__31187);
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
clustermap.api.investment_account_timelines = (function() { 
var investment_account_timelines__delegate = function (p__31191){var vec__31193 = p__31191;var type_ids = cljs.core.nth.call(null,vec__31193,0,null);return clustermap.api.GET.call(null,[cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/investment-account-timelines?"),cljs.core.str(clustermap.api.map_json_params.call(null,type_ids))].join(''));
};
var investment_account_timelines = function (var_args){
var p__31191 = null;if (arguments.length > 0) {
  p__31191 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return investment_account_timelines__delegate.call(this,p__31191);};
investment_account_timelines.cljs$lang$maxFixedArity = 0;
investment_account_timelines.cljs$lang$applyTo = (function (arglist__31194){
var p__31191 = cljs.core.seq(arglist__31194);
return investment_account_timelines__delegate(p__31191);
});
investment_account_timelines.cljs$core$IFn$_invoke$arity$variadic = investment_account_timelines__delegate;
return investment_account_timelines;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.investment_stats = (function() { 
var investment_stats__delegate = function (p__31195){var vec__31197 = p__31195;var type_ids = cljs.core.nth.call(null,vec__31197,0,null);return clustermap.api.GET.call(null,[cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/investment-stats?"),cljs.core.str(clustermap.api.map_json_params.call(null,type_ids))].join(''));
};
var investment_stats = function (var_args){
var p__31195 = null;if (arguments.length > 0) {
  p__31195 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return investment_stats__delegate.call(this,p__31195);};
investment_stats.cljs$lang$maxFixedArity = 0;
investment_stats.cljs$lang$applyTo = (function (arglist__31198){
var p__31195 = cljs.core.seq(arglist__31198);
return investment_stats__delegate(p__31195);
});
investment_stats.cljs$core$IFn$_invoke$arity$variadic = investment_stats__delegate;
return investment_stats;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.investment_aggs = (function() { 
var investment_aggs__delegate = function (p__31199){var vec__31201 = p__31199;var type_ids = cljs.core.nth.call(null,vec__31201,0,null);var type_ids__$1 = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"size","size",1017434995),50,new cljs.core.Keyword(null,"order","order",1119910592),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"latest_turnover","latest_turnover",2012435451),"desc"], null)], null)], null),type_ids);return clustermap.api.GET.call(null,[cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/investment-aggs?"),cljs.core.str(clustermap.api.map_json_params.call(null,type_ids__$1))].join(''));
};
var investment_aggs = function (var_args){
var p__31199 = null;if (arguments.length > 0) {
  p__31199 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return investment_aggs__delegate.call(this,p__31199);};
investment_aggs.cljs$lang$maxFixedArity = 0;
investment_aggs.cljs$lang$applyTo = (function (arglist__31202){
var p__31199 = cljs.core.seq(arglist__31202);
return investment_aggs__delegate(p__31199);
});
investment_aggs.cljs$core$IFn$_invoke$arity$variadic = investment_aggs__delegate;
return investment_aggs;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.investments = (function() { 
var investments__delegate = function (p__31203){var vec__31205 = p__31203;var type_ids = cljs.core.nth.call(null,vec__31205,0,null);var type_ids__$1 = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"size","size",1017434995),50], null),type_ids);return clustermap.api.GET.call(null,[cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/investments?"),cljs.core.str(clustermap.api.map_json_params.call(null,type_ids__$1))].join(''));
};
var investments = function (var_args){
var p__31203 = null;if (arguments.length > 0) {
  p__31203 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return investments__delegate.call(this,p__31203);};
investments.cljs$lang$maxFixedArity = 0;
investments.cljs$lang$applyTo = (function (arglist__31206){
var p__31203 = cljs.core.seq(arglist__31206);
return investments__delegate(p__31203);
});
investments.cljs$core$IFn$_invoke$arity$variadic = investments__delegate;
return investments;
})()
;
