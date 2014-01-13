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
map_async.cljs$lang$applyTo = (function (arglist__10679){
var f = cljs.core.first(arglist__10679);
var colls = cljs.core.rest(arglist__10679);
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
var dorun_async__delegate = function (ch,p__10680){var map__10740 = p__10680;var map__10740__$1 = ((cljs.core.seq_QMARK_.call(null,map__10740))?cljs.core.apply.call(null,cljs.core.hash_map,map__10740):map__10740);var delay = cljs.core.get.call(null,map__10740__$1,new cljs.core.Keyword(null,"delay","delay",1109372149));var log = cljs.core.get.call(null,map__10740__$1,new cljs.core.Keyword(null,"log","log",1014011574));var c__5521__auto___10799 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_10769){var state_val_10770 = (state_10769[1]);if((state_val_10770 === 1))
{var state_10769__$1 = state_10769;var statearr_10771_10800 = state_10769__$1;(statearr_10771_10800[2] = null);
(statearr_10771_10800[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10770 === 2))
{var state_10769__$1 = state_10769;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10769__$1,4,ch);
} else
{if((state_val_10770 === 3))
{var inst_10767 = (state_10769[2]);var state_10769__$1 = state_10769;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10769__$1,inst_10767);
} else
{if((state_val_10770 === 4))
{var inst_10743 = (state_10769[7]);var inst_10743__$1 = (state_10769[2]);var state_10769__$1 = (function (){var statearr_10772 = state_10769;(statearr_10772[7] = inst_10743__$1);
return statearr_10772;
})();if(cljs.core.truth_(inst_10743__$1))
{var statearr_10773_10801 = state_10769__$1;(statearr_10773_10801[1] = 5);
} else
{var statearr_10774_10802 = state_10769__$1;(statearr_10774_10802[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10770 === 5))
{var state_10769__$1 = state_10769;if(cljs.core.truth_(delay))
{var statearr_10775_10803 = state_10769__$1;(statearr_10775_10803[1] = 8);
} else
{var statearr_10776_10804 = state_10769__$1;(statearr_10776_10804[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10770 === 6))
{var state_10769__$1 = state_10769;var statearr_10777_10805 = state_10769__$1;(statearr_10777_10805[2] = null);
(statearr_10777_10805[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10770 === 7))
{var inst_10760 = (state_10769[2]);var state_10769__$1 = state_10769;if(cljs.core.truth_(inst_10760))
{var statearr_10778_10806 = state_10769__$1;(statearr_10778_10806[1] = 15);
} else
{var statearr_10779_10807 = state_10769__$1;(statearr_10779_10807[1] = 16);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10770 === 8))
{var inst_10746 = cljs.core.async.timeout.call(null,delay);var state_10769__$1 = state_10769;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10769__$1,11,inst_10746);
} else
{if((state_val_10770 === 9))
{var state_10769__$1 = state_10769;var statearr_10780_10808 = state_10769__$1;(statearr_10780_10808[2] = null);
(statearr_10780_10808[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10770 === 10))
{var inst_10751 = (state_10769[2]);var state_10769__$1 = (function (){var statearr_10781 = state_10769;(statearr_10781[8] = inst_10751);
return statearr_10781;
})();if(cljs.core.truth_(log))
{var statearr_10782_10809 = state_10769__$1;(statearr_10782_10809[1] = 12);
} else
{var statearr_10783_10810 = state_10769__$1;(statearr_10783_10810[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10770 === 11))
{var inst_10748 = (state_10769[2]);var state_10769__$1 = state_10769;var statearr_10784_10811 = state_10769__$1;(statearr_10784_10811[2] = inst_10748);
(statearr_10784_10811[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10770 === 12))
{var inst_10743 = (state_10769[7]);var inst_10753 = cljs.core.clj__GT_js.call(null,inst_10743);var inst_10754 = console.log(inst_10753);var state_10769__$1 = state_10769;var statearr_10785_10812 = state_10769__$1;(statearr_10785_10812[2] = inst_10754);
(statearr_10785_10812[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10770 === 13))
{var state_10769__$1 = state_10769;var statearr_10786_10813 = state_10769__$1;(statearr_10786_10813[2] = null);
(statearr_10786_10813[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10770 === 14))
{var inst_10743 = (state_10769[7]);var inst_10757 = (state_10769[2]);var state_10769__$1 = (function (){var statearr_10787 = state_10769;(statearr_10787[9] = inst_10757);
return statearr_10787;
})();var statearr_10788_10814 = state_10769__$1;(statearr_10788_10814[2] = inst_10743);
(statearr_10788_10814[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10770 === 15))
{var state_10769__$1 = state_10769;var statearr_10789_10815 = state_10769__$1;(statearr_10789_10815[2] = null);
(statearr_10789_10815[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10770 === 16))
{var state_10769__$1 = state_10769;var statearr_10790_10816 = state_10769__$1;(statearr_10790_10816[2] = null);
(statearr_10790_10816[1] = 17);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10770 === 17))
{var inst_10765 = (state_10769[2]);var state_10769__$1 = state_10769;var statearr_10791_10817 = state_10769__$1;(statearr_10791_10817[2] = inst_10765);
(statearr_10791_10817[1] = 3);
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
var state_machine__5507__auto____0 = (function (){var statearr_10795 = [null,null,null,null,null,null,null,null,null,null];(statearr_10795[0] = state_machine__5507__auto__);
(statearr_10795[1] = 1);
return statearr_10795;
});
var state_machine__5507__auto____1 = (function (state_10769){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_10769);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e10796){if((e10796 instanceof Object))
{var ex__5510__auto__ = e10796;var statearr_10797_10818 = state_10769;(statearr_10797_10818[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10769);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10796;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__10819 = state_10769;
state_10769 = G__10819;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_10769){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_10769);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_10798 = f__5522__auto__.call(null);(statearr_10798[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___10799);
return statearr_10798;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5523__auto__);
}));
return null;
};
var dorun_async = function (ch,var_args){
var p__10680 = null;if (arguments.length > 1) {
  p__10680 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return dorun_async__delegate.call(this,ch,p__10680);};
dorun_async.cljs$lang$maxFixedArity = 1;
dorun_async.cljs$lang$applyTo = (function (arglist__10820){
var ch = cljs.core.first(arglist__10820);
var p__10680 = cljs.core.rest(arglist__10820);
return dorun_async__delegate(ch,p__10680);
});
dorun_async.cljs$core$IFn$_invoke$arity$variadic = dorun_async__delegate;
return dorun_async;
})()
;

//# sourceMappingURL=async.js.map