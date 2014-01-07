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
map_async.cljs$lang$applyTo = (function (arglist__8997){
var f = cljs.core.first(arglist__8997);
var colls = cljs.core.rest(arglist__8997);
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
var dorun_async__delegate = function (ch,p__8998){var map__9058 = p__8998;var map__9058__$1 = ((cljs.core.seq_QMARK_.call(null,map__9058))?cljs.core.apply.call(null,cljs.core.hash_map,map__9058):map__9058);var delay = cljs.core.get.call(null,map__9058__$1,new cljs.core.Keyword(null,"delay","delay",1109372149));var log = cljs.core.get.call(null,map__9058__$1,new cljs.core.Keyword(null,"log","log",1014011574));var c__5521__auto___9117 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_9087){var state_val_9088 = (state_9087[1]);if((state_val_9088 === 1))
{var state_9087__$1 = state_9087;var statearr_9089_9118 = state_9087__$1;(statearr_9089_9118[2] = null);
(statearr_9089_9118[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9088 === 2))
{var state_9087__$1 = state_9087;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9087__$1,4,ch);
} else
{if((state_val_9088 === 3))
{var inst_9085 = (state_9087[2]);var state_9087__$1 = state_9087;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9087__$1,inst_9085);
} else
{if((state_val_9088 === 4))
{var inst_9061 = (state_9087[7]);var inst_9061__$1 = (state_9087[2]);var state_9087__$1 = (function (){var statearr_9090 = state_9087;(statearr_9090[7] = inst_9061__$1);
return statearr_9090;
})();if(cljs.core.truth_(inst_9061__$1))
{var statearr_9091_9119 = state_9087__$1;(statearr_9091_9119[1] = 5);
} else
{var statearr_9092_9120 = state_9087__$1;(statearr_9092_9120[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9088 === 5))
{var state_9087__$1 = state_9087;if(cljs.core.truth_(delay))
{var statearr_9093_9121 = state_9087__$1;(statearr_9093_9121[1] = 8);
} else
{var statearr_9094_9122 = state_9087__$1;(statearr_9094_9122[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9088 === 6))
{var state_9087__$1 = state_9087;var statearr_9095_9123 = state_9087__$1;(statearr_9095_9123[2] = null);
(statearr_9095_9123[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9088 === 7))
{var inst_9078 = (state_9087[2]);var state_9087__$1 = state_9087;if(cljs.core.truth_(inst_9078))
{var statearr_9096_9124 = state_9087__$1;(statearr_9096_9124[1] = 15);
} else
{var statearr_9097_9125 = state_9087__$1;(statearr_9097_9125[1] = 16);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9088 === 8))
{var inst_9064 = cljs.core.async.timeout.call(null,delay);var state_9087__$1 = state_9087;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9087__$1,11,inst_9064);
} else
{if((state_val_9088 === 9))
{var state_9087__$1 = state_9087;var statearr_9098_9126 = state_9087__$1;(statearr_9098_9126[2] = null);
(statearr_9098_9126[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9088 === 10))
{var inst_9069 = (state_9087[2]);var state_9087__$1 = (function (){var statearr_9099 = state_9087;(statearr_9099[8] = inst_9069);
return statearr_9099;
})();if(cljs.core.truth_(log))
{var statearr_9100_9127 = state_9087__$1;(statearr_9100_9127[1] = 12);
} else
{var statearr_9101_9128 = state_9087__$1;(statearr_9101_9128[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9088 === 11))
{var inst_9066 = (state_9087[2]);var state_9087__$1 = state_9087;var statearr_9102_9129 = state_9087__$1;(statearr_9102_9129[2] = inst_9066);
(statearr_9102_9129[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9088 === 12))
{var inst_9061 = (state_9087[7]);var inst_9071 = cljs.core.clj__GT_js.call(null,inst_9061);var inst_9072 = console.log(inst_9071);var state_9087__$1 = state_9087;var statearr_9103_9130 = state_9087__$1;(statearr_9103_9130[2] = inst_9072);
(statearr_9103_9130[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9088 === 13))
{var state_9087__$1 = state_9087;var statearr_9104_9131 = state_9087__$1;(statearr_9104_9131[2] = null);
(statearr_9104_9131[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9088 === 14))
{var inst_9061 = (state_9087[7]);var inst_9075 = (state_9087[2]);var state_9087__$1 = (function (){var statearr_9105 = state_9087;(statearr_9105[9] = inst_9075);
return statearr_9105;
})();var statearr_9106_9132 = state_9087__$1;(statearr_9106_9132[2] = inst_9061);
(statearr_9106_9132[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9088 === 15))
{var state_9087__$1 = state_9087;var statearr_9107_9133 = state_9087__$1;(statearr_9107_9133[2] = null);
(statearr_9107_9133[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9088 === 16))
{var state_9087__$1 = state_9087;var statearr_9108_9134 = state_9087__$1;(statearr_9108_9134[2] = null);
(statearr_9108_9134[1] = 17);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9088 === 17))
{var inst_9083 = (state_9087[2]);var state_9087__$1 = state_9087;var statearr_9109_9135 = state_9087__$1;(statearr_9109_9135[2] = inst_9083);
(statearr_9109_9135[1] = 3);
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
var state_machine__5507__auto____0 = (function (){var statearr_9113 = [null,null,null,null,null,null,null,null,null,null];(statearr_9113[0] = state_machine__5507__auto__);
(statearr_9113[1] = 1);
return statearr_9113;
});
var state_machine__5507__auto____1 = (function (state_9087){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_9087);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e9114){if((e9114 instanceof Object))
{var ex__5510__auto__ = e9114;var statearr_9115_9136 = state_9087;(statearr_9115_9136[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9087);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e9114;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__9137 = state_9087;
state_9087 = G__9137;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_9087){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_9087);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_9116 = f__5522__auto__.call(null);(statearr_9116[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___9117);
return statearr_9116;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5523__auto__);
}));
return null;
};
var dorun_async = function (ch,var_args){
var p__8998 = null;if (arguments.length > 1) {
  p__8998 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return dorun_async__delegate.call(this,ch,p__8998);};
dorun_async.cljs$lang$maxFixedArity = 1;
dorun_async.cljs$lang$applyTo = (function (arglist__9138){
var ch = cljs.core.first(arglist__9138);
var p__8998 = cljs.core.rest(arglist__9138);
return dorun_async__delegate(ch,p__8998);
});
dorun_async.cljs$core$IFn$_invoke$arity$variadic = dorun_async__delegate;
return dorun_async;
})()
;

//# sourceMappingURL=async.js.map