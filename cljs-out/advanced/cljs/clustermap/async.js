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
var map_async__delegate = function (f,colls){var coll_chs = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (coll){var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2(ch,coll);
return ch;
}),colls);return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2(f,coll_chs);
};
var map_async = function (f,var_args){
var colls = null;if (arguments.length > 1) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return map_async__delegate.call(this,f,colls);};
map_async.cljs$lang$maxFixedArity = 1;
map_async.cljs$lang$applyTo = (function (arglist__22597){
var f = cljs.core.first(arglist__22597);
var colls = cljs.core.rest(arglist__22597);
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
var dorun_async__delegate = function (ch,p__22598){var map__22658 = p__22598;var map__22658__$1 = ((cljs.core.seq_QMARK_(map__22658))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22658):map__22658);var delay = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22658__$1,cljs.core.constant$keyword$468);var log = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22658__$1,cljs.core.constant$keyword$500);var c__5521__auto___22717 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_22687){var state_val_22688 = (state_22687[1]);if((state_val_22688 === 1))
{var state_22687__$1 = state_22687;var statearr_22689_22718 = state_22687__$1;(statearr_22689_22718[2] = null);
(statearr_22689_22718[1] = 2);
return cljs.core.constant$keyword$272;
} else
{if((state_val_22688 === 2))
{var state_22687__$1 = state_22687;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_22687__$1,4,ch);
} else
{if((state_val_22688 === 3))
{var inst_22685 = (state_22687[2]);var state_22687__$1 = state_22687;return cljs.core.async.impl.ioc_helpers.return_chan(state_22687__$1,inst_22685);
} else
{if((state_val_22688 === 4))
{var inst_22661 = (state_22687[7]);var inst_22661__$1 = (state_22687[2]);var state_22687__$1 = (function (){var statearr_22690 = state_22687;(statearr_22690[7] = inst_22661__$1);
return statearr_22690;
})();if(cljs.core.truth_(inst_22661__$1))
{var statearr_22691_22719 = state_22687__$1;(statearr_22691_22719[1] = 5);
} else
{var statearr_22692_22720 = state_22687__$1;(statearr_22692_22720[1] = 6);
}
return cljs.core.constant$keyword$272;
} else
{if((state_val_22688 === 5))
{var state_22687__$1 = state_22687;if(cljs.core.truth_(delay))
{var statearr_22693_22721 = state_22687__$1;(statearr_22693_22721[1] = 8);
} else
{var statearr_22694_22722 = state_22687__$1;(statearr_22694_22722[1] = 9);
}
return cljs.core.constant$keyword$272;
} else
{if((state_val_22688 === 6))
{var state_22687__$1 = state_22687;var statearr_22695_22723 = state_22687__$1;(statearr_22695_22723[2] = null);
(statearr_22695_22723[1] = 7);
return cljs.core.constant$keyword$272;
} else
{if((state_val_22688 === 7))
{var inst_22678 = (state_22687[2]);var state_22687__$1 = state_22687;if(cljs.core.truth_(inst_22678))
{var statearr_22696_22724 = state_22687__$1;(statearr_22696_22724[1] = 15);
} else
{var statearr_22697_22725 = state_22687__$1;(statearr_22697_22725[1] = 16);
}
return cljs.core.constant$keyword$272;
} else
{if((state_val_22688 === 8))
{var inst_22664 = cljs.core.async.timeout(delay);var state_22687__$1 = state_22687;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_22687__$1,11,inst_22664);
} else
{if((state_val_22688 === 9))
{var state_22687__$1 = state_22687;var statearr_22698_22726 = state_22687__$1;(statearr_22698_22726[2] = null);
(statearr_22698_22726[1] = 10);
return cljs.core.constant$keyword$272;
} else
{if((state_val_22688 === 10))
{var inst_22669 = (state_22687[2]);var state_22687__$1 = (function (){var statearr_22699 = state_22687;(statearr_22699[8] = inst_22669);
return statearr_22699;
})();if(cljs.core.truth_(log))
{var statearr_22700_22727 = state_22687__$1;(statearr_22700_22727[1] = 12);
} else
{var statearr_22701_22728 = state_22687__$1;(statearr_22701_22728[1] = 13);
}
return cljs.core.constant$keyword$272;
} else
{if((state_val_22688 === 11))
{var inst_22666 = (state_22687[2]);var state_22687__$1 = state_22687;var statearr_22702_22729 = state_22687__$1;(statearr_22702_22729[2] = inst_22666);
(statearr_22702_22729[1] = 10);
return cljs.core.constant$keyword$272;
} else
{if((state_val_22688 === 12))
{var inst_22661 = (state_22687[7]);var inst_22671 = cljs.core.clj__GT_js(inst_22661);var inst_22672 = console.log(inst_22671);var state_22687__$1 = state_22687;var statearr_22703_22730 = state_22687__$1;(statearr_22703_22730[2] = inst_22672);
(statearr_22703_22730[1] = 14);
return cljs.core.constant$keyword$272;
} else
{if((state_val_22688 === 13))
{var state_22687__$1 = state_22687;var statearr_22704_22731 = state_22687__$1;(statearr_22704_22731[2] = null);
(statearr_22704_22731[1] = 14);
return cljs.core.constant$keyword$272;
} else
{if((state_val_22688 === 14))
{var inst_22661 = (state_22687[7]);var inst_22675 = (state_22687[2]);var state_22687__$1 = (function (){var statearr_22705 = state_22687;(statearr_22705[9] = inst_22675);
return statearr_22705;
})();var statearr_22706_22732 = state_22687__$1;(statearr_22706_22732[2] = inst_22661);
(statearr_22706_22732[1] = 7);
return cljs.core.constant$keyword$272;
} else
{if((state_val_22688 === 15))
{var state_22687__$1 = state_22687;var statearr_22707_22733 = state_22687__$1;(statearr_22707_22733[2] = null);
(statearr_22707_22733[1] = 2);
return cljs.core.constant$keyword$272;
} else
{if((state_val_22688 === 16))
{var state_22687__$1 = state_22687;var statearr_22708_22734 = state_22687__$1;(statearr_22708_22734[2] = null);
(statearr_22708_22734[1] = 17);
return cljs.core.constant$keyword$272;
} else
{if((state_val_22688 === 17))
{var inst_22683 = (state_22687[2]);var state_22687__$1 = state_22687;var statearr_22709_22735 = state_22687__$1;(statearr_22709_22735[2] = inst_22683);
(statearr_22709_22735[1] = 3);
return cljs.core.constant$keyword$272;
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
var state_machine__5507__auto____0 = (function (){var statearr_22713 = [null,null,null,null,null,null,null,null,null,null];(statearr_22713[0] = state_machine__5507__auto__);
(statearr_22713[1] = 1);
return statearr_22713;
});
var state_machine__5507__auto____1 = (function (state_22687){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_22687);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$272))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e22714){if((e22714 instanceof Object))
{var ex__5510__auto__ = e22714;var statearr_22715_22736 = state_22687;(statearr_22715_22736[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_22687);
return cljs.core.constant$keyword$272;
} else
{if(cljs.core.constant$keyword$261)
{throw e22714;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$272))
{{
var G__22737 = state_22687;
state_22687 = G__22737;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_22687){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_22687);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_22716 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_22716[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___22717);
return statearr_22716;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5523__auto__);
}));
return null;
};
var dorun_async = function (ch,var_args){
var p__22598 = null;if (arguments.length > 1) {
  p__22598 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return dorun_async__delegate.call(this,ch,p__22598);};
dorun_async.cljs$lang$maxFixedArity = 1;
dorun_async.cljs$lang$applyTo = (function (arglist__22738){
var ch = cljs.core.first(arglist__22738);
var p__22598 = cljs.core.rest(arglist__22738);
return dorun_async__delegate(ch,p__22598);
});
dorun_async.cljs$core$IFn$_invoke$arity$variadic = dorun_async__delegate;
return dorun_async;
})()
;
