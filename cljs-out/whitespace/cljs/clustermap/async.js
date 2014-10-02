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
map_async.cljs$lang$applyTo = (function (arglist__12694){
var f = cljs.core.first(arglist__12694);
var colls = cljs.core.rest(arglist__12694);
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
var dorun_async__delegate = function (ch,p__12695){var map__12755 = p__12695;var map__12755__$1 = ((cljs.core.seq_QMARK_.call(null,map__12755))?cljs.core.apply.call(null,cljs.core.hash_map,map__12755):map__12755);var delay = cljs.core.get.call(null,map__12755__$1,new cljs.core.Keyword(null,"delay","delay",-574225219));var log = cljs.core.get.call(null,map__12755__$1,new cljs.core.Keyword(null,"log","log",-1595516004));var c__5708__auto___12814 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5708__auto___12814,map__12755,map__12755__$1,delay,log){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___12814,map__12755,map__12755__$1,delay,log){
return (function (state_12784){var state_val_12785 = (state_12784[(1)]);if((state_val_12785 === (7)))
{var inst_12775 = (state_12784[(2)]);var state_12784__$1 = state_12784;if(cljs.core.truth_(inst_12775))
{var statearr_12786_12815 = state_12784__$1;(statearr_12786_12815[(1)] = (15));
} else
{var statearr_12787_12816 = state_12784__$1;(statearr_12787_12816[(1)] = (16));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12785 === (1)))
{var state_12784__$1 = state_12784;var statearr_12788_12817 = state_12784__$1;(statearr_12788_12817[(2)] = null);
(statearr_12788_12817[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12785 === (4)))
{var inst_12758 = (state_12784[(7)]);var inst_12758__$1 = (state_12784[(2)]);var state_12784__$1 = (function (){var statearr_12789 = state_12784;(statearr_12789[(7)] = inst_12758__$1);
return statearr_12789;
})();if(cljs.core.truth_(inst_12758__$1))
{var statearr_12790_12818 = state_12784__$1;(statearr_12790_12818[(1)] = (5));
} else
{var statearr_12791_12819 = state_12784__$1;(statearr_12791_12819[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12785 === (15)))
{var state_12784__$1 = state_12784;var statearr_12792_12820 = state_12784__$1;(statearr_12792_12820[(2)] = null);
(statearr_12792_12820[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12785 === (13)))
{var state_12784__$1 = state_12784;var statearr_12793_12821 = state_12784__$1;(statearr_12793_12821[(2)] = null);
(statearr_12793_12821[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12785 === (6)))
{var state_12784__$1 = state_12784;var statearr_12794_12822 = state_12784__$1;(statearr_12794_12822[(2)] = null);
(statearr_12794_12822[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12785 === (17)))
{var inst_12780 = (state_12784[(2)]);var state_12784__$1 = state_12784;var statearr_12795_12823 = state_12784__$1;(statearr_12795_12823[(2)] = inst_12780);
(statearr_12795_12823[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12785 === (3)))
{var inst_12782 = (state_12784[(2)]);var state_12784__$1 = state_12784;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12784__$1,inst_12782);
} else
{if((state_val_12785 === (12)))
{var inst_12758 = (state_12784[(7)]);var inst_12768 = cljs.core.clj__GT_js.call(null,inst_12758);var inst_12769 = console.log(inst_12768);var state_12784__$1 = state_12784;var statearr_12796_12824 = state_12784__$1;(statearr_12796_12824[(2)] = inst_12769);
(statearr_12796_12824[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12785 === (2)))
{var state_12784__$1 = state_12784;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12784__$1,(4),ch);
} else
{if((state_val_12785 === (11)))
{var inst_12763 = (state_12784[(2)]);var state_12784__$1 = state_12784;var statearr_12797_12825 = state_12784__$1;(statearr_12797_12825[(2)] = inst_12763);
(statearr_12797_12825[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12785 === (9)))
{var state_12784__$1 = state_12784;var statearr_12798_12826 = state_12784__$1;(statearr_12798_12826[(2)] = null);
(statearr_12798_12826[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12785 === (5)))
{var state_12784__$1 = state_12784;if(cljs.core.truth_(delay))
{var statearr_12799_12827 = state_12784__$1;(statearr_12799_12827[(1)] = (8));
} else
{var statearr_12800_12828 = state_12784__$1;(statearr_12800_12828[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12785 === (14)))
{var inst_12758 = (state_12784[(7)]);var inst_12772 = (state_12784[(2)]);var state_12784__$1 = (function (){var statearr_12801 = state_12784;(statearr_12801[(8)] = inst_12772);
return statearr_12801;
})();var statearr_12802_12829 = state_12784__$1;(statearr_12802_12829[(2)] = inst_12758);
(statearr_12802_12829[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12785 === (16)))
{var state_12784__$1 = state_12784;var statearr_12803_12830 = state_12784__$1;(statearr_12803_12830[(2)] = null);
(statearr_12803_12830[(1)] = (17));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12785 === (10)))
{var inst_12766 = (state_12784[(2)]);var state_12784__$1 = (function (){var statearr_12804 = state_12784;(statearr_12804[(9)] = inst_12766);
return statearr_12804;
})();if(cljs.core.truth_(log))
{var statearr_12805_12831 = state_12784__$1;(statearr_12805_12831[(1)] = (12));
} else
{var statearr_12806_12832 = state_12784__$1;(statearr_12806_12832[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12785 === (8)))
{var inst_12761 = cljs.core.async.timeout.call(null,delay);var state_12784__$1 = state_12784;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12784__$1,(11),inst_12761);
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
});})(c__5708__auto___12814,map__12755,map__12755__$1,delay,log))
;return ((function (switch__5693__auto__,c__5708__auto___12814,map__12755,map__12755__$1,delay,log){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_12810 = [null,null,null,null,null,null,null,null,null,null];(statearr_12810[(0)] = state_machine__5694__auto__);
(statearr_12810[(1)] = (1));
return statearr_12810;
});
var state_machine__5694__auto____1 = (function (state_12784){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_12784);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e12811){if((e12811 instanceof Object))
{var ex__5697__auto__ = e12811;var statearr_12812_12833 = state_12784;(statearr_12812_12833[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12784);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e12811;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12834 = state_12784;
state_12784 = G__12834;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_12784){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_12784);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___12814,map__12755,map__12755__$1,delay,log))
})();var state__5710__auto__ = (function (){var statearr_12813 = f__5709__auto__.call(null);(statearr_12813[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___12814);
return statearr_12813;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
});})(c__5708__auto___12814,map__12755,map__12755__$1,delay,log))
);
return null;
};
var dorun_async = function (ch,var_args){
var p__12695 = null;if (arguments.length > 1) {
  p__12695 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return dorun_async__delegate.call(this,ch,p__12695);};
dorun_async.cljs$lang$maxFixedArity = 1;
dorun_async.cljs$lang$applyTo = (function (arglist__12835){
var ch = cljs.core.first(arglist__12835);
var p__12695 = cljs.core.rest(arglist__12835);
return dorun_async__delegate(ch,p__12695);
});
dorun_async.cljs$core$IFn$_invoke$arity$variadic = dorun_async__delegate;
return dorun_async;
})()
;
