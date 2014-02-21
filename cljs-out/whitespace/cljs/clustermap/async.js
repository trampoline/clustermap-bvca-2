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
map_async.cljs$lang$applyTo = (function (arglist__32783){
var f = cljs.core.first(arglist__32783);
var colls = cljs.core.rest(arglist__32783);
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
var dorun_async__delegate = function (ch,p__32784){var map__32844 = p__32784;var map__32844__$1 = ((cljs.core.seq_QMARK_.call(null,map__32844))?cljs.core.apply.call(null,cljs.core.hash_map,map__32844):map__32844);var delay = cljs.core.get.call(null,map__32844__$1,new cljs.core.Keyword(null,"delay","delay",1109372149));var log = cljs.core.get.call(null,map__32844__$1,new cljs.core.Keyword(null,"log","log",1014011574));var c__5521__auto___32903 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_32873){var state_val_32874 = (state_32873[1]);if((state_val_32874 === 1))
{var state_32873__$1 = state_32873;var statearr_32875_32904 = state_32873__$1;(statearr_32875_32904[2] = null);
(statearr_32875_32904[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32874 === 2))
{var state_32873__$1 = state_32873;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32873__$1,4,ch);
} else
{if((state_val_32874 === 3))
{var inst_32871 = (state_32873[2]);var state_32873__$1 = state_32873;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32873__$1,inst_32871);
} else
{if((state_val_32874 === 4))
{var inst_32847 = (state_32873[7]);var inst_32847__$1 = (state_32873[2]);var state_32873__$1 = (function (){var statearr_32876 = state_32873;(statearr_32876[7] = inst_32847__$1);
return statearr_32876;
})();if(cljs.core.truth_(inst_32847__$1))
{var statearr_32877_32905 = state_32873__$1;(statearr_32877_32905[1] = 5);
} else
{var statearr_32878_32906 = state_32873__$1;(statearr_32878_32906[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32874 === 5))
{var state_32873__$1 = state_32873;if(cljs.core.truth_(delay))
{var statearr_32879_32907 = state_32873__$1;(statearr_32879_32907[1] = 8);
} else
{var statearr_32880_32908 = state_32873__$1;(statearr_32880_32908[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32874 === 6))
{var state_32873__$1 = state_32873;var statearr_32881_32909 = state_32873__$1;(statearr_32881_32909[2] = null);
(statearr_32881_32909[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32874 === 7))
{var inst_32864 = (state_32873[2]);var state_32873__$1 = state_32873;if(cljs.core.truth_(inst_32864))
{var statearr_32882_32910 = state_32873__$1;(statearr_32882_32910[1] = 15);
} else
{var statearr_32883_32911 = state_32873__$1;(statearr_32883_32911[1] = 16);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32874 === 8))
{var inst_32850 = cljs.core.async.timeout.call(null,delay);var state_32873__$1 = state_32873;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32873__$1,11,inst_32850);
} else
{if((state_val_32874 === 9))
{var state_32873__$1 = state_32873;var statearr_32884_32912 = state_32873__$1;(statearr_32884_32912[2] = null);
(statearr_32884_32912[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32874 === 10))
{var inst_32855 = (state_32873[2]);var state_32873__$1 = (function (){var statearr_32885 = state_32873;(statearr_32885[8] = inst_32855);
return statearr_32885;
})();if(cljs.core.truth_(log))
{var statearr_32886_32913 = state_32873__$1;(statearr_32886_32913[1] = 12);
} else
{var statearr_32887_32914 = state_32873__$1;(statearr_32887_32914[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32874 === 11))
{var inst_32852 = (state_32873[2]);var state_32873__$1 = state_32873;var statearr_32888_32915 = state_32873__$1;(statearr_32888_32915[2] = inst_32852);
(statearr_32888_32915[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32874 === 12))
{var inst_32847 = (state_32873[7]);var inst_32857 = cljs.core.clj__GT_js.call(null,inst_32847);var inst_32858 = console.log(inst_32857);var state_32873__$1 = state_32873;var statearr_32889_32916 = state_32873__$1;(statearr_32889_32916[2] = inst_32858);
(statearr_32889_32916[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32874 === 13))
{var state_32873__$1 = state_32873;var statearr_32890_32917 = state_32873__$1;(statearr_32890_32917[2] = null);
(statearr_32890_32917[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32874 === 14))
{var inst_32847 = (state_32873[7]);var inst_32861 = (state_32873[2]);var state_32873__$1 = (function (){var statearr_32891 = state_32873;(statearr_32891[9] = inst_32861);
return statearr_32891;
})();var statearr_32892_32918 = state_32873__$1;(statearr_32892_32918[2] = inst_32847);
(statearr_32892_32918[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32874 === 15))
{var state_32873__$1 = state_32873;var statearr_32893_32919 = state_32873__$1;(statearr_32893_32919[2] = null);
(statearr_32893_32919[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32874 === 16))
{var state_32873__$1 = state_32873;var statearr_32894_32920 = state_32873__$1;(statearr_32894_32920[2] = null);
(statearr_32894_32920[1] = 17);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32874 === 17))
{var inst_32869 = (state_32873[2]);var state_32873__$1 = state_32873;var statearr_32895_32921 = state_32873__$1;(statearr_32895_32921[2] = inst_32869);
(statearr_32895_32921[1] = 3);
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
var state_machine__5507__auto____0 = (function (){var statearr_32899 = [null,null,null,null,null,null,null,null,null,null];(statearr_32899[0] = state_machine__5507__auto__);
(statearr_32899[1] = 1);
return statearr_32899;
});
var state_machine__5507__auto____1 = (function (state_32873){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_32873);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e32900){if((e32900 instanceof Object))
{var ex__5510__auto__ = e32900;var statearr_32901_32922 = state_32873;(statearr_32901_32922[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32873);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e32900;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__32923 = state_32873;
state_32873 = G__32923;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_32873){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_32873);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_32902 = f__5522__auto__.call(null);(statearr_32902[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___32903);
return statearr_32902;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5523__auto__);
}));
return null;
};
var dorun_async = function (ch,var_args){
var p__32784 = null;if (arguments.length > 1) {
  p__32784 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return dorun_async__delegate.call(this,ch,p__32784);};
dorun_async.cljs$lang$maxFixedArity = 1;
dorun_async.cljs$lang$applyTo = (function (arglist__32924){
var ch = cljs.core.first(arglist__32924);
var p__32784 = cljs.core.rest(arglist__32924);
return dorun_async__delegate(ch,p__32784);
});
dorun_async.cljs$core$IFn$_invoke$arity$variadic = dorun_async__delegate;
return dorun_async;
})()
;
