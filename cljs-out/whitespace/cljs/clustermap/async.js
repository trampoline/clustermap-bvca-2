// Compiled by ClojureScript 0.0-2173
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
map_async.cljs$lang$applyTo = (function (arglist__44517){
var f = cljs.core.first(arglist__44517);
var colls = cljs.core.rest(arglist__44517);
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
var dorun_async__delegate = function (ch,p__44518){var map__44578 = p__44518;var map__44578__$1 = ((cljs.core.seq_QMARK_.call(null,map__44578))?cljs.core.apply.call(null,cljs.core.hash_map,map__44578):map__44578);var delay = cljs.core.get.call(null,map__44578__$1,new cljs.core.Keyword(null,"delay","delay",1109372149));var log = cljs.core.get.call(null,map__44578__$1,new cljs.core.Keyword(null,"log","log",1014011574));var c__5562__auto___44637 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_44607){var state_val_44608 = (state_44607[1]);if((state_val_44608 === 1))
{var state_44607__$1 = state_44607;var statearr_44609_44638 = state_44607__$1;(statearr_44609_44638[2] = null);
(statearr_44609_44638[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44608 === 2))
{var state_44607__$1 = state_44607;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44607__$1,4,ch);
} else
{if((state_val_44608 === 3))
{var inst_44605 = (state_44607[2]);var state_44607__$1 = state_44607;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44607__$1,inst_44605);
} else
{if((state_val_44608 === 4))
{var inst_44581 = (state_44607[7]);var inst_44581__$1 = (state_44607[2]);var state_44607__$1 = (function (){var statearr_44610 = state_44607;(statearr_44610[7] = inst_44581__$1);
return statearr_44610;
})();if(cljs.core.truth_(inst_44581__$1))
{var statearr_44611_44639 = state_44607__$1;(statearr_44611_44639[1] = 5);
} else
{var statearr_44612_44640 = state_44607__$1;(statearr_44612_44640[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44608 === 5))
{var state_44607__$1 = state_44607;if(cljs.core.truth_(delay))
{var statearr_44613_44641 = state_44607__$1;(statearr_44613_44641[1] = 8);
} else
{var statearr_44614_44642 = state_44607__$1;(statearr_44614_44642[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44608 === 6))
{var state_44607__$1 = state_44607;var statearr_44615_44643 = state_44607__$1;(statearr_44615_44643[2] = null);
(statearr_44615_44643[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44608 === 7))
{var inst_44598 = (state_44607[2]);var state_44607__$1 = state_44607;if(cljs.core.truth_(inst_44598))
{var statearr_44616_44644 = state_44607__$1;(statearr_44616_44644[1] = 15);
} else
{var statearr_44617_44645 = state_44607__$1;(statearr_44617_44645[1] = 16);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44608 === 8))
{var inst_44584 = cljs.core.async.timeout.call(null,delay);var state_44607__$1 = state_44607;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44607__$1,11,inst_44584);
} else
{if((state_val_44608 === 9))
{var state_44607__$1 = state_44607;var statearr_44618_44646 = state_44607__$1;(statearr_44618_44646[2] = null);
(statearr_44618_44646[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44608 === 10))
{var inst_44589 = (state_44607[2]);var state_44607__$1 = (function (){var statearr_44619 = state_44607;(statearr_44619[8] = inst_44589);
return statearr_44619;
})();if(cljs.core.truth_(log))
{var statearr_44620_44647 = state_44607__$1;(statearr_44620_44647[1] = 12);
} else
{var statearr_44621_44648 = state_44607__$1;(statearr_44621_44648[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44608 === 11))
{var inst_44586 = (state_44607[2]);var state_44607__$1 = state_44607;var statearr_44622_44649 = state_44607__$1;(statearr_44622_44649[2] = inst_44586);
(statearr_44622_44649[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44608 === 12))
{var inst_44581 = (state_44607[7]);var inst_44591 = cljs.core.clj__GT_js.call(null,inst_44581);var inst_44592 = console.log(inst_44591);var state_44607__$1 = state_44607;var statearr_44623_44650 = state_44607__$1;(statearr_44623_44650[2] = inst_44592);
(statearr_44623_44650[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44608 === 13))
{var state_44607__$1 = state_44607;var statearr_44624_44651 = state_44607__$1;(statearr_44624_44651[2] = null);
(statearr_44624_44651[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44608 === 14))
{var inst_44581 = (state_44607[7]);var inst_44595 = (state_44607[2]);var state_44607__$1 = (function (){var statearr_44625 = state_44607;(statearr_44625[9] = inst_44595);
return statearr_44625;
})();var statearr_44626_44652 = state_44607__$1;(statearr_44626_44652[2] = inst_44581);
(statearr_44626_44652[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44608 === 15))
{var state_44607__$1 = state_44607;var statearr_44627_44653 = state_44607__$1;(statearr_44627_44653[2] = null);
(statearr_44627_44653[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44608 === 16))
{var state_44607__$1 = state_44607;var statearr_44628_44654 = state_44607__$1;(statearr_44628_44654[2] = null);
(statearr_44628_44654[1] = 17);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44608 === 17))
{var inst_44603 = (state_44607[2]);var state_44607__$1 = state_44607;var statearr_44629_44655 = state_44607__$1;(statearr_44629_44655[2] = inst_44603);
(statearr_44629_44655[1] = 3);
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
});return ((function (switch__5547__auto__){
return (function() {
var state_machine__5548__auto__ = null;
var state_machine__5548__auto____0 = (function (){var statearr_44633 = [null,null,null,null,null,null,null,null,null,null];(statearr_44633[0] = state_machine__5548__auto__);
(statearr_44633[1] = 1);
return statearr_44633;
});
var state_machine__5548__auto____1 = (function (state_44607){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__.call(null,state_44607);if(cljs.core.keyword_identical_QMARK_.call(null,result__5550__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e44634){if((e44634 instanceof Object))
{var ex__5551__auto__ = e44634;var statearr_44635_44656 = state_44607;(statearr_44635_44656[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44607);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e44634;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5549__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__44657 = state_44607;
state_44607 = G__44657;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_44607){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_44607);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_44636 = f__5563__auto__.call(null);(statearr_44636[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto___44637);
return statearr_44636;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5564__auto__);
}));
return null;
};
var dorun_async = function (ch,var_args){
var p__44518 = null;if (arguments.length > 1) {
  p__44518 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return dorun_async__delegate.call(this,ch,p__44518);};
dorun_async.cljs$lang$maxFixedArity = 1;
dorun_async.cljs$lang$applyTo = (function (arglist__44658){
var ch = cljs.core.first(arglist__44658);
var p__44518 = cljs.core.rest(arglist__44658);
return dorun_async__delegate(ch,p__44518);
});
dorun_async.cljs$core$IFn$_invoke$arity$variadic = dorun_async__delegate;
return dorun_async;
})()
;
