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
map_async.cljs$lang$applyTo = (function (arglist__11553){
var f = cljs.core.first(arglist__11553);
var colls = cljs.core.rest(arglist__11553);
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
var dorun_async__delegate = function (ch,p__11554){var map__11614 = p__11554;var map__11614__$1 = ((cljs.core.seq_QMARK_.call(null,map__11614))?cljs.core.apply.call(null,cljs.core.hash_map,map__11614):map__11614);var delay = cljs.core.get.call(null,map__11614__$1,new cljs.core.Keyword(null,"delay","delay",1109372149));var log = cljs.core.get.call(null,map__11614__$1,new cljs.core.Keyword(null,"log","log",1014011574));var c__5521__auto___11673 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_11643){var state_val_11644 = (state_11643[1]);if((state_val_11644 === 1))
{var state_11643__$1 = state_11643;var statearr_11645_11674 = state_11643__$1;(statearr_11645_11674[2] = null);
(statearr_11645_11674[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11644 === 2))
{var state_11643__$1 = state_11643;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11643__$1,4,ch);
} else
{if((state_val_11644 === 3))
{var inst_11641 = (state_11643[2]);var state_11643__$1 = state_11643;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11643__$1,inst_11641);
} else
{if((state_val_11644 === 4))
{var inst_11617 = (state_11643[7]);var inst_11617__$1 = (state_11643[2]);var state_11643__$1 = (function (){var statearr_11646 = state_11643;(statearr_11646[7] = inst_11617__$1);
return statearr_11646;
})();if(cljs.core.truth_(inst_11617__$1))
{var statearr_11647_11675 = state_11643__$1;(statearr_11647_11675[1] = 5);
} else
{var statearr_11648_11676 = state_11643__$1;(statearr_11648_11676[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11644 === 5))
{var state_11643__$1 = state_11643;if(cljs.core.truth_(delay))
{var statearr_11649_11677 = state_11643__$1;(statearr_11649_11677[1] = 8);
} else
{var statearr_11650_11678 = state_11643__$1;(statearr_11650_11678[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11644 === 6))
{var state_11643__$1 = state_11643;var statearr_11651_11679 = state_11643__$1;(statearr_11651_11679[2] = null);
(statearr_11651_11679[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11644 === 7))
{var inst_11634 = (state_11643[2]);var state_11643__$1 = state_11643;if(cljs.core.truth_(inst_11634))
{var statearr_11652_11680 = state_11643__$1;(statearr_11652_11680[1] = 15);
} else
{var statearr_11653_11681 = state_11643__$1;(statearr_11653_11681[1] = 16);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11644 === 8))
{var inst_11620 = cljs.core.async.timeout.call(null,delay);var state_11643__$1 = state_11643;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11643__$1,11,inst_11620);
} else
{if((state_val_11644 === 9))
{var state_11643__$1 = state_11643;var statearr_11654_11682 = state_11643__$1;(statearr_11654_11682[2] = null);
(statearr_11654_11682[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11644 === 10))
{var inst_11625 = (state_11643[2]);var state_11643__$1 = (function (){var statearr_11655 = state_11643;(statearr_11655[8] = inst_11625);
return statearr_11655;
})();if(cljs.core.truth_(log))
{var statearr_11656_11683 = state_11643__$1;(statearr_11656_11683[1] = 12);
} else
{var statearr_11657_11684 = state_11643__$1;(statearr_11657_11684[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11644 === 11))
{var inst_11622 = (state_11643[2]);var state_11643__$1 = state_11643;var statearr_11658_11685 = state_11643__$1;(statearr_11658_11685[2] = inst_11622);
(statearr_11658_11685[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11644 === 12))
{var inst_11617 = (state_11643[7]);var inst_11627 = cljs.core.clj__GT_js.call(null,inst_11617);var inst_11628 = console.log(inst_11627);var state_11643__$1 = state_11643;var statearr_11659_11686 = state_11643__$1;(statearr_11659_11686[2] = inst_11628);
(statearr_11659_11686[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11644 === 13))
{var state_11643__$1 = state_11643;var statearr_11660_11687 = state_11643__$1;(statearr_11660_11687[2] = null);
(statearr_11660_11687[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11644 === 14))
{var inst_11617 = (state_11643[7]);var inst_11631 = (state_11643[2]);var state_11643__$1 = (function (){var statearr_11661 = state_11643;(statearr_11661[9] = inst_11631);
return statearr_11661;
})();var statearr_11662_11688 = state_11643__$1;(statearr_11662_11688[2] = inst_11617);
(statearr_11662_11688[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11644 === 15))
{var state_11643__$1 = state_11643;var statearr_11663_11689 = state_11643__$1;(statearr_11663_11689[2] = null);
(statearr_11663_11689[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11644 === 16))
{var state_11643__$1 = state_11643;var statearr_11664_11690 = state_11643__$1;(statearr_11664_11690[2] = null);
(statearr_11664_11690[1] = 17);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11644 === 17))
{var inst_11639 = (state_11643[2]);var state_11643__$1 = state_11643;var statearr_11665_11691 = state_11643__$1;(statearr_11665_11691[2] = inst_11639);
(statearr_11665_11691[1] = 3);
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
var state_machine__5507__auto____0 = (function (){var statearr_11669 = [null,null,null,null,null,null,null,null,null,null];(statearr_11669[0] = state_machine__5507__auto__);
(statearr_11669[1] = 1);
return statearr_11669;
});
var state_machine__5507__auto____1 = (function (state_11643){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_11643);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e11670){if((e11670 instanceof Object))
{var ex__5510__auto__ = e11670;var statearr_11671_11692 = state_11643;(statearr_11671_11692[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11643);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11670;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11693 = state_11643;
state_11643 = G__11693;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_11643){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_11643);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_11672 = f__5522__auto__.call(null);(statearr_11672[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___11673);
return statearr_11672;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5523__auto__);
}));
return null;
};
var dorun_async = function (ch,var_args){
var p__11554 = null;if (arguments.length > 1) {
  p__11554 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return dorun_async__delegate.call(this,ch,p__11554);};
dorun_async.cljs$lang$maxFixedArity = 1;
dorun_async.cljs$lang$applyTo = (function (arglist__11694){
var ch = cljs.core.first(arglist__11694);
var p__11554 = cljs.core.rest(arglist__11694);
return dorun_async__delegate(ch,p__11554);
});
dorun_async.cljs$core$IFn$_invoke$arity$variadic = dorun_async__delegate;
return dorun_async;
})()
;

//# sourceMappingURL=async.js.map