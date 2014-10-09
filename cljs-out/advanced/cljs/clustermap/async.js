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
map_async.cljs$lang$applyTo = (function (arglist__45428){
var f = cljs.core.first(arglist__45428);
var colls = cljs.core.rest(arglist__45428);
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
var dorun_async__delegate = function (ch,p__45429){var map__45489 = p__45429;var map__45489__$1 = ((cljs.core.seq_QMARK_(map__45489))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45489):map__45489);var delay = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45489__$1,cljs.core.constant$keyword$1343);var log = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45489__$1,cljs.core.constant$keyword$1259);var c__5708__auto___45548 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5708__auto___45548,map__45489,map__45489__$1,delay,log){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___45548,map__45489,map__45489__$1,delay,log){
return (function (state_45518){var state_val_45519 = (state_45518[(1)]);if((state_val_45519 === (7)))
{var inst_45509 = (state_45518[(2)]);var state_45518__$1 = state_45518;if(cljs.core.truth_(inst_45509))
{var statearr_45520_45549 = state_45518__$1;(statearr_45520_45549[(1)] = (15));
} else
{var statearr_45521_45550 = state_45518__$1;(statearr_45521_45550[(1)] = (16));
}
return cljs.core.constant$keyword$936;
} else
{if((state_val_45519 === (1)))
{var state_45518__$1 = state_45518;var statearr_45522_45551 = state_45518__$1;(statearr_45522_45551[(2)] = null);
(statearr_45522_45551[(1)] = (2));
return cljs.core.constant$keyword$936;
} else
{if((state_val_45519 === (4)))
{var inst_45492 = (state_45518[(7)]);var inst_45492__$1 = (state_45518[(2)]);var state_45518__$1 = (function (){var statearr_45523 = state_45518;(statearr_45523[(7)] = inst_45492__$1);
return statearr_45523;
})();if(cljs.core.truth_(inst_45492__$1))
{var statearr_45524_45552 = state_45518__$1;(statearr_45524_45552[(1)] = (5));
} else
{var statearr_45525_45553 = state_45518__$1;(statearr_45525_45553[(1)] = (6));
}
return cljs.core.constant$keyword$936;
} else
{if((state_val_45519 === (15)))
{var state_45518__$1 = state_45518;var statearr_45526_45554 = state_45518__$1;(statearr_45526_45554[(2)] = null);
(statearr_45526_45554[(1)] = (2));
return cljs.core.constant$keyword$936;
} else
{if((state_val_45519 === (13)))
{var state_45518__$1 = state_45518;var statearr_45527_45555 = state_45518__$1;(statearr_45527_45555[(2)] = null);
(statearr_45527_45555[(1)] = (14));
return cljs.core.constant$keyword$936;
} else
{if((state_val_45519 === (6)))
{var state_45518__$1 = state_45518;var statearr_45528_45556 = state_45518__$1;(statearr_45528_45556[(2)] = null);
(statearr_45528_45556[(1)] = (7));
return cljs.core.constant$keyword$936;
} else
{if((state_val_45519 === (17)))
{var inst_45514 = (state_45518[(2)]);var state_45518__$1 = state_45518;var statearr_45529_45557 = state_45518__$1;(statearr_45529_45557[(2)] = inst_45514);
(statearr_45529_45557[(1)] = (3));
return cljs.core.constant$keyword$936;
} else
{if((state_val_45519 === (3)))
{var inst_45516 = (state_45518[(2)]);var state_45518__$1 = state_45518;return cljs.core.async.impl.ioc_helpers.return_chan(state_45518__$1,inst_45516);
} else
{if((state_val_45519 === (12)))
{var inst_45492 = (state_45518[(7)]);var inst_45502 = cljs.core.clj__GT_js(inst_45492);var inst_45503 = console.log(inst_45502);var state_45518__$1 = state_45518;var statearr_45530_45558 = state_45518__$1;(statearr_45530_45558[(2)] = inst_45503);
(statearr_45530_45558[(1)] = (14));
return cljs.core.constant$keyword$936;
} else
{if((state_val_45519 === (2)))
{var state_45518__$1 = state_45518;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45518__$1,(4),ch);
} else
{if((state_val_45519 === (11)))
{var inst_45497 = (state_45518[(2)]);var state_45518__$1 = state_45518;var statearr_45531_45559 = state_45518__$1;(statearr_45531_45559[(2)] = inst_45497);
(statearr_45531_45559[(1)] = (10));
return cljs.core.constant$keyword$936;
} else
{if((state_val_45519 === (9)))
{var state_45518__$1 = state_45518;var statearr_45532_45560 = state_45518__$1;(statearr_45532_45560[(2)] = null);
(statearr_45532_45560[(1)] = (10));
return cljs.core.constant$keyword$936;
} else
{if((state_val_45519 === (5)))
{var state_45518__$1 = state_45518;if(cljs.core.truth_(delay))
{var statearr_45533_45561 = state_45518__$1;(statearr_45533_45561[(1)] = (8));
} else
{var statearr_45534_45562 = state_45518__$1;(statearr_45534_45562[(1)] = (9));
}
return cljs.core.constant$keyword$936;
} else
{if((state_val_45519 === (14)))
{var inst_45492 = (state_45518[(7)]);var inst_45506 = (state_45518[(2)]);var state_45518__$1 = (function (){var statearr_45535 = state_45518;(statearr_45535[(8)] = inst_45506);
return statearr_45535;
})();var statearr_45536_45563 = state_45518__$1;(statearr_45536_45563[(2)] = inst_45492);
(statearr_45536_45563[(1)] = (7));
return cljs.core.constant$keyword$936;
} else
{if((state_val_45519 === (16)))
{var state_45518__$1 = state_45518;var statearr_45537_45564 = state_45518__$1;(statearr_45537_45564[(2)] = null);
(statearr_45537_45564[(1)] = (17));
return cljs.core.constant$keyword$936;
} else
{if((state_val_45519 === (10)))
{var inst_45500 = (state_45518[(2)]);var state_45518__$1 = (function (){var statearr_45538 = state_45518;(statearr_45538[(9)] = inst_45500);
return statearr_45538;
})();if(cljs.core.truth_(log))
{var statearr_45539_45565 = state_45518__$1;(statearr_45539_45565[(1)] = (12));
} else
{var statearr_45540_45566 = state_45518__$1;(statearr_45540_45566[(1)] = (13));
}
return cljs.core.constant$keyword$936;
} else
{if((state_val_45519 === (8)))
{var inst_45495 = cljs.core.async.timeout(delay);var state_45518__$1 = state_45518;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45518__$1,(11),inst_45495);
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
});})(c__5708__auto___45548,map__45489,map__45489__$1,delay,log))
;return ((function (switch__5693__auto__,c__5708__auto___45548,map__45489,map__45489__$1,delay,log){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_45544 = [null,null,null,null,null,null,null,null,null,null];(statearr_45544[(0)] = state_machine__5694__auto__);
(statearr_45544[(1)] = (1));
return statearr_45544;
});
var state_machine__5694__auto____1 = (function (state_45518){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__(state_45518);if(cljs.core.keyword_identical_QMARK_(result__5696__auto__,cljs.core.constant$keyword$936))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e45545){if((e45545 instanceof Object))
{var ex__5697__auto__ = e45545;var statearr_45546_45567 = state_45518;(statearr_45546_45567[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_45518);
return cljs.core.constant$keyword$936;
} else
{throw e45545;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5695__auto__,cljs.core.constant$keyword$936))
{{
var G__45568 = state_45518;
state_45518 = G__45568;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_45518){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_45518);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___45548,map__45489,map__45489__$1,delay,log))
})();var state__5710__auto__ = (function (){var statearr_45547 = (f__5709__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5709__auto__.cljs$core$IFn$_invoke$arity$0() : f__5709__auto__.call(null));(statearr_45547[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___45548);
return statearr_45547;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5710__auto__);
});})(c__5708__auto___45548,map__45489,map__45489__$1,delay,log))
);
return null;
};
var dorun_async = function (ch,var_args){
var p__45429 = null;if (arguments.length > 1) {
  p__45429 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return dorun_async__delegate.call(this,ch,p__45429);};
dorun_async.cljs$lang$maxFixedArity = 1;
dorun_async.cljs$lang$applyTo = (function (arglist__45569){
var ch = cljs.core.first(arglist__45569);
var p__45429 = cljs.core.rest(arglist__45569);
return dorun_async__delegate(ch,p__45429);
});
dorun_async.cljs$core$IFn$_invoke$arity$variadic = dorun_async__delegate;
return dorun_async;
})()
;
