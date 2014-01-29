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
map_async.cljs$lang$applyTo = (function (arglist__11268){
var f = cljs.core.first(arglist__11268);
var colls = cljs.core.rest(arglist__11268);
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
var dorun_async__delegate = function (ch,p__11269){var map__11329 = p__11269;var map__11329__$1 = ((cljs.core.seq_QMARK_.call(null,map__11329))?cljs.core.apply.call(null,cljs.core.hash_map,map__11329):map__11329);var delay = cljs.core.get.call(null,map__11329__$1,new cljs.core.Keyword(null,"delay","delay",1109372149));var log = cljs.core.get.call(null,map__11329__$1,new cljs.core.Keyword(null,"log","log",1014011574));var c__5521__auto___11388 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_11358){var state_val_11359 = (state_11358[1]);if((state_val_11359 === 1))
{var state_11358__$1 = state_11358;var statearr_11360_11389 = state_11358__$1;(statearr_11360_11389[2] = null);
(statearr_11360_11389[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11359 === 2))
{var state_11358__$1 = state_11358;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11358__$1,4,ch);
} else
{if((state_val_11359 === 3))
{var inst_11356 = (state_11358[2]);var state_11358__$1 = state_11358;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11358__$1,inst_11356);
} else
{if((state_val_11359 === 4))
{var inst_11332 = (state_11358[7]);var inst_11332__$1 = (state_11358[2]);var state_11358__$1 = (function (){var statearr_11361 = state_11358;(statearr_11361[7] = inst_11332__$1);
return statearr_11361;
})();if(cljs.core.truth_(inst_11332__$1))
{var statearr_11362_11390 = state_11358__$1;(statearr_11362_11390[1] = 5);
} else
{var statearr_11363_11391 = state_11358__$1;(statearr_11363_11391[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11359 === 5))
{var state_11358__$1 = state_11358;if(cljs.core.truth_(delay))
{var statearr_11364_11392 = state_11358__$1;(statearr_11364_11392[1] = 8);
} else
{var statearr_11365_11393 = state_11358__$1;(statearr_11365_11393[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11359 === 6))
{var state_11358__$1 = state_11358;var statearr_11366_11394 = state_11358__$1;(statearr_11366_11394[2] = null);
(statearr_11366_11394[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11359 === 7))
{var inst_11349 = (state_11358[2]);var state_11358__$1 = state_11358;if(cljs.core.truth_(inst_11349))
{var statearr_11367_11395 = state_11358__$1;(statearr_11367_11395[1] = 15);
} else
{var statearr_11368_11396 = state_11358__$1;(statearr_11368_11396[1] = 16);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11359 === 8))
{var inst_11335 = cljs.core.async.timeout.call(null,delay);var state_11358__$1 = state_11358;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11358__$1,11,inst_11335);
} else
{if((state_val_11359 === 9))
{var state_11358__$1 = state_11358;var statearr_11369_11397 = state_11358__$1;(statearr_11369_11397[2] = null);
(statearr_11369_11397[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11359 === 10))
{var inst_11340 = (state_11358[2]);var state_11358__$1 = (function (){var statearr_11370 = state_11358;(statearr_11370[8] = inst_11340);
return statearr_11370;
})();if(cljs.core.truth_(log))
{var statearr_11371_11398 = state_11358__$1;(statearr_11371_11398[1] = 12);
} else
{var statearr_11372_11399 = state_11358__$1;(statearr_11372_11399[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11359 === 11))
{var inst_11337 = (state_11358[2]);var state_11358__$1 = state_11358;var statearr_11373_11400 = state_11358__$1;(statearr_11373_11400[2] = inst_11337);
(statearr_11373_11400[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11359 === 12))
{var inst_11332 = (state_11358[7]);var inst_11342 = cljs.core.clj__GT_js.call(null,inst_11332);var inst_11343 = console.log(inst_11342);var state_11358__$1 = state_11358;var statearr_11374_11401 = state_11358__$1;(statearr_11374_11401[2] = inst_11343);
(statearr_11374_11401[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11359 === 13))
{var state_11358__$1 = state_11358;var statearr_11375_11402 = state_11358__$1;(statearr_11375_11402[2] = null);
(statearr_11375_11402[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11359 === 14))
{var inst_11332 = (state_11358[7]);var inst_11346 = (state_11358[2]);var state_11358__$1 = (function (){var statearr_11376 = state_11358;(statearr_11376[9] = inst_11346);
return statearr_11376;
})();var statearr_11377_11403 = state_11358__$1;(statearr_11377_11403[2] = inst_11332);
(statearr_11377_11403[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11359 === 15))
{var state_11358__$1 = state_11358;var statearr_11378_11404 = state_11358__$1;(statearr_11378_11404[2] = null);
(statearr_11378_11404[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11359 === 16))
{var state_11358__$1 = state_11358;var statearr_11379_11405 = state_11358__$1;(statearr_11379_11405[2] = null);
(statearr_11379_11405[1] = 17);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11359 === 17))
{var inst_11354 = (state_11358[2]);var state_11358__$1 = state_11358;var statearr_11380_11406 = state_11358__$1;(statearr_11380_11406[2] = inst_11354);
(statearr_11380_11406[1] = 3);
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
var state_machine__5507__auto____0 = (function (){var statearr_11384 = [null,null,null,null,null,null,null,null,null,null];(statearr_11384[0] = state_machine__5507__auto__);
(statearr_11384[1] = 1);
return statearr_11384;
});
var state_machine__5507__auto____1 = (function (state_11358){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_11358);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e11385){if((e11385 instanceof Object))
{var ex__5510__auto__ = e11385;var statearr_11386_11407 = state_11358;(statearr_11386_11407[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11358);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11385;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11408 = state_11358;
state_11358 = G__11408;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_11358){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_11358);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_11387 = f__5522__auto__.call(null);(statearr_11387[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___11388);
return statearr_11387;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5523__auto__);
}));
return null;
};
var dorun_async = function (ch,var_args){
var p__11269 = null;if (arguments.length > 1) {
  p__11269 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return dorun_async__delegate.call(this,ch,p__11269);};
dorun_async.cljs$lang$maxFixedArity = 1;
dorun_async.cljs$lang$applyTo = (function (arglist__11409){
var ch = cljs.core.first(arglist__11409);
var p__11269 = cljs.core.rest(arglist__11409);
return dorun_async__delegate(ch,p__11269);
});
dorun_async.cljs$core$IFn$_invoke$arity$variadic = dorun_async__delegate;
return dorun_async;
})()
;

//# sourceMappingURL=async.js.map