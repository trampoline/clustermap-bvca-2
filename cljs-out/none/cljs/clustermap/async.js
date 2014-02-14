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
map_async.cljs$lang$applyTo = (function (arglist__11498){
var f = cljs.core.first(arglist__11498);
var colls = cljs.core.rest(arglist__11498);
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
var dorun_async__delegate = function (ch,p__11499){var map__11559 = p__11499;var map__11559__$1 = ((cljs.core.seq_QMARK_.call(null,map__11559))?cljs.core.apply.call(null,cljs.core.hash_map,map__11559):map__11559);var delay = cljs.core.get.call(null,map__11559__$1,new cljs.core.Keyword(null,"delay","delay",1109372149));var log = cljs.core.get.call(null,map__11559__$1,new cljs.core.Keyword(null,"log","log",1014011574));var c__5521__auto___11618 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_11588){var state_val_11589 = (state_11588[1]);if((state_val_11589 === 1))
{var state_11588__$1 = state_11588;var statearr_11590_11619 = state_11588__$1;(statearr_11590_11619[2] = null);
(statearr_11590_11619[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11589 === 2))
{var state_11588__$1 = state_11588;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11588__$1,4,ch);
} else
{if((state_val_11589 === 3))
{var inst_11586 = (state_11588[2]);var state_11588__$1 = state_11588;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11588__$1,inst_11586);
} else
{if((state_val_11589 === 4))
{var inst_11562 = (state_11588[7]);var inst_11562__$1 = (state_11588[2]);var state_11588__$1 = (function (){var statearr_11591 = state_11588;(statearr_11591[7] = inst_11562__$1);
return statearr_11591;
})();if(cljs.core.truth_(inst_11562__$1))
{var statearr_11592_11620 = state_11588__$1;(statearr_11592_11620[1] = 5);
} else
{var statearr_11593_11621 = state_11588__$1;(statearr_11593_11621[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11589 === 5))
{var state_11588__$1 = state_11588;if(cljs.core.truth_(delay))
{var statearr_11594_11622 = state_11588__$1;(statearr_11594_11622[1] = 8);
} else
{var statearr_11595_11623 = state_11588__$1;(statearr_11595_11623[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11589 === 6))
{var state_11588__$1 = state_11588;var statearr_11596_11624 = state_11588__$1;(statearr_11596_11624[2] = null);
(statearr_11596_11624[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11589 === 7))
{var inst_11579 = (state_11588[2]);var state_11588__$1 = state_11588;if(cljs.core.truth_(inst_11579))
{var statearr_11597_11625 = state_11588__$1;(statearr_11597_11625[1] = 15);
} else
{var statearr_11598_11626 = state_11588__$1;(statearr_11598_11626[1] = 16);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11589 === 8))
{var inst_11565 = cljs.core.async.timeout.call(null,delay);var state_11588__$1 = state_11588;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11588__$1,11,inst_11565);
} else
{if((state_val_11589 === 9))
{var state_11588__$1 = state_11588;var statearr_11599_11627 = state_11588__$1;(statearr_11599_11627[2] = null);
(statearr_11599_11627[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11589 === 10))
{var inst_11570 = (state_11588[2]);var state_11588__$1 = (function (){var statearr_11600 = state_11588;(statearr_11600[8] = inst_11570);
return statearr_11600;
})();if(cljs.core.truth_(log))
{var statearr_11601_11628 = state_11588__$1;(statearr_11601_11628[1] = 12);
} else
{var statearr_11602_11629 = state_11588__$1;(statearr_11602_11629[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11589 === 11))
{var inst_11567 = (state_11588[2]);var state_11588__$1 = state_11588;var statearr_11603_11630 = state_11588__$1;(statearr_11603_11630[2] = inst_11567);
(statearr_11603_11630[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11589 === 12))
{var inst_11562 = (state_11588[7]);var inst_11572 = cljs.core.clj__GT_js.call(null,inst_11562);var inst_11573 = console.log(inst_11572);var state_11588__$1 = state_11588;var statearr_11604_11631 = state_11588__$1;(statearr_11604_11631[2] = inst_11573);
(statearr_11604_11631[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11589 === 13))
{var state_11588__$1 = state_11588;var statearr_11605_11632 = state_11588__$1;(statearr_11605_11632[2] = null);
(statearr_11605_11632[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11589 === 14))
{var inst_11562 = (state_11588[7]);var inst_11576 = (state_11588[2]);var state_11588__$1 = (function (){var statearr_11606 = state_11588;(statearr_11606[9] = inst_11576);
return statearr_11606;
})();var statearr_11607_11633 = state_11588__$1;(statearr_11607_11633[2] = inst_11562);
(statearr_11607_11633[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11589 === 15))
{var state_11588__$1 = state_11588;var statearr_11608_11634 = state_11588__$1;(statearr_11608_11634[2] = null);
(statearr_11608_11634[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11589 === 16))
{var state_11588__$1 = state_11588;var statearr_11609_11635 = state_11588__$1;(statearr_11609_11635[2] = null);
(statearr_11609_11635[1] = 17);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11589 === 17))
{var inst_11584 = (state_11588[2]);var state_11588__$1 = state_11588;var statearr_11610_11636 = state_11588__$1;(statearr_11610_11636[2] = inst_11584);
(statearr_11610_11636[1] = 3);
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
var state_machine__5507__auto____0 = (function (){var statearr_11614 = [null,null,null,null,null,null,null,null,null,null];(statearr_11614[0] = state_machine__5507__auto__);
(statearr_11614[1] = 1);
return statearr_11614;
});
var state_machine__5507__auto____1 = (function (state_11588){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_11588);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e11615){if((e11615 instanceof Object))
{var ex__5510__auto__ = e11615;var statearr_11616_11637 = state_11588;(statearr_11616_11637[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11588);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11615;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11638 = state_11588;
state_11588 = G__11638;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_11588){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_11588);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_11617 = f__5522__auto__.call(null);(statearr_11617[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___11618);
return statearr_11617;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5523__auto__);
}));
return null;
};
var dorun_async = function (ch,var_args){
var p__11499 = null;if (arguments.length > 1) {
  p__11499 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return dorun_async__delegate.call(this,ch,p__11499);};
dorun_async.cljs$lang$maxFixedArity = 1;
dorun_async.cljs$lang$applyTo = (function (arglist__11639){
var ch = cljs.core.first(arglist__11639);
var p__11499 = cljs.core.rest(arglist__11639);
return dorun_async__delegate(ch,p__11499);
});
dorun_async.cljs$core$IFn$_invoke$arity$variadic = dorun_async__delegate;
return dorun_async;
})()
;

//# sourceMappingURL=async.js.map