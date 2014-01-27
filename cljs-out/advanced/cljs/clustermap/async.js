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
map_async.cljs$lang$applyTo = (function (arglist__20718){
var f = cljs.core.first(arglist__20718);
var colls = cljs.core.rest(arglist__20718);
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
var dorun_async__delegate = function (ch,p__20719){var map__20779 = p__20719;var map__20779__$1 = ((cljs.core.seq_QMARK_(map__20779))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20779):map__20779);var delay = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20779__$1,cljs.core.constant$keyword$283);var log = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20779__$1,cljs.core.constant$keyword$294);var c__5521__auto___20838 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_20808){var state_val_20809 = (state_20808[1]);if((state_val_20809 === 1))
{var state_20808__$1 = state_20808;var statearr_20810_20839 = state_20808__$1;(statearr_20810_20839[2] = null);
(statearr_20810_20839[1] = 2);
return cljs.core.constant$keyword$170;
} else
{if((state_val_20809 === 2))
{var state_20808__$1 = state_20808;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20808__$1,4,ch);
} else
{if((state_val_20809 === 3))
{var inst_20806 = (state_20808[2]);var state_20808__$1 = state_20808;return cljs.core.async.impl.ioc_helpers.return_chan(state_20808__$1,inst_20806);
} else
{if((state_val_20809 === 4))
{var inst_20782 = (state_20808[7]);var inst_20782__$1 = (state_20808[2]);var state_20808__$1 = (function (){var statearr_20811 = state_20808;(statearr_20811[7] = inst_20782__$1);
return statearr_20811;
})();if(cljs.core.truth_(inst_20782__$1))
{var statearr_20812_20840 = state_20808__$1;(statearr_20812_20840[1] = 5);
} else
{var statearr_20813_20841 = state_20808__$1;(statearr_20813_20841[1] = 6);
}
return cljs.core.constant$keyword$170;
} else
{if((state_val_20809 === 5))
{var state_20808__$1 = state_20808;if(cljs.core.truth_(delay))
{var statearr_20814_20842 = state_20808__$1;(statearr_20814_20842[1] = 8);
} else
{var statearr_20815_20843 = state_20808__$1;(statearr_20815_20843[1] = 9);
}
return cljs.core.constant$keyword$170;
} else
{if((state_val_20809 === 6))
{var state_20808__$1 = state_20808;var statearr_20816_20844 = state_20808__$1;(statearr_20816_20844[2] = null);
(statearr_20816_20844[1] = 7);
return cljs.core.constant$keyword$170;
} else
{if((state_val_20809 === 7))
{var inst_20799 = (state_20808[2]);var state_20808__$1 = state_20808;if(cljs.core.truth_(inst_20799))
{var statearr_20817_20845 = state_20808__$1;(statearr_20817_20845[1] = 15);
} else
{var statearr_20818_20846 = state_20808__$1;(statearr_20818_20846[1] = 16);
}
return cljs.core.constant$keyword$170;
} else
{if((state_val_20809 === 8))
{var inst_20785 = cljs.core.async.timeout(delay);var state_20808__$1 = state_20808;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20808__$1,11,inst_20785);
} else
{if((state_val_20809 === 9))
{var state_20808__$1 = state_20808;var statearr_20819_20847 = state_20808__$1;(statearr_20819_20847[2] = null);
(statearr_20819_20847[1] = 10);
return cljs.core.constant$keyword$170;
} else
{if((state_val_20809 === 10))
{var inst_20790 = (state_20808[2]);var state_20808__$1 = (function (){var statearr_20820 = state_20808;(statearr_20820[8] = inst_20790);
return statearr_20820;
})();if(cljs.core.truth_(log))
{var statearr_20821_20848 = state_20808__$1;(statearr_20821_20848[1] = 12);
} else
{var statearr_20822_20849 = state_20808__$1;(statearr_20822_20849[1] = 13);
}
return cljs.core.constant$keyword$170;
} else
{if((state_val_20809 === 11))
{var inst_20787 = (state_20808[2]);var state_20808__$1 = state_20808;var statearr_20823_20850 = state_20808__$1;(statearr_20823_20850[2] = inst_20787);
(statearr_20823_20850[1] = 10);
return cljs.core.constant$keyword$170;
} else
{if((state_val_20809 === 12))
{var inst_20782 = (state_20808[7]);var inst_20792 = cljs.core.clj__GT_js(inst_20782);var inst_20793 = console.log(inst_20792);var state_20808__$1 = state_20808;var statearr_20824_20851 = state_20808__$1;(statearr_20824_20851[2] = inst_20793);
(statearr_20824_20851[1] = 14);
return cljs.core.constant$keyword$170;
} else
{if((state_val_20809 === 13))
{var state_20808__$1 = state_20808;var statearr_20825_20852 = state_20808__$1;(statearr_20825_20852[2] = null);
(statearr_20825_20852[1] = 14);
return cljs.core.constant$keyword$170;
} else
{if((state_val_20809 === 14))
{var inst_20782 = (state_20808[7]);var inst_20796 = (state_20808[2]);var state_20808__$1 = (function (){var statearr_20826 = state_20808;(statearr_20826[9] = inst_20796);
return statearr_20826;
})();var statearr_20827_20853 = state_20808__$1;(statearr_20827_20853[2] = inst_20782);
(statearr_20827_20853[1] = 7);
return cljs.core.constant$keyword$170;
} else
{if((state_val_20809 === 15))
{var state_20808__$1 = state_20808;var statearr_20828_20854 = state_20808__$1;(statearr_20828_20854[2] = null);
(statearr_20828_20854[1] = 2);
return cljs.core.constant$keyword$170;
} else
{if((state_val_20809 === 16))
{var state_20808__$1 = state_20808;var statearr_20829_20855 = state_20808__$1;(statearr_20829_20855[2] = null);
(statearr_20829_20855[1] = 17);
return cljs.core.constant$keyword$170;
} else
{if((state_val_20809 === 17))
{var inst_20804 = (state_20808[2]);var state_20808__$1 = state_20808;var statearr_20830_20856 = state_20808__$1;(statearr_20830_20856[2] = inst_20804);
(statearr_20830_20856[1] = 3);
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
var state_machine__5507__auto____0 = (function (){var statearr_20834 = [null,null,null,null,null,null,null,null,null,null];(statearr_20834[0] = state_machine__5507__auto__);
(statearr_20834[1] = 1);
return statearr_20834;
});
var state_machine__5507__auto____1 = (function (state_20808){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_20808);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$170))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e20835){if((e20835 instanceof Object))
{var ex__5510__auto__ = e20835;var statearr_20836_20857 = state_20808;(statearr_20836_20857[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_20808);
return cljs.core.constant$keyword$170;
} else
{if(cljs.core.constant$keyword$159)
{throw e20835;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$170))
{{
var G__20858 = state_20808;
state_20808 = G__20858;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_20808){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_20808);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_20837 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_20837[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___20838);
return statearr_20837;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5523__auto__);
}));
return null;
};
var dorun_async = function (ch,var_args){
var p__20719 = null;if (arguments.length > 1) {
  p__20719 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return dorun_async__delegate.call(this,ch,p__20719);};
dorun_async.cljs$lang$maxFixedArity = 1;
dorun_async.cljs$lang$applyTo = (function (arglist__20859){
var ch = cljs.core.first(arglist__20859);
var p__20719 = cljs.core.rest(arglist__20859);
return dorun_async__delegate(ch,p__20719);
});
dorun_async.cljs$core$IFn$_invoke$arity$variadic = dorun_async__delegate;
return dorun_async;
})()
;
