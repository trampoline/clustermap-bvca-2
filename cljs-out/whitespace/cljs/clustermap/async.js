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
map_async.cljs$lang$applyTo = (function (arglist__32741){
var f = cljs.core.first(arglist__32741);
var colls = cljs.core.rest(arglist__32741);
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
var dorun_async__delegate = function (ch,p__32742){var map__32802 = p__32742;var map__32802__$1 = ((cljs.core.seq_QMARK_.call(null,map__32802))?cljs.core.apply.call(null,cljs.core.hash_map,map__32802):map__32802);var delay = cljs.core.get.call(null,map__32802__$1,new cljs.core.Keyword(null,"delay","delay",1109372149));var log = cljs.core.get.call(null,map__32802__$1,new cljs.core.Keyword(null,"log","log",1014011574));var c__5521__auto___32861 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_32831){var state_val_32832 = (state_32831[1]);if((state_val_32832 === 1))
{var state_32831__$1 = state_32831;var statearr_32833_32862 = state_32831__$1;(statearr_32833_32862[2] = null);
(statearr_32833_32862[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32832 === 2))
{var state_32831__$1 = state_32831;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32831__$1,4,ch);
} else
{if((state_val_32832 === 3))
{var inst_32829 = (state_32831[2]);var state_32831__$1 = state_32831;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32831__$1,inst_32829);
} else
{if((state_val_32832 === 4))
{var inst_32805 = (state_32831[7]);var inst_32805__$1 = (state_32831[2]);var state_32831__$1 = (function (){var statearr_32834 = state_32831;(statearr_32834[7] = inst_32805__$1);
return statearr_32834;
})();if(cljs.core.truth_(inst_32805__$1))
{var statearr_32835_32863 = state_32831__$1;(statearr_32835_32863[1] = 5);
} else
{var statearr_32836_32864 = state_32831__$1;(statearr_32836_32864[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32832 === 5))
{var state_32831__$1 = state_32831;if(cljs.core.truth_(delay))
{var statearr_32837_32865 = state_32831__$1;(statearr_32837_32865[1] = 8);
} else
{var statearr_32838_32866 = state_32831__$1;(statearr_32838_32866[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32832 === 6))
{var state_32831__$1 = state_32831;var statearr_32839_32867 = state_32831__$1;(statearr_32839_32867[2] = null);
(statearr_32839_32867[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32832 === 7))
{var inst_32822 = (state_32831[2]);var state_32831__$1 = state_32831;if(cljs.core.truth_(inst_32822))
{var statearr_32840_32868 = state_32831__$1;(statearr_32840_32868[1] = 15);
} else
{var statearr_32841_32869 = state_32831__$1;(statearr_32841_32869[1] = 16);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32832 === 8))
{var inst_32808 = cljs.core.async.timeout.call(null,delay);var state_32831__$1 = state_32831;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32831__$1,11,inst_32808);
} else
{if((state_val_32832 === 9))
{var state_32831__$1 = state_32831;var statearr_32842_32870 = state_32831__$1;(statearr_32842_32870[2] = null);
(statearr_32842_32870[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32832 === 10))
{var inst_32813 = (state_32831[2]);var state_32831__$1 = (function (){var statearr_32843 = state_32831;(statearr_32843[8] = inst_32813);
return statearr_32843;
})();if(cljs.core.truth_(log))
{var statearr_32844_32871 = state_32831__$1;(statearr_32844_32871[1] = 12);
} else
{var statearr_32845_32872 = state_32831__$1;(statearr_32845_32872[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32832 === 11))
{var inst_32810 = (state_32831[2]);var state_32831__$1 = state_32831;var statearr_32846_32873 = state_32831__$1;(statearr_32846_32873[2] = inst_32810);
(statearr_32846_32873[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32832 === 12))
{var inst_32805 = (state_32831[7]);var inst_32815 = cljs.core.clj__GT_js.call(null,inst_32805);var inst_32816 = console.log(inst_32815);var state_32831__$1 = state_32831;var statearr_32847_32874 = state_32831__$1;(statearr_32847_32874[2] = inst_32816);
(statearr_32847_32874[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32832 === 13))
{var state_32831__$1 = state_32831;var statearr_32848_32875 = state_32831__$1;(statearr_32848_32875[2] = null);
(statearr_32848_32875[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32832 === 14))
{var inst_32805 = (state_32831[7]);var inst_32819 = (state_32831[2]);var state_32831__$1 = (function (){var statearr_32849 = state_32831;(statearr_32849[9] = inst_32819);
return statearr_32849;
})();var statearr_32850_32876 = state_32831__$1;(statearr_32850_32876[2] = inst_32805);
(statearr_32850_32876[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32832 === 15))
{var state_32831__$1 = state_32831;var statearr_32851_32877 = state_32831__$1;(statearr_32851_32877[2] = null);
(statearr_32851_32877[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32832 === 16))
{var state_32831__$1 = state_32831;var statearr_32852_32878 = state_32831__$1;(statearr_32852_32878[2] = null);
(statearr_32852_32878[1] = 17);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32832 === 17))
{var inst_32827 = (state_32831[2]);var state_32831__$1 = state_32831;var statearr_32853_32879 = state_32831__$1;(statearr_32853_32879[2] = inst_32827);
(statearr_32853_32879[1] = 3);
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
var state_machine__5507__auto____0 = (function (){var statearr_32857 = [null,null,null,null,null,null,null,null,null,null];(statearr_32857[0] = state_machine__5507__auto__);
(statearr_32857[1] = 1);
return statearr_32857;
});
var state_machine__5507__auto____1 = (function (state_32831){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_32831);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e32858){if((e32858 instanceof Object))
{var ex__5510__auto__ = e32858;var statearr_32859_32880 = state_32831;(statearr_32859_32880[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32831);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e32858;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__32881 = state_32831;
state_32831 = G__32881;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_32831){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_32831);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_32860 = f__5522__auto__.call(null);(statearr_32860[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___32861);
return statearr_32860;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5523__auto__);
}));
return null;
};
var dorun_async = function (ch,var_args){
var p__32742 = null;if (arguments.length > 1) {
  p__32742 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return dorun_async__delegate.call(this,ch,p__32742);};
dorun_async.cljs$lang$maxFixedArity = 1;
dorun_async.cljs$lang$applyTo = (function (arglist__32882){
var ch = cljs.core.first(arglist__32882);
var p__32742 = cljs.core.rest(arglist__32882);
return dorun_async__delegate(ch,p__32742);
});
dorun_async.cljs$core$IFn$_invoke$arity$variadic = dorun_async__delegate;
return dorun_async;
})()
;
