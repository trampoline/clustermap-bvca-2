// Compiled by ClojureScript 0.0-2173
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
map_async.cljs$lang$applyTo = (function (arglist__44489){
var f = cljs.core.first(arglist__44489);
var colls = cljs.core.rest(arglist__44489);
return map_async__delegate(f,colls);
});
map_async.cljs$core$IFn$_invoke$arity$variadic = map_async__delegate;
return map_async;
})()
;
/**
* async consume all values from a channel
* @param {...*} var_args
*/
clustermap.async.dorun_async = (function() { 
var dorun_async__delegate = function (ch,p__44490){var map__44550 = p__44490;var map__44550__$1 = ((cljs.core.seq_QMARK_.call(null,map__44550))?cljs.core.apply.call(null,cljs.core.hash_map,map__44550):map__44550);var delay = cljs.core.get.call(null,map__44550__$1,new cljs.core.Keyword(null,"delay","delay",1109372149));var log = cljs.core.get.call(null,map__44550__$1,new cljs.core.Keyword(null,"log","log",1014011574));var c__5562__auto___44609 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_44579){var state_val_44580 = (state_44579[1]);if((state_val_44580 === 1))
{var state_44579__$1 = state_44579;var statearr_44581_44610 = state_44579__$1;(statearr_44581_44610[2] = null);
(statearr_44581_44610[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44580 === 2))
{var state_44579__$1 = state_44579;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44579__$1,4,ch);
} else
{if((state_val_44580 === 3))
{var inst_44577 = (state_44579[2]);var state_44579__$1 = state_44579;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44579__$1,inst_44577);
} else
{if((state_val_44580 === 4))
{var inst_44553 = (state_44579[7]);var inst_44553__$1 = (state_44579[2]);var state_44579__$1 = (function (){var statearr_44582 = state_44579;(statearr_44582[7] = inst_44553__$1);
return statearr_44582;
})();if(cljs.core.truth_(inst_44553__$1))
{var statearr_44583_44611 = state_44579__$1;(statearr_44583_44611[1] = 5);
} else
{var statearr_44584_44612 = state_44579__$1;(statearr_44584_44612[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44580 === 5))
{var state_44579__$1 = state_44579;if(cljs.core.truth_(delay))
{var statearr_44585_44613 = state_44579__$1;(statearr_44585_44613[1] = 8);
} else
{var statearr_44586_44614 = state_44579__$1;(statearr_44586_44614[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44580 === 6))
{var state_44579__$1 = state_44579;var statearr_44587_44615 = state_44579__$1;(statearr_44587_44615[2] = null);
(statearr_44587_44615[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44580 === 7))
{var inst_44570 = (state_44579[2]);var state_44579__$1 = state_44579;if(cljs.core.truth_(inst_44570))
{var statearr_44588_44616 = state_44579__$1;(statearr_44588_44616[1] = 15);
} else
{var statearr_44589_44617 = state_44579__$1;(statearr_44589_44617[1] = 16);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44580 === 8))
{var inst_44556 = cljs.core.async.timeout.call(null,delay);var state_44579__$1 = state_44579;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44579__$1,11,inst_44556);
} else
{if((state_val_44580 === 9))
{var state_44579__$1 = state_44579;var statearr_44590_44618 = state_44579__$1;(statearr_44590_44618[2] = null);
(statearr_44590_44618[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44580 === 10))
{var inst_44561 = (state_44579[2]);var state_44579__$1 = (function (){var statearr_44591 = state_44579;(statearr_44591[8] = inst_44561);
return statearr_44591;
})();if(cljs.core.truth_(log))
{var statearr_44592_44619 = state_44579__$1;(statearr_44592_44619[1] = 12);
} else
{var statearr_44593_44620 = state_44579__$1;(statearr_44593_44620[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44580 === 11))
{var inst_44558 = (state_44579[2]);var state_44579__$1 = state_44579;var statearr_44594_44621 = state_44579__$1;(statearr_44594_44621[2] = inst_44558);
(statearr_44594_44621[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44580 === 12))
{var inst_44553 = (state_44579[7]);var inst_44563 = cljs.core.clj__GT_js.call(null,inst_44553);var inst_44564 = console.log(inst_44563);var state_44579__$1 = state_44579;var statearr_44595_44622 = state_44579__$1;(statearr_44595_44622[2] = inst_44564);
(statearr_44595_44622[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44580 === 13))
{var state_44579__$1 = state_44579;var statearr_44596_44623 = state_44579__$1;(statearr_44596_44623[2] = null);
(statearr_44596_44623[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44580 === 14))
{var inst_44553 = (state_44579[7]);var inst_44567 = (state_44579[2]);var state_44579__$1 = (function (){var statearr_44597 = state_44579;(statearr_44597[9] = inst_44567);
return statearr_44597;
})();var statearr_44598_44624 = state_44579__$1;(statearr_44598_44624[2] = inst_44553);
(statearr_44598_44624[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44580 === 15))
{var state_44579__$1 = state_44579;var statearr_44599_44625 = state_44579__$1;(statearr_44599_44625[2] = null);
(statearr_44599_44625[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44580 === 16))
{var state_44579__$1 = state_44579;var statearr_44600_44626 = state_44579__$1;(statearr_44600_44626[2] = null);
(statearr_44600_44626[1] = 17);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44580 === 17))
{var inst_44575 = (state_44579[2]);var state_44579__$1 = state_44579;var statearr_44601_44627 = state_44579__$1;(statearr_44601_44627[2] = inst_44575);
(statearr_44601_44627[1] = 3);
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
});return ((function (switch__5547__auto__){
return (function() {
var state_machine__5548__auto__ = null;
var state_machine__5548__auto____0 = (function (){var statearr_44605 = [null,null,null,null,null,null,null,null,null,null];(statearr_44605[0] = state_machine__5548__auto__);
(statearr_44605[1] = 1);
return statearr_44605;
});
var state_machine__5548__auto____1 = (function (state_44579){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__.call(null,state_44579);if(cljs.core.keyword_identical_QMARK_.call(null,result__5550__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e44606){if((e44606 instanceof Object))
{var ex__5551__auto__ = e44606;var statearr_44607_44628 = state_44579;(statearr_44607_44628[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44579);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e44606;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5549__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__44629 = state_44579;
state_44579 = G__44629;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_44579){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_44579);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_44608 = f__5563__auto__.call(null);(statearr_44608[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto___44609);
return statearr_44608;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5564__auto__);
}));
return null;
};
var dorun_async = function (ch,var_args){
var p__44490 = null;if (arguments.length > 1) {
  p__44490 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return dorun_async__delegate.call(this,ch,p__44490);};
dorun_async.cljs$lang$maxFixedArity = 1;
dorun_async.cljs$lang$applyTo = (function (arglist__44630){
var ch = cljs.core.first(arglist__44630);
var p__44490 = cljs.core.rest(arglist__44630);
return dorun_async__delegate(ch,p__44490);
});
dorun_async.cljs$core$IFn$_invoke$arity$variadic = dorun_async__delegate;
return dorun_async;
})()
;
