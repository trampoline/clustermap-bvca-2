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
var map_async__delegate = function (f,colls){var coll_chs = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (coll){var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2(ch,coll);
return ch;
}),colls);return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2(f,coll_chs);
};
var map_async = function (f,var_args){
var colls = null;if (arguments.length > 1) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return map_async__delegate.call(this,f,colls);};
map_async.cljs$lang$maxFixedArity = 1;
map_async.cljs$lang$applyTo = (function (arglist__21274){
var f = cljs.core.first(arglist__21274);
var colls = cljs.core.rest(arglist__21274);
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
var dorun_async__delegate = function (ch,p__21275){var map__21335 = p__21275;var map__21335__$1 = ((cljs.core.seq_QMARK_(map__21335))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21335):map__21335);var delay = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21335__$1,cljs.core.constant$keyword$340);var log = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21335__$1,cljs.core.constant$keyword$355);var c__5521__auto___21394 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_21364){var state_val_21365 = (state_21364[1]);if((state_val_21365 === 1))
{var state_21364__$1 = state_21364;var statearr_21366_21395 = state_21364__$1;(statearr_21366_21395[2] = null);
(statearr_21366_21395[1] = 2);
return cljs.core.constant$keyword$200;
} else
{if((state_val_21365 === 2))
{var state_21364__$1 = state_21364;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_21364__$1,4,ch);
} else
{if((state_val_21365 === 3))
{var inst_21362 = (state_21364[2]);var state_21364__$1 = state_21364;return cljs.core.async.impl.ioc_helpers.return_chan(state_21364__$1,inst_21362);
} else
{if((state_val_21365 === 4))
{var inst_21338 = (state_21364[7]);var inst_21338__$1 = (state_21364[2]);var state_21364__$1 = (function (){var statearr_21367 = state_21364;(statearr_21367[7] = inst_21338__$1);
return statearr_21367;
})();if(cljs.core.truth_(inst_21338__$1))
{var statearr_21368_21396 = state_21364__$1;(statearr_21368_21396[1] = 5);
} else
{var statearr_21369_21397 = state_21364__$1;(statearr_21369_21397[1] = 6);
}
return cljs.core.constant$keyword$200;
} else
{if((state_val_21365 === 5))
{var state_21364__$1 = state_21364;if(cljs.core.truth_(delay))
{var statearr_21370_21398 = state_21364__$1;(statearr_21370_21398[1] = 8);
} else
{var statearr_21371_21399 = state_21364__$1;(statearr_21371_21399[1] = 9);
}
return cljs.core.constant$keyword$200;
} else
{if((state_val_21365 === 6))
{var state_21364__$1 = state_21364;var statearr_21372_21400 = state_21364__$1;(statearr_21372_21400[2] = null);
(statearr_21372_21400[1] = 7);
return cljs.core.constant$keyword$200;
} else
{if((state_val_21365 === 7))
{var inst_21355 = (state_21364[2]);var state_21364__$1 = state_21364;if(cljs.core.truth_(inst_21355))
{var statearr_21373_21401 = state_21364__$1;(statearr_21373_21401[1] = 15);
} else
{var statearr_21374_21402 = state_21364__$1;(statearr_21374_21402[1] = 16);
}
return cljs.core.constant$keyword$200;
} else
{if((state_val_21365 === 8))
{var inst_21341 = cljs.core.async.timeout(delay);var state_21364__$1 = state_21364;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_21364__$1,11,inst_21341);
} else
{if((state_val_21365 === 9))
{var state_21364__$1 = state_21364;var statearr_21375_21403 = state_21364__$1;(statearr_21375_21403[2] = null);
(statearr_21375_21403[1] = 10);
return cljs.core.constant$keyword$200;
} else
{if((state_val_21365 === 10))
{var inst_21346 = (state_21364[2]);var state_21364__$1 = (function (){var statearr_21376 = state_21364;(statearr_21376[8] = inst_21346);
return statearr_21376;
})();if(cljs.core.truth_(log))
{var statearr_21377_21404 = state_21364__$1;(statearr_21377_21404[1] = 12);
} else
{var statearr_21378_21405 = state_21364__$1;(statearr_21378_21405[1] = 13);
}
return cljs.core.constant$keyword$200;
} else
{if((state_val_21365 === 11))
{var inst_21343 = (state_21364[2]);var state_21364__$1 = state_21364;var statearr_21379_21406 = state_21364__$1;(statearr_21379_21406[2] = inst_21343);
(statearr_21379_21406[1] = 10);
return cljs.core.constant$keyword$200;
} else
{if((state_val_21365 === 12))
{var inst_21338 = (state_21364[7]);var inst_21348 = cljs.core.clj__GT_js(inst_21338);var inst_21349 = console.log(inst_21348);var state_21364__$1 = state_21364;var statearr_21380_21407 = state_21364__$1;(statearr_21380_21407[2] = inst_21349);
(statearr_21380_21407[1] = 14);
return cljs.core.constant$keyword$200;
} else
{if((state_val_21365 === 13))
{var state_21364__$1 = state_21364;var statearr_21381_21408 = state_21364__$1;(statearr_21381_21408[2] = null);
(statearr_21381_21408[1] = 14);
return cljs.core.constant$keyword$200;
} else
{if((state_val_21365 === 14))
{var inst_21338 = (state_21364[7]);var inst_21352 = (state_21364[2]);var state_21364__$1 = (function (){var statearr_21382 = state_21364;(statearr_21382[9] = inst_21352);
return statearr_21382;
})();var statearr_21383_21409 = state_21364__$1;(statearr_21383_21409[2] = inst_21338);
(statearr_21383_21409[1] = 7);
return cljs.core.constant$keyword$200;
} else
{if((state_val_21365 === 15))
{var state_21364__$1 = state_21364;var statearr_21384_21410 = state_21364__$1;(statearr_21384_21410[2] = null);
(statearr_21384_21410[1] = 2);
return cljs.core.constant$keyword$200;
} else
{if((state_val_21365 === 16))
{var state_21364__$1 = state_21364;var statearr_21385_21411 = state_21364__$1;(statearr_21385_21411[2] = null);
(statearr_21385_21411[1] = 17);
return cljs.core.constant$keyword$200;
} else
{if((state_val_21365 === 17))
{var inst_21360 = (state_21364[2]);var state_21364__$1 = state_21364;var statearr_21386_21412 = state_21364__$1;(statearr_21386_21412[2] = inst_21360);
(statearr_21386_21412[1] = 3);
return cljs.core.constant$keyword$200;
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
var state_machine__5507__auto____0 = (function (){var statearr_21390 = [null,null,null,null,null,null,null,null,null,null];(statearr_21390[0] = state_machine__5507__auto__);
(statearr_21390[1] = 1);
return statearr_21390;
});
var state_machine__5507__auto____1 = (function (state_21364){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_21364);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$200))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e21391){if((e21391 instanceof Object))
{var ex__5510__auto__ = e21391;var statearr_21392_21413 = state_21364;(statearr_21392_21413[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_21364);
return cljs.core.constant$keyword$200;
} else
{if(cljs.core.constant$keyword$189)
{throw e21391;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$200))
{{
var G__21414 = state_21364;
state_21364 = G__21414;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_21364){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_21364);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_21393 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_21393[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___21394);
return statearr_21393;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5523__auto__);
}));
return null;
};
var dorun_async = function (ch,var_args){
var p__21275 = null;if (arguments.length > 1) {
  p__21275 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return dorun_async__delegate.call(this,ch,p__21275);};
dorun_async.cljs$lang$maxFixedArity = 1;
dorun_async.cljs$lang$applyTo = (function (arglist__21415){
var ch = cljs.core.first(arglist__21415);
var p__21275 = cljs.core.rest(arglist__21415);
return dorun_async__delegate(ch,p__21275);
});
dorun_async.cljs$core$IFn$_invoke$arity$variadic = dorun_async__delegate;
return dorun_async;
})()
;
