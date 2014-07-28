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
map_async.cljs$lang$applyTo = (function (arglist__12745){
var f = cljs.core.first(arglist__12745);
var colls = cljs.core.rest(arglist__12745);
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
var dorun_async__delegate = function (ch,p__12746){var map__12806 = p__12746;var map__12806__$1 = ((cljs.core.seq_QMARK_.call(null,map__12806))?cljs.core.apply.call(null,cljs.core.hash_map,map__12806):map__12806);var delay = cljs.core.get.call(null,map__12806__$1,new cljs.core.Keyword(null,"delay","delay",-574225219));var log = cljs.core.get.call(null,map__12806__$1,new cljs.core.Keyword(null,"log","log",-1595516004));var c__5693__auto___12865 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5693__auto___12865,map__12806,map__12806__$1,delay,log){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto___12865,map__12806,map__12806__$1,delay,log){
return (function (state_12835){var state_val_12836 = (state_12835[(1)]);if((state_val_12836 === (7)))
{var inst_12826 = (state_12835[(2)]);var state_12835__$1 = state_12835;if(cljs.core.truth_(inst_12826))
{var statearr_12837_12866 = state_12835__$1;(statearr_12837_12866[(1)] = (15));
} else
{var statearr_12838_12867 = state_12835__$1;(statearr_12838_12867[(1)] = (16));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12836 === (1)))
{var state_12835__$1 = state_12835;var statearr_12839_12868 = state_12835__$1;(statearr_12839_12868[(2)] = null);
(statearr_12839_12868[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12836 === (4)))
{var inst_12809 = (state_12835[(7)]);var inst_12809__$1 = (state_12835[(2)]);var state_12835__$1 = (function (){var statearr_12840 = state_12835;(statearr_12840[(7)] = inst_12809__$1);
return statearr_12840;
})();if(cljs.core.truth_(inst_12809__$1))
{var statearr_12841_12869 = state_12835__$1;(statearr_12841_12869[(1)] = (5));
} else
{var statearr_12842_12870 = state_12835__$1;(statearr_12842_12870[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12836 === (15)))
{var state_12835__$1 = state_12835;var statearr_12843_12871 = state_12835__$1;(statearr_12843_12871[(2)] = null);
(statearr_12843_12871[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12836 === (13)))
{var state_12835__$1 = state_12835;var statearr_12844_12872 = state_12835__$1;(statearr_12844_12872[(2)] = null);
(statearr_12844_12872[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12836 === (6)))
{var state_12835__$1 = state_12835;var statearr_12845_12873 = state_12835__$1;(statearr_12845_12873[(2)] = null);
(statearr_12845_12873[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12836 === (17)))
{var inst_12831 = (state_12835[(2)]);var state_12835__$1 = state_12835;var statearr_12846_12874 = state_12835__$1;(statearr_12846_12874[(2)] = inst_12831);
(statearr_12846_12874[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12836 === (3)))
{var inst_12833 = (state_12835[(2)]);var state_12835__$1 = state_12835;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12835__$1,inst_12833);
} else
{if((state_val_12836 === (12)))
{var inst_12809 = (state_12835[(7)]);var inst_12819 = cljs.core.clj__GT_js.call(null,inst_12809);var inst_12820 = console.log(inst_12819);var state_12835__$1 = state_12835;var statearr_12847_12875 = state_12835__$1;(statearr_12847_12875[(2)] = inst_12820);
(statearr_12847_12875[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12836 === (2)))
{var state_12835__$1 = state_12835;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12835__$1,(4),ch);
} else
{if((state_val_12836 === (11)))
{var inst_12814 = (state_12835[(2)]);var state_12835__$1 = state_12835;var statearr_12848_12876 = state_12835__$1;(statearr_12848_12876[(2)] = inst_12814);
(statearr_12848_12876[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12836 === (9)))
{var state_12835__$1 = state_12835;var statearr_12849_12877 = state_12835__$1;(statearr_12849_12877[(2)] = null);
(statearr_12849_12877[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12836 === (5)))
{var state_12835__$1 = state_12835;if(cljs.core.truth_(delay))
{var statearr_12850_12878 = state_12835__$1;(statearr_12850_12878[(1)] = (8));
} else
{var statearr_12851_12879 = state_12835__$1;(statearr_12851_12879[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12836 === (14)))
{var inst_12809 = (state_12835[(7)]);var inst_12823 = (state_12835[(2)]);var state_12835__$1 = (function (){var statearr_12852 = state_12835;(statearr_12852[(8)] = inst_12823);
return statearr_12852;
})();var statearr_12853_12880 = state_12835__$1;(statearr_12853_12880[(2)] = inst_12809);
(statearr_12853_12880[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12836 === (16)))
{var state_12835__$1 = state_12835;var statearr_12854_12881 = state_12835__$1;(statearr_12854_12881[(2)] = null);
(statearr_12854_12881[(1)] = (17));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12836 === (10)))
{var inst_12817 = (state_12835[(2)]);var state_12835__$1 = (function (){var statearr_12855 = state_12835;(statearr_12855[(9)] = inst_12817);
return statearr_12855;
})();if(cljs.core.truth_(log))
{var statearr_12856_12882 = state_12835__$1;(statearr_12856_12882[(1)] = (12));
} else
{var statearr_12857_12883 = state_12835__$1;(statearr_12857_12883[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12836 === (8)))
{var inst_12812 = cljs.core.async.timeout.call(null,delay);var state_12835__$1 = state_12835;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12835__$1,(11),inst_12812);
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
});})(c__5693__auto___12865,map__12806,map__12806__$1,delay,log))
;return ((function (switch__5678__auto__,c__5693__auto___12865,map__12806,map__12806__$1,delay,log){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_12861 = [null,null,null,null,null,null,null,null,null,null];(statearr_12861[(0)] = state_machine__5679__auto__);
(statearr_12861[(1)] = (1));
return statearr_12861;
});
var state_machine__5679__auto____1 = (function (state_12835){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_12835);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e12862){if((e12862 instanceof Object))
{var ex__5682__auto__ = e12862;var statearr_12863_12884 = state_12835;(statearr_12863_12884[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12835);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e12862;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12885 = state_12835;
state_12835 = G__12885;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_12835){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_12835);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto___12865,map__12806,map__12806__$1,delay,log))
})();var state__5695__auto__ = (function (){var statearr_12864 = f__5694__auto__.call(null);(statearr_12864[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto___12865);
return statearr_12864;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5695__auto__);
});})(c__5693__auto___12865,map__12806,map__12806__$1,delay,log))
);
return null;
};
var dorun_async = function (ch,var_args){
var p__12746 = null;if (arguments.length > 1) {
  p__12746 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return dorun_async__delegate.call(this,ch,p__12746);};
dorun_async.cljs$lang$maxFixedArity = 1;
dorun_async.cljs$lang$applyTo = (function (arglist__12886){
var ch = cljs.core.first(arglist__12886);
var p__12746 = cljs.core.rest(arglist__12886);
return dorun_async__delegate(ch,p__12746);
});
dorun_async.cljs$core$IFn$_invoke$arity$variadic = dorun_async__delegate;
return dorun_async;
})()
;
