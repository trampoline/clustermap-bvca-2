// Compiled by ClojureScript 0.0-2322
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
map_async.cljs$lang$applyTo = (function (arglist__37612){
var f = cljs.core.first(arglist__37612);
var colls = cljs.core.rest(arglist__37612);
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
var dorun_async__delegate = function (ch,p__37613){var map__37673 = p__37613;var map__37673__$1 = ((cljs.core.seq_QMARK_(map__37673))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37673):map__37673);var delay = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37673__$1,cljs.core.constant$keyword$1192);var log = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37673__$1,cljs.core.constant$keyword$1106);var c__5708__auto___37732 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5708__auto___37732,map__37673,map__37673__$1,delay,log){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___37732,map__37673,map__37673__$1,delay,log){
return (function (state_37702){var state_val_37703 = (state_37702[(1)]);if((state_val_37703 === (7)))
{var inst_37693 = (state_37702[(2)]);var state_37702__$1 = state_37702;if(cljs.core.truth_(inst_37693))
{var statearr_37704_37733 = state_37702__$1;(statearr_37704_37733[(1)] = (15));
} else
{var statearr_37705_37734 = state_37702__$1;(statearr_37705_37734[(1)] = (16));
}
return cljs.core.constant$keyword$836;
} else
{if((state_val_37703 === (1)))
{var state_37702__$1 = state_37702;var statearr_37706_37735 = state_37702__$1;(statearr_37706_37735[(2)] = null);
(statearr_37706_37735[(1)] = (2));
return cljs.core.constant$keyword$836;
} else
{if((state_val_37703 === (4)))
{var inst_37676 = (state_37702[(7)]);var inst_37676__$1 = (state_37702[(2)]);var state_37702__$1 = (function (){var statearr_37707 = state_37702;(statearr_37707[(7)] = inst_37676__$1);
return statearr_37707;
})();if(cljs.core.truth_(inst_37676__$1))
{var statearr_37708_37736 = state_37702__$1;(statearr_37708_37736[(1)] = (5));
} else
{var statearr_37709_37737 = state_37702__$1;(statearr_37709_37737[(1)] = (6));
}
return cljs.core.constant$keyword$836;
} else
{if((state_val_37703 === (15)))
{var state_37702__$1 = state_37702;var statearr_37710_37738 = state_37702__$1;(statearr_37710_37738[(2)] = null);
(statearr_37710_37738[(1)] = (2));
return cljs.core.constant$keyword$836;
} else
{if((state_val_37703 === (13)))
{var state_37702__$1 = state_37702;var statearr_37711_37739 = state_37702__$1;(statearr_37711_37739[(2)] = null);
(statearr_37711_37739[(1)] = (14));
return cljs.core.constant$keyword$836;
} else
{if((state_val_37703 === (6)))
{var state_37702__$1 = state_37702;var statearr_37712_37740 = state_37702__$1;(statearr_37712_37740[(2)] = null);
(statearr_37712_37740[(1)] = (7));
return cljs.core.constant$keyword$836;
} else
{if((state_val_37703 === (17)))
{var inst_37698 = (state_37702[(2)]);var state_37702__$1 = state_37702;var statearr_37713_37741 = state_37702__$1;(statearr_37713_37741[(2)] = inst_37698);
(statearr_37713_37741[(1)] = (3));
return cljs.core.constant$keyword$836;
} else
{if((state_val_37703 === (3)))
{var inst_37700 = (state_37702[(2)]);var state_37702__$1 = state_37702;return cljs.core.async.impl.ioc_helpers.return_chan(state_37702__$1,inst_37700);
} else
{if((state_val_37703 === (12)))
{var inst_37676 = (state_37702[(7)]);var inst_37686 = cljs.core.clj__GT_js(inst_37676);var inst_37687 = console.log(inst_37686);var state_37702__$1 = state_37702;var statearr_37714_37742 = state_37702__$1;(statearr_37714_37742[(2)] = inst_37687);
(statearr_37714_37742[(1)] = (14));
return cljs.core.constant$keyword$836;
} else
{if((state_val_37703 === (2)))
{var state_37702__$1 = state_37702;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37702__$1,(4),ch);
} else
{if((state_val_37703 === (11)))
{var inst_37681 = (state_37702[(2)]);var state_37702__$1 = state_37702;var statearr_37715_37743 = state_37702__$1;(statearr_37715_37743[(2)] = inst_37681);
(statearr_37715_37743[(1)] = (10));
return cljs.core.constant$keyword$836;
} else
{if((state_val_37703 === (9)))
{var state_37702__$1 = state_37702;var statearr_37716_37744 = state_37702__$1;(statearr_37716_37744[(2)] = null);
(statearr_37716_37744[(1)] = (10));
return cljs.core.constant$keyword$836;
} else
{if((state_val_37703 === (5)))
{var state_37702__$1 = state_37702;if(cljs.core.truth_(delay))
{var statearr_37717_37745 = state_37702__$1;(statearr_37717_37745[(1)] = (8));
} else
{var statearr_37718_37746 = state_37702__$1;(statearr_37718_37746[(1)] = (9));
}
return cljs.core.constant$keyword$836;
} else
{if((state_val_37703 === (14)))
{var inst_37676 = (state_37702[(7)]);var inst_37690 = (state_37702[(2)]);var state_37702__$1 = (function (){var statearr_37719 = state_37702;(statearr_37719[(8)] = inst_37690);
return statearr_37719;
})();var statearr_37720_37747 = state_37702__$1;(statearr_37720_37747[(2)] = inst_37676);
(statearr_37720_37747[(1)] = (7));
return cljs.core.constant$keyword$836;
} else
{if((state_val_37703 === (16)))
{var state_37702__$1 = state_37702;var statearr_37721_37748 = state_37702__$1;(statearr_37721_37748[(2)] = null);
(statearr_37721_37748[(1)] = (17));
return cljs.core.constant$keyword$836;
} else
{if((state_val_37703 === (10)))
{var inst_37684 = (state_37702[(2)]);var state_37702__$1 = (function (){var statearr_37722 = state_37702;(statearr_37722[(9)] = inst_37684);
return statearr_37722;
})();if(cljs.core.truth_(log))
{var statearr_37723_37749 = state_37702__$1;(statearr_37723_37749[(1)] = (12));
} else
{var statearr_37724_37750 = state_37702__$1;(statearr_37724_37750[(1)] = (13));
}
return cljs.core.constant$keyword$836;
} else
{if((state_val_37703 === (8)))
{var inst_37679 = cljs.core.async.timeout(delay);var state_37702__$1 = state_37702;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37702__$1,(11),inst_37679);
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
});})(c__5708__auto___37732,map__37673,map__37673__$1,delay,log))
;return ((function (switch__5693__auto__,c__5708__auto___37732,map__37673,map__37673__$1,delay,log){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_37728 = [null,null,null,null,null,null,null,null,null,null];(statearr_37728[(0)] = state_machine__5694__auto__);
(statearr_37728[(1)] = (1));
return statearr_37728;
});
var state_machine__5694__auto____1 = (function (state_37702){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__(state_37702);if(cljs.core.keyword_identical_QMARK_(result__5696__auto__,cljs.core.constant$keyword$836))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e37729){if((e37729 instanceof Object))
{var ex__5697__auto__ = e37729;var statearr_37730_37751 = state_37702;(statearr_37730_37751[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_37702);
return cljs.core.constant$keyword$836;
} else
{throw e37729;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5695__auto__,cljs.core.constant$keyword$836))
{{
var G__37752 = state_37702;
state_37702 = G__37752;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_37702){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_37702);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___37732,map__37673,map__37673__$1,delay,log))
})();var state__5710__auto__ = (function (){var statearr_37731 = (f__5709__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5709__auto__.cljs$core$IFn$_invoke$arity$0() : f__5709__auto__.call(null));(statearr_37731[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___37732);
return statearr_37731;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5710__auto__);
});})(c__5708__auto___37732,map__37673,map__37673__$1,delay,log))
);
return null;
};
var dorun_async = function (ch,var_args){
var p__37613 = null;if (arguments.length > 1) {
  p__37613 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return dorun_async__delegate.call(this,ch,p__37613);};
dorun_async.cljs$lang$maxFixedArity = 1;
dorun_async.cljs$lang$applyTo = (function (arglist__37753){
var ch = cljs.core.first(arglist__37753);
var p__37613 = cljs.core.rest(arglist__37753);
return dorun_async__delegate(ch,p__37613);
});
dorun_async.cljs$core$IFn$_invoke$arity$variadic = dorun_async__delegate;
return dorun_async;
})()
;
