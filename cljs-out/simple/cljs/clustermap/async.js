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
map_async.cljs$lang$applyTo = (function (arglist__30740){
var f = cljs.core.first(arglist__30740);
var colls = cljs.core.rest(arglist__30740);
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
var dorun_async__delegate = function (ch,p__30741){var map__30801 = p__30741;var map__30801__$1 = ((cljs.core.seq_QMARK_.call(null,map__30801))?cljs.core.apply.call(null,cljs.core.hash_map,map__30801):map__30801);var delay = cljs.core.get.call(null,map__30801__$1,new cljs.core.Keyword(null,"delay","delay",-574225219));var log = cljs.core.get.call(null,map__30801__$1,new cljs.core.Keyword(null,"log","log",-1595516004));var c__5708__auto___30860 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5708__auto___30860,map__30801,map__30801__$1,delay,log){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___30860,map__30801,map__30801__$1,delay,log){
return (function (state_30830){var state_val_30831 = (state_30830[(1)]);if((state_val_30831 === (7)))
{var inst_30821 = (state_30830[(2)]);var state_30830__$1 = state_30830;if(cljs.core.truth_(inst_30821))
{var statearr_30832_30861 = state_30830__$1;(statearr_30832_30861[(1)] = (15));
} else
{var statearr_30833_30862 = state_30830__$1;(statearr_30833_30862[(1)] = (16));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30831 === (1)))
{var state_30830__$1 = state_30830;var statearr_30834_30863 = state_30830__$1;(statearr_30834_30863[(2)] = null);
(statearr_30834_30863[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30831 === (4)))
{var inst_30804 = (state_30830[(7)]);var inst_30804__$1 = (state_30830[(2)]);var state_30830__$1 = (function (){var statearr_30835 = state_30830;(statearr_30835[(7)] = inst_30804__$1);
return statearr_30835;
})();if(cljs.core.truth_(inst_30804__$1))
{var statearr_30836_30864 = state_30830__$1;(statearr_30836_30864[(1)] = (5));
} else
{var statearr_30837_30865 = state_30830__$1;(statearr_30837_30865[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30831 === (15)))
{var state_30830__$1 = state_30830;var statearr_30838_30866 = state_30830__$1;(statearr_30838_30866[(2)] = null);
(statearr_30838_30866[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30831 === (13)))
{var state_30830__$1 = state_30830;var statearr_30839_30867 = state_30830__$1;(statearr_30839_30867[(2)] = null);
(statearr_30839_30867[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30831 === (6)))
{var state_30830__$1 = state_30830;var statearr_30840_30868 = state_30830__$1;(statearr_30840_30868[(2)] = null);
(statearr_30840_30868[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30831 === (17)))
{var inst_30826 = (state_30830[(2)]);var state_30830__$1 = state_30830;var statearr_30841_30869 = state_30830__$1;(statearr_30841_30869[(2)] = inst_30826);
(statearr_30841_30869[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30831 === (3)))
{var inst_30828 = (state_30830[(2)]);var state_30830__$1 = state_30830;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30830__$1,inst_30828);
} else
{if((state_val_30831 === (12)))
{var inst_30804 = (state_30830[(7)]);var inst_30814 = cljs.core.clj__GT_js.call(null,inst_30804);var inst_30815 = console.log(inst_30814);var state_30830__$1 = state_30830;var statearr_30842_30870 = state_30830__$1;(statearr_30842_30870[(2)] = inst_30815);
(statearr_30842_30870[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30831 === (2)))
{var state_30830__$1 = state_30830;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30830__$1,(4),ch);
} else
{if((state_val_30831 === (11)))
{var inst_30809 = (state_30830[(2)]);var state_30830__$1 = state_30830;var statearr_30843_30871 = state_30830__$1;(statearr_30843_30871[(2)] = inst_30809);
(statearr_30843_30871[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30831 === (9)))
{var state_30830__$1 = state_30830;var statearr_30844_30872 = state_30830__$1;(statearr_30844_30872[(2)] = null);
(statearr_30844_30872[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30831 === (5)))
{var state_30830__$1 = state_30830;if(cljs.core.truth_(delay))
{var statearr_30845_30873 = state_30830__$1;(statearr_30845_30873[(1)] = (8));
} else
{var statearr_30846_30874 = state_30830__$1;(statearr_30846_30874[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30831 === (14)))
{var inst_30804 = (state_30830[(7)]);var inst_30818 = (state_30830[(2)]);var state_30830__$1 = (function (){var statearr_30847 = state_30830;(statearr_30847[(8)] = inst_30818);
return statearr_30847;
})();var statearr_30848_30875 = state_30830__$1;(statearr_30848_30875[(2)] = inst_30804);
(statearr_30848_30875[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30831 === (16)))
{var state_30830__$1 = state_30830;var statearr_30849_30876 = state_30830__$1;(statearr_30849_30876[(2)] = null);
(statearr_30849_30876[(1)] = (17));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30831 === (10)))
{var inst_30812 = (state_30830[(2)]);var state_30830__$1 = (function (){var statearr_30850 = state_30830;(statearr_30850[(9)] = inst_30812);
return statearr_30850;
})();if(cljs.core.truth_(log))
{var statearr_30851_30877 = state_30830__$1;(statearr_30851_30877[(1)] = (12));
} else
{var statearr_30852_30878 = state_30830__$1;(statearr_30852_30878[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30831 === (8)))
{var inst_30807 = cljs.core.async.timeout.call(null,delay);var state_30830__$1 = state_30830;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30830__$1,(11),inst_30807);
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
});})(c__5708__auto___30860,map__30801,map__30801__$1,delay,log))
;return ((function (switch__5693__auto__,c__5708__auto___30860,map__30801,map__30801__$1,delay,log){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_30856 = [null,null,null,null,null,null,null,null,null,null];(statearr_30856[(0)] = state_machine__5694__auto__);
(statearr_30856[(1)] = (1));
return statearr_30856;
});
var state_machine__5694__auto____1 = (function (state_30830){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_30830);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e30857){if((e30857 instanceof Object))
{var ex__5697__auto__ = e30857;var statearr_30858_30879 = state_30830;(statearr_30858_30879[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30830);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e30857;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__30880 = state_30830;
state_30830 = G__30880;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_30830){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_30830);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___30860,map__30801,map__30801__$1,delay,log))
})();var state__5710__auto__ = (function (){var statearr_30859 = f__5709__auto__.call(null);(statearr_30859[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___30860);
return statearr_30859;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
});})(c__5708__auto___30860,map__30801,map__30801__$1,delay,log))
);
return null;
};
var dorun_async = function (ch,var_args){
var p__30741 = null;if (arguments.length > 1) {
  p__30741 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return dorun_async__delegate.call(this,ch,p__30741);};
dorun_async.cljs$lang$maxFixedArity = 1;
dorun_async.cljs$lang$applyTo = (function (arglist__30881){
var ch = cljs.core.first(arglist__30881);
var p__30741 = cljs.core.rest(arglist__30881);
return dorun_async__delegate(ch,p__30741);
});
dorun_async.cljs$core$IFn$_invoke$arity$variadic = dorun_async__delegate;
return dorun_async;
})()
;
