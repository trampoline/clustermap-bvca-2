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
map_async.cljs$lang$applyTo = (function (arglist__20913){
var f = cljs.core.first(arglist__20913);
var colls = cljs.core.rest(arglist__20913);
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
var dorun_async__delegate = function (ch,p__20914){var map__20974 = p__20914;var map__20974__$1 = ((cljs.core.seq_QMARK_(map__20974))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20974):map__20974);var delay = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20974__$1,cljs.core.constant$keyword$331);var log = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20974__$1,cljs.core.constant$keyword$342);var c__5521__auto___21033 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_21003){var state_val_21004 = (state_21003[1]);if((state_val_21004 === 1))
{var state_21003__$1 = state_21003;var statearr_21005_21034 = state_21003__$1;(statearr_21005_21034[2] = null);
(statearr_21005_21034[1] = 2);
return cljs.core.constant$keyword$194;
} else
{if((state_val_21004 === 2))
{var state_21003__$1 = state_21003;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_21003__$1,4,ch);
} else
{if((state_val_21004 === 3))
{var inst_21001 = (state_21003[2]);var state_21003__$1 = state_21003;return cljs.core.async.impl.ioc_helpers.return_chan(state_21003__$1,inst_21001);
} else
{if((state_val_21004 === 4))
{var inst_20977 = (state_21003[7]);var inst_20977__$1 = (state_21003[2]);var state_21003__$1 = (function (){var statearr_21006 = state_21003;(statearr_21006[7] = inst_20977__$1);
return statearr_21006;
})();if(cljs.core.truth_(inst_20977__$1))
{var statearr_21007_21035 = state_21003__$1;(statearr_21007_21035[1] = 5);
} else
{var statearr_21008_21036 = state_21003__$1;(statearr_21008_21036[1] = 6);
}
return cljs.core.constant$keyword$194;
} else
{if((state_val_21004 === 5))
{var state_21003__$1 = state_21003;if(cljs.core.truth_(delay))
{var statearr_21009_21037 = state_21003__$1;(statearr_21009_21037[1] = 8);
} else
{var statearr_21010_21038 = state_21003__$1;(statearr_21010_21038[1] = 9);
}
return cljs.core.constant$keyword$194;
} else
{if((state_val_21004 === 6))
{var state_21003__$1 = state_21003;var statearr_21011_21039 = state_21003__$1;(statearr_21011_21039[2] = null);
(statearr_21011_21039[1] = 7);
return cljs.core.constant$keyword$194;
} else
{if((state_val_21004 === 7))
{var inst_20994 = (state_21003[2]);var state_21003__$1 = state_21003;if(cljs.core.truth_(inst_20994))
{var statearr_21012_21040 = state_21003__$1;(statearr_21012_21040[1] = 15);
} else
{var statearr_21013_21041 = state_21003__$1;(statearr_21013_21041[1] = 16);
}
return cljs.core.constant$keyword$194;
} else
{if((state_val_21004 === 8))
{var inst_20980 = cljs.core.async.timeout(delay);var state_21003__$1 = state_21003;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_21003__$1,11,inst_20980);
} else
{if((state_val_21004 === 9))
{var state_21003__$1 = state_21003;var statearr_21014_21042 = state_21003__$1;(statearr_21014_21042[2] = null);
(statearr_21014_21042[1] = 10);
return cljs.core.constant$keyword$194;
} else
{if((state_val_21004 === 10))
{var inst_20985 = (state_21003[2]);var state_21003__$1 = (function (){var statearr_21015 = state_21003;(statearr_21015[8] = inst_20985);
return statearr_21015;
})();if(cljs.core.truth_(log))
{var statearr_21016_21043 = state_21003__$1;(statearr_21016_21043[1] = 12);
} else
{var statearr_21017_21044 = state_21003__$1;(statearr_21017_21044[1] = 13);
}
return cljs.core.constant$keyword$194;
} else
{if((state_val_21004 === 11))
{var inst_20982 = (state_21003[2]);var state_21003__$1 = state_21003;var statearr_21018_21045 = state_21003__$1;(statearr_21018_21045[2] = inst_20982);
(statearr_21018_21045[1] = 10);
return cljs.core.constant$keyword$194;
} else
{if((state_val_21004 === 12))
{var inst_20977 = (state_21003[7]);var inst_20987 = cljs.core.clj__GT_js(inst_20977);var inst_20988 = console.log(inst_20987);var state_21003__$1 = state_21003;var statearr_21019_21046 = state_21003__$1;(statearr_21019_21046[2] = inst_20988);
(statearr_21019_21046[1] = 14);
return cljs.core.constant$keyword$194;
} else
{if((state_val_21004 === 13))
{var state_21003__$1 = state_21003;var statearr_21020_21047 = state_21003__$1;(statearr_21020_21047[2] = null);
(statearr_21020_21047[1] = 14);
return cljs.core.constant$keyword$194;
} else
{if((state_val_21004 === 14))
{var inst_20977 = (state_21003[7]);var inst_20991 = (state_21003[2]);var state_21003__$1 = (function (){var statearr_21021 = state_21003;(statearr_21021[9] = inst_20991);
return statearr_21021;
})();var statearr_21022_21048 = state_21003__$1;(statearr_21022_21048[2] = inst_20977);
(statearr_21022_21048[1] = 7);
return cljs.core.constant$keyword$194;
} else
{if((state_val_21004 === 15))
{var state_21003__$1 = state_21003;var statearr_21023_21049 = state_21003__$1;(statearr_21023_21049[2] = null);
(statearr_21023_21049[1] = 2);
return cljs.core.constant$keyword$194;
} else
{if((state_val_21004 === 16))
{var state_21003__$1 = state_21003;var statearr_21024_21050 = state_21003__$1;(statearr_21024_21050[2] = null);
(statearr_21024_21050[1] = 17);
return cljs.core.constant$keyword$194;
} else
{if((state_val_21004 === 17))
{var inst_20999 = (state_21003[2]);var state_21003__$1 = state_21003;var statearr_21025_21051 = state_21003__$1;(statearr_21025_21051[2] = inst_20999);
(statearr_21025_21051[1] = 3);
return cljs.core.constant$keyword$194;
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
var state_machine__5507__auto____0 = (function (){var statearr_21029 = [null,null,null,null,null,null,null,null,null,null];(statearr_21029[0] = state_machine__5507__auto__);
(statearr_21029[1] = 1);
return statearr_21029;
});
var state_machine__5507__auto____1 = (function (state_21003){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_21003);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$194))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e21030){if((e21030 instanceof Object))
{var ex__5510__auto__ = e21030;var statearr_21031_21052 = state_21003;(statearr_21031_21052[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_21003);
return cljs.core.constant$keyword$194;
} else
{if(cljs.core.constant$keyword$183)
{throw e21030;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$194))
{{
var G__21053 = state_21003;
state_21003 = G__21053;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_21003){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_21003);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_21032 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_21032[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___21033);
return statearr_21032;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5523__auto__);
}));
return null;
};
var dorun_async = function (ch,var_args){
var p__20914 = null;if (arguments.length > 1) {
  p__20914 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return dorun_async__delegate.call(this,ch,p__20914);};
dorun_async.cljs$lang$maxFixedArity = 1;
dorun_async.cljs$lang$applyTo = (function (arglist__21054){
var ch = cljs.core.first(arglist__21054);
var p__20914 = cljs.core.rest(arglist__21054);
return dorun_async__delegate(ch,p__20914);
});
dorun_async.cljs$core$IFn$_invoke$arity$variadic = dorun_async__delegate;
return dorun_async;
})()
;
