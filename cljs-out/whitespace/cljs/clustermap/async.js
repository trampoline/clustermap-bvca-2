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
map_async.cljs$lang$applyTo = (function (arglist__31263){
var f = cljs.core.first(arglist__31263);
var colls = cljs.core.rest(arglist__31263);
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
var dorun_async__delegate = function (ch,p__31264){var map__31324 = p__31264;var map__31324__$1 = ((cljs.core.seq_QMARK_.call(null,map__31324))?cljs.core.apply.call(null,cljs.core.hash_map,map__31324):map__31324);var delay = cljs.core.get.call(null,map__31324__$1,new cljs.core.Keyword(null,"delay","delay",1109372149));var log = cljs.core.get.call(null,map__31324__$1,new cljs.core.Keyword(null,"log","log",1014011574));var c__5521__auto___31383 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_31353){var state_val_31354 = (state_31353[1]);if((state_val_31354 === 1))
{var state_31353__$1 = state_31353;var statearr_31355_31384 = state_31353__$1;(statearr_31355_31384[2] = null);
(statearr_31355_31384[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31354 === 2))
{var state_31353__$1 = state_31353;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31353__$1,4,ch);
} else
{if((state_val_31354 === 3))
{var inst_31351 = (state_31353[2]);var state_31353__$1 = state_31353;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31353__$1,inst_31351);
} else
{if((state_val_31354 === 4))
{var inst_31327 = (state_31353[7]);var inst_31327__$1 = (state_31353[2]);var state_31353__$1 = (function (){var statearr_31356 = state_31353;(statearr_31356[7] = inst_31327__$1);
return statearr_31356;
})();if(cljs.core.truth_(inst_31327__$1))
{var statearr_31357_31385 = state_31353__$1;(statearr_31357_31385[1] = 5);
} else
{var statearr_31358_31386 = state_31353__$1;(statearr_31358_31386[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31354 === 5))
{var state_31353__$1 = state_31353;if(cljs.core.truth_(delay))
{var statearr_31359_31387 = state_31353__$1;(statearr_31359_31387[1] = 8);
} else
{var statearr_31360_31388 = state_31353__$1;(statearr_31360_31388[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31354 === 6))
{var state_31353__$1 = state_31353;var statearr_31361_31389 = state_31353__$1;(statearr_31361_31389[2] = null);
(statearr_31361_31389[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31354 === 7))
{var inst_31344 = (state_31353[2]);var state_31353__$1 = state_31353;if(cljs.core.truth_(inst_31344))
{var statearr_31362_31390 = state_31353__$1;(statearr_31362_31390[1] = 15);
} else
{var statearr_31363_31391 = state_31353__$1;(statearr_31363_31391[1] = 16);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31354 === 8))
{var inst_31330 = cljs.core.async.timeout.call(null,delay);var state_31353__$1 = state_31353;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31353__$1,11,inst_31330);
} else
{if((state_val_31354 === 9))
{var state_31353__$1 = state_31353;var statearr_31364_31392 = state_31353__$1;(statearr_31364_31392[2] = null);
(statearr_31364_31392[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31354 === 10))
{var inst_31335 = (state_31353[2]);var state_31353__$1 = (function (){var statearr_31365 = state_31353;(statearr_31365[8] = inst_31335);
return statearr_31365;
})();if(cljs.core.truth_(log))
{var statearr_31366_31393 = state_31353__$1;(statearr_31366_31393[1] = 12);
} else
{var statearr_31367_31394 = state_31353__$1;(statearr_31367_31394[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31354 === 11))
{var inst_31332 = (state_31353[2]);var state_31353__$1 = state_31353;var statearr_31368_31395 = state_31353__$1;(statearr_31368_31395[2] = inst_31332);
(statearr_31368_31395[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31354 === 12))
{var inst_31327 = (state_31353[7]);var inst_31337 = cljs.core.clj__GT_js.call(null,inst_31327);var inst_31338 = console.log(inst_31337);var state_31353__$1 = state_31353;var statearr_31369_31396 = state_31353__$1;(statearr_31369_31396[2] = inst_31338);
(statearr_31369_31396[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31354 === 13))
{var state_31353__$1 = state_31353;var statearr_31370_31397 = state_31353__$1;(statearr_31370_31397[2] = null);
(statearr_31370_31397[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31354 === 14))
{var inst_31327 = (state_31353[7]);var inst_31341 = (state_31353[2]);var state_31353__$1 = (function (){var statearr_31371 = state_31353;(statearr_31371[9] = inst_31341);
return statearr_31371;
})();var statearr_31372_31398 = state_31353__$1;(statearr_31372_31398[2] = inst_31327);
(statearr_31372_31398[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31354 === 15))
{var state_31353__$1 = state_31353;var statearr_31373_31399 = state_31353__$1;(statearr_31373_31399[2] = null);
(statearr_31373_31399[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31354 === 16))
{var state_31353__$1 = state_31353;var statearr_31374_31400 = state_31353__$1;(statearr_31374_31400[2] = null);
(statearr_31374_31400[1] = 17);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31354 === 17))
{var inst_31349 = (state_31353[2]);var state_31353__$1 = state_31353;var statearr_31375_31401 = state_31353__$1;(statearr_31375_31401[2] = inst_31349);
(statearr_31375_31401[1] = 3);
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
var state_machine__5507__auto____0 = (function (){var statearr_31379 = [null,null,null,null,null,null,null,null,null,null];(statearr_31379[0] = state_machine__5507__auto__);
(statearr_31379[1] = 1);
return statearr_31379;
});
var state_machine__5507__auto____1 = (function (state_31353){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_31353);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e31380){if((e31380 instanceof Object))
{var ex__5510__auto__ = e31380;var statearr_31381_31402 = state_31353;(statearr_31381_31402[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31353);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e31380;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__31403 = state_31353;
state_31353 = G__31403;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_31353){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_31353);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_31382 = f__5522__auto__.call(null);(statearr_31382[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___31383);
return statearr_31382;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5523__auto__);
}));
return null;
};
var dorun_async = function (ch,var_args){
var p__31264 = null;if (arguments.length > 1) {
  p__31264 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return dorun_async__delegate.call(this,ch,p__31264);};
dorun_async.cljs$lang$maxFixedArity = 1;
dorun_async.cljs$lang$applyTo = (function (arglist__31404){
var ch = cljs.core.first(arglist__31404);
var p__31264 = cljs.core.rest(arglist__31404);
return dorun_async__delegate(ch,p__31264);
});
dorun_async.cljs$core$IFn$_invoke$arity$variadic = dorun_async__delegate;
return dorun_async;
})()
;
