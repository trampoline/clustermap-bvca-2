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
map_async.cljs$lang$applyTo = (function (arglist__30248){
var f = cljs.core.first(arglist__30248);
var colls = cljs.core.rest(arglist__30248);
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
var dorun_async__delegate = function (ch,p__30249){var map__30309 = p__30249;var map__30309__$1 = ((cljs.core.seq_QMARK_.call(null,map__30309))?cljs.core.apply.call(null,cljs.core.hash_map,map__30309):map__30309);var delay = cljs.core.get.call(null,map__30309__$1,new cljs.core.Keyword(null,"delay","delay",1109372149));var log = cljs.core.get.call(null,map__30309__$1,new cljs.core.Keyword(null,"log","log",1014011574));var c__5521__auto___30368 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_30338){var state_val_30339 = (state_30338[1]);if((state_val_30339 === 1))
{var state_30338__$1 = state_30338;var statearr_30340_30369 = state_30338__$1;(statearr_30340_30369[2] = null);
(statearr_30340_30369[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30339 === 2))
{var state_30338__$1 = state_30338;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30338__$1,4,ch);
} else
{if((state_val_30339 === 3))
{var inst_30336 = (state_30338[2]);var state_30338__$1 = state_30338;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30338__$1,inst_30336);
} else
{if((state_val_30339 === 4))
{var inst_30312 = (state_30338[7]);var inst_30312__$1 = (state_30338[2]);var state_30338__$1 = (function (){var statearr_30341 = state_30338;(statearr_30341[7] = inst_30312__$1);
return statearr_30341;
})();if(cljs.core.truth_(inst_30312__$1))
{var statearr_30342_30370 = state_30338__$1;(statearr_30342_30370[1] = 5);
} else
{var statearr_30343_30371 = state_30338__$1;(statearr_30343_30371[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30339 === 5))
{var state_30338__$1 = state_30338;if(cljs.core.truth_(delay))
{var statearr_30344_30372 = state_30338__$1;(statearr_30344_30372[1] = 8);
} else
{var statearr_30345_30373 = state_30338__$1;(statearr_30345_30373[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30339 === 6))
{var state_30338__$1 = state_30338;var statearr_30346_30374 = state_30338__$1;(statearr_30346_30374[2] = null);
(statearr_30346_30374[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30339 === 7))
{var inst_30329 = (state_30338[2]);var state_30338__$1 = state_30338;if(cljs.core.truth_(inst_30329))
{var statearr_30347_30375 = state_30338__$1;(statearr_30347_30375[1] = 15);
} else
{var statearr_30348_30376 = state_30338__$1;(statearr_30348_30376[1] = 16);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30339 === 8))
{var inst_30315 = cljs.core.async.timeout.call(null,delay);var state_30338__$1 = state_30338;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30338__$1,11,inst_30315);
} else
{if((state_val_30339 === 9))
{var state_30338__$1 = state_30338;var statearr_30349_30377 = state_30338__$1;(statearr_30349_30377[2] = null);
(statearr_30349_30377[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30339 === 10))
{var inst_30320 = (state_30338[2]);var state_30338__$1 = (function (){var statearr_30350 = state_30338;(statearr_30350[8] = inst_30320);
return statearr_30350;
})();if(cljs.core.truth_(log))
{var statearr_30351_30378 = state_30338__$1;(statearr_30351_30378[1] = 12);
} else
{var statearr_30352_30379 = state_30338__$1;(statearr_30352_30379[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30339 === 11))
{var inst_30317 = (state_30338[2]);var state_30338__$1 = state_30338;var statearr_30353_30380 = state_30338__$1;(statearr_30353_30380[2] = inst_30317);
(statearr_30353_30380[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30339 === 12))
{var inst_30312 = (state_30338[7]);var inst_30322 = cljs.core.clj__GT_js.call(null,inst_30312);var inst_30323 = console.log(inst_30322);var state_30338__$1 = state_30338;var statearr_30354_30381 = state_30338__$1;(statearr_30354_30381[2] = inst_30323);
(statearr_30354_30381[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30339 === 13))
{var state_30338__$1 = state_30338;var statearr_30355_30382 = state_30338__$1;(statearr_30355_30382[2] = null);
(statearr_30355_30382[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30339 === 14))
{var inst_30312 = (state_30338[7]);var inst_30326 = (state_30338[2]);var state_30338__$1 = (function (){var statearr_30356 = state_30338;(statearr_30356[9] = inst_30326);
return statearr_30356;
})();var statearr_30357_30383 = state_30338__$1;(statearr_30357_30383[2] = inst_30312);
(statearr_30357_30383[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30339 === 15))
{var state_30338__$1 = state_30338;var statearr_30358_30384 = state_30338__$1;(statearr_30358_30384[2] = null);
(statearr_30358_30384[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30339 === 16))
{var state_30338__$1 = state_30338;var statearr_30359_30385 = state_30338__$1;(statearr_30359_30385[2] = null);
(statearr_30359_30385[1] = 17);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30339 === 17))
{var inst_30334 = (state_30338[2]);var state_30338__$1 = state_30338;var statearr_30360_30386 = state_30338__$1;(statearr_30360_30386[2] = inst_30334);
(statearr_30360_30386[1] = 3);
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
var state_machine__5507__auto____0 = (function (){var statearr_30364 = [null,null,null,null,null,null,null,null,null,null];(statearr_30364[0] = state_machine__5507__auto__);
(statearr_30364[1] = 1);
return statearr_30364;
});
var state_machine__5507__auto____1 = (function (state_30338){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_30338);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e30365){if((e30365 instanceof Object))
{var ex__5510__auto__ = e30365;var statearr_30366_30387 = state_30338;(statearr_30366_30387[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30338);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e30365;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__30388 = state_30338;
state_30338 = G__30388;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_30338){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_30338);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_30367 = f__5522__auto__.call(null);(statearr_30367[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___30368);
return statearr_30367;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5523__auto__);
}));
return null;
};
var dorun_async = function (ch,var_args){
var p__30249 = null;if (arguments.length > 1) {
  p__30249 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return dorun_async__delegate.call(this,ch,p__30249);};
dorun_async.cljs$lang$maxFixedArity = 1;
dorun_async.cljs$lang$applyTo = (function (arglist__30389){
var ch = cljs.core.first(arglist__30389);
var p__30249 = cljs.core.rest(arglist__30389);
return dorun_async__delegate(ch,p__30249);
});
dorun_async.cljs$core$IFn$_invoke$arity$variadic = dorun_async__delegate;
return dorun_async;
})()
;
