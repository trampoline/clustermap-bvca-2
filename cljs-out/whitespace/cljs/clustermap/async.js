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
map_async.cljs$lang$applyTo = (function (arglist__12475){
var f = cljs.core.first(arglist__12475);
var colls = cljs.core.rest(arglist__12475);
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
var dorun_async__delegate = function (ch,p__12476){var map__12536 = p__12476;var map__12536__$1 = ((cljs.core.seq_QMARK_.call(null,map__12536))?cljs.core.apply.call(null,cljs.core.hash_map,map__12536):map__12536);var delay = cljs.core.get.call(null,map__12536__$1,new cljs.core.Keyword(null,"delay","delay",-574225219));var log = cljs.core.get.call(null,map__12536__$1,new cljs.core.Keyword(null,"log","log",-1595516004));var c__5708__auto___12595 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5708__auto___12595,map__12536,map__12536__$1,delay,log){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___12595,map__12536,map__12536__$1,delay,log){
return (function (state_12565){var state_val_12566 = (state_12565[(1)]);if((state_val_12566 === (7)))
{var inst_12556 = (state_12565[(2)]);var state_12565__$1 = state_12565;if(cljs.core.truth_(inst_12556))
{var statearr_12567_12596 = state_12565__$1;(statearr_12567_12596[(1)] = (15));
} else
{var statearr_12568_12597 = state_12565__$1;(statearr_12568_12597[(1)] = (16));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12566 === (1)))
{var state_12565__$1 = state_12565;var statearr_12569_12598 = state_12565__$1;(statearr_12569_12598[(2)] = null);
(statearr_12569_12598[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12566 === (4)))
{var inst_12539 = (state_12565[(7)]);var inst_12539__$1 = (state_12565[(2)]);var state_12565__$1 = (function (){var statearr_12570 = state_12565;(statearr_12570[(7)] = inst_12539__$1);
return statearr_12570;
})();if(cljs.core.truth_(inst_12539__$1))
{var statearr_12571_12599 = state_12565__$1;(statearr_12571_12599[(1)] = (5));
} else
{var statearr_12572_12600 = state_12565__$1;(statearr_12572_12600[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12566 === (15)))
{var state_12565__$1 = state_12565;var statearr_12573_12601 = state_12565__$1;(statearr_12573_12601[(2)] = null);
(statearr_12573_12601[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12566 === (13)))
{var state_12565__$1 = state_12565;var statearr_12574_12602 = state_12565__$1;(statearr_12574_12602[(2)] = null);
(statearr_12574_12602[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12566 === (6)))
{var state_12565__$1 = state_12565;var statearr_12575_12603 = state_12565__$1;(statearr_12575_12603[(2)] = null);
(statearr_12575_12603[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12566 === (17)))
{var inst_12561 = (state_12565[(2)]);var state_12565__$1 = state_12565;var statearr_12576_12604 = state_12565__$1;(statearr_12576_12604[(2)] = inst_12561);
(statearr_12576_12604[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12566 === (3)))
{var inst_12563 = (state_12565[(2)]);var state_12565__$1 = state_12565;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12565__$1,inst_12563);
} else
{if((state_val_12566 === (12)))
{var inst_12539 = (state_12565[(7)]);var inst_12549 = cljs.core.clj__GT_js.call(null,inst_12539);var inst_12550 = console.log(inst_12549);var state_12565__$1 = state_12565;var statearr_12577_12605 = state_12565__$1;(statearr_12577_12605[(2)] = inst_12550);
(statearr_12577_12605[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12566 === (2)))
{var state_12565__$1 = state_12565;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12565__$1,(4),ch);
} else
{if((state_val_12566 === (11)))
{var inst_12544 = (state_12565[(2)]);var state_12565__$1 = state_12565;var statearr_12578_12606 = state_12565__$1;(statearr_12578_12606[(2)] = inst_12544);
(statearr_12578_12606[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12566 === (9)))
{var state_12565__$1 = state_12565;var statearr_12579_12607 = state_12565__$1;(statearr_12579_12607[(2)] = null);
(statearr_12579_12607[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12566 === (5)))
{var state_12565__$1 = state_12565;if(cljs.core.truth_(delay))
{var statearr_12580_12608 = state_12565__$1;(statearr_12580_12608[(1)] = (8));
} else
{var statearr_12581_12609 = state_12565__$1;(statearr_12581_12609[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12566 === (14)))
{var inst_12539 = (state_12565[(7)]);var inst_12553 = (state_12565[(2)]);var state_12565__$1 = (function (){var statearr_12582 = state_12565;(statearr_12582[(8)] = inst_12553);
return statearr_12582;
})();var statearr_12583_12610 = state_12565__$1;(statearr_12583_12610[(2)] = inst_12539);
(statearr_12583_12610[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12566 === (16)))
{var state_12565__$1 = state_12565;var statearr_12584_12611 = state_12565__$1;(statearr_12584_12611[(2)] = null);
(statearr_12584_12611[(1)] = (17));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12566 === (10)))
{var inst_12547 = (state_12565[(2)]);var state_12565__$1 = (function (){var statearr_12585 = state_12565;(statearr_12585[(9)] = inst_12547);
return statearr_12585;
})();if(cljs.core.truth_(log))
{var statearr_12586_12612 = state_12565__$1;(statearr_12586_12612[(1)] = (12));
} else
{var statearr_12587_12613 = state_12565__$1;(statearr_12587_12613[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12566 === (8)))
{var inst_12542 = cljs.core.async.timeout.call(null,delay);var state_12565__$1 = state_12565;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12565__$1,(11),inst_12542);
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
});})(c__5708__auto___12595,map__12536,map__12536__$1,delay,log))
;return ((function (switch__5693__auto__,c__5708__auto___12595,map__12536,map__12536__$1,delay,log){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_12591 = [null,null,null,null,null,null,null,null,null,null];(statearr_12591[(0)] = state_machine__5694__auto__);
(statearr_12591[(1)] = (1));
return statearr_12591;
});
var state_machine__5694__auto____1 = (function (state_12565){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_12565);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e12592){if((e12592 instanceof Object))
{var ex__5697__auto__ = e12592;var statearr_12593_12614 = state_12565;(statearr_12593_12614[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12565);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e12592;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12615 = state_12565;
state_12565 = G__12615;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_12565){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_12565);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___12595,map__12536,map__12536__$1,delay,log))
})();var state__5710__auto__ = (function (){var statearr_12594 = f__5709__auto__.call(null);(statearr_12594[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___12595);
return statearr_12594;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
});})(c__5708__auto___12595,map__12536,map__12536__$1,delay,log))
);
return null;
};
var dorun_async = function (ch,var_args){
var p__12476 = null;if (arguments.length > 1) {
  p__12476 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return dorun_async__delegate.call(this,ch,p__12476);};
dorun_async.cljs$lang$maxFixedArity = 1;
dorun_async.cljs$lang$applyTo = (function (arglist__12616){
var ch = cljs.core.first(arglist__12616);
var p__12476 = cljs.core.rest(arglist__12616);
return dorun_async__delegate(ch,p__12476);
});
dorun_async.cljs$core$IFn$_invoke$arity$variadic = dorun_async__delegate;
return dorun_async;
})()
;
