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
map_async.cljs$lang$applyTo = (function (arglist__11532){
var f = cljs.core.first(arglist__11532);
var colls = cljs.core.rest(arglist__11532);
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
var dorun_async__delegate = function (ch,p__11533){var map__11593 = p__11533;var map__11593__$1 = ((cljs.core.seq_QMARK_.call(null,map__11593))?cljs.core.apply.call(null,cljs.core.hash_map,map__11593):map__11593);var delay = cljs.core.get.call(null,map__11593__$1,new cljs.core.Keyword(null,"delay","delay",1109372149));var log = cljs.core.get.call(null,map__11593__$1,new cljs.core.Keyword(null,"log","log",1014011574));var c__5521__auto___11652 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_11622){var state_val_11623 = (state_11622[1]);if((state_val_11623 === 1))
{var state_11622__$1 = state_11622;var statearr_11624_11653 = state_11622__$1;(statearr_11624_11653[2] = null);
(statearr_11624_11653[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11623 === 2))
{var state_11622__$1 = state_11622;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11622__$1,4,ch);
} else
{if((state_val_11623 === 3))
{var inst_11620 = (state_11622[2]);var state_11622__$1 = state_11622;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11622__$1,inst_11620);
} else
{if((state_val_11623 === 4))
{var inst_11596 = (state_11622[7]);var inst_11596__$1 = (state_11622[2]);var state_11622__$1 = (function (){var statearr_11625 = state_11622;(statearr_11625[7] = inst_11596__$1);
return statearr_11625;
})();if(cljs.core.truth_(inst_11596__$1))
{var statearr_11626_11654 = state_11622__$1;(statearr_11626_11654[1] = 5);
} else
{var statearr_11627_11655 = state_11622__$1;(statearr_11627_11655[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11623 === 5))
{var state_11622__$1 = state_11622;if(cljs.core.truth_(delay))
{var statearr_11628_11656 = state_11622__$1;(statearr_11628_11656[1] = 8);
} else
{var statearr_11629_11657 = state_11622__$1;(statearr_11629_11657[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11623 === 6))
{var state_11622__$1 = state_11622;var statearr_11630_11658 = state_11622__$1;(statearr_11630_11658[2] = null);
(statearr_11630_11658[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11623 === 7))
{var inst_11613 = (state_11622[2]);var state_11622__$1 = state_11622;if(cljs.core.truth_(inst_11613))
{var statearr_11631_11659 = state_11622__$1;(statearr_11631_11659[1] = 15);
} else
{var statearr_11632_11660 = state_11622__$1;(statearr_11632_11660[1] = 16);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11623 === 8))
{var inst_11599 = cljs.core.async.timeout.call(null,delay);var state_11622__$1 = state_11622;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11622__$1,11,inst_11599);
} else
{if((state_val_11623 === 9))
{var state_11622__$1 = state_11622;var statearr_11633_11661 = state_11622__$1;(statearr_11633_11661[2] = null);
(statearr_11633_11661[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11623 === 10))
{var inst_11604 = (state_11622[2]);var state_11622__$1 = (function (){var statearr_11634 = state_11622;(statearr_11634[8] = inst_11604);
return statearr_11634;
})();if(cljs.core.truth_(log))
{var statearr_11635_11662 = state_11622__$1;(statearr_11635_11662[1] = 12);
} else
{var statearr_11636_11663 = state_11622__$1;(statearr_11636_11663[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11623 === 11))
{var inst_11601 = (state_11622[2]);var state_11622__$1 = state_11622;var statearr_11637_11664 = state_11622__$1;(statearr_11637_11664[2] = inst_11601);
(statearr_11637_11664[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11623 === 12))
{var inst_11596 = (state_11622[7]);var inst_11606 = cljs.core.clj__GT_js.call(null,inst_11596);var inst_11607 = console.log(inst_11606);var state_11622__$1 = state_11622;var statearr_11638_11665 = state_11622__$1;(statearr_11638_11665[2] = inst_11607);
(statearr_11638_11665[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11623 === 13))
{var state_11622__$1 = state_11622;var statearr_11639_11666 = state_11622__$1;(statearr_11639_11666[2] = null);
(statearr_11639_11666[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11623 === 14))
{var inst_11596 = (state_11622[7]);var inst_11610 = (state_11622[2]);var state_11622__$1 = (function (){var statearr_11640 = state_11622;(statearr_11640[9] = inst_11610);
return statearr_11640;
})();var statearr_11641_11667 = state_11622__$1;(statearr_11641_11667[2] = inst_11596);
(statearr_11641_11667[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11623 === 15))
{var state_11622__$1 = state_11622;var statearr_11642_11668 = state_11622__$1;(statearr_11642_11668[2] = null);
(statearr_11642_11668[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11623 === 16))
{var state_11622__$1 = state_11622;var statearr_11643_11669 = state_11622__$1;(statearr_11643_11669[2] = null);
(statearr_11643_11669[1] = 17);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11623 === 17))
{var inst_11618 = (state_11622[2]);var state_11622__$1 = state_11622;var statearr_11644_11670 = state_11622__$1;(statearr_11644_11670[2] = inst_11618);
(statearr_11644_11670[1] = 3);
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
var state_machine__5507__auto____0 = (function (){var statearr_11648 = [null,null,null,null,null,null,null,null,null,null];(statearr_11648[0] = state_machine__5507__auto__);
(statearr_11648[1] = 1);
return statearr_11648;
});
var state_machine__5507__auto____1 = (function (state_11622){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_11622);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e11649){if((e11649 instanceof Object))
{var ex__5510__auto__ = e11649;var statearr_11650_11671 = state_11622;(statearr_11650_11671[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11622);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11649;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11672 = state_11622;
state_11622 = G__11672;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_11622){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_11622);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_11651 = f__5522__auto__.call(null);(statearr_11651[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___11652);
return statearr_11651;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5523__auto__);
}));
return null;
};
var dorun_async = function (ch,var_args){
var p__11533 = null;if (arguments.length > 1) {
  p__11533 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return dorun_async__delegate.call(this,ch,p__11533);};
dorun_async.cljs$lang$maxFixedArity = 1;
dorun_async.cljs$lang$applyTo = (function (arglist__11673){
var ch = cljs.core.first(arglist__11673);
var p__11533 = cljs.core.rest(arglist__11673);
return dorun_async__delegate(ch,p__11533);
});
dorun_async.cljs$core$IFn$_invoke$arity$variadic = dorun_async__delegate;
return dorun_async;
})()
;

//# sourceMappingURL=async.js.map