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
map_async.cljs$lang$applyTo = (function (arglist__33450){
var f = cljs.core.first(arglist__33450);
var colls = cljs.core.rest(arglist__33450);
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
var dorun_async__delegate = function (ch,p__33451){var map__33511 = p__33451;var map__33511__$1 = ((cljs.core.seq_QMARK_.call(null,map__33511))?cljs.core.apply.call(null,cljs.core.hash_map,map__33511):map__33511);var delay = cljs.core.get.call(null,map__33511__$1,new cljs.core.Keyword(null,"delay","delay",1109372149));var log = cljs.core.get.call(null,map__33511__$1,new cljs.core.Keyword(null,"log","log",1014011574));var c__5521__auto___33570 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_33540){var state_val_33541 = (state_33540[1]);if((state_val_33541 === 1))
{var state_33540__$1 = state_33540;var statearr_33542_33571 = state_33540__$1;(statearr_33542_33571[2] = null);
(statearr_33542_33571[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33541 === 2))
{var state_33540__$1 = state_33540;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33540__$1,4,ch);
} else
{if((state_val_33541 === 3))
{var inst_33538 = (state_33540[2]);var state_33540__$1 = state_33540;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33540__$1,inst_33538);
} else
{if((state_val_33541 === 4))
{var inst_33514 = (state_33540[7]);var inst_33514__$1 = (state_33540[2]);var state_33540__$1 = (function (){var statearr_33543 = state_33540;(statearr_33543[7] = inst_33514__$1);
return statearr_33543;
})();if(cljs.core.truth_(inst_33514__$1))
{var statearr_33544_33572 = state_33540__$1;(statearr_33544_33572[1] = 5);
} else
{var statearr_33545_33573 = state_33540__$1;(statearr_33545_33573[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33541 === 5))
{var state_33540__$1 = state_33540;if(cljs.core.truth_(delay))
{var statearr_33546_33574 = state_33540__$1;(statearr_33546_33574[1] = 8);
} else
{var statearr_33547_33575 = state_33540__$1;(statearr_33547_33575[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33541 === 6))
{var state_33540__$1 = state_33540;var statearr_33548_33576 = state_33540__$1;(statearr_33548_33576[2] = null);
(statearr_33548_33576[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33541 === 7))
{var inst_33531 = (state_33540[2]);var state_33540__$1 = state_33540;if(cljs.core.truth_(inst_33531))
{var statearr_33549_33577 = state_33540__$1;(statearr_33549_33577[1] = 15);
} else
{var statearr_33550_33578 = state_33540__$1;(statearr_33550_33578[1] = 16);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33541 === 8))
{var inst_33517 = cljs.core.async.timeout.call(null,delay);var state_33540__$1 = state_33540;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33540__$1,11,inst_33517);
} else
{if((state_val_33541 === 9))
{var state_33540__$1 = state_33540;var statearr_33551_33579 = state_33540__$1;(statearr_33551_33579[2] = null);
(statearr_33551_33579[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33541 === 10))
{var inst_33522 = (state_33540[2]);var state_33540__$1 = (function (){var statearr_33552 = state_33540;(statearr_33552[8] = inst_33522);
return statearr_33552;
})();if(cljs.core.truth_(log))
{var statearr_33553_33580 = state_33540__$1;(statearr_33553_33580[1] = 12);
} else
{var statearr_33554_33581 = state_33540__$1;(statearr_33554_33581[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33541 === 11))
{var inst_33519 = (state_33540[2]);var state_33540__$1 = state_33540;var statearr_33555_33582 = state_33540__$1;(statearr_33555_33582[2] = inst_33519);
(statearr_33555_33582[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33541 === 12))
{var inst_33514 = (state_33540[7]);var inst_33524 = cljs.core.clj__GT_js.call(null,inst_33514);var inst_33525 = console.log(inst_33524);var state_33540__$1 = state_33540;var statearr_33556_33583 = state_33540__$1;(statearr_33556_33583[2] = inst_33525);
(statearr_33556_33583[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33541 === 13))
{var state_33540__$1 = state_33540;var statearr_33557_33584 = state_33540__$1;(statearr_33557_33584[2] = null);
(statearr_33557_33584[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33541 === 14))
{var inst_33514 = (state_33540[7]);var inst_33528 = (state_33540[2]);var state_33540__$1 = (function (){var statearr_33558 = state_33540;(statearr_33558[9] = inst_33528);
return statearr_33558;
})();var statearr_33559_33585 = state_33540__$1;(statearr_33559_33585[2] = inst_33514);
(statearr_33559_33585[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33541 === 15))
{var state_33540__$1 = state_33540;var statearr_33560_33586 = state_33540__$1;(statearr_33560_33586[2] = null);
(statearr_33560_33586[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33541 === 16))
{var state_33540__$1 = state_33540;var statearr_33561_33587 = state_33540__$1;(statearr_33561_33587[2] = null);
(statearr_33561_33587[1] = 17);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33541 === 17))
{var inst_33536 = (state_33540[2]);var state_33540__$1 = state_33540;var statearr_33562_33588 = state_33540__$1;(statearr_33562_33588[2] = inst_33536);
(statearr_33562_33588[1] = 3);
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
var state_machine__5507__auto____0 = (function (){var statearr_33566 = [null,null,null,null,null,null,null,null,null,null];(statearr_33566[0] = state_machine__5507__auto__);
(statearr_33566[1] = 1);
return statearr_33566;
});
var state_machine__5507__auto____1 = (function (state_33540){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_33540);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e33567){if((e33567 instanceof Object))
{var ex__5510__auto__ = e33567;var statearr_33568_33589 = state_33540;(statearr_33568_33589[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33540);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e33567;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__33590 = state_33540;
state_33540 = G__33590;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_33540){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_33540);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_33569 = f__5522__auto__.call(null);(statearr_33569[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___33570);
return statearr_33569;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5523__auto__);
}));
return null;
};
var dorun_async = function (ch,var_args){
var p__33451 = null;if (arguments.length > 1) {
  p__33451 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return dorun_async__delegate.call(this,ch,p__33451);};
dorun_async.cljs$lang$maxFixedArity = 1;
dorun_async.cljs$lang$applyTo = (function (arglist__33591){
var ch = cljs.core.first(arglist__33591);
var p__33451 = cljs.core.rest(arglist__33591);
return dorun_async__delegate(ch,p__33451);
});
dorun_async.cljs$core$IFn$_invoke$arity$variadic = dorun_async__delegate;
return dorun_async;
})()
;
