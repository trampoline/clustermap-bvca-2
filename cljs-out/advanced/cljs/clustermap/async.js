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
map_async.cljs$lang$applyTo = (function (arglist__21903){
var f = cljs.core.first(arglist__21903);
var colls = cljs.core.rest(arglist__21903);
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
var dorun_async__delegate = function (ch,p__21904){var map__21964 = p__21904;var map__21964__$1 = ((cljs.core.seq_QMARK_(map__21964))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21964):map__21964);var delay = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21964__$1,cljs.core.constant$keyword$398);var log = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21964__$1,cljs.core.constant$keyword$419);var c__5521__auto___22023 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_21993){var state_val_21994 = (state_21993[1]);if((state_val_21994 === 1))
{var state_21993__$1 = state_21993;var statearr_21995_22024 = state_21993__$1;(statearr_21995_22024[2] = null);
(statearr_21995_22024[1] = 2);
return cljs.core.constant$keyword$232;
} else
{if((state_val_21994 === 2))
{var state_21993__$1 = state_21993;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_21993__$1,4,ch);
} else
{if((state_val_21994 === 3))
{var inst_21991 = (state_21993[2]);var state_21993__$1 = state_21993;return cljs.core.async.impl.ioc_helpers.return_chan(state_21993__$1,inst_21991);
} else
{if((state_val_21994 === 4))
{var inst_21967 = (state_21993[7]);var inst_21967__$1 = (state_21993[2]);var state_21993__$1 = (function (){var statearr_21996 = state_21993;(statearr_21996[7] = inst_21967__$1);
return statearr_21996;
})();if(cljs.core.truth_(inst_21967__$1))
{var statearr_21997_22025 = state_21993__$1;(statearr_21997_22025[1] = 5);
} else
{var statearr_21998_22026 = state_21993__$1;(statearr_21998_22026[1] = 6);
}
return cljs.core.constant$keyword$232;
} else
{if((state_val_21994 === 5))
{var state_21993__$1 = state_21993;if(cljs.core.truth_(delay))
{var statearr_21999_22027 = state_21993__$1;(statearr_21999_22027[1] = 8);
} else
{var statearr_22000_22028 = state_21993__$1;(statearr_22000_22028[1] = 9);
}
return cljs.core.constant$keyword$232;
} else
{if((state_val_21994 === 6))
{var state_21993__$1 = state_21993;var statearr_22001_22029 = state_21993__$1;(statearr_22001_22029[2] = null);
(statearr_22001_22029[1] = 7);
return cljs.core.constant$keyword$232;
} else
{if((state_val_21994 === 7))
{var inst_21984 = (state_21993[2]);var state_21993__$1 = state_21993;if(cljs.core.truth_(inst_21984))
{var statearr_22002_22030 = state_21993__$1;(statearr_22002_22030[1] = 15);
} else
{var statearr_22003_22031 = state_21993__$1;(statearr_22003_22031[1] = 16);
}
return cljs.core.constant$keyword$232;
} else
{if((state_val_21994 === 8))
{var inst_21970 = cljs.core.async.timeout(delay);var state_21993__$1 = state_21993;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_21993__$1,11,inst_21970);
} else
{if((state_val_21994 === 9))
{var state_21993__$1 = state_21993;var statearr_22004_22032 = state_21993__$1;(statearr_22004_22032[2] = null);
(statearr_22004_22032[1] = 10);
return cljs.core.constant$keyword$232;
} else
{if((state_val_21994 === 10))
{var inst_21975 = (state_21993[2]);var state_21993__$1 = (function (){var statearr_22005 = state_21993;(statearr_22005[8] = inst_21975);
return statearr_22005;
})();if(cljs.core.truth_(log))
{var statearr_22006_22033 = state_21993__$1;(statearr_22006_22033[1] = 12);
} else
{var statearr_22007_22034 = state_21993__$1;(statearr_22007_22034[1] = 13);
}
return cljs.core.constant$keyword$232;
} else
{if((state_val_21994 === 11))
{var inst_21972 = (state_21993[2]);var state_21993__$1 = state_21993;var statearr_22008_22035 = state_21993__$1;(statearr_22008_22035[2] = inst_21972);
(statearr_22008_22035[1] = 10);
return cljs.core.constant$keyword$232;
} else
{if((state_val_21994 === 12))
{var inst_21967 = (state_21993[7]);var inst_21977 = cljs.core.clj__GT_js(inst_21967);var inst_21978 = console.log(inst_21977);var state_21993__$1 = state_21993;var statearr_22009_22036 = state_21993__$1;(statearr_22009_22036[2] = inst_21978);
(statearr_22009_22036[1] = 14);
return cljs.core.constant$keyword$232;
} else
{if((state_val_21994 === 13))
{var state_21993__$1 = state_21993;var statearr_22010_22037 = state_21993__$1;(statearr_22010_22037[2] = null);
(statearr_22010_22037[1] = 14);
return cljs.core.constant$keyword$232;
} else
{if((state_val_21994 === 14))
{var inst_21967 = (state_21993[7]);var inst_21981 = (state_21993[2]);var state_21993__$1 = (function (){var statearr_22011 = state_21993;(statearr_22011[9] = inst_21981);
return statearr_22011;
})();var statearr_22012_22038 = state_21993__$1;(statearr_22012_22038[2] = inst_21967);
(statearr_22012_22038[1] = 7);
return cljs.core.constant$keyword$232;
} else
{if((state_val_21994 === 15))
{var state_21993__$1 = state_21993;var statearr_22013_22039 = state_21993__$1;(statearr_22013_22039[2] = null);
(statearr_22013_22039[1] = 2);
return cljs.core.constant$keyword$232;
} else
{if((state_val_21994 === 16))
{var state_21993__$1 = state_21993;var statearr_22014_22040 = state_21993__$1;(statearr_22014_22040[2] = null);
(statearr_22014_22040[1] = 17);
return cljs.core.constant$keyword$232;
} else
{if((state_val_21994 === 17))
{var inst_21989 = (state_21993[2]);var state_21993__$1 = state_21993;var statearr_22015_22041 = state_21993__$1;(statearr_22015_22041[2] = inst_21989);
(statearr_22015_22041[1] = 3);
return cljs.core.constant$keyword$232;
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
var state_machine__5507__auto____0 = (function (){var statearr_22019 = [null,null,null,null,null,null,null,null,null,null];(statearr_22019[0] = state_machine__5507__auto__);
(statearr_22019[1] = 1);
return statearr_22019;
});
var state_machine__5507__auto____1 = (function (state_21993){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_21993);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$232))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e22020){if((e22020 instanceof Object))
{var ex__5510__auto__ = e22020;var statearr_22021_22042 = state_21993;(statearr_22021_22042[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_21993);
return cljs.core.constant$keyword$232;
} else
{if(cljs.core.constant$keyword$221)
{throw e22020;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$232))
{{
var G__22043 = state_21993;
state_21993 = G__22043;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_21993){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_21993);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_22022 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_22022[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___22023);
return statearr_22022;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5523__auto__);
}));
return null;
};
var dorun_async = function (ch,var_args){
var p__21904 = null;if (arguments.length > 1) {
  p__21904 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return dorun_async__delegate.call(this,ch,p__21904);};
dorun_async.cljs$lang$maxFixedArity = 1;
dorun_async.cljs$lang$applyTo = (function (arglist__22044){
var ch = cljs.core.first(arglist__22044);
var p__21904 = cljs.core.rest(arglist__22044);
return dorun_async__delegate(ch,p__21904);
});
dorun_async.cljs$core$IFn$_invoke$arity$variadic = dorun_async__delegate;
return dorun_async;
})()
;
