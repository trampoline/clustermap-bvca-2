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
map_async.cljs$lang$applyTo = (function (arglist__20556){
var f = cljs.core.first(arglist__20556);
var colls = cljs.core.rest(arglist__20556);
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
var dorun_async__delegate = function (ch,p__20557){var map__20617 = p__20557;var map__20617__$1 = ((cljs.core.seq_QMARK_(map__20617))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20617):map__20617);var delay = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20617__$1,cljs.core.constant$keyword$255);var log = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20617__$1,cljs.core.constant$keyword$256);var c__5521__auto___20676 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_20646){var state_val_20647 = (state_20646[1]);if((state_val_20647 === 1))
{var state_20646__$1 = state_20646;var statearr_20648_20677 = state_20646__$1;(statearr_20648_20677[2] = null);
(statearr_20648_20677[1] = 2);
return cljs.core.constant$keyword$159;
} else
{if((state_val_20647 === 2))
{var state_20646__$1 = state_20646;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20646__$1,4,ch);
} else
{if((state_val_20647 === 3))
{var inst_20644 = (state_20646[2]);var state_20646__$1 = state_20646;return cljs.core.async.impl.ioc_helpers.return_chan(state_20646__$1,inst_20644);
} else
{if((state_val_20647 === 4))
{var inst_20620 = (state_20646[7]);var inst_20620__$1 = (state_20646[2]);var state_20646__$1 = (function (){var statearr_20649 = state_20646;(statearr_20649[7] = inst_20620__$1);
return statearr_20649;
})();if(cljs.core.truth_(inst_20620__$1))
{var statearr_20650_20678 = state_20646__$1;(statearr_20650_20678[1] = 5);
} else
{var statearr_20651_20679 = state_20646__$1;(statearr_20651_20679[1] = 6);
}
return cljs.core.constant$keyword$159;
} else
{if((state_val_20647 === 5))
{var state_20646__$1 = state_20646;if(cljs.core.truth_(delay))
{var statearr_20652_20680 = state_20646__$1;(statearr_20652_20680[1] = 8);
} else
{var statearr_20653_20681 = state_20646__$1;(statearr_20653_20681[1] = 9);
}
return cljs.core.constant$keyword$159;
} else
{if((state_val_20647 === 6))
{var state_20646__$1 = state_20646;var statearr_20654_20682 = state_20646__$1;(statearr_20654_20682[2] = null);
(statearr_20654_20682[1] = 7);
return cljs.core.constant$keyword$159;
} else
{if((state_val_20647 === 7))
{var inst_20637 = (state_20646[2]);var state_20646__$1 = state_20646;if(cljs.core.truth_(inst_20637))
{var statearr_20655_20683 = state_20646__$1;(statearr_20655_20683[1] = 15);
} else
{var statearr_20656_20684 = state_20646__$1;(statearr_20656_20684[1] = 16);
}
return cljs.core.constant$keyword$159;
} else
{if((state_val_20647 === 8))
{var inst_20623 = cljs.core.async.timeout(delay);var state_20646__$1 = state_20646;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20646__$1,11,inst_20623);
} else
{if((state_val_20647 === 9))
{var state_20646__$1 = state_20646;var statearr_20657_20685 = state_20646__$1;(statearr_20657_20685[2] = null);
(statearr_20657_20685[1] = 10);
return cljs.core.constant$keyword$159;
} else
{if((state_val_20647 === 10))
{var inst_20628 = (state_20646[2]);var state_20646__$1 = (function (){var statearr_20658 = state_20646;(statearr_20658[8] = inst_20628);
return statearr_20658;
})();if(cljs.core.truth_(log))
{var statearr_20659_20686 = state_20646__$1;(statearr_20659_20686[1] = 12);
} else
{var statearr_20660_20687 = state_20646__$1;(statearr_20660_20687[1] = 13);
}
return cljs.core.constant$keyword$159;
} else
{if((state_val_20647 === 11))
{var inst_20625 = (state_20646[2]);var state_20646__$1 = state_20646;var statearr_20661_20688 = state_20646__$1;(statearr_20661_20688[2] = inst_20625);
(statearr_20661_20688[1] = 10);
return cljs.core.constant$keyword$159;
} else
{if((state_val_20647 === 12))
{var inst_20620 = (state_20646[7]);var inst_20630 = cljs.core.clj__GT_js(inst_20620);var inst_20631 = console.log(inst_20630);var state_20646__$1 = state_20646;var statearr_20662_20689 = state_20646__$1;(statearr_20662_20689[2] = inst_20631);
(statearr_20662_20689[1] = 14);
return cljs.core.constant$keyword$159;
} else
{if((state_val_20647 === 13))
{var state_20646__$1 = state_20646;var statearr_20663_20690 = state_20646__$1;(statearr_20663_20690[2] = null);
(statearr_20663_20690[1] = 14);
return cljs.core.constant$keyword$159;
} else
{if((state_val_20647 === 14))
{var inst_20620 = (state_20646[7]);var inst_20634 = (state_20646[2]);var state_20646__$1 = (function (){var statearr_20664 = state_20646;(statearr_20664[9] = inst_20634);
return statearr_20664;
})();var statearr_20665_20691 = state_20646__$1;(statearr_20665_20691[2] = inst_20620);
(statearr_20665_20691[1] = 7);
return cljs.core.constant$keyword$159;
} else
{if((state_val_20647 === 15))
{var state_20646__$1 = state_20646;var statearr_20666_20692 = state_20646__$1;(statearr_20666_20692[2] = null);
(statearr_20666_20692[1] = 2);
return cljs.core.constant$keyword$159;
} else
{if((state_val_20647 === 16))
{var state_20646__$1 = state_20646;var statearr_20667_20693 = state_20646__$1;(statearr_20667_20693[2] = null);
(statearr_20667_20693[1] = 17);
return cljs.core.constant$keyword$159;
} else
{if((state_val_20647 === 17))
{var inst_20642 = (state_20646[2]);var state_20646__$1 = state_20646;var statearr_20668_20694 = state_20646__$1;(statearr_20668_20694[2] = inst_20642);
(statearr_20668_20694[1] = 3);
return cljs.core.constant$keyword$159;
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
var state_machine__5507__auto____0 = (function (){var statearr_20672 = [null,null,null,null,null,null,null,null,null,null];(statearr_20672[0] = state_machine__5507__auto__);
(statearr_20672[1] = 1);
return statearr_20672;
});
var state_machine__5507__auto____1 = (function (state_20646){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_20646);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$159))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e20673){if((e20673 instanceof Object))
{var ex__5510__auto__ = e20673;var statearr_20674_20695 = state_20646;(statearr_20674_20695[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_20646);
return cljs.core.constant$keyword$159;
} else
{if(cljs.core.constant$keyword$148)
{throw e20673;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$159))
{{
var G__20696 = state_20646;
state_20646 = G__20696;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_20646){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_20646);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_20675 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_20675[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___20676);
return statearr_20675;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5523__auto__);
}));
return null;
};
var dorun_async = function (ch,var_args){
var p__20557 = null;if (arguments.length > 1) {
  p__20557 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return dorun_async__delegate.call(this,ch,p__20557);};
dorun_async.cljs$lang$maxFixedArity = 1;
dorun_async.cljs$lang$applyTo = (function (arglist__20697){
var ch = cljs.core.first(arglist__20697);
var p__20557 = cljs.core.rest(arglist__20697);
return dorun_async__delegate(ch,p__20557);
});
dorun_async.cljs$core$IFn$_invoke$arity$variadic = dorun_async__delegate;
return dorun_async;
})()
;
