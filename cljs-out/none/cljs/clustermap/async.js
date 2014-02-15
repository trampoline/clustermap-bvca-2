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
map_async.cljs$lang$applyTo = (function (arglist__11500){
var f = cljs.core.first(arglist__11500);
var colls = cljs.core.rest(arglist__11500);
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
var dorun_async__delegate = function (ch,p__11501){var map__11561 = p__11501;var map__11561__$1 = ((cljs.core.seq_QMARK_.call(null,map__11561))?cljs.core.apply.call(null,cljs.core.hash_map,map__11561):map__11561);var delay = cljs.core.get.call(null,map__11561__$1,new cljs.core.Keyword(null,"delay","delay",1109372149));var log = cljs.core.get.call(null,map__11561__$1,new cljs.core.Keyword(null,"log","log",1014011574));var c__5521__auto___11620 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_11590){var state_val_11591 = (state_11590[1]);if((state_val_11591 === 1))
{var state_11590__$1 = state_11590;var statearr_11592_11621 = state_11590__$1;(statearr_11592_11621[2] = null);
(statearr_11592_11621[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11591 === 2))
{var state_11590__$1 = state_11590;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11590__$1,4,ch);
} else
{if((state_val_11591 === 3))
{var inst_11588 = (state_11590[2]);var state_11590__$1 = state_11590;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11590__$1,inst_11588);
} else
{if((state_val_11591 === 4))
{var inst_11564 = (state_11590[7]);var inst_11564__$1 = (state_11590[2]);var state_11590__$1 = (function (){var statearr_11593 = state_11590;(statearr_11593[7] = inst_11564__$1);
return statearr_11593;
})();if(cljs.core.truth_(inst_11564__$1))
{var statearr_11594_11622 = state_11590__$1;(statearr_11594_11622[1] = 5);
} else
{var statearr_11595_11623 = state_11590__$1;(statearr_11595_11623[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11591 === 5))
{var state_11590__$1 = state_11590;if(cljs.core.truth_(delay))
{var statearr_11596_11624 = state_11590__$1;(statearr_11596_11624[1] = 8);
} else
{var statearr_11597_11625 = state_11590__$1;(statearr_11597_11625[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11591 === 6))
{var state_11590__$1 = state_11590;var statearr_11598_11626 = state_11590__$1;(statearr_11598_11626[2] = null);
(statearr_11598_11626[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11591 === 7))
{var inst_11581 = (state_11590[2]);var state_11590__$1 = state_11590;if(cljs.core.truth_(inst_11581))
{var statearr_11599_11627 = state_11590__$1;(statearr_11599_11627[1] = 15);
} else
{var statearr_11600_11628 = state_11590__$1;(statearr_11600_11628[1] = 16);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11591 === 8))
{var inst_11567 = cljs.core.async.timeout.call(null,delay);var state_11590__$1 = state_11590;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11590__$1,11,inst_11567);
} else
{if((state_val_11591 === 9))
{var state_11590__$1 = state_11590;var statearr_11601_11629 = state_11590__$1;(statearr_11601_11629[2] = null);
(statearr_11601_11629[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11591 === 10))
{var inst_11572 = (state_11590[2]);var state_11590__$1 = (function (){var statearr_11602 = state_11590;(statearr_11602[8] = inst_11572);
return statearr_11602;
})();if(cljs.core.truth_(log))
{var statearr_11603_11630 = state_11590__$1;(statearr_11603_11630[1] = 12);
} else
{var statearr_11604_11631 = state_11590__$1;(statearr_11604_11631[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11591 === 11))
{var inst_11569 = (state_11590[2]);var state_11590__$1 = state_11590;var statearr_11605_11632 = state_11590__$1;(statearr_11605_11632[2] = inst_11569);
(statearr_11605_11632[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11591 === 12))
{var inst_11564 = (state_11590[7]);var inst_11574 = cljs.core.clj__GT_js.call(null,inst_11564);var inst_11575 = console.log(inst_11574);var state_11590__$1 = state_11590;var statearr_11606_11633 = state_11590__$1;(statearr_11606_11633[2] = inst_11575);
(statearr_11606_11633[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11591 === 13))
{var state_11590__$1 = state_11590;var statearr_11607_11634 = state_11590__$1;(statearr_11607_11634[2] = null);
(statearr_11607_11634[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11591 === 14))
{var inst_11564 = (state_11590[7]);var inst_11578 = (state_11590[2]);var state_11590__$1 = (function (){var statearr_11608 = state_11590;(statearr_11608[9] = inst_11578);
return statearr_11608;
})();var statearr_11609_11635 = state_11590__$1;(statearr_11609_11635[2] = inst_11564);
(statearr_11609_11635[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11591 === 15))
{var state_11590__$1 = state_11590;var statearr_11610_11636 = state_11590__$1;(statearr_11610_11636[2] = null);
(statearr_11610_11636[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11591 === 16))
{var state_11590__$1 = state_11590;var statearr_11611_11637 = state_11590__$1;(statearr_11611_11637[2] = null);
(statearr_11611_11637[1] = 17);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11591 === 17))
{var inst_11586 = (state_11590[2]);var state_11590__$1 = state_11590;var statearr_11612_11638 = state_11590__$1;(statearr_11612_11638[2] = inst_11586);
(statearr_11612_11638[1] = 3);
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
var state_machine__5507__auto____0 = (function (){var statearr_11616 = [null,null,null,null,null,null,null,null,null,null];(statearr_11616[0] = state_machine__5507__auto__);
(statearr_11616[1] = 1);
return statearr_11616;
});
var state_machine__5507__auto____1 = (function (state_11590){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_11590);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e11617){if((e11617 instanceof Object))
{var ex__5510__auto__ = e11617;var statearr_11618_11639 = state_11590;(statearr_11618_11639[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11590);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11617;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11640 = state_11590;
state_11590 = G__11640;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_11590){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_11590);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_11619 = f__5522__auto__.call(null);(statearr_11619[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___11620);
return statearr_11619;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5523__auto__);
}));
return null;
};
var dorun_async = function (ch,var_args){
var p__11501 = null;if (arguments.length > 1) {
  p__11501 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return dorun_async__delegate.call(this,ch,p__11501);};
dorun_async.cljs$lang$maxFixedArity = 1;
dorun_async.cljs$lang$applyTo = (function (arglist__11641){
var ch = cljs.core.first(arglist__11641);
var p__11501 = cljs.core.rest(arglist__11641);
return dorun_async__delegate(ch,p__11501);
});
dorun_async.cljs$core$IFn$_invoke$arity$variadic = dorun_async__delegate;
return dorun_async;
})()
;

//# sourceMappingURL=async.js.map