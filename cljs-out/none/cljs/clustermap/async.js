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
map_async.cljs$lang$applyTo = (function (arglist__45445){
var f = cljs.core.first(arglist__45445);
var colls = cljs.core.rest(arglist__45445);
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
var dorun_async__delegate = function (ch,p__45446){var map__45506 = p__45446;var map__45506__$1 = ((cljs.core.seq_QMARK_.call(null,map__45506))?cljs.core.apply.call(null,cljs.core.hash_map,map__45506):map__45506);var delay = cljs.core.get.call(null,map__45506__$1,new cljs.core.Keyword(null,"delay","delay",1109372149));var log = cljs.core.get.call(null,map__45506__$1,new cljs.core.Keyword(null,"log","log",1014011574));var c__5691__auto___45565 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__5691__auto___45565,map__45506,map__45506__$1,delay,log){
return (function (){var f__5692__auto__ = (function (){var switch__5676__auto__ = ((function (c__5691__auto___45565,map__45506,map__45506__$1,delay,log){
return (function (state_45535){var state_val_45536 = (state_45535[1]);if((state_val_45536 === 7))
{var inst_45526 = (state_45535[2]);var state_45535__$1 = state_45535;if(cljs.core.truth_(inst_45526))
{var statearr_45537_45566 = state_45535__$1;(statearr_45537_45566[1] = 15);
} else
{var statearr_45538_45567 = state_45535__$1;(statearr_45538_45567[1] = 16);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_45536 === 1))
{var state_45535__$1 = state_45535;var statearr_45539_45568 = state_45535__$1;(statearr_45539_45568[2] = null);
(statearr_45539_45568[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_45536 === 4))
{var inst_45509 = (state_45535[7]);var inst_45509__$1 = (state_45535[2]);var state_45535__$1 = (function (){var statearr_45540 = state_45535;(statearr_45540[7] = inst_45509__$1);
return statearr_45540;
})();if(cljs.core.truth_(inst_45509__$1))
{var statearr_45541_45569 = state_45535__$1;(statearr_45541_45569[1] = 5);
} else
{var statearr_45542_45570 = state_45535__$1;(statearr_45542_45570[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_45536 === 15))
{var state_45535__$1 = state_45535;var statearr_45543_45571 = state_45535__$1;(statearr_45543_45571[2] = null);
(statearr_45543_45571[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_45536 === 13))
{var state_45535__$1 = state_45535;var statearr_45544_45572 = state_45535__$1;(statearr_45544_45572[2] = null);
(statearr_45544_45572[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_45536 === 6))
{var state_45535__$1 = state_45535;var statearr_45545_45573 = state_45535__$1;(statearr_45545_45573[2] = null);
(statearr_45545_45573[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_45536 === 17))
{var inst_45531 = (state_45535[2]);var state_45535__$1 = state_45535;var statearr_45546_45574 = state_45535__$1;(statearr_45546_45574[2] = inst_45531);
(statearr_45546_45574[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_45536 === 3))
{var inst_45533 = (state_45535[2]);var state_45535__$1 = state_45535;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45535__$1,inst_45533);
} else
{if((state_val_45536 === 12))
{var inst_45509 = (state_45535[7]);var inst_45519 = cljs.core.clj__GT_js.call(null,inst_45509);var inst_45520 = console.log(inst_45519);var state_45535__$1 = state_45535;var statearr_45547_45575 = state_45535__$1;(statearr_45547_45575[2] = inst_45520);
(statearr_45547_45575[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_45536 === 2))
{var state_45535__$1 = state_45535;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45535__$1,4,ch);
} else
{if((state_val_45536 === 11))
{var inst_45514 = (state_45535[2]);var state_45535__$1 = state_45535;var statearr_45548_45576 = state_45535__$1;(statearr_45548_45576[2] = inst_45514);
(statearr_45548_45576[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_45536 === 9))
{var state_45535__$1 = state_45535;var statearr_45549_45577 = state_45535__$1;(statearr_45549_45577[2] = null);
(statearr_45549_45577[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_45536 === 5))
{var state_45535__$1 = state_45535;if(cljs.core.truth_(delay))
{var statearr_45550_45578 = state_45535__$1;(statearr_45550_45578[1] = 8);
} else
{var statearr_45551_45579 = state_45535__$1;(statearr_45551_45579[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_45536 === 14))
{var inst_45509 = (state_45535[7]);var inst_45523 = (state_45535[2]);var state_45535__$1 = (function (){var statearr_45552 = state_45535;(statearr_45552[8] = inst_45523);
return statearr_45552;
})();var statearr_45553_45580 = state_45535__$1;(statearr_45553_45580[2] = inst_45509);
(statearr_45553_45580[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_45536 === 16))
{var state_45535__$1 = state_45535;var statearr_45554_45581 = state_45535__$1;(statearr_45554_45581[2] = null);
(statearr_45554_45581[1] = 17);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_45536 === 10))
{var inst_45517 = (state_45535[2]);var state_45535__$1 = (function (){var statearr_45555 = state_45535;(statearr_45555[9] = inst_45517);
return statearr_45555;
})();if(cljs.core.truth_(log))
{var statearr_45556_45582 = state_45535__$1;(statearr_45556_45582[1] = 12);
} else
{var statearr_45557_45583 = state_45535__$1;(statearr_45557_45583[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_45536 === 8))
{var inst_45512 = cljs.core.async.timeout.call(null,delay);var state_45535__$1 = state_45535;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45535__$1,11,inst_45512);
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
});})(c__5691__auto___45565,map__45506,map__45506__$1,delay,log))
;return ((function (switch__5676__auto__,c__5691__auto___45565,map__45506,map__45506__$1,delay,log){
return (function() {
var state_machine__5677__auto__ = null;
var state_machine__5677__auto____0 = (function (){var statearr_45561 = [null,null,null,null,null,null,null,null,null,null];(statearr_45561[0] = state_machine__5677__auto__);
(statearr_45561[1] = 1);
return statearr_45561;
});
var state_machine__5677__auto____1 = (function (state_45535){while(true){
var ret_value__5678__auto__ = (function (){try{while(true){
var result__5679__auto__ = switch__5676__auto__.call(null,state_45535);if(cljs.core.keyword_identical_QMARK_.call(null,result__5679__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5679__auto__;
}
break;
}
}catch (e45562){if((e45562 instanceof Object))
{var ex__5680__auto__ = e45562;var statearr_45563_45584 = state_45535;(statearr_45563_45584[5] = ex__5680__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45535);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e45562;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5678__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__45585 = state_45535;
state_45535 = G__45585;
continue;
}
} else
{return ret_value__5678__auto__;
}
break;
}
});
state_machine__5677__auto__ = function(state_45535){
switch(arguments.length){
case 0:
return state_machine__5677__auto____0.call(this);
case 1:
return state_machine__5677__auto____1.call(this,state_45535);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5677__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5677__auto____0;
state_machine__5677__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5677__auto____1;
return state_machine__5677__auto__;
})()
;})(switch__5676__auto__,c__5691__auto___45565,map__45506,map__45506__$1,delay,log))
})();var state__5693__auto__ = (function (){var statearr_45564 = f__5692__auto__.call(null);(statearr_45564[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5691__auto___45565);
return statearr_45564;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5693__auto__);
});})(c__5691__auto___45565,map__45506,map__45506__$1,delay,log))
);
return null;
};
var dorun_async = function (ch,var_args){
var p__45446 = null;if (arguments.length > 1) {
  p__45446 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return dorun_async__delegate.call(this,ch,p__45446);};
dorun_async.cljs$lang$maxFixedArity = 1;
dorun_async.cljs$lang$applyTo = (function (arglist__45586){
var ch = cljs.core.first(arglist__45586);
var p__45446 = cljs.core.rest(arglist__45586);
return dorun_async__delegate(ch,p__45446);
});
dorun_async.cljs$core$IFn$_invoke$arity$variadic = dorun_async__delegate;
return dorun_async;
})()
;

//# sourceMappingURL=async.js.map