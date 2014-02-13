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
map_async.cljs$lang$applyTo = (function (arglist__21496){
var f = cljs.core.first(arglist__21496);
var colls = cljs.core.rest(arglist__21496);
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
var dorun_async__delegate = function (ch,p__21497){var map__21557 = p__21497;var map__21557__$1 = ((cljs.core.seq_QMARK_(map__21557))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21557):map__21557);var delay = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21557__$1,cljs.core.constant$keyword$371);var log = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21557__$1,cljs.core.constant$keyword$387);var c__5521__auto___21616 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_21586){var state_val_21587 = (state_21586[1]);if((state_val_21587 === 1))
{var state_21586__$1 = state_21586;var statearr_21588_21617 = state_21586__$1;(statearr_21588_21617[2] = null);
(statearr_21588_21617[1] = 2);
return cljs.core.constant$keyword$216;
} else
{if((state_val_21587 === 2))
{var state_21586__$1 = state_21586;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_21586__$1,4,ch);
} else
{if((state_val_21587 === 3))
{var inst_21584 = (state_21586[2]);var state_21586__$1 = state_21586;return cljs.core.async.impl.ioc_helpers.return_chan(state_21586__$1,inst_21584);
} else
{if((state_val_21587 === 4))
{var inst_21560 = (state_21586[7]);var inst_21560__$1 = (state_21586[2]);var state_21586__$1 = (function (){var statearr_21589 = state_21586;(statearr_21589[7] = inst_21560__$1);
return statearr_21589;
})();if(cljs.core.truth_(inst_21560__$1))
{var statearr_21590_21618 = state_21586__$1;(statearr_21590_21618[1] = 5);
} else
{var statearr_21591_21619 = state_21586__$1;(statearr_21591_21619[1] = 6);
}
return cljs.core.constant$keyword$216;
} else
{if((state_val_21587 === 5))
{var state_21586__$1 = state_21586;if(cljs.core.truth_(delay))
{var statearr_21592_21620 = state_21586__$1;(statearr_21592_21620[1] = 8);
} else
{var statearr_21593_21621 = state_21586__$1;(statearr_21593_21621[1] = 9);
}
return cljs.core.constant$keyword$216;
} else
{if((state_val_21587 === 6))
{var state_21586__$1 = state_21586;var statearr_21594_21622 = state_21586__$1;(statearr_21594_21622[2] = null);
(statearr_21594_21622[1] = 7);
return cljs.core.constant$keyword$216;
} else
{if((state_val_21587 === 7))
{var inst_21577 = (state_21586[2]);var state_21586__$1 = state_21586;if(cljs.core.truth_(inst_21577))
{var statearr_21595_21623 = state_21586__$1;(statearr_21595_21623[1] = 15);
} else
{var statearr_21596_21624 = state_21586__$1;(statearr_21596_21624[1] = 16);
}
return cljs.core.constant$keyword$216;
} else
{if((state_val_21587 === 8))
{var inst_21563 = cljs.core.async.timeout(delay);var state_21586__$1 = state_21586;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_21586__$1,11,inst_21563);
} else
{if((state_val_21587 === 9))
{var state_21586__$1 = state_21586;var statearr_21597_21625 = state_21586__$1;(statearr_21597_21625[2] = null);
(statearr_21597_21625[1] = 10);
return cljs.core.constant$keyword$216;
} else
{if((state_val_21587 === 10))
{var inst_21568 = (state_21586[2]);var state_21586__$1 = (function (){var statearr_21598 = state_21586;(statearr_21598[8] = inst_21568);
return statearr_21598;
})();if(cljs.core.truth_(log))
{var statearr_21599_21626 = state_21586__$1;(statearr_21599_21626[1] = 12);
} else
{var statearr_21600_21627 = state_21586__$1;(statearr_21600_21627[1] = 13);
}
return cljs.core.constant$keyword$216;
} else
{if((state_val_21587 === 11))
{var inst_21565 = (state_21586[2]);var state_21586__$1 = state_21586;var statearr_21601_21628 = state_21586__$1;(statearr_21601_21628[2] = inst_21565);
(statearr_21601_21628[1] = 10);
return cljs.core.constant$keyword$216;
} else
{if((state_val_21587 === 12))
{var inst_21560 = (state_21586[7]);var inst_21570 = cljs.core.clj__GT_js(inst_21560);var inst_21571 = console.log(inst_21570);var state_21586__$1 = state_21586;var statearr_21602_21629 = state_21586__$1;(statearr_21602_21629[2] = inst_21571);
(statearr_21602_21629[1] = 14);
return cljs.core.constant$keyword$216;
} else
{if((state_val_21587 === 13))
{var state_21586__$1 = state_21586;var statearr_21603_21630 = state_21586__$1;(statearr_21603_21630[2] = null);
(statearr_21603_21630[1] = 14);
return cljs.core.constant$keyword$216;
} else
{if((state_val_21587 === 14))
{var inst_21560 = (state_21586[7]);var inst_21574 = (state_21586[2]);var state_21586__$1 = (function (){var statearr_21604 = state_21586;(statearr_21604[9] = inst_21574);
return statearr_21604;
})();var statearr_21605_21631 = state_21586__$1;(statearr_21605_21631[2] = inst_21560);
(statearr_21605_21631[1] = 7);
return cljs.core.constant$keyword$216;
} else
{if((state_val_21587 === 15))
{var state_21586__$1 = state_21586;var statearr_21606_21632 = state_21586__$1;(statearr_21606_21632[2] = null);
(statearr_21606_21632[1] = 2);
return cljs.core.constant$keyword$216;
} else
{if((state_val_21587 === 16))
{var state_21586__$1 = state_21586;var statearr_21607_21633 = state_21586__$1;(statearr_21607_21633[2] = null);
(statearr_21607_21633[1] = 17);
return cljs.core.constant$keyword$216;
} else
{if((state_val_21587 === 17))
{var inst_21582 = (state_21586[2]);var state_21586__$1 = state_21586;var statearr_21608_21634 = state_21586__$1;(statearr_21608_21634[2] = inst_21582);
(statearr_21608_21634[1] = 3);
return cljs.core.constant$keyword$216;
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
var state_machine__5507__auto____0 = (function (){var statearr_21612 = [null,null,null,null,null,null,null,null,null,null];(statearr_21612[0] = state_machine__5507__auto__);
(statearr_21612[1] = 1);
return statearr_21612;
});
var state_machine__5507__auto____1 = (function (state_21586){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_21586);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$216))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e21613){if((e21613 instanceof Object))
{var ex__5510__auto__ = e21613;var statearr_21614_21635 = state_21586;(statearr_21614_21635[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_21586);
return cljs.core.constant$keyword$216;
} else
{if(cljs.core.constant$keyword$205)
{throw e21613;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$216))
{{
var G__21636 = state_21586;
state_21586 = G__21636;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_21586){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_21586);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_21615 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_21615[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___21616);
return statearr_21615;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5523__auto__);
}));
return null;
};
var dorun_async = function (ch,var_args){
var p__21497 = null;if (arguments.length > 1) {
  p__21497 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return dorun_async__delegate.call(this,ch,p__21497);};
dorun_async.cljs$lang$maxFixedArity = 1;
dorun_async.cljs$lang$applyTo = (function (arglist__21637){
var ch = cljs.core.first(arglist__21637);
var p__21497 = cljs.core.rest(arglist__21637);
return dorun_async__delegate(ch,p__21497);
});
dorun_async.cljs$core$IFn$_invoke$arity$variadic = dorun_async__delegate;
return dorun_async;
})()
;
