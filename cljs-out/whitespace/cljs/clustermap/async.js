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
map_async.cljs$lang$applyTo = (function (arglist__12395){
var f = cljs.core.first(arglist__12395);
var colls = cljs.core.rest(arglist__12395);
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
var dorun_async__delegate = function (ch,p__12396){var map__12456 = p__12396;var map__12456__$1 = ((cljs.core.seq_QMARK_.call(null,map__12456))?cljs.core.apply.call(null,cljs.core.hash_map,map__12456):map__12456);var delay = cljs.core.get.call(null,map__12456__$1,new cljs.core.Keyword(null,"delay","delay",-574225219));var log = cljs.core.get.call(null,map__12456__$1,new cljs.core.Keyword(null,"log","log",-1595516004));var c__5693__auto___12515 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5693__auto___12515,map__12456,map__12456__$1,delay,log){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto___12515,map__12456,map__12456__$1,delay,log){
return (function (state_12485){var state_val_12486 = (state_12485[(1)]);if((state_val_12486 === (7)))
{var inst_12476 = (state_12485[(2)]);var state_12485__$1 = state_12485;if(cljs.core.truth_(inst_12476))
{var statearr_12487_12516 = state_12485__$1;(statearr_12487_12516[(1)] = (15));
} else
{var statearr_12488_12517 = state_12485__$1;(statearr_12488_12517[(1)] = (16));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12486 === (1)))
{var state_12485__$1 = state_12485;var statearr_12489_12518 = state_12485__$1;(statearr_12489_12518[(2)] = null);
(statearr_12489_12518[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12486 === (4)))
{var inst_12459 = (state_12485[(7)]);var inst_12459__$1 = (state_12485[(2)]);var state_12485__$1 = (function (){var statearr_12490 = state_12485;(statearr_12490[(7)] = inst_12459__$1);
return statearr_12490;
})();if(cljs.core.truth_(inst_12459__$1))
{var statearr_12491_12519 = state_12485__$1;(statearr_12491_12519[(1)] = (5));
} else
{var statearr_12492_12520 = state_12485__$1;(statearr_12492_12520[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12486 === (15)))
{var state_12485__$1 = state_12485;var statearr_12493_12521 = state_12485__$1;(statearr_12493_12521[(2)] = null);
(statearr_12493_12521[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12486 === (13)))
{var state_12485__$1 = state_12485;var statearr_12494_12522 = state_12485__$1;(statearr_12494_12522[(2)] = null);
(statearr_12494_12522[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12486 === (6)))
{var state_12485__$1 = state_12485;var statearr_12495_12523 = state_12485__$1;(statearr_12495_12523[(2)] = null);
(statearr_12495_12523[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12486 === (17)))
{var inst_12481 = (state_12485[(2)]);var state_12485__$1 = state_12485;var statearr_12496_12524 = state_12485__$1;(statearr_12496_12524[(2)] = inst_12481);
(statearr_12496_12524[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12486 === (3)))
{var inst_12483 = (state_12485[(2)]);var state_12485__$1 = state_12485;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12485__$1,inst_12483);
} else
{if((state_val_12486 === (12)))
{var inst_12459 = (state_12485[(7)]);var inst_12469 = cljs.core.clj__GT_js.call(null,inst_12459);var inst_12470 = console.log(inst_12469);var state_12485__$1 = state_12485;var statearr_12497_12525 = state_12485__$1;(statearr_12497_12525[(2)] = inst_12470);
(statearr_12497_12525[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12486 === (2)))
{var state_12485__$1 = state_12485;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12485__$1,(4),ch);
} else
{if((state_val_12486 === (11)))
{var inst_12464 = (state_12485[(2)]);var state_12485__$1 = state_12485;var statearr_12498_12526 = state_12485__$1;(statearr_12498_12526[(2)] = inst_12464);
(statearr_12498_12526[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12486 === (9)))
{var state_12485__$1 = state_12485;var statearr_12499_12527 = state_12485__$1;(statearr_12499_12527[(2)] = null);
(statearr_12499_12527[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12486 === (5)))
{var state_12485__$1 = state_12485;if(cljs.core.truth_(delay))
{var statearr_12500_12528 = state_12485__$1;(statearr_12500_12528[(1)] = (8));
} else
{var statearr_12501_12529 = state_12485__$1;(statearr_12501_12529[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12486 === (14)))
{var inst_12459 = (state_12485[(7)]);var inst_12473 = (state_12485[(2)]);var state_12485__$1 = (function (){var statearr_12502 = state_12485;(statearr_12502[(8)] = inst_12473);
return statearr_12502;
})();var statearr_12503_12530 = state_12485__$1;(statearr_12503_12530[(2)] = inst_12459);
(statearr_12503_12530[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12486 === (16)))
{var state_12485__$1 = state_12485;var statearr_12504_12531 = state_12485__$1;(statearr_12504_12531[(2)] = null);
(statearr_12504_12531[(1)] = (17));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12486 === (10)))
{var inst_12467 = (state_12485[(2)]);var state_12485__$1 = (function (){var statearr_12505 = state_12485;(statearr_12505[(9)] = inst_12467);
return statearr_12505;
})();if(cljs.core.truth_(log))
{var statearr_12506_12532 = state_12485__$1;(statearr_12506_12532[(1)] = (12));
} else
{var statearr_12507_12533 = state_12485__$1;(statearr_12507_12533[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12486 === (8)))
{var inst_12462 = cljs.core.async.timeout.call(null,delay);var state_12485__$1 = state_12485;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12485__$1,(11),inst_12462);
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
});})(c__5693__auto___12515,map__12456,map__12456__$1,delay,log))
;return ((function (switch__5678__auto__,c__5693__auto___12515,map__12456,map__12456__$1,delay,log){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_12511 = [null,null,null,null,null,null,null,null,null,null];(statearr_12511[(0)] = state_machine__5679__auto__);
(statearr_12511[(1)] = (1));
return statearr_12511;
});
var state_machine__5679__auto____1 = (function (state_12485){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_12485);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e12512){if((e12512 instanceof Object))
{var ex__5682__auto__ = e12512;var statearr_12513_12534 = state_12485;(statearr_12513_12534[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12485);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e12512;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12535 = state_12485;
state_12485 = G__12535;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_12485){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_12485);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto___12515,map__12456,map__12456__$1,delay,log))
})();var state__5695__auto__ = (function (){var statearr_12514 = f__5694__auto__.call(null);(statearr_12514[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto___12515);
return statearr_12514;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5695__auto__);
});})(c__5693__auto___12515,map__12456,map__12456__$1,delay,log))
);
return null;
};
var dorun_async = function (ch,var_args){
var p__12396 = null;if (arguments.length > 1) {
  p__12396 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return dorun_async__delegate.call(this,ch,p__12396);};
dorun_async.cljs$lang$maxFixedArity = 1;
dorun_async.cljs$lang$applyTo = (function (arglist__12536){
var ch = cljs.core.first(arglist__12536);
var p__12396 = cljs.core.rest(arglist__12536);
return dorun_async__delegate(ch,p__12396);
});
dorun_async.cljs$core$IFn$_invoke$arity$variadic = dorun_async__delegate;
return dorun_async;
})()
;
