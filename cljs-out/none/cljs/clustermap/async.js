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
map_async.cljs$lang$applyTo = (function (arglist__11312){
var f = cljs.core.first(arglist__11312);
var colls = cljs.core.rest(arglist__11312);
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
var dorun_async__delegate = function (ch,p__11313){var map__11373 = p__11313;var map__11373__$1 = ((cljs.core.seq_QMARK_.call(null,map__11373))?cljs.core.apply.call(null,cljs.core.hash_map,map__11373):map__11373);var delay = cljs.core.get.call(null,map__11373__$1,new cljs.core.Keyword(null,"delay","delay",1109372149));var log = cljs.core.get.call(null,map__11373__$1,new cljs.core.Keyword(null,"log","log",1014011574));var c__5521__auto___11432 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_11402){var state_val_11403 = (state_11402[1]);if((state_val_11403 === 1))
{var state_11402__$1 = state_11402;var statearr_11404_11433 = state_11402__$1;(statearr_11404_11433[2] = null);
(statearr_11404_11433[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11403 === 2))
{var state_11402__$1 = state_11402;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11402__$1,4,ch);
} else
{if((state_val_11403 === 3))
{var inst_11400 = (state_11402[2]);var state_11402__$1 = state_11402;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11402__$1,inst_11400);
} else
{if((state_val_11403 === 4))
{var inst_11376 = (state_11402[7]);var inst_11376__$1 = (state_11402[2]);var state_11402__$1 = (function (){var statearr_11405 = state_11402;(statearr_11405[7] = inst_11376__$1);
return statearr_11405;
})();if(cljs.core.truth_(inst_11376__$1))
{var statearr_11406_11434 = state_11402__$1;(statearr_11406_11434[1] = 5);
} else
{var statearr_11407_11435 = state_11402__$1;(statearr_11407_11435[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11403 === 5))
{var state_11402__$1 = state_11402;if(cljs.core.truth_(delay))
{var statearr_11408_11436 = state_11402__$1;(statearr_11408_11436[1] = 8);
} else
{var statearr_11409_11437 = state_11402__$1;(statearr_11409_11437[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11403 === 6))
{var state_11402__$1 = state_11402;var statearr_11410_11438 = state_11402__$1;(statearr_11410_11438[2] = null);
(statearr_11410_11438[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11403 === 7))
{var inst_11393 = (state_11402[2]);var state_11402__$1 = state_11402;if(cljs.core.truth_(inst_11393))
{var statearr_11411_11439 = state_11402__$1;(statearr_11411_11439[1] = 15);
} else
{var statearr_11412_11440 = state_11402__$1;(statearr_11412_11440[1] = 16);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11403 === 8))
{var inst_11379 = cljs.core.async.timeout.call(null,delay);var state_11402__$1 = state_11402;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11402__$1,11,inst_11379);
} else
{if((state_val_11403 === 9))
{var state_11402__$1 = state_11402;var statearr_11413_11441 = state_11402__$1;(statearr_11413_11441[2] = null);
(statearr_11413_11441[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11403 === 10))
{var inst_11384 = (state_11402[2]);var state_11402__$1 = (function (){var statearr_11414 = state_11402;(statearr_11414[8] = inst_11384);
return statearr_11414;
})();if(cljs.core.truth_(log))
{var statearr_11415_11442 = state_11402__$1;(statearr_11415_11442[1] = 12);
} else
{var statearr_11416_11443 = state_11402__$1;(statearr_11416_11443[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11403 === 11))
{var inst_11381 = (state_11402[2]);var state_11402__$1 = state_11402;var statearr_11417_11444 = state_11402__$1;(statearr_11417_11444[2] = inst_11381);
(statearr_11417_11444[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11403 === 12))
{var inst_11376 = (state_11402[7]);var inst_11386 = cljs.core.clj__GT_js.call(null,inst_11376);var inst_11387 = console.log(inst_11386);var state_11402__$1 = state_11402;var statearr_11418_11445 = state_11402__$1;(statearr_11418_11445[2] = inst_11387);
(statearr_11418_11445[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11403 === 13))
{var state_11402__$1 = state_11402;var statearr_11419_11446 = state_11402__$1;(statearr_11419_11446[2] = null);
(statearr_11419_11446[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11403 === 14))
{var inst_11376 = (state_11402[7]);var inst_11390 = (state_11402[2]);var state_11402__$1 = (function (){var statearr_11420 = state_11402;(statearr_11420[9] = inst_11390);
return statearr_11420;
})();var statearr_11421_11447 = state_11402__$1;(statearr_11421_11447[2] = inst_11376);
(statearr_11421_11447[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11403 === 15))
{var state_11402__$1 = state_11402;var statearr_11422_11448 = state_11402__$1;(statearr_11422_11448[2] = null);
(statearr_11422_11448[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11403 === 16))
{var state_11402__$1 = state_11402;var statearr_11423_11449 = state_11402__$1;(statearr_11423_11449[2] = null);
(statearr_11423_11449[1] = 17);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11403 === 17))
{var inst_11398 = (state_11402[2]);var state_11402__$1 = state_11402;var statearr_11424_11450 = state_11402__$1;(statearr_11424_11450[2] = inst_11398);
(statearr_11424_11450[1] = 3);
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
var state_machine__5507__auto____0 = (function (){var statearr_11428 = [null,null,null,null,null,null,null,null,null,null];(statearr_11428[0] = state_machine__5507__auto__);
(statearr_11428[1] = 1);
return statearr_11428;
});
var state_machine__5507__auto____1 = (function (state_11402){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_11402);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e11429){if((e11429 instanceof Object))
{var ex__5510__auto__ = e11429;var statearr_11430_11451 = state_11402;(statearr_11430_11451[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11402);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11429;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11452 = state_11402;
state_11402 = G__11452;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_11402){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_11402);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_11431 = f__5522__auto__.call(null);(statearr_11431[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___11432);
return statearr_11431;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5523__auto__);
}));
return null;
};
var dorun_async = function (ch,var_args){
var p__11313 = null;if (arguments.length > 1) {
  p__11313 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return dorun_async__delegate.call(this,ch,p__11313);};
dorun_async.cljs$lang$maxFixedArity = 1;
dorun_async.cljs$lang$applyTo = (function (arglist__11453){
var ch = cljs.core.first(arglist__11453);
var p__11313 = cljs.core.rest(arglist__11453);
return dorun_async__delegate(ch,p__11313);
});
dorun_async.cljs$core$IFn$_invoke$arity$variadic = dorun_async__delegate;
return dorun_async;
})()
;

//# sourceMappingURL=async.js.map