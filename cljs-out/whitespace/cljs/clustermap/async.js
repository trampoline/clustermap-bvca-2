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
map_async.cljs$lang$applyTo = (function (arglist__30508){
var f = cljs.core.first(arglist__30508);
var colls = cljs.core.rest(arglist__30508);
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
var dorun_async__delegate = function (ch,p__30509){var map__30569 = p__30509;var map__30569__$1 = ((cljs.core.seq_QMARK_.call(null,map__30569))?cljs.core.apply.call(null,cljs.core.hash_map,map__30569):map__30569);var delay = cljs.core.get.call(null,map__30569__$1,new cljs.core.Keyword(null,"delay","delay",1109372149));var log = cljs.core.get.call(null,map__30569__$1,new cljs.core.Keyword(null,"log","log",1014011574));var c__5521__auto___30628 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_30598){var state_val_30599 = (state_30598[1]);if((state_val_30599 === 1))
{var state_30598__$1 = state_30598;var statearr_30600_30629 = state_30598__$1;(statearr_30600_30629[2] = null);
(statearr_30600_30629[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30599 === 2))
{var state_30598__$1 = state_30598;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30598__$1,4,ch);
} else
{if((state_val_30599 === 3))
{var inst_30596 = (state_30598[2]);var state_30598__$1 = state_30598;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30598__$1,inst_30596);
} else
{if((state_val_30599 === 4))
{var inst_30572 = (state_30598[7]);var inst_30572__$1 = (state_30598[2]);var state_30598__$1 = (function (){var statearr_30601 = state_30598;(statearr_30601[7] = inst_30572__$1);
return statearr_30601;
})();if(cljs.core.truth_(inst_30572__$1))
{var statearr_30602_30630 = state_30598__$1;(statearr_30602_30630[1] = 5);
} else
{var statearr_30603_30631 = state_30598__$1;(statearr_30603_30631[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30599 === 5))
{var state_30598__$1 = state_30598;if(cljs.core.truth_(delay))
{var statearr_30604_30632 = state_30598__$1;(statearr_30604_30632[1] = 8);
} else
{var statearr_30605_30633 = state_30598__$1;(statearr_30605_30633[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30599 === 6))
{var state_30598__$1 = state_30598;var statearr_30606_30634 = state_30598__$1;(statearr_30606_30634[2] = null);
(statearr_30606_30634[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30599 === 7))
{var inst_30589 = (state_30598[2]);var state_30598__$1 = state_30598;if(cljs.core.truth_(inst_30589))
{var statearr_30607_30635 = state_30598__$1;(statearr_30607_30635[1] = 15);
} else
{var statearr_30608_30636 = state_30598__$1;(statearr_30608_30636[1] = 16);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30599 === 8))
{var inst_30575 = cljs.core.async.timeout.call(null,delay);var state_30598__$1 = state_30598;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30598__$1,11,inst_30575);
} else
{if((state_val_30599 === 9))
{var state_30598__$1 = state_30598;var statearr_30609_30637 = state_30598__$1;(statearr_30609_30637[2] = null);
(statearr_30609_30637[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30599 === 10))
{var inst_30580 = (state_30598[2]);var state_30598__$1 = (function (){var statearr_30610 = state_30598;(statearr_30610[8] = inst_30580);
return statearr_30610;
})();if(cljs.core.truth_(log))
{var statearr_30611_30638 = state_30598__$1;(statearr_30611_30638[1] = 12);
} else
{var statearr_30612_30639 = state_30598__$1;(statearr_30612_30639[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30599 === 11))
{var inst_30577 = (state_30598[2]);var state_30598__$1 = state_30598;var statearr_30613_30640 = state_30598__$1;(statearr_30613_30640[2] = inst_30577);
(statearr_30613_30640[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30599 === 12))
{var inst_30572 = (state_30598[7]);var inst_30582 = cljs.core.clj__GT_js.call(null,inst_30572);var inst_30583 = console.log(inst_30582);var state_30598__$1 = state_30598;var statearr_30614_30641 = state_30598__$1;(statearr_30614_30641[2] = inst_30583);
(statearr_30614_30641[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30599 === 13))
{var state_30598__$1 = state_30598;var statearr_30615_30642 = state_30598__$1;(statearr_30615_30642[2] = null);
(statearr_30615_30642[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30599 === 14))
{var inst_30572 = (state_30598[7]);var inst_30586 = (state_30598[2]);var state_30598__$1 = (function (){var statearr_30616 = state_30598;(statearr_30616[9] = inst_30586);
return statearr_30616;
})();var statearr_30617_30643 = state_30598__$1;(statearr_30617_30643[2] = inst_30572);
(statearr_30617_30643[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30599 === 15))
{var state_30598__$1 = state_30598;var statearr_30618_30644 = state_30598__$1;(statearr_30618_30644[2] = null);
(statearr_30618_30644[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30599 === 16))
{var state_30598__$1 = state_30598;var statearr_30619_30645 = state_30598__$1;(statearr_30619_30645[2] = null);
(statearr_30619_30645[1] = 17);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30599 === 17))
{var inst_30594 = (state_30598[2]);var state_30598__$1 = state_30598;var statearr_30620_30646 = state_30598__$1;(statearr_30620_30646[2] = inst_30594);
(statearr_30620_30646[1] = 3);
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
var state_machine__5507__auto____0 = (function (){var statearr_30624 = [null,null,null,null,null,null,null,null,null,null];(statearr_30624[0] = state_machine__5507__auto__);
(statearr_30624[1] = 1);
return statearr_30624;
});
var state_machine__5507__auto____1 = (function (state_30598){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_30598);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e30625){if((e30625 instanceof Object))
{var ex__5510__auto__ = e30625;var statearr_30626_30647 = state_30598;(statearr_30626_30647[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30598);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e30625;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__30648 = state_30598;
state_30598 = G__30648;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_30598){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_30598);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_30627 = f__5522__auto__.call(null);(statearr_30627[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___30628);
return statearr_30627;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5523__auto__);
}));
return null;
};
var dorun_async = function (ch,var_args){
var p__30509 = null;if (arguments.length > 1) {
  p__30509 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return dorun_async__delegate.call(this,ch,p__30509);};
dorun_async.cljs$lang$maxFixedArity = 1;
dorun_async.cljs$lang$applyTo = (function (arglist__30649){
var ch = cljs.core.first(arglist__30649);
var p__30509 = cljs.core.rest(arglist__30649);
return dorun_async__delegate(ch,p__30509);
});
dorun_async.cljs$core$IFn$_invoke$arity$variadic = dorun_async__delegate;
return dorun_async;
})()
;
