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
map_async.cljs$lang$applyTo = (function (arglist__21595){
var f = cljs.core.first(arglist__21595);
var colls = cljs.core.rest(arglist__21595);
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
var dorun_async__delegate = function (ch,p__21596){var map__21656 = p__21596;var map__21656__$1 = ((cljs.core.seq_QMARK_(map__21656))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21656):map__21656);var delay = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21656__$1,cljs.core.constant$keyword$385);var log = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21656__$1,cljs.core.constant$keyword$403);var c__5521__auto___21715 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_21685){var state_val_21686 = (state_21685[1]);if((state_val_21686 === 1))
{var state_21685__$1 = state_21685;var statearr_21687_21716 = state_21685__$1;(statearr_21687_21716[2] = null);
(statearr_21687_21716[1] = 2);
return cljs.core.constant$keyword$224;
} else
{if((state_val_21686 === 2))
{var state_21685__$1 = state_21685;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_21685__$1,4,ch);
} else
{if((state_val_21686 === 3))
{var inst_21683 = (state_21685[2]);var state_21685__$1 = state_21685;return cljs.core.async.impl.ioc_helpers.return_chan(state_21685__$1,inst_21683);
} else
{if((state_val_21686 === 4))
{var inst_21659 = (state_21685[7]);var inst_21659__$1 = (state_21685[2]);var state_21685__$1 = (function (){var statearr_21688 = state_21685;(statearr_21688[7] = inst_21659__$1);
return statearr_21688;
})();if(cljs.core.truth_(inst_21659__$1))
{var statearr_21689_21717 = state_21685__$1;(statearr_21689_21717[1] = 5);
} else
{var statearr_21690_21718 = state_21685__$1;(statearr_21690_21718[1] = 6);
}
return cljs.core.constant$keyword$224;
} else
{if((state_val_21686 === 5))
{var state_21685__$1 = state_21685;if(cljs.core.truth_(delay))
{var statearr_21691_21719 = state_21685__$1;(statearr_21691_21719[1] = 8);
} else
{var statearr_21692_21720 = state_21685__$1;(statearr_21692_21720[1] = 9);
}
return cljs.core.constant$keyword$224;
} else
{if((state_val_21686 === 6))
{var state_21685__$1 = state_21685;var statearr_21693_21721 = state_21685__$1;(statearr_21693_21721[2] = null);
(statearr_21693_21721[1] = 7);
return cljs.core.constant$keyword$224;
} else
{if((state_val_21686 === 7))
{var inst_21676 = (state_21685[2]);var state_21685__$1 = state_21685;if(cljs.core.truth_(inst_21676))
{var statearr_21694_21722 = state_21685__$1;(statearr_21694_21722[1] = 15);
} else
{var statearr_21695_21723 = state_21685__$1;(statearr_21695_21723[1] = 16);
}
return cljs.core.constant$keyword$224;
} else
{if((state_val_21686 === 8))
{var inst_21662 = cljs.core.async.timeout(delay);var state_21685__$1 = state_21685;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_21685__$1,11,inst_21662);
} else
{if((state_val_21686 === 9))
{var state_21685__$1 = state_21685;var statearr_21696_21724 = state_21685__$1;(statearr_21696_21724[2] = null);
(statearr_21696_21724[1] = 10);
return cljs.core.constant$keyword$224;
} else
{if((state_val_21686 === 10))
{var inst_21667 = (state_21685[2]);var state_21685__$1 = (function (){var statearr_21697 = state_21685;(statearr_21697[8] = inst_21667);
return statearr_21697;
})();if(cljs.core.truth_(log))
{var statearr_21698_21725 = state_21685__$1;(statearr_21698_21725[1] = 12);
} else
{var statearr_21699_21726 = state_21685__$1;(statearr_21699_21726[1] = 13);
}
return cljs.core.constant$keyword$224;
} else
{if((state_val_21686 === 11))
{var inst_21664 = (state_21685[2]);var state_21685__$1 = state_21685;var statearr_21700_21727 = state_21685__$1;(statearr_21700_21727[2] = inst_21664);
(statearr_21700_21727[1] = 10);
return cljs.core.constant$keyword$224;
} else
{if((state_val_21686 === 12))
{var inst_21659 = (state_21685[7]);var inst_21669 = cljs.core.clj__GT_js(inst_21659);var inst_21670 = console.log(inst_21669);var state_21685__$1 = state_21685;var statearr_21701_21728 = state_21685__$1;(statearr_21701_21728[2] = inst_21670);
(statearr_21701_21728[1] = 14);
return cljs.core.constant$keyword$224;
} else
{if((state_val_21686 === 13))
{var state_21685__$1 = state_21685;var statearr_21702_21729 = state_21685__$1;(statearr_21702_21729[2] = null);
(statearr_21702_21729[1] = 14);
return cljs.core.constant$keyword$224;
} else
{if((state_val_21686 === 14))
{var inst_21659 = (state_21685[7]);var inst_21673 = (state_21685[2]);var state_21685__$1 = (function (){var statearr_21703 = state_21685;(statearr_21703[9] = inst_21673);
return statearr_21703;
})();var statearr_21704_21730 = state_21685__$1;(statearr_21704_21730[2] = inst_21659);
(statearr_21704_21730[1] = 7);
return cljs.core.constant$keyword$224;
} else
{if((state_val_21686 === 15))
{var state_21685__$1 = state_21685;var statearr_21705_21731 = state_21685__$1;(statearr_21705_21731[2] = null);
(statearr_21705_21731[1] = 2);
return cljs.core.constant$keyword$224;
} else
{if((state_val_21686 === 16))
{var state_21685__$1 = state_21685;var statearr_21706_21732 = state_21685__$1;(statearr_21706_21732[2] = null);
(statearr_21706_21732[1] = 17);
return cljs.core.constant$keyword$224;
} else
{if((state_val_21686 === 17))
{var inst_21681 = (state_21685[2]);var state_21685__$1 = state_21685;var statearr_21707_21733 = state_21685__$1;(statearr_21707_21733[2] = inst_21681);
(statearr_21707_21733[1] = 3);
return cljs.core.constant$keyword$224;
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
var state_machine__5507__auto____0 = (function (){var statearr_21711 = [null,null,null,null,null,null,null,null,null,null];(statearr_21711[0] = state_machine__5507__auto__);
(statearr_21711[1] = 1);
return statearr_21711;
});
var state_machine__5507__auto____1 = (function (state_21685){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_21685);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$224))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e21712){if((e21712 instanceof Object))
{var ex__5510__auto__ = e21712;var statearr_21713_21734 = state_21685;(statearr_21713_21734[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_21685);
return cljs.core.constant$keyword$224;
} else
{if(cljs.core.constant$keyword$213)
{throw e21712;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$224))
{{
var G__21735 = state_21685;
state_21685 = G__21735;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_21685){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_21685);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_21714 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_21714[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___21715);
return statearr_21714;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5523__auto__);
}));
return null;
};
var dorun_async = function (ch,var_args){
var p__21596 = null;if (arguments.length > 1) {
  p__21596 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return dorun_async__delegate.call(this,ch,p__21596);};
dorun_async.cljs$lang$maxFixedArity = 1;
dorun_async.cljs$lang$applyTo = (function (arglist__21736){
var ch = cljs.core.first(arglist__21736);
var p__21596 = cljs.core.rest(arglist__21736);
return dorun_async__delegate(ch,p__21596);
});
dorun_async.cljs$core$IFn$_invoke$arity$variadic = dorun_async__delegate;
return dorun_async;
})()
;
