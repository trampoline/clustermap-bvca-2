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
map_async.cljs$lang$applyTo = (function (arglist__19576){
var f = cljs.core.first(arglist__19576);
var colls = cljs.core.rest(arglist__19576);
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
var dorun_async__delegate = function (ch,p__19577){var map__19637 = p__19577;var map__19637__$1 = ((cljs.core.seq_QMARK_(map__19637))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19637):map__19637);var delay = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19637__$1,cljs.core.constant$keyword$184);var log = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19637__$1,cljs.core.constant$keyword$185);var c__5521__auto___19696 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_19666){var state_val_19667 = (state_19666[1]);if((state_val_19667 === 1))
{var state_19666__$1 = state_19666;var statearr_19668_19697 = state_19666__$1;(statearr_19668_19697[2] = null);
(statearr_19668_19697[1] = 2);
return cljs.core.constant$keyword$123;
} else
{if((state_val_19667 === 2))
{var state_19666__$1 = state_19666;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19666__$1,4,ch);
} else
{if((state_val_19667 === 3))
{var inst_19664 = (state_19666[2]);var state_19666__$1 = state_19666;return cljs.core.async.impl.ioc_helpers.return_chan(state_19666__$1,inst_19664);
} else
{if((state_val_19667 === 4))
{var inst_19640 = (state_19666[7]);var inst_19640__$1 = (state_19666[2]);var state_19666__$1 = (function (){var statearr_19669 = state_19666;(statearr_19669[7] = inst_19640__$1);
return statearr_19669;
})();if(cljs.core.truth_(inst_19640__$1))
{var statearr_19670_19698 = state_19666__$1;(statearr_19670_19698[1] = 5);
} else
{var statearr_19671_19699 = state_19666__$1;(statearr_19671_19699[1] = 6);
}
return cljs.core.constant$keyword$123;
} else
{if((state_val_19667 === 5))
{var state_19666__$1 = state_19666;if(cljs.core.truth_(delay))
{var statearr_19672_19700 = state_19666__$1;(statearr_19672_19700[1] = 8);
} else
{var statearr_19673_19701 = state_19666__$1;(statearr_19673_19701[1] = 9);
}
return cljs.core.constant$keyword$123;
} else
{if((state_val_19667 === 6))
{var state_19666__$1 = state_19666;var statearr_19674_19702 = state_19666__$1;(statearr_19674_19702[2] = null);
(statearr_19674_19702[1] = 7);
return cljs.core.constant$keyword$123;
} else
{if((state_val_19667 === 7))
{var inst_19657 = (state_19666[2]);var state_19666__$1 = state_19666;if(cljs.core.truth_(inst_19657))
{var statearr_19675_19703 = state_19666__$1;(statearr_19675_19703[1] = 15);
} else
{var statearr_19676_19704 = state_19666__$1;(statearr_19676_19704[1] = 16);
}
return cljs.core.constant$keyword$123;
} else
{if((state_val_19667 === 8))
{var inst_19643 = cljs.core.async.timeout(delay);var state_19666__$1 = state_19666;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19666__$1,11,inst_19643);
} else
{if((state_val_19667 === 9))
{var state_19666__$1 = state_19666;var statearr_19677_19705 = state_19666__$1;(statearr_19677_19705[2] = null);
(statearr_19677_19705[1] = 10);
return cljs.core.constant$keyword$123;
} else
{if((state_val_19667 === 10))
{var inst_19648 = (state_19666[2]);var state_19666__$1 = (function (){var statearr_19678 = state_19666;(statearr_19678[8] = inst_19648);
return statearr_19678;
})();if(cljs.core.truth_(log))
{var statearr_19679_19706 = state_19666__$1;(statearr_19679_19706[1] = 12);
} else
{var statearr_19680_19707 = state_19666__$1;(statearr_19680_19707[1] = 13);
}
return cljs.core.constant$keyword$123;
} else
{if((state_val_19667 === 11))
{var inst_19645 = (state_19666[2]);var state_19666__$1 = state_19666;var statearr_19681_19708 = state_19666__$1;(statearr_19681_19708[2] = inst_19645);
(statearr_19681_19708[1] = 10);
return cljs.core.constant$keyword$123;
} else
{if((state_val_19667 === 12))
{var inst_19640 = (state_19666[7]);var inst_19650 = cljs.core.clj__GT_js(inst_19640);var inst_19651 = console.log(inst_19650);var state_19666__$1 = state_19666;var statearr_19682_19709 = state_19666__$1;(statearr_19682_19709[2] = inst_19651);
(statearr_19682_19709[1] = 14);
return cljs.core.constant$keyword$123;
} else
{if((state_val_19667 === 13))
{var state_19666__$1 = state_19666;var statearr_19683_19710 = state_19666__$1;(statearr_19683_19710[2] = null);
(statearr_19683_19710[1] = 14);
return cljs.core.constant$keyword$123;
} else
{if((state_val_19667 === 14))
{var inst_19640 = (state_19666[7]);var inst_19654 = (state_19666[2]);var state_19666__$1 = (function (){var statearr_19684 = state_19666;(statearr_19684[9] = inst_19654);
return statearr_19684;
})();var statearr_19685_19711 = state_19666__$1;(statearr_19685_19711[2] = inst_19640);
(statearr_19685_19711[1] = 7);
return cljs.core.constant$keyword$123;
} else
{if((state_val_19667 === 15))
{var state_19666__$1 = state_19666;var statearr_19686_19712 = state_19666__$1;(statearr_19686_19712[2] = null);
(statearr_19686_19712[1] = 2);
return cljs.core.constant$keyword$123;
} else
{if((state_val_19667 === 16))
{var state_19666__$1 = state_19666;var statearr_19687_19713 = state_19666__$1;(statearr_19687_19713[2] = null);
(statearr_19687_19713[1] = 17);
return cljs.core.constant$keyword$123;
} else
{if((state_val_19667 === 17))
{var inst_19662 = (state_19666[2]);var state_19666__$1 = state_19666;var statearr_19688_19714 = state_19666__$1;(statearr_19688_19714[2] = inst_19662);
(statearr_19688_19714[1] = 3);
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
var state_machine__5507__auto____0 = (function (){var statearr_19692 = [null,null,null,null,null,null,null,null,null,null];(statearr_19692[0] = state_machine__5507__auto__);
(statearr_19692[1] = 1);
return statearr_19692;
});
var state_machine__5507__auto____1 = (function (state_19666){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_19666);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$123))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e19693){if((e19693 instanceof Object))
{var ex__5510__auto__ = e19693;var statearr_19694_19715 = state_19666;(statearr_19694_19715[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_19666);
return cljs.core.constant$keyword$123;
} else
{if(cljs.core.constant$keyword$112)
{throw e19693;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$123))
{{
var G__19716 = state_19666;
state_19666 = G__19716;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_19666){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_19666);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_19695 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_19695[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___19696);
return statearr_19695;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5523__auto__);
}));
return null;
};
var dorun_async = function (ch,var_args){
var p__19577 = null;if (arguments.length > 1) {
  p__19577 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return dorun_async__delegate.call(this,ch,p__19577);};
dorun_async.cljs$lang$maxFixedArity = 1;
dorun_async.cljs$lang$applyTo = (function (arglist__19717){
var ch = cljs.core.first(arglist__19717);
var p__19577 = cljs.core.rest(arglist__19717);
return dorun_async__delegate(ch,p__19577);
});
dorun_async.cljs$core$IFn$_invoke$arity$variadic = dorun_async__delegate;
return dorun_async;
})()
;
