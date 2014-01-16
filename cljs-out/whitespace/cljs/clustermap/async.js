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
map_async.cljs$lang$applyTo = (function (arglist__29587){
var f = cljs.core.first(arglist__29587);
var colls = cljs.core.rest(arglist__29587);
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
var dorun_async__delegate = function (ch,p__29588){var map__29648 = p__29588;var map__29648__$1 = ((cljs.core.seq_QMARK_.call(null,map__29648))?cljs.core.apply.call(null,cljs.core.hash_map,map__29648):map__29648);var delay = cljs.core.get.call(null,map__29648__$1,new cljs.core.Keyword(null,"delay","delay",1109372149));var log = cljs.core.get.call(null,map__29648__$1,new cljs.core.Keyword(null,"log","log",1014011574));var c__5521__auto___29707 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_29677){var state_val_29678 = (state_29677[1]);if((state_val_29678 === 1))
{var state_29677__$1 = state_29677;var statearr_29679_29708 = state_29677__$1;(statearr_29679_29708[2] = null);
(statearr_29679_29708[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29678 === 2))
{var state_29677__$1 = state_29677;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29677__$1,4,ch);
} else
{if((state_val_29678 === 3))
{var inst_29675 = (state_29677[2]);var state_29677__$1 = state_29677;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29677__$1,inst_29675);
} else
{if((state_val_29678 === 4))
{var inst_29651 = (state_29677[7]);var inst_29651__$1 = (state_29677[2]);var state_29677__$1 = (function (){var statearr_29680 = state_29677;(statearr_29680[7] = inst_29651__$1);
return statearr_29680;
})();if(cljs.core.truth_(inst_29651__$1))
{var statearr_29681_29709 = state_29677__$1;(statearr_29681_29709[1] = 5);
} else
{var statearr_29682_29710 = state_29677__$1;(statearr_29682_29710[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29678 === 5))
{var state_29677__$1 = state_29677;if(cljs.core.truth_(delay))
{var statearr_29683_29711 = state_29677__$1;(statearr_29683_29711[1] = 8);
} else
{var statearr_29684_29712 = state_29677__$1;(statearr_29684_29712[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29678 === 6))
{var state_29677__$1 = state_29677;var statearr_29685_29713 = state_29677__$1;(statearr_29685_29713[2] = null);
(statearr_29685_29713[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29678 === 7))
{var inst_29668 = (state_29677[2]);var state_29677__$1 = state_29677;if(cljs.core.truth_(inst_29668))
{var statearr_29686_29714 = state_29677__$1;(statearr_29686_29714[1] = 15);
} else
{var statearr_29687_29715 = state_29677__$1;(statearr_29687_29715[1] = 16);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29678 === 8))
{var inst_29654 = cljs.core.async.timeout.call(null,delay);var state_29677__$1 = state_29677;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29677__$1,11,inst_29654);
} else
{if((state_val_29678 === 9))
{var state_29677__$1 = state_29677;var statearr_29688_29716 = state_29677__$1;(statearr_29688_29716[2] = null);
(statearr_29688_29716[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29678 === 10))
{var inst_29659 = (state_29677[2]);var state_29677__$1 = (function (){var statearr_29689 = state_29677;(statearr_29689[8] = inst_29659);
return statearr_29689;
})();if(cljs.core.truth_(log))
{var statearr_29690_29717 = state_29677__$1;(statearr_29690_29717[1] = 12);
} else
{var statearr_29691_29718 = state_29677__$1;(statearr_29691_29718[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29678 === 11))
{var inst_29656 = (state_29677[2]);var state_29677__$1 = state_29677;var statearr_29692_29719 = state_29677__$1;(statearr_29692_29719[2] = inst_29656);
(statearr_29692_29719[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29678 === 12))
{var inst_29651 = (state_29677[7]);var inst_29661 = cljs.core.clj__GT_js.call(null,inst_29651);var inst_29662 = console.log(inst_29661);var state_29677__$1 = state_29677;var statearr_29693_29720 = state_29677__$1;(statearr_29693_29720[2] = inst_29662);
(statearr_29693_29720[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29678 === 13))
{var state_29677__$1 = state_29677;var statearr_29694_29721 = state_29677__$1;(statearr_29694_29721[2] = null);
(statearr_29694_29721[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29678 === 14))
{var inst_29651 = (state_29677[7]);var inst_29665 = (state_29677[2]);var state_29677__$1 = (function (){var statearr_29695 = state_29677;(statearr_29695[9] = inst_29665);
return statearr_29695;
})();var statearr_29696_29722 = state_29677__$1;(statearr_29696_29722[2] = inst_29651);
(statearr_29696_29722[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29678 === 15))
{var state_29677__$1 = state_29677;var statearr_29697_29723 = state_29677__$1;(statearr_29697_29723[2] = null);
(statearr_29697_29723[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29678 === 16))
{var state_29677__$1 = state_29677;var statearr_29698_29724 = state_29677__$1;(statearr_29698_29724[2] = null);
(statearr_29698_29724[1] = 17);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29678 === 17))
{var inst_29673 = (state_29677[2]);var state_29677__$1 = state_29677;var statearr_29699_29725 = state_29677__$1;(statearr_29699_29725[2] = inst_29673);
(statearr_29699_29725[1] = 3);
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
var state_machine__5507__auto____0 = (function (){var statearr_29703 = [null,null,null,null,null,null,null,null,null,null];(statearr_29703[0] = state_machine__5507__auto__);
(statearr_29703[1] = 1);
return statearr_29703;
});
var state_machine__5507__auto____1 = (function (state_29677){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_29677);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e29704){if((e29704 instanceof Object))
{var ex__5510__auto__ = e29704;var statearr_29705_29726 = state_29677;(statearr_29705_29726[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29677);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e29704;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__29727 = state_29677;
state_29677 = G__29727;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_29677){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_29677);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_29706 = f__5522__auto__.call(null);(statearr_29706[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___29707);
return statearr_29706;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5523__auto__);
}));
return null;
};
var dorun_async = function (ch,var_args){
var p__29588 = null;if (arguments.length > 1) {
  p__29588 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return dorun_async__delegate.call(this,ch,p__29588);};
dorun_async.cljs$lang$maxFixedArity = 1;
dorun_async.cljs$lang$applyTo = (function (arglist__29728){
var ch = cljs.core.first(arglist__29728);
var p__29588 = cljs.core.rest(arglist__29728);
return dorun_async__delegate(ch,p__29588);
});
dorun_async.cljs$core$IFn$_invoke$arity$variadic = dorun_async__delegate;
return dorun_async;
})()
;
