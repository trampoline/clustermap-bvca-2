// Compiled by ClojureScript 0.0-2173
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
map_async.cljs$lang$applyTo = (function (arglist__22687){
var f = cljs.core.first(arglist__22687);
var colls = cljs.core.rest(arglist__22687);
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
var dorun_async__delegate = function (ch,p__22688){var map__22748 = p__22688;var map__22748__$1 = ((cljs.core.seq_QMARK_.call(null,map__22748))?cljs.core.apply.call(null,cljs.core.hash_map,map__22748):map__22748);var delay = cljs.core.get.call(null,map__22748__$1,new cljs.core.Keyword(null,"delay","delay",1109372149));var log = cljs.core.get.call(null,map__22748__$1,new cljs.core.Keyword(null,"log","log",1014011574));var c__5562__auto___22807 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_22777){var state_val_22778 = (state_22777[1]);if((state_val_22778 === 1))
{var state_22777__$1 = state_22777;var statearr_22779_22808 = state_22777__$1;(statearr_22779_22808[2] = null);
(statearr_22779_22808[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22778 === 2))
{var state_22777__$1 = state_22777;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22777__$1,4,ch);
} else
{if((state_val_22778 === 3))
{var inst_22775 = (state_22777[2]);var state_22777__$1 = state_22777;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22777__$1,inst_22775);
} else
{if((state_val_22778 === 4))
{var inst_22751 = (state_22777[7]);var inst_22751__$1 = (state_22777[2]);var state_22777__$1 = (function (){var statearr_22780 = state_22777;(statearr_22780[7] = inst_22751__$1);
return statearr_22780;
})();if(cljs.core.truth_(inst_22751__$1))
{var statearr_22781_22809 = state_22777__$1;(statearr_22781_22809[1] = 5);
} else
{var statearr_22782_22810 = state_22777__$1;(statearr_22782_22810[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22778 === 5))
{var state_22777__$1 = state_22777;if(cljs.core.truth_(delay))
{var statearr_22783_22811 = state_22777__$1;(statearr_22783_22811[1] = 8);
} else
{var statearr_22784_22812 = state_22777__$1;(statearr_22784_22812[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22778 === 6))
{var state_22777__$1 = state_22777;var statearr_22785_22813 = state_22777__$1;(statearr_22785_22813[2] = null);
(statearr_22785_22813[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22778 === 7))
{var inst_22768 = (state_22777[2]);var state_22777__$1 = state_22777;if(cljs.core.truth_(inst_22768))
{var statearr_22786_22814 = state_22777__$1;(statearr_22786_22814[1] = 15);
} else
{var statearr_22787_22815 = state_22777__$1;(statearr_22787_22815[1] = 16);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22778 === 8))
{var inst_22754 = cljs.core.async.timeout.call(null,delay);var state_22777__$1 = state_22777;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22777__$1,11,inst_22754);
} else
{if((state_val_22778 === 9))
{var state_22777__$1 = state_22777;var statearr_22788_22816 = state_22777__$1;(statearr_22788_22816[2] = null);
(statearr_22788_22816[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22778 === 10))
{var inst_22759 = (state_22777[2]);var state_22777__$1 = (function (){var statearr_22789 = state_22777;(statearr_22789[8] = inst_22759);
return statearr_22789;
})();if(cljs.core.truth_(log))
{var statearr_22790_22817 = state_22777__$1;(statearr_22790_22817[1] = 12);
} else
{var statearr_22791_22818 = state_22777__$1;(statearr_22791_22818[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22778 === 11))
{var inst_22756 = (state_22777[2]);var state_22777__$1 = state_22777;var statearr_22792_22819 = state_22777__$1;(statearr_22792_22819[2] = inst_22756);
(statearr_22792_22819[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22778 === 12))
{var inst_22751 = (state_22777[7]);var inst_22761 = cljs.core.clj__GT_js.call(null,inst_22751);var inst_22762 = console.log(inst_22761);var state_22777__$1 = state_22777;var statearr_22793_22820 = state_22777__$1;(statearr_22793_22820[2] = inst_22762);
(statearr_22793_22820[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22778 === 13))
{var state_22777__$1 = state_22777;var statearr_22794_22821 = state_22777__$1;(statearr_22794_22821[2] = null);
(statearr_22794_22821[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22778 === 14))
{var inst_22751 = (state_22777[7]);var inst_22765 = (state_22777[2]);var state_22777__$1 = (function (){var statearr_22795 = state_22777;(statearr_22795[9] = inst_22765);
return statearr_22795;
})();var statearr_22796_22822 = state_22777__$1;(statearr_22796_22822[2] = inst_22751);
(statearr_22796_22822[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22778 === 15))
{var state_22777__$1 = state_22777;var statearr_22797_22823 = state_22777__$1;(statearr_22797_22823[2] = null);
(statearr_22797_22823[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22778 === 16))
{var state_22777__$1 = state_22777;var statearr_22798_22824 = state_22777__$1;(statearr_22798_22824[2] = null);
(statearr_22798_22824[1] = 17);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22778 === 17))
{var inst_22773 = (state_22777[2]);var state_22777__$1 = state_22777;var statearr_22799_22825 = state_22777__$1;(statearr_22799_22825[2] = inst_22773);
(statearr_22799_22825[1] = 3);
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
});return ((function (switch__5547__auto__){
return (function() {
var state_machine__5548__auto__ = null;
var state_machine__5548__auto____0 = (function (){var statearr_22803 = [null,null,null,null,null,null,null,null,null,null];(statearr_22803[0] = state_machine__5548__auto__);
(statearr_22803[1] = 1);
return statearr_22803;
});
var state_machine__5548__auto____1 = (function (state_22777){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__.call(null,state_22777);if(cljs.core.keyword_identical_QMARK_.call(null,result__5550__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e22804){if((e22804 instanceof Object))
{var ex__5551__auto__ = e22804;var statearr_22805_22826 = state_22777;(statearr_22805_22826[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22777);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e22804;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5549__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__22827 = state_22777;
state_22777 = G__22827;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_22777){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_22777);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_22806 = f__5563__auto__.call(null);(statearr_22806[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto___22807);
return statearr_22806;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5564__auto__);
}));
return null;
};
var dorun_async = function (ch,var_args){
var p__22688 = null;if (arguments.length > 1) {
  p__22688 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return dorun_async__delegate.call(this,ch,p__22688);};
dorun_async.cljs$lang$maxFixedArity = 1;
dorun_async.cljs$lang$applyTo = (function (arglist__22828){
var ch = cljs.core.first(arglist__22828);
var p__22688 = cljs.core.rest(arglist__22828);
return dorun_async__delegate(ch,p__22688);
});
dorun_async.cljs$core$IFn$_invoke$arity$variadic = dorun_async__delegate;
return dorun_async;
})()
;

//# sourceMappingURL=async.js.map