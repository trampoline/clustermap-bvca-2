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
map_async.cljs$lang$applyTo = (function (arglist__19439){
var f = cljs.core.first(arglist__19439);
var colls = cljs.core.rest(arglist__19439);
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
var dorun_async__delegate = function (ch,p__19440){var map__19500 = p__19440;var map__19500__$1 = ((cljs.core.seq_QMARK_(map__19500))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19500):map__19500);var delay = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19500__$1,cljs.core.constant$keyword$185);var log = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19500__$1,cljs.core.constant$keyword$186);var c__5521__auto___19559 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_19529){var state_val_19530 = (state_19529[1]);if((state_val_19530 === 1))
{var state_19529__$1 = state_19529;var statearr_19531_19560 = state_19529__$1;(statearr_19531_19560[2] = null);
(statearr_19531_19560[1] = 2);
return cljs.core.constant$keyword$123;
} else
{if((state_val_19530 === 2))
{var state_19529__$1 = state_19529;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19529__$1,4,ch);
} else
{if((state_val_19530 === 3))
{var inst_19527 = (state_19529[2]);var state_19529__$1 = state_19529;return cljs.core.async.impl.ioc_helpers.return_chan(state_19529__$1,inst_19527);
} else
{if((state_val_19530 === 4))
{var inst_19503 = (state_19529[7]);var inst_19503__$1 = (state_19529[2]);var state_19529__$1 = (function (){var statearr_19532 = state_19529;(statearr_19532[7] = inst_19503__$1);
return statearr_19532;
})();if(cljs.core.truth_(inst_19503__$1))
{var statearr_19533_19561 = state_19529__$1;(statearr_19533_19561[1] = 5);
} else
{var statearr_19534_19562 = state_19529__$1;(statearr_19534_19562[1] = 6);
}
return cljs.core.constant$keyword$123;
} else
{if((state_val_19530 === 5))
{var state_19529__$1 = state_19529;if(cljs.core.truth_(delay))
{var statearr_19535_19563 = state_19529__$1;(statearr_19535_19563[1] = 8);
} else
{var statearr_19536_19564 = state_19529__$1;(statearr_19536_19564[1] = 9);
}
return cljs.core.constant$keyword$123;
} else
{if((state_val_19530 === 6))
{var state_19529__$1 = state_19529;var statearr_19537_19565 = state_19529__$1;(statearr_19537_19565[2] = null);
(statearr_19537_19565[1] = 7);
return cljs.core.constant$keyword$123;
} else
{if((state_val_19530 === 7))
{var inst_19520 = (state_19529[2]);var state_19529__$1 = state_19529;if(cljs.core.truth_(inst_19520))
{var statearr_19538_19566 = state_19529__$1;(statearr_19538_19566[1] = 15);
} else
{var statearr_19539_19567 = state_19529__$1;(statearr_19539_19567[1] = 16);
}
return cljs.core.constant$keyword$123;
} else
{if((state_val_19530 === 8))
{var inst_19506 = cljs.core.async.timeout(delay);var state_19529__$1 = state_19529;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19529__$1,11,inst_19506);
} else
{if((state_val_19530 === 9))
{var state_19529__$1 = state_19529;var statearr_19540_19568 = state_19529__$1;(statearr_19540_19568[2] = null);
(statearr_19540_19568[1] = 10);
return cljs.core.constant$keyword$123;
} else
{if((state_val_19530 === 10))
{var inst_19511 = (state_19529[2]);var state_19529__$1 = (function (){var statearr_19541 = state_19529;(statearr_19541[8] = inst_19511);
return statearr_19541;
})();if(cljs.core.truth_(log))
{var statearr_19542_19569 = state_19529__$1;(statearr_19542_19569[1] = 12);
} else
{var statearr_19543_19570 = state_19529__$1;(statearr_19543_19570[1] = 13);
}
return cljs.core.constant$keyword$123;
} else
{if((state_val_19530 === 11))
{var inst_19508 = (state_19529[2]);var state_19529__$1 = state_19529;var statearr_19544_19571 = state_19529__$1;(statearr_19544_19571[2] = inst_19508);
(statearr_19544_19571[1] = 10);
return cljs.core.constant$keyword$123;
} else
{if((state_val_19530 === 12))
{var inst_19503 = (state_19529[7]);var inst_19513 = cljs.core.clj__GT_js(inst_19503);var inst_19514 = console.log(inst_19513);var state_19529__$1 = state_19529;var statearr_19545_19572 = state_19529__$1;(statearr_19545_19572[2] = inst_19514);
(statearr_19545_19572[1] = 14);
return cljs.core.constant$keyword$123;
} else
{if((state_val_19530 === 13))
{var state_19529__$1 = state_19529;var statearr_19546_19573 = state_19529__$1;(statearr_19546_19573[2] = null);
(statearr_19546_19573[1] = 14);
return cljs.core.constant$keyword$123;
} else
{if((state_val_19530 === 14))
{var inst_19503 = (state_19529[7]);var inst_19517 = (state_19529[2]);var state_19529__$1 = (function (){var statearr_19547 = state_19529;(statearr_19547[9] = inst_19517);
return statearr_19547;
})();var statearr_19548_19574 = state_19529__$1;(statearr_19548_19574[2] = inst_19503);
(statearr_19548_19574[1] = 7);
return cljs.core.constant$keyword$123;
} else
{if((state_val_19530 === 15))
{var state_19529__$1 = state_19529;var statearr_19549_19575 = state_19529__$1;(statearr_19549_19575[2] = null);
(statearr_19549_19575[1] = 2);
return cljs.core.constant$keyword$123;
} else
{if((state_val_19530 === 16))
{var state_19529__$1 = state_19529;var statearr_19550_19576 = state_19529__$1;(statearr_19550_19576[2] = null);
(statearr_19550_19576[1] = 17);
return cljs.core.constant$keyword$123;
} else
{if((state_val_19530 === 17))
{var inst_19525 = (state_19529[2]);var state_19529__$1 = state_19529;var statearr_19551_19577 = state_19529__$1;(statearr_19551_19577[2] = inst_19525);
(statearr_19551_19577[1] = 3);
return cljs.core.constant$keyword$123;
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
var state_machine__5507__auto____0 = (function (){var statearr_19555 = [null,null,null,null,null,null,null,null,null,null];(statearr_19555[0] = state_machine__5507__auto__);
(statearr_19555[1] = 1);
return statearr_19555;
});
var state_machine__5507__auto____1 = (function (state_19529){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_19529);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$123))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e19556){if((e19556 instanceof Object))
{var ex__5510__auto__ = e19556;var statearr_19557_19578 = state_19529;(statearr_19557_19578[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_19529);
return cljs.core.constant$keyword$123;
} else
{if(cljs.core.constant$keyword$112)
{throw e19556;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$123))
{{
var G__19579 = state_19529;
state_19529 = G__19579;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_19529){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_19529);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_19558 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_19558[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___19559);
return statearr_19558;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5523__auto__);
}));
return null;
};
var dorun_async = function (ch,var_args){
var p__19440 = null;if (arguments.length > 1) {
  p__19440 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return dorun_async__delegate.call(this,ch,p__19440);};
dorun_async.cljs$lang$maxFixedArity = 1;
dorun_async.cljs$lang$applyTo = (function (arglist__19580){
var ch = cljs.core.first(arglist__19580);
var p__19440 = cljs.core.rest(arglist__19580);
return dorun_async__delegate(ch,p__19440);
});
dorun_async.cljs$core$IFn$_invoke$arity$variadic = dorun_async__delegate;
return dorun_async;
})()
;
