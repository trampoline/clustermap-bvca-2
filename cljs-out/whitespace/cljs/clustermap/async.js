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
map_async.cljs$lang$applyTo = (function (arglist__30008){
var f = cljs.core.first(arglist__30008);
var colls = cljs.core.rest(arglist__30008);
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
var dorun_async__delegate = function (ch,p__30009){var map__30069 = p__30009;var map__30069__$1 = ((cljs.core.seq_QMARK_.call(null,map__30069))?cljs.core.apply.call(null,cljs.core.hash_map,map__30069):map__30069);var delay = cljs.core.get.call(null,map__30069__$1,new cljs.core.Keyword(null,"delay","delay",1109372149));var log = cljs.core.get.call(null,map__30069__$1,new cljs.core.Keyword(null,"log","log",1014011574));var c__5521__auto___30128 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_30098){var state_val_30099 = (state_30098[1]);if((state_val_30099 === 1))
{var state_30098__$1 = state_30098;var statearr_30100_30129 = state_30098__$1;(statearr_30100_30129[2] = null);
(statearr_30100_30129[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30099 === 2))
{var state_30098__$1 = state_30098;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30098__$1,4,ch);
} else
{if((state_val_30099 === 3))
{var inst_30096 = (state_30098[2]);var state_30098__$1 = state_30098;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30098__$1,inst_30096);
} else
{if((state_val_30099 === 4))
{var inst_30072 = (state_30098[7]);var inst_30072__$1 = (state_30098[2]);var state_30098__$1 = (function (){var statearr_30101 = state_30098;(statearr_30101[7] = inst_30072__$1);
return statearr_30101;
})();if(cljs.core.truth_(inst_30072__$1))
{var statearr_30102_30130 = state_30098__$1;(statearr_30102_30130[1] = 5);
} else
{var statearr_30103_30131 = state_30098__$1;(statearr_30103_30131[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30099 === 5))
{var state_30098__$1 = state_30098;if(cljs.core.truth_(delay))
{var statearr_30104_30132 = state_30098__$1;(statearr_30104_30132[1] = 8);
} else
{var statearr_30105_30133 = state_30098__$1;(statearr_30105_30133[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30099 === 6))
{var state_30098__$1 = state_30098;var statearr_30106_30134 = state_30098__$1;(statearr_30106_30134[2] = null);
(statearr_30106_30134[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30099 === 7))
{var inst_30089 = (state_30098[2]);var state_30098__$1 = state_30098;if(cljs.core.truth_(inst_30089))
{var statearr_30107_30135 = state_30098__$1;(statearr_30107_30135[1] = 15);
} else
{var statearr_30108_30136 = state_30098__$1;(statearr_30108_30136[1] = 16);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30099 === 8))
{var inst_30075 = cljs.core.async.timeout.call(null,delay);var state_30098__$1 = state_30098;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30098__$1,11,inst_30075);
} else
{if((state_val_30099 === 9))
{var state_30098__$1 = state_30098;var statearr_30109_30137 = state_30098__$1;(statearr_30109_30137[2] = null);
(statearr_30109_30137[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30099 === 10))
{var inst_30080 = (state_30098[2]);var state_30098__$1 = (function (){var statearr_30110 = state_30098;(statearr_30110[8] = inst_30080);
return statearr_30110;
})();if(cljs.core.truth_(log))
{var statearr_30111_30138 = state_30098__$1;(statearr_30111_30138[1] = 12);
} else
{var statearr_30112_30139 = state_30098__$1;(statearr_30112_30139[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30099 === 11))
{var inst_30077 = (state_30098[2]);var state_30098__$1 = state_30098;var statearr_30113_30140 = state_30098__$1;(statearr_30113_30140[2] = inst_30077);
(statearr_30113_30140[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30099 === 12))
{var inst_30072 = (state_30098[7]);var inst_30082 = cljs.core.clj__GT_js.call(null,inst_30072);var inst_30083 = console.log(inst_30082);var state_30098__$1 = state_30098;var statearr_30114_30141 = state_30098__$1;(statearr_30114_30141[2] = inst_30083);
(statearr_30114_30141[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30099 === 13))
{var state_30098__$1 = state_30098;var statearr_30115_30142 = state_30098__$1;(statearr_30115_30142[2] = null);
(statearr_30115_30142[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30099 === 14))
{var inst_30072 = (state_30098[7]);var inst_30086 = (state_30098[2]);var state_30098__$1 = (function (){var statearr_30116 = state_30098;(statearr_30116[9] = inst_30086);
return statearr_30116;
})();var statearr_30117_30143 = state_30098__$1;(statearr_30117_30143[2] = inst_30072);
(statearr_30117_30143[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30099 === 15))
{var state_30098__$1 = state_30098;var statearr_30118_30144 = state_30098__$1;(statearr_30118_30144[2] = null);
(statearr_30118_30144[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30099 === 16))
{var state_30098__$1 = state_30098;var statearr_30119_30145 = state_30098__$1;(statearr_30119_30145[2] = null);
(statearr_30119_30145[1] = 17);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30099 === 17))
{var inst_30094 = (state_30098[2]);var state_30098__$1 = state_30098;var statearr_30120_30146 = state_30098__$1;(statearr_30120_30146[2] = inst_30094);
(statearr_30120_30146[1] = 3);
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
var state_machine__5507__auto____0 = (function (){var statearr_30124 = [null,null,null,null,null,null,null,null,null,null];(statearr_30124[0] = state_machine__5507__auto__);
(statearr_30124[1] = 1);
return statearr_30124;
});
var state_machine__5507__auto____1 = (function (state_30098){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_30098);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e30125){if((e30125 instanceof Object))
{var ex__5510__auto__ = e30125;var statearr_30126_30147 = state_30098;(statearr_30126_30147[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30098);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e30125;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__30148 = state_30098;
state_30098 = G__30148;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_30098){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_30098);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_30127 = f__5522__auto__.call(null);(statearr_30127[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___30128);
return statearr_30127;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5523__auto__);
}));
return null;
};
var dorun_async = function (ch,var_args){
var p__30009 = null;if (arguments.length > 1) {
  p__30009 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return dorun_async__delegate.call(this,ch,p__30009);};
dorun_async.cljs$lang$maxFixedArity = 1;
dorun_async.cljs$lang$applyTo = (function (arglist__30149){
var ch = cljs.core.first(arglist__30149);
var p__30009 = cljs.core.rest(arglist__30149);
return dorun_async__delegate(ch,p__30009);
});
dorun_async.cljs$core$IFn$_invoke$arity$variadic = dorun_async__delegate;
return dorun_async;
})()
;
