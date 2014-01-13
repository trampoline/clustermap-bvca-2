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
map_async.cljs$lang$applyTo = (function (arglist__28957){
var f = cljs.core.first(arglist__28957);
var colls = cljs.core.rest(arglist__28957);
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
var dorun_async__delegate = function (ch,p__28958){var map__29018 = p__28958;var map__29018__$1 = ((cljs.core.seq_QMARK_.call(null,map__29018))?cljs.core.apply.call(null,cljs.core.hash_map,map__29018):map__29018);var delay = cljs.core.get.call(null,map__29018__$1,new cljs.core.Keyword(null,"delay","delay",1109372149));var log = cljs.core.get.call(null,map__29018__$1,new cljs.core.Keyword(null,"log","log",1014011574));var c__5521__auto___29077 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_29047){var state_val_29048 = (state_29047[1]);if((state_val_29048 === 1))
{var state_29047__$1 = state_29047;var statearr_29049_29078 = state_29047__$1;(statearr_29049_29078[2] = null);
(statearr_29049_29078[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29048 === 2))
{var state_29047__$1 = state_29047;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29047__$1,4,ch);
} else
{if((state_val_29048 === 3))
{var inst_29045 = (state_29047[2]);var state_29047__$1 = state_29047;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29047__$1,inst_29045);
} else
{if((state_val_29048 === 4))
{var inst_29021 = (state_29047[7]);var inst_29021__$1 = (state_29047[2]);var state_29047__$1 = (function (){var statearr_29050 = state_29047;(statearr_29050[7] = inst_29021__$1);
return statearr_29050;
})();if(cljs.core.truth_(inst_29021__$1))
{var statearr_29051_29079 = state_29047__$1;(statearr_29051_29079[1] = 5);
} else
{var statearr_29052_29080 = state_29047__$1;(statearr_29052_29080[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29048 === 5))
{var state_29047__$1 = state_29047;if(cljs.core.truth_(delay))
{var statearr_29053_29081 = state_29047__$1;(statearr_29053_29081[1] = 8);
} else
{var statearr_29054_29082 = state_29047__$1;(statearr_29054_29082[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29048 === 6))
{var state_29047__$1 = state_29047;var statearr_29055_29083 = state_29047__$1;(statearr_29055_29083[2] = null);
(statearr_29055_29083[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29048 === 7))
{var inst_29038 = (state_29047[2]);var state_29047__$1 = state_29047;if(cljs.core.truth_(inst_29038))
{var statearr_29056_29084 = state_29047__$1;(statearr_29056_29084[1] = 15);
} else
{var statearr_29057_29085 = state_29047__$1;(statearr_29057_29085[1] = 16);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29048 === 8))
{var inst_29024 = cljs.core.async.timeout.call(null,delay);var state_29047__$1 = state_29047;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29047__$1,11,inst_29024);
} else
{if((state_val_29048 === 9))
{var state_29047__$1 = state_29047;var statearr_29058_29086 = state_29047__$1;(statearr_29058_29086[2] = null);
(statearr_29058_29086[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29048 === 10))
{var inst_29029 = (state_29047[2]);var state_29047__$1 = (function (){var statearr_29059 = state_29047;(statearr_29059[8] = inst_29029);
return statearr_29059;
})();if(cljs.core.truth_(log))
{var statearr_29060_29087 = state_29047__$1;(statearr_29060_29087[1] = 12);
} else
{var statearr_29061_29088 = state_29047__$1;(statearr_29061_29088[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29048 === 11))
{var inst_29026 = (state_29047[2]);var state_29047__$1 = state_29047;var statearr_29062_29089 = state_29047__$1;(statearr_29062_29089[2] = inst_29026);
(statearr_29062_29089[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29048 === 12))
{var inst_29021 = (state_29047[7]);var inst_29031 = cljs.core.clj__GT_js.call(null,inst_29021);var inst_29032 = console.log(inst_29031);var state_29047__$1 = state_29047;var statearr_29063_29090 = state_29047__$1;(statearr_29063_29090[2] = inst_29032);
(statearr_29063_29090[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29048 === 13))
{var state_29047__$1 = state_29047;var statearr_29064_29091 = state_29047__$1;(statearr_29064_29091[2] = null);
(statearr_29064_29091[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29048 === 14))
{var inst_29021 = (state_29047[7]);var inst_29035 = (state_29047[2]);var state_29047__$1 = (function (){var statearr_29065 = state_29047;(statearr_29065[9] = inst_29035);
return statearr_29065;
})();var statearr_29066_29092 = state_29047__$1;(statearr_29066_29092[2] = inst_29021);
(statearr_29066_29092[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29048 === 15))
{var state_29047__$1 = state_29047;var statearr_29067_29093 = state_29047__$1;(statearr_29067_29093[2] = null);
(statearr_29067_29093[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29048 === 16))
{var state_29047__$1 = state_29047;var statearr_29068_29094 = state_29047__$1;(statearr_29068_29094[2] = null);
(statearr_29068_29094[1] = 17);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29048 === 17))
{var inst_29043 = (state_29047[2]);var state_29047__$1 = state_29047;var statearr_29069_29095 = state_29047__$1;(statearr_29069_29095[2] = inst_29043);
(statearr_29069_29095[1] = 3);
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
var state_machine__5507__auto____0 = (function (){var statearr_29073 = [null,null,null,null,null,null,null,null,null,null];(statearr_29073[0] = state_machine__5507__auto__);
(statearr_29073[1] = 1);
return statearr_29073;
});
var state_machine__5507__auto____1 = (function (state_29047){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_29047);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e29074){if((e29074 instanceof Object))
{var ex__5510__auto__ = e29074;var statearr_29075_29096 = state_29047;(statearr_29075_29096[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29047);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e29074;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__29097 = state_29047;
state_29047 = G__29097;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_29047){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_29047);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_29076 = f__5522__auto__.call(null);(statearr_29076[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___29077);
return statearr_29076;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5523__auto__);
}));
return null;
};
var dorun_async = function (ch,var_args){
var p__28958 = null;if (arguments.length > 1) {
  p__28958 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return dorun_async__delegate.call(this,ch,p__28958);};
dorun_async.cljs$lang$maxFixedArity = 1;
dorun_async.cljs$lang$applyTo = (function (arglist__29098){
var ch = cljs.core.first(arglist__29098);
var p__28958 = cljs.core.rest(arglist__29098);
return dorun_async__delegate(ch,p__28958);
});
dorun_async.cljs$core$IFn$_invoke$arity$variadic = dorun_async__delegate;
return dorun_async;
})()
;
