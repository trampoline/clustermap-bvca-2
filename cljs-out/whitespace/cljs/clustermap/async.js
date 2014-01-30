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
map_async.cljs$lang$applyTo = (function (arglist__31253){
var f = cljs.core.first(arglist__31253);
var colls = cljs.core.rest(arglist__31253);
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
var dorun_async__delegate = function (ch,p__31254){var map__31314 = p__31254;var map__31314__$1 = ((cljs.core.seq_QMARK_.call(null,map__31314))?cljs.core.apply.call(null,cljs.core.hash_map,map__31314):map__31314);var delay = cljs.core.get.call(null,map__31314__$1,new cljs.core.Keyword(null,"delay","delay",1109372149));var log = cljs.core.get.call(null,map__31314__$1,new cljs.core.Keyword(null,"log","log",1014011574));var c__5521__auto___31373 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_31343){var state_val_31344 = (state_31343[1]);if((state_val_31344 === 1))
{var state_31343__$1 = state_31343;var statearr_31345_31374 = state_31343__$1;(statearr_31345_31374[2] = null);
(statearr_31345_31374[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31344 === 2))
{var state_31343__$1 = state_31343;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31343__$1,4,ch);
} else
{if((state_val_31344 === 3))
{var inst_31341 = (state_31343[2]);var state_31343__$1 = state_31343;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31343__$1,inst_31341);
} else
{if((state_val_31344 === 4))
{var inst_31317 = (state_31343[7]);var inst_31317__$1 = (state_31343[2]);var state_31343__$1 = (function (){var statearr_31346 = state_31343;(statearr_31346[7] = inst_31317__$1);
return statearr_31346;
})();if(cljs.core.truth_(inst_31317__$1))
{var statearr_31347_31375 = state_31343__$1;(statearr_31347_31375[1] = 5);
} else
{var statearr_31348_31376 = state_31343__$1;(statearr_31348_31376[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31344 === 5))
{var state_31343__$1 = state_31343;if(cljs.core.truth_(delay))
{var statearr_31349_31377 = state_31343__$1;(statearr_31349_31377[1] = 8);
} else
{var statearr_31350_31378 = state_31343__$1;(statearr_31350_31378[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31344 === 6))
{var state_31343__$1 = state_31343;var statearr_31351_31379 = state_31343__$1;(statearr_31351_31379[2] = null);
(statearr_31351_31379[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31344 === 7))
{var inst_31334 = (state_31343[2]);var state_31343__$1 = state_31343;if(cljs.core.truth_(inst_31334))
{var statearr_31352_31380 = state_31343__$1;(statearr_31352_31380[1] = 15);
} else
{var statearr_31353_31381 = state_31343__$1;(statearr_31353_31381[1] = 16);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31344 === 8))
{var inst_31320 = cljs.core.async.timeout.call(null,delay);var state_31343__$1 = state_31343;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31343__$1,11,inst_31320);
} else
{if((state_val_31344 === 9))
{var state_31343__$1 = state_31343;var statearr_31354_31382 = state_31343__$1;(statearr_31354_31382[2] = null);
(statearr_31354_31382[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31344 === 10))
{var inst_31325 = (state_31343[2]);var state_31343__$1 = (function (){var statearr_31355 = state_31343;(statearr_31355[8] = inst_31325);
return statearr_31355;
})();if(cljs.core.truth_(log))
{var statearr_31356_31383 = state_31343__$1;(statearr_31356_31383[1] = 12);
} else
{var statearr_31357_31384 = state_31343__$1;(statearr_31357_31384[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31344 === 11))
{var inst_31322 = (state_31343[2]);var state_31343__$1 = state_31343;var statearr_31358_31385 = state_31343__$1;(statearr_31358_31385[2] = inst_31322);
(statearr_31358_31385[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31344 === 12))
{var inst_31317 = (state_31343[7]);var inst_31327 = cljs.core.clj__GT_js.call(null,inst_31317);var inst_31328 = console.log(inst_31327);var state_31343__$1 = state_31343;var statearr_31359_31386 = state_31343__$1;(statearr_31359_31386[2] = inst_31328);
(statearr_31359_31386[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31344 === 13))
{var state_31343__$1 = state_31343;var statearr_31360_31387 = state_31343__$1;(statearr_31360_31387[2] = null);
(statearr_31360_31387[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31344 === 14))
{var inst_31317 = (state_31343[7]);var inst_31331 = (state_31343[2]);var state_31343__$1 = (function (){var statearr_31361 = state_31343;(statearr_31361[9] = inst_31331);
return statearr_31361;
})();var statearr_31362_31388 = state_31343__$1;(statearr_31362_31388[2] = inst_31317);
(statearr_31362_31388[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31344 === 15))
{var state_31343__$1 = state_31343;var statearr_31363_31389 = state_31343__$1;(statearr_31363_31389[2] = null);
(statearr_31363_31389[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31344 === 16))
{var state_31343__$1 = state_31343;var statearr_31364_31390 = state_31343__$1;(statearr_31364_31390[2] = null);
(statearr_31364_31390[1] = 17);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31344 === 17))
{var inst_31339 = (state_31343[2]);var state_31343__$1 = state_31343;var statearr_31365_31391 = state_31343__$1;(statearr_31365_31391[2] = inst_31339);
(statearr_31365_31391[1] = 3);
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
var state_machine__5507__auto____0 = (function (){var statearr_31369 = [null,null,null,null,null,null,null,null,null,null];(statearr_31369[0] = state_machine__5507__auto__);
(statearr_31369[1] = 1);
return statearr_31369;
});
var state_machine__5507__auto____1 = (function (state_31343){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_31343);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e31370){if((e31370 instanceof Object))
{var ex__5510__auto__ = e31370;var statearr_31371_31392 = state_31343;(statearr_31371_31392[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31343);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e31370;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__31393 = state_31343;
state_31343 = G__31393;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_31343){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_31343);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_31372 = f__5522__auto__.call(null);(statearr_31372[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___31373);
return statearr_31372;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5523__auto__);
}));
return null;
};
var dorun_async = function (ch,var_args){
var p__31254 = null;if (arguments.length > 1) {
  p__31254 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return dorun_async__delegate.call(this,ch,p__31254);};
dorun_async.cljs$lang$maxFixedArity = 1;
dorun_async.cljs$lang$applyTo = (function (arglist__31394){
var ch = cljs.core.first(arglist__31394);
var p__31254 = cljs.core.rest(arglist__31394);
return dorun_async__delegate(ch,p__31254);
});
dorun_async.cljs$core$IFn$_invoke$arity$variadic = dorun_async__delegate;
return dorun_async;
})()
;
