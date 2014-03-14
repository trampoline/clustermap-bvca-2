// Compiled by ClojureScript 0.0-2173
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
map_async.cljs$lang$applyTo = (function (arglist__33718){
var f = cljs.core.first(arglist__33718);
var colls = cljs.core.rest(arglist__33718);
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
var dorun_async__delegate = function (ch,p__33719){var map__33779 = p__33719;var map__33779__$1 = ((cljs.core.seq_QMARK_(map__33779))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33779):map__33779);var delay = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33779__$1,cljs.core.constant$keyword$790);var log = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33779__$1,cljs.core.constant$keyword$791);var c__5562__auto___33838 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_33808){var state_val_33809 = (state_33808[1]);if((state_val_33809 === 1))
{var state_33808__$1 = state_33808;var statearr_33810_33839 = state_33808__$1;(statearr_33810_33839[2] = null);
(statearr_33810_33839[1] = 2);
return cljs.core.constant$keyword$551;
} else
{if((state_val_33809 === 2))
{var state_33808__$1 = state_33808;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33808__$1,4,ch);
} else
{if((state_val_33809 === 3))
{var inst_33806 = (state_33808[2]);var state_33808__$1 = state_33808;return cljs.core.async.impl.ioc_helpers.return_chan(state_33808__$1,inst_33806);
} else
{if((state_val_33809 === 4))
{var inst_33782 = (state_33808[7]);var inst_33782__$1 = (state_33808[2]);var state_33808__$1 = (function (){var statearr_33811 = state_33808;(statearr_33811[7] = inst_33782__$1);
return statearr_33811;
})();if(cljs.core.truth_(inst_33782__$1))
{var statearr_33812_33840 = state_33808__$1;(statearr_33812_33840[1] = 5);
} else
{var statearr_33813_33841 = state_33808__$1;(statearr_33813_33841[1] = 6);
}
return cljs.core.constant$keyword$551;
} else
{if((state_val_33809 === 5))
{var state_33808__$1 = state_33808;if(cljs.core.truth_(delay))
{var statearr_33814_33842 = state_33808__$1;(statearr_33814_33842[1] = 8);
} else
{var statearr_33815_33843 = state_33808__$1;(statearr_33815_33843[1] = 9);
}
return cljs.core.constant$keyword$551;
} else
{if((state_val_33809 === 6))
{var state_33808__$1 = state_33808;var statearr_33816_33844 = state_33808__$1;(statearr_33816_33844[2] = null);
(statearr_33816_33844[1] = 7);
return cljs.core.constant$keyword$551;
} else
{if((state_val_33809 === 7))
{var inst_33799 = (state_33808[2]);var state_33808__$1 = state_33808;if(cljs.core.truth_(inst_33799))
{var statearr_33817_33845 = state_33808__$1;(statearr_33817_33845[1] = 15);
} else
{var statearr_33818_33846 = state_33808__$1;(statearr_33818_33846[1] = 16);
}
return cljs.core.constant$keyword$551;
} else
{if((state_val_33809 === 8))
{var inst_33785 = cljs.core.async.timeout(delay);var state_33808__$1 = state_33808;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33808__$1,11,inst_33785);
} else
{if((state_val_33809 === 9))
{var state_33808__$1 = state_33808;var statearr_33819_33847 = state_33808__$1;(statearr_33819_33847[2] = null);
(statearr_33819_33847[1] = 10);
return cljs.core.constant$keyword$551;
} else
{if((state_val_33809 === 10))
{var inst_33790 = (state_33808[2]);var state_33808__$1 = (function (){var statearr_33820 = state_33808;(statearr_33820[8] = inst_33790);
return statearr_33820;
})();if(cljs.core.truth_(log))
{var statearr_33821_33848 = state_33808__$1;(statearr_33821_33848[1] = 12);
} else
{var statearr_33822_33849 = state_33808__$1;(statearr_33822_33849[1] = 13);
}
return cljs.core.constant$keyword$551;
} else
{if((state_val_33809 === 11))
{var inst_33787 = (state_33808[2]);var state_33808__$1 = state_33808;var statearr_33823_33850 = state_33808__$1;(statearr_33823_33850[2] = inst_33787);
(statearr_33823_33850[1] = 10);
return cljs.core.constant$keyword$551;
} else
{if((state_val_33809 === 12))
{var inst_33782 = (state_33808[7]);var inst_33792 = cljs.core.clj__GT_js(inst_33782);var inst_33793 = console.log(inst_33792);var state_33808__$1 = state_33808;var statearr_33824_33851 = state_33808__$1;(statearr_33824_33851[2] = inst_33793);
(statearr_33824_33851[1] = 14);
return cljs.core.constant$keyword$551;
} else
{if((state_val_33809 === 13))
{var state_33808__$1 = state_33808;var statearr_33825_33852 = state_33808__$1;(statearr_33825_33852[2] = null);
(statearr_33825_33852[1] = 14);
return cljs.core.constant$keyword$551;
} else
{if((state_val_33809 === 14))
{var inst_33782 = (state_33808[7]);var inst_33796 = (state_33808[2]);var state_33808__$1 = (function (){var statearr_33826 = state_33808;(statearr_33826[9] = inst_33796);
return statearr_33826;
})();var statearr_33827_33853 = state_33808__$1;(statearr_33827_33853[2] = inst_33782);
(statearr_33827_33853[1] = 7);
return cljs.core.constant$keyword$551;
} else
{if((state_val_33809 === 15))
{var state_33808__$1 = state_33808;var statearr_33828_33854 = state_33808__$1;(statearr_33828_33854[2] = null);
(statearr_33828_33854[1] = 2);
return cljs.core.constant$keyword$551;
} else
{if((state_val_33809 === 16))
{var state_33808__$1 = state_33808;var statearr_33829_33855 = state_33808__$1;(statearr_33829_33855[2] = null);
(statearr_33829_33855[1] = 17);
return cljs.core.constant$keyword$551;
} else
{if((state_val_33809 === 17))
{var inst_33804 = (state_33808[2]);var state_33808__$1 = state_33808;var statearr_33830_33856 = state_33808__$1;(statearr_33830_33856[2] = inst_33804);
(statearr_33830_33856[1] = 3);
return cljs.core.constant$keyword$551;
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
});return ((function (switch__5547__auto__){
return (function() {
var state_machine__5548__auto__ = null;
var state_machine__5548__auto____0 = (function (){var statearr_33834 = [null,null,null,null,null,null,null,null,null,null];(statearr_33834[0] = state_machine__5548__auto__);
(statearr_33834[1] = 1);
return statearr_33834;
});
var state_machine__5548__auto____1 = (function (state_33808){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__(state_33808);if(cljs.core.keyword_identical_QMARK_(result__5550__auto__,cljs.core.constant$keyword$551))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e33835){if((e33835 instanceof Object))
{var ex__5551__auto__ = e33835;var statearr_33836_33857 = state_33808;(statearr_33836_33857[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_33808);
return cljs.core.constant$keyword$551;
} else
{if(cljs.core.constant$keyword$540)
{throw e33835;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5549__auto__,cljs.core.constant$keyword$551))
{{
var G__33858 = state_33808;
state_33808 = G__33858;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_33808){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_33808);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_33837 = (f__5563__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5563__auto__.cljs$core$IFn$_invoke$arity$0() : f__5563__auto__.call(null));(statearr_33837[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto___33838);
return statearr_33837;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5564__auto__);
}));
return null;
};
var dorun_async = function (ch,var_args){
var p__33719 = null;if (arguments.length > 1) {
  p__33719 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return dorun_async__delegate.call(this,ch,p__33719);};
dorun_async.cljs$lang$maxFixedArity = 1;
dorun_async.cljs$lang$applyTo = (function (arglist__33859){
var ch = cljs.core.first(arglist__33859);
var p__33719 = cljs.core.rest(arglist__33859);
return dorun_async__delegate(ch,p__33719);
});
dorun_async.cljs$core$IFn$_invoke$arity$variadic = dorun_async__delegate;
return dorun_async;
})()
;
