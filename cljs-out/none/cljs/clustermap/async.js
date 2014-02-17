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
map_async.cljs$lang$applyTo = (function (arglist__11531){
var f = cljs.core.first(arglist__11531);
var colls = cljs.core.rest(arglist__11531);
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
var dorun_async__delegate = function (ch,p__11532){var map__11592 = p__11532;var map__11592__$1 = ((cljs.core.seq_QMARK_.call(null,map__11592))?cljs.core.apply.call(null,cljs.core.hash_map,map__11592):map__11592);var delay = cljs.core.get.call(null,map__11592__$1,new cljs.core.Keyword(null,"delay","delay",1109372149));var log = cljs.core.get.call(null,map__11592__$1,new cljs.core.Keyword(null,"log","log",1014011574));var c__5521__auto___11651 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_11621){var state_val_11622 = (state_11621[1]);if((state_val_11622 === 1))
{var state_11621__$1 = state_11621;var statearr_11623_11652 = state_11621__$1;(statearr_11623_11652[2] = null);
(statearr_11623_11652[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11622 === 2))
{var state_11621__$1 = state_11621;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11621__$1,4,ch);
} else
{if((state_val_11622 === 3))
{var inst_11619 = (state_11621[2]);var state_11621__$1 = state_11621;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11621__$1,inst_11619);
} else
{if((state_val_11622 === 4))
{var inst_11595 = (state_11621[7]);var inst_11595__$1 = (state_11621[2]);var state_11621__$1 = (function (){var statearr_11624 = state_11621;(statearr_11624[7] = inst_11595__$1);
return statearr_11624;
})();if(cljs.core.truth_(inst_11595__$1))
{var statearr_11625_11653 = state_11621__$1;(statearr_11625_11653[1] = 5);
} else
{var statearr_11626_11654 = state_11621__$1;(statearr_11626_11654[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11622 === 5))
{var state_11621__$1 = state_11621;if(cljs.core.truth_(delay))
{var statearr_11627_11655 = state_11621__$1;(statearr_11627_11655[1] = 8);
} else
{var statearr_11628_11656 = state_11621__$1;(statearr_11628_11656[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11622 === 6))
{var state_11621__$1 = state_11621;var statearr_11629_11657 = state_11621__$1;(statearr_11629_11657[2] = null);
(statearr_11629_11657[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11622 === 7))
{var inst_11612 = (state_11621[2]);var state_11621__$1 = state_11621;if(cljs.core.truth_(inst_11612))
{var statearr_11630_11658 = state_11621__$1;(statearr_11630_11658[1] = 15);
} else
{var statearr_11631_11659 = state_11621__$1;(statearr_11631_11659[1] = 16);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11622 === 8))
{var inst_11598 = cljs.core.async.timeout.call(null,delay);var state_11621__$1 = state_11621;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11621__$1,11,inst_11598);
} else
{if((state_val_11622 === 9))
{var state_11621__$1 = state_11621;var statearr_11632_11660 = state_11621__$1;(statearr_11632_11660[2] = null);
(statearr_11632_11660[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11622 === 10))
{var inst_11603 = (state_11621[2]);var state_11621__$1 = (function (){var statearr_11633 = state_11621;(statearr_11633[8] = inst_11603);
return statearr_11633;
})();if(cljs.core.truth_(log))
{var statearr_11634_11661 = state_11621__$1;(statearr_11634_11661[1] = 12);
} else
{var statearr_11635_11662 = state_11621__$1;(statearr_11635_11662[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11622 === 11))
{var inst_11600 = (state_11621[2]);var state_11621__$1 = state_11621;var statearr_11636_11663 = state_11621__$1;(statearr_11636_11663[2] = inst_11600);
(statearr_11636_11663[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11622 === 12))
{var inst_11595 = (state_11621[7]);var inst_11605 = cljs.core.clj__GT_js.call(null,inst_11595);var inst_11606 = console.log(inst_11605);var state_11621__$1 = state_11621;var statearr_11637_11664 = state_11621__$1;(statearr_11637_11664[2] = inst_11606);
(statearr_11637_11664[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11622 === 13))
{var state_11621__$1 = state_11621;var statearr_11638_11665 = state_11621__$1;(statearr_11638_11665[2] = null);
(statearr_11638_11665[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11622 === 14))
{var inst_11595 = (state_11621[7]);var inst_11609 = (state_11621[2]);var state_11621__$1 = (function (){var statearr_11639 = state_11621;(statearr_11639[9] = inst_11609);
return statearr_11639;
})();var statearr_11640_11666 = state_11621__$1;(statearr_11640_11666[2] = inst_11595);
(statearr_11640_11666[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11622 === 15))
{var state_11621__$1 = state_11621;var statearr_11641_11667 = state_11621__$1;(statearr_11641_11667[2] = null);
(statearr_11641_11667[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11622 === 16))
{var state_11621__$1 = state_11621;var statearr_11642_11668 = state_11621__$1;(statearr_11642_11668[2] = null);
(statearr_11642_11668[1] = 17);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11622 === 17))
{var inst_11617 = (state_11621[2]);var state_11621__$1 = state_11621;var statearr_11643_11669 = state_11621__$1;(statearr_11643_11669[2] = inst_11617);
(statearr_11643_11669[1] = 3);
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
var state_machine__5507__auto____0 = (function (){var statearr_11647 = [null,null,null,null,null,null,null,null,null,null];(statearr_11647[0] = state_machine__5507__auto__);
(statearr_11647[1] = 1);
return statearr_11647;
});
var state_machine__5507__auto____1 = (function (state_11621){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_11621);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e11648){if((e11648 instanceof Object))
{var ex__5510__auto__ = e11648;var statearr_11649_11670 = state_11621;(statearr_11649_11670[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11621);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11648;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11671 = state_11621;
state_11621 = G__11671;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_11621){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_11621);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_11650 = f__5522__auto__.call(null);(statearr_11650[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___11651);
return statearr_11650;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5523__auto__);
}));
return null;
};
var dorun_async = function (ch,var_args){
var p__11532 = null;if (arguments.length > 1) {
  p__11532 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return dorun_async__delegate.call(this,ch,p__11532);};
dorun_async.cljs$lang$maxFixedArity = 1;
dorun_async.cljs$lang$applyTo = (function (arglist__11672){
var ch = cljs.core.first(arglist__11672);
var p__11532 = cljs.core.rest(arglist__11672);
return dorun_async__delegate(ch,p__11532);
});
dorun_async.cljs$core$IFn$_invoke$arity$variadic = dorun_async__delegate;
return dorun_async;
})()
;

//# sourceMappingURL=async.js.map