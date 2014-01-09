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
map_async.cljs$lang$applyTo = (function (arglist__10536){
var f = cljs.core.first(arglist__10536);
var colls = cljs.core.rest(arglist__10536);
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
var dorun_async__delegate = function (ch,p__10537){var map__10597 = p__10537;var map__10597__$1 = ((cljs.core.seq_QMARK_.call(null,map__10597))?cljs.core.apply.call(null,cljs.core.hash_map,map__10597):map__10597);var delay = cljs.core.get.call(null,map__10597__$1,new cljs.core.Keyword(null,"delay","delay",1109372149));var log = cljs.core.get.call(null,map__10597__$1,new cljs.core.Keyword(null,"log","log",1014011574));var c__5521__auto___10656 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_10626){var state_val_10627 = (state_10626[1]);if((state_val_10627 === 1))
{var state_10626__$1 = state_10626;var statearr_10628_10657 = state_10626__$1;(statearr_10628_10657[2] = null);
(statearr_10628_10657[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10627 === 2))
{var state_10626__$1 = state_10626;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10626__$1,4,ch);
} else
{if((state_val_10627 === 3))
{var inst_10624 = (state_10626[2]);var state_10626__$1 = state_10626;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10626__$1,inst_10624);
} else
{if((state_val_10627 === 4))
{var inst_10600 = (state_10626[7]);var inst_10600__$1 = (state_10626[2]);var state_10626__$1 = (function (){var statearr_10629 = state_10626;(statearr_10629[7] = inst_10600__$1);
return statearr_10629;
})();if(cljs.core.truth_(inst_10600__$1))
{var statearr_10630_10658 = state_10626__$1;(statearr_10630_10658[1] = 5);
} else
{var statearr_10631_10659 = state_10626__$1;(statearr_10631_10659[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10627 === 5))
{var state_10626__$1 = state_10626;if(cljs.core.truth_(delay))
{var statearr_10632_10660 = state_10626__$1;(statearr_10632_10660[1] = 8);
} else
{var statearr_10633_10661 = state_10626__$1;(statearr_10633_10661[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10627 === 6))
{var state_10626__$1 = state_10626;var statearr_10634_10662 = state_10626__$1;(statearr_10634_10662[2] = null);
(statearr_10634_10662[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10627 === 7))
{var inst_10617 = (state_10626[2]);var state_10626__$1 = state_10626;if(cljs.core.truth_(inst_10617))
{var statearr_10635_10663 = state_10626__$1;(statearr_10635_10663[1] = 15);
} else
{var statearr_10636_10664 = state_10626__$1;(statearr_10636_10664[1] = 16);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10627 === 8))
{var inst_10603 = cljs.core.async.timeout.call(null,delay);var state_10626__$1 = state_10626;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10626__$1,11,inst_10603);
} else
{if((state_val_10627 === 9))
{var state_10626__$1 = state_10626;var statearr_10637_10665 = state_10626__$1;(statearr_10637_10665[2] = null);
(statearr_10637_10665[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10627 === 10))
{var inst_10608 = (state_10626[2]);var state_10626__$1 = (function (){var statearr_10638 = state_10626;(statearr_10638[8] = inst_10608);
return statearr_10638;
})();if(cljs.core.truth_(log))
{var statearr_10639_10666 = state_10626__$1;(statearr_10639_10666[1] = 12);
} else
{var statearr_10640_10667 = state_10626__$1;(statearr_10640_10667[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10627 === 11))
{var inst_10605 = (state_10626[2]);var state_10626__$1 = state_10626;var statearr_10641_10668 = state_10626__$1;(statearr_10641_10668[2] = inst_10605);
(statearr_10641_10668[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10627 === 12))
{var inst_10600 = (state_10626[7]);var inst_10610 = cljs.core.clj__GT_js.call(null,inst_10600);var inst_10611 = console.log(inst_10610);var state_10626__$1 = state_10626;var statearr_10642_10669 = state_10626__$1;(statearr_10642_10669[2] = inst_10611);
(statearr_10642_10669[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10627 === 13))
{var state_10626__$1 = state_10626;var statearr_10643_10670 = state_10626__$1;(statearr_10643_10670[2] = null);
(statearr_10643_10670[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10627 === 14))
{var inst_10600 = (state_10626[7]);var inst_10614 = (state_10626[2]);var state_10626__$1 = (function (){var statearr_10644 = state_10626;(statearr_10644[9] = inst_10614);
return statearr_10644;
})();var statearr_10645_10671 = state_10626__$1;(statearr_10645_10671[2] = inst_10600);
(statearr_10645_10671[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10627 === 15))
{var state_10626__$1 = state_10626;var statearr_10646_10672 = state_10626__$1;(statearr_10646_10672[2] = null);
(statearr_10646_10672[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10627 === 16))
{var state_10626__$1 = state_10626;var statearr_10647_10673 = state_10626__$1;(statearr_10647_10673[2] = null);
(statearr_10647_10673[1] = 17);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10627 === 17))
{var inst_10622 = (state_10626[2]);var state_10626__$1 = state_10626;var statearr_10648_10674 = state_10626__$1;(statearr_10648_10674[2] = inst_10622);
(statearr_10648_10674[1] = 3);
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
var state_machine__5507__auto____0 = (function (){var statearr_10652 = [null,null,null,null,null,null,null,null,null,null];(statearr_10652[0] = state_machine__5507__auto__);
(statearr_10652[1] = 1);
return statearr_10652;
});
var state_machine__5507__auto____1 = (function (state_10626){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_10626);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e10653){if((e10653 instanceof Object))
{var ex__5510__auto__ = e10653;var statearr_10654_10675 = state_10626;(statearr_10654_10675[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10626);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10653;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__10676 = state_10626;
state_10626 = G__10676;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_10626){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_10626);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_10655 = f__5522__auto__.call(null);(statearr_10655[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___10656);
return statearr_10655;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5523__auto__);
}));
return null;
};
var dorun_async = function (ch,var_args){
var p__10537 = null;if (arguments.length > 1) {
  p__10537 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return dorun_async__delegate.call(this,ch,p__10537);};
dorun_async.cljs$lang$maxFixedArity = 1;
dorun_async.cljs$lang$applyTo = (function (arglist__10677){
var ch = cljs.core.first(arglist__10677);
var p__10537 = cljs.core.rest(arglist__10677);
return dorun_async__delegate(ch,p__10537);
});
dorun_async.cljs$core$IFn$_invoke$arity$variadic = dorun_async__delegate;
return dorun_async;
})()
;

//# sourceMappingURL=async.js.map