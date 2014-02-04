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
map_async.cljs$lang$applyTo = (function (arglist__11316){
var f = cljs.core.first(arglist__11316);
var colls = cljs.core.rest(arglist__11316);
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
var dorun_async__delegate = function (ch,p__11317){var map__11377 = p__11317;var map__11377__$1 = ((cljs.core.seq_QMARK_.call(null,map__11377))?cljs.core.apply.call(null,cljs.core.hash_map,map__11377):map__11377);var delay = cljs.core.get.call(null,map__11377__$1,new cljs.core.Keyword(null,"delay","delay",1109372149));var log = cljs.core.get.call(null,map__11377__$1,new cljs.core.Keyword(null,"log","log",1014011574));var c__5521__auto___11436 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_11406){var state_val_11407 = (state_11406[1]);if((state_val_11407 === 1))
{var state_11406__$1 = state_11406;var statearr_11408_11437 = state_11406__$1;(statearr_11408_11437[2] = null);
(statearr_11408_11437[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11407 === 2))
{var state_11406__$1 = state_11406;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11406__$1,4,ch);
} else
{if((state_val_11407 === 3))
{var inst_11404 = (state_11406[2]);var state_11406__$1 = state_11406;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11406__$1,inst_11404);
} else
{if((state_val_11407 === 4))
{var inst_11380 = (state_11406[7]);var inst_11380__$1 = (state_11406[2]);var state_11406__$1 = (function (){var statearr_11409 = state_11406;(statearr_11409[7] = inst_11380__$1);
return statearr_11409;
})();if(cljs.core.truth_(inst_11380__$1))
{var statearr_11410_11438 = state_11406__$1;(statearr_11410_11438[1] = 5);
} else
{var statearr_11411_11439 = state_11406__$1;(statearr_11411_11439[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11407 === 5))
{var state_11406__$1 = state_11406;if(cljs.core.truth_(delay))
{var statearr_11412_11440 = state_11406__$1;(statearr_11412_11440[1] = 8);
} else
{var statearr_11413_11441 = state_11406__$1;(statearr_11413_11441[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11407 === 6))
{var state_11406__$1 = state_11406;var statearr_11414_11442 = state_11406__$1;(statearr_11414_11442[2] = null);
(statearr_11414_11442[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11407 === 7))
{var inst_11397 = (state_11406[2]);var state_11406__$1 = state_11406;if(cljs.core.truth_(inst_11397))
{var statearr_11415_11443 = state_11406__$1;(statearr_11415_11443[1] = 15);
} else
{var statearr_11416_11444 = state_11406__$1;(statearr_11416_11444[1] = 16);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11407 === 8))
{var inst_11383 = cljs.core.async.timeout.call(null,delay);var state_11406__$1 = state_11406;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11406__$1,11,inst_11383);
} else
{if((state_val_11407 === 9))
{var state_11406__$1 = state_11406;var statearr_11417_11445 = state_11406__$1;(statearr_11417_11445[2] = null);
(statearr_11417_11445[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11407 === 10))
{var inst_11388 = (state_11406[2]);var state_11406__$1 = (function (){var statearr_11418 = state_11406;(statearr_11418[8] = inst_11388);
return statearr_11418;
})();if(cljs.core.truth_(log))
{var statearr_11419_11446 = state_11406__$1;(statearr_11419_11446[1] = 12);
} else
{var statearr_11420_11447 = state_11406__$1;(statearr_11420_11447[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11407 === 11))
{var inst_11385 = (state_11406[2]);var state_11406__$1 = state_11406;var statearr_11421_11448 = state_11406__$1;(statearr_11421_11448[2] = inst_11385);
(statearr_11421_11448[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11407 === 12))
{var inst_11380 = (state_11406[7]);var inst_11390 = cljs.core.clj__GT_js.call(null,inst_11380);var inst_11391 = console.log(inst_11390);var state_11406__$1 = state_11406;var statearr_11422_11449 = state_11406__$1;(statearr_11422_11449[2] = inst_11391);
(statearr_11422_11449[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11407 === 13))
{var state_11406__$1 = state_11406;var statearr_11423_11450 = state_11406__$1;(statearr_11423_11450[2] = null);
(statearr_11423_11450[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11407 === 14))
{var inst_11380 = (state_11406[7]);var inst_11394 = (state_11406[2]);var state_11406__$1 = (function (){var statearr_11424 = state_11406;(statearr_11424[9] = inst_11394);
return statearr_11424;
})();var statearr_11425_11451 = state_11406__$1;(statearr_11425_11451[2] = inst_11380);
(statearr_11425_11451[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11407 === 15))
{var state_11406__$1 = state_11406;var statearr_11426_11452 = state_11406__$1;(statearr_11426_11452[2] = null);
(statearr_11426_11452[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11407 === 16))
{var state_11406__$1 = state_11406;var statearr_11427_11453 = state_11406__$1;(statearr_11427_11453[2] = null);
(statearr_11427_11453[1] = 17);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11407 === 17))
{var inst_11402 = (state_11406[2]);var state_11406__$1 = state_11406;var statearr_11428_11454 = state_11406__$1;(statearr_11428_11454[2] = inst_11402);
(statearr_11428_11454[1] = 3);
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
var state_machine__5507__auto____0 = (function (){var statearr_11432 = [null,null,null,null,null,null,null,null,null,null];(statearr_11432[0] = state_machine__5507__auto__);
(statearr_11432[1] = 1);
return statearr_11432;
});
var state_machine__5507__auto____1 = (function (state_11406){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_11406);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e11433){if((e11433 instanceof Object))
{var ex__5510__auto__ = e11433;var statearr_11434_11455 = state_11406;(statearr_11434_11455[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11406);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11433;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11456 = state_11406;
state_11406 = G__11456;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_11406){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_11406);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_11435 = f__5522__auto__.call(null);(statearr_11435[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___11436);
return statearr_11435;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5523__auto__);
}));
return null;
};
var dorun_async = function (ch,var_args){
var p__11317 = null;if (arguments.length > 1) {
  p__11317 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return dorun_async__delegate.call(this,ch,p__11317);};
dorun_async.cljs$lang$maxFixedArity = 1;
dorun_async.cljs$lang$applyTo = (function (arglist__11457){
var ch = cljs.core.first(arglist__11457);
var p__11317 = cljs.core.rest(arglist__11457);
return dorun_async__delegate(ch,p__11317);
});
dorun_async.cljs$core$IFn$_invoke$arity$variadic = dorun_async__delegate;
return dorun_async;
})()
;

//# sourceMappingURL=async.js.map