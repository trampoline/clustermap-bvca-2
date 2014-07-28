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
map_async.cljs$lang$applyTo = (function (arglist__25364){
var f = cljs.core.first(arglist__25364);
var colls = cljs.core.rest(arglist__25364);
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
var dorun_async__delegate = function (ch,p__25365){var map__25425 = p__25365;var map__25425__$1 = ((cljs.core.seq_QMARK_.call(null,map__25425))?cljs.core.apply.call(null,cljs.core.hash_map,map__25425):map__25425);var delay = cljs.core.get.call(null,map__25425__$1,new cljs.core.Keyword(null,"delay","delay",-574225219));var log = cljs.core.get.call(null,map__25425__$1,new cljs.core.Keyword(null,"log","log",-1595516004));var c__5693__auto___25484 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5693__auto___25484,map__25425,map__25425__$1,delay,log){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto___25484,map__25425,map__25425__$1,delay,log){
return (function (state_25454){var state_val_25455 = (state_25454[(1)]);if((state_val_25455 === (7)))
{var inst_25445 = (state_25454[(2)]);var state_25454__$1 = state_25454;if(cljs.core.truth_(inst_25445))
{var statearr_25456_25485 = state_25454__$1;(statearr_25456_25485[(1)] = (15));
} else
{var statearr_25457_25486 = state_25454__$1;(statearr_25457_25486[(1)] = (16));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25455 === (1)))
{var state_25454__$1 = state_25454;var statearr_25458_25487 = state_25454__$1;(statearr_25458_25487[(2)] = null);
(statearr_25458_25487[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25455 === (4)))
{var inst_25428 = (state_25454[(7)]);var inst_25428__$1 = (state_25454[(2)]);var state_25454__$1 = (function (){var statearr_25459 = state_25454;(statearr_25459[(7)] = inst_25428__$1);
return statearr_25459;
})();if(cljs.core.truth_(inst_25428__$1))
{var statearr_25460_25488 = state_25454__$1;(statearr_25460_25488[(1)] = (5));
} else
{var statearr_25461_25489 = state_25454__$1;(statearr_25461_25489[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25455 === (15)))
{var state_25454__$1 = state_25454;var statearr_25462_25490 = state_25454__$1;(statearr_25462_25490[(2)] = null);
(statearr_25462_25490[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25455 === (13)))
{var state_25454__$1 = state_25454;var statearr_25463_25491 = state_25454__$1;(statearr_25463_25491[(2)] = null);
(statearr_25463_25491[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25455 === (6)))
{var state_25454__$1 = state_25454;var statearr_25464_25492 = state_25454__$1;(statearr_25464_25492[(2)] = null);
(statearr_25464_25492[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25455 === (17)))
{var inst_25450 = (state_25454[(2)]);var state_25454__$1 = state_25454;var statearr_25465_25493 = state_25454__$1;(statearr_25465_25493[(2)] = inst_25450);
(statearr_25465_25493[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25455 === (3)))
{var inst_25452 = (state_25454[(2)]);var state_25454__$1 = state_25454;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25454__$1,inst_25452);
} else
{if((state_val_25455 === (12)))
{var inst_25428 = (state_25454[(7)]);var inst_25438 = cljs.core.clj__GT_js.call(null,inst_25428);var inst_25439 = console.log(inst_25438);var state_25454__$1 = state_25454;var statearr_25466_25494 = state_25454__$1;(statearr_25466_25494[(2)] = inst_25439);
(statearr_25466_25494[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25455 === (2)))
{var state_25454__$1 = state_25454;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25454__$1,(4),ch);
} else
{if((state_val_25455 === (11)))
{var inst_25433 = (state_25454[(2)]);var state_25454__$1 = state_25454;var statearr_25467_25495 = state_25454__$1;(statearr_25467_25495[(2)] = inst_25433);
(statearr_25467_25495[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25455 === (9)))
{var state_25454__$1 = state_25454;var statearr_25468_25496 = state_25454__$1;(statearr_25468_25496[(2)] = null);
(statearr_25468_25496[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25455 === (5)))
{var state_25454__$1 = state_25454;if(cljs.core.truth_(delay))
{var statearr_25469_25497 = state_25454__$1;(statearr_25469_25497[(1)] = (8));
} else
{var statearr_25470_25498 = state_25454__$1;(statearr_25470_25498[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25455 === (14)))
{var inst_25428 = (state_25454[(7)]);var inst_25442 = (state_25454[(2)]);var state_25454__$1 = (function (){var statearr_25471 = state_25454;(statearr_25471[(8)] = inst_25442);
return statearr_25471;
})();var statearr_25472_25499 = state_25454__$1;(statearr_25472_25499[(2)] = inst_25428);
(statearr_25472_25499[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25455 === (16)))
{var state_25454__$1 = state_25454;var statearr_25473_25500 = state_25454__$1;(statearr_25473_25500[(2)] = null);
(statearr_25473_25500[(1)] = (17));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25455 === (10)))
{var inst_25436 = (state_25454[(2)]);var state_25454__$1 = (function (){var statearr_25474 = state_25454;(statearr_25474[(9)] = inst_25436);
return statearr_25474;
})();if(cljs.core.truth_(log))
{var statearr_25475_25501 = state_25454__$1;(statearr_25475_25501[(1)] = (12));
} else
{var statearr_25476_25502 = state_25454__$1;(statearr_25476_25502[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25455 === (8)))
{var inst_25431 = cljs.core.async.timeout.call(null,delay);var state_25454__$1 = state_25454;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25454__$1,(11),inst_25431);
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
});})(c__5693__auto___25484,map__25425,map__25425__$1,delay,log))
;return ((function (switch__5678__auto__,c__5693__auto___25484,map__25425,map__25425__$1,delay,log){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_25480 = [null,null,null,null,null,null,null,null,null,null];(statearr_25480[(0)] = state_machine__5679__auto__);
(statearr_25480[(1)] = (1));
return statearr_25480;
});
var state_machine__5679__auto____1 = (function (state_25454){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_25454);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e25481){if((e25481 instanceof Object))
{var ex__5682__auto__ = e25481;var statearr_25482_25503 = state_25454;(statearr_25482_25503[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25454);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e25481;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__25504 = state_25454;
state_25454 = G__25504;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_25454){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_25454);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto___25484,map__25425,map__25425__$1,delay,log))
})();var state__5695__auto__ = (function (){var statearr_25483 = f__5694__auto__.call(null);(statearr_25483[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto___25484);
return statearr_25483;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5695__auto__);
});})(c__5693__auto___25484,map__25425,map__25425__$1,delay,log))
);
return null;
};
var dorun_async = function (ch,var_args){
var p__25365 = null;if (arguments.length > 1) {
  p__25365 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return dorun_async__delegate.call(this,ch,p__25365);};
dorun_async.cljs$lang$maxFixedArity = 1;
dorun_async.cljs$lang$applyTo = (function (arglist__25505){
var ch = cljs.core.first(arglist__25505);
var p__25365 = cljs.core.rest(arglist__25505);
return dorun_async__delegate(ch,p__25365);
});
dorun_async.cljs$core$IFn$_invoke$arity$variadic = dorun_async__delegate;
return dorun_async;
})()
;
