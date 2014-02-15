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
map_async.cljs$lang$applyTo = (function (arglist__21909){
var f = cljs.core.first(arglist__21909);
var colls = cljs.core.rest(arglist__21909);
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
var dorun_async__delegate = function (ch,p__21910){var map__21970 = p__21910;var map__21970__$1 = ((cljs.core.seq_QMARK_(map__21970))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21970):map__21970);var delay = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21970__$1,cljs.core.constant$keyword$399);var log = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21970__$1,cljs.core.constant$keyword$421);var c__5521__auto___22029 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_21999){var state_val_22000 = (state_21999[1]);if((state_val_22000 === 1))
{var state_21999__$1 = state_21999;var statearr_22001_22030 = state_21999__$1;(statearr_22001_22030[2] = null);
(statearr_22001_22030[1] = 2);
return cljs.core.constant$keyword$233;
} else
{if((state_val_22000 === 2))
{var state_21999__$1 = state_21999;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_21999__$1,4,ch);
} else
{if((state_val_22000 === 3))
{var inst_21997 = (state_21999[2]);var state_21999__$1 = state_21999;return cljs.core.async.impl.ioc_helpers.return_chan(state_21999__$1,inst_21997);
} else
{if((state_val_22000 === 4))
{var inst_21973 = (state_21999[7]);var inst_21973__$1 = (state_21999[2]);var state_21999__$1 = (function (){var statearr_22002 = state_21999;(statearr_22002[7] = inst_21973__$1);
return statearr_22002;
})();if(cljs.core.truth_(inst_21973__$1))
{var statearr_22003_22031 = state_21999__$1;(statearr_22003_22031[1] = 5);
} else
{var statearr_22004_22032 = state_21999__$1;(statearr_22004_22032[1] = 6);
}
return cljs.core.constant$keyword$233;
} else
{if((state_val_22000 === 5))
{var state_21999__$1 = state_21999;if(cljs.core.truth_(delay))
{var statearr_22005_22033 = state_21999__$1;(statearr_22005_22033[1] = 8);
} else
{var statearr_22006_22034 = state_21999__$1;(statearr_22006_22034[1] = 9);
}
return cljs.core.constant$keyword$233;
} else
{if((state_val_22000 === 6))
{var state_21999__$1 = state_21999;var statearr_22007_22035 = state_21999__$1;(statearr_22007_22035[2] = null);
(statearr_22007_22035[1] = 7);
return cljs.core.constant$keyword$233;
} else
{if((state_val_22000 === 7))
{var inst_21990 = (state_21999[2]);var state_21999__$1 = state_21999;if(cljs.core.truth_(inst_21990))
{var statearr_22008_22036 = state_21999__$1;(statearr_22008_22036[1] = 15);
} else
{var statearr_22009_22037 = state_21999__$1;(statearr_22009_22037[1] = 16);
}
return cljs.core.constant$keyword$233;
} else
{if((state_val_22000 === 8))
{var inst_21976 = cljs.core.async.timeout(delay);var state_21999__$1 = state_21999;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_21999__$1,11,inst_21976);
} else
{if((state_val_22000 === 9))
{var state_21999__$1 = state_21999;var statearr_22010_22038 = state_21999__$1;(statearr_22010_22038[2] = null);
(statearr_22010_22038[1] = 10);
return cljs.core.constant$keyword$233;
} else
{if((state_val_22000 === 10))
{var inst_21981 = (state_21999[2]);var state_21999__$1 = (function (){var statearr_22011 = state_21999;(statearr_22011[8] = inst_21981);
return statearr_22011;
})();if(cljs.core.truth_(log))
{var statearr_22012_22039 = state_21999__$1;(statearr_22012_22039[1] = 12);
} else
{var statearr_22013_22040 = state_21999__$1;(statearr_22013_22040[1] = 13);
}
return cljs.core.constant$keyword$233;
} else
{if((state_val_22000 === 11))
{var inst_21978 = (state_21999[2]);var state_21999__$1 = state_21999;var statearr_22014_22041 = state_21999__$1;(statearr_22014_22041[2] = inst_21978);
(statearr_22014_22041[1] = 10);
return cljs.core.constant$keyword$233;
} else
{if((state_val_22000 === 12))
{var inst_21973 = (state_21999[7]);var inst_21983 = cljs.core.clj__GT_js(inst_21973);var inst_21984 = console.log(inst_21983);var state_21999__$1 = state_21999;var statearr_22015_22042 = state_21999__$1;(statearr_22015_22042[2] = inst_21984);
(statearr_22015_22042[1] = 14);
return cljs.core.constant$keyword$233;
} else
{if((state_val_22000 === 13))
{var state_21999__$1 = state_21999;var statearr_22016_22043 = state_21999__$1;(statearr_22016_22043[2] = null);
(statearr_22016_22043[1] = 14);
return cljs.core.constant$keyword$233;
} else
{if((state_val_22000 === 14))
{var inst_21973 = (state_21999[7]);var inst_21987 = (state_21999[2]);var state_21999__$1 = (function (){var statearr_22017 = state_21999;(statearr_22017[9] = inst_21987);
return statearr_22017;
})();var statearr_22018_22044 = state_21999__$1;(statearr_22018_22044[2] = inst_21973);
(statearr_22018_22044[1] = 7);
return cljs.core.constant$keyword$233;
} else
{if((state_val_22000 === 15))
{var state_21999__$1 = state_21999;var statearr_22019_22045 = state_21999__$1;(statearr_22019_22045[2] = null);
(statearr_22019_22045[1] = 2);
return cljs.core.constant$keyword$233;
} else
{if((state_val_22000 === 16))
{var state_21999__$1 = state_21999;var statearr_22020_22046 = state_21999__$1;(statearr_22020_22046[2] = null);
(statearr_22020_22046[1] = 17);
return cljs.core.constant$keyword$233;
} else
{if((state_val_22000 === 17))
{var inst_21995 = (state_21999[2]);var state_21999__$1 = state_21999;var statearr_22021_22047 = state_21999__$1;(statearr_22021_22047[2] = inst_21995);
(statearr_22021_22047[1] = 3);
return cljs.core.constant$keyword$233;
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
var state_machine__5507__auto____0 = (function (){var statearr_22025 = [null,null,null,null,null,null,null,null,null,null];(statearr_22025[0] = state_machine__5507__auto__);
(statearr_22025[1] = 1);
return statearr_22025;
});
var state_machine__5507__auto____1 = (function (state_21999){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_21999);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$233))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e22026){if((e22026 instanceof Object))
{var ex__5510__auto__ = e22026;var statearr_22027_22048 = state_21999;(statearr_22027_22048[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_21999);
return cljs.core.constant$keyword$233;
} else
{if(cljs.core.constant$keyword$222)
{throw e22026;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$233))
{{
var G__22049 = state_21999;
state_21999 = G__22049;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_21999){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_21999);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_22028 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_22028[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___22029);
return statearr_22028;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5523__auto__);
}));
return null;
};
var dorun_async = function (ch,var_args){
var p__21910 = null;if (arguments.length > 1) {
  p__21910 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return dorun_async__delegate.call(this,ch,p__21910);};
dorun_async.cljs$lang$maxFixedArity = 1;
dorun_async.cljs$lang$applyTo = (function (arglist__22050){
var ch = cljs.core.first(arglist__22050);
var p__21910 = cljs.core.rest(arglist__22050);
return dorun_async__delegate(ch,p__21910);
});
dorun_async.cljs$core$IFn$_invoke$arity$variadic = dorun_async__delegate;
return dorun_async;
})()
;
