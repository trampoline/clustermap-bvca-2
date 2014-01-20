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
map_async.cljs$lang$applyTo = (function (arglist__29867){
var f = cljs.core.first(arglist__29867);
var colls = cljs.core.rest(arglist__29867);
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
var dorun_async__delegate = function (ch,p__29868){var map__29928 = p__29868;var map__29928__$1 = ((cljs.core.seq_QMARK_.call(null,map__29928))?cljs.core.apply.call(null,cljs.core.hash_map,map__29928):map__29928);var delay = cljs.core.get.call(null,map__29928__$1,new cljs.core.Keyword(null,"delay","delay",1109372149));var log = cljs.core.get.call(null,map__29928__$1,new cljs.core.Keyword(null,"log","log",1014011574));var c__5521__auto___29987 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_29957){var state_val_29958 = (state_29957[1]);if((state_val_29958 === 1))
{var state_29957__$1 = state_29957;var statearr_29959_29988 = state_29957__$1;(statearr_29959_29988[2] = null);
(statearr_29959_29988[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29958 === 2))
{var state_29957__$1 = state_29957;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29957__$1,4,ch);
} else
{if((state_val_29958 === 3))
{var inst_29955 = (state_29957[2]);var state_29957__$1 = state_29957;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29957__$1,inst_29955);
} else
{if((state_val_29958 === 4))
{var inst_29931 = (state_29957[7]);var inst_29931__$1 = (state_29957[2]);var state_29957__$1 = (function (){var statearr_29960 = state_29957;(statearr_29960[7] = inst_29931__$1);
return statearr_29960;
})();if(cljs.core.truth_(inst_29931__$1))
{var statearr_29961_29989 = state_29957__$1;(statearr_29961_29989[1] = 5);
} else
{var statearr_29962_29990 = state_29957__$1;(statearr_29962_29990[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29958 === 5))
{var state_29957__$1 = state_29957;if(cljs.core.truth_(delay))
{var statearr_29963_29991 = state_29957__$1;(statearr_29963_29991[1] = 8);
} else
{var statearr_29964_29992 = state_29957__$1;(statearr_29964_29992[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29958 === 6))
{var state_29957__$1 = state_29957;var statearr_29965_29993 = state_29957__$1;(statearr_29965_29993[2] = null);
(statearr_29965_29993[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29958 === 7))
{var inst_29948 = (state_29957[2]);var state_29957__$1 = state_29957;if(cljs.core.truth_(inst_29948))
{var statearr_29966_29994 = state_29957__$1;(statearr_29966_29994[1] = 15);
} else
{var statearr_29967_29995 = state_29957__$1;(statearr_29967_29995[1] = 16);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29958 === 8))
{var inst_29934 = cljs.core.async.timeout.call(null,delay);var state_29957__$1 = state_29957;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29957__$1,11,inst_29934);
} else
{if((state_val_29958 === 9))
{var state_29957__$1 = state_29957;var statearr_29968_29996 = state_29957__$1;(statearr_29968_29996[2] = null);
(statearr_29968_29996[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29958 === 10))
{var inst_29939 = (state_29957[2]);var state_29957__$1 = (function (){var statearr_29969 = state_29957;(statearr_29969[8] = inst_29939);
return statearr_29969;
})();if(cljs.core.truth_(log))
{var statearr_29970_29997 = state_29957__$1;(statearr_29970_29997[1] = 12);
} else
{var statearr_29971_29998 = state_29957__$1;(statearr_29971_29998[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29958 === 11))
{var inst_29936 = (state_29957[2]);var state_29957__$1 = state_29957;var statearr_29972_29999 = state_29957__$1;(statearr_29972_29999[2] = inst_29936);
(statearr_29972_29999[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29958 === 12))
{var inst_29931 = (state_29957[7]);var inst_29941 = cljs.core.clj__GT_js.call(null,inst_29931);var inst_29942 = console.log(inst_29941);var state_29957__$1 = state_29957;var statearr_29973_30000 = state_29957__$1;(statearr_29973_30000[2] = inst_29942);
(statearr_29973_30000[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29958 === 13))
{var state_29957__$1 = state_29957;var statearr_29974_30001 = state_29957__$1;(statearr_29974_30001[2] = null);
(statearr_29974_30001[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29958 === 14))
{var inst_29931 = (state_29957[7]);var inst_29945 = (state_29957[2]);var state_29957__$1 = (function (){var statearr_29975 = state_29957;(statearr_29975[9] = inst_29945);
return statearr_29975;
})();var statearr_29976_30002 = state_29957__$1;(statearr_29976_30002[2] = inst_29931);
(statearr_29976_30002[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29958 === 15))
{var state_29957__$1 = state_29957;var statearr_29977_30003 = state_29957__$1;(statearr_29977_30003[2] = null);
(statearr_29977_30003[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29958 === 16))
{var state_29957__$1 = state_29957;var statearr_29978_30004 = state_29957__$1;(statearr_29978_30004[2] = null);
(statearr_29978_30004[1] = 17);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29958 === 17))
{var inst_29953 = (state_29957[2]);var state_29957__$1 = state_29957;var statearr_29979_30005 = state_29957__$1;(statearr_29979_30005[2] = inst_29953);
(statearr_29979_30005[1] = 3);
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
var state_machine__5507__auto____0 = (function (){var statearr_29983 = [null,null,null,null,null,null,null,null,null,null];(statearr_29983[0] = state_machine__5507__auto__);
(statearr_29983[1] = 1);
return statearr_29983;
});
var state_machine__5507__auto____1 = (function (state_29957){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_29957);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e29984){if((e29984 instanceof Object))
{var ex__5510__auto__ = e29984;var statearr_29985_30006 = state_29957;(statearr_29985_30006[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29957);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e29984;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__30007 = state_29957;
state_29957 = G__30007;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_29957){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_29957);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_29986 = f__5522__auto__.call(null);(statearr_29986[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___29987);
return statearr_29986;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5523__auto__);
}));
return null;
};
var dorun_async = function (ch,var_args){
var p__29868 = null;if (arguments.length > 1) {
  p__29868 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return dorun_async__delegate.call(this,ch,p__29868);};
dorun_async.cljs$lang$maxFixedArity = 1;
dorun_async.cljs$lang$applyTo = (function (arglist__30008){
var ch = cljs.core.first(arglist__30008);
var p__29868 = cljs.core.rest(arglist__30008);
return dorun_async__delegate(ch,p__29868);
});
dorun_async.cljs$core$IFn$_invoke$arity$variadic = dorun_async__delegate;
return dorun_async;
})()
;
