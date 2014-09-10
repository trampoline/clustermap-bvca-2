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
map_async.cljs$lang$applyTo = (function (arglist__24908){
var f = cljs.core.first(arglist__24908);
var colls = cljs.core.rest(arglist__24908);
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
var dorun_async__delegate = function (ch,p__24909){var map__24969 = p__24909;var map__24969__$1 = ((cljs.core.seq_QMARK_.call(null,map__24969))?cljs.core.apply.call(null,cljs.core.hash_map,map__24969):map__24969);var delay = cljs.core.get.call(null,map__24969__$1,new cljs.core.Keyword(null,"delay","delay",-574225219));var log = cljs.core.get.call(null,map__24969__$1,new cljs.core.Keyword(null,"log","log",-1595516004));var c__5691__auto___25028 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5691__auto___25028,map__24969,map__24969__$1,delay,log){
return (function (){var f__5692__auto__ = (function (){var switch__5676__auto__ = ((function (c__5691__auto___25028,map__24969,map__24969__$1,delay,log){
return (function (state_24998){var state_val_24999 = (state_24998[(1)]);if((state_val_24999 === (7)))
{var inst_24989 = (state_24998[(2)]);var state_24998__$1 = state_24998;if(cljs.core.truth_(inst_24989))
{var statearr_25000_25029 = state_24998__$1;(statearr_25000_25029[(1)] = (15));
} else
{var statearr_25001_25030 = state_24998__$1;(statearr_25001_25030[(1)] = (16));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24999 === (1)))
{var state_24998__$1 = state_24998;var statearr_25002_25031 = state_24998__$1;(statearr_25002_25031[(2)] = null);
(statearr_25002_25031[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24999 === (4)))
{var inst_24972 = (state_24998[(7)]);var inst_24972__$1 = (state_24998[(2)]);var state_24998__$1 = (function (){var statearr_25003 = state_24998;(statearr_25003[(7)] = inst_24972__$1);
return statearr_25003;
})();if(cljs.core.truth_(inst_24972__$1))
{var statearr_25004_25032 = state_24998__$1;(statearr_25004_25032[(1)] = (5));
} else
{var statearr_25005_25033 = state_24998__$1;(statearr_25005_25033[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24999 === (15)))
{var state_24998__$1 = state_24998;var statearr_25006_25034 = state_24998__$1;(statearr_25006_25034[(2)] = null);
(statearr_25006_25034[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24999 === (13)))
{var state_24998__$1 = state_24998;var statearr_25007_25035 = state_24998__$1;(statearr_25007_25035[(2)] = null);
(statearr_25007_25035[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24999 === (6)))
{var state_24998__$1 = state_24998;var statearr_25008_25036 = state_24998__$1;(statearr_25008_25036[(2)] = null);
(statearr_25008_25036[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24999 === (17)))
{var inst_24994 = (state_24998[(2)]);var state_24998__$1 = state_24998;var statearr_25009_25037 = state_24998__$1;(statearr_25009_25037[(2)] = inst_24994);
(statearr_25009_25037[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24999 === (3)))
{var inst_24996 = (state_24998[(2)]);var state_24998__$1 = state_24998;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24998__$1,inst_24996);
} else
{if((state_val_24999 === (12)))
{var inst_24972 = (state_24998[(7)]);var inst_24982 = cljs.core.clj__GT_js.call(null,inst_24972);var inst_24983 = console.log(inst_24982);var state_24998__$1 = state_24998;var statearr_25010_25038 = state_24998__$1;(statearr_25010_25038[(2)] = inst_24983);
(statearr_25010_25038[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24999 === (2)))
{var state_24998__$1 = state_24998;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24998__$1,(4),ch);
} else
{if((state_val_24999 === (11)))
{var inst_24977 = (state_24998[(2)]);var state_24998__$1 = state_24998;var statearr_25011_25039 = state_24998__$1;(statearr_25011_25039[(2)] = inst_24977);
(statearr_25011_25039[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24999 === (9)))
{var state_24998__$1 = state_24998;var statearr_25012_25040 = state_24998__$1;(statearr_25012_25040[(2)] = null);
(statearr_25012_25040[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24999 === (5)))
{var state_24998__$1 = state_24998;if(cljs.core.truth_(delay))
{var statearr_25013_25041 = state_24998__$1;(statearr_25013_25041[(1)] = (8));
} else
{var statearr_25014_25042 = state_24998__$1;(statearr_25014_25042[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24999 === (14)))
{var inst_24972 = (state_24998[(7)]);var inst_24986 = (state_24998[(2)]);var state_24998__$1 = (function (){var statearr_25015 = state_24998;(statearr_25015[(8)] = inst_24986);
return statearr_25015;
})();var statearr_25016_25043 = state_24998__$1;(statearr_25016_25043[(2)] = inst_24972);
(statearr_25016_25043[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24999 === (16)))
{var state_24998__$1 = state_24998;var statearr_25017_25044 = state_24998__$1;(statearr_25017_25044[(2)] = null);
(statearr_25017_25044[(1)] = (17));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24999 === (10)))
{var inst_24980 = (state_24998[(2)]);var state_24998__$1 = (function (){var statearr_25018 = state_24998;(statearr_25018[(9)] = inst_24980);
return statearr_25018;
})();if(cljs.core.truth_(log))
{var statearr_25019_25045 = state_24998__$1;(statearr_25019_25045[(1)] = (12));
} else
{var statearr_25020_25046 = state_24998__$1;(statearr_25020_25046[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24999 === (8)))
{var inst_24975 = cljs.core.async.timeout.call(null,delay);var state_24998__$1 = state_24998;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24998__$1,(11),inst_24975);
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
});})(c__5691__auto___25028,map__24969,map__24969__$1,delay,log))
;return ((function (switch__5676__auto__,c__5691__auto___25028,map__24969,map__24969__$1,delay,log){
return (function() {
var state_machine__5677__auto__ = null;
var state_machine__5677__auto____0 = (function (){var statearr_25024 = [null,null,null,null,null,null,null,null,null,null];(statearr_25024[(0)] = state_machine__5677__auto__);
(statearr_25024[(1)] = (1));
return statearr_25024;
});
var state_machine__5677__auto____1 = (function (state_24998){while(true){
var ret_value__5678__auto__ = (function (){try{while(true){
var result__5679__auto__ = switch__5676__auto__.call(null,state_24998);if(cljs.core.keyword_identical_QMARK_.call(null,result__5679__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5679__auto__;
}
break;
}
}catch (e25025){if((e25025 instanceof Object))
{var ex__5680__auto__ = e25025;var statearr_25026_25047 = state_24998;(statearr_25026_25047[(5)] = ex__5680__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24998);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e25025;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5678__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__25048 = state_24998;
state_24998 = G__25048;
continue;
}
} else
{return ret_value__5678__auto__;
}
break;
}
});
state_machine__5677__auto__ = function(state_24998){
switch(arguments.length){
case 0:
return state_machine__5677__auto____0.call(this);
case 1:
return state_machine__5677__auto____1.call(this,state_24998);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5677__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5677__auto____0;
state_machine__5677__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5677__auto____1;
return state_machine__5677__auto__;
})()
;})(switch__5676__auto__,c__5691__auto___25028,map__24969,map__24969__$1,delay,log))
})();var state__5693__auto__ = (function (){var statearr_25027 = f__5692__auto__.call(null);(statearr_25027[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5691__auto___25028);
return statearr_25027;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5693__auto__);
});})(c__5691__auto___25028,map__24969,map__24969__$1,delay,log))
);
return null;
};
var dorun_async = function (ch,var_args){
var p__24909 = null;if (arguments.length > 1) {
  p__24909 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return dorun_async__delegate.call(this,ch,p__24909);};
dorun_async.cljs$lang$maxFixedArity = 1;
dorun_async.cljs$lang$applyTo = (function (arglist__25049){
var ch = cljs.core.first(arglist__25049);
var p__24909 = cljs.core.rest(arglist__25049);
return dorun_async__delegate(ch,p__24909);
});
dorun_async.cljs$core$IFn$_invoke$arity$variadic = dorun_async__delegate;
return dorun_async;
})()
;
