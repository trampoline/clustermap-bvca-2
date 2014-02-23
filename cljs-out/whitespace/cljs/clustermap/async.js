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
map_async.cljs$lang$applyTo = (function (arglist__32773){
var f = cljs.core.first(arglist__32773);
var colls = cljs.core.rest(arglist__32773);
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
var dorun_async__delegate = function (ch,p__32774){var map__32834 = p__32774;var map__32834__$1 = ((cljs.core.seq_QMARK_.call(null,map__32834))?cljs.core.apply.call(null,cljs.core.hash_map,map__32834):map__32834);var delay = cljs.core.get.call(null,map__32834__$1,new cljs.core.Keyword(null,"delay","delay",1109372149));var log = cljs.core.get.call(null,map__32834__$1,new cljs.core.Keyword(null,"log","log",1014011574));var c__5521__auto___32893 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_32863){var state_val_32864 = (state_32863[1]);if((state_val_32864 === 1))
{var state_32863__$1 = state_32863;var statearr_32865_32894 = state_32863__$1;(statearr_32865_32894[2] = null);
(statearr_32865_32894[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32864 === 2))
{var state_32863__$1 = state_32863;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32863__$1,4,ch);
} else
{if((state_val_32864 === 3))
{var inst_32861 = (state_32863[2]);var state_32863__$1 = state_32863;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32863__$1,inst_32861);
} else
{if((state_val_32864 === 4))
{var inst_32837 = (state_32863[7]);var inst_32837__$1 = (state_32863[2]);var state_32863__$1 = (function (){var statearr_32866 = state_32863;(statearr_32866[7] = inst_32837__$1);
return statearr_32866;
})();if(cljs.core.truth_(inst_32837__$1))
{var statearr_32867_32895 = state_32863__$1;(statearr_32867_32895[1] = 5);
} else
{var statearr_32868_32896 = state_32863__$1;(statearr_32868_32896[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32864 === 5))
{var state_32863__$1 = state_32863;if(cljs.core.truth_(delay))
{var statearr_32869_32897 = state_32863__$1;(statearr_32869_32897[1] = 8);
} else
{var statearr_32870_32898 = state_32863__$1;(statearr_32870_32898[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32864 === 6))
{var state_32863__$1 = state_32863;var statearr_32871_32899 = state_32863__$1;(statearr_32871_32899[2] = null);
(statearr_32871_32899[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32864 === 7))
{var inst_32854 = (state_32863[2]);var state_32863__$1 = state_32863;if(cljs.core.truth_(inst_32854))
{var statearr_32872_32900 = state_32863__$1;(statearr_32872_32900[1] = 15);
} else
{var statearr_32873_32901 = state_32863__$1;(statearr_32873_32901[1] = 16);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32864 === 8))
{var inst_32840 = cljs.core.async.timeout.call(null,delay);var state_32863__$1 = state_32863;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32863__$1,11,inst_32840);
} else
{if((state_val_32864 === 9))
{var state_32863__$1 = state_32863;var statearr_32874_32902 = state_32863__$1;(statearr_32874_32902[2] = null);
(statearr_32874_32902[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32864 === 10))
{var inst_32845 = (state_32863[2]);var state_32863__$1 = (function (){var statearr_32875 = state_32863;(statearr_32875[8] = inst_32845);
return statearr_32875;
})();if(cljs.core.truth_(log))
{var statearr_32876_32903 = state_32863__$1;(statearr_32876_32903[1] = 12);
} else
{var statearr_32877_32904 = state_32863__$1;(statearr_32877_32904[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32864 === 11))
{var inst_32842 = (state_32863[2]);var state_32863__$1 = state_32863;var statearr_32878_32905 = state_32863__$1;(statearr_32878_32905[2] = inst_32842);
(statearr_32878_32905[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32864 === 12))
{var inst_32837 = (state_32863[7]);var inst_32847 = cljs.core.clj__GT_js.call(null,inst_32837);var inst_32848 = console.log(inst_32847);var state_32863__$1 = state_32863;var statearr_32879_32906 = state_32863__$1;(statearr_32879_32906[2] = inst_32848);
(statearr_32879_32906[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32864 === 13))
{var state_32863__$1 = state_32863;var statearr_32880_32907 = state_32863__$1;(statearr_32880_32907[2] = null);
(statearr_32880_32907[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32864 === 14))
{var inst_32837 = (state_32863[7]);var inst_32851 = (state_32863[2]);var state_32863__$1 = (function (){var statearr_32881 = state_32863;(statearr_32881[9] = inst_32851);
return statearr_32881;
})();var statearr_32882_32908 = state_32863__$1;(statearr_32882_32908[2] = inst_32837);
(statearr_32882_32908[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32864 === 15))
{var state_32863__$1 = state_32863;var statearr_32883_32909 = state_32863__$1;(statearr_32883_32909[2] = null);
(statearr_32883_32909[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32864 === 16))
{var state_32863__$1 = state_32863;var statearr_32884_32910 = state_32863__$1;(statearr_32884_32910[2] = null);
(statearr_32884_32910[1] = 17);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32864 === 17))
{var inst_32859 = (state_32863[2]);var state_32863__$1 = state_32863;var statearr_32885_32911 = state_32863__$1;(statearr_32885_32911[2] = inst_32859);
(statearr_32885_32911[1] = 3);
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
var state_machine__5507__auto____0 = (function (){var statearr_32889 = [null,null,null,null,null,null,null,null,null,null];(statearr_32889[0] = state_machine__5507__auto__);
(statearr_32889[1] = 1);
return statearr_32889;
});
var state_machine__5507__auto____1 = (function (state_32863){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_32863);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e32890){if((e32890 instanceof Object))
{var ex__5510__auto__ = e32890;var statearr_32891_32912 = state_32863;(statearr_32891_32912[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32863);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e32890;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__32913 = state_32863;
state_32863 = G__32913;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_32863){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_32863);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_32892 = f__5522__auto__.call(null);(statearr_32892[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___32893);
return statearr_32892;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5523__auto__);
}));
return null;
};
var dorun_async = function (ch,var_args){
var p__32774 = null;if (arguments.length > 1) {
  p__32774 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return dorun_async__delegate.call(this,ch,p__32774);};
dorun_async.cljs$lang$maxFixedArity = 1;
dorun_async.cljs$lang$applyTo = (function (arglist__32914){
var ch = cljs.core.first(arglist__32914);
var p__32774 = cljs.core.rest(arglist__32914);
return dorun_async__delegate(ch,p__32774);
});
dorun_async.cljs$core$IFn$_invoke$arity$variadic = dorun_async__delegate;
return dorun_async;
})()
;
