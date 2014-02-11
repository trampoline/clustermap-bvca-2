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
map_async.cljs$lang$applyTo = (function (arglist__31583){
var f = cljs.core.first(arglist__31583);
var colls = cljs.core.rest(arglist__31583);
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
var dorun_async__delegate = function (ch,p__31584){var map__31644 = p__31584;var map__31644__$1 = ((cljs.core.seq_QMARK_.call(null,map__31644))?cljs.core.apply.call(null,cljs.core.hash_map,map__31644):map__31644);var delay = cljs.core.get.call(null,map__31644__$1,new cljs.core.Keyword(null,"delay","delay",1109372149));var log = cljs.core.get.call(null,map__31644__$1,new cljs.core.Keyword(null,"log","log",1014011574));var c__5521__auto___31703 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_31673){var state_val_31674 = (state_31673[1]);if((state_val_31674 === 1))
{var state_31673__$1 = state_31673;var statearr_31675_31704 = state_31673__$1;(statearr_31675_31704[2] = null);
(statearr_31675_31704[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31674 === 2))
{var state_31673__$1 = state_31673;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31673__$1,4,ch);
} else
{if((state_val_31674 === 3))
{var inst_31671 = (state_31673[2]);var state_31673__$1 = state_31673;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31673__$1,inst_31671);
} else
{if((state_val_31674 === 4))
{var inst_31647 = (state_31673[7]);var inst_31647__$1 = (state_31673[2]);var state_31673__$1 = (function (){var statearr_31676 = state_31673;(statearr_31676[7] = inst_31647__$1);
return statearr_31676;
})();if(cljs.core.truth_(inst_31647__$1))
{var statearr_31677_31705 = state_31673__$1;(statearr_31677_31705[1] = 5);
} else
{var statearr_31678_31706 = state_31673__$1;(statearr_31678_31706[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31674 === 5))
{var state_31673__$1 = state_31673;if(cljs.core.truth_(delay))
{var statearr_31679_31707 = state_31673__$1;(statearr_31679_31707[1] = 8);
} else
{var statearr_31680_31708 = state_31673__$1;(statearr_31680_31708[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31674 === 6))
{var state_31673__$1 = state_31673;var statearr_31681_31709 = state_31673__$1;(statearr_31681_31709[2] = null);
(statearr_31681_31709[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31674 === 7))
{var inst_31664 = (state_31673[2]);var state_31673__$1 = state_31673;if(cljs.core.truth_(inst_31664))
{var statearr_31682_31710 = state_31673__$1;(statearr_31682_31710[1] = 15);
} else
{var statearr_31683_31711 = state_31673__$1;(statearr_31683_31711[1] = 16);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31674 === 8))
{var inst_31650 = cljs.core.async.timeout.call(null,delay);var state_31673__$1 = state_31673;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31673__$1,11,inst_31650);
} else
{if((state_val_31674 === 9))
{var state_31673__$1 = state_31673;var statearr_31684_31712 = state_31673__$1;(statearr_31684_31712[2] = null);
(statearr_31684_31712[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31674 === 10))
{var inst_31655 = (state_31673[2]);var state_31673__$1 = (function (){var statearr_31685 = state_31673;(statearr_31685[8] = inst_31655);
return statearr_31685;
})();if(cljs.core.truth_(log))
{var statearr_31686_31713 = state_31673__$1;(statearr_31686_31713[1] = 12);
} else
{var statearr_31687_31714 = state_31673__$1;(statearr_31687_31714[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31674 === 11))
{var inst_31652 = (state_31673[2]);var state_31673__$1 = state_31673;var statearr_31688_31715 = state_31673__$1;(statearr_31688_31715[2] = inst_31652);
(statearr_31688_31715[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31674 === 12))
{var inst_31647 = (state_31673[7]);var inst_31657 = cljs.core.clj__GT_js.call(null,inst_31647);var inst_31658 = console.log(inst_31657);var state_31673__$1 = state_31673;var statearr_31689_31716 = state_31673__$1;(statearr_31689_31716[2] = inst_31658);
(statearr_31689_31716[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31674 === 13))
{var state_31673__$1 = state_31673;var statearr_31690_31717 = state_31673__$1;(statearr_31690_31717[2] = null);
(statearr_31690_31717[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31674 === 14))
{var inst_31647 = (state_31673[7]);var inst_31661 = (state_31673[2]);var state_31673__$1 = (function (){var statearr_31691 = state_31673;(statearr_31691[9] = inst_31661);
return statearr_31691;
})();var statearr_31692_31718 = state_31673__$1;(statearr_31692_31718[2] = inst_31647);
(statearr_31692_31718[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31674 === 15))
{var state_31673__$1 = state_31673;var statearr_31693_31719 = state_31673__$1;(statearr_31693_31719[2] = null);
(statearr_31693_31719[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31674 === 16))
{var state_31673__$1 = state_31673;var statearr_31694_31720 = state_31673__$1;(statearr_31694_31720[2] = null);
(statearr_31694_31720[1] = 17);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31674 === 17))
{var inst_31669 = (state_31673[2]);var state_31673__$1 = state_31673;var statearr_31695_31721 = state_31673__$1;(statearr_31695_31721[2] = inst_31669);
(statearr_31695_31721[1] = 3);
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
var state_machine__5507__auto____0 = (function (){var statearr_31699 = [null,null,null,null,null,null,null,null,null,null];(statearr_31699[0] = state_machine__5507__auto__);
(statearr_31699[1] = 1);
return statearr_31699;
});
var state_machine__5507__auto____1 = (function (state_31673){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_31673);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e31700){if((e31700 instanceof Object))
{var ex__5510__auto__ = e31700;var statearr_31701_31722 = state_31673;(statearr_31701_31722[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31673);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e31700;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__31723 = state_31673;
state_31673 = G__31723;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_31673){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_31673);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_31702 = f__5522__auto__.call(null);(statearr_31702[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___31703);
return statearr_31702;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5523__auto__);
}));
return null;
};
var dorun_async = function (ch,var_args){
var p__31584 = null;if (arguments.length > 1) {
  p__31584 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return dorun_async__delegate.call(this,ch,p__31584);};
dorun_async.cljs$lang$maxFixedArity = 1;
dorun_async.cljs$lang$applyTo = (function (arglist__31724){
var ch = cljs.core.first(arglist__31724);
var p__31584 = cljs.core.rest(arglist__31724);
return dorun_async__delegate(ch,p__31584);
});
dorun_async.cljs$core$IFn$_invoke$arity$variadic = dorun_async__delegate;
return dorun_async;
})()
;
