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
var GET__delegate = function (url,p__29927){var map__29929 = p__29927;var map__29929__$1 = ((cljs.core.seq_QMARK_.call(null,map__29929))?cljs.core.apply.call(null,cljs.core.hash_map,map__29929):map__29929);var raw = cljs.core.get.call(null,map__29929__$1,new cljs.core.Keyword(null,"raw","raw",1014016922));var comm = cljs.core.async.chan.call(null,1);goog.net.XhrIo.send(url,(function (event){cljs.core.async.put_BANG_.call(null,comm,(function (d){if(cljs.core.truth_(raw))
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
var p__29927 = null;if (arguments.length > 1) {
  p__29927 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return GET__delegate.call(this,url,p__29927);};
GET.cljs$lang$maxFixedArity = 1;
GET.cljs$lang$applyTo = (function (arglist__29930){
var url = cljs.core.first(arglist__29930);
var p__29927 = cljs.core.rest(arglist__29930);
return GET__delegate(url,p__29927);
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
clustermap.api.ordered_api_results = (function ordered_api_results(ocomm,handler){var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_30063){var state_val_30064 = (state_30063[1]);if((state_val_30064 === 1))
{var state_30063__$1 = state_30063;var statearr_30065_30101 = state_30063__$1;(statearr_30065_30101[2] = null);
(statearr_30065_30101[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30064 === 2))
{var state_30063__$1 = state_30063;if(true)
{var statearr_30066_30102 = state_30063__$1;(statearr_30066_30102[1] = 4);
} else
{var statearr_30067_30103 = state_30063__$1;(statearr_30067_30103[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30064 === 3))
{var inst_30061 = (state_30063[2]);var state_30063__$1 = state_30063;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30063__$1,inst_30061);
} else
{if((state_val_30064 === 4))
{var state_30063__$1 = state_30063;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30063__$1,7,ocomm);
} else
{if((state_val_30064 === 5))
{var state_30063__$1 = state_30063;var statearr_30068_30104 = state_30063__$1;(statearr_30068_30104[2] = null);
(statearr_30068_30104[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30064 === 6))
{var inst_30059 = (state_30063[2]);var state_30063__$1 = state_30063;var statearr_30069_30105 = state_30063__$1;(statearr_30069_30105[2] = inst_30059);
(statearr_30069_30105[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30064 === 7))
{var inst_30021 = (state_30063[7]);var inst_30020 = (state_30063[2]);var inst_30021__$1 = cljs.core.nth.call(null,inst_30020,0,null);var inst_30022 = cljs.core.nth.call(null,inst_30020,1,null);var inst_30023 = cljs.core.sequential_QMARK_.call(null,inst_30021__$1);var state_30063__$1 = (function (){var statearr_30070 = state_30063;(statearr_30070[8] = inst_30022);
(statearr_30070[7] = inst_30021__$1);
return statearr_30070;
})();if(inst_30023)
{var statearr_30071_30106 = state_30063__$1;(statearr_30071_30106[1] = 8);
} else
{var statearr_30072_30107 = state_30063__$1;(statearr_30072_30107[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30064 === 8))
{var inst_30021 = (state_30063[7]);var inst_30025 = inst_30021;var inst_30026 = cljs.core.PersistentVector.EMPTY;var state_30063__$1 = (function (){var statearr_30073 = state_30063;(statearr_30073[9] = inst_30025);
(statearr_30073[10] = inst_30026);
return statearr_30073;
})();var statearr_30074_30108 = state_30063__$1;(statearr_30074_30108[2] = null);
(statearr_30074_30108[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30064 === 9))
{var inst_30021 = (state_30063[7]);var state_30063__$1 = state_30063;if(cljs.core.truth_(inst_30021))
{var statearr_30075_30109 = state_30063__$1;(statearr_30075_30109[1] = 20);
} else
{var statearr_30076_30110 = state_30063__$1;(statearr_30076_30110[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30064 === 10))
{var inst_30022 = (state_30063[8]);var inst_30054 = (state_30063[2]);var inst_30055 = cljs.core.apply.call(null,handler,inst_30054,inst_30022);var state_30063__$1 = (function (){var statearr_30077 = state_30063;(statearr_30077[11] = inst_30055);
return statearr_30077;
})();var statearr_30078_30111 = state_30063__$1;(statearr_30078_30111[2] = null);
(statearr_30078_30111[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30064 === 11))
{var inst_30025 = (state_30063[9]);var inst_30028 = cljs.core.empty_QMARK_.call(null,inst_30025);var state_30063__$1 = state_30063;if(inst_30028)
{var statearr_30079_30112 = state_30063__$1;(statearr_30079_30112[1] = 13);
} else
{var statearr_30080_30113 = state_30063__$1;(statearr_30080_30113[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30064 === 12))
{var inst_30045 = (state_30063[2]);var state_30063__$1 = state_30063;var statearr_30081_30114 = state_30063__$1;(statearr_30081_30114[2] = inst_30045);
(statearr_30081_30114[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30064 === 13))
{var inst_30026 = (state_30063[10]);var state_30063__$1 = state_30063;var statearr_30082_30115 = state_30063__$1;(statearr_30082_30115[2] = inst_30026);
(statearr_30082_30115[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30064 === 14))
{var inst_30025 = (state_30063[9]);var inst_30031 = cljs.core.rest.call(null,inst_30025);var inst_30032 = cljs.core.first.call(null,inst_30025);var state_30063__$1 = (function (){var statearr_30083 = state_30063;(statearr_30083[12] = inst_30031);
return statearr_30083;
})();if(cljs.core.truth_(inst_30032))
{var statearr_30084_30116 = state_30063__$1;(statearr_30084_30116[1] = 16);
} else
{var statearr_30085_30117 = state_30063__$1;(statearr_30085_30117[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30064 === 15))
{var inst_30043 = (state_30063[2]);var state_30063__$1 = state_30063;var statearr_30086_30118 = state_30063__$1;(statearr_30086_30118[2] = inst_30043);
(statearr_30086_30118[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30064 === 16))
{var inst_30025 = (state_30063[9]);var inst_30034 = cljs.core.first.call(null,inst_30025);var state_30063__$1 = state_30063;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30063__$1,19,inst_30034);
} else
{if((state_val_30064 === 17))
{var state_30063__$1 = state_30063;var statearr_30087_30119 = state_30063__$1;(statearr_30087_30119[2] = null);
(statearr_30087_30119[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30064 === 18))
{var inst_30026 = (state_30063[10]);var inst_30031 = (state_30063[12]);var inst_30039 = (state_30063[2]);var inst_30040 = cljs.core.conj.call(null,inst_30026,inst_30039);var inst_30025 = inst_30031;var inst_30026__$1 = inst_30040;var state_30063__$1 = (function (){var statearr_30088 = state_30063;(statearr_30088[9] = inst_30025);
(statearr_30088[10] = inst_30026__$1);
return statearr_30088;
})();var statearr_30089_30120 = state_30063__$1;(statearr_30089_30120[2] = null);
(statearr_30089_30120[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30064 === 19))
{var inst_30036 = (state_30063[2]);var state_30063__$1 = state_30063;var statearr_30090_30121 = state_30063__$1;(statearr_30090_30121[2] = inst_30036);
(statearr_30090_30121[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30064 === 20))
{var inst_30021 = (state_30063[7]);var state_30063__$1 = state_30063;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30063__$1,23,inst_30021);
} else
{if((state_val_30064 === 21))
{var state_30063__$1 = state_30063;var statearr_30091_30122 = state_30063__$1;(statearr_30091_30122[2] = null);
(statearr_30091_30122[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30064 === 22))
{var inst_30052 = (state_30063[2]);var state_30063__$1 = state_30063;var statearr_30092_30123 = state_30063__$1;(statearr_30092_30123[2] = inst_30052);
(statearr_30092_30123[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30064 === 23))
{var inst_30049 = (state_30063[2]);var state_30063__$1 = state_30063;var statearr_30093_30124 = state_30063__$1;(statearr_30093_30124[2] = inst_30049);
(statearr_30093_30124[1] = 22);
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
var state_machine__5507__auto____0 = (function (){var statearr_30097 = [null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_30097[0] = state_machine__5507__auto__);
(statearr_30097[1] = 1);
return statearr_30097;
});
var state_machine__5507__auto____1 = (function (state_30063){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_30063);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e30098){if((e30098 instanceof Object))
{var ex__5510__auto__ = e30098;var statearr_30099_30125 = state_30063;(statearr_30099_30125[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30063);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e30098;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__30126 = state_30063;
state_30063 = G__30126;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_30063){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_30063);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_30100 = f__5522__auto__.call(null);(statearr_30100[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_30100;
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
var G__30129__delegate = function (req_args){var temp__4090__auto__ = cljs.core.apply.call(null,request_handler,req_args);if(cljs.core.truth_(temp__4090__auto__))
{var r = temp__4090__auto__;var rseq = ((cljs.core.sequential_QMARK_.call(null,r))?r:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [r], null));var vec__30128 = rseq;var rcomm = cljs.core.nth.call(null,vec__30128,0,null);var result_handler_args = cljs.core.nthnext.call(null,vec__30128,1);return cljs.core.async.put_BANG_.call(null,ocomm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rcomm,result_handler_args], null));
} else
{return null;
}
};
var G__30129 = function (var_args){
var req_args = null;if (arguments.length > 0) {
  req_args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__30129__delegate.call(this,req_args);};
G__30129.cljs$lang$maxFixedArity = 0;
G__30129.cljs$lang$applyTo = (function (arglist__30130){
var req_args = cljs.core.seq(arglist__30130);
return G__30129__delegate(req_args);
});
G__30129.cljs$core$IFn$_invoke$arity$variadic = G__30129__delegate;
return G__30129;
})()
;
});
/**
* @param {...*} var_args
*/
clustermap.api.log_api = (function() { 
var log_api__delegate = function (f,args){var ch = cljs.core.apply.call(null,f,args);var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_30148){var state_val_30149 = (state_30148[1]);if((state_val_30149 === 2))
{var inst_30145 = (state_30148[2]);var inst_30146 = console.log(inst_30145);var state_30148__$1 = state_30148;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30148__$1,inst_30146);
} else
{if((state_val_30149 === 1))
{var state_30148__$1 = state_30148;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30148__$1,2,ch);
} else
{return null;
}
}
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_30153 = [null,null,null,null,null,null,null];(statearr_30153[0] = state_machine__5507__auto__);
(statearr_30153[1] = 1);
return statearr_30153;
});
var state_machine__5507__auto____1 = (function (state_30148){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_30148);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e30154){if((e30154 instanceof Object))
{var ex__5510__auto__ = e30154;var statearr_30155_30157 = state_30148;(statearr_30155_30157[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30148);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e30154;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__30158 = state_30148;
state_30148 = G__30158;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_30148){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_30148);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_30156 = f__5522__auto__.call(null);(statearr_30156[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_30156;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5523__auto__);
}));
return c__5521__auto__;
};
var log_api = function (f,var_args){
var args = null;if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return log_api__delegate.call(this,f,args);};
log_api.cljs$lang$maxFixedArity = 1;
log_api.cljs$lang$applyTo = (function (arglist__30159){
var f = cljs.core.first(arglist__30159);
var args = cljs.core.rest(arglist__30159);
return log_api__delegate(f,args);
});
log_api.cljs$core$IFn$_invoke$arity$variadic = log_api__delegate;
return log_api;
})()
;
clustermap.api.map_json_params = (function map_json_params(m){return clojure.string.join.call(null,"&",cljs.core.map.call(null,(function (p__30162){var vec__30163 = p__30162;var k = cljs.core.nth.call(null,vec__30163,0,null);var v = cljs.core.nth.call(null,vec__30163,1,null);return [cljs.core.str(cljs.core.name.call(null,k)),cljs.core.str("="),cljs.core.str(JSON.stringify(cljs.core.clj__GT_js.call(null,v)))].join('');
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
boundarylines.cljs$lang$applyTo = (function (arglist__30164){
var id = cljs.core.first(arglist__30164);
arglist__30164 = cljs.core.next(arglist__30164);
var tolerance = cljs.core.first(arglist__30164);
var opts = cljs.core.rest(arglist__30164);
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
boundaryline_collection_index.cljs$lang$applyTo = (function (arglist__30165){
var id = cljs.core.first(arglist__30165);
var opts = cljs.core.rest(arglist__30165);
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
var constituencies__delegate = function (p__30166){var vec__30168 = p__30166;var type_ids = cljs.core.nth.call(null,vec__30168,0,null);return clustermap.api.GET.call(null,"/api/",clustermap.api.api_prefix,"/constituencies?",clustermap.api.map_json_params.call(null,type_ids));
};
var constituencies = function (var_args){
var p__30166 = null;if (arguments.length > 0) {
  p__30166 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return constituencies__delegate.call(this,p__30166);};
constituencies.cljs$lang$maxFixedArity = 0;
constituencies.cljs$lang$applyTo = (function (arglist__30169){
var p__30166 = cljs.core.seq(arglist__30169);
return constituencies__delegate(p__30166);
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
var portfolio_companies__delegate = function (p__30170){var vec__30172 = p__30170;var type_ids = cljs.core.nth.call(null,vec__30172,0,null);return clustermap.api.GET.call(null,[cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/portfolio-companies?sort={\"!latest_turnover\":\"desc\"}&"),cljs.core.str(clustermap.api.map_json_params.call(null,type_ids))].join(''));
};
var portfolio_companies = function (var_args){
var p__30170 = null;if (arguments.length > 0) {
  p__30170 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_companies__delegate.call(this,p__30170);};
portfolio_companies.cljs$lang$maxFixedArity = 0;
portfolio_companies.cljs$lang$applyTo = (function (arglist__30173){
var p__30170 = cljs.core.seq(arglist__30173);
return portfolio_companies__delegate(p__30170);
});
portfolio_companies.cljs$core$IFn$_invoke$arity$variadic = portfolio_companies__delegate;
return portfolio_companies;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_stats = (function() { 
var portfolio_company_stats__delegate = function (p__30174){var vec__30176 = p__30174;var type_ids = cljs.core.nth.call(null,vec__30176,0,null);return clustermap.api.GET.call(null,[cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/portfolio-company-stats?"),cljs.core.str(clustermap.api.map_json_params.call(null,type_ids))].join(''));
};
var portfolio_company_stats = function (var_args){
var p__30174 = null;if (arguments.length > 0) {
  p__30174 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_stats__delegate.call(this,p__30174);};
portfolio_company_stats.cljs$lang$maxFixedArity = 0;
portfolio_company_stats.cljs$lang$applyTo = (function (arglist__30177){
var p__30174 = cljs.core.seq(arglist__30177);
return portfolio_company_stats__delegate(p__30174);
});
portfolio_company_stats.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_stats__delegate;
return portfolio_company_stats;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_account_stats = (function() { 
var portfolio_company_account_stats__delegate = function (p__30178){var vec__30180 = p__30178;var type_ids = cljs.core.nth.call(null,vec__30180,0,null);return clustermap.api.GET.call(null,[cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/portfolio-company-account-stats?"),cljs.core.str(clustermap.api.map_json_params.call(null,type_ids))].join(''));
};
var portfolio_company_account_stats = function (var_args){
var p__30178 = null;if (arguments.length > 0) {
  p__30178 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_account_stats__delegate.call(this,p__30178);};
portfolio_company_account_stats.cljs$lang$maxFixedArity = 0;
portfolio_company_account_stats.cljs$lang$applyTo = (function (arglist__30181){
var p__30178 = cljs.core.seq(arglist__30181);
return portfolio_company_account_stats__delegate(p__30178);
});
portfolio_company_account_stats.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_account_stats__delegate;
return portfolio_company_account_stats;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_sites = (function() { 
var portfolio_company_sites__delegate = function (p__30182){var vec__30184 = p__30182;var type_ids = cljs.core.nth.call(null,vec__30184,0,null);return clustermap.api.GET.call(null,[cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/portfolio-company-sites?"),cljs.core.str(clustermap.api.map_json_params.call(null,type_ids))].join(''));
};
var portfolio_company_sites = function (var_args){
var p__30182 = null;if (arguments.length > 0) {
  p__30182 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_sites__delegate.call(this,p__30182);};
portfolio_company_sites.cljs$lang$maxFixedArity = 0;
portfolio_company_sites.cljs$lang$applyTo = (function (arglist__30185){
var p__30182 = cljs.core.seq(arglist__30185);
return portfolio_company_sites__delegate(p__30182);
});
portfolio_company_sites.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_sites__delegate;
return portfolio_company_sites;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_locations = (function() { 
var portfolio_company_locations__delegate = function (p__30186){var vec__30188 = p__30186;var type_ids = cljs.core.nth.call(null,vec__30188,0,null);return clustermap.api.GET.call(null,[cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/portfolio-company-locations?"),cljs.core.str(clustermap.api.map_json_params.call(null,type_ids))].join(''));
};
var portfolio_company_locations = function (var_args){
var p__30186 = null;if (arguments.length > 0) {
  p__30186 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_locations__delegate.call(this,p__30186);};
portfolio_company_locations.cljs$lang$maxFixedArity = 0;
portfolio_company_locations.cljs$lang$applyTo = (function (arglist__30189){
var p__30186 = cljs.core.seq(arglist__30189);
return portfolio_company_locations__delegate(p__30186);
});
portfolio_company_locations.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_locations__delegate;
return portfolio_company_locations;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_site_stats = (function() { 
var portfolio_company_site_stats__delegate = function (p__30190){var vec__30192 = p__30190;var type_ids = cljs.core.nth.call(null,vec__30192,0,null);return clustermap.api.GET.call(null,[cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/portfolio-company-site-stats?"),cljs.core.str(clustermap.api.map_json_params.call(null,type_ids))].join(''));
};
var portfolio_company_site_stats = function (var_args){
var p__30190 = null;if (arguments.length > 0) {
  p__30190 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_site_stats__delegate.call(this,p__30190);};
portfolio_company_site_stats.cljs$lang$maxFixedArity = 0;
portfolio_company_site_stats.cljs$lang$applyTo = (function (arglist__30193){
var p__30190 = cljs.core.seq(arglist__30193);
return portfolio_company_site_stats__delegate(p__30190);
});
portfolio_company_site_stats.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_site_stats__delegate;
return portfolio_company_site_stats;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_site_account_timelines = (function() { 
var portfolio_company_site_account_timelines__delegate = function (p__30194){var vec__30196 = p__30194;var type_ids = cljs.core.nth.call(null,vec__30196,0,null);return clustermap.api.GET.call(null,[cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/portfolio-company-site-account-timelines?"),cljs.core.str(clustermap.api.map_json_params.call(null,type_ids))].join(''));
};
var portfolio_company_site_account_timelines = function (var_args){
var p__30194 = null;if (arguments.length > 0) {
  p__30194 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_site_account_timelines__delegate.call(this,p__30194);};
portfolio_company_site_account_timelines.cljs$lang$maxFixedArity = 0;
portfolio_company_site_account_timelines.cljs$lang$applyTo = (function (arglist__30197){
var p__30194 = cljs.core.seq(arglist__30197);
return portfolio_company_site_account_timelines__delegate(p__30194);
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
var investor_comapnies__delegate = function (p__30198){var vec__30200 = p__30198;var type_ids = cljs.core.nth.call(null,vec__30200,0,null);return clustermap.api.GET.call(null,[cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/investor-companies?"),cljs.core.str(clustermap.api.map_json_params.call(null,type_ids))].join(''));
};
var investor_comapnies = function (var_args){
var p__30198 = null;if (arguments.length > 0) {
  p__30198 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return investor_comapnies__delegate.call(this,p__30198);};
investor_comapnies.cljs$lang$maxFixedArity = 0;
investor_comapnies.cljs$lang$applyTo = (function (arglist__30201){
var p__30198 = cljs.core.seq(arglist__30201);
return investor_comapnies__delegate(p__30198);
});
investor_comapnies.cljs$core$IFn$_invoke$arity$variadic = investor_comapnies__delegate;
return investor_comapnies;
})()
;
