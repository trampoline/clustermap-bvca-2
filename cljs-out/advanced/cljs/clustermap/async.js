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
map_async.cljs$lang$applyTo = (function (arglist__21235){
var f = cljs.core.first(arglist__21235);
var colls = cljs.core.rest(arglist__21235);
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
var dorun_async__delegate = function (ch,p__21236){var map__21296 = p__21236;var map__21296__$1 = ((cljs.core.seq_QMARK_(map__21296))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21296):map__21296);var delay = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21296__$1,cljs.core.constant$keyword$336);var log = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21296__$1,cljs.core.constant$keyword$349);var c__5521__auto___21355 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_21325){var state_val_21326 = (state_21325[1]);if((state_val_21326 === 1))
{var state_21325__$1 = state_21325;var statearr_21327_21356 = state_21325__$1;(statearr_21327_21356[2] = null);
(statearr_21327_21356[1] = 2);
return cljs.core.constant$keyword$197;
} else
{if((state_val_21326 === 2))
{var state_21325__$1 = state_21325;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_21325__$1,4,ch);
} else
{if((state_val_21326 === 3))
{var inst_21323 = (state_21325[2]);var state_21325__$1 = state_21325;return cljs.core.async.impl.ioc_helpers.return_chan(state_21325__$1,inst_21323);
} else
{if((state_val_21326 === 4))
{var inst_21299 = (state_21325[7]);var inst_21299__$1 = (state_21325[2]);var state_21325__$1 = (function (){var statearr_21328 = state_21325;(statearr_21328[7] = inst_21299__$1);
return statearr_21328;
})();if(cljs.core.truth_(inst_21299__$1))
{var statearr_21329_21357 = state_21325__$1;(statearr_21329_21357[1] = 5);
} else
{var statearr_21330_21358 = state_21325__$1;(statearr_21330_21358[1] = 6);
}
return cljs.core.constant$keyword$197;
} else
{if((state_val_21326 === 5))
{var state_21325__$1 = state_21325;if(cljs.core.truth_(delay))
{var statearr_21331_21359 = state_21325__$1;(statearr_21331_21359[1] = 8);
} else
{var statearr_21332_21360 = state_21325__$1;(statearr_21332_21360[1] = 9);
}
return cljs.core.constant$keyword$197;
} else
{if((state_val_21326 === 6))
{var state_21325__$1 = state_21325;var statearr_21333_21361 = state_21325__$1;(statearr_21333_21361[2] = null);
(statearr_21333_21361[1] = 7);
return cljs.core.constant$keyword$197;
} else
{if((state_val_21326 === 7))
{var inst_21316 = (state_21325[2]);var state_21325__$1 = state_21325;if(cljs.core.truth_(inst_21316))
{var statearr_21334_21362 = state_21325__$1;(statearr_21334_21362[1] = 15);
} else
{var statearr_21335_21363 = state_21325__$1;(statearr_21335_21363[1] = 16);
}
return cljs.core.constant$keyword$197;
} else
{if((state_val_21326 === 8))
{var inst_21302 = cljs.core.async.timeout(delay);var state_21325__$1 = state_21325;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_21325__$1,11,inst_21302);
} else
{if((state_val_21326 === 9))
{var state_21325__$1 = state_21325;var statearr_21336_21364 = state_21325__$1;(statearr_21336_21364[2] = null);
(statearr_21336_21364[1] = 10);
return cljs.core.constant$keyword$197;
} else
{if((state_val_21326 === 10))
{var inst_21307 = (state_21325[2]);var state_21325__$1 = (function (){var statearr_21337 = state_21325;(statearr_21337[8] = inst_21307);
return statearr_21337;
})();if(cljs.core.truth_(log))
{var statearr_21338_21365 = state_21325__$1;(statearr_21338_21365[1] = 12);
} else
{var statearr_21339_21366 = state_21325__$1;(statearr_21339_21366[1] = 13);
}
return cljs.core.constant$keyword$197;
} else
{if((state_val_21326 === 11))
{var inst_21304 = (state_21325[2]);var state_21325__$1 = state_21325;var statearr_21340_21367 = state_21325__$1;(statearr_21340_21367[2] = inst_21304);
(statearr_21340_21367[1] = 10);
return cljs.core.constant$keyword$197;
} else
{if((state_val_21326 === 12))
{var inst_21299 = (state_21325[7]);var inst_21309 = cljs.core.clj__GT_js(inst_21299);var inst_21310 = console.log(inst_21309);var state_21325__$1 = state_21325;var statearr_21341_21368 = state_21325__$1;(statearr_21341_21368[2] = inst_21310);
(statearr_21341_21368[1] = 14);
return cljs.core.constant$keyword$197;
} else
{if((state_val_21326 === 13))
{var state_21325__$1 = state_21325;var statearr_21342_21369 = state_21325__$1;(statearr_21342_21369[2] = null);
(statearr_21342_21369[1] = 14);
return cljs.core.constant$keyword$197;
} else
{if((state_val_21326 === 14))
{var inst_21299 = (state_21325[7]);var inst_21313 = (state_21325[2]);var state_21325__$1 = (function (){var statearr_21343 = state_21325;(statearr_21343[9] = inst_21313);
return statearr_21343;
})();var statearr_21344_21370 = state_21325__$1;(statearr_21344_21370[2] = inst_21299);
(statearr_21344_21370[1] = 7);
return cljs.core.constant$keyword$197;
} else
{if((state_val_21326 === 15))
{var state_21325__$1 = state_21325;var statearr_21345_21371 = state_21325__$1;(statearr_21345_21371[2] = null);
(statearr_21345_21371[1] = 2);
return cljs.core.constant$keyword$197;
} else
{if((state_val_21326 === 16))
{var state_21325__$1 = state_21325;var statearr_21346_21372 = state_21325__$1;(statearr_21346_21372[2] = null);
(statearr_21346_21372[1] = 17);
return cljs.core.constant$keyword$197;
} else
{if((state_val_21326 === 17))
{var inst_21321 = (state_21325[2]);var state_21325__$1 = state_21325;var statearr_21347_21373 = state_21325__$1;(statearr_21347_21373[2] = inst_21321);
(statearr_21347_21373[1] = 3);
return cljs.core.constant$keyword$197;
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
var state_machine__5507__auto____0 = (function (){var statearr_21351 = [null,null,null,null,null,null,null,null,null,null];(statearr_21351[0] = state_machine__5507__auto__);
(statearr_21351[1] = 1);
return statearr_21351;
});
var state_machine__5507__auto____1 = (function (state_21325){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_21325);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$197))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e21352){if((e21352 instanceof Object))
{var ex__5510__auto__ = e21352;var statearr_21353_21374 = state_21325;(statearr_21353_21374[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_21325);
return cljs.core.constant$keyword$197;
} else
{if(cljs.core.constant$keyword$186)
{throw e21352;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$197))
{{
var G__21375 = state_21325;
state_21325 = G__21375;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_21325){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_21325);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_21354 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_21354[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___21355);
return statearr_21354;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5523__auto__);
}));
return null;
};
var dorun_async = function (ch,var_args){
var p__21236 = null;if (arguments.length > 1) {
  p__21236 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return dorun_async__delegate.call(this,ch,p__21236);};
dorun_async.cljs$lang$maxFixedArity = 1;
dorun_async.cljs$lang$applyTo = (function (arglist__21376){
var ch = cljs.core.first(arglist__21376);
var p__21236 = cljs.core.rest(arglist__21376);
return dorun_async__delegate(ch,p__21236);
});
dorun_async.cljs$core$IFn$_invoke$arity$variadic = dorun_async__delegate;
return dorun_async;
})()
;
