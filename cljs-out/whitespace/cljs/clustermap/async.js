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
map_async.cljs$lang$applyTo = (function (arglist__30492){
var f = cljs.core.first(arglist__30492);
var colls = cljs.core.rest(arglist__30492);
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
var dorun_async__delegate = function (ch,p__30493){var map__30553 = p__30493;var map__30553__$1 = ((cljs.core.seq_QMARK_.call(null,map__30553))?cljs.core.apply.call(null,cljs.core.hash_map,map__30553):map__30553);var delay = cljs.core.get.call(null,map__30553__$1,new cljs.core.Keyword(null,"delay","delay",1109372149));var log = cljs.core.get.call(null,map__30553__$1,new cljs.core.Keyword(null,"log","log",1014011574));var c__5521__auto___30612 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_30582){var state_val_30583 = (state_30582[1]);if((state_val_30583 === 1))
{var state_30582__$1 = state_30582;var statearr_30584_30613 = state_30582__$1;(statearr_30584_30613[2] = null);
(statearr_30584_30613[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30583 === 2))
{var state_30582__$1 = state_30582;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30582__$1,4,ch);
} else
{if((state_val_30583 === 3))
{var inst_30580 = (state_30582[2]);var state_30582__$1 = state_30582;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30582__$1,inst_30580);
} else
{if((state_val_30583 === 4))
{var inst_30556 = (state_30582[7]);var inst_30556__$1 = (state_30582[2]);var state_30582__$1 = (function (){var statearr_30585 = state_30582;(statearr_30585[7] = inst_30556__$1);
return statearr_30585;
})();if(cljs.core.truth_(inst_30556__$1))
{var statearr_30586_30614 = state_30582__$1;(statearr_30586_30614[1] = 5);
} else
{var statearr_30587_30615 = state_30582__$1;(statearr_30587_30615[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30583 === 5))
{var state_30582__$1 = state_30582;if(cljs.core.truth_(delay))
{var statearr_30588_30616 = state_30582__$1;(statearr_30588_30616[1] = 8);
} else
{var statearr_30589_30617 = state_30582__$1;(statearr_30589_30617[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30583 === 6))
{var state_30582__$1 = state_30582;var statearr_30590_30618 = state_30582__$1;(statearr_30590_30618[2] = null);
(statearr_30590_30618[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30583 === 7))
{var inst_30573 = (state_30582[2]);var state_30582__$1 = state_30582;if(cljs.core.truth_(inst_30573))
{var statearr_30591_30619 = state_30582__$1;(statearr_30591_30619[1] = 15);
} else
{var statearr_30592_30620 = state_30582__$1;(statearr_30592_30620[1] = 16);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30583 === 8))
{var inst_30559 = cljs.core.async.timeout.call(null,delay);var state_30582__$1 = state_30582;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30582__$1,11,inst_30559);
} else
{if((state_val_30583 === 9))
{var state_30582__$1 = state_30582;var statearr_30593_30621 = state_30582__$1;(statearr_30593_30621[2] = null);
(statearr_30593_30621[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30583 === 10))
{var inst_30564 = (state_30582[2]);var state_30582__$1 = (function (){var statearr_30594 = state_30582;(statearr_30594[8] = inst_30564);
return statearr_30594;
})();if(cljs.core.truth_(log))
{var statearr_30595_30622 = state_30582__$1;(statearr_30595_30622[1] = 12);
} else
{var statearr_30596_30623 = state_30582__$1;(statearr_30596_30623[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30583 === 11))
{var inst_30561 = (state_30582[2]);var state_30582__$1 = state_30582;var statearr_30597_30624 = state_30582__$1;(statearr_30597_30624[2] = inst_30561);
(statearr_30597_30624[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30583 === 12))
{var inst_30556 = (state_30582[7]);var inst_30566 = cljs.core.clj__GT_js.call(null,inst_30556);var inst_30567 = console.log(inst_30566);var state_30582__$1 = state_30582;var statearr_30598_30625 = state_30582__$1;(statearr_30598_30625[2] = inst_30567);
(statearr_30598_30625[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30583 === 13))
{var state_30582__$1 = state_30582;var statearr_30599_30626 = state_30582__$1;(statearr_30599_30626[2] = null);
(statearr_30599_30626[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30583 === 14))
{var inst_30556 = (state_30582[7]);var inst_30570 = (state_30582[2]);var state_30582__$1 = (function (){var statearr_30600 = state_30582;(statearr_30600[9] = inst_30570);
return statearr_30600;
})();var statearr_30601_30627 = state_30582__$1;(statearr_30601_30627[2] = inst_30556);
(statearr_30601_30627[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30583 === 15))
{var state_30582__$1 = state_30582;var statearr_30602_30628 = state_30582__$1;(statearr_30602_30628[2] = null);
(statearr_30602_30628[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30583 === 16))
{var state_30582__$1 = state_30582;var statearr_30603_30629 = state_30582__$1;(statearr_30603_30629[2] = null);
(statearr_30603_30629[1] = 17);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30583 === 17))
{var inst_30578 = (state_30582[2]);var state_30582__$1 = state_30582;var statearr_30604_30630 = state_30582__$1;(statearr_30604_30630[2] = inst_30578);
(statearr_30604_30630[1] = 3);
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
var state_machine__5507__auto____0 = (function (){var statearr_30608 = [null,null,null,null,null,null,null,null,null,null];(statearr_30608[0] = state_machine__5507__auto__);
(statearr_30608[1] = 1);
return statearr_30608;
});
var state_machine__5507__auto____1 = (function (state_30582){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_30582);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e30609){if((e30609 instanceof Object))
{var ex__5510__auto__ = e30609;var statearr_30610_30631 = state_30582;(statearr_30610_30631[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30582);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e30609;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__30632 = state_30582;
state_30582 = G__30632;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_30582){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_30582);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_30611 = f__5522__auto__.call(null);(statearr_30611[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___30612);
return statearr_30611;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5523__auto__);
}));
return null;
};
var dorun_async = function (ch,var_args){
var p__30493 = null;if (arguments.length > 1) {
  p__30493 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return dorun_async__delegate.call(this,ch,p__30493);};
dorun_async.cljs$lang$maxFixedArity = 1;
dorun_async.cljs$lang$applyTo = (function (arglist__30633){
var ch = cljs.core.first(arglist__30633);
var p__30493 = cljs.core.rest(arglist__30633);
return dorun_async__delegate(ch,p__30493);
});
dorun_async.cljs$core$IFn$_invoke$arity$variadic = dorun_async__delegate;
return dorun_async;
})()
;
