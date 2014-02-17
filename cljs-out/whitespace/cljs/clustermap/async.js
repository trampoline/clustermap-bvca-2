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
map_async.cljs$lang$applyTo = (function (arglist__32473){
var f = cljs.core.first(arglist__32473);
var colls = cljs.core.rest(arglist__32473);
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
var dorun_async__delegate = function (ch,p__32474){var map__32534 = p__32474;var map__32534__$1 = ((cljs.core.seq_QMARK_.call(null,map__32534))?cljs.core.apply.call(null,cljs.core.hash_map,map__32534):map__32534);var delay = cljs.core.get.call(null,map__32534__$1,new cljs.core.Keyword(null,"delay","delay",1109372149));var log = cljs.core.get.call(null,map__32534__$1,new cljs.core.Keyword(null,"log","log",1014011574));var c__5521__auto___32593 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_32563){var state_val_32564 = (state_32563[1]);if((state_val_32564 === 1))
{var state_32563__$1 = state_32563;var statearr_32565_32594 = state_32563__$1;(statearr_32565_32594[2] = null);
(statearr_32565_32594[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32564 === 2))
{var state_32563__$1 = state_32563;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32563__$1,4,ch);
} else
{if((state_val_32564 === 3))
{var inst_32561 = (state_32563[2]);var state_32563__$1 = state_32563;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32563__$1,inst_32561);
} else
{if((state_val_32564 === 4))
{var inst_32537 = (state_32563[7]);var inst_32537__$1 = (state_32563[2]);var state_32563__$1 = (function (){var statearr_32566 = state_32563;(statearr_32566[7] = inst_32537__$1);
return statearr_32566;
})();if(cljs.core.truth_(inst_32537__$1))
{var statearr_32567_32595 = state_32563__$1;(statearr_32567_32595[1] = 5);
} else
{var statearr_32568_32596 = state_32563__$1;(statearr_32568_32596[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32564 === 5))
{var state_32563__$1 = state_32563;if(cljs.core.truth_(delay))
{var statearr_32569_32597 = state_32563__$1;(statearr_32569_32597[1] = 8);
} else
{var statearr_32570_32598 = state_32563__$1;(statearr_32570_32598[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32564 === 6))
{var state_32563__$1 = state_32563;var statearr_32571_32599 = state_32563__$1;(statearr_32571_32599[2] = null);
(statearr_32571_32599[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32564 === 7))
{var inst_32554 = (state_32563[2]);var state_32563__$1 = state_32563;if(cljs.core.truth_(inst_32554))
{var statearr_32572_32600 = state_32563__$1;(statearr_32572_32600[1] = 15);
} else
{var statearr_32573_32601 = state_32563__$1;(statearr_32573_32601[1] = 16);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32564 === 8))
{var inst_32540 = cljs.core.async.timeout.call(null,delay);var state_32563__$1 = state_32563;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32563__$1,11,inst_32540);
} else
{if((state_val_32564 === 9))
{var state_32563__$1 = state_32563;var statearr_32574_32602 = state_32563__$1;(statearr_32574_32602[2] = null);
(statearr_32574_32602[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32564 === 10))
{var inst_32545 = (state_32563[2]);var state_32563__$1 = (function (){var statearr_32575 = state_32563;(statearr_32575[8] = inst_32545);
return statearr_32575;
})();if(cljs.core.truth_(log))
{var statearr_32576_32603 = state_32563__$1;(statearr_32576_32603[1] = 12);
} else
{var statearr_32577_32604 = state_32563__$1;(statearr_32577_32604[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32564 === 11))
{var inst_32542 = (state_32563[2]);var state_32563__$1 = state_32563;var statearr_32578_32605 = state_32563__$1;(statearr_32578_32605[2] = inst_32542);
(statearr_32578_32605[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32564 === 12))
{var inst_32537 = (state_32563[7]);var inst_32547 = cljs.core.clj__GT_js.call(null,inst_32537);var inst_32548 = console.log(inst_32547);var state_32563__$1 = state_32563;var statearr_32579_32606 = state_32563__$1;(statearr_32579_32606[2] = inst_32548);
(statearr_32579_32606[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32564 === 13))
{var state_32563__$1 = state_32563;var statearr_32580_32607 = state_32563__$1;(statearr_32580_32607[2] = null);
(statearr_32580_32607[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32564 === 14))
{var inst_32537 = (state_32563[7]);var inst_32551 = (state_32563[2]);var state_32563__$1 = (function (){var statearr_32581 = state_32563;(statearr_32581[9] = inst_32551);
return statearr_32581;
})();var statearr_32582_32608 = state_32563__$1;(statearr_32582_32608[2] = inst_32537);
(statearr_32582_32608[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32564 === 15))
{var state_32563__$1 = state_32563;var statearr_32583_32609 = state_32563__$1;(statearr_32583_32609[2] = null);
(statearr_32583_32609[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32564 === 16))
{var state_32563__$1 = state_32563;var statearr_32584_32610 = state_32563__$1;(statearr_32584_32610[2] = null);
(statearr_32584_32610[1] = 17);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32564 === 17))
{var inst_32559 = (state_32563[2]);var state_32563__$1 = state_32563;var statearr_32585_32611 = state_32563__$1;(statearr_32585_32611[2] = inst_32559);
(statearr_32585_32611[1] = 3);
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
var state_machine__5507__auto____0 = (function (){var statearr_32589 = [null,null,null,null,null,null,null,null,null,null];(statearr_32589[0] = state_machine__5507__auto__);
(statearr_32589[1] = 1);
return statearr_32589;
});
var state_machine__5507__auto____1 = (function (state_32563){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_32563);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e32590){if((e32590 instanceof Object))
{var ex__5510__auto__ = e32590;var statearr_32591_32612 = state_32563;(statearr_32591_32612[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32563);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e32590;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__32613 = state_32563;
state_32563 = G__32613;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_32563){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_32563);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_32592 = f__5522__auto__.call(null);(statearr_32592[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___32593);
return statearr_32592;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5523__auto__);
}));
return null;
};
var dorun_async = function (ch,var_args){
var p__32474 = null;if (arguments.length > 1) {
  p__32474 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return dorun_async__delegate.call(this,ch,p__32474);};
dorun_async.cljs$lang$maxFixedArity = 1;
dorun_async.cljs$lang$applyTo = (function (arglist__32614){
var ch = cljs.core.first(arglist__32614);
var p__32474 = cljs.core.rest(arglist__32614);
return dorun_async__delegate(ch,p__32474);
});
dorun_async.cljs$core$IFn$_invoke$arity$variadic = dorun_async__delegate;
return dorun_async;
})()
;
