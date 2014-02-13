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
map_async.cljs$lang$applyTo = (function (arglist__31621){
var f = cljs.core.first(arglist__31621);
var colls = cljs.core.rest(arglist__31621);
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
var dorun_async__delegate = function (ch,p__31622){var map__31682 = p__31622;var map__31682__$1 = ((cljs.core.seq_QMARK_.call(null,map__31682))?cljs.core.apply.call(null,cljs.core.hash_map,map__31682):map__31682);var delay = cljs.core.get.call(null,map__31682__$1,new cljs.core.Keyword(null,"delay","delay",1109372149));var log = cljs.core.get.call(null,map__31682__$1,new cljs.core.Keyword(null,"log","log",1014011574));var c__5521__auto___31741 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_31711){var state_val_31712 = (state_31711[1]);if((state_val_31712 === 1))
{var state_31711__$1 = state_31711;var statearr_31713_31742 = state_31711__$1;(statearr_31713_31742[2] = null);
(statearr_31713_31742[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31712 === 2))
{var state_31711__$1 = state_31711;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31711__$1,4,ch);
} else
{if((state_val_31712 === 3))
{var inst_31709 = (state_31711[2]);var state_31711__$1 = state_31711;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31711__$1,inst_31709);
} else
{if((state_val_31712 === 4))
{var inst_31685 = (state_31711[7]);var inst_31685__$1 = (state_31711[2]);var state_31711__$1 = (function (){var statearr_31714 = state_31711;(statearr_31714[7] = inst_31685__$1);
return statearr_31714;
})();if(cljs.core.truth_(inst_31685__$1))
{var statearr_31715_31743 = state_31711__$1;(statearr_31715_31743[1] = 5);
} else
{var statearr_31716_31744 = state_31711__$1;(statearr_31716_31744[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31712 === 5))
{var state_31711__$1 = state_31711;if(cljs.core.truth_(delay))
{var statearr_31717_31745 = state_31711__$1;(statearr_31717_31745[1] = 8);
} else
{var statearr_31718_31746 = state_31711__$1;(statearr_31718_31746[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31712 === 6))
{var state_31711__$1 = state_31711;var statearr_31719_31747 = state_31711__$1;(statearr_31719_31747[2] = null);
(statearr_31719_31747[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31712 === 7))
{var inst_31702 = (state_31711[2]);var state_31711__$1 = state_31711;if(cljs.core.truth_(inst_31702))
{var statearr_31720_31748 = state_31711__$1;(statearr_31720_31748[1] = 15);
} else
{var statearr_31721_31749 = state_31711__$1;(statearr_31721_31749[1] = 16);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31712 === 8))
{var inst_31688 = cljs.core.async.timeout.call(null,delay);var state_31711__$1 = state_31711;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31711__$1,11,inst_31688);
} else
{if((state_val_31712 === 9))
{var state_31711__$1 = state_31711;var statearr_31722_31750 = state_31711__$1;(statearr_31722_31750[2] = null);
(statearr_31722_31750[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31712 === 10))
{var inst_31693 = (state_31711[2]);var state_31711__$1 = (function (){var statearr_31723 = state_31711;(statearr_31723[8] = inst_31693);
return statearr_31723;
})();if(cljs.core.truth_(log))
{var statearr_31724_31751 = state_31711__$1;(statearr_31724_31751[1] = 12);
} else
{var statearr_31725_31752 = state_31711__$1;(statearr_31725_31752[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31712 === 11))
{var inst_31690 = (state_31711[2]);var state_31711__$1 = state_31711;var statearr_31726_31753 = state_31711__$1;(statearr_31726_31753[2] = inst_31690);
(statearr_31726_31753[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31712 === 12))
{var inst_31685 = (state_31711[7]);var inst_31695 = cljs.core.clj__GT_js.call(null,inst_31685);var inst_31696 = console.log(inst_31695);var state_31711__$1 = state_31711;var statearr_31727_31754 = state_31711__$1;(statearr_31727_31754[2] = inst_31696);
(statearr_31727_31754[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31712 === 13))
{var state_31711__$1 = state_31711;var statearr_31728_31755 = state_31711__$1;(statearr_31728_31755[2] = null);
(statearr_31728_31755[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31712 === 14))
{var inst_31685 = (state_31711[7]);var inst_31699 = (state_31711[2]);var state_31711__$1 = (function (){var statearr_31729 = state_31711;(statearr_31729[9] = inst_31699);
return statearr_31729;
})();var statearr_31730_31756 = state_31711__$1;(statearr_31730_31756[2] = inst_31685);
(statearr_31730_31756[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31712 === 15))
{var state_31711__$1 = state_31711;var statearr_31731_31757 = state_31711__$1;(statearr_31731_31757[2] = null);
(statearr_31731_31757[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31712 === 16))
{var state_31711__$1 = state_31711;var statearr_31732_31758 = state_31711__$1;(statearr_31732_31758[2] = null);
(statearr_31732_31758[1] = 17);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31712 === 17))
{var inst_31707 = (state_31711[2]);var state_31711__$1 = state_31711;var statearr_31733_31759 = state_31711__$1;(statearr_31733_31759[2] = inst_31707);
(statearr_31733_31759[1] = 3);
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
var state_machine__5507__auto____0 = (function (){var statearr_31737 = [null,null,null,null,null,null,null,null,null,null];(statearr_31737[0] = state_machine__5507__auto__);
(statearr_31737[1] = 1);
return statearr_31737;
});
var state_machine__5507__auto____1 = (function (state_31711){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_31711);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e31738){if((e31738 instanceof Object))
{var ex__5510__auto__ = e31738;var statearr_31739_31760 = state_31711;(statearr_31739_31760[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31711);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e31738;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__31761 = state_31711;
state_31711 = G__31761;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_31711){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_31711);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_31740 = f__5522__auto__.call(null);(statearr_31740[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___31741);
return statearr_31740;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5523__auto__);
}));
return null;
};
var dorun_async = function (ch,var_args){
var p__31622 = null;if (arguments.length > 1) {
  p__31622 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return dorun_async__delegate.call(this,ch,p__31622);};
dorun_async.cljs$lang$maxFixedArity = 1;
dorun_async.cljs$lang$applyTo = (function (arglist__31762){
var ch = cljs.core.first(arglist__31762);
var p__31622 = cljs.core.rest(arglist__31762);
return dorun_async__delegate(ch,p__31622);
});
dorun_async.cljs$core$IFn$_invoke$arity$variadic = dorun_async__delegate;
return dorun_async;
})()
;
