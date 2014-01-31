// Compiled by ClojureScript 0.0-2138
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
map_async.cljs$lang$applyTo = (function (arglist__11269){
var f = cljs.core.first(arglist__11269);
var colls = cljs.core.rest(arglist__11269);
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
var dorun_async__delegate = function (ch,p__11270){var map__11330 = p__11270;var map__11330__$1 = ((cljs.core.seq_QMARK_.call(null,map__11330))?cljs.core.apply.call(null,cljs.core.hash_map,map__11330):map__11330);var delay = cljs.core.get.call(null,map__11330__$1,new cljs.core.Keyword(null,"delay","delay",1109372149));var log = cljs.core.get.call(null,map__11330__$1,new cljs.core.Keyword(null,"log","log",1014011574));var c__5521__auto___11389 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_11359){var state_val_11360 = (state_11359[1]);if((state_val_11360 === 1))
{var state_11359__$1 = state_11359;var statearr_11361_11390 = state_11359__$1;(statearr_11361_11390[2] = null);
(statearr_11361_11390[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11360 === 2))
{var state_11359__$1 = state_11359;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11359__$1,4,ch);
} else
{if((state_val_11360 === 3))
{var inst_11357 = (state_11359[2]);var state_11359__$1 = state_11359;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11359__$1,inst_11357);
} else
{if((state_val_11360 === 4))
{var inst_11333 = (state_11359[7]);var inst_11333__$1 = (state_11359[2]);var state_11359__$1 = (function (){var statearr_11362 = state_11359;(statearr_11362[7] = inst_11333__$1);
return statearr_11362;
})();if(cljs.core.truth_(inst_11333__$1))
{var statearr_11363_11391 = state_11359__$1;(statearr_11363_11391[1] = 5);
} else
{var statearr_11364_11392 = state_11359__$1;(statearr_11364_11392[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11360 === 5))
{var state_11359__$1 = state_11359;if(cljs.core.truth_(delay))
{var statearr_11365_11393 = state_11359__$1;(statearr_11365_11393[1] = 8);
} else
{var statearr_11366_11394 = state_11359__$1;(statearr_11366_11394[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11360 === 6))
{var state_11359__$1 = state_11359;var statearr_11367_11395 = state_11359__$1;(statearr_11367_11395[2] = null);
(statearr_11367_11395[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11360 === 7))
{var inst_11350 = (state_11359[2]);var state_11359__$1 = state_11359;if(cljs.core.truth_(inst_11350))
{var statearr_11368_11396 = state_11359__$1;(statearr_11368_11396[1] = 15);
} else
{var statearr_11369_11397 = state_11359__$1;(statearr_11369_11397[1] = 16);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11360 === 8))
{var inst_11336 = cljs.core.async.timeout.call(null,delay);var state_11359__$1 = state_11359;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11359__$1,11,inst_11336);
} else
{if((state_val_11360 === 9))
{var state_11359__$1 = state_11359;var statearr_11370_11398 = state_11359__$1;(statearr_11370_11398[2] = null);
(statearr_11370_11398[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11360 === 10))
{var inst_11341 = (state_11359[2]);var state_11359__$1 = (function (){var statearr_11371 = state_11359;(statearr_11371[8] = inst_11341);
return statearr_11371;
})();if(cljs.core.truth_(log))
{var statearr_11372_11399 = state_11359__$1;(statearr_11372_11399[1] = 12);
} else
{var statearr_11373_11400 = state_11359__$1;(statearr_11373_11400[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11360 === 11))
{var inst_11338 = (state_11359[2]);var state_11359__$1 = state_11359;var statearr_11374_11401 = state_11359__$1;(statearr_11374_11401[2] = inst_11338);
(statearr_11374_11401[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11360 === 12))
{var inst_11333 = (state_11359[7]);var inst_11343 = cljs.core.clj__GT_js.call(null,inst_11333);var inst_11344 = console.log(inst_11343);var state_11359__$1 = state_11359;var statearr_11375_11402 = state_11359__$1;(statearr_11375_11402[2] = inst_11344);
(statearr_11375_11402[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11360 === 13))
{var state_11359__$1 = state_11359;var statearr_11376_11403 = state_11359__$1;(statearr_11376_11403[2] = null);
(statearr_11376_11403[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11360 === 14))
{var inst_11333 = (state_11359[7]);var inst_11347 = (state_11359[2]);var state_11359__$1 = (function (){var statearr_11377 = state_11359;(statearr_11377[9] = inst_11347);
return statearr_11377;
})();var statearr_11378_11404 = state_11359__$1;(statearr_11378_11404[2] = inst_11333);
(statearr_11378_11404[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11360 === 15))
{var state_11359__$1 = state_11359;var statearr_11379_11405 = state_11359__$1;(statearr_11379_11405[2] = null);
(statearr_11379_11405[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11360 === 16))
{var state_11359__$1 = state_11359;var statearr_11380_11406 = state_11359__$1;(statearr_11380_11406[2] = null);
(statearr_11380_11406[1] = 17);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11360 === 17))
{var inst_11355 = (state_11359[2]);var state_11359__$1 = state_11359;var statearr_11381_11407 = state_11359__$1;(statearr_11381_11407[2] = inst_11355);
(statearr_11381_11407[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
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
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_11385 = [null,null,null,null,null,null,null,null,null,null];(statearr_11385[0] = state_machine__5507__auto__);
(statearr_11385[1] = 1);
return statearr_11385;
});
var state_machine__5507__auto____1 = (function (state_11359){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_11359);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e11386){if((e11386 instanceof Object))
{var ex__5510__auto__ = e11386;var statearr_11387_11408 = state_11359;(statearr_11387_11408[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11359);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11386;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11409 = state_11359;
state_11359 = G__11409;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_11359){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_11359);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_11388 = f__5522__auto__.call(null);(statearr_11388[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___11389);
return statearr_11388;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5523__auto__);
}));
return null;
};
var dorun_async = function (ch,var_args){
var p__11270 = null;if (arguments.length > 1) {
  p__11270 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return dorun_async__delegate.call(this,ch,p__11270);};
dorun_async.cljs$lang$maxFixedArity = 1;
dorun_async.cljs$lang$applyTo = (function (arglist__11410){
var ch = cljs.core.first(arglist__11410);
var p__11270 = cljs.core.rest(arglist__11410);
return dorun_async__delegate(ch,p__11270);
});
dorun_async.cljs$core$IFn$_invoke$arity$variadic = dorun_async__delegate;
return dorun_async;
})()
;

//# sourceMappingURL=async.js.map