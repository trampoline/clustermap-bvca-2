// Compiled by ClojureScript 0.0-2322
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
map_async.cljs$lang$applyTo = (function (arglist__12463){
var f = cljs.core.first(arglist__12463);
var colls = cljs.core.rest(arglist__12463);
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
var dorun_async__delegate = function (ch,p__12464){var map__12524 = p__12464;var map__12524__$1 = ((cljs.core.seq_QMARK_.call(null,map__12524))?cljs.core.apply.call(null,cljs.core.hash_map,map__12524):map__12524);var delay = cljs.core.get.call(null,map__12524__$1,new cljs.core.Keyword(null,"delay","delay",-574225219));var log = cljs.core.get.call(null,map__12524__$1,new cljs.core.Keyword(null,"log","log",-1595516004));var c__5708__auto___12583 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5708__auto___12583,map__12524,map__12524__$1,delay,log){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___12583,map__12524,map__12524__$1,delay,log){
return (function (state_12553){var state_val_12554 = (state_12553[(1)]);if((state_val_12554 === (7)))
{var inst_12544 = (state_12553[(2)]);var state_12553__$1 = state_12553;if(cljs.core.truth_(inst_12544))
{var statearr_12555_12584 = state_12553__$1;(statearr_12555_12584[(1)] = (15));
} else
{var statearr_12556_12585 = state_12553__$1;(statearr_12556_12585[(1)] = (16));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12554 === (1)))
{var state_12553__$1 = state_12553;var statearr_12557_12586 = state_12553__$1;(statearr_12557_12586[(2)] = null);
(statearr_12557_12586[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12554 === (4)))
{var inst_12527 = (state_12553[(7)]);var inst_12527__$1 = (state_12553[(2)]);var state_12553__$1 = (function (){var statearr_12558 = state_12553;(statearr_12558[(7)] = inst_12527__$1);
return statearr_12558;
})();if(cljs.core.truth_(inst_12527__$1))
{var statearr_12559_12587 = state_12553__$1;(statearr_12559_12587[(1)] = (5));
} else
{var statearr_12560_12588 = state_12553__$1;(statearr_12560_12588[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12554 === (15)))
{var state_12553__$1 = state_12553;var statearr_12561_12589 = state_12553__$1;(statearr_12561_12589[(2)] = null);
(statearr_12561_12589[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12554 === (13)))
{var state_12553__$1 = state_12553;var statearr_12562_12590 = state_12553__$1;(statearr_12562_12590[(2)] = null);
(statearr_12562_12590[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12554 === (6)))
{var state_12553__$1 = state_12553;var statearr_12563_12591 = state_12553__$1;(statearr_12563_12591[(2)] = null);
(statearr_12563_12591[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12554 === (17)))
{var inst_12549 = (state_12553[(2)]);var state_12553__$1 = state_12553;var statearr_12564_12592 = state_12553__$1;(statearr_12564_12592[(2)] = inst_12549);
(statearr_12564_12592[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12554 === (3)))
{var inst_12551 = (state_12553[(2)]);var state_12553__$1 = state_12553;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12553__$1,inst_12551);
} else
{if((state_val_12554 === (12)))
{var inst_12527 = (state_12553[(7)]);var inst_12537 = cljs.core.clj__GT_js.call(null,inst_12527);var inst_12538 = console.log(inst_12537);var state_12553__$1 = state_12553;var statearr_12565_12593 = state_12553__$1;(statearr_12565_12593[(2)] = inst_12538);
(statearr_12565_12593[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12554 === (2)))
{var state_12553__$1 = state_12553;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12553__$1,(4),ch);
} else
{if((state_val_12554 === (11)))
{var inst_12532 = (state_12553[(2)]);var state_12553__$1 = state_12553;var statearr_12566_12594 = state_12553__$1;(statearr_12566_12594[(2)] = inst_12532);
(statearr_12566_12594[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12554 === (9)))
{var state_12553__$1 = state_12553;var statearr_12567_12595 = state_12553__$1;(statearr_12567_12595[(2)] = null);
(statearr_12567_12595[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12554 === (5)))
{var state_12553__$1 = state_12553;if(cljs.core.truth_(delay))
{var statearr_12568_12596 = state_12553__$1;(statearr_12568_12596[(1)] = (8));
} else
{var statearr_12569_12597 = state_12553__$1;(statearr_12569_12597[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12554 === (14)))
{var inst_12527 = (state_12553[(7)]);var inst_12541 = (state_12553[(2)]);var state_12553__$1 = (function (){var statearr_12570 = state_12553;(statearr_12570[(8)] = inst_12541);
return statearr_12570;
})();var statearr_12571_12598 = state_12553__$1;(statearr_12571_12598[(2)] = inst_12527);
(statearr_12571_12598[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12554 === (16)))
{var state_12553__$1 = state_12553;var statearr_12572_12599 = state_12553__$1;(statearr_12572_12599[(2)] = null);
(statearr_12572_12599[(1)] = (17));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12554 === (10)))
{var inst_12535 = (state_12553[(2)]);var state_12553__$1 = (function (){var statearr_12573 = state_12553;(statearr_12573[(9)] = inst_12535);
return statearr_12573;
})();if(cljs.core.truth_(log))
{var statearr_12574_12600 = state_12553__$1;(statearr_12574_12600[(1)] = (12));
} else
{var statearr_12575_12601 = state_12553__$1;(statearr_12575_12601[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12554 === (8)))
{var inst_12530 = cljs.core.async.timeout.call(null,delay);var state_12553__$1 = state_12553;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12553__$1,(11),inst_12530);
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
});})(c__5708__auto___12583,map__12524,map__12524__$1,delay,log))
;return ((function (switch__5693__auto__,c__5708__auto___12583,map__12524,map__12524__$1,delay,log){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_12579 = [null,null,null,null,null,null,null,null,null,null];(statearr_12579[(0)] = state_machine__5694__auto__);
(statearr_12579[(1)] = (1));
return statearr_12579;
});
var state_machine__5694__auto____1 = (function (state_12553){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_12553);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e12580){if((e12580 instanceof Object))
{var ex__5697__auto__ = e12580;var statearr_12581_12602 = state_12553;(statearr_12581_12602[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12553);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e12580;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12603 = state_12553;
state_12553 = G__12603;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_12553){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_12553);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___12583,map__12524,map__12524__$1,delay,log))
})();var state__5710__auto__ = (function (){var statearr_12582 = f__5709__auto__.call(null);(statearr_12582[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___12583);
return statearr_12582;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
});})(c__5708__auto___12583,map__12524,map__12524__$1,delay,log))
);
return null;
};
var dorun_async = function (ch,var_args){
var p__12464 = null;if (arguments.length > 1) {
  p__12464 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return dorun_async__delegate.call(this,ch,p__12464);};
dorun_async.cljs$lang$maxFixedArity = 1;
dorun_async.cljs$lang$applyTo = (function (arglist__12604){
var ch = cljs.core.first(arglist__12604);
var p__12464 = cljs.core.rest(arglist__12604);
return dorun_async__delegate(ch,p__12464);
});
dorun_async.cljs$core$IFn$_invoke$arity$variadic = dorun_async__delegate;
return dorun_async;
})()
;
