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
var GET__delegate = function (url,p__30908){var map__30910 = p__30908;var map__30910__$1 = ((cljs.core.seq_QMARK_.call(null,map__30910))?cljs.core.apply.call(null,cljs.core.hash_map,map__30910):map__30910);var raw = cljs.core.get.call(null,map__30910__$1,new cljs.core.Keyword(null,"raw","raw",1014016922));var comm = cljs.core.async.chan.call(null,1);goog.net.XhrIo.send(url,(function (event){cljs.core.async.put_BANG_.call(null,comm,(function (d){if(cljs.core.truth_(raw))
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
var p__30908 = null;if (arguments.length > 1) {
  p__30908 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return GET__delegate.call(this,url,p__30908);};
GET.cljs$lang$maxFixedArity = 1;
GET.cljs$lang$applyTo = (function (arglist__30911){
var url = cljs.core.first(arglist__30911);
var p__30908 = cljs.core.rest(arglist__30911);
return GET__delegate(url,p__30908);
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
clustermap.api.ordered_api_results = (function ordered_api_results(ocomm,handler){var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_31044){var state_val_31045 = (state_31044[1]);if((state_val_31045 === 1))
{var state_31044__$1 = state_31044;var statearr_31046_31082 = state_31044__$1;(statearr_31046_31082[2] = null);
(statearr_31046_31082[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31045 === 2))
{var state_31044__$1 = state_31044;if(true)
{var statearr_31047_31083 = state_31044__$1;(statearr_31047_31083[1] = 4);
} else
{var statearr_31048_31084 = state_31044__$1;(statearr_31048_31084[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31045 === 3))
{var inst_31042 = (state_31044[2]);var state_31044__$1 = state_31044;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31044__$1,inst_31042);
} else
{if((state_val_31045 === 4))
{var state_31044__$1 = state_31044;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31044__$1,7,ocomm);
} else
{if((state_val_31045 === 5))
{var state_31044__$1 = state_31044;var statearr_31049_31085 = state_31044__$1;(statearr_31049_31085[2] = null);
(statearr_31049_31085[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31045 === 6))
{var inst_31040 = (state_31044[2]);var state_31044__$1 = state_31044;var statearr_31050_31086 = state_31044__$1;(statearr_31050_31086[2] = inst_31040);
(statearr_31050_31086[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31045 === 7))
{var inst_31002 = (state_31044[7]);var inst_31001 = (state_31044[2]);var inst_31002__$1 = cljs.core.nth.call(null,inst_31001,0,null);var inst_31003 = cljs.core.nth.call(null,inst_31001,1,null);var inst_31004 = cljs.core.sequential_QMARK_.call(null,inst_31002__$1);var state_31044__$1 = (function (){var statearr_31051 = state_31044;(statearr_31051[8] = inst_31003);
(statearr_31051[7] = inst_31002__$1);
return statearr_31051;
})();if(inst_31004)
{var statearr_31052_31087 = state_31044__$1;(statearr_31052_31087[1] = 8);
} else
{var statearr_31053_31088 = state_31044__$1;(statearr_31053_31088[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31045 === 8))
{var inst_31002 = (state_31044[7]);var inst_31006 = inst_31002;var inst_31007 = cljs.core.PersistentVector.EMPTY;var state_31044__$1 = (function (){var statearr_31054 = state_31044;(statearr_31054[9] = inst_31006);
(statearr_31054[10] = inst_31007);
return statearr_31054;
})();var statearr_31055_31089 = state_31044__$1;(statearr_31055_31089[2] = null);
(statearr_31055_31089[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31045 === 9))
{var inst_31002 = (state_31044[7]);var state_31044__$1 = state_31044;if(cljs.core.truth_(inst_31002))
{var statearr_31056_31090 = state_31044__$1;(statearr_31056_31090[1] = 20);
} else
{var statearr_31057_31091 = state_31044__$1;(statearr_31057_31091[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31045 === 10))
{var inst_31003 = (state_31044[8]);var inst_31035 = (state_31044[2]);var inst_31036 = cljs.core.apply.call(null,handler,inst_31035,inst_31003);var state_31044__$1 = (function (){var statearr_31058 = state_31044;(statearr_31058[11] = inst_31036);
return statearr_31058;
})();var statearr_31059_31092 = state_31044__$1;(statearr_31059_31092[2] = null);
(statearr_31059_31092[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31045 === 11))
{var inst_31006 = (state_31044[9]);var inst_31009 = cljs.core.empty_QMARK_.call(null,inst_31006);var state_31044__$1 = state_31044;if(inst_31009)
{var statearr_31060_31093 = state_31044__$1;(statearr_31060_31093[1] = 13);
} else
{var statearr_31061_31094 = state_31044__$1;(statearr_31061_31094[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31045 === 12))
{var inst_31026 = (state_31044[2]);var state_31044__$1 = state_31044;var statearr_31062_31095 = state_31044__$1;(statearr_31062_31095[2] = inst_31026);
(statearr_31062_31095[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31045 === 13))
{var inst_31007 = (state_31044[10]);var state_31044__$1 = state_31044;var statearr_31063_31096 = state_31044__$1;(statearr_31063_31096[2] = inst_31007);
(statearr_31063_31096[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31045 === 14))
{var inst_31006 = (state_31044[9]);var inst_31012 = cljs.core.rest.call(null,inst_31006);var inst_31013 = cljs.core.first.call(null,inst_31006);var state_31044__$1 = (function (){var statearr_31064 = state_31044;(statearr_31064[12] = inst_31012);
return statearr_31064;
})();if(cljs.core.truth_(inst_31013))
{var statearr_31065_31097 = state_31044__$1;(statearr_31065_31097[1] = 16);
} else
{var statearr_31066_31098 = state_31044__$1;(statearr_31066_31098[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31045 === 15))
{var inst_31024 = (state_31044[2]);var state_31044__$1 = state_31044;var statearr_31067_31099 = state_31044__$1;(statearr_31067_31099[2] = inst_31024);
(statearr_31067_31099[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31045 === 16))
{var inst_31006 = (state_31044[9]);var inst_31015 = cljs.core.first.call(null,inst_31006);var state_31044__$1 = state_31044;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31044__$1,19,inst_31015);
} else
{if((state_val_31045 === 17))
{var state_31044__$1 = state_31044;var statearr_31068_31100 = state_31044__$1;(statearr_31068_31100[2] = null);
(statearr_31068_31100[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31045 === 18))
{var inst_31012 = (state_31044[12]);var inst_31007 = (state_31044[10]);var inst_31020 = (state_31044[2]);var inst_31021 = cljs.core.conj.call(null,inst_31007,inst_31020);var inst_31006 = inst_31012;var inst_31007__$1 = inst_31021;var state_31044__$1 = (function (){var statearr_31069 = state_31044;(statearr_31069[9] = inst_31006);
(statearr_31069[10] = inst_31007__$1);
return statearr_31069;
})();var statearr_31070_31101 = state_31044__$1;(statearr_31070_31101[2] = null);
(statearr_31070_31101[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31045 === 19))
{var inst_31017 = (state_31044[2]);var state_31044__$1 = state_31044;var statearr_31071_31102 = state_31044__$1;(statearr_31071_31102[2] = inst_31017);
(statearr_31071_31102[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31045 === 20))
{var inst_31002 = (state_31044[7]);var state_31044__$1 = state_31044;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31044__$1,23,inst_31002);
} else
{if((state_val_31045 === 21))
{var state_31044__$1 = state_31044;var statearr_31072_31103 = state_31044__$1;(statearr_31072_31103[2] = null);
(statearr_31072_31103[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31045 === 22))
{var inst_31033 = (state_31044[2]);var state_31044__$1 = state_31044;var statearr_31073_31104 = state_31044__$1;(statearr_31073_31104[2] = inst_31033);
(statearr_31073_31104[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31045 === 23))
{var inst_31030 = (state_31044[2]);var state_31044__$1 = state_31044;var statearr_31074_31105 = state_31044__$1;(statearr_31074_31105[2] = inst_31030);
(statearr_31074_31105[1] = 22);
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
var state_machine__5507__auto____0 = (function (){var statearr_31078 = [null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_31078[0] = state_machine__5507__auto__);
(statearr_31078[1] = 1);
return statearr_31078;
});
var state_machine__5507__auto____1 = (function (state_31044){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_31044);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e31079){if((e31079 instanceof Object))
{var ex__5510__auto__ = e31079;var statearr_31080_31106 = state_31044;(statearr_31080_31106[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31044);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e31079;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__31107 = state_31044;
state_31044 = G__31107;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_31044){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_31044);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_31081 = f__5522__auto__.call(null);(statearr_31081[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_31081;
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
var G__31110__delegate = function (req_args){var temp__4090__auto__ = cljs.core.apply.call(null,request_handler,req_args);if(cljs.core.truth_(temp__4090__auto__))
{var r = temp__4090__auto__;var rseq = ((cljs.core.sequential_QMARK_.call(null,r))?r:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [r], null));var vec__31109 = rseq;var rcomm = cljs.core.nth.call(null,vec__31109,0,null);var result_handler_args = cljs.core.nthnext.call(null,vec__31109,1);return cljs.core.async.put_BANG_.call(null,ocomm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rcomm,result_handler_args], null));
} else
{return null;
}
};
var G__31110 = function (var_args){
var req_args = null;if (arguments.length > 0) {
  req_args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__31110__delegate.call(this,req_args);};
G__31110.cljs$lang$maxFixedArity = 0;
G__31110.cljs$lang$applyTo = (function (arglist__31111){
var req_args = cljs.core.seq(arglist__31111);
return G__31110__delegate(req_args);
});
G__31110.cljs$core$IFn$_invoke$arity$variadic = G__31110__delegate;
return G__31110;
})()
;
});
/**
* @param {...*} var_args
*/
clustermap.api.log_api = (function() { 
var log_api__delegate = function (f,args){var ch = cljs.core.apply.call(null,f,args);var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_31129){var state_val_31130 = (state_31129[1]);if((state_val_31130 === 2))
{var inst_31126 = (state_31129[2]);var inst_31127 = console.log(inst_31126);var state_31129__$1 = state_31129;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31129__$1,inst_31127);
} else
{if((state_val_31130 === 1))
{var state_31129__$1 = state_31129;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31129__$1,2,ch);
} else
{return null;
}
}
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_31134 = [null,null,null,null,null,null,null];(statearr_31134[0] = state_machine__5507__auto__);
(statearr_31134[1] = 1);
return statearr_31134;
});
var state_machine__5507__auto____1 = (function (state_31129){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_31129);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e31135){if((e31135 instanceof Object))
{var ex__5510__auto__ = e31135;var statearr_31136_31138 = state_31129;(statearr_31136_31138[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31129);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e31135;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__31139 = state_31129;
state_31129 = G__31139;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_31129){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_31129);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_31137 = f__5522__auto__.call(null);(statearr_31137[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_31137;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5523__auto__);
}));
return c__5521__auto__;
};
var log_api = function (f,var_args){
var args = null;if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return log_api__delegate.call(this,f,args);};
log_api.cljs$lang$maxFixedArity = 1;
log_api.cljs$lang$applyTo = (function (arglist__31140){
var f = cljs.core.first(arglist__31140);
var args = cljs.core.rest(arglist__31140);
return log_api__delegate(f,args);
});
log_api.cljs$core$IFn$_invoke$arity$variadic = log_api__delegate;
return log_api;
})()
;
clustermap.api.map_json_params = (function map_json_params(m){return clojure.string.join.call(null,"&",cljs.core.map.call(null,(function (p__31143){var vec__31144 = p__31143;var k = cljs.core.nth.call(null,vec__31144,0,null);var v = cljs.core.nth.call(null,vec__31144,1,null);return [cljs.core.str(cljs.core.name.call(null,k)),cljs.core.str("="),cljs.core.str(JSON.stringify(cljs.core.clj__GT_js.call(null,v)))].join('');
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
boundarylines.cljs$lang$applyTo = (function (arglist__31145){
var id = cljs.core.first(arglist__31145);
arglist__31145 = cljs.core.next(arglist__31145);
var tolerance = cljs.core.first(arglist__31145);
var opts = cljs.core.rest(arglist__31145);
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
boundaryline_collection_index.cljs$lang$applyTo = (function (arglist__31146){
var id = cljs.core.first(arglist__31146);
var opts = cljs.core.rest(arglist__31146);
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
var constituencies__delegate = function (p__31147){var vec__31149 = p__31147;var type_ids = cljs.core.nth.call(null,vec__31149,0,null);return clustermap.api.GET.call(null,"/api/",clustermap.api.api_prefix,"/constituencies?",clustermap.api.map_json_params.call(null,type_ids));
};
var constituencies = function (var_args){
var p__31147 = null;if (arguments.length > 0) {
  p__31147 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return constituencies__delegate.call(this,p__31147);};
constituencies.cljs$lang$maxFixedArity = 0;
constituencies.cljs$lang$applyTo = (function (arglist__31150){
var p__31147 = cljs.core.seq(arglist__31150);
return constituencies__delegate(p__31147);
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
var portfolio_companies__delegate = function (p__31151){var vec__31153 = p__31151;var type_ids = cljs.core.nth.call(null,vec__31153,0,null);var type_ids__$1 = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"sort","sort",1017440528),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"!latest_turnover","!latest_turnover",2344676794),"desc"], null)], null));return clustermap.api.GET.call(null,[cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/portfolio-companies?"),cljs.core.str(clustermap.api.map_json_params.call(null,type_ids__$1))].join(''));
};
var portfolio_companies = function (var_args){
var p__31151 = null;if (arguments.length > 0) {
  p__31151 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_companies__delegate.call(this,p__31151);};
portfolio_companies.cljs$lang$maxFixedArity = 0;
portfolio_companies.cljs$lang$applyTo = (function (arglist__31154){
var p__31151 = cljs.core.seq(arglist__31154);
return portfolio_companies__delegate(p__31151);
});
portfolio_companies.cljs$core$IFn$_invoke$arity$variadic = portfolio_companies__delegate;
return portfolio_companies;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_stats = (function() { 
var portfolio_company_stats__delegate = function (p__31155){var vec__31157 = p__31155;var type_ids = cljs.core.nth.call(null,vec__31157,0,null);return clustermap.api.GET.call(null,[cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/portfolio-company-stats?"),cljs.core.str(clustermap.api.map_json_params.call(null,type_ids))].join(''));
};
var portfolio_company_stats = function (var_args){
var p__31155 = null;if (arguments.length > 0) {
  p__31155 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_stats__delegate.call(this,p__31155);};
portfolio_company_stats.cljs$lang$maxFixedArity = 0;
portfolio_company_stats.cljs$lang$applyTo = (function (arglist__31158){
var p__31155 = cljs.core.seq(arglist__31158);
return portfolio_company_stats__delegate(p__31155);
});
portfolio_company_stats.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_stats__delegate;
return portfolio_company_stats;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_account_stats = (function() { 
var portfolio_company_account_stats__delegate = function (p__31159){var vec__31161 = p__31159;var type_ids = cljs.core.nth.call(null,vec__31161,0,null);return clustermap.api.GET.call(null,[cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/portfolio-company-account-stats?"),cljs.core.str(clustermap.api.map_json_params.call(null,type_ids))].join(''));
};
var portfolio_company_account_stats = function (var_args){
var p__31159 = null;if (arguments.length > 0) {
  p__31159 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_account_stats__delegate.call(this,p__31159);};
portfolio_company_account_stats.cljs$lang$maxFixedArity = 0;
portfolio_company_account_stats.cljs$lang$applyTo = (function (arglist__31162){
var p__31159 = cljs.core.seq(arglist__31162);
return portfolio_company_account_stats__delegate(p__31159);
});
portfolio_company_account_stats.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_account_stats__delegate;
return portfolio_company_account_stats;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_sites = (function() { 
var portfolio_company_sites__delegate = function (p__31163){var vec__31165 = p__31163;var type_ids = cljs.core.nth.call(null,vec__31165,0,null);var type_ids__$1 = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"size","size",1017434995),100,new cljs.core.Keyword(null,"sort","sort",1017440528),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"!latest_turnover","!latest_turnover",2344676794),"desc"], null)], null)], null),type_ids);return clustermap.api.GET.call(null,[cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/portfolio-company-sites?"),cljs.core.str(clustermap.api.map_json_params.call(null,type_ids__$1))].join(''));
};
var portfolio_company_sites = function (var_args){
var p__31163 = null;if (arguments.length > 0) {
  p__31163 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_sites__delegate.call(this,p__31163);};
portfolio_company_sites.cljs$lang$maxFixedArity = 0;
portfolio_company_sites.cljs$lang$applyTo = (function (arglist__31166){
var p__31163 = cljs.core.seq(arglist__31166);
return portfolio_company_sites__delegate(p__31163);
});
portfolio_company_sites.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_sites__delegate;
return portfolio_company_sites;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_locations = (function() { 
var portfolio_company_locations__delegate = function (p__31167){var vec__31169 = p__31167;var type_ids = cljs.core.nth.call(null,vec__31169,0,null);return clustermap.api.GET.call(null,[cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/portfolio-company-locations?"),cljs.core.str(clustermap.api.map_json_params.call(null,type_ids))].join(''));
};
var portfolio_company_locations = function (var_args){
var p__31167 = null;if (arguments.length > 0) {
  p__31167 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_locations__delegate.call(this,p__31167);};
portfolio_company_locations.cljs$lang$maxFixedArity = 0;
portfolio_company_locations.cljs$lang$applyTo = (function (arglist__31170){
var p__31167 = cljs.core.seq(arglist__31170);
return portfolio_company_locations__delegate(p__31167);
});
portfolio_company_locations.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_locations__delegate;
return portfolio_company_locations;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_site_stats = (function() { 
var portfolio_company_site_stats__delegate = function (p__31171){var vec__31173 = p__31171;var type_ids = cljs.core.nth.call(null,vec__31173,0,null);return clustermap.api.GET.call(null,[cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/portfolio-company-site-stats?"),cljs.core.str(clustermap.api.map_json_params.call(null,type_ids))].join(''));
};
var portfolio_company_site_stats = function (var_args){
var p__31171 = null;if (arguments.length > 0) {
  p__31171 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_site_stats__delegate.call(this,p__31171);};
portfolio_company_site_stats.cljs$lang$maxFixedArity = 0;
portfolio_company_site_stats.cljs$lang$applyTo = (function (arglist__31174){
var p__31171 = cljs.core.seq(arglist__31174);
return portfolio_company_site_stats__delegate(p__31171);
});
portfolio_company_site_stats.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_site_stats__delegate;
return portfolio_company_site_stats;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_site_account_timelines = (function() { 
var portfolio_company_site_account_timelines__delegate = function (p__31175){var vec__31177 = p__31175;var type_ids = cljs.core.nth.call(null,vec__31177,0,null);return clustermap.api.GET.call(null,[cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/portfolio-company-site-account-timelines?"),cljs.core.str(clustermap.api.map_json_params.call(null,type_ids))].join(''));
};
var portfolio_company_site_account_timelines = function (var_args){
var p__31175 = null;if (arguments.length > 0) {
  p__31175 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_site_account_timelines__delegate.call(this,p__31175);};
portfolio_company_site_account_timelines.cljs$lang$maxFixedArity = 0;
portfolio_company_site_account_timelines.cljs$lang$applyTo = (function (arglist__31178){
var p__31175 = cljs.core.seq(arglist__31178);
return portfolio_company_site_account_timelines__delegate(p__31175);
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
var investor_comapnies__delegate = function (p__31179){var vec__31181 = p__31179;var type_ids = cljs.core.nth.call(null,vec__31181,0,null);return clustermap.api.GET.call(null,[cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/investor-companies?"),cljs.core.str(clustermap.api.map_json_params.call(null,type_ids))].join(''));
};
var investor_comapnies = function (var_args){
var p__31179 = null;if (arguments.length > 0) {
  p__31179 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return investor_comapnies__delegate.call(this,p__31179);};
investor_comapnies.cljs$lang$maxFixedArity = 0;
investor_comapnies.cljs$lang$applyTo = (function (arglist__31182){
var p__31179 = cljs.core.seq(arglist__31182);
return investor_comapnies__delegate(p__31179);
});
investor_comapnies.cljs$core$IFn$_invoke$arity$variadic = investor_comapnies__delegate;
return investor_comapnies;
})()
;
