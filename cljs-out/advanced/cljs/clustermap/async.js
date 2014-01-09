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
map_async.cljs$lang$applyTo = (function (arglist__19572){
var f = cljs.core.first(arglist__19572);
var colls = cljs.core.rest(arglist__19572);
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
var dorun_async__delegate = function (ch,p__19573){var map__19633 = p__19573;var map__19633__$1 = ((cljs.core.seq_QMARK_(map__19633))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19633):map__19633);var delay = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19633__$1,cljs.core.constant$keyword$179);var log = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19633__$1,cljs.core.constant$keyword$180);var c__5521__auto___19692 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_19662){var state_val_19663 = (state_19662[1]);if((state_val_19663 === 1))
{var state_19662__$1 = state_19662;var statearr_19664_19693 = state_19662__$1;(statearr_19664_19693[2] = null);
(statearr_19664_19693[1] = 2);
return cljs.core.constant$keyword$120;
} else
{if((state_val_19663 === 2))
{var state_19662__$1 = state_19662;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19662__$1,4,ch);
} else
{if((state_val_19663 === 3))
{var inst_19660 = (state_19662[2]);var state_19662__$1 = state_19662;return cljs.core.async.impl.ioc_helpers.return_chan(state_19662__$1,inst_19660);
} else
{if((state_val_19663 === 4))
{var inst_19636 = (state_19662[7]);var inst_19636__$1 = (state_19662[2]);var state_19662__$1 = (function (){var statearr_19665 = state_19662;(statearr_19665[7] = inst_19636__$1);
return statearr_19665;
})();if(cljs.core.truth_(inst_19636__$1))
{var statearr_19666_19694 = state_19662__$1;(statearr_19666_19694[1] = 5);
} else
{var statearr_19667_19695 = state_19662__$1;(statearr_19667_19695[1] = 6);
}
return cljs.core.constant$keyword$120;
} else
{if((state_val_19663 === 5))
{var state_19662__$1 = state_19662;if(cljs.core.truth_(delay))
{var statearr_19668_19696 = state_19662__$1;(statearr_19668_19696[1] = 8);
} else
{var statearr_19669_19697 = state_19662__$1;(statearr_19669_19697[1] = 9);
}
return cljs.core.constant$keyword$120;
} else
{if((state_val_19663 === 6))
{var state_19662__$1 = state_19662;var statearr_19670_19698 = state_19662__$1;(statearr_19670_19698[2] = null);
(statearr_19670_19698[1] = 7);
return cljs.core.constant$keyword$120;
} else
{if((state_val_19663 === 7))
{var inst_19653 = (state_19662[2]);var state_19662__$1 = state_19662;if(cljs.core.truth_(inst_19653))
{var statearr_19671_19699 = state_19662__$1;(statearr_19671_19699[1] = 15);
} else
{var statearr_19672_19700 = state_19662__$1;(statearr_19672_19700[1] = 16);
}
return cljs.core.constant$keyword$120;
} else
{if((state_val_19663 === 8))
{var inst_19639 = cljs.core.async.timeout(delay);var state_19662__$1 = state_19662;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19662__$1,11,inst_19639);
} else
{if((state_val_19663 === 9))
{var state_19662__$1 = state_19662;var statearr_19673_19701 = state_19662__$1;(statearr_19673_19701[2] = null);
(statearr_19673_19701[1] = 10);
return cljs.core.constant$keyword$120;
} else
{if((state_val_19663 === 10))
{var inst_19644 = (state_19662[2]);var state_19662__$1 = (function (){var statearr_19674 = state_19662;(statearr_19674[8] = inst_19644);
return statearr_19674;
})();if(cljs.core.truth_(log))
{var statearr_19675_19702 = state_19662__$1;(statearr_19675_19702[1] = 12);
} else
{var statearr_19676_19703 = state_19662__$1;(statearr_19676_19703[1] = 13);
}
return cljs.core.constant$keyword$120;
} else
{if((state_val_19663 === 11))
{var inst_19641 = (state_19662[2]);var state_19662__$1 = state_19662;var statearr_19677_19704 = state_19662__$1;(statearr_19677_19704[2] = inst_19641);
(statearr_19677_19704[1] = 10);
return cljs.core.constant$keyword$120;
} else
{if((state_val_19663 === 12))
{var inst_19636 = (state_19662[7]);var inst_19646 = cljs.core.clj__GT_js(inst_19636);var inst_19647 = console.log(inst_19646);var state_19662__$1 = state_19662;var statearr_19678_19705 = state_19662__$1;(statearr_19678_19705[2] = inst_19647);
(statearr_19678_19705[1] = 14);
return cljs.core.constant$keyword$120;
} else
{if((state_val_19663 === 13))
{var state_19662__$1 = state_19662;var statearr_19679_19706 = state_19662__$1;(statearr_19679_19706[2] = null);
(statearr_19679_19706[1] = 14);
return cljs.core.constant$keyword$120;
} else
{if((state_val_19663 === 14))
{var inst_19636 = (state_19662[7]);var inst_19650 = (state_19662[2]);var state_19662__$1 = (function (){var statearr_19680 = state_19662;(statearr_19680[9] = inst_19650);
return statearr_19680;
})();var statearr_19681_19707 = state_19662__$1;(statearr_19681_19707[2] = inst_19636);
(statearr_19681_19707[1] = 7);
return cljs.core.constant$keyword$120;
} else
{if((state_val_19663 === 15))
{var state_19662__$1 = state_19662;var statearr_19682_19708 = state_19662__$1;(statearr_19682_19708[2] = null);
(statearr_19682_19708[1] = 2);
return cljs.core.constant$keyword$120;
} else
{if((state_val_19663 === 16))
{var state_19662__$1 = state_19662;var statearr_19683_19709 = state_19662__$1;(statearr_19683_19709[2] = null);
(statearr_19683_19709[1] = 17);
return cljs.core.constant$keyword$120;
} else
{if((state_val_19663 === 17))
{var inst_19658 = (state_19662[2]);var state_19662__$1 = state_19662;var statearr_19684_19710 = state_19662__$1;(statearr_19684_19710[2] = inst_19658);
(statearr_19684_19710[1] = 3);
return cljs.core.constant$keyword$120;
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
var state_machine__5507__auto____0 = (function (){var statearr_19688 = [null,null,null,null,null,null,null,null,null,null];(statearr_19688[0] = state_machine__5507__auto__);
(statearr_19688[1] = 1);
return statearr_19688;
});
var state_machine__5507__auto____1 = (function (state_19662){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_19662);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$120))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e19689){if((e19689 instanceof Object))
{var ex__5510__auto__ = e19689;var statearr_19690_19711 = state_19662;(statearr_19690_19711[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_19662);
return cljs.core.constant$keyword$120;
} else
{if(cljs.core.constant$keyword$109)
{throw e19689;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$120))
{{
var G__19712 = state_19662;
state_19662 = G__19712;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_19662){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_19662);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_19691 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_19691[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___19692);
return statearr_19691;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5523__auto__);
}));
return null;
};
var dorun_async = function (ch,var_args){
var p__19573 = null;if (arguments.length > 1) {
  p__19573 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return dorun_async__delegate.call(this,ch,p__19573);};
dorun_async.cljs$lang$maxFixedArity = 1;
dorun_async.cljs$lang$applyTo = (function (arglist__19713){
var ch = cljs.core.first(arglist__19713);
var p__19573 = cljs.core.rest(arglist__19713);
return dorun_async__delegate(ch,p__19573);
});
dorun_async.cljs$core$IFn$_invoke$arity$variadic = dorun_async__delegate;
return dorun_async;
})()
;
