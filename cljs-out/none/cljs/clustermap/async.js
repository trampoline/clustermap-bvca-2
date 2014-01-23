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
map_async.cljs$lang$applyTo = (function (arglist__10937){
var f = cljs.core.first(arglist__10937);
var colls = cljs.core.rest(arglist__10937);
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
var dorun_async__delegate = function (ch,p__10938){var map__10998 = p__10938;var map__10998__$1 = ((cljs.core.seq_QMARK_.call(null,map__10998))?cljs.core.apply.call(null,cljs.core.hash_map,map__10998):map__10998);var delay = cljs.core.get.call(null,map__10998__$1,new cljs.core.Keyword(null,"delay","delay",1109372149));var log = cljs.core.get.call(null,map__10998__$1,new cljs.core.Keyword(null,"log","log",1014011574));var c__5521__auto___11057 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_11027){var state_val_11028 = (state_11027[1]);if((state_val_11028 === 1))
{var state_11027__$1 = state_11027;var statearr_11029_11058 = state_11027__$1;(statearr_11029_11058[2] = null);
(statearr_11029_11058[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11028 === 2))
{var state_11027__$1 = state_11027;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11027__$1,4,ch);
} else
{if((state_val_11028 === 3))
{var inst_11025 = (state_11027[2]);var state_11027__$1 = state_11027;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11027__$1,inst_11025);
} else
{if((state_val_11028 === 4))
{var inst_11001 = (state_11027[7]);var inst_11001__$1 = (state_11027[2]);var state_11027__$1 = (function (){var statearr_11030 = state_11027;(statearr_11030[7] = inst_11001__$1);
return statearr_11030;
})();if(cljs.core.truth_(inst_11001__$1))
{var statearr_11031_11059 = state_11027__$1;(statearr_11031_11059[1] = 5);
} else
{var statearr_11032_11060 = state_11027__$1;(statearr_11032_11060[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11028 === 5))
{var state_11027__$1 = state_11027;if(cljs.core.truth_(delay))
{var statearr_11033_11061 = state_11027__$1;(statearr_11033_11061[1] = 8);
} else
{var statearr_11034_11062 = state_11027__$1;(statearr_11034_11062[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11028 === 6))
{var state_11027__$1 = state_11027;var statearr_11035_11063 = state_11027__$1;(statearr_11035_11063[2] = null);
(statearr_11035_11063[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11028 === 7))
{var inst_11018 = (state_11027[2]);var state_11027__$1 = state_11027;if(cljs.core.truth_(inst_11018))
{var statearr_11036_11064 = state_11027__$1;(statearr_11036_11064[1] = 15);
} else
{var statearr_11037_11065 = state_11027__$1;(statearr_11037_11065[1] = 16);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11028 === 8))
{var inst_11004 = cljs.core.async.timeout.call(null,delay);var state_11027__$1 = state_11027;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11027__$1,11,inst_11004);
} else
{if((state_val_11028 === 9))
{var state_11027__$1 = state_11027;var statearr_11038_11066 = state_11027__$1;(statearr_11038_11066[2] = null);
(statearr_11038_11066[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11028 === 10))
{var inst_11009 = (state_11027[2]);var state_11027__$1 = (function (){var statearr_11039 = state_11027;(statearr_11039[8] = inst_11009);
return statearr_11039;
})();if(cljs.core.truth_(log))
{var statearr_11040_11067 = state_11027__$1;(statearr_11040_11067[1] = 12);
} else
{var statearr_11041_11068 = state_11027__$1;(statearr_11041_11068[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11028 === 11))
{var inst_11006 = (state_11027[2]);var state_11027__$1 = state_11027;var statearr_11042_11069 = state_11027__$1;(statearr_11042_11069[2] = inst_11006);
(statearr_11042_11069[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11028 === 12))
{var inst_11001 = (state_11027[7]);var inst_11011 = cljs.core.clj__GT_js.call(null,inst_11001);var inst_11012 = console.log(inst_11011);var state_11027__$1 = state_11027;var statearr_11043_11070 = state_11027__$1;(statearr_11043_11070[2] = inst_11012);
(statearr_11043_11070[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11028 === 13))
{var state_11027__$1 = state_11027;var statearr_11044_11071 = state_11027__$1;(statearr_11044_11071[2] = null);
(statearr_11044_11071[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11028 === 14))
{var inst_11001 = (state_11027[7]);var inst_11015 = (state_11027[2]);var state_11027__$1 = (function (){var statearr_11045 = state_11027;(statearr_11045[9] = inst_11015);
return statearr_11045;
})();var statearr_11046_11072 = state_11027__$1;(statearr_11046_11072[2] = inst_11001);
(statearr_11046_11072[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11028 === 15))
{var state_11027__$1 = state_11027;var statearr_11047_11073 = state_11027__$1;(statearr_11047_11073[2] = null);
(statearr_11047_11073[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11028 === 16))
{var state_11027__$1 = state_11027;var statearr_11048_11074 = state_11027__$1;(statearr_11048_11074[2] = null);
(statearr_11048_11074[1] = 17);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11028 === 17))
{var inst_11023 = (state_11027[2]);var state_11027__$1 = state_11027;var statearr_11049_11075 = state_11027__$1;(statearr_11049_11075[2] = inst_11023);
(statearr_11049_11075[1] = 3);
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
var state_machine__5507__auto____0 = (function (){var statearr_11053 = [null,null,null,null,null,null,null,null,null,null];(statearr_11053[0] = state_machine__5507__auto__);
(statearr_11053[1] = 1);
return statearr_11053;
});
var state_machine__5507__auto____1 = (function (state_11027){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_11027);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e11054){if((e11054 instanceof Object))
{var ex__5510__auto__ = e11054;var statearr_11055_11076 = state_11027;(statearr_11055_11076[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11027);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11054;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11077 = state_11027;
state_11027 = G__11077;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_11027){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_11027);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_11056 = f__5522__auto__.call(null);(statearr_11056[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___11057);
return statearr_11056;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5523__auto__);
}));
return null;
};
var dorun_async = function (ch,var_args){
var p__10938 = null;if (arguments.length > 1) {
  p__10938 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return dorun_async__delegate.call(this,ch,p__10938);};
dorun_async.cljs$lang$maxFixedArity = 1;
dorun_async.cljs$lang$applyTo = (function (arglist__11078){
var ch = cljs.core.first(arglist__11078);
var p__10938 = cljs.core.rest(arglist__11078);
return dorun_async__delegate(ch,p__10938);
});
dorun_async.cljs$core$IFn$_invoke$arity$variadic = dorun_async__delegate;
return dorun_async;
})()
;

//# sourceMappingURL=async.js.map