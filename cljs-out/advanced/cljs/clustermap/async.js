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
map_async.cljs$lang$applyTo = (function (arglist__20364){
var f = cljs.core.first(arglist__20364);
var colls = cljs.core.rest(arglist__20364);
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
var dorun_async__delegate = function (ch,p__20365){var map__20425 = p__20365;var map__20425__$1 = ((cljs.core.seq_QMARK_(map__20425))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20425):map__20425);var delay = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20425__$1,cljs.core.constant$keyword$183);var log = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20425__$1,cljs.core.constant$keyword$184);var c__5521__auto___20484 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_20454){var state_val_20455 = (state_20454[1]);if((state_val_20455 === 1))
{var state_20454__$1 = state_20454;var statearr_20456_20485 = state_20454__$1;(statearr_20456_20485[2] = null);
(statearr_20456_20485[1] = 2);
return cljs.core.constant$keyword$126;
} else
{if((state_val_20455 === 2))
{var state_20454__$1 = state_20454;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20454__$1,4,ch);
} else
{if((state_val_20455 === 3))
{var inst_20452 = (state_20454[2]);var state_20454__$1 = state_20454;return cljs.core.async.impl.ioc_helpers.return_chan(state_20454__$1,inst_20452);
} else
{if((state_val_20455 === 4))
{var inst_20428 = (state_20454[7]);var inst_20428__$1 = (state_20454[2]);var state_20454__$1 = (function (){var statearr_20457 = state_20454;(statearr_20457[7] = inst_20428__$1);
return statearr_20457;
})();if(cljs.core.truth_(inst_20428__$1))
{var statearr_20458_20486 = state_20454__$1;(statearr_20458_20486[1] = 5);
} else
{var statearr_20459_20487 = state_20454__$1;(statearr_20459_20487[1] = 6);
}
return cljs.core.constant$keyword$126;
} else
{if((state_val_20455 === 5))
{var state_20454__$1 = state_20454;if(cljs.core.truth_(delay))
{var statearr_20460_20488 = state_20454__$1;(statearr_20460_20488[1] = 8);
} else
{var statearr_20461_20489 = state_20454__$1;(statearr_20461_20489[1] = 9);
}
return cljs.core.constant$keyword$126;
} else
{if((state_val_20455 === 6))
{var state_20454__$1 = state_20454;var statearr_20462_20490 = state_20454__$1;(statearr_20462_20490[2] = null);
(statearr_20462_20490[1] = 7);
return cljs.core.constant$keyword$126;
} else
{if((state_val_20455 === 7))
{var inst_20445 = (state_20454[2]);var state_20454__$1 = state_20454;if(cljs.core.truth_(inst_20445))
{var statearr_20463_20491 = state_20454__$1;(statearr_20463_20491[1] = 15);
} else
{var statearr_20464_20492 = state_20454__$1;(statearr_20464_20492[1] = 16);
}
return cljs.core.constant$keyword$126;
} else
{if((state_val_20455 === 8))
{var inst_20431 = cljs.core.async.timeout(delay);var state_20454__$1 = state_20454;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20454__$1,11,inst_20431);
} else
{if((state_val_20455 === 9))
{var state_20454__$1 = state_20454;var statearr_20465_20493 = state_20454__$1;(statearr_20465_20493[2] = null);
(statearr_20465_20493[1] = 10);
return cljs.core.constant$keyword$126;
} else
{if((state_val_20455 === 10))
{var inst_20436 = (state_20454[2]);var state_20454__$1 = (function (){var statearr_20466 = state_20454;(statearr_20466[8] = inst_20436);
return statearr_20466;
})();if(cljs.core.truth_(log))
{var statearr_20467_20494 = state_20454__$1;(statearr_20467_20494[1] = 12);
} else
{var statearr_20468_20495 = state_20454__$1;(statearr_20468_20495[1] = 13);
}
return cljs.core.constant$keyword$126;
} else
{if((state_val_20455 === 11))
{var inst_20433 = (state_20454[2]);var state_20454__$1 = state_20454;var statearr_20469_20496 = state_20454__$1;(statearr_20469_20496[2] = inst_20433);
(statearr_20469_20496[1] = 10);
return cljs.core.constant$keyword$126;
} else
{if((state_val_20455 === 12))
{var inst_20428 = (state_20454[7]);var inst_20438 = cljs.core.clj__GT_js(inst_20428);var inst_20439 = console.log(inst_20438);var state_20454__$1 = state_20454;var statearr_20470_20497 = state_20454__$1;(statearr_20470_20497[2] = inst_20439);
(statearr_20470_20497[1] = 14);
return cljs.core.constant$keyword$126;
} else
{if((state_val_20455 === 13))
{var state_20454__$1 = state_20454;var statearr_20471_20498 = state_20454__$1;(statearr_20471_20498[2] = null);
(statearr_20471_20498[1] = 14);
return cljs.core.constant$keyword$126;
} else
{if((state_val_20455 === 14))
{var inst_20428 = (state_20454[7]);var inst_20442 = (state_20454[2]);var state_20454__$1 = (function (){var statearr_20472 = state_20454;(statearr_20472[9] = inst_20442);
return statearr_20472;
})();var statearr_20473_20499 = state_20454__$1;(statearr_20473_20499[2] = inst_20428);
(statearr_20473_20499[1] = 7);
return cljs.core.constant$keyword$126;
} else
{if((state_val_20455 === 15))
{var state_20454__$1 = state_20454;var statearr_20474_20500 = state_20454__$1;(statearr_20474_20500[2] = null);
(statearr_20474_20500[1] = 2);
return cljs.core.constant$keyword$126;
} else
{if((state_val_20455 === 16))
{var state_20454__$1 = state_20454;var statearr_20475_20501 = state_20454__$1;(statearr_20475_20501[2] = null);
(statearr_20475_20501[1] = 17);
return cljs.core.constant$keyword$126;
} else
{if((state_val_20455 === 17))
{var inst_20450 = (state_20454[2]);var state_20454__$1 = state_20454;var statearr_20476_20502 = state_20454__$1;(statearr_20476_20502[2] = inst_20450);
(statearr_20476_20502[1] = 3);
return cljs.core.constant$keyword$126;
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
var state_machine__5507__auto____0 = (function (){var statearr_20480 = [null,null,null,null,null,null,null,null,null,null];(statearr_20480[0] = state_machine__5507__auto__);
(statearr_20480[1] = 1);
return statearr_20480;
});
var state_machine__5507__auto____1 = (function (state_20454){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_20454);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$126))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e20481){if((e20481 instanceof Object))
{var ex__5510__auto__ = e20481;var statearr_20482_20503 = state_20454;(statearr_20482_20503[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_20454);
return cljs.core.constant$keyword$126;
} else
{if(cljs.core.constant$keyword$115)
{throw e20481;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$126))
{{
var G__20504 = state_20454;
state_20454 = G__20504;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_20454){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_20454);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_20483 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_20483[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___20484);
return statearr_20483;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5523__auto__);
}));
return null;
};
var dorun_async = function (ch,var_args){
var p__20365 = null;if (arguments.length > 1) {
  p__20365 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return dorun_async__delegate.call(this,ch,p__20365);};
dorun_async.cljs$lang$maxFixedArity = 1;
dorun_async.cljs$lang$applyTo = (function (arglist__20505){
var ch = cljs.core.first(arglist__20505);
var p__20365 = cljs.core.rest(arglist__20505);
return dorun_async__delegate(ch,p__20365);
});
dorun_async.cljs$core$IFn$_invoke$arity$variadic = dorun_async__delegate;
return dorun_async;
})()
;
