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
map_async.cljs$lang$applyTo = (function (arglist__12580){
var f = cljs.core.first(arglist__12580);
var colls = cljs.core.rest(arglist__12580);
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
var dorun_async__delegate = function (ch,p__12581){var map__12641 = p__12581;var map__12641__$1 = ((cljs.core.seq_QMARK_.call(null,map__12641))?cljs.core.apply.call(null,cljs.core.hash_map,map__12641):map__12641);var delay = cljs.core.get.call(null,map__12641__$1,new cljs.core.Keyword(null,"delay","delay",-574225219));var log = cljs.core.get.call(null,map__12641__$1,new cljs.core.Keyword(null,"log","log",-1595516004));var c__5691__auto___12700 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5691__auto___12700,map__12641,map__12641__$1,delay,log){
return (function (){var f__5692__auto__ = (function (){var switch__5676__auto__ = ((function (c__5691__auto___12700,map__12641,map__12641__$1,delay,log){
return (function (state_12670){var state_val_12671 = (state_12670[(1)]);if((state_val_12671 === (7)))
{var inst_12661 = (state_12670[(2)]);var state_12670__$1 = state_12670;if(cljs.core.truth_(inst_12661))
{var statearr_12672_12701 = state_12670__$1;(statearr_12672_12701[(1)] = (15));
} else
{var statearr_12673_12702 = state_12670__$1;(statearr_12673_12702[(1)] = (16));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12671 === (1)))
{var state_12670__$1 = state_12670;var statearr_12674_12703 = state_12670__$1;(statearr_12674_12703[(2)] = null);
(statearr_12674_12703[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12671 === (4)))
{var inst_12644 = (state_12670[(7)]);var inst_12644__$1 = (state_12670[(2)]);var state_12670__$1 = (function (){var statearr_12675 = state_12670;(statearr_12675[(7)] = inst_12644__$1);
return statearr_12675;
})();if(cljs.core.truth_(inst_12644__$1))
{var statearr_12676_12704 = state_12670__$1;(statearr_12676_12704[(1)] = (5));
} else
{var statearr_12677_12705 = state_12670__$1;(statearr_12677_12705[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12671 === (15)))
{var state_12670__$1 = state_12670;var statearr_12678_12706 = state_12670__$1;(statearr_12678_12706[(2)] = null);
(statearr_12678_12706[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12671 === (13)))
{var state_12670__$1 = state_12670;var statearr_12679_12707 = state_12670__$1;(statearr_12679_12707[(2)] = null);
(statearr_12679_12707[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12671 === (6)))
{var state_12670__$1 = state_12670;var statearr_12680_12708 = state_12670__$1;(statearr_12680_12708[(2)] = null);
(statearr_12680_12708[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12671 === (17)))
{var inst_12666 = (state_12670[(2)]);var state_12670__$1 = state_12670;var statearr_12681_12709 = state_12670__$1;(statearr_12681_12709[(2)] = inst_12666);
(statearr_12681_12709[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12671 === (3)))
{var inst_12668 = (state_12670[(2)]);var state_12670__$1 = state_12670;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12670__$1,inst_12668);
} else
{if((state_val_12671 === (12)))
{var inst_12644 = (state_12670[(7)]);var inst_12654 = cljs.core.clj__GT_js.call(null,inst_12644);var inst_12655 = console.log(inst_12654);var state_12670__$1 = state_12670;var statearr_12682_12710 = state_12670__$1;(statearr_12682_12710[(2)] = inst_12655);
(statearr_12682_12710[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12671 === (2)))
{var state_12670__$1 = state_12670;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12670__$1,(4),ch);
} else
{if((state_val_12671 === (11)))
{var inst_12649 = (state_12670[(2)]);var state_12670__$1 = state_12670;var statearr_12683_12711 = state_12670__$1;(statearr_12683_12711[(2)] = inst_12649);
(statearr_12683_12711[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12671 === (9)))
{var state_12670__$1 = state_12670;var statearr_12684_12712 = state_12670__$1;(statearr_12684_12712[(2)] = null);
(statearr_12684_12712[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12671 === (5)))
{var state_12670__$1 = state_12670;if(cljs.core.truth_(delay))
{var statearr_12685_12713 = state_12670__$1;(statearr_12685_12713[(1)] = (8));
} else
{var statearr_12686_12714 = state_12670__$1;(statearr_12686_12714[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12671 === (14)))
{var inst_12644 = (state_12670[(7)]);var inst_12658 = (state_12670[(2)]);var state_12670__$1 = (function (){var statearr_12687 = state_12670;(statearr_12687[(8)] = inst_12658);
return statearr_12687;
})();var statearr_12688_12715 = state_12670__$1;(statearr_12688_12715[(2)] = inst_12644);
(statearr_12688_12715[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12671 === (16)))
{var state_12670__$1 = state_12670;var statearr_12689_12716 = state_12670__$1;(statearr_12689_12716[(2)] = null);
(statearr_12689_12716[(1)] = (17));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12671 === (10)))
{var inst_12652 = (state_12670[(2)]);var state_12670__$1 = (function (){var statearr_12690 = state_12670;(statearr_12690[(9)] = inst_12652);
return statearr_12690;
})();if(cljs.core.truth_(log))
{var statearr_12691_12717 = state_12670__$1;(statearr_12691_12717[(1)] = (12));
} else
{var statearr_12692_12718 = state_12670__$1;(statearr_12692_12718[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12671 === (8)))
{var inst_12647 = cljs.core.async.timeout.call(null,delay);var state_12670__$1 = state_12670;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12670__$1,(11),inst_12647);
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
});})(c__5691__auto___12700,map__12641,map__12641__$1,delay,log))
;return ((function (switch__5676__auto__,c__5691__auto___12700,map__12641,map__12641__$1,delay,log){
return (function() {
var state_machine__5677__auto__ = null;
var state_machine__5677__auto____0 = (function (){var statearr_12696 = [null,null,null,null,null,null,null,null,null,null];(statearr_12696[(0)] = state_machine__5677__auto__);
(statearr_12696[(1)] = (1));
return statearr_12696;
});
var state_machine__5677__auto____1 = (function (state_12670){while(true){
var ret_value__5678__auto__ = (function (){try{while(true){
var result__5679__auto__ = switch__5676__auto__.call(null,state_12670);if(cljs.core.keyword_identical_QMARK_.call(null,result__5679__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5679__auto__;
}
break;
}
}catch (e12697){if((e12697 instanceof Object))
{var ex__5680__auto__ = e12697;var statearr_12698_12719 = state_12670;(statearr_12698_12719[(5)] = ex__5680__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12670);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e12697;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5678__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12720 = state_12670;
state_12670 = G__12720;
continue;
}
} else
{return ret_value__5678__auto__;
}
break;
}
});
state_machine__5677__auto__ = function(state_12670){
switch(arguments.length){
case 0:
return state_machine__5677__auto____0.call(this);
case 1:
return state_machine__5677__auto____1.call(this,state_12670);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5677__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5677__auto____0;
state_machine__5677__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5677__auto____1;
return state_machine__5677__auto__;
})()
;})(switch__5676__auto__,c__5691__auto___12700,map__12641,map__12641__$1,delay,log))
})();var state__5693__auto__ = (function (){var statearr_12699 = f__5692__auto__.call(null);(statearr_12699[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5691__auto___12700);
return statearr_12699;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5693__auto__);
});})(c__5691__auto___12700,map__12641,map__12641__$1,delay,log))
);
return null;
};
var dorun_async = function (ch,var_args){
var p__12581 = null;if (arguments.length > 1) {
  p__12581 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return dorun_async__delegate.call(this,ch,p__12581);};
dorun_async.cljs$lang$maxFixedArity = 1;
dorun_async.cljs$lang$applyTo = (function (arglist__12721){
var ch = cljs.core.first(arglist__12721);
var p__12581 = cljs.core.rest(arglist__12721);
return dorun_async__delegate(ch,p__12581);
});
dorun_async.cljs$core$IFn$_invoke$arity$variadic = dorun_async__delegate;
return dorun_async;
})()
;
