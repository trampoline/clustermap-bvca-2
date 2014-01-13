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
map_async.cljs$lang$applyTo = (function (arglist__10584){
var f = cljs.core.first(arglist__10584);
var colls = cljs.core.rest(arglist__10584);
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
var dorun_async__delegate = function (ch,p__10585){var map__10645 = p__10585;var map__10645__$1 = ((cljs.core.seq_QMARK_.call(null,map__10645))?cljs.core.apply.call(null,cljs.core.hash_map,map__10645):map__10645);var delay = cljs.core.get.call(null,map__10645__$1,new cljs.core.Keyword(null,"delay","delay",1109372149));var log = cljs.core.get.call(null,map__10645__$1,new cljs.core.Keyword(null,"log","log",1014011574));var c__5521__auto___10704 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_10674){var state_val_10675 = (state_10674[1]);if((state_val_10675 === 1))
{var state_10674__$1 = state_10674;var statearr_10676_10705 = state_10674__$1;(statearr_10676_10705[2] = null);
(statearr_10676_10705[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10675 === 2))
{var state_10674__$1 = state_10674;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10674__$1,4,ch);
} else
{if((state_val_10675 === 3))
{var inst_10672 = (state_10674[2]);var state_10674__$1 = state_10674;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10674__$1,inst_10672);
} else
{if((state_val_10675 === 4))
{var inst_10648 = (state_10674[7]);var inst_10648__$1 = (state_10674[2]);var state_10674__$1 = (function (){var statearr_10677 = state_10674;(statearr_10677[7] = inst_10648__$1);
return statearr_10677;
})();if(cljs.core.truth_(inst_10648__$1))
{var statearr_10678_10706 = state_10674__$1;(statearr_10678_10706[1] = 5);
} else
{var statearr_10679_10707 = state_10674__$1;(statearr_10679_10707[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10675 === 5))
{var state_10674__$1 = state_10674;if(cljs.core.truth_(delay))
{var statearr_10680_10708 = state_10674__$1;(statearr_10680_10708[1] = 8);
} else
{var statearr_10681_10709 = state_10674__$1;(statearr_10681_10709[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10675 === 6))
{var state_10674__$1 = state_10674;var statearr_10682_10710 = state_10674__$1;(statearr_10682_10710[2] = null);
(statearr_10682_10710[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10675 === 7))
{var inst_10665 = (state_10674[2]);var state_10674__$1 = state_10674;if(cljs.core.truth_(inst_10665))
{var statearr_10683_10711 = state_10674__$1;(statearr_10683_10711[1] = 15);
} else
{var statearr_10684_10712 = state_10674__$1;(statearr_10684_10712[1] = 16);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10675 === 8))
{var inst_10651 = cljs.core.async.timeout.call(null,delay);var state_10674__$1 = state_10674;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10674__$1,11,inst_10651);
} else
{if((state_val_10675 === 9))
{var state_10674__$1 = state_10674;var statearr_10685_10713 = state_10674__$1;(statearr_10685_10713[2] = null);
(statearr_10685_10713[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10675 === 10))
{var inst_10656 = (state_10674[2]);var state_10674__$1 = (function (){var statearr_10686 = state_10674;(statearr_10686[8] = inst_10656);
return statearr_10686;
})();if(cljs.core.truth_(log))
{var statearr_10687_10714 = state_10674__$1;(statearr_10687_10714[1] = 12);
} else
{var statearr_10688_10715 = state_10674__$1;(statearr_10688_10715[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10675 === 11))
{var inst_10653 = (state_10674[2]);var state_10674__$1 = state_10674;var statearr_10689_10716 = state_10674__$1;(statearr_10689_10716[2] = inst_10653);
(statearr_10689_10716[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10675 === 12))
{var inst_10648 = (state_10674[7]);var inst_10658 = cljs.core.clj__GT_js.call(null,inst_10648);var inst_10659 = console.log(inst_10658);var state_10674__$1 = state_10674;var statearr_10690_10717 = state_10674__$1;(statearr_10690_10717[2] = inst_10659);
(statearr_10690_10717[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10675 === 13))
{var state_10674__$1 = state_10674;var statearr_10691_10718 = state_10674__$1;(statearr_10691_10718[2] = null);
(statearr_10691_10718[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10675 === 14))
{var inst_10648 = (state_10674[7]);var inst_10662 = (state_10674[2]);var state_10674__$1 = (function (){var statearr_10692 = state_10674;(statearr_10692[9] = inst_10662);
return statearr_10692;
})();var statearr_10693_10719 = state_10674__$1;(statearr_10693_10719[2] = inst_10648);
(statearr_10693_10719[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10675 === 15))
{var state_10674__$1 = state_10674;var statearr_10694_10720 = state_10674__$1;(statearr_10694_10720[2] = null);
(statearr_10694_10720[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10675 === 16))
{var state_10674__$1 = state_10674;var statearr_10695_10721 = state_10674__$1;(statearr_10695_10721[2] = null);
(statearr_10695_10721[1] = 17);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10675 === 17))
{var inst_10670 = (state_10674[2]);var state_10674__$1 = state_10674;var statearr_10696_10722 = state_10674__$1;(statearr_10696_10722[2] = inst_10670);
(statearr_10696_10722[1] = 3);
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
var state_machine__5507__auto____0 = (function (){var statearr_10700 = [null,null,null,null,null,null,null,null,null,null];(statearr_10700[0] = state_machine__5507__auto__);
(statearr_10700[1] = 1);
return statearr_10700;
});
var state_machine__5507__auto____1 = (function (state_10674){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_10674);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e10701){if((e10701 instanceof Object))
{var ex__5510__auto__ = e10701;var statearr_10702_10723 = state_10674;(statearr_10702_10723[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10674);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10701;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__10724 = state_10674;
state_10674 = G__10724;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_10674){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_10674);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_10703 = f__5522__auto__.call(null);(statearr_10703[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___10704);
return statearr_10703;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5523__auto__);
}));
return null;
};
var dorun_async = function (ch,var_args){
var p__10585 = null;if (arguments.length > 1) {
  p__10585 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return dorun_async__delegate.call(this,ch,p__10585);};
dorun_async.cljs$lang$maxFixedArity = 1;
dorun_async.cljs$lang$applyTo = (function (arglist__10725){
var ch = cljs.core.first(arglist__10725);
var p__10585 = cljs.core.rest(arglist__10725);
return dorun_async__delegate(ch,p__10585);
});
dorun_async.cljs$core$IFn$_invoke$arity$variadic = dorun_async__delegate;
return dorun_async;
})()
;

//# sourceMappingURL=async.js.map