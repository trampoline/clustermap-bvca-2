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
var map_async__delegate = function (f,colls){var coll_chs = cljs.core.map.call(null,(function (coll){var ch = cljs.core.async.chan.call(null);cljs.core.async.onto_chan.call(null,ch,coll);
return ch;
}),colls);return cljs.core.async.map.call(null,f,coll_chs);
};
var map_async = function (f,var_args){
var colls = null;if (arguments.length > 1) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return map_async__delegate.call(this,f,colls);};
map_async.cljs$lang$maxFixedArity = 1;
map_async.cljs$lang$applyTo = (function (arglist__24381){
var f = cljs.core.first(arglist__24381);
var colls = cljs.core.rest(arglist__24381);
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
var dorun_async__delegate = function (ch,p__24382){var map__24442 = p__24382;var map__24442__$1 = ((cljs.core.seq_QMARK_.call(null,map__24442))?cljs.core.apply.call(null,cljs.core.hash_map,map__24442):map__24442);var delay = cljs.core.get.call(null,map__24442__$1,new cljs.core.Keyword(null,"delay","delay",-574225219));var log = cljs.core.get.call(null,map__24442__$1,new cljs.core.Keyword(null,"log","log",-1595516004));var c__5693__auto___24501 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5693__auto___24501,map__24442,map__24442__$1,delay,log){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto___24501,map__24442,map__24442__$1,delay,log){
return (function (state_24471){var state_val_24472 = (state_24471[(1)]);if((state_val_24472 === (7)))
{var inst_24462 = (state_24471[(2)]);var state_24471__$1 = state_24471;if(cljs.core.truth_(inst_24462))
{var statearr_24473_24502 = state_24471__$1;(statearr_24473_24502[(1)] = (15));
} else
{var statearr_24474_24503 = state_24471__$1;(statearr_24474_24503[(1)] = (16));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24472 === (1)))
{var state_24471__$1 = state_24471;var statearr_24475_24504 = state_24471__$1;(statearr_24475_24504[(2)] = null);
(statearr_24475_24504[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24472 === (4)))
{var inst_24445 = (state_24471[(7)]);var inst_24445__$1 = (state_24471[(2)]);var state_24471__$1 = (function (){var statearr_24476 = state_24471;(statearr_24476[(7)] = inst_24445__$1);
return statearr_24476;
})();if(cljs.core.truth_(inst_24445__$1))
{var statearr_24477_24505 = state_24471__$1;(statearr_24477_24505[(1)] = (5));
} else
{var statearr_24478_24506 = state_24471__$1;(statearr_24478_24506[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24472 === (15)))
{var state_24471__$1 = state_24471;var statearr_24479_24507 = state_24471__$1;(statearr_24479_24507[(2)] = null);
(statearr_24479_24507[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24472 === (13)))
{var state_24471__$1 = state_24471;var statearr_24480_24508 = state_24471__$1;(statearr_24480_24508[(2)] = null);
(statearr_24480_24508[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24472 === (6)))
{var state_24471__$1 = state_24471;var statearr_24481_24509 = state_24471__$1;(statearr_24481_24509[(2)] = null);
(statearr_24481_24509[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24472 === (17)))
{var inst_24467 = (state_24471[(2)]);var state_24471__$1 = state_24471;var statearr_24482_24510 = state_24471__$1;(statearr_24482_24510[(2)] = inst_24467);
(statearr_24482_24510[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24472 === (3)))
{var inst_24469 = (state_24471[(2)]);var state_24471__$1 = state_24471;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24471__$1,inst_24469);
} else
{if((state_val_24472 === (12)))
{var inst_24445 = (state_24471[(7)]);var inst_24455 = cljs.core.clj__GT_js.call(null,inst_24445);var inst_24456 = console.log(inst_24455);var state_24471__$1 = state_24471;var statearr_24483_24511 = state_24471__$1;(statearr_24483_24511[(2)] = inst_24456);
(statearr_24483_24511[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24472 === (2)))
{var state_24471__$1 = state_24471;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24471__$1,(4),ch);
} else
{if((state_val_24472 === (11)))
{var inst_24450 = (state_24471[(2)]);var state_24471__$1 = state_24471;var statearr_24484_24512 = state_24471__$1;(statearr_24484_24512[(2)] = inst_24450);
(statearr_24484_24512[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24472 === (9)))
{var state_24471__$1 = state_24471;var statearr_24485_24513 = state_24471__$1;(statearr_24485_24513[(2)] = null);
(statearr_24485_24513[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24472 === (5)))
{var state_24471__$1 = state_24471;if(cljs.core.truth_(delay))
{var statearr_24486_24514 = state_24471__$1;(statearr_24486_24514[(1)] = (8));
} else
{var statearr_24487_24515 = state_24471__$1;(statearr_24487_24515[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24472 === (14)))
{var inst_24445 = (state_24471[(7)]);var inst_24459 = (state_24471[(2)]);var state_24471__$1 = (function (){var statearr_24488 = state_24471;(statearr_24488[(8)] = inst_24459);
return statearr_24488;
})();var statearr_24489_24516 = state_24471__$1;(statearr_24489_24516[(2)] = inst_24445);
(statearr_24489_24516[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24472 === (16)))
{var state_24471__$1 = state_24471;var statearr_24490_24517 = state_24471__$1;(statearr_24490_24517[(2)] = null);
(statearr_24490_24517[(1)] = (17));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24472 === (10)))
{var inst_24453 = (state_24471[(2)]);var state_24471__$1 = (function (){var statearr_24491 = state_24471;(statearr_24491[(9)] = inst_24453);
return statearr_24491;
})();if(cljs.core.truth_(log))
{var statearr_24492_24518 = state_24471__$1;(statearr_24492_24518[(1)] = (12));
} else
{var statearr_24493_24519 = state_24471__$1;(statearr_24493_24519[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24472 === (8)))
{var inst_24448 = cljs.core.async.timeout.call(null,delay);var state_24471__$1 = state_24471;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24471__$1,(11),inst_24448);
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
});})(c__5693__auto___24501,map__24442,map__24442__$1,delay,log))
;return ((function (switch__5678__auto__,c__5693__auto___24501,map__24442,map__24442__$1,delay,log){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_24497 = [null,null,null,null,null,null,null,null,null,null];(statearr_24497[(0)] = state_machine__5679__auto__);
(statearr_24497[(1)] = (1));
return statearr_24497;
});
var state_machine__5679__auto____1 = (function (state_24471){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_24471);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e24498){if((e24498 instanceof Object))
{var ex__5682__auto__ = e24498;var statearr_24499_24520 = state_24471;(statearr_24499_24520[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24471);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e24498;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__24521 = state_24471;
state_24471 = G__24521;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_24471){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_24471);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto___24501,map__24442,map__24442__$1,delay,log))
})();var state__5695__auto__ = (function (){var statearr_24500 = f__5694__auto__.call(null);(statearr_24500[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto___24501);
return statearr_24500;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5695__auto__);
});})(c__5693__auto___24501,map__24442,map__24442__$1,delay,log))
);
return null;
};
var dorun_async = function (ch,var_args){
var p__24382 = null;if (arguments.length > 1) {
  p__24382 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return dorun_async__delegate.call(this,ch,p__24382);};
dorun_async.cljs$lang$maxFixedArity = 1;
dorun_async.cljs$lang$applyTo = (function (arglist__24522){
var ch = cljs.core.first(arglist__24522);
var p__24382 = cljs.core.rest(arglist__24522);
return dorun_async__delegate(ch,p__24382);
});
dorun_async.cljs$core$IFn$_invoke$arity$variadic = dorun_async__delegate;
return dorun_async;
})()
;
