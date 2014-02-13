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
map_async.cljs$lang$applyTo = (function (arglist__31643){
var f = cljs.core.first(arglist__31643);
var colls = cljs.core.rest(arglist__31643);
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
var dorun_async__delegate = function (ch,p__31644){var map__31704 = p__31644;var map__31704__$1 = ((cljs.core.seq_QMARK_.call(null,map__31704))?cljs.core.apply.call(null,cljs.core.hash_map,map__31704):map__31704);var delay = cljs.core.get.call(null,map__31704__$1,new cljs.core.Keyword(null,"delay","delay",1109372149));var log = cljs.core.get.call(null,map__31704__$1,new cljs.core.Keyword(null,"log","log",1014011574));var c__5521__auto___31763 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_31733){var state_val_31734 = (state_31733[1]);if((state_val_31734 === 1))
{var state_31733__$1 = state_31733;var statearr_31735_31764 = state_31733__$1;(statearr_31735_31764[2] = null);
(statearr_31735_31764[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31734 === 2))
{var state_31733__$1 = state_31733;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31733__$1,4,ch);
} else
{if((state_val_31734 === 3))
{var inst_31731 = (state_31733[2]);var state_31733__$1 = state_31733;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31733__$1,inst_31731);
} else
{if((state_val_31734 === 4))
{var inst_31707 = (state_31733[7]);var inst_31707__$1 = (state_31733[2]);var state_31733__$1 = (function (){var statearr_31736 = state_31733;(statearr_31736[7] = inst_31707__$1);
return statearr_31736;
})();if(cljs.core.truth_(inst_31707__$1))
{var statearr_31737_31765 = state_31733__$1;(statearr_31737_31765[1] = 5);
} else
{var statearr_31738_31766 = state_31733__$1;(statearr_31738_31766[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31734 === 5))
{var state_31733__$1 = state_31733;if(cljs.core.truth_(delay))
{var statearr_31739_31767 = state_31733__$1;(statearr_31739_31767[1] = 8);
} else
{var statearr_31740_31768 = state_31733__$1;(statearr_31740_31768[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31734 === 6))
{var state_31733__$1 = state_31733;var statearr_31741_31769 = state_31733__$1;(statearr_31741_31769[2] = null);
(statearr_31741_31769[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31734 === 7))
{var inst_31724 = (state_31733[2]);var state_31733__$1 = state_31733;if(cljs.core.truth_(inst_31724))
{var statearr_31742_31770 = state_31733__$1;(statearr_31742_31770[1] = 15);
} else
{var statearr_31743_31771 = state_31733__$1;(statearr_31743_31771[1] = 16);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31734 === 8))
{var inst_31710 = cljs.core.async.timeout.call(null,delay);var state_31733__$1 = state_31733;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31733__$1,11,inst_31710);
} else
{if((state_val_31734 === 9))
{var state_31733__$1 = state_31733;var statearr_31744_31772 = state_31733__$1;(statearr_31744_31772[2] = null);
(statearr_31744_31772[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31734 === 10))
{var inst_31715 = (state_31733[2]);var state_31733__$1 = (function (){var statearr_31745 = state_31733;(statearr_31745[8] = inst_31715);
return statearr_31745;
})();if(cljs.core.truth_(log))
{var statearr_31746_31773 = state_31733__$1;(statearr_31746_31773[1] = 12);
} else
{var statearr_31747_31774 = state_31733__$1;(statearr_31747_31774[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31734 === 11))
{var inst_31712 = (state_31733[2]);var state_31733__$1 = state_31733;var statearr_31748_31775 = state_31733__$1;(statearr_31748_31775[2] = inst_31712);
(statearr_31748_31775[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31734 === 12))
{var inst_31707 = (state_31733[7]);var inst_31717 = cljs.core.clj__GT_js.call(null,inst_31707);var inst_31718 = console.log(inst_31717);var state_31733__$1 = state_31733;var statearr_31749_31776 = state_31733__$1;(statearr_31749_31776[2] = inst_31718);
(statearr_31749_31776[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31734 === 13))
{var state_31733__$1 = state_31733;var statearr_31750_31777 = state_31733__$1;(statearr_31750_31777[2] = null);
(statearr_31750_31777[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31734 === 14))
{var inst_31707 = (state_31733[7]);var inst_31721 = (state_31733[2]);var state_31733__$1 = (function (){var statearr_31751 = state_31733;(statearr_31751[9] = inst_31721);
return statearr_31751;
})();var statearr_31752_31778 = state_31733__$1;(statearr_31752_31778[2] = inst_31707);
(statearr_31752_31778[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31734 === 15))
{var state_31733__$1 = state_31733;var statearr_31753_31779 = state_31733__$1;(statearr_31753_31779[2] = null);
(statearr_31753_31779[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31734 === 16))
{var state_31733__$1 = state_31733;var statearr_31754_31780 = state_31733__$1;(statearr_31754_31780[2] = null);
(statearr_31754_31780[1] = 17);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31734 === 17))
{var inst_31729 = (state_31733[2]);var state_31733__$1 = state_31733;var statearr_31755_31781 = state_31733__$1;(statearr_31755_31781[2] = inst_31729);
(statearr_31755_31781[1] = 3);
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
var state_machine__5507__auto____0 = (function (){var statearr_31759 = [null,null,null,null,null,null,null,null,null,null];(statearr_31759[0] = state_machine__5507__auto__);
(statearr_31759[1] = 1);
return statearr_31759;
});
var state_machine__5507__auto____1 = (function (state_31733){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_31733);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e31760){if((e31760 instanceof Object))
{var ex__5510__auto__ = e31760;var statearr_31761_31782 = state_31733;(statearr_31761_31782[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31733);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e31760;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__31783 = state_31733;
state_31733 = G__31783;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_31733){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_31733);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_31762 = f__5522__auto__.call(null);(statearr_31762[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___31763);
return statearr_31762;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5523__auto__);
}));
return null;
};
var dorun_async = function (ch,var_args){
var p__31644 = null;if (arguments.length > 1) {
  p__31644 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return dorun_async__delegate.call(this,ch,p__31644);};
dorun_async.cljs$lang$maxFixedArity = 1;
dorun_async.cljs$lang$applyTo = (function (arglist__31784){
var ch = cljs.core.first(arglist__31784);
var p__31644 = cljs.core.rest(arglist__31784);
return dorun_async__delegate(ch,p__31644);
});
dorun_async.cljs$core$IFn$_invoke$arity$variadic = dorun_async__delegate;
return dorun_async;
})()
;
