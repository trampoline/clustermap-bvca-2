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
map_async.cljs$lang$applyTo = (function (arglist__51703){
var f = cljs.core.first(arglist__51703);
var colls = cljs.core.rest(arglist__51703);
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
var dorun_async__delegate = function (ch,p__51704){var map__51764 = p__51704;var map__51764__$1 = ((cljs.core.seq_QMARK_.call(null,map__51764))?cljs.core.apply.call(null,cljs.core.hash_map,map__51764):map__51764);var delay = cljs.core.get.call(null,map__51764__$1,new cljs.core.Keyword(null,"delay","delay",-574225219));var log = cljs.core.get.call(null,map__51764__$1,new cljs.core.Keyword(null,"log","log",-1595516004));var c__5708__auto___51823 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5708__auto___51823,map__51764,map__51764__$1,delay,log){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___51823,map__51764,map__51764__$1,delay,log){
return (function (state_51793){var state_val_51794 = (state_51793[(1)]);if((state_val_51794 === (7)))
{var inst_51784 = (state_51793[(2)]);var state_51793__$1 = state_51793;if(cljs.core.truth_(inst_51784))
{var statearr_51795_51824 = state_51793__$1;(statearr_51795_51824[(1)] = (15));
} else
{var statearr_51796_51825 = state_51793__$1;(statearr_51796_51825[(1)] = (16));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_51794 === (1)))
{var state_51793__$1 = state_51793;var statearr_51797_51826 = state_51793__$1;(statearr_51797_51826[(2)] = null);
(statearr_51797_51826[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_51794 === (4)))
{var inst_51767 = (state_51793[(7)]);var inst_51767__$1 = (state_51793[(2)]);var state_51793__$1 = (function (){var statearr_51798 = state_51793;(statearr_51798[(7)] = inst_51767__$1);
return statearr_51798;
})();if(cljs.core.truth_(inst_51767__$1))
{var statearr_51799_51827 = state_51793__$1;(statearr_51799_51827[(1)] = (5));
} else
{var statearr_51800_51828 = state_51793__$1;(statearr_51800_51828[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_51794 === (15)))
{var state_51793__$1 = state_51793;var statearr_51801_51829 = state_51793__$1;(statearr_51801_51829[(2)] = null);
(statearr_51801_51829[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_51794 === (13)))
{var state_51793__$1 = state_51793;var statearr_51802_51830 = state_51793__$1;(statearr_51802_51830[(2)] = null);
(statearr_51802_51830[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_51794 === (6)))
{var state_51793__$1 = state_51793;var statearr_51803_51831 = state_51793__$1;(statearr_51803_51831[(2)] = null);
(statearr_51803_51831[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_51794 === (17)))
{var inst_51789 = (state_51793[(2)]);var state_51793__$1 = state_51793;var statearr_51804_51832 = state_51793__$1;(statearr_51804_51832[(2)] = inst_51789);
(statearr_51804_51832[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_51794 === (3)))
{var inst_51791 = (state_51793[(2)]);var state_51793__$1 = state_51793;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_51793__$1,inst_51791);
} else
{if((state_val_51794 === (12)))
{var inst_51767 = (state_51793[(7)]);var inst_51777 = cljs.core.clj__GT_js.call(null,inst_51767);var inst_51778 = console.log(inst_51777);var state_51793__$1 = state_51793;var statearr_51805_51833 = state_51793__$1;(statearr_51805_51833[(2)] = inst_51778);
(statearr_51805_51833[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_51794 === (2)))
{var state_51793__$1 = state_51793;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51793__$1,(4),ch);
} else
{if((state_val_51794 === (11)))
{var inst_51772 = (state_51793[(2)]);var state_51793__$1 = state_51793;var statearr_51806_51834 = state_51793__$1;(statearr_51806_51834[(2)] = inst_51772);
(statearr_51806_51834[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_51794 === (9)))
{var state_51793__$1 = state_51793;var statearr_51807_51835 = state_51793__$1;(statearr_51807_51835[(2)] = null);
(statearr_51807_51835[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_51794 === (5)))
{var state_51793__$1 = state_51793;if(cljs.core.truth_(delay))
{var statearr_51808_51836 = state_51793__$1;(statearr_51808_51836[(1)] = (8));
} else
{var statearr_51809_51837 = state_51793__$1;(statearr_51809_51837[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_51794 === (14)))
{var inst_51767 = (state_51793[(7)]);var inst_51781 = (state_51793[(2)]);var state_51793__$1 = (function (){var statearr_51810 = state_51793;(statearr_51810[(8)] = inst_51781);
return statearr_51810;
})();var statearr_51811_51838 = state_51793__$1;(statearr_51811_51838[(2)] = inst_51767);
(statearr_51811_51838[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_51794 === (16)))
{var state_51793__$1 = state_51793;var statearr_51812_51839 = state_51793__$1;(statearr_51812_51839[(2)] = null);
(statearr_51812_51839[(1)] = (17));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_51794 === (10)))
{var inst_51775 = (state_51793[(2)]);var state_51793__$1 = (function (){var statearr_51813 = state_51793;(statearr_51813[(9)] = inst_51775);
return statearr_51813;
})();if(cljs.core.truth_(log))
{var statearr_51814_51840 = state_51793__$1;(statearr_51814_51840[(1)] = (12));
} else
{var statearr_51815_51841 = state_51793__$1;(statearr_51815_51841[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_51794 === (8)))
{var inst_51770 = cljs.core.async.timeout.call(null,delay);var state_51793__$1 = state_51793;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51793__$1,(11),inst_51770);
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
});})(c__5708__auto___51823,map__51764,map__51764__$1,delay,log))
;return ((function (switch__5693__auto__,c__5708__auto___51823,map__51764,map__51764__$1,delay,log){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_51819 = [null,null,null,null,null,null,null,null,null,null];(statearr_51819[(0)] = state_machine__5694__auto__);
(statearr_51819[(1)] = (1));
return statearr_51819;
});
var state_machine__5694__auto____1 = (function (state_51793){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_51793);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e51820){if((e51820 instanceof Object))
{var ex__5697__auto__ = e51820;var statearr_51821_51842 = state_51793;(statearr_51821_51842[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_51793);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e51820;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__51843 = state_51793;
state_51793 = G__51843;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_51793){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_51793);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___51823,map__51764,map__51764__$1,delay,log))
})();var state__5710__auto__ = (function (){var statearr_51822 = f__5709__auto__.call(null);(statearr_51822[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___51823);
return statearr_51822;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
});})(c__5708__auto___51823,map__51764,map__51764__$1,delay,log))
);
return null;
};
var dorun_async = function (ch,var_args){
var p__51704 = null;if (arguments.length > 1) {
  p__51704 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return dorun_async__delegate.call(this,ch,p__51704);};
dorun_async.cljs$lang$maxFixedArity = 1;
dorun_async.cljs$lang$applyTo = (function (arglist__51844){
var ch = cljs.core.first(arglist__51844);
var p__51704 = cljs.core.rest(arglist__51844);
return dorun_async__delegate(ch,p__51704);
});
dorun_async.cljs$core$IFn$_invoke$arity$variadic = dorun_async__delegate;
return dorun_async;
})()
;

//# sourceMappingURL=async.js.map