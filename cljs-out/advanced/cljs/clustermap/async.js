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
map_async.cljs$lang$applyTo = (function (arglist__20451){
var f = cljs.core.first(arglist__20451);
var colls = cljs.core.rest(arglist__20451);
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
var dorun_async__delegate = function (ch,p__20452){var map__20512 = p__20452;var map__20512__$1 = ((cljs.core.seq_QMARK_(map__20512))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20512):map__20512);var delay = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20512__$1,cljs.core.constant$keyword$216);var log = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20512__$1,cljs.core.constant$keyword$217);var c__5521__auto___20571 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_20541){var state_val_20542 = (state_20541[1]);if((state_val_20542 === 1))
{var state_20541__$1 = state_20541;var statearr_20543_20572 = state_20541__$1;(statearr_20543_20572[2] = null);
(statearr_20543_20572[1] = 2);
return cljs.core.constant$keyword$135;
} else
{if((state_val_20542 === 2))
{var state_20541__$1 = state_20541;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20541__$1,4,ch);
} else
{if((state_val_20542 === 3))
{var inst_20539 = (state_20541[2]);var state_20541__$1 = state_20541;return cljs.core.async.impl.ioc_helpers.return_chan(state_20541__$1,inst_20539);
} else
{if((state_val_20542 === 4))
{var inst_20515 = (state_20541[7]);var inst_20515__$1 = (state_20541[2]);var state_20541__$1 = (function (){var statearr_20544 = state_20541;(statearr_20544[7] = inst_20515__$1);
return statearr_20544;
})();if(cljs.core.truth_(inst_20515__$1))
{var statearr_20545_20573 = state_20541__$1;(statearr_20545_20573[1] = 5);
} else
{var statearr_20546_20574 = state_20541__$1;(statearr_20546_20574[1] = 6);
}
return cljs.core.constant$keyword$135;
} else
{if((state_val_20542 === 5))
{var state_20541__$1 = state_20541;if(cljs.core.truth_(delay))
{var statearr_20547_20575 = state_20541__$1;(statearr_20547_20575[1] = 8);
} else
{var statearr_20548_20576 = state_20541__$1;(statearr_20548_20576[1] = 9);
}
return cljs.core.constant$keyword$135;
} else
{if((state_val_20542 === 6))
{var state_20541__$1 = state_20541;var statearr_20549_20577 = state_20541__$1;(statearr_20549_20577[2] = null);
(statearr_20549_20577[1] = 7);
return cljs.core.constant$keyword$135;
} else
{if((state_val_20542 === 7))
{var inst_20532 = (state_20541[2]);var state_20541__$1 = state_20541;if(cljs.core.truth_(inst_20532))
{var statearr_20550_20578 = state_20541__$1;(statearr_20550_20578[1] = 15);
} else
{var statearr_20551_20579 = state_20541__$1;(statearr_20551_20579[1] = 16);
}
return cljs.core.constant$keyword$135;
} else
{if((state_val_20542 === 8))
{var inst_20518 = cljs.core.async.timeout(delay);var state_20541__$1 = state_20541;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20541__$1,11,inst_20518);
} else
{if((state_val_20542 === 9))
{var state_20541__$1 = state_20541;var statearr_20552_20580 = state_20541__$1;(statearr_20552_20580[2] = null);
(statearr_20552_20580[1] = 10);
return cljs.core.constant$keyword$135;
} else
{if((state_val_20542 === 10))
{var inst_20523 = (state_20541[2]);var state_20541__$1 = (function (){var statearr_20553 = state_20541;(statearr_20553[8] = inst_20523);
return statearr_20553;
})();if(cljs.core.truth_(log))
{var statearr_20554_20581 = state_20541__$1;(statearr_20554_20581[1] = 12);
} else
{var statearr_20555_20582 = state_20541__$1;(statearr_20555_20582[1] = 13);
}
return cljs.core.constant$keyword$135;
} else
{if((state_val_20542 === 11))
{var inst_20520 = (state_20541[2]);var state_20541__$1 = state_20541;var statearr_20556_20583 = state_20541__$1;(statearr_20556_20583[2] = inst_20520);
(statearr_20556_20583[1] = 10);
return cljs.core.constant$keyword$135;
} else
{if((state_val_20542 === 12))
{var inst_20515 = (state_20541[7]);var inst_20525 = cljs.core.clj__GT_js(inst_20515);var inst_20526 = console.log(inst_20525);var state_20541__$1 = state_20541;var statearr_20557_20584 = state_20541__$1;(statearr_20557_20584[2] = inst_20526);
(statearr_20557_20584[1] = 14);
return cljs.core.constant$keyword$135;
} else
{if((state_val_20542 === 13))
{var state_20541__$1 = state_20541;var statearr_20558_20585 = state_20541__$1;(statearr_20558_20585[2] = null);
(statearr_20558_20585[1] = 14);
return cljs.core.constant$keyword$135;
} else
{if((state_val_20542 === 14))
{var inst_20515 = (state_20541[7]);var inst_20529 = (state_20541[2]);var state_20541__$1 = (function (){var statearr_20559 = state_20541;(statearr_20559[9] = inst_20529);
return statearr_20559;
})();var statearr_20560_20586 = state_20541__$1;(statearr_20560_20586[2] = inst_20515);
(statearr_20560_20586[1] = 7);
return cljs.core.constant$keyword$135;
} else
{if((state_val_20542 === 15))
{var state_20541__$1 = state_20541;var statearr_20561_20587 = state_20541__$1;(statearr_20561_20587[2] = null);
(statearr_20561_20587[1] = 2);
return cljs.core.constant$keyword$135;
} else
{if((state_val_20542 === 16))
{var state_20541__$1 = state_20541;var statearr_20562_20588 = state_20541__$1;(statearr_20562_20588[2] = null);
(statearr_20562_20588[1] = 17);
return cljs.core.constant$keyword$135;
} else
{if((state_val_20542 === 17))
{var inst_20537 = (state_20541[2]);var state_20541__$1 = state_20541;var statearr_20563_20589 = state_20541__$1;(statearr_20563_20589[2] = inst_20537);
(statearr_20563_20589[1] = 3);
return cljs.core.constant$keyword$135;
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
var state_machine__5507__auto____0 = (function (){var statearr_20567 = [null,null,null,null,null,null,null,null,null,null];(statearr_20567[0] = state_machine__5507__auto__);
(statearr_20567[1] = 1);
return statearr_20567;
});
var state_machine__5507__auto____1 = (function (state_20541){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_20541);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$135))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e20568){if((e20568 instanceof Object))
{var ex__5510__auto__ = e20568;var statearr_20569_20590 = state_20541;(statearr_20569_20590[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_20541);
return cljs.core.constant$keyword$135;
} else
{if(cljs.core.constant$keyword$124)
{throw e20568;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$135))
{{
var G__20591 = state_20541;
state_20541 = G__20591;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_20541){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_20541);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_20570 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_20570[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___20571);
return statearr_20570;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5523__auto__);
}));
return null;
};
var dorun_async = function (ch,var_args){
var p__20452 = null;if (arguments.length > 1) {
  p__20452 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return dorun_async__delegate.call(this,ch,p__20452);};
dorun_async.cljs$lang$maxFixedArity = 1;
dorun_async.cljs$lang$applyTo = (function (arglist__20592){
var ch = cljs.core.first(arglist__20592);
var p__20452 = cljs.core.rest(arglist__20592);
return dorun_async__delegate(ch,p__20452);
});
dorun_async.cljs$core$IFn$_invoke$arity$variadic = dorun_async__delegate;
return dorun_async;
})()
;
