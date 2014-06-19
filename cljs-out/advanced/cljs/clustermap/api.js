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
var GET__delegate = function (url,p__32235){var map__32237 = p__32235;var map__32237__$1 = ((cljs.core.seq_QMARK_(map__32237))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32237):map__32237);var raw = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32237__$1,cljs.core.constant$keyword$605);var comm = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);goog.net.XhrIo.send(url,((function (comm,map__32237,map__32237__$1,raw){
return (function (event){cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,((function (comm,map__32237,map__32237__$1,raw){
return (function (d){if(cljs.core.truth_(raw))
{return d;
} else
{return cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(d,cljs.core.array_seq([cljs.core.constant$keyword$586,true], 0));
}
});})(comm,map__32237,map__32237__$1,raw))
.call(null,(JSON.parse(event.target.getResponseText())["data"])));
return cljs.core.async.close_BANG_(comm);
});})(comm,map__32237,map__32237__$1,raw))
);
return comm;
};
var GET = function (url,var_args){
var p__32235 = null;if (arguments.length > 1) {
  p__32235 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return GET__delegate.call(this,url,p__32235);};
GET.cljs$lang$maxFixedArity = 1;
GET.cljs$lang$applyTo = (function (arglist__32238){
var url = cljs.core.first(arglist__32238);
var p__32235 = cljs.core.rest(arglist__32238);
return GET__delegate(url,p__32235);
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
return (function (state_32371){var state_val_32372 = (state_32371[1]);if((state_val_32372 === 7))
{var inst_32329 = (state_32371[7]);var inst_32328 = (state_32371[2]);var inst_32329__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32328,0,null);var inst_32330 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32328,1,null);var inst_32331 = cljs.core.sequential_QMARK_(inst_32329__$1);var state_32371__$1 = (function (){var statearr_32373 = state_32371;(statearr_32373[8] = inst_32330);
(statearr_32373[7] = inst_32329__$1);
return statearr_32373;
})();if(inst_32331)
{var statearr_32374_32409 = state_32371__$1;(statearr_32374_32409[1] = 8);
} else
{var statearr_32375_32410 = state_32371__$1;(statearr_32375_32410[1] = 9);
}
return cljs.core.constant$keyword$591;
} else
{if((state_val_32372 === 20))
{var inst_32329 = (state_32371[7]);var state_32371__$1 = state_32371;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32371__$1,23,inst_32329);
} else
{if((state_val_32372 === 1))
{var state_32371__$1 = state_32371;var statearr_32376_32411 = state_32371__$1;(statearr_32376_32411[2] = null);
(statearr_32376_32411[1] = 2);
return cljs.core.constant$keyword$591;
} else
{if((state_val_32372 === 4))
{var state_32371__$1 = state_32371;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32371__$1,7,ocomm);
} else
{if((state_val_32372 === 15))
{var inst_32351 = (state_32371[2]);var state_32371__$1 = state_32371;var statearr_32377_32412 = state_32371__$1;(statearr_32377_32412[2] = inst_32351);
(statearr_32377_32412[1] = 12);
return cljs.core.constant$keyword$591;
} else
{if((state_val_32372 === 21))
{var state_32371__$1 = state_32371;var statearr_32378_32413 = state_32371__$1;(statearr_32378_32413[2] = null);
(statearr_32378_32413[1] = 22);
return cljs.core.constant$keyword$591;
} else
{if((state_val_32372 === 13))
{var inst_32334 = (state_32371[9]);var state_32371__$1 = state_32371;var statearr_32379_32414 = state_32371__$1;(statearr_32379_32414[2] = inst_32334);
(statearr_32379_32414[1] = 15);
return cljs.core.constant$keyword$591;
} else
{if((state_val_32372 === 22))
{var inst_32360 = (state_32371[2]);var state_32371__$1 = state_32371;var statearr_32380_32415 = state_32371__$1;(statearr_32380_32415[2] = inst_32360);
(statearr_32380_32415[1] = 10);
return cljs.core.constant$keyword$591;
} else
{if((state_val_32372 === 6))
{var inst_32367 = (state_32371[2]);var state_32371__$1 = state_32371;var statearr_32381_32416 = state_32371__$1;(statearr_32381_32416[2] = inst_32367);
(statearr_32381_32416[1] = 3);
return cljs.core.constant$keyword$591;
} else
{if((state_val_32372 === 17))
{var state_32371__$1 = state_32371;var statearr_32382_32417 = state_32371__$1;(statearr_32382_32417[2] = null);
(statearr_32382_32417[1] = 18);
return cljs.core.constant$keyword$591;
} else
{if((state_val_32372 === 3))
{var inst_32369 = (state_32371[2]);var state_32371__$1 = state_32371;return cljs.core.async.impl.ioc_helpers.return_chan(state_32371__$1,inst_32369);
} else
{if((state_val_32372 === 12))
{var inst_32353 = (state_32371[2]);var state_32371__$1 = state_32371;var statearr_32383_32418 = state_32371__$1;(statearr_32383_32418[2] = inst_32353);
(statearr_32383_32418[1] = 10);
return cljs.core.constant$keyword$591;
} else
{if((state_val_32372 === 2))
{var state_32371__$1 = state_32371;if(true)
{var statearr_32384_32419 = state_32371__$1;(statearr_32384_32419[1] = 4);
} else
{var statearr_32385_32420 = state_32371__$1;(statearr_32385_32420[1] = 5);
}
return cljs.core.constant$keyword$591;
} else
{if((state_val_32372 === 23))
{var inst_32357 = (state_32371[2]);var state_32371__$1 = state_32371;var statearr_32386_32421 = state_32371__$1;(statearr_32386_32421[2] = inst_32357);
(statearr_32386_32421[1] = 22);
return cljs.core.constant$keyword$591;
} else
{if((state_val_32372 === 19))
{var inst_32344 = (state_32371[2]);var state_32371__$1 = state_32371;var statearr_32387_32422 = state_32371__$1;(statearr_32387_32422[2] = inst_32344);
(statearr_32387_32422[1] = 18);
return cljs.core.constant$keyword$591;
} else
{if((state_val_32372 === 11))
{var inst_32333 = (state_32371[10]);var inst_32336 = cljs.core.empty_QMARK_(inst_32333);var state_32371__$1 = state_32371;if(inst_32336)
{var statearr_32388_32423 = state_32371__$1;(statearr_32388_32423[1] = 13);
} else
{var statearr_32389_32424 = state_32371__$1;(statearr_32389_32424[1] = 14);
}
return cljs.core.constant$keyword$591;
} else
{if((state_val_32372 === 9))
{var inst_32329 = (state_32371[7]);var state_32371__$1 = state_32371;if(cljs.core.truth_(inst_32329))
{var statearr_32390_32425 = state_32371__$1;(statearr_32390_32425[1] = 20);
} else
{var statearr_32391_32426 = state_32371__$1;(statearr_32391_32426[1] = 21);
}
return cljs.core.constant$keyword$591;
} else
{if((state_val_32372 === 5))
{var state_32371__$1 = state_32371;var statearr_32392_32427 = state_32371__$1;(statearr_32392_32427[2] = null);
(statearr_32392_32427[1] = 6);
return cljs.core.constant$keyword$591;
} else
{if((state_val_32372 === 14))
{var inst_32333 = (state_32371[10]);var inst_32339 = cljs.core.rest(inst_32333);var inst_32340 = cljs.core.first(inst_32333);var state_32371__$1 = (function (){var statearr_32393 = state_32371;(statearr_32393[11] = inst_32339);
return statearr_32393;
})();if(cljs.core.truth_(inst_32340))
{var statearr_32394_32428 = state_32371__$1;(statearr_32394_32428[1] = 16);
} else
{var statearr_32395_32429 = state_32371__$1;(statearr_32395_32429[1] = 17);
}
return cljs.core.constant$keyword$591;
} else
{if((state_val_32372 === 16))
{var inst_32333 = (state_32371[10]);var inst_32342 = cljs.core.first(inst_32333);var state_32371__$1 = state_32371;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32371__$1,19,inst_32342);
} else
{if((state_val_32372 === 10))
{var inst_32330 = (state_32371[8]);var inst_32362 = (state_32371[2]);var inst_32363 = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(handler,inst_32362,inst_32330);var state_32371__$1 = (function (){var statearr_32396 = state_32371;(statearr_32396[12] = inst_32363);
return statearr_32396;
})();var statearr_32397_32430 = state_32371__$1;(statearr_32397_32430[2] = null);
(statearr_32397_32430[1] = 2);
return cljs.core.constant$keyword$591;
} else
{if((state_val_32372 === 18))
{var inst_32334 = (state_32371[9]);var inst_32339 = (state_32371[11]);var inst_32347 = (state_32371[2]);var inst_32348 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(inst_32334,inst_32347);var inst_32333 = inst_32339;var inst_32334__$1 = inst_32348;var state_32371__$1 = (function (){var statearr_32398 = state_32371;(statearr_32398[10] = inst_32333);
(statearr_32398[9] = inst_32334__$1);
return statearr_32398;
})();var statearr_32399_32431 = state_32371__$1;(statearr_32399_32431[2] = null);
(statearr_32399_32431[1] = 11);
return cljs.core.constant$keyword$591;
} else
{if((state_val_32372 === 8))
{var inst_32329 = (state_32371[7]);var inst_32333 = inst_32329;var inst_32334 = cljs.core.PersistentVector.EMPTY;var state_32371__$1 = (function (){var statearr_32400 = state_32371;(statearr_32400[10] = inst_32333);
(statearr_32400[9] = inst_32334);
return statearr_32400;
})();var statearr_32401_32432 = state_32371__$1;(statearr_32401_32432[2] = null);
(statearr_32401_32432[1] = 11);
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
});})(c__5689__auto__))
;return ((function (switch__5674__auto__,c__5689__auto__){
return (function() {
var state_machine__5675__auto__ = null;
var state_machine__5675__auto____0 = (function (){var statearr_32405 = [null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_32405[0] = state_machine__5675__auto__);
(statearr_32405[1] = 1);
return statearr_32405;
});
var state_machine__5675__auto____1 = (function (state_32371){while(true){
var ret_value__5676__auto__ = (function (){try{while(true){
var result__5677__auto__ = switch__5674__auto__(state_32371);if(cljs.core.keyword_identical_QMARK_(result__5677__auto__,cljs.core.constant$keyword$591))
{{
continue;
}
} else
{return result__5677__auto__;
}
break;
}
}catch (e32406){if((e32406 instanceof Object))
{var ex__5678__auto__ = e32406;var statearr_32407_32433 = state_32371;(statearr_32407_32433[5] = ex__5678__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_32371);
return cljs.core.constant$keyword$591;
} else
{if(cljs.core.constant$keyword$580)
{throw e32406;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5676__auto__,cljs.core.constant$keyword$591))
{{
var G__32434 = state_32371;
state_32371 = G__32434;
continue;
}
} else
{return ret_value__5676__auto__;
}
break;
}
});
state_machine__5675__auto__ = function(state_32371){
switch(arguments.length){
case 0:
return state_machine__5675__auto____0.call(this);
case 1:
return state_machine__5675__auto____1.call(this,state_32371);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5675__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5675__auto____0;
state_machine__5675__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5675__auto____1;
return state_machine__5675__auto__;
})()
;})(switch__5674__auto__,c__5689__auto__))
})();var state__5691__auto__ = (function (){var statearr_32408 = (f__5690__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5690__auto__.cljs$core$IFn$_invoke$arity$0() : f__5690__auto__.call(null));(statearr_32408[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5689__auto__);
return statearr_32408;
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
var G__32437__delegate = function (req_args){var temp__4124__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(request_handler,req_args);if(cljs.core.truth_(temp__4124__auto__))
{var r = temp__4124__auto__;var rseq = ((cljs.core.sequential_QMARK_(r))?r:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [r], null));var vec__32436 = rseq;var rcomm = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32436,0,null);var result_handler_args = cljs.core.nthnext(vec__32436,1);return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(ocomm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rcomm,result_handler_args], null));
} else
{return null;
}
};
var G__32437 = function (var_args){
var req_args = null;if (arguments.length > 0) {
  req_args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__32437__delegate.call(this,req_args);};
G__32437.cljs$lang$maxFixedArity = 0;
G__32437.cljs$lang$applyTo = (function (arglist__32438){
var req_args = cljs.core.seq(arglist__32438);
return G__32437__delegate(req_args);
});
G__32437.cljs$core$IFn$_invoke$arity$variadic = G__32437__delegate;
return G__32437;
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
return (function (state_32456){var state_val_32457 = (state_32456[1]);if((state_val_32457 === 2))
{var inst_32453 = (state_32456[2]);var inst_32454 = console.log(inst_32453);var state_32456__$1 = state_32456;return cljs.core.async.impl.ioc_helpers.return_chan(state_32456__$1,inst_32454);
} else
{if((state_val_32457 === 1))
{var state_32456__$1 = state_32456;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32456__$1,2,ch);
} else
{return null;
}
}
});})(c__5689__auto__,ch))
;return ((function (switch__5674__auto__,c__5689__auto__,ch){
return (function() {
var state_machine__5675__auto__ = null;
var state_machine__5675__auto____0 = (function (){var statearr_32461 = [null,null,null,null,null,null,null];(statearr_32461[0] = state_machine__5675__auto__);
(statearr_32461[1] = 1);
return statearr_32461;
});
var state_machine__5675__auto____1 = (function (state_32456){while(true){
var ret_value__5676__auto__ = (function (){try{while(true){
var result__5677__auto__ = switch__5674__auto__(state_32456);if(cljs.core.keyword_identical_QMARK_(result__5677__auto__,cljs.core.constant$keyword$591))
{{
continue;
}
} else
{return result__5677__auto__;
}
break;
}
}catch (e32462){if((e32462 instanceof Object))
{var ex__5678__auto__ = e32462;var statearr_32463_32465 = state_32456;(statearr_32463_32465[5] = ex__5678__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_32456);
return cljs.core.constant$keyword$591;
} else
{if(cljs.core.constant$keyword$580)
{throw e32462;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5676__auto__,cljs.core.constant$keyword$591))
{{
var G__32466 = state_32456;
state_32456 = G__32466;
continue;
}
} else
{return ret_value__5676__auto__;
}
break;
}
});
state_machine__5675__auto__ = function(state_32456){
switch(arguments.length){
case 0:
return state_machine__5675__auto____0.call(this);
case 1:
return state_machine__5675__auto____1.call(this,state_32456);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5675__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5675__auto____0;
state_machine__5675__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5675__auto____1;
return state_machine__5675__auto__;
})()
;})(switch__5674__auto__,c__5689__auto__,ch))
})();var state__5691__auto__ = (function (){var statearr_32464 = (f__5690__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5690__auto__.cljs$core$IFn$_invoke$arity$0() : f__5690__auto__.call(null));(statearr_32464[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5689__auto__);
return statearr_32464;
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
log_api.cljs$lang$applyTo = (function (arglist__32467){
var f = cljs.core.first(arglist__32467);
var args = cljs.core.rest(arglist__32467);
return log_api__delegate(f,args);
});
log_api.cljs$core$IFn$_invoke$arity$variadic = log_api__delegate;
return log_api;
})()
;
clustermap.api.map_json_params = (function map_json_params(m){return clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__32470){var vec__32471 = p__32470;var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32471,0,null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32471,1,null);return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(k))+"="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(JSON.stringify(cljs.core.clj__GT_js(v))));
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
boundarylines.cljs$lang$applyTo = (function (arglist__32472){
var id = cljs.core.first(arglist__32472);
arglist__32472 = cljs.core.next(arglist__32472);
var tolerance = cljs.core.first(arglist__32472);
var opts = cljs.core.rest(arglist__32472);
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
boundaryline_collection_index.cljs$lang$applyTo = (function (arglist__32473){
var id = cljs.core.first(arglist__32473);
var opts = cljs.core.rest(arglist__32473);
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
var portfolio_company_sites__delegate = function (p__32474){var vec__32476 = p__32474;var type_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32476,0,null);var type_ids__$1 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$606,100,cljs.core.constant$keyword$607,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$608,"desc"], null)], null)], null),type_ids], 0));return clustermap.api.GET(("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/portfolio-company-sites?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params(type_ids__$1))));
};
var portfolio_company_sites = function (var_args){
var p__32474 = null;if (arguments.length > 0) {
  p__32474 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_sites__delegate.call(this,p__32474);};
portfolio_company_sites.cljs$lang$maxFixedArity = 0;
portfolio_company_sites.cljs$lang$applyTo = (function (arglist__32477){
var p__32474 = cljs.core.seq(arglist__32477);
return portfolio_company_sites__delegate(p__32474);
});
portfolio_company_sites.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_sites__delegate;
return portfolio_company_sites;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_sites_by_company = (function() { 
var portfolio_company_sites_by_company__delegate = function (p__32478){var vec__32480 = p__32478;var type_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32480,0,null);var type_ids__$1 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$606,100,cljs.core.constant$keyword$607,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$608,"desc"], null)], null)], null),type_ids], 0));return clustermap.api.GET(("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/portfolio-company-sites-by-company?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params(type_ids__$1))));
};
var portfolio_company_sites_by_company = function (var_args){
var p__32478 = null;if (arguments.length > 0) {
  p__32478 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_sites_by_company__delegate.call(this,p__32478);};
portfolio_company_sites_by_company.cljs$lang$maxFixedArity = 0;
portfolio_company_sites_by_company.cljs$lang$applyTo = (function (arglist__32481){
var p__32478 = cljs.core.seq(arglist__32481);
return portfolio_company_sites_by_company__delegate(p__32478);
});
portfolio_company_sites_by_company.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_sites_by_company__delegate;
return portfolio_company_sites_by_company;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_locations = (function() { 
var portfolio_company_locations__delegate = function (p__32482){var vec__32484 = p__32482;var type_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32484,0,null);return clustermap.api.GET(("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/portfolio-company-locations?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params(type_ids))));
};
var portfolio_company_locations = function (var_args){
var p__32482 = null;if (arguments.length > 0) {
  p__32482 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_locations__delegate.call(this,p__32482);};
portfolio_company_locations.cljs$lang$maxFixedArity = 0;
portfolio_company_locations.cljs$lang$applyTo = (function (arglist__32485){
var p__32482 = cljs.core.seq(arglist__32485);
return portfolio_company_locations__delegate(p__32482);
});
portfolio_company_locations.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_locations__delegate;
return portfolio_company_locations;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_site_stats = (function() { 
var portfolio_company_site_stats__delegate = function (p__32486){var vec__32488 = p__32486;var type_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32488,0,null);return clustermap.api.GET(("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/portfolio-company-site-stats?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params(type_ids))));
};
var portfolio_company_site_stats = function (var_args){
var p__32486 = null;if (arguments.length > 0) {
  p__32486 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_site_stats__delegate.call(this,p__32486);};
portfolio_company_site_stats.cljs$lang$maxFixedArity = 0;
portfolio_company_site_stats.cljs$lang$applyTo = (function (arglist__32489){
var p__32486 = cljs.core.seq(arglist__32489);
return portfolio_company_site_stats__delegate(p__32486);
});
portfolio_company_site_stats.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_site_stats__delegate;
return portfolio_company_site_stats;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_site_account_timelines = (function() { 
var portfolio_company_site_account_timelines__delegate = function (p__32490){var vec__32492 = p__32490;var type_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32492,0,null);return clustermap.api.GET(("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/portfolio-company-site-account-timelines?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params(type_ids))));
};
var portfolio_company_site_account_timelines = function (var_args){
var p__32490 = null;if (arguments.length > 0) {
  p__32490 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_site_account_timelines__delegate.call(this,p__32490);};
portfolio_company_site_account_timelines.cljs$lang$maxFixedArity = 0;
portfolio_company_site_account_timelines.cljs$lang$applyTo = (function (arglist__32493){
var p__32490 = cljs.core.seq(arglist__32493);
return portfolio_company_site_account_timelines__delegate(p__32490);
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
var investment_account_timelines__delegate = function (p__32494){var vec__32496 = p__32494;var type_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32496,0,null);return clustermap.api.GET(("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/investment-account-timelines?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params(type_ids))));
};
var investment_account_timelines = function (var_args){
var p__32494 = null;if (arguments.length > 0) {
  p__32494 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return investment_account_timelines__delegate.call(this,p__32494);};
investment_account_timelines.cljs$lang$maxFixedArity = 0;
investment_account_timelines.cljs$lang$applyTo = (function (arglist__32497){
var p__32494 = cljs.core.seq(arglist__32497);
return investment_account_timelines__delegate(p__32494);
});
investment_account_timelines.cljs$core$IFn$_invoke$arity$variadic = investment_account_timelines__delegate;
return investment_account_timelines;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.investment_stats = (function() { 
var investment_stats__delegate = function (p__32498){var vec__32500 = p__32498;var type_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32500,0,null);return clustermap.api.GET(("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/investment-stats?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params(type_ids))));
};
var investment_stats = function (var_args){
var p__32498 = null;if (arguments.length > 0) {
  p__32498 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return investment_stats__delegate.call(this,p__32498);};
investment_stats.cljs$lang$maxFixedArity = 0;
investment_stats.cljs$lang$applyTo = (function (arglist__32501){
var p__32498 = cljs.core.seq(arglist__32501);
return investment_stats__delegate(p__32498);
});
investment_stats.cljs$core$IFn$_invoke$arity$variadic = investment_stats__delegate;
return investment_stats;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.investment_aggs = (function() { 
var investment_aggs__delegate = function (p__32502){var vec__32504 = p__32502;var type_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32504,0,null);var type_ids__$1 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$606,50,cljs.core.constant$keyword$609,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$610,"desc"], null)], null),type_ids], 0));return clustermap.api.GET(("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/investment-aggs?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params(type_ids__$1))));
};
var investment_aggs = function (var_args){
var p__32502 = null;if (arguments.length > 0) {
  p__32502 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return investment_aggs__delegate.call(this,p__32502);};
investment_aggs.cljs$lang$maxFixedArity = 0;
investment_aggs.cljs$lang$applyTo = (function (arglist__32505){
var p__32502 = cljs.core.seq(arglist__32505);
return investment_aggs__delegate(p__32502);
});
investment_aggs.cljs$core$IFn$_invoke$arity$variadic = investment_aggs__delegate;
return investment_aggs;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.investments = (function() { 
var investments__delegate = function (p__32506){var vec__32508 = p__32506;var type_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32508,0,null);var type_ids__$1 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$606,50,cljs.core.constant$keyword$609,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$611,"asc"], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$612,"asc"], null)], null)], null),type_ids], 0));return clustermap.api.GET(("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/investments?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params(type_ids__$1))));
};
var investments = function (var_args){
var p__32506 = null;if (arguments.length > 0) {
  p__32506 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return investments__delegate.call(this,p__32506);};
investments.cljs$lang$maxFixedArity = 0;
investments.cljs$lang$applyTo = (function (arglist__32509){
var p__32506 = cljs.core.seq(arglist__32509);
return investments__delegate(p__32506);
});
investments.cljs$core$IFn$_invoke$arity$variadic = investments__delegate;
return investments;
})()
;
