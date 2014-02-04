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
map_async.cljs$lang$applyTo = (function (arglist__31490){
var f = cljs.core.first(arglist__31490);
var colls = cljs.core.rest(arglist__31490);
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
var dorun_async__delegate = function (ch,p__31491){var map__31551 = p__31491;var map__31551__$1 = ((cljs.core.seq_QMARK_.call(null,map__31551))?cljs.core.apply.call(null,cljs.core.hash_map,map__31551):map__31551);var delay = cljs.core.get.call(null,map__31551__$1,new cljs.core.Keyword(null,"delay","delay",1109372149));var log = cljs.core.get.call(null,map__31551__$1,new cljs.core.Keyword(null,"log","log",1014011574));var c__5521__auto___31610 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_31580){var state_val_31581 = (state_31580[1]);if((state_val_31581 === 1))
{var state_31580__$1 = state_31580;var statearr_31582_31611 = state_31580__$1;(statearr_31582_31611[2] = null);
(statearr_31582_31611[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31581 === 2))
{var state_31580__$1 = state_31580;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31580__$1,4,ch);
} else
{if((state_val_31581 === 3))
{var inst_31578 = (state_31580[2]);var state_31580__$1 = state_31580;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31580__$1,inst_31578);
} else
{if((state_val_31581 === 4))
{var inst_31554 = (state_31580[7]);var inst_31554__$1 = (state_31580[2]);var state_31580__$1 = (function (){var statearr_31583 = state_31580;(statearr_31583[7] = inst_31554__$1);
return statearr_31583;
})();if(cljs.core.truth_(inst_31554__$1))
{var statearr_31584_31612 = state_31580__$1;(statearr_31584_31612[1] = 5);
} else
{var statearr_31585_31613 = state_31580__$1;(statearr_31585_31613[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31581 === 5))
{var state_31580__$1 = state_31580;if(cljs.core.truth_(delay))
{var statearr_31586_31614 = state_31580__$1;(statearr_31586_31614[1] = 8);
} else
{var statearr_31587_31615 = state_31580__$1;(statearr_31587_31615[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31581 === 6))
{var state_31580__$1 = state_31580;var statearr_31588_31616 = state_31580__$1;(statearr_31588_31616[2] = null);
(statearr_31588_31616[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31581 === 7))
{var inst_31571 = (state_31580[2]);var state_31580__$1 = state_31580;if(cljs.core.truth_(inst_31571))
{var statearr_31589_31617 = state_31580__$1;(statearr_31589_31617[1] = 15);
} else
{var statearr_31590_31618 = state_31580__$1;(statearr_31590_31618[1] = 16);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31581 === 8))
{var inst_31557 = cljs.core.async.timeout.call(null,delay);var state_31580__$1 = state_31580;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31580__$1,11,inst_31557);
} else
{if((state_val_31581 === 9))
{var state_31580__$1 = state_31580;var statearr_31591_31619 = state_31580__$1;(statearr_31591_31619[2] = null);
(statearr_31591_31619[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31581 === 10))
{var inst_31562 = (state_31580[2]);var state_31580__$1 = (function (){var statearr_31592 = state_31580;(statearr_31592[8] = inst_31562);
return statearr_31592;
})();if(cljs.core.truth_(log))
{var statearr_31593_31620 = state_31580__$1;(statearr_31593_31620[1] = 12);
} else
{var statearr_31594_31621 = state_31580__$1;(statearr_31594_31621[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31581 === 11))
{var inst_31559 = (state_31580[2]);var state_31580__$1 = state_31580;var statearr_31595_31622 = state_31580__$1;(statearr_31595_31622[2] = inst_31559);
(statearr_31595_31622[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31581 === 12))
{var inst_31554 = (state_31580[7]);var inst_31564 = cljs.core.clj__GT_js.call(null,inst_31554);var inst_31565 = console.log(inst_31564);var state_31580__$1 = state_31580;var statearr_31596_31623 = state_31580__$1;(statearr_31596_31623[2] = inst_31565);
(statearr_31596_31623[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31581 === 13))
{var state_31580__$1 = state_31580;var statearr_31597_31624 = state_31580__$1;(statearr_31597_31624[2] = null);
(statearr_31597_31624[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31581 === 14))
{var inst_31554 = (state_31580[7]);var inst_31568 = (state_31580[2]);var state_31580__$1 = (function (){var statearr_31598 = state_31580;(statearr_31598[9] = inst_31568);
return statearr_31598;
})();var statearr_31599_31625 = state_31580__$1;(statearr_31599_31625[2] = inst_31554);
(statearr_31599_31625[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31581 === 15))
{var state_31580__$1 = state_31580;var statearr_31600_31626 = state_31580__$1;(statearr_31600_31626[2] = null);
(statearr_31600_31626[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31581 === 16))
{var state_31580__$1 = state_31580;var statearr_31601_31627 = state_31580__$1;(statearr_31601_31627[2] = null);
(statearr_31601_31627[1] = 17);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31581 === 17))
{var inst_31576 = (state_31580[2]);var state_31580__$1 = state_31580;var statearr_31602_31628 = state_31580__$1;(statearr_31602_31628[2] = inst_31576);
(statearr_31602_31628[1] = 3);
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
var state_machine__5507__auto____0 = (function (){var statearr_31606 = [null,null,null,null,null,null,null,null,null,null];(statearr_31606[0] = state_machine__5507__auto__);
(statearr_31606[1] = 1);
return statearr_31606;
});
var state_machine__5507__auto____1 = (function (state_31580){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_31580);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e31607){if((e31607 instanceof Object))
{var ex__5510__auto__ = e31607;var statearr_31608_31629 = state_31580;(statearr_31608_31629[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31580);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e31607;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__31630 = state_31580;
state_31580 = G__31630;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_31580){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_31580);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_31609 = f__5522__auto__.call(null);(statearr_31609[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___31610);
return statearr_31609;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5523__auto__);
}));
return null;
};
var dorun_async = function (ch,var_args){
var p__31491 = null;if (arguments.length > 1) {
  p__31491 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return dorun_async__delegate.call(this,ch,p__31491);};
dorun_async.cljs$lang$maxFixedArity = 1;
dorun_async.cljs$lang$applyTo = (function (arglist__31631){
var ch = cljs.core.first(arglist__31631);
var p__31491 = cljs.core.rest(arglist__31631);
return dorun_async__delegate(ch,p__31491);
});
dorun_async.cljs$core$IFn$_invoke$arity$variadic = dorun_async__delegate;
return dorun_async;
})()
;
