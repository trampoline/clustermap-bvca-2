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
map_async.cljs$lang$applyTo = (function (arglist__21484){
var f = cljs.core.first(arglist__21484);
var colls = cljs.core.rest(arglist__21484);
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
var dorun_async__delegate = function (ch,p__21485){var map__21545 = p__21485;var map__21545__$1 = ((cljs.core.seq_QMARK_(map__21545))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21545):map__21545);var delay = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21545__$1,cljs.core.constant$keyword$377);var log = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21545__$1,cljs.core.constant$keyword$397);var c__5521__auto___21604 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_21574){var state_val_21575 = (state_21574[1]);if((state_val_21575 === 1))
{var state_21574__$1 = state_21574;var statearr_21576_21605 = state_21574__$1;(statearr_21576_21605[2] = null);
(statearr_21576_21605[1] = 2);
return cljs.core.constant$keyword$221;
} else
{if((state_val_21575 === 2))
{var state_21574__$1 = state_21574;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_21574__$1,4,ch);
} else
{if((state_val_21575 === 3))
{var inst_21572 = (state_21574[2]);var state_21574__$1 = state_21574;return cljs.core.async.impl.ioc_helpers.return_chan(state_21574__$1,inst_21572);
} else
{if((state_val_21575 === 4))
{var inst_21548 = (state_21574[7]);var inst_21548__$1 = (state_21574[2]);var state_21574__$1 = (function (){var statearr_21577 = state_21574;(statearr_21577[7] = inst_21548__$1);
return statearr_21577;
})();if(cljs.core.truth_(inst_21548__$1))
{var statearr_21578_21606 = state_21574__$1;(statearr_21578_21606[1] = 5);
} else
{var statearr_21579_21607 = state_21574__$1;(statearr_21579_21607[1] = 6);
}
return cljs.core.constant$keyword$221;
} else
{if((state_val_21575 === 5))
{var state_21574__$1 = state_21574;if(cljs.core.truth_(delay))
{var statearr_21580_21608 = state_21574__$1;(statearr_21580_21608[1] = 8);
} else
{var statearr_21581_21609 = state_21574__$1;(statearr_21581_21609[1] = 9);
}
return cljs.core.constant$keyword$221;
} else
{if((state_val_21575 === 6))
{var state_21574__$1 = state_21574;var statearr_21582_21610 = state_21574__$1;(statearr_21582_21610[2] = null);
(statearr_21582_21610[1] = 7);
return cljs.core.constant$keyword$221;
} else
{if((state_val_21575 === 7))
{var inst_21565 = (state_21574[2]);var state_21574__$1 = state_21574;if(cljs.core.truth_(inst_21565))
{var statearr_21583_21611 = state_21574__$1;(statearr_21583_21611[1] = 15);
} else
{var statearr_21584_21612 = state_21574__$1;(statearr_21584_21612[1] = 16);
}
return cljs.core.constant$keyword$221;
} else
{if((state_val_21575 === 8))
{var inst_21551 = cljs.core.async.timeout(delay);var state_21574__$1 = state_21574;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_21574__$1,11,inst_21551);
} else
{if((state_val_21575 === 9))
{var state_21574__$1 = state_21574;var statearr_21585_21613 = state_21574__$1;(statearr_21585_21613[2] = null);
(statearr_21585_21613[1] = 10);
return cljs.core.constant$keyword$221;
} else
{if((state_val_21575 === 10))
{var inst_21556 = (state_21574[2]);var state_21574__$1 = (function (){var statearr_21586 = state_21574;(statearr_21586[8] = inst_21556);
return statearr_21586;
})();if(cljs.core.truth_(log))
{var statearr_21587_21614 = state_21574__$1;(statearr_21587_21614[1] = 12);
} else
{var statearr_21588_21615 = state_21574__$1;(statearr_21588_21615[1] = 13);
}
return cljs.core.constant$keyword$221;
} else
{if((state_val_21575 === 11))
{var inst_21553 = (state_21574[2]);var state_21574__$1 = state_21574;var statearr_21589_21616 = state_21574__$1;(statearr_21589_21616[2] = inst_21553);
(statearr_21589_21616[1] = 10);
return cljs.core.constant$keyword$221;
} else
{if((state_val_21575 === 12))
{var inst_21548 = (state_21574[7]);var inst_21558 = cljs.core.clj__GT_js(inst_21548);var inst_21559 = console.log(inst_21558);var state_21574__$1 = state_21574;var statearr_21590_21617 = state_21574__$1;(statearr_21590_21617[2] = inst_21559);
(statearr_21590_21617[1] = 14);
return cljs.core.constant$keyword$221;
} else
{if((state_val_21575 === 13))
{var state_21574__$1 = state_21574;var statearr_21591_21618 = state_21574__$1;(statearr_21591_21618[2] = null);
(statearr_21591_21618[1] = 14);
return cljs.core.constant$keyword$221;
} else
{if((state_val_21575 === 14))
{var inst_21548 = (state_21574[7]);var inst_21562 = (state_21574[2]);var state_21574__$1 = (function (){var statearr_21592 = state_21574;(statearr_21592[9] = inst_21562);
return statearr_21592;
})();var statearr_21593_21619 = state_21574__$1;(statearr_21593_21619[2] = inst_21548);
(statearr_21593_21619[1] = 7);
return cljs.core.constant$keyword$221;
} else
{if((state_val_21575 === 15))
{var state_21574__$1 = state_21574;var statearr_21594_21620 = state_21574__$1;(statearr_21594_21620[2] = null);
(statearr_21594_21620[1] = 2);
return cljs.core.constant$keyword$221;
} else
{if((state_val_21575 === 16))
{var state_21574__$1 = state_21574;var statearr_21595_21621 = state_21574__$1;(statearr_21595_21621[2] = null);
(statearr_21595_21621[1] = 17);
return cljs.core.constant$keyword$221;
} else
{if((state_val_21575 === 17))
{var inst_21570 = (state_21574[2]);var state_21574__$1 = state_21574;var statearr_21596_21622 = state_21574__$1;(statearr_21596_21622[2] = inst_21570);
(statearr_21596_21622[1] = 3);
return cljs.core.constant$keyword$221;
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
var state_machine__5507__auto____0 = (function (){var statearr_21600 = [null,null,null,null,null,null,null,null,null,null];(statearr_21600[0] = state_machine__5507__auto__);
(statearr_21600[1] = 1);
return statearr_21600;
});
var state_machine__5507__auto____1 = (function (state_21574){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_21574);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$221))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e21601){if((e21601 instanceof Object))
{var ex__5510__auto__ = e21601;var statearr_21602_21623 = state_21574;(statearr_21602_21623[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_21574);
return cljs.core.constant$keyword$221;
} else
{if(cljs.core.constant$keyword$210)
{throw e21601;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$221))
{{
var G__21624 = state_21574;
state_21574 = G__21624;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_21574){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_21574);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_21603 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_21603[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___21604);
return statearr_21603;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5523__auto__);
}));
return null;
};
var dorun_async = function (ch,var_args){
var p__21485 = null;if (arguments.length > 1) {
  p__21485 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return dorun_async__delegate.call(this,ch,p__21485);};
dorun_async.cljs$lang$maxFixedArity = 1;
dorun_async.cljs$lang$applyTo = (function (arglist__21625){
var ch = cljs.core.first(arglist__21625);
var p__21485 = cljs.core.rest(arglist__21625);
return dorun_async__delegate(ch,p__21485);
});
dorun_async.cljs$core$IFn$_invoke$arity$variadic = dorun_async__delegate;
return dorun_async;
})()
;
