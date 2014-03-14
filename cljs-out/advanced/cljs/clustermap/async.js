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
map_async.cljs$lang$applyTo = (function (arglist__33758){
var f = cljs.core.first(arglist__33758);
var colls = cljs.core.rest(arglist__33758);
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
var dorun_async__delegate = function (ch,p__33759){var map__33819 = p__33759;var map__33819__$1 = ((cljs.core.seq_QMARK_(map__33819))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33819):map__33819);var delay = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33819__$1,cljs.core.constant$keyword$787);var log = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33819__$1,cljs.core.constant$keyword$788);var c__5562__auto___33878 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_33848){var state_val_33849 = (state_33848[1]);if((state_val_33849 === 1))
{var state_33848__$1 = state_33848;var statearr_33850_33879 = state_33848__$1;(statearr_33850_33879[2] = null);
(statearr_33850_33879[1] = 2);
return cljs.core.constant$keyword$549;
} else
{if((state_val_33849 === 2))
{var state_33848__$1 = state_33848;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33848__$1,4,ch);
} else
{if((state_val_33849 === 3))
{var inst_33846 = (state_33848[2]);var state_33848__$1 = state_33848;return cljs.core.async.impl.ioc_helpers.return_chan(state_33848__$1,inst_33846);
} else
{if((state_val_33849 === 4))
{var inst_33822 = (state_33848[7]);var inst_33822__$1 = (state_33848[2]);var state_33848__$1 = (function (){var statearr_33851 = state_33848;(statearr_33851[7] = inst_33822__$1);
return statearr_33851;
})();if(cljs.core.truth_(inst_33822__$1))
{var statearr_33852_33880 = state_33848__$1;(statearr_33852_33880[1] = 5);
} else
{var statearr_33853_33881 = state_33848__$1;(statearr_33853_33881[1] = 6);
}
return cljs.core.constant$keyword$549;
} else
{if((state_val_33849 === 5))
{var state_33848__$1 = state_33848;if(cljs.core.truth_(delay))
{var statearr_33854_33882 = state_33848__$1;(statearr_33854_33882[1] = 8);
} else
{var statearr_33855_33883 = state_33848__$1;(statearr_33855_33883[1] = 9);
}
return cljs.core.constant$keyword$549;
} else
{if((state_val_33849 === 6))
{var state_33848__$1 = state_33848;var statearr_33856_33884 = state_33848__$1;(statearr_33856_33884[2] = null);
(statearr_33856_33884[1] = 7);
return cljs.core.constant$keyword$549;
} else
{if((state_val_33849 === 7))
{var inst_33839 = (state_33848[2]);var state_33848__$1 = state_33848;if(cljs.core.truth_(inst_33839))
{var statearr_33857_33885 = state_33848__$1;(statearr_33857_33885[1] = 15);
} else
{var statearr_33858_33886 = state_33848__$1;(statearr_33858_33886[1] = 16);
}
return cljs.core.constant$keyword$549;
} else
{if((state_val_33849 === 8))
{var inst_33825 = cljs.core.async.timeout(delay);var state_33848__$1 = state_33848;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33848__$1,11,inst_33825);
} else
{if((state_val_33849 === 9))
{var state_33848__$1 = state_33848;var statearr_33859_33887 = state_33848__$1;(statearr_33859_33887[2] = null);
(statearr_33859_33887[1] = 10);
return cljs.core.constant$keyword$549;
} else
{if((state_val_33849 === 10))
{var inst_33830 = (state_33848[2]);var state_33848__$1 = (function (){var statearr_33860 = state_33848;(statearr_33860[8] = inst_33830);
return statearr_33860;
})();if(cljs.core.truth_(log))
{var statearr_33861_33888 = state_33848__$1;(statearr_33861_33888[1] = 12);
} else
{var statearr_33862_33889 = state_33848__$1;(statearr_33862_33889[1] = 13);
}
return cljs.core.constant$keyword$549;
} else
{if((state_val_33849 === 11))
{var inst_33827 = (state_33848[2]);var state_33848__$1 = state_33848;var statearr_33863_33890 = state_33848__$1;(statearr_33863_33890[2] = inst_33827);
(statearr_33863_33890[1] = 10);
return cljs.core.constant$keyword$549;
} else
{if((state_val_33849 === 12))
{var inst_33822 = (state_33848[7]);var inst_33832 = cljs.core.clj__GT_js(inst_33822);var inst_33833 = console.log(inst_33832);var state_33848__$1 = state_33848;var statearr_33864_33891 = state_33848__$1;(statearr_33864_33891[2] = inst_33833);
(statearr_33864_33891[1] = 14);
return cljs.core.constant$keyword$549;
} else
{if((state_val_33849 === 13))
{var state_33848__$1 = state_33848;var statearr_33865_33892 = state_33848__$1;(statearr_33865_33892[2] = null);
(statearr_33865_33892[1] = 14);
return cljs.core.constant$keyword$549;
} else
{if((state_val_33849 === 14))
{var inst_33822 = (state_33848[7]);var inst_33836 = (state_33848[2]);var state_33848__$1 = (function (){var statearr_33866 = state_33848;(statearr_33866[9] = inst_33836);
return statearr_33866;
})();var statearr_33867_33893 = state_33848__$1;(statearr_33867_33893[2] = inst_33822);
(statearr_33867_33893[1] = 7);
return cljs.core.constant$keyword$549;
} else
{if((state_val_33849 === 15))
{var state_33848__$1 = state_33848;var statearr_33868_33894 = state_33848__$1;(statearr_33868_33894[2] = null);
(statearr_33868_33894[1] = 2);
return cljs.core.constant$keyword$549;
} else
{if((state_val_33849 === 16))
{var state_33848__$1 = state_33848;var statearr_33869_33895 = state_33848__$1;(statearr_33869_33895[2] = null);
(statearr_33869_33895[1] = 17);
return cljs.core.constant$keyword$549;
} else
{if((state_val_33849 === 17))
{var inst_33844 = (state_33848[2]);var state_33848__$1 = state_33848;var statearr_33870_33896 = state_33848__$1;(statearr_33870_33896[2] = inst_33844);
(statearr_33870_33896[1] = 3);
return cljs.core.constant$keyword$549;
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
var state_machine__5548__auto____0 = (function (){var statearr_33874 = [null,null,null,null,null,null,null,null,null,null];(statearr_33874[0] = state_machine__5548__auto__);
(statearr_33874[1] = 1);
return statearr_33874;
});
var state_machine__5548__auto____1 = (function (state_33848){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__(state_33848);if(cljs.core.keyword_identical_QMARK_(result__5550__auto__,cljs.core.constant$keyword$549))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e33875){if((e33875 instanceof Object))
{var ex__5551__auto__ = e33875;var statearr_33876_33897 = state_33848;(statearr_33876_33897[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_33848);
return cljs.core.constant$keyword$549;
} else
{if(cljs.core.constant$keyword$538)
{throw e33875;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5549__auto__,cljs.core.constant$keyword$549))
{{
var G__33898 = state_33848;
state_33848 = G__33898;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_33848){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_33848);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_33877 = (f__5563__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5563__auto__.cljs$core$IFn$_invoke$arity$0() : f__5563__auto__.call(null));(statearr_33877[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto___33878);
return statearr_33877;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5564__auto__);
}));
return null;
};
var dorun_async = function (ch,var_args){
var p__33759 = null;if (arguments.length > 1) {
  p__33759 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return dorun_async__delegate.call(this,ch,p__33759);};
dorun_async.cljs$lang$maxFixedArity = 1;
dorun_async.cljs$lang$applyTo = (function (arglist__33899){
var ch = cljs.core.first(arglist__33899);
var p__33759 = cljs.core.rest(arglist__33899);
return dorun_async__delegate(ch,p__33759);
});
dorun_async.cljs$core$IFn$_invoke$arity$variadic = dorun_async__delegate;
return dorun_async;
})()
;
