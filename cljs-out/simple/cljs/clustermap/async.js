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
map_async.cljs$lang$applyTo = (function (arglist__24226){
var f = cljs.core.first(arglist__24226);
var colls = cljs.core.rest(arglist__24226);
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
var dorun_async__delegate = function (ch,p__24227){var map__24287 = p__24227;var map__24287__$1 = ((cljs.core.seq_QMARK_.call(null,map__24287))?cljs.core.apply.call(null,cljs.core.hash_map,map__24287):map__24287);var delay = cljs.core.get.call(null,map__24287__$1,new cljs.core.Keyword(null,"delay","delay",-574225219));var log = cljs.core.get.call(null,map__24287__$1,new cljs.core.Keyword(null,"log","log",-1595516004));var c__5693__auto___24346 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5693__auto___24346,map__24287,map__24287__$1,delay,log){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto___24346,map__24287,map__24287__$1,delay,log){
return (function (state_24316){var state_val_24317 = (state_24316[(1)]);if((state_val_24317 === (7)))
{var inst_24307 = (state_24316[(2)]);var state_24316__$1 = state_24316;if(cljs.core.truth_(inst_24307))
{var statearr_24318_24347 = state_24316__$1;(statearr_24318_24347[(1)] = (15));
} else
{var statearr_24319_24348 = state_24316__$1;(statearr_24319_24348[(1)] = (16));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24317 === (1)))
{var state_24316__$1 = state_24316;var statearr_24320_24349 = state_24316__$1;(statearr_24320_24349[(2)] = null);
(statearr_24320_24349[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24317 === (4)))
{var inst_24290 = (state_24316[(7)]);var inst_24290__$1 = (state_24316[(2)]);var state_24316__$1 = (function (){var statearr_24321 = state_24316;(statearr_24321[(7)] = inst_24290__$1);
return statearr_24321;
})();if(cljs.core.truth_(inst_24290__$1))
{var statearr_24322_24350 = state_24316__$1;(statearr_24322_24350[(1)] = (5));
} else
{var statearr_24323_24351 = state_24316__$1;(statearr_24323_24351[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24317 === (15)))
{var state_24316__$1 = state_24316;var statearr_24324_24352 = state_24316__$1;(statearr_24324_24352[(2)] = null);
(statearr_24324_24352[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24317 === (13)))
{var state_24316__$1 = state_24316;var statearr_24325_24353 = state_24316__$1;(statearr_24325_24353[(2)] = null);
(statearr_24325_24353[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24317 === (6)))
{var state_24316__$1 = state_24316;var statearr_24326_24354 = state_24316__$1;(statearr_24326_24354[(2)] = null);
(statearr_24326_24354[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24317 === (17)))
{var inst_24312 = (state_24316[(2)]);var state_24316__$1 = state_24316;var statearr_24327_24355 = state_24316__$1;(statearr_24327_24355[(2)] = inst_24312);
(statearr_24327_24355[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24317 === (3)))
{var inst_24314 = (state_24316[(2)]);var state_24316__$1 = state_24316;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24316__$1,inst_24314);
} else
{if((state_val_24317 === (12)))
{var inst_24290 = (state_24316[(7)]);var inst_24300 = cljs.core.clj__GT_js.call(null,inst_24290);var inst_24301 = console.log(inst_24300);var state_24316__$1 = state_24316;var statearr_24328_24356 = state_24316__$1;(statearr_24328_24356[(2)] = inst_24301);
(statearr_24328_24356[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24317 === (2)))
{var state_24316__$1 = state_24316;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24316__$1,(4),ch);
} else
{if((state_val_24317 === (11)))
{var inst_24295 = (state_24316[(2)]);var state_24316__$1 = state_24316;var statearr_24329_24357 = state_24316__$1;(statearr_24329_24357[(2)] = inst_24295);
(statearr_24329_24357[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24317 === (9)))
{var state_24316__$1 = state_24316;var statearr_24330_24358 = state_24316__$1;(statearr_24330_24358[(2)] = null);
(statearr_24330_24358[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24317 === (5)))
{var state_24316__$1 = state_24316;if(cljs.core.truth_(delay))
{var statearr_24331_24359 = state_24316__$1;(statearr_24331_24359[(1)] = (8));
} else
{var statearr_24332_24360 = state_24316__$1;(statearr_24332_24360[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24317 === (14)))
{var inst_24290 = (state_24316[(7)]);var inst_24304 = (state_24316[(2)]);var state_24316__$1 = (function (){var statearr_24333 = state_24316;(statearr_24333[(8)] = inst_24304);
return statearr_24333;
})();var statearr_24334_24361 = state_24316__$1;(statearr_24334_24361[(2)] = inst_24290);
(statearr_24334_24361[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24317 === (16)))
{var state_24316__$1 = state_24316;var statearr_24335_24362 = state_24316__$1;(statearr_24335_24362[(2)] = null);
(statearr_24335_24362[(1)] = (17));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24317 === (10)))
{var inst_24298 = (state_24316[(2)]);var state_24316__$1 = (function (){var statearr_24336 = state_24316;(statearr_24336[(9)] = inst_24298);
return statearr_24336;
})();if(cljs.core.truth_(log))
{var statearr_24337_24363 = state_24316__$1;(statearr_24337_24363[(1)] = (12));
} else
{var statearr_24338_24364 = state_24316__$1;(statearr_24338_24364[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24317 === (8)))
{var inst_24293 = cljs.core.async.timeout.call(null,delay);var state_24316__$1 = state_24316;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24316__$1,(11),inst_24293);
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
});})(c__5693__auto___24346,map__24287,map__24287__$1,delay,log))
;return ((function (switch__5678__auto__,c__5693__auto___24346,map__24287,map__24287__$1,delay,log){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_24342 = [null,null,null,null,null,null,null,null,null,null];(statearr_24342[(0)] = state_machine__5679__auto__);
(statearr_24342[(1)] = (1));
return statearr_24342;
});
var state_machine__5679__auto____1 = (function (state_24316){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_24316);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e24343){if((e24343 instanceof Object))
{var ex__5682__auto__ = e24343;var statearr_24344_24365 = state_24316;(statearr_24344_24365[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24316);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e24343;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__24366 = state_24316;
state_24316 = G__24366;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_24316){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_24316);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto___24346,map__24287,map__24287__$1,delay,log))
})();var state__5695__auto__ = (function (){var statearr_24345 = f__5694__auto__.call(null);(statearr_24345[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto___24346);
return statearr_24345;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5695__auto__);
});})(c__5693__auto___24346,map__24287,map__24287__$1,delay,log))
);
return null;
};
var dorun_async = function (ch,var_args){
var p__24227 = null;if (arguments.length > 1) {
  p__24227 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return dorun_async__delegate.call(this,ch,p__24227);};
dorun_async.cljs$lang$maxFixedArity = 1;
dorun_async.cljs$lang$applyTo = (function (arglist__24367){
var ch = cljs.core.first(arglist__24367);
var p__24227 = cljs.core.rest(arglist__24367);
return dorun_async__delegate(ch,p__24227);
});
dorun_async.cljs$core$IFn$_invoke$arity$variadic = dorun_async__delegate;
return dorun_async;
})()
;
