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
map_async.cljs$lang$applyTo = (function (arglist__30591){
var f = cljs.core.first(arglist__30591);
var colls = cljs.core.rest(arglist__30591);
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
var dorun_async__delegate = function (ch,p__30592){var map__30652 = p__30592;var map__30652__$1 = ((cljs.core.seq_QMARK_.call(null,map__30652))?cljs.core.apply.call(null,cljs.core.hash_map,map__30652):map__30652);var delay = cljs.core.get.call(null,map__30652__$1,new cljs.core.Keyword(null,"delay","delay",1109372149));var log = cljs.core.get.call(null,map__30652__$1,new cljs.core.Keyword(null,"log","log",1014011574));var c__5521__auto___30711 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_30681){var state_val_30682 = (state_30681[1]);if((state_val_30682 === 1))
{var state_30681__$1 = state_30681;var statearr_30683_30712 = state_30681__$1;(statearr_30683_30712[2] = null);
(statearr_30683_30712[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30682 === 2))
{var state_30681__$1 = state_30681;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30681__$1,4,ch);
} else
{if((state_val_30682 === 3))
{var inst_30679 = (state_30681[2]);var state_30681__$1 = state_30681;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30681__$1,inst_30679);
} else
{if((state_val_30682 === 4))
{var inst_30655 = (state_30681[7]);var inst_30655__$1 = (state_30681[2]);var state_30681__$1 = (function (){var statearr_30684 = state_30681;(statearr_30684[7] = inst_30655__$1);
return statearr_30684;
})();if(cljs.core.truth_(inst_30655__$1))
{var statearr_30685_30713 = state_30681__$1;(statearr_30685_30713[1] = 5);
} else
{var statearr_30686_30714 = state_30681__$1;(statearr_30686_30714[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30682 === 5))
{var state_30681__$1 = state_30681;if(cljs.core.truth_(delay))
{var statearr_30687_30715 = state_30681__$1;(statearr_30687_30715[1] = 8);
} else
{var statearr_30688_30716 = state_30681__$1;(statearr_30688_30716[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30682 === 6))
{var state_30681__$1 = state_30681;var statearr_30689_30717 = state_30681__$1;(statearr_30689_30717[2] = null);
(statearr_30689_30717[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30682 === 7))
{var inst_30672 = (state_30681[2]);var state_30681__$1 = state_30681;if(cljs.core.truth_(inst_30672))
{var statearr_30690_30718 = state_30681__$1;(statearr_30690_30718[1] = 15);
} else
{var statearr_30691_30719 = state_30681__$1;(statearr_30691_30719[1] = 16);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30682 === 8))
{var inst_30658 = cljs.core.async.timeout.call(null,delay);var state_30681__$1 = state_30681;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30681__$1,11,inst_30658);
} else
{if((state_val_30682 === 9))
{var state_30681__$1 = state_30681;var statearr_30692_30720 = state_30681__$1;(statearr_30692_30720[2] = null);
(statearr_30692_30720[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30682 === 10))
{var inst_30663 = (state_30681[2]);var state_30681__$1 = (function (){var statearr_30693 = state_30681;(statearr_30693[8] = inst_30663);
return statearr_30693;
})();if(cljs.core.truth_(log))
{var statearr_30694_30721 = state_30681__$1;(statearr_30694_30721[1] = 12);
} else
{var statearr_30695_30722 = state_30681__$1;(statearr_30695_30722[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30682 === 11))
{var inst_30660 = (state_30681[2]);var state_30681__$1 = state_30681;var statearr_30696_30723 = state_30681__$1;(statearr_30696_30723[2] = inst_30660);
(statearr_30696_30723[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30682 === 12))
{var inst_30655 = (state_30681[7]);var inst_30665 = cljs.core.clj__GT_js.call(null,inst_30655);var inst_30666 = console.log(inst_30665);var state_30681__$1 = state_30681;var statearr_30697_30724 = state_30681__$1;(statearr_30697_30724[2] = inst_30666);
(statearr_30697_30724[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30682 === 13))
{var state_30681__$1 = state_30681;var statearr_30698_30725 = state_30681__$1;(statearr_30698_30725[2] = null);
(statearr_30698_30725[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30682 === 14))
{var inst_30655 = (state_30681[7]);var inst_30669 = (state_30681[2]);var state_30681__$1 = (function (){var statearr_30699 = state_30681;(statearr_30699[9] = inst_30669);
return statearr_30699;
})();var statearr_30700_30726 = state_30681__$1;(statearr_30700_30726[2] = inst_30655);
(statearr_30700_30726[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30682 === 15))
{var state_30681__$1 = state_30681;var statearr_30701_30727 = state_30681__$1;(statearr_30701_30727[2] = null);
(statearr_30701_30727[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30682 === 16))
{var state_30681__$1 = state_30681;var statearr_30702_30728 = state_30681__$1;(statearr_30702_30728[2] = null);
(statearr_30702_30728[1] = 17);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30682 === 17))
{var inst_30677 = (state_30681[2]);var state_30681__$1 = state_30681;var statearr_30703_30729 = state_30681__$1;(statearr_30703_30729[2] = inst_30677);
(statearr_30703_30729[1] = 3);
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
var state_machine__5507__auto____0 = (function (){var statearr_30707 = [null,null,null,null,null,null,null,null,null,null];(statearr_30707[0] = state_machine__5507__auto__);
(statearr_30707[1] = 1);
return statearr_30707;
});
var state_machine__5507__auto____1 = (function (state_30681){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_30681);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e30708){if((e30708 instanceof Object))
{var ex__5510__auto__ = e30708;var statearr_30709_30730 = state_30681;(statearr_30709_30730[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30681);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e30708;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__30731 = state_30681;
state_30681 = G__30731;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_30681){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_30681);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_30710 = f__5522__auto__.call(null);(statearr_30710[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___30711);
return statearr_30710;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5523__auto__);
}));
return null;
};
var dorun_async = function (ch,var_args){
var p__30592 = null;if (arguments.length > 1) {
  p__30592 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return dorun_async__delegate.call(this,ch,p__30592);};
dorun_async.cljs$lang$maxFixedArity = 1;
dorun_async.cljs$lang$applyTo = (function (arglist__30732){
var ch = cljs.core.first(arglist__30732);
var p__30592 = cljs.core.rest(arglist__30732);
return dorun_async__delegate(ch,p__30592);
});
dorun_async.cljs$core$IFn$_invoke$arity$variadic = dorun_async__delegate;
return dorun_async;
})()
;
