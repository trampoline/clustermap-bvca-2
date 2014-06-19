// Compiled by ClojureScript 0.0-2227
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
map_async.cljs$lang$applyTo = (function (arglist__45469){
var f = cljs.core.first(arglist__45469);
var colls = cljs.core.rest(arglist__45469);
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
var dorun_async__delegate = function (ch,p__45470){var map__45530 = p__45470;var map__45530__$1 = ((cljs.core.seq_QMARK_.call(null,map__45530))?cljs.core.apply.call(null,cljs.core.hash_map,map__45530):map__45530);var delay = cljs.core.get.call(null,map__45530__$1,new cljs.core.Keyword(null,"delay","delay",1109372149));var log = cljs.core.get.call(null,map__45530__$1,new cljs.core.Keyword(null,"log","log",1014011574));var c__5689__auto___45589 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__5689__auto___45589,map__45530,map__45530__$1,delay,log){
return (function (){var f__5690__auto__ = (function (){var switch__5674__auto__ = ((function (c__5689__auto___45589,map__45530,map__45530__$1,delay,log){
return (function (state_45559){var state_val_45560 = (state_45559[1]);if((state_val_45560 === 7))
{var inst_45550 = (state_45559[2]);var state_45559__$1 = state_45559;if(cljs.core.truth_(inst_45550))
{var statearr_45561_45590 = state_45559__$1;(statearr_45561_45590[1] = 15);
} else
{var statearr_45562_45591 = state_45559__$1;(statearr_45562_45591[1] = 16);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_45560 === 1))
{var state_45559__$1 = state_45559;var statearr_45563_45592 = state_45559__$1;(statearr_45563_45592[2] = null);
(statearr_45563_45592[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_45560 === 4))
{var inst_45533 = (state_45559[7]);var inst_45533__$1 = (state_45559[2]);var state_45559__$1 = (function (){var statearr_45564 = state_45559;(statearr_45564[7] = inst_45533__$1);
return statearr_45564;
})();if(cljs.core.truth_(inst_45533__$1))
{var statearr_45565_45593 = state_45559__$1;(statearr_45565_45593[1] = 5);
} else
{var statearr_45566_45594 = state_45559__$1;(statearr_45566_45594[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_45560 === 15))
{var state_45559__$1 = state_45559;var statearr_45567_45595 = state_45559__$1;(statearr_45567_45595[2] = null);
(statearr_45567_45595[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_45560 === 13))
{var state_45559__$1 = state_45559;var statearr_45568_45596 = state_45559__$1;(statearr_45568_45596[2] = null);
(statearr_45568_45596[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_45560 === 6))
{var state_45559__$1 = state_45559;var statearr_45569_45597 = state_45559__$1;(statearr_45569_45597[2] = null);
(statearr_45569_45597[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_45560 === 17))
{var inst_45555 = (state_45559[2]);var state_45559__$1 = state_45559;var statearr_45570_45598 = state_45559__$1;(statearr_45570_45598[2] = inst_45555);
(statearr_45570_45598[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_45560 === 3))
{var inst_45557 = (state_45559[2]);var state_45559__$1 = state_45559;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45559__$1,inst_45557);
} else
{if((state_val_45560 === 12))
{var inst_45533 = (state_45559[7]);var inst_45543 = cljs.core.clj__GT_js.call(null,inst_45533);var inst_45544 = console.log(inst_45543);var state_45559__$1 = state_45559;var statearr_45571_45599 = state_45559__$1;(statearr_45571_45599[2] = inst_45544);
(statearr_45571_45599[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_45560 === 2))
{var state_45559__$1 = state_45559;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45559__$1,4,ch);
} else
{if((state_val_45560 === 11))
{var inst_45538 = (state_45559[2]);var state_45559__$1 = state_45559;var statearr_45572_45600 = state_45559__$1;(statearr_45572_45600[2] = inst_45538);
(statearr_45572_45600[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_45560 === 9))
{var state_45559__$1 = state_45559;var statearr_45573_45601 = state_45559__$1;(statearr_45573_45601[2] = null);
(statearr_45573_45601[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_45560 === 5))
{var state_45559__$1 = state_45559;if(cljs.core.truth_(delay))
{var statearr_45574_45602 = state_45559__$1;(statearr_45574_45602[1] = 8);
} else
{var statearr_45575_45603 = state_45559__$1;(statearr_45575_45603[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_45560 === 14))
{var inst_45533 = (state_45559[7]);var inst_45547 = (state_45559[2]);var state_45559__$1 = (function (){var statearr_45576 = state_45559;(statearr_45576[8] = inst_45547);
return statearr_45576;
})();var statearr_45577_45604 = state_45559__$1;(statearr_45577_45604[2] = inst_45533);
(statearr_45577_45604[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_45560 === 16))
{var state_45559__$1 = state_45559;var statearr_45578_45605 = state_45559__$1;(statearr_45578_45605[2] = null);
(statearr_45578_45605[1] = 17);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_45560 === 10))
{var inst_45541 = (state_45559[2]);var state_45559__$1 = (function (){var statearr_45579 = state_45559;(statearr_45579[9] = inst_45541);
return statearr_45579;
})();if(cljs.core.truth_(log))
{var statearr_45580_45606 = state_45559__$1;(statearr_45580_45606[1] = 12);
} else
{var statearr_45581_45607 = state_45559__$1;(statearr_45581_45607[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_45560 === 8))
{var inst_45536 = cljs.core.async.timeout.call(null,delay);var state_45559__$1 = state_45559;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45559__$1,11,inst_45536);
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
});})(c__5689__auto___45589,map__45530,map__45530__$1,delay,log))
;return ((function (switch__5674__auto__,c__5689__auto___45589,map__45530,map__45530__$1,delay,log){
return (function() {
var state_machine__5675__auto__ = null;
var state_machine__5675__auto____0 = (function (){var statearr_45585 = [null,null,null,null,null,null,null,null,null,null];(statearr_45585[0] = state_machine__5675__auto__);
(statearr_45585[1] = 1);
return statearr_45585;
});
var state_machine__5675__auto____1 = (function (state_45559){while(true){
var ret_value__5676__auto__ = (function (){try{while(true){
var result__5677__auto__ = switch__5674__auto__.call(null,state_45559);if(cljs.core.keyword_identical_QMARK_.call(null,result__5677__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5677__auto__;
}
break;
}
}catch (e45586){if((e45586 instanceof Object))
{var ex__5678__auto__ = e45586;var statearr_45587_45608 = state_45559;(statearr_45587_45608[5] = ex__5678__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45559);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e45586;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5676__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__45609 = state_45559;
state_45559 = G__45609;
continue;
}
} else
{return ret_value__5676__auto__;
}
break;
}
});
state_machine__5675__auto__ = function(state_45559){
switch(arguments.length){
case 0:
return state_machine__5675__auto____0.call(this);
case 1:
return state_machine__5675__auto____1.call(this,state_45559);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5675__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5675__auto____0;
state_machine__5675__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5675__auto____1;
return state_machine__5675__auto__;
})()
;})(switch__5674__auto__,c__5689__auto___45589,map__45530,map__45530__$1,delay,log))
})();var state__5691__auto__ = (function (){var statearr_45588 = f__5690__auto__.call(null);(statearr_45588[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5689__auto___45589);
return statearr_45588;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5691__auto__);
});})(c__5689__auto___45589,map__45530,map__45530__$1,delay,log))
);
return null;
};
var dorun_async = function (ch,var_args){
var p__45470 = null;if (arguments.length > 1) {
  p__45470 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return dorun_async__delegate.call(this,ch,p__45470);};
dorun_async.cljs$lang$maxFixedArity = 1;
dorun_async.cljs$lang$applyTo = (function (arglist__45610){
var ch = cljs.core.first(arglist__45610);
var p__45470 = cljs.core.rest(arglist__45610);
return dorun_async__delegate(ch,p__45470);
});
dorun_async.cljs$core$IFn$_invoke$arity$variadic = dorun_async__delegate;
return dorun_async;
})()
;
