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
map_async.cljs$lang$applyTo = (function (arglist__21966){
var f = cljs.core.first(arglist__21966);
var colls = cljs.core.rest(arglist__21966);
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
var dorun_async__delegate = function (ch,p__21967){var map__22027 = p__21967;var map__22027__$1 = ((cljs.core.seq_QMARK_(map__22027))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22027):map__22027);var delay = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22027__$1,cljs.core.constant$keyword$401);var log = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22027__$1,cljs.core.constant$keyword$423);var c__5521__auto___22086 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_22056){var state_val_22057 = (state_22056[1]);if((state_val_22057 === 1))
{var state_22056__$1 = state_22056;var statearr_22058_22087 = state_22056__$1;(statearr_22058_22087[2] = null);
(statearr_22058_22087[1] = 2);
return cljs.core.constant$keyword$234;
} else
{if((state_val_22057 === 2))
{var state_22056__$1 = state_22056;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_22056__$1,4,ch);
} else
{if((state_val_22057 === 3))
{var inst_22054 = (state_22056[2]);var state_22056__$1 = state_22056;return cljs.core.async.impl.ioc_helpers.return_chan(state_22056__$1,inst_22054);
} else
{if((state_val_22057 === 4))
{var inst_22030 = (state_22056[7]);var inst_22030__$1 = (state_22056[2]);var state_22056__$1 = (function (){var statearr_22059 = state_22056;(statearr_22059[7] = inst_22030__$1);
return statearr_22059;
})();if(cljs.core.truth_(inst_22030__$1))
{var statearr_22060_22088 = state_22056__$1;(statearr_22060_22088[1] = 5);
} else
{var statearr_22061_22089 = state_22056__$1;(statearr_22061_22089[1] = 6);
}
return cljs.core.constant$keyword$234;
} else
{if((state_val_22057 === 5))
{var state_22056__$1 = state_22056;if(cljs.core.truth_(delay))
{var statearr_22062_22090 = state_22056__$1;(statearr_22062_22090[1] = 8);
} else
{var statearr_22063_22091 = state_22056__$1;(statearr_22063_22091[1] = 9);
}
return cljs.core.constant$keyword$234;
} else
{if((state_val_22057 === 6))
{var state_22056__$1 = state_22056;var statearr_22064_22092 = state_22056__$1;(statearr_22064_22092[2] = null);
(statearr_22064_22092[1] = 7);
return cljs.core.constant$keyword$234;
} else
{if((state_val_22057 === 7))
{var inst_22047 = (state_22056[2]);var state_22056__$1 = state_22056;if(cljs.core.truth_(inst_22047))
{var statearr_22065_22093 = state_22056__$1;(statearr_22065_22093[1] = 15);
} else
{var statearr_22066_22094 = state_22056__$1;(statearr_22066_22094[1] = 16);
}
return cljs.core.constant$keyword$234;
} else
{if((state_val_22057 === 8))
{var inst_22033 = cljs.core.async.timeout(delay);var state_22056__$1 = state_22056;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_22056__$1,11,inst_22033);
} else
{if((state_val_22057 === 9))
{var state_22056__$1 = state_22056;var statearr_22067_22095 = state_22056__$1;(statearr_22067_22095[2] = null);
(statearr_22067_22095[1] = 10);
return cljs.core.constant$keyword$234;
} else
{if((state_val_22057 === 10))
{var inst_22038 = (state_22056[2]);var state_22056__$1 = (function (){var statearr_22068 = state_22056;(statearr_22068[8] = inst_22038);
return statearr_22068;
})();if(cljs.core.truth_(log))
{var statearr_22069_22096 = state_22056__$1;(statearr_22069_22096[1] = 12);
} else
{var statearr_22070_22097 = state_22056__$1;(statearr_22070_22097[1] = 13);
}
return cljs.core.constant$keyword$234;
} else
{if((state_val_22057 === 11))
{var inst_22035 = (state_22056[2]);var state_22056__$1 = state_22056;var statearr_22071_22098 = state_22056__$1;(statearr_22071_22098[2] = inst_22035);
(statearr_22071_22098[1] = 10);
return cljs.core.constant$keyword$234;
} else
{if((state_val_22057 === 12))
{var inst_22030 = (state_22056[7]);var inst_22040 = cljs.core.clj__GT_js(inst_22030);var inst_22041 = console.log(inst_22040);var state_22056__$1 = state_22056;var statearr_22072_22099 = state_22056__$1;(statearr_22072_22099[2] = inst_22041);
(statearr_22072_22099[1] = 14);
return cljs.core.constant$keyword$234;
} else
{if((state_val_22057 === 13))
{var state_22056__$1 = state_22056;var statearr_22073_22100 = state_22056__$1;(statearr_22073_22100[2] = null);
(statearr_22073_22100[1] = 14);
return cljs.core.constant$keyword$234;
} else
{if((state_val_22057 === 14))
{var inst_22030 = (state_22056[7]);var inst_22044 = (state_22056[2]);var state_22056__$1 = (function (){var statearr_22074 = state_22056;(statearr_22074[9] = inst_22044);
return statearr_22074;
})();var statearr_22075_22101 = state_22056__$1;(statearr_22075_22101[2] = inst_22030);
(statearr_22075_22101[1] = 7);
return cljs.core.constant$keyword$234;
} else
{if((state_val_22057 === 15))
{var state_22056__$1 = state_22056;var statearr_22076_22102 = state_22056__$1;(statearr_22076_22102[2] = null);
(statearr_22076_22102[1] = 2);
return cljs.core.constant$keyword$234;
} else
{if((state_val_22057 === 16))
{var state_22056__$1 = state_22056;var statearr_22077_22103 = state_22056__$1;(statearr_22077_22103[2] = null);
(statearr_22077_22103[1] = 17);
return cljs.core.constant$keyword$234;
} else
{if((state_val_22057 === 17))
{var inst_22052 = (state_22056[2]);var state_22056__$1 = state_22056;var statearr_22078_22104 = state_22056__$1;(statearr_22078_22104[2] = inst_22052);
(statearr_22078_22104[1] = 3);
return cljs.core.constant$keyword$234;
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
var state_machine__5507__auto____0 = (function (){var statearr_22082 = [null,null,null,null,null,null,null,null,null,null];(statearr_22082[0] = state_machine__5507__auto__);
(statearr_22082[1] = 1);
return statearr_22082;
});
var state_machine__5507__auto____1 = (function (state_22056){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_22056);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$234))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e22083){if((e22083 instanceof Object))
{var ex__5510__auto__ = e22083;var statearr_22084_22105 = state_22056;(statearr_22084_22105[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_22056);
return cljs.core.constant$keyword$234;
} else
{if(cljs.core.constant$keyword$223)
{throw e22083;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$234))
{{
var G__22106 = state_22056;
state_22056 = G__22106;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_22056){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_22056);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_22085 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_22085[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___22086);
return statearr_22085;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5523__auto__);
}));
return null;
};
var dorun_async = function (ch,var_args){
var p__21967 = null;if (arguments.length > 1) {
  p__21967 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return dorun_async__delegate.call(this,ch,p__21967);};
dorun_async.cljs$lang$maxFixedArity = 1;
dorun_async.cljs$lang$applyTo = (function (arglist__22107){
var ch = cljs.core.first(arglist__22107);
var p__21967 = cljs.core.rest(arglist__22107);
return dorun_async__delegate(ch,p__21967);
});
dorun_async.cljs$core$IFn$_invoke$arity$variadic = dorun_async__delegate;
return dorun_async;
})()
;
