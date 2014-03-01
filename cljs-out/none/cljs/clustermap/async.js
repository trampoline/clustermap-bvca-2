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
map_async.cljs$lang$applyTo = (function (arglist__11744){
var f = cljs.core.first(arglist__11744);
var colls = cljs.core.rest(arglist__11744);
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
var dorun_async__delegate = function (ch,p__11745){var map__11805 = p__11745;var map__11805__$1 = ((cljs.core.seq_QMARK_.call(null,map__11805))?cljs.core.apply.call(null,cljs.core.hash_map,map__11805):map__11805);var delay = cljs.core.get.call(null,map__11805__$1,new cljs.core.Keyword(null,"delay","delay",1109372149));var log = cljs.core.get.call(null,map__11805__$1,new cljs.core.Keyword(null,"log","log",1014011574));var c__5521__auto___11864 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_11834){var state_val_11835 = (state_11834[1]);if((state_val_11835 === 1))
{var state_11834__$1 = state_11834;var statearr_11836_11865 = state_11834__$1;(statearr_11836_11865[2] = null);
(statearr_11836_11865[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11835 === 2))
{var state_11834__$1 = state_11834;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11834__$1,4,ch);
} else
{if((state_val_11835 === 3))
{var inst_11832 = (state_11834[2]);var state_11834__$1 = state_11834;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11834__$1,inst_11832);
} else
{if((state_val_11835 === 4))
{var inst_11808 = (state_11834[7]);var inst_11808__$1 = (state_11834[2]);var state_11834__$1 = (function (){var statearr_11837 = state_11834;(statearr_11837[7] = inst_11808__$1);
return statearr_11837;
})();if(cljs.core.truth_(inst_11808__$1))
{var statearr_11838_11866 = state_11834__$1;(statearr_11838_11866[1] = 5);
} else
{var statearr_11839_11867 = state_11834__$1;(statearr_11839_11867[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11835 === 5))
{var state_11834__$1 = state_11834;if(cljs.core.truth_(delay))
{var statearr_11840_11868 = state_11834__$1;(statearr_11840_11868[1] = 8);
} else
{var statearr_11841_11869 = state_11834__$1;(statearr_11841_11869[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11835 === 6))
{var state_11834__$1 = state_11834;var statearr_11842_11870 = state_11834__$1;(statearr_11842_11870[2] = null);
(statearr_11842_11870[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11835 === 7))
{var inst_11825 = (state_11834[2]);var state_11834__$1 = state_11834;if(cljs.core.truth_(inst_11825))
{var statearr_11843_11871 = state_11834__$1;(statearr_11843_11871[1] = 15);
} else
{var statearr_11844_11872 = state_11834__$1;(statearr_11844_11872[1] = 16);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11835 === 8))
{var inst_11811 = cljs.core.async.timeout.call(null,delay);var state_11834__$1 = state_11834;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11834__$1,11,inst_11811);
} else
{if((state_val_11835 === 9))
{var state_11834__$1 = state_11834;var statearr_11845_11873 = state_11834__$1;(statearr_11845_11873[2] = null);
(statearr_11845_11873[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11835 === 10))
{var inst_11816 = (state_11834[2]);var state_11834__$1 = (function (){var statearr_11846 = state_11834;(statearr_11846[8] = inst_11816);
return statearr_11846;
})();if(cljs.core.truth_(log))
{var statearr_11847_11874 = state_11834__$1;(statearr_11847_11874[1] = 12);
} else
{var statearr_11848_11875 = state_11834__$1;(statearr_11848_11875[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11835 === 11))
{var inst_11813 = (state_11834[2]);var state_11834__$1 = state_11834;var statearr_11849_11876 = state_11834__$1;(statearr_11849_11876[2] = inst_11813);
(statearr_11849_11876[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11835 === 12))
{var inst_11808 = (state_11834[7]);var inst_11818 = cljs.core.clj__GT_js.call(null,inst_11808);var inst_11819 = console.log(inst_11818);var state_11834__$1 = state_11834;var statearr_11850_11877 = state_11834__$1;(statearr_11850_11877[2] = inst_11819);
(statearr_11850_11877[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11835 === 13))
{var state_11834__$1 = state_11834;var statearr_11851_11878 = state_11834__$1;(statearr_11851_11878[2] = null);
(statearr_11851_11878[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11835 === 14))
{var inst_11808 = (state_11834[7]);var inst_11822 = (state_11834[2]);var state_11834__$1 = (function (){var statearr_11852 = state_11834;(statearr_11852[9] = inst_11822);
return statearr_11852;
})();var statearr_11853_11879 = state_11834__$1;(statearr_11853_11879[2] = inst_11808);
(statearr_11853_11879[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11835 === 15))
{var state_11834__$1 = state_11834;var statearr_11854_11880 = state_11834__$1;(statearr_11854_11880[2] = null);
(statearr_11854_11880[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11835 === 16))
{var state_11834__$1 = state_11834;var statearr_11855_11881 = state_11834__$1;(statearr_11855_11881[2] = null);
(statearr_11855_11881[1] = 17);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11835 === 17))
{var inst_11830 = (state_11834[2]);var state_11834__$1 = state_11834;var statearr_11856_11882 = state_11834__$1;(statearr_11856_11882[2] = inst_11830);
(statearr_11856_11882[1] = 3);
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
var state_machine__5507__auto____0 = (function (){var statearr_11860 = [null,null,null,null,null,null,null,null,null,null];(statearr_11860[0] = state_machine__5507__auto__);
(statearr_11860[1] = 1);
return statearr_11860;
});
var state_machine__5507__auto____1 = (function (state_11834){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_11834);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e11861){if((e11861 instanceof Object))
{var ex__5510__auto__ = e11861;var statearr_11862_11883 = state_11834;(statearr_11862_11883[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11834);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11861;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11884 = state_11834;
state_11834 = G__11884;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_11834){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_11834);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_11863 = f__5522__auto__.call(null);(statearr_11863[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___11864);
return statearr_11863;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5523__auto__);
}));
return null;
};
var dorun_async = function (ch,var_args){
var p__11745 = null;if (arguments.length > 1) {
  p__11745 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return dorun_async__delegate.call(this,ch,p__11745);};
dorun_async.cljs$lang$maxFixedArity = 1;
dorun_async.cljs$lang$applyTo = (function (arglist__11885){
var ch = cljs.core.first(arglist__11885);
var p__11745 = cljs.core.rest(arglist__11885);
return dorun_async__delegate(ch,p__11745);
});
dorun_async.cljs$core$IFn$_invoke$arity$variadic = dorun_async__delegate;
return dorun_async;
})()
;

//# sourceMappingURL=async.js.map