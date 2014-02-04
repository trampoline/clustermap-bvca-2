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
map_async.cljs$lang$applyTo = (function (arglist__21378){
var f = cljs.core.first(arglist__21378);
var colls = cljs.core.rest(arglist__21378);
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
var dorun_async__delegate = function (ch,p__21379){var map__21439 = p__21379;var map__21439__$1 = ((cljs.core.seq_QMARK_(map__21439))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21439):map__21439);var delay = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21439__$1,cljs.core.constant$keyword$354);var log = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21439__$1,cljs.core.constant$keyword$375);var c__5521__auto___21498 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_21468){var state_val_21469 = (state_21468[1]);if((state_val_21469 === 1))
{var state_21468__$1 = state_21468;var statearr_21470_21499 = state_21468__$1;(statearr_21470_21499[2] = null);
(statearr_21470_21499[1] = 2);
return cljs.core.constant$keyword$210;
} else
{if((state_val_21469 === 2))
{var state_21468__$1 = state_21468;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_21468__$1,4,ch);
} else
{if((state_val_21469 === 3))
{var inst_21466 = (state_21468[2]);var state_21468__$1 = state_21468;return cljs.core.async.impl.ioc_helpers.return_chan(state_21468__$1,inst_21466);
} else
{if((state_val_21469 === 4))
{var inst_21442 = (state_21468[7]);var inst_21442__$1 = (state_21468[2]);var state_21468__$1 = (function (){var statearr_21471 = state_21468;(statearr_21471[7] = inst_21442__$1);
return statearr_21471;
})();if(cljs.core.truth_(inst_21442__$1))
{var statearr_21472_21500 = state_21468__$1;(statearr_21472_21500[1] = 5);
} else
{var statearr_21473_21501 = state_21468__$1;(statearr_21473_21501[1] = 6);
}
return cljs.core.constant$keyword$210;
} else
{if((state_val_21469 === 5))
{var state_21468__$1 = state_21468;if(cljs.core.truth_(delay))
{var statearr_21474_21502 = state_21468__$1;(statearr_21474_21502[1] = 8);
} else
{var statearr_21475_21503 = state_21468__$1;(statearr_21475_21503[1] = 9);
}
return cljs.core.constant$keyword$210;
} else
{if((state_val_21469 === 6))
{var state_21468__$1 = state_21468;var statearr_21476_21504 = state_21468__$1;(statearr_21476_21504[2] = null);
(statearr_21476_21504[1] = 7);
return cljs.core.constant$keyword$210;
} else
{if((state_val_21469 === 7))
{var inst_21459 = (state_21468[2]);var state_21468__$1 = state_21468;if(cljs.core.truth_(inst_21459))
{var statearr_21477_21505 = state_21468__$1;(statearr_21477_21505[1] = 15);
} else
{var statearr_21478_21506 = state_21468__$1;(statearr_21478_21506[1] = 16);
}
return cljs.core.constant$keyword$210;
} else
{if((state_val_21469 === 8))
{var inst_21445 = cljs.core.async.timeout(delay);var state_21468__$1 = state_21468;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_21468__$1,11,inst_21445);
} else
{if((state_val_21469 === 9))
{var state_21468__$1 = state_21468;var statearr_21479_21507 = state_21468__$1;(statearr_21479_21507[2] = null);
(statearr_21479_21507[1] = 10);
return cljs.core.constant$keyword$210;
} else
{if((state_val_21469 === 10))
{var inst_21450 = (state_21468[2]);var state_21468__$1 = (function (){var statearr_21480 = state_21468;(statearr_21480[8] = inst_21450);
return statearr_21480;
})();if(cljs.core.truth_(log))
{var statearr_21481_21508 = state_21468__$1;(statearr_21481_21508[1] = 12);
} else
{var statearr_21482_21509 = state_21468__$1;(statearr_21482_21509[1] = 13);
}
return cljs.core.constant$keyword$210;
} else
{if((state_val_21469 === 11))
{var inst_21447 = (state_21468[2]);var state_21468__$1 = state_21468;var statearr_21483_21510 = state_21468__$1;(statearr_21483_21510[2] = inst_21447);
(statearr_21483_21510[1] = 10);
return cljs.core.constant$keyword$210;
} else
{if((state_val_21469 === 12))
{var inst_21442 = (state_21468[7]);var inst_21452 = cljs.core.clj__GT_js(inst_21442);var inst_21453 = console.log(inst_21452);var state_21468__$1 = state_21468;var statearr_21484_21511 = state_21468__$1;(statearr_21484_21511[2] = inst_21453);
(statearr_21484_21511[1] = 14);
return cljs.core.constant$keyword$210;
} else
{if((state_val_21469 === 13))
{var state_21468__$1 = state_21468;var statearr_21485_21512 = state_21468__$1;(statearr_21485_21512[2] = null);
(statearr_21485_21512[1] = 14);
return cljs.core.constant$keyword$210;
} else
{if((state_val_21469 === 14))
{var inst_21442 = (state_21468[7]);var inst_21456 = (state_21468[2]);var state_21468__$1 = (function (){var statearr_21486 = state_21468;(statearr_21486[9] = inst_21456);
return statearr_21486;
})();var statearr_21487_21513 = state_21468__$1;(statearr_21487_21513[2] = inst_21442);
(statearr_21487_21513[1] = 7);
return cljs.core.constant$keyword$210;
} else
{if((state_val_21469 === 15))
{var state_21468__$1 = state_21468;var statearr_21488_21514 = state_21468__$1;(statearr_21488_21514[2] = null);
(statearr_21488_21514[1] = 2);
return cljs.core.constant$keyword$210;
} else
{if((state_val_21469 === 16))
{var state_21468__$1 = state_21468;var statearr_21489_21515 = state_21468__$1;(statearr_21489_21515[2] = null);
(statearr_21489_21515[1] = 17);
return cljs.core.constant$keyword$210;
} else
{if((state_val_21469 === 17))
{var inst_21464 = (state_21468[2]);var state_21468__$1 = state_21468;var statearr_21490_21516 = state_21468__$1;(statearr_21490_21516[2] = inst_21464);
(statearr_21490_21516[1] = 3);
return cljs.core.constant$keyword$210;
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
var state_machine__5507__auto____0 = (function (){var statearr_21494 = [null,null,null,null,null,null,null,null,null,null];(statearr_21494[0] = state_machine__5507__auto__);
(statearr_21494[1] = 1);
return statearr_21494;
});
var state_machine__5507__auto____1 = (function (state_21468){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_21468);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$210))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e21495){if((e21495 instanceof Object))
{var ex__5510__auto__ = e21495;var statearr_21496_21517 = state_21468;(statearr_21496_21517[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_21468);
return cljs.core.constant$keyword$210;
} else
{if(cljs.core.constant$keyword$199)
{throw e21495;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$210))
{{
var G__21518 = state_21468;
state_21468 = G__21518;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_21468){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_21468);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_21497 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_21497[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___21498);
return statearr_21497;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5523__auto__);
}));
return null;
};
var dorun_async = function (ch,var_args){
var p__21379 = null;if (arguments.length > 1) {
  p__21379 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return dorun_async__delegate.call(this,ch,p__21379);};
dorun_async.cljs$lang$maxFixedArity = 1;
dorun_async.cljs$lang$applyTo = (function (arglist__21519){
var ch = cljs.core.first(arglist__21519);
var p__21379 = cljs.core.rest(arglist__21519);
return dorun_async__delegate(ch,p__21379);
});
dorun_async.cljs$core$IFn$_invoke$arity$variadic = dorun_async__delegate;
return dorun_async;
})()
;
