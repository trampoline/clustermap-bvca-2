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
var GET__delegate = function (url,p__20231){var map__20233 = p__20231;var map__20233__$1 = ((cljs.core.seq_QMARK_(map__20233))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20233):map__20233);var raw = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20233__$1,cljs.core.constant$keyword$249);var comm = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);goog.net.XhrIo.send(url,(function (event){cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,(function (d){if(cljs.core.truth_(raw))
{return d;
} else
{return cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(d,cljs.core.array_seq([cljs.core.constant$keyword$230,true], 0));
}
}).call(null,((JSON.parse.cljs$core$IFn$_invoke$arity$1 ? JSON.parse.cljs$core$IFn$_invoke$arity$1(event.target.getResponseText()) : JSON.parse.call(null,event.target.getResponseText()))["data"])));
return cljs.core.async.close_BANG_(comm);
}));
return comm;
};
var GET = function (url,var_args){
var p__20231 = null;if (arguments.length > 1) {
  p__20231 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return GET__delegate.call(this,url,p__20231);};
GET.cljs$lang$maxFixedArity = 1;
GET.cljs$lang$applyTo = (function (arglist__20234){
var url = cljs.core.first(arglist__20234);
var p__20231 = cljs.core.rest(arglist__20234);
return GET__delegate(url,p__20231);
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
clustermap.api.ordered_api_results = (function ordered_api_results(ocomm,handler){var c__5521__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_20367){var state_val_20368 = (state_20367[1]);if((state_val_20368 === 1))
{var state_20367__$1 = state_20367;var statearr_20369_20405 = state_20367__$1;(statearr_20369_20405[2] = null);
(statearr_20369_20405[1] = 2);
return cljs.core.constant$keyword$235;
} else
{if((state_val_20368 === 2))
{var state_20367__$1 = state_20367;if(true)
{var statearr_20370_20406 = state_20367__$1;(statearr_20370_20406[1] = 4);
} else
{var statearr_20371_20407 = state_20367__$1;(statearr_20371_20407[1] = 5);
}
return cljs.core.constant$keyword$235;
} else
{if((state_val_20368 === 3))
{var inst_20365 = (state_20367[2]);var state_20367__$1 = state_20367;return cljs.core.async.impl.ioc_helpers.return_chan(state_20367__$1,inst_20365);
} else
{if((state_val_20368 === 4))
{var state_20367__$1 = state_20367;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20367__$1,7,ocomm);
} else
{if((state_val_20368 === 5))
{var state_20367__$1 = state_20367;var statearr_20372_20408 = state_20367__$1;(statearr_20372_20408[2] = null);
(statearr_20372_20408[1] = 6);
return cljs.core.constant$keyword$235;
} else
{if((state_val_20368 === 6))
{var inst_20363 = (state_20367[2]);var state_20367__$1 = state_20367;var statearr_20373_20409 = state_20367__$1;(statearr_20373_20409[2] = inst_20363);
(statearr_20373_20409[1] = 3);
return cljs.core.constant$keyword$235;
} else
{if((state_val_20368 === 7))
{var inst_20325 = (state_20367[7]);var inst_20324 = (state_20367[2]);var inst_20325__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_20324,0,null);var inst_20326 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_20324,1,null);var inst_20327 = cljs.core.sequential_QMARK_(inst_20325__$1);var state_20367__$1 = (function (){var statearr_20374 = state_20367;(statearr_20374[7] = inst_20325__$1);
(statearr_20374[8] = inst_20326);
return statearr_20374;
})();if(inst_20327)
{var statearr_20375_20410 = state_20367__$1;(statearr_20375_20410[1] = 8);
} else
{var statearr_20376_20411 = state_20367__$1;(statearr_20376_20411[1] = 9);
}
return cljs.core.constant$keyword$235;
} else
{if((state_val_20368 === 8))
{var inst_20325 = (state_20367[7]);var inst_20329 = inst_20325;var inst_20330 = cljs.core.PersistentVector.EMPTY;var state_20367__$1 = (function (){var statearr_20377 = state_20367;(statearr_20377[9] = inst_20330);
(statearr_20377[10] = inst_20329);
return statearr_20377;
})();var statearr_20378_20412 = state_20367__$1;(statearr_20378_20412[2] = null);
(statearr_20378_20412[1] = 11);
return cljs.core.constant$keyword$235;
} else
{if((state_val_20368 === 9))
{var inst_20325 = (state_20367[7]);var state_20367__$1 = state_20367;if(cljs.core.truth_(inst_20325))
{var statearr_20379_20413 = state_20367__$1;(statearr_20379_20413[1] = 20);
} else
{var statearr_20380_20414 = state_20367__$1;(statearr_20380_20414[1] = 21);
}
return cljs.core.constant$keyword$235;
} else
{if((state_val_20368 === 10))
{var inst_20326 = (state_20367[8]);var inst_20358 = (state_20367[2]);var inst_20359 = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(handler,inst_20358,inst_20326);var state_20367__$1 = (function (){var statearr_20381 = state_20367;(statearr_20381[11] = inst_20359);
return statearr_20381;
})();var statearr_20382_20415 = state_20367__$1;(statearr_20382_20415[2] = null);
(statearr_20382_20415[1] = 2);
return cljs.core.constant$keyword$235;
} else
{if((state_val_20368 === 11))
{var inst_20329 = (state_20367[10]);var inst_20332 = cljs.core.empty_QMARK_(inst_20329);var state_20367__$1 = state_20367;if(inst_20332)
{var statearr_20383_20416 = state_20367__$1;(statearr_20383_20416[1] = 13);
} else
{var statearr_20384_20417 = state_20367__$1;(statearr_20384_20417[1] = 14);
}
return cljs.core.constant$keyword$235;
} else
{if((state_val_20368 === 12))
{var inst_20349 = (state_20367[2]);var state_20367__$1 = state_20367;var statearr_20385_20418 = state_20367__$1;(statearr_20385_20418[2] = inst_20349);
(statearr_20385_20418[1] = 10);
return cljs.core.constant$keyword$235;
} else
{if((state_val_20368 === 13))
{var inst_20330 = (state_20367[9]);var state_20367__$1 = state_20367;var statearr_20386_20419 = state_20367__$1;(statearr_20386_20419[2] = inst_20330);
(statearr_20386_20419[1] = 15);
return cljs.core.constant$keyword$235;
} else
{if((state_val_20368 === 14))
{var inst_20329 = (state_20367[10]);var inst_20335 = cljs.core.rest(inst_20329);var inst_20336 = cljs.core.first(inst_20329);var state_20367__$1 = (function (){var statearr_20387 = state_20367;(statearr_20387[12] = inst_20335);
return statearr_20387;
})();if(cljs.core.truth_(inst_20336))
{var statearr_20388_20420 = state_20367__$1;(statearr_20388_20420[1] = 16);
} else
{var statearr_20389_20421 = state_20367__$1;(statearr_20389_20421[1] = 17);
}
return cljs.core.constant$keyword$235;
} else
{if((state_val_20368 === 15))
{var inst_20347 = (state_20367[2]);var state_20367__$1 = state_20367;var statearr_20390_20422 = state_20367__$1;(statearr_20390_20422[2] = inst_20347);
(statearr_20390_20422[1] = 12);
return cljs.core.constant$keyword$235;
} else
{if((state_val_20368 === 16))
{var inst_20329 = (state_20367[10]);var inst_20338 = cljs.core.first(inst_20329);var state_20367__$1 = state_20367;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20367__$1,19,inst_20338);
} else
{if((state_val_20368 === 17))
{var state_20367__$1 = state_20367;var statearr_20391_20423 = state_20367__$1;(statearr_20391_20423[2] = null);
(statearr_20391_20423[1] = 18);
return cljs.core.constant$keyword$235;
} else
{if((state_val_20368 === 18))
{var inst_20330 = (state_20367[9]);var inst_20335 = (state_20367[12]);var inst_20343 = (state_20367[2]);var inst_20344 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(inst_20330,inst_20343);var inst_20329 = inst_20335;var inst_20330__$1 = inst_20344;var state_20367__$1 = (function (){var statearr_20392 = state_20367;(statearr_20392[9] = inst_20330__$1);
(statearr_20392[10] = inst_20329);
return statearr_20392;
})();var statearr_20393_20424 = state_20367__$1;(statearr_20393_20424[2] = null);
(statearr_20393_20424[1] = 11);
return cljs.core.constant$keyword$235;
} else
{if((state_val_20368 === 19))
{var inst_20340 = (state_20367[2]);var state_20367__$1 = state_20367;var statearr_20394_20425 = state_20367__$1;(statearr_20394_20425[2] = inst_20340);
(statearr_20394_20425[1] = 18);
return cljs.core.constant$keyword$235;
} else
{if((state_val_20368 === 20))
{var inst_20325 = (state_20367[7]);var state_20367__$1 = state_20367;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20367__$1,23,inst_20325);
} else
{if((state_val_20368 === 21))
{var state_20367__$1 = state_20367;var statearr_20395_20426 = state_20367__$1;(statearr_20395_20426[2] = null);
(statearr_20395_20426[1] = 22);
return cljs.core.constant$keyword$235;
} else
{if((state_val_20368 === 22))
{var inst_20356 = (state_20367[2]);var state_20367__$1 = state_20367;var statearr_20396_20427 = state_20367__$1;(statearr_20396_20427[2] = inst_20356);
(statearr_20396_20427[1] = 10);
return cljs.core.constant$keyword$235;
} else
{if((state_val_20368 === 23))
{var inst_20353 = (state_20367[2]);var state_20367__$1 = state_20367;var statearr_20397_20428 = state_20367__$1;(statearr_20397_20428[2] = inst_20353);
(statearr_20397_20428[1] = 22);
return cljs.core.constant$keyword$235;
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
var state_machine__5507__auto____0 = (function (){var statearr_20401 = [null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_20401[0] = state_machine__5507__auto__);
(statearr_20401[1] = 1);
return statearr_20401;
});
var state_machine__5507__auto____1 = (function (state_20367){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_20367);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$235))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e20402){if((e20402 instanceof Object))
{var ex__5510__auto__ = e20402;var statearr_20403_20429 = state_20367;(statearr_20403_20429[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_20367);
return cljs.core.constant$keyword$235;
} else
{if(cljs.core.constant$keyword$224)
{throw e20402;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$235))
{{
var G__20430 = state_20367;
state_20367 = G__20430;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_20367){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_20367);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_20404 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_20404[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_20404;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5523__auto__);
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
clustermap.api.ordered_api = (function ordered_api(request_handler,result_handler){var ocomm = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer(1));var _ = clustermap.api.ordered_api_results(ocomm,result_handler);return (function() { 
var G__20433__delegate = function (req_args){var temp__4090__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(request_handler,req_args);if(cljs.core.truth_(temp__4090__auto__))
{var r = temp__4090__auto__;var rseq = ((cljs.core.sequential_QMARK_(r))?r:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [r], null));var vec__20432 = rseq;var rcomm = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20432,0,null);var result_handler_args = cljs.core.nthnext(vec__20432,1);return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(ocomm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rcomm,result_handler_args], null));
} else
{return null;
}
};
var G__20433 = function (var_args){
var req_args = null;if (arguments.length > 0) {
  req_args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__20433__delegate.call(this,req_args);};
G__20433.cljs$lang$maxFixedArity = 0;
G__20433.cljs$lang$applyTo = (function (arglist__20434){
var req_args = cljs.core.seq(arglist__20434);
return G__20433__delegate(req_args);
});
G__20433.cljs$core$IFn$_invoke$arity$variadic = G__20433__delegate;
return G__20433;
})()
;
});
/**
* @param {...*} var_args
*/
clustermap.api.log_api = (function() { 
var log_api__delegate = function (f,args){var ch = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,args);var c__5521__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_20452){var state_val_20453 = (state_20452[1]);if((state_val_20453 === 2))
{var inst_20449 = (state_20452[2]);var inst_20450 = console.log(inst_20449);var state_20452__$1 = state_20452;return cljs.core.async.impl.ioc_helpers.return_chan(state_20452__$1,inst_20450);
} else
{if((state_val_20453 === 1))
{var state_20452__$1 = state_20452;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20452__$1,2,ch);
} else
{return null;
}
}
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_20457 = [null,null,null,null,null,null,null];(statearr_20457[0] = state_machine__5507__auto__);
(statearr_20457[1] = 1);
return statearr_20457;
});
var state_machine__5507__auto____1 = (function (state_20452){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_20452);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$235))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e20458){if((e20458 instanceof Object))
{var ex__5510__auto__ = e20458;var statearr_20459_20461 = state_20452;(statearr_20459_20461[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_20452);
return cljs.core.constant$keyword$235;
} else
{if(cljs.core.constant$keyword$224)
{throw e20458;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$235))
{{
var G__20462 = state_20452;
state_20452 = G__20462;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_20452){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_20452);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_20460 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_20460[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_20460;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5523__auto__);
}));
return c__5521__auto__;
};
var log_api = function (f,var_args){
var args = null;if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return log_api__delegate.call(this,f,args);};
log_api.cljs$lang$maxFixedArity = 1;
log_api.cljs$lang$applyTo = (function (arglist__20463){
var f = cljs.core.first(arglist__20463);
var args = cljs.core.rest(arglist__20463);
return log_api__delegate(f,args);
});
log_api.cljs$core$IFn$_invoke$arity$variadic = log_api__delegate;
return log_api;
})()
;
clustermap.api.map_json_params = (function map_json_params(m){return clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__20466){var vec__20467 = p__20466;var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20467,0,null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20467,1,null);return [cljs.core.str(cljs.core.name(k)),cljs.core.str("="),cljs.core.str(JSON.stringify(cljs.core.clj__GT_js(v)))].join('');
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
boundarylines.cljs$lang$applyTo = (function (arglist__20468){
var id = cljs.core.first(arglist__20468);
arglist__20468 = cljs.core.next(arglist__20468);
var tolerance = cljs.core.first(arglist__20468);
var opts = cljs.core.rest(arglist__20468);
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
boundaryline_collection_index.cljs$lang$applyTo = (function (arglist__20469){
var id = cljs.core.first(arglist__20469);
var opts = cljs.core.rest(arglist__20469);
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
/**
* @param {...*} var_args
*/
clustermap.api.constituencies = (function() { 
var constituencies__delegate = function (p__20470){var vec__20472 = p__20470;var type_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20472,0,null);return clustermap.api.GET.cljs$core$IFn$_invoke$arity$variadic("/api/",cljs.core.array_seq([clustermap.api.api_prefix,"/constituencies?",clustermap.api.map_json_params(type_ids)], 0));
};
var constituencies = function (var_args){
var p__20470 = null;if (arguments.length > 0) {
  p__20470 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return constituencies__delegate.call(this,p__20470);};
constituencies.cljs$lang$maxFixedArity = 0;
constituencies.cljs$lang$applyTo = (function (arglist__20473){
var p__20470 = cljs.core.seq(arglist__20473);
return constituencies__delegate(p__20470);
});
constituencies.cljs$core$IFn$_invoke$arity$variadic = constituencies__delegate;
return constituencies;
})()
;
clustermap.api.portfolio_company = (function portfolio_company(id){return clustermap.api.GET([cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/portfolio-companies/"),cljs.core.str(id)].join(''));
});
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_companies = (function() { 
var portfolio_companies__delegate = function (p__20474){var vec__20476 = p__20474;var type_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20476,0,null);var type_ids__$1 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$250,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$251,"desc"], null)], null)], 0));return clustermap.api.GET([cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/portfolio-companies?"),cljs.core.str(clustermap.api.map_json_params(type_ids__$1))].join(''));
};
var portfolio_companies = function (var_args){
var p__20474 = null;if (arguments.length > 0) {
  p__20474 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_companies__delegate.call(this,p__20474);};
portfolio_companies.cljs$lang$maxFixedArity = 0;
portfolio_companies.cljs$lang$applyTo = (function (arglist__20477){
var p__20474 = cljs.core.seq(arglist__20477);
return portfolio_companies__delegate(p__20474);
});
portfolio_companies.cljs$core$IFn$_invoke$arity$variadic = portfolio_companies__delegate;
return portfolio_companies;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_stats = (function() { 
var portfolio_company_stats__delegate = function (p__20478){var vec__20480 = p__20478;var type_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20480,0,null);return clustermap.api.GET([cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/portfolio-company-stats?"),cljs.core.str(clustermap.api.map_json_params(type_ids))].join(''));
};
var portfolio_company_stats = function (var_args){
var p__20478 = null;if (arguments.length > 0) {
  p__20478 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_stats__delegate.call(this,p__20478);};
portfolio_company_stats.cljs$lang$maxFixedArity = 0;
portfolio_company_stats.cljs$lang$applyTo = (function (arglist__20481){
var p__20478 = cljs.core.seq(arglist__20481);
return portfolio_company_stats__delegate(p__20478);
});
portfolio_company_stats.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_stats__delegate;
return portfolio_company_stats;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_account_stats = (function() { 
var portfolio_company_account_stats__delegate = function (p__20482){var vec__20484 = p__20482;var type_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20484,0,null);return clustermap.api.GET([cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/portfolio-company-account-stats?"),cljs.core.str(clustermap.api.map_json_params(type_ids))].join(''));
};
var portfolio_company_account_stats = function (var_args){
var p__20482 = null;if (arguments.length > 0) {
  p__20482 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_account_stats__delegate.call(this,p__20482);};
portfolio_company_account_stats.cljs$lang$maxFixedArity = 0;
portfolio_company_account_stats.cljs$lang$applyTo = (function (arglist__20485){
var p__20482 = cljs.core.seq(arglist__20485);
return portfolio_company_account_stats__delegate(p__20482);
});
portfolio_company_account_stats.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_account_stats__delegate;
return portfolio_company_account_stats;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_sites = (function() { 
var portfolio_company_sites__delegate = function (p__20486){var vec__20488 = p__20486;var type_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20488,0,null);var type_ids__$1 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$252,100,cljs.core.constant$keyword$250,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$251,"desc"], null)], null)], null),type_ids], 0));return clustermap.api.GET([cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/portfolio-company-sites?"),cljs.core.str(clustermap.api.map_json_params(type_ids__$1))].join(''));
};
var portfolio_company_sites = function (var_args){
var p__20486 = null;if (arguments.length > 0) {
  p__20486 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_sites__delegate.call(this,p__20486);};
portfolio_company_sites.cljs$lang$maxFixedArity = 0;
portfolio_company_sites.cljs$lang$applyTo = (function (arglist__20489){
var p__20486 = cljs.core.seq(arglist__20489);
return portfolio_company_sites__delegate(p__20486);
});
portfolio_company_sites.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_sites__delegate;
return portfolio_company_sites;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_locations = (function() { 
var portfolio_company_locations__delegate = function (p__20490){var vec__20492 = p__20490;var type_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20492,0,null);return clustermap.api.GET([cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/portfolio-company-locations?"),cljs.core.str(clustermap.api.map_json_params(type_ids))].join(''));
};
var portfolio_company_locations = function (var_args){
var p__20490 = null;if (arguments.length > 0) {
  p__20490 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_locations__delegate.call(this,p__20490);};
portfolio_company_locations.cljs$lang$maxFixedArity = 0;
portfolio_company_locations.cljs$lang$applyTo = (function (arglist__20493){
var p__20490 = cljs.core.seq(arglist__20493);
return portfolio_company_locations__delegate(p__20490);
});
portfolio_company_locations.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_locations__delegate;
return portfolio_company_locations;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_site_stats = (function() { 
var portfolio_company_site_stats__delegate = function (p__20494){var vec__20496 = p__20494;var type_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20496,0,null);return clustermap.api.GET([cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/portfolio-company-site-stats?"),cljs.core.str(clustermap.api.map_json_params(type_ids))].join(''));
};
var portfolio_company_site_stats = function (var_args){
var p__20494 = null;if (arguments.length > 0) {
  p__20494 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_site_stats__delegate.call(this,p__20494);};
portfolio_company_site_stats.cljs$lang$maxFixedArity = 0;
portfolio_company_site_stats.cljs$lang$applyTo = (function (arglist__20497){
var p__20494 = cljs.core.seq(arglist__20497);
return portfolio_company_site_stats__delegate(p__20494);
});
portfolio_company_site_stats.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_site_stats__delegate;
return portfolio_company_site_stats;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_site_account_timelines = (function() { 
var portfolio_company_site_account_timelines__delegate = function (p__20498){var vec__20500 = p__20498;var type_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20500,0,null);return clustermap.api.GET([cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/portfolio-company-site-account-timelines?"),cljs.core.str(clustermap.api.map_json_params(type_ids))].join(''));
};
var portfolio_company_site_account_timelines = function (var_args){
var p__20498 = null;if (arguments.length > 0) {
  p__20498 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_site_account_timelines__delegate.call(this,p__20498);};
portfolio_company_site_account_timelines.cljs$lang$maxFixedArity = 0;
portfolio_company_site_account_timelines.cljs$lang$applyTo = (function (arglist__20501){
var p__20498 = cljs.core.seq(arglist__20501);
return portfolio_company_site_account_timelines__delegate(p__20498);
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
clustermap.api.investor_comapnies = (function() { 
var investor_comapnies__delegate = function (p__20502){var vec__20504 = p__20502;var type_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20504,0,null);return clustermap.api.GET([cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/investor-companies?"),cljs.core.str(clustermap.api.map_json_params(type_ids))].join(''));
};
var investor_comapnies = function (var_args){
var p__20502 = null;if (arguments.length > 0) {
  p__20502 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return investor_comapnies__delegate.call(this,p__20502);};
investor_comapnies.cljs$lang$maxFixedArity = 0;
investor_comapnies.cljs$lang$applyTo = (function (arglist__20505){
var p__20502 = cljs.core.seq(arglist__20505);
return investor_comapnies__delegate(p__20502);
});
investor_comapnies.cljs$core$IFn$_invoke$arity$variadic = investor_comapnies__delegate;
return investor_comapnies;
})()
;
