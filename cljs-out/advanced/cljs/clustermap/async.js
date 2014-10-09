// Compiled by ClojureScript 0.0-2322
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
map_async.cljs$lang$applyTo = (function (arglist__39241){
var f = cljs.core.first(arglist__39241);
var colls = cljs.core.rest(arglist__39241);
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
var dorun_async__delegate = function (ch,p__39242){var map__39302 = p__39242;var map__39302__$1 = ((cljs.core.seq_QMARK_(map__39302))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39302):map__39302);var delay = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39302__$1,cljs.core.constant$keyword$1246);var log = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39302__$1,cljs.core.constant$keyword$1158);var c__5708__auto___39361 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5708__auto___39361,map__39302,map__39302__$1,delay,log){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___39361,map__39302,map__39302__$1,delay,log){
return (function (state_39331){var state_val_39332 = (state_39331[(1)]);if((state_val_39332 === (7)))
{var inst_39322 = (state_39331[(2)]);var state_39331__$1 = state_39331;if(cljs.core.truth_(inst_39322))
{var statearr_39333_39362 = state_39331__$1;(statearr_39333_39362[(1)] = (15));
} else
{var statearr_39334_39363 = state_39331__$1;(statearr_39334_39363[(1)] = (16));
}
return cljs.core.constant$keyword$872;
} else
{if((state_val_39332 === (1)))
{var state_39331__$1 = state_39331;var statearr_39335_39364 = state_39331__$1;(statearr_39335_39364[(2)] = null);
(statearr_39335_39364[(1)] = (2));
return cljs.core.constant$keyword$872;
} else
{if((state_val_39332 === (4)))
{var inst_39305 = (state_39331[(7)]);var inst_39305__$1 = (state_39331[(2)]);var state_39331__$1 = (function (){var statearr_39336 = state_39331;(statearr_39336[(7)] = inst_39305__$1);
return statearr_39336;
})();if(cljs.core.truth_(inst_39305__$1))
{var statearr_39337_39365 = state_39331__$1;(statearr_39337_39365[(1)] = (5));
} else
{var statearr_39338_39366 = state_39331__$1;(statearr_39338_39366[(1)] = (6));
}
return cljs.core.constant$keyword$872;
} else
{if((state_val_39332 === (15)))
{var state_39331__$1 = state_39331;var statearr_39339_39367 = state_39331__$1;(statearr_39339_39367[(2)] = null);
(statearr_39339_39367[(1)] = (2));
return cljs.core.constant$keyword$872;
} else
{if((state_val_39332 === (13)))
{var state_39331__$1 = state_39331;var statearr_39340_39368 = state_39331__$1;(statearr_39340_39368[(2)] = null);
(statearr_39340_39368[(1)] = (14));
return cljs.core.constant$keyword$872;
} else
{if((state_val_39332 === (6)))
{var state_39331__$1 = state_39331;var statearr_39341_39369 = state_39331__$1;(statearr_39341_39369[(2)] = null);
(statearr_39341_39369[(1)] = (7));
return cljs.core.constant$keyword$872;
} else
{if((state_val_39332 === (17)))
{var inst_39327 = (state_39331[(2)]);var state_39331__$1 = state_39331;var statearr_39342_39370 = state_39331__$1;(statearr_39342_39370[(2)] = inst_39327);
(statearr_39342_39370[(1)] = (3));
return cljs.core.constant$keyword$872;
} else
{if((state_val_39332 === (3)))
{var inst_39329 = (state_39331[(2)]);var state_39331__$1 = state_39331;return cljs.core.async.impl.ioc_helpers.return_chan(state_39331__$1,inst_39329);
} else
{if((state_val_39332 === (12)))
{var inst_39305 = (state_39331[(7)]);var inst_39315 = cljs.core.clj__GT_js(inst_39305);var inst_39316 = console.log(inst_39315);var state_39331__$1 = state_39331;var statearr_39343_39371 = state_39331__$1;(statearr_39343_39371[(2)] = inst_39316);
(statearr_39343_39371[(1)] = (14));
return cljs.core.constant$keyword$872;
} else
{if((state_val_39332 === (2)))
{var state_39331__$1 = state_39331;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_39331__$1,(4),ch);
} else
{if((state_val_39332 === (11)))
{var inst_39310 = (state_39331[(2)]);var state_39331__$1 = state_39331;var statearr_39344_39372 = state_39331__$1;(statearr_39344_39372[(2)] = inst_39310);
(statearr_39344_39372[(1)] = (10));
return cljs.core.constant$keyword$872;
} else
{if((state_val_39332 === (9)))
{var state_39331__$1 = state_39331;var statearr_39345_39373 = state_39331__$1;(statearr_39345_39373[(2)] = null);
(statearr_39345_39373[(1)] = (10));
return cljs.core.constant$keyword$872;
} else
{if((state_val_39332 === (5)))
{var state_39331__$1 = state_39331;if(cljs.core.truth_(delay))
{var statearr_39346_39374 = state_39331__$1;(statearr_39346_39374[(1)] = (8));
} else
{var statearr_39347_39375 = state_39331__$1;(statearr_39347_39375[(1)] = (9));
}
return cljs.core.constant$keyword$872;
} else
{if((state_val_39332 === (14)))
{var inst_39305 = (state_39331[(7)]);var inst_39319 = (state_39331[(2)]);var state_39331__$1 = (function (){var statearr_39348 = state_39331;(statearr_39348[(8)] = inst_39319);
return statearr_39348;
})();var statearr_39349_39376 = state_39331__$1;(statearr_39349_39376[(2)] = inst_39305);
(statearr_39349_39376[(1)] = (7));
return cljs.core.constant$keyword$872;
} else
{if((state_val_39332 === (16)))
{var state_39331__$1 = state_39331;var statearr_39350_39377 = state_39331__$1;(statearr_39350_39377[(2)] = null);
(statearr_39350_39377[(1)] = (17));
return cljs.core.constant$keyword$872;
} else
{if((state_val_39332 === (10)))
{var inst_39313 = (state_39331[(2)]);var state_39331__$1 = (function (){var statearr_39351 = state_39331;(statearr_39351[(9)] = inst_39313);
return statearr_39351;
})();if(cljs.core.truth_(log))
{var statearr_39352_39378 = state_39331__$1;(statearr_39352_39378[(1)] = (12));
} else
{var statearr_39353_39379 = state_39331__$1;(statearr_39353_39379[(1)] = (13));
}
return cljs.core.constant$keyword$872;
} else
{if((state_val_39332 === (8)))
{var inst_39308 = cljs.core.async.timeout(delay);var state_39331__$1 = state_39331;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_39331__$1,(11),inst_39308);
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
});})(c__5708__auto___39361,map__39302,map__39302__$1,delay,log))
;return ((function (switch__5693__auto__,c__5708__auto___39361,map__39302,map__39302__$1,delay,log){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_39357 = [null,null,null,null,null,null,null,null,null,null];(statearr_39357[(0)] = state_machine__5694__auto__);
(statearr_39357[(1)] = (1));
return statearr_39357;
});
var state_machine__5694__auto____1 = (function (state_39331){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__(state_39331);if(cljs.core.keyword_identical_QMARK_(result__5696__auto__,cljs.core.constant$keyword$872))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e39358){if((e39358 instanceof Object))
{var ex__5697__auto__ = e39358;var statearr_39359_39380 = state_39331;(statearr_39359_39380[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_39331);
return cljs.core.constant$keyword$872;
} else
{throw e39358;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5695__auto__,cljs.core.constant$keyword$872))
{{
var G__39381 = state_39331;
state_39331 = G__39381;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_39331){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_39331);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___39361,map__39302,map__39302__$1,delay,log))
})();var state__5710__auto__ = (function (){var statearr_39360 = (f__5709__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5709__auto__.cljs$core$IFn$_invoke$arity$0() : f__5709__auto__.call(null));(statearr_39360[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___39361);
return statearr_39360;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5710__auto__);
});})(c__5708__auto___39361,map__39302,map__39302__$1,delay,log))
);
return null;
};
var dorun_async = function (ch,var_args){
var p__39242 = null;if (arguments.length > 1) {
  p__39242 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return dorun_async__delegate.call(this,ch,p__39242);};
dorun_async.cljs$lang$maxFixedArity = 1;
dorun_async.cljs$lang$applyTo = (function (arglist__39382){
var ch = cljs.core.first(arglist__39382);
var p__39242 = cljs.core.rest(arglist__39382);
return dorun_async__delegate(ch,p__39242);
});
dorun_async.cljs$core$IFn$_invoke$arity$variadic = dorun_async__delegate;
return dorun_async;
})()
;
