// Compiled by ClojureScript 0.0-2227
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
map_async.cljs$lang$applyTo = (function (arglist__34319){
var f = cljs.core.first(arglist__34319);
var colls = cljs.core.rest(arglist__34319);
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
var dorun_async__delegate = function (ch,p__34320){var map__34380 = p__34320;var map__34380__$1 = ((cljs.core.seq_QMARK_(map__34380))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34380):map__34380);var delay = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34380__$1,cljs.core.constant$keyword$850);var log = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34380__$1,cljs.core.constant$keyword$851);var c__5691__auto___34439 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run(((function (c__5691__auto___34439,map__34380,map__34380__$1,delay,log){
return (function (){var f__5692__auto__ = (function (){var switch__5676__auto__ = ((function (c__5691__auto___34439,map__34380,map__34380__$1,delay,log){
return (function (state_34409){var state_val_34410 = (state_34409[1]);if((state_val_34410 === 7))
{var inst_34400 = (state_34409[2]);var state_34409__$1 = state_34409;if(cljs.core.truth_(inst_34400))
{var statearr_34411_34440 = state_34409__$1;(statearr_34411_34440[1] = 15);
} else
{var statearr_34412_34441 = state_34409__$1;(statearr_34412_34441[1] = 16);
}
return cljs.core.constant$keyword$591;
} else
{if((state_val_34410 === 1))
{var state_34409__$1 = state_34409;var statearr_34413_34442 = state_34409__$1;(statearr_34413_34442[2] = null);
(statearr_34413_34442[1] = 2);
return cljs.core.constant$keyword$591;
} else
{if((state_val_34410 === 4))
{var inst_34383 = (state_34409[7]);var inst_34383__$1 = (state_34409[2]);var state_34409__$1 = (function (){var statearr_34414 = state_34409;(statearr_34414[7] = inst_34383__$1);
return statearr_34414;
})();if(cljs.core.truth_(inst_34383__$1))
{var statearr_34415_34443 = state_34409__$1;(statearr_34415_34443[1] = 5);
} else
{var statearr_34416_34444 = state_34409__$1;(statearr_34416_34444[1] = 6);
}
return cljs.core.constant$keyword$591;
} else
{if((state_val_34410 === 15))
{var state_34409__$1 = state_34409;var statearr_34417_34445 = state_34409__$1;(statearr_34417_34445[2] = null);
(statearr_34417_34445[1] = 2);
return cljs.core.constant$keyword$591;
} else
{if((state_val_34410 === 13))
{var state_34409__$1 = state_34409;var statearr_34418_34446 = state_34409__$1;(statearr_34418_34446[2] = null);
(statearr_34418_34446[1] = 14);
return cljs.core.constant$keyword$591;
} else
{if((state_val_34410 === 6))
{var state_34409__$1 = state_34409;var statearr_34419_34447 = state_34409__$1;(statearr_34419_34447[2] = null);
(statearr_34419_34447[1] = 7);
return cljs.core.constant$keyword$591;
} else
{if((state_val_34410 === 17))
{var inst_34405 = (state_34409[2]);var state_34409__$1 = state_34409;var statearr_34420_34448 = state_34409__$1;(statearr_34420_34448[2] = inst_34405);
(statearr_34420_34448[1] = 3);
return cljs.core.constant$keyword$591;
} else
{if((state_val_34410 === 3))
{var inst_34407 = (state_34409[2]);var state_34409__$1 = state_34409;return cljs.core.async.impl.ioc_helpers.return_chan(state_34409__$1,inst_34407);
} else
{if((state_val_34410 === 12))
{var inst_34383 = (state_34409[7]);var inst_34393 = cljs.core.clj__GT_js(inst_34383);var inst_34394 = console.log(inst_34393);var state_34409__$1 = state_34409;var statearr_34421_34449 = state_34409__$1;(statearr_34421_34449[2] = inst_34394);
(statearr_34421_34449[1] = 14);
return cljs.core.constant$keyword$591;
} else
{if((state_val_34410 === 2))
{var state_34409__$1 = state_34409;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34409__$1,4,ch);
} else
{if((state_val_34410 === 11))
{var inst_34388 = (state_34409[2]);var state_34409__$1 = state_34409;var statearr_34422_34450 = state_34409__$1;(statearr_34422_34450[2] = inst_34388);
(statearr_34422_34450[1] = 10);
return cljs.core.constant$keyword$591;
} else
{if((state_val_34410 === 9))
{var state_34409__$1 = state_34409;var statearr_34423_34451 = state_34409__$1;(statearr_34423_34451[2] = null);
(statearr_34423_34451[1] = 10);
return cljs.core.constant$keyword$591;
} else
{if((state_val_34410 === 5))
{var state_34409__$1 = state_34409;if(cljs.core.truth_(delay))
{var statearr_34424_34452 = state_34409__$1;(statearr_34424_34452[1] = 8);
} else
{var statearr_34425_34453 = state_34409__$1;(statearr_34425_34453[1] = 9);
}
return cljs.core.constant$keyword$591;
} else
{if((state_val_34410 === 14))
{var inst_34383 = (state_34409[7]);var inst_34397 = (state_34409[2]);var state_34409__$1 = (function (){var statearr_34426 = state_34409;(statearr_34426[8] = inst_34397);
return statearr_34426;
})();var statearr_34427_34454 = state_34409__$1;(statearr_34427_34454[2] = inst_34383);
(statearr_34427_34454[1] = 7);
return cljs.core.constant$keyword$591;
} else
{if((state_val_34410 === 16))
{var state_34409__$1 = state_34409;var statearr_34428_34455 = state_34409__$1;(statearr_34428_34455[2] = null);
(statearr_34428_34455[1] = 17);
return cljs.core.constant$keyword$591;
} else
{if((state_val_34410 === 10))
{var inst_34391 = (state_34409[2]);var state_34409__$1 = (function (){var statearr_34429 = state_34409;(statearr_34429[9] = inst_34391);
return statearr_34429;
})();if(cljs.core.truth_(log))
{var statearr_34430_34456 = state_34409__$1;(statearr_34430_34456[1] = 12);
} else
{var statearr_34431_34457 = state_34409__$1;(statearr_34431_34457[1] = 13);
}
return cljs.core.constant$keyword$591;
} else
{if((state_val_34410 === 8))
{var inst_34386 = cljs.core.async.timeout(delay);var state_34409__$1 = state_34409;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34409__$1,11,inst_34386);
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
});})(c__5691__auto___34439,map__34380,map__34380__$1,delay,log))
;return ((function (switch__5676__auto__,c__5691__auto___34439,map__34380,map__34380__$1,delay,log){
return (function() {
var state_machine__5677__auto__ = null;
var state_machine__5677__auto____0 = (function (){var statearr_34435 = [null,null,null,null,null,null,null,null,null,null];(statearr_34435[0] = state_machine__5677__auto__);
(statearr_34435[1] = 1);
return statearr_34435;
});
var state_machine__5677__auto____1 = (function (state_34409){while(true){
var ret_value__5678__auto__ = (function (){try{while(true){
var result__5679__auto__ = switch__5676__auto__(state_34409);if(cljs.core.keyword_identical_QMARK_(result__5679__auto__,cljs.core.constant$keyword$591))
{{
continue;
}
} else
{return result__5679__auto__;
}
break;
}
}catch (e34436){if((e34436 instanceof Object))
{var ex__5680__auto__ = e34436;var statearr_34437_34458 = state_34409;(statearr_34437_34458[5] = ex__5680__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_34409);
return cljs.core.constant$keyword$591;
} else
{if(cljs.core.constant$keyword$580)
{throw e34436;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5678__auto__,cljs.core.constant$keyword$591))
{{
var G__34459 = state_34409;
state_34409 = G__34459;
continue;
}
} else
{return ret_value__5678__auto__;
}
break;
}
});
state_machine__5677__auto__ = function(state_34409){
switch(arguments.length){
case 0:
return state_machine__5677__auto____0.call(this);
case 1:
return state_machine__5677__auto____1.call(this,state_34409);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5677__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5677__auto____0;
state_machine__5677__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5677__auto____1;
return state_machine__5677__auto__;
})()
;})(switch__5676__auto__,c__5691__auto___34439,map__34380,map__34380__$1,delay,log))
})();var state__5693__auto__ = (function (){var statearr_34438 = (f__5692__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5692__auto__.cljs$core$IFn$_invoke$arity$0() : f__5692__auto__.call(null));(statearr_34438[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5691__auto___34439);
return statearr_34438;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5693__auto__);
});})(c__5691__auto___34439,map__34380,map__34380__$1,delay,log))
);
return null;
};
var dorun_async = function (ch,var_args){
var p__34320 = null;if (arguments.length > 1) {
  p__34320 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return dorun_async__delegate.call(this,ch,p__34320);};
dorun_async.cljs$lang$maxFixedArity = 1;
dorun_async.cljs$lang$applyTo = (function (arglist__34460){
var ch = cljs.core.first(arglist__34460);
var p__34320 = cljs.core.rest(arglist__34460);
return dorun_async__delegate(ch,p__34320);
});
dorun_async.cljs$core$IFn$_invoke$arity$variadic = dorun_async__delegate;
return dorun_async;
})()
;
