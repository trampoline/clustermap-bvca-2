// Compiled by ClojureScript 0.0-2227
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
var GET__delegate = function (url,p__32251){var map__32253 = p__32251;var map__32253__$1 = ((cljs.core.seq_QMARK_(map__32253))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32253):map__32253);var raw = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32253__$1,cljs.core.constant$keyword$603);var comm = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);goog.net.XhrIo.send(url,((function (comm,map__32253,map__32253__$1,raw){
return (function (event){cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,((function (comm,map__32253,map__32253__$1,raw){
return (function (d){if(cljs.core.truth_(raw))
{return d;
} else
{return cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(d,cljs.core.array_seq([cljs.core.constant$keyword$584,true], 0));
}
});})(comm,map__32253,map__32253__$1,raw))
.call(null,(JSON.parse(event.target.getResponseText())["data"])));
return cljs.core.async.close_BANG_(comm);
});})(comm,map__32253,map__32253__$1,raw))
);
return comm;
};
var GET = function (url,var_args){
var p__32251 = null;if (arguments.length > 1) {
  p__32251 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return GET__delegate.call(this,url,p__32251);};
GET.cljs$lang$maxFixedArity = 1;
GET.cljs$lang$applyTo = (function (arglist__32254){
var url = cljs.core.first(arglist__32254);
var p__32251 = cljs.core.rest(arglist__32254);
return GET__delegate(url,p__32251);
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
clustermap.api.ordered_api_results = (function ordered_api_results(ocomm,handler){var c__5689__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run(((function (c__5689__auto__){
return (function (){var f__5690__auto__ = (function (){var switch__5674__auto__ = ((function (c__5689__auto__){
return (function (state_32387){var state_val_32388 = (state_32387[1]);if((state_val_32388 === 7))
{var inst_32345 = (state_32387[7]);var inst_32344 = (state_32387[2]);var inst_32345__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32344,0,null);var inst_32346 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32344,1,null);var inst_32347 = cljs.core.sequential_QMARK_(inst_32345__$1);var state_32387__$1 = (function (){var statearr_32389 = state_32387;(statearr_32389[7] = inst_32345__$1);
(statearr_32389[8] = inst_32346);
return statearr_32389;
})();if(inst_32347)
{var statearr_32390_32425 = state_32387__$1;(statearr_32390_32425[1] = 8);
} else
{var statearr_32391_32426 = state_32387__$1;(statearr_32391_32426[1] = 9);
}
return cljs.core.constant$keyword$589;
} else
{if((state_val_32388 === 20))
{var inst_32345 = (state_32387[7]);var state_32387__$1 = state_32387;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32387__$1,23,inst_32345);
} else
{if((state_val_32388 === 1))
{var state_32387__$1 = state_32387;var statearr_32392_32427 = state_32387__$1;(statearr_32392_32427[2] = null);
(statearr_32392_32427[1] = 2);
return cljs.core.constant$keyword$589;
} else
{if((state_val_32388 === 4))
{var state_32387__$1 = state_32387;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32387__$1,7,ocomm);
} else
{if((state_val_32388 === 15))
{var inst_32367 = (state_32387[2]);var state_32387__$1 = state_32387;var statearr_32393_32428 = state_32387__$1;(statearr_32393_32428[2] = inst_32367);
(statearr_32393_32428[1] = 12);
return cljs.core.constant$keyword$589;
} else
{if((state_val_32388 === 21))
{var state_32387__$1 = state_32387;var statearr_32394_32429 = state_32387__$1;(statearr_32394_32429[2] = null);
(statearr_32394_32429[1] = 22);
return cljs.core.constant$keyword$589;
} else
{if((state_val_32388 === 13))
{var inst_32350 = (state_32387[9]);var state_32387__$1 = state_32387;var statearr_32395_32430 = state_32387__$1;(statearr_32395_32430[2] = inst_32350);
(statearr_32395_32430[1] = 15);
return cljs.core.constant$keyword$589;
} else
{if((state_val_32388 === 22))
{var inst_32376 = (state_32387[2]);var state_32387__$1 = state_32387;var statearr_32396_32431 = state_32387__$1;(statearr_32396_32431[2] = inst_32376);
(statearr_32396_32431[1] = 10);
return cljs.core.constant$keyword$589;
} else
{if((state_val_32388 === 6))
{var inst_32383 = (state_32387[2]);var state_32387__$1 = state_32387;var statearr_32397_32432 = state_32387__$1;(statearr_32397_32432[2] = inst_32383);
(statearr_32397_32432[1] = 3);
return cljs.core.constant$keyword$589;
} else
{if((state_val_32388 === 17))
{var state_32387__$1 = state_32387;var statearr_32398_32433 = state_32387__$1;(statearr_32398_32433[2] = null);
(statearr_32398_32433[1] = 18);
return cljs.core.constant$keyword$589;
} else
{if((state_val_32388 === 3))
{var inst_32385 = (state_32387[2]);var state_32387__$1 = state_32387;return cljs.core.async.impl.ioc_helpers.return_chan(state_32387__$1,inst_32385);
} else
{if((state_val_32388 === 12))
{var inst_32369 = (state_32387[2]);var state_32387__$1 = state_32387;var statearr_32399_32434 = state_32387__$1;(statearr_32399_32434[2] = inst_32369);
(statearr_32399_32434[1] = 10);
return cljs.core.constant$keyword$589;
} else
{if((state_val_32388 === 2))
{var state_32387__$1 = state_32387;if(true)
{var statearr_32400_32435 = state_32387__$1;(statearr_32400_32435[1] = 4);
} else
{var statearr_32401_32436 = state_32387__$1;(statearr_32401_32436[1] = 5);
}
return cljs.core.constant$keyword$589;
} else
{if((state_val_32388 === 23))
{var inst_32373 = (state_32387[2]);var state_32387__$1 = state_32387;var statearr_32402_32437 = state_32387__$1;(statearr_32402_32437[2] = inst_32373);
(statearr_32402_32437[1] = 22);
return cljs.core.constant$keyword$589;
} else
{if((state_val_32388 === 19))
{var inst_32360 = (state_32387[2]);var state_32387__$1 = state_32387;var statearr_32403_32438 = state_32387__$1;(statearr_32403_32438[2] = inst_32360);
(statearr_32403_32438[1] = 18);
return cljs.core.constant$keyword$589;
} else
{if((state_val_32388 === 11))
{var inst_32349 = (state_32387[10]);var inst_32352 = cljs.core.empty_QMARK_(inst_32349);var state_32387__$1 = state_32387;if(inst_32352)
{var statearr_32404_32439 = state_32387__$1;(statearr_32404_32439[1] = 13);
} else
{var statearr_32405_32440 = state_32387__$1;(statearr_32405_32440[1] = 14);
}
return cljs.core.constant$keyword$589;
} else
{if((state_val_32388 === 9))
{var inst_32345 = (state_32387[7]);var state_32387__$1 = state_32387;if(cljs.core.truth_(inst_32345))
{var statearr_32406_32441 = state_32387__$1;(statearr_32406_32441[1] = 20);
} else
{var statearr_32407_32442 = state_32387__$1;(statearr_32407_32442[1] = 21);
}
return cljs.core.constant$keyword$589;
} else
{if((state_val_32388 === 5))
{var state_32387__$1 = state_32387;var statearr_32408_32443 = state_32387__$1;(statearr_32408_32443[2] = null);
(statearr_32408_32443[1] = 6);
return cljs.core.constant$keyword$589;
} else
{if((state_val_32388 === 14))
{var inst_32349 = (state_32387[10]);var inst_32355 = cljs.core.rest(inst_32349);var inst_32356 = cljs.core.first(inst_32349);var state_32387__$1 = (function (){var statearr_32409 = state_32387;(statearr_32409[11] = inst_32355);
return statearr_32409;
})();if(cljs.core.truth_(inst_32356))
{var statearr_32410_32444 = state_32387__$1;(statearr_32410_32444[1] = 16);
} else
{var statearr_32411_32445 = state_32387__$1;(statearr_32411_32445[1] = 17);
}
return cljs.core.constant$keyword$589;
} else
{if((state_val_32388 === 16))
{var inst_32349 = (state_32387[10]);var inst_32358 = cljs.core.first(inst_32349);var state_32387__$1 = state_32387;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32387__$1,19,inst_32358);
} else
{if((state_val_32388 === 10))
{var inst_32346 = (state_32387[8]);var inst_32378 = (state_32387[2]);var inst_32379 = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(handler,inst_32378,inst_32346);var state_32387__$1 = (function (){var statearr_32412 = state_32387;(statearr_32412[12] = inst_32379);
return statearr_32412;
})();var statearr_32413_32446 = state_32387__$1;(statearr_32413_32446[2] = null);
(statearr_32413_32446[1] = 2);
return cljs.core.constant$keyword$589;
} else
{if((state_val_32388 === 18))
{var inst_32350 = (state_32387[9]);var inst_32355 = (state_32387[11]);var inst_32363 = (state_32387[2]);var inst_32364 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(inst_32350,inst_32363);var inst_32349 = inst_32355;var inst_32350__$1 = inst_32364;var state_32387__$1 = (function (){var statearr_32414 = state_32387;(statearr_32414[9] = inst_32350__$1);
(statearr_32414[10] = inst_32349);
return statearr_32414;
})();var statearr_32415_32447 = state_32387__$1;(statearr_32415_32447[2] = null);
(statearr_32415_32447[1] = 11);
return cljs.core.constant$keyword$589;
} else
{if((state_val_32388 === 8))
{var inst_32345 = (state_32387[7]);var inst_32349 = inst_32345;var inst_32350 = cljs.core.PersistentVector.EMPTY;var state_32387__$1 = (function (){var statearr_32416 = state_32387;(statearr_32416[9] = inst_32350);
(statearr_32416[10] = inst_32349);
return statearr_32416;
})();var statearr_32417_32448 = state_32387__$1;(statearr_32417_32448[2] = null);
(statearr_32417_32448[1] = 11);
return cljs.core.constant$keyword$589;
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
});})(c__5689__auto__))
;return ((function (switch__5674__auto__,c__5689__auto__){
return (function() {
var state_machine__5675__auto__ = null;
var state_machine__5675__auto____0 = (function (){var statearr_32421 = [null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_32421[0] = state_machine__5675__auto__);
(statearr_32421[1] = 1);
return statearr_32421;
});
var state_machine__5675__auto____1 = (function (state_32387){while(true){
var ret_value__5676__auto__ = (function (){try{while(true){
var result__5677__auto__ = switch__5674__auto__(state_32387);if(cljs.core.keyword_identical_QMARK_(result__5677__auto__,cljs.core.constant$keyword$589))
{{
continue;
}
} else
{return result__5677__auto__;
}
break;
}
}catch (e32422){if((e32422 instanceof Object))
{var ex__5678__auto__ = e32422;var statearr_32423_32449 = state_32387;(statearr_32423_32449[5] = ex__5678__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_32387);
return cljs.core.constant$keyword$589;
} else
{if(cljs.core.constant$keyword$578)
{throw e32422;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5676__auto__,cljs.core.constant$keyword$589))
{{
var G__32450 = state_32387;
state_32387 = G__32450;
continue;
}
} else
{return ret_value__5676__auto__;
}
break;
}
});
state_machine__5675__auto__ = function(state_32387){
switch(arguments.length){
case 0:
return state_machine__5675__auto____0.call(this);
case 1:
return state_machine__5675__auto____1.call(this,state_32387);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5675__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5675__auto____0;
state_machine__5675__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5675__auto____1;
return state_machine__5675__auto__;
})()
;})(switch__5674__auto__,c__5689__auto__))
})();var state__5691__auto__ = (function (){var statearr_32424 = (f__5690__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5690__auto__.cljs$core$IFn$_invoke$arity$0() : f__5690__auto__.call(null));(statearr_32424[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5689__auto__);
return statearr_32424;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5691__auto__);
});})(c__5689__auto__))
);
return c__5689__auto__;
});
/**
* order responses from an async API according to the order of requests
* - request-handler: fn to send an async API request, returning a channel of a single result value,
* and optional additional args for the result-handler. return nil to
* abandon request
* - result-handler: function of API result and optional additional args from request-handler result
*/
clustermap.api.ordered_api = (function ordered_api(request_handler,result_handler){var ocomm = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer(1));var _ = clustermap.api.ordered_api_results(ocomm,result_handler);return ((function (ocomm,_){
return (function() { 
var G__32453__delegate = function (req_args){var temp__4124__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(request_handler,req_args);if(cljs.core.truth_(temp__4124__auto__))
{var r = temp__4124__auto__;var rseq = ((cljs.core.sequential_QMARK_(r))?r:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [r], null));var vec__32452 = rseq;var rcomm = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32452,0,null);var result_handler_args = cljs.core.nthnext(vec__32452,1);return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(ocomm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rcomm,result_handler_args], null));
} else
{return null;
}
};
var G__32453 = function (var_args){
var req_args = null;if (arguments.length > 0) {
  req_args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__32453__delegate.call(this,req_args);};
G__32453.cljs$lang$maxFixedArity = 0;
G__32453.cljs$lang$applyTo = (function (arglist__32454){
var req_args = cljs.core.seq(arglist__32454);
return G__32453__delegate(req_args);
});
G__32453.cljs$core$IFn$_invoke$arity$variadic = G__32453__delegate;
return G__32453;
})()
;
;})(ocomm,_))
});
/**
* @param {...*} var_args
*/
clustermap.api.log_api = (function() { 
var log_api__delegate = function (f,args){var ch = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,args);var c__5689__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run(((function (c__5689__auto__,ch){
return (function (){var f__5690__auto__ = (function (){var switch__5674__auto__ = ((function (c__5689__auto__,ch){
return (function (state_32472){var state_val_32473 = (state_32472[1]);if((state_val_32473 === 2))
{var inst_32469 = (state_32472[2]);var inst_32470 = console.log(inst_32469);var state_32472__$1 = state_32472;return cljs.core.async.impl.ioc_helpers.return_chan(state_32472__$1,inst_32470);
} else
{if((state_val_32473 === 1))
{var state_32472__$1 = state_32472;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32472__$1,2,ch);
} else
{return null;
}
}
});})(c__5689__auto__,ch))
;return ((function (switch__5674__auto__,c__5689__auto__,ch){
return (function() {
var state_machine__5675__auto__ = null;
var state_machine__5675__auto____0 = (function (){var statearr_32477 = [null,null,null,null,null,null,null];(statearr_32477[0] = state_machine__5675__auto__);
(statearr_32477[1] = 1);
return statearr_32477;
});
var state_machine__5675__auto____1 = (function (state_32472){while(true){
var ret_value__5676__auto__ = (function (){try{while(true){
var result__5677__auto__ = switch__5674__auto__(state_32472);if(cljs.core.keyword_identical_QMARK_(result__5677__auto__,cljs.core.constant$keyword$589))
{{
continue;
}
} else
{return result__5677__auto__;
}
break;
}
}catch (e32478){if((e32478 instanceof Object))
{var ex__5678__auto__ = e32478;var statearr_32479_32481 = state_32472;(statearr_32479_32481[5] = ex__5678__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_32472);
return cljs.core.constant$keyword$589;
} else
{if(cljs.core.constant$keyword$578)
{throw e32478;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5676__auto__,cljs.core.constant$keyword$589))
{{
var G__32482 = state_32472;
state_32472 = G__32482;
continue;
}
} else
{return ret_value__5676__auto__;
}
break;
}
});
state_machine__5675__auto__ = function(state_32472){
switch(arguments.length){
case 0:
return state_machine__5675__auto____0.call(this);
case 1:
return state_machine__5675__auto____1.call(this,state_32472);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5675__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5675__auto____0;
state_machine__5675__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5675__auto____1;
return state_machine__5675__auto__;
})()
;})(switch__5674__auto__,c__5689__auto__,ch))
})();var state__5691__auto__ = (function (){var statearr_32480 = (f__5690__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5690__auto__.cljs$core$IFn$_invoke$arity$0() : f__5690__auto__.call(null));(statearr_32480[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5689__auto__);
return statearr_32480;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5691__auto__);
});})(c__5689__auto__,ch))
);
return c__5689__auto__;
};
var log_api = function (f,var_args){
var args = null;if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return log_api__delegate.call(this,f,args);};
log_api.cljs$lang$maxFixedArity = 1;
log_api.cljs$lang$applyTo = (function (arglist__32483){
var f = cljs.core.first(arglist__32483);
var args = cljs.core.rest(arglist__32483);
return log_api__delegate(f,args);
});
log_api.cljs$core$IFn$_invoke$arity$variadic = log_api__delegate;
return log_api;
})()
;
clustermap.api.map_json_params = (function map_json_params(m){return clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__32486){var vec__32487 = p__32486;var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32487,0,null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32487,1,null);return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(k))+"="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(JSON.stringify(cljs.core.clj__GT_js(v))));
}),m));
});
clustermap.api.api_prefix = config.api.prefix;
/**
* @param {...*} var_args
*/
clustermap.api.boundarylines = (function() { 
var boundarylines__delegate = function (id,tolerance,opts){return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(clustermap.api.GET,("/api/boundarylines/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(tolerance)),opts);
};
var boundarylines = function (id,tolerance,var_args){
var opts = null;if (arguments.length > 2) {
  opts = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return boundarylines__delegate.call(this,id,tolerance,opts);};
boundarylines.cljs$lang$maxFixedArity = 2;
boundarylines.cljs$lang$applyTo = (function (arglist__32488){
var id = cljs.core.first(arglist__32488);
arglist__32488 = cljs.core.next(arglist__32488);
var tolerance = cljs.core.first(arglist__32488);
var opts = cljs.core.rest(arglist__32488);
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
var boundaryline_collection_index__delegate = function (id,opts){return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(clustermap.api.GET,("/api/boundaryline-collection-index/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)),opts);
};
var boundaryline_collection_index = function (id,var_args){
var opts = null;if (arguments.length > 1) {
  opts = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return boundaryline_collection_index__delegate.call(this,id,opts);};
boundaryline_collection_index.cljs$lang$maxFixedArity = 1;
boundaryline_collection_index.cljs$lang$applyTo = (function (arglist__32489){
var id = cljs.core.first(arglist__32489);
var opts = cljs.core.rest(arglist__32489);
return boundaryline_collection_index__delegate(id,opts);
});
boundaryline_collection_index.cljs$core$IFn$_invoke$arity$variadic = boundaryline_collection_index__delegate;
return boundaryline_collection_index;
})()
;
clustermap.api.search = (function search(q){if((cljs.core.count(clojure.string.trim(q)) > 0))
{return clustermap.api.GET(("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/search?q="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(q)));
} else
{return cljs.core.async.to_chan(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [{}], null));
}
});
clustermap.api.constituency = (function constituency(id){return clustermap.api.GET(("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/constituencies/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)));
});
clustermap.api.portfolio_company = (function portfolio_company(id){return clustermap.api.GET(("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/portfolio-companies/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)));
});
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_sites = (function() { 
var portfolio_company_sites__delegate = function (p__32490){var vec__32492 = p__32490;var type_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32492,0,null);var type_ids__$1 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$604,100,cljs.core.constant$keyword$605,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$606,"desc"], null)], null)], null),type_ids], 0));return clustermap.api.GET(("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/portfolio-company-sites?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params(type_ids__$1))));
};
var portfolio_company_sites = function (var_args){
var p__32490 = null;if (arguments.length > 0) {
  p__32490 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_sites__delegate.call(this,p__32490);};
portfolio_company_sites.cljs$lang$maxFixedArity = 0;
portfolio_company_sites.cljs$lang$applyTo = (function (arglist__32493){
var p__32490 = cljs.core.seq(arglist__32493);
return portfolio_company_sites__delegate(p__32490);
});
portfolio_company_sites.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_sites__delegate;
return portfolio_company_sites;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_sites_by_company = (function() { 
var portfolio_company_sites_by_company__delegate = function (p__32494){var vec__32496 = p__32494;var type_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32496,0,null);var type_ids__$1 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$604,100,cljs.core.constant$keyword$605,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$606,"desc"], null)], null)], null),type_ids], 0));return clustermap.api.GET(("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/portfolio-company-sites-by-company?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params(type_ids__$1))));
};
var portfolio_company_sites_by_company = function (var_args){
var p__32494 = null;if (arguments.length > 0) {
  p__32494 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_sites_by_company__delegate.call(this,p__32494);};
portfolio_company_sites_by_company.cljs$lang$maxFixedArity = 0;
portfolio_company_sites_by_company.cljs$lang$applyTo = (function (arglist__32497){
var p__32494 = cljs.core.seq(arglist__32497);
return portfolio_company_sites_by_company__delegate(p__32494);
});
portfolio_company_sites_by_company.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_sites_by_company__delegate;
return portfolio_company_sites_by_company;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_locations = (function() { 
var portfolio_company_locations__delegate = function (p__32498){var vec__32500 = p__32498;var type_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32500,0,null);return clustermap.api.GET(("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/portfolio-company-locations?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params(type_ids))));
};
var portfolio_company_locations = function (var_args){
var p__32498 = null;if (arguments.length > 0) {
  p__32498 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_locations__delegate.call(this,p__32498);};
portfolio_company_locations.cljs$lang$maxFixedArity = 0;
portfolio_company_locations.cljs$lang$applyTo = (function (arglist__32501){
var p__32498 = cljs.core.seq(arglist__32501);
return portfolio_company_locations__delegate(p__32498);
});
portfolio_company_locations.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_locations__delegate;
return portfolio_company_locations;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_site_stats = (function() { 
var portfolio_company_site_stats__delegate = function (p__32502){var vec__32504 = p__32502;var type_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32504,0,null);return clustermap.api.GET(("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/portfolio-company-site-stats?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params(type_ids))));
};
var portfolio_company_site_stats = function (var_args){
var p__32502 = null;if (arguments.length > 0) {
  p__32502 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_site_stats__delegate.call(this,p__32502);};
portfolio_company_site_stats.cljs$lang$maxFixedArity = 0;
portfolio_company_site_stats.cljs$lang$applyTo = (function (arglist__32505){
var p__32502 = cljs.core.seq(arglist__32505);
return portfolio_company_site_stats__delegate(p__32502);
});
portfolio_company_site_stats.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_site_stats__delegate;
return portfolio_company_site_stats;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_site_account_timelines = (function() { 
var portfolio_company_site_account_timelines__delegate = function (p__32506){var vec__32508 = p__32506;var type_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32508,0,null);return clustermap.api.GET(("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/portfolio-company-site-account-timelines?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params(type_ids))));
};
var portfolio_company_site_account_timelines = function (var_args){
var p__32506 = null;if (arguments.length > 0) {
  p__32506 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_site_account_timelines__delegate.call(this,p__32506);};
portfolio_company_site_account_timelines.cljs$lang$maxFixedArity = 0;
portfolio_company_site_account_timelines.cljs$lang$applyTo = (function (arglist__32509){
var p__32506 = cljs.core.seq(arglist__32509);
return portfolio_company_site_account_timelines__delegate(p__32506);
});
portfolio_company_site_account_timelines.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_site_account_timelines__delegate;
return portfolio_company_site_account_timelines;
})()
;
clustermap.api.investor_company = (function investor_company(id){return clustermap.api.GET(("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/investor-companies/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)));
});
/**
* @param {...*} var_args
*/
clustermap.api.investment_account_timelines = (function() { 
var investment_account_timelines__delegate = function (p__32510){var vec__32512 = p__32510;var type_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32512,0,null);return clustermap.api.GET(("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/investment-account-timelines?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params(type_ids))));
};
var investment_account_timelines = function (var_args){
var p__32510 = null;if (arguments.length > 0) {
  p__32510 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return investment_account_timelines__delegate.call(this,p__32510);};
investment_account_timelines.cljs$lang$maxFixedArity = 0;
investment_account_timelines.cljs$lang$applyTo = (function (arglist__32513){
var p__32510 = cljs.core.seq(arglist__32513);
return investment_account_timelines__delegate(p__32510);
});
investment_account_timelines.cljs$core$IFn$_invoke$arity$variadic = investment_account_timelines__delegate;
return investment_account_timelines;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.investment_stats = (function() { 
var investment_stats__delegate = function (p__32514){var vec__32516 = p__32514;var type_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32516,0,null);return clustermap.api.GET(("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/investment-stats?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params(type_ids))));
};
var investment_stats = function (var_args){
var p__32514 = null;if (arguments.length > 0) {
  p__32514 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return investment_stats__delegate.call(this,p__32514);};
investment_stats.cljs$lang$maxFixedArity = 0;
investment_stats.cljs$lang$applyTo = (function (arglist__32517){
var p__32514 = cljs.core.seq(arglist__32517);
return investment_stats__delegate(p__32514);
});
investment_stats.cljs$core$IFn$_invoke$arity$variadic = investment_stats__delegate;
return investment_stats;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.investment_aggs = (function() { 
var investment_aggs__delegate = function (p__32518){var vec__32520 = p__32518;var type_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32520,0,null);var type_ids__$1 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$604,50,cljs.core.constant$keyword$607,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$608,"desc"], null)], null),type_ids], 0));return clustermap.api.GET(("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/investment-aggs?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params(type_ids__$1))));
};
var investment_aggs = function (var_args){
var p__32518 = null;if (arguments.length > 0) {
  p__32518 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return investment_aggs__delegate.call(this,p__32518);};
investment_aggs.cljs$lang$maxFixedArity = 0;
investment_aggs.cljs$lang$applyTo = (function (arglist__32521){
var p__32518 = cljs.core.seq(arglist__32521);
return investment_aggs__delegate(p__32518);
});
investment_aggs.cljs$core$IFn$_invoke$arity$variadic = investment_aggs__delegate;
return investment_aggs;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.investments = (function() { 
var investments__delegate = function (p__32522){var vec__32524 = p__32522;var type_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32524,0,null);var type_ids__$1 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$604,50,cljs.core.constant$keyword$607,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$609,"asc"], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$610,"asc"], null)], null)], null),type_ids], 0));return clustermap.api.GET(("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/investments?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params(type_ids__$1))));
};
var investments = function (var_args){
var p__32522 = null;if (arguments.length > 0) {
  p__32522 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return investments__delegate.call(this,p__32522);};
investments.cljs$lang$maxFixedArity = 0;
investments.cljs$lang$applyTo = (function (arglist__32525){
var p__32522 = cljs.core.seq(arglist__32525);
return investments__delegate(p__32522);
});
investments.cljs$core$IFn$_invoke$arity$variadic = investments__delegate;
return investments;
})()
;
