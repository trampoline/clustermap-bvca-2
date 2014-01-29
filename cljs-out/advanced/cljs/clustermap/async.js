// Compiled by ClojureScript 0.0-2138
goog.provide('clustermap.async');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
/**
* asynchronously maps a function over some colls
* @param {...*} var_args
*/
clustermap.async.map_async = (function() { 
var map_async__delegate = function (f,colls){var coll_chs = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (coll){var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2(ch,coll);
return ch;
}),colls);return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2(f,coll_chs);
};
var map_async = function (f,var_args){
var colls = null;if (arguments.length > 1) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return map_async__delegate.call(this,f,colls);};
map_async.cljs$lang$maxFixedArity = 1;
map_async.cljs$lang$applyTo = (function (arglist__21238){
var f = cljs.core.first(arglist__21238);
var colls = cljs.core.rest(arglist__21238);
return map_async__delegate(f,colls);
});
map_async.cljs$core$IFn$_invoke$arity$variadic = map_async__delegate;
return map_async;
})()
;
/**
* async consume all values from a channel
* @param {...*} var_args
*/
clustermap.async.dorun_async = (function() { 
var dorun_async__delegate = function (ch,p__21239){var map__21299 = p__21239;var map__21299__$1 = ((cljs.core.seq_QMARK_(map__21299))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21299):map__21299);var delay = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21299__$1,cljs.core.constant$keyword$336);var log = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21299__$1,cljs.core.constant$keyword$347);var c__5521__auto___21358 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_21328){var state_val_21329 = (state_21328[1]);if((state_val_21329 === 1))
{var state_21328__$1 = state_21328;var statearr_21330_21359 = state_21328__$1;(statearr_21330_21359[2] = null);
(statearr_21330_21359[1] = 2);
return cljs.core.constant$keyword$196;
} else
{if((state_val_21329 === 2))
{var state_21328__$1 = state_21328;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_21328__$1,4,ch);
} else
{if((state_val_21329 === 3))
{var inst_21326 = (state_21328[2]);var state_21328__$1 = state_21328;return cljs.core.async.impl.ioc_helpers.return_chan(state_21328__$1,inst_21326);
} else
{if((state_val_21329 === 4))
{var inst_21302 = (state_21328[7]);var inst_21302__$1 = (state_21328[2]);var state_21328__$1 = (function (){var statearr_21331 = state_21328;(statearr_21331[7] = inst_21302__$1);
return statearr_21331;
})();if(cljs.core.truth_(inst_21302__$1))
{var statearr_21332_21360 = state_21328__$1;(statearr_21332_21360[1] = 5);
} else
{var statearr_21333_21361 = state_21328__$1;(statearr_21333_21361[1] = 6);
}
return cljs.core.constant$keyword$196;
} else
{if((state_val_21329 === 5))
{var state_21328__$1 = state_21328;if(cljs.core.truth_(delay))
{var statearr_21334_21362 = state_21328__$1;(statearr_21334_21362[1] = 8);
} else
{var statearr_21335_21363 = state_21328__$1;(statearr_21335_21363[1] = 9);
}
return cljs.core.constant$keyword$196;
} else
{if((state_val_21329 === 6))
{var state_21328__$1 = state_21328;var statearr_21336_21364 = state_21328__$1;(statearr_21336_21364[2] = null);
(statearr_21336_21364[1] = 7);
return cljs.core.constant$keyword$196;
} else
{if((state_val_21329 === 7))
{var inst_21319 = (state_21328[2]);var state_21328__$1 = state_21328;if(cljs.core.truth_(inst_21319))
{var statearr_21337_21365 = state_21328__$1;(statearr_21337_21365[1] = 15);
} else
{var statearr_21338_21366 = state_21328__$1;(statearr_21338_21366[1] = 16);
}
return cljs.core.constant$keyword$196;
} else
{if((state_val_21329 === 8))
{var inst_21305 = cljs.core.async.timeout(delay);var state_21328__$1 = state_21328;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_21328__$1,11,inst_21305);
} else
{if((state_val_21329 === 9))
{var state_21328__$1 = state_21328;var statearr_21339_21367 = state_21328__$1;(statearr_21339_21367[2] = null);
(statearr_21339_21367[1] = 10);
return cljs.core.constant$keyword$196;
} else
{if((state_val_21329 === 10))
{var inst_21310 = (state_21328[2]);var state_21328__$1 = (function (){var statearr_21340 = state_21328;(statearr_21340[8] = inst_21310);
return statearr_21340;
})();if(cljs.core.truth_(log))
{var statearr_21341_21368 = state_21328__$1;(statearr_21341_21368[1] = 12);
} else
{var statearr_21342_21369 = state_21328__$1;(statearr_21342_21369[1] = 13);
}
return cljs.core.constant$keyword$196;
} else
{if((state_val_21329 === 11))
{var inst_21307 = (state_21328[2]);var state_21328__$1 = state_21328;var statearr_21343_21370 = state_21328__$1;(statearr_21343_21370[2] = inst_21307);
(statearr_21343_21370[1] = 10);
return cljs.core.constant$keyword$196;
} else
{if((state_val_21329 === 12))
{var inst_21302 = (state_21328[7]);var inst_21312 = cljs.core.clj__GT_js(inst_21302);var inst_21313 = console.log(inst_21312);var state_21328__$1 = state_21328;var statearr_21344_21371 = state_21328__$1;(statearr_21344_21371[2] = inst_21313);
(statearr_21344_21371[1] = 14);
return cljs.core.constant$keyword$196;
} else
{if((state_val_21329 === 13))
{var state_21328__$1 = state_21328;var statearr_21345_21372 = state_21328__$1;(statearr_21345_21372[2] = null);
(statearr_21345_21372[1] = 14);
return cljs.core.constant$keyword$196;
} else
{if((state_val_21329 === 14))
{var inst_21302 = (state_21328[7]);var inst_21316 = (state_21328[2]);var state_21328__$1 = (function (){var statearr_21346 = state_21328;(statearr_21346[9] = inst_21316);
return statearr_21346;
})();var statearr_21347_21373 = state_21328__$1;(statearr_21347_21373[2] = inst_21302);
(statearr_21347_21373[1] = 7);
return cljs.core.constant$keyword$196;
} else
{if((state_val_21329 === 15))
{var state_21328__$1 = state_21328;var statearr_21348_21374 = state_21328__$1;(statearr_21348_21374[2] = null);
(statearr_21348_21374[1] = 2);
return cljs.core.constant$keyword$196;
} else
{if((state_val_21329 === 16))
{var state_21328__$1 = state_21328;var statearr_21349_21375 = state_21328__$1;(statearr_21349_21375[2] = null);
(statearr_21349_21375[1] = 17);
return cljs.core.constant$keyword$196;
} else
{if((state_val_21329 === 17))
{var inst_21324 = (state_21328[2]);var state_21328__$1 = state_21328;var statearr_21350_21376 = state_21328__$1;(statearr_21350_21376[2] = inst_21324);
(statearr_21350_21376[1] = 3);
return cljs.core.constant$keyword$196;
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
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_21354 = [null,null,null,null,null,null,null,null,null,null];(statearr_21354[0] = state_machine__5507__auto__);
(statearr_21354[1] = 1);
return statearr_21354;
});
var state_machine__5507__auto____1 = (function (state_21328){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_21328);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$196))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e21355){if((e21355 instanceof Object))
{var ex__5510__auto__ = e21355;var statearr_21356_21377 = state_21328;(statearr_21356_21377[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_21328);
return cljs.core.constant$keyword$196;
} else
{if(cljs.core.constant$keyword$185)
{throw e21355;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$196))
{{
var G__21378 = state_21328;
state_21328 = G__21378;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_21328){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_21328);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_21357 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_21357[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___21358);
return statearr_21357;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5523__auto__);
}));
return null;
};
var dorun_async = function (ch,var_args){
var p__21239 = null;if (arguments.length > 1) {
  p__21239 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return dorun_async__delegate.call(this,ch,p__21239);};
dorun_async.cljs$lang$maxFixedArity = 1;
dorun_async.cljs$lang$applyTo = (function (arglist__21379){
var ch = cljs.core.first(arglist__21379);
var p__21239 = cljs.core.rest(arglist__21379);
return dorun_async__delegate(ch,p__21239);
});
dorun_async.cljs$core$IFn$_invoke$arity$variadic = dorun_async__delegate;
return dorun_async;
})()
;
