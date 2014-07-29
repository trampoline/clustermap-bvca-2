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
map_async.cljs$lang$applyTo = (function (arglist__36992){
var f = cljs.core.first(arglist__36992);
var colls = cljs.core.rest(arglist__36992);
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
var dorun_async__delegate = function (ch,p__36993){var map__37053 = p__36993;var map__37053__$1 = ((cljs.core.seq_QMARK_(map__37053))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37053):map__37053);var delay = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37053__$1,cljs.core.constant$keyword$1126);var log = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37053__$1,cljs.core.constant$keyword$1041);var c__5693__auto___37112 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5693__auto___37112,map__37053,map__37053__$1,delay,log){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto___37112,map__37053,map__37053__$1,delay,log){
return (function (state_37082){var state_val_37083 = (state_37082[(1)]);if((state_val_37083 === (7)))
{var inst_37073 = (state_37082[(2)]);var state_37082__$1 = state_37082;if(cljs.core.truth_(inst_37073))
{var statearr_37084_37113 = state_37082__$1;(statearr_37084_37113[(1)] = (15));
} else
{var statearr_37085_37114 = state_37082__$1;(statearr_37085_37114[(1)] = (16));
}
return cljs.core.constant$keyword$777;
} else
{if((state_val_37083 === (1)))
{var state_37082__$1 = state_37082;var statearr_37086_37115 = state_37082__$1;(statearr_37086_37115[(2)] = null);
(statearr_37086_37115[(1)] = (2));
return cljs.core.constant$keyword$777;
} else
{if((state_val_37083 === (4)))
{var inst_37056 = (state_37082[(7)]);var inst_37056__$1 = (state_37082[(2)]);var state_37082__$1 = (function (){var statearr_37087 = state_37082;(statearr_37087[(7)] = inst_37056__$1);
return statearr_37087;
})();if(cljs.core.truth_(inst_37056__$1))
{var statearr_37088_37116 = state_37082__$1;(statearr_37088_37116[(1)] = (5));
} else
{var statearr_37089_37117 = state_37082__$1;(statearr_37089_37117[(1)] = (6));
}
return cljs.core.constant$keyword$777;
} else
{if((state_val_37083 === (15)))
{var state_37082__$1 = state_37082;var statearr_37090_37118 = state_37082__$1;(statearr_37090_37118[(2)] = null);
(statearr_37090_37118[(1)] = (2));
return cljs.core.constant$keyword$777;
} else
{if((state_val_37083 === (13)))
{var state_37082__$1 = state_37082;var statearr_37091_37119 = state_37082__$1;(statearr_37091_37119[(2)] = null);
(statearr_37091_37119[(1)] = (14));
return cljs.core.constant$keyword$777;
} else
{if((state_val_37083 === (6)))
{var state_37082__$1 = state_37082;var statearr_37092_37120 = state_37082__$1;(statearr_37092_37120[(2)] = null);
(statearr_37092_37120[(1)] = (7));
return cljs.core.constant$keyword$777;
} else
{if((state_val_37083 === (17)))
{var inst_37078 = (state_37082[(2)]);var state_37082__$1 = state_37082;var statearr_37093_37121 = state_37082__$1;(statearr_37093_37121[(2)] = inst_37078);
(statearr_37093_37121[(1)] = (3));
return cljs.core.constant$keyword$777;
} else
{if((state_val_37083 === (3)))
{var inst_37080 = (state_37082[(2)]);var state_37082__$1 = state_37082;return cljs.core.async.impl.ioc_helpers.return_chan(state_37082__$1,inst_37080);
} else
{if((state_val_37083 === (12)))
{var inst_37056 = (state_37082[(7)]);var inst_37066 = cljs.core.clj__GT_js(inst_37056);var inst_37067 = console.log(inst_37066);var state_37082__$1 = state_37082;var statearr_37094_37122 = state_37082__$1;(statearr_37094_37122[(2)] = inst_37067);
(statearr_37094_37122[(1)] = (14));
return cljs.core.constant$keyword$777;
} else
{if((state_val_37083 === (2)))
{var state_37082__$1 = state_37082;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37082__$1,(4),ch);
} else
{if((state_val_37083 === (11)))
{var inst_37061 = (state_37082[(2)]);var state_37082__$1 = state_37082;var statearr_37095_37123 = state_37082__$1;(statearr_37095_37123[(2)] = inst_37061);
(statearr_37095_37123[(1)] = (10));
return cljs.core.constant$keyword$777;
} else
{if((state_val_37083 === (9)))
{var state_37082__$1 = state_37082;var statearr_37096_37124 = state_37082__$1;(statearr_37096_37124[(2)] = null);
(statearr_37096_37124[(1)] = (10));
return cljs.core.constant$keyword$777;
} else
{if((state_val_37083 === (5)))
{var state_37082__$1 = state_37082;if(cljs.core.truth_(delay))
{var statearr_37097_37125 = state_37082__$1;(statearr_37097_37125[(1)] = (8));
} else
{var statearr_37098_37126 = state_37082__$1;(statearr_37098_37126[(1)] = (9));
}
return cljs.core.constant$keyword$777;
} else
{if((state_val_37083 === (14)))
{var inst_37056 = (state_37082[(7)]);var inst_37070 = (state_37082[(2)]);var state_37082__$1 = (function (){var statearr_37099 = state_37082;(statearr_37099[(8)] = inst_37070);
return statearr_37099;
})();var statearr_37100_37127 = state_37082__$1;(statearr_37100_37127[(2)] = inst_37056);
(statearr_37100_37127[(1)] = (7));
return cljs.core.constant$keyword$777;
} else
{if((state_val_37083 === (16)))
{var state_37082__$1 = state_37082;var statearr_37101_37128 = state_37082__$1;(statearr_37101_37128[(2)] = null);
(statearr_37101_37128[(1)] = (17));
return cljs.core.constant$keyword$777;
} else
{if((state_val_37083 === (10)))
{var inst_37064 = (state_37082[(2)]);var state_37082__$1 = (function (){var statearr_37102 = state_37082;(statearr_37102[(9)] = inst_37064);
return statearr_37102;
})();if(cljs.core.truth_(log))
{var statearr_37103_37129 = state_37082__$1;(statearr_37103_37129[(1)] = (12));
} else
{var statearr_37104_37130 = state_37082__$1;(statearr_37104_37130[(1)] = (13));
}
return cljs.core.constant$keyword$777;
} else
{if((state_val_37083 === (8)))
{var inst_37059 = cljs.core.async.timeout(delay);var state_37082__$1 = state_37082;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37082__$1,(11),inst_37059);
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
});})(c__5693__auto___37112,map__37053,map__37053__$1,delay,log))
;return ((function (switch__5678__auto__,c__5693__auto___37112,map__37053,map__37053__$1,delay,log){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_37108 = [null,null,null,null,null,null,null,null,null,null];(statearr_37108[(0)] = state_machine__5679__auto__);
(statearr_37108[(1)] = (1));
return statearr_37108;
});
var state_machine__5679__auto____1 = (function (state_37082){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__(state_37082);if(cljs.core.keyword_identical_QMARK_(result__5681__auto__,cljs.core.constant$keyword$777))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e37109){if((e37109 instanceof Object))
{var ex__5682__auto__ = e37109;var statearr_37110_37131 = state_37082;(statearr_37110_37131[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_37082);
return cljs.core.constant$keyword$777;
} else
{if(cljs.core.constant$keyword$768)
{throw e37109;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5680__auto__,cljs.core.constant$keyword$777))
{{
var G__37132 = state_37082;
state_37082 = G__37132;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_37082){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_37082);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto___37112,map__37053,map__37053__$1,delay,log))
})();var state__5695__auto__ = (function (){var statearr_37111 = (f__5694__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5694__auto__.cljs$core$IFn$_invoke$arity$0() : f__5694__auto__.call(null));(statearr_37111[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto___37112);
return statearr_37111;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5695__auto__);
});})(c__5693__auto___37112,map__37053,map__37053__$1,delay,log))
);
return null;
};
var dorun_async = function (ch,var_args){
var p__36993 = null;if (arguments.length > 1) {
  p__36993 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return dorun_async__delegate.call(this,ch,p__36993);};
dorun_async.cljs$lang$maxFixedArity = 1;
dorun_async.cljs$lang$applyTo = (function (arglist__37133){
var ch = cljs.core.first(arglist__37133);
var p__36993 = cljs.core.rest(arglist__37133);
return dorun_async__delegate(ch,p__36993);
});
dorun_async.cljs$core$IFn$_invoke$arity$variadic = dorun_async__delegate;
return dorun_async;
})()
;
