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
map_async.cljs$lang$applyTo = (function (arglist__31444){
var f = cljs.core.first(arglist__31444);
var colls = cljs.core.rest(arglist__31444);
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
var dorun_async__delegate = function (ch,p__31445){var map__31505 = p__31445;var map__31505__$1 = ((cljs.core.seq_QMARK_.call(null,map__31505))?cljs.core.apply.call(null,cljs.core.hash_map,map__31505):map__31505);var delay = cljs.core.get.call(null,map__31505__$1,new cljs.core.Keyword(null,"delay","delay",1109372149));var log = cljs.core.get.call(null,map__31505__$1,new cljs.core.Keyword(null,"log","log",1014011574));var c__5521__auto___31564 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_31534){var state_val_31535 = (state_31534[1]);if((state_val_31535 === 1))
{var state_31534__$1 = state_31534;var statearr_31536_31565 = state_31534__$1;(statearr_31536_31565[2] = null);
(statearr_31536_31565[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31535 === 2))
{var state_31534__$1 = state_31534;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31534__$1,4,ch);
} else
{if((state_val_31535 === 3))
{var inst_31532 = (state_31534[2]);var state_31534__$1 = state_31534;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31534__$1,inst_31532);
} else
{if((state_val_31535 === 4))
{var inst_31508 = (state_31534[7]);var inst_31508__$1 = (state_31534[2]);var state_31534__$1 = (function (){var statearr_31537 = state_31534;(statearr_31537[7] = inst_31508__$1);
return statearr_31537;
})();if(cljs.core.truth_(inst_31508__$1))
{var statearr_31538_31566 = state_31534__$1;(statearr_31538_31566[1] = 5);
} else
{var statearr_31539_31567 = state_31534__$1;(statearr_31539_31567[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31535 === 5))
{var state_31534__$1 = state_31534;if(cljs.core.truth_(delay))
{var statearr_31540_31568 = state_31534__$1;(statearr_31540_31568[1] = 8);
} else
{var statearr_31541_31569 = state_31534__$1;(statearr_31541_31569[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31535 === 6))
{var state_31534__$1 = state_31534;var statearr_31542_31570 = state_31534__$1;(statearr_31542_31570[2] = null);
(statearr_31542_31570[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31535 === 7))
{var inst_31525 = (state_31534[2]);var state_31534__$1 = state_31534;if(cljs.core.truth_(inst_31525))
{var statearr_31543_31571 = state_31534__$1;(statearr_31543_31571[1] = 15);
} else
{var statearr_31544_31572 = state_31534__$1;(statearr_31544_31572[1] = 16);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31535 === 8))
{var inst_31511 = cljs.core.async.timeout.call(null,delay);var state_31534__$1 = state_31534;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31534__$1,11,inst_31511);
} else
{if((state_val_31535 === 9))
{var state_31534__$1 = state_31534;var statearr_31545_31573 = state_31534__$1;(statearr_31545_31573[2] = null);
(statearr_31545_31573[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31535 === 10))
{var inst_31516 = (state_31534[2]);var state_31534__$1 = (function (){var statearr_31546 = state_31534;(statearr_31546[8] = inst_31516);
return statearr_31546;
})();if(cljs.core.truth_(log))
{var statearr_31547_31574 = state_31534__$1;(statearr_31547_31574[1] = 12);
} else
{var statearr_31548_31575 = state_31534__$1;(statearr_31548_31575[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31535 === 11))
{var inst_31513 = (state_31534[2]);var state_31534__$1 = state_31534;var statearr_31549_31576 = state_31534__$1;(statearr_31549_31576[2] = inst_31513);
(statearr_31549_31576[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31535 === 12))
{var inst_31508 = (state_31534[7]);var inst_31518 = cljs.core.clj__GT_js.call(null,inst_31508);var inst_31519 = console.log(inst_31518);var state_31534__$1 = state_31534;var statearr_31550_31577 = state_31534__$1;(statearr_31550_31577[2] = inst_31519);
(statearr_31550_31577[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31535 === 13))
{var state_31534__$1 = state_31534;var statearr_31551_31578 = state_31534__$1;(statearr_31551_31578[2] = null);
(statearr_31551_31578[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31535 === 14))
{var inst_31508 = (state_31534[7]);var inst_31522 = (state_31534[2]);var state_31534__$1 = (function (){var statearr_31552 = state_31534;(statearr_31552[9] = inst_31522);
return statearr_31552;
})();var statearr_31553_31579 = state_31534__$1;(statearr_31553_31579[2] = inst_31508);
(statearr_31553_31579[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31535 === 15))
{var state_31534__$1 = state_31534;var statearr_31554_31580 = state_31534__$1;(statearr_31554_31580[2] = null);
(statearr_31554_31580[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31535 === 16))
{var state_31534__$1 = state_31534;var statearr_31555_31581 = state_31534__$1;(statearr_31555_31581[2] = null);
(statearr_31555_31581[1] = 17);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31535 === 17))
{var inst_31530 = (state_31534[2]);var state_31534__$1 = state_31534;var statearr_31556_31582 = state_31534__$1;(statearr_31556_31582[2] = inst_31530);
(statearr_31556_31582[1] = 3);
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
var state_machine__5507__auto____0 = (function (){var statearr_31560 = [null,null,null,null,null,null,null,null,null,null];(statearr_31560[0] = state_machine__5507__auto__);
(statearr_31560[1] = 1);
return statearr_31560;
});
var state_machine__5507__auto____1 = (function (state_31534){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_31534);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e31561){if((e31561 instanceof Object))
{var ex__5510__auto__ = e31561;var statearr_31562_31583 = state_31534;(statearr_31562_31583[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31534);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e31561;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__31584 = state_31534;
state_31534 = G__31584;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_31534){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_31534);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_31563 = f__5522__auto__.call(null);(statearr_31563[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___31564);
return statearr_31563;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5523__auto__);
}));
return null;
};
var dorun_async = function (ch,var_args){
var p__31445 = null;if (arguments.length > 1) {
  p__31445 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return dorun_async__delegate.call(this,ch,p__31445);};
dorun_async.cljs$lang$maxFixedArity = 1;
dorun_async.cljs$lang$applyTo = (function (arglist__31585){
var ch = cljs.core.first(arglist__31585);
var p__31445 = cljs.core.rest(arglist__31585);
return dorun_async__delegate(ch,p__31445);
});
dorun_async.cljs$core$IFn$_invoke$arity$variadic = dorun_async__delegate;
return dorun_async;
})()
;
