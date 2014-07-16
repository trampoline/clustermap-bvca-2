// Compiled by ClojureScript 0.0-2261
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
map_async.cljs$lang$applyTo = (function (arglist__36204){
var f = cljs.core.first(arglist__36204);
var colls = cljs.core.rest(arglist__36204);
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
var dorun_async__delegate = function (ch,p__36205){var map__36265 = p__36205;var map__36265__$1 = ((cljs.core.seq_QMARK_(map__36265))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36265):map__36265);var delay = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36265__$1,cljs.core.constant$keyword$1111);var log = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36265__$1,cljs.core.constant$keyword$1028);var c__5693__auto___36324 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5693__auto___36324,map__36265,map__36265__$1,delay,log){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto___36324,map__36265,map__36265__$1,delay,log){
return (function (state_36294){var state_val_36295 = (state_36294[(1)]);if((state_val_36295 === (7)))
{var inst_36285 = (state_36294[(2)]);var state_36294__$1 = state_36294;if(cljs.core.truth_(inst_36285))
{var statearr_36296_36325 = state_36294__$1;(statearr_36296_36325[(1)] = (15));
} else
{var statearr_36297_36326 = state_36294__$1;(statearr_36297_36326[(1)] = (16));
}
return cljs.core.constant$keyword$767;
} else
{if((state_val_36295 === (1)))
{var state_36294__$1 = state_36294;var statearr_36298_36327 = state_36294__$1;(statearr_36298_36327[(2)] = null);
(statearr_36298_36327[(1)] = (2));
return cljs.core.constant$keyword$767;
} else
{if((state_val_36295 === (4)))
{var inst_36268 = (state_36294[(7)]);var inst_36268__$1 = (state_36294[(2)]);var state_36294__$1 = (function (){var statearr_36299 = state_36294;(statearr_36299[(7)] = inst_36268__$1);
return statearr_36299;
})();if(cljs.core.truth_(inst_36268__$1))
{var statearr_36300_36328 = state_36294__$1;(statearr_36300_36328[(1)] = (5));
} else
{var statearr_36301_36329 = state_36294__$1;(statearr_36301_36329[(1)] = (6));
}
return cljs.core.constant$keyword$767;
} else
{if((state_val_36295 === (15)))
{var state_36294__$1 = state_36294;var statearr_36302_36330 = state_36294__$1;(statearr_36302_36330[(2)] = null);
(statearr_36302_36330[(1)] = (2));
return cljs.core.constant$keyword$767;
} else
{if((state_val_36295 === (13)))
{var state_36294__$1 = state_36294;var statearr_36303_36331 = state_36294__$1;(statearr_36303_36331[(2)] = null);
(statearr_36303_36331[(1)] = (14));
return cljs.core.constant$keyword$767;
} else
{if((state_val_36295 === (6)))
{var state_36294__$1 = state_36294;var statearr_36304_36332 = state_36294__$1;(statearr_36304_36332[(2)] = null);
(statearr_36304_36332[(1)] = (7));
return cljs.core.constant$keyword$767;
} else
{if((state_val_36295 === (17)))
{var inst_36290 = (state_36294[(2)]);var state_36294__$1 = state_36294;var statearr_36305_36333 = state_36294__$1;(statearr_36305_36333[(2)] = inst_36290);
(statearr_36305_36333[(1)] = (3));
return cljs.core.constant$keyword$767;
} else
{if((state_val_36295 === (3)))
{var inst_36292 = (state_36294[(2)]);var state_36294__$1 = state_36294;return cljs.core.async.impl.ioc_helpers.return_chan(state_36294__$1,inst_36292);
} else
{if((state_val_36295 === (12)))
{var inst_36268 = (state_36294[(7)]);var inst_36278 = cljs.core.clj__GT_js(inst_36268);var inst_36279 = console.log(inst_36278);var state_36294__$1 = state_36294;var statearr_36306_36334 = state_36294__$1;(statearr_36306_36334[(2)] = inst_36279);
(statearr_36306_36334[(1)] = (14));
return cljs.core.constant$keyword$767;
} else
{if((state_val_36295 === (2)))
{var state_36294__$1 = state_36294;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36294__$1,(4),ch);
} else
{if((state_val_36295 === (11)))
{var inst_36273 = (state_36294[(2)]);var state_36294__$1 = state_36294;var statearr_36307_36335 = state_36294__$1;(statearr_36307_36335[(2)] = inst_36273);
(statearr_36307_36335[(1)] = (10));
return cljs.core.constant$keyword$767;
} else
{if((state_val_36295 === (9)))
{var state_36294__$1 = state_36294;var statearr_36308_36336 = state_36294__$1;(statearr_36308_36336[(2)] = null);
(statearr_36308_36336[(1)] = (10));
return cljs.core.constant$keyword$767;
} else
{if((state_val_36295 === (5)))
{var state_36294__$1 = state_36294;if(cljs.core.truth_(delay))
{var statearr_36309_36337 = state_36294__$1;(statearr_36309_36337[(1)] = (8));
} else
{var statearr_36310_36338 = state_36294__$1;(statearr_36310_36338[(1)] = (9));
}
return cljs.core.constant$keyword$767;
} else
{if((state_val_36295 === (14)))
{var inst_36268 = (state_36294[(7)]);var inst_36282 = (state_36294[(2)]);var state_36294__$1 = (function (){var statearr_36311 = state_36294;(statearr_36311[(8)] = inst_36282);
return statearr_36311;
})();var statearr_36312_36339 = state_36294__$1;(statearr_36312_36339[(2)] = inst_36268);
(statearr_36312_36339[(1)] = (7));
return cljs.core.constant$keyword$767;
} else
{if((state_val_36295 === (16)))
{var state_36294__$1 = state_36294;var statearr_36313_36340 = state_36294__$1;(statearr_36313_36340[(2)] = null);
(statearr_36313_36340[(1)] = (17));
return cljs.core.constant$keyword$767;
} else
{if((state_val_36295 === (10)))
{var inst_36276 = (state_36294[(2)]);var state_36294__$1 = (function (){var statearr_36314 = state_36294;(statearr_36314[(9)] = inst_36276);
return statearr_36314;
})();if(cljs.core.truth_(log))
{var statearr_36315_36341 = state_36294__$1;(statearr_36315_36341[(1)] = (12));
} else
{var statearr_36316_36342 = state_36294__$1;(statearr_36316_36342[(1)] = (13));
}
return cljs.core.constant$keyword$767;
} else
{if((state_val_36295 === (8)))
{var inst_36271 = cljs.core.async.timeout(delay);var state_36294__$1 = state_36294;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36294__$1,(11),inst_36271);
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
});})(c__5693__auto___36324,map__36265,map__36265__$1,delay,log))
;return ((function (switch__5678__auto__,c__5693__auto___36324,map__36265,map__36265__$1,delay,log){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_36320 = [null,null,null,null,null,null,null,null,null,null];(statearr_36320[(0)] = state_machine__5679__auto__);
(statearr_36320[(1)] = (1));
return statearr_36320;
});
var state_machine__5679__auto____1 = (function (state_36294){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__(state_36294);if(cljs.core.keyword_identical_QMARK_(result__5681__auto__,cljs.core.constant$keyword$767))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e36321){if((e36321 instanceof Object))
{var ex__5682__auto__ = e36321;var statearr_36322_36343 = state_36294;(statearr_36322_36343[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_36294);
return cljs.core.constant$keyword$767;
} else
{if(cljs.core.constant$keyword$758)
{throw e36321;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5680__auto__,cljs.core.constant$keyword$767))
{{
var G__36344 = state_36294;
state_36294 = G__36344;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_36294){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_36294);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto___36324,map__36265,map__36265__$1,delay,log))
})();var state__5695__auto__ = (function (){var statearr_36323 = (f__5694__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5694__auto__.cljs$core$IFn$_invoke$arity$0() : f__5694__auto__.call(null));(statearr_36323[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto___36324);
return statearr_36323;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5695__auto__);
});})(c__5693__auto___36324,map__36265,map__36265__$1,delay,log))
);
return null;
};
var dorun_async = function (ch,var_args){
var p__36205 = null;if (arguments.length > 1) {
  p__36205 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return dorun_async__delegate.call(this,ch,p__36205);};
dorun_async.cljs$lang$maxFixedArity = 1;
dorun_async.cljs$lang$applyTo = (function (arglist__36345){
var ch = cljs.core.first(arglist__36345);
var p__36205 = cljs.core.rest(arglist__36345);
return dorun_async__delegate(ch,p__36205);
});
dorun_async.cljs$core$IFn$_invoke$arity$variadic = dorun_async__delegate;
return dorun_async;
})()
;
