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
map_async.cljs$lang$applyTo = (function (arglist__21408){
var f = cljs.core.first(arglist__21408);
var colls = cljs.core.rest(arglist__21408);
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
var dorun_async__delegate = function (ch,p__21409){var map__21469 = p__21409;var map__21469__$1 = ((cljs.core.seq_QMARK_(map__21469))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21469):map__21469);var delay = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21469__$1,cljs.core.constant$keyword$353);var log = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21469__$1,cljs.core.constant$keyword$373);var c__5521__auto___21528 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_21498){var state_val_21499 = (state_21498[1]);if((state_val_21499 === 1))
{var state_21498__$1 = state_21498;var statearr_21500_21529 = state_21498__$1;(statearr_21500_21529[2] = null);
(statearr_21500_21529[1] = 2);
return cljs.core.constant$keyword$209;
} else
{if((state_val_21499 === 2))
{var state_21498__$1 = state_21498;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_21498__$1,4,ch);
} else
{if((state_val_21499 === 3))
{var inst_21496 = (state_21498[2]);var state_21498__$1 = state_21498;return cljs.core.async.impl.ioc_helpers.return_chan(state_21498__$1,inst_21496);
} else
{if((state_val_21499 === 4))
{var inst_21472 = (state_21498[7]);var inst_21472__$1 = (state_21498[2]);var state_21498__$1 = (function (){var statearr_21501 = state_21498;(statearr_21501[7] = inst_21472__$1);
return statearr_21501;
})();if(cljs.core.truth_(inst_21472__$1))
{var statearr_21502_21530 = state_21498__$1;(statearr_21502_21530[1] = 5);
} else
{var statearr_21503_21531 = state_21498__$1;(statearr_21503_21531[1] = 6);
}
return cljs.core.constant$keyword$209;
} else
{if((state_val_21499 === 5))
{var state_21498__$1 = state_21498;if(cljs.core.truth_(delay))
{var statearr_21504_21532 = state_21498__$1;(statearr_21504_21532[1] = 8);
} else
{var statearr_21505_21533 = state_21498__$1;(statearr_21505_21533[1] = 9);
}
return cljs.core.constant$keyword$209;
} else
{if((state_val_21499 === 6))
{var state_21498__$1 = state_21498;var statearr_21506_21534 = state_21498__$1;(statearr_21506_21534[2] = null);
(statearr_21506_21534[1] = 7);
return cljs.core.constant$keyword$209;
} else
{if((state_val_21499 === 7))
{var inst_21489 = (state_21498[2]);var state_21498__$1 = state_21498;if(cljs.core.truth_(inst_21489))
{var statearr_21507_21535 = state_21498__$1;(statearr_21507_21535[1] = 15);
} else
{var statearr_21508_21536 = state_21498__$1;(statearr_21508_21536[1] = 16);
}
return cljs.core.constant$keyword$209;
} else
{if((state_val_21499 === 8))
{var inst_21475 = cljs.core.async.timeout(delay);var state_21498__$1 = state_21498;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_21498__$1,11,inst_21475);
} else
{if((state_val_21499 === 9))
{var state_21498__$1 = state_21498;var statearr_21509_21537 = state_21498__$1;(statearr_21509_21537[2] = null);
(statearr_21509_21537[1] = 10);
return cljs.core.constant$keyword$209;
} else
{if((state_val_21499 === 10))
{var inst_21480 = (state_21498[2]);var state_21498__$1 = (function (){var statearr_21510 = state_21498;(statearr_21510[8] = inst_21480);
return statearr_21510;
})();if(cljs.core.truth_(log))
{var statearr_21511_21538 = state_21498__$1;(statearr_21511_21538[1] = 12);
} else
{var statearr_21512_21539 = state_21498__$1;(statearr_21512_21539[1] = 13);
}
return cljs.core.constant$keyword$209;
} else
{if((state_val_21499 === 11))
{var inst_21477 = (state_21498[2]);var state_21498__$1 = state_21498;var statearr_21513_21540 = state_21498__$1;(statearr_21513_21540[2] = inst_21477);
(statearr_21513_21540[1] = 10);
return cljs.core.constant$keyword$209;
} else
{if((state_val_21499 === 12))
{var inst_21472 = (state_21498[7]);var inst_21482 = cljs.core.clj__GT_js(inst_21472);var inst_21483 = console.log(inst_21482);var state_21498__$1 = state_21498;var statearr_21514_21541 = state_21498__$1;(statearr_21514_21541[2] = inst_21483);
(statearr_21514_21541[1] = 14);
return cljs.core.constant$keyword$209;
} else
{if((state_val_21499 === 13))
{var state_21498__$1 = state_21498;var statearr_21515_21542 = state_21498__$1;(statearr_21515_21542[2] = null);
(statearr_21515_21542[1] = 14);
return cljs.core.constant$keyword$209;
} else
{if((state_val_21499 === 14))
{var inst_21472 = (state_21498[7]);var inst_21486 = (state_21498[2]);var state_21498__$1 = (function (){var statearr_21516 = state_21498;(statearr_21516[9] = inst_21486);
return statearr_21516;
})();var statearr_21517_21543 = state_21498__$1;(statearr_21517_21543[2] = inst_21472);
(statearr_21517_21543[1] = 7);
return cljs.core.constant$keyword$209;
} else
{if((state_val_21499 === 15))
{var state_21498__$1 = state_21498;var statearr_21518_21544 = state_21498__$1;(statearr_21518_21544[2] = null);
(statearr_21518_21544[1] = 2);
return cljs.core.constant$keyword$209;
} else
{if((state_val_21499 === 16))
{var state_21498__$1 = state_21498;var statearr_21519_21545 = state_21498__$1;(statearr_21519_21545[2] = null);
(statearr_21519_21545[1] = 17);
return cljs.core.constant$keyword$209;
} else
{if((state_val_21499 === 17))
{var inst_21494 = (state_21498[2]);var state_21498__$1 = state_21498;var statearr_21520_21546 = state_21498__$1;(statearr_21520_21546[2] = inst_21494);
(statearr_21520_21546[1] = 3);
return cljs.core.constant$keyword$209;
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
var state_machine__5507__auto____0 = (function (){var statearr_21524 = [null,null,null,null,null,null,null,null,null,null];(statearr_21524[0] = state_machine__5507__auto__);
(statearr_21524[1] = 1);
return statearr_21524;
});
var state_machine__5507__auto____1 = (function (state_21498){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_21498);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$209))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e21525){if((e21525 instanceof Object))
{var ex__5510__auto__ = e21525;var statearr_21526_21547 = state_21498;(statearr_21526_21547[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_21498);
return cljs.core.constant$keyword$209;
} else
{if(cljs.core.constant$keyword$198)
{throw e21525;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$209))
{{
var G__21548 = state_21498;
state_21498 = G__21548;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_21498){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_21498);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_21527 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_21527[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___21528);
return statearr_21527;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5523__auto__);
}));
return null;
};
var dorun_async = function (ch,var_args){
var p__21409 = null;if (arguments.length > 1) {
  p__21409 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return dorun_async__delegate.call(this,ch,p__21409);};
dorun_async.cljs$lang$maxFixedArity = 1;
dorun_async.cljs$lang$applyTo = (function (arglist__21549){
var ch = cljs.core.first(arglist__21549);
var p__21409 = cljs.core.rest(arglist__21549);
return dorun_async__delegate(ch,p__21409);
});
dorun_async.cljs$core$IFn$_invoke$arity$variadic = dorun_async__delegate;
return dorun_async;
})()
;
