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
map_async.cljs$lang$applyTo = (function (arglist__22789){
var f = cljs.core.first(arglist__22789);
var colls = cljs.core.rest(arglist__22789);
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
var dorun_async__delegate = function (ch,p__22790){var map__22850 = p__22790;var map__22850__$1 = ((cljs.core.seq_QMARK_.call(null,map__22850))?cljs.core.apply.call(null,cljs.core.hash_map,map__22850):map__22850);var delay = cljs.core.get.call(null,map__22850__$1,new cljs.core.Keyword(null,"delay","delay",1109372149));var log = cljs.core.get.call(null,map__22850__$1,new cljs.core.Keyword(null,"log","log",1014011574));var c__5562__auto___22909 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_22879){var state_val_22880 = (state_22879[1]);if((state_val_22880 === 1))
{var state_22879__$1 = state_22879;var statearr_22881_22910 = state_22879__$1;(statearr_22881_22910[2] = null);
(statearr_22881_22910[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22880 === 2))
{var state_22879__$1 = state_22879;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22879__$1,4,ch);
} else
{if((state_val_22880 === 3))
{var inst_22877 = (state_22879[2]);var state_22879__$1 = state_22879;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22879__$1,inst_22877);
} else
{if((state_val_22880 === 4))
{var inst_22853 = (state_22879[7]);var inst_22853__$1 = (state_22879[2]);var state_22879__$1 = (function (){var statearr_22882 = state_22879;(statearr_22882[7] = inst_22853__$1);
return statearr_22882;
})();if(cljs.core.truth_(inst_22853__$1))
{var statearr_22883_22911 = state_22879__$1;(statearr_22883_22911[1] = 5);
} else
{var statearr_22884_22912 = state_22879__$1;(statearr_22884_22912[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22880 === 5))
{var state_22879__$1 = state_22879;if(cljs.core.truth_(delay))
{var statearr_22885_22913 = state_22879__$1;(statearr_22885_22913[1] = 8);
} else
{var statearr_22886_22914 = state_22879__$1;(statearr_22886_22914[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22880 === 6))
{var state_22879__$1 = state_22879;var statearr_22887_22915 = state_22879__$1;(statearr_22887_22915[2] = null);
(statearr_22887_22915[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22880 === 7))
{var inst_22870 = (state_22879[2]);var state_22879__$1 = state_22879;if(cljs.core.truth_(inst_22870))
{var statearr_22888_22916 = state_22879__$1;(statearr_22888_22916[1] = 15);
} else
{var statearr_22889_22917 = state_22879__$1;(statearr_22889_22917[1] = 16);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22880 === 8))
{var inst_22856 = cljs.core.async.timeout.call(null,delay);var state_22879__$1 = state_22879;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22879__$1,11,inst_22856);
} else
{if((state_val_22880 === 9))
{var state_22879__$1 = state_22879;var statearr_22890_22918 = state_22879__$1;(statearr_22890_22918[2] = null);
(statearr_22890_22918[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22880 === 10))
{var inst_22861 = (state_22879[2]);var state_22879__$1 = (function (){var statearr_22891 = state_22879;(statearr_22891[8] = inst_22861);
return statearr_22891;
})();if(cljs.core.truth_(log))
{var statearr_22892_22919 = state_22879__$1;(statearr_22892_22919[1] = 12);
} else
{var statearr_22893_22920 = state_22879__$1;(statearr_22893_22920[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22880 === 11))
{var inst_22858 = (state_22879[2]);var state_22879__$1 = state_22879;var statearr_22894_22921 = state_22879__$1;(statearr_22894_22921[2] = inst_22858);
(statearr_22894_22921[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22880 === 12))
{var inst_22853 = (state_22879[7]);var inst_22863 = cljs.core.clj__GT_js.call(null,inst_22853);var inst_22864 = console.log(inst_22863);var state_22879__$1 = state_22879;var statearr_22895_22922 = state_22879__$1;(statearr_22895_22922[2] = inst_22864);
(statearr_22895_22922[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22880 === 13))
{var state_22879__$1 = state_22879;var statearr_22896_22923 = state_22879__$1;(statearr_22896_22923[2] = null);
(statearr_22896_22923[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22880 === 14))
{var inst_22853 = (state_22879[7]);var inst_22867 = (state_22879[2]);var state_22879__$1 = (function (){var statearr_22897 = state_22879;(statearr_22897[9] = inst_22867);
return statearr_22897;
})();var statearr_22898_22924 = state_22879__$1;(statearr_22898_22924[2] = inst_22853);
(statearr_22898_22924[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22880 === 15))
{var state_22879__$1 = state_22879;var statearr_22899_22925 = state_22879__$1;(statearr_22899_22925[2] = null);
(statearr_22899_22925[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22880 === 16))
{var state_22879__$1 = state_22879;var statearr_22900_22926 = state_22879__$1;(statearr_22900_22926[2] = null);
(statearr_22900_22926[1] = 17);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22880 === 17))
{var inst_22875 = (state_22879[2]);var state_22879__$1 = state_22879;var statearr_22901_22927 = state_22879__$1;(statearr_22901_22927[2] = inst_22875);
(statearr_22901_22927[1] = 3);
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
var state_machine__5548__auto____0 = (function (){var statearr_22905 = [null,null,null,null,null,null,null,null,null,null];(statearr_22905[0] = state_machine__5548__auto__);
(statearr_22905[1] = 1);
return statearr_22905;
});
var state_machine__5548__auto____1 = (function (state_22879){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__.call(null,state_22879);if(cljs.core.keyword_identical_QMARK_.call(null,result__5550__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e22906){if((e22906 instanceof Object))
{var ex__5551__auto__ = e22906;var statearr_22907_22928 = state_22879;(statearr_22907_22928[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22879);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e22906;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5549__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__22929 = state_22879;
state_22879 = G__22929;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_22879){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_22879);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_22908 = f__5563__auto__.call(null);(statearr_22908[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto___22909);
return statearr_22908;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5564__auto__);
}));
return null;
};
var dorun_async = function (ch,var_args){
var p__22790 = null;if (arguments.length > 1) {
  p__22790 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return dorun_async__delegate.call(this,ch,p__22790);};
dorun_async.cljs$lang$maxFixedArity = 1;
dorun_async.cljs$lang$applyTo = (function (arglist__22930){
var ch = cljs.core.first(arglist__22930);
var p__22790 = cljs.core.rest(arglist__22930);
return dorun_async__delegate(ch,p__22790);
});
dorun_async.cljs$core$IFn$_invoke$arity$variadic = dorun_async__delegate;
return dorun_async;
})()
;

//# sourceMappingURL=async.js.map