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
map_async.cljs$lang$applyTo = (function (arglist__11555){
var f = cljs.core.first(arglist__11555);
var colls = cljs.core.rest(arglist__11555);
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
var dorun_async__delegate = function (ch,p__11556){var map__11616 = p__11556;var map__11616__$1 = ((cljs.core.seq_QMARK_.call(null,map__11616))?cljs.core.apply.call(null,cljs.core.hash_map,map__11616):map__11616);var delay = cljs.core.get.call(null,map__11616__$1,new cljs.core.Keyword(null,"delay","delay",1109372149));var log = cljs.core.get.call(null,map__11616__$1,new cljs.core.Keyword(null,"log","log",1014011574));var c__5521__auto___11675 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_11645){var state_val_11646 = (state_11645[1]);if((state_val_11646 === 1))
{var state_11645__$1 = state_11645;var statearr_11647_11676 = state_11645__$1;(statearr_11647_11676[2] = null);
(statearr_11647_11676[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11646 === 2))
{var state_11645__$1 = state_11645;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11645__$1,4,ch);
} else
{if((state_val_11646 === 3))
{var inst_11643 = (state_11645[2]);var state_11645__$1 = state_11645;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11645__$1,inst_11643);
} else
{if((state_val_11646 === 4))
{var inst_11619 = (state_11645[7]);var inst_11619__$1 = (state_11645[2]);var state_11645__$1 = (function (){var statearr_11648 = state_11645;(statearr_11648[7] = inst_11619__$1);
return statearr_11648;
})();if(cljs.core.truth_(inst_11619__$1))
{var statearr_11649_11677 = state_11645__$1;(statearr_11649_11677[1] = 5);
} else
{var statearr_11650_11678 = state_11645__$1;(statearr_11650_11678[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11646 === 5))
{var state_11645__$1 = state_11645;if(cljs.core.truth_(delay))
{var statearr_11651_11679 = state_11645__$1;(statearr_11651_11679[1] = 8);
} else
{var statearr_11652_11680 = state_11645__$1;(statearr_11652_11680[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11646 === 6))
{var state_11645__$1 = state_11645;var statearr_11653_11681 = state_11645__$1;(statearr_11653_11681[2] = null);
(statearr_11653_11681[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11646 === 7))
{var inst_11636 = (state_11645[2]);var state_11645__$1 = state_11645;if(cljs.core.truth_(inst_11636))
{var statearr_11654_11682 = state_11645__$1;(statearr_11654_11682[1] = 15);
} else
{var statearr_11655_11683 = state_11645__$1;(statearr_11655_11683[1] = 16);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11646 === 8))
{var inst_11622 = cljs.core.async.timeout.call(null,delay);var state_11645__$1 = state_11645;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11645__$1,11,inst_11622);
} else
{if((state_val_11646 === 9))
{var state_11645__$1 = state_11645;var statearr_11656_11684 = state_11645__$1;(statearr_11656_11684[2] = null);
(statearr_11656_11684[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11646 === 10))
{var inst_11627 = (state_11645[2]);var state_11645__$1 = (function (){var statearr_11657 = state_11645;(statearr_11657[8] = inst_11627);
return statearr_11657;
})();if(cljs.core.truth_(log))
{var statearr_11658_11685 = state_11645__$1;(statearr_11658_11685[1] = 12);
} else
{var statearr_11659_11686 = state_11645__$1;(statearr_11659_11686[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11646 === 11))
{var inst_11624 = (state_11645[2]);var state_11645__$1 = state_11645;var statearr_11660_11687 = state_11645__$1;(statearr_11660_11687[2] = inst_11624);
(statearr_11660_11687[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11646 === 12))
{var inst_11619 = (state_11645[7]);var inst_11629 = cljs.core.clj__GT_js.call(null,inst_11619);var inst_11630 = console.log(inst_11629);var state_11645__$1 = state_11645;var statearr_11661_11688 = state_11645__$1;(statearr_11661_11688[2] = inst_11630);
(statearr_11661_11688[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11646 === 13))
{var state_11645__$1 = state_11645;var statearr_11662_11689 = state_11645__$1;(statearr_11662_11689[2] = null);
(statearr_11662_11689[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11646 === 14))
{var inst_11619 = (state_11645[7]);var inst_11633 = (state_11645[2]);var state_11645__$1 = (function (){var statearr_11663 = state_11645;(statearr_11663[9] = inst_11633);
return statearr_11663;
})();var statearr_11664_11690 = state_11645__$1;(statearr_11664_11690[2] = inst_11619);
(statearr_11664_11690[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11646 === 15))
{var state_11645__$1 = state_11645;var statearr_11665_11691 = state_11645__$1;(statearr_11665_11691[2] = null);
(statearr_11665_11691[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11646 === 16))
{var state_11645__$1 = state_11645;var statearr_11666_11692 = state_11645__$1;(statearr_11666_11692[2] = null);
(statearr_11666_11692[1] = 17);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11646 === 17))
{var inst_11641 = (state_11645[2]);var state_11645__$1 = state_11645;var statearr_11667_11693 = state_11645__$1;(statearr_11667_11693[2] = inst_11641);
(statearr_11667_11693[1] = 3);
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
var state_machine__5507__auto____0 = (function (){var statearr_11671 = [null,null,null,null,null,null,null,null,null,null];(statearr_11671[0] = state_machine__5507__auto__);
(statearr_11671[1] = 1);
return statearr_11671;
});
var state_machine__5507__auto____1 = (function (state_11645){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_11645);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e11672){if((e11672 instanceof Object))
{var ex__5510__auto__ = e11672;var statearr_11673_11694 = state_11645;(statearr_11673_11694[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11645);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11672;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11695 = state_11645;
state_11645 = G__11695;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_11645){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_11645);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_11674 = f__5522__auto__.call(null);(statearr_11674[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___11675);
return statearr_11674;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5523__auto__);
}));
return null;
};
var dorun_async = function (ch,var_args){
var p__11556 = null;if (arguments.length > 1) {
  p__11556 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return dorun_async__delegate.call(this,ch,p__11556);};
dorun_async.cljs$lang$maxFixedArity = 1;
dorun_async.cljs$lang$applyTo = (function (arglist__11696){
var ch = cljs.core.first(arglist__11696);
var p__11556 = cljs.core.rest(arglist__11696);
return dorun_async__delegate(ch,p__11556);
});
dorun_async.cljs$core$IFn$_invoke$arity$variadic = dorun_async__delegate;
return dorun_async;
})()
;

//# sourceMappingURL=async.js.map