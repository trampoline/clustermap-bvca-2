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
map_async.cljs$lang$applyTo = (function (arglist__19525){
var f = cljs.core.first(arglist__19525);
var colls = cljs.core.rest(arglist__19525);
return map_async__delegate(f,colls);
});
map_async.cljs$core$IFn$_invoke$arity$variadic = map_async__delegate;
return map_async;
})()
;
/**
* asynch consume all values from a channel
* @param {...*} var_args
*/
clustermap.async.dorun_async = (function() { 
var dorun_async__delegate = function (ch,p__19526){var map__19586 = p__19526;var map__19586__$1 = ((cljs.core.seq_QMARK_(map__19586))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19586):map__19586);var delay = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19586__$1,cljs.core.constant$keyword$184);var log = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19586__$1,cljs.core.constant$keyword$185);var c__5521__auto___19645 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_19615){var state_val_19616 = (state_19615[1]);if((state_val_19616 === 1))
{var state_19615__$1 = state_19615;var statearr_19617_19646 = state_19615__$1;(statearr_19617_19646[2] = null);
(statearr_19617_19646[1] = 2);
return cljs.core.constant$keyword$123;
} else
{if((state_val_19616 === 2))
{var state_19615__$1 = state_19615;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19615__$1,4,ch);
} else
{if((state_val_19616 === 3))
{var inst_19613 = (state_19615[2]);var state_19615__$1 = state_19615;return cljs.core.async.impl.ioc_helpers.return_chan(state_19615__$1,inst_19613);
} else
{if((state_val_19616 === 4))
{var inst_19589 = (state_19615[7]);var inst_19589__$1 = (state_19615[2]);var state_19615__$1 = (function (){var statearr_19618 = state_19615;(statearr_19618[7] = inst_19589__$1);
return statearr_19618;
})();if(cljs.core.truth_(inst_19589__$1))
{var statearr_19619_19647 = state_19615__$1;(statearr_19619_19647[1] = 5);
} else
{var statearr_19620_19648 = state_19615__$1;(statearr_19620_19648[1] = 6);
}
return cljs.core.constant$keyword$123;
} else
{if((state_val_19616 === 5))
{var state_19615__$1 = state_19615;if(cljs.core.truth_(delay))
{var statearr_19621_19649 = state_19615__$1;(statearr_19621_19649[1] = 8);
} else
{var statearr_19622_19650 = state_19615__$1;(statearr_19622_19650[1] = 9);
}
return cljs.core.constant$keyword$123;
} else
{if((state_val_19616 === 6))
{var state_19615__$1 = state_19615;var statearr_19623_19651 = state_19615__$1;(statearr_19623_19651[2] = null);
(statearr_19623_19651[1] = 7);
return cljs.core.constant$keyword$123;
} else
{if((state_val_19616 === 7))
{var inst_19606 = (state_19615[2]);var state_19615__$1 = state_19615;if(cljs.core.truth_(inst_19606))
{var statearr_19624_19652 = state_19615__$1;(statearr_19624_19652[1] = 15);
} else
{var statearr_19625_19653 = state_19615__$1;(statearr_19625_19653[1] = 16);
}
return cljs.core.constant$keyword$123;
} else
{if((state_val_19616 === 8))
{var inst_19592 = cljs.core.async.timeout(delay);var state_19615__$1 = state_19615;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19615__$1,11,inst_19592);
} else
{if((state_val_19616 === 9))
{var state_19615__$1 = state_19615;var statearr_19626_19654 = state_19615__$1;(statearr_19626_19654[2] = null);
(statearr_19626_19654[1] = 10);
return cljs.core.constant$keyword$123;
} else
{if((state_val_19616 === 10))
{var inst_19597 = (state_19615[2]);var state_19615__$1 = (function (){var statearr_19627 = state_19615;(statearr_19627[8] = inst_19597);
return statearr_19627;
})();if(cljs.core.truth_(log))
{var statearr_19628_19655 = state_19615__$1;(statearr_19628_19655[1] = 12);
} else
{var statearr_19629_19656 = state_19615__$1;(statearr_19629_19656[1] = 13);
}
return cljs.core.constant$keyword$123;
} else
{if((state_val_19616 === 11))
{var inst_19594 = (state_19615[2]);var state_19615__$1 = state_19615;var statearr_19630_19657 = state_19615__$1;(statearr_19630_19657[2] = inst_19594);
(statearr_19630_19657[1] = 10);
return cljs.core.constant$keyword$123;
} else
{if((state_val_19616 === 12))
{var inst_19589 = (state_19615[7]);var inst_19599 = cljs.core.clj__GT_js(inst_19589);var inst_19600 = console.log(inst_19599);var state_19615__$1 = state_19615;var statearr_19631_19658 = state_19615__$1;(statearr_19631_19658[2] = inst_19600);
(statearr_19631_19658[1] = 14);
return cljs.core.constant$keyword$123;
} else
{if((state_val_19616 === 13))
{var state_19615__$1 = state_19615;var statearr_19632_19659 = state_19615__$1;(statearr_19632_19659[2] = null);
(statearr_19632_19659[1] = 14);
return cljs.core.constant$keyword$123;
} else
{if((state_val_19616 === 14))
{var inst_19589 = (state_19615[7]);var inst_19603 = (state_19615[2]);var state_19615__$1 = (function (){var statearr_19633 = state_19615;(statearr_19633[9] = inst_19603);
return statearr_19633;
})();var statearr_19634_19660 = state_19615__$1;(statearr_19634_19660[2] = inst_19589);
(statearr_19634_19660[1] = 7);
return cljs.core.constant$keyword$123;
} else
{if((state_val_19616 === 15))
{var state_19615__$1 = state_19615;var statearr_19635_19661 = state_19615__$1;(statearr_19635_19661[2] = null);
(statearr_19635_19661[1] = 2);
return cljs.core.constant$keyword$123;
} else
{if((state_val_19616 === 16))
{var state_19615__$1 = state_19615;var statearr_19636_19662 = state_19615__$1;(statearr_19636_19662[2] = null);
(statearr_19636_19662[1] = 17);
return cljs.core.constant$keyword$123;
} else
{if((state_val_19616 === 17))
{var inst_19611 = (state_19615[2]);var state_19615__$1 = state_19615;var statearr_19637_19663 = state_19615__$1;(statearr_19637_19663[2] = inst_19611);
(statearr_19637_19663[1] = 3);
return cljs.core.constant$keyword$123;
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
var state_machine__5507__auto____0 = (function (){var statearr_19641 = [null,null,null,null,null,null,null,null,null,null];(statearr_19641[0] = state_machine__5507__auto__);
(statearr_19641[1] = 1);
return statearr_19641;
});
var state_machine__5507__auto____1 = (function (state_19615){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_19615);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$123))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e19642){if((e19642 instanceof Object))
{var ex__5510__auto__ = e19642;var statearr_19643_19664 = state_19615;(statearr_19643_19664[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_19615);
return cljs.core.constant$keyword$123;
} else
{if(cljs.core.constant$keyword$112)
{throw e19642;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$123))
{{
var G__19665 = state_19615;
state_19615 = G__19665;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_19615){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_19615);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_19644 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_19644[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___19645);
return statearr_19644;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5523__auto__);
}));
return null;
};
var dorun_async = function (ch,var_args){
var p__19526 = null;if (arguments.length > 1) {
  p__19526 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return dorun_async__delegate.call(this,ch,p__19526);};
dorun_async.cljs$lang$maxFixedArity = 1;
dorun_async.cljs$lang$applyTo = (function (arglist__19666){
var ch = cljs.core.first(arglist__19666);
var p__19526 = cljs.core.rest(arglist__19666);
return dorun_async__delegate(ch,p__19526);
});
dorun_async.cljs$core$IFn$_invoke$arity$variadic = dorun_async__delegate;
return dorun_async;
})()
;
