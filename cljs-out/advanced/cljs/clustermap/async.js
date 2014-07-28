// Compiled by ClojureScript 0.0-2268
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
map_async.cljs$lang$applyTo = (function (arglist__37983){
var f = cljs.core.first(arglist__37983);
var colls = cljs.core.rest(arglist__37983);
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
var dorun_async__delegate = function (ch,p__37984){var map__38044 = p__37984;var map__38044__$1 = ((cljs.core.seq_QMARK_(map__38044))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38044):map__38044);var delay = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38044__$1,cljs.core.constant$keyword$1120);var log = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38044__$1,cljs.core.constant$keyword$1037);var c__5693__auto___38103 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5693__auto___38103,map__38044,map__38044__$1,delay,log){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto___38103,map__38044,map__38044__$1,delay,log){
return (function (state_38073){var state_val_38074 = (state_38073[(1)]);if((state_val_38074 === (7)))
{var inst_38064 = (state_38073[(2)]);var state_38073__$1 = state_38073;if(cljs.core.truth_(inst_38064))
{var statearr_38075_38104 = state_38073__$1;(statearr_38075_38104[(1)] = (15));
} else
{var statearr_38076_38105 = state_38073__$1;(statearr_38076_38105[(1)] = (16));
}
return cljs.core.constant$keyword$773;
} else
{if((state_val_38074 === (1)))
{var state_38073__$1 = state_38073;var statearr_38077_38106 = state_38073__$1;(statearr_38077_38106[(2)] = null);
(statearr_38077_38106[(1)] = (2));
return cljs.core.constant$keyword$773;
} else
{if((state_val_38074 === (4)))
{var inst_38047 = (state_38073[(7)]);var inst_38047__$1 = (state_38073[(2)]);var state_38073__$1 = (function (){var statearr_38078 = state_38073;(statearr_38078[(7)] = inst_38047__$1);
return statearr_38078;
})();if(cljs.core.truth_(inst_38047__$1))
{var statearr_38079_38107 = state_38073__$1;(statearr_38079_38107[(1)] = (5));
} else
{var statearr_38080_38108 = state_38073__$1;(statearr_38080_38108[(1)] = (6));
}
return cljs.core.constant$keyword$773;
} else
{if((state_val_38074 === (15)))
{var state_38073__$1 = state_38073;var statearr_38081_38109 = state_38073__$1;(statearr_38081_38109[(2)] = null);
(statearr_38081_38109[(1)] = (2));
return cljs.core.constant$keyword$773;
} else
{if((state_val_38074 === (13)))
{var state_38073__$1 = state_38073;var statearr_38082_38110 = state_38073__$1;(statearr_38082_38110[(2)] = null);
(statearr_38082_38110[(1)] = (14));
return cljs.core.constant$keyword$773;
} else
{if((state_val_38074 === (6)))
{var state_38073__$1 = state_38073;var statearr_38083_38111 = state_38073__$1;(statearr_38083_38111[(2)] = null);
(statearr_38083_38111[(1)] = (7));
return cljs.core.constant$keyword$773;
} else
{if((state_val_38074 === (17)))
{var inst_38069 = (state_38073[(2)]);var state_38073__$1 = state_38073;var statearr_38084_38112 = state_38073__$1;(statearr_38084_38112[(2)] = inst_38069);
(statearr_38084_38112[(1)] = (3));
return cljs.core.constant$keyword$773;
} else
{if((state_val_38074 === (3)))
{var inst_38071 = (state_38073[(2)]);var state_38073__$1 = state_38073;return cljs.core.async.impl.ioc_helpers.return_chan(state_38073__$1,inst_38071);
} else
{if((state_val_38074 === (12)))
{var inst_38047 = (state_38073[(7)]);var inst_38057 = cljs.core.clj__GT_js(inst_38047);var inst_38058 = console.log(inst_38057);var state_38073__$1 = state_38073;var statearr_38085_38113 = state_38073__$1;(statearr_38085_38113[(2)] = inst_38058);
(statearr_38085_38113[(1)] = (14));
return cljs.core.constant$keyword$773;
} else
{if((state_val_38074 === (2)))
{var state_38073__$1 = state_38073;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_38073__$1,(4),ch);
} else
{if((state_val_38074 === (11)))
{var inst_38052 = (state_38073[(2)]);var state_38073__$1 = state_38073;var statearr_38086_38114 = state_38073__$1;(statearr_38086_38114[(2)] = inst_38052);
(statearr_38086_38114[(1)] = (10));
return cljs.core.constant$keyword$773;
} else
{if((state_val_38074 === (9)))
{var state_38073__$1 = state_38073;var statearr_38087_38115 = state_38073__$1;(statearr_38087_38115[(2)] = null);
(statearr_38087_38115[(1)] = (10));
return cljs.core.constant$keyword$773;
} else
{if((state_val_38074 === (5)))
{var state_38073__$1 = state_38073;if(cljs.core.truth_(delay))
{var statearr_38088_38116 = state_38073__$1;(statearr_38088_38116[(1)] = (8));
} else
{var statearr_38089_38117 = state_38073__$1;(statearr_38089_38117[(1)] = (9));
}
return cljs.core.constant$keyword$773;
} else
{if((state_val_38074 === (14)))
{var inst_38047 = (state_38073[(7)]);var inst_38061 = (state_38073[(2)]);var state_38073__$1 = (function (){var statearr_38090 = state_38073;(statearr_38090[(8)] = inst_38061);
return statearr_38090;
})();var statearr_38091_38118 = state_38073__$1;(statearr_38091_38118[(2)] = inst_38047);
(statearr_38091_38118[(1)] = (7));
return cljs.core.constant$keyword$773;
} else
{if((state_val_38074 === (16)))
{var state_38073__$1 = state_38073;var statearr_38092_38119 = state_38073__$1;(statearr_38092_38119[(2)] = null);
(statearr_38092_38119[(1)] = (17));
return cljs.core.constant$keyword$773;
} else
{if((state_val_38074 === (10)))
{var inst_38055 = (state_38073[(2)]);var state_38073__$1 = (function (){var statearr_38093 = state_38073;(statearr_38093[(9)] = inst_38055);
return statearr_38093;
})();if(cljs.core.truth_(log))
{var statearr_38094_38120 = state_38073__$1;(statearr_38094_38120[(1)] = (12));
} else
{var statearr_38095_38121 = state_38073__$1;(statearr_38095_38121[(1)] = (13));
}
return cljs.core.constant$keyword$773;
} else
{if((state_val_38074 === (8)))
{var inst_38050 = cljs.core.async.timeout(delay);var state_38073__$1 = state_38073;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_38073__$1,(11),inst_38050);
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
});})(c__5693__auto___38103,map__38044,map__38044__$1,delay,log))
;return ((function (switch__5678__auto__,c__5693__auto___38103,map__38044,map__38044__$1,delay,log){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_38099 = [null,null,null,null,null,null,null,null,null,null];(statearr_38099[(0)] = state_machine__5679__auto__);
(statearr_38099[(1)] = (1));
return statearr_38099;
});
var state_machine__5679__auto____1 = (function (state_38073){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__(state_38073);if(cljs.core.keyword_identical_QMARK_(result__5681__auto__,cljs.core.constant$keyword$773))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e38100){if((e38100 instanceof Object))
{var ex__5682__auto__ = e38100;var statearr_38101_38122 = state_38073;(statearr_38101_38122[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_38073);
return cljs.core.constant$keyword$773;
} else
{if(cljs.core.constant$keyword$764)
{throw e38100;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5680__auto__,cljs.core.constant$keyword$773))
{{
var G__38123 = state_38073;
state_38073 = G__38123;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_38073){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_38073);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto___38103,map__38044,map__38044__$1,delay,log))
})();var state__5695__auto__ = (function (){var statearr_38102 = (f__5694__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5694__auto__.cljs$core$IFn$_invoke$arity$0() : f__5694__auto__.call(null));(statearr_38102[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto___38103);
return statearr_38102;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5695__auto__);
});})(c__5693__auto___38103,map__38044,map__38044__$1,delay,log))
);
return null;
};
var dorun_async = function (ch,var_args){
var p__37984 = null;if (arguments.length > 1) {
  p__37984 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return dorun_async__delegate.call(this,ch,p__37984);};
dorun_async.cljs$lang$maxFixedArity = 1;
dorun_async.cljs$lang$applyTo = (function (arglist__38124){
var ch = cljs.core.first(arglist__38124);
var p__37984 = cljs.core.rest(arglist__38124);
return dorun_async__delegate(ch,p__37984);
});
dorun_async.cljs$core$IFn$_invoke$arity$variadic = dorun_async__delegate;
return dorun_async;
})()
;
