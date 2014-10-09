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
map_async.cljs$lang$applyTo = (function (arglist__52454){
var f = cljs.core.first(arglist__52454);
var colls = cljs.core.rest(arglist__52454);
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
var dorun_async__delegate = function (ch,p__52455){var map__52515 = p__52455;var map__52515__$1 = ((cljs.core.seq_QMARK_.call(null,map__52515))?cljs.core.apply.call(null,cljs.core.hash_map,map__52515):map__52515);var delay = cljs.core.get.call(null,map__52515__$1,new cljs.core.Keyword(null,"delay","delay",-574225219));var log = cljs.core.get.call(null,map__52515__$1,new cljs.core.Keyword(null,"log","log",-1595516004));var c__5708__auto___52574 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5708__auto___52574,map__52515,map__52515__$1,delay,log){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___52574,map__52515,map__52515__$1,delay,log){
return (function (state_52544){var state_val_52545 = (state_52544[(1)]);if((state_val_52545 === (7)))
{var inst_52535 = (state_52544[(2)]);var state_52544__$1 = state_52544;if(cljs.core.truth_(inst_52535))
{var statearr_52546_52575 = state_52544__$1;(statearr_52546_52575[(1)] = (15));
} else
{var statearr_52547_52576 = state_52544__$1;(statearr_52547_52576[(1)] = (16));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_52545 === (1)))
{var state_52544__$1 = state_52544;var statearr_52548_52577 = state_52544__$1;(statearr_52548_52577[(2)] = null);
(statearr_52548_52577[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_52545 === (4)))
{var inst_52518 = (state_52544[(7)]);var inst_52518__$1 = (state_52544[(2)]);var state_52544__$1 = (function (){var statearr_52549 = state_52544;(statearr_52549[(7)] = inst_52518__$1);
return statearr_52549;
})();if(cljs.core.truth_(inst_52518__$1))
{var statearr_52550_52578 = state_52544__$1;(statearr_52550_52578[(1)] = (5));
} else
{var statearr_52551_52579 = state_52544__$1;(statearr_52551_52579[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_52545 === (15)))
{var state_52544__$1 = state_52544;var statearr_52552_52580 = state_52544__$1;(statearr_52552_52580[(2)] = null);
(statearr_52552_52580[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_52545 === (13)))
{var state_52544__$1 = state_52544;var statearr_52553_52581 = state_52544__$1;(statearr_52553_52581[(2)] = null);
(statearr_52553_52581[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_52545 === (6)))
{var state_52544__$1 = state_52544;var statearr_52554_52582 = state_52544__$1;(statearr_52554_52582[(2)] = null);
(statearr_52554_52582[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_52545 === (17)))
{var inst_52540 = (state_52544[(2)]);var state_52544__$1 = state_52544;var statearr_52555_52583 = state_52544__$1;(statearr_52555_52583[(2)] = inst_52540);
(statearr_52555_52583[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_52545 === (3)))
{var inst_52542 = (state_52544[(2)]);var state_52544__$1 = state_52544;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_52544__$1,inst_52542);
} else
{if((state_val_52545 === (12)))
{var inst_52518 = (state_52544[(7)]);var inst_52528 = cljs.core.clj__GT_js.call(null,inst_52518);var inst_52529 = console.log(inst_52528);var state_52544__$1 = state_52544;var statearr_52556_52584 = state_52544__$1;(statearr_52556_52584[(2)] = inst_52529);
(statearr_52556_52584[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_52545 === (2)))
{var state_52544__$1 = state_52544;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_52544__$1,(4),ch);
} else
{if((state_val_52545 === (11)))
{var inst_52523 = (state_52544[(2)]);var state_52544__$1 = state_52544;var statearr_52557_52585 = state_52544__$1;(statearr_52557_52585[(2)] = inst_52523);
(statearr_52557_52585[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_52545 === (9)))
{var state_52544__$1 = state_52544;var statearr_52558_52586 = state_52544__$1;(statearr_52558_52586[(2)] = null);
(statearr_52558_52586[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_52545 === (5)))
{var state_52544__$1 = state_52544;if(cljs.core.truth_(delay))
{var statearr_52559_52587 = state_52544__$1;(statearr_52559_52587[(1)] = (8));
} else
{var statearr_52560_52588 = state_52544__$1;(statearr_52560_52588[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_52545 === (14)))
{var inst_52518 = (state_52544[(7)]);var inst_52532 = (state_52544[(2)]);var state_52544__$1 = (function (){var statearr_52561 = state_52544;(statearr_52561[(8)] = inst_52532);
return statearr_52561;
})();var statearr_52562_52589 = state_52544__$1;(statearr_52562_52589[(2)] = inst_52518);
(statearr_52562_52589[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_52545 === (16)))
{var state_52544__$1 = state_52544;var statearr_52563_52590 = state_52544__$1;(statearr_52563_52590[(2)] = null);
(statearr_52563_52590[(1)] = (17));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_52545 === (10)))
{var inst_52526 = (state_52544[(2)]);var state_52544__$1 = (function (){var statearr_52564 = state_52544;(statearr_52564[(9)] = inst_52526);
return statearr_52564;
})();if(cljs.core.truth_(log))
{var statearr_52565_52591 = state_52544__$1;(statearr_52565_52591[(1)] = (12));
} else
{var statearr_52566_52592 = state_52544__$1;(statearr_52566_52592[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_52545 === (8)))
{var inst_52521 = cljs.core.async.timeout.call(null,delay);var state_52544__$1 = state_52544;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_52544__$1,(11),inst_52521);
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
});})(c__5708__auto___52574,map__52515,map__52515__$1,delay,log))
;return ((function (switch__5693__auto__,c__5708__auto___52574,map__52515,map__52515__$1,delay,log){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_52570 = [null,null,null,null,null,null,null,null,null,null];(statearr_52570[(0)] = state_machine__5694__auto__);
(statearr_52570[(1)] = (1));
return statearr_52570;
});
var state_machine__5694__auto____1 = (function (state_52544){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_52544);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e52571){if((e52571 instanceof Object))
{var ex__5697__auto__ = e52571;var statearr_52572_52593 = state_52544;(statearr_52572_52593[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_52544);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e52571;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__52594 = state_52544;
state_52544 = G__52594;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_52544){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_52544);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___52574,map__52515,map__52515__$1,delay,log))
})();var state__5710__auto__ = (function (){var statearr_52573 = f__5709__auto__.call(null);(statearr_52573[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___52574);
return statearr_52573;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
});})(c__5708__auto___52574,map__52515,map__52515__$1,delay,log))
);
return null;
};
var dorun_async = function (ch,var_args){
var p__52455 = null;if (arguments.length > 1) {
  p__52455 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return dorun_async__delegate.call(this,ch,p__52455);};
dorun_async.cljs$lang$maxFixedArity = 1;
dorun_async.cljs$lang$applyTo = (function (arglist__52595){
var ch = cljs.core.first(arglist__52595);
var p__52455 = cljs.core.rest(arglist__52595);
return dorun_async__delegate(ch,p__52455);
});
dorun_async.cljs$core$IFn$_invoke$arity$variadic = dorun_async__delegate;
return dorun_async;
})()
;

//# sourceMappingURL=async.js.map