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
map_async.cljs$lang$applyTo = (function (arglist__11384){
var f = cljs.core.first(arglist__11384);
var colls = cljs.core.rest(arglist__11384);
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
var dorun_async__delegate = function (ch,p__11385){var map__11445 = p__11385;var map__11445__$1 = ((cljs.core.seq_QMARK_.call(null,map__11445))?cljs.core.apply.call(null,cljs.core.hash_map,map__11445):map__11445);var delay = cljs.core.get.call(null,map__11445__$1,new cljs.core.Keyword(null,"delay","delay",1109372149));var log = cljs.core.get.call(null,map__11445__$1,new cljs.core.Keyword(null,"log","log",1014011574));var c__5521__auto___11504 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_11474){var state_val_11475 = (state_11474[1]);if((state_val_11475 === 1))
{var state_11474__$1 = state_11474;var statearr_11476_11505 = state_11474__$1;(statearr_11476_11505[2] = null);
(statearr_11476_11505[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11475 === 2))
{var state_11474__$1 = state_11474;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11474__$1,4,ch);
} else
{if((state_val_11475 === 3))
{var inst_11472 = (state_11474[2]);var state_11474__$1 = state_11474;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11474__$1,inst_11472);
} else
{if((state_val_11475 === 4))
{var inst_11448 = (state_11474[7]);var inst_11448__$1 = (state_11474[2]);var state_11474__$1 = (function (){var statearr_11477 = state_11474;(statearr_11477[7] = inst_11448__$1);
return statearr_11477;
})();if(cljs.core.truth_(inst_11448__$1))
{var statearr_11478_11506 = state_11474__$1;(statearr_11478_11506[1] = 5);
} else
{var statearr_11479_11507 = state_11474__$1;(statearr_11479_11507[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11475 === 5))
{var state_11474__$1 = state_11474;if(cljs.core.truth_(delay))
{var statearr_11480_11508 = state_11474__$1;(statearr_11480_11508[1] = 8);
} else
{var statearr_11481_11509 = state_11474__$1;(statearr_11481_11509[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11475 === 6))
{var state_11474__$1 = state_11474;var statearr_11482_11510 = state_11474__$1;(statearr_11482_11510[2] = null);
(statearr_11482_11510[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11475 === 7))
{var inst_11465 = (state_11474[2]);var state_11474__$1 = state_11474;if(cljs.core.truth_(inst_11465))
{var statearr_11483_11511 = state_11474__$1;(statearr_11483_11511[1] = 15);
} else
{var statearr_11484_11512 = state_11474__$1;(statearr_11484_11512[1] = 16);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11475 === 8))
{var inst_11451 = cljs.core.async.timeout.call(null,delay);var state_11474__$1 = state_11474;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11474__$1,11,inst_11451);
} else
{if((state_val_11475 === 9))
{var state_11474__$1 = state_11474;var statearr_11485_11513 = state_11474__$1;(statearr_11485_11513[2] = null);
(statearr_11485_11513[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11475 === 10))
{var inst_11456 = (state_11474[2]);var state_11474__$1 = (function (){var statearr_11486 = state_11474;(statearr_11486[8] = inst_11456);
return statearr_11486;
})();if(cljs.core.truth_(log))
{var statearr_11487_11514 = state_11474__$1;(statearr_11487_11514[1] = 12);
} else
{var statearr_11488_11515 = state_11474__$1;(statearr_11488_11515[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11475 === 11))
{var inst_11453 = (state_11474[2]);var state_11474__$1 = state_11474;var statearr_11489_11516 = state_11474__$1;(statearr_11489_11516[2] = inst_11453);
(statearr_11489_11516[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11475 === 12))
{var inst_11448 = (state_11474[7]);var inst_11458 = cljs.core.clj__GT_js.call(null,inst_11448);var inst_11459 = console.log(inst_11458);var state_11474__$1 = state_11474;var statearr_11490_11517 = state_11474__$1;(statearr_11490_11517[2] = inst_11459);
(statearr_11490_11517[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11475 === 13))
{var state_11474__$1 = state_11474;var statearr_11491_11518 = state_11474__$1;(statearr_11491_11518[2] = null);
(statearr_11491_11518[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11475 === 14))
{var inst_11448 = (state_11474[7]);var inst_11462 = (state_11474[2]);var state_11474__$1 = (function (){var statearr_11492 = state_11474;(statearr_11492[9] = inst_11462);
return statearr_11492;
})();var statearr_11493_11519 = state_11474__$1;(statearr_11493_11519[2] = inst_11448);
(statearr_11493_11519[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11475 === 15))
{var state_11474__$1 = state_11474;var statearr_11494_11520 = state_11474__$1;(statearr_11494_11520[2] = null);
(statearr_11494_11520[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11475 === 16))
{var state_11474__$1 = state_11474;var statearr_11495_11521 = state_11474__$1;(statearr_11495_11521[2] = null);
(statearr_11495_11521[1] = 17);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11475 === 17))
{var inst_11470 = (state_11474[2]);var state_11474__$1 = state_11474;var statearr_11496_11522 = state_11474__$1;(statearr_11496_11522[2] = inst_11470);
(statearr_11496_11522[1] = 3);
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
var state_machine__5507__auto____0 = (function (){var statearr_11500 = [null,null,null,null,null,null,null,null,null,null];(statearr_11500[0] = state_machine__5507__auto__);
(statearr_11500[1] = 1);
return statearr_11500;
});
var state_machine__5507__auto____1 = (function (state_11474){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_11474);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e11501){if((e11501 instanceof Object))
{var ex__5510__auto__ = e11501;var statearr_11502_11523 = state_11474;(statearr_11502_11523[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11474);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11501;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11524 = state_11474;
state_11474 = G__11524;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_11474){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_11474);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_11503 = f__5522__auto__.call(null);(statearr_11503[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___11504);
return statearr_11503;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5523__auto__);
}));
return null;
};
var dorun_async = function (ch,var_args){
var p__11385 = null;if (arguments.length > 1) {
  p__11385 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return dorun_async__delegate.call(this,ch,p__11385);};
dorun_async.cljs$lang$maxFixedArity = 1;
dorun_async.cljs$lang$applyTo = (function (arglist__11525){
var ch = cljs.core.first(arglist__11525);
var p__11385 = cljs.core.rest(arglist__11525);
return dorun_async__delegate(ch,p__11385);
});
dorun_async.cljs$core$IFn$_invoke$arity$variadic = dorun_async__delegate;
return dorun_async;
})()
;

//# sourceMappingURL=async.js.map