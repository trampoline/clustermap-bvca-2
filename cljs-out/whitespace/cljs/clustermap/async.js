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
map_async.cljs$lang$applyTo = (function (arglist__12516){
var f = cljs.core.first(arglist__12516);
var colls = cljs.core.rest(arglist__12516);
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
var dorun_async__delegate = function (ch,p__12517){var map__12577 = p__12517;var map__12577__$1 = ((cljs.core.seq_QMARK_.call(null,map__12577))?cljs.core.apply.call(null,cljs.core.hash_map,map__12577):map__12577);var delay = cljs.core.get.call(null,map__12577__$1,new cljs.core.Keyword(null,"delay","delay",-574225219));var log = cljs.core.get.call(null,map__12577__$1,new cljs.core.Keyword(null,"log","log",-1595516004));var c__5693__auto___12636 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5693__auto___12636,map__12577,map__12577__$1,delay,log){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto___12636,map__12577,map__12577__$1,delay,log){
return (function (state_12606){var state_val_12607 = (state_12606[(1)]);if((state_val_12607 === (7)))
{var inst_12597 = (state_12606[(2)]);var state_12606__$1 = state_12606;if(cljs.core.truth_(inst_12597))
{var statearr_12608_12637 = state_12606__$1;(statearr_12608_12637[(1)] = (15));
} else
{var statearr_12609_12638 = state_12606__$1;(statearr_12609_12638[(1)] = (16));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12607 === (1)))
{var state_12606__$1 = state_12606;var statearr_12610_12639 = state_12606__$1;(statearr_12610_12639[(2)] = null);
(statearr_12610_12639[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12607 === (4)))
{var inst_12580 = (state_12606[(7)]);var inst_12580__$1 = (state_12606[(2)]);var state_12606__$1 = (function (){var statearr_12611 = state_12606;(statearr_12611[(7)] = inst_12580__$1);
return statearr_12611;
})();if(cljs.core.truth_(inst_12580__$1))
{var statearr_12612_12640 = state_12606__$1;(statearr_12612_12640[(1)] = (5));
} else
{var statearr_12613_12641 = state_12606__$1;(statearr_12613_12641[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12607 === (15)))
{var state_12606__$1 = state_12606;var statearr_12614_12642 = state_12606__$1;(statearr_12614_12642[(2)] = null);
(statearr_12614_12642[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12607 === (13)))
{var state_12606__$1 = state_12606;var statearr_12615_12643 = state_12606__$1;(statearr_12615_12643[(2)] = null);
(statearr_12615_12643[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12607 === (6)))
{var state_12606__$1 = state_12606;var statearr_12616_12644 = state_12606__$1;(statearr_12616_12644[(2)] = null);
(statearr_12616_12644[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12607 === (17)))
{var inst_12602 = (state_12606[(2)]);var state_12606__$1 = state_12606;var statearr_12617_12645 = state_12606__$1;(statearr_12617_12645[(2)] = inst_12602);
(statearr_12617_12645[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12607 === (3)))
{var inst_12604 = (state_12606[(2)]);var state_12606__$1 = state_12606;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12606__$1,inst_12604);
} else
{if((state_val_12607 === (12)))
{var inst_12580 = (state_12606[(7)]);var inst_12590 = cljs.core.clj__GT_js.call(null,inst_12580);var inst_12591 = console.log(inst_12590);var state_12606__$1 = state_12606;var statearr_12618_12646 = state_12606__$1;(statearr_12618_12646[(2)] = inst_12591);
(statearr_12618_12646[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12607 === (2)))
{var state_12606__$1 = state_12606;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12606__$1,(4),ch);
} else
{if((state_val_12607 === (11)))
{var inst_12585 = (state_12606[(2)]);var state_12606__$1 = state_12606;var statearr_12619_12647 = state_12606__$1;(statearr_12619_12647[(2)] = inst_12585);
(statearr_12619_12647[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12607 === (9)))
{var state_12606__$1 = state_12606;var statearr_12620_12648 = state_12606__$1;(statearr_12620_12648[(2)] = null);
(statearr_12620_12648[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12607 === (5)))
{var state_12606__$1 = state_12606;if(cljs.core.truth_(delay))
{var statearr_12621_12649 = state_12606__$1;(statearr_12621_12649[(1)] = (8));
} else
{var statearr_12622_12650 = state_12606__$1;(statearr_12622_12650[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12607 === (14)))
{var inst_12580 = (state_12606[(7)]);var inst_12594 = (state_12606[(2)]);var state_12606__$1 = (function (){var statearr_12623 = state_12606;(statearr_12623[(8)] = inst_12594);
return statearr_12623;
})();var statearr_12624_12651 = state_12606__$1;(statearr_12624_12651[(2)] = inst_12580);
(statearr_12624_12651[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12607 === (16)))
{var state_12606__$1 = state_12606;var statearr_12625_12652 = state_12606__$1;(statearr_12625_12652[(2)] = null);
(statearr_12625_12652[(1)] = (17));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12607 === (10)))
{var inst_12588 = (state_12606[(2)]);var state_12606__$1 = (function (){var statearr_12626 = state_12606;(statearr_12626[(9)] = inst_12588);
return statearr_12626;
})();if(cljs.core.truth_(log))
{var statearr_12627_12653 = state_12606__$1;(statearr_12627_12653[(1)] = (12));
} else
{var statearr_12628_12654 = state_12606__$1;(statearr_12628_12654[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12607 === (8)))
{var inst_12583 = cljs.core.async.timeout.call(null,delay);var state_12606__$1 = state_12606;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12606__$1,(11),inst_12583);
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
});})(c__5693__auto___12636,map__12577,map__12577__$1,delay,log))
;return ((function (switch__5678__auto__,c__5693__auto___12636,map__12577,map__12577__$1,delay,log){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_12632 = [null,null,null,null,null,null,null,null,null,null];(statearr_12632[(0)] = state_machine__5679__auto__);
(statearr_12632[(1)] = (1));
return statearr_12632;
});
var state_machine__5679__auto____1 = (function (state_12606){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_12606);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e12633){if((e12633 instanceof Object))
{var ex__5682__auto__ = e12633;var statearr_12634_12655 = state_12606;(statearr_12634_12655[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12606);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e12633;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12656 = state_12606;
state_12606 = G__12656;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_12606){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_12606);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto___12636,map__12577,map__12577__$1,delay,log))
})();var state__5695__auto__ = (function (){var statearr_12635 = f__5694__auto__.call(null);(statearr_12635[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto___12636);
return statearr_12635;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5695__auto__);
});})(c__5693__auto___12636,map__12577,map__12577__$1,delay,log))
);
return null;
};
var dorun_async = function (ch,var_args){
var p__12517 = null;if (arguments.length > 1) {
  p__12517 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return dorun_async__delegate.call(this,ch,p__12517);};
dorun_async.cljs$lang$maxFixedArity = 1;
dorun_async.cljs$lang$applyTo = (function (arglist__12657){
var ch = cljs.core.first(arglist__12657);
var p__12517 = cljs.core.rest(arglist__12657);
return dorun_async__delegate(ch,p__12517);
});
dorun_async.cljs$core$IFn$_invoke$arity$variadic = dorun_async__delegate;
return dorun_async;
})()
;
