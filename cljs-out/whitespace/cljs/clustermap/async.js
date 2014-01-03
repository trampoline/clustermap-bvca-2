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
map_async.cljs$lang$applyTo = (function (arglist__24633){
var f = cljs.core.first(arglist__24633);
var colls = cljs.core.rest(arglist__24633);
return map_async__delegate(f,colls);
});
map_async.cljs$core$IFn$_invoke$arity$variadic = map_async__delegate;
return map_async;
})()
;
/**
* asynch consume all values from a channel
* @param {...*} var_args
*/
clustermap.async.dorun_async = (function() { 
var dorun_async__delegate = function (ch,p__24634){var map__24682 = p__24634;var map__24682__$1 = ((cljs.core.seq_QMARK_.call(null,map__24682))?cljs.core.apply.call(null,cljs.core.hash_map,map__24682):map__24682);var log = cljs.core.get.call(null,map__24682__$1,new cljs.core.Keyword(null,"log","log",1014011574));var c__5521__auto___24729 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_24704){var state_val_24705 = (state_24704[1]);if((state_val_24705 === 1))
{var state_24704__$1 = state_24704;var statearr_24706_24730 = state_24704__$1;(statearr_24706_24730[2] = null);
(statearr_24706_24730[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24705 === 2))
{var state_24704__$1 = state_24704;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24704__$1,4,ch);
} else
{if((state_val_24705 === 3))
{var inst_24702 = (state_24704[2]);var state_24704__$1 = state_24704;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24704__$1,inst_24702);
} else
{if((state_val_24705 === 4))
{var inst_24685 = (state_24704[7]);var inst_24685__$1 = (state_24704[2]);var state_24704__$1 = (function (){var statearr_24707 = state_24704;(statearr_24707[7] = inst_24685__$1);
return statearr_24707;
})();if(cljs.core.truth_(inst_24685__$1))
{var statearr_24708_24731 = state_24704__$1;(statearr_24708_24731[1] = 5);
} else
{var statearr_24709_24732 = state_24704__$1;(statearr_24709_24732[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24705 === 5))
{var state_24704__$1 = state_24704;if(cljs.core.truth_(log))
{var statearr_24710_24733 = state_24704__$1;(statearr_24710_24733[1] = 8);
} else
{var statearr_24711_24734 = state_24704__$1;(statearr_24711_24734[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24705 === 6))
{var state_24704__$1 = state_24704;var statearr_24712_24735 = state_24704__$1;(statearr_24712_24735[2] = null);
(statearr_24712_24735[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24705 === 7))
{var inst_24695 = (state_24704[2]);var state_24704__$1 = state_24704;if(cljs.core.truth_(inst_24695))
{var statearr_24713_24736 = state_24704__$1;(statearr_24713_24736[1] = 11);
} else
{var statearr_24714_24737 = state_24704__$1;(statearr_24714_24737[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24705 === 8))
{var inst_24685 = (state_24704[7]);var inst_24688 = cljs.core.clj__GT_js.call(null,inst_24685);var inst_24689 = console.log(inst_24688);var state_24704__$1 = state_24704;var statearr_24715_24738 = state_24704__$1;(statearr_24715_24738[2] = inst_24689);
(statearr_24715_24738[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24705 === 9))
{var state_24704__$1 = state_24704;var statearr_24716_24739 = state_24704__$1;(statearr_24716_24739[2] = null);
(statearr_24716_24739[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24705 === 10))
{var inst_24685 = (state_24704[7]);var inst_24692 = (state_24704[2]);var state_24704__$1 = (function (){var statearr_24717 = state_24704;(statearr_24717[8] = inst_24692);
return statearr_24717;
})();var statearr_24718_24740 = state_24704__$1;(statearr_24718_24740[2] = inst_24685);
(statearr_24718_24740[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24705 === 11))
{var state_24704__$1 = state_24704;var statearr_24719_24741 = state_24704__$1;(statearr_24719_24741[2] = null);
(statearr_24719_24741[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24705 === 12))
{var state_24704__$1 = state_24704;var statearr_24720_24742 = state_24704__$1;(statearr_24720_24742[2] = null);
(statearr_24720_24742[1] = 13);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24705 === 13))
{var inst_24700 = (state_24704[2]);var state_24704__$1 = state_24704;var statearr_24721_24743 = state_24704__$1;(statearr_24721_24743[2] = inst_24700);
(statearr_24721_24743[1] = 3);
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
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_24725 = [null,null,null,null,null,null,null,null,null];(statearr_24725[0] = state_machine__5507__auto__);
(statearr_24725[1] = 1);
return statearr_24725;
});
var state_machine__5507__auto____1 = (function (state_24704){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_24704);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e24726){if((e24726 instanceof Object))
{var ex__5510__auto__ = e24726;var statearr_24727_24744 = state_24704;(statearr_24727_24744[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24704);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e24726;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__24745 = state_24704;
state_24704 = G__24745;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_24704){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_24704);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_24728 = f__5522__auto__.call(null);(statearr_24728[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___24729);
return statearr_24728;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5523__auto__);
}));
return null;
};
var dorun_async = function (ch,var_args){
var p__24634 = null;if (arguments.length > 1) {
  p__24634 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return dorun_async__delegate.call(this,ch,p__24634);};
dorun_async.cljs$lang$maxFixedArity = 1;
dorun_async.cljs$lang$applyTo = (function (arglist__24746){
var ch = cljs.core.first(arglist__24746);
var p__24634 = cljs.core.rest(arglist__24746);
return dorun_async__delegate(ch,p__24634);
});
dorun_async.cljs$core$IFn$_invoke$arity$variadic = dorun_async__delegate;
return dorun_async;
})()
;
