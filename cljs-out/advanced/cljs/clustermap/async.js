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
var map_async__delegate = function (f,colls){var coll_chs = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (coll){var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2(ch,coll);
return ch;
}),colls);return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2(f,coll_chs);
};
var map_async = function (f,var_args){
var colls = null;if (arguments.length > 1) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return map_async__delegate.call(this,f,colls);};
map_async.cljs$lang$maxFixedArity = 1;
map_async.cljs$lang$applyTo = (function (arglist__33588){
var f = cljs.core.first(arglist__33588);
var colls = cljs.core.rest(arglist__33588);
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
var dorun_async__delegate = function (ch,p__33589){var map__33649 = p__33589;var map__33649__$1 = ((cljs.core.seq_QMARK_(map__33649))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33649):map__33649);var delay = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33649__$1,cljs.core.constant$keyword$796);var log = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33649__$1,cljs.core.constant$keyword$797);var c__5562__auto___33708 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_33678){var state_val_33679 = (state_33678[1]);if((state_val_33679 === 1))
{var state_33678__$1 = state_33678;var statearr_33680_33709 = state_33678__$1;(statearr_33680_33709[2] = null);
(statearr_33680_33709[1] = 2);
return cljs.core.constant$keyword$555;
} else
{if((state_val_33679 === 2))
{var state_33678__$1 = state_33678;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33678__$1,4,ch);
} else
{if((state_val_33679 === 3))
{var inst_33676 = (state_33678[2]);var state_33678__$1 = state_33678;return cljs.core.async.impl.ioc_helpers.return_chan(state_33678__$1,inst_33676);
} else
{if((state_val_33679 === 4))
{var inst_33652 = (state_33678[7]);var inst_33652__$1 = (state_33678[2]);var state_33678__$1 = (function (){var statearr_33681 = state_33678;(statearr_33681[7] = inst_33652__$1);
return statearr_33681;
})();if(cljs.core.truth_(inst_33652__$1))
{var statearr_33682_33710 = state_33678__$1;(statearr_33682_33710[1] = 5);
} else
{var statearr_33683_33711 = state_33678__$1;(statearr_33683_33711[1] = 6);
}
return cljs.core.constant$keyword$555;
} else
{if((state_val_33679 === 5))
{var state_33678__$1 = state_33678;if(cljs.core.truth_(delay))
{var statearr_33684_33712 = state_33678__$1;(statearr_33684_33712[1] = 8);
} else
{var statearr_33685_33713 = state_33678__$1;(statearr_33685_33713[1] = 9);
}
return cljs.core.constant$keyword$555;
} else
{if((state_val_33679 === 6))
{var state_33678__$1 = state_33678;var statearr_33686_33714 = state_33678__$1;(statearr_33686_33714[2] = null);
(statearr_33686_33714[1] = 7);
return cljs.core.constant$keyword$555;
} else
{if((state_val_33679 === 7))
{var inst_33669 = (state_33678[2]);var state_33678__$1 = state_33678;if(cljs.core.truth_(inst_33669))
{var statearr_33687_33715 = state_33678__$1;(statearr_33687_33715[1] = 15);
} else
{var statearr_33688_33716 = state_33678__$1;(statearr_33688_33716[1] = 16);
}
return cljs.core.constant$keyword$555;
} else
{if((state_val_33679 === 8))
{var inst_33655 = cljs.core.async.timeout(delay);var state_33678__$1 = state_33678;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33678__$1,11,inst_33655);
} else
{if((state_val_33679 === 9))
{var state_33678__$1 = state_33678;var statearr_33689_33717 = state_33678__$1;(statearr_33689_33717[2] = null);
(statearr_33689_33717[1] = 10);
return cljs.core.constant$keyword$555;
} else
{if((state_val_33679 === 10))
{var inst_33660 = (state_33678[2]);var state_33678__$1 = (function (){var statearr_33690 = state_33678;(statearr_33690[8] = inst_33660);
return statearr_33690;
})();if(cljs.core.truth_(log))
{var statearr_33691_33718 = state_33678__$1;(statearr_33691_33718[1] = 12);
} else
{var statearr_33692_33719 = state_33678__$1;(statearr_33692_33719[1] = 13);
}
return cljs.core.constant$keyword$555;
} else
{if((state_val_33679 === 11))
{var inst_33657 = (state_33678[2]);var state_33678__$1 = state_33678;var statearr_33693_33720 = state_33678__$1;(statearr_33693_33720[2] = inst_33657);
(statearr_33693_33720[1] = 10);
return cljs.core.constant$keyword$555;
} else
{if((state_val_33679 === 12))
{var inst_33652 = (state_33678[7]);var inst_33662 = cljs.core.clj__GT_js(inst_33652);var inst_33663 = console.log(inst_33662);var state_33678__$1 = state_33678;var statearr_33694_33721 = state_33678__$1;(statearr_33694_33721[2] = inst_33663);
(statearr_33694_33721[1] = 14);
return cljs.core.constant$keyword$555;
} else
{if((state_val_33679 === 13))
{var state_33678__$1 = state_33678;var statearr_33695_33722 = state_33678__$1;(statearr_33695_33722[2] = null);
(statearr_33695_33722[1] = 14);
return cljs.core.constant$keyword$555;
} else
{if((state_val_33679 === 14))
{var inst_33652 = (state_33678[7]);var inst_33666 = (state_33678[2]);var state_33678__$1 = (function (){var statearr_33696 = state_33678;(statearr_33696[9] = inst_33666);
return statearr_33696;
})();var statearr_33697_33723 = state_33678__$1;(statearr_33697_33723[2] = inst_33652);
(statearr_33697_33723[1] = 7);
return cljs.core.constant$keyword$555;
} else
{if((state_val_33679 === 15))
{var state_33678__$1 = state_33678;var statearr_33698_33724 = state_33678__$1;(statearr_33698_33724[2] = null);
(statearr_33698_33724[1] = 2);
return cljs.core.constant$keyword$555;
} else
{if((state_val_33679 === 16))
{var state_33678__$1 = state_33678;var statearr_33699_33725 = state_33678__$1;(statearr_33699_33725[2] = null);
(statearr_33699_33725[1] = 17);
return cljs.core.constant$keyword$555;
} else
{if((state_val_33679 === 17))
{var inst_33674 = (state_33678[2]);var state_33678__$1 = state_33678;var statearr_33700_33726 = state_33678__$1;(statearr_33700_33726[2] = inst_33674);
(statearr_33700_33726[1] = 3);
return cljs.core.constant$keyword$555;
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
var state_machine__5548__auto____0 = (function (){var statearr_33704 = [null,null,null,null,null,null,null,null,null,null];(statearr_33704[0] = state_machine__5548__auto__);
(statearr_33704[1] = 1);
return statearr_33704;
});
var state_machine__5548__auto____1 = (function (state_33678){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__(state_33678);if(cljs.core.keyword_identical_QMARK_(result__5550__auto__,cljs.core.constant$keyword$555))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e33705){if((e33705 instanceof Object))
{var ex__5551__auto__ = e33705;var statearr_33706_33727 = state_33678;(statearr_33706_33727[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_33678);
return cljs.core.constant$keyword$555;
} else
{if(cljs.core.constant$keyword$544)
{throw e33705;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5549__auto__,cljs.core.constant$keyword$555))
{{
var G__33728 = state_33678;
state_33678 = G__33728;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_33678){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_33678);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_33707 = (f__5563__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5563__auto__.cljs$core$IFn$_invoke$arity$0() : f__5563__auto__.call(null));(statearr_33707[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto___33708);
return statearr_33707;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5564__auto__);
}));
return null;
};
var dorun_async = function (ch,var_args){
var p__33589 = null;if (arguments.length > 1) {
  p__33589 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return dorun_async__delegate.call(this,ch,p__33589);};
dorun_async.cljs$lang$maxFixedArity = 1;
dorun_async.cljs$lang$applyTo = (function (arglist__33729){
var ch = cljs.core.first(arglist__33729);
var p__33589 = cljs.core.rest(arglist__33729);
return dorun_async__delegate(ch,p__33589);
});
dorun_async.cljs$core$IFn$_invoke$arity$variadic = dorun_async__delegate;
return dorun_async;
})()
;
