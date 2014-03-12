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
map_async.cljs$lang$applyTo = (function (arglist__22783){
var f = cljs.core.first(arglist__22783);
var colls = cljs.core.rest(arglist__22783);
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
var dorun_async__delegate = function (ch,p__22784){var map__22844 = p__22784;var map__22844__$1 = ((cljs.core.seq_QMARK_.call(null,map__22844))?cljs.core.apply.call(null,cljs.core.hash_map,map__22844):map__22844);var delay = cljs.core.get.call(null,map__22844__$1,new cljs.core.Keyword(null,"delay","delay",1109372149));var log = cljs.core.get.call(null,map__22844__$1,new cljs.core.Keyword(null,"log","log",1014011574));var c__5562__auto___22903 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_22873){var state_val_22874 = (state_22873[1]);if((state_val_22874 === 1))
{var state_22873__$1 = state_22873;var statearr_22875_22904 = state_22873__$1;(statearr_22875_22904[2] = null);
(statearr_22875_22904[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22874 === 2))
{var state_22873__$1 = state_22873;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22873__$1,4,ch);
} else
{if((state_val_22874 === 3))
{var inst_22871 = (state_22873[2]);var state_22873__$1 = state_22873;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22873__$1,inst_22871);
} else
{if((state_val_22874 === 4))
{var inst_22847 = (state_22873[7]);var inst_22847__$1 = (state_22873[2]);var state_22873__$1 = (function (){var statearr_22876 = state_22873;(statearr_22876[7] = inst_22847__$1);
return statearr_22876;
})();if(cljs.core.truth_(inst_22847__$1))
{var statearr_22877_22905 = state_22873__$1;(statearr_22877_22905[1] = 5);
} else
{var statearr_22878_22906 = state_22873__$1;(statearr_22878_22906[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22874 === 5))
{var state_22873__$1 = state_22873;if(cljs.core.truth_(delay))
{var statearr_22879_22907 = state_22873__$1;(statearr_22879_22907[1] = 8);
} else
{var statearr_22880_22908 = state_22873__$1;(statearr_22880_22908[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22874 === 6))
{var state_22873__$1 = state_22873;var statearr_22881_22909 = state_22873__$1;(statearr_22881_22909[2] = null);
(statearr_22881_22909[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22874 === 7))
{var inst_22864 = (state_22873[2]);var state_22873__$1 = state_22873;if(cljs.core.truth_(inst_22864))
{var statearr_22882_22910 = state_22873__$1;(statearr_22882_22910[1] = 15);
} else
{var statearr_22883_22911 = state_22873__$1;(statearr_22883_22911[1] = 16);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22874 === 8))
{var inst_22850 = cljs.core.async.timeout.call(null,delay);var state_22873__$1 = state_22873;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22873__$1,11,inst_22850);
} else
{if((state_val_22874 === 9))
{var state_22873__$1 = state_22873;var statearr_22884_22912 = state_22873__$1;(statearr_22884_22912[2] = null);
(statearr_22884_22912[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22874 === 10))
{var inst_22855 = (state_22873[2]);var state_22873__$1 = (function (){var statearr_22885 = state_22873;(statearr_22885[8] = inst_22855);
return statearr_22885;
})();if(cljs.core.truth_(log))
{var statearr_22886_22913 = state_22873__$1;(statearr_22886_22913[1] = 12);
} else
{var statearr_22887_22914 = state_22873__$1;(statearr_22887_22914[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22874 === 11))
{var inst_22852 = (state_22873[2]);var state_22873__$1 = state_22873;var statearr_22888_22915 = state_22873__$1;(statearr_22888_22915[2] = inst_22852);
(statearr_22888_22915[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22874 === 12))
{var inst_22847 = (state_22873[7]);var inst_22857 = cljs.core.clj__GT_js.call(null,inst_22847);var inst_22858 = console.log(inst_22857);var state_22873__$1 = state_22873;var statearr_22889_22916 = state_22873__$1;(statearr_22889_22916[2] = inst_22858);
(statearr_22889_22916[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22874 === 13))
{var state_22873__$1 = state_22873;var statearr_22890_22917 = state_22873__$1;(statearr_22890_22917[2] = null);
(statearr_22890_22917[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22874 === 14))
{var inst_22847 = (state_22873[7]);var inst_22861 = (state_22873[2]);var state_22873__$1 = (function (){var statearr_22891 = state_22873;(statearr_22891[9] = inst_22861);
return statearr_22891;
})();var statearr_22892_22918 = state_22873__$1;(statearr_22892_22918[2] = inst_22847);
(statearr_22892_22918[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22874 === 15))
{var state_22873__$1 = state_22873;var statearr_22893_22919 = state_22873__$1;(statearr_22893_22919[2] = null);
(statearr_22893_22919[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22874 === 16))
{var state_22873__$1 = state_22873;var statearr_22894_22920 = state_22873__$1;(statearr_22894_22920[2] = null);
(statearr_22894_22920[1] = 17);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22874 === 17))
{var inst_22869 = (state_22873[2]);var state_22873__$1 = state_22873;var statearr_22895_22921 = state_22873__$1;(statearr_22895_22921[2] = inst_22869);
(statearr_22895_22921[1] = 3);
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
var state_machine__5548__auto____0 = (function (){var statearr_22899 = [null,null,null,null,null,null,null,null,null,null];(statearr_22899[0] = state_machine__5548__auto__);
(statearr_22899[1] = 1);
return statearr_22899;
});
var state_machine__5548__auto____1 = (function (state_22873){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__.call(null,state_22873);if(cljs.core.keyword_identical_QMARK_.call(null,result__5550__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e22900){if((e22900 instanceof Object))
{var ex__5551__auto__ = e22900;var statearr_22901_22922 = state_22873;(statearr_22901_22922[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22873);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e22900;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5549__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__22923 = state_22873;
state_22873 = G__22923;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_22873){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_22873);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_22902 = f__5563__auto__.call(null);(statearr_22902[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto___22903);
return statearr_22902;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5564__auto__);
}));
return null;
};
var dorun_async = function (ch,var_args){
var p__22784 = null;if (arguments.length > 1) {
  p__22784 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return dorun_async__delegate.call(this,ch,p__22784);};
dorun_async.cljs$lang$maxFixedArity = 1;
dorun_async.cljs$lang$applyTo = (function (arglist__22924){
var ch = cljs.core.first(arglist__22924);
var p__22784 = cljs.core.rest(arglist__22924);
return dorun_async__delegate(ch,p__22784);
});
dorun_async.cljs$core$IFn$_invoke$arity$variadic = dorun_async__delegate;
return dorun_async;
})()
;

//# sourceMappingURL=async.js.map