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
var GET__delegate = function (url,p__30052){var map__30054 = p__30052;var map__30054__$1 = ((cljs.core.seq_QMARK_.call(null,map__30054))?cljs.core.apply.call(null,cljs.core.hash_map,map__30054):map__30054);var raw = cljs.core.get.call(null,map__30054__$1,new cljs.core.Keyword(null,"raw","raw",1014016922));var comm = cljs.core.async.chan.call(null,1);goog.net.XhrIo.send(url,(function (event){cljs.core.async.put_BANG_.call(null,comm,(function (d){if(cljs.core.truth_(raw))
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
var p__30052 = null;if (arguments.length > 1) {
  p__30052 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return GET__delegate.call(this,url,p__30052);};
GET.cljs$lang$maxFixedArity = 1;
GET.cljs$lang$applyTo = (function (arglist__30055){
var url = cljs.core.first(arglist__30055);
var p__30052 = cljs.core.rest(arglist__30055);
return GET__delegate(url,p__30052);
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
clustermap.api.ordered_api_results = (function ordered_api_results(ocomm,handler){var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_30188){var state_val_30189 = (state_30188[1]);if((state_val_30189 === 1))
{var state_30188__$1 = state_30188;var statearr_30190_30226 = state_30188__$1;(statearr_30190_30226[2] = null);
(statearr_30190_30226[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30189 === 2))
{var state_30188__$1 = state_30188;if(true)
{var statearr_30191_30227 = state_30188__$1;(statearr_30191_30227[1] = 4);
} else
{var statearr_30192_30228 = state_30188__$1;(statearr_30192_30228[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30189 === 3))
{var inst_30186 = (state_30188[2]);var state_30188__$1 = state_30188;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30188__$1,inst_30186);
} else
{if((state_val_30189 === 4))
{var state_30188__$1 = state_30188;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30188__$1,7,ocomm);
} else
{if((state_val_30189 === 5))
{var state_30188__$1 = state_30188;var statearr_30193_30229 = state_30188__$1;(statearr_30193_30229[2] = null);
(statearr_30193_30229[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30189 === 6))
{var inst_30184 = (state_30188[2]);var state_30188__$1 = state_30188;var statearr_30194_30230 = state_30188__$1;(statearr_30194_30230[2] = inst_30184);
(statearr_30194_30230[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30189 === 7))
{var inst_30146 = (state_30188[7]);var inst_30145 = (state_30188[2]);var inst_30146__$1 = cljs.core.nth.call(null,inst_30145,0,null);var inst_30147 = cljs.core.nth.call(null,inst_30145,1,null);var inst_30148 = cljs.core.sequential_QMARK_.call(null,inst_30146__$1);var state_30188__$1 = (function (){var statearr_30195 = state_30188;(statearr_30195[7] = inst_30146__$1);
(statearr_30195[8] = inst_30147);
return statearr_30195;
})();if(inst_30148)
{var statearr_30196_30231 = state_30188__$1;(statearr_30196_30231[1] = 8);
} else
{var statearr_30197_30232 = state_30188__$1;(statearr_30197_30232[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30189 === 8))
{var inst_30146 = (state_30188[7]);var inst_30150 = inst_30146;var inst_30151 = cljs.core.PersistentVector.EMPTY;var state_30188__$1 = (function (){var statearr_30198 = state_30188;(statearr_30198[9] = inst_30150);
(statearr_30198[10] = inst_30151);
return statearr_30198;
})();var statearr_30199_30233 = state_30188__$1;(statearr_30199_30233[2] = null);
(statearr_30199_30233[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30189 === 9))
{var inst_30146 = (state_30188[7]);var state_30188__$1 = state_30188;if(cljs.core.truth_(inst_30146))
{var statearr_30200_30234 = state_30188__$1;(statearr_30200_30234[1] = 20);
} else
{var statearr_30201_30235 = state_30188__$1;(statearr_30201_30235[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30189 === 10))
{var inst_30147 = (state_30188[8]);var inst_30179 = (state_30188[2]);var inst_30180 = cljs.core.apply.call(null,handler,inst_30179,inst_30147);var state_30188__$1 = (function (){var statearr_30202 = state_30188;(statearr_30202[11] = inst_30180);
return statearr_30202;
})();var statearr_30203_30236 = state_30188__$1;(statearr_30203_30236[2] = null);
(statearr_30203_30236[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30189 === 11))
{var inst_30150 = (state_30188[9]);var inst_30153 = cljs.core.empty_QMARK_.call(null,inst_30150);var state_30188__$1 = state_30188;if(inst_30153)
{var statearr_30204_30237 = state_30188__$1;(statearr_30204_30237[1] = 13);
} else
{var statearr_30205_30238 = state_30188__$1;(statearr_30205_30238[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30189 === 12))
{var inst_30170 = (state_30188[2]);var state_30188__$1 = state_30188;var statearr_30206_30239 = state_30188__$1;(statearr_30206_30239[2] = inst_30170);
(statearr_30206_30239[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30189 === 13))
{var inst_30151 = (state_30188[10]);var state_30188__$1 = state_30188;var statearr_30207_30240 = state_30188__$1;(statearr_30207_30240[2] = inst_30151);
(statearr_30207_30240[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30189 === 14))
{var inst_30150 = (state_30188[9]);var inst_30156 = cljs.core.rest.call(null,inst_30150);var inst_30157 = cljs.core.first.call(null,inst_30150);var state_30188__$1 = (function (){var statearr_30208 = state_30188;(statearr_30208[12] = inst_30156);
return statearr_30208;
})();if(cljs.core.truth_(inst_30157))
{var statearr_30209_30241 = state_30188__$1;(statearr_30209_30241[1] = 16);
} else
{var statearr_30210_30242 = state_30188__$1;(statearr_30210_30242[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30189 === 15))
{var inst_30168 = (state_30188[2]);var state_30188__$1 = state_30188;var statearr_30211_30243 = state_30188__$1;(statearr_30211_30243[2] = inst_30168);
(statearr_30211_30243[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30189 === 16))
{var inst_30150 = (state_30188[9]);var inst_30159 = cljs.core.first.call(null,inst_30150);var state_30188__$1 = state_30188;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30188__$1,19,inst_30159);
} else
{if((state_val_30189 === 17))
{var state_30188__$1 = state_30188;var statearr_30212_30244 = state_30188__$1;(statearr_30212_30244[2] = null);
(statearr_30212_30244[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30189 === 18))
{var inst_30156 = (state_30188[12]);var inst_30151 = (state_30188[10]);var inst_30164 = (state_30188[2]);var inst_30165 = cljs.core.conj.call(null,inst_30151,inst_30164);var inst_30150 = inst_30156;var inst_30151__$1 = inst_30165;var state_30188__$1 = (function (){var statearr_30213 = state_30188;(statearr_30213[9] = inst_30150);
(statearr_30213[10] = inst_30151__$1);
return statearr_30213;
})();var statearr_30214_30245 = state_30188__$1;(statearr_30214_30245[2] = null);
(statearr_30214_30245[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30189 === 19))
{var inst_30161 = (state_30188[2]);var state_30188__$1 = state_30188;var statearr_30215_30246 = state_30188__$1;(statearr_30215_30246[2] = inst_30161);
(statearr_30215_30246[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30189 === 20))
{var inst_30146 = (state_30188[7]);var state_30188__$1 = state_30188;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30188__$1,23,inst_30146);
} else
{if((state_val_30189 === 21))
{var state_30188__$1 = state_30188;var statearr_30216_30247 = state_30188__$1;(statearr_30216_30247[2] = null);
(statearr_30216_30247[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30189 === 22))
{var inst_30177 = (state_30188[2]);var state_30188__$1 = state_30188;var statearr_30217_30248 = state_30188__$1;(statearr_30217_30248[2] = inst_30177);
(statearr_30217_30248[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30189 === 23))
{var inst_30174 = (state_30188[2]);var state_30188__$1 = state_30188;var statearr_30218_30249 = state_30188__$1;(statearr_30218_30249[2] = inst_30174);
(statearr_30218_30249[1] = 22);
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
var state_machine__5507__auto____0 = (function (){var statearr_30222 = [null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_30222[0] = state_machine__5507__auto__);
(statearr_30222[1] = 1);
return statearr_30222;
});
var state_machine__5507__auto____1 = (function (state_30188){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_30188);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e30223){if((e30223 instanceof Object))
{var ex__5510__auto__ = e30223;var statearr_30224_30250 = state_30188;(statearr_30224_30250[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30188);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e30223;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__30251 = state_30188;
state_30188 = G__30251;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_30188){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_30188);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_30225 = f__5522__auto__.call(null);(statearr_30225[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_30225;
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
var G__30254__delegate = function (req_args){var temp__4090__auto__ = cljs.core.apply.call(null,request_handler,req_args);if(cljs.core.truth_(temp__4090__auto__))
{var r = temp__4090__auto__;var rseq = ((cljs.core.sequential_QMARK_.call(null,r))?r:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [r], null));var vec__30253 = rseq;var rcomm = cljs.core.nth.call(null,vec__30253,0,null);var result_handler_args = cljs.core.nthnext.call(null,vec__30253,1);return cljs.core.async.put_BANG_.call(null,ocomm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rcomm,result_handler_args], null));
} else
{return null;
}
};
var G__30254 = function (var_args){
var req_args = null;if (arguments.length > 0) {
  req_args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__30254__delegate.call(this,req_args);};
G__30254.cljs$lang$maxFixedArity = 0;
G__30254.cljs$lang$applyTo = (function (arglist__30255){
var req_args = cljs.core.seq(arglist__30255);
return G__30254__delegate(req_args);
});
G__30254.cljs$core$IFn$_invoke$arity$variadic = G__30254__delegate;
return G__30254;
})()
;
});
/**
* @param {...*} var_args
*/
clustermap.api.log_api = (function() { 
var log_api__delegate = function (f,args){var ch = cljs.core.apply.call(null,f,args);var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_30273){var state_val_30274 = (state_30273[1]);if((state_val_30274 === 2))
{var inst_30270 = (state_30273[2]);var inst_30271 = console.log(inst_30270);var state_30273__$1 = state_30273;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30273__$1,inst_30271);
} else
{if((state_val_30274 === 1))
{var state_30273__$1 = state_30273;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30273__$1,2,ch);
} else
{return null;
}
}
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_30278 = [null,null,null,null,null,null,null];(statearr_30278[0] = state_machine__5507__auto__);
(statearr_30278[1] = 1);
return statearr_30278;
});
var state_machine__5507__auto____1 = (function (state_30273){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_30273);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e30279){if((e30279 instanceof Object))
{var ex__5510__auto__ = e30279;var statearr_30280_30282 = state_30273;(statearr_30280_30282[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30273);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e30279;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__30283 = state_30273;
state_30273 = G__30283;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_30273){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_30273);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_30281 = f__5522__auto__.call(null);(statearr_30281[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_30281;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5523__auto__);
}));
return c__5521__auto__;
};
var log_api = function (f,var_args){
var args = null;if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return log_api__delegate.call(this,f,args);};
log_api.cljs$lang$maxFixedArity = 1;
log_api.cljs$lang$applyTo = (function (arglist__30284){
var f = cljs.core.first(arglist__30284);
var args = cljs.core.rest(arglist__30284);
return log_api__delegate(f,args);
});
log_api.cljs$core$IFn$_invoke$arity$variadic = log_api__delegate;
return log_api;
})()
;
clustermap.api.map_json_params = (function map_json_params(m){return clojure.string.join.call(null,"&",cljs.core.map.call(null,(function (p__30287){var vec__30288 = p__30287;var k = cljs.core.nth.call(null,vec__30288,0,null);var v = cljs.core.nth.call(null,vec__30288,1,null);return [cljs.core.str(cljs.core.name.call(null,k)),cljs.core.str("="),cljs.core.str(JSON.stringify(cljs.core.clj__GT_js.call(null,v)))].join('');
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
boundarylines.cljs$lang$applyTo = (function (arglist__30289){
var id = cljs.core.first(arglist__30289);
arglist__30289 = cljs.core.next(arglist__30289);
var tolerance = cljs.core.first(arglist__30289);
var opts = cljs.core.rest(arglist__30289);
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
boundaryline_collection_index.cljs$lang$applyTo = (function (arglist__30290){
var id = cljs.core.first(arglist__30290);
var opts = cljs.core.rest(arglist__30290);
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
var constituencies__delegate = function (p__30291){var vec__30293 = p__30291;var type_ids = cljs.core.nth.call(null,vec__30293,0,null);return clustermap.api.GET.call(null,"/api/",clustermap.api.api_prefix,"/constituencies?",clustermap.api.map_json_params.call(null,type_ids));
};
var constituencies = function (var_args){
var p__30291 = null;if (arguments.length > 0) {
  p__30291 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return constituencies__delegate.call(this,p__30291);};
constituencies.cljs$lang$maxFixedArity = 0;
constituencies.cljs$lang$applyTo = (function (arglist__30294){
var p__30291 = cljs.core.seq(arglist__30294);
return constituencies__delegate(p__30291);
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
var portfolio_companies__delegate = function (p__30295){var vec__30297 = p__30295;var type_ids = cljs.core.nth.call(null,vec__30297,0,null);return clustermap.api.GET.call(null,[cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/portfolio-companies?sort={\"!latest_turnover\":\"desc\"}&"),cljs.core.str(clustermap.api.map_json_params.call(null,type_ids))].join(''));
};
var portfolio_companies = function (var_args){
var p__30295 = null;if (arguments.length > 0) {
  p__30295 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_companies__delegate.call(this,p__30295);};
portfolio_companies.cljs$lang$maxFixedArity = 0;
portfolio_companies.cljs$lang$applyTo = (function (arglist__30298){
var p__30295 = cljs.core.seq(arglist__30298);
return portfolio_companies__delegate(p__30295);
});
portfolio_companies.cljs$core$IFn$_invoke$arity$variadic = portfolio_companies__delegate;
return portfolio_companies;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_stats = (function() { 
var portfolio_company_stats__delegate = function (p__30299){var vec__30301 = p__30299;var type_ids = cljs.core.nth.call(null,vec__30301,0,null);return clustermap.api.GET.call(null,[cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/portfolio-company-stats?"),cljs.core.str(clustermap.api.map_json_params.call(null,type_ids))].join(''));
};
var portfolio_company_stats = function (var_args){
var p__30299 = null;if (arguments.length > 0) {
  p__30299 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_stats__delegate.call(this,p__30299);};
portfolio_company_stats.cljs$lang$maxFixedArity = 0;
portfolio_company_stats.cljs$lang$applyTo = (function (arglist__30302){
var p__30299 = cljs.core.seq(arglist__30302);
return portfolio_company_stats__delegate(p__30299);
});
portfolio_company_stats.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_stats__delegate;
return portfolio_company_stats;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_account_stats = (function() { 
var portfolio_company_account_stats__delegate = function (p__30303){var vec__30305 = p__30303;var type_ids = cljs.core.nth.call(null,vec__30305,0,null);return clustermap.api.GET.call(null,[cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/portfolio-company-account-stats?"),cljs.core.str(clustermap.api.map_json_params.call(null,type_ids))].join(''));
};
var portfolio_company_account_stats = function (var_args){
var p__30303 = null;if (arguments.length > 0) {
  p__30303 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_account_stats__delegate.call(this,p__30303);};
portfolio_company_account_stats.cljs$lang$maxFixedArity = 0;
portfolio_company_account_stats.cljs$lang$applyTo = (function (arglist__30306){
var p__30303 = cljs.core.seq(arglist__30306);
return portfolio_company_account_stats__delegate(p__30303);
});
portfolio_company_account_stats.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_account_stats__delegate;
return portfolio_company_account_stats;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_sites = (function() { 
var portfolio_company_sites__delegate = function (p__30307){var vec__30309 = p__30307;var type_ids = cljs.core.nth.call(null,vec__30309,0,null);return clustermap.api.GET.call(null,[cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/portfolio-company-sites?"),cljs.core.str(clustermap.api.map_json_params.call(null,type_ids))].join(''));
};
var portfolio_company_sites = function (var_args){
var p__30307 = null;if (arguments.length > 0) {
  p__30307 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_sites__delegate.call(this,p__30307);};
portfolio_company_sites.cljs$lang$maxFixedArity = 0;
portfolio_company_sites.cljs$lang$applyTo = (function (arglist__30310){
var p__30307 = cljs.core.seq(arglist__30310);
return portfolio_company_sites__delegate(p__30307);
});
portfolio_company_sites.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_sites__delegate;
return portfolio_company_sites;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_locations = (function() { 
var portfolio_company_locations__delegate = function (p__30311){var vec__30313 = p__30311;var type_ids = cljs.core.nth.call(null,vec__30313,0,null);return clustermap.api.GET.call(null,[cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/portfolio-company-locations?"),cljs.core.str(clustermap.api.map_json_params.call(null,type_ids))].join(''));
};
var portfolio_company_locations = function (var_args){
var p__30311 = null;if (arguments.length > 0) {
  p__30311 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_locations__delegate.call(this,p__30311);};
portfolio_company_locations.cljs$lang$maxFixedArity = 0;
portfolio_company_locations.cljs$lang$applyTo = (function (arglist__30314){
var p__30311 = cljs.core.seq(arglist__30314);
return portfolio_company_locations__delegate(p__30311);
});
portfolio_company_locations.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_locations__delegate;
return portfolio_company_locations;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_site_stats = (function() { 
var portfolio_company_site_stats__delegate = function (p__30315){var vec__30317 = p__30315;var type_ids = cljs.core.nth.call(null,vec__30317,0,null);return clustermap.api.GET.call(null,[cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/portfolio-company-site-stats?"),cljs.core.str(clustermap.api.map_json_params.call(null,type_ids))].join(''));
};
var portfolio_company_site_stats = function (var_args){
var p__30315 = null;if (arguments.length > 0) {
  p__30315 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_site_stats__delegate.call(this,p__30315);};
portfolio_company_site_stats.cljs$lang$maxFixedArity = 0;
portfolio_company_site_stats.cljs$lang$applyTo = (function (arglist__30318){
var p__30315 = cljs.core.seq(arglist__30318);
return portfolio_company_site_stats__delegate(p__30315);
});
portfolio_company_site_stats.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_site_stats__delegate;
return portfolio_company_site_stats;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_site_account_timelines = (function() { 
var portfolio_company_site_account_timelines__delegate = function (p__30319){var vec__30321 = p__30319;var type_ids = cljs.core.nth.call(null,vec__30321,0,null);return clustermap.api.GET.call(null,[cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/portfolio-company-site-account-timelines?"),cljs.core.str(clustermap.api.map_json_params.call(null,type_ids))].join(''));
};
var portfolio_company_site_account_timelines = function (var_args){
var p__30319 = null;if (arguments.length > 0) {
  p__30319 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_site_account_timelines__delegate.call(this,p__30319);};
portfolio_company_site_account_timelines.cljs$lang$maxFixedArity = 0;
portfolio_company_site_account_timelines.cljs$lang$applyTo = (function (arglist__30322){
var p__30319 = cljs.core.seq(arglist__30322);
return portfolio_company_site_account_timelines__delegate(p__30319);
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
var investor_comapnies__delegate = function (p__30323){var vec__30325 = p__30323;var type_ids = cljs.core.nth.call(null,vec__30325,0,null);return clustermap.api.GET.call(null,[cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/investor-companies?"),cljs.core.str(clustermap.api.map_json_params.call(null,type_ids))].join(''));
};
var investor_comapnies = function (var_args){
var p__30323 = null;if (arguments.length > 0) {
  p__30323 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return investor_comapnies__delegate.call(this,p__30323);};
investor_comapnies.cljs$lang$maxFixedArity = 0;
investor_comapnies.cljs$lang$applyTo = (function (arglist__30326){
var p__30323 = cljs.core.seq(arglist__30326);
return investor_comapnies__delegate(p__30323);
});
investor_comapnies.cljs$core$IFn$_invoke$arity$variadic = investor_comapnies__delegate;
return investor_comapnies;
})()
;
