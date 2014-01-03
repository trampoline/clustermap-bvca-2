// Compiled by ClojureScript 0.0-2080
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
map_async.cljs$lang$applyTo = (function (arglist__15238){
var f = cljs.core.first(arglist__15238);
var colls = cljs.core.rest(arglist__15238);
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
var dorun_async__delegate = function (ch,p__15239){var map__15287 = p__15239;var map__15287__$1 = ((cljs.core.seq_QMARK_(map__15287))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15287):map__15287);var log = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15287__$1,cljs.core.constant$keyword$31);var c__5861__auto___15334 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5862__auto__ = (function (){var switch__5791__auto__ = (function (state_15309){var state_val_15310 = (state_15309[1]);if((state_val_15310 === 1))
{var state_15309__$1 = state_15309;var statearr_15311_15335 = state_15309__$1;(statearr_15311_15335[2] = null);
(statearr_15311_15335[1] = 2);
return cljs.core.constant$keyword$17;
} else
{if((state_val_15310 === 2))
{var state_15309__$1 = state_15309;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15309__$1,4,ch);
} else
{if((state_val_15310 === 3))
{var inst_15307 = (state_15309[2]);var state_15309__$1 = state_15309;return cljs.core.async.impl.ioc_helpers.return_chan(state_15309__$1,inst_15307);
} else
{if((state_val_15310 === 4))
{var inst_15290 = (state_15309[7]);var inst_15290__$1 = (state_15309[2]);var state_15309__$1 = (function (){var statearr_15312 = state_15309;(statearr_15312[7] = inst_15290__$1);
return statearr_15312;
})();if(cljs.core.truth_(inst_15290__$1))
{var statearr_15313_15336 = state_15309__$1;(statearr_15313_15336[1] = 5);
} else
{var statearr_15314_15337 = state_15309__$1;(statearr_15314_15337[1] = 6);
}
return cljs.core.constant$keyword$17;
} else
{if((state_val_15310 === 5))
{var state_15309__$1 = state_15309;if(cljs.core.truth_(log))
{var statearr_15315_15338 = state_15309__$1;(statearr_15315_15338[1] = 8);
} else
{var statearr_15316_15339 = state_15309__$1;(statearr_15316_15339[1] = 9);
}
return cljs.core.constant$keyword$17;
} else
{if((state_val_15310 === 6))
{var state_15309__$1 = state_15309;var statearr_15317_15340 = state_15309__$1;(statearr_15317_15340[2] = null);
(statearr_15317_15340[1] = 7);
return cljs.core.constant$keyword$17;
} else
{if((state_val_15310 === 7))
{var inst_15300 = (state_15309[2]);var state_15309__$1 = state_15309;if(cljs.core.truth_(inst_15300))
{var statearr_15318_15341 = state_15309__$1;(statearr_15318_15341[1] = 11);
} else
{var statearr_15319_15342 = state_15309__$1;(statearr_15319_15342[1] = 12);
}
return cljs.core.constant$keyword$17;
} else
{if((state_val_15310 === 8))
{var inst_15290 = (state_15309[7]);var inst_15293 = cljs.core.clj__GT_js(inst_15290);var inst_15294 = console.log(inst_15293);var state_15309__$1 = state_15309;var statearr_15320_15343 = state_15309__$1;(statearr_15320_15343[2] = inst_15294);
(statearr_15320_15343[1] = 10);
return cljs.core.constant$keyword$17;
} else
{if((state_val_15310 === 9))
{var state_15309__$1 = state_15309;var statearr_15321_15344 = state_15309__$1;(statearr_15321_15344[2] = null);
(statearr_15321_15344[1] = 10);
return cljs.core.constant$keyword$17;
} else
{if((state_val_15310 === 10))
{var inst_15290 = (state_15309[7]);var inst_15297 = (state_15309[2]);var state_15309__$1 = (function (){var statearr_15322 = state_15309;(statearr_15322[8] = inst_15297);
return statearr_15322;
})();var statearr_15323_15345 = state_15309__$1;(statearr_15323_15345[2] = inst_15290);
(statearr_15323_15345[1] = 7);
return cljs.core.constant$keyword$17;
} else
{if((state_val_15310 === 11))
{var state_15309__$1 = state_15309;var statearr_15324_15346 = state_15309__$1;(statearr_15324_15346[2] = null);
(statearr_15324_15346[1] = 2);
return cljs.core.constant$keyword$17;
} else
{if((state_val_15310 === 12))
{var state_15309__$1 = state_15309;var statearr_15325_15347 = state_15309__$1;(statearr_15325_15347[2] = null);
(statearr_15325_15347[1] = 13);
return cljs.core.constant$keyword$17;
} else
{if((state_val_15310 === 13))
{var inst_15305 = (state_15309[2]);var state_15309__$1 = state_15309;var statearr_15326_15348 = state_15309__$1;(statearr_15326_15348[2] = inst_15305);
(statearr_15326_15348[1] = 3);
return cljs.core.constant$keyword$17;
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
});return ((function (switch__5791__auto__){
return (function() {
var state_machine__5792__auto__ = null;
var state_machine__5792__auto____0 = (function (){var statearr_15330 = (new Array(9));(statearr_15330[0] = state_machine__5792__auto__);
(statearr_15330[1] = 1);
return statearr_15330;
});
var state_machine__5792__auto____1 = (function (state_15309){while(true){
var ret_value__5793__auto__ = (function (){try{while(true){
var result__5794__auto__ = switch__5791__auto__(state_15309);if(cljs.core.keyword_identical_QMARK_(result__5794__auto__,cljs.core.constant$keyword$17))
{{
continue;
}
} else
{return result__5794__auto__;
}
break;
}
}catch (e15331){if((e15331 instanceof Object))
{var ex__5795__auto__ = e15331;var statearr_15332_15349 = state_15309;(statearr_15332_15349[5] = ex__5795__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_15309);
return cljs.core.constant$keyword$17;
} else
{if(cljs.core.constant$keyword$6)
{throw e15331;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5793__auto__,cljs.core.constant$keyword$17))
{{
var G__15350 = state_15309;
state_15309 = G__15350;
continue;
}
} else
{return ret_value__5793__auto__;
}
break;
}
});
state_machine__5792__auto__ = function(state_15309){
switch(arguments.length){
case 0:
return state_machine__5792__auto____0.call(this);
case 1:
return state_machine__5792__auto____1.call(this,state_15309);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5792__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5792__auto____0;
state_machine__5792__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5792__auto____1;
return state_machine__5792__auto__;
})()
;})(switch__5791__auto__))
})();var state__5863__auto__ = (function (){var statearr_15333 = (f__5862__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5862__auto__.cljs$core$IFn$_invoke$arity$0() : f__5862__auto__.call(null));(statearr_15333[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5861__auto___15334);
return statearr_15333;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5863__auto__);
}));
return null;
};
var dorun_async = function (ch,var_args){
var p__15239 = null;if (arguments.length > 1) {
  p__15239 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return dorun_async__delegate.call(this,ch,p__15239);};
dorun_async.cljs$lang$maxFixedArity = 1;
dorun_async.cljs$lang$applyTo = (function (arglist__15351){
var ch = cljs.core.first(arglist__15351);
var p__15239 = cljs.core.rest(arglist__15351);
return dorun_async__delegate(ch,p__15239);
});
dorun_async.cljs$core$IFn$_invoke$arity$variadic = dorun_async__delegate;
return dorun_async;
})()
;
