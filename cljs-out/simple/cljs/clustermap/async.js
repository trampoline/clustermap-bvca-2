// Compiled by ClojureScript 0.0-2268
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
var map_async__delegate = function (f,colls){var coll_chs = cljs.core.map.call(null,(function (coll){var ch = cljs.core.async.chan.call(null);cljs.core.async.onto_chan.call(null,ch,coll);
return ch;
}),colls);return cljs.core.async.map.call(null,f,coll_chs);
};
var map_async = function (f,var_args){
var colls = null;if (arguments.length > 1) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return map_async__delegate.call(this,f,colls);};
map_async.cljs$lang$maxFixedArity = 1;
map_async.cljs$lang$applyTo = (function (arglist__25356){
var f = cljs.core.first(arglist__25356);
var colls = cljs.core.rest(arglist__25356);
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
var dorun_async__delegate = function (ch,p__25357){var map__25417 = p__25357;var map__25417__$1 = ((cljs.core.seq_QMARK_.call(null,map__25417))?cljs.core.apply.call(null,cljs.core.hash_map,map__25417):map__25417);var delay = cljs.core.get.call(null,map__25417__$1,new cljs.core.Keyword(null,"delay","delay",-574225219));var log = cljs.core.get.call(null,map__25417__$1,new cljs.core.Keyword(null,"log","log",-1595516004));var c__5693__auto___25476 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5693__auto___25476,map__25417,map__25417__$1,delay,log){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto___25476,map__25417,map__25417__$1,delay,log){
return (function (state_25446){var state_val_25447 = (state_25446[(1)]);if((state_val_25447 === (7)))
{var inst_25437 = (state_25446[(2)]);var state_25446__$1 = state_25446;if(cljs.core.truth_(inst_25437))
{var statearr_25448_25477 = state_25446__$1;(statearr_25448_25477[(1)] = (15));
} else
{var statearr_25449_25478 = state_25446__$1;(statearr_25449_25478[(1)] = (16));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25447 === (1)))
{var state_25446__$1 = state_25446;var statearr_25450_25479 = state_25446__$1;(statearr_25450_25479[(2)] = null);
(statearr_25450_25479[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25447 === (4)))
{var inst_25420 = (state_25446[(7)]);var inst_25420__$1 = (state_25446[(2)]);var state_25446__$1 = (function (){var statearr_25451 = state_25446;(statearr_25451[(7)] = inst_25420__$1);
return statearr_25451;
})();if(cljs.core.truth_(inst_25420__$1))
{var statearr_25452_25480 = state_25446__$1;(statearr_25452_25480[(1)] = (5));
} else
{var statearr_25453_25481 = state_25446__$1;(statearr_25453_25481[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25447 === (15)))
{var state_25446__$1 = state_25446;var statearr_25454_25482 = state_25446__$1;(statearr_25454_25482[(2)] = null);
(statearr_25454_25482[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25447 === (13)))
{var state_25446__$1 = state_25446;var statearr_25455_25483 = state_25446__$1;(statearr_25455_25483[(2)] = null);
(statearr_25455_25483[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25447 === (6)))
{var state_25446__$1 = state_25446;var statearr_25456_25484 = state_25446__$1;(statearr_25456_25484[(2)] = null);
(statearr_25456_25484[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25447 === (17)))
{var inst_25442 = (state_25446[(2)]);var state_25446__$1 = state_25446;var statearr_25457_25485 = state_25446__$1;(statearr_25457_25485[(2)] = inst_25442);
(statearr_25457_25485[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25447 === (3)))
{var inst_25444 = (state_25446[(2)]);var state_25446__$1 = state_25446;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25446__$1,inst_25444);
} else
{if((state_val_25447 === (12)))
{var inst_25420 = (state_25446[(7)]);var inst_25430 = cljs.core.clj__GT_js.call(null,inst_25420);var inst_25431 = console.log(inst_25430);var state_25446__$1 = state_25446;var statearr_25458_25486 = state_25446__$1;(statearr_25458_25486[(2)] = inst_25431);
(statearr_25458_25486[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25447 === (2)))
{var state_25446__$1 = state_25446;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25446__$1,(4),ch);
} else
{if((state_val_25447 === (11)))
{var inst_25425 = (state_25446[(2)]);var state_25446__$1 = state_25446;var statearr_25459_25487 = state_25446__$1;(statearr_25459_25487[(2)] = inst_25425);
(statearr_25459_25487[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25447 === (9)))
{var state_25446__$1 = state_25446;var statearr_25460_25488 = state_25446__$1;(statearr_25460_25488[(2)] = null);
(statearr_25460_25488[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25447 === (5)))
{var state_25446__$1 = state_25446;if(cljs.core.truth_(delay))
{var statearr_25461_25489 = state_25446__$1;(statearr_25461_25489[(1)] = (8));
} else
{var statearr_25462_25490 = state_25446__$1;(statearr_25462_25490[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25447 === (14)))
{var inst_25420 = (state_25446[(7)]);var inst_25434 = (state_25446[(2)]);var state_25446__$1 = (function (){var statearr_25463 = state_25446;(statearr_25463[(8)] = inst_25434);
return statearr_25463;
})();var statearr_25464_25491 = state_25446__$1;(statearr_25464_25491[(2)] = inst_25420);
(statearr_25464_25491[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25447 === (16)))
{var state_25446__$1 = state_25446;var statearr_25465_25492 = state_25446__$1;(statearr_25465_25492[(2)] = null);
(statearr_25465_25492[(1)] = (17));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25447 === (10)))
{var inst_25428 = (state_25446[(2)]);var state_25446__$1 = (function (){var statearr_25466 = state_25446;(statearr_25466[(9)] = inst_25428);
return statearr_25466;
})();if(cljs.core.truth_(log))
{var statearr_25467_25493 = state_25446__$1;(statearr_25467_25493[(1)] = (12));
} else
{var statearr_25468_25494 = state_25446__$1;(statearr_25468_25494[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25447 === (8)))
{var inst_25423 = cljs.core.async.timeout.call(null,delay);var state_25446__$1 = state_25446;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25446__$1,(11),inst_25423);
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
});})(c__5693__auto___25476,map__25417,map__25417__$1,delay,log))
;return ((function (switch__5678__auto__,c__5693__auto___25476,map__25417,map__25417__$1,delay,log){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_25472 = [null,null,null,null,null,null,null,null,null,null];(statearr_25472[(0)] = state_machine__5679__auto__);
(statearr_25472[(1)] = (1));
return statearr_25472;
});
var state_machine__5679__auto____1 = (function (state_25446){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_25446);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e25473){if((e25473 instanceof Object))
{var ex__5682__auto__ = e25473;var statearr_25474_25495 = state_25446;(statearr_25474_25495[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25446);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e25473;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__25496 = state_25446;
state_25446 = G__25496;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_25446){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_25446);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto___25476,map__25417,map__25417__$1,delay,log))
})();var state__5695__auto__ = (function (){var statearr_25475 = f__5694__auto__.call(null);(statearr_25475[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto___25476);
return statearr_25475;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5695__auto__);
});})(c__5693__auto___25476,map__25417,map__25417__$1,delay,log))
);
return null;
};
var dorun_async = function (ch,var_args){
var p__25357 = null;if (arguments.length > 1) {
  p__25357 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return dorun_async__delegate.call(this,ch,p__25357);};
dorun_async.cljs$lang$maxFixedArity = 1;
dorun_async.cljs$lang$applyTo = (function (arglist__25497){
var ch = cljs.core.first(arglist__25497);
var p__25357 = cljs.core.rest(arglist__25497);
return dorun_async__delegate(ch,p__25357);
});
dorun_async.cljs$core$IFn$_invoke$arity$variadic = dorun_async__delegate;
return dorun_async;
})()
;
