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
map_async.cljs$lang$applyTo = (function (arglist__21403){
var f = cljs.core.first(arglist__21403);
var colls = cljs.core.rest(arglist__21403);
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
var dorun_async__delegate = function (ch,p__21404){var map__21464 = p__21404;var map__21464__$1 = ((cljs.core.seq_QMARK_(map__21464))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21464):map__21464);var delay = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21464__$1,cljs.core.constant$keyword$354);var log = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21464__$1,cljs.core.constant$keyword$375);var c__5521__auto___21523 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_21493){var state_val_21494 = (state_21493[1]);if((state_val_21494 === 1))
{var state_21493__$1 = state_21493;var statearr_21495_21524 = state_21493__$1;(statearr_21495_21524[2] = null);
(statearr_21495_21524[1] = 2);
return cljs.core.constant$keyword$210;
} else
{if((state_val_21494 === 2))
{var state_21493__$1 = state_21493;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_21493__$1,4,ch);
} else
{if((state_val_21494 === 3))
{var inst_21491 = (state_21493[2]);var state_21493__$1 = state_21493;return cljs.core.async.impl.ioc_helpers.return_chan(state_21493__$1,inst_21491);
} else
{if((state_val_21494 === 4))
{var inst_21467 = (state_21493[7]);var inst_21467__$1 = (state_21493[2]);var state_21493__$1 = (function (){var statearr_21496 = state_21493;(statearr_21496[7] = inst_21467__$1);
return statearr_21496;
})();if(cljs.core.truth_(inst_21467__$1))
{var statearr_21497_21525 = state_21493__$1;(statearr_21497_21525[1] = 5);
} else
{var statearr_21498_21526 = state_21493__$1;(statearr_21498_21526[1] = 6);
}
return cljs.core.constant$keyword$210;
} else
{if((state_val_21494 === 5))
{var state_21493__$1 = state_21493;if(cljs.core.truth_(delay))
{var statearr_21499_21527 = state_21493__$1;(statearr_21499_21527[1] = 8);
} else
{var statearr_21500_21528 = state_21493__$1;(statearr_21500_21528[1] = 9);
}
return cljs.core.constant$keyword$210;
} else
{if((state_val_21494 === 6))
{var state_21493__$1 = state_21493;var statearr_21501_21529 = state_21493__$1;(statearr_21501_21529[2] = null);
(statearr_21501_21529[1] = 7);
return cljs.core.constant$keyword$210;
} else
{if((state_val_21494 === 7))
{var inst_21484 = (state_21493[2]);var state_21493__$1 = state_21493;if(cljs.core.truth_(inst_21484))
{var statearr_21502_21530 = state_21493__$1;(statearr_21502_21530[1] = 15);
} else
{var statearr_21503_21531 = state_21493__$1;(statearr_21503_21531[1] = 16);
}
return cljs.core.constant$keyword$210;
} else
{if((state_val_21494 === 8))
{var inst_21470 = cljs.core.async.timeout(delay);var state_21493__$1 = state_21493;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_21493__$1,11,inst_21470);
} else
{if((state_val_21494 === 9))
{var state_21493__$1 = state_21493;var statearr_21504_21532 = state_21493__$1;(statearr_21504_21532[2] = null);
(statearr_21504_21532[1] = 10);
return cljs.core.constant$keyword$210;
} else
{if((state_val_21494 === 10))
{var inst_21475 = (state_21493[2]);var state_21493__$1 = (function (){var statearr_21505 = state_21493;(statearr_21505[8] = inst_21475);
return statearr_21505;
})();if(cljs.core.truth_(log))
{var statearr_21506_21533 = state_21493__$1;(statearr_21506_21533[1] = 12);
} else
{var statearr_21507_21534 = state_21493__$1;(statearr_21507_21534[1] = 13);
}
return cljs.core.constant$keyword$210;
} else
{if((state_val_21494 === 11))
{var inst_21472 = (state_21493[2]);var state_21493__$1 = state_21493;var statearr_21508_21535 = state_21493__$1;(statearr_21508_21535[2] = inst_21472);
(statearr_21508_21535[1] = 10);
return cljs.core.constant$keyword$210;
} else
{if((state_val_21494 === 12))
{var inst_21467 = (state_21493[7]);var inst_21477 = cljs.core.clj__GT_js(inst_21467);var inst_21478 = console.log(inst_21477);var state_21493__$1 = state_21493;var statearr_21509_21536 = state_21493__$1;(statearr_21509_21536[2] = inst_21478);
(statearr_21509_21536[1] = 14);
return cljs.core.constant$keyword$210;
} else
{if((state_val_21494 === 13))
{var state_21493__$1 = state_21493;var statearr_21510_21537 = state_21493__$1;(statearr_21510_21537[2] = null);
(statearr_21510_21537[1] = 14);
return cljs.core.constant$keyword$210;
} else
{if((state_val_21494 === 14))
{var inst_21467 = (state_21493[7]);var inst_21481 = (state_21493[2]);var state_21493__$1 = (function (){var statearr_21511 = state_21493;(statearr_21511[9] = inst_21481);
return statearr_21511;
})();var statearr_21512_21538 = state_21493__$1;(statearr_21512_21538[2] = inst_21467);
(statearr_21512_21538[1] = 7);
return cljs.core.constant$keyword$210;
} else
{if((state_val_21494 === 15))
{var state_21493__$1 = state_21493;var statearr_21513_21539 = state_21493__$1;(statearr_21513_21539[2] = null);
(statearr_21513_21539[1] = 2);
return cljs.core.constant$keyword$210;
} else
{if((state_val_21494 === 16))
{var state_21493__$1 = state_21493;var statearr_21514_21540 = state_21493__$1;(statearr_21514_21540[2] = null);
(statearr_21514_21540[1] = 17);
return cljs.core.constant$keyword$210;
} else
{if((state_val_21494 === 17))
{var inst_21489 = (state_21493[2]);var state_21493__$1 = state_21493;var statearr_21515_21541 = state_21493__$1;(statearr_21515_21541[2] = inst_21489);
(statearr_21515_21541[1] = 3);
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
var state_machine__5507__auto____0 = (function (){var statearr_21519 = [null,null,null,null,null,null,null,null,null,null];(statearr_21519[0] = state_machine__5507__auto__);
(statearr_21519[1] = 1);
return statearr_21519;
});
var state_machine__5507__auto____1 = (function (state_21493){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_21493);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$210))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e21520){if((e21520 instanceof Object))
{var ex__5510__auto__ = e21520;var statearr_21521_21542 = state_21493;(statearr_21521_21542[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_21493);
return cljs.core.constant$keyword$210;
} else
{if(cljs.core.constant$keyword$199)
{throw e21520;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$210))
{{
var G__21543 = state_21493;
state_21493 = G__21543;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_21493){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_21493);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_21522 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_21522[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___21523);
return statearr_21522;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5523__auto__);
}));
return null;
};
var dorun_async = function (ch,var_args){
var p__21404 = null;if (arguments.length > 1) {
  p__21404 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return dorun_async__delegate.call(this,ch,p__21404);};
dorun_async.cljs$lang$maxFixedArity = 1;
dorun_async.cljs$lang$applyTo = (function (arglist__21544){
var ch = cljs.core.first(arglist__21544);
var p__21404 = cljs.core.rest(arglist__21544);
return dorun_async__delegate(ch,p__21404);
});
dorun_async.cljs$core$IFn$_invoke$arity$variadic = dorun_async__delegate;
return dorun_async;
})()
;
