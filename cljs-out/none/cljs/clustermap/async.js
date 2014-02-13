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
map_async.cljs$lang$applyTo = (function (arglist__11347){
var f = cljs.core.first(arglist__11347);
var colls = cljs.core.rest(arglist__11347);
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
var dorun_async__delegate = function (ch,p__11348){var map__11408 = p__11348;var map__11408__$1 = ((cljs.core.seq_QMARK_.call(null,map__11408))?cljs.core.apply.call(null,cljs.core.hash_map,map__11408):map__11408);var delay = cljs.core.get.call(null,map__11408__$1,new cljs.core.Keyword(null,"delay","delay",1109372149));var log = cljs.core.get.call(null,map__11408__$1,new cljs.core.Keyword(null,"log","log",1014011574));var c__5521__auto___11467 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_11437){var state_val_11438 = (state_11437[1]);if((state_val_11438 === 1))
{var state_11437__$1 = state_11437;var statearr_11439_11468 = state_11437__$1;(statearr_11439_11468[2] = null);
(statearr_11439_11468[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11438 === 2))
{var state_11437__$1 = state_11437;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11437__$1,4,ch);
} else
{if((state_val_11438 === 3))
{var inst_11435 = (state_11437[2]);var state_11437__$1 = state_11437;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11437__$1,inst_11435);
} else
{if((state_val_11438 === 4))
{var inst_11411 = (state_11437[7]);var inst_11411__$1 = (state_11437[2]);var state_11437__$1 = (function (){var statearr_11440 = state_11437;(statearr_11440[7] = inst_11411__$1);
return statearr_11440;
})();if(cljs.core.truth_(inst_11411__$1))
{var statearr_11441_11469 = state_11437__$1;(statearr_11441_11469[1] = 5);
} else
{var statearr_11442_11470 = state_11437__$1;(statearr_11442_11470[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11438 === 5))
{var state_11437__$1 = state_11437;if(cljs.core.truth_(delay))
{var statearr_11443_11471 = state_11437__$1;(statearr_11443_11471[1] = 8);
} else
{var statearr_11444_11472 = state_11437__$1;(statearr_11444_11472[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11438 === 6))
{var state_11437__$1 = state_11437;var statearr_11445_11473 = state_11437__$1;(statearr_11445_11473[2] = null);
(statearr_11445_11473[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11438 === 7))
{var inst_11428 = (state_11437[2]);var state_11437__$1 = state_11437;if(cljs.core.truth_(inst_11428))
{var statearr_11446_11474 = state_11437__$1;(statearr_11446_11474[1] = 15);
} else
{var statearr_11447_11475 = state_11437__$1;(statearr_11447_11475[1] = 16);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11438 === 8))
{var inst_11414 = cljs.core.async.timeout.call(null,delay);var state_11437__$1 = state_11437;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11437__$1,11,inst_11414);
} else
{if((state_val_11438 === 9))
{var state_11437__$1 = state_11437;var statearr_11448_11476 = state_11437__$1;(statearr_11448_11476[2] = null);
(statearr_11448_11476[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11438 === 10))
{var inst_11419 = (state_11437[2]);var state_11437__$1 = (function (){var statearr_11449 = state_11437;(statearr_11449[8] = inst_11419);
return statearr_11449;
})();if(cljs.core.truth_(log))
{var statearr_11450_11477 = state_11437__$1;(statearr_11450_11477[1] = 12);
} else
{var statearr_11451_11478 = state_11437__$1;(statearr_11451_11478[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11438 === 11))
{var inst_11416 = (state_11437[2]);var state_11437__$1 = state_11437;var statearr_11452_11479 = state_11437__$1;(statearr_11452_11479[2] = inst_11416);
(statearr_11452_11479[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11438 === 12))
{var inst_11411 = (state_11437[7]);var inst_11421 = cljs.core.clj__GT_js.call(null,inst_11411);var inst_11422 = console.log(inst_11421);var state_11437__$1 = state_11437;var statearr_11453_11480 = state_11437__$1;(statearr_11453_11480[2] = inst_11422);
(statearr_11453_11480[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11438 === 13))
{var state_11437__$1 = state_11437;var statearr_11454_11481 = state_11437__$1;(statearr_11454_11481[2] = null);
(statearr_11454_11481[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11438 === 14))
{var inst_11411 = (state_11437[7]);var inst_11425 = (state_11437[2]);var state_11437__$1 = (function (){var statearr_11455 = state_11437;(statearr_11455[9] = inst_11425);
return statearr_11455;
})();var statearr_11456_11482 = state_11437__$1;(statearr_11456_11482[2] = inst_11411);
(statearr_11456_11482[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11438 === 15))
{var state_11437__$1 = state_11437;var statearr_11457_11483 = state_11437__$1;(statearr_11457_11483[2] = null);
(statearr_11457_11483[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11438 === 16))
{var state_11437__$1 = state_11437;var statearr_11458_11484 = state_11437__$1;(statearr_11458_11484[2] = null);
(statearr_11458_11484[1] = 17);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11438 === 17))
{var inst_11433 = (state_11437[2]);var state_11437__$1 = state_11437;var statearr_11459_11485 = state_11437__$1;(statearr_11459_11485[2] = inst_11433);
(statearr_11459_11485[1] = 3);
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
var state_machine__5507__auto____0 = (function (){var statearr_11463 = [null,null,null,null,null,null,null,null,null,null];(statearr_11463[0] = state_machine__5507__auto__);
(statearr_11463[1] = 1);
return statearr_11463;
});
var state_machine__5507__auto____1 = (function (state_11437){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_11437);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e11464){if((e11464 instanceof Object))
{var ex__5510__auto__ = e11464;var statearr_11465_11486 = state_11437;(statearr_11465_11486[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11437);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11464;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11487 = state_11437;
state_11437 = G__11487;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_11437){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_11437);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_11466 = f__5522__auto__.call(null);(statearr_11466[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___11467);
return statearr_11466;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5523__auto__);
}));
return null;
};
var dorun_async = function (ch,var_args){
var p__11348 = null;if (arguments.length > 1) {
  p__11348 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return dorun_async__delegate.call(this,ch,p__11348);};
dorun_async.cljs$lang$maxFixedArity = 1;
dorun_async.cljs$lang$applyTo = (function (arglist__11488){
var ch = cljs.core.first(arglist__11488);
var p__11348 = cljs.core.rest(arglist__11488);
return dorun_async__delegate(ch,p__11348);
});
dorun_async.cljs$core$IFn$_invoke$arity$variadic = dorun_async__delegate;
return dorun_async;
})()
;

//# sourceMappingURL=async.js.map