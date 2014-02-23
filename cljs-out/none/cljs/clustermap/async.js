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
map_async.cljs$lang$applyTo = (function (arglist__11575){
var f = cljs.core.first(arglist__11575);
var colls = cljs.core.rest(arglist__11575);
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
var dorun_async__delegate = function (ch,p__11576){var map__11636 = p__11576;var map__11636__$1 = ((cljs.core.seq_QMARK_.call(null,map__11636))?cljs.core.apply.call(null,cljs.core.hash_map,map__11636):map__11636);var delay = cljs.core.get.call(null,map__11636__$1,new cljs.core.Keyword(null,"delay","delay",1109372149));var log = cljs.core.get.call(null,map__11636__$1,new cljs.core.Keyword(null,"log","log",1014011574));var c__5521__auto___11695 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_11665){var state_val_11666 = (state_11665[1]);if((state_val_11666 === 1))
{var state_11665__$1 = state_11665;var statearr_11667_11696 = state_11665__$1;(statearr_11667_11696[2] = null);
(statearr_11667_11696[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11666 === 2))
{var state_11665__$1 = state_11665;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11665__$1,4,ch);
} else
{if((state_val_11666 === 3))
{var inst_11663 = (state_11665[2]);var state_11665__$1 = state_11665;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11665__$1,inst_11663);
} else
{if((state_val_11666 === 4))
{var inst_11639 = (state_11665[7]);var inst_11639__$1 = (state_11665[2]);var state_11665__$1 = (function (){var statearr_11668 = state_11665;(statearr_11668[7] = inst_11639__$1);
return statearr_11668;
})();if(cljs.core.truth_(inst_11639__$1))
{var statearr_11669_11697 = state_11665__$1;(statearr_11669_11697[1] = 5);
} else
{var statearr_11670_11698 = state_11665__$1;(statearr_11670_11698[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11666 === 5))
{var state_11665__$1 = state_11665;if(cljs.core.truth_(delay))
{var statearr_11671_11699 = state_11665__$1;(statearr_11671_11699[1] = 8);
} else
{var statearr_11672_11700 = state_11665__$1;(statearr_11672_11700[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11666 === 6))
{var state_11665__$1 = state_11665;var statearr_11673_11701 = state_11665__$1;(statearr_11673_11701[2] = null);
(statearr_11673_11701[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11666 === 7))
{var inst_11656 = (state_11665[2]);var state_11665__$1 = state_11665;if(cljs.core.truth_(inst_11656))
{var statearr_11674_11702 = state_11665__$1;(statearr_11674_11702[1] = 15);
} else
{var statearr_11675_11703 = state_11665__$1;(statearr_11675_11703[1] = 16);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11666 === 8))
{var inst_11642 = cljs.core.async.timeout.call(null,delay);var state_11665__$1 = state_11665;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11665__$1,11,inst_11642);
} else
{if((state_val_11666 === 9))
{var state_11665__$1 = state_11665;var statearr_11676_11704 = state_11665__$1;(statearr_11676_11704[2] = null);
(statearr_11676_11704[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11666 === 10))
{var inst_11647 = (state_11665[2]);var state_11665__$1 = (function (){var statearr_11677 = state_11665;(statearr_11677[8] = inst_11647);
return statearr_11677;
})();if(cljs.core.truth_(log))
{var statearr_11678_11705 = state_11665__$1;(statearr_11678_11705[1] = 12);
} else
{var statearr_11679_11706 = state_11665__$1;(statearr_11679_11706[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11666 === 11))
{var inst_11644 = (state_11665[2]);var state_11665__$1 = state_11665;var statearr_11680_11707 = state_11665__$1;(statearr_11680_11707[2] = inst_11644);
(statearr_11680_11707[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11666 === 12))
{var inst_11639 = (state_11665[7]);var inst_11649 = cljs.core.clj__GT_js.call(null,inst_11639);var inst_11650 = console.log(inst_11649);var state_11665__$1 = state_11665;var statearr_11681_11708 = state_11665__$1;(statearr_11681_11708[2] = inst_11650);
(statearr_11681_11708[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11666 === 13))
{var state_11665__$1 = state_11665;var statearr_11682_11709 = state_11665__$1;(statearr_11682_11709[2] = null);
(statearr_11682_11709[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11666 === 14))
{var inst_11639 = (state_11665[7]);var inst_11653 = (state_11665[2]);var state_11665__$1 = (function (){var statearr_11683 = state_11665;(statearr_11683[9] = inst_11653);
return statearr_11683;
})();var statearr_11684_11710 = state_11665__$1;(statearr_11684_11710[2] = inst_11639);
(statearr_11684_11710[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11666 === 15))
{var state_11665__$1 = state_11665;var statearr_11685_11711 = state_11665__$1;(statearr_11685_11711[2] = null);
(statearr_11685_11711[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11666 === 16))
{var state_11665__$1 = state_11665;var statearr_11686_11712 = state_11665__$1;(statearr_11686_11712[2] = null);
(statearr_11686_11712[1] = 17);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11666 === 17))
{var inst_11661 = (state_11665[2]);var state_11665__$1 = state_11665;var statearr_11687_11713 = state_11665__$1;(statearr_11687_11713[2] = inst_11661);
(statearr_11687_11713[1] = 3);
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
var state_machine__5507__auto____0 = (function (){var statearr_11691 = [null,null,null,null,null,null,null,null,null,null];(statearr_11691[0] = state_machine__5507__auto__);
(statearr_11691[1] = 1);
return statearr_11691;
});
var state_machine__5507__auto____1 = (function (state_11665){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_11665);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e11692){if((e11692 instanceof Object))
{var ex__5510__auto__ = e11692;var statearr_11693_11714 = state_11665;(statearr_11693_11714[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11665);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11692;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11715 = state_11665;
state_11665 = G__11715;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_11665){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_11665);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_11694 = f__5522__auto__.call(null);(statearr_11694[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___11695);
return statearr_11694;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5523__auto__);
}));
return null;
};
var dorun_async = function (ch,var_args){
var p__11576 = null;if (arguments.length > 1) {
  p__11576 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return dorun_async__delegate.call(this,ch,p__11576);};
dorun_async.cljs$lang$maxFixedArity = 1;
dorun_async.cljs$lang$applyTo = (function (arglist__11716){
var ch = cljs.core.first(arglist__11716);
var p__11576 = cljs.core.rest(arglist__11716);
return dorun_async__delegate(ch,p__11576);
});
dorun_async.cljs$core$IFn$_invoke$arity$variadic = dorun_async__delegate;
return dorun_async;
})()
;

//# sourceMappingURL=async.js.map