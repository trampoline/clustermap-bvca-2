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
map_async.cljs$lang$applyTo = (function (arglist__10589){
var f = cljs.core.first(arglist__10589);
var colls = cljs.core.rest(arglist__10589);
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
var dorun_async__delegate = function (ch,p__10590){var map__10650 = p__10590;var map__10650__$1 = ((cljs.core.seq_QMARK_.call(null,map__10650))?cljs.core.apply.call(null,cljs.core.hash_map,map__10650):map__10650);var delay = cljs.core.get.call(null,map__10650__$1,new cljs.core.Keyword(null,"delay","delay",1109372149));var log = cljs.core.get.call(null,map__10650__$1,new cljs.core.Keyword(null,"log","log",1014011574));var c__5521__auto___10709 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_10679){var state_val_10680 = (state_10679[1]);if((state_val_10680 === 1))
{var state_10679__$1 = state_10679;var statearr_10681_10710 = state_10679__$1;(statearr_10681_10710[2] = null);
(statearr_10681_10710[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10680 === 2))
{var state_10679__$1 = state_10679;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10679__$1,4,ch);
} else
{if((state_val_10680 === 3))
{var inst_10677 = (state_10679[2]);var state_10679__$1 = state_10679;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10679__$1,inst_10677);
} else
{if((state_val_10680 === 4))
{var inst_10653 = (state_10679[7]);var inst_10653__$1 = (state_10679[2]);var state_10679__$1 = (function (){var statearr_10682 = state_10679;(statearr_10682[7] = inst_10653__$1);
return statearr_10682;
})();if(cljs.core.truth_(inst_10653__$1))
{var statearr_10683_10711 = state_10679__$1;(statearr_10683_10711[1] = 5);
} else
{var statearr_10684_10712 = state_10679__$1;(statearr_10684_10712[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10680 === 5))
{var state_10679__$1 = state_10679;if(cljs.core.truth_(delay))
{var statearr_10685_10713 = state_10679__$1;(statearr_10685_10713[1] = 8);
} else
{var statearr_10686_10714 = state_10679__$1;(statearr_10686_10714[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10680 === 6))
{var state_10679__$1 = state_10679;var statearr_10687_10715 = state_10679__$1;(statearr_10687_10715[2] = null);
(statearr_10687_10715[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10680 === 7))
{var inst_10670 = (state_10679[2]);var state_10679__$1 = state_10679;if(cljs.core.truth_(inst_10670))
{var statearr_10688_10716 = state_10679__$1;(statearr_10688_10716[1] = 15);
} else
{var statearr_10689_10717 = state_10679__$1;(statearr_10689_10717[1] = 16);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10680 === 8))
{var inst_10656 = cljs.core.async.timeout.call(null,delay);var state_10679__$1 = state_10679;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10679__$1,11,inst_10656);
} else
{if((state_val_10680 === 9))
{var state_10679__$1 = state_10679;var statearr_10690_10718 = state_10679__$1;(statearr_10690_10718[2] = null);
(statearr_10690_10718[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10680 === 10))
{var inst_10661 = (state_10679[2]);var state_10679__$1 = (function (){var statearr_10691 = state_10679;(statearr_10691[8] = inst_10661);
return statearr_10691;
})();if(cljs.core.truth_(log))
{var statearr_10692_10719 = state_10679__$1;(statearr_10692_10719[1] = 12);
} else
{var statearr_10693_10720 = state_10679__$1;(statearr_10693_10720[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10680 === 11))
{var inst_10658 = (state_10679[2]);var state_10679__$1 = state_10679;var statearr_10694_10721 = state_10679__$1;(statearr_10694_10721[2] = inst_10658);
(statearr_10694_10721[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10680 === 12))
{var inst_10653 = (state_10679[7]);var inst_10663 = cljs.core.clj__GT_js.call(null,inst_10653);var inst_10664 = console.log(inst_10663);var state_10679__$1 = state_10679;var statearr_10695_10722 = state_10679__$1;(statearr_10695_10722[2] = inst_10664);
(statearr_10695_10722[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10680 === 13))
{var state_10679__$1 = state_10679;var statearr_10696_10723 = state_10679__$1;(statearr_10696_10723[2] = null);
(statearr_10696_10723[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10680 === 14))
{var inst_10653 = (state_10679[7]);var inst_10667 = (state_10679[2]);var state_10679__$1 = (function (){var statearr_10697 = state_10679;(statearr_10697[9] = inst_10667);
return statearr_10697;
})();var statearr_10698_10724 = state_10679__$1;(statearr_10698_10724[2] = inst_10653);
(statearr_10698_10724[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10680 === 15))
{var state_10679__$1 = state_10679;var statearr_10699_10725 = state_10679__$1;(statearr_10699_10725[2] = null);
(statearr_10699_10725[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10680 === 16))
{var state_10679__$1 = state_10679;var statearr_10700_10726 = state_10679__$1;(statearr_10700_10726[2] = null);
(statearr_10700_10726[1] = 17);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10680 === 17))
{var inst_10675 = (state_10679[2]);var state_10679__$1 = state_10679;var statearr_10701_10727 = state_10679__$1;(statearr_10701_10727[2] = inst_10675);
(statearr_10701_10727[1] = 3);
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
var state_machine__5507__auto____0 = (function (){var statearr_10705 = [null,null,null,null,null,null,null,null,null,null];(statearr_10705[0] = state_machine__5507__auto__);
(statearr_10705[1] = 1);
return statearr_10705;
});
var state_machine__5507__auto____1 = (function (state_10679){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_10679);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e10706){if((e10706 instanceof Object))
{var ex__5510__auto__ = e10706;var statearr_10707_10728 = state_10679;(statearr_10707_10728[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10679);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10706;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__10729 = state_10679;
state_10679 = G__10729;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_10679){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_10679);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_10708 = f__5522__auto__.call(null);(statearr_10708[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___10709);
return statearr_10708;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5523__auto__);
}));
return null;
};
var dorun_async = function (ch,var_args){
var p__10590 = null;if (arguments.length > 1) {
  p__10590 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return dorun_async__delegate.call(this,ch,p__10590);};
dorun_async.cljs$lang$maxFixedArity = 1;
dorun_async.cljs$lang$applyTo = (function (arglist__10730){
var ch = cljs.core.first(arglist__10730);
var p__10590 = cljs.core.rest(arglist__10730);
return dorun_async__delegate(ch,p__10590);
});
dorun_async.cljs$core$IFn$_invoke$arity$variadic = dorun_async__delegate;
return dorun_async;
})()
;

//# sourceMappingURL=async.js.map