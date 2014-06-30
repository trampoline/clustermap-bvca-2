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
var GET__delegate = function (url,p__32237){var map__32239 = p__32237;var map__32239__$1 = ((cljs.core.seq_QMARK_(map__32239))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32239):map__32239);var raw = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32239__$1,cljs.core.constant$keyword$605);var comm = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);goog.net.XhrIo.send(url,((function (comm,map__32239,map__32239__$1,raw){
return (function (event){cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,((function (comm,map__32239,map__32239__$1,raw){
return (function (d){if(cljs.core.truth_(raw))
{return d;
} else
{return cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(d,cljs.core.array_seq([cljs.core.constant$keyword$586,true], 0));
}
});})(comm,map__32239,map__32239__$1,raw))
.call(null,(JSON.parse(event.target.getResponseText())["data"])));
return cljs.core.async.close_BANG_(comm);
});})(comm,map__32239,map__32239__$1,raw))
);
return comm;
};
var GET = function (url,var_args){
var p__32237 = null;if (arguments.length > 1) {
  p__32237 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return GET__delegate.call(this,url,p__32237);};
GET.cljs$lang$maxFixedArity = 1;
GET.cljs$lang$applyTo = (function (arglist__32240){
var url = cljs.core.first(arglist__32240);
var p__32237 = cljs.core.rest(arglist__32240);
return GET__delegate(url,p__32237);
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
clustermap.api.ordered_api_results = (function ordered_api_results(ocomm,handler){var c__5691__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run(((function (c__5691__auto__){
return (function (){var f__5692__auto__ = (function (){var switch__5676__auto__ = ((function (c__5691__auto__){
return (function (state_32373){var state_val_32374 = (state_32373[1]);if((state_val_32374 === 7))
{var inst_32331 = (state_32373[7]);var inst_32330 = (state_32373[2]);var inst_32331__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32330,0,null);var inst_32332 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32330,1,null);var inst_32333 = cljs.core.sequential_QMARK_(inst_32331__$1);var state_32373__$1 = (function (){var statearr_32375 = state_32373;(statearr_32375[7] = inst_32331__$1);
(statearr_32375[8] = inst_32332);
return statearr_32375;
})();if(inst_32333)
{var statearr_32376_32411 = state_32373__$1;(statearr_32376_32411[1] = 8);
} else
{var statearr_32377_32412 = state_32373__$1;(statearr_32377_32412[1] = 9);
}
return cljs.core.constant$keyword$591;
} else
{if((state_val_32374 === 20))
{var inst_32331 = (state_32373[7]);var state_32373__$1 = state_32373;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32373__$1,23,inst_32331);
} else
{if((state_val_32374 === 1))
{var state_32373__$1 = state_32373;var statearr_32378_32413 = state_32373__$1;(statearr_32378_32413[2] = null);
(statearr_32378_32413[1] = 2);
return cljs.core.constant$keyword$591;
} else
{if((state_val_32374 === 4))
{var state_32373__$1 = state_32373;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32373__$1,7,ocomm);
} else
{if((state_val_32374 === 15))
{var inst_32353 = (state_32373[2]);var state_32373__$1 = state_32373;var statearr_32379_32414 = state_32373__$1;(statearr_32379_32414[2] = inst_32353);
(statearr_32379_32414[1] = 12);
return cljs.core.constant$keyword$591;
} else
{if((state_val_32374 === 21))
{var state_32373__$1 = state_32373;var statearr_32380_32415 = state_32373__$1;(statearr_32380_32415[2] = null);
(statearr_32380_32415[1] = 22);
return cljs.core.constant$keyword$591;
} else
{if((state_val_32374 === 13))
{var inst_32336 = (state_32373[9]);var state_32373__$1 = state_32373;var statearr_32381_32416 = state_32373__$1;(statearr_32381_32416[2] = inst_32336);
(statearr_32381_32416[1] = 15);
return cljs.core.constant$keyword$591;
} else
{if((state_val_32374 === 22))
{var inst_32362 = (state_32373[2]);var state_32373__$1 = state_32373;var statearr_32382_32417 = state_32373__$1;(statearr_32382_32417[2] = inst_32362);
(statearr_32382_32417[1] = 10);
return cljs.core.constant$keyword$591;
} else
{if((state_val_32374 === 6))
{var inst_32369 = (state_32373[2]);var state_32373__$1 = state_32373;var statearr_32383_32418 = state_32373__$1;(statearr_32383_32418[2] = inst_32369);
(statearr_32383_32418[1] = 3);
return cljs.core.constant$keyword$591;
} else
{if((state_val_32374 === 17))
{var state_32373__$1 = state_32373;var statearr_32384_32419 = state_32373__$1;(statearr_32384_32419[2] = null);
(statearr_32384_32419[1] = 18);
return cljs.core.constant$keyword$591;
} else
{if((state_val_32374 === 3))
{var inst_32371 = (state_32373[2]);var state_32373__$1 = state_32373;return cljs.core.async.impl.ioc_helpers.return_chan(state_32373__$1,inst_32371);
} else
{if((state_val_32374 === 12))
{var inst_32355 = (state_32373[2]);var state_32373__$1 = state_32373;var statearr_32385_32420 = state_32373__$1;(statearr_32385_32420[2] = inst_32355);
(statearr_32385_32420[1] = 10);
return cljs.core.constant$keyword$591;
} else
{if((state_val_32374 === 2))
{var state_32373__$1 = state_32373;if(true)
{var statearr_32386_32421 = state_32373__$1;(statearr_32386_32421[1] = 4);
} else
{var statearr_32387_32422 = state_32373__$1;(statearr_32387_32422[1] = 5);
}
return cljs.core.constant$keyword$591;
} else
{if((state_val_32374 === 23))
{var inst_32359 = (state_32373[2]);var state_32373__$1 = state_32373;var statearr_32388_32423 = state_32373__$1;(statearr_32388_32423[2] = inst_32359);
(statearr_32388_32423[1] = 22);
return cljs.core.constant$keyword$591;
} else
{if((state_val_32374 === 19))
{var inst_32346 = (state_32373[2]);var state_32373__$1 = state_32373;var statearr_32389_32424 = state_32373__$1;(statearr_32389_32424[2] = inst_32346);
(statearr_32389_32424[1] = 18);
return cljs.core.constant$keyword$591;
} else
{if((state_val_32374 === 11))
{var inst_32335 = (state_32373[10]);var inst_32338 = cljs.core.empty_QMARK_(inst_32335);var state_32373__$1 = state_32373;if(inst_32338)
{var statearr_32390_32425 = state_32373__$1;(statearr_32390_32425[1] = 13);
} else
{var statearr_32391_32426 = state_32373__$1;(statearr_32391_32426[1] = 14);
}
return cljs.core.constant$keyword$591;
} else
{if((state_val_32374 === 9))
{var inst_32331 = (state_32373[7]);var state_32373__$1 = state_32373;if(cljs.core.truth_(inst_32331))
{var statearr_32392_32427 = state_32373__$1;(statearr_32392_32427[1] = 20);
} else
{var statearr_32393_32428 = state_32373__$1;(statearr_32393_32428[1] = 21);
}
return cljs.core.constant$keyword$591;
} else
{if((state_val_32374 === 5))
{var state_32373__$1 = state_32373;var statearr_32394_32429 = state_32373__$1;(statearr_32394_32429[2] = null);
(statearr_32394_32429[1] = 6);
return cljs.core.constant$keyword$591;
} else
{if((state_val_32374 === 14))
{var inst_32335 = (state_32373[10]);var inst_32341 = cljs.core.rest(inst_32335);var inst_32342 = cljs.core.first(inst_32335);var state_32373__$1 = (function (){var statearr_32395 = state_32373;(statearr_32395[11] = inst_32341);
return statearr_32395;
})();if(cljs.core.truth_(inst_32342))
{var statearr_32396_32430 = state_32373__$1;(statearr_32396_32430[1] = 16);
} else
{var statearr_32397_32431 = state_32373__$1;(statearr_32397_32431[1] = 17);
}
return cljs.core.constant$keyword$591;
} else
{if((state_val_32374 === 16))
{var inst_32335 = (state_32373[10]);var inst_32344 = cljs.core.first(inst_32335);var state_32373__$1 = state_32373;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32373__$1,19,inst_32344);
} else
{if((state_val_32374 === 10))
{var inst_32332 = (state_32373[8]);var inst_32364 = (state_32373[2]);var inst_32365 = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(handler,inst_32364,inst_32332);var state_32373__$1 = (function (){var statearr_32398 = state_32373;(statearr_32398[12] = inst_32365);
return statearr_32398;
})();var statearr_32399_32432 = state_32373__$1;(statearr_32399_32432[2] = null);
(statearr_32399_32432[1] = 2);
return cljs.core.constant$keyword$591;
} else
{if((state_val_32374 === 18))
{var inst_32336 = (state_32373[9]);var inst_32341 = (state_32373[11]);var inst_32349 = (state_32373[2]);var inst_32350 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(inst_32336,inst_32349);var inst_32335 = inst_32341;var inst_32336__$1 = inst_32350;var state_32373__$1 = (function (){var statearr_32400 = state_32373;(statearr_32400[10] = inst_32335);
(statearr_32400[9] = inst_32336__$1);
return statearr_32400;
})();var statearr_32401_32433 = state_32373__$1;(statearr_32401_32433[2] = null);
(statearr_32401_32433[1] = 11);
return cljs.core.constant$keyword$591;
} else
{if((state_val_32374 === 8))
{var inst_32331 = (state_32373[7]);var inst_32335 = inst_32331;var inst_32336 = cljs.core.PersistentVector.EMPTY;var state_32373__$1 = (function (){var statearr_32402 = state_32373;(statearr_32402[10] = inst_32335);
(statearr_32402[9] = inst_32336);
return statearr_32402;
})();var statearr_32403_32434 = state_32373__$1;(statearr_32403_32434[2] = null);
(statearr_32403_32434[1] = 11);
return cljs.core.constant$keyword$591;
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
});})(c__5691__auto__))
;return ((function (switch__5676__auto__,c__5691__auto__){
return (function() {
var state_machine__5677__auto__ = null;
var state_machine__5677__auto____0 = (function (){var statearr_32407 = [null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_32407[0] = state_machine__5677__auto__);
(statearr_32407[1] = 1);
return statearr_32407;
});
var state_machine__5677__auto____1 = (function (state_32373){while(true){
var ret_value__5678__auto__ = (function (){try{while(true){
var result__5679__auto__ = switch__5676__auto__(state_32373);if(cljs.core.keyword_identical_QMARK_(result__5679__auto__,cljs.core.constant$keyword$591))
{{
continue;
}
} else
{return result__5679__auto__;
}
break;
}
}catch (e32408){if((e32408 instanceof Object))
{var ex__5680__auto__ = e32408;var statearr_32409_32435 = state_32373;(statearr_32409_32435[5] = ex__5680__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_32373);
return cljs.core.constant$keyword$591;
} else
{if(cljs.core.constant$keyword$580)
{throw e32408;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5678__auto__,cljs.core.constant$keyword$591))
{{
var G__32436 = state_32373;
state_32373 = G__32436;
continue;
}
} else
{return ret_value__5678__auto__;
}
break;
}
});
state_machine__5677__auto__ = function(state_32373){
switch(arguments.length){
case 0:
return state_machine__5677__auto____0.call(this);
case 1:
return state_machine__5677__auto____1.call(this,state_32373);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5677__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5677__auto____0;
state_machine__5677__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5677__auto____1;
return state_machine__5677__auto__;
})()
;})(switch__5676__auto__,c__5691__auto__))
})();var state__5693__auto__ = (function (){var statearr_32410 = (f__5692__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5692__auto__.cljs$core$IFn$_invoke$arity$0() : f__5692__auto__.call(null));(statearr_32410[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5691__auto__);
return statearr_32410;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5693__auto__);
});})(c__5691__auto__))
);
return c__5691__auto__;
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
var G__32439__delegate = function (req_args){var temp__4124__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(request_handler,req_args);if(cljs.core.truth_(temp__4124__auto__))
{var r = temp__4124__auto__;var rseq = ((cljs.core.sequential_QMARK_(r))?r:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [r], null));var vec__32438 = rseq;var rcomm = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32438,0,null);var result_handler_args = cljs.core.nthnext(vec__32438,1);return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(ocomm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rcomm,result_handler_args], null));
} else
{return null;
}
};
var G__32439 = function (var_args){
var req_args = null;if (arguments.length > 0) {
  req_args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__32439__delegate.call(this,req_args);};
G__32439.cljs$lang$maxFixedArity = 0;
G__32439.cljs$lang$applyTo = (function (arglist__32440){
var req_args = cljs.core.seq(arglist__32440);
return G__32439__delegate(req_args);
});
G__32439.cljs$core$IFn$_invoke$arity$variadic = G__32439__delegate;
return G__32439;
})()
;
;})(ocomm,_))
});
/**
* @param {...*} var_args
*/
clustermap.api.log_api = (function() { 
var log_api__delegate = function (f,args){var ch = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,args);var c__5691__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run(((function (c__5691__auto__,ch){
return (function (){var f__5692__auto__ = (function (){var switch__5676__auto__ = ((function (c__5691__auto__,ch){
return (function (state_32458){var state_val_32459 = (state_32458[1]);if((state_val_32459 === 2))
{var inst_32455 = (state_32458[2]);var inst_32456 = console.log(inst_32455);var state_32458__$1 = state_32458;return cljs.core.async.impl.ioc_helpers.return_chan(state_32458__$1,inst_32456);
} else
{if((state_val_32459 === 1))
{var state_32458__$1 = state_32458;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32458__$1,2,ch);
} else
{return null;
}
}
});})(c__5691__auto__,ch))
;return ((function (switch__5676__auto__,c__5691__auto__,ch){
return (function() {
var state_machine__5677__auto__ = null;
var state_machine__5677__auto____0 = (function (){var statearr_32463 = [null,null,null,null,null,null,null];(statearr_32463[0] = state_machine__5677__auto__);
(statearr_32463[1] = 1);
return statearr_32463;
});
var state_machine__5677__auto____1 = (function (state_32458){while(true){
var ret_value__5678__auto__ = (function (){try{while(true){
var result__5679__auto__ = switch__5676__auto__(state_32458);if(cljs.core.keyword_identical_QMARK_(result__5679__auto__,cljs.core.constant$keyword$591))
{{
continue;
}
} else
{return result__5679__auto__;
}
break;
}
}catch (e32464){if((e32464 instanceof Object))
{var ex__5680__auto__ = e32464;var statearr_32465_32467 = state_32458;(statearr_32465_32467[5] = ex__5680__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_32458);
return cljs.core.constant$keyword$591;
} else
{if(cljs.core.constant$keyword$580)
{throw e32464;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5678__auto__,cljs.core.constant$keyword$591))
{{
var G__32468 = state_32458;
state_32458 = G__32468;
continue;
}
} else
{return ret_value__5678__auto__;
}
break;
}
});
state_machine__5677__auto__ = function(state_32458){
switch(arguments.length){
case 0:
return state_machine__5677__auto____0.call(this);
case 1:
return state_machine__5677__auto____1.call(this,state_32458);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5677__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5677__auto____0;
state_machine__5677__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5677__auto____1;
return state_machine__5677__auto__;
})()
;})(switch__5676__auto__,c__5691__auto__,ch))
})();var state__5693__auto__ = (function (){var statearr_32466 = (f__5692__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5692__auto__.cljs$core$IFn$_invoke$arity$0() : f__5692__auto__.call(null));(statearr_32466[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5691__auto__);
return statearr_32466;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5693__auto__);
});})(c__5691__auto__,ch))
);
return c__5691__auto__;
};
var log_api = function (f,var_args){
var args = null;if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return log_api__delegate.call(this,f,args);};
log_api.cljs$lang$maxFixedArity = 1;
log_api.cljs$lang$applyTo = (function (arglist__32469){
var f = cljs.core.first(arglist__32469);
var args = cljs.core.rest(arglist__32469);
return log_api__delegate(f,args);
});
log_api.cljs$core$IFn$_invoke$arity$variadic = log_api__delegate;
return log_api;
})()
;
clustermap.api.map_json_params = (function map_json_params(m){return clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__32472){var vec__32473 = p__32472;var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32473,0,null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32473,1,null);return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(k))+"="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(JSON.stringify(cljs.core.clj__GT_js(v))));
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
boundarylines.cljs$lang$applyTo = (function (arglist__32474){
var id = cljs.core.first(arglist__32474);
arglist__32474 = cljs.core.next(arglist__32474);
var tolerance = cljs.core.first(arglist__32474);
var opts = cljs.core.rest(arglist__32474);
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
boundaryline_collection_index.cljs$lang$applyTo = (function (arglist__32475){
var id = cljs.core.first(arglist__32475);
var opts = cljs.core.rest(arglist__32475);
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
var portfolio_company_sites__delegate = function (p__32476){var vec__32478 = p__32476;var type_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32478,0,null);var type_ids__$1 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$606,100,cljs.core.constant$keyword$607,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$608,"desc"], null)], null)], null),type_ids], 0));return clustermap.api.GET(("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/portfolio-company-sites?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params(type_ids__$1))));
};
var portfolio_company_sites = function (var_args){
var p__32476 = null;if (arguments.length > 0) {
  p__32476 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_sites__delegate.call(this,p__32476);};
portfolio_company_sites.cljs$lang$maxFixedArity = 0;
portfolio_company_sites.cljs$lang$applyTo = (function (arglist__32479){
var p__32476 = cljs.core.seq(arglist__32479);
return portfolio_company_sites__delegate(p__32476);
});
portfolio_company_sites.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_sites__delegate;
return portfolio_company_sites;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_sites_by_company = (function() { 
var portfolio_company_sites_by_company__delegate = function (p__32480){var vec__32482 = p__32480;var type_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32482,0,null);var type_ids__$1 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$606,100,cljs.core.constant$keyword$607,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$608,"desc"], null)], null)], null),type_ids], 0));return clustermap.api.GET(("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/portfolio-company-sites-by-company?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params(type_ids__$1))));
};
var portfolio_company_sites_by_company = function (var_args){
var p__32480 = null;if (arguments.length > 0) {
  p__32480 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_sites_by_company__delegate.call(this,p__32480);};
portfolio_company_sites_by_company.cljs$lang$maxFixedArity = 0;
portfolio_company_sites_by_company.cljs$lang$applyTo = (function (arglist__32483){
var p__32480 = cljs.core.seq(arglist__32483);
return portfolio_company_sites_by_company__delegate(p__32480);
});
portfolio_company_sites_by_company.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_sites_by_company__delegate;
return portfolio_company_sites_by_company;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_locations = (function() { 
var portfolio_company_locations__delegate = function (p__32484){var vec__32486 = p__32484;var type_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32486,0,null);return clustermap.api.GET(("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/portfolio-company-locations?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params(type_ids))));
};
var portfolio_company_locations = function (var_args){
var p__32484 = null;if (arguments.length > 0) {
  p__32484 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_locations__delegate.call(this,p__32484);};
portfolio_company_locations.cljs$lang$maxFixedArity = 0;
portfolio_company_locations.cljs$lang$applyTo = (function (arglist__32487){
var p__32484 = cljs.core.seq(arglist__32487);
return portfolio_company_locations__delegate(p__32484);
});
portfolio_company_locations.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_locations__delegate;
return portfolio_company_locations;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_site_stats = (function() { 
var portfolio_company_site_stats__delegate = function (p__32488){var vec__32490 = p__32488;var type_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32490,0,null);return clustermap.api.GET(("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/portfolio-company-site-stats?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params(type_ids))));
};
var portfolio_company_site_stats = function (var_args){
var p__32488 = null;if (arguments.length > 0) {
  p__32488 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_site_stats__delegate.call(this,p__32488);};
portfolio_company_site_stats.cljs$lang$maxFixedArity = 0;
portfolio_company_site_stats.cljs$lang$applyTo = (function (arglist__32491){
var p__32488 = cljs.core.seq(arglist__32491);
return portfolio_company_site_stats__delegate(p__32488);
});
portfolio_company_site_stats.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_site_stats__delegate;
return portfolio_company_site_stats;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_site_account_timelines = (function() { 
var portfolio_company_site_account_timelines__delegate = function (p__32492){var vec__32494 = p__32492;var type_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32494,0,null);return clustermap.api.GET(("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/portfolio-company-site-account-timelines?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params(type_ids))));
};
var portfolio_company_site_account_timelines = function (var_args){
var p__32492 = null;if (arguments.length > 0) {
  p__32492 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_site_account_timelines__delegate.call(this,p__32492);};
portfolio_company_site_account_timelines.cljs$lang$maxFixedArity = 0;
portfolio_company_site_account_timelines.cljs$lang$applyTo = (function (arglist__32495){
var p__32492 = cljs.core.seq(arglist__32495);
return portfolio_company_site_account_timelines__delegate(p__32492);
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
var investment_account_timelines__delegate = function (p__32496){var vec__32498 = p__32496;var type_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32498,0,null);return clustermap.api.GET(("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/investment-account-timelines?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params(type_ids))));
};
var investment_account_timelines = function (var_args){
var p__32496 = null;if (arguments.length > 0) {
  p__32496 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return investment_account_timelines__delegate.call(this,p__32496);};
investment_account_timelines.cljs$lang$maxFixedArity = 0;
investment_account_timelines.cljs$lang$applyTo = (function (arglist__32499){
var p__32496 = cljs.core.seq(arglist__32499);
return investment_account_timelines__delegate(p__32496);
});
investment_account_timelines.cljs$core$IFn$_invoke$arity$variadic = investment_account_timelines__delegate;
return investment_account_timelines;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.investment_stats = (function() { 
var investment_stats__delegate = function (p__32500){var vec__32502 = p__32500;var type_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32502,0,null);return clustermap.api.GET(("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/investment-stats?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params(type_ids))));
};
var investment_stats = function (var_args){
var p__32500 = null;if (arguments.length > 0) {
  p__32500 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return investment_stats__delegate.call(this,p__32500);};
investment_stats.cljs$lang$maxFixedArity = 0;
investment_stats.cljs$lang$applyTo = (function (arglist__32503){
var p__32500 = cljs.core.seq(arglist__32503);
return investment_stats__delegate(p__32500);
});
investment_stats.cljs$core$IFn$_invoke$arity$variadic = investment_stats__delegate;
return investment_stats;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.investment_aggs = (function() { 
var investment_aggs__delegate = function (p__32504){var vec__32506 = p__32504;var type_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32506,0,null);var type_ids__$1 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$606,50,cljs.core.constant$keyword$609,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$610,"desc"], null)], null),type_ids], 0));return clustermap.api.GET(("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/investment-aggs?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params(type_ids__$1))));
};
var investment_aggs = function (var_args){
var p__32504 = null;if (arguments.length > 0) {
  p__32504 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return investment_aggs__delegate.call(this,p__32504);};
investment_aggs.cljs$lang$maxFixedArity = 0;
investment_aggs.cljs$lang$applyTo = (function (arglist__32507){
var p__32504 = cljs.core.seq(arglist__32507);
return investment_aggs__delegate(p__32504);
});
investment_aggs.cljs$core$IFn$_invoke$arity$variadic = investment_aggs__delegate;
return investment_aggs;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.investments = (function() { 
var investments__delegate = function (p__32508){var vec__32510 = p__32508;var type_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32510,0,null);var type_ids__$1 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$606,50,cljs.core.constant$keyword$609,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$611,"asc"], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$612,"asc"], null)], null)], null),type_ids], 0));return clustermap.api.GET(("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/investments?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params(type_ids__$1))));
};
var investments = function (var_args){
var p__32508 = null;if (arguments.length > 0) {
  p__32508 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return investments__delegate.call(this,p__32508);};
investments.cljs$lang$maxFixedArity = 0;
investments.cljs$lang$applyTo = (function (arglist__32511){
var p__32508 = cljs.core.seq(arglist__32511);
return investments__delegate(p__32508);
});
investments.cljs$core$IFn$_invoke$arity$variadic = investments__delegate;
return investments;
})()
;
