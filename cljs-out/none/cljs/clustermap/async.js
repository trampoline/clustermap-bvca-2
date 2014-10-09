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
map_async.cljs$lang$applyTo = (function (arglist__60907){
var f = cljs.core.first(arglist__60907);
var colls = cljs.core.rest(arglist__60907);
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
var dorun_async__delegate = function (ch,p__60908){var map__60968 = p__60908;var map__60968__$1 = ((cljs.core.seq_QMARK_.call(null,map__60968))?cljs.core.apply.call(null,cljs.core.hash_map,map__60968):map__60968);var delay = cljs.core.get.call(null,map__60968__$1,new cljs.core.Keyword(null,"delay","delay",-574225219));var log = cljs.core.get.call(null,map__60968__$1,new cljs.core.Keyword(null,"log","log",-1595516004));var c__5708__auto___61027 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5708__auto___61027,map__60968,map__60968__$1,delay,log){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___61027,map__60968,map__60968__$1,delay,log){
return (function (state_60997){var state_val_60998 = (state_60997[(1)]);if((state_val_60998 === (7)))
{var inst_60988 = (state_60997[(2)]);var state_60997__$1 = state_60997;if(cljs.core.truth_(inst_60988))
{var statearr_60999_61028 = state_60997__$1;(statearr_60999_61028[(1)] = (15));
} else
{var statearr_61000_61029 = state_60997__$1;(statearr_61000_61029[(1)] = (16));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_60998 === (1)))
{var state_60997__$1 = state_60997;var statearr_61001_61030 = state_60997__$1;(statearr_61001_61030[(2)] = null);
(statearr_61001_61030[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_60998 === (4)))
{var inst_60971 = (state_60997[(7)]);var inst_60971__$1 = (state_60997[(2)]);var state_60997__$1 = (function (){var statearr_61002 = state_60997;(statearr_61002[(7)] = inst_60971__$1);
return statearr_61002;
})();if(cljs.core.truth_(inst_60971__$1))
{var statearr_61003_61031 = state_60997__$1;(statearr_61003_61031[(1)] = (5));
} else
{var statearr_61004_61032 = state_60997__$1;(statearr_61004_61032[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_60998 === (15)))
{var state_60997__$1 = state_60997;var statearr_61005_61033 = state_60997__$1;(statearr_61005_61033[(2)] = null);
(statearr_61005_61033[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_60998 === (13)))
{var state_60997__$1 = state_60997;var statearr_61006_61034 = state_60997__$1;(statearr_61006_61034[(2)] = null);
(statearr_61006_61034[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_60998 === (6)))
{var state_60997__$1 = state_60997;var statearr_61007_61035 = state_60997__$1;(statearr_61007_61035[(2)] = null);
(statearr_61007_61035[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_60998 === (17)))
{var inst_60993 = (state_60997[(2)]);var state_60997__$1 = state_60997;var statearr_61008_61036 = state_60997__$1;(statearr_61008_61036[(2)] = inst_60993);
(statearr_61008_61036[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_60998 === (3)))
{var inst_60995 = (state_60997[(2)]);var state_60997__$1 = state_60997;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_60997__$1,inst_60995);
} else
{if((state_val_60998 === (12)))
{var inst_60971 = (state_60997[(7)]);var inst_60981 = cljs.core.clj__GT_js.call(null,inst_60971);var inst_60982 = console.log(inst_60981);var state_60997__$1 = state_60997;var statearr_61009_61037 = state_60997__$1;(statearr_61009_61037[(2)] = inst_60982);
(statearr_61009_61037[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_60998 === (2)))
{var state_60997__$1 = state_60997;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_60997__$1,(4),ch);
} else
{if((state_val_60998 === (11)))
{var inst_60976 = (state_60997[(2)]);var state_60997__$1 = state_60997;var statearr_61010_61038 = state_60997__$1;(statearr_61010_61038[(2)] = inst_60976);
(statearr_61010_61038[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_60998 === (9)))
{var state_60997__$1 = state_60997;var statearr_61011_61039 = state_60997__$1;(statearr_61011_61039[(2)] = null);
(statearr_61011_61039[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_60998 === (5)))
{var state_60997__$1 = state_60997;if(cljs.core.truth_(delay))
{var statearr_61012_61040 = state_60997__$1;(statearr_61012_61040[(1)] = (8));
} else
{var statearr_61013_61041 = state_60997__$1;(statearr_61013_61041[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_60998 === (14)))
{var inst_60971 = (state_60997[(7)]);var inst_60985 = (state_60997[(2)]);var state_60997__$1 = (function (){var statearr_61014 = state_60997;(statearr_61014[(8)] = inst_60985);
return statearr_61014;
})();var statearr_61015_61042 = state_60997__$1;(statearr_61015_61042[(2)] = inst_60971);
(statearr_61015_61042[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_60998 === (16)))
{var state_60997__$1 = state_60997;var statearr_61016_61043 = state_60997__$1;(statearr_61016_61043[(2)] = null);
(statearr_61016_61043[(1)] = (17));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_60998 === (10)))
{var inst_60979 = (state_60997[(2)]);var state_60997__$1 = (function (){var statearr_61017 = state_60997;(statearr_61017[(9)] = inst_60979);
return statearr_61017;
})();if(cljs.core.truth_(log))
{var statearr_61018_61044 = state_60997__$1;(statearr_61018_61044[(1)] = (12));
} else
{var statearr_61019_61045 = state_60997__$1;(statearr_61019_61045[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_60998 === (8)))
{var inst_60974 = cljs.core.async.timeout.call(null,delay);var state_60997__$1 = state_60997;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_60997__$1,(11),inst_60974);
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
});})(c__5708__auto___61027,map__60968,map__60968__$1,delay,log))
;return ((function (switch__5693__auto__,c__5708__auto___61027,map__60968,map__60968__$1,delay,log){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_61023 = [null,null,null,null,null,null,null,null,null,null];(statearr_61023[(0)] = state_machine__5694__auto__);
(statearr_61023[(1)] = (1));
return statearr_61023;
});
var state_machine__5694__auto____1 = (function (state_60997){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_60997);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e61024){if((e61024 instanceof Object))
{var ex__5697__auto__ = e61024;var statearr_61025_61046 = state_60997;(statearr_61025_61046[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_60997);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e61024;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__61047 = state_60997;
state_60997 = G__61047;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_60997){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_60997);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___61027,map__60968,map__60968__$1,delay,log))
})();var state__5710__auto__ = (function (){var statearr_61026 = f__5709__auto__.call(null);(statearr_61026[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___61027);
return statearr_61026;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
});})(c__5708__auto___61027,map__60968,map__60968__$1,delay,log))
);
return null;
};
var dorun_async = function (ch,var_args){
var p__60908 = null;if (arguments.length > 1) {
  p__60908 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return dorun_async__delegate.call(this,ch,p__60908);};
dorun_async.cljs$lang$maxFixedArity = 1;
dorun_async.cljs$lang$applyTo = (function (arglist__61048){
var ch = cljs.core.first(arglist__61048);
var p__60908 = cljs.core.rest(arglist__61048);
return dorun_async__delegate(ch,p__60908);
});
dorun_async.cljs$core$IFn$_invoke$arity$variadic = dorun_async__delegate;
return dorun_async;
})()
;

//# sourceMappingURL=async.js.map