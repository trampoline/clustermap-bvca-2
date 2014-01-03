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
map_async.cljs$lang$applyTo = (function (arglist__16730){
var f = cljs.core.first(arglist__16730);
var colls = cljs.core.rest(arglist__16730);
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
var dorun_async__delegate = function (ch,p__16731){var map__16779 = p__16731;var map__16779__$1 = ((cljs.core.seq_QMARK_(map__16779))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16779):map__16779);var log = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16779__$1,cljs.core.constant$keyword$91);var c__5521__auto___16826 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_16801){var state_val_16802 = (state_16801[1]);if((state_val_16802 === 1))
{var state_16801__$1 = state_16801;var statearr_16803_16827 = state_16801__$1;(statearr_16803_16827[2] = null);
(statearr_16803_16827[1] = 2);
return cljs.core.constant$keyword$77;
} else
{if((state_val_16802 === 2))
{var state_16801__$1 = state_16801;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16801__$1,4,ch);
} else
{if((state_val_16802 === 3))
{var inst_16799 = (state_16801[2]);var state_16801__$1 = state_16801;return cljs.core.async.impl.ioc_helpers.return_chan(state_16801__$1,inst_16799);
} else
{if((state_val_16802 === 4))
{var inst_16782 = (state_16801[7]);var inst_16782__$1 = (state_16801[2]);var state_16801__$1 = (function (){var statearr_16804 = state_16801;(statearr_16804[7] = inst_16782__$1);
return statearr_16804;
})();if(cljs.core.truth_(inst_16782__$1))
{var statearr_16805_16828 = state_16801__$1;(statearr_16805_16828[1] = 5);
} else
{var statearr_16806_16829 = state_16801__$1;(statearr_16806_16829[1] = 6);
}
return cljs.core.constant$keyword$77;
} else
{if((state_val_16802 === 5))
{var state_16801__$1 = state_16801;if(cljs.core.truth_(log))
{var statearr_16807_16830 = state_16801__$1;(statearr_16807_16830[1] = 8);
} else
{var statearr_16808_16831 = state_16801__$1;(statearr_16808_16831[1] = 9);
}
return cljs.core.constant$keyword$77;
} else
{if((state_val_16802 === 6))
{var state_16801__$1 = state_16801;var statearr_16809_16832 = state_16801__$1;(statearr_16809_16832[2] = null);
(statearr_16809_16832[1] = 7);
return cljs.core.constant$keyword$77;
} else
{if((state_val_16802 === 7))
{var inst_16792 = (state_16801[2]);var state_16801__$1 = state_16801;if(cljs.core.truth_(inst_16792))
{var statearr_16810_16833 = state_16801__$1;(statearr_16810_16833[1] = 11);
} else
{var statearr_16811_16834 = state_16801__$1;(statearr_16811_16834[1] = 12);
}
return cljs.core.constant$keyword$77;
} else
{if((state_val_16802 === 8))
{var inst_16782 = (state_16801[7]);var inst_16785 = cljs.core.clj__GT_js(inst_16782);var inst_16786 = console.log(inst_16785);var state_16801__$1 = state_16801;var statearr_16812_16835 = state_16801__$1;(statearr_16812_16835[2] = inst_16786);
(statearr_16812_16835[1] = 10);
return cljs.core.constant$keyword$77;
} else
{if((state_val_16802 === 9))
{var state_16801__$1 = state_16801;var statearr_16813_16836 = state_16801__$1;(statearr_16813_16836[2] = null);
(statearr_16813_16836[1] = 10);
return cljs.core.constant$keyword$77;
} else
{if((state_val_16802 === 10))
{var inst_16782 = (state_16801[7]);var inst_16789 = (state_16801[2]);var state_16801__$1 = (function (){var statearr_16814 = state_16801;(statearr_16814[8] = inst_16789);
return statearr_16814;
})();var statearr_16815_16837 = state_16801__$1;(statearr_16815_16837[2] = inst_16782);
(statearr_16815_16837[1] = 7);
return cljs.core.constant$keyword$77;
} else
{if((state_val_16802 === 11))
{var state_16801__$1 = state_16801;var statearr_16816_16838 = state_16801__$1;(statearr_16816_16838[2] = null);
(statearr_16816_16838[1] = 2);
return cljs.core.constant$keyword$77;
} else
{if((state_val_16802 === 12))
{var state_16801__$1 = state_16801;var statearr_16817_16839 = state_16801__$1;(statearr_16817_16839[2] = null);
(statearr_16817_16839[1] = 13);
return cljs.core.constant$keyword$77;
} else
{if((state_val_16802 === 13))
{var inst_16797 = (state_16801[2]);var state_16801__$1 = state_16801;var statearr_16818_16840 = state_16801__$1;(statearr_16818_16840[2] = inst_16797);
(statearr_16818_16840[1] = 3);
return cljs.core.constant$keyword$77;
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
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_16822 = [null,null,null,null,null,null,null,null,null];(statearr_16822[0] = state_machine__5507__auto__);
(statearr_16822[1] = 1);
return statearr_16822;
});
var state_machine__5507__auto____1 = (function (state_16801){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_16801);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$77))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e16823){if((e16823 instanceof Object))
{var ex__5510__auto__ = e16823;var statearr_16824_16841 = state_16801;(statearr_16824_16841[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_16801);
return cljs.core.constant$keyword$77;
} else
{if(cljs.core.constant$keyword$66)
{throw e16823;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$77))
{{
var G__16842 = state_16801;
state_16801 = G__16842;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_16801){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_16801);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_16825 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_16825[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___16826);
return statearr_16825;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5523__auto__);
}));
return null;
};
var dorun_async = function (ch,var_args){
var p__16731 = null;if (arguments.length > 1) {
  p__16731 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return dorun_async__delegate.call(this,ch,p__16731);};
dorun_async.cljs$lang$maxFixedArity = 1;
dorun_async.cljs$lang$applyTo = (function (arglist__16843){
var ch = cljs.core.first(arglist__16843);
var p__16731 = cljs.core.rest(arglist__16843);
return dorun_async__delegate(ch,p__16731);
});
dorun_async.cljs$core$IFn$_invoke$arity$variadic = dorun_async__delegate;
return dorun_async;
})()
;
