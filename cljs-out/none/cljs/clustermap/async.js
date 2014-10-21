// Compiled by ClojureScript 0.0-2356
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
map_async.cljs$lang$applyTo = (function (arglist__76851){
var f = cljs.core.first(arglist__76851);
var colls = cljs.core.rest(arglist__76851);
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
var dorun_async__delegate = function (ch,p__76852){var map__76912 = p__76852;var map__76912__$1 = ((cljs.core.seq_QMARK_.call(null,map__76912))?cljs.core.apply.call(null,cljs.core.hash_map,map__76912):map__76912);var delay = cljs.core.get.call(null,map__76912__$1,new cljs.core.Keyword(null,"delay","delay",-574225219));var log = cljs.core.get.call(null,map__76912__$1,new cljs.core.Keyword(null,"log","log",-1595516004));var c__5819__auto___76971 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5819__auto___76971,map__76912,map__76912__$1,delay,log){
return (function (){var f__5820__auto__ = (function (){var switch__5804__auto__ = ((function (c__5819__auto___76971,map__76912,map__76912__$1,delay,log){
return (function (state_76941){var state_val_76942 = (state_76941[(1)]);if((state_val_76942 === (7)))
{var inst_76932 = (state_76941[(2)]);var state_76941__$1 = state_76941;if(cljs.core.truth_(inst_76932))
{var statearr_76943_76972 = state_76941__$1;(statearr_76943_76972[(1)] = (15));
} else
{var statearr_76944_76973 = state_76941__$1;(statearr_76944_76973[(1)] = (16));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_76942 === (1)))
{var state_76941__$1 = state_76941;var statearr_76945_76974 = state_76941__$1;(statearr_76945_76974[(2)] = null);
(statearr_76945_76974[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_76942 === (4)))
{var inst_76915 = (state_76941[(7)]);var inst_76915__$1 = (state_76941[(2)]);var state_76941__$1 = (function (){var statearr_76946 = state_76941;(statearr_76946[(7)] = inst_76915__$1);
return statearr_76946;
})();if(cljs.core.truth_(inst_76915__$1))
{var statearr_76947_76975 = state_76941__$1;(statearr_76947_76975[(1)] = (5));
} else
{var statearr_76948_76976 = state_76941__$1;(statearr_76948_76976[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_76942 === (15)))
{var state_76941__$1 = state_76941;var statearr_76949_76977 = state_76941__$1;(statearr_76949_76977[(2)] = null);
(statearr_76949_76977[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_76942 === (13)))
{var state_76941__$1 = state_76941;var statearr_76950_76978 = state_76941__$1;(statearr_76950_76978[(2)] = null);
(statearr_76950_76978[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_76942 === (6)))
{var state_76941__$1 = state_76941;var statearr_76951_76979 = state_76941__$1;(statearr_76951_76979[(2)] = null);
(statearr_76951_76979[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_76942 === (17)))
{var inst_76937 = (state_76941[(2)]);var state_76941__$1 = state_76941;var statearr_76952_76980 = state_76941__$1;(statearr_76952_76980[(2)] = inst_76937);
(statearr_76952_76980[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_76942 === (3)))
{var inst_76939 = (state_76941[(2)]);var state_76941__$1 = state_76941;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_76941__$1,inst_76939);
} else
{if((state_val_76942 === (12)))
{var inst_76915 = (state_76941[(7)]);var inst_76925 = cljs.core.clj__GT_js.call(null,inst_76915);var inst_76926 = console.log(inst_76925);var state_76941__$1 = state_76941;var statearr_76953_76981 = state_76941__$1;(statearr_76953_76981[(2)] = inst_76926);
(statearr_76953_76981[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_76942 === (2)))
{var state_76941__$1 = state_76941;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_76941__$1,(4),ch);
} else
{if((state_val_76942 === (11)))
{var inst_76920 = (state_76941[(2)]);var state_76941__$1 = state_76941;var statearr_76954_76982 = state_76941__$1;(statearr_76954_76982[(2)] = inst_76920);
(statearr_76954_76982[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_76942 === (9)))
{var state_76941__$1 = state_76941;var statearr_76955_76983 = state_76941__$1;(statearr_76955_76983[(2)] = null);
(statearr_76955_76983[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_76942 === (5)))
{var state_76941__$1 = state_76941;if(cljs.core.truth_(delay))
{var statearr_76956_76984 = state_76941__$1;(statearr_76956_76984[(1)] = (8));
} else
{var statearr_76957_76985 = state_76941__$1;(statearr_76957_76985[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_76942 === (14)))
{var inst_76915 = (state_76941[(7)]);var inst_76929 = (state_76941[(2)]);var state_76941__$1 = (function (){var statearr_76958 = state_76941;(statearr_76958[(8)] = inst_76929);
return statearr_76958;
})();var statearr_76959_76986 = state_76941__$1;(statearr_76959_76986[(2)] = inst_76915);
(statearr_76959_76986[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_76942 === (16)))
{var state_76941__$1 = state_76941;var statearr_76960_76987 = state_76941__$1;(statearr_76960_76987[(2)] = null);
(statearr_76960_76987[(1)] = (17));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_76942 === (10)))
{var inst_76923 = (state_76941[(2)]);var state_76941__$1 = (function (){var statearr_76961 = state_76941;(statearr_76961[(9)] = inst_76923);
return statearr_76961;
})();if(cljs.core.truth_(log))
{var statearr_76962_76988 = state_76941__$1;(statearr_76962_76988[(1)] = (12));
} else
{var statearr_76963_76989 = state_76941__$1;(statearr_76963_76989[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_76942 === (8)))
{var inst_76918 = cljs.core.async.timeout.call(null,delay);var state_76941__$1 = state_76941;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_76941__$1,(11),inst_76918);
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
});})(c__5819__auto___76971,map__76912,map__76912__$1,delay,log))
;return ((function (switch__5804__auto__,c__5819__auto___76971,map__76912,map__76912__$1,delay,log){
return (function() {
var state_machine__5805__auto__ = null;
var state_machine__5805__auto____0 = (function (){var statearr_76967 = [null,null,null,null,null,null,null,null,null,null];(statearr_76967[(0)] = state_machine__5805__auto__);
(statearr_76967[(1)] = (1));
return statearr_76967;
});
var state_machine__5805__auto____1 = (function (state_76941){while(true){
var ret_value__5806__auto__ = (function (){try{while(true){
var result__5807__auto__ = switch__5804__auto__.call(null,state_76941);if(cljs.core.keyword_identical_QMARK_.call(null,result__5807__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5807__auto__;
}
break;
}
}catch (e76968){if((e76968 instanceof Object))
{var ex__5808__auto__ = e76968;var statearr_76969_76990 = state_76941;(statearr_76969_76990[(5)] = ex__5808__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_76941);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e76968;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5806__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__76991 = state_76941;
state_76941 = G__76991;
continue;
}
} else
{return ret_value__5806__auto__;
}
break;
}
});
state_machine__5805__auto__ = function(state_76941){
switch(arguments.length){
case 0:
return state_machine__5805__auto____0.call(this);
case 1:
return state_machine__5805__auto____1.call(this,state_76941);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5805__auto____0;
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5805__auto____1;
return state_machine__5805__auto__;
})()
;})(switch__5804__auto__,c__5819__auto___76971,map__76912,map__76912__$1,delay,log))
})();var state__5821__auto__ = (function (){var statearr_76970 = f__5820__auto__.call(null);(statearr_76970[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5819__auto___76971);
return statearr_76970;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5821__auto__);
});})(c__5819__auto___76971,map__76912,map__76912__$1,delay,log))
);
return null;
};
var dorun_async = function (ch,var_args){
var p__76852 = null;if (arguments.length > 1) {
  p__76852 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return dorun_async__delegate.call(this,ch,p__76852);};
dorun_async.cljs$lang$maxFixedArity = 1;
dorun_async.cljs$lang$applyTo = (function (arglist__76992){
var ch = cljs.core.first(arglist__76992);
var p__76852 = cljs.core.rest(arglist__76992);
return dorun_async__delegate(ch,p__76852);
});
dorun_async.cljs$core$IFn$_invoke$arity$variadic = dorun_async__delegate;
return dorun_async;
})()
;

//# sourceMappingURL=async.js.map