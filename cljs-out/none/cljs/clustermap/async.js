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
map_async.cljs$lang$applyTo = (function (arglist__11337){
var f = cljs.core.first(arglist__11337);
var colls = cljs.core.rest(arglist__11337);
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
var dorun_async__delegate = function (ch,p__11338){var map__11398 = p__11338;var map__11398__$1 = ((cljs.core.seq_QMARK_.call(null,map__11398))?cljs.core.apply.call(null,cljs.core.hash_map,map__11398):map__11398);var delay = cljs.core.get.call(null,map__11398__$1,new cljs.core.Keyword(null,"delay","delay",1109372149));var log = cljs.core.get.call(null,map__11398__$1,new cljs.core.Keyword(null,"log","log",1014011574));var c__5521__auto___11457 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_11427){var state_val_11428 = (state_11427[1]);if((state_val_11428 === 1))
{var state_11427__$1 = state_11427;var statearr_11429_11458 = state_11427__$1;(statearr_11429_11458[2] = null);
(statearr_11429_11458[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11428 === 2))
{var state_11427__$1 = state_11427;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11427__$1,4,ch);
} else
{if((state_val_11428 === 3))
{var inst_11425 = (state_11427[2]);var state_11427__$1 = state_11427;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11427__$1,inst_11425);
} else
{if((state_val_11428 === 4))
{var inst_11401 = (state_11427[7]);var inst_11401__$1 = (state_11427[2]);var state_11427__$1 = (function (){var statearr_11430 = state_11427;(statearr_11430[7] = inst_11401__$1);
return statearr_11430;
})();if(cljs.core.truth_(inst_11401__$1))
{var statearr_11431_11459 = state_11427__$1;(statearr_11431_11459[1] = 5);
} else
{var statearr_11432_11460 = state_11427__$1;(statearr_11432_11460[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11428 === 5))
{var state_11427__$1 = state_11427;if(cljs.core.truth_(delay))
{var statearr_11433_11461 = state_11427__$1;(statearr_11433_11461[1] = 8);
} else
{var statearr_11434_11462 = state_11427__$1;(statearr_11434_11462[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11428 === 6))
{var state_11427__$1 = state_11427;var statearr_11435_11463 = state_11427__$1;(statearr_11435_11463[2] = null);
(statearr_11435_11463[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11428 === 7))
{var inst_11418 = (state_11427[2]);var state_11427__$1 = state_11427;if(cljs.core.truth_(inst_11418))
{var statearr_11436_11464 = state_11427__$1;(statearr_11436_11464[1] = 15);
} else
{var statearr_11437_11465 = state_11427__$1;(statearr_11437_11465[1] = 16);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11428 === 8))
{var inst_11404 = cljs.core.async.timeout.call(null,delay);var state_11427__$1 = state_11427;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11427__$1,11,inst_11404);
} else
{if((state_val_11428 === 9))
{var state_11427__$1 = state_11427;var statearr_11438_11466 = state_11427__$1;(statearr_11438_11466[2] = null);
(statearr_11438_11466[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11428 === 10))
{var inst_11409 = (state_11427[2]);var state_11427__$1 = (function (){var statearr_11439 = state_11427;(statearr_11439[8] = inst_11409);
return statearr_11439;
})();if(cljs.core.truth_(log))
{var statearr_11440_11467 = state_11427__$1;(statearr_11440_11467[1] = 12);
} else
{var statearr_11441_11468 = state_11427__$1;(statearr_11441_11468[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11428 === 11))
{var inst_11406 = (state_11427[2]);var state_11427__$1 = state_11427;var statearr_11442_11469 = state_11427__$1;(statearr_11442_11469[2] = inst_11406);
(statearr_11442_11469[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11428 === 12))
{var inst_11401 = (state_11427[7]);var inst_11411 = cljs.core.clj__GT_js.call(null,inst_11401);var inst_11412 = console.log(inst_11411);var state_11427__$1 = state_11427;var statearr_11443_11470 = state_11427__$1;(statearr_11443_11470[2] = inst_11412);
(statearr_11443_11470[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11428 === 13))
{var state_11427__$1 = state_11427;var statearr_11444_11471 = state_11427__$1;(statearr_11444_11471[2] = null);
(statearr_11444_11471[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11428 === 14))
{var inst_11401 = (state_11427[7]);var inst_11415 = (state_11427[2]);var state_11427__$1 = (function (){var statearr_11445 = state_11427;(statearr_11445[9] = inst_11415);
return statearr_11445;
})();var statearr_11446_11472 = state_11427__$1;(statearr_11446_11472[2] = inst_11401);
(statearr_11446_11472[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11428 === 15))
{var state_11427__$1 = state_11427;var statearr_11447_11473 = state_11427__$1;(statearr_11447_11473[2] = null);
(statearr_11447_11473[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11428 === 16))
{var state_11427__$1 = state_11427;var statearr_11448_11474 = state_11427__$1;(statearr_11448_11474[2] = null);
(statearr_11448_11474[1] = 17);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11428 === 17))
{var inst_11423 = (state_11427[2]);var state_11427__$1 = state_11427;var statearr_11449_11475 = state_11427__$1;(statearr_11449_11475[2] = inst_11423);
(statearr_11449_11475[1] = 3);
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
var state_machine__5507__auto____0 = (function (){var statearr_11453 = [null,null,null,null,null,null,null,null,null,null];(statearr_11453[0] = state_machine__5507__auto__);
(statearr_11453[1] = 1);
return statearr_11453;
});
var state_machine__5507__auto____1 = (function (state_11427){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_11427);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e11454){if((e11454 instanceof Object))
{var ex__5510__auto__ = e11454;var statearr_11455_11476 = state_11427;(statearr_11455_11476[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11427);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11454;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11477 = state_11427;
state_11427 = G__11477;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_11427){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_11427);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_11456 = f__5522__auto__.call(null);(statearr_11456[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___11457);
return statearr_11456;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5523__auto__);
}));
return null;
};
var dorun_async = function (ch,var_args){
var p__11338 = null;if (arguments.length > 1) {
  p__11338 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return dorun_async__delegate.call(this,ch,p__11338);};
dorun_async.cljs$lang$maxFixedArity = 1;
dorun_async.cljs$lang$applyTo = (function (arglist__11478){
var ch = cljs.core.first(arglist__11478);
var p__11338 = cljs.core.rest(arglist__11478);
return dorun_async__delegate(ch,p__11338);
});
dorun_async.cljs$core$IFn$_invoke$arity$variadic = dorun_async__delegate;
return dorun_async;
})()
;

//# sourceMappingURL=async.js.map