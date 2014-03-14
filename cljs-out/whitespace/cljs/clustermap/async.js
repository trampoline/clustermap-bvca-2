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
map_async.cljs$lang$applyTo = (function (arglist__44671){
var f = cljs.core.first(arglist__44671);
var colls = cljs.core.rest(arglist__44671);
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
var dorun_async__delegate = function (ch,p__44672){var map__44732 = p__44672;var map__44732__$1 = ((cljs.core.seq_QMARK_.call(null,map__44732))?cljs.core.apply.call(null,cljs.core.hash_map,map__44732):map__44732);var delay = cljs.core.get.call(null,map__44732__$1,new cljs.core.Keyword(null,"delay","delay",1109372149));var log = cljs.core.get.call(null,map__44732__$1,new cljs.core.Keyword(null,"log","log",1014011574));var c__5562__auto___44791 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_44761){var state_val_44762 = (state_44761[1]);if((state_val_44762 === 1))
{var state_44761__$1 = state_44761;var statearr_44763_44792 = state_44761__$1;(statearr_44763_44792[2] = null);
(statearr_44763_44792[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44762 === 2))
{var state_44761__$1 = state_44761;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44761__$1,4,ch);
} else
{if((state_val_44762 === 3))
{var inst_44759 = (state_44761[2]);var state_44761__$1 = state_44761;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44761__$1,inst_44759);
} else
{if((state_val_44762 === 4))
{var inst_44735 = (state_44761[7]);var inst_44735__$1 = (state_44761[2]);var state_44761__$1 = (function (){var statearr_44764 = state_44761;(statearr_44764[7] = inst_44735__$1);
return statearr_44764;
})();if(cljs.core.truth_(inst_44735__$1))
{var statearr_44765_44793 = state_44761__$1;(statearr_44765_44793[1] = 5);
} else
{var statearr_44766_44794 = state_44761__$1;(statearr_44766_44794[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44762 === 5))
{var state_44761__$1 = state_44761;if(cljs.core.truth_(delay))
{var statearr_44767_44795 = state_44761__$1;(statearr_44767_44795[1] = 8);
} else
{var statearr_44768_44796 = state_44761__$1;(statearr_44768_44796[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44762 === 6))
{var state_44761__$1 = state_44761;var statearr_44769_44797 = state_44761__$1;(statearr_44769_44797[2] = null);
(statearr_44769_44797[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44762 === 7))
{var inst_44752 = (state_44761[2]);var state_44761__$1 = state_44761;if(cljs.core.truth_(inst_44752))
{var statearr_44770_44798 = state_44761__$1;(statearr_44770_44798[1] = 15);
} else
{var statearr_44771_44799 = state_44761__$1;(statearr_44771_44799[1] = 16);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44762 === 8))
{var inst_44738 = cljs.core.async.timeout.call(null,delay);var state_44761__$1 = state_44761;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44761__$1,11,inst_44738);
} else
{if((state_val_44762 === 9))
{var state_44761__$1 = state_44761;var statearr_44772_44800 = state_44761__$1;(statearr_44772_44800[2] = null);
(statearr_44772_44800[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44762 === 10))
{var inst_44743 = (state_44761[2]);var state_44761__$1 = (function (){var statearr_44773 = state_44761;(statearr_44773[8] = inst_44743);
return statearr_44773;
})();if(cljs.core.truth_(log))
{var statearr_44774_44801 = state_44761__$1;(statearr_44774_44801[1] = 12);
} else
{var statearr_44775_44802 = state_44761__$1;(statearr_44775_44802[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44762 === 11))
{var inst_44740 = (state_44761[2]);var state_44761__$1 = state_44761;var statearr_44776_44803 = state_44761__$1;(statearr_44776_44803[2] = inst_44740);
(statearr_44776_44803[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44762 === 12))
{var inst_44735 = (state_44761[7]);var inst_44745 = cljs.core.clj__GT_js.call(null,inst_44735);var inst_44746 = console.log(inst_44745);var state_44761__$1 = state_44761;var statearr_44777_44804 = state_44761__$1;(statearr_44777_44804[2] = inst_44746);
(statearr_44777_44804[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44762 === 13))
{var state_44761__$1 = state_44761;var statearr_44778_44805 = state_44761__$1;(statearr_44778_44805[2] = null);
(statearr_44778_44805[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44762 === 14))
{var inst_44735 = (state_44761[7]);var inst_44749 = (state_44761[2]);var state_44761__$1 = (function (){var statearr_44779 = state_44761;(statearr_44779[9] = inst_44749);
return statearr_44779;
})();var statearr_44780_44806 = state_44761__$1;(statearr_44780_44806[2] = inst_44735);
(statearr_44780_44806[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44762 === 15))
{var state_44761__$1 = state_44761;var statearr_44781_44807 = state_44761__$1;(statearr_44781_44807[2] = null);
(statearr_44781_44807[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44762 === 16))
{var state_44761__$1 = state_44761;var statearr_44782_44808 = state_44761__$1;(statearr_44782_44808[2] = null);
(statearr_44782_44808[1] = 17);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44762 === 17))
{var inst_44757 = (state_44761[2]);var state_44761__$1 = state_44761;var statearr_44783_44809 = state_44761__$1;(statearr_44783_44809[2] = inst_44757);
(statearr_44783_44809[1] = 3);
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
var state_machine__5548__auto____0 = (function (){var statearr_44787 = [null,null,null,null,null,null,null,null,null,null];(statearr_44787[0] = state_machine__5548__auto__);
(statearr_44787[1] = 1);
return statearr_44787;
});
var state_machine__5548__auto____1 = (function (state_44761){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__.call(null,state_44761);if(cljs.core.keyword_identical_QMARK_.call(null,result__5550__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e44788){if((e44788 instanceof Object))
{var ex__5551__auto__ = e44788;var statearr_44789_44810 = state_44761;(statearr_44789_44810[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44761);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e44788;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5549__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__44811 = state_44761;
state_44761 = G__44811;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_44761){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_44761);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_44790 = f__5563__auto__.call(null);(statearr_44790[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto___44791);
return statearr_44790;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5564__auto__);
}));
return null;
};
var dorun_async = function (ch,var_args){
var p__44672 = null;if (arguments.length > 1) {
  p__44672 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return dorun_async__delegate.call(this,ch,p__44672);};
dorun_async.cljs$lang$maxFixedArity = 1;
dorun_async.cljs$lang$applyTo = (function (arglist__44812){
var ch = cljs.core.first(arglist__44812);
var p__44672 = cljs.core.rest(arglist__44812);
return dorun_async__delegate(ch,p__44672);
});
dorun_async.cljs$core$IFn$_invoke$arity$variadic = dorun_async__delegate;
return dorun_async;
})()
;
