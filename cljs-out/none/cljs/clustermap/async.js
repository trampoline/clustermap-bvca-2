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
map_async.cljs$lang$applyTo = (function (arglist__10634){
var f = cljs.core.first(arglist__10634);
var colls = cljs.core.rest(arglist__10634);
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
var dorun_async__delegate = function (ch,p__10635){var map__10695 = p__10635;var map__10695__$1 = ((cljs.core.seq_QMARK_.call(null,map__10695))?cljs.core.apply.call(null,cljs.core.hash_map,map__10695):map__10695);var delay = cljs.core.get.call(null,map__10695__$1,new cljs.core.Keyword(null,"delay","delay",1109372149));var log = cljs.core.get.call(null,map__10695__$1,new cljs.core.Keyword(null,"log","log",1014011574));var c__5521__auto___10754 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_10724){var state_val_10725 = (state_10724[1]);if((state_val_10725 === 1))
{var state_10724__$1 = state_10724;var statearr_10726_10755 = state_10724__$1;(statearr_10726_10755[2] = null);
(statearr_10726_10755[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10725 === 2))
{var state_10724__$1 = state_10724;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10724__$1,4,ch);
} else
{if((state_val_10725 === 3))
{var inst_10722 = (state_10724[2]);var state_10724__$1 = state_10724;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10724__$1,inst_10722);
} else
{if((state_val_10725 === 4))
{var inst_10698 = (state_10724[7]);var inst_10698__$1 = (state_10724[2]);var state_10724__$1 = (function (){var statearr_10727 = state_10724;(statearr_10727[7] = inst_10698__$1);
return statearr_10727;
})();if(cljs.core.truth_(inst_10698__$1))
{var statearr_10728_10756 = state_10724__$1;(statearr_10728_10756[1] = 5);
} else
{var statearr_10729_10757 = state_10724__$1;(statearr_10729_10757[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10725 === 5))
{var state_10724__$1 = state_10724;if(cljs.core.truth_(delay))
{var statearr_10730_10758 = state_10724__$1;(statearr_10730_10758[1] = 8);
} else
{var statearr_10731_10759 = state_10724__$1;(statearr_10731_10759[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10725 === 6))
{var state_10724__$1 = state_10724;var statearr_10732_10760 = state_10724__$1;(statearr_10732_10760[2] = null);
(statearr_10732_10760[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10725 === 7))
{var inst_10715 = (state_10724[2]);var state_10724__$1 = state_10724;if(cljs.core.truth_(inst_10715))
{var statearr_10733_10761 = state_10724__$1;(statearr_10733_10761[1] = 15);
} else
{var statearr_10734_10762 = state_10724__$1;(statearr_10734_10762[1] = 16);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10725 === 8))
{var inst_10701 = cljs.core.async.timeout.call(null,delay);var state_10724__$1 = state_10724;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10724__$1,11,inst_10701);
} else
{if((state_val_10725 === 9))
{var state_10724__$1 = state_10724;var statearr_10735_10763 = state_10724__$1;(statearr_10735_10763[2] = null);
(statearr_10735_10763[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10725 === 10))
{var inst_10706 = (state_10724[2]);var state_10724__$1 = (function (){var statearr_10736 = state_10724;(statearr_10736[8] = inst_10706);
return statearr_10736;
})();if(cljs.core.truth_(log))
{var statearr_10737_10764 = state_10724__$1;(statearr_10737_10764[1] = 12);
} else
{var statearr_10738_10765 = state_10724__$1;(statearr_10738_10765[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10725 === 11))
{var inst_10703 = (state_10724[2]);var state_10724__$1 = state_10724;var statearr_10739_10766 = state_10724__$1;(statearr_10739_10766[2] = inst_10703);
(statearr_10739_10766[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10725 === 12))
{var inst_10698 = (state_10724[7]);var inst_10708 = cljs.core.clj__GT_js.call(null,inst_10698);var inst_10709 = console.log(inst_10708);var state_10724__$1 = state_10724;var statearr_10740_10767 = state_10724__$1;(statearr_10740_10767[2] = inst_10709);
(statearr_10740_10767[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10725 === 13))
{var state_10724__$1 = state_10724;var statearr_10741_10768 = state_10724__$1;(statearr_10741_10768[2] = null);
(statearr_10741_10768[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10725 === 14))
{var inst_10698 = (state_10724[7]);var inst_10712 = (state_10724[2]);var state_10724__$1 = (function (){var statearr_10742 = state_10724;(statearr_10742[9] = inst_10712);
return statearr_10742;
})();var statearr_10743_10769 = state_10724__$1;(statearr_10743_10769[2] = inst_10698);
(statearr_10743_10769[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10725 === 15))
{var state_10724__$1 = state_10724;var statearr_10744_10770 = state_10724__$1;(statearr_10744_10770[2] = null);
(statearr_10744_10770[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10725 === 16))
{var state_10724__$1 = state_10724;var statearr_10745_10771 = state_10724__$1;(statearr_10745_10771[2] = null);
(statearr_10745_10771[1] = 17);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10725 === 17))
{var inst_10720 = (state_10724[2]);var state_10724__$1 = state_10724;var statearr_10746_10772 = state_10724__$1;(statearr_10746_10772[2] = inst_10720);
(statearr_10746_10772[1] = 3);
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
var state_machine__5507__auto____0 = (function (){var statearr_10750 = [null,null,null,null,null,null,null,null,null,null];(statearr_10750[0] = state_machine__5507__auto__);
(statearr_10750[1] = 1);
return statearr_10750;
});
var state_machine__5507__auto____1 = (function (state_10724){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_10724);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e10751){if((e10751 instanceof Object))
{var ex__5510__auto__ = e10751;var statearr_10752_10773 = state_10724;(statearr_10752_10773[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10724);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10751;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__10774 = state_10724;
state_10724 = G__10774;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_10724){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_10724);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_10753 = f__5522__auto__.call(null);(statearr_10753[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___10754);
return statearr_10753;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5523__auto__);
}));
return null;
};
var dorun_async = function (ch,var_args){
var p__10635 = null;if (arguments.length > 1) {
  p__10635 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return dorun_async__delegate.call(this,ch,p__10635);};
dorun_async.cljs$lang$maxFixedArity = 1;
dorun_async.cljs$lang$applyTo = (function (arglist__10775){
var ch = cljs.core.first(arglist__10775);
var p__10635 = cljs.core.rest(arglist__10775);
return dorun_async__delegate(ch,p__10635);
});
dorun_async.cljs$core$IFn$_invoke$arity$variadic = dorun_async__delegate;
return dorun_async;
})()
;

//# sourceMappingURL=async.js.map