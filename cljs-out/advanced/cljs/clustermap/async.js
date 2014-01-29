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
map_async.cljs$lang$applyTo = (function (arglist__21222){
var f = cljs.core.first(arglist__21222);
var colls = cljs.core.rest(arglist__21222);
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
var dorun_async__delegate = function (ch,p__21223){var map__21283 = p__21223;var map__21283__$1 = ((cljs.core.seq_QMARK_(map__21283))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21283):map__21283);var delay = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21283__$1,cljs.core.constant$keyword$338);var log = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21283__$1,cljs.core.constant$keyword$351);var c__5521__auto___21342 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_21312){var state_val_21313 = (state_21312[1]);if((state_val_21313 === 1))
{var state_21312__$1 = state_21312;var statearr_21314_21343 = state_21312__$1;(statearr_21314_21343[2] = null);
(statearr_21314_21343[1] = 2);
return cljs.core.constant$keyword$198;
} else
{if((state_val_21313 === 2))
{var state_21312__$1 = state_21312;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_21312__$1,4,ch);
} else
{if((state_val_21313 === 3))
{var inst_21310 = (state_21312[2]);var state_21312__$1 = state_21312;return cljs.core.async.impl.ioc_helpers.return_chan(state_21312__$1,inst_21310);
} else
{if((state_val_21313 === 4))
{var inst_21286 = (state_21312[7]);var inst_21286__$1 = (state_21312[2]);var state_21312__$1 = (function (){var statearr_21315 = state_21312;(statearr_21315[7] = inst_21286__$1);
return statearr_21315;
})();if(cljs.core.truth_(inst_21286__$1))
{var statearr_21316_21344 = state_21312__$1;(statearr_21316_21344[1] = 5);
} else
{var statearr_21317_21345 = state_21312__$1;(statearr_21317_21345[1] = 6);
}
return cljs.core.constant$keyword$198;
} else
{if((state_val_21313 === 5))
{var state_21312__$1 = state_21312;if(cljs.core.truth_(delay))
{var statearr_21318_21346 = state_21312__$1;(statearr_21318_21346[1] = 8);
} else
{var statearr_21319_21347 = state_21312__$1;(statearr_21319_21347[1] = 9);
}
return cljs.core.constant$keyword$198;
} else
{if((state_val_21313 === 6))
{var state_21312__$1 = state_21312;var statearr_21320_21348 = state_21312__$1;(statearr_21320_21348[2] = null);
(statearr_21320_21348[1] = 7);
return cljs.core.constant$keyword$198;
} else
{if((state_val_21313 === 7))
{var inst_21303 = (state_21312[2]);var state_21312__$1 = state_21312;if(cljs.core.truth_(inst_21303))
{var statearr_21321_21349 = state_21312__$1;(statearr_21321_21349[1] = 15);
} else
{var statearr_21322_21350 = state_21312__$1;(statearr_21322_21350[1] = 16);
}
return cljs.core.constant$keyword$198;
} else
{if((state_val_21313 === 8))
{var inst_21289 = cljs.core.async.timeout(delay);var state_21312__$1 = state_21312;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_21312__$1,11,inst_21289);
} else
{if((state_val_21313 === 9))
{var state_21312__$1 = state_21312;var statearr_21323_21351 = state_21312__$1;(statearr_21323_21351[2] = null);
(statearr_21323_21351[1] = 10);
return cljs.core.constant$keyword$198;
} else
{if((state_val_21313 === 10))
{var inst_21294 = (state_21312[2]);var state_21312__$1 = (function (){var statearr_21324 = state_21312;(statearr_21324[8] = inst_21294);
return statearr_21324;
})();if(cljs.core.truth_(log))
{var statearr_21325_21352 = state_21312__$1;(statearr_21325_21352[1] = 12);
} else
{var statearr_21326_21353 = state_21312__$1;(statearr_21326_21353[1] = 13);
}
return cljs.core.constant$keyword$198;
} else
{if((state_val_21313 === 11))
{var inst_21291 = (state_21312[2]);var state_21312__$1 = state_21312;var statearr_21327_21354 = state_21312__$1;(statearr_21327_21354[2] = inst_21291);
(statearr_21327_21354[1] = 10);
return cljs.core.constant$keyword$198;
} else
{if((state_val_21313 === 12))
{var inst_21286 = (state_21312[7]);var inst_21296 = cljs.core.clj__GT_js(inst_21286);var inst_21297 = console.log(inst_21296);var state_21312__$1 = state_21312;var statearr_21328_21355 = state_21312__$1;(statearr_21328_21355[2] = inst_21297);
(statearr_21328_21355[1] = 14);
return cljs.core.constant$keyword$198;
} else
{if((state_val_21313 === 13))
{var state_21312__$1 = state_21312;var statearr_21329_21356 = state_21312__$1;(statearr_21329_21356[2] = null);
(statearr_21329_21356[1] = 14);
return cljs.core.constant$keyword$198;
} else
{if((state_val_21313 === 14))
{var inst_21286 = (state_21312[7]);var inst_21300 = (state_21312[2]);var state_21312__$1 = (function (){var statearr_21330 = state_21312;(statearr_21330[9] = inst_21300);
return statearr_21330;
})();var statearr_21331_21357 = state_21312__$1;(statearr_21331_21357[2] = inst_21286);
(statearr_21331_21357[1] = 7);
return cljs.core.constant$keyword$198;
} else
{if((state_val_21313 === 15))
{var state_21312__$1 = state_21312;var statearr_21332_21358 = state_21312__$1;(statearr_21332_21358[2] = null);
(statearr_21332_21358[1] = 2);
return cljs.core.constant$keyword$198;
} else
{if((state_val_21313 === 16))
{var state_21312__$1 = state_21312;var statearr_21333_21359 = state_21312__$1;(statearr_21333_21359[2] = null);
(statearr_21333_21359[1] = 17);
return cljs.core.constant$keyword$198;
} else
{if((state_val_21313 === 17))
{var inst_21308 = (state_21312[2]);var state_21312__$1 = state_21312;var statearr_21334_21360 = state_21312__$1;(statearr_21334_21360[2] = inst_21308);
(statearr_21334_21360[1] = 3);
return cljs.core.constant$keyword$198;
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
var state_machine__5507__auto____0 = (function (){var statearr_21338 = [null,null,null,null,null,null,null,null,null,null];(statearr_21338[0] = state_machine__5507__auto__);
(statearr_21338[1] = 1);
return statearr_21338;
});
var state_machine__5507__auto____1 = (function (state_21312){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_21312);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$198))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e21339){if((e21339 instanceof Object))
{var ex__5510__auto__ = e21339;var statearr_21340_21361 = state_21312;(statearr_21340_21361[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_21312);
return cljs.core.constant$keyword$198;
} else
{if(cljs.core.constant$keyword$187)
{throw e21339;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$198))
{{
var G__21362 = state_21312;
state_21312 = G__21362;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_21312){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_21312);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_21341 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_21341[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___21342);
return statearr_21341;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5523__auto__);
}));
return null;
};
var dorun_async = function (ch,var_args){
var p__21223 = null;if (arguments.length > 1) {
  p__21223 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return dorun_async__delegate.call(this,ch,p__21223);};
dorun_async.cljs$lang$maxFixedArity = 1;
dorun_async.cljs$lang$applyTo = (function (arglist__21363){
var ch = cljs.core.first(arglist__21363);
var p__21223 = cljs.core.rest(arglist__21363);
return dorun_async__delegate(ch,p__21223);
});
dorun_async.cljs$core$IFn$_invoke$arity$variadic = dorun_async__delegate;
return dorun_async;
})()
;
