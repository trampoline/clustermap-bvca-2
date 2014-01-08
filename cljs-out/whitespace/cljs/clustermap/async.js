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
map_async.cljs$lang$applyTo = (function (arglist__28226){
var f = cljs.core.first(arglist__28226);
var colls = cljs.core.rest(arglist__28226);
return map_async__delegate(f,colls);
});
map_async.cljs$core$IFn$_invoke$arity$variadic = map_async__delegate;
return map_async;
})()
;
/**
* asynch consume all values from a channel
* @param {...*} var_args
*/
clustermap.async.dorun_async = (function() { 
var dorun_async__delegate = function (ch,p__28227){var map__28287 = p__28227;var map__28287__$1 = ((cljs.core.seq_QMARK_.call(null,map__28287))?cljs.core.apply.call(null,cljs.core.hash_map,map__28287):map__28287);var delay = cljs.core.get.call(null,map__28287__$1,new cljs.core.Keyword(null,"delay","delay",1109372149));var log = cljs.core.get.call(null,map__28287__$1,new cljs.core.Keyword(null,"log","log",1014011574));var c__5521__auto___28346 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_28316){var state_val_28317 = (state_28316[1]);if((state_val_28317 === 1))
{var state_28316__$1 = state_28316;var statearr_28318_28347 = state_28316__$1;(statearr_28318_28347[2] = null);
(statearr_28318_28347[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28317 === 2))
{var state_28316__$1 = state_28316;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28316__$1,4,ch);
} else
{if((state_val_28317 === 3))
{var inst_28314 = (state_28316[2]);var state_28316__$1 = state_28316;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28316__$1,inst_28314);
} else
{if((state_val_28317 === 4))
{var inst_28290 = (state_28316[7]);var inst_28290__$1 = (state_28316[2]);var state_28316__$1 = (function (){var statearr_28319 = state_28316;(statearr_28319[7] = inst_28290__$1);
return statearr_28319;
})();if(cljs.core.truth_(inst_28290__$1))
{var statearr_28320_28348 = state_28316__$1;(statearr_28320_28348[1] = 5);
} else
{var statearr_28321_28349 = state_28316__$1;(statearr_28321_28349[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28317 === 5))
{var state_28316__$1 = state_28316;if(cljs.core.truth_(delay))
{var statearr_28322_28350 = state_28316__$1;(statearr_28322_28350[1] = 8);
} else
{var statearr_28323_28351 = state_28316__$1;(statearr_28323_28351[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28317 === 6))
{var state_28316__$1 = state_28316;var statearr_28324_28352 = state_28316__$1;(statearr_28324_28352[2] = null);
(statearr_28324_28352[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28317 === 7))
{var inst_28307 = (state_28316[2]);var state_28316__$1 = state_28316;if(cljs.core.truth_(inst_28307))
{var statearr_28325_28353 = state_28316__$1;(statearr_28325_28353[1] = 15);
} else
{var statearr_28326_28354 = state_28316__$1;(statearr_28326_28354[1] = 16);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28317 === 8))
{var inst_28293 = cljs.core.async.timeout.call(null,delay);var state_28316__$1 = state_28316;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28316__$1,11,inst_28293);
} else
{if((state_val_28317 === 9))
{var state_28316__$1 = state_28316;var statearr_28327_28355 = state_28316__$1;(statearr_28327_28355[2] = null);
(statearr_28327_28355[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28317 === 10))
{var inst_28298 = (state_28316[2]);var state_28316__$1 = (function (){var statearr_28328 = state_28316;(statearr_28328[8] = inst_28298);
return statearr_28328;
})();if(cljs.core.truth_(log))
{var statearr_28329_28356 = state_28316__$1;(statearr_28329_28356[1] = 12);
} else
{var statearr_28330_28357 = state_28316__$1;(statearr_28330_28357[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28317 === 11))
{var inst_28295 = (state_28316[2]);var state_28316__$1 = state_28316;var statearr_28331_28358 = state_28316__$1;(statearr_28331_28358[2] = inst_28295);
(statearr_28331_28358[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28317 === 12))
{var inst_28290 = (state_28316[7]);var inst_28300 = cljs.core.clj__GT_js.call(null,inst_28290);var inst_28301 = console.log(inst_28300);var state_28316__$1 = state_28316;var statearr_28332_28359 = state_28316__$1;(statearr_28332_28359[2] = inst_28301);
(statearr_28332_28359[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28317 === 13))
{var state_28316__$1 = state_28316;var statearr_28333_28360 = state_28316__$1;(statearr_28333_28360[2] = null);
(statearr_28333_28360[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28317 === 14))
{var inst_28290 = (state_28316[7]);var inst_28304 = (state_28316[2]);var state_28316__$1 = (function (){var statearr_28334 = state_28316;(statearr_28334[9] = inst_28304);
return statearr_28334;
})();var statearr_28335_28361 = state_28316__$1;(statearr_28335_28361[2] = inst_28290);
(statearr_28335_28361[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28317 === 15))
{var state_28316__$1 = state_28316;var statearr_28336_28362 = state_28316__$1;(statearr_28336_28362[2] = null);
(statearr_28336_28362[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28317 === 16))
{var state_28316__$1 = state_28316;var statearr_28337_28363 = state_28316__$1;(statearr_28337_28363[2] = null);
(statearr_28337_28363[1] = 17);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28317 === 17))
{var inst_28312 = (state_28316[2]);var state_28316__$1 = state_28316;var statearr_28338_28364 = state_28316__$1;(statearr_28338_28364[2] = inst_28312);
(statearr_28338_28364[1] = 3);
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
var state_machine__5507__auto____0 = (function (){var statearr_28342 = [null,null,null,null,null,null,null,null,null,null];(statearr_28342[0] = state_machine__5507__auto__);
(statearr_28342[1] = 1);
return statearr_28342;
});
var state_machine__5507__auto____1 = (function (state_28316){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_28316);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e28343){if((e28343 instanceof Object))
{var ex__5510__auto__ = e28343;var statearr_28344_28365 = state_28316;(statearr_28344_28365[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28316);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e28343;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__28366 = state_28316;
state_28316 = G__28366;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_28316){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_28316);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_28345 = f__5522__auto__.call(null);(statearr_28345[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___28346);
return statearr_28345;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5523__auto__);
}));
return null;
};
var dorun_async = function (ch,var_args){
var p__28227 = null;if (arguments.length > 1) {
  p__28227 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return dorun_async__delegate.call(this,ch,p__28227);};
dorun_async.cljs$lang$maxFixedArity = 1;
dorun_async.cljs$lang$applyTo = (function (arglist__28367){
var ch = cljs.core.first(arglist__28367);
var p__28227 = cljs.core.rest(arglist__28367);
return dorun_async__delegate(ch,p__28227);
});
dorun_async.cljs$core$IFn$_invoke$arity$variadic = dorun_async__delegate;
return dorun_async;
})()
;
