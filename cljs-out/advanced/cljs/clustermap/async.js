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
map_async.cljs$lang$applyTo = (function (arglist__37970){
var f = cljs.core.first(arglist__37970);
var colls = cljs.core.rest(arglist__37970);
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
var dorun_async__delegate = function (ch,p__37971){var map__38031 = p__37971;var map__38031__$1 = ((cljs.core.seq_QMARK_(map__38031))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38031):map__38031);var delay = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38031__$1,cljs.core.constant$keyword$1120);var log = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38031__$1,cljs.core.constant$keyword$1036);var c__5693__auto___38090 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5693__auto___38090,map__38031,map__38031__$1,delay,log){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto___38090,map__38031,map__38031__$1,delay,log){
return (function (state_38060){var state_val_38061 = (state_38060[(1)]);if((state_val_38061 === (7)))
{var inst_38051 = (state_38060[(2)]);var state_38060__$1 = state_38060;if(cljs.core.truth_(inst_38051))
{var statearr_38062_38091 = state_38060__$1;(statearr_38062_38091[(1)] = (15));
} else
{var statearr_38063_38092 = state_38060__$1;(statearr_38063_38092[(1)] = (16));
}
return cljs.core.constant$keyword$773;
} else
{if((state_val_38061 === (1)))
{var state_38060__$1 = state_38060;var statearr_38064_38093 = state_38060__$1;(statearr_38064_38093[(2)] = null);
(statearr_38064_38093[(1)] = (2));
return cljs.core.constant$keyword$773;
} else
{if((state_val_38061 === (4)))
{var inst_38034 = (state_38060[(7)]);var inst_38034__$1 = (state_38060[(2)]);var state_38060__$1 = (function (){var statearr_38065 = state_38060;(statearr_38065[(7)] = inst_38034__$1);
return statearr_38065;
})();if(cljs.core.truth_(inst_38034__$1))
{var statearr_38066_38094 = state_38060__$1;(statearr_38066_38094[(1)] = (5));
} else
{var statearr_38067_38095 = state_38060__$1;(statearr_38067_38095[(1)] = (6));
}
return cljs.core.constant$keyword$773;
} else
{if((state_val_38061 === (15)))
{var state_38060__$1 = state_38060;var statearr_38068_38096 = state_38060__$1;(statearr_38068_38096[(2)] = null);
(statearr_38068_38096[(1)] = (2));
return cljs.core.constant$keyword$773;
} else
{if((state_val_38061 === (13)))
{var state_38060__$1 = state_38060;var statearr_38069_38097 = state_38060__$1;(statearr_38069_38097[(2)] = null);
(statearr_38069_38097[(1)] = (14));
return cljs.core.constant$keyword$773;
} else
{if((state_val_38061 === (6)))
{var state_38060__$1 = state_38060;var statearr_38070_38098 = state_38060__$1;(statearr_38070_38098[(2)] = null);
(statearr_38070_38098[(1)] = (7));
return cljs.core.constant$keyword$773;
} else
{if((state_val_38061 === (17)))
{var inst_38056 = (state_38060[(2)]);var state_38060__$1 = state_38060;var statearr_38071_38099 = state_38060__$1;(statearr_38071_38099[(2)] = inst_38056);
(statearr_38071_38099[(1)] = (3));
return cljs.core.constant$keyword$773;
} else
{if((state_val_38061 === (3)))
{var inst_38058 = (state_38060[(2)]);var state_38060__$1 = state_38060;return cljs.core.async.impl.ioc_helpers.return_chan(state_38060__$1,inst_38058);
} else
{if((state_val_38061 === (12)))
{var inst_38034 = (state_38060[(7)]);var inst_38044 = cljs.core.clj__GT_js(inst_38034);var inst_38045 = console.log(inst_38044);var state_38060__$1 = state_38060;var statearr_38072_38100 = state_38060__$1;(statearr_38072_38100[(2)] = inst_38045);
(statearr_38072_38100[(1)] = (14));
return cljs.core.constant$keyword$773;
} else
{if((state_val_38061 === (2)))
{var state_38060__$1 = state_38060;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_38060__$1,(4),ch);
} else
{if((state_val_38061 === (11)))
{var inst_38039 = (state_38060[(2)]);var state_38060__$1 = state_38060;var statearr_38073_38101 = state_38060__$1;(statearr_38073_38101[(2)] = inst_38039);
(statearr_38073_38101[(1)] = (10));
return cljs.core.constant$keyword$773;
} else
{if((state_val_38061 === (9)))
{var state_38060__$1 = state_38060;var statearr_38074_38102 = state_38060__$1;(statearr_38074_38102[(2)] = null);
(statearr_38074_38102[(1)] = (10));
return cljs.core.constant$keyword$773;
} else
{if((state_val_38061 === (5)))
{var state_38060__$1 = state_38060;if(cljs.core.truth_(delay))
{var statearr_38075_38103 = state_38060__$1;(statearr_38075_38103[(1)] = (8));
} else
{var statearr_38076_38104 = state_38060__$1;(statearr_38076_38104[(1)] = (9));
}
return cljs.core.constant$keyword$773;
} else
{if((state_val_38061 === (14)))
{var inst_38034 = (state_38060[(7)]);var inst_38048 = (state_38060[(2)]);var state_38060__$1 = (function (){var statearr_38077 = state_38060;(statearr_38077[(8)] = inst_38048);
return statearr_38077;
})();var statearr_38078_38105 = state_38060__$1;(statearr_38078_38105[(2)] = inst_38034);
(statearr_38078_38105[(1)] = (7));
return cljs.core.constant$keyword$773;
} else
{if((state_val_38061 === (16)))
{var state_38060__$1 = state_38060;var statearr_38079_38106 = state_38060__$1;(statearr_38079_38106[(2)] = null);
(statearr_38079_38106[(1)] = (17));
return cljs.core.constant$keyword$773;
} else
{if((state_val_38061 === (10)))
{var inst_38042 = (state_38060[(2)]);var state_38060__$1 = (function (){var statearr_38080 = state_38060;(statearr_38080[(9)] = inst_38042);
return statearr_38080;
})();if(cljs.core.truth_(log))
{var statearr_38081_38107 = state_38060__$1;(statearr_38081_38107[(1)] = (12));
} else
{var statearr_38082_38108 = state_38060__$1;(statearr_38082_38108[(1)] = (13));
}
return cljs.core.constant$keyword$773;
} else
{if((state_val_38061 === (8)))
{var inst_38037 = cljs.core.async.timeout(delay);var state_38060__$1 = state_38060;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_38060__$1,(11),inst_38037);
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
});})(c__5693__auto___38090,map__38031,map__38031__$1,delay,log))
;return ((function (switch__5678__auto__,c__5693__auto___38090,map__38031,map__38031__$1,delay,log){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_38086 = [null,null,null,null,null,null,null,null,null,null];(statearr_38086[(0)] = state_machine__5679__auto__);
(statearr_38086[(1)] = (1));
return statearr_38086;
});
var state_machine__5679__auto____1 = (function (state_38060){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__(state_38060);if(cljs.core.keyword_identical_QMARK_(result__5681__auto__,cljs.core.constant$keyword$773))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e38087){if((e38087 instanceof Object))
{var ex__5682__auto__ = e38087;var statearr_38088_38109 = state_38060;(statearr_38088_38109[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_38060);
return cljs.core.constant$keyword$773;
} else
{if(cljs.core.constant$keyword$764)
{throw e38087;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5680__auto__,cljs.core.constant$keyword$773))
{{
var G__38110 = state_38060;
state_38060 = G__38110;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_38060){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_38060);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto___38090,map__38031,map__38031__$1,delay,log))
})();var state__5695__auto__ = (function (){var statearr_38089 = (f__5694__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5694__auto__.cljs$core$IFn$_invoke$arity$0() : f__5694__auto__.call(null));(statearr_38089[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto___38090);
return statearr_38089;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5695__auto__);
});})(c__5693__auto___38090,map__38031,map__38031__$1,delay,log))
);
return null;
};
var dorun_async = function (ch,var_args){
var p__37971 = null;if (arguments.length > 1) {
  p__37971 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return dorun_async__delegate.call(this,ch,p__37971);};
dorun_async.cljs$lang$maxFixedArity = 1;
dorun_async.cljs$lang$applyTo = (function (arglist__38111){
var ch = cljs.core.first(arglist__38111);
var p__37971 = cljs.core.rest(arglist__38111);
return dorun_async__delegate(ch,p__37971);
});
dorun_async.cljs$core$IFn$_invoke$arity$variadic = dorun_async__delegate;
return dorun_async;
})()
;
