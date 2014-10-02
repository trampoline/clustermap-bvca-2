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
map_async.cljs$lang$applyTo = (function (arglist__25707){
var f = cljs.core.first(arglist__25707);
var colls = cljs.core.rest(arglist__25707);
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
var dorun_async__delegate = function (ch,p__25708){var map__25768 = p__25708;var map__25768__$1 = ((cljs.core.seq_QMARK_.call(null,map__25768))?cljs.core.apply.call(null,cljs.core.hash_map,map__25768):map__25768);var delay = cljs.core.get.call(null,map__25768__$1,new cljs.core.Keyword(null,"delay","delay",-574225219));var log = cljs.core.get.call(null,map__25768__$1,new cljs.core.Keyword(null,"log","log",-1595516004));var c__5708__auto___25827 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5708__auto___25827,map__25768,map__25768__$1,delay,log){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___25827,map__25768,map__25768__$1,delay,log){
return (function (state_25797){var state_val_25798 = (state_25797[(1)]);if((state_val_25798 === (7)))
{var inst_25788 = (state_25797[(2)]);var state_25797__$1 = state_25797;if(cljs.core.truth_(inst_25788))
{var statearr_25799_25828 = state_25797__$1;(statearr_25799_25828[(1)] = (15));
} else
{var statearr_25800_25829 = state_25797__$1;(statearr_25800_25829[(1)] = (16));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25798 === (1)))
{var state_25797__$1 = state_25797;var statearr_25801_25830 = state_25797__$1;(statearr_25801_25830[(2)] = null);
(statearr_25801_25830[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25798 === (4)))
{var inst_25771 = (state_25797[(7)]);var inst_25771__$1 = (state_25797[(2)]);var state_25797__$1 = (function (){var statearr_25802 = state_25797;(statearr_25802[(7)] = inst_25771__$1);
return statearr_25802;
})();if(cljs.core.truth_(inst_25771__$1))
{var statearr_25803_25831 = state_25797__$1;(statearr_25803_25831[(1)] = (5));
} else
{var statearr_25804_25832 = state_25797__$1;(statearr_25804_25832[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25798 === (15)))
{var state_25797__$1 = state_25797;var statearr_25805_25833 = state_25797__$1;(statearr_25805_25833[(2)] = null);
(statearr_25805_25833[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25798 === (13)))
{var state_25797__$1 = state_25797;var statearr_25806_25834 = state_25797__$1;(statearr_25806_25834[(2)] = null);
(statearr_25806_25834[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25798 === (6)))
{var state_25797__$1 = state_25797;var statearr_25807_25835 = state_25797__$1;(statearr_25807_25835[(2)] = null);
(statearr_25807_25835[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25798 === (17)))
{var inst_25793 = (state_25797[(2)]);var state_25797__$1 = state_25797;var statearr_25808_25836 = state_25797__$1;(statearr_25808_25836[(2)] = inst_25793);
(statearr_25808_25836[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25798 === (3)))
{var inst_25795 = (state_25797[(2)]);var state_25797__$1 = state_25797;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25797__$1,inst_25795);
} else
{if((state_val_25798 === (12)))
{var inst_25771 = (state_25797[(7)]);var inst_25781 = cljs.core.clj__GT_js.call(null,inst_25771);var inst_25782 = console.log(inst_25781);var state_25797__$1 = state_25797;var statearr_25809_25837 = state_25797__$1;(statearr_25809_25837[(2)] = inst_25782);
(statearr_25809_25837[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25798 === (2)))
{var state_25797__$1 = state_25797;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25797__$1,(4),ch);
} else
{if((state_val_25798 === (11)))
{var inst_25776 = (state_25797[(2)]);var state_25797__$1 = state_25797;var statearr_25810_25838 = state_25797__$1;(statearr_25810_25838[(2)] = inst_25776);
(statearr_25810_25838[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25798 === (9)))
{var state_25797__$1 = state_25797;var statearr_25811_25839 = state_25797__$1;(statearr_25811_25839[(2)] = null);
(statearr_25811_25839[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25798 === (5)))
{var state_25797__$1 = state_25797;if(cljs.core.truth_(delay))
{var statearr_25812_25840 = state_25797__$1;(statearr_25812_25840[(1)] = (8));
} else
{var statearr_25813_25841 = state_25797__$1;(statearr_25813_25841[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25798 === (14)))
{var inst_25771 = (state_25797[(7)]);var inst_25785 = (state_25797[(2)]);var state_25797__$1 = (function (){var statearr_25814 = state_25797;(statearr_25814[(8)] = inst_25785);
return statearr_25814;
})();var statearr_25815_25842 = state_25797__$1;(statearr_25815_25842[(2)] = inst_25771);
(statearr_25815_25842[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25798 === (16)))
{var state_25797__$1 = state_25797;var statearr_25816_25843 = state_25797__$1;(statearr_25816_25843[(2)] = null);
(statearr_25816_25843[(1)] = (17));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25798 === (10)))
{var inst_25779 = (state_25797[(2)]);var state_25797__$1 = (function (){var statearr_25817 = state_25797;(statearr_25817[(9)] = inst_25779);
return statearr_25817;
})();if(cljs.core.truth_(log))
{var statearr_25818_25844 = state_25797__$1;(statearr_25818_25844[(1)] = (12));
} else
{var statearr_25819_25845 = state_25797__$1;(statearr_25819_25845[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25798 === (8)))
{var inst_25774 = cljs.core.async.timeout.call(null,delay);var state_25797__$1 = state_25797;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25797__$1,(11),inst_25774);
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
});})(c__5708__auto___25827,map__25768,map__25768__$1,delay,log))
;return ((function (switch__5693__auto__,c__5708__auto___25827,map__25768,map__25768__$1,delay,log){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_25823 = [null,null,null,null,null,null,null,null,null,null];(statearr_25823[(0)] = state_machine__5694__auto__);
(statearr_25823[(1)] = (1));
return statearr_25823;
});
var state_machine__5694__auto____1 = (function (state_25797){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_25797);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e25824){if((e25824 instanceof Object))
{var ex__5697__auto__ = e25824;var statearr_25825_25846 = state_25797;(statearr_25825_25846[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25797);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e25824;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__25847 = state_25797;
state_25797 = G__25847;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_25797){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_25797);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___25827,map__25768,map__25768__$1,delay,log))
})();var state__5710__auto__ = (function (){var statearr_25826 = f__5709__auto__.call(null);(statearr_25826[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___25827);
return statearr_25826;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
});})(c__5708__auto___25827,map__25768,map__25768__$1,delay,log))
);
return null;
};
var dorun_async = function (ch,var_args){
var p__25708 = null;if (arguments.length > 1) {
  p__25708 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return dorun_async__delegate.call(this,ch,p__25708);};
dorun_async.cljs$lang$maxFixedArity = 1;
dorun_async.cljs$lang$applyTo = (function (arglist__25848){
var ch = cljs.core.first(arglist__25848);
var p__25708 = cljs.core.rest(arglist__25848);
return dorun_async__delegate(ch,p__25708);
});
dorun_async.cljs$core$IFn$_invoke$arity$variadic = dorun_async__delegate;
return dorun_async;
})()
;
