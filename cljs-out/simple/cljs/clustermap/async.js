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
var map_async__delegate = function (f,colls){var coll_chs = cljs.core.map.call(null,(function (coll){var ch = cljs.core.async.chan.call(null);cljs.core.async.onto_chan.call(null,ch,coll);
return ch;
}),colls);return cljs.core.async.map.call(null,f,coll_chs);
};
var map_async = function (f,var_args){
var colls = null;if (arguments.length > 1) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return map_async__delegate.call(this,f,colls);};
map_async.cljs$lang$maxFixedArity = 1;
map_async.cljs$lang$applyTo = (function (arglist__23366){
var f = cljs.core.first(arglist__23366);
var colls = cljs.core.rest(arglist__23366);
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
var dorun_async__delegate = function (ch,p__23367){var map__23427 = p__23367;var map__23427__$1 = ((cljs.core.seq_QMARK_.call(null,map__23427))?cljs.core.apply.call(null,cljs.core.hash_map,map__23427):map__23427);var delay = cljs.core.get.call(null,map__23427__$1,new cljs.core.Keyword(null,"delay","delay",-574225219));var log = cljs.core.get.call(null,map__23427__$1,new cljs.core.Keyword(null,"log","log",-1595516004));var c__5693__auto___23486 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5693__auto___23486,map__23427,map__23427__$1,delay,log){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto___23486,map__23427,map__23427__$1,delay,log){
return (function (state_23456){var state_val_23457 = (state_23456[(1)]);if((state_val_23457 === (7)))
{var inst_23447 = (state_23456[(2)]);var state_23456__$1 = state_23456;if(cljs.core.truth_(inst_23447))
{var statearr_23458_23487 = state_23456__$1;(statearr_23458_23487[(1)] = (15));
} else
{var statearr_23459_23488 = state_23456__$1;(statearr_23459_23488[(1)] = (16));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23457 === (1)))
{var state_23456__$1 = state_23456;var statearr_23460_23489 = state_23456__$1;(statearr_23460_23489[(2)] = null);
(statearr_23460_23489[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23457 === (4)))
{var inst_23430 = (state_23456[(7)]);var inst_23430__$1 = (state_23456[(2)]);var state_23456__$1 = (function (){var statearr_23461 = state_23456;(statearr_23461[(7)] = inst_23430__$1);
return statearr_23461;
})();if(cljs.core.truth_(inst_23430__$1))
{var statearr_23462_23490 = state_23456__$1;(statearr_23462_23490[(1)] = (5));
} else
{var statearr_23463_23491 = state_23456__$1;(statearr_23463_23491[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23457 === (15)))
{var state_23456__$1 = state_23456;var statearr_23464_23492 = state_23456__$1;(statearr_23464_23492[(2)] = null);
(statearr_23464_23492[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23457 === (13)))
{var state_23456__$1 = state_23456;var statearr_23465_23493 = state_23456__$1;(statearr_23465_23493[(2)] = null);
(statearr_23465_23493[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23457 === (6)))
{var state_23456__$1 = state_23456;var statearr_23466_23494 = state_23456__$1;(statearr_23466_23494[(2)] = null);
(statearr_23466_23494[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23457 === (17)))
{var inst_23452 = (state_23456[(2)]);var state_23456__$1 = state_23456;var statearr_23467_23495 = state_23456__$1;(statearr_23467_23495[(2)] = inst_23452);
(statearr_23467_23495[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23457 === (3)))
{var inst_23454 = (state_23456[(2)]);var state_23456__$1 = state_23456;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23456__$1,inst_23454);
} else
{if((state_val_23457 === (12)))
{var inst_23430 = (state_23456[(7)]);var inst_23440 = cljs.core.clj__GT_js.call(null,inst_23430);var inst_23441 = console.log(inst_23440);var state_23456__$1 = state_23456;var statearr_23468_23496 = state_23456__$1;(statearr_23468_23496[(2)] = inst_23441);
(statearr_23468_23496[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23457 === (2)))
{var state_23456__$1 = state_23456;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23456__$1,(4),ch);
} else
{if((state_val_23457 === (11)))
{var inst_23435 = (state_23456[(2)]);var state_23456__$1 = state_23456;var statearr_23469_23497 = state_23456__$1;(statearr_23469_23497[(2)] = inst_23435);
(statearr_23469_23497[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23457 === (9)))
{var state_23456__$1 = state_23456;var statearr_23470_23498 = state_23456__$1;(statearr_23470_23498[(2)] = null);
(statearr_23470_23498[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23457 === (5)))
{var state_23456__$1 = state_23456;if(cljs.core.truth_(delay))
{var statearr_23471_23499 = state_23456__$1;(statearr_23471_23499[(1)] = (8));
} else
{var statearr_23472_23500 = state_23456__$1;(statearr_23472_23500[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23457 === (14)))
{var inst_23430 = (state_23456[(7)]);var inst_23444 = (state_23456[(2)]);var state_23456__$1 = (function (){var statearr_23473 = state_23456;(statearr_23473[(8)] = inst_23444);
return statearr_23473;
})();var statearr_23474_23501 = state_23456__$1;(statearr_23474_23501[(2)] = inst_23430);
(statearr_23474_23501[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23457 === (16)))
{var state_23456__$1 = state_23456;var statearr_23475_23502 = state_23456__$1;(statearr_23475_23502[(2)] = null);
(statearr_23475_23502[(1)] = (17));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23457 === (10)))
{var inst_23438 = (state_23456[(2)]);var state_23456__$1 = (function (){var statearr_23476 = state_23456;(statearr_23476[(9)] = inst_23438);
return statearr_23476;
})();if(cljs.core.truth_(log))
{var statearr_23477_23503 = state_23456__$1;(statearr_23477_23503[(1)] = (12));
} else
{var statearr_23478_23504 = state_23456__$1;(statearr_23478_23504[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23457 === (8)))
{var inst_23433 = cljs.core.async.timeout.call(null,delay);var state_23456__$1 = state_23456;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23456__$1,(11),inst_23433);
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
});})(c__5693__auto___23486,map__23427,map__23427__$1,delay,log))
;return ((function (switch__5678__auto__,c__5693__auto___23486,map__23427,map__23427__$1,delay,log){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_23482 = [null,null,null,null,null,null,null,null,null,null];(statearr_23482[(0)] = state_machine__5679__auto__);
(statearr_23482[(1)] = (1));
return statearr_23482;
});
var state_machine__5679__auto____1 = (function (state_23456){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_23456);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e23483){if((e23483 instanceof Object))
{var ex__5682__auto__ = e23483;var statearr_23484_23505 = state_23456;(statearr_23484_23505[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23456);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e23483;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__23506 = state_23456;
state_23456 = G__23506;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_23456){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_23456);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto___23486,map__23427,map__23427__$1,delay,log))
})();var state__5695__auto__ = (function (){var statearr_23485 = f__5694__auto__.call(null);(statearr_23485[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto___23486);
return statearr_23485;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5695__auto__);
});})(c__5693__auto___23486,map__23427,map__23427__$1,delay,log))
);
return null;
};
var dorun_async = function (ch,var_args){
var p__23367 = null;if (arguments.length > 1) {
  p__23367 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return dorun_async__delegate.call(this,ch,p__23367);};
dorun_async.cljs$lang$maxFixedArity = 1;
dorun_async.cljs$lang$applyTo = (function (arglist__23507){
var ch = cljs.core.first(arglist__23507);
var p__23367 = cljs.core.rest(arglist__23507);
return dorun_async__delegate(ch,p__23367);
});
dorun_async.cljs$core$IFn$_invoke$arity$variadic = dorun_async__delegate;
return dorun_async;
})()
;
