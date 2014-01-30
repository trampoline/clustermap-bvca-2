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
map_async.cljs$lang$applyTo = (function (arglist__11283){
var f = cljs.core.first(arglist__11283);
var colls = cljs.core.rest(arglist__11283);
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
var dorun_async__delegate = function (ch,p__11284){var map__11344 = p__11284;var map__11344__$1 = ((cljs.core.seq_QMARK_(map__11344))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__11344):map__11344);var delay = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11344__$1,cljs.core.constant$keyword$157);var log = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11344__$1,cljs.core.constant$keyword$171);var c__5521__auto___11403 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_11373){var state_val_11374 = (state_11373[1]);if((state_val_11374 === 1))
{var state_11373__$1 = state_11373;var statearr_11375_11404 = state_11373__$1;(statearr_11375_11404[2] = null);
(statearr_11375_11404[1] = 2);
return cljs.core.constant$keyword$17;
} else
{if((state_val_11374 === 2))
{var state_11373__$1 = state_11373;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11373__$1,4,ch);
} else
{if((state_val_11374 === 3))
{var inst_11371 = (state_11373[2]);var state_11373__$1 = state_11373;return cljs.core.async.impl.ioc_helpers.return_chan(state_11373__$1,inst_11371);
} else
{if((state_val_11374 === 4))
{var inst_11347 = (state_11373[7]);var inst_11347__$1 = (state_11373[2]);var state_11373__$1 = (function (){var statearr_11376 = state_11373;(statearr_11376[7] = inst_11347__$1);
return statearr_11376;
})();if(cljs.core.truth_(inst_11347__$1))
{var statearr_11377_11405 = state_11373__$1;(statearr_11377_11405[1] = 5);
} else
{var statearr_11378_11406 = state_11373__$1;(statearr_11378_11406[1] = 6);
}
return cljs.core.constant$keyword$17;
} else
{if((state_val_11374 === 5))
{var state_11373__$1 = state_11373;if(cljs.core.truth_(delay))
{var statearr_11379_11407 = state_11373__$1;(statearr_11379_11407[1] = 8);
} else
{var statearr_11380_11408 = state_11373__$1;(statearr_11380_11408[1] = 9);
}
return cljs.core.constant$keyword$17;
} else
{if((state_val_11374 === 6))
{var state_11373__$1 = state_11373;var statearr_11381_11409 = state_11373__$1;(statearr_11381_11409[2] = null);
(statearr_11381_11409[1] = 7);
return cljs.core.constant$keyword$17;
} else
{if((state_val_11374 === 7))
{var inst_11364 = (state_11373[2]);var state_11373__$1 = state_11373;if(cljs.core.truth_(inst_11364))
{var statearr_11382_11410 = state_11373__$1;(statearr_11382_11410[1] = 15);
} else
{var statearr_11383_11411 = state_11373__$1;(statearr_11383_11411[1] = 16);
}
return cljs.core.constant$keyword$17;
} else
{if((state_val_11374 === 8))
{var inst_11350 = cljs.core.async.timeout(delay);var state_11373__$1 = state_11373;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11373__$1,11,inst_11350);
} else
{if((state_val_11374 === 9))
{var state_11373__$1 = state_11373;var statearr_11384_11412 = state_11373__$1;(statearr_11384_11412[2] = null);
(statearr_11384_11412[1] = 10);
return cljs.core.constant$keyword$17;
} else
{if((state_val_11374 === 10))
{var inst_11355 = (state_11373[2]);var state_11373__$1 = (function (){var statearr_11385 = state_11373;(statearr_11385[8] = inst_11355);
return statearr_11385;
})();if(cljs.core.truth_(log))
{var statearr_11386_11413 = state_11373__$1;(statearr_11386_11413[1] = 12);
} else
{var statearr_11387_11414 = state_11373__$1;(statearr_11387_11414[1] = 13);
}
return cljs.core.constant$keyword$17;
} else
{if((state_val_11374 === 11))
{var inst_11352 = (state_11373[2]);var state_11373__$1 = state_11373;var statearr_11388_11415 = state_11373__$1;(statearr_11388_11415[2] = inst_11352);
(statearr_11388_11415[1] = 10);
return cljs.core.constant$keyword$17;
} else
{if((state_val_11374 === 12))
{var inst_11347 = (state_11373[7]);var inst_11357 = cljs.core.clj__GT_js(inst_11347);var inst_11358 = console.log(inst_11357);var state_11373__$1 = state_11373;var statearr_11389_11416 = state_11373__$1;(statearr_11389_11416[2] = inst_11358);
(statearr_11389_11416[1] = 14);
return cljs.core.constant$keyword$17;
} else
{if((state_val_11374 === 13))
{var state_11373__$1 = state_11373;var statearr_11390_11417 = state_11373__$1;(statearr_11390_11417[2] = null);
(statearr_11390_11417[1] = 14);
return cljs.core.constant$keyword$17;
} else
{if((state_val_11374 === 14))
{var inst_11347 = (state_11373[7]);var inst_11361 = (state_11373[2]);var state_11373__$1 = (function (){var statearr_11391 = state_11373;(statearr_11391[9] = inst_11361);
return statearr_11391;
})();var statearr_11392_11418 = state_11373__$1;(statearr_11392_11418[2] = inst_11347);
(statearr_11392_11418[1] = 7);
return cljs.core.constant$keyword$17;
} else
{if((state_val_11374 === 15))
{var state_11373__$1 = state_11373;var statearr_11393_11419 = state_11373__$1;(statearr_11393_11419[2] = null);
(statearr_11393_11419[1] = 2);
return cljs.core.constant$keyword$17;
} else
{if((state_val_11374 === 16))
{var state_11373__$1 = state_11373;var statearr_11394_11420 = state_11373__$1;(statearr_11394_11420[2] = null);
(statearr_11394_11420[1] = 17);
return cljs.core.constant$keyword$17;
} else
{if((state_val_11374 === 17))
{var inst_11369 = (state_11373[2]);var state_11373__$1 = state_11373;var statearr_11395_11421 = state_11373__$1;(statearr_11395_11421[2] = inst_11369);
(statearr_11395_11421[1] = 3);
return cljs.core.constant$keyword$17;
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
var state_machine__5507__auto____0 = (function (){var statearr_11399 = [null,null,null,null,null,null,null,null,null,null];(statearr_11399[0] = state_machine__5507__auto__);
(statearr_11399[1] = 1);
return statearr_11399;
});
var state_machine__5507__auto____1 = (function (state_11373){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_11373);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$17))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e11400){if((e11400 instanceof Object))
{var ex__5510__auto__ = e11400;var statearr_11401_11422 = state_11373;(statearr_11401_11422[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_11373);
return cljs.core.constant$keyword$17;
} else
{if(cljs.core.constant$keyword$6)
{throw e11400;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$17))
{{
var G__11423 = state_11373;
state_11373 = G__11423;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_11373){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_11373);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_11402 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_11402[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___11403);
return statearr_11402;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5523__auto__);
}));
return null;
};
var dorun_async = function (ch,var_args){
var p__11284 = null;if (arguments.length > 1) {
  p__11284 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return dorun_async__delegate.call(this,ch,p__11284);};
dorun_async.cljs$lang$maxFixedArity = 1;
dorun_async.cljs$lang$applyTo = (function (arglist__11424){
var ch = cljs.core.first(arglist__11424);
var p__11284 = cljs.core.rest(arglist__11424);
return dorun_async__delegate(ch,p__11284);
});
dorun_async.cljs$core$IFn$_invoke$arity$variadic = dorun_async__delegate;
return dorun_async;
})()
;
