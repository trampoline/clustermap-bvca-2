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
map_async.cljs$lang$applyTo = (function (arglist__20709){
var f = cljs.core.first(arglist__20709);
var colls = cljs.core.rest(arglist__20709);
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
var dorun_async__delegate = function (ch,p__20710){var map__20770 = p__20710;var map__20770__$1 = ((cljs.core.seq_QMARK_(map__20770))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20770):map__20770);var delay = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20770__$1,cljs.core.constant$keyword$283);var log = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20770__$1,cljs.core.constant$keyword$294);var c__5521__auto___20829 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_20799){var state_val_20800 = (state_20799[1]);if((state_val_20800 === 1))
{var state_20799__$1 = state_20799;var statearr_20801_20830 = state_20799__$1;(statearr_20801_20830[2] = null);
(statearr_20801_20830[1] = 2);
return cljs.core.constant$keyword$170;
} else
{if((state_val_20800 === 2))
{var state_20799__$1 = state_20799;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20799__$1,4,ch);
} else
{if((state_val_20800 === 3))
{var inst_20797 = (state_20799[2]);var state_20799__$1 = state_20799;return cljs.core.async.impl.ioc_helpers.return_chan(state_20799__$1,inst_20797);
} else
{if((state_val_20800 === 4))
{var inst_20773 = (state_20799[7]);var inst_20773__$1 = (state_20799[2]);var state_20799__$1 = (function (){var statearr_20802 = state_20799;(statearr_20802[7] = inst_20773__$1);
return statearr_20802;
})();if(cljs.core.truth_(inst_20773__$1))
{var statearr_20803_20831 = state_20799__$1;(statearr_20803_20831[1] = 5);
} else
{var statearr_20804_20832 = state_20799__$1;(statearr_20804_20832[1] = 6);
}
return cljs.core.constant$keyword$170;
} else
{if((state_val_20800 === 5))
{var state_20799__$1 = state_20799;if(cljs.core.truth_(delay))
{var statearr_20805_20833 = state_20799__$1;(statearr_20805_20833[1] = 8);
} else
{var statearr_20806_20834 = state_20799__$1;(statearr_20806_20834[1] = 9);
}
return cljs.core.constant$keyword$170;
} else
{if((state_val_20800 === 6))
{var state_20799__$1 = state_20799;var statearr_20807_20835 = state_20799__$1;(statearr_20807_20835[2] = null);
(statearr_20807_20835[1] = 7);
return cljs.core.constant$keyword$170;
} else
{if((state_val_20800 === 7))
{var inst_20790 = (state_20799[2]);var state_20799__$1 = state_20799;if(cljs.core.truth_(inst_20790))
{var statearr_20808_20836 = state_20799__$1;(statearr_20808_20836[1] = 15);
} else
{var statearr_20809_20837 = state_20799__$1;(statearr_20809_20837[1] = 16);
}
return cljs.core.constant$keyword$170;
} else
{if((state_val_20800 === 8))
{var inst_20776 = cljs.core.async.timeout(delay);var state_20799__$1 = state_20799;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20799__$1,11,inst_20776);
} else
{if((state_val_20800 === 9))
{var state_20799__$1 = state_20799;var statearr_20810_20838 = state_20799__$1;(statearr_20810_20838[2] = null);
(statearr_20810_20838[1] = 10);
return cljs.core.constant$keyword$170;
} else
{if((state_val_20800 === 10))
{var inst_20781 = (state_20799[2]);var state_20799__$1 = (function (){var statearr_20811 = state_20799;(statearr_20811[8] = inst_20781);
return statearr_20811;
})();if(cljs.core.truth_(log))
{var statearr_20812_20839 = state_20799__$1;(statearr_20812_20839[1] = 12);
} else
{var statearr_20813_20840 = state_20799__$1;(statearr_20813_20840[1] = 13);
}
return cljs.core.constant$keyword$170;
} else
{if((state_val_20800 === 11))
{var inst_20778 = (state_20799[2]);var state_20799__$1 = state_20799;var statearr_20814_20841 = state_20799__$1;(statearr_20814_20841[2] = inst_20778);
(statearr_20814_20841[1] = 10);
return cljs.core.constant$keyword$170;
} else
{if((state_val_20800 === 12))
{var inst_20773 = (state_20799[7]);var inst_20783 = cljs.core.clj__GT_js(inst_20773);var inst_20784 = console.log(inst_20783);var state_20799__$1 = state_20799;var statearr_20815_20842 = state_20799__$1;(statearr_20815_20842[2] = inst_20784);
(statearr_20815_20842[1] = 14);
return cljs.core.constant$keyword$170;
} else
{if((state_val_20800 === 13))
{var state_20799__$1 = state_20799;var statearr_20816_20843 = state_20799__$1;(statearr_20816_20843[2] = null);
(statearr_20816_20843[1] = 14);
return cljs.core.constant$keyword$170;
} else
{if((state_val_20800 === 14))
{var inst_20773 = (state_20799[7]);var inst_20787 = (state_20799[2]);var state_20799__$1 = (function (){var statearr_20817 = state_20799;(statearr_20817[9] = inst_20787);
return statearr_20817;
})();var statearr_20818_20844 = state_20799__$1;(statearr_20818_20844[2] = inst_20773);
(statearr_20818_20844[1] = 7);
return cljs.core.constant$keyword$170;
} else
{if((state_val_20800 === 15))
{var state_20799__$1 = state_20799;var statearr_20819_20845 = state_20799__$1;(statearr_20819_20845[2] = null);
(statearr_20819_20845[1] = 2);
return cljs.core.constant$keyword$170;
} else
{if((state_val_20800 === 16))
{var state_20799__$1 = state_20799;var statearr_20820_20846 = state_20799__$1;(statearr_20820_20846[2] = null);
(statearr_20820_20846[1] = 17);
return cljs.core.constant$keyword$170;
} else
{if((state_val_20800 === 17))
{var inst_20795 = (state_20799[2]);var state_20799__$1 = state_20799;var statearr_20821_20847 = state_20799__$1;(statearr_20821_20847[2] = inst_20795);
(statearr_20821_20847[1] = 3);
return cljs.core.constant$keyword$170;
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
var state_machine__5507__auto____0 = (function (){var statearr_20825 = [null,null,null,null,null,null,null,null,null,null];(statearr_20825[0] = state_machine__5507__auto__);
(statearr_20825[1] = 1);
return statearr_20825;
});
var state_machine__5507__auto____1 = (function (state_20799){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_20799);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$170))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e20826){if((e20826 instanceof Object))
{var ex__5510__auto__ = e20826;var statearr_20827_20848 = state_20799;(statearr_20827_20848[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_20799);
return cljs.core.constant$keyword$170;
} else
{if(cljs.core.constant$keyword$159)
{throw e20826;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$170))
{{
var G__20849 = state_20799;
state_20799 = G__20849;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_20799){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_20799);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_20828 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_20828[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___20829);
return statearr_20828;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5523__auto__);
}));
return null;
};
var dorun_async = function (ch,var_args){
var p__20710 = null;if (arguments.length > 1) {
  p__20710 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return dorun_async__delegate.call(this,ch,p__20710);};
dorun_async.cljs$lang$maxFixedArity = 1;
dorun_async.cljs$lang$applyTo = (function (arglist__20850){
var ch = cljs.core.first(arglist__20850);
var p__20710 = cljs.core.rest(arglist__20850);
return dorun_async__delegate(ch,p__20710);
});
dorun_async.cljs$core$IFn$_invoke$arity$variadic = dorun_async__delegate;
return dorun_async;
})()
;
