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
map_async.cljs$lang$applyTo = (function (arglist__11519){
var f = cljs.core.first(arglist__11519);
var colls = cljs.core.rest(arglist__11519);
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
var dorun_async__delegate = function (ch,p__11520){var map__11580 = p__11520;var map__11580__$1 = ((cljs.core.seq_QMARK_.call(null,map__11580))?cljs.core.apply.call(null,cljs.core.hash_map,map__11580):map__11580);var delay = cljs.core.get.call(null,map__11580__$1,new cljs.core.Keyword(null,"delay","delay",1109372149));var log = cljs.core.get.call(null,map__11580__$1,new cljs.core.Keyword(null,"log","log",1014011574));var c__5521__auto___11639 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_11609){var state_val_11610 = (state_11609[1]);if((state_val_11610 === 1))
{var state_11609__$1 = state_11609;var statearr_11611_11640 = state_11609__$1;(statearr_11611_11640[2] = null);
(statearr_11611_11640[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11610 === 2))
{var state_11609__$1 = state_11609;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11609__$1,4,ch);
} else
{if((state_val_11610 === 3))
{var inst_11607 = (state_11609[2]);var state_11609__$1 = state_11609;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11609__$1,inst_11607);
} else
{if((state_val_11610 === 4))
{var inst_11583 = (state_11609[7]);var inst_11583__$1 = (state_11609[2]);var state_11609__$1 = (function (){var statearr_11612 = state_11609;(statearr_11612[7] = inst_11583__$1);
return statearr_11612;
})();if(cljs.core.truth_(inst_11583__$1))
{var statearr_11613_11641 = state_11609__$1;(statearr_11613_11641[1] = 5);
} else
{var statearr_11614_11642 = state_11609__$1;(statearr_11614_11642[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11610 === 5))
{var state_11609__$1 = state_11609;if(cljs.core.truth_(delay))
{var statearr_11615_11643 = state_11609__$1;(statearr_11615_11643[1] = 8);
} else
{var statearr_11616_11644 = state_11609__$1;(statearr_11616_11644[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11610 === 6))
{var state_11609__$1 = state_11609;var statearr_11617_11645 = state_11609__$1;(statearr_11617_11645[2] = null);
(statearr_11617_11645[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11610 === 7))
{var inst_11600 = (state_11609[2]);var state_11609__$1 = state_11609;if(cljs.core.truth_(inst_11600))
{var statearr_11618_11646 = state_11609__$1;(statearr_11618_11646[1] = 15);
} else
{var statearr_11619_11647 = state_11609__$1;(statearr_11619_11647[1] = 16);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11610 === 8))
{var inst_11586 = cljs.core.async.timeout.call(null,delay);var state_11609__$1 = state_11609;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11609__$1,11,inst_11586);
} else
{if((state_val_11610 === 9))
{var state_11609__$1 = state_11609;var statearr_11620_11648 = state_11609__$1;(statearr_11620_11648[2] = null);
(statearr_11620_11648[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11610 === 10))
{var inst_11591 = (state_11609[2]);var state_11609__$1 = (function (){var statearr_11621 = state_11609;(statearr_11621[8] = inst_11591);
return statearr_11621;
})();if(cljs.core.truth_(log))
{var statearr_11622_11649 = state_11609__$1;(statearr_11622_11649[1] = 12);
} else
{var statearr_11623_11650 = state_11609__$1;(statearr_11623_11650[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11610 === 11))
{var inst_11588 = (state_11609[2]);var state_11609__$1 = state_11609;var statearr_11624_11651 = state_11609__$1;(statearr_11624_11651[2] = inst_11588);
(statearr_11624_11651[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11610 === 12))
{var inst_11583 = (state_11609[7]);var inst_11593 = cljs.core.clj__GT_js.call(null,inst_11583);var inst_11594 = console.log(inst_11593);var state_11609__$1 = state_11609;var statearr_11625_11652 = state_11609__$1;(statearr_11625_11652[2] = inst_11594);
(statearr_11625_11652[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11610 === 13))
{var state_11609__$1 = state_11609;var statearr_11626_11653 = state_11609__$1;(statearr_11626_11653[2] = null);
(statearr_11626_11653[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11610 === 14))
{var inst_11583 = (state_11609[7]);var inst_11597 = (state_11609[2]);var state_11609__$1 = (function (){var statearr_11627 = state_11609;(statearr_11627[9] = inst_11597);
return statearr_11627;
})();var statearr_11628_11654 = state_11609__$1;(statearr_11628_11654[2] = inst_11583);
(statearr_11628_11654[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11610 === 15))
{var state_11609__$1 = state_11609;var statearr_11629_11655 = state_11609__$1;(statearr_11629_11655[2] = null);
(statearr_11629_11655[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11610 === 16))
{var state_11609__$1 = state_11609;var statearr_11630_11656 = state_11609__$1;(statearr_11630_11656[2] = null);
(statearr_11630_11656[1] = 17);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11610 === 17))
{var inst_11605 = (state_11609[2]);var state_11609__$1 = state_11609;var statearr_11631_11657 = state_11609__$1;(statearr_11631_11657[2] = inst_11605);
(statearr_11631_11657[1] = 3);
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
var state_machine__5507__auto____0 = (function (){var statearr_11635 = [null,null,null,null,null,null,null,null,null,null];(statearr_11635[0] = state_machine__5507__auto__);
(statearr_11635[1] = 1);
return statearr_11635;
});
var state_machine__5507__auto____1 = (function (state_11609){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_11609);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e11636){if((e11636 instanceof Object))
{var ex__5510__auto__ = e11636;var statearr_11637_11658 = state_11609;(statearr_11637_11658[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11609);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11636;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11659 = state_11609;
state_11609 = G__11659;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_11609){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_11609);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_11638 = f__5522__auto__.call(null);(statearr_11638[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___11639);
return statearr_11638;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5523__auto__);
}));
return null;
};
var dorun_async = function (ch,var_args){
var p__11520 = null;if (arguments.length > 1) {
  p__11520 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return dorun_async__delegate.call(this,ch,p__11520);};
dorun_async.cljs$lang$maxFixedArity = 1;
dorun_async.cljs$lang$applyTo = (function (arglist__11660){
var ch = cljs.core.first(arglist__11660);
var p__11520 = cljs.core.rest(arglist__11660);
return dorun_async__delegate(ch,p__11520);
});
dorun_async.cljs$core$IFn$_invoke$arity$variadic = dorun_async__delegate;
return dorun_async;
})()
;

//# sourceMappingURL=async.js.map