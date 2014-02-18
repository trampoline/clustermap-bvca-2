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
map_async.cljs$lang$applyTo = (function (arglist__11560){
var f = cljs.core.first(arglist__11560);
var colls = cljs.core.rest(arglist__11560);
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
var dorun_async__delegate = function (ch,p__11561){var map__11621 = p__11561;var map__11621__$1 = ((cljs.core.seq_QMARK_.call(null,map__11621))?cljs.core.apply.call(null,cljs.core.hash_map,map__11621):map__11621);var delay = cljs.core.get.call(null,map__11621__$1,new cljs.core.Keyword(null,"delay","delay",1109372149));var log = cljs.core.get.call(null,map__11621__$1,new cljs.core.Keyword(null,"log","log",1014011574));var c__5521__auto___11680 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_11650){var state_val_11651 = (state_11650[1]);if((state_val_11651 === 1))
{var state_11650__$1 = state_11650;var statearr_11652_11681 = state_11650__$1;(statearr_11652_11681[2] = null);
(statearr_11652_11681[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11651 === 2))
{var state_11650__$1 = state_11650;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11650__$1,4,ch);
} else
{if((state_val_11651 === 3))
{var inst_11648 = (state_11650[2]);var state_11650__$1 = state_11650;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11650__$1,inst_11648);
} else
{if((state_val_11651 === 4))
{var inst_11624 = (state_11650[7]);var inst_11624__$1 = (state_11650[2]);var state_11650__$1 = (function (){var statearr_11653 = state_11650;(statearr_11653[7] = inst_11624__$1);
return statearr_11653;
})();if(cljs.core.truth_(inst_11624__$1))
{var statearr_11654_11682 = state_11650__$1;(statearr_11654_11682[1] = 5);
} else
{var statearr_11655_11683 = state_11650__$1;(statearr_11655_11683[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11651 === 5))
{var state_11650__$1 = state_11650;if(cljs.core.truth_(delay))
{var statearr_11656_11684 = state_11650__$1;(statearr_11656_11684[1] = 8);
} else
{var statearr_11657_11685 = state_11650__$1;(statearr_11657_11685[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11651 === 6))
{var state_11650__$1 = state_11650;var statearr_11658_11686 = state_11650__$1;(statearr_11658_11686[2] = null);
(statearr_11658_11686[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11651 === 7))
{var inst_11641 = (state_11650[2]);var state_11650__$1 = state_11650;if(cljs.core.truth_(inst_11641))
{var statearr_11659_11687 = state_11650__$1;(statearr_11659_11687[1] = 15);
} else
{var statearr_11660_11688 = state_11650__$1;(statearr_11660_11688[1] = 16);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11651 === 8))
{var inst_11627 = cljs.core.async.timeout.call(null,delay);var state_11650__$1 = state_11650;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11650__$1,11,inst_11627);
} else
{if((state_val_11651 === 9))
{var state_11650__$1 = state_11650;var statearr_11661_11689 = state_11650__$1;(statearr_11661_11689[2] = null);
(statearr_11661_11689[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11651 === 10))
{var inst_11632 = (state_11650[2]);var state_11650__$1 = (function (){var statearr_11662 = state_11650;(statearr_11662[8] = inst_11632);
return statearr_11662;
})();if(cljs.core.truth_(log))
{var statearr_11663_11690 = state_11650__$1;(statearr_11663_11690[1] = 12);
} else
{var statearr_11664_11691 = state_11650__$1;(statearr_11664_11691[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11651 === 11))
{var inst_11629 = (state_11650[2]);var state_11650__$1 = state_11650;var statearr_11665_11692 = state_11650__$1;(statearr_11665_11692[2] = inst_11629);
(statearr_11665_11692[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11651 === 12))
{var inst_11624 = (state_11650[7]);var inst_11634 = cljs.core.clj__GT_js.call(null,inst_11624);var inst_11635 = console.log(inst_11634);var state_11650__$1 = state_11650;var statearr_11666_11693 = state_11650__$1;(statearr_11666_11693[2] = inst_11635);
(statearr_11666_11693[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11651 === 13))
{var state_11650__$1 = state_11650;var statearr_11667_11694 = state_11650__$1;(statearr_11667_11694[2] = null);
(statearr_11667_11694[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11651 === 14))
{var inst_11624 = (state_11650[7]);var inst_11638 = (state_11650[2]);var state_11650__$1 = (function (){var statearr_11668 = state_11650;(statearr_11668[9] = inst_11638);
return statearr_11668;
})();var statearr_11669_11695 = state_11650__$1;(statearr_11669_11695[2] = inst_11624);
(statearr_11669_11695[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11651 === 15))
{var state_11650__$1 = state_11650;var statearr_11670_11696 = state_11650__$1;(statearr_11670_11696[2] = null);
(statearr_11670_11696[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11651 === 16))
{var state_11650__$1 = state_11650;var statearr_11671_11697 = state_11650__$1;(statearr_11671_11697[2] = null);
(statearr_11671_11697[1] = 17);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11651 === 17))
{var inst_11646 = (state_11650[2]);var state_11650__$1 = state_11650;var statearr_11672_11698 = state_11650__$1;(statearr_11672_11698[2] = inst_11646);
(statearr_11672_11698[1] = 3);
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
var state_machine__5507__auto____0 = (function (){var statearr_11676 = [null,null,null,null,null,null,null,null,null,null];(statearr_11676[0] = state_machine__5507__auto__);
(statearr_11676[1] = 1);
return statearr_11676;
});
var state_machine__5507__auto____1 = (function (state_11650){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_11650);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e11677){if((e11677 instanceof Object))
{var ex__5510__auto__ = e11677;var statearr_11678_11699 = state_11650;(statearr_11678_11699[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11650);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11677;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11700 = state_11650;
state_11650 = G__11700;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_11650){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_11650);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_11679 = f__5522__auto__.call(null);(statearr_11679[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___11680);
return statearr_11679;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5523__auto__);
}));
return null;
};
var dorun_async = function (ch,var_args){
var p__11561 = null;if (arguments.length > 1) {
  p__11561 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return dorun_async__delegate.call(this,ch,p__11561);};
dorun_async.cljs$lang$maxFixedArity = 1;
dorun_async.cljs$lang$applyTo = (function (arglist__11701){
var ch = cljs.core.first(arglist__11701);
var p__11561 = cljs.core.rest(arglist__11701);
return dorun_async__delegate(ch,p__11561);
});
dorun_async.cljs$core$IFn$_invoke$arity$variadic = dorun_async__delegate;
return dorun_async;
})()
;

//# sourceMappingURL=async.js.map