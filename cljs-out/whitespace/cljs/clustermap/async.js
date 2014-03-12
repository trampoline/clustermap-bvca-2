// Compiled by ClojureScript 0.0-2173
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
map_async.cljs$lang$applyTo = (function (arglist__44713){
var f = cljs.core.first(arglist__44713);
var colls = cljs.core.rest(arglist__44713);
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
var dorun_async__delegate = function (ch,p__44714){var map__44774 = p__44714;var map__44774__$1 = ((cljs.core.seq_QMARK_.call(null,map__44774))?cljs.core.apply.call(null,cljs.core.hash_map,map__44774):map__44774);var delay = cljs.core.get.call(null,map__44774__$1,new cljs.core.Keyword(null,"delay","delay",1109372149));var log = cljs.core.get.call(null,map__44774__$1,new cljs.core.Keyword(null,"log","log",1014011574));var c__5562__auto___44833 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_44803){var state_val_44804 = (state_44803[1]);if((state_val_44804 === 1))
{var state_44803__$1 = state_44803;var statearr_44805_44834 = state_44803__$1;(statearr_44805_44834[2] = null);
(statearr_44805_44834[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44804 === 2))
{var state_44803__$1 = state_44803;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44803__$1,4,ch);
} else
{if((state_val_44804 === 3))
{var inst_44801 = (state_44803[2]);var state_44803__$1 = state_44803;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44803__$1,inst_44801);
} else
{if((state_val_44804 === 4))
{var inst_44777 = (state_44803[7]);var inst_44777__$1 = (state_44803[2]);var state_44803__$1 = (function (){var statearr_44806 = state_44803;(statearr_44806[7] = inst_44777__$1);
return statearr_44806;
})();if(cljs.core.truth_(inst_44777__$1))
{var statearr_44807_44835 = state_44803__$1;(statearr_44807_44835[1] = 5);
} else
{var statearr_44808_44836 = state_44803__$1;(statearr_44808_44836[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44804 === 5))
{var state_44803__$1 = state_44803;if(cljs.core.truth_(delay))
{var statearr_44809_44837 = state_44803__$1;(statearr_44809_44837[1] = 8);
} else
{var statearr_44810_44838 = state_44803__$1;(statearr_44810_44838[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44804 === 6))
{var state_44803__$1 = state_44803;var statearr_44811_44839 = state_44803__$1;(statearr_44811_44839[2] = null);
(statearr_44811_44839[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44804 === 7))
{var inst_44794 = (state_44803[2]);var state_44803__$1 = state_44803;if(cljs.core.truth_(inst_44794))
{var statearr_44812_44840 = state_44803__$1;(statearr_44812_44840[1] = 15);
} else
{var statearr_44813_44841 = state_44803__$1;(statearr_44813_44841[1] = 16);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44804 === 8))
{var inst_44780 = cljs.core.async.timeout.call(null,delay);var state_44803__$1 = state_44803;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44803__$1,11,inst_44780);
} else
{if((state_val_44804 === 9))
{var state_44803__$1 = state_44803;var statearr_44814_44842 = state_44803__$1;(statearr_44814_44842[2] = null);
(statearr_44814_44842[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44804 === 10))
{var inst_44785 = (state_44803[2]);var state_44803__$1 = (function (){var statearr_44815 = state_44803;(statearr_44815[8] = inst_44785);
return statearr_44815;
})();if(cljs.core.truth_(log))
{var statearr_44816_44843 = state_44803__$1;(statearr_44816_44843[1] = 12);
} else
{var statearr_44817_44844 = state_44803__$1;(statearr_44817_44844[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44804 === 11))
{var inst_44782 = (state_44803[2]);var state_44803__$1 = state_44803;var statearr_44818_44845 = state_44803__$1;(statearr_44818_44845[2] = inst_44782);
(statearr_44818_44845[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44804 === 12))
{var inst_44777 = (state_44803[7]);var inst_44787 = cljs.core.clj__GT_js.call(null,inst_44777);var inst_44788 = console.log(inst_44787);var state_44803__$1 = state_44803;var statearr_44819_44846 = state_44803__$1;(statearr_44819_44846[2] = inst_44788);
(statearr_44819_44846[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44804 === 13))
{var state_44803__$1 = state_44803;var statearr_44820_44847 = state_44803__$1;(statearr_44820_44847[2] = null);
(statearr_44820_44847[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44804 === 14))
{var inst_44777 = (state_44803[7]);var inst_44791 = (state_44803[2]);var state_44803__$1 = (function (){var statearr_44821 = state_44803;(statearr_44821[9] = inst_44791);
return statearr_44821;
})();var statearr_44822_44848 = state_44803__$1;(statearr_44822_44848[2] = inst_44777);
(statearr_44822_44848[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44804 === 15))
{var state_44803__$1 = state_44803;var statearr_44823_44849 = state_44803__$1;(statearr_44823_44849[2] = null);
(statearr_44823_44849[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44804 === 16))
{var state_44803__$1 = state_44803;var statearr_44824_44850 = state_44803__$1;(statearr_44824_44850[2] = null);
(statearr_44824_44850[1] = 17);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44804 === 17))
{var inst_44799 = (state_44803[2]);var state_44803__$1 = state_44803;var statearr_44825_44851 = state_44803__$1;(statearr_44825_44851[2] = inst_44799);
(statearr_44825_44851[1] = 3);
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
});return ((function (switch__5547__auto__){
return (function() {
var state_machine__5548__auto__ = null;
var state_machine__5548__auto____0 = (function (){var statearr_44829 = [null,null,null,null,null,null,null,null,null,null];(statearr_44829[0] = state_machine__5548__auto__);
(statearr_44829[1] = 1);
return statearr_44829;
});
var state_machine__5548__auto____1 = (function (state_44803){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__.call(null,state_44803);if(cljs.core.keyword_identical_QMARK_.call(null,result__5550__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e44830){if((e44830 instanceof Object))
{var ex__5551__auto__ = e44830;var statearr_44831_44852 = state_44803;(statearr_44831_44852[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44803);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e44830;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5549__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__44853 = state_44803;
state_44803 = G__44853;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_44803){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_44803);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_44832 = f__5563__auto__.call(null);(statearr_44832[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto___44833);
return statearr_44832;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5564__auto__);
}));
return null;
};
var dorun_async = function (ch,var_args){
var p__44714 = null;if (arguments.length > 1) {
  p__44714 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return dorun_async__delegate.call(this,ch,p__44714);};
dorun_async.cljs$lang$maxFixedArity = 1;
dorun_async.cljs$lang$applyTo = (function (arglist__44854){
var ch = cljs.core.first(arglist__44854);
var p__44714 = cljs.core.rest(arglist__44854);
return dorun_async__delegate(ch,p__44714);
});
dorun_async.cljs$core$IFn$_invoke$arity$variadic = dorun_async__delegate;
return dorun_async;
})()
;
