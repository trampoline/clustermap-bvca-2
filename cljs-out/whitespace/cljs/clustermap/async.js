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
map_async.cljs$lang$applyTo = (function (arglist__11872){
var f = cljs.core.first(arglist__11872);
var colls = cljs.core.rest(arglist__11872);
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
var dorun_async__delegate = function (ch,p__11873){var map__11933 = p__11873;var map__11933__$1 = ((cljs.core.seq_QMARK_.call(null,map__11933))?cljs.core.apply.call(null,cljs.core.hash_map,map__11933):map__11933);var delay = cljs.core.get.call(null,map__11933__$1,new cljs.core.Keyword(null,"delay","delay",-574225219));var log = cljs.core.get.call(null,map__11933__$1,new cljs.core.Keyword(null,"log","log",-1595516004));var c__5819__auto___11992 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5819__auto___11992,map__11933,map__11933__$1,delay,log){
return (function (){var f__5820__auto__ = (function (){var switch__5804__auto__ = ((function (c__5819__auto___11992,map__11933,map__11933__$1,delay,log){
return (function (state_11962){var state_val_11963 = (state_11962[(1)]);if((state_val_11963 === (7)))
{var inst_11953 = (state_11962[(2)]);var state_11962__$1 = state_11962;if(cljs.core.truth_(inst_11953))
{var statearr_11964_11993 = state_11962__$1;(statearr_11964_11993[(1)] = (15));
} else
{var statearr_11965_11994 = state_11962__$1;(statearr_11965_11994[(1)] = (16));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11963 === (1)))
{var state_11962__$1 = state_11962;var statearr_11966_11995 = state_11962__$1;(statearr_11966_11995[(2)] = null);
(statearr_11966_11995[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11963 === (4)))
{var inst_11936 = (state_11962[(7)]);var inst_11936__$1 = (state_11962[(2)]);var state_11962__$1 = (function (){var statearr_11967 = state_11962;(statearr_11967[(7)] = inst_11936__$1);
return statearr_11967;
})();if(cljs.core.truth_(inst_11936__$1))
{var statearr_11968_11996 = state_11962__$1;(statearr_11968_11996[(1)] = (5));
} else
{var statearr_11969_11997 = state_11962__$1;(statearr_11969_11997[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11963 === (15)))
{var state_11962__$1 = state_11962;var statearr_11970_11998 = state_11962__$1;(statearr_11970_11998[(2)] = null);
(statearr_11970_11998[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11963 === (13)))
{var state_11962__$1 = state_11962;var statearr_11971_11999 = state_11962__$1;(statearr_11971_11999[(2)] = null);
(statearr_11971_11999[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11963 === (6)))
{var state_11962__$1 = state_11962;var statearr_11972_12000 = state_11962__$1;(statearr_11972_12000[(2)] = null);
(statearr_11972_12000[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11963 === (17)))
{var inst_11958 = (state_11962[(2)]);var state_11962__$1 = state_11962;var statearr_11973_12001 = state_11962__$1;(statearr_11973_12001[(2)] = inst_11958);
(statearr_11973_12001[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11963 === (3)))
{var inst_11960 = (state_11962[(2)]);var state_11962__$1 = state_11962;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11962__$1,inst_11960);
} else
{if((state_val_11963 === (12)))
{var inst_11936 = (state_11962[(7)]);var inst_11946 = cljs.core.clj__GT_js.call(null,inst_11936);var inst_11947 = console.log(inst_11946);var state_11962__$1 = state_11962;var statearr_11974_12002 = state_11962__$1;(statearr_11974_12002[(2)] = inst_11947);
(statearr_11974_12002[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11963 === (2)))
{var state_11962__$1 = state_11962;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11962__$1,(4),ch);
} else
{if((state_val_11963 === (11)))
{var inst_11941 = (state_11962[(2)]);var state_11962__$1 = state_11962;var statearr_11975_12003 = state_11962__$1;(statearr_11975_12003[(2)] = inst_11941);
(statearr_11975_12003[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11963 === (9)))
{var state_11962__$1 = state_11962;var statearr_11976_12004 = state_11962__$1;(statearr_11976_12004[(2)] = null);
(statearr_11976_12004[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11963 === (5)))
{var state_11962__$1 = state_11962;if(cljs.core.truth_(delay))
{var statearr_11977_12005 = state_11962__$1;(statearr_11977_12005[(1)] = (8));
} else
{var statearr_11978_12006 = state_11962__$1;(statearr_11978_12006[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11963 === (14)))
{var inst_11936 = (state_11962[(7)]);var inst_11950 = (state_11962[(2)]);var state_11962__$1 = (function (){var statearr_11979 = state_11962;(statearr_11979[(8)] = inst_11950);
return statearr_11979;
})();var statearr_11980_12007 = state_11962__$1;(statearr_11980_12007[(2)] = inst_11936);
(statearr_11980_12007[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11963 === (16)))
{var state_11962__$1 = state_11962;var statearr_11981_12008 = state_11962__$1;(statearr_11981_12008[(2)] = null);
(statearr_11981_12008[(1)] = (17));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11963 === (10)))
{var inst_11944 = (state_11962[(2)]);var state_11962__$1 = (function (){var statearr_11982 = state_11962;(statearr_11982[(9)] = inst_11944);
return statearr_11982;
})();if(cljs.core.truth_(log))
{var statearr_11983_12009 = state_11962__$1;(statearr_11983_12009[(1)] = (12));
} else
{var statearr_11984_12010 = state_11962__$1;(statearr_11984_12010[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11963 === (8)))
{var inst_11939 = cljs.core.async.timeout.call(null,delay);var state_11962__$1 = state_11962;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11962__$1,(11),inst_11939);
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
});})(c__5819__auto___11992,map__11933,map__11933__$1,delay,log))
;return ((function (switch__5804__auto__,c__5819__auto___11992,map__11933,map__11933__$1,delay,log){
return (function() {
var state_machine__5805__auto__ = null;
var state_machine__5805__auto____0 = (function (){var statearr_11988 = [null,null,null,null,null,null,null,null,null,null];(statearr_11988[(0)] = state_machine__5805__auto__);
(statearr_11988[(1)] = (1));
return statearr_11988;
});
var state_machine__5805__auto____1 = (function (state_11962){while(true){
var ret_value__5806__auto__ = (function (){try{while(true){
var result__5807__auto__ = switch__5804__auto__.call(null,state_11962);if(cljs.core.keyword_identical_QMARK_.call(null,result__5807__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5807__auto__;
}
break;
}
}catch (e11989){if((e11989 instanceof Object))
{var ex__5808__auto__ = e11989;var statearr_11990_12011 = state_11962;(statearr_11990_12011[(5)] = ex__5808__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11962);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e11989;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5806__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12012 = state_11962;
state_11962 = G__12012;
continue;
}
} else
{return ret_value__5806__auto__;
}
break;
}
});
state_machine__5805__auto__ = function(state_11962){
switch(arguments.length){
case 0:
return state_machine__5805__auto____0.call(this);
case 1:
return state_machine__5805__auto____1.call(this,state_11962);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5805__auto____0;
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5805__auto____1;
return state_machine__5805__auto__;
})()
;})(switch__5804__auto__,c__5819__auto___11992,map__11933,map__11933__$1,delay,log))
})();var state__5821__auto__ = (function (){var statearr_11991 = f__5820__auto__.call(null);(statearr_11991[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5819__auto___11992);
return statearr_11991;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5821__auto__);
});})(c__5819__auto___11992,map__11933,map__11933__$1,delay,log))
);
return null;
};
var dorun_async = function (ch,var_args){
var p__11873 = null;if (arguments.length > 1) {
  p__11873 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return dorun_async__delegate.call(this,ch,p__11873);};
dorun_async.cljs$lang$maxFixedArity = 1;
dorun_async.cljs$lang$applyTo = (function (arglist__12013){
var ch = cljs.core.first(arglist__12013);
var p__11873 = cljs.core.rest(arglist__12013);
return dorun_async__delegate(ch,p__11873);
});
dorun_async.cljs$core$IFn$_invoke$arity$variadic = dorun_async__delegate;
return dorun_async;
})()
;
