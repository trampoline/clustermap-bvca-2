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
map_async.cljs$lang$applyTo = (function (arglist__20196){
var f = cljs.core.first(arglist__20196);
var colls = cljs.core.rest(arglist__20196);
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
var dorun_async__delegate = function (ch,p__20197){var map__20257 = p__20197;var map__20257__$1 = ((cljs.core.seq_QMARK_(map__20257))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20257):map__20257);var delay = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20257__$1,cljs.core.constant$keyword$202);var log = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20257__$1,cljs.core.constant$keyword$203);var c__5521__auto___20316 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_20286){var state_val_20287 = (state_20286[1]);if((state_val_20287 === 1))
{var state_20286__$1 = state_20286;var statearr_20288_20317 = state_20286__$1;(statearr_20288_20317[2] = null);
(statearr_20288_20317[1] = 2);
return cljs.core.constant$keyword$126;
} else
{if((state_val_20287 === 2))
{var state_20286__$1 = state_20286;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20286__$1,4,ch);
} else
{if((state_val_20287 === 3))
{var inst_20284 = (state_20286[2]);var state_20286__$1 = state_20286;return cljs.core.async.impl.ioc_helpers.return_chan(state_20286__$1,inst_20284);
} else
{if((state_val_20287 === 4))
{var inst_20260 = (state_20286[7]);var inst_20260__$1 = (state_20286[2]);var state_20286__$1 = (function (){var statearr_20289 = state_20286;(statearr_20289[7] = inst_20260__$1);
return statearr_20289;
})();if(cljs.core.truth_(inst_20260__$1))
{var statearr_20290_20318 = state_20286__$1;(statearr_20290_20318[1] = 5);
} else
{var statearr_20291_20319 = state_20286__$1;(statearr_20291_20319[1] = 6);
}
return cljs.core.constant$keyword$126;
} else
{if((state_val_20287 === 5))
{var state_20286__$1 = state_20286;if(cljs.core.truth_(delay))
{var statearr_20292_20320 = state_20286__$1;(statearr_20292_20320[1] = 8);
} else
{var statearr_20293_20321 = state_20286__$1;(statearr_20293_20321[1] = 9);
}
return cljs.core.constant$keyword$126;
} else
{if((state_val_20287 === 6))
{var state_20286__$1 = state_20286;var statearr_20294_20322 = state_20286__$1;(statearr_20294_20322[2] = null);
(statearr_20294_20322[1] = 7);
return cljs.core.constant$keyword$126;
} else
{if((state_val_20287 === 7))
{var inst_20277 = (state_20286[2]);var state_20286__$1 = state_20286;if(cljs.core.truth_(inst_20277))
{var statearr_20295_20323 = state_20286__$1;(statearr_20295_20323[1] = 15);
} else
{var statearr_20296_20324 = state_20286__$1;(statearr_20296_20324[1] = 16);
}
return cljs.core.constant$keyword$126;
} else
{if((state_val_20287 === 8))
{var inst_20263 = cljs.core.async.timeout(delay);var state_20286__$1 = state_20286;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20286__$1,11,inst_20263);
} else
{if((state_val_20287 === 9))
{var state_20286__$1 = state_20286;var statearr_20297_20325 = state_20286__$1;(statearr_20297_20325[2] = null);
(statearr_20297_20325[1] = 10);
return cljs.core.constant$keyword$126;
} else
{if((state_val_20287 === 10))
{var inst_20268 = (state_20286[2]);var state_20286__$1 = (function (){var statearr_20298 = state_20286;(statearr_20298[8] = inst_20268);
return statearr_20298;
})();if(cljs.core.truth_(log))
{var statearr_20299_20326 = state_20286__$1;(statearr_20299_20326[1] = 12);
} else
{var statearr_20300_20327 = state_20286__$1;(statearr_20300_20327[1] = 13);
}
return cljs.core.constant$keyword$126;
} else
{if((state_val_20287 === 11))
{var inst_20265 = (state_20286[2]);var state_20286__$1 = state_20286;var statearr_20301_20328 = state_20286__$1;(statearr_20301_20328[2] = inst_20265);
(statearr_20301_20328[1] = 10);
return cljs.core.constant$keyword$126;
} else
{if((state_val_20287 === 12))
{var inst_20260 = (state_20286[7]);var inst_20270 = cljs.core.clj__GT_js(inst_20260);var inst_20271 = console.log(inst_20270);var state_20286__$1 = state_20286;var statearr_20302_20329 = state_20286__$1;(statearr_20302_20329[2] = inst_20271);
(statearr_20302_20329[1] = 14);
return cljs.core.constant$keyword$126;
} else
{if((state_val_20287 === 13))
{var state_20286__$1 = state_20286;var statearr_20303_20330 = state_20286__$1;(statearr_20303_20330[2] = null);
(statearr_20303_20330[1] = 14);
return cljs.core.constant$keyword$126;
} else
{if((state_val_20287 === 14))
{var inst_20260 = (state_20286[7]);var inst_20274 = (state_20286[2]);var state_20286__$1 = (function (){var statearr_20304 = state_20286;(statearr_20304[9] = inst_20274);
return statearr_20304;
})();var statearr_20305_20331 = state_20286__$1;(statearr_20305_20331[2] = inst_20260);
(statearr_20305_20331[1] = 7);
return cljs.core.constant$keyword$126;
} else
{if((state_val_20287 === 15))
{var state_20286__$1 = state_20286;var statearr_20306_20332 = state_20286__$1;(statearr_20306_20332[2] = null);
(statearr_20306_20332[1] = 2);
return cljs.core.constant$keyword$126;
} else
{if((state_val_20287 === 16))
{var state_20286__$1 = state_20286;var statearr_20307_20333 = state_20286__$1;(statearr_20307_20333[2] = null);
(statearr_20307_20333[1] = 17);
return cljs.core.constant$keyword$126;
} else
{if((state_val_20287 === 17))
{var inst_20282 = (state_20286[2]);var state_20286__$1 = state_20286;var statearr_20308_20334 = state_20286__$1;(statearr_20308_20334[2] = inst_20282);
(statearr_20308_20334[1] = 3);
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
var state_machine__5507__auto____0 = (function (){var statearr_20312 = [null,null,null,null,null,null,null,null,null,null];(statearr_20312[0] = state_machine__5507__auto__);
(statearr_20312[1] = 1);
return statearr_20312;
});
var state_machine__5507__auto____1 = (function (state_20286){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_20286);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$126))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e20313){if((e20313 instanceof Object))
{var ex__5510__auto__ = e20313;var statearr_20314_20335 = state_20286;(statearr_20314_20335[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_20286);
return cljs.core.constant$keyword$126;
} else
{if(cljs.core.constant$keyword$115)
{throw e20313;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$126))
{{
var G__20336 = state_20286;
state_20286 = G__20336;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_20286){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_20286);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_20315 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_20315[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___20316);
return statearr_20315;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5523__auto__);
}));
return null;
};
var dorun_async = function (ch,var_args){
var p__20197 = null;if (arguments.length > 1) {
  p__20197 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return dorun_async__delegate.call(this,ch,p__20197);};
dorun_async.cljs$lang$maxFixedArity = 1;
dorun_async.cljs$lang$applyTo = (function (arglist__20337){
var ch = cljs.core.first(arglist__20337);
var p__20197 = cljs.core.rest(arglist__20337);
return dorun_async__delegate(ch,p__20197);
});
dorun_async.cljs$core$IFn$_invoke$arity$variadic = dorun_async__delegate;
return dorun_async;
})()
;
