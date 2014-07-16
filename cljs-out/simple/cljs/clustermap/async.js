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
map_async.cljs$lang$applyTo = (function (arglist__24314){
var f = cljs.core.first(arglist__24314);
var colls = cljs.core.rest(arglist__24314);
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
var dorun_async__delegate = function (ch,p__24315){var map__24375 = p__24315;var map__24375__$1 = ((cljs.core.seq_QMARK_.call(null,map__24375))?cljs.core.apply.call(null,cljs.core.hash_map,map__24375):map__24375);var delay = cljs.core.get.call(null,map__24375__$1,new cljs.core.Keyword(null,"delay","delay",-574225219));var log = cljs.core.get.call(null,map__24375__$1,new cljs.core.Keyword(null,"log","log",-1595516004));var c__5693__auto___24434 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5693__auto___24434,map__24375,map__24375__$1,delay,log){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto___24434,map__24375,map__24375__$1,delay,log){
return (function (state_24404){var state_val_24405 = (state_24404[(1)]);if((state_val_24405 === (7)))
{var inst_24395 = (state_24404[(2)]);var state_24404__$1 = state_24404;if(cljs.core.truth_(inst_24395))
{var statearr_24406_24435 = state_24404__$1;(statearr_24406_24435[(1)] = (15));
} else
{var statearr_24407_24436 = state_24404__$1;(statearr_24407_24436[(1)] = (16));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24405 === (1)))
{var state_24404__$1 = state_24404;var statearr_24408_24437 = state_24404__$1;(statearr_24408_24437[(2)] = null);
(statearr_24408_24437[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24405 === (4)))
{var inst_24378 = (state_24404[(7)]);var inst_24378__$1 = (state_24404[(2)]);var state_24404__$1 = (function (){var statearr_24409 = state_24404;(statearr_24409[(7)] = inst_24378__$1);
return statearr_24409;
})();if(cljs.core.truth_(inst_24378__$1))
{var statearr_24410_24438 = state_24404__$1;(statearr_24410_24438[(1)] = (5));
} else
{var statearr_24411_24439 = state_24404__$1;(statearr_24411_24439[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24405 === (15)))
{var state_24404__$1 = state_24404;var statearr_24412_24440 = state_24404__$1;(statearr_24412_24440[(2)] = null);
(statearr_24412_24440[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24405 === (13)))
{var state_24404__$1 = state_24404;var statearr_24413_24441 = state_24404__$1;(statearr_24413_24441[(2)] = null);
(statearr_24413_24441[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24405 === (6)))
{var state_24404__$1 = state_24404;var statearr_24414_24442 = state_24404__$1;(statearr_24414_24442[(2)] = null);
(statearr_24414_24442[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24405 === (17)))
{var inst_24400 = (state_24404[(2)]);var state_24404__$1 = state_24404;var statearr_24415_24443 = state_24404__$1;(statearr_24415_24443[(2)] = inst_24400);
(statearr_24415_24443[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24405 === (3)))
{var inst_24402 = (state_24404[(2)]);var state_24404__$1 = state_24404;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24404__$1,inst_24402);
} else
{if((state_val_24405 === (12)))
{var inst_24378 = (state_24404[(7)]);var inst_24388 = cljs.core.clj__GT_js.call(null,inst_24378);var inst_24389 = console.log(inst_24388);var state_24404__$1 = state_24404;var statearr_24416_24444 = state_24404__$1;(statearr_24416_24444[(2)] = inst_24389);
(statearr_24416_24444[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24405 === (2)))
{var state_24404__$1 = state_24404;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24404__$1,(4),ch);
} else
{if((state_val_24405 === (11)))
{var inst_24383 = (state_24404[(2)]);var state_24404__$1 = state_24404;var statearr_24417_24445 = state_24404__$1;(statearr_24417_24445[(2)] = inst_24383);
(statearr_24417_24445[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24405 === (9)))
{var state_24404__$1 = state_24404;var statearr_24418_24446 = state_24404__$1;(statearr_24418_24446[(2)] = null);
(statearr_24418_24446[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24405 === (5)))
{var state_24404__$1 = state_24404;if(cljs.core.truth_(delay))
{var statearr_24419_24447 = state_24404__$1;(statearr_24419_24447[(1)] = (8));
} else
{var statearr_24420_24448 = state_24404__$1;(statearr_24420_24448[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24405 === (14)))
{var inst_24378 = (state_24404[(7)]);var inst_24392 = (state_24404[(2)]);var state_24404__$1 = (function (){var statearr_24421 = state_24404;(statearr_24421[(8)] = inst_24392);
return statearr_24421;
})();var statearr_24422_24449 = state_24404__$1;(statearr_24422_24449[(2)] = inst_24378);
(statearr_24422_24449[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24405 === (16)))
{var state_24404__$1 = state_24404;var statearr_24423_24450 = state_24404__$1;(statearr_24423_24450[(2)] = null);
(statearr_24423_24450[(1)] = (17));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24405 === (10)))
{var inst_24386 = (state_24404[(2)]);var state_24404__$1 = (function (){var statearr_24424 = state_24404;(statearr_24424[(9)] = inst_24386);
return statearr_24424;
})();if(cljs.core.truth_(log))
{var statearr_24425_24451 = state_24404__$1;(statearr_24425_24451[(1)] = (12));
} else
{var statearr_24426_24452 = state_24404__$1;(statearr_24426_24452[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24405 === (8)))
{var inst_24381 = cljs.core.async.timeout.call(null,delay);var state_24404__$1 = state_24404;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24404__$1,(11),inst_24381);
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
});})(c__5693__auto___24434,map__24375,map__24375__$1,delay,log))
;return ((function (switch__5678__auto__,c__5693__auto___24434,map__24375,map__24375__$1,delay,log){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_24430 = [null,null,null,null,null,null,null,null,null,null];(statearr_24430[(0)] = state_machine__5679__auto__);
(statearr_24430[(1)] = (1));
return statearr_24430;
});
var state_machine__5679__auto____1 = (function (state_24404){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_24404);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e24431){if((e24431 instanceof Object))
{var ex__5682__auto__ = e24431;var statearr_24432_24453 = state_24404;(statearr_24432_24453[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24404);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e24431;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__24454 = state_24404;
state_24404 = G__24454;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_24404){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_24404);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto___24434,map__24375,map__24375__$1,delay,log))
})();var state__5695__auto__ = (function (){var statearr_24433 = f__5694__auto__.call(null);(statearr_24433[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto___24434);
return statearr_24433;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5695__auto__);
});})(c__5693__auto___24434,map__24375,map__24375__$1,delay,log))
);
return null;
};
var dorun_async = function (ch,var_args){
var p__24315 = null;if (arguments.length > 1) {
  p__24315 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return dorun_async__delegate.call(this,ch,p__24315);};
dorun_async.cljs$lang$maxFixedArity = 1;
dorun_async.cljs$lang$applyTo = (function (arglist__24455){
var ch = cljs.core.first(arglist__24455);
var p__24315 = cljs.core.rest(arglist__24455);
return dorun_async__delegate(ch,p__24315);
});
dorun_async.cljs$core$IFn$_invoke$arity$variadic = dorun_async__delegate;
return dorun_async;
})()
;
