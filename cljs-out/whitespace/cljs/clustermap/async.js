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
map_async.cljs$lang$applyTo = (function (arglist__12742){
var f = cljs.core.first(arglist__12742);
var colls = cljs.core.rest(arglist__12742);
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
var dorun_async__delegate = function (ch,p__12743){var map__12803 = p__12743;var map__12803__$1 = ((cljs.core.seq_QMARK_.call(null,map__12803))?cljs.core.apply.call(null,cljs.core.hash_map,map__12803):map__12803);var delay = cljs.core.get.call(null,map__12803__$1,new cljs.core.Keyword(null,"delay","delay",-574225219));var log = cljs.core.get.call(null,map__12803__$1,new cljs.core.Keyword(null,"log","log",-1595516004));var c__5693__auto___12862 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5693__auto___12862,map__12803,map__12803__$1,delay,log){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto___12862,map__12803,map__12803__$1,delay,log){
return (function (state_12832){var state_val_12833 = (state_12832[(1)]);if((state_val_12833 === (7)))
{var inst_12823 = (state_12832[(2)]);var state_12832__$1 = state_12832;if(cljs.core.truth_(inst_12823))
{var statearr_12834_12863 = state_12832__$1;(statearr_12834_12863[(1)] = (15));
} else
{var statearr_12835_12864 = state_12832__$1;(statearr_12835_12864[(1)] = (16));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12833 === (1)))
{var state_12832__$1 = state_12832;var statearr_12836_12865 = state_12832__$1;(statearr_12836_12865[(2)] = null);
(statearr_12836_12865[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12833 === (4)))
{var inst_12806 = (state_12832[(7)]);var inst_12806__$1 = (state_12832[(2)]);var state_12832__$1 = (function (){var statearr_12837 = state_12832;(statearr_12837[(7)] = inst_12806__$1);
return statearr_12837;
})();if(cljs.core.truth_(inst_12806__$1))
{var statearr_12838_12866 = state_12832__$1;(statearr_12838_12866[(1)] = (5));
} else
{var statearr_12839_12867 = state_12832__$1;(statearr_12839_12867[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12833 === (15)))
{var state_12832__$1 = state_12832;var statearr_12840_12868 = state_12832__$1;(statearr_12840_12868[(2)] = null);
(statearr_12840_12868[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12833 === (13)))
{var state_12832__$1 = state_12832;var statearr_12841_12869 = state_12832__$1;(statearr_12841_12869[(2)] = null);
(statearr_12841_12869[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12833 === (6)))
{var state_12832__$1 = state_12832;var statearr_12842_12870 = state_12832__$1;(statearr_12842_12870[(2)] = null);
(statearr_12842_12870[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12833 === (17)))
{var inst_12828 = (state_12832[(2)]);var state_12832__$1 = state_12832;var statearr_12843_12871 = state_12832__$1;(statearr_12843_12871[(2)] = inst_12828);
(statearr_12843_12871[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12833 === (3)))
{var inst_12830 = (state_12832[(2)]);var state_12832__$1 = state_12832;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12832__$1,inst_12830);
} else
{if((state_val_12833 === (12)))
{var inst_12806 = (state_12832[(7)]);var inst_12816 = cljs.core.clj__GT_js.call(null,inst_12806);var inst_12817 = console.log(inst_12816);var state_12832__$1 = state_12832;var statearr_12844_12872 = state_12832__$1;(statearr_12844_12872[(2)] = inst_12817);
(statearr_12844_12872[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12833 === (2)))
{var state_12832__$1 = state_12832;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12832__$1,(4),ch);
} else
{if((state_val_12833 === (11)))
{var inst_12811 = (state_12832[(2)]);var state_12832__$1 = state_12832;var statearr_12845_12873 = state_12832__$1;(statearr_12845_12873[(2)] = inst_12811);
(statearr_12845_12873[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12833 === (9)))
{var state_12832__$1 = state_12832;var statearr_12846_12874 = state_12832__$1;(statearr_12846_12874[(2)] = null);
(statearr_12846_12874[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12833 === (5)))
{var state_12832__$1 = state_12832;if(cljs.core.truth_(delay))
{var statearr_12847_12875 = state_12832__$1;(statearr_12847_12875[(1)] = (8));
} else
{var statearr_12848_12876 = state_12832__$1;(statearr_12848_12876[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12833 === (14)))
{var inst_12806 = (state_12832[(7)]);var inst_12820 = (state_12832[(2)]);var state_12832__$1 = (function (){var statearr_12849 = state_12832;(statearr_12849[(8)] = inst_12820);
return statearr_12849;
})();var statearr_12850_12877 = state_12832__$1;(statearr_12850_12877[(2)] = inst_12806);
(statearr_12850_12877[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12833 === (16)))
{var state_12832__$1 = state_12832;var statearr_12851_12878 = state_12832__$1;(statearr_12851_12878[(2)] = null);
(statearr_12851_12878[(1)] = (17));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12833 === (10)))
{var inst_12814 = (state_12832[(2)]);var state_12832__$1 = (function (){var statearr_12852 = state_12832;(statearr_12852[(9)] = inst_12814);
return statearr_12852;
})();if(cljs.core.truth_(log))
{var statearr_12853_12879 = state_12832__$1;(statearr_12853_12879[(1)] = (12));
} else
{var statearr_12854_12880 = state_12832__$1;(statearr_12854_12880[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12833 === (8)))
{var inst_12809 = cljs.core.async.timeout.call(null,delay);var state_12832__$1 = state_12832;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12832__$1,(11),inst_12809);
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
});})(c__5693__auto___12862,map__12803,map__12803__$1,delay,log))
;return ((function (switch__5678__auto__,c__5693__auto___12862,map__12803,map__12803__$1,delay,log){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_12858 = [null,null,null,null,null,null,null,null,null,null];(statearr_12858[(0)] = state_machine__5679__auto__);
(statearr_12858[(1)] = (1));
return statearr_12858;
});
var state_machine__5679__auto____1 = (function (state_12832){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_12832);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e12859){if((e12859 instanceof Object))
{var ex__5682__auto__ = e12859;var statearr_12860_12881 = state_12832;(statearr_12860_12881[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12832);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e12859;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12882 = state_12832;
state_12832 = G__12882;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_12832){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_12832);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto___12862,map__12803,map__12803__$1,delay,log))
})();var state__5695__auto__ = (function (){var statearr_12861 = f__5694__auto__.call(null);(statearr_12861[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto___12862);
return statearr_12861;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5695__auto__);
});})(c__5693__auto___12862,map__12803,map__12803__$1,delay,log))
);
return null;
};
var dorun_async = function (ch,var_args){
var p__12743 = null;if (arguments.length > 1) {
  p__12743 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return dorun_async__delegate.call(this,ch,p__12743);};
dorun_async.cljs$lang$maxFixedArity = 1;
dorun_async.cljs$lang$applyTo = (function (arglist__12883){
var ch = cljs.core.first(arglist__12883);
var p__12743 = cljs.core.rest(arglist__12883);
return dorun_async__delegate(ch,p__12743);
});
dorun_async.cljs$core$IFn$_invoke$arity$variadic = dorun_async__delegate;
return dorun_async;
})()
;
