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
map_async.cljs$lang$applyTo = (function (arglist__11281){
var f = cljs.core.first(arglist__11281);
var colls = cljs.core.rest(arglist__11281);
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
var dorun_async__delegate = function (ch,p__11282){var map__11342 = p__11282;var map__11342__$1 = ((cljs.core.seq_QMARK_.call(null,map__11342))?cljs.core.apply.call(null,cljs.core.hash_map,map__11342):map__11342);var delay = cljs.core.get.call(null,map__11342__$1,new cljs.core.Keyword(null,"delay","delay",1109372149));var log = cljs.core.get.call(null,map__11342__$1,new cljs.core.Keyword(null,"log","log",1014011574));var c__5521__auto___11401 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_11371){var state_val_11372 = (state_11371[1]);if((state_val_11372 === 1))
{var state_11371__$1 = state_11371;var statearr_11373_11402 = state_11371__$1;(statearr_11373_11402[2] = null);
(statearr_11373_11402[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11372 === 2))
{var state_11371__$1 = state_11371;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11371__$1,4,ch);
} else
{if((state_val_11372 === 3))
{var inst_11369 = (state_11371[2]);var state_11371__$1 = state_11371;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11371__$1,inst_11369);
} else
{if((state_val_11372 === 4))
{var inst_11345 = (state_11371[7]);var inst_11345__$1 = (state_11371[2]);var state_11371__$1 = (function (){var statearr_11374 = state_11371;(statearr_11374[7] = inst_11345__$1);
return statearr_11374;
})();if(cljs.core.truth_(inst_11345__$1))
{var statearr_11375_11403 = state_11371__$1;(statearr_11375_11403[1] = 5);
} else
{var statearr_11376_11404 = state_11371__$1;(statearr_11376_11404[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11372 === 5))
{var state_11371__$1 = state_11371;if(cljs.core.truth_(delay))
{var statearr_11377_11405 = state_11371__$1;(statearr_11377_11405[1] = 8);
} else
{var statearr_11378_11406 = state_11371__$1;(statearr_11378_11406[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11372 === 6))
{var state_11371__$1 = state_11371;var statearr_11379_11407 = state_11371__$1;(statearr_11379_11407[2] = null);
(statearr_11379_11407[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11372 === 7))
{var inst_11362 = (state_11371[2]);var state_11371__$1 = state_11371;if(cljs.core.truth_(inst_11362))
{var statearr_11380_11408 = state_11371__$1;(statearr_11380_11408[1] = 15);
} else
{var statearr_11381_11409 = state_11371__$1;(statearr_11381_11409[1] = 16);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11372 === 8))
{var inst_11348 = cljs.core.async.timeout.call(null,delay);var state_11371__$1 = state_11371;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11371__$1,11,inst_11348);
} else
{if((state_val_11372 === 9))
{var state_11371__$1 = state_11371;var statearr_11382_11410 = state_11371__$1;(statearr_11382_11410[2] = null);
(statearr_11382_11410[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11372 === 10))
{var inst_11353 = (state_11371[2]);var state_11371__$1 = (function (){var statearr_11383 = state_11371;(statearr_11383[8] = inst_11353);
return statearr_11383;
})();if(cljs.core.truth_(log))
{var statearr_11384_11411 = state_11371__$1;(statearr_11384_11411[1] = 12);
} else
{var statearr_11385_11412 = state_11371__$1;(statearr_11385_11412[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11372 === 11))
{var inst_11350 = (state_11371[2]);var state_11371__$1 = state_11371;var statearr_11386_11413 = state_11371__$1;(statearr_11386_11413[2] = inst_11350);
(statearr_11386_11413[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11372 === 12))
{var inst_11345 = (state_11371[7]);var inst_11355 = cljs.core.clj__GT_js.call(null,inst_11345);var inst_11356 = console.log(inst_11355);var state_11371__$1 = state_11371;var statearr_11387_11414 = state_11371__$1;(statearr_11387_11414[2] = inst_11356);
(statearr_11387_11414[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11372 === 13))
{var state_11371__$1 = state_11371;var statearr_11388_11415 = state_11371__$1;(statearr_11388_11415[2] = null);
(statearr_11388_11415[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11372 === 14))
{var inst_11345 = (state_11371[7]);var inst_11359 = (state_11371[2]);var state_11371__$1 = (function (){var statearr_11389 = state_11371;(statearr_11389[9] = inst_11359);
return statearr_11389;
})();var statearr_11390_11416 = state_11371__$1;(statearr_11390_11416[2] = inst_11345);
(statearr_11390_11416[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11372 === 15))
{var state_11371__$1 = state_11371;var statearr_11391_11417 = state_11371__$1;(statearr_11391_11417[2] = null);
(statearr_11391_11417[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11372 === 16))
{var state_11371__$1 = state_11371;var statearr_11392_11418 = state_11371__$1;(statearr_11392_11418[2] = null);
(statearr_11392_11418[1] = 17);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11372 === 17))
{var inst_11367 = (state_11371[2]);var state_11371__$1 = state_11371;var statearr_11393_11419 = state_11371__$1;(statearr_11393_11419[2] = inst_11367);
(statearr_11393_11419[1] = 3);
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
var state_machine__5507__auto____0 = (function (){var statearr_11397 = [null,null,null,null,null,null,null,null,null,null];(statearr_11397[0] = state_machine__5507__auto__);
(statearr_11397[1] = 1);
return statearr_11397;
});
var state_machine__5507__auto____1 = (function (state_11371){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_11371);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e11398){if((e11398 instanceof Object))
{var ex__5510__auto__ = e11398;var statearr_11399_11420 = state_11371;(statearr_11399_11420[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11371);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11398;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11421 = state_11371;
state_11371 = G__11421;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_11371){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_11371);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_11400 = f__5522__auto__.call(null);(statearr_11400[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___11401);
return statearr_11400;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5523__auto__);
}));
return null;
};
var dorun_async = function (ch,var_args){
var p__11282 = null;if (arguments.length > 1) {
  p__11282 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return dorun_async__delegate.call(this,ch,p__11282);};
dorun_async.cljs$lang$maxFixedArity = 1;
dorun_async.cljs$lang$applyTo = (function (arglist__11422){
var ch = cljs.core.first(arglist__11422);
var p__11282 = cljs.core.rest(arglist__11422);
return dorun_async__delegate(ch,p__11282);
});
dorun_async.cljs$core$IFn$_invoke$arity$variadic = dorun_async__delegate;
return dorun_async;
})()
;

//# sourceMappingURL=async.js.map