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
map_async.cljs$lang$applyTo = (function (arglist__12832){
var f = cljs.core.first(arglist__12832);
var colls = cljs.core.rest(arglist__12832);
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
var dorun_async__delegate = function (ch,p__12833){var map__12893 = p__12833;var map__12893__$1 = ((cljs.core.seq_QMARK_.call(null,map__12893))?cljs.core.apply.call(null,cljs.core.hash_map,map__12893):map__12893);var delay = cljs.core.get.call(null,map__12893__$1,new cljs.core.Keyword(null,"delay","delay",-574225219));var log = cljs.core.get.call(null,map__12893__$1,new cljs.core.Keyword(null,"log","log",-1595516004));var c__5821__auto___12952 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5821__auto___12952,map__12893,map__12893__$1,delay,log){
return (function (){var f__5822__auto__ = (function (){var switch__5806__auto__ = ((function (c__5821__auto___12952,map__12893,map__12893__$1,delay,log){
return (function (state_12922){var state_val_12923 = (state_12922[(1)]);if((state_val_12923 === (7)))
{var inst_12913 = (state_12922[(2)]);var state_12922__$1 = state_12922;if(cljs.core.truth_(inst_12913))
{var statearr_12924_12953 = state_12922__$1;(statearr_12924_12953[(1)] = (15));
} else
{var statearr_12925_12954 = state_12922__$1;(statearr_12925_12954[(1)] = (16));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12923 === (1)))
{var state_12922__$1 = state_12922;var statearr_12926_12955 = state_12922__$1;(statearr_12926_12955[(2)] = null);
(statearr_12926_12955[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12923 === (4)))
{var inst_12896 = (state_12922[(7)]);var inst_12896__$1 = (state_12922[(2)]);var state_12922__$1 = (function (){var statearr_12927 = state_12922;(statearr_12927[(7)] = inst_12896__$1);
return statearr_12927;
})();if(cljs.core.truth_(inst_12896__$1))
{var statearr_12928_12956 = state_12922__$1;(statearr_12928_12956[(1)] = (5));
} else
{var statearr_12929_12957 = state_12922__$1;(statearr_12929_12957[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12923 === (15)))
{var state_12922__$1 = state_12922;var statearr_12930_12958 = state_12922__$1;(statearr_12930_12958[(2)] = null);
(statearr_12930_12958[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12923 === (13)))
{var state_12922__$1 = state_12922;var statearr_12931_12959 = state_12922__$1;(statearr_12931_12959[(2)] = null);
(statearr_12931_12959[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12923 === (6)))
{var state_12922__$1 = state_12922;var statearr_12932_12960 = state_12922__$1;(statearr_12932_12960[(2)] = null);
(statearr_12932_12960[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12923 === (17)))
{var inst_12918 = (state_12922[(2)]);var state_12922__$1 = state_12922;var statearr_12933_12961 = state_12922__$1;(statearr_12933_12961[(2)] = inst_12918);
(statearr_12933_12961[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12923 === (3)))
{var inst_12920 = (state_12922[(2)]);var state_12922__$1 = state_12922;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12922__$1,inst_12920);
} else
{if((state_val_12923 === (12)))
{var inst_12896 = (state_12922[(7)]);var inst_12906 = cljs.core.clj__GT_js.call(null,inst_12896);var inst_12907 = console.log(inst_12906);var state_12922__$1 = state_12922;var statearr_12934_12962 = state_12922__$1;(statearr_12934_12962[(2)] = inst_12907);
(statearr_12934_12962[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12923 === (2)))
{var state_12922__$1 = state_12922;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12922__$1,(4),ch);
} else
{if((state_val_12923 === (11)))
{var inst_12901 = (state_12922[(2)]);var state_12922__$1 = state_12922;var statearr_12935_12963 = state_12922__$1;(statearr_12935_12963[(2)] = inst_12901);
(statearr_12935_12963[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12923 === (9)))
{var state_12922__$1 = state_12922;var statearr_12936_12964 = state_12922__$1;(statearr_12936_12964[(2)] = null);
(statearr_12936_12964[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12923 === (5)))
{var state_12922__$1 = state_12922;if(cljs.core.truth_(delay))
{var statearr_12937_12965 = state_12922__$1;(statearr_12937_12965[(1)] = (8));
} else
{var statearr_12938_12966 = state_12922__$1;(statearr_12938_12966[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12923 === (14)))
{var inst_12896 = (state_12922[(7)]);var inst_12910 = (state_12922[(2)]);var state_12922__$1 = (function (){var statearr_12939 = state_12922;(statearr_12939[(8)] = inst_12910);
return statearr_12939;
})();var statearr_12940_12967 = state_12922__$1;(statearr_12940_12967[(2)] = inst_12896);
(statearr_12940_12967[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12923 === (16)))
{var state_12922__$1 = state_12922;var statearr_12941_12968 = state_12922__$1;(statearr_12941_12968[(2)] = null);
(statearr_12941_12968[(1)] = (17));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12923 === (10)))
{var inst_12904 = (state_12922[(2)]);var state_12922__$1 = (function (){var statearr_12942 = state_12922;(statearr_12942[(9)] = inst_12904);
return statearr_12942;
})();if(cljs.core.truth_(log))
{var statearr_12943_12969 = state_12922__$1;(statearr_12943_12969[(1)] = (12));
} else
{var statearr_12944_12970 = state_12922__$1;(statearr_12944_12970[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12923 === (8)))
{var inst_12899 = cljs.core.async.timeout.call(null,delay);var state_12922__$1 = state_12922;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12922__$1,(11),inst_12899);
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
});})(c__5821__auto___12952,map__12893,map__12893__$1,delay,log))
;return ((function (switch__5806__auto__,c__5821__auto___12952,map__12893,map__12893__$1,delay,log){
return (function() {
var state_machine__5807__auto__ = null;
var state_machine__5807__auto____0 = (function (){var statearr_12948 = [null,null,null,null,null,null,null,null,null,null];(statearr_12948[(0)] = state_machine__5807__auto__);
(statearr_12948[(1)] = (1));
return statearr_12948;
});
var state_machine__5807__auto____1 = (function (state_12922){while(true){
var ret_value__5808__auto__ = (function (){try{while(true){
var result__5809__auto__ = switch__5806__auto__.call(null,state_12922);if(cljs.core.keyword_identical_QMARK_.call(null,result__5809__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5809__auto__;
}
break;
}
}catch (e12949){if((e12949 instanceof Object))
{var ex__5810__auto__ = e12949;var statearr_12950_12971 = state_12922;(statearr_12950_12971[(5)] = ex__5810__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12922);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e12949;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5808__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12972 = state_12922;
state_12922 = G__12972;
continue;
}
} else
{return ret_value__5808__auto__;
}
break;
}
});
state_machine__5807__auto__ = function(state_12922){
switch(arguments.length){
case 0:
return state_machine__5807__auto____0.call(this);
case 1:
return state_machine__5807__auto____1.call(this,state_12922);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5807__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5807__auto____0;
state_machine__5807__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5807__auto____1;
return state_machine__5807__auto__;
})()
;})(switch__5806__auto__,c__5821__auto___12952,map__12893,map__12893__$1,delay,log))
})();var state__5823__auto__ = (function (){var statearr_12951 = f__5822__auto__.call(null);(statearr_12951[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5821__auto___12952);
return statearr_12951;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5823__auto__);
});})(c__5821__auto___12952,map__12893,map__12893__$1,delay,log))
);
return null;
};
var dorun_async = function (ch,var_args){
var p__12833 = null;if (arguments.length > 1) {
  p__12833 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return dorun_async__delegate.call(this,ch,p__12833);};
dorun_async.cljs$lang$maxFixedArity = 1;
dorun_async.cljs$lang$applyTo = (function (arglist__12973){
var ch = cljs.core.first(arglist__12973);
var p__12833 = cljs.core.rest(arglist__12973);
return dorun_async__delegate(ch,p__12833);
});
dorun_async.cljs$core$IFn$_invoke$arity$variadic = dorun_async__delegate;
return dorun_async;
})()
;
