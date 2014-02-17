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
map_async.cljs$lang$applyTo = (function (arglist__32478){
var f = cljs.core.first(arglist__32478);
var colls = cljs.core.rest(arglist__32478);
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
var dorun_async__delegate = function (ch,p__32479){var map__32539 = p__32479;var map__32539__$1 = ((cljs.core.seq_QMARK_.call(null,map__32539))?cljs.core.apply.call(null,cljs.core.hash_map,map__32539):map__32539);var delay = cljs.core.get.call(null,map__32539__$1,new cljs.core.Keyword(null,"delay","delay",1109372149));var log = cljs.core.get.call(null,map__32539__$1,new cljs.core.Keyword(null,"log","log",1014011574));var c__5521__auto___32598 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_32568){var state_val_32569 = (state_32568[1]);if((state_val_32569 === 1))
{var state_32568__$1 = state_32568;var statearr_32570_32599 = state_32568__$1;(statearr_32570_32599[2] = null);
(statearr_32570_32599[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32569 === 2))
{var state_32568__$1 = state_32568;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32568__$1,4,ch);
} else
{if((state_val_32569 === 3))
{var inst_32566 = (state_32568[2]);var state_32568__$1 = state_32568;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32568__$1,inst_32566);
} else
{if((state_val_32569 === 4))
{var inst_32542 = (state_32568[7]);var inst_32542__$1 = (state_32568[2]);var state_32568__$1 = (function (){var statearr_32571 = state_32568;(statearr_32571[7] = inst_32542__$1);
return statearr_32571;
})();if(cljs.core.truth_(inst_32542__$1))
{var statearr_32572_32600 = state_32568__$1;(statearr_32572_32600[1] = 5);
} else
{var statearr_32573_32601 = state_32568__$1;(statearr_32573_32601[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32569 === 5))
{var state_32568__$1 = state_32568;if(cljs.core.truth_(delay))
{var statearr_32574_32602 = state_32568__$1;(statearr_32574_32602[1] = 8);
} else
{var statearr_32575_32603 = state_32568__$1;(statearr_32575_32603[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32569 === 6))
{var state_32568__$1 = state_32568;var statearr_32576_32604 = state_32568__$1;(statearr_32576_32604[2] = null);
(statearr_32576_32604[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32569 === 7))
{var inst_32559 = (state_32568[2]);var state_32568__$1 = state_32568;if(cljs.core.truth_(inst_32559))
{var statearr_32577_32605 = state_32568__$1;(statearr_32577_32605[1] = 15);
} else
{var statearr_32578_32606 = state_32568__$1;(statearr_32578_32606[1] = 16);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32569 === 8))
{var inst_32545 = cljs.core.async.timeout.call(null,delay);var state_32568__$1 = state_32568;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32568__$1,11,inst_32545);
} else
{if((state_val_32569 === 9))
{var state_32568__$1 = state_32568;var statearr_32579_32607 = state_32568__$1;(statearr_32579_32607[2] = null);
(statearr_32579_32607[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32569 === 10))
{var inst_32550 = (state_32568[2]);var state_32568__$1 = (function (){var statearr_32580 = state_32568;(statearr_32580[8] = inst_32550);
return statearr_32580;
})();if(cljs.core.truth_(log))
{var statearr_32581_32608 = state_32568__$1;(statearr_32581_32608[1] = 12);
} else
{var statearr_32582_32609 = state_32568__$1;(statearr_32582_32609[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32569 === 11))
{var inst_32547 = (state_32568[2]);var state_32568__$1 = state_32568;var statearr_32583_32610 = state_32568__$1;(statearr_32583_32610[2] = inst_32547);
(statearr_32583_32610[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32569 === 12))
{var inst_32542 = (state_32568[7]);var inst_32552 = cljs.core.clj__GT_js.call(null,inst_32542);var inst_32553 = console.log(inst_32552);var state_32568__$1 = state_32568;var statearr_32584_32611 = state_32568__$1;(statearr_32584_32611[2] = inst_32553);
(statearr_32584_32611[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32569 === 13))
{var state_32568__$1 = state_32568;var statearr_32585_32612 = state_32568__$1;(statearr_32585_32612[2] = null);
(statearr_32585_32612[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32569 === 14))
{var inst_32542 = (state_32568[7]);var inst_32556 = (state_32568[2]);var state_32568__$1 = (function (){var statearr_32586 = state_32568;(statearr_32586[9] = inst_32556);
return statearr_32586;
})();var statearr_32587_32613 = state_32568__$1;(statearr_32587_32613[2] = inst_32542);
(statearr_32587_32613[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32569 === 15))
{var state_32568__$1 = state_32568;var statearr_32588_32614 = state_32568__$1;(statearr_32588_32614[2] = null);
(statearr_32588_32614[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32569 === 16))
{var state_32568__$1 = state_32568;var statearr_32589_32615 = state_32568__$1;(statearr_32589_32615[2] = null);
(statearr_32589_32615[1] = 17);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32569 === 17))
{var inst_32564 = (state_32568[2]);var state_32568__$1 = state_32568;var statearr_32590_32616 = state_32568__$1;(statearr_32590_32616[2] = inst_32564);
(statearr_32590_32616[1] = 3);
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
var state_machine__5507__auto____0 = (function (){var statearr_32594 = [null,null,null,null,null,null,null,null,null,null];(statearr_32594[0] = state_machine__5507__auto__);
(statearr_32594[1] = 1);
return statearr_32594;
});
var state_machine__5507__auto____1 = (function (state_32568){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_32568);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e32595){if((e32595 instanceof Object))
{var ex__5510__auto__ = e32595;var statearr_32596_32617 = state_32568;(statearr_32596_32617[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32568);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e32595;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__32618 = state_32568;
state_32568 = G__32618;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_32568){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_32568);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_32597 = f__5522__auto__.call(null);(statearr_32597[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___32598);
return statearr_32597;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5523__auto__);
}));
return null;
};
var dorun_async = function (ch,var_args){
var p__32479 = null;if (arguments.length > 1) {
  p__32479 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return dorun_async__delegate.call(this,ch,p__32479);};
dorun_async.cljs$lang$maxFixedArity = 1;
dorun_async.cljs$lang$applyTo = (function (arglist__32619){
var ch = cljs.core.first(arglist__32619);
var p__32479 = cljs.core.rest(arglist__32619);
return dorun_async__delegate(ch,p__32479);
});
dorun_async.cljs$core$IFn$_invoke$arity$variadic = dorun_async__delegate;
return dorun_async;
})()
;
