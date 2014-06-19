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
map_async.cljs$lang$applyTo = (function (arglist__34317){
var f = cljs.core.first(arglist__34317);
var colls = cljs.core.rest(arglist__34317);
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
var dorun_async__delegate = function (ch,p__34318){var map__34378 = p__34318;var map__34378__$1 = ((cljs.core.seq_QMARK_(map__34378))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34378):map__34378);var delay = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34378__$1,cljs.core.constant$keyword$850);var log = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34378__$1,cljs.core.constant$keyword$851);var c__5689__auto___34437 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run(((function (c__5689__auto___34437,map__34378,map__34378__$1,delay,log){
return (function (){var f__5690__auto__ = (function (){var switch__5674__auto__ = ((function (c__5689__auto___34437,map__34378,map__34378__$1,delay,log){
return (function (state_34407){var state_val_34408 = (state_34407[1]);if((state_val_34408 === 7))
{var inst_34398 = (state_34407[2]);var state_34407__$1 = state_34407;if(cljs.core.truth_(inst_34398))
{var statearr_34409_34438 = state_34407__$1;(statearr_34409_34438[1] = 15);
} else
{var statearr_34410_34439 = state_34407__$1;(statearr_34410_34439[1] = 16);
}
return cljs.core.constant$keyword$591;
} else
{if((state_val_34408 === 1))
{var state_34407__$1 = state_34407;var statearr_34411_34440 = state_34407__$1;(statearr_34411_34440[2] = null);
(statearr_34411_34440[1] = 2);
return cljs.core.constant$keyword$591;
} else
{if((state_val_34408 === 4))
{var inst_34381 = (state_34407[7]);var inst_34381__$1 = (state_34407[2]);var state_34407__$1 = (function (){var statearr_34412 = state_34407;(statearr_34412[7] = inst_34381__$1);
return statearr_34412;
})();if(cljs.core.truth_(inst_34381__$1))
{var statearr_34413_34441 = state_34407__$1;(statearr_34413_34441[1] = 5);
} else
{var statearr_34414_34442 = state_34407__$1;(statearr_34414_34442[1] = 6);
}
return cljs.core.constant$keyword$591;
} else
{if((state_val_34408 === 15))
{var state_34407__$1 = state_34407;var statearr_34415_34443 = state_34407__$1;(statearr_34415_34443[2] = null);
(statearr_34415_34443[1] = 2);
return cljs.core.constant$keyword$591;
} else
{if((state_val_34408 === 13))
{var state_34407__$1 = state_34407;var statearr_34416_34444 = state_34407__$1;(statearr_34416_34444[2] = null);
(statearr_34416_34444[1] = 14);
return cljs.core.constant$keyword$591;
} else
{if((state_val_34408 === 6))
{var state_34407__$1 = state_34407;var statearr_34417_34445 = state_34407__$1;(statearr_34417_34445[2] = null);
(statearr_34417_34445[1] = 7);
return cljs.core.constant$keyword$591;
} else
{if((state_val_34408 === 17))
{var inst_34403 = (state_34407[2]);var state_34407__$1 = state_34407;var statearr_34418_34446 = state_34407__$1;(statearr_34418_34446[2] = inst_34403);
(statearr_34418_34446[1] = 3);
return cljs.core.constant$keyword$591;
} else
{if((state_val_34408 === 3))
{var inst_34405 = (state_34407[2]);var state_34407__$1 = state_34407;return cljs.core.async.impl.ioc_helpers.return_chan(state_34407__$1,inst_34405);
} else
{if((state_val_34408 === 12))
{var inst_34381 = (state_34407[7]);var inst_34391 = cljs.core.clj__GT_js(inst_34381);var inst_34392 = console.log(inst_34391);var state_34407__$1 = state_34407;var statearr_34419_34447 = state_34407__$1;(statearr_34419_34447[2] = inst_34392);
(statearr_34419_34447[1] = 14);
return cljs.core.constant$keyword$591;
} else
{if((state_val_34408 === 2))
{var state_34407__$1 = state_34407;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34407__$1,4,ch);
} else
{if((state_val_34408 === 11))
{var inst_34386 = (state_34407[2]);var state_34407__$1 = state_34407;var statearr_34420_34448 = state_34407__$1;(statearr_34420_34448[2] = inst_34386);
(statearr_34420_34448[1] = 10);
return cljs.core.constant$keyword$591;
} else
{if((state_val_34408 === 9))
{var state_34407__$1 = state_34407;var statearr_34421_34449 = state_34407__$1;(statearr_34421_34449[2] = null);
(statearr_34421_34449[1] = 10);
return cljs.core.constant$keyword$591;
} else
{if((state_val_34408 === 5))
{var state_34407__$1 = state_34407;if(cljs.core.truth_(delay))
{var statearr_34422_34450 = state_34407__$1;(statearr_34422_34450[1] = 8);
} else
{var statearr_34423_34451 = state_34407__$1;(statearr_34423_34451[1] = 9);
}
return cljs.core.constant$keyword$591;
} else
{if((state_val_34408 === 14))
{var inst_34381 = (state_34407[7]);var inst_34395 = (state_34407[2]);var state_34407__$1 = (function (){var statearr_34424 = state_34407;(statearr_34424[8] = inst_34395);
return statearr_34424;
})();var statearr_34425_34452 = state_34407__$1;(statearr_34425_34452[2] = inst_34381);
(statearr_34425_34452[1] = 7);
return cljs.core.constant$keyword$591;
} else
{if((state_val_34408 === 16))
{var state_34407__$1 = state_34407;var statearr_34426_34453 = state_34407__$1;(statearr_34426_34453[2] = null);
(statearr_34426_34453[1] = 17);
return cljs.core.constant$keyword$591;
} else
{if((state_val_34408 === 10))
{var inst_34389 = (state_34407[2]);var state_34407__$1 = (function (){var statearr_34427 = state_34407;(statearr_34427[9] = inst_34389);
return statearr_34427;
})();if(cljs.core.truth_(log))
{var statearr_34428_34454 = state_34407__$1;(statearr_34428_34454[1] = 12);
} else
{var statearr_34429_34455 = state_34407__$1;(statearr_34429_34455[1] = 13);
}
return cljs.core.constant$keyword$591;
} else
{if((state_val_34408 === 8))
{var inst_34384 = cljs.core.async.timeout(delay);var state_34407__$1 = state_34407;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34407__$1,11,inst_34384);
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
});})(c__5689__auto___34437,map__34378,map__34378__$1,delay,log))
;return ((function (switch__5674__auto__,c__5689__auto___34437,map__34378,map__34378__$1,delay,log){
return (function() {
var state_machine__5675__auto__ = null;
var state_machine__5675__auto____0 = (function (){var statearr_34433 = [null,null,null,null,null,null,null,null,null,null];(statearr_34433[0] = state_machine__5675__auto__);
(statearr_34433[1] = 1);
return statearr_34433;
});
var state_machine__5675__auto____1 = (function (state_34407){while(true){
var ret_value__5676__auto__ = (function (){try{while(true){
var result__5677__auto__ = switch__5674__auto__(state_34407);if(cljs.core.keyword_identical_QMARK_(result__5677__auto__,cljs.core.constant$keyword$591))
{{
continue;
}
} else
{return result__5677__auto__;
}
break;
}
}catch (e34434){if((e34434 instanceof Object))
{var ex__5678__auto__ = e34434;var statearr_34435_34456 = state_34407;(statearr_34435_34456[5] = ex__5678__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_34407);
return cljs.core.constant$keyword$591;
} else
{if(cljs.core.constant$keyword$580)
{throw e34434;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5676__auto__,cljs.core.constant$keyword$591))
{{
var G__34457 = state_34407;
state_34407 = G__34457;
continue;
}
} else
{return ret_value__5676__auto__;
}
break;
}
});
state_machine__5675__auto__ = function(state_34407){
switch(arguments.length){
case 0:
return state_machine__5675__auto____0.call(this);
case 1:
return state_machine__5675__auto____1.call(this,state_34407);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5675__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5675__auto____0;
state_machine__5675__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5675__auto____1;
return state_machine__5675__auto__;
})()
;})(switch__5674__auto__,c__5689__auto___34437,map__34378,map__34378__$1,delay,log))
})();var state__5691__auto__ = (function (){var statearr_34436 = (f__5690__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5690__auto__.cljs$core$IFn$_invoke$arity$0() : f__5690__auto__.call(null));(statearr_34436[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5689__auto___34437);
return statearr_34436;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5691__auto__);
});})(c__5689__auto___34437,map__34378,map__34378__$1,delay,log))
);
return null;
};
var dorun_async = function (ch,var_args){
var p__34318 = null;if (arguments.length > 1) {
  p__34318 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return dorun_async__delegate.call(this,ch,p__34318);};
dorun_async.cljs$lang$maxFixedArity = 1;
dorun_async.cljs$lang$applyTo = (function (arglist__34458){
var ch = cljs.core.first(arglist__34458);
var p__34318 = cljs.core.rest(arglist__34458);
return dorun_async__delegate(ch,p__34318);
});
dorun_async.cljs$core$IFn$_invoke$arity$variadic = dorun_async__delegate;
return dorun_async;
})()
;
