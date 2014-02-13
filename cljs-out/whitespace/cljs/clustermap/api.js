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
var GET__delegate = function (url,p__30180){var map__30182 = p__30180;var map__30182__$1 = ((cljs.core.seq_QMARK_.call(null,map__30182))?cljs.core.apply.call(null,cljs.core.hash_map,map__30182):map__30182);var raw = cljs.core.get.call(null,map__30182__$1,new cljs.core.Keyword(null,"raw","raw",1014016922));var comm = cljs.core.async.chan.call(null,1);goog.net.XhrIo.send(url,(function (event){cljs.core.async.put_BANG_.call(null,comm,(function (d){if(cljs.core.truth_(raw))
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
var p__30180 = null;if (arguments.length > 1) {
  p__30180 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return GET__delegate.call(this,url,p__30180);};
GET.cljs$lang$maxFixedArity = 1;
GET.cljs$lang$applyTo = (function (arglist__30183){
var url = cljs.core.first(arglist__30183);
var p__30180 = cljs.core.rest(arglist__30183);
return GET__delegate(url,p__30180);
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
clustermap.api.ordered_api_results = (function ordered_api_results(ocomm,handler){var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_30316){var state_val_30317 = (state_30316[1]);if((state_val_30317 === 1))
{var state_30316__$1 = state_30316;var statearr_30318_30354 = state_30316__$1;(statearr_30318_30354[2] = null);
(statearr_30318_30354[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30317 === 2))
{var state_30316__$1 = state_30316;if(true)
{var statearr_30319_30355 = state_30316__$1;(statearr_30319_30355[1] = 4);
} else
{var statearr_30320_30356 = state_30316__$1;(statearr_30320_30356[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30317 === 3))
{var inst_30314 = (state_30316[2]);var state_30316__$1 = state_30316;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30316__$1,inst_30314);
} else
{if((state_val_30317 === 4))
{var state_30316__$1 = state_30316;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30316__$1,7,ocomm);
} else
{if((state_val_30317 === 5))
{var state_30316__$1 = state_30316;var statearr_30321_30357 = state_30316__$1;(statearr_30321_30357[2] = null);
(statearr_30321_30357[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30317 === 6))
{var inst_30312 = (state_30316[2]);var state_30316__$1 = state_30316;var statearr_30322_30358 = state_30316__$1;(statearr_30322_30358[2] = inst_30312);
(statearr_30322_30358[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30317 === 7))
{var inst_30274 = (state_30316[7]);var inst_30273 = (state_30316[2]);var inst_30274__$1 = cljs.core.nth.call(null,inst_30273,0,null);var inst_30275 = cljs.core.nth.call(null,inst_30273,1,null);var inst_30276 = cljs.core.sequential_QMARK_.call(null,inst_30274__$1);var state_30316__$1 = (function (){var statearr_30323 = state_30316;(statearr_30323[8] = inst_30275);
(statearr_30323[7] = inst_30274__$1);
return statearr_30323;
})();if(inst_30276)
{var statearr_30324_30359 = state_30316__$1;(statearr_30324_30359[1] = 8);
} else
{var statearr_30325_30360 = state_30316__$1;(statearr_30325_30360[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30317 === 8))
{var inst_30274 = (state_30316[7]);var inst_30278 = inst_30274;var inst_30279 = cljs.core.PersistentVector.EMPTY;var state_30316__$1 = (function (){var statearr_30326 = state_30316;(statearr_30326[9] = inst_30278);
(statearr_30326[10] = inst_30279);
return statearr_30326;
})();var statearr_30327_30361 = state_30316__$1;(statearr_30327_30361[2] = null);
(statearr_30327_30361[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30317 === 9))
{var inst_30274 = (state_30316[7]);var state_30316__$1 = state_30316;if(cljs.core.truth_(inst_30274))
{var statearr_30328_30362 = state_30316__$1;(statearr_30328_30362[1] = 20);
} else
{var statearr_30329_30363 = state_30316__$1;(statearr_30329_30363[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30317 === 10))
{var inst_30275 = (state_30316[8]);var inst_30307 = (state_30316[2]);var inst_30308 = cljs.core.apply.call(null,handler,inst_30307,inst_30275);var state_30316__$1 = (function (){var statearr_30330 = state_30316;(statearr_30330[11] = inst_30308);
return statearr_30330;
})();var statearr_30331_30364 = state_30316__$1;(statearr_30331_30364[2] = null);
(statearr_30331_30364[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30317 === 11))
{var inst_30278 = (state_30316[9]);var inst_30281 = cljs.core.empty_QMARK_.call(null,inst_30278);var state_30316__$1 = state_30316;if(inst_30281)
{var statearr_30332_30365 = state_30316__$1;(statearr_30332_30365[1] = 13);
} else
{var statearr_30333_30366 = state_30316__$1;(statearr_30333_30366[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30317 === 12))
{var inst_30298 = (state_30316[2]);var state_30316__$1 = state_30316;var statearr_30334_30367 = state_30316__$1;(statearr_30334_30367[2] = inst_30298);
(statearr_30334_30367[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30317 === 13))
{var inst_30279 = (state_30316[10]);var state_30316__$1 = state_30316;var statearr_30335_30368 = state_30316__$1;(statearr_30335_30368[2] = inst_30279);
(statearr_30335_30368[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30317 === 14))
{var inst_30278 = (state_30316[9]);var inst_30284 = cljs.core.rest.call(null,inst_30278);var inst_30285 = cljs.core.first.call(null,inst_30278);var state_30316__$1 = (function (){var statearr_30336 = state_30316;(statearr_30336[12] = inst_30284);
return statearr_30336;
})();if(cljs.core.truth_(inst_30285))
{var statearr_30337_30369 = state_30316__$1;(statearr_30337_30369[1] = 16);
} else
{var statearr_30338_30370 = state_30316__$1;(statearr_30338_30370[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30317 === 15))
{var inst_30296 = (state_30316[2]);var state_30316__$1 = state_30316;var statearr_30339_30371 = state_30316__$1;(statearr_30339_30371[2] = inst_30296);
(statearr_30339_30371[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30317 === 16))
{var inst_30278 = (state_30316[9]);var inst_30287 = cljs.core.first.call(null,inst_30278);var state_30316__$1 = state_30316;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30316__$1,19,inst_30287);
} else
{if((state_val_30317 === 17))
{var state_30316__$1 = state_30316;var statearr_30340_30372 = state_30316__$1;(statearr_30340_30372[2] = null);
(statearr_30340_30372[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30317 === 18))
{var inst_30279 = (state_30316[10]);var inst_30284 = (state_30316[12]);var inst_30292 = (state_30316[2]);var inst_30293 = cljs.core.conj.call(null,inst_30279,inst_30292);var inst_30278 = inst_30284;var inst_30279__$1 = inst_30293;var state_30316__$1 = (function (){var statearr_30341 = state_30316;(statearr_30341[9] = inst_30278);
(statearr_30341[10] = inst_30279__$1);
return statearr_30341;
})();var statearr_30342_30373 = state_30316__$1;(statearr_30342_30373[2] = null);
(statearr_30342_30373[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30317 === 19))
{var inst_30289 = (state_30316[2]);var state_30316__$1 = state_30316;var statearr_30343_30374 = state_30316__$1;(statearr_30343_30374[2] = inst_30289);
(statearr_30343_30374[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30317 === 20))
{var inst_30274 = (state_30316[7]);var state_30316__$1 = state_30316;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30316__$1,23,inst_30274);
} else
{if((state_val_30317 === 21))
{var state_30316__$1 = state_30316;var statearr_30344_30375 = state_30316__$1;(statearr_30344_30375[2] = null);
(statearr_30344_30375[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30317 === 22))
{var inst_30305 = (state_30316[2]);var state_30316__$1 = state_30316;var statearr_30345_30376 = state_30316__$1;(statearr_30345_30376[2] = inst_30305);
(statearr_30345_30376[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30317 === 23))
{var inst_30302 = (state_30316[2]);var state_30316__$1 = state_30316;var statearr_30346_30377 = state_30316__$1;(statearr_30346_30377[2] = inst_30302);
(statearr_30346_30377[1] = 22);
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
var state_machine__5507__auto____0 = (function (){var statearr_30350 = [null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_30350[0] = state_machine__5507__auto__);
(statearr_30350[1] = 1);
return statearr_30350;
});
var state_machine__5507__auto____1 = (function (state_30316){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_30316);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e30351){if((e30351 instanceof Object))
{var ex__5510__auto__ = e30351;var statearr_30352_30378 = state_30316;(statearr_30352_30378[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30316);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e30351;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__30379 = state_30316;
state_30316 = G__30379;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_30316){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_30316);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_30353 = f__5522__auto__.call(null);(statearr_30353[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_30353;
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
var G__30382__delegate = function (req_args){var temp__4090__auto__ = cljs.core.apply.call(null,request_handler,req_args);if(cljs.core.truth_(temp__4090__auto__))
{var r = temp__4090__auto__;var rseq = ((cljs.core.sequential_QMARK_.call(null,r))?r:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [r], null));var vec__30381 = rseq;var rcomm = cljs.core.nth.call(null,vec__30381,0,null);var result_handler_args = cljs.core.nthnext.call(null,vec__30381,1);return cljs.core.async.put_BANG_.call(null,ocomm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rcomm,result_handler_args], null));
} else
{return null;
}
};
var G__30382 = function (var_args){
var req_args = null;if (arguments.length > 0) {
  req_args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__30382__delegate.call(this,req_args);};
G__30382.cljs$lang$maxFixedArity = 0;
G__30382.cljs$lang$applyTo = (function (arglist__30383){
var req_args = cljs.core.seq(arglist__30383);
return G__30382__delegate(req_args);
});
G__30382.cljs$core$IFn$_invoke$arity$variadic = G__30382__delegate;
return G__30382;
})()
;
});
/**
* @param {...*} var_args
*/
clustermap.api.log_api = (function() { 
var log_api__delegate = function (f,args){var ch = cljs.core.apply.call(null,f,args);var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_30401){var state_val_30402 = (state_30401[1]);if((state_val_30402 === 2))
{var inst_30398 = (state_30401[2]);var inst_30399 = console.log(inst_30398);var state_30401__$1 = state_30401;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30401__$1,inst_30399);
} else
{if((state_val_30402 === 1))
{var state_30401__$1 = state_30401;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30401__$1,2,ch);
} else
{return null;
}
}
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_30406 = [null,null,null,null,null,null,null];(statearr_30406[0] = state_machine__5507__auto__);
(statearr_30406[1] = 1);
return statearr_30406;
});
var state_machine__5507__auto____1 = (function (state_30401){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_30401);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e30407){if((e30407 instanceof Object))
{var ex__5510__auto__ = e30407;var statearr_30408_30410 = state_30401;(statearr_30408_30410[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30401);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e30407;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__30411 = state_30401;
state_30401 = G__30411;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_30401){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_30401);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_30409 = f__5522__auto__.call(null);(statearr_30409[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_30409;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5523__auto__);
}));
return c__5521__auto__;
};
var log_api = function (f,var_args){
var args = null;if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return log_api__delegate.call(this,f,args);};
log_api.cljs$lang$maxFixedArity = 1;
log_api.cljs$lang$applyTo = (function (arglist__30412){
var f = cljs.core.first(arglist__30412);
var args = cljs.core.rest(arglist__30412);
return log_api__delegate(f,args);
});
log_api.cljs$core$IFn$_invoke$arity$variadic = log_api__delegate;
return log_api;
})()
;
clustermap.api.map_json_params = (function map_json_params(m){return clojure.string.join.call(null,"&",cljs.core.map.call(null,(function (p__30415){var vec__30416 = p__30415;var k = cljs.core.nth.call(null,vec__30416,0,null);var v = cljs.core.nth.call(null,vec__30416,1,null);return [cljs.core.str(cljs.core.name.call(null,k)),cljs.core.str("="),cljs.core.str(JSON.stringify(cljs.core.clj__GT_js.call(null,v)))].join('');
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
boundarylines.cljs$lang$applyTo = (function (arglist__30417){
var id = cljs.core.first(arglist__30417);
arglist__30417 = cljs.core.next(arglist__30417);
var tolerance = cljs.core.first(arglist__30417);
var opts = cljs.core.rest(arglist__30417);
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
boundaryline_collection_index.cljs$lang$applyTo = (function (arglist__30418){
var id = cljs.core.first(arglist__30418);
var opts = cljs.core.rest(arglist__30418);
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
var constituencies__delegate = function (p__30419){var vec__30421 = p__30419;var type_ids = cljs.core.nth.call(null,vec__30421,0,null);return clustermap.api.GET.call(null,"/api/",clustermap.api.api_prefix,"/constituencies?",clustermap.api.map_json_params.call(null,type_ids));
};
var constituencies = function (var_args){
var p__30419 = null;if (arguments.length > 0) {
  p__30419 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return constituencies__delegate.call(this,p__30419);};
constituencies.cljs$lang$maxFixedArity = 0;
constituencies.cljs$lang$applyTo = (function (arglist__30422){
var p__30419 = cljs.core.seq(arglist__30422);
return constituencies__delegate(p__30419);
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
var portfolio_companies__delegate = function (p__30423){var vec__30425 = p__30423;var type_ids = cljs.core.nth.call(null,vec__30425,0,null);return clustermap.api.GET.call(null,[cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/portfolio-companies?sort={\"!latest_turnover\":\"desc\"}&"),cljs.core.str(clustermap.api.map_json_params.call(null,type_ids))].join(''));
};
var portfolio_companies = function (var_args){
var p__30423 = null;if (arguments.length > 0) {
  p__30423 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_companies__delegate.call(this,p__30423);};
portfolio_companies.cljs$lang$maxFixedArity = 0;
portfolio_companies.cljs$lang$applyTo = (function (arglist__30426){
var p__30423 = cljs.core.seq(arglist__30426);
return portfolio_companies__delegate(p__30423);
});
portfolio_companies.cljs$core$IFn$_invoke$arity$variadic = portfolio_companies__delegate;
return portfolio_companies;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_stats = (function() { 
var portfolio_company_stats__delegate = function (p__30427){var vec__30429 = p__30427;var type_ids = cljs.core.nth.call(null,vec__30429,0,null);return clustermap.api.GET.call(null,[cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/portfolio-company-stats?"),cljs.core.str(clustermap.api.map_json_params.call(null,type_ids))].join(''));
};
var portfolio_company_stats = function (var_args){
var p__30427 = null;if (arguments.length > 0) {
  p__30427 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_stats__delegate.call(this,p__30427);};
portfolio_company_stats.cljs$lang$maxFixedArity = 0;
portfolio_company_stats.cljs$lang$applyTo = (function (arglist__30430){
var p__30427 = cljs.core.seq(arglist__30430);
return portfolio_company_stats__delegate(p__30427);
});
portfolio_company_stats.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_stats__delegate;
return portfolio_company_stats;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_account_stats = (function() { 
var portfolio_company_account_stats__delegate = function (p__30431){var vec__30433 = p__30431;var type_ids = cljs.core.nth.call(null,vec__30433,0,null);return clustermap.api.GET.call(null,[cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/portfolio-company-account-stats?"),cljs.core.str(clustermap.api.map_json_params.call(null,type_ids))].join(''));
};
var portfolio_company_account_stats = function (var_args){
var p__30431 = null;if (arguments.length > 0) {
  p__30431 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_account_stats__delegate.call(this,p__30431);};
portfolio_company_account_stats.cljs$lang$maxFixedArity = 0;
portfolio_company_account_stats.cljs$lang$applyTo = (function (arglist__30434){
var p__30431 = cljs.core.seq(arglist__30434);
return portfolio_company_account_stats__delegate(p__30431);
});
portfolio_company_account_stats.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_account_stats__delegate;
return portfolio_company_account_stats;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_sites = (function() { 
var portfolio_company_sites__delegate = function (p__30435){var vec__30437 = p__30435;var type_ids = cljs.core.nth.call(null,vec__30437,0,null);var type_ids__$1 = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"sort","sort",1017440528),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["?boundarylinecolls.uk_constituencies"], null)], null),type_ids);return clustermap.api.GET.call(null,[cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/portfolio-company-sites?"),cljs.core.str(clustermap.api.map_json_params.call(null,type_ids__$1))].join(''));
};
var portfolio_company_sites = function (var_args){
var p__30435 = null;if (arguments.length > 0) {
  p__30435 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_sites__delegate.call(this,p__30435);};
portfolio_company_sites.cljs$lang$maxFixedArity = 0;
portfolio_company_sites.cljs$lang$applyTo = (function (arglist__30438){
var p__30435 = cljs.core.seq(arglist__30438);
return portfolio_company_sites__delegate(p__30435);
});
portfolio_company_sites.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_sites__delegate;
return portfolio_company_sites;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_locations = (function() { 
var portfolio_company_locations__delegate = function (p__30439){var vec__30441 = p__30439;var type_ids = cljs.core.nth.call(null,vec__30441,0,null);return clustermap.api.GET.call(null,[cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/portfolio-company-locations?"),cljs.core.str(clustermap.api.map_json_params.call(null,type_ids))].join(''));
};
var portfolio_company_locations = function (var_args){
var p__30439 = null;if (arguments.length > 0) {
  p__30439 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_locations__delegate.call(this,p__30439);};
portfolio_company_locations.cljs$lang$maxFixedArity = 0;
portfolio_company_locations.cljs$lang$applyTo = (function (arglist__30442){
var p__30439 = cljs.core.seq(arglist__30442);
return portfolio_company_locations__delegate(p__30439);
});
portfolio_company_locations.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_locations__delegate;
return portfolio_company_locations;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_site_stats = (function() { 
var portfolio_company_site_stats__delegate = function (p__30443){var vec__30445 = p__30443;var type_ids = cljs.core.nth.call(null,vec__30445,0,null);return clustermap.api.GET.call(null,[cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/portfolio-company-site-stats?"),cljs.core.str(clustermap.api.map_json_params.call(null,type_ids))].join(''));
};
var portfolio_company_site_stats = function (var_args){
var p__30443 = null;if (arguments.length > 0) {
  p__30443 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_site_stats__delegate.call(this,p__30443);};
portfolio_company_site_stats.cljs$lang$maxFixedArity = 0;
portfolio_company_site_stats.cljs$lang$applyTo = (function (arglist__30446){
var p__30443 = cljs.core.seq(arglist__30446);
return portfolio_company_site_stats__delegate(p__30443);
});
portfolio_company_site_stats.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_site_stats__delegate;
return portfolio_company_site_stats;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_site_account_timelines = (function() { 
var portfolio_company_site_account_timelines__delegate = function (p__30447){var vec__30449 = p__30447;var type_ids = cljs.core.nth.call(null,vec__30449,0,null);return clustermap.api.GET.call(null,[cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/portfolio-company-site-account-timelines?"),cljs.core.str(clustermap.api.map_json_params.call(null,type_ids))].join(''));
};
var portfolio_company_site_account_timelines = function (var_args){
var p__30447 = null;if (arguments.length > 0) {
  p__30447 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_site_account_timelines__delegate.call(this,p__30447);};
portfolio_company_site_account_timelines.cljs$lang$maxFixedArity = 0;
portfolio_company_site_account_timelines.cljs$lang$applyTo = (function (arglist__30450){
var p__30447 = cljs.core.seq(arglist__30450);
return portfolio_company_site_account_timelines__delegate(p__30447);
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
var investor_comapnies__delegate = function (p__30451){var vec__30453 = p__30451;var type_ids = cljs.core.nth.call(null,vec__30453,0,null);return clustermap.api.GET.call(null,[cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/investor-companies?"),cljs.core.str(clustermap.api.map_json_params.call(null,type_ids))].join(''));
};
var investor_comapnies = function (var_args){
var p__30451 = null;if (arguments.length > 0) {
  p__30451 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return investor_comapnies__delegate.call(this,p__30451);};
investor_comapnies.cljs$lang$maxFixedArity = 0;
investor_comapnies.cljs$lang$applyTo = (function (arglist__30454){
var p__30451 = cljs.core.seq(arglist__30454);
return investor_comapnies__delegate(p__30451);
});
investor_comapnies.cljs$core$IFn$_invoke$arity$variadic = investor_comapnies__delegate;
return investor_comapnies;
})()
;
