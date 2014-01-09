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
map_async.cljs$lang$applyTo = (function (arglist__10604){
var f = cljs.core.first(arglist__10604);
var colls = cljs.core.rest(arglist__10604);
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
var dorun_async__delegate = function (ch,p__10605){var map__10665 = p__10605;var map__10665__$1 = ((cljs.core.seq_QMARK_.call(null,map__10665))?cljs.core.apply.call(null,cljs.core.hash_map,map__10665):map__10665);var delay = cljs.core.get.call(null,map__10665__$1,new cljs.core.Keyword(null,"delay","delay",1109372149));var log = cljs.core.get.call(null,map__10665__$1,new cljs.core.Keyword(null,"log","log",1014011574));var c__5521__auto___10724 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_10694){var state_val_10695 = (state_10694[1]);if((state_val_10695 === 1))
{var state_10694__$1 = state_10694;var statearr_10696_10725 = state_10694__$1;(statearr_10696_10725[2] = null);
(statearr_10696_10725[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10695 === 2))
{var state_10694__$1 = state_10694;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10694__$1,4,ch);
} else
{if((state_val_10695 === 3))
{var inst_10692 = (state_10694[2]);var state_10694__$1 = state_10694;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10694__$1,inst_10692);
} else
{if((state_val_10695 === 4))
{var inst_10668 = (state_10694[7]);var inst_10668__$1 = (state_10694[2]);var state_10694__$1 = (function (){var statearr_10697 = state_10694;(statearr_10697[7] = inst_10668__$1);
return statearr_10697;
})();if(cljs.core.truth_(inst_10668__$1))
{var statearr_10698_10726 = state_10694__$1;(statearr_10698_10726[1] = 5);
} else
{var statearr_10699_10727 = state_10694__$1;(statearr_10699_10727[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10695 === 5))
{var state_10694__$1 = state_10694;if(cljs.core.truth_(delay))
{var statearr_10700_10728 = state_10694__$1;(statearr_10700_10728[1] = 8);
} else
{var statearr_10701_10729 = state_10694__$1;(statearr_10701_10729[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10695 === 6))
{var state_10694__$1 = state_10694;var statearr_10702_10730 = state_10694__$1;(statearr_10702_10730[2] = null);
(statearr_10702_10730[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10695 === 7))
{var inst_10685 = (state_10694[2]);var state_10694__$1 = state_10694;if(cljs.core.truth_(inst_10685))
{var statearr_10703_10731 = state_10694__$1;(statearr_10703_10731[1] = 15);
} else
{var statearr_10704_10732 = state_10694__$1;(statearr_10704_10732[1] = 16);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10695 === 8))
{var inst_10671 = cljs.core.async.timeout.call(null,delay);var state_10694__$1 = state_10694;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10694__$1,11,inst_10671);
} else
{if((state_val_10695 === 9))
{var state_10694__$1 = state_10694;var statearr_10705_10733 = state_10694__$1;(statearr_10705_10733[2] = null);
(statearr_10705_10733[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10695 === 10))
{var inst_10676 = (state_10694[2]);var state_10694__$1 = (function (){var statearr_10706 = state_10694;(statearr_10706[8] = inst_10676);
return statearr_10706;
})();if(cljs.core.truth_(log))
{var statearr_10707_10734 = state_10694__$1;(statearr_10707_10734[1] = 12);
} else
{var statearr_10708_10735 = state_10694__$1;(statearr_10708_10735[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10695 === 11))
{var inst_10673 = (state_10694[2]);var state_10694__$1 = state_10694;var statearr_10709_10736 = state_10694__$1;(statearr_10709_10736[2] = inst_10673);
(statearr_10709_10736[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10695 === 12))
{var inst_10668 = (state_10694[7]);var inst_10678 = cljs.core.clj__GT_js.call(null,inst_10668);var inst_10679 = console.log(inst_10678);var state_10694__$1 = state_10694;var statearr_10710_10737 = state_10694__$1;(statearr_10710_10737[2] = inst_10679);
(statearr_10710_10737[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10695 === 13))
{var state_10694__$1 = state_10694;var statearr_10711_10738 = state_10694__$1;(statearr_10711_10738[2] = null);
(statearr_10711_10738[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10695 === 14))
{var inst_10668 = (state_10694[7]);var inst_10682 = (state_10694[2]);var state_10694__$1 = (function (){var statearr_10712 = state_10694;(statearr_10712[9] = inst_10682);
return statearr_10712;
})();var statearr_10713_10739 = state_10694__$1;(statearr_10713_10739[2] = inst_10668);
(statearr_10713_10739[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10695 === 15))
{var state_10694__$1 = state_10694;var statearr_10714_10740 = state_10694__$1;(statearr_10714_10740[2] = null);
(statearr_10714_10740[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10695 === 16))
{var state_10694__$1 = state_10694;var statearr_10715_10741 = state_10694__$1;(statearr_10715_10741[2] = null);
(statearr_10715_10741[1] = 17);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10695 === 17))
{var inst_10690 = (state_10694[2]);var state_10694__$1 = state_10694;var statearr_10716_10742 = state_10694__$1;(statearr_10716_10742[2] = inst_10690);
(statearr_10716_10742[1] = 3);
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
var state_machine__5507__auto____0 = (function (){var statearr_10720 = [null,null,null,null,null,null,null,null,null,null];(statearr_10720[0] = state_machine__5507__auto__);
(statearr_10720[1] = 1);
return statearr_10720;
});
var state_machine__5507__auto____1 = (function (state_10694){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_10694);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e10721){if((e10721 instanceof Object))
{var ex__5510__auto__ = e10721;var statearr_10722_10743 = state_10694;(statearr_10722_10743[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10694);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10721;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__10744 = state_10694;
state_10694 = G__10744;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_10694){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_10694);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_10723 = f__5522__auto__.call(null);(statearr_10723[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___10724);
return statearr_10723;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5523__auto__);
}));
return null;
};
var dorun_async = function (ch,var_args){
var p__10605 = null;if (arguments.length > 1) {
  p__10605 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return dorun_async__delegate.call(this,ch,p__10605);};
dorun_async.cljs$lang$maxFixedArity = 1;
dorun_async.cljs$lang$applyTo = (function (arglist__10745){
var ch = cljs.core.first(arglist__10745);
var p__10605 = cljs.core.rest(arglist__10745);
return dorun_async__delegate(ch,p__10605);
});
dorun_async.cljs$core$IFn$_invoke$arity$variadic = dorun_async__delegate;
return dorun_async;
})()
;

//# sourceMappingURL=async.js.map