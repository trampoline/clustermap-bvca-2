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
map_async.cljs$lang$applyTo = (function (arglist__11004){
var f = cljs.core.first(arglist__11004);
var colls = cljs.core.rest(arglist__11004);
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
var dorun_async__delegate = function (ch,p__11005){var map__11065 = p__11005;var map__11065__$1 = ((cljs.core.seq_QMARK_.call(null,map__11065))?cljs.core.apply.call(null,cljs.core.hash_map,map__11065):map__11065);var delay = cljs.core.get.call(null,map__11065__$1,new cljs.core.Keyword(null,"delay","delay",1109372149));var log = cljs.core.get.call(null,map__11065__$1,new cljs.core.Keyword(null,"log","log",1014011574));var c__5521__auto___11124 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_11094){var state_val_11095 = (state_11094[1]);if((state_val_11095 === 1))
{var state_11094__$1 = state_11094;var statearr_11096_11125 = state_11094__$1;(statearr_11096_11125[2] = null);
(statearr_11096_11125[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11095 === 2))
{var state_11094__$1 = state_11094;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11094__$1,4,ch);
} else
{if((state_val_11095 === 3))
{var inst_11092 = (state_11094[2]);var state_11094__$1 = state_11094;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11094__$1,inst_11092);
} else
{if((state_val_11095 === 4))
{var inst_11068 = (state_11094[7]);var inst_11068__$1 = (state_11094[2]);var state_11094__$1 = (function (){var statearr_11097 = state_11094;(statearr_11097[7] = inst_11068__$1);
return statearr_11097;
})();if(cljs.core.truth_(inst_11068__$1))
{var statearr_11098_11126 = state_11094__$1;(statearr_11098_11126[1] = 5);
} else
{var statearr_11099_11127 = state_11094__$1;(statearr_11099_11127[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11095 === 5))
{var state_11094__$1 = state_11094;if(cljs.core.truth_(delay))
{var statearr_11100_11128 = state_11094__$1;(statearr_11100_11128[1] = 8);
} else
{var statearr_11101_11129 = state_11094__$1;(statearr_11101_11129[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11095 === 6))
{var state_11094__$1 = state_11094;var statearr_11102_11130 = state_11094__$1;(statearr_11102_11130[2] = null);
(statearr_11102_11130[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11095 === 7))
{var inst_11085 = (state_11094[2]);var state_11094__$1 = state_11094;if(cljs.core.truth_(inst_11085))
{var statearr_11103_11131 = state_11094__$1;(statearr_11103_11131[1] = 15);
} else
{var statearr_11104_11132 = state_11094__$1;(statearr_11104_11132[1] = 16);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11095 === 8))
{var inst_11071 = cljs.core.async.timeout.call(null,delay);var state_11094__$1 = state_11094;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11094__$1,11,inst_11071);
} else
{if((state_val_11095 === 9))
{var state_11094__$1 = state_11094;var statearr_11105_11133 = state_11094__$1;(statearr_11105_11133[2] = null);
(statearr_11105_11133[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11095 === 10))
{var inst_11076 = (state_11094[2]);var state_11094__$1 = (function (){var statearr_11106 = state_11094;(statearr_11106[8] = inst_11076);
return statearr_11106;
})();if(cljs.core.truth_(log))
{var statearr_11107_11134 = state_11094__$1;(statearr_11107_11134[1] = 12);
} else
{var statearr_11108_11135 = state_11094__$1;(statearr_11108_11135[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11095 === 11))
{var inst_11073 = (state_11094[2]);var state_11094__$1 = state_11094;var statearr_11109_11136 = state_11094__$1;(statearr_11109_11136[2] = inst_11073);
(statearr_11109_11136[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11095 === 12))
{var inst_11068 = (state_11094[7]);var inst_11078 = cljs.core.clj__GT_js.call(null,inst_11068);var inst_11079 = console.log(inst_11078);var state_11094__$1 = state_11094;var statearr_11110_11137 = state_11094__$1;(statearr_11110_11137[2] = inst_11079);
(statearr_11110_11137[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11095 === 13))
{var state_11094__$1 = state_11094;var statearr_11111_11138 = state_11094__$1;(statearr_11111_11138[2] = null);
(statearr_11111_11138[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11095 === 14))
{var inst_11068 = (state_11094[7]);var inst_11082 = (state_11094[2]);var state_11094__$1 = (function (){var statearr_11112 = state_11094;(statearr_11112[9] = inst_11082);
return statearr_11112;
})();var statearr_11113_11139 = state_11094__$1;(statearr_11113_11139[2] = inst_11068);
(statearr_11113_11139[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11095 === 15))
{var state_11094__$1 = state_11094;var statearr_11114_11140 = state_11094__$1;(statearr_11114_11140[2] = null);
(statearr_11114_11140[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11095 === 16))
{var state_11094__$1 = state_11094;var statearr_11115_11141 = state_11094__$1;(statearr_11115_11141[2] = null);
(statearr_11115_11141[1] = 17);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11095 === 17))
{var inst_11090 = (state_11094[2]);var state_11094__$1 = state_11094;var statearr_11116_11142 = state_11094__$1;(statearr_11116_11142[2] = inst_11090);
(statearr_11116_11142[1] = 3);
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
var state_machine__5507__auto____0 = (function (){var statearr_11120 = [null,null,null,null,null,null,null,null,null,null];(statearr_11120[0] = state_machine__5507__auto__);
(statearr_11120[1] = 1);
return statearr_11120;
});
var state_machine__5507__auto____1 = (function (state_11094){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_11094);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e11121){if((e11121 instanceof Object))
{var ex__5510__auto__ = e11121;var statearr_11122_11143 = state_11094;(statearr_11122_11143[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11094);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11121;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11144 = state_11094;
state_11094 = G__11144;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_11094){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_11094);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_11123 = f__5522__auto__.call(null);(statearr_11123[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___11124);
return statearr_11123;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5523__auto__);
}));
return null;
};
var dorun_async = function (ch,var_args){
var p__11005 = null;if (arguments.length > 1) {
  p__11005 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return dorun_async__delegate.call(this,ch,p__11005);};
dorun_async.cljs$lang$maxFixedArity = 1;
dorun_async.cljs$lang$applyTo = (function (arglist__11145){
var ch = cljs.core.first(arglist__11145);
var p__11005 = cljs.core.rest(arglist__11145);
return dorun_async__delegate(ch,p__11005);
});
dorun_async.cljs$core$IFn$_invoke$arity$variadic = dorun_async__delegate;
return dorun_async;
})()
;

//# sourceMappingURL=async.js.map