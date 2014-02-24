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
map_async.cljs$lang$applyTo = (function (arglist__32713){
var f = cljs.core.first(arglist__32713);
var colls = cljs.core.rest(arglist__32713);
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
var dorun_async__delegate = function (ch,p__32714){var map__32774 = p__32714;var map__32774__$1 = ((cljs.core.seq_QMARK_.call(null,map__32774))?cljs.core.apply.call(null,cljs.core.hash_map,map__32774):map__32774);var delay = cljs.core.get.call(null,map__32774__$1,new cljs.core.Keyword(null,"delay","delay",1109372149));var log = cljs.core.get.call(null,map__32774__$1,new cljs.core.Keyword(null,"log","log",1014011574));var c__5521__auto___32833 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_32803){var state_val_32804 = (state_32803[1]);if((state_val_32804 === 1))
{var state_32803__$1 = state_32803;var statearr_32805_32834 = state_32803__$1;(statearr_32805_32834[2] = null);
(statearr_32805_32834[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32804 === 2))
{var state_32803__$1 = state_32803;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32803__$1,4,ch);
} else
{if((state_val_32804 === 3))
{var inst_32801 = (state_32803[2]);var state_32803__$1 = state_32803;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32803__$1,inst_32801);
} else
{if((state_val_32804 === 4))
{var inst_32777 = (state_32803[7]);var inst_32777__$1 = (state_32803[2]);var state_32803__$1 = (function (){var statearr_32806 = state_32803;(statearr_32806[7] = inst_32777__$1);
return statearr_32806;
})();if(cljs.core.truth_(inst_32777__$1))
{var statearr_32807_32835 = state_32803__$1;(statearr_32807_32835[1] = 5);
} else
{var statearr_32808_32836 = state_32803__$1;(statearr_32808_32836[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32804 === 5))
{var state_32803__$1 = state_32803;if(cljs.core.truth_(delay))
{var statearr_32809_32837 = state_32803__$1;(statearr_32809_32837[1] = 8);
} else
{var statearr_32810_32838 = state_32803__$1;(statearr_32810_32838[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32804 === 6))
{var state_32803__$1 = state_32803;var statearr_32811_32839 = state_32803__$1;(statearr_32811_32839[2] = null);
(statearr_32811_32839[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32804 === 7))
{var inst_32794 = (state_32803[2]);var state_32803__$1 = state_32803;if(cljs.core.truth_(inst_32794))
{var statearr_32812_32840 = state_32803__$1;(statearr_32812_32840[1] = 15);
} else
{var statearr_32813_32841 = state_32803__$1;(statearr_32813_32841[1] = 16);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32804 === 8))
{var inst_32780 = cljs.core.async.timeout.call(null,delay);var state_32803__$1 = state_32803;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32803__$1,11,inst_32780);
} else
{if((state_val_32804 === 9))
{var state_32803__$1 = state_32803;var statearr_32814_32842 = state_32803__$1;(statearr_32814_32842[2] = null);
(statearr_32814_32842[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32804 === 10))
{var inst_32785 = (state_32803[2]);var state_32803__$1 = (function (){var statearr_32815 = state_32803;(statearr_32815[8] = inst_32785);
return statearr_32815;
})();if(cljs.core.truth_(log))
{var statearr_32816_32843 = state_32803__$1;(statearr_32816_32843[1] = 12);
} else
{var statearr_32817_32844 = state_32803__$1;(statearr_32817_32844[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32804 === 11))
{var inst_32782 = (state_32803[2]);var state_32803__$1 = state_32803;var statearr_32818_32845 = state_32803__$1;(statearr_32818_32845[2] = inst_32782);
(statearr_32818_32845[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32804 === 12))
{var inst_32777 = (state_32803[7]);var inst_32787 = cljs.core.clj__GT_js.call(null,inst_32777);var inst_32788 = console.log(inst_32787);var state_32803__$1 = state_32803;var statearr_32819_32846 = state_32803__$1;(statearr_32819_32846[2] = inst_32788);
(statearr_32819_32846[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32804 === 13))
{var state_32803__$1 = state_32803;var statearr_32820_32847 = state_32803__$1;(statearr_32820_32847[2] = null);
(statearr_32820_32847[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32804 === 14))
{var inst_32777 = (state_32803[7]);var inst_32791 = (state_32803[2]);var state_32803__$1 = (function (){var statearr_32821 = state_32803;(statearr_32821[9] = inst_32791);
return statearr_32821;
})();var statearr_32822_32848 = state_32803__$1;(statearr_32822_32848[2] = inst_32777);
(statearr_32822_32848[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32804 === 15))
{var state_32803__$1 = state_32803;var statearr_32823_32849 = state_32803__$1;(statearr_32823_32849[2] = null);
(statearr_32823_32849[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32804 === 16))
{var state_32803__$1 = state_32803;var statearr_32824_32850 = state_32803__$1;(statearr_32824_32850[2] = null);
(statearr_32824_32850[1] = 17);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32804 === 17))
{var inst_32799 = (state_32803[2]);var state_32803__$1 = state_32803;var statearr_32825_32851 = state_32803__$1;(statearr_32825_32851[2] = inst_32799);
(statearr_32825_32851[1] = 3);
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
var state_machine__5507__auto____0 = (function (){var statearr_32829 = [null,null,null,null,null,null,null,null,null,null];(statearr_32829[0] = state_machine__5507__auto__);
(statearr_32829[1] = 1);
return statearr_32829;
});
var state_machine__5507__auto____1 = (function (state_32803){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_32803);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e32830){if((e32830 instanceof Object))
{var ex__5510__auto__ = e32830;var statearr_32831_32852 = state_32803;(statearr_32831_32852[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32803);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e32830;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__32853 = state_32803;
state_32803 = G__32853;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_32803){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_32803);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_32832 = f__5522__auto__.call(null);(statearr_32832[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___32833);
return statearr_32832;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5523__auto__);
}));
return null;
};
var dorun_async = function (ch,var_args){
var p__32714 = null;if (arguments.length > 1) {
  p__32714 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return dorun_async__delegate.call(this,ch,p__32714);};
dorun_async.cljs$lang$maxFixedArity = 1;
dorun_async.cljs$lang$applyTo = (function (arglist__32854){
var ch = cljs.core.first(arglist__32854);
var p__32714 = cljs.core.rest(arglist__32854);
return dorun_async__delegate(ch,p__32714);
});
dorun_async.cljs$core$IFn$_invoke$arity$variadic = dorun_async__delegate;
return dorun_async;
})()
;
