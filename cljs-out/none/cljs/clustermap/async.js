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
map_async.cljs$lang$applyTo = (function (arglist__22765){
var f = cljs.core.first(arglist__22765);
var colls = cljs.core.rest(arglist__22765);
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
var dorun_async__delegate = function (ch,p__22766){var map__22826 = p__22766;var map__22826__$1 = ((cljs.core.seq_QMARK_.call(null,map__22826))?cljs.core.apply.call(null,cljs.core.hash_map,map__22826):map__22826);var delay = cljs.core.get.call(null,map__22826__$1,new cljs.core.Keyword(null,"delay","delay",1109372149));var log = cljs.core.get.call(null,map__22826__$1,new cljs.core.Keyword(null,"log","log",1014011574));var c__5562__auto___22885 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_22855){var state_val_22856 = (state_22855[1]);if((state_val_22856 === 1))
{var state_22855__$1 = state_22855;var statearr_22857_22886 = state_22855__$1;(statearr_22857_22886[2] = null);
(statearr_22857_22886[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22856 === 2))
{var state_22855__$1 = state_22855;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22855__$1,4,ch);
} else
{if((state_val_22856 === 3))
{var inst_22853 = (state_22855[2]);var state_22855__$1 = state_22855;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22855__$1,inst_22853);
} else
{if((state_val_22856 === 4))
{var inst_22829 = (state_22855[7]);var inst_22829__$1 = (state_22855[2]);var state_22855__$1 = (function (){var statearr_22858 = state_22855;(statearr_22858[7] = inst_22829__$1);
return statearr_22858;
})();if(cljs.core.truth_(inst_22829__$1))
{var statearr_22859_22887 = state_22855__$1;(statearr_22859_22887[1] = 5);
} else
{var statearr_22860_22888 = state_22855__$1;(statearr_22860_22888[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22856 === 5))
{var state_22855__$1 = state_22855;if(cljs.core.truth_(delay))
{var statearr_22861_22889 = state_22855__$1;(statearr_22861_22889[1] = 8);
} else
{var statearr_22862_22890 = state_22855__$1;(statearr_22862_22890[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22856 === 6))
{var state_22855__$1 = state_22855;var statearr_22863_22891 = state_22855__$1;(statearr_22863_22891[2] = null);
(statearr_22863_22891[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22856 === 7))
{var inst_22846 = (state_22855[2]);var state_22855__$1 = state_22855;if(cljs.core.truth_(inst_22846))
{var statearr_22864_22892 = state_22855__$1;(statearr_22864_22892[1] = 15);
} else
{var statearr_22865_22893 = state_22855__$1;(statearr_22865_22893[1] = 16);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22856 === 8))
{var inst_22832 = cljs.core.async.timeout.call(null,delay);var state_22855__$1 = state_22855;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22855__$1,11,inst_22832);
} else
{if((state_val_22856 === 9))
{var state_22855__$1 = state_22855;var statearr_22866_22894 = state_22855__$1;(statearr_22866_22894[2] = null);
(statearr_22866_22894[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22856 === 10))
{var inst_22837 = (state_22855[2]);var state_22855__$1 = (function (){var statearr_22867 = state_22855;(statearr_22867[8] = inst_22837);
return statearr_22867;
})();if(cljs.core.truth_(log))
{var statearr_22868_22895 = state_22855__$1;(statearr_22868_22895[1] = 12);
} else
{var statearr_22869_22896 = state_22855__$1;(statearr_22869_22896[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22856 === 11))
{var inst_22834 = (state_22855[2]);var state_22855__$1 = state_22855;var statearr_22870_22897 = state_22855__$1;(statearr_22870_22897[2] = inst_22834);
(statearr_22870_22897[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22856 === 12))
{var inst_22829 = (state_22855[7]);var inst_22839 = cljs.core.clj__GT_js.call(null,inst_22829);var inst_22840 = console.log(inst_22839);var state_22855__$1 = state_22855;var statearr_22871_22898 = state_22855__$1;(statearr_22871_22898[2] = inst_22840);
(statearr_22871_22898[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22856 === 13))
{var state_22855__$1 = state_22855;var statearr_22872_22899 = state_22855__$1;(statearr_22872_22899[2] = null);
(statearr_22872_22899[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22856 === 14))
{var inst_22829 = (state_22855[7]);var inst_22843 = (state_22855[2]);var state_22855__$1 = (function (){var statearr_22873 = state_22855;(statearr_22873[9] = inst_22843);
return statearr_22873;
})();var statearr_22874_22900 = state_22855__$1;(statearr_22874_22900[2] = inst_22829);
(statearr_22874_22900[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22856 === 15))
{var state_22855__$1 = state_22855;var statearr_22875_22901 = state_22855__$1;(statearr_22875_22901[2] = null);
(statearr_22875_22901[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22856 === 16))
{var state_22855__$1 = state_22855;var statearr_22876_22902 = state_22855__$1;(statearr_22876_22902[2] = null);
(statearr_22876_22902[1] = 17);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22856 === 17))
{var inst_22851 = (state_22855[2]);var state_22855__$1 = state_22855;var statearr_22877_22903 = state_22855__$1;(statearr_22877_22903[2] = inst_22851);
(statearr_22877_22903[1] = 3);
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
var state_machine__5548__auto____0 = (function (){var statearr_22881 = [null,null,null,null,null,null,null,null,null,null];(statearr_22881[0] = state_machine__5548__auto__);
(statearr_22881[1] = 1);
return statearr_22881;
});
var state_machine__5548__auto____1 = (function (state_22855){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__.call(null,state_22855);if(cljs.core.keyword_identical_QMARK_.call(null,result__5550__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e22882){if((e22882 instanceof Object))
{var ex__5551__auto__ = e22882;var statearr_22883_22904 = state_22855;(statearr_22883_22904[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22855);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e22882;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5549__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__22905 = state_22855;
state_22855 = G__22905;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_22855){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_22855);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_22884 = f__5563__auto__.call(null);(statearr_22884[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto___22885);
return statearr_22884;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5564__auto__);
}));
return null;
};
var dorun_async = function (ch,var_args){
var p__22766 = null;if (arguments.length > 1) {
  p__22766 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return dorun_async__delegate.call(this,ch,p__22766);};
dorun_async.cljs$lang$maxFixedArity = 1;
dorun_async.cljs$lang$applyTo = (function (arglist__22906){
var ch = cljs.core.first(arglist__22906);
var p__22766 = cljs.core.rest(arglist__22906);
return dorun_async__delegate(ch,p__22766);
});
dorun_async.cljs$core$IFn$_invoke$arity$variadic = dorun_async__delegate;
return dorun_async;
})()
;

//# sourceMappingURL=async.js.map