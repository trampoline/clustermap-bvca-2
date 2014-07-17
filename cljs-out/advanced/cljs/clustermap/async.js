// Compiled by ClojureScript 0.0-2261
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
map_async.cljs$lang$applyTo = (function (arglist__36316){
var f = cljs.core.first(arglist__36316);
var colls = cljs.core.rest(arglist__36316);
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
var dorun_async__delegate = function (ch,p__36317){var map__36377 = p__36317;var map__36377__$1 = ((cljs.core.seq_QMARK_(map__36377))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36377):map__36377);var delay = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36377__$1,cljs.core.constant$keyword$1117);var log = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36377__$1,cljs.core.constant$keyword$1032);var c__5693__auto___36436 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5693__auto___36436,map__36377,map__36377__$1,delay,log){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto___36436,map__36377,map__36377__$1,delay,log){
return (function (state_36406){var state_val_36407 = (state_36406[(1)]);if((state_val_36407 === (7)))
{var inst_36397 = (state_36406[(2)]);var state_36406__$1 = state_36406;if(cljs.core.truth_(inst_36397))
{var statearr_36408_36437 = state_36406__$1;(statearr_36408_36437[(1)] = (15));
} else
{var statearr_36409_36438 = state_36406__$1;(statearr_36409_36438[(1)] = (16));
}
return cljs.core.constant$keyword$771;
} else
{if((state_val_36407 === (1)))
{var state_36406__$1 = state_36406;var statearr_36410_36439 = state_36406__$1;(statearr_36410_36439[(2)] = null);
(statearr_36410_36439[(1)] = (2));
return cljs.core.constant$keyword$771;
} else
{if((state_val_36407 === (4)))
{var inst_36380 = (state_36406[(7)]);var inst_36380__$1 = (state_36406[(2)]);var state_36406__$1 = (function (){var statearr_36411 = state_36406;(statearr_36411[(7)] = inst_36380__$1);
return statearr_36411;
})();if(cljs.core.truth_(inst_36380__$1))
{var statearr_36412_36440 = state_36406__$1;(statearr_36412_36440[(1)] = (5));
} else
{var statearr_36413_36441 = state_36406__$1;(statearr_36413_36441[(1)] = (6));
}
return cljs.core.constant$keyword$771;
} else
{if((state_val_36407 === (15)))
{var state_36406__$1 = state_36406;var statearr_36414_36442 = state_36406__$1;(statearr_36414_36442[(2)] = null);
(statearr_36414_36442[(1)] = (2));
return cljs.core.constant$keyword$771;
} else
{if((state_val_36407 === (13)))
{var state_36406__$1 = state_36406;var statearr_36415_36443 = state_36406__$1;(statearr_36415_36443[(2)] = null);
(statearr_36415_36443[(1)] = (14));
return cljs.core.constant$keyword$771;
} else
{if((state_val_36407 === (6)))
{var state_36406__$1 = state_36406;var statearr_36416_36444 = state_36406__$1;(statearr_36416_36444[(2)] = null);
(statearr_36416_36444[(1)] = (7));
return cljs.core.constant$keyword$771;
} else
{if((state_val_36407 === (17)))
{var inst_36402 = (state_36406[(2)]);var state_36406__$1 = state_36406;var statearr_36417_36445 = state_36406__$1;(statearr_36417_36445[(2)] = inst_36402);
(statearr_36417_36445[(1)] = (3));
return cljs.core.constant$keyword$771;
} else
{if((state_val_36407 === (3)))
{var inst_36404 = (state_36406[(2)]);var state_36406__$1 = state_36406;return cljs.core.async.impl.ioc_helpers.return_chan(state_36406__$1,inst_36404);
} else
{if((state_val_36407 === (12)))
{var inst_36380 = (state_36406[(7)]);var inst_36390 = cljs.core.clj__GT_js(inst_36380);var inst_36391 = console.log(inst_36390);var state_36406__$1 = state_36406;var statearr_36418_36446 = state_36406__$1;(statearr_36418_36446[(2)] = inst_36391);
(statearr_36418_36446[(1)] = (14));
return cljs.core.constant$keyword$771;
} else
{if((state_val_36407 === (2)))
{var state_36406__$1 = state_36406;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36406__$1,(4),ch);
} else
{if((state_val_36407 === (11)))
{var inst_36385 = (state_36406[(2)]);var state_36406__$1 = state_36406;var statearr_36419_36447 = state_36406__$1;(statearr_36419_36447[(2)] = inst_36385);
(statearr_36419_36447[(1)] = (10));
return cljs.core.constant$keyword$771;
} else
{if((state_val_36407 === (9)))
{var state_36406__$1 = state_36406;var statearr_36420_36448 = state_36406__$1;(statearr_36420_36448[(2)] = null);
(statearr_36420_36448[(1)] = (10));
return cljs.core.constant$keyword$771;
} else
{if((state_val_36407 === (5)))
{var state_36406__$1 = state_36406;if(cljs.core.truth_(delay))
{var statearr_36421_36449 = state_36406__$1;(statearr_36421_36449[(1)] = (8));
} else
{var statearr_36422_36450 = state_36406__$1;(statearr_36422_36450[(1)] = (9));
}
return cljs.core.constant$keyword$771;
} else
{if((state_val_36407 === (14)))
{var inst_36380 = (state_36406[(7)]);var inst_36394 = (state_36406[(2)]);var state_36406__$1 = (function (){var statearr_36423 = state_36406;(statearr_36423[(8)] = inst_36394);
return statearr_36423;
})();var statearr_36424_36451 = state_36406__$1;(statearr_36424_36451[(2)] = inst_36380);
(statearr_36424_36451[(1)] = (7));
return cljs.core.constant$keyword$771;
} else
{if((state_val_36407 === (16)))
{var state_36406__$1 = state_36406;var statearr_36425_36452 = state_36406__$1;(statearr_36425_36452[(2)] = null);
(statearr_36425_36452[(1)] = (17));
return cljs.core.constant$keyword$771;
} else
{if((state_val_36407 === (10)))
{var inst_36388 = (state_36406[(2)]);var state_36406__$1 = (function (){var statearr_36426 = state_36406;(statearr_36426[(9)] = inst_36388);
return statearr_36426;
})();if(cljs.core.truth_(log))
{var statearr_36427_36453 = state_36406__$1;(statearr_36427_36453[(1)] = (12));
} else
{var statearr_36428_36454 = state_36406__$1;(statearr_36428_36454[(1)] = (13));
}
return cljs.core.constant$keyword$771;
} else
{if((state_val_36407 === (8)))
{var inst_36383 = cljs.core.async.timeout(delay);var state_36406__$1 = state_36406;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36406__$1,(11),inst_36383);
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
});})(c__5693__auto___36436,map__36377,map__36377__$1,delay,log))
;return ((function (switch__5678__auto__,c__5693__auto___36436,map__36377,map__36377__$1,delay,log){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_36432 = [null,null,null,null,null,null,null,null,null,null];(statearr_36432[(0)] = state_machine__5679__auto__);
(statearr_36432[(1)] = (1));
return statearr_36432;
});
var state_machine__5679__auto____1 = (function (state_36406){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__(state_36406);if(cljs.core.keyword_identical_QMARK_(result__5681__auto__,cljs.core.constant$keyword$771))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e36433){if((e36433 instanceof Object))
{var ex__5682__auto__ = e36433;var statearr_36434_36455 = state_36406;(statearr_36434_36455[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_36406);
return cljs.core.constant$keyword$771;
} else
{if(cljs.core.constant$keyword$762)
{throw e36433;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5680__auto__,cljs.core.constant$keyword$771))
{{
var G__36456 = state_36406;
state_36406 = G__36456;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_36406){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_36406);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto___36436,map__36377,map__36377__$1,delay,log))
})();var state__5695__auto__ = (function (){var statearr_36435 = (f__5694__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5694__auto__.cljs$core$IFn$_invoke$arity$0() : f__5694__auto__.call(null));(statearr_36435[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto___36436);
return statearr_36435;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5695__auto__);
});})(c__5693__auto___36436,map__36377,map__36377__$1,delay,log))
);
return null;
};
var dorun_async = function (ch,var_args){
var p__36317 = null;if (arguments.length > 1) {
  p__36317 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return dorun_async__delegate.call(this,ch,p__36317);};
dorun_async.cljs$lang$maxFixedArity = 1;
dorun_async.cljs$lang$applyTo = (function (arglist__36457){
var ch = cljs.core.first(arglist__36457);
var p__36317 = cljs.core.rest(arglist__36457);
return dorun_async__delegate(ch,p__36317);
});
dorun_async.cljs$core$IFn$_invoke$arity$variadic = dorun_async__delegate;
return dorun_async;
})()
;
