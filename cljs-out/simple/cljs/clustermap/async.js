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
map_async.cljs$lang$applyTo = (function (arglist__23546){
var f = cljs.core.first(arglist__23546);
var colls = cljs.core.rest(arglist__23546);
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
var dorun_async__delegate = function (ch,p__23547){var map__23607 = p__23547;var map__23607__$1 = ((cljs.core.seq_QMARK_.call(null,map__23607))?cljs.core.apply.call(null,cljs.core.hash_map,map__23607):map__23607);var delay = cljs.core.get.call(null,map__23607__$1,new cljs.core.Keyword(null,"delay","delay",-574225219));var log = cljs.core.get.call(null,map__23607__$1,new cljs.core.Keyword(null,"log","log",-1595516004));var c__5693__auto___23666 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5693__auto___23666,map__23607,map__23607__$1,delay,log){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto___23666,map__23607,map__23607__$1,delay,log){
return (function (state_23636){var state_val_23637 = (state_23636[(1)]);if((state_val_23637 === (7)))
{var inst_23627 = (state_23636[(2)]);var state_23636__$1 = state_23636;if(cljs.core.truth_(inst_23627))
{var statearr_23638_23667 = state_23636__$1;(statearr_23638_23667[(1)] = (15));
} else
{var statearr_23639_23668 = state_23636__$1;(statearr_23639_23668[(1)] = (16));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23637 === (1)))
{var state_23636__$1 = state_23636;var statearr_23640_23669 = state_23636__$1;(statearr_23640_23669[(2)] = null);
(statearr_23640_23669[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23637 === (4)))
{var inst_23610 = (state_23636[(7)]);var inst_23610__$1 = (state_23636[(2)]);var state_23636__$1 = (function (){var statearr_23641 = state_23636;(statearr_23641[(7)] = inst_23610__$1);
return statearr_23641;
})();if(cljs.core.truth_(inst_23610__$1))
{var statearr_23642_23670 = state_23636__$1;(statearr_23642_23670[(1)] = (5));
} else
{var statearr_23643_23671 = state_23636__$1;(statearr_23643_23671[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23637 === (15)))
{var state_23636__$1 = state_23636;var statearr_23644_23672 = state_23636__$1;(statearr_23644_23672[(2)] = null);
(statearr_23644_23672[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23637 === (13)))
{var state_23636__$1 = state_23636;var statearr_23645_23673 = state_23636__$1;(statearr_23645_23673[(2)] = null);
(statearr_23645_23673[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23637 === (6)))
{var state_23636__$1 = state_23636;var statearr_23646_23674 = state_23636__$1;(statearr_23646_23674[(2)] = null);
(statearr_23646_23674[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23637 === (17)))
{var inst_23632 = (state_23636[(2)]);var state_23636__$1 = state_23636;var statearr_23647_23675 = state_23636__$1;(statearr_23647_23675[(2)] = inst_23632);
(statearr_23647_23675[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23637 === (3)))
{var inst_23634 = (state_23636[(2)]);var state_23636__$1 = state_23636;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23636__$1,inst_23634);
} else
{if((state_val_23637 === (12)))
{var inst_23610 = (state_23636[(7)]);var inst_23620 = cljs.core.clj__GT_js.call(null,inst_23610);var inst_23621 = console.log(inst_23620);var state_23636__$1 = state_23636;var statearr_23648_23676 = state_23636__$1;(statearr_23648_23676[(2)] = inst_23621);
(statearr_23648_23676[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23637 === (2)))
{var state_23636__$1 = state_23636;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23636__$1,(4),ch);
} else
{if((state_val_23637 === (11)))
{var inst_23615 = (state_23636[(2)]);var state_23636__$1 = state_23636;var statearr_23649_23677 = state_23636__$1;(statearr_23649_23677[(2)] = inst_23615);
(statearr_23649_23677[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23637 === (9)))
{var state_23636__$1 = state_23636;var statearr_23650_23678 = state_23636__$1;(statearr_23650_23678[(2)] = null);
(statearr_23650_23678[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23637 === (5)))
{var state_23636__$1 = state_23636;if(cljs.core.truth_(delay))
{var statearr_23651_23679 = state_23636__$1;(statearr_23651_23679[(1)] = (8));
} else
{var statearr_23652_23680 = state_23636__$1;(statearr_23652_23680[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23637 === (14)))
{var inst_23610 = (state_23636[(7)]);var inst_23624 = (state_23636[(2)]);var state_23636__$1 = (function (){var statearr_23653 = state_23636;(statearr_23653[(8)] = inst_23624);
return statearr_23653;
})();var statearr_23654_23681 = state_23636__$1;(statearr_23654_23681[(2)] = inst_23610);
(statearr_23654_23681[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23637 === (16)))
{var state_23636__$1 = state_23636;var statearr_23655_23682 = state_23636__$1;(statearr_23655_23682[(2)] = null);
(statearr_23655_23682[(1)] = (17));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23637 === (10)))
{var inst_23618 = (state_23636[(2)]);var state_23636__$1 = (function (){var statearr_23656 = state_23636;(statearr_23656[(9)] = inst_23618);
return statearr_23656;
})();if(cljs.core.truth_(log))
{var statearr_23657_23683 = state_23636__$1;(statearr_23657_23683[(1)] = (12));
} else
{var statearr_23658_23684 = state_23636__$1;(statearr_23658_23684[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23637 === (8)))
{var inst_23613 = cljs.core.async.timeout.call(null,delay);var state_23636__$1 = state_23636;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23636__$1,(11),inst_23613);
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
});})(c__5693__auto___23666,map__23607,map__23607__$1,delay,log))
;return ((function (switch__5678__auto__,c__5693__auto___23666,map__23607,map__23607__$1,delay,log){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_23662 = [null,null,null,null,null,null,null,null,null,null];(statearr_23662[(0)] = state_machine__5679__auto__);
(statearr_23662[(1)] = (1));
return statearr_23662;
});
var state_machine__5679__auto____1 = (function (state_23636){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_23636);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e23663){if((e23663 instanceof Object))
{var ex__5682__auto__ = e23663;var statearr_23664_23685 = state_23636;(statearr_23664_23685[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23636);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e23663;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__23686 = state_23636;
state_23636 = G__23686;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_23636){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_23636);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto___23666,map__23607,map__23607__$1,delay,log))
})();var state__5695__auto__ = (function (){var statearr_23665 = f__5694__auto__.call(null);(statearr_23665[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto___23666);
return statearr_23665;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5695__auto__);
});})(c__5693__auto___23666,map__23607,map__23607__$1,delay,log))
);
return null;
};
var dorun_async = function (ch,var_args){
var p__23547 = null;if (arguments.length > 1) {
  p__23547 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return dorun_async__delegate.call(this,ch,p__23547);};
dorun_async.cljs$lang$maxFixedArity = 1;
dorun_async.cljs$lang$applyTo = (function (arglist__23687){
var ch = cljs.core.first(arglist__23687);
var p__23547 = cljs.core.rest(arglist__23687);
return dorun_async__delegate(ch,p__23547);
});
dorun_async.cljs$core$IFn$_invoke$arity$variadic = dorun_async__delegate;
return dorun_async;
})()
;
