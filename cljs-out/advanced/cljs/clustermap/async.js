// Compiled by ClojureScript 0.0-2268
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
map_async.cljs$lang$applyTo = (function (arglist__37236){
var f = cljs.core.first(arglist__37236);
var colls = cljs.core.rest(arglist__37236);
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
var dorun_async__delegate = function (ch,p__37237){var map__37297 = p__37237;var map__37297__$1 = ((cljs.core.seq_QMARK_(map__37297))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37297):map__37297);var delay = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37297__$1,cljs.core.constant$keyword$1141);var log = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37297__$1,cljs.core.constant$keyword$1053);var c__5691__auto___37356 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5691__auto___37356,map__37297,map__37297__$1,delay,log){
return (function (){var f__5692__auto__ = (function (){var switch__5676__auto__ = ((function (c__5691__auto___37356,map__37297,map__37297__$1,delay,log){
return (function (state_37326){var state_val_37327 = (state_37326[(1)]);if((state_val_37327 === (7)))
{var inst_37317 = (state_37326[(2)]);var state_37326__$1 = state_37326;if(cljs.core.truth_(inst_37317))
{var statearr_37328_37357 = state_37326__$1;(statearr_37328_37357[(1)] = (15));
} else
{var statearr_37329_37358 = state_37326__$1;(statearr_37329_37358[(1)] = (16));
}
return cljs.core.constant$keyword$787;
} else
{if((state_val_37327 === (1)))
{var state_37326__$1 = state_37326;var statearr_37330_37359 = state_37326__$1;(statearr_37330_37359[(2)] = null);
(statearr_37330_37359[(1)] = (2));
return cljs.core.constant$keyword$787;
} else
{if((state_val_37327 === (4)))
{var inst_37300 = (state_37326[(7)]);var inst_37300__$1 = (state_37326[(2)]);var state_37326__$1 = (function (){var statearr_37331 = state_37326;(statearr_37331[(7)] = inst_37300__$1);
return statearr_37331;
})();if(cljs.core.truth_(inst_37300__$1))
{var statearr_37332_37360 = state_37326__$1;(statearr_37332_37360[(1)] = (5));
} else
{var statearr_37333_37361 = state_37326__$1;(statearr_37333_37361[(1)] = (6));
}
return cljs.core.constant$keyword$787;
} else
{if((state_val_37327 === (15)))
{var state_37326__$1 = state_37326;var statearr_37334_37362 = state_37326__$1;(statearr_37334_37362[(2)] = null);
(statearr_37334_37362[(1)] = (2));
return cljs.core.constant$keyword$787;
} else
{if((state_val_37327 === (13)))
{var state_37326__$1 = state_37326;var statearr_37335_37363 = state_37326__$1;(statearr_37335_37363[(2)] = null);
(statearr_37335_37363[(1)] = (14));
return cljs.core.constant$keyword$787;
} else
{if((state_val_37327 === (6)))
{var state_37326__$1 = state_37326;var statearr_37336_37364 = state_37326__$1;(statearr_37336_37364[(2)] = null);
(statearr_37336_37364[(1)] = (7));
return cljs.core.constant$keyword$787;
} else
{if((state_val_37327 === (17)))
{var inst_37322 = (state_37326[(2)]);var state_37326__$1 = state_37326;var statearr_37337_37365 = state_37326__$1;(statearr_37337_37365[(2)] = inst_37322);
(statearr_37337_37365[(1)] = (3));
return cljs.core.constant$keyword$787;
} else
{if((state_val_37327 === (3)))
{var inst_37324 = (state_37326[(2)]);var state_37326__$1 = state_37326;return cljs.core.async.impl.ioc_helpers.return_chan(state_37326__$1,inst_37324);
} else
{if((state_val_37327 === (12)))
{var inst_37300 = (state_37326[(7)]);var inst_37310 = cljs.core.clj__GT_js(inst_37300);var inst_37311 = console.log(inst_37310);var state_37326__$1 = state_37326;var statearr_37338_37366 = state_37326__$1;(statearr_37338_37366[(2)] = inst_37311);
(statearr_37338_37366[(1)] = (14));
return cljs.core.constant$keyword$787;
} else
{if((state_val_37327 === (2)))
{var state_37326__$1 = state_37326;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37326__$1,(4),ch);
} else
{if((state_val_37327 === (11)))
{var inst_37305 = (state_37326[(2)]);var state_37326__$1 = state_37326;var statearr_37339_37367 = state_37326__$1;(statearr_37339_37367[(2)] = inst_37305);
(statearr_37339_37367[(1)] = (10));
return cljs.core.constant$keyword$787;
} else
{if((state_val_37327 === (9)))
{var state_37326__$1 = state_37326;var statearr_37340_37368 = state_37326__$1;(statearr_37340_37368[(2)] = null);
(statearr_37340_37368[(1)] = (10));
return cljs.core.constant$keyword$787;
} else
{if((state_val_37327 === (5)))
{var state_37326__$1 = state_37326;if(cljs.core.truth_(delay))
{var statearr_37341_37369 = state_37326__$1;(statearr_37341_37369[(1)] = (8));
} else
{var statearr_37342_37370 = state_37326__$1;(statearr_37342_37370[(1)] = (9));
}
return cljs.core.constant$keyword$787;
} else
{if((state_val_37327 === (14)))
{var inst_37300 = (state_37326[(7)]);var inst_37314 = (state_37326[(2)]);var state_37326__$1 = (function (){var statearr_37343 = state_37326;(statearr_37343[(8)] = inst_37314);
return statearr_37343;
})();var statearr_37344_37371 = state_37326__$1;(statearr_37344_37371[(2)] = inst_37300);
(statearr_37344_37371[(1)] = (7));
return cljs.core.constant$keyword$787;
} else
{if((state_val_37327 === (16)))
{var state_37326__$1 = state_37326;var statearr_37345_37372 = state_37326__$1;(statearr_37345_37372[(2)] = null);
(statearr_37345_37372[(1)] = (17));
return cljs.core.constant$keyword$787;
} else
{if((state_val_37327 === (10)))
{var inst_37308 = (state_37326[(2)]);var state_37326__$1 = (function (){var statearr_37346 = state_37326;(statearr_37346[(9)] = inst_37308);
return statearr_37346;
})();if(cljs.core.truth_(log))
{var statearr_37347_37373 = state_37326__$1;(statearr_37347_37373[(1)] = (12));
} else
{var statearr_37348_37374 = state_37326__$1;(statearr_37348_37374[(1)] = (13));
}
return cljs.core.constant$keyword$787;
} else
{if((state_val_37327 === (8)))
{var inst_37303 = cljs.core.async.timeout(delay);var state_37326__$1 = state_37326;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37326__$1,(11),inst_37303);
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
});})(c__5691__auto___37356,map__37297,map__37297__$1,delay,log))
;return ((function (switch__5676__auto__,c__5691__auto___37356,map__37297,map__37297__$1,delay,log){
return (function() {
var state_machine__5677__auto__ = null;
var state_machine__5677__auto____0 = (function (){var statearr_37352 = [null,null,null,null,null,null,null,null,null,null];(statearr_37352[(0)] = state_machine__5677__auto__);
(statearr_37352[(1)] = (1));
return statearr_37352;
});
var state_machine__5677__auto____1 = (function (state_37326){while(true){
var ret_value__5678__auto__ = (function (){try{while(true){
var result__5679__auto__ = switch__5676__auto__(state_37326);if(cljs.core.keyword_identical_QMARK_(result__5679__auto__,cljs.core.constant$keyword$787))
{{
continue;
}
} else
{return result__5679__auto__;
}
break;
}
}catch (e37353){if((e37353 instanceof Object))
{var ex__5680__auto__ = e37353;var statearr_37354_37375 = state_37326;(statearr_37354_37375[(5)] = ex__5680__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_37326);
return cljs.core.constant$keyword$787;
} else
{if(cljs.core.constant$keyword$778)
{throw e37353;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5678__auto__,cljs.core.constant$keyword$787))
{{
var G__37376 = state_37326;
state_37326 = G__37376;
continue;
}
} else
{return ret_value__5678__auto__;
}
break;
}
});
state_machine__5677__auto__ = function(state_37326){
switch(arguments.length){
case 0:
return state_machine__5677__auto____0.call(this);
case 1:
return state_machine__5677__auto____1.call(this,state_37326);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5677__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5677__auto____0;
state_machine__5677__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5677__auto____1;
return state_machine__5677__auto__;
})()
;})(switch__5676__auto__,c__5691__auto___37356,map__37297,map__37297__$1,delay,log))
})();var state__5693__auto__ = (function (){var statearr_37355 = (f__5692__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5692__auto__.cljs$core$IFn$_invoke$arity$0() : f__5692__auto__.call(null));(statearr_37355[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5691__auto___37356);
return statearr_37355;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5693__auto__);
});})(c__5691__auto___37356,map__37297,map__37297__$1,delay,log))
);
return null;
};
var dorun_async = function (ch,var_args){
var p__37237 = null;if (arguments.length > 1) {
  p__37237 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return dorun_async__delegate.call(this,ch,p__37237);};
dorun_async.cljs$lang$maxFixedArity = 1;
dorun_async.cljs$lang$applyTo = (function (arglist__37377){
var ch = cljs.core.first(arglist__37377);
var p__37237 = cljs.core.rest(arglist__37377);
return dorun_async__delegate(ch,p__37237);
});
dorun_async.cljs$core$IFn$_invoke$arity$variadic = dorun_async__delegate;
return dorun_async;
})()
;
