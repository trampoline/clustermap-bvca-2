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
map_async.cljs$lang$applyTo = (function (arglist__10931){
var f = cljs.core.first(arglist__10931);
var colls = cljs.core.rest(arglist__10931);
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
var dorun_async__delegate = function (ch,p__10932){var map__10992 = p__10932;var map__10992__$1 = ((cljs.core.seq_QMARK_.call(null,map__10992))?cljs.core.apply.call(null,cljs.core.hash_map,map__10992):map__10992);var delay = cljs.core.get.call(null,map__10992__$1,new cljs.core.Keyword(null,"delay","delay",1109372149));var log = cljs.core.get.call(null,map__10992__$1,new cljs.core.Keyword(null,"log","log",1014011574));var c__5521__auto___11051 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_11021){var state_val_11022 = (state_11021[1]);if((state_val_11022 === 1))
{var state_11021__$1 = state_11021;var statearr_11023_11052 = state_11021__$1;(statearr_11023_11052[2] = null);
(statearr_11023_11052[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11022 === 2))
{var state_11021__$1 = state_11021;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11021__$1,4,ch);
} else
{if((state_val_11022 === 3))
{var inst_11019 = (state_11021[2]);var state_11021__$1 = state_11021;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11021__$1,inst_11019);
} else
{if((state_val_11022 === 4))
{var inst_10995 = (state_11021[7]);var inst_10995__$1 = (state_11021[2]);var state_11021__$1 = (function (){var statearr_11024 = state_11021;(statearr_11024[7] = inst_10995__$1);
return statearr_11024;
})();if(cljs.core.truth_(inst_10995__$1))
{var statearr_11025_11053 = state_11021__$1;(statearr_11025_11053[1] = 5);
} else
{var statearr_11026_11054 = state_11021__$1;(statearr_11026_11054[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11022 === 5))
{var state_11021__$1 = state_11021;if(cljs.core.truth_(delay))
{var statearr_11027_11055 = state_11021__$1;(statearr_11027_11055[1] = 8);
} else
{var statearr_11028_11056 = state_11021__$1;(statearr_11028_11056[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11022 === 6))
{var state_11021__$1 = state_11021;var statearr_11029_11057 = state_11021__$1;(statearr_11029_11057[2] = null);
(statearr_11029_11057[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11022 === 7))
{var inst_11012 = (state_11021[2]);var state_11021__$1 = state_11021;if(cljs.core.truth_(inst_11012))
{var statearr_11030_11058 = state_11021__$1;(statearr_11030_11058[1] = 15);
} else
{var statearr_11031_11059 = state_11021__$1;(statearr_11031_11059[1] = 16);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11022 === 8))
{var inst_10998 = cljs.core.async.timeout.call(null,delay);var state_11021__$1 = state_11021;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11021__$1,11,inst_10998);
} else
{if((state_val_11022 === 9))
{var state_11021__$1 = state_11021;var statearr_11032_11060 = state_11021__$1;(statearr_11032_11060[2] = null);
(statearr_11032_11060[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11022 === 10))
{var inst_11003 = (state_11021[2]);var state_11021__$1 = (function (){var statearr_11033 = state_11021;(statearr_11033[8] = inst_11003);
return statearr_11033;
})();if(cljs.core.truth_(log))
{var statearr_11034_11061 = state_11021__$1;(statearr_11034_11061[1] = 12);
} else
{var statearr_11035_11062 = state_11021__$1;(statearr_11035_11062[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11022 === 11))
{var inst_11000 = (state_11021[2]);var state_11021__$1 = state_11021;var statearr_11036_11063 = state_11021__$1;(statearr_11036_11063[2] = inst_11000);
(statearr_11036_11063[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11022 === 12))
{var inst_10995 = (state_11021[7]);var inst_11005 = cljs.core.clj__GT_js.call(null,inst_10995);var inst_11006 = console.log(inst_11005);var state_11021__$1 = state_11021;var statearr_11037_11064 = state_11021__$1;(statearr_11037_11064[2] = inst_11006);
(statearr_11037_11064[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11022 === 13))
{var state_11021__$1 = state_11021;var statearr_11038_11065 = state_11021__$1;(statearr_11038_11065[2] = null);
(statearr_11038_11065[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11022 === 14))
{var inst_10995 = (state_11021[7]);var inst_11009 = (state_11021[2]);var state_11021__$1 = (function (){var statearr_11039 = state_11021;(statearr_11039[9] = inst_11009);
return statearr_11039;
})();var statearr_11040_11066 = state_11021__$1;(statearr_11040_11066[2] = inst_10995);
(statearr_11040_11066[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11022 === 15))
{var state_11021__$1 = state_11021;var statearr_11041_11067 = state_11021__$1;(statearr_11041_11067[2] = null);
(statearr_11041_11067[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11022 === 16))
{var state_11021__$1 = state_11021;var statearr_11042_11068 = state_11021__$1;(statearr_11042_11068[2] = null);
(statearr_11042_11068[1] = 17);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11022 === 17))
{var inst_11017 = (state_11021[2]);var state_11021__$1 = state_11021;var statearr_11043_11069 = state_11021__$1;(statearr_11043_11069[2] = inst_11017);
(statearr_11043_11069[1] = 3);
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
var state_machine__5507__auto____0 = (function (){var statearr_11047 = [null,null,null,null,null,null,null,null,null,null];(statearr_11047[0] = state_machine__5507__auto__);
(statearr_11047[1] = 1);
return statearr_11047;
});
var state_machine__5507__auto____1 = (function (state_11021){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_11021);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e11048){if((e11048 instanceof Object))
{var ex__5510__auto__ = e11048;var statearr_11049_11070 = state_11021;(statearr_11049_11070[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11021);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11048;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11071 = state_11021;
state_11021 = G__11071;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_11021){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_11021);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_11050 = f__5522__auto__.call(null);(statearr_11050[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___11051);
return statearr_11050;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5523__auto__);
}));
return null;
};
var dorun_async = function (ch,var_args){
var p__10932 = null;if (arguments.length > 1) {
  p__10932 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return dorun_async__delegate.call(this,ch,p__10932);};
dorun_async.cljs$lang$maxFixedArity = 1;
dorun_async.cljs$lang$applyTo = (function (arglist__11072){
var ch = cljs.core.first(arglist__11072);
var p__10932 = cljs.core.rest(arglist__11072);
return dorun_async__delegate(ch,p__10932);
});
dorun_async.cljs$core$IFn$_invoke$arity$variadic = dorun_async__delegate;
return dorun_async;
})()
;

//# sourceMappingURL=async.js.map