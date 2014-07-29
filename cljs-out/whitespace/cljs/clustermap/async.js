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
map_async.cljs$lang$applyTo = (function (arglist__12550){
var f = cljs.core.first(arglist__12550);
var colls = cljs.core.rest(arglist__12550);
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
var dorun_async__delegate = function (ch,p__12551){var map__12611 = p__12551;var map__12611__$1 = ((cljs.core.seq_QMARK_.call(null,map__12611))?cljs.core.apply.call(null,cljs.core.hash_map,map__12611):map__12611);var delay = cljs.core.get.call(null,map__12611__$1,new cljs.core.Keyword(null,"delay","delay",-574225219));var log = cljs.core.get.call(null,map__12611__$1,new cljs.core.Keyword(null,"log","log",-1595516004));var c__5693__auto___12670 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5693__auto___12670,map__12611,map__12611__$1,delay,log){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto___12670,map__12611,map__12611__$1,delay,log){
return (function (state_12640){var state_val_12641 = (state_12640[(1)]);if((state_val_12641 === (7)))
{var inst_12631 = (state_12640[(2)]);var state_12640__$1 = state_12640;if(cljs.core.truth_(inst_12631))
{var statearr_12642_12671 = state_12640__$1;(statearr_12642_12671[(1)] = (15));
} else
{var statearr_12643_12672 = state_12640__$1;(statearr_12643_12672[(1)] = (16));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12641 === (1)))
{var state_12640__$1 = state_12640;var statearr_12644_12673 = state_12640__$1;(statearr_12644_12673[(2)] = null);
(statearr_12644_12673[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12641 === (4)))
{var inst_12614 = (state_12640[(7)]);var inst_12614__$1 = (state_12640[(2)]);var state_12640__$1 = (function (){var statearr_12645 = state_12640;(statearr_12645[(7)] = inst_12614__$1);
return statearr_12645;
})();if(cljs.core.truth_(inst_12614__$1))
{var statearr_12646_12674 = state_12640__$1;(statearr_12646_12674[(1)] = (5));
} else
{var statearr_12647_12675 = state_12640__$1;(statearr_12647_12675[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12641 === (15)))
{var state_12640__$1 = state_12640;var statearr_12648_12676 = state_12640__$1;(statearr_12648_12676[(2)] = null);
(statearr_12648_12676[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12641 === (13)))
{var state_12640__$1 = state_12640;var statearr_12649_12677 = state_12640__$1;(statearr_12649_12677[(2)] = null);
(statearr_12649_12677[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12641 === (6)))
{var state_12640__$1 = state_12640;var statearr_12650_12678 = state_12640__$1;(statearr_12650_12678[(2)] = null);
(statearr_12650_12678[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12641 === (17)))
{var inst_12636 = (state_12640[(2)]);var state_12640__$1 = state_12640;var statearr_12651_12679 = state_12640__$1;(statearr_12651_12679[(2)] = inst_12636);
(statearr_12651_12679[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12641 === (3)))
{var inst_12638 = (state_12640[(2)]);var state_12640__$1 = state_12640;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12640__$1,inst_12638);
} else
{if((state_val_12641 === (12)))
{var inst_12614 = (state_12640[(7)]);var inst_12624 = cljs.core.clj__GT_js.call(null,inst_12614);var inst_12625 = console.log(inst_12624);var state_12640__$1 = state_12640;var statearr_12652_12680 = state_12640__$1;(statearr_12652_12680[(2)] = inst_12625);
(statearr_12652_12680[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12641 === (2)))
{var state_12640__$1 = state_12640;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12640__$1,(4),ch);
} else
{if((state_val_12641 === (11)))
{var inst_12619 = (state_12640[(2)]);var state_12640__$1 = state_12640;var statearr_12653_12681 = state_12640__$1;(statearr_12653_12681[(2)] = inst_12619);
(statearr_12653_12681[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12641 === (9)))
{var state_12640__$1 = state_12640;var statearr_12654_12682 = state_12640__$1;(statearr_12654_12682[(2)] = null);
(statearr_12654_12682[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12641 === (5)))
{var state_12640__$1 = state_12640;if(cljs.core.truth_(delay))
{var statearr_12655_12683 = state_12640__$1;(statearr_12655_12683[(1)] = (8));
} else
{var statearr_12656_12684 = state_12640__$1;(statearr_12656_12684[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12641 === (14)))
{var inst_12614 = (state_12640[(7)]);var inst_12628 = (state_12640[(2)]);var state_12640__$1 = (function (){var statearr_12657 = state_12640;(statearr_12657[(8)] = inst_12628);
return statearr_12657;
})();var statearr_12658_12685 = state_12640__$1;(statearr_12658_12685[(2)] = inst_12614);
(statearr_12658_12685[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12641 === (16)))
{var state_12640__$1 = state_12640;var statearr_12659_12686 = state_12640__$1;(statearr_12659_12686[(2)] = null);
(statearr_12659_12686[(1)] = (17));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12641 === (10)))
{var inst_12622 = (state_12640[(2)]);var state_12640__$1 = (function (){var statearr_12660 = state_12640;(statearr_12660[(9)] = inst_12622);
return statearr_12660;
})();if(cljs.core.truth_(log))
{var statearr_12661_12687 = state_12640__$1;(statearr_12661_12687[(1)] = (12));
} else
{var statearr_12662_12688 = state_12640__$1;(statearr_12662_12688[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12641 === (8)))
{var inst_12617 = cljs.core.async.timeout.call(null,delay);var state_12640__$1 = state_12640;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12640__$1,(11),inst_12617);
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
});})(c__5693__auto___12670,map__12611,map__12611__$1,delay,log))
;return ((function (switch__5678__auto__,c__5693__auto___12670,map__12611,map__12611__$1,delay,log){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_12666 = [null,null,null,null,null,null,null,null,null,null];(statearr_12666[(0)] = state_machine__5679__auto__);
(statearr_12666[(1)] = (1));
return statearr_12666;
});
var state_machine__5679__auto____1 = (function (state_12640){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_12640);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e12667){if((e12667 instanceof Object))
{var ex__5682__auto__ = e12667;var statearr_12668_12689 = state_12640;(statearr_12668_12689[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12640);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e12667;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12690 = state_12640;
state_12640 = G__12690;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_12640){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_12640);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto___12670,map__12611,map__12611__$1,delay,log))
})();var state__5695__auto__ = (function (){var statearr_12669 = f__5694__auto__.call(null);(statearr_12669[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto___12670);
return statearr_12669;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5695__auto__);
});})(c__5693__auto___12670,map__12611,map__12611__$1,delay,log))
);
return null;
};
var dorun_async = function (ch,var_args){
var p__12551 = null;if (arguments.length > 1) {
  p__12551 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return dorun_async__delegate.call(this,ch,p__12551);};
dorun_async.cljs$lang$maxFixedArity = 1;
dorun_async.cljs$lang$applyTo = (function (arglist__12691){
var ch = cljs.core.first(arglist__12691);
var p__12551 = cljs.core.rest(arglist__12691);
return dorun_async__delegate(ch,p__12551);
});
dorun_async.cljs$core$IFn$_invoke$arity$variadic = dorun_async__delegate;
return dorun_async;
})()
;
