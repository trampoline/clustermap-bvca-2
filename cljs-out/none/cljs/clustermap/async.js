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
map_async.cljs$lang$applyTo = (function (arglist__10518){
var f = cljs.core.first(arglist__10518);
var colls = cljs.core.rest(arglist__10518);
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
var dorun_async__delegate = function (ch,p__10519){var map__10579 = p__10519;var map__10579__$1 = ((cljs.core.seq_QMARK_.call(null,map__10579))?cljs.core.apply.call(null,cljs.core.hash_map,map__10579):map__10579);var delay = cljs.core.get.call(null,map__10579__$1,new cljs.core.Keyword(null,"delay","delay",1109372149));var log = cljs.core.get.call(null,map__10579__$1,new cljs.core.Keyword(null,"log","log",1014011574));var c__5521__auto___10638 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_10608){var state_val_10609 = (state_10608[1]);if((state_val_10609 === 1))
{var state_10608__$1 = state_10608;var statearr_10610_10639 = state_10608__$1;(statearr_10610_10639[2] = null);
(statearr_10610_10639[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10609 === 2))
{var state_10608__$1 = state_10608;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10608__$1,4,ch);
} else
{if((state_val_10609 === 3))
{var inst_10606 = (state_10608[2]);var state_10608__$1 = state_10608;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10608__$1,inst_10606);
} else
{if((state_val_10609 === 4))
{var inst_10582 = (state_10608[7]);var inst_10582__$1 = (state_10608[2]);var state_10608__$1 = (function (){var statearr_10611 = state_10608;(statearr_10611[7] = inst_10582__$1);
return statearr_10611;
})();if(cljs.core.truth_(inst_10582__$1))
{var statearr_10612_10640 = state_10608__$1;(statearr_10612_10640[1] = 5);
} else
{var statearr_10613_10641 = state_10608__$1;(statearr_10613_10641[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10609 === 5))
{var state_10608__$1 = state_10608;if(cljs.core.truth_(delay))
{var statearr_10614_10642 = state_10608__$1;(statearr_10614_10642[1] = 8);
} else
{var statearr_10615_10643 = state_10608__$1;(statearr_10615_10643[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10609 === 6))
{var state_10608__$1 = state_10608;var statearr_10616_10644 = state_10608__$1;(statearr_10616_10644[2] = null);
(statearr_10616_10644[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10609 === 7))
{var inst_10599 = (state_10608[2]);var state_10608__$1 = state_10608;if(cljs.core.truth_(inst_10599))
{var statearr_10617_10645 = state_10608__$1;(statearr_10617_10645[1] = 15);
} else
{var statearr_10618_10646 = state_10608__$1;(statearr_10618_10646[1] = 16);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10609 === 8))
{var inst_10585 = cljs.core.async.timeout.call(null,delay);var state_10608__$1 = state_10608;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10608__$1,11,inst_10585);
} else
{if((state_val_10609 === 9))
{var state_10608__$1 = state_10608;var statearr_10619_10647 = state_10608__$1;(statearr_10619_10647[2] = null);
(statearr_10619_10647[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10609 === 10))
{var inst_10590 = (state_10608[2]);var state_10608__$1 = (function (){var statearr_10620 = state_10608;(statearr_10620[8] = inst_10590);
return statearr_10620;
})();if(cljs.core.truth_(log))
{var statearr_10621_10648 = state_10608__$1;(statearr_10621_10648[1] = 12);
} else
{var statearr_10622_10649 = state_10608__$1;(statearr_10622_10649[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10609 === 11))
{var inst_10587 = (state_10608[2]);var state_10608__$1 = state_10608;var statearr_10623_10650 = state_10608__$1;(statearr_10623_10650[2] = inst_10587);
(statearr_10623_10650[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10609 === 12))
{var inst_10582 = (state_10608[7]);var inst_10592 = cljs.core.clj__GT_js.call(null,inst_10582);var inst_10593 = console.log(inst_10592);var state_10608__$1 = state_10608;var statearr_10624_10651 = state_10608__$1;(statearr_10624_10651[2] = inst_10593);
(statearr_10624_10651[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10609 === 13))
{var state_10608__$1 = state_10608;var statearr_10625_10652 = state_10608__$1;(statearr_10625_10652[2] = null);
(statearr_10625_10652[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10609 === 14))
{var inst_10582 = (state_10608[7]);var inst_10596 = (state_10608[2]);var state_10608__$1 = (function (){var statearr_10626 = state_10608;(statearr_10626[9] = inst_10596);
return statearr_10626;
})();var statearr_10627_10653 = state_10608__$1;(statearr_10627_10653[2] = inst_10582);
(statearr_10627_10653[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10609 === 15))
{var state_10608__$1 = state_10608;var statearr_10628_10654 = state_10608__$1;(statearr_10628_10654[2] = null);
(statearr_10628_10654[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10609 === 16))
{var state_10608__$1 = state_10608;var statearr_10629_10655 = state_10608__$1;(statearr_10629_10655[2] = null);
(statearr_10629_10655[1] = 17);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10609 === 17))
{var inst_10604 = (state_10608[2]);var state_10608__$1 = state_10608;var statearr_10630_10656 = state_10608__$1;(statearr_10630_10656[2] = inst_10604);
(statearr_10630_10656[1] = 3);
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
var state_machine__5507__auto____0 = (function (){var statearr_10634 = [null,null,null,null,null,null,null,null,null,null];(statearr_10634[0] = state_machine__5507__auto__);
(statearr_10634[1] = 1);
return statearr_10634;
});
var state_machine__5507__auto____1 = (function (state_10608){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_10608);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e10635){if((e10635 instanceof Object))
{var ex__5510__auto__ = e10635;var statearr_10636_10657 = state_10608;(statearr_10636_10657[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10608);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10635;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__10658 = state_10608;
state_10608 = G__10658;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_10608){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_10608);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_10637 = f__5522__auto__.call(null);(statearr_10637[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___10638);
return statearr_10637;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5523__auto__);
}));
return null;
};
var dorun_async = function (ch,var_args){
var p__10519 = null;if (arguments.length > 1) {
  p__10519 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return dorun_async__delegate.call(this,ch,p__10519);};
dorun_async.cljs$lang$maxFixedArity = 1;
dorun_async.cljs$lang$applyTo = (function (arglist__10659){
var ch = cljs.core.first(arglist__10659);
var p__10519 = cljs.core.rest(arglist__10659);
return dorun_async__delegate(ch,p__10519);
});
dorun_async.cljs$core$IFn$_invoke$arity$variadic = dorun_async__delegate;
return dorun_async;
})()
;

//# sourceMappingURL=async.js.map