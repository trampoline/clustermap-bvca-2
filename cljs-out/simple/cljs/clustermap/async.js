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
map_async.cljs$lang$applyTo = (function (arglist__24771){
var f = cljs.core.first(arglist__24771);
var colls = cljs.core.rest(arglist__24771);
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
var dorun_async__delegate = function (ch,p__24772){var map__24832 = p__24772;var map__24832__$1 = ((cljs.core.seq_QMARK_.call(null,map__24832))?cljs.core.apply.call(null,cljs.core.hash_map,map__24832):map__24832);var delay = cljs.core.get.call(null,map__24832__$1,new cljs.core.Keyword(null,"delay","delay",-574225219));var log = cljs.core.get.call(null,map__24832__$1,new cljs.core.Keyword(null,"log","log",-1595516004));var c__5693__auto___24891 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5693__auto___24891,map__24832,map__24832__$1,delay,log){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto___24891,map__24832,map__24832__$1,delay,log){
return (function (state_24861){var state_val_24862 = (state_24861[(1)]);if((state_val_24862 === (7)))
{var inst_24852 = (state_24861[(2)]);var state_24861__$1 = state_24861;if(cljs.core.truth_(inst_24852))
{var statearr_24863_24892 = state_24861__$1;(statearr_24863_24892[(1)] = (15));
} else
{var statearr_24864_24893 = state_24861__$1;(statearr_24864_24893[(1)] = (16));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24862 === (1)))
{var state_24861__$1 = state_24861;var statearr_24865_24894 = state_24861__$1;(statearr_24865_24894[(2)] = null);
(statearr_24865_24894[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24862 === (4)))
{var inst_24835 = (state_24861[(7)]);var inst_24835__$1 = (state_24861[(2)]);var state_24861__$1 = (function (){var statearr_24866 = state_24861;(statearr_24866[(7)] = inst_24835__$1);
return statearr_24866;
})();if(cljs.core.truth_(inst_24835__$1))
{var statearr_24867_24895 = state_24861__$1;(statearr_24867_24895[(1)] = (5));
} else
{var statearr_24868_24896 = state_24861__$1;(statearr_24868_24896[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24862 === (15)))
{var state_24861__$1 = state_24861;var statearr_24869_24897 = state_24861__$1;(statearr_24869_24897[(2)] = null);
(statearr_24869_24897[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24862 === (13)))
{var state_24861__$1 = state_24861;var statearr_24870_24898 = state_24861__$1;(statearr_24870_24898[(2)] = null);
(statearr_24870_24898[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24862 === (6)))
{var state_24861__$1 = state_24861;var statearr_24871_24899 = state_24861__$1;(statearr_24871_24899[(2)] = null);
(statearr_24871_24899[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24862 === (17)))
{var inst_24857 = (state_24861[(2)]);var state_24861__$1 = state_24861;var statearr_24872_24900 = state_24861__$1;(statearr_24872_24900[(2)] = inst_24857);
(statearr_24872_24900[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24862 === (3)))
{var inst_24859 = (state_24861[(2)]);var state_24861__$1 = state_24861;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24861__$1,inst_24859);
} else
{if((state_val_24862 === (12)))
{var inst_24835 = (state_24861[(7)]);var inst_24845 = cljs.core.clj__GT_js.call(null,inst_24835);var inst_24846 = console.log(inst_24845);var state_24861__$1 = state_24861;var statearr_24873_24901 = state_24861__$1;(statearr_24873_24901[(2)] = inst_24846);
(statearr_24873_24901[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24862 === (2)))
{var state_24861__$1 = state_24861;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24861__$1,(4),ch);
} else
{if((state_val_24862 === (11)))
{var inst_24840 = (state_24861[(2)]);var state_24861__$1 = state_24861;var statearr_24874_24902 = state_24861__$1;(statearr_24874_24902[(2)] = inst_24840);
(statearr_24874_24902[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24862 === (9)))
{var state_24861__$1 = state_24861;var statearr_24875_24903 = state_24861__$1;(statearr_24875_24903[(2)] = null);
(statearr_24875_24903[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24862 === (5)))
{var state_24861__$1 = state_24861;if(cljs.core.truth_(delay))
{var statearr_24876_24904 = state_24861__$1;(statearr_24876_24904[(1)] = (8));
} else
{var statearr_24877_24905 = state_24861__$1;(statearr_24877_24905[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24862 === (14)))
{var inst_24835 = (state_24861[(7)]);var inst_24849 = (state_24861[(2)]);var state_24861__$1 = (function (){var statearr_24878 = state_24861;(statearr_24878[(8)] = inst_24849);
return statearr_24878;
})();var statearr_24879_24906 = state_24861__$1;(statearr_24879_24906[(2)] = inst_24835);
(statearr_24879_24906[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24862 === (16)))
{var state_24861__$1 = state_24861;var statearr_24880_24907 = state_24861__$1;(statearr_24880_24907[(2)] = null);
(statearr_24880_24907[(1)] = (17));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24862 === (10)))
{var inst_24843 = (state_24861[(2)]);var state_24861__$1 = (function (){var statearr_24881 = state_24861;(statearr_24881[(9)] = inst_24843);
return statearr_24881;
})();if(cljs.core.truth_(log))
{var statearr_24882_24908 = state_24861__$1;(statearr_24882_24908[(1)] = (12));
} else
{var statearr_24883_24909 = state_24861__$1;(statearr_24883_24909[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24862 === (8)))
{var inst_24838 = cljs.core.async.timeout.call(null,delay);var state_24861__$1 = state_24861;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24861__$1,(11),inst_24838);
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
});})(c__5693__auto___24891,map__24832,map__24832__$1,delay,log))
;return ((function (switch__5678__auto__,c__5693__auto___24891,map__24832,map__24832__$1,delay,log){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_24887 = [null,null,null,null,null,null,null,null,null,null];(statearr_24887[(0)] = state_machine__5679__auto__);
(statearr_24887[(1)] = (1));
return statearr_24887;
});
var state_machine__5679__auto____1 = (function (state_24861){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_24861);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e24888){if((e24888 instanceof Object))
{var ex__5682__auto__ = e24888;var statearr_24889_24910 = state_24861;(statearr_24889_24910[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24861);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e24888;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__24911 = state_24861;
state_24861 = G__24911;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_24861){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_24861);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto___24891,map__24832,map__24832__$1,delay,log))
})();var state__5695__auto__ = (function (){var statearr_24890 = f__5694__auto__.call(null);(statearr_24890[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto___24891);
return statearr_24890;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5695__auto__);
});})(c__5693__auto___24891,map__24832,map__24832__$1,delay,log))
);
return null;
};
var dorun_async = function (ch,var_args){
var p__24772 = null;if (arguments.length > 1) {
  p__24772 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return dorun_async__delegate.call(this,ch,p__24772);};
dorun_async.cljs$lang$maxFixedArity = 1;
dorun_async.cljs$lang$applyTo = (function (arglist__24912){
var ch = cljs.core.first(arglist__24912);
var p__24772 = cljs.core.rest(arglist__24912);
return dorun_async__delegate(ch,p__24772);
});
dorun_async.cljs$core$IFn$_invoke$arity$variadic = dorun_async__delegate;
return dorun_async;
})()
;
