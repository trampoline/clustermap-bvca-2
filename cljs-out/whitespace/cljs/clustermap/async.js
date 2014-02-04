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
map_async.cljs$lang$applyTo = (function (arglist__31494){
var f = cljs.core.first(arglist__31494);
var colls = cljs.core.rest(arglist__31494);
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
var dorun_async__delegate = function (ch,p__31495){var map__31555 = p__31495;var map__31555__$1 = ((cljs.core.seq_QMARK_.call(null,map__31555))?cljs.core.apply.call(null,cljs.core.hash_map,map__31555):map__31555);var delay = cljs.core.get.call(null,map__31555__$1,new cljs.core.Keyword(null,"delay","delay",1109372149));var log = cljs.core.get.call(null,map__31555__$1,new cljs.core.Keyword(null,"log","log",1014011574));var c__5521__auto___31614 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_31584){var state_val_31585 = (state_31584[1]);if((state_val_31585 === 1))
{var state_31584__$1 = state_31584;var statearr_31586_31615 = state_31584__$1;(statearr_31586_31615[2] = null);
(statearr_31586_31615[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31585 === 2))
{var state_31584__$1 = state_31584;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31584__$1,4,ch);
} else
{if((state_val_31585 === 3))
{var inst_31582 = (state_31584[2]);var state_31584__$1 = state_31584;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31584__$1,inst_31582);
} else
{if((state_val_31585 === 4))
{var inst_31558 = (state_31584[7]);var inst_31558__$1 = (state_31584[2]);var state_31584__$1 = (function (){var statearr_31587 = state_31584;(statearr_31587[7] = inst_31558__$1);
return statearr_31587;
})();if(cljs.core.truth_(inst_31558__$1))
{var statearr_31588_31616 = state_31584__$1;(statearr_31588_31616[1] = 5);
} else
{var statearr_31589_31617 = state_31584__$1;(statearr_31589_31617[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31585 === 5))
{var state_31584__$1 = state_31584;if(cljs.core.truth_(delay))
{var statearr_31590_31618 = state_31584__$1;(statearr_31590_31618[1] = 8);
} else
{var statearr_31591_31619 = state_31584__$1;(statearr_31591_31619[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31585 === 6))
{var state_31584__$1 = state_31584;var statearr_31592_31620 = state_31584__$1;(statearr_31592_31620[2] = null);
(statearr_31592_31620[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31585 === 7))
{var inst_31575 = (state_31584[2]);var state_31584__$1 = state_31584;if(cljs.core.truth_(inst_31575))
{var statearr_31593_31621 = state_31584__$1;(statearr_31593_31621[1] = 15);
} else
{var statearr_31594_31622 = state_31584__$1;(statearr_31594_31622[1] = 16);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31585 === 8))
{var inst_31561 = cljs.core.async.timeout.call(null,delay);var state_31584__$1 = state_31584;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31584__$1,11,inst_31561);
} else
{if((state_val_31585 === 9))
{var state_31584__$1 = state_31584;var statearr_31595_31623 = state_31584__$1;(statearr_31595_31623[2] = null);
(statearr_31595_31623[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31585 === 10))
{var inst_31566 = (state_31584[2]);var state_31584__$1 = (function (){var statearr_31596 = state_31584;(statearr_31596[8] = inst_31566);
return statearr_31596;
})();if(cljs.core.truth_(log))
{var statearr_31597_31624 = state_31584__$1;(statearr_31597_31624[1] = 12);
} else
{var statearr_31598_31625 = state_31584__$1;(statearr_31598_31625[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31585 === 11))
{var inst_31563 = (state_31584[2]);var state_31584__$1 = state_31584;var statearr_31599_31626 = state_31584__$1;(statearr_31599_31626[2] = inst_31563);
(statearr_31599_31626[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31585 === 12))
{var inst_31558 = (state_31584[7]);var inst_31568 = cljs.core.clj__GT_js.call(null,inst_31558);var inst_31569 = console.log(inst_31568);var state_31584__$1 = state_31584;var statearr_31600_31627 = state_31584__$1;(statearr_31600_31627[2] = inst_31569);
(statearr_31600_31627[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31585 === 13))
{var state_31584__$1 = state_31584;var statearr_31601_31628 = state_31584__$1;(statearr_31601_31628[2] = null);
(statearr_31601_31628[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31585 === 14))
{var inst_31558 = (state_31584[7]);var inst_31572 = (state_31584[2]);var state_31584__$1 = (function (){var statearr_31602 = state_31584;(statearr_31602[9] = inst_31572);
return statearr_31602;
})();var statearr_31603_31629 = state_31584__$1;(statearr_31603_31629[2] = inst_31558);
(statearr_31603_31629[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31585 === 15))
{var state_31584__$1 = state_31584;var statearr_31604_31630 = state_31584__$1;(statearr_31604_31630[2] = null);
(statearr_31604_31630[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31585 === 16))
{var state_31584__$1 = state_31584;var statearr_31605_31631 = state_31584__$1;(statearr_31605_31631[2] = null);
(statearr_31605_31631[1] = 17);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31585 === 17))
{var inst_31580 = (state_31584[2]);var state_31584__$1 = state_31584;var statearr_31606_31632 = state_31584__$1;(statearr_31606_31632[2] = inst_31580);
(statearr_31606_31632[1] = 3);
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
var state_machine__5507__auto____0 = (function (){var statearr_31610 = [null,null,null,null,null,null,null,null,null,null];(statearr_31610[0] = state_machine__5507__auto__);
(statearr_31610[1] = 1);
return statearr_31610;
});
var state_machine__5507__auto____1 = (function (state_31584){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_31584);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e31611){if((e31611 instanceof Object))
{var ex__5510__auto__ = e31611;var statearr_31612_31633 = state_31584;(statearr_31612_31633[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31584);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e31611;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__31634 = state_31584;
state_31584 = G__31634;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_31584){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_31584);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_31613 = f__5522__auto__.call(null);(statearr_31613[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___31614);
return statearr_31613;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5523__auto__);
}));
return null;
};
var dorun_async = function (ch,var_args){
var p__31495 = null;if (arguments.length > 1) {
  p__31495 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return dorun_async__delegate.call(this,ch,p__31495);};
dorun_async.cljs$lang$maxFixedArity = 1;
dorun_async.cljs$lang$applyTo = (function (arglist__31635){
var ch = cljs.core.first(arglist__31635);
var p__31495 = cljs.core.rest(arglist__31635);
return dorun_async__delegate(ch,p__31495);
});
dorun_async.cljs$core$IFn$_invoke$arity$variadic = dorun_async__delegate;
return dorun_async;
})()
;
