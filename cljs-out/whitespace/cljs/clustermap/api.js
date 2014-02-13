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
var GET__delegate = function (url,p__30032){var map__30034 = p__30032;var map__30034__$1 = ((cljs.core.seq_QMARK_.call(null,map__30034))?cljs.core.apply.call(null,cljs.core.hash_map,map__30034):map__30034);var raw = cljs.core.get.call(null,map__30034__$1,new cljs.core.Keyword(null,"raw","raw",1014016922));var comm = cljs.core.async.chan.call(null,1);goog.net.XhrIo.send(url,(function (event){cljs.core.async.put_BANG_.call(null,comm,(function (d){if(cljs.core.truth_(raw))
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
var p__30032 = null;if (arguments.length > 1) {
  p__30032 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return GET__delegate.call(this,url,p__30032);};
GET.cljs$lang$maxFixedArity = 1;
GET.cljs$lang$applyTo = (function (arglist__30035){
var url = cljs.core.first(arglist__30035);
var p__30032 = cljs.core.rest(arglist__30035);
return GET__delegate(url,p__30032);
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
clustermap.api.ordered_api_results = (function ordered_api_results(ocomm,handler){var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_30168){var state_val_30169 = (state_30168[1]);if((state_val_30169 === 1))
{var state_30168__$1 = state_30168;var statearr_30170_30206 = state_30168__$1;(statearr_30170_30206[2] = null);
(statearr_30170_30206[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30169 === 2))
{var state_30168__$1 = state_30168;if(true)
{var statearr_30171_30207 = state_30168__$1;(statearr_30171_30207[1] = 4);
} else
{var statearr_30172_30208 = state_30168__$1;(statearr_30172_30208[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30169 === 3))
{var inst_30166 = (state_30168[2]);var state_30168__$1 = state_30168;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30168__$1,inst_30166);
} else
{if((state_val_30169 === 4))
{var state_30168__$1 = state_30168;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30168__$1,7,ocomm);
} else
{if((state_val_30169 === 5))
{var state_30168__$1 = state_30168;var statearr_30173_30209 = state_30168__$1;(statearr_30173_30209[2] = null);
(statearr_30173_30209[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30169 === 6))
{var inst_30164 = (state_30168[2]);var state_30168__$1 = state_30168;var statearr_30174_30210 = state_30168__$1;(statearr_30174_30210[2] = inst_30164);
(statearr_30174_30210[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30169 === 7))
{var inst_30126 = (state_30168[7]);var inst_30125 = (state_30168[2]);var inst_30126__$1 = cljs.core.nth.call(null,inst_30125,0,null);var inst_30127 = cljs.core.nth.call(null,inst_30125,1,null);var inst_30128 = cljs.core.sequential_QMARK_.call(null,inst_30126__$1);var state_30168__$1 = (function (){var statearr_30175 = state_30168;(statearr_30175[7] = inst_30126__$1);
(statearr_30175[8] = inst_30127);
return statearr_30175;
})();if(inst_30128)
{var statearr_30176_30211 = state_30168__$1;(statearr_30176_30211[1] = 8);
} else
{var statearr_30177_30212 = state_30168__$1;(statearr_30177_30212[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30169 === 8))
{var inst_30126 = (state_30168[7]);var inst_30130 = inst_30126;var inst_30131 = cljs.core.PersistentVector.EMPTY;var state_30168__$1 = (function (){var statearr_30178 = state_30168;(statearr_30178[9] = inst_30131);
(statearr_30178[10] = inst_30130);
return statearr_30178;
})();var statearr_30179_30213 = state_30168__$1;(statearr_30179_30213[2] = null);
(statearr_30179_30213[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30169 === 9))
{var inst_30126 = (state_30168[7]);var state_30168__$1 = state_30168;if(cljs.core.truth_(inst_30126))
{var statearr_30180_30214 = state_30168__$1;(statearr_30180_30214[1] = 20);
} else
{var statearr_30181_30215 = state_30168__$1;(statearr_30181_30215[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30169 === 10))
{var inst_30127 = (state_30168[8]);var inst_30159 = (state_30168[2]);var inst_30160 = cljs.core.apply.call(null,handler,inst_30159,inst_30127);var state_30168__$1 = (function (){var statearr_30182 = state_30168;(statearr_30182[11] = inst_30160);
return statearr_30182;
})();var statearr_30183_30216 = state_30168__$1;(statearr_30183_30216[2] = null);
(statearr_30183_30216[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30169 === 11))
{var inst_30130 = (state_30168[10]);var inst_30133 = cljs.core.empty_QMARK_.call(null,inst_30130);var state_30168__$1 = state_30168;if(inst_30133)
{var statearr_30184_30217 = state_30168__$1;(statearr_30184_30217[1] = 13);
} else
{var statearr_30185_30218 = state_30168__$1;(statearr_30185_30218[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30169 === 12))
{var inst_30150 = (state_30168[2]);var state_30168__$1 = state_30168;var statearr_30186_30219 = state_30168__$1;(statearr_30186_30219[2] = inst_30150);
(statearr_30186_30219[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30169 === 13))
{var inst_30131 = (state_30168[9]);var state_30168__$1 = state_30168;var statearr_30187_30220 = state_30168__$1;(statearr_30187_30220[2] = inst_30131);
(statearr_30187_30220[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30169 === 14))
{var inst_30130 = (state_30168[10]);var inst_30136 = cljs.core.rest.call(null,inst_30130);var inst_30137 = cljs.core.first.call(null,inst_30130);var state_30168__$1 = (function (){var statearr_30188 = state_30168;(statearr_30188[12] = inst_30136);
return statearr_30188;
})();if(cljs.core.truth_(inst_30137))
{var statearr_30189_30221 = state_30168__$1;(statearr_30189_30221[1] = 16);
} else
{var statearr_30190_30222 = state_30168__$1;(statearr_30190_30222[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30169 === 15))
{var inst_30148 = (state_30168[2]);var state_30168__$1 = state_30168;var statearr_30191_30223 = state_30168__$1;(statearr_30191_30223[2] = inst_30148);
(statearr_30191_30223[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30169 === 16))
{var inst_30130 = (state_30168[10]);var inst_30139 = cljs.core.first.call(null,inst_30130);var state_30168__$1 = state_30168;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30168__$1,19,inst_30139);
} else
{if((state_val_30169 === 17))
{var state_30168__$1 = state_30168;var statearr_30192_30224 = state_30168__$1;(statearr_30192_30224[2] = null);
(statearr_30192_30224[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30169 === 18))
{var inst_30131 = (state_30168[9]);var inst_30136 = (state_30168[12]);var inst_30144 = (state_30168[2]);var inst_30145 = cljs.core.conj.call(null,inst_30131,inst_30144);var inst_30130 = inst_30136;var inst_30131__$1 = inst_30145;var state_30168__$1 = (function (){var statearr_30193 = state_30168;(statearr_30193[9] = inst_30131__$1);
(statearr_30193[10] = inst_30130);
return statearr_30193;
})();var statearr_30194_30225 = state_30168__$1;(statearr_30194_30225[2] = null);
(statearr_30194_30225[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30169 === 19))
{var inst_30141 = (state_30168[2]);var state_30168__$1 = state_30168;var statearr_30195_30226 = state_30168__$1;(statearr_30195_30226[2] = inst_30141);
(statearr_30195_30226[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30169 === 20))
{var inst_30126 = (state_30168[7]);var state_30168__$1 = state_30168;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30168__$1,23,inst_30126);
} else
{if((state_val_30169 === 21))
{var state_30168__$1 = state_30168;var statearr_30196_30227 = state_30168__$1;(statearr_30196_30227[2] = null);
(statearr_30196_30227[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30169 === 22))
{var inst_30157 = (state_30168[2]);var state_30168__$1 = state_30168;var statearr_30197_30228 = state_30168__$1;(statearr_30197_30228[2] = inst_30157);
(statearr_30197_30228[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30169 === 23))
{var inst_30154 = (state_30168[2]);var state_30168__$1 = state_30168;var statearr_30198_30229 = state_30168__$1;(statearr_30198_30229[2] = inst_30154);
(statearr_30198_30229[1] = 22);
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
var state_machine__5507__auto____0 = (function (){var statearr_30202 = [null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_30202[0] = state_machine__5507__auto__);
(statearr_30202[1] = 1);
return statearr_30202;
});
var state_machine__5507__auto____1 = (function (state_30168){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_30168);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e30203){if((e30203 instanceof Object))
{var ex__5510__auto__ = e30203;var statearr_30204_30230 = state_30168;(statearr_30204_30230[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30168);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e30203;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__30231 = state_30168;
state_30168 = G__30231;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_30168){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_30168);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_30205 = f__5522__auto__.call(null);(statearr_30205[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_30205;
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
var G__30234__delegate = function (req_args){var temp__4090__auto__ = cljs.core.apply.call(null,request_handler,req_args);if(cljs.core.truth_(temp__4090__auto__))
{var r = temp__4090__auto__;var rseq = ((cljs.core.sequential_QMARK_.call(null,r))?r:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [r], null));var vec__30233 = rseq;var rcomm = cljs.core.nth.call(null,vec__30233,0,null);var result_handler_args = cljs.core.nthnext.call(null,vec__30233,1);return cljs.core.async.put_BANG_.call(null,ocomm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rcomm,result_handler_args], null));
} else
{return null;
}
};
var G__30234 = function (var_args){
var req_args = null;if (arguments.length > 0) {
  req_args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__30234__delegate.call(this,req_args);};
G__30234.cljs$lang$maxFixedArity = 0;
G__30234.cljs$lang$applyTo = (function (arglist__30235){
var req_args = cljs.core.seq(arglist__30235);
return G__30234__delegate(req_args);
});
G__30234.cljs$core$IFn$_invoke$arity$variadic = G__30234__delegate;
return G__30234;
})()
;
});
/**
* @param {...*} var_args
*/
clustermap.api.log_api = (function() { 
var log_api__delegate = function (f,args){var ch = cljs.core.apply.call(null,f,args);var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_30253){var state_val_30254 = (state_30253[1]);if((state_val_30254 === 2))
{var inst_30250 = (state_30253[2]);var inst_30251 = console.log(inst_30250);var state_30253__$1 = state_30253;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30253__$1,inst_30251);
} else
{if((state_val_30254 === 1))
{var state_30253__$1 = state_30253;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30253__$1,2,ch);
} else
{return null;
}
}
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_30258 = [null,null,null,null,null,null,null];(statearr_30258[0] = state_machine__5507__auto__);
(statearr_30258[1] = 1);
return statearr_30258;
});
var state_machine__5507__auto____1 = (function (state_30253){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_30253);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e30259){if((e30259 instanceof Object))
{var ex__5510__auto__ = e30259;var statearr_30260_30262 = state_30253;(statearr_30260_30262[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30253);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e30259;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__30263 = state_30253;
state_30253 = G__30263;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_30253){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_30253);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_30261 = f__5522__auto__.call(null);(statearr_30261[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_30261;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5523__auto__);
}));
return c__5521__auto__;
};
var log_api = function (f,var_args){
var args = null;if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return log_api__delegate.call(this,f,args);};
log_api.cljs$lang$maxFixedArity = 1;
log_api.cljs$lang$applyTo = (function (arglist__30264){
var f = cljs.core.first(arglist__30264);
var args = cljs.core.rest(arglist__30264);
return log_api__delegate(f,args);
});
log_api.cljs$core$IFn$_invoke$arity$variadic = log_api__delegate;
return log_api;
})()
;
clustermap.api.map_json_params = (function map_json_params(m){return clojure.string.join.call(null,"&",cljs.core.map.call(null,(function (p__30267){var vec__30268 = p__30267;var k = cljs.core.nth.call(null,vec__30268,0,null);var v = cljs.core.nth.call(null,vec__30268,1,null);return [cljs.core.str(cljs.core.name.call(null,k)),cljs.core.str("="),cljs.core.str(JSON.stringify(cljs.core.clj__GT_js.call(null,v)))].join('');
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
boundarylines.cljs$lang$applyTo = (function (arglist__30269){
var id = cljs.core.first(arglist__30269);
arglist__30269 = cljs.core.next(arglist__30269);
var tolerance = cljs.core.first(arglist__30269);
var opts = cljs.core.rest(arglist__30269);
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
boundaryline_collection_index.cljs$lang$applyTo = (function (arglist__30270){
var id = cljs.core.first(arglist__30270);
var opts = cljs.core.rest(arglist__30270);
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
var constituencies__delegate = function (p__30271){var vec__30273 = p__30271;var type_ids = cljs.core.nth.call(null,vec__30273,0,null);return clustermap.api.GET.call(null,"/api/",clustermap.api.api_prefix,"/constituencies?",clustermap.api.map_json_params.call(null,type_ids));
};
var constituencies = function (var_args){
var p__30271 = null;if (arguments.length > 0) {
  p__30271 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return constituencies__delegate.call(this,p__30271);};
constituencies.cljs$lang$maxFixedArity = 0;
constituencies.cljs$lang$applyTo = (function (arglist__30274){
var p__30271 = cljs.core.seq(arglist__30274);
return constituencies__delegate(p__30271);
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
var portfolio_companies__delegate = function (p__30275){var vec__30277 = p__30275;var type_ids = cljs.core.nth.call(null,vec__30277,0,null);return clustermap.api.GET.call(null,[cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/portfolio-companies?sort={\"!latest_turnover\":\"desc\"}&"),cljs.core.str(clustermap.api.map_json_params.call(null,type_ids))].join(''));
};
var portfolio_companies = function (var_args){
var p__30275 = null;if (arguments.length > 0) {
  p__30275 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_companies__delegate.call(this,p__30275);};
portfolio_companies.cljs$lang$maxFixedArity = 0;
portfolio_companies.cljs$lang$applyTo = (function (arglist__30278){
var p__30275 = cljs.core.seq(arglist__30278);
return portfolio_companies__delegate(p__30275);
});
portfolio_companies.cljs$core$IFn$_invoke$arity$variadic = portfolio_companies__delegate;
return portfolio_companies;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_stats = (function() { 
var portfolio_company_stats__delegate = function (p__30279){var vec__30281 = p__30279;var type_ids = cljs.core.nth.call(null,vec__30281,0,null);return clustermap.api.GET.call(null,[cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/portfolio-company-stats?"),cljs.core.str(clustermap.api.map_json_params.call(null,type_ids))].join(''));
};
var portfolio_company_stats = function (var_args){
var p__30279 = null;if (arguments.length > 0) {
  p__30279 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_stats__delegate.call(this,p__30279);};
portfolio_company_stats.cljs$lang$maxFixedArity = 0;
portfolio_company_stats.cljs$lang$applyTo = (function (arglist__30282){
var p__30279 = cljs.core.seq(arglist__30282);
return portfolio_company_stats__delegate(p__30279);
});
portfolio_company_stats.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_stats__delegate;
return portfolio_company_stats;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_account_stats = (function() { 
var portfolio_company_account_stats__delegate = function (p__30283){var vec__30285 = p__30283;var type_ids = cljs.core.nth.call(null,vec__30285,0,null);return clustermap.api.GET.call(null,[cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/portfolio-company-account-stats?"),cljs.core.str(clustermap.api.map_json_params.call(null,type_ids))].join(''));
};
var portfolio_company_account_stats = function (var_args){
var p__30283 = null;if (arguments.length > 0) {
  p__30283 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_account_stats__delegate.call(this,p__30283);};
portfolio_company_account_stats.cljs$lang$maxFixedArity = 0;
portfolio_company_account_stats.cljs$lang$applyTo = (function (arglist__30286){
var p__30283 = cljs.core.seq(arglist__30286);
return portfolio_company_account_stats__delegate(p__30283);
});
portfolio_company_account_stats.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_account_stats__delegate;
return portfolio_company_account_stats;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_sites = (function() { 
var portfolio_company_sites__delegate = function (p__30287){var vec__30289 = p__30287;var type_ids = cljs.core.nth.call(null,vec__30289,0,null);return clustermap.api.GET.call(null,[cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/portfolio-company-sites?"),cljs.core.str(clustermap.api.map_json_params.call(null,type_ids))].join(''));
};
var portfolio_company_sites = function (var_args){
var p__30287 = null;if (arguments.length > 0) {
  p__30287 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_sites__delegate.call(this,p__30287);};
portfolio_company_sites.cljs$lang$maxFixedArity = 0;
portfolio_company_sites.cljs$lang$applyTo = (function (arglist__30290){
var p__30287 = cljs.core.seq(arglist__30290);
return portfolio_company_sites__delegate(p__30287);
});
portfolio_company_sites.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_sites__delegate;
return portfolio_company_sites;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_locations = (function() { 
var portfolio_company_locations__delegate = function (p__30291){var vec__30293 = p__30291;var type_ids = cljs.core.nth.call(null,vec__30293,0,null);return clustermap.api.GET.call(null,[cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/portfolio-company-locations?"),cljs.core.str(clustermap.api.map_json_params.call(null,type_ids))].join(''));
};
var portfolio_company_locations = function (var_args){
var p__30291 = null;if (arguments.length > 0) {
  p__30291 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_locations__delegate.call(this,p__30291);};
portfolio_company_locations.cljs$lang$maxFixedArity = 0;
portfolio_company_locations.cljs$lang$applyTo = (function (arglist__30294){
var p__30291 = cljs.core.seq(arglist__30294);
return portfolio_company_locations__delegate(p__30291);
});
portfolio_company_locations.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_locations__delegate;
return portfolio_company_locations;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_site_stats = (function() { 
var portfolio_company_site_stats__delegate = function (p__30295){var vec__30297 = p__30295;var type_ids = cljs.core.nth.call(null,vec__30297,0,null);return clustermap.api.GET.call(null,[cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/portfolio-company-site-stats?"),cljs.core.str(clustermap.api.map_json_params.call(null,type_ids))].join(''));
};
var portfolio_company_site_stats = function (var_args){
var p__30295 = null;if (arguments.length > 0) {
  p__30295 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_site_stats__delegate.call(this,p__30295);};
portfolio_company_site_stats.cljs$lang$maxFixedArity = 0;
portfolio_company_site_stats.cljs$lang$applyTo = (function (arglist__30298){
var p__30295 = cljs.core.seq(arglist__30298);
return portfolio_company_site_stats__delegate(p__30295);
});
portfolio_company_site_stats.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_site_stats__delegate;
return portfolio_company_site_stats;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_site_account_timelines = (function() { 
var portfolio_company_site_account_timelines__delegate = function (p__30299){var vec__30301 = p__30299;var type_ids = cljs.core.nth.call(null,vec__30301,0,null);return clustermap.api.GET.call(null,[cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/portfolio-company-site-account-timelines?"),cljs.core.str(clustermap.api.map_json_params.call(null,type_ids))].join(''));
};
var portfolio_company_site_account_timelines = function (var_args){
var p__30299 = null;if (arguments.length > 0) {
  p__30299 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_site_account_timelines__delegate.call(this,p__30299);};
portfolio_company_site_account_timelines.cljs$lang$maxFixedArity = 0;
portfolio_company_site_account_timelines.cljs$lang$applyTo = (function (arglist__30302){
var p__30299 = cljs.core.seq(arglist__30302);
return portfolio_company_site_account_timelines__delegate(p__30299);
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
var investor_comapnies__delegate = function (p__30303){var vec__30305 = p__30303;var type_ids = cljs.core.nth.call(null,vec__30305,0,null);return clustermap.api.GET.call(null,[cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/investor-companies?"),cljs.core.str(clustermap.api.map_json_params.call(null,type_ids))].join(''));
};
var investor_comapnies = function (var_args){
var p__30303 = null;if (arguments.length > 0) {
  p__30303 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return investor_comapnies__delegate.call(this,p__30303);};
investor_comapnies.cljs$lang$maxFixedArity = 0;
investor_comapnies.cljs$lang$applyTo = (function (arglist__30306){
var p__30303 = cljs.core.seq(arglist__30306);
return investor_comapnies__delegate(p__30303);
});
investor_comapnies.cljs$core$IFn$_invoke$arity$variadic = investor_comapnies__delegate;
return investor_comapnies;
})()
;
