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
map_async.cljs$lang$applyTo = (function (arglist__20565){
var f = cljs.core.first(arglist__20565);
var colls = cljs.core.rest(arglist__20565);
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
var dorun_async__delegate = function (ch,p__20566){var map__20626 = p__20566;var map__20626__$1 = ((cljs.core.seq_QMARK_(map__20626))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20626):map__20626);var delay = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20626__$1,cljs.core.constant$keyword$279);var log = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20626__$1,cljs.core.constant$keyword$288);var c__5521__auto___20685 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_20655){var state_val_20656 = (state_20655[1]);if((state_val_20656 === 1))
{var state_20655__$1 = state_20655;var statearr_20657_20686 = state_20655__$1;(statearr_20657_20686[2] = null);
(statearr_20657_20686[1] = 2);
return cljs.core.constant$keyword$167;
} else
{if((state_val_20656 === 2))
{var state_20655__$1 = state_20655;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20655__$1,4,ch);
} else
{if((state_val_20656 === 3))
{var inst_20653 = (state_20655[2]);var state_20655__$1 = state_20655;return cljs.core.async.impl.ioc_helpers.return_chan(state_20655__$1,inst_20653);
} else
{if((state_val_20656 === 4))
{var inst_20629 = (state_20655[7]);var inst_20629__$1 = (state_20655[2]);var state_20655__$1 = (function (){var statearr_20658 = state_20655;(statearr_20658[7] = inst_20629__$1);
return statearr_20658;
})();if(cljs.core.truth_(inst_20629__$1))
{var statearr_20659_20687 = state_20655__$1;(statearr_20659_20687[1] = 5);
} else
{var statearr_20660_20688 = state_20655__$1;(statearr_20660_20688[1] = 6);
}
return cljs.core.constant$keyword$167;
} else
{if((state_val_20656 === 5))
{var state_20655__$1 = state_20655;if(cljs.core.truth_(delay))
{var statearr_20661_20689 = state_20655__$1;(statearr_20661_20689[1] = 8);
} else
{var statearr_20662_20690 = state_20655__$1;(statearr_20662_20690[1] = 9);
}
return cljs.core.constant$keyword$167;
} else
{if((state_val_20656 === 6))
{var state_20655__$1 = state_20655;var statearr_20663_20691 = state_20655__$1;(statearr_20663_20691[2] = null);
(statearr_20663_20691[1] = 7);
return cljs.core.constant$keyword$167;
} else
{if((state_val_20656 === 7))
{var inst_20646 = (state_20655[2]);var state_20655__$1 = state_20655;if(cljs.core.truth_(inst_20646))
{var statearr_20664_20692 = state_20655__$1;(statearr_20664_20692[1] = 15);
} else
{var statearr_20665_20693 = state_20655__$1;(statearr_20665_20693[1] = 16);
}
return cljs.core.constant$keyword$167;
} else
{if((state_val_20656 === 8))
{var inst_20632 = cljs.core.async.timeout(delay);var state_20655__$1 = state_20655;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20655__$1,11,inst_20632);
} else
{if((state_val_20656 === 9))
{var state_20655__$1 = state_20655;var statearr_20666_20694 = state_20655__$1;(statearr_20666_20694[2] = null);
(statearr_20666_20694[1] = 10);
return cljs.core.constant$keyword$167;
} else
{if((state_val_20656 === 10))
{var inst_20637 = (state_20655[2]);var state_20655__$1 = (function (){var statearr_20667 = state_20655;(statearr_20667[8] = inst_20637);
return statearr_20667;
})();if(cljs.core.truth_(log))
{var statearr_20668_20695 = state_20655__$1;(statearr_20668_20695[1] = 12);
} else
{var statearr_20669_20696 = state_20655__$1;(statearr_20669_20696[1] = 13);
}
return cljs.core.constant$keyword$167;
} else
{if((state_val_20656 === 11))
{var inst_20634 = (state_20655[2]);var state_20655__$1 = state_20655;var statearr_20670_20697 = state_20655__$1;(statearr_20670_20697[2] = inst_20634);
(statearr_20670_20697[1] = 10);
return cljs.core.constant$keyword$167;
} else
{if((state_val_20656 === 12))
{var inst_20629 = (state_20655[7]);var inst_20639 = cljs.core.clj__GT_js(inst_20629);var inst_20640 = console.log(inst_20639);var state_20655__$1 = state_20655;var statearr_20671_20698 = state_20655__$1;(statearr_20671_20698[2] = inst_20640);
(statearr_20671_20698[1] = 14);
return cljs.core.constant$keyword$167;
} else
{if((state_val_20656 === 13))
{var state_20655__$1 = state_20655;var statearr_20672_20699 = state_20655__$1;(statearr_20672_20699[2] = null);
(statearr_20672_20699[1] = 14);
return cljs.core.constant$keyword$167;
} else
{if((state_val_20656 === 14))
{var inst_20629 = (state_20655[7]);var inst_20643 = (state_20655[2]);var state_20655__$1 = (function (){var statearr_20673 = state_20655;(statearr_20673[9] = inst_20643);
return statearr_20673;
})();var statearr_20674_20700 = state_20655__$1;(statearr_20674_20700[2] = inst_20629);
(statearr_20674_20700[1] = 7);
return cljs.core.constant$keyword$167;
} else
{if((state_val_20656 === 15))
{var state_20655__$1 = state_20655;var statearr_20675_20701 = state_20655__$1;(statearr_20675_20701[2] = null);
(statearr_20675_20701[1] = 2);
return cljs.core.constant$keyword$167;
} else
{if((state_val_20656 === 16))
{var state_20655__$1 = state_20655;var statearr_20676_20702 = state_20655__$1;(statearr_20676_20702[2] = null);
(statearr_20676_20702[1] = 17);
return cljs.core.constant$keyword$167;
} else
{if((state_val_20656 === 17))
{var inst_20651 = (state_20655[2]);var state_20655__$1 = state_20655;var statearr_20677_20703 = state_20655__$1;(statearr_20677_20703[2] = inst_20651);
(statearr_20677_20703[1] = 3);
return cljs.core.constant$keyword$167;
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
var state_machine__5507__auto____0 = (function (){var statearr_20681 = [null,null,null,null,null,null,null,null,null,null];(statearr_20681[0] = state_machine__5507__auto__);
(statearr_20681[1] = 1);
return statearr_20681;
});
var state_machine__5507__auto____1 = (function (state_20655){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_20655);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$167))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e20682){if((e20682 instanceof Object))
{var ex__5510__auto__ = e20682;var statearr_20683_20704 = state_20655;(statearr_20683_20704[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_20655);
return cljs.core.constant$keyword$167;
} else
{if(cljs.core.constant$keyword$156)
{throw e20682;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$167))
{{
var G__20705 = state_20655;
state_20655 = G__20705;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_20655){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_20655);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_20684 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_20684[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___20685);
return statearr_20684;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5523__auto__);
}));
return null;
};
var dorun_async = function (ch,var_args){
var p__20566 = null;if (arguments.length > 1) {
  p__20566 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return dorun_async__delegate.call(this,ch,p__20566);};
dorun_async.cljs$lang$maxFixedArity = 1;
dorun_async.cljs$lang$applyTo = (function (arglist__20706){
var ch = cljs.core.first(arglist__20706);
var p__20566 = cljs.core.rest(arglist__20706);
return dorun_async__delegate(ch,p__20566);
});
dorun_async.cljs$core$IFn$_invoke$arity$variadic = dorun_async__delegate;
return dorun_async;
})()
;
