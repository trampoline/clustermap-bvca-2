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
map_async.cljs$lang$applyTo = (function (arglist__56221){
var f = cljs.core.first(arglist__56221);
var colls = cljs.core.rest(arglist__56221);
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
var dorun_async__delegate = function (ch,p__56222){var map__56282 = p__56222;var map__56282__$1 = ((cljs.core.seq_QMARK_.call(null,map__56282))?cljs.core.apply.call(null,cljs.core.hash_map,map__56282):map__56282);var delay = cljs.core.get.call(null,map__56282__$1,new cljs.core.Keyword(null,"delay","delay",-574225219));var log = cljs.core.get.call(null,map__56282__$1,new cljs.core.Keyword(null,"log","log",-1595516004));var c__5708__auto___56341 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5708__auto___56341,map__56282,map__56282__$1,delay,log){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___56341,map__56282,map__56282__$1,delay,log){
return (function (state_56311){var state_val_56312 = (state_56311[(1)]);if((state_val_56312 === (7)))
{var inst_56302 = (state_56311[(2)]);var state_56311__$1 = state_56311;if(cljs.core.truth_(inst_56302))
{var statearr_56313_56342 = state_56311__$1;(statearr_56313_56342[(1)] = (15));
} else
{var statearr_56314_56343 = state_56311__$1;(statearr_56314_56343[(1)] = (16));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_56312 === (1)))
{var state_56311__$1 = state_56311;var statearr_56315_56344 = state_56311__$1;(statearr_56315_56344[(2)] = null);
(statearr_56315_56344[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_56312 === (4)))
{var inst_56285 = (state_56311[(7)]);var inst_56285__$1 = (state_56311[(2)]);var state_56311__$1 = (function (){var statearr_56316 = state_56311;(statearr_56316[(7)] = inst_56285__$1);
return statearr_56316;
})();if(cljs.core.truth_(inst_56285__$1))
{var statearr_56317_56345 = state_56311__$1;(statearr_56317_56345[(1)] = (5));
} else
{var statearr_56318_56346 = state_56311__$1;(statearr_56318_56346[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_56312 === (15)))
{var state_56311__$1 = state_56311;var statearr_56319_56347 = state_56311__$1;(statearr_56319_56347[(2)] = null);
(statearr_56319_56347[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_56312 === (13)))
{var state_56311__$1 = state_56311;var statearr_56320_56348 = state_56311__$1;(statearr_56320_56348[(2)] = null);
(statearr_56320_56348[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_56312 === (6)))
{var state_56311__$1 = state_56311;var statearr_56321_56349 = state_56311__$1;(statearr_56321_56349[(2)] = null);
(statearr_56321_56349[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_56312 === (17)))
{var inst_56307 = (state_56311[(2)]);var state_56311__$1 = state_56311;var statearr_56322_56350 = state_56311__$1;(statearr_56322_56350[(2)] = inst_56307);
(statearr_56322_56350[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_56312 === (3)))
{var inst_56309 = (state_56311[(2)]);var state_56311__$1 = state_56311;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_56311__$1,inst_56309);
} else
{if((state_val_56312 === (12)))
{var inst_56285 = (state_56311[(7)]);var inst_56295 = cljs.core.clj__GT_js.call(null,inst_56285);var inst_56296 = console.log(inst_56295);var state_56311__$1 = state_56311;var statearr_56323_56351 = state_56311__$1;(statearr_56323_56351[(2)] = inst_56296);
(statearr_56323_56351[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_56312 === (2)))
{var state_56311__$1 = state_56311;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_56311__$1,(4),ch);
} else
{if((state_val_56312 === (11)))
{var inst_56290 = (state_56311[(2)]);var state_56311__$1 = state_56311;var statearr_56324_56352 = state_56311__$1;(statearr_56324_56352[(2)] = inst_56290);
(statearr_56324_56352[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_56312 === (9)))
{var state_56311__$1 = state_56311;var statearr_56325_56353 = state_56311__$1;(statearr_56325_56353[(2)] = null);
(statearr_56325_56353[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_56312 === (5)))
{var state_56311__$1 = state_56311;if(cljs.core.truth_(delay))
{var statearr_56326_56354 = state_56311__$1;(statearr_56326_56354[(1)] = (8));
} else
{var statearr_56327_56355 = state_56311__$1;(statearr_56327_56355[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_56312 === (14)))
{var inst_56285 = (state_56311[(7)]);var inst_56299 = (state_56311[(2)]);var state_56311__$1 = (function (){var statearr_56328 = state_56311;(statearr_56328[(8)] = inst_56299);
return statearr_56328;
})();var statearr_56329_56356 = state_56311__$1;(statearr_56329_56356[(2)] = inst_56285);
(statearr_56329_56356[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_56312 === (16)))
{var state_56311__$1 = state_56311;var statearr_56330_56357 = state_56311__$1;(statearr_56330_56357[(2)] = null);
(statearr_56330_56357[(1)] = (17));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_56312 === (10)))
{var inst_56293 = (state_56311[(2)]);var state_56311__$1 = (function (){var statearr_56331 = state_56311;(statearr_56331[(9)] = inst_56293);
return statearr_56331;
})();if(cljs.core.truth_(log))
{var statearr_56332_56358 = state_56311__$1;(statearr_56332_56358[(1)] = (12));
} else
{var statearr_56333_56359 = state_56311__$1;(statearr_56333_56359[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_56312 === (8)))
{var inst_56288 = cljs.core.async.timeout.call(null,delay);var state_56311__$1 = state_56311;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_56311__$1,(11),inst_56288);
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
});})(c__5708__auto___56341,map__56282,map__56282__$1,delay,log))
;return ((function (switch__5693__auto__,c__5708__auto___56341,map__56282,map__56282__$1,delay,log){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_56337 = [null,null,null,null,null,null,null,null,null,null];(statearr_56337[(0)] = state_machine__5694__auto__);
(statearr_56337[(1)] = (1));
return statearr_56337;
});
var state_machine__5694__auto____1 = (function (state_56311){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_56311);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e56338){if((e56338 instanceof Object))
{var ex__5697__auto__ = e56338;var statearr_56339_56360 = state_56311;(statearr_56339_56360[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_56311);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e56338;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__56361 = state_56311;
state_56311 = G__56361;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_56311){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_56311);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___56341,map__56282,map__56282__$1,delay,log))
})();var state__5710__auto__ = (function (){var statearr_56340 = f__5709__auto__.call(null);(statearr_56340[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___56341);
return statearr_56340;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
});})(c__5708__auto___56341,map__56282,map__56282__$1,delay,log))
);
return null;
};
var dorun_async = function (ch,var_args){
var p__56222 = null;if (arguments.length > 1) {
  p__56222 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return dorun_async__delegate.call(this,ch,p__56222);};
dorun_async.cljs$lang$maxFixedArity = 1;
dorun_async.cljs$lang$applyTo = (function (arglist__56362){
var ch = cljs.core.first(arglist__56362);
var p__56222 = cljs.core.rest(arglist__56362);
return dorun_async__delegate(ch,p__56222);
});
dorun_async.cljs$core$IFn$_invoke$arity$variadic = dorun_async__delegate;
return dorun_async;
})()
;

//# sourceMappingURL=async.js.map