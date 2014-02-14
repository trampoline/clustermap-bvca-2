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
map_async.cljs$lang$applyTo = (function (arglist__11502){
var f = cljs.core.first(arglist__11502);
var colls = cljs.core.rest(arglist__11502);
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
var dorun_async__delegate = function (ch,p__11503){var map__11563 = p__11503;var map__11563__$1 = ((cljs.core.seq_QMARK_(map__11563))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__11563):map__11563);var delay = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11563__$1,cljs.core.constant$keyword$183);var log = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11563__$1,cljs.core.constant$keyword$204);var c__5521__auto___11622 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_11592){var state_val_11593 = (state_11592[1]);if((state_val_11593 === 1))
{var state_11592__$1 = state_11592;var statearr_11594_11623 = state_11592__$1;(statearr_11594_11623[2] = null);
(statearr_11594_11623[1] = 2);
return cljs.core.constant$keyword$17;
} else
{if((state_val_11593 === 2))
{var state_11592__$1 = state_11592;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11592__$1,4,ch);
} else
{if((state_val_11593 === 3))
{var inst_11590 = (state_11592[2]);var state_11592__$1 = state_11592;return cljs.core.async.impl.ioc_helpers.return_chan(state_11592__$1,inst_11590);
} else
{if((state_val_11593 === 4))
{var inst_11566 = (state_11592[7]);var inst_11566__$1 = (state_11592[2]);var state_11592__$1 = (function (){var statearr_11595 = state_11592;(statearr_11595[7] = inst_11566__$1);
return statearr_11595;
})();if(cljs.core.truth_(inst_11566__$1))
{var statearr_11596_11624 = state_11592__$1;(statearr_11596_11624[1] = 5);
} else
{var statearr_11597_11625 = state_11592__$1;(statearr_11597_11625[1] = 6);
}
return cljs.core.constant$keyword$17;
} else
{if((state_val_11593 === 5))
{var state_11592__$1 = state_11592;if(cljs.core.truth_(delay))
{var statearr_11598_11626 = state_11592__$1;(statearr_11598_11626[1] = 8);
} else
{var statearr_11599_11627 = state_11592__$1;(statearr_11599_11627[1] = 9);
}
return cljs.core.constant$keyword$17;
} else
{if((state_val_11593 === 6))
{var state_11592__$1 = state_11592;var statearr_11600_11628 = state_11592__$1;(statearr_11600_11628[2] = null);
(statearr_11600_11628[1] = 7);
return cljs.core.constant$keyword$17;
} else
{if((state_val_11593 === 7))
{var inst_11583 = (state_11592[2]);var state_11592__$1 = state_11592;if(cljs.core.truth_(inst_11583))
{var statearr_11601_11629 = state_11592__$1;(statearr_11601_11629[1] = 15);
} else
{var statearr_11602_11630 = state_11592__$1;(statearr_11602_11630[1] = 16);
}
return cljs.core.constant$keyword$17;
} else
{if((state_val_11593 === 8))
{var inst_11569 = cljs.core.async.timeout(delay);var state_11592__$1 = state_11592;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11592__$1,11,inst_11569);
} else
{if((state_val_11593 === 9))
{var state_11592__$1 = state_11592;var statearr_11603_11631 = state_11592__$1;(statearr_11603_11631[2] = null);
(statearr_11603_11631[1] = 10);
return cljs.core.constant$keyword$17;
} else
{if((state_val_11593 === 10))
{var inst_11574 = (state_11592[2]);var state_11592__$1 = (function (){var statearr_11604 = state_11592;(statearr_11604[8] = inst_11574);
return statearr_11604;
})();if(cljs.core.truth_(log))
{var statearr_11605_11632 = state_11592__$1;(statearr_11605_11632[1] = 12);
} else
{var statearr_11606_11633 = state_11592__$1;(statearr_11606_11633[1] = 13);
}
return cljs.core.constant$keyword$17;
} else
{if((state_val_11593 === 11))
{var inst_11571 = (state_11592[2]);var state_11592__$1 = state_11592;var statearr_11607_11634 = state_11592__$1;(statearr_11607_11634[2] = inst_11571);
(statearr_11607_11634[1] = 10);
return cljs.core.constant$keyword$17;
} else
{if((state_val_11593 === 12))
{var inst_11566 = (state_11592[7]);var inst_11576 = cljs.core.clj__GT_js(inst_11566);var inst_11577 = console.log(inst_11576);var state_11592__$1 = state_11592;var statearr_11608_11635 = state_11592__$1;(statearr_11608_11635[2] = inst_11577);
(statearr_11608_11635[1] = 14);
return cljs.core.constant$keyword$17;
} else
{if((state_val_11593 === 13))
{var state_11592__$1 = state_11592;var statearr_11609_11636 = state_11592__$1;(statearr_11609_11636[2] = null);
(statearr_11609_11636[1] = 14);
return cljs.core.constant$keyword$17;
} else
{if((state_val_11593 === 14))
{var inst_11566 = (state_11592[7]);var inst_11580 = (state_11592[2]);var state_11592__$1 = (function (){var statearr_11610 = state_11592;(statearr_11610[9] = inst_11580);
return statearr_11610;
})();var statearr_11611_11637 = state_11592__$1;(statearr_11611_11637[2] = inst_11566);
(statearr_11611_11637[1] = 7);
return cljs.core.constant$keyword$17;
} else
{if((state_val_11593 === 15))
{var state_11592__$1 = state_11592;var statearr_11612_11638 = state_11592__$1;(statearr_11612_11638[2] = null);
(statearr_11612_11638[1] = 2);
return cljs.core.constant$keyword$17;
} else
{if((state_val_11593 === 16))
{var state_11592__$1 = state_11592;var statearr_11613_11639 = state_11592__$1;(statearr_11613_11639[2] = null);
(statearr_11613_11639[1] = 17);
return cljs.core.constant$keyword$17;
} else
{if((state_val_11593 === 17))
{var inst_11588 = (state_11592[2]);var state_11592__$1 = state_11592;var statearr_11614_11640 = state_11592__$1;(statearr_11614_11640[2] = inst_11588);
(statearr_11614_11640[1] = 3);
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
var state_machine__5507__auto____0 = (function (){var statearr_11618 = [null,null,null,null,null,null,null,null,null,null];(statearr_11618[0] = state_machine__5507__auto__);
(statearr_11618[1] = 1);
return statearr_11618;
});
var state_machine__5507__auto____1 = (function (state_11592){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_11592);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$17))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e11619){if((e11619 instanceof Object))
{var ex__5510__auto__ = e11619;var statearr_11620_11641 = state_11592;(statearr_11620_11641[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_11592);
return cljs.core.constant$keyword$17;
} else
{if(cljs.core.constant$keyword$6)
{throw e11619;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$17))
{{
var G__11642 = state_11592;
state_11592 = G__11642;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_11592){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_11592);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_11621 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_11621[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___11622);
return statearr_11621;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5523__auto__);
}));
return null;
};
var dorun_async = function (ch,var_args){
var p__11503 = null;if (arguments.length > 1) {
  p__11503 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return dorun_async__delegate.call(this,ch,p__11503);};
dorun_async.cljs$lang$maxFixedArity = 1;
dorun_async.cljs$lang$applyTo = (function (arglist__11643){
var ch = cljs.core.first(arglist__11643);
var p__11503 = cljs.core.rest(arglist__11643);
return dorun_async__delegate(ch,p__11503);
});
dorun_async.cljs$core$IFn$_invoke$arity$variadic = dorun_async__delegate;
return dorun_async;
})()
;
