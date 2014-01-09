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
map_async.cljs$lang$applyTo = (function (arglist__28342){
var f = cljs.core.first(arglist__28342);
var colls = cljs.core.rest(arglist__28342);
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
var dorun_async__delegate = function (ch,p__28343){var map__28403 = p__28343;var map__28403__$1 = ((cljs.core.seq_QMARK_.call(null,map__28403))?cljs.core.apply.call(null,cljs.core.hash_map,map__28403):map__28403);var delay = cljs.core.get.call(null,map__28403__$1,new cljs.core.Keyword(null,"delay","delay",1109372149));var log = cljs.core.get.call(null,map__28403__$1,new cljs.core.Keyword(null,"log","log",1014011574));var c__5521__auto___28462 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_28432){var state_val_28433 = (state_28432[1]);if((state_val_28433 === 1))
{var state_28432__$1 = state_28432;var statearr_28434_28463 = state_28432__$1;(statearr_28434_28463[2] = null);
(statearr_28434_28463[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28433 === 2))
{var state_28432__$1 = state_28432;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28432__$1,4,ch);
} else
{if((state_val_28433 === 3))
{var inst_28430 = (state_28432[2]);var state_28432__$1 = state_28432;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28432__$1,inst_28430);
} else
{if((state_val_28433 === 4))
{var inst_28406 = (state_28432[7]);var inst_28406__$1 = (state_28432[2]);var state_28432__$1 = (function (){var statearr_28435 = state_28432;(statearr_28435[7] = inst_28406__$1);
return statearr_28435;
})();if(cljs.core.truth_(inst_28406__$1))
{var statearr_28436_28464 = state_28432__$1;(statearr_28436_28464[1] = 5);
} else
{var statearr_28437_28465 = state_28432__$1;(statearr_28437_28465[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28433 === 5))
{var state_28432__$1 = state_28432;if(cljs.core.truth_(delay))
{var statearr_28438_28466 = state_28432__$1;(statearr_28438_28466[1] = 8);
} else
{var statearr_28439_28467 = state_28432__$1;(statearr_28439_28467[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28433 === 6))
{var state_28432__$1 = state_28432;var statearr_28440_28468 = state_28432__$1;(statearr_28440_28468[2] = null);
(statearr_28440_28468[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28433 === 7))
{var inst_28423 = (state_28432[2]);var state_28432__$1 = state_28432;if(cljs.core.truth_(inst_28423))
{var statearr_28441_28469 = state_28432__$1;(statearr_28441_28469[1] = 15);
} else
{var statearr_28442_28470 = state_28432__$1;(statearr_28442_28470[1] = 16);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28433 === 8))
{var inst_28409 = cljs.core.async.timeout.call(null,delay);var state_28432__$1 = state_28432;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28432__$1,11,inst_28409);
} else
{if((state_val_28433 === 9))
{var state_28432__$1 = state_28432;var statearr_28443_28471 = state_28432__$1;(statearr_28443_28471[2] = null);
(statearr_28443_28471[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28433 === 10))
{var inst_28414 = (state_28432[2]);var state_28432__$1 = (function (){var statearr_28444 = state_28432;(statearr_28444[8] = inst_28414);
return statearr_28444;
})();if(cljs.core.truth_(log))
{var statearr_28445_28472 = state_28432__$1;(statearr_28445_28472[1] = 12);
} else
{var statearr_28446_28473 = state_28432__$1;(statearr_28446_28473[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28433 === 11))
{var inst_28411 = (state_28432[2]);var state_28432__$1 = state_28432;var statearr_28447_28474 = state_28432__$1;(statearr_28447_28474[2] = inst_28411);
(statearr_28447_28474[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28433 === 12))
{var inst_28406 = (state_28432[7]);var inst_28416 = cljs.core.clj__GT_js.call(null,inst_28406);var inst_28417 = console.log(inst_28416);var state_28432__$1 = state_28432;var statearr_28448_28475 = state_28432__$1;(statearr_28448_28475[2] = inst_28417);
(statearr_28448_28475[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28433 === 13))
{var state_28432__$1 = state_28432;var statearr_28449_28476 = state_28432__$1;(statearr_28449_28476[2] = null);
(statearr_28449_28476[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28433 === 14))
{var inst_28406 = (state_28432[7]);var inst_28420 = (state_28432[2]);var state_28432__$1 = (function (){var statearr_28450 = state_28432;(statearr_28450[9] = inst_28420);
return statearr_28450;
})();var statearr_28451_28477 = state_28432__$1;(statearr_28451_28477[2] = inst_28406);
(statearr_28451_28477[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28433 === 15))
{var state_28432__$1 = state_28432;var statearr_28452_28478 = state_28432__$1;(statearr_28452_28478[2] = null);
(statearr_28452_28478[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28433 === 16))
{var state_28432__$1 = state_28432;var statearr_28453_28479 = state_28432__$1;(statearr_28453_28479[2] = null);
(statearr_28453_28479[1] = 17);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28433 === 17))
{var inst_28428 = (state_28432[2]);var state_28432__$1 = state_28432;var statearr_28454_28480 = state_28432__$1;(statearr_28454_28480[2] = inst_28428);
(statearr_28454_28480[1] = 3);
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
var state_machine__5507__auto____0 = (function (){var statearr_28458 = [null,null,null,null,null,null,null,null,null,null];(statearr_28458[0] = state_machine__5507__auto__);
(statearr_28458[1] = 1);
return statearr_28458;
});
var state_machine__5507__auto____1 = (function (state_28432){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_28432);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e28459){if((e28459 instanceof Object))
{var ex__5510__auto__ = e28459;var statearr_28460_28481 = state_28432;(statearr_28460_28481[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28432);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e28459;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__28482 = state_28432;
state_28432 = G__28482;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_28432){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_28432);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_28461 = f__5522__auto__.call(null);(statearr_28461[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___28462);
return statearr_28461;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5523__auto__);
}));
return null;
};
var dorun_async = function (ch,var_args){
var p__28343 = null;if (arguments.length > 1) {
  p__28343 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return dorun_async__delegate.call(this,ch,p__28343);};
dorun_async.cljs$lang$maxFixedArity = 1;
dorun_async.cljs$lang$applyTo = (function (arglist__28483){
var ch = cljs.core.first(arglist__28483);
var p__28343 = cljs.core.rest(arglist__28483);
return dorun_async__delegate(ch,p__28343);
});
dorun_async.cljs$core$IFn$_invoke$arity$variadic = dorun_async__delegate;
return dorun_async;
})()
;
