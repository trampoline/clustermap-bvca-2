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
map_async.cljs$lang$applyTo = (function (arglist__32718){
var f = cljs.core.first(arglist__32718);
var colls = cljs.core.rest(arglist__32718);
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
var dorun_async__delegate = function (ch,p__32719){var map__32779 = p__32719;var map__32779__$1 = ((cljs.core.seq_QMARK_.call(null,map__32779))?cljs.core.apply.call(null,cljs.core.hash_map,map__32779):map__32779);var delay = cljs.core.get.call(null,map__32779__$1,new cljs.core.Keyword(null,"delay","delay",1109372149));var log = cljs.core.get.call(null,map__32779__$1,new cljs.core.Keyword(null,"log","log",1014011574));var c__5521__auto___32838 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_32808){var state_val_32809 = (state_32808[1]);if((state_val_32809 === 1))
{var state_32808__$1 = state_32808;var statearr_32810_32839 = state_32808__$1;(statearr_32810_32839[2] = null);
(statearr_32810_32839[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32809 === 2))
{var state_32808__$1 = state_32808;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32808__$1,4,ch);
} else
{if((state_val_32809 === 3))
{var inst_32806 = (state_32808[2]);var state_32808__$1 = state_32808;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32808__$1,inst_32806);
} else
{if((state_val_32809 === 4))
{var inst_32782 = (state_32808[7]);var inst_32782__$1 = (state_32808[2]);var state_32808__$1 = (function (){var statearr_32811 = state_32808;(statearr_32811[7] = inst_32782__$1);
return statearr_32811;
})();if(cljs.core.truth_(inst_32782__$1))
{var statearr_32812_32840 = state_32808__$1;(statearr_32812_32840[1] = 5);
} else
{var statearr_32813_32841 = state_32808__$1;(statearr_32813_32841[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32809 === 5))
{var state_32808__$1 = state_32808;if(cljs.core.truth_(delay))
{var statearr_32814_32842 = state_32808__$1;(statearr_32814_32842[1] = 8);
} else
{var statearr_32815_32843 = state_32808__$1;(statearr_32815_32843[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32809 === 6))
{var state_32808__$1 = state_32808;var statearr_32816_32844 = state_32808__$1;(statearr_32816_32844[2] = null);
(statearr_32816_32844[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32809 === 7))
{var inst_32799 = (state_32808[2]);var state_32808__$1 = state_32808;if(cljs.core.truth_(inst_32799))
{var statearr_32817_32845 = state_32808__$1;(statearr_32817_32845[1] = 15);
} else
{var statearr_32818_32846 = state_32808__$1;(statearr_32818_32846[1] = 16);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32809 === 8))
{var inst_32785 = cljs.core.async.timeout.call(null,delay);var state_32808__$1 = state_32808;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32808__$1,11,inst_32785);
} else
{if((state_val_32809 === 9))
{var state_32808__$1 = state_32808;var statearr_32819_32847 = state_32808__$1;(statearr_32819_32847[2] = null);
(statearr_32819_32847[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32809 === 10))
{var inst_32790 = (state_32808[2]);var state_32808__$1 = (function (){var statearr_32820 = state_32808;(statearr_32820[8] = inst_32790);
return statearr_32820;
})();if(cljs.core.truth_(log))
{var statearr_32821_32848 = state_32808__$1;(statearr_32821_32848[1] = 12);
} else
{var statearr_32822_32849 = state_32808__$1;(statearr_32822_32849[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32809 === 11))
{var inst_32787 = (state_32808[2]);var state_32808__$1 = state_32808;var statearr_32823_32850 = state_32808__$1;(statearr_32823_32850[2] = inst_32787);
(statearr_32823_32850[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32809 === 12))
{var inst_32782 = (state_32808[7]);var inst_32792 = cljs.core.clj__GT_js.call(null,inst_32782);var inst_32793 = console.log(inst_32792);var state_32808__$1 = state_32808;var statearr_32824_32851 = state_32808__$1;(statearr_32824_32851[2] = inst_32793);
(statearr_32824_32851[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32809 === 13))
{var state_32808__$1 = state_32808;var statearr_32825_32852 = state_32808__$1;(statearr_32825_32852[2] = null);
(statearr_32825_32852[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32809 === 14))
{var inst_32782 = (state_32808[7]);var inst_32796 = (state_32808[2]);var state_32808__$1 = (function (){var statearr_32826 = state_32808;(statearr_32826[9] = inst_32796);
return statearr_32826;
})();var statearr_32827_32853 = state_32808__$1;(statearr_32827_32853[2] = inst_32782);
(statearr_32827_32853[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32809 === 15))
{var state_32808__$1 = state_32808;var statearr_32828_32854 = state_32808__$1;(statearr_32828_32854[2] = null);
(statearr_32828_32854[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32809 === 16))
{var state_32808__$1 = state_32808;var statearr_32829_32855 = state_32808__$1;(statearr_32829_32855[2] = null);
(statearr_32829_32855[1] = 17);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32809 === 17))
{var inst_32804 = (state_32808[2]);var state_32808__$1 = state_32808;var statearr_32830_32856 = state_32808__$1;(statearr_32830_32856[2] = inst_32804);
(statearr_32830_32856[1] = 3);
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
var state_machine__5507__auto____0 = (function (){var statearr_32834 = [null,null,null,null,null,null,null,null,null,null];(statearr_32834[0] = state_machine__5507__auto__);
(statearr_32834[1] = 1);
return statearr_32834;
});
var state_machine__5507__auto____1 = (function (state_32808){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_32808);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e32835){if((e32835 instanceof Object))
{var ex__5510__auto__ = e32835;var statearr_32836_32857 = state_32808;(statearr_32836_32857[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32808);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e32835;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__32858 = state_32808;
state_32808 = G__32858;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_32808){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_32808);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_32837 = f__5522__auto__.call(null);(statearr_32837[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___32838);
return statearr_32837;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5523__auto__);
}));
return null;
};
var dorun_async = function (ch,var_args){
var p__32719 = null;if (arguments.length > 1) {
  p__32719 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return dorun_async__delegate.call(this,ch,p__32719);};
dorun_async.cljs$lang$maxFixedArity = 1;
dorun_async.cljs$lang$applyTo = (function (arglist__32859){
var ch = cljs.core.first(arglist__32859);
var p__32719 = cljs.core.rest(arglist__32859);
return dorun_async__delegate(ch,p__32719);
});
dorun_async.cljs$core$IFn$_invoke$arity$variadic = dorun_async__delegate;
return dorun_async;
})()
;
