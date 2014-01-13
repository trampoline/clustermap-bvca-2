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
map_async.cljs$lang$applyTo = (function (arglist__10655){
var f = cljs.core.first(arglist__10655);
var colls = cljs.core.rest(arglist__10655);
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
var dorun_async__delegate = function (ch,p__10656){var map__10716 = p__10656;var map__10716__$1 = ((cljs.core.seq_QMARK_.call(null,map__10716))?cljs.core.apply.call(null,cljs.core.hash_map,map__10716):map__10716);var delay = cljs.core.get.call(null,map__10716__$1,new cljs.core.Keyword(null,"delay","delay",1109372149));var log = cljs.core.get.call(null,map__10716__$1,new cljs.core.Keyword(null,"log","log",1014011574));var c__5521__auto___10775 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_10745){var state_val_10746 = (state_10745[1]);if((state_val_10746 === 1))
{var state_10745__$1 = state_10745;var statearr_10747_10776 = state_10745__$1;(statearr_10747_10776[2] = null);
(statearr_10747_10776[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10746 === 2))
{var state_10745__$1 = state_10745;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10745__$1,4,ch);
} else
{if((state_val_10746 === 3))
{var inst_10743 = (state_10745[2]);var state_10745__$1 = state_10745;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10745__$1,inst_10743);
} else
{if((state_val_10746 === 4))
{var inst_10719 = (state_10745[7]);var inst_10719__$1 = (state_10745[2]);var state_10745__$1 = (function (){var statearr_10748 = state_10745;(statearr_10748[7] = inst_10719__$1);
return statearr_10748;
})();if(cljs.core.truth_(inst_10719__$1))
{var statearr_10749_10777 = state_10745__$1;(statearr_10749_10777[1] = 5);
} else
{var statearr_10750_10778 = state_10745__$1;(statearr_10750_10778[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10746 === 5))
{var state_10745__$1 = state_10745;if(cljs.core.truth_(delay))
{var statearr_10751_10779 = state_10745__$1;(statearr_10751_10779[1] = 8);
} else
{var statearr_10752_10780 = state_10745__$1;(statearr_10752_10780[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10746 === 6))
{var state_10745__$1 = state_10745;var statearr_10753_10781 = state_10745__$1;(statearr_10753_10781[2] = null);
(statearr_10753_10781[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10746 === 7))
{var inst_10736 = (state_10745[2]);var state_10745__$1 = state_10745;if(cljs.core.truth_(inst_10736))
{var statearr_10754_10782 = state_10745__$1;(statearr_10754_10782[1] = 15);
} else
{var statearr_10755_10783 = state_10745__$1;(statearr_10755_10783[1] = 16);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10746 === 8))
{var inst_10722 = cljs.core.async.timeout.call(null,delay);var state_10745__$1 = state_10745;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10745__$1,11,inst_10722);
} else
{if((state_val_10746 === 9))
{var state_10745__$1 = state_10745;var statearr_10756_10784 = state_10745__$1;(statearr_10756_10784[2] = null);
(statearr_10756_10784[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10746 === 10))
{var inst_10727 = (state_10745[2]);var state_10745__$1 = (function (){var statearr_10757 = state_10745;(statearr_10757[8] = inst_10727);
return statearr_10757;
})();if(cljs.core.truth_(log))
{var statearr_10758_10785 = state_10745__$1;(statearr_10758_10785[1] = 12);
} else
{var statearr_10759_10786 = state_10745__$1;(statearr_10759_10786[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10746 === 11))
{var inst_10724 = (state_10745[2]);var state_10745__$1 = state_10745;var statearr_10760_10787 = state_10745__$1;(statearr_10760_10787[2] = inst_10724);
(statearr_10760_10787[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10746 === 12))
{var inst_10719 = (state_10745[7]);var inst_10729 = cljs.core.clj__GT_js.call(null,inst_10719);var inst_10730 = console.log(inst_10729);var state_10745__$1 = state_10745;var statearr_10761_10788 = state_10745__$1;(statearr_10761_10788[2] = inst_10730);
(statearr_10761_10788[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10746 === 13))
{var state_10745__$1 = state_10745;var statearr_10762_10789 = state_10745__$1;(statearr_10762_10789[2] = null);
(statearr_10762_10789[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10746 === 14))
{var inst_10719 = (state_10745[7]);var inst_10733 = (state_10745[2]);var state_10745__$1 = (function (){var statearr_10763 = state_10745;(statearr_10763[9] = inst_10733);
return statearr_10763;
})();var statearr_10764_10790 = state_10745__$1;(statearr_10764_10790[2] = inst_10719);
(statearr_10764_10790[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10746 === 15))
{var state_10745__$1 = state_10745;var statearr_10765_10791 = state_10745__$1;(statearr_10765_10791[2] = null);
(statearr_10765_10791[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10746 === 16))
{var state_10745__$1 = state_10745;var statearr_10766_10792 = state_10745__$1;(statearr_10766_10792[2] = null);
(statearr_10766_10792[1] = 17);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10746 === 17))
{var inst_10741 = (state_10745[2]);var state_10745__$1 = state_10745;var statearr_10767_10793 = state_10745__$1;(statearr_10767_10793[2] = inst_10741);
(statearr_10767_10793[1] = 3);
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
var state_machine__5507__auto____0 = (function (){var statearr_10771 = [null,null,null,null,null,null,null,null,null,null];(statearr_10771[0] = state_machine__5507__auto__);
(statearr_10771[1] = 1);
return statearr_10771;
});
var state_machine__5507__auto____1 = (function (state_10745){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_10745);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e10772){if((e10772 instanceof Object))
{var ex__5510__auto__ = e10772;var statearr_10773_10794 = state_10745;(statearr_10773_10794[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10745);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10772;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__10795 = state_10745;
state_10745 = G__10795;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_10745){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_10745);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_10774 = f__5522__auto__.call(null);(statearr_10774[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___10775);
return statearr_10774;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5523__auto__);
}));
return null;
};
var dorun_async = function (ch,var_args){
var p__10656 = null;if (arguments.length > 1) {
  p__10656 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return dorun_async__delegate.call(this,ch,p__10656);};
dorun_async.cljs$lang$maxFixedArity = 1;
dorun_async.cljs$lang$applyTo = (function (arglist__10796){
var ch = cljs.core.first(arglist__10796);
var p__10656 = cljs.core.rest(arglist__10796);
return dorun_async__delegate(ch,p__10656);
});
dorun_async.cljs$core$IFn$_invoke$arity$variadic = dorun_async__delegate;
return dorun_async;
})()
;

//# sourceMappingURL=async.js.map