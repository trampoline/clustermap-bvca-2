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
map_async.cljs$lang$applyTo = (function (arglist__21919){
var f = cljs.core.first(arglist__21919);
var colls = cljs.core.rest(arglist__21919);
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
var dorun_async__delegate = function (ch,p__21920){var map__21980 = p__21920;var map__21980__$1 = ((cljs.core.seq_QMARK_.call(null,map__21980))?cljs.core.apply.call(null,cljs.core.hash_map,map__21980):map__21980);var delay = cljs.core.get.call(null,map__21980__$1,new cljs.core.Keyword(null,"delay","delay",1109372149));var log = cljs.core.get.call(null,map__21980__$1,new cljs.core.Keyword(null,"log","log",1014011574));var c__5521__auto___22039 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_22009){var state_val_22010 = (state_22009[1]);if((state_val_22010 === 1))
{var state_22009__$1 = state_22009;var statearr_22011_22040 = state_22009__$1;(statearr_22011_22040[2] = null);
(statearr_22011_22040[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22010 === 2))
{var state_22009__$1 = state_22009;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22009__$1,4,ch);
} else
{if((state_val_22010 === 3))
{var inst_22007 = (state_22009[2]);var state_22009__$1 = state_22009;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22009__$1,inst_22007);
} else
{if((state_val_22010 === 4))
{var inst_21983 = (state_22009[7]);var inst_21983__$1 = (state_22009[2]);var state_22009__$1 = (function (){var statearr_22012 = state_22009;(statearr_22012[7] = inst_21983__$1);
return statearr_22012;
})();if(cljs.core.truth_(inst_21983__$1))
{var statearr_22013_22041 = state_22009__$1;(statearr_22013_22041[1] = 5);
} else
{var statearr_22014_22042 = state_22009__$1;(statearr_22014_22042[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22010 === 5))
{var state_22009__$1 = state_22009;if(cljs.core.truth_(delay))
{var statearr_22015_22043 = state_22009__$1;(statearr_22015_22043[1] = 8);
} else
{var statearr_22016_22044 = state_22009__$1;(statearr_22016_22044[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22010 === 6))
{var state_22009__$1 = state_22009;var statearr_22017_22045 = state_22009__$1;(statearr_22017_22045[2] = null);
(statearr_22017_22045[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22010 === 7))
{var inst_22000 = (state_22009[2]);var state_22009__$1 = state_22009;if(cljs.core.truth_(inst_22000))
{var statearr_22018_22046 = state_22009__$1;(statearr_22018_22046[1] = 15);
} else
{var statearr_22019_22047 = state_22009__$1;(statearr_22019_22047[1] = 16);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22010 === 8))
{var inst_21986 = cljs.core.async.timeout.call(null,delay);var state_22009__$1 = state_22009;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22009__$1,11,inst_21986);
} else
{if((state_val_22010 === 9))
{var state_22009__$1 = state_22009;var statearr_22020_22048 = state_22009__$1;(statearr_22020_22048[2] = null);
(statearr_22020_22048[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22010 === 10))
{var inst_21991 = (state_22009[2]);var state_22009__$1 = (function (){var statearr_22021 = state_22009;(statearr_22021[8] = inst_21991);
return statearr_22021;
})();if(cljs.core.truth_(log))
{var statearr_22022_22049 = state_22009__$1;(statearr_22022_22049[1] = 12);
} else
{var statearr_22023_22050 = state_22009__$1;(statearr_22023_22050[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22010 === 11))
{var inst_21988 = (state_22009[2]);var state_22009__$1 = state_22009;var statearr_22024_22051 = state_22009__$1;(statearr_22024_22051[2] = inst_21988);
(statearr_22024_22051[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22010 === 12))
{var inst_21983 = (state_22009[7]);var inst_21993 = cljs.core.clj__GT_js.call(null,inst_21983);var inst_21994 = console.log(inst_21993);var state_22009__$1 = state_22009;var statearr_22025_22052 = state_22009__$1;(statearr_22025_22052[2] = inst_21994);
(statearr_22025_22052[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22010 === 13))
{var state_22009__$1 = state_22009;var statearr_22026_22053 = state_22009__$1;(statearr_22026_22053[2] = null);
(statearr_22026_22053[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22010 === 14))
{var inst_21983 = (state_22009[7]);var inst_21997 = (state_22009[2]);var state_22009__$1 = (function (){var statearr_22027 = state_22009;(statearr_22027[9] = inst_21997);
return statearr_22027;
})();var statearr_22028_22054 = state_22009__$1;(statearr_22028_22054[2] = inst_21983);
(statearr_22028_22054[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22010 === 15))
{var state_22009__$1 = state_22009;var statearr_22029_22055 = state_22009__$1;(statearr_22029_22055[2] = null);
(statearr_22029_22055[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22010 === 16))
{var state_22009__$1 = state_22009;var statearr_22030_22056 = state_22009__$1;(statearr_22030_22056[2] = null);
(statearr_22030_22056[1] = 17);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22010 === 17))
{var inst_22005 = (state_22009[2]);var state_22009__$1 = state_22009;var statearr_22031_22057 = state_22009__$1;(statearr_22031_22057[2] = inst_22005);
(statearr_22031_22057[1] = 3);
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
var state_machine__5507__auto____0 = (function (){var statearr_22035 = [null,null,null,null,null,null,null,null,null,null];(statearr_22035[0] = state_machine__5507__auto__);
(statearr_22035[1] = 1);
return statearr_22035;
});
var state_machine__5507__auto____1 = (function (state_22009){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_22009);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e22036){if((e22036 instanceof Object))
{var ex__5510__auto__ = e22036;var statearr_22037_22058 = state_22009;(statearr_22037_22058[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22009);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e22036;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__22059 = state_22009;
state_22009 = G__22059;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_22009){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_22009);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_22038 = f__5522__auto__.call(null);(statearr_22038[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___22039);
return statearr_22038;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5523__auto__);
}));
return null;
};
var dorun_async = function (ch,var_args){
var p__21920 = null;if (arguments.length > 1) {
  p__21920 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return dorun_async__delegate.call(this,ch,p__21920);};
dorun_async.cljs$lang$maxFixedArity = 1;
dorun_async.cljs$lang$applyTo = (function (arglist__22060){
var ch = cljs.core.first(arglist__22060);
var p__21920 = cljs.core.rest(arglist__22060);
return dorun_async__delegate(ch,p__21920);
});
dorun_async.cljs$core$IFn$_invoke$arity$variadic = dorun_async__delegate;
return dorun_async;
})()
;
