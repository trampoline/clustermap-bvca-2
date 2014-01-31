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
map_async.cljs$lang$applyTo = (function (arglist__21248){
var f = cljs.core.first(arglist__21248);
var colls = cljs.core.rest(arglist__21248);
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
var dorun_async__delegate = function (ch,p__21249){var map__21309 = p__21249;var map__21309__$1 = ((cljs.core.seq_QMARK_(map__21309))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21309):map__21309);var delay = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21309__$1,cljs.core.constant$keyword$347);var log = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21309__$1,cljs.core.constant$keyword$363);var c__5521__auto___21368 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_21338){var state_val_21339 = (state_21338[1]);if((state_val_21339 === 1))
{var state_21338__$1 = state_21338;var statearr_21340_21369 = state_21338__$1;(statearr_21340_21369[2] = null);
(statearr_21340_21369[1] = 2);
return cljs.core.constant$keyword$204;
} else
{if((state_val_21339 === 2))
{var state_21338__$1 = state_21338;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_21338__$1,4,ch);
} else
{if((state_val_21339 === 3))
{var inst_21336 = (state_21338[2]);var state_21338__$1 = state_21338;return cljs.core.async.impl.ioc_helpers.return_chan(state_21338__$1,inst_21336);
} else
{if((state_val_21339 === 4))
{var inst_21312 = (state_21338[7]);var inst_21312__$1 = (state_21338[2]);var state_21338__$1 = (function (){var statearr_21341 = state_21338;(statearr_21341[7] = inst_21312__$1);
return statearr_21341;
})();if(cljs.core.truth_(inst_21312__$1))
{var statearr_21342_21370 = state_21338__$1;(statearr_21342_21370[1] = 5);
} else
{var statearr_21343_21371 = state_21338__$1;(statearr_21343_21371[1] = 6);
}
return cljs.core.constant$keyword$204;
} else
{if((state_val_21339 === 5))
{var state_21338__$1 = state_21338;if(cljs.core.truth_(delay))
{var statearr_21344_21372 = state_21338__$1;(statearr_21344_21372[1] = 8);
} else
{var statearr_21345_21373 = state_21338__$1;(statearr_21345_21373[1] = 9);
}
return cljs.core.constant$keyword$204;
} else
{if((state_val_21339 === 6))
{var state_21338__$1 = state_21338;var statearr_21346_21374 = state_21338__$1;(statearr_21346_21374[2] = null);
(statearr_21346_21374[1] = 7);
return cljs.core.constant$keyword$204;
} else
{if((state_val_21339 === 7))
{var inst_21329 = (state_21338[2]);var state_21338__$1 = state_21338;if(cljs.core.truth_(inst_21329))
{var statearr_21347_21375 = state_21338__$1;(statearr_21347_21375[1] = 15);
} else
{var statearr_21348_21376 = state_21338__$1;(statearr_21348_21376[1] = 16);
}
return cljs.core.constant$keyword$204;
} else
{if((state_val_21339 === 8))
{var inst_21315 = cljs.core.async.timeout(delay);var state_21338__$1 = state_21338;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_21338__$1,11,inst_21315);
} else
{if((state_val_21339 === 9))
{var state_21338__$1 = state_21338;var statearr_21349_21377 = state_21338__$1;(statearr_21349_21377[2] = null);
(statearr_21349_21377[1] = 10);
return cljs.core.constant$keyword$204;
} else
{if((state_val_21339 === 10))
{var inst_21320 = (state_21338[2]);var state_21338__$1 = (function (){var statearr_21350 = state_21338;(statearr_21350[8] = inst_21320);
return statearr_21350;
})();if(cljs.core.truth_(log))
{var statearr_21351_21378 = state_21338__$1;(statearr_21351_21378[1] = 12);
} else
{var statearr_21352_21379 = state_21338__$1;(statearr_21352_21379[1] = 13);
}
return cljs.core.constant$keyword$204;
} else
{if((state_val_21339 === 11))
{var inst_21317 = (state_21338[2]);var state_21338__$1 = state_21338;var statearr_21353_21380 = state_21338__$1;(statearr_21353_21380[2] = inst_21317);
(statearr_21353_21380[1] = 10);
return cljs.core.constant$keyword$204;
} else
{if((state_val_21339 === 12))
{var inst_21312 = (state_21338[7]);var inst_21322 = cljs.core.clj__GT_js(inst_21312);var inst_21323 = console.log(inst_21322);var state_21338__$1 = state_21338;var statearr_21354_21381 = state_21338__$1;(statearr_21354_21381[2] = inst_21323);
(statearr_21354_21381[1] = 14);
return cljs.core.constant$keyword$204;
} else
{if((state_val_21339 === 13))
{var state_21338__$1 = state_21338;var statearr_21355_21382 = state_21338__$1;(statearr_21355_21382[2] = null);
(statearr_21355_21382[1] = 14);
return cljs.core.constant$keyword$204;
} else
{if((state_val_21339 === 14))
{var inst_21312 = (state_21338[7]);var inst_21326 = (state_21338[2]);var state_21338__$1 = (function (){var statearr_21356 = state_21338;(statearr_21356[9] = inst_21326);
return statearr_21356;
})();var statearr_21357_21383 = state_21338__$1;(statearr_21357_21383[2] = inst_21312);
(statearr_21357_21383[1] = 7);
return cljs.core.constant$keyword$204;
} else
{if((state_val_21339 === 15))
{var state_21338__$1 = state_21338;var statearr_21358_21384 = state_21338__$1;(statearr_21358_21384[2] = null);
(statearr_21358_21384[1] = 2);
return cljs.core.constant$keyword$204;
} else
{if((state_val_21339 === 16))
{var state_21338__$1 = state_21338;var statearr_21359_21385 = state_21338__$1;(statearr_21359_21385[2] = null);
(statearr_21359_21385[1] = 17);
return cljs.core.constant$keyword$204;
} else
{if((state_val_21339 === 17))
{var inst_21334 = (state_21338[2]);var state_21338__$1 = state_21338;var statearr_21360_21386 = state_21338__$1;(statearr_21360_21386[2] = inst_21334);
(statearr_21360_21386[1] = 3);
return cljs.core.constant$keyword$204;
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
var state_machine__5507__auto____0 = (function (){var statearr_21364 = [null,null,null,null,null,null,null,null,null,null];(statearr_21364[0] = state_machine__5507__auto__);
(statearr_21364[1] = 1);
return statearr_21364;
});
var state_machine__5507__auto____1 = (function (state_21338){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_21338);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$204))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e21365){if((e21365 instanceof Object))
{var ex__5510__auto__ = e21365;var statearr_21366_21387 = state_21338;(statearr_21366_21387[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_21338);
return cljs.core.constant$keyword$204;
} else
{if(cljs.core.constant$keyword$193)
{throw e21365;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$204))
{{
var G__21388 = state_21338;
state_21338 = G__21388;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_21338){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_21338);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_21367 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_21367[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___21368);
return statearr_21367;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5523__auto__);
}));
return null;
};
var dorun_async = function (ch,var_args){
var p__21249 = null;if (arguments.length > 1) {
  p__21249 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return dorun_async__delegate.call(this,ch,p__21249);};
dorun_async.cljs$lang$maxFixedArity = 1;
dorun_async.cljs$lang$applyTo = (function (arglist__21389){
var ch = cljs.core.first(arglist__21389);
var p__21249 = cljs.core.rest(arglist__21389);
return dorun_async__delegate(ch,p__21249);
});
dorun_async.cljs$core$IFn$_invoke$arity$variadic = dorun_async__delegate;
return dorun_async;
})()
;
