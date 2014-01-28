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
map_async.cljs$lang$applyTo = (function (arglist__10932){
var f = cljs.core.first(arglist__10932);
var colls = cljs.core.rest(arglist__10932);
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
var dorun_async__delegate = function (ch,p__10933){var map__10993 = p__10933;var map__10993__$1 = ((cljs.core.seq_QMARK_.call(null,map__10993))?cljs.core.apply.call(null,cljs.core.hash_map,map__10993):map__10993);var delay = cljs.core.get.call(null,map__10993__$1,new cljs.core.Keyword(null,"delay","delay",1109372149));var log = cljs.core.get.call(null,map__10993__$1,new cljs.core.Keyword(null,"log","log",1014011574));var c__5521__auto___11052 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_11022){var state_val_11023 = (state_11022[1]);if((state_val_11023 === 1))
{var state_11022__$1 = state_11022;var statearr_11024_11053 = state_11022__$1;(statearr_11024_11053[2] = null);
(statearr_11024_11053[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11023 === 2))
{var state_11022__$1 = state_11022;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11022__$1,4,ch);
} else
{if((state_val_11023 === 3))
{var inst_11020 = (state_11022[2]);var state_11022__$1 = state_11022;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11022__$1,inst_11020);
} else
{if((state_val_11023 === 4))
{var inst_10996 = (state_11022[7]);var inst_10996__$1 = (state_11022[2]);var state_11022__$1 = (function (){var statearr_11025 = state_11022;(statearr_11025[7] = inst_10996__$1);
return statearr_11025;
})();if(cljs.core.truth_(inst_10996__$1))
{var statearr_11026_11054 = state_11022__$1;(statearr_11026_11054[1] = 5);
} else
{var statearr_11027_11055 = state_11022__$1;(statearr_11027_11055[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11023 === 5))
{var state_11022__$1 = state_11022;if(cljs.core.truth_(delay))
{var statearr_11028_11056 = state_11022__$1;(statearr_11028_11056[1] = 8);
} else
{var statearr_11029_11057 = state_11022__$1;(statearr_11029_11057[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11023 === 6))
{var state_11022__$1 = state_11022;var statearr_11030_11058 = state_11022__$1;(statearr_11030_11058[2] = null);
(statearr_11030_11058[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11023 === 7))
{var inst_11013 = (state_11022[2]);var state_11022__$1 = state_11022;if(cljs.core.truth_(inst_11013))
{var statearr_11031_11059 = state_11022__$1;(statearr_11031_11059[1] = 15);
} else
{var statearr_11032_11060 = state_11022__$1;(statearr_11032_11060[1] = 16);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11023 === 8))
{var inst_10999 = cljs.core.async.timeout.call(null,delay);var state_11022__$1 = state_11022;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11022__$1,11,inst_10999);
} else
{if((state_val_11023 === 9))
{var state_11022__$1 = state_11022;var statearr_11033_11061 = state_11022__$1;(statearr_11033_11061[2] = null);
(statearr_11033_11061[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11023 === 10))
{var inst_11004 = (state_11022[2]);var state_11022__$1 = (function (){var statearr_11034 = state_11022;(statearr_11034[8] = inst_11004);
return statearr_11034;
})();if(cljs.core.truth_(log))
{var statearr_11035_11062 = state_11022__$1;(statearr_11035_11062[1] = 12);
} else
{var statearr_11036_11063 = state_11022__$1;(statearr_11036_11063[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11023 === 11))
{var inst_11001 = (state_11022[2]);var state_11022__$1 = state_11022;var statearr_11037_11064 = state_11022__$1;(statearr_11037_11064[2] = inst_11001);
(statearr_11037_11064[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11023 === 12))
{var inst_10996 = (state_11022[7]);var inst_11006 = cljs.core.clj__GT_js.call(null,inst_10996);var inst_11007 = console.log(inst_11006);var state_11022__$1 = state_11022;var statearr_11038_11065 = state_11022__$1;(statearr_11038_11065[2] = inst_11007);
(statearr_11038_11065[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11023 === 13))
{var state_11022__$1 = state_11022;var statearr_11039_11066 = state_11022__$1;(statearr_11039_11066[2] = null);
(statearr_11039_11066[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11023 === 14))
{var inst_10996 = (state_11022[7]);var inst_11010 = (state_11022[2]);var state_11022__$1 = (function (){var statearr_11040 = state_11022;(statearr_11040[9] = inst_11010);
return statearr_11040;
})();var statearr_11041_11067 = state_11022__$1;(statearr_11041_11067[2] = inst_10996);
(statearr_11041_11067[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11023 === 15))
{var state_11022__$1 = state_11022;var statearr_11042_11068 = state_11022__$1;(statearr_11042_11068[2] = null);
(statearr_11042_11068[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11023 === 16))
{var state_11022__$1 = state_11022;var statearr_11043_11069 = state_11022__$1;(statearr_11043_11069[2] = null);
(statearr_11043_11069[1] = 17);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11023 === 17))
{var inst_11018 = (state_11022[2]);var state_11022__$1 = state_11022;var statearr_11044_11070 = state_11022__$1;(statearr_11044_11070[2] = inst_11018);
(statearr_11044_11070[1] = 3);
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
var state_machine__5507__auto____0 = (function (){var statearr_11048 = [null,null,null,null,null,null,null,null,null,null];(statearr_11048[0] = state_machine__5507__auto__);
(statearr_11048[1] = 1);
return statearr_11048;
});
var state_machine__5507__auto____1 = (function (state_11022){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_11022);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e11049){if((e11049 instanceof Object))
{var ex__5510__auto__ = e11049;var statearr_11050_11071 = state_11022;(statearr_11050_11071[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11022);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11049;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11072 = state_11022;
state_11022 = G__11072;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_11022){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_11022);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_11051 = f__5522__auto__.call(null);(statearr_11051[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___11052);
return statearr_11051;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5523__auto__);
}));
return null;
};
var dorun_async = function (ch,var_args){
var p__10933 = null;if (arguments.length > 1) {
  p__10933 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return dorun_async__delegate.call(this,ch,p__10933);};
dorun_async.cljs$lang$maxFixedArity = 1;
dorun_async.cljs$lang$applyTo = (function (arglist__11073){
var ch = cljs.core.first(arglist__11073);
var p__10933 = cljs.core.rest(arglist__11073);
return dorun_async__delegate(ch,p__10933);
});
dorun_async.cljs$core$IFn$_invoke$arity$variadic = dorun_async__delegate;
return dorun_async;
})()
;

//# sourceMappingURL=async.js.map