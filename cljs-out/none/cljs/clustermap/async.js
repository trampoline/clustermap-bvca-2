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
map_async.cljs$lang$applyTo = (function (arglist__10579){
var f = cljs.core.first(arglist__10579);
var colls = cljs.core.rest(arglist__10579);
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
var dorun_async__delegate = function (ch,p__10580){var map__10640 = p__10580;var map__10640__$1 = ((cljs.core.seq_QMARK_.call(null,map__10640))?cljs.core.apply.call(null,cljs.core.hash_map,map__10640):map__10640);var delay = cljs.core.get.call(null,map__10640__$1,new cljs.core.Keyword(null,"delay","delay",1109372149));var log = cljs.core.get.call(null,map__10640__$1,new cljs.core.Keyword(null,"log","log",1014011574));var c__5521__auto___10699 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_10669){var state_val_10670 = (state_10669[1]);if((state_val_10670 === 1))
{var state_10669__$1 = state_10669;var statearr_10671_10700 = state_10669__$1;(statearr_10671_10700[2] = null);
(statearr_10671_10700[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10670 === 2))
{var state_10669__$1 = state_10669;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10669__$1,4,ch);
} else
{if((state_val_10670 === 3))
{var inst_10667 = (state_10669[2]);var state_10669__$1 = state_10669;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10669__$1,inst_10667);
} else
{if((state_val_10670 === 4))
{var inst_10643 = (state_10669[7]);var inst_10643__$1 = (state_10669[2]);var state_10669__$1 = (function (){var statearr_10672 = state_10669;(statearr_10672[7] = inst_10643__$1);
return statearr_10672;
})();if(cljs.core.truth_(inst_10643__$1))
{var statearr_10673_10701 = state_10669__$1;(statearr_10673_10701[1] = 5);
} else
{var statearr_10674_10702 = state_10669__$1;(statearr_10674_10702[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10670 === 5))
{var state_10669__$1 = state_10669;if(cljs.core.truth_(delay))
{var statearr_10675_10703 = state_10669__$1;(statearr_10675_10703[1] = 8);
} else
{var statearr_10676_10704 = state_10669__$1;(statearr_10676_10704[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10670 === 6))
{var state_10669__$1 = state_10669;var statearr_10677_10705 = state_10669__$1;(statearr_10677_10705[2] = null);
(statearr_10677_10705[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10670 === 7))
{var inst_10660 = (state_10669[2]);var state_10669__$1 = state_10669;if(cljs.core.truth_(inst_10660))
{var statearr_10678_10706 = state_10669__$1;(statearr_10678_10706[1] = 15);
} else
{var statearr_10679_10707 = state_10669__$1;(statearr_10679_10707[1] = 16);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10670 === 8))
{var inst_10646 = cljs.core.async.timeout.call(null,delay);var state_10669__$1 = state_10669;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10669__$1,11,inst_10646);
} else
{if((state_val_10670 === 9))
{var state_10669__$1 = state_10669;var statearr_10680_10708 = state_10669__$1;(statearr_10680_10708[2] = null);
(statearr_10680_10708[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10670 === 10))
{var inst_10651 = (state_10669[2]);var state_10669__$1 = (function (){var statearr_10681 = state_10669;(statearr_10681[8] = inst_10651);
return statearr_10681;
})();if(cljs.core.truth_(log))
{var statearr_10682_10709 = state_10669__$1;(statearr_10682_10709[1] = 12);
} else
{var statearr_10683_10710 = state_10669__$1;(statearr_10683_10710[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10670 === 11))
{var inst_10648 = (state_10669[2]);var state_10669__$1 = state_10669;var statearr_10684_10711 = state_10669__$1;(statearr_10684_10711[2] = inst_10648);
(statearr_10684_10711[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10670 === 12))
{var inst_10643 = (state_10669[7]);var inst_10653 = cljs.core.clj__GT_js.call(null,inst_10643);var inst_10654 = console.log(inst_10653);var state_10669__$1 = state_10669;var statearr_10685_10712 = state_10669__$1;(statearr_10685_10712[2] = inst_10654);
(statearr_10685_10712[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10670 === 13))
{var state_10669__$1 = state_10669;var statearr_10686_10713 = state_10669__$1;(statearr_10686_10713[2] = null);
(statearr_10686_10713[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10670 === 14))
{var inst_10643 = (state_10669[7]);var inst_10657 = (state_10669[2]);var state_10669__$1 = (function (){var statearr_10687 = state_10669;(statearr_10687[9] = inst_10657);
return statearr_10687;
})();var statearr_10688_10714 = state_10669__$1;(statearr_10688_10714[2] = inst_10643);
(statearr_10688_10714[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10670 === 15))
{var state_10669__$1 = state_10669;var statearr_10689_10715 = state_10669__$1;(statearr_10689_10715[2] = null);
(statearr_10689_10715[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10670 === 16))
{var state_10669__$1 = state_10669;var statearr_10690_10716 = state_10669__$1;(statearr_10690_10716[2] = null);
(statearr_10690_10716[1] = 17);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10670 === 17))
{var inst_10665 = (state_10669[2]);var state_10669__$1 = state_10669;var statearr_10691_10717 = state_10669__$1;(statearr_10691_10717[2] = inst_10665);
(statearr_10691_10717[1] = 3);
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
var state_machine__5507__auto____0 = (function (){var statearr_10695 = [null,null,null,null,null,null,null,null,null,null];(statearr_10695[0] = state_machine__5507__auto__);
(statearr_10695[1] = 1);
return statearr_10695;
});
var state_machine__5507__auto____1 = (function (state_10669){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_10669);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e10696){if((e10696 instanceof Object))
{var ex__5510__auto__ = e10696;var statearr_10697_10718 = state_10669;(statearr_10697_10718[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10669);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10696;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__10719 = state_10669;
state_10669 = G__10719;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_10669){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_10669);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_10698 = f__5522__auto__.call(null);(statearr_10698[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___10699);
return statearr_10698;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5523__auto__);
}));
return null;
};
var dorun_async = function (ch,var_args){
var p__10580 = null;if (arguments.length > 1) {
  p__10580 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return dorun_async__delegate.call(this,ch,p__10580);};
dorun_async.cljs$lang$maxFixedArity = 1;
dorun_async.cljs$lang$applyTo = (function (arglist__10720){
var ch = cljs.core.first(arglist__10720);
var p__10580 = cljs.core.rest(arglist__10720);
return dorun_async__delegate(ch,p__10580);
});
dorun_async.cljs$core$IFn$_invoke$arity$variadic = dorun_async__delegate;
return dorun_async;
})()
;

//# sourceMappingURL=async.js.map