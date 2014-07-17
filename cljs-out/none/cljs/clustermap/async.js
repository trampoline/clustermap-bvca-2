// Compiled by ClojureScript 0.0-2261
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
map_async.cljs$lang$applyTo = (function (arglist__48251){
var f = cljs.core.first(arglist__48251);
var colls = cljs.core.rest(arglist__48251);
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
var dorun_async__delegate = function (ch,p__48252){var map__48312 = p__48252;var map__48312__$1 = ((cljs.core.seq_QMARK_.call(null,map__48312))?cljs.core.apply.call(null,cljs.core.hash_map,map__48312):map__48312);var delay = cljs.core.get.call(null,map__48312__$1,new cljs.core.Keyword(null,"delay","delay",-574225219));var log = cljs.core.get.call(null,map__48312__$1,new cljs.core.Keyword(null,"log","log",-1595516004));var c__5693__auto___48371 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5693__auto___48371,map__48312,map__48312__$1,delay,log){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto___48371,map__48312,map__48312__$1,delay,log){
return (function (state_48341){var state_val_48342 = (state_48341[(1)]);if((state_val_48342 === (7)))
{var inst_48332 = (state_48341[(2)]);var state_48341__$1 = state_48341;if(cljs.core.truth_(inst_48332))
{var statearr_48343_48372 = state_48341__$1;(statearr_48343_48372[(1)] = (15));
} else
{var statearr_48344_48373 = state_48341__$1;(statearr_48344_48373[(1)] = (16));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_48342 === (1)))
{var state_48341__$1 = state_48341;var statearr_48345_48374 = state_48341__$1;(statearr_48345_48374[(2)] = null);
(statearr_48345_48374[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_48342 === (4)))
{var inst_48315 = (state_48341[(7)]);var inst_48315__$1 = (state_48341[(2)]);var state_48341__$1 = (function (){var statearr_48346 = state_48341;(statearr_48346[(7)] = inst_48315__$1);
return statearr_48346;
})();if(cljs.core.truth_(inst_48315__$1))
{var statearr_48347_48375 = state_48341__$1;(statearr_48347_48375[(1)] = (5));
} else
{var statearr_48348_48376 = state_48341__$1;(statearr_48348_48376[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_48342 === (15)))
{var state_48341__$1 = state_48341;var statearr_48349_48377 = state_48341__$1;(statearr_48349_48377[(2)] = null);
(statearr_48349_48377[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_48342 === (13)))
{var state_48341__$1 = state_48341;var statearr_48350_48378 = state_48341__$1;(statearr_48350_48378[(2)] = null);
(statearr_48350_48378[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_48342 === (6)))
{var state_48341__$1 = state_48341;var statearr_48351_48379 = state_48341__$1;(statearr_48351_48379[(2)] = null);
(statearr_48351_48379[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_48342 === (17)))
{var inst_48337 = (state_48341[(2)]);var state_48341__$1 = state_48341;var statearr_48352_48380 = state_48341__$1;(statearr_48352_48380[(2)] = inst_48337);
(statearr_48352_48380[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_48342 === (3)))
{var inst_48339 = (state_48341[(2)]);var state_48341__$1 = state_48341;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48341__$1,inst_48339);
} else
{if((state_val_48342 === (12)))
{var inst_48315 = (state_48341[(7)]);var inst_48325 = cljs.core.clj__GT_js.call(null,inst_48315);var inst_48326 = console.log(inst_48325);var state_48341__$1 = state_48341;var statearr_48353_48381 = state_48341__$1;(statearr_48353_48381[(2)] = inst_48326);
(statearr_48353_48381[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_48342 === (2)))
{var state_48341__$1 = state_48341;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48341__$1,(4),ch);
} else
{if((state_val_48342 === (11)))
{var inst_48320 = (state_48341[(2)]);var state_48341__$1 = state_48341;var statearr_48354_48382 = state_48341__$1;(statearr_48354_48382[(2)] = inst_48320);
(statearr_48354_48382[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_48342 === (9)))
{var state_48341__$1 = state_48341;var statearr_48355_48383 = state_48341__$1;(statearr_48355_48383[(2)] = null);
(statearr_48355_48383[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_48342 === (5)))
{var state_48341__$1 = state_48341;if(cljs.core.truth_(delay))
{var statearr_48356_48384 = state_48341__$1;(statearr_48356_48384[(1)] = (8));
} else
{var statearr_48357_48385 = state_48341__$1;(statearr_48357_48385[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_48342 === (14)))
{var inst_48315 = (state_48341[(7)]);var inst_48329 = (state_48341[(2)]);var state_48341__$1 = (function (){var statearr_48358 = state_48341;(statearr_48358[(8)] = inst_48329);
return statearr_48358;
})();var statearr_48359_48386 = state_48341__$1;(statearr_48359_48386[(2)] = inst_48315);
(statearr_48359_48386[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_48342 === (16)))
{var state_48341__$1 = state_48341;var statearr_48360_48387 = state_48341__$1;(statearr_48360_48387[(2)] = null);
(statearr_48360_48387[(1)] = (17));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_48342 === (10)))
{var inst_48323 = (state_48341[(2)]);var state_48341__$1 = (function (){var statearr_48361 = state_48341;(statearr_48361[(9)] = inst_48323);
return statearr_48361;
})();if(cljs.core.truth_(log))
{var statearr_48362_48388 = state_48341__$1;(statearr_48362_48388[(1)] = (12));
} else
{var statearr_48363_48389 = state_48341__$1;(statearr_48363_48389[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_48342 === (8)))
{var inst_48318 = cljs.core.async.timeout.call(null,delay);var state_48341__$1 = state_48341;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48341__$1,(11),inst_48318);
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
});})(c__5693__auto___48371,map__48312,map__48312__$1,delay,log))
;return ((function (switch__5678__auto__,c__5693__auto___48371,map__48312,map__48312__$1,delay,log){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_48367 = [null,null,null,null,null,null,null,null,null,null];(statearr_48367[(0)] = state_machine__5679__auto__);
(statearr_48367[(1)] = (1));
return statearr_48367;
});
var state_machine__5679__auto____1 = (function (state_48341){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_48341);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e48368){if((e48368 instanceof Object))
{var ex__5682__auto__ = e48368;var statearr_48369_48390 = state_48341;(statearr_48369_48390[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48341);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e48368;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__48391 = state_48341;
state_48341 = G__48391;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_48341){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_48341);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto___48371,map__48312,map__48312__$1,delay,log))
})();var state__5695__auto__ = (function (){var statearr_48370 = f__5694__auto__.call(null);(statearr_48370[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto___48371);
return statearr_48370;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5695__auto__);
});})(c__5693__auto___48371,map__48312,map__48312__$1,delay,log))
);
return null;
};
var dorun_async = function (ch,var_args){
var p__48252 = null;if (arguments.length > 1) {
  p__48252 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return dorun_async__delegate.call(this,ch,p__48252);};
dorun_async.cljs$lang$maxFixedArity = 1;
dorun_async.cljs$lang$applyTo = (function (arglist__48392){
var ch = cljs.core.first(arglist__48392);
var p__48252 = cljs.core.rest(arglist__48392);
return dorun_async__delegate(ch,p__48252);
});
dorun_async.cljs$core$IFn$_invoke$arity$variadic = dorun_async__delegate;
return dorun_async;
})()
;

//# sourceMappingURL=async.js.map