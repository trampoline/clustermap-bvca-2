// Compiled by ClojureScript 0.0-2227
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
map_async.cljs$lang$applyTo = (function (arglist__34335){
var f = cljs.core.first(arglist__34335);
var colls = cljs.core.rest(arglist__34335);
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
var dorun_async__delegate = function (ch,p__34336){var map__34396 = p__34336;var map__34396__$1 = ((cljs.core.seq_QMARK_(map__34396))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34396):map__34396);var delay = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34396__$1,cljs.core.constant$keyword$847);var log = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34396__$1,cljs.core.constant$keyword$848);var c__5689__auto___34455 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run(((function (c__5689__auto___34455,map__34396,map__34396__$1,delay,log){
return (function (){var f__5690__auto__ = (function (){var switch__5674__auto__ = ((function (c__5689__auto___34455,map__34396,map__34396__$1,delay,log){
return (function (state_34425){var state_val_34426 = (state_34425[1]);if((state_val_34426 === 7))
{var inst_34416 = (state_34425[2]);var state_34425__$1 = state_34425;if(cljs.core.truth_(inst_34416))
{var statearr_34427_34456 = state_34425__$1;(statearr_34427_34456[1] = 15);
} else
{var statearr_34428_34457 = state_34425__$1;(statearr_34428_34457[1] = 16);
}
return cljs.core.constant$keyword$589;
} else
{if((state_val_34426 === 1))
{var state_34425__$1 = state_34425;var statearr_34429_34458 = state_34425__$1;(statearr_34429_34458[2] = null);
(statearr_34429_34458[1] = 2);
return cljs.core.constant$keyword$589;
} else
{if((state_val_34426 === 4))
{var inst_34399 = (state_34425[7]);var inst_34399__$1 = (state_34425[2]);var state_34425__$1 = (function (){var statearr_34430 = state_34425;(statearr_34430[7] = inst_34399__$1);
return statearr_34430;
})();if(cljs.core.truth_(inst_34399__$1))
{var statearr_34431_34459 = state_34425__$1;(statearr_34431_34459[1] = 5);
} else
{var statearr_34432_34460 = state_34425__$1;(statearr_34432_34460[1] = 6);
}
return cljs.core.constant$keyword$589;
} else
{if((state_val_34426 === 15))
{var state_34425__$1 = state_34425;var statearr_34433_34461 = state_34425__$1;(statearr_34433_34461[2] = null);
(statearr_34433_34461[1] = 2);
return cljs.core.constant$keyword$589;
} else
{if((state_val_34426 === 13))
{var state_34425__$1 = state_34425;var statearr_34434_34462 = state_34425__$1;(statearr_34434_34462[2] = null);
(statearr_34434_34462[1] = 14);
return cljs.core.constant$keyword$589;
} else
{if((state_val_34426 === 6))
{var state_34425__$1 = state_34425;var statearr_34435_34463 = state_34425__$1;(statearr_34435_34463[2] = null);
(statearr_34435_34463[1] = 7);
return cljs.core.constant$keyword$589;
} else
{if((state_val_34426 === 17))
{var inst_34421 = (state_34425[2]);var state_34425__$1 = state_34425;var statearr_34436_34464 = state_34425__$1;(statearr_34436_34464[2] = inst_34421);
(statearr_34436_34464[1] = 3);
return cljs.core.constant$keyword$589;
} else
{if((state_val_34426 === 3))
{var inst_34423 = (state_34425[2]);var state_34425__$1 = state_34425;return cljs.core.async.impl.ioc_helpers.return_chan(state_34425__$1,inst_34423);
} else
{if((state_val_34426 === 12))
{var inst_34399 = (state_34425[7]);var inst_34409 = cljs.core.clj__GT_js(inst_34399);var inst_34410 = console.log(inst_34409);var state_34425__$1 = state_34425;var statearr_34437_34465 = state_34425__$1;(statearr_34437_34465[2] = inst_34410);
(statearr_34437_34465[1] = 14);
return cljs.core.constant$keyword$589;
} else
{if((state_val_34426 === 2))
{var state_34425__$1 = state_34425;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34425__$1,4,ch);
} else
{if((state_val_34426 === 11))
{var inst_34404 = (state_34425[2]);var state_34425__$1 = state_34425;var statearr_34438_34466 = state_34425__$1;(statearr_34438_34466[2] = inst_34404);
(statearr_34438_34466[1] = 10);
return cljs.core.constant$keyword$589;
} else
{if((state_val_34426 === 9))
{var state_34425__$1 = state_34425;var statearr_34439_34467 = state_34425__$1;(statearr_34439_34467[2] = null);
(statearr_34439_34467[1] = 10);
return cljs.core.constant$keyword$589;
} else
{if((state_val_34426 === 5))
{var state_34425__$1 = state_34425;if(cljs.core.truth_(delay))
{var statearr_34440_34468 = state_34425__$1;(statearr_34440_34468[1] = 8);
} else
{var statearr_34441_34469 = state_34425__$1;(statearr_34441_34469[1] = 9);
}
return cljs.core.constant$keyword$589;
} else
{if((state_val_34426 === 14))
{var inst_34399 = (state_34425[7]);var inst_34413 = (state_34425[2]);var state_34425__$1 = (function (){var statearr_34442 = state_34425;(statearr_34442[8] = inst_34413);
return statearr_34442;
})();var statearr_34443_34470 = state_34425__$1;(statearr_34443_34470[2] = inst_34399);
(statearr_34443_34470[1] = 7);
return cljs.core.constant$keyword$589;
} else
{if((state_val_34426 === 16))
{var state_34425__$1 = state_34425;var statearr_34444_34471 = state_34425__$1;(statearr_34444_34471[2] = null);
(statearr_34444_34471[1] = 17);
return cljs.core.constant$keyword$589;
} else
{if((state_val_34426 === 10))
{var inst_34407 = (state_34425[2]);var state_34425__$1 = (function (){var statearr_34445 = state_34425;(statearr_34445[9] = inst_34407);
return statearr_34445;
})();if(cljs.core.truth_(log))
{var statearr_34446_34472 = state_34425__$1;(statearr_34446_34472[1] = 12);
} else
{var statearr_34447_34473 = state_34425__$1;(statearr_34447_34473[1] = 13);
}
return cljs.core.constant$keyword$589;
} else
{if((state_val_34426 === 8))
{var inst_34402 = cljs.core.async.timeout(delay);var state_34425__$1 = state_34425;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34425__$1,11,inst_34402);
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
});})(c__5689__auto___34455,map__34396,map__34396__$1,delay,log))
;return ((function (switch__5674__auto__,c__5689__auto___34455,map__34396,map__34396__$1,delay,log){
return (function() {
var state_machine__5675__auto__ = null;
var state_machine__5675__auto____0 = (function (){var statearr_34451 = [null,null,null,null,null,null,null,null,null,null];(statearr_34451[0] = state_machine__5675__auto__);
(statearr_34451[1] = 1);
return statearr_34451;
});
var state_machine__5675__auto____1 = (function (state_34425){while(true){
var ret_value__5676__auto__ = (function (){try{while(true){
var result__5677__auto__ = switch__5674__auto__(state_34425);if(cljs.core.keyword_identical_QMARK_(result__5677__auto__,cljs.core.constant$keyword$589))
{{
continue;
}
} else
{return result__5677__auto__;
}
break;
}
}catch (e34452){if((e34452 instanceof Object))
{var ex__5678__auto__ = e34452;var statearr_34453_34474 = state_34425;(statearr_34453_34474[5] = ex__5678__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_34425);
return cljs.core.constant$keyword$589;
} else
{if(cljs.core.constant$keyword$578)
{throw e34452;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5676__auto__,cljs.core.constant$keyword$589))
{{
var G__34475 = state_34425;
state_34425 = G__34475;
continue;
}
} else
{return ret_value__5676__auto__;
}
break;
}
});
state_machine__5675__auto__ = function(state_34425){
switch(arguments.length){
case 0:
return state_machine__5675__auto____0.call(this);
case 1:
return state_machine__5675__auto____1.call(this,state_34425);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5675__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5675__auto____0;
state_machine__5675__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5675__auto____1;
return state_machine__5675__auto__;
})()
;})(switch__5674__auto__,c__5689__auto___34455,map__34396,map__34396__$1,delay,log))
})();var state__5691__auto__ = (function (){var statearr_34454 = (f__5690__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5690__auto__.cljs$core$IFn$_invoke$arity$0() : f__5690__auto__.call(null));(statearr_34454[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5689__auto___34455);
return statearr_34454;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5691__auto__);
});})(c__5689__auto___34455,map__34396,map__34396__$1,delay,log))
);
return null;
};
var dorun_async = function (ch,var_args){
var p__34336 = null;if (arguments.length > 1) {
  p__34336 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return dorun_async__delegate.call(this,ch,p__34336);};
dorun_async.cljs$lang$maxFixedArity = 1;
dorun_async.cljs$lang$applyTo = (function (arglist__34476){
var ch = cljs.core.first(arglist__34476);
var p__34336 = cljs.core.rest(arglist__34476);
return dorun_async__delegate(ch,p__34336);
});
dorun_async.cljs$core$IFn$_invoke$arity$variadic = dorun_async__delegate;
return dorun_async;
})()
;
