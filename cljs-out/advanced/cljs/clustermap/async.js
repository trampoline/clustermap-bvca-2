// Compiled by ClojureScript 0.0-2356
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
map_async.cljs$lang$applyTo = (function (arglist__53368){
var f = cljs.core.first(arglist__53368);
var colls = cljs.core.rest(arglist__53368);
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
var dorun_async__delegate = function (ch,p__53369){var map__53429 = p__53369;var map__53429__$1 = ((cljs.core.seq_QMARK_(map__53429))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53429):map__53429);var delay = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53429__$1,cljs.core.constant$keyword$1314);var log = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53429__$1,cljs.core.constant$keyword$1215);var c__5819__auto___53488 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5819__auto___53488,map__53429,map__53429__$1,delay,log){
return (function (){var f__5820__auto__ = (function (){var switch__5804__auto__ = ((function (c__5819__auto___53488,map__53429,map__53429__$1,delay,log){
return (function (state_53458){var state_val_53459 = (state_53458[(1)]);if((state_val_53459 === (7)))
{var inst_53449 = (state_53458[(2)]);var state_53458__$1 = state_53458;if(cljs.core.truth_(inst_53449))
{var statearr_53460_53489 = state_53458__$1;(statearr_53460_53489[(1)] = (15));
} else
{var statearr_53461_53490 = state_53458__$1;(statearr_53461_53490[(1)] = (16));
}
return cljs.core.constant$keyword$1120;
} else
{if((state_val_53459 === (1)))
{var state_53458__$1 = state_53458;var statearr_53462_53491 = state_53458__$1;(statearr_53462_53491[(2)] = null);
(statearr_53462_53491[(1)] = (2));
return cljs.core.constant$keyword$1120;
} else
{if((state_val_53459 === (4)))
{var inst_53432 = (state_53458[(7)]);var inst_53432__$1 = (state_53458[(2)]);var state_53458__$1 = (function (){var statearr_53463 = state_53458;(statearr_53463[(7)] = inst_53432__$1);
return statearr_53463;
})();if(cljs.core.truth_(inst_53432__$1))
{var statearr_53464_53492 = state_53458__$1;(statearr_53464_53492[(1)] = (5));
} else
{var statearr_53465_53493 = state_53458__$1;(statearr_53465_53493[(1)] = (6));
}
return cljs.core.constant$keyword$1120;
} else
{if((state_val_53459 === (15)))
{var state_53458__$1 = state_53458;var statearr_53466_53494 = state_53458__$1;(statearr_53466_53494[(2)] = null);
(statearr_53466_53494[(1)] = (2));
return cljs.core.constant$keyword$1120;
} else
{if((state_val_53459 === (13)))
{var state_53458__$1 = state_53458;var statearr_53467_53495 = state_53458__$1;(statearr_53467_53495[(2)] = null);
(statearr_53467_53495[(1)] = (14));
return cljs.core.constant$keyword$1120;
} else
{if((state_val_53459 === (6)))
{var state_53458__$1 = state_53458;var statearr_53468_53496 = state_53458__$1;(statearr_53468_53496[(2)] = null);
(statearr_53468_53496[(1)] = (7));
return cljs.core.constant$keyword$1120;
} else
{if((state_val_53459 === (17)))
{var inst_53454 = (state_53458[(2)]);var state_53458__$1 = state_53458;var statearr_53469_53497 = state_53458__$1;(statearr_53469_53497[(2)] = inst_53454);
(statearr_53469_53497[(1)] = (3));
return cljs.core.constant$keyword$1120;
} else
{if((state_val_53459 === (3)))
{var inst_53456 = (state_53458[(2)]);var state_53458__$1 = state_53458;return cljs.core.async.impl.ioc_helpers.return_chan(state_53458__$1,inst_53456);
} else
{if((state_val_53459 === (12)))
{var inst_53432 = (state_53458[(7)]);var inst_53442 = cljs.core.clj__GT_js(inst_53432);var inst_53443 = console.log(inst_53442);var state_53458__$1 = state_53458;var statearr_53470_53498 = state_53458__$1;(statearr_53470_53498[(2)] = inst_53443);
(statearr_53470_53498[(1)] = (14));
return cljs.core.constant$keyword$1120;
} else
{if((state_val_53459 === (2)))
{var state_53458__$1 = state_53458;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_53458__$1,(4),ch);
} else
{if((state_val_53459 === (11)))
{var inst_53437 = (state_53458[(2)]);var state_53458__$1 = state_53458;var statearr_53471_53499 = state_53458__$1;(statearr_53471_53499[(2)] = inst_53437);
(statearr_53471_53499[(1)] = (10));
return cljs.core.constant$keyword$1120;
} else
{if((state_val_53459 === (9)))
{var state_53458__$1 = state_53458;var statearr_53472_53500 = state_53458__$1;(statearr_53472_53500[(2)] = null);
(statearr_53472_53500[(1)] = (10));
return cljs.core.constant$keyword$1120;
} else
{if((state_val_53459 === (5)))
{var state_53458__$1 = state_53458;if(cljs.core.truth_(delay))
{var statearr_53473_53501 = state_53458__$1;(statearr_53473_53501[(1)] = (8));
} else
{var statearr_53474_53502 = state_53458__$1;(statearr_53474_53502[(1)] = (9));
}
return cljs.core.constant$keyword$1120;
} else
{if((state_val_53459 === (14)))
{var inst_53432 = (state_53458[(7)]);var inst_53446 = (state_53458[(2)]);var state_53458__$1 = (function (){var statearr_53475 = state_53458;(statearr_53475[(8)] = inst_53446);
return statearr_53475;
})();var statearr_53476_53503 = state_53458__$1;(statearr_53476_53503[(2)] = inst_53432);
(statearr_53476_53503[(1)] = (7));
return cljs.core.constant$keyword$1120;
} else
{if((state_val_53459 === (16)))
{var state_53458__$1 = state_53458;var statearr_53477_53504 = state_53458__$1;(statearr_53477_53504[(2)] = null);
(statearr_53477_53504[(1)] = (17));
return cljs.core.constant$keyword$1120;
} else
{if((state_val_53459 === (10)))
{var inst_53440 = (state_53458[(2)]);var state_53458__$1 = (function (){var statearr_53478 = state_53458;(statearr_53478[(9)] = inst_53440);
return statearr_53478;
})();if(cljs.core.truth_(log))
{var statearr_53479_53505 = state_53458__$1;(statearr_53479_53505[(1)] = (12));
} else
{var statearr_53480_53506 = state_53458__$1;(statearr_53480_53506[(1)] = (13));
}
return cljs.core.constant$keyword$1120;
} else
{if((state_val_53459 === (8)))
{var inst_53435 = cljs.core.async.timeout(delay);var state_53458__$1 = state_53458;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_53458__$1,(11),inst_53435);
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
});})(c__5819__auto___53488,map__53429,map__53429__$1,delay,log))
;return ((function (switch__5804__auto__,c__5819__auto___53488,map__53429,map__53429__$1,delay,log){
return (function() {
var state_machine__5805__auto__ = null;
var state_machine__5805__auto____0 = (function (){var statearr_53484 = [null,null,null,null,null,null,null,null,null,null];(statearr_53484[(0)] = state_machine__5805__auto__);
(statearr_53484[(1)] = (1));
return statearr_53484;
});
var state_machine__5805__auto____1 = (function (state_53458){while(true){
var ret_value__5806__auto__ = (function (){try{while(true){
var result__5807__auto__ = switch__5804__auto__(state_53458);if(cljs.core.keyword_identical_QMARK_(result__5807__auto__,cljs.core.constant$keyword$1120))
{{
continue;
}
} else
{return result__5807__auto__;
}
break;
}
}catch (e53485){if((e53485 instanceof Object))
{var ex__5808__auto__ = e53485;var statearr_53486_53507 = state_53458;(statearr_53486_53507[(5)] = ex__5808__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_53458);
return cljs.core.constant$keyword$1120;
} else
{throw e53485;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5806__auto__,cljs.core.constant$keyword$1120))
{{
var G__53508 = state_53458;
state_53458 = G__53508;
continue;
}
} else
{return ret_value__5806__auto__;
}
break;
}
});
state_machine__5805__auto__ = function(state_53458){
switch(arguments.length){
case 0:
return state_machine__5805__auto____0.call(this);
case 1:
return state_machine__5805__auto____1.call(this,state_53458);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5805__auto____0;
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5805__auto____1;
return state_machine__5805__auto__;
})()
;})(switch__5804__auto__,c__5819__auto___53488,map__53429,map__53429__$1,delay,log))
})();var state__5821__auto__ = (function (){var statearr_53487 = (function (){return (f__5820__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5820__auto__.cljs$core$IFn$_invoke$arity$0() : f__5820__auto__.call(null));
})();(statearr_53487[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5819__auto___53488);
return statearr_53487;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5821__auto__);
});})(c__5819__auto___53488,map__53429,map__53429__$1,delay,log))
);
return null;
};
var dorun_async = function (ch,var_args){
var p__53369 = null;if (arguments.length > 1) {
  p__53369 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return dorun_async__delegate.call(this,ch,p__53369);};
dorun_async.cljs$lang$maxFixedArity = 1;
dorun_async.cljs$lang$applyTo = (function (arglist__53509){
var ch = cljs.core.first(arglist__53509);
var p__53369 = cljs.core.rest(arglist__53509);
return dorun_async__delegate(ch,p__53369);
});
dorun_async.cljs$core$IFn$_invoke$arity$variadic = dorun_async__delegate;
return dorun_async;
})()
;
