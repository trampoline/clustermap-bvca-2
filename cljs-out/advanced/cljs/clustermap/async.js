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
map_async.cljs$lang$applyTo = (function (arglist__21460){
var f = cljs.core.first(arglist__21460);
var colls = cljs.core.rest(arglist__21460);
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
var dorun_async__delegate = function (ch,p__21461){var map__21521 = p__21461;var map__21521__$1 = ((cljs.core.seq_QMARK_(map__21521))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21521):map__21521);var delay = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21521__$1,cljs.core.constant$keyword$371);var log = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21521__$1,cljs.core.constant$keyword$387);var c__5521__auto___21580 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_21550){var state_val_21551 = (state_21550[1]);if((state_val_21551 === 1))
{var state_21550__$1 = state_21550;var statearr_21552_21581 = state_21550__$1;(statearr_21552_21581[2] = null);
(statearr_21552_21581[1] = 2);
return cljs.core.constant$keyword$216;
} else
{if((state_val_21551 === 2))
{var state_21550__$1 = state_21550;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_21550__$1,4,ch);
} else
{if((state_val_21551 === 3))
{var inst_21548 = (state_21550[2]);var state_21550__$1 = state_21550;return cljs.core.async.impl.ioc_helpers.return_chan(state_21550__$1,inst_21548);
} else
{if((state_val_21551 === 4))
{var inst_21524 = (state_21550[7]);var inst_21524__$1 = (state_21550[2]);var state_21550__$1 = (function (){var statearr_21553 = state_21550;(statearr_21553[7] = inst_21524__$1);
return statearr_21553;
})();if(cljs.core.truth_(inst_21524__$1))
{var statearr_21554_21582 = state_21550__$1;(statearr_21554_21582[1] = 5);
} else
{var statearr_21555_21583 = state_21550__$1;(statearr_21555_21583[1] = 6);
}
return cljs.core.constant$keyword$216;
} else
{if((state_val_21551 === 5))
{var state_21550__$1 = state_21550;if(cljs.core.truth_(delay))
{var statearr_21556_21584 = state_21550__$1;(statearr_21556_21584[1] = 8);
} else
{var statearr_21557_21585 = state_21550__$1;(statearr_21557_21585[1] = 9);
}
return cljs.core.constant$keyword$216;
} else
{if((state_val_21551 === 6))
{var state_21550__$1 = state_21550;var statearr_21558_21586 = state_21550__$1;(statearr_21558_21586[2] = null);
(statearr_21558_21586[1] = 7);
return cljs.core.constant$keyword$216;
} else
{if((state_val_21551 === 7))
{var inst_21541 = (state_21550[2]);var state_21550__$1 = state_21550;if(cljs.core.truth_(inst_21541))
{var statearr_21559_21587 = state_21550__$1;(statearr_21559_21587[1] = 15);
} else
{var statearr_21560_21588 = state_21550__$1;(statearr_21560_21588[1] = 16);
}
return cljs.core.constant$keyword$216;
} else
{if((state_val_21551 === 8))
{var inst_21527 = cljs.core.async.timeout(delay);var state_21550__$1 = state_21550;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_21550__$1,11,inst_21527);
} else
{if((state_val_21551 === 9))
{var state_21550__$1 = state_21550;var statearr_21561_21589 = state_21550__$1;(statearr_21561_21589[2] = null);
(statearr_21561_21589[1] = 10);
return cljs.core.constant$keyword$216;
} else
{if((state_val_21551 === 10))
{var inst_21532 = (state_21550[2]);var state_21550__$1 = (function (){var statearr_21562 = state_21550;(statearr_21562[8] = inst_21532);
return statearr_21562;
})();if(cljs.core.truth_(log))
{var statearr_21563_21590 = state_21550__$1;(statearr_21563_21590[1] = 12);
} else
{var statearr_21564_21591 = state_21550__$1;(statearr_21564_21591[1] = 13);
}
return cljs.core.constant$keyword$216;
} else
{if((state_val_21551 === 11))
{var inst_21529 = (state_21550[2]);var state_21550__$1 = state_21550;var statearr_21565_21592 = state_21550__$1;(statearr_21565_21592[2] = inst_21529);
(statearr_21565_21592[1] = 10);
return cljs.core.constant$keyword$216;
} else
{if((state_val_21551 === 12))
{var inst_21524 = (state_21550[7]);var inst_21534 = cljs.core.clj__GT_js(inst_21524);var inst_21535 = console.log(inst_21534);var state_21550__$1 = state_21550;var statearr_21566_21593 = state_21550__$1;(statearr_21566_21593[2] = inst_21535);
(statearr_21566_21593[1] = 14);
return cljs.core.constant$keyword$216;
} else
{if((state_val_21551 === 13))
{var state_21550__$1 = state_21550;var statearr_21567_21594 = state_21550__$1;(statearr_21567_21594[2] = null);
(statearr_21567_21594[1] = 14);
return cljs.core.constant$keyword$216;
} else
{if((state_val_21551 === 14))
{var inst_21524 = (state_21550[7]);var inst_21538 = (state_21550[2]);var state_21550__$1 = (function (){var statearr_21568 = state_21550;(statearr_21568[9] = inst_21538);
return statearr_21568;
})();var statearr_21569_21595 = state_21550__$1;(statearr_21569_21595[2] = inst_21524);
(statearr_21569_21595[1] = 7);
return cljs.core.constant$keyword$216;
} else
{if((state_val_21551 === 15))
{var state_21550__$1 = state_21550;var statearr_21570_21596 = state_21550__$1;(statearr_21570_21596[2] = null);
(statearr_21570_21596[1] = 2);
return cljs.core.constant$keyword$216;
} else
{if((state_val_21551 === 16))
{var state_21550__$1 = state_21550;var statearr_21571_21597 = state_21550__$1;(statearr_21571_21597[2] = null);
(statearr_21571_21597[1] = 17);
return cljs.core.constant$keyword$216;
} else
{if((state_val_21551 === 17))
{var inst_21546 = (state_21550[2]);var state_21550__$1 = state_21550;var statearr_21572_21598 = state_21550__$1;(statearr_21572_21598[2] = inst_21546);
(statearr_21572_21598[1] = 3);
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
var state_machine__5507__auto____0 = (function (){var statearr_21576 = [null,null,null,null,null,null,null,null,null,null];(statearr_21576[0] = state_machine__5507__auto__);
(statearr_21576[1] = 1);
return statearr_21576;
});
var state_machine__5507__auto____1 = (function (state_21550){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_21550);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$216))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e21577){if((e21577 instanceof Object))
{var ex__5510__auto__ = e21577;var statearr_21578_21599 = state_21550;(statearr_21578_21599[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_21550);
return cljs.core.constant$keyword$216;
} else
{if(cljs.core.constant$keyword$205)
{throw e21577;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$216))
{{
var G__21600 = state_21550;
state_21550 = G__21600;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_21550){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_21550);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_21579 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_21579[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___21580);
return statearr_21579;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5523__auto__);
}));
return null;
};
var dorun_async = function (ch,var_args){
var p__21461 = null;if (arguments.length > 1) {
  p__21461 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return dorun_async__delegate.call(this,ch,p__21461);};
dorun_async.cljs$lang$maxFixedArity = 1;
dorun_async.cljs$lang$applyTo = (function (arglist__21601){
var ch = cljs.core.first(arglist__21601);
var p__21461 = cljs.core.rest(arglist__21601);
return dorun_async__delegate(ch,p__21461);
});
dorun_async.cljs$core$IFn$_invoke$arity$variadic = dorun_async__delegate;
return dorun_async;
})()
;
