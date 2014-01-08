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
map_async.cljs$lang$applyTo = (function (arglist__19372){
var f = cljs.core.first(arglist__19372);
var colls = cljs.core.rest(arglist__19372);
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
var dorun_async__delegate = function (ch,p__19373){var map__19433 = p__19373;var map__19433__$1 = ((cljs.core.seq_QMARK_(map__19433))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19433):map__19433);var delay = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19433__$1,cljs.core.constant$keyword$178);var log = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19433__$1,cljs.core.constant$keyword$179);var c__5521__auto___19492 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_19462){var state_val_19463 = (state_19462[1]);if((state_val_19463 === 1))
{var state_19462__$1 = state_19462;var statearr_19464_19493 = state_19462__$1;(statearr_19464_19493[2] = null);
(statearr_19464_19493[1] = 2);
return cljs.core.constant$keyword$120;
} else
{if((state_val_19463 === 2))
{var state_19462__$1 = state_19462;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19462__$1,4,ch);
} else
{if((state_val_19463 === 3))
{var inst_19460 = (state_19462[2]);var state_19462__$1 = state_19462;return cljs.core.async.impl.ioc_helpers.return_chan(state_19462__$1,inst_19460);
} else
{if((state_val_19463 === 4))
{var inst_19436 = (state_19462[7]);var inst_19436__$1 = (state_19462[2]);var state_19462__$1 = (function (){var statearr_19465 = state_19462;(statearr_19465[7] = inst_19436__$1);
return statearr_19465;
})();if(cljs.core.truth_(inst_19436__$1))
{var statearr_19466_19494 = state_19462__$1;(statearr_19466_19494[1] = 5);
} else
{var statearr_19467_19495 = state_19462__$1;(statearr_19467_19495[1] = 6);
}
return cljs.core.constant$keyword$120;
} else
{if((state_val_19463 === 5))
{var state_19462__$1 = state_19462;if(cljs.core.truth_(delay))
{var statearr_19468_19496 = state_19462__$1;(statearr_19468_19496[1] = 8);
} else
{var statearr_19469_19497 = state_19462__$1;(statearr_19469_19497[1] = 9);
}
return cljs.core.constant$keyword$120;
} else
{if((state_val_19463 === 6))
{var state_19462__$1 = state_19462;var statearr_19470_19498 = state_19462__$1;(statearr_19470_19498[2] = null);
(statearr_19470_19498[1] = 7);
return cljs.core.constant$keyword$120;
} else
{if((state_val_19463 === 7))
{var inst_19453 = (state_19462[2]);var state_19462__$1 = state_19462;if(cljs.core.truth_(inst_19453))
{var statearr_19471_19499 = state_19462__$1;(statearr_19471_19499[1] = 15);
} else
{var statearr_19472_19500 = state_19462__$1;(statearr_19472_19500[1] = 16);
}
return cljs.core.constant$keyword$120;
} else
{if((state_val_19463 === 8))
{var inst_19439 = cljs.core.async.timeout(delay);var state_19462__$1 = state_19462;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19462__$1,11,inst_19439);
} else
{if((state_val_19463 === 9))
{var state_19462__$1 = state_19462;var statearr_19473_19501 = state_19462__$1;(statearr_19473_19501[2] = null);
(statearr_19473_19501[1] = 10);
return cljs.core.constant$keyword$120;
} else
{if((state_val_19463 === 10))
{var inst_19444 = (state_19462[2]);var state_19462__$1 = (function (){var statearr_19474 = state_19462;(statearr_19474[8] = inst_19444);
return statearr_19474;
})();if(cljs.core.truth_(log))
{var statearr_19475_19502 = state_19462__$1;(statearr_19475_19502[1] = 12);
} else
{var statearr_19476_19503 = state_19462__$1;(statearr_19476_19503[1] = 13);
}
return cljs.core.constant$keyword$120;
} else
{if((state_val_19463 === 11))
{var inst_19441 = (state_19462[2]);var state_19462__$1 = state_19462;var statearr_19477_19504 = state_19462__$1;(statearr_19477_19504[2] = inst_19441);
(statearr_19477_19504[1] = 10);
return cljs.core.constant$keyword$120;
} else
{if((state_val_19463 === 12))
{var inst_19436 = (state_19462[7]);var inst_19446 = cljs.core.clj__GT_js(inst_19436);var inst_19447 = console.log(inst_19446);var state_19462__$1 = state_19462;var statearr_19478_19505 = state_19462__$1;(statearr_19478_19505[2] = inst_19447);
(statearr_19478_19505[1] = 14);
return cljs.core.constant$keyword$120;
} else
{if((state_val_19463 === 13))
{var state_19462__$1 = state_19462;var statearr_19479_19506 = state_19462__$1;(statearr_19479_19506[2] = null);
(statearr_19479_19506[1] = 14);
return cljs.core.constant$keyword$120;
} else
{if((state_val_19463 === 14))
{var inst_19436 = (state_19462[7]);var inst_19450 = (state_19462[2]);var state_19462__$1 = (function (){var statearr_19480 = state_19462;(statearr_19480[9] = inst_19450);
return statearr_19480;
})();var statearr_19481_19507 = state_19462__$1;(statearr_19481_19507[2] = inst_19436);
(statearr_19481_19507[1] = 7);
return cljs.core.constant$keyword$120;
} else
{if((state_val_19463 === 15))
{var state_19462__$1 = state_19462;var statearr_19482_19508 = state_19462__$1;(statearr_19482_19508[2] = null);
(statearr_19482_19508[1] = 2);
return cljs.core.constant$keyword$120;
} else
{if((state_val_19463 === 16))
{var state_19462__$1 = state_19462;var statearr_19483_19509 = state_19462__$1;(statearr_19483_19509[2] = null);
(statearr_19483_19509[1] = 17);
return cljs.core.constant$keyword$120;
} else
{if((state_val_19463 === 17))
{var inst_19458 = (state_19462[2]);var state_19462__$1 = state_19462;var statearr_19484_19510 = state_19462__$1;(statearr_19484_19510[2] = inst_19458);
(statearr_19484_19510[1] = 3);
return cljs.core.constant$keyword$120;
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
var state_machine__5507__auto____0 = (function (){var statearr_19488 = [null,null,null,null,null,null,null,null,null,null];(statearr_19488[0] = state_machine__5507__auto__);
(statearr_19488[1] = 1);
return statearr_19488;
});
var state_machine__5507__auto____1 = (function (state_19462){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_19462);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$120))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e19489){if((e19489 instanceof Object))
{var ex__5510__auto__ = e19489;var statearr_19490_19511 = state_19462;(statearr_19490_19511[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_19462);
return cljs.core.constant$keyword$120;
} else
{if(cljs.core.constant$keyword$109)
{throw e19489;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$120))
{{
var G__19512 = state_19462;
state_19462 = G__19512;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_19462){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_19462);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_19491 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_19491[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___19492);
return statearr_19491;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5523__auto__);
}));
return null;
};
var dorun_async = function (ch,var_args){
var p__19373 = null;if (arguments.length > 1) {
  p__19373 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return dorun_async__delegate.call(this,ch,p__19373);};
dorun_async.cljs$lang$maxFixedArity = 1;
dorun_async.cljs$lang$applyTo = (function (arglist__19513){
var ch = cljs.core.first(arglist__19513);
var p__19373 = cljs.core.rest(arglist__19513);
return dorun_async__delegate(ch,p__19373);
});
dorun_async.cljs$core$IFn$_invoke$arity$variadic = dorun_async__delegate;
return dorun_async;
})()
;
