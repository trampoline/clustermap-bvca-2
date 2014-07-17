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
map_async.cljs$lang$applyTo = (function (arglist__12446){
var f = cljs.core.first(arglist__12446);
var colls = cljs.core.rest(arglist__12446);
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
var dorun_async__delegate = function (ch,p__12447){var map__12507 = p__12447;var map__12507__$1 = ((cljs.core.seq_QMARK_.call(null,map__12507))?cljs.core.apply.call(null,cljs.core.hash_map,map__12507):map__12507);var delay = cljs.core.get.call(null,map__12507__$1,new cljs.core.Keyword(null,"delay","delay",-574225219));var log = cljs.core.get.call(null,map__12507__$1,new cljs.core.Keyword(null,"log","log",-1595516004));var c__5693__auto___12566 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5693__auto___12566,map__12507,map__12507__$1,delay,log){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto___12566,map__12507,map__12507__$1,delay,log){
return (function (state_12536){var state_val_12537 = (state_12536[(1)]);if((state_val_12537 === (7)))
{var inst_12527 = (state_12536[(2)]);var state_12536__$1 = state_12536;if(cljs.core.truth_(inst_12527))
{var statearr_12538_12567 = state_12536__$1;(statearr_12538_12567[(1)] = (15));
} else
{var statearr_12539_12568 = state_12536__$1;(statearr_12539_12568[(1)] = (16));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12537 === (1)))
{var state_12536__$1 = state_12536;var statearr_12540_12569 = state_12536__$1;(statearr_12540_12569[(2)] = null);
(statearr_12540_12569[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12537 === (4)))
{var inst_12510 = (state_12536[(7)]);var inst_12510__$1 = (state_12536[(2)]);var state_12536__$1 = (function (){var statearr_12541 = state_12536;(statearr_12541[(7)] = inst_12510__$1);
return statearr_12541;
})();if(cljs.core.truth_(inst_12510__$1))
{var statearr_12542_12570 = state_12536__$1;(statearr_12542_12570[(1)] = (5));
} else
{var statearr_12543_12571 = state_12536__$1;(statearr_12543_12571[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12537 === (15)))
{var state_12536__$1 = state_12536;var statearr_12544_12572 = state_12536__$1;(statearr_12544_12572[(2)] = null);
(statearr_12544_12572[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12537 === (13)))
{var state_12536__$1 = state_12536;var statearr_12545_12573 = state_12536__$1;(statearr_12545_12573[(2)] = null);
(statearr_12545_12573[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12537 === (6)))
{var state_12536__$1 = state_12536;var statearr_12546_12574 = state_12536__$1;(statearr_12546_12574[(2)] = null);
(statearr_12546_12574[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12537 === (17)))
{var inst_12532 = (state_12536[(2)]);var state_12536__$1 = state_12536;var statearr_12547_12575 = state_12536__$1;(statearr_12547_12575[(2)] = inst_12532);
(statearr_12547_12575[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12537 === (3)))
{var inst_12534 = (state_12536[(2)]);var state_12536__$1 = state_12536;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12536__$1,inst_12534);
} else
{if((state_val_12537 === (12)))
{var inst_12510 = (state_12536[(7)]);var inst_12520 = cljs.core.clj__GT_js.call(null,inst_12510);var inst_12521 = console.log(inst_12520);var state_12536__$1 = state_12536;var statearr_12548_12576 = state_12536__$1;(statearr_12548_12576[(2)] = inst_12521);
(statearr_12548_12576[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12537 === (2)))
{var state_12536__$1 = state_12536;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12536__$1,(4),ch);
} else
{if((state_val_12537 === (11)))
{var inst_12515 = (state_12536[(2)]);var state_12536__$1 = state_12536;var statearr_12549_12577 = state_12536__$1;(statearr_12549_12577[(2)] = inst_12515);
(statearr_12549_12577[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12537 === (9)))
{var state_12536__$1 = state_12536;var statearr_12550_12578 = state_12536__$1;(statearr_12550_12578[(2)] = null);
(statearr_12550_12578[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12537 === (5)))
{var state_12536__$1 = state_12536;if(cljs.core.truth_(delay))
{var statearr_12551_12579 = state_12536__$1;(statearr_12551_12579[(1)] = (8));
} else
{var statearr_12552_12580 = state_12536__$1;(statearr_12552_12580[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12537 === (14)))
{var inst_12510 = (state_12536[(7)]);var inst_12524 = (state_12536[(2)]);var state_12536__$1 = (function (){var statearr_12553 = state_12536;(statearr_12553[(8)] = inst_12524);
return statearr_12553;
})();var statearr_12554_12581 = state_12536__$1;(statearr_12554_12581[(2)] = inst_12510);
(statearr_12554_12581[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12537 === (16)))
{var state_12536__$1 = state_12536;var statearr_12555_12582 = state_12536__$1;(statearr_12555_12582[(2)] = null);
(statearr_12555_12582[(1)] = (17));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12537 === (10)))
{var inst_12518 = (state_12536[(2)]);var state_12536__$1 = (function (){var statearr_12556 = state_12536;(statearr_12556[(9)] = inst_12518);
return statearr_12556;
})();if(cljs.core.truth_(log))
{var statearr_12557_12583 = state_12536__$1;(statearr_12557_12583[(1)] = (12));
} else
{var statearr_12558_12584 = state_12536__$1;(statearr_12558_12584[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12537 === (8)))
{var inst_12513 = cljs.core.async.timeout.call(null,delay);var state_12536__$1 = state_12536;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12536__$1,(11),inst_12513);
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
});})(c__5693__auto___12566,map__12507,map__12507__$1,delay,log))
;return ((function (switch__5678__auto__,c__5693__auto___12566,map__12507,map__12507__$1,delay,log){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_12562 = [null,null,null,null,null,null,null,null,null,null];(statearr_12562[(0)] = state_machine__5679__auto__);
(statearr_12562[(1)] = (1));
return statearr_12562;
});
var state_machine__5679__auto____1 = (function (state_12536){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_12536);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e12563){if((e12563 instanceof Object))
{var ex__5682__auto__ = e12563;var statearr_12564_12585 = state_12536;(statearr_12564_12585[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12536);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e12563;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12586 = state_12536;
state_12536 = G__12586;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_12536){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_12536);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto___12566,map__12507,map__12507__$1,delay,log))
})();var state__5695__auto__ = (function (){var statearr_12565 = f__5694__auto__.call(null);(statearr_12565[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto___12566);
return statearr_12565;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5695__auto__);
});})(c__5693__auto___12566,map__12507,map__12507__$1,delay,log))
);
return null;
};
var dorun_async = function (ch,var_args){
var p__12447 = null;if (arguments.length > 1) {
  p__12447 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return dorun_async__delegate.call(this,ch,p__12447);};
dorun_async.cljs$lang$maxFixedArity = 1;
dorun_async.cljs$lang$applyTo = (function (arglist__12587){
var ch = cljs.core.first(arglist__12587);
var p__12447 = cljs.core.rest(arglist__12587);
return dorun_async__delegate(ch,p__12447);
});
dorun_async.cljs$core$IFn$_invoke$arity$variadic = dorun_async__delegate;
return dorun_async;
})()
;
