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
map_async.cljs$lang$applyTo = (function (arglist__10867){
var f = cljs.core.first(arglist__10867);
var colls = cljs.core.rest(arglist__10867);
return map_async__delegate(f,colls);
});
map_async.cljs$core$IFn$_invoke$arity$variadic = map_async__delegate;
return map_async;
})()
;
/**
* asynch consume all values from a channel
* @param {...*} var_args
*/
clustermap.async.dorun_async = (function() { 
var dorun_async__delegate = function (ch,p__10868){var map__10928 = p__10868;var map__10928__$1 = ((cljs.core.seq_QMARK_.call(null,map__10928))?cljs.core.apply.call(null,cljs.core.hash_map,map__10928):map__10928);var delay = cljs.core.get.call(null,map__10928__$1,new cljs.core.Keyword(null,"delay","delay",1109372149));var log = cljs.core.get.call(null,map__10928__$1,new cljs.core.Keyword(null,"log","log",1014011574));var c__5521__auto___10987 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_10957){var state_val_10958 = (state_10957[1]);if((state_val_10958 === 1))
{var state_10957__$1 = state_10957;var statearr_10959_10988 = state_10957__$1;(statearr_10959_10988[2] = null);
(statearr_10959_10988[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10958 === 2))
{var state_10957__$1 = state_10957;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10957__$1,4,ch);
} else
{if((state_val_10958 === 3))
{var inst_10955 = (state_10957[2]);var state_10957__$1 = state_10957;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10957__$1,inst_10955);
} else
{if((state_val_10958 === 4))
{var inst_10931 = (state_10957[7]);var inst_10931__$1 = (state_10957[2]);var state_10957__$1 = (function (){var statearr_10960 = state_10957;(statearr_10960[7] = inst_10931__$1);
return statearr_10960;
})();if(cljs.core.truth_(inst_10931__$1))
{var statearr_10961_10989 = state_10957__$1;(statearr_10961_10989[1] = 5);
} else
{var statearr_10962_10990 = state_10957__$1;(statearr_10962_10990[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10958 === 5))
{var state_10957__$1 = state_10957;if(cljs.core.truth_(delay))
{var statearr_10963_10991 = state_10957__$1;(statearr_10963_10991[1] = 8);
} else
{var statearr_10964_10992 = state_10957__$1;(statearr_10964_10992[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10958 === 6))
{var state_10957__$1 = state_10957;var statearr_10965_10993 = state_10957__$1;(statearr_10965_10993[2] = null);
(statearr_10965_10993[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10958 === 7))
{var inst_10948 = (state_10957[2]);var state_10957__$1 = state_10957;if(cljs.core.truth_(inst_10948))
{var statearr_10966_10994 = state_10957__$1;(statearr_10966_10994[1] = 15);
} else
{var statearr_10967_10995 = state_10957__$1;(statearr_10967_10995[1] = 16);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10958 === 8))
{var inst_10934 = cljs.core.async.timeout.call(null,delay);var state_10957__$1 = state_10957;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10957__$1,11,inst_10934);
} else
{if((state_val_10958 === 9))
{var state_10957__$1 = state_10957;var statearr_10968_10996 = state_10957__$1;(statearr_10968_10996[2] = null);
(statearr_10968_10996[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10958 === 10))
{var inst_10939 = (state_10957[2]);var state_10957__$1 = (function (){var statearr_10969 = state_10957;(statearr_10969[8] = inst_10939);
return statearr_10969;
})();if(cljs.core.truth_(log))
{var statearr_10970_10997 = state_10957__$1;(statearr_10970_10997[1] = 12);
} else
{var statearr_10971_10998 = state_10957__$1;(statearr_10971_10998[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10958 === 11))
{var inst_10936 = (state_10957[2]);var state_10957__$1 = state_10957;var statearr_10972_10999 = state_10957__$1;(statearr_10972_10999[2] = inst_10936);
(statearr_10972_10999[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10958 === 12))
{var inst_10931 = (state_10957[7]);var inst_10941 = cljs.core.clj__GT_js.call(null,inst_10931);var inst_10942 = console.log(inst_10941);var state_10957__$1 = state_10957;var statearr_10973_11000 = state_10957__$1;(statearr_10973_11000[2] = inst_10942);
(statearr_10973_11000[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10958 === 13))
{var state_10957__$1 = state_10957;var statearr_10974_11001 = state_10957__$1;(statearr_10974_11001[2] = null);
(statearr_10974_11001[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10958 === 14))
{var inst_10931 = (state_10957[7]);var inst_10945 = (state_10957[2]);var state_10957__$1 = (function (){var statearr_10975 = state_10957;(statearr_10975[9] = inst_10945);
return statearr_10975;
})();var statearr_10976_11002 = state_10957__$1;(statearr_10976_11002[2] = inst_10931);
(statearr_10976_11002[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10958 === 15))
{var state_10957__$1 = state_10957;var statearr_10977_11003 = state_10957__$1;(statearr_10977_11003[2] = null);
(statearr_10977_11003[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10958 === 16))
{var state_10957__$1 = state_10957;var statearr_10978_11004 = state_10957__$1;(statearr_10978_11004[2] = null);
(statearr_10978_11004[1] = 17);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10958 === 17))
{var inst_10953 = (state_10957[2]);var state_10957__$1 = state_10957;var statearr_10979_11005 = state_10957__$1;(statearr_10979_11005[2] = inst_10953);
(statearr_10979_11005[1] = 3);
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
var state_machine__5507__auto____0 = (function (){var statearr_10983 = [null,null,null,null,null,null,null,null,null,null];(statearr_10983[0] = state_machine__5507__auto__);
(statearr_10983[1] = 1);
return statearr_10983;
});
var state_machine__5507__auto____1 = (function (state_10957){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_10957);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e10984){if((e10984 instanceof Object))
{var ex__5510__auto__ = e10984;var statearr_10985_11006 = state_10957;(statearr_10985_11006[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10957);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10984;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11007 = state_10957;
state_10957 = G__11007;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_10957){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_10957);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_10986 = f__5522__auto__.call(null);(statearr_10986[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___10987);
return statearr_10986;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5523__auto__);
}));
return null;
};
var dorun_async = function (ch,var_args){
var p__10868 = null;if (arguments.length > 1) {
  p__10868 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return dorun_async__delegate.call(this,ch,p__10868);};
dorun_async.cljs$lang$maxFixedArity = 1;
dorun_async.cljs$lang$applyTo = (function (arglist__11008){
var ch = cljs.core.first(arglist__11008);
var p__10868 = cljs.core.rest(arglist__11008);
return dorun_async__delegate(ch,p__10868);
});
dorun_async.cljs$core$IFn$_invoke$arity$variadic = dorun_async__delegate;
return dorun_async;
})()
;

//# sourceMappingURL=async.js.map