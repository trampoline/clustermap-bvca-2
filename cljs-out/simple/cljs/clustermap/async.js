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
map_async.cljs$lang$applyTo = (function (arglist__24703){
var f = cljs.core.first(arglist__24703);
var colls = cljs.core.rest(arglist__24703);
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
var dorun_async__delegate = function (ch,p__24704){var map__24764 = p__24704;var map__24764__$1 = ((cljs.core.seq_QMARK_.call(null,map__24764))?cljs.core.apply.call(null,cljs.core.hash_map,map__24764):map__24764);var delay = cljs.core.get.call(null,map__24764__$1,new cljs.core.Keyword(null,"delay","delay",-574225219));var log = cljs.core.get.call(null,map__24764__$1,new cljs.core.Keyword(null,"log","log",-1595516004));var c__5693__auto___24823 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5693__auto___24823,map__24764,map__24764__$1,delay,log){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto___24823,map__24764,map__24764__$1,delay,log){
return (function (state_24793){var state_val_24794 = (state_24793[(1)]);if((state_val_24794 === (7)))
{var inst_24784 = (state_24793[(2)]);var state_24793__$1 = state_24793;if(cljs.core.truth_(inst_24784))
{var statearr_24795_24824 = state_24793__$1;(statearr_24795_24824[(1)] = (15));
} else
{var statearr_24796_24825 = state_24793__$1;(statearr_24796_24825[(1)] = (16));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24794 === (1)))
{var state_24793__$1 = state_24793;var statearr_24797_24826 = state_24793__$1;(statearr_24797_24826[(2)] = null);
(statearr_24797_24826[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24794 === (4)))
{var inst_24767 = (state_24793[(7)]);var inst_24767__$1 = (state_24793[(2)]);var state_24793__$1 = (function (){var statearr_24798 = state_24793;(statearr_24798[(7)] = inst_24767__$1);
return statearr_24798;
})();if(cljs.core.truth_(inst_24767__$1))
{var statearr_24799_24827 = state_24793__$1;(statearr_24799_24827[(1)] = (5));
} else
{var statearr_24800_24828 = state_24793__$1;(statearr_24800_24828[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24794 === (15)))
{var state_24793__$1 = state_24793;var statearr_24801_24829 = state_24793__$1;(statearr_24801_24829[(2)] = null);
(statearr_24801_24829[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24794 === (13)))
{var state_24793__$1 = state_24793;var statearr_24802_24830 = state_24793__$1;(statearr_24802_24830[(2)] = null);
(statearr_24802_24830[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24794 === (6)))
{var state_24793__$1 = state_24793;var statearr_24803_24831 = state_24793__$1;(statearr_24803_24831[(2)] = null);
(statearr_24803_24831[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24794 === (17)))
{var inst_24789 = (state_24793[(2)]);var state_24793__$1 = state_24793;var statearr_24804_24832 = state_24793__$1;(statearr_24804_24832[(2)] = inst_24789);
(statearr_24804_24832[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24794 === (3)))
{var inst_24791 = (state_24793[(2)]);var state_24793__$1 = state_24793;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24793__$1,inst_24791);
} else
{if((state_val_24794 === (12)))
{var inst_24767 = (state_24793[(7)]);var inst_24777 = cljs.core.clj__GT_js.call(null,inst_24767);var inst_24778 = console.log(inst_24777);var state_24793__$1 = state_24793;var statearr_24805_24833 = state_24793__$1;(statearr_24805_24833[(2)] = inst_24778);
(statearr_24805_24833[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24794 === (2)))
{var state_24793__$1 = state_24793;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24793__$1,(4),ch);
} else
{if((state_val_24794 === (11)))
{var inst_24772 = (state_24793[(2)]);var state_24793__$1 = state_24793;var statearr_24806_24834 = state_24793__$1;(statearr_24806_24834[(2)] = inst_24772);
(statearr_24806_24834[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24794 === (9)))
{var state_24793__$1 = state_24793;var statearr_24807_24835 = state_24793__$1;(statearr_24807_24835[(2)] = null);
(statearr_24807_24835[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24794 === (5)))
{var state_24793__$1 = state_24793;if(cljs.core.truth_(delay))
{var statearr_24808_24836 = state_24793__$1;(statearr_24808_24836[(1)] = (8));
} else
{var statearr_24809_24837 = state_24793__$1;(statearr_24809_24837[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24794 === (14)))
{var inst_24767 = (state_24793[(7)]);var inst_24781 = (state_24793[(2)]);var state_24793__$1 = (function (){var statearr_24810 = state_24793;(statearr_24810[(8)] = inst_24781);
return statearr_24810;
})();var statearr_24811_24838 = state_24793__$1;(statearr_24811_24838[(2)] = inst_24767);
(statearr_24811_24838[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24794 === (16)))
{var state_24793__$1 = state_24793;var statearr_24812_24839 = state_24793__$1;(statearr_24812_24839[(2)] = null);
(statearr_24812_24839[(1)] = (17));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24794 === (10)))
{var inst_24775 = (state_24793[(2)]);var state_24793__$1 = (function (){var statearr_24813 = state_24793;(statearr_24813[(9)] = inst_24775);
return statearr_24813;
})();if(cljs.core.truth_(log))
{var statearr_24814_24840 = state_24793__$1;(statearr_24814_24840[(1)] = (12));
} else
{var statearr_24815_24841 = state_24793__$1;(statearr_24815_24841[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24794 === (8)))
{var inst_24770 = cljs.core.async.timeout.call(null,delay);var state_24793__$1 = state_24793;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24793__$1,(11),inst_24770);
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
});})(c__5693__auto___24823,map__24764,map__24764__$1,delay,log))
;return ((function (switch__5678__auto__,c__5693__auto___24823,map__24764,map__24764__$1,delay,log){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_24819 = [null,null,null,null,null,null,null,null,null,null];(statearr_24819[(0)] = state_machine__5679__auto__);
(statearr_24819[(1)] = (1));
return statearr_24819;
});
var state_machine__5679__auto____1 = (function (state_24793){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_24793);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e24820){if((e24820 instanceof Object))
{var ex__5682__auto__ = e24820;var statearr_24821_24842 = state_24793;(statearr_24821_24842[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24793);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e24820;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__24843 = state_24793;
state_24793 = G__24843;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_24793){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_24793);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto___24823,map__24764,map__24764__$1,delay,log))
})();var state__5695__auto__ = (function (){var statearr_24822 = f__5694__auto__.call(null);(statearr_24822[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto___24823);
return statearr_24822;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5695__auto__);
});})(c__5693__auto___24823,map__24764,map__24764__$1,delay,log))
);
return null;
};
var dorun_async = function (ch,var_args){
var p__24704 = null;if (arguments.length > 1) {
  p__24704 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return dorun_async__delegate.call(this,ch,p__24704);};
dorun_async.cljs$lang$maxFixedArity = 1;
dorun_async.cljs$lang$applyTo = (function (arglist__24844){
var ch = cljs.core.first(arglist__24844);
var p__24704 = cljs.core.rest(arglist__24844);
return dorun_async__delegate(ch,p__24704);
});
dorun_async.cljs$core$IFn$_invoke$arity$variadic = dorun_async__delegate;
return dorun_async;
})()
;
