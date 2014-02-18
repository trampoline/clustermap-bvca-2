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
map_async.cljs$lang$applyTo = (function (arglist__32711){
var f = cljs.core.first(arglist__32711);
var colls = cljs.core.rest(arglist__32711);
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
var dorun_async__delegate = function (ch,p__32712){var map__32772 = p__32712;var map__32772__$1 = ((cljs.core.seq_QMARK_.call(null,map__32772))?cljs.core.apply.call(null,cljs.core.hash_map,map__32772):map__32772);var delay = cljs.core.get.call(null,map__32772__$1,new cljs.core.Keyword(null,"delay","delay",1109372149));var log = cljs.core.get.call(null,map__32772__$1,new cljs.core.Keyword(null,"log","log",1014011574));var c__5521__auto___32831 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_32801){var state_val_32802 = (state_32801[1]);if((state_val_32802 === 1))
{var state_32801__$1 = state_32801;var statearr_32803_32832 = state_32801__$1;(statearr_32803_32832[2] = null);
(statearr_32803_32832[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32802 === 2))
{var state_32801__$1 = state_32801;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32801__$1,4,ch);
} else
{if((state_val_32802 === 3))
{var inst_32799 = (state_32801[2]);var state_32801__$1 = state_32801;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32801__$1,inst_32799);
} else
{if((state_val_32802 === 4))
{var inst_32775 = (state_32801[7]);var inst_32775__$1 = (state_32801[2]);var state_32801__$1 = (function (){var statearr_32804 = state_32801;(statearr_32804[7] = inst_32775__$1);
return statearr_32804;
})();if(cljs.core.truth_(inst_32775__$1))
{var statearr_32805_32833 = state_32801__$1;(statearr_32805_32833[1] = 5);
} else
{var statearr_32806_32834 = state_32801__$1;(statearr_32806_32834[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32802 === 5))
{var state_32801__$1 = state_32801;if(cljs.core.truth_(delay))
{var statearr_32807_32835 = state_32801__$1;(statearr_32807_32835[1] = 8);
} else
{var statearr_32808_32836 = state_32801__$1;(statearr_32808_32836[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32802 === 6))
{var state_32801__$1 = state_32801;var statearr_32809_32837 = state_32801__$1;(statearr_32809_32837[2] = null);
(statearr_32809_32837[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32802 === 7))
{var inst_32792 = (state_32801[2]);var state_32801__$1 = state_32801;if(cljs.core.truth_(inst_32792))
{var statearr_32810_32838 = state_32801__$1;(statearr_32810_32838[1] = 15);
} else
{var statearr_32811_32839 = state_32801__$1;(statearr_32811_32839[1] = 16);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32802 === 8))
{var inst_32778 = cljs.core.async.timeout.call(null,delay);var state_32801__$1 = state_32801;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32801__$1,11,inst_32778);
} else
{if((state_val_32802 === 9))
{var state_32801__$1 = state_32801;var statearr_32812_32840 = state_32801__$1;(statearr_32812_32840[2] = null);
(statearr_32812_32840[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32802 === 10))
{var inst_32783 = (state_32801[2]);var state_32801__$1 = (function (){var statearr_32813 = state_32801;(statearr_32813[8] = inst_32783);
return statearr_32813;
})();if(cljs.core.truth_(log))
{var statearr_32814_32841 = state_32801__$1;(statearr_32814_32841[1] = 12);
} else
{var statearr_32815_32842 = state_32801__$1;(statearr_32815_32842[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32802 === 11))
{var inst_32780 = (state_32801[2]);var state_32801__$1 = state_32801;var statearr_32816_32843 = state_32801__$1;(statearr_32816_32843[2] = inst_32780);
(statearr_32816_32843[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32802 === 12))
{var inst_32775 = (state_32801[7]);var inst_32785 = cljs.core.clj__GT_js.call(null,inst_32775);var inst_32786 = console.log(inst_32785);var state_32801__$1 = state_32801;var statearr_32817_32844 = state_32801__$1;(statearr_32817_32844[2] = inst_32786);
(statearr_32817_32844[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32802 === 13))
{var state_32801__$1 = state_32801;var statearr_32818_32845 = state_32801__$1;(statearr_32818_32845[2] = null);
(statearr_32818_32845[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32802 === 14))
{var inst_32775 = (state_32801[7]);var inst_32789 = (state_32801[2]);var state_32801__$1 = (function (){var statearr_32819 = state_32801;(statearr_32819[9] = inst_32789);
return statearr_32819;
})();var statearr_32820_32846 = state_32801__$1;(statearr_32820_32846[2] = inst_32775);
(statearr_32820_32846[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32802 === 15))
{var state_32801__$1 = state_32801;var statearr_32821_32847 = state_32801__$1;(statearr_32821_32847[2] = null);
(statearr_32821_32847[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32802 === 16))
{var state_32801__$1 = state_32801;var statearr_32822_32848 = state_32801__$1;(statearr_32822_32848[2] = null);
(statearr_32822_32848[1] = 17);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32802 === 17))
{var inst_32797 = (state_32801[2]);var state_32801__$1 = state_32801;var statearr_32823_32849 = state_32801__$1;(statearr_32823_32849[2] = inst_32797);
(statearr_32823_32849[1] = 3);
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
var state_machine__5507__auto____0 = (function (){var statearr_32827 = [null,null,null,null,null,null,null,null,null,null];(statearr_32827[0] = state_machine__5507__auto__);
(statearr_32827[1] = 1);
return statearr_32827;
});
var state_machine__5507__auto____1 = (function (state_32801){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_32801);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e32828){if((e32828 instanceof Object))
{var ex__5510__auto__ = e32828;var statearr_32829_32850 = state_32801;(statearr_32829_32850[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32801);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e32828;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__32851 = state_32801;
state_32801 = G__32851;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_32801){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_32801);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_32830 = f__5522__auto__.call(null);(statearr_32830[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___32831);
return statearr_32830;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5523__auto__);
}));
return null;
};
var dorun_async = function (ch,var_args){
var p__32712 = null;if (arguments.length > 1) {
  p__32712 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return dorun_async__delegate.call(this,ch,p__32712);};
dorun_async.cljs$lang$maxFixedArity = 1;
dorun_async.cljs$lang$applyTo = (function (arglist__32852){
var ch = cljs.core.first(arglist__32852);
var p__32712 = cljs.core.rest(arglist__32852);
return dorun_async__delegate(ch,p__32712);
});
dorun_async.cljs$core$IFn$_invoke$arity$variadic = dorun_async__delegate;
return dorun_async;
})()
;
