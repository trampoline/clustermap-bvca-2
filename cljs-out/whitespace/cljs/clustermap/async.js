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
map_async.cljs$lang$applyTo = (function (arglist__12424){
var f = cljs.core.first(arglist__12424);
var colls = cljs.core.rest(arglist__12424);
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
var dorun_async__delegate = function (ch,p__12425){var map__12485 = p__12425;var map__12485__$1 = ((cljs.core.seq_QMARK_.call(null,map__12485))?cljs.core.apply.call(null,cljs.core.hash_map,map__12485):map__12485);var delay = cljs.core.get.call(null,map__12485__$1,new cljs.core.Keyword(null,"delay","delay",-574225219));var log = cljs.core.get.call(null,map__12485__$1,new cljs.core.Keyword(null,"log","log",-1595516004));var c__5693__auto___12544 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5693__auto___12544,map__12485,map__12485__$1,delay,log){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto___12544,map__12485,map__12485__$1,delay,log){
return (function (state_12514){var state_val_12515 = (state_12514[(1)]);if((state_val_12515 === (7)))
{var inst_12505 = (state_12514[(2)]);var state_12514__$1 = state_12514;if(cljs.core.truth_(inst_12505))
{var statearr_12516_12545 = state_12514__$1;(statearr_12516_12545[(1)] = (15));
} else
{var statearr_12517_12546 = state_12514__$1;(statearr_12517_12546[(1)] = (16));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12515 === (1)))
{var state_12514__$1 = state_12514;var statearr_12518_12547 = state_12514__$1;(statearr_12518_12547[(2)] = null);
(statearr_12518_12547[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12515 === (4)))
{var inst_12488 = (state_12514[(7)]);var inst_12488__$1 = (state_12514[(2)]);var state_12514__$1 = (function (){var statearr_12519 = state_12514;(statearr_12519[(7)] = inst_12488__$1);
return statearr_12519;
})();if(cljs.core.truth_(inst_12488__$1))
{var statearr_12520_12548 = state_12514__$1;(statearr_12520_12548[(1)] = (5));
} else
{var statearr_12521_12549 = state_12514__$1;(statearr_12521_12549[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12515 === (15)))
{var state_12514__$1 = state_12514;var statearr_12522_12550 = state_12514__$1;(statearr_12522_12550[(2)] = null);
(statearr_12522_12550[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12515 === (13)))
{var state_12514__$1 = state_12514;var statearr_12523_12551 = state_12514__$1;(statearr_12523_12551[(2)] = null);
(statearr_12523_12551[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12515 === (6)))
{var state_12514__$1 = state_12514;var statearr_12524_12552 = state_12514__$1;(statearr_12524_12552[(2)] = null);
(statearr_12524_12552[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12515 === (17)))
{var inst_12510 = (state_12514[(2)]);var state_12514__$1 = state_12514;var statearr_12525_12553 = state_12514__$1;(statearr_12525_12553[(2)] = inst_12510);
(statearr_12525_12553[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12515 === (3)))
{var inst_12512 = (state_12514[(2)]);var state_12514__$1 = state_12514;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12514__$1,inst_12512);
} else
{if((state_val_12515 === (12)))
{var inst_12488 = (state_12514[(7)]);var inst_12498 = cljs.core.clj__GT_js.call(null,inst_12488);var inst_12499 = console.log(inst_12498);var state_12514__$1 = state_12514;var statearr_12526_12554 = state_12514__$1;(statearr_12526_12554[(2)] = inst_12499);
(statearr_12526_12554[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12515 === (2)))
{var state_12514__$1 = state_12514;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12514__$1,(4),ch);
} else
{if((state_val_12515 === (11)))
{var inst_12493 = (state_12514[(2)]);var state_12514__$1 = state_12514;var statearr_12527_12555 = state_12514__$1;(statearr_12527_12555[(2)] = inst_12493);
(statearr_12527_12555[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12515 === (9)))
{var state_12514__$1 = state_12514;var statearr_12528_12556 = state_12514__$1;(statearr_12528_12556[(2)] = null);
(statearr_12528_12556[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12515 === (5)))
{var state_12514__$1 = state_12514;if(cljs.core.truth_(delay))
{var statearr_12529_12557 = state_12514__$1;(statearr_12529_12557[(1)] = (8));
} else
{var statearr_12530_12558 = state_12514__$1;(statearr_12530_12558[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12515 === (14)))
{var inst_12488 = (state_12514[(7)]);var inst_12502 = (state_12514[(2)]);var state_12514__$1 = (function (){var statearr_12531 = state_12514;(statearr_12531[(8)] = inst_12502);
return statearr_12531;
})();var statearr_12532_12559 = state_12514__$1;(statearr_12532_12559[(2)] = inst_12488);
(statearr_12532_12559[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12515 === (16)))
{var state_12514__$1 = state_12514;var statearr_12533_12560 = state_12514__$1;(statearr_12533_12560[(2)] = null);
(statearr_12533_12560[(1)] = (17));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12515 === (10)))
{var inst_12496 = (state_12514[(2)]);var state_12514__$1 = (function (){var statearr_12534 = state_12514;(statearr_12534[(9)] = inst_12496);
return statearr_12534;
})();if(cljs.core.truth_(log))
{var statearr_12535_12561 = state_12514__$1;(statearr_12535_12561[(1)] = (12));
} else
{var statearr_12536_12562 = state_12514__$1;(statearr_12536_12562[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12515 === (8)))
{var inst_12491 = cljs.core.async.timeout.call(null,delay);var state_12514__$1 = state_12514;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12514__$1,(11),inst_12491);
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
});})(c__5693__auto___12544,map__12485,map__12485__$1,delay,log))
;return ((function (switch__5678__auto__,c__5693__auto___12544,map__12485,map__12485__$1,delay,log){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_12540 = [null,null,null,null,null,null,null,null,null,null];(statearr_12540[(0)] = state_machine__5679__auto__);
(statearr_12540[(1)] = (1));
return statearr_12540;
});
var state_machine__5679__auto____1 = (function (state_12514){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_12514);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e12541){if((e12541 instanceof Object))
{var ex__5682__auto__ = e12541;var statearr_12542_12563 = state_12514;(statearr_12542_12563[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12514);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e12541;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12564 = state_12514;
state_12514 = G__12564;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_12514){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_12514);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto___12544,map__12485,map__12485__$1,delay,log))
})();var state__5695__auto__ = (function (){var statearr_12543 = f__5694__auto__.call(null);(statearr_12543[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto___12544);
return statearr_12543;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5695__auto__);
});})(c__5693__auto___12544,map__12485,map__12485__$1,delay,log))
);
return null;
};
var dorun_async = function (ch,var_args){
var p__12425 = null;if (arguments.length > 1) {
  p__12425 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return dorun_async__delegate.call(this,ch,p__12425);};
dorun_async.cljs$lang$maxFixedArity = 1;
dorun_async.cljs$lang$applyTo = (function (arglist__12565){
var ch = cljs.core.first(arglist__12565);
var p__12425 = cljs.core.rest(arglist__12565);
return dorun_async__delegate(ch,p__12425);
});
dorun_async.cljs$core$IFn$_invoke$arity$variadic = dorun_async__delegate;
return dorun_async;
})()
;
