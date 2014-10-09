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
map_async.cljs$lang$applyTo = (function (arglist__45987){
var f = cljs.core.first(arglist__45987);
var colls = cljs.core.rest(arglist__45987);
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
var dorun_async__delegate = function (ch,p__45988){var map__46048 = p__45988;var map__46048__$1 = ((cljs.core.seq_QMARK_(map__46048))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46048):map__46048);var delay = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46048__$1,cljs.core.constant$keyword$1581);var log = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46048__$1,cljs.core.constant$keyword$1498);var c__5708__auto___46107 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5708__auto___46107,map__46048,map__46048__$1,delay,log){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___46107,map__46048,map__46048__$1,delay,log){
return (function (state_46077){var state_val_46078 = (state_46077[(1)]);if((state_val_46078 === (7)))
{var inst_46068 = (state_46077[(2)]);var state_46077__$1 = state_46077;if(cljs.core.truth_(inst_46068))
{var statearr_46079_46108 = state_46077__$1;(statearr_46079_46108[(1)] = (15));
} else
{var statearr_46080_46109 = state_46077__$1;(statearr_46080_46109[(1)] = (16));
}
return cljs.core.constant$keyword$1094;
} else
{if((state_val_46078 === (1)))
{var state_46077__$1 = state_46077;var statearr_46081_46110 = state_46077__$1;(statearr_46081_46110[(2)] = null);
(statearr_46081_46110[(1)] = (2));
return cljs.core.constant$keyword$1094;
} else
{if((state_val_46078 === (4)))
{var inst_46051 = (state_46077[(7)]);var inst_46051__$1 = (state_46077[(2)]);var state_46077__$1 = (function (){var statearr_46082 = state_46077;(statearr_46082[(7)] = inst_46051__$1);
return statearr_46082;
})();if(cljs.core.truth_(inst_46051__$1))
{var statearr_46083_46111 = state_46077__$1;(statearr_46083_46111[(1)] = (5));
} else
{var statearr_46084_46112 = state_46077__$1;(statearr_46084_46112[(1)] = (6));
}
return cljs.core.constant$keyword$1094;
} else
{if((state_val_46078 === (15)))
{var state_46077__$1 = state_46077;var statearr_46085_46113 = state_46077__$1;(statearr_46085_46113[(2)] = null);
(statearr_46085_46113[(1)] = (2));
return cljs.core.constant$keyword$1094;
} else
{if((state_val_46078 === (13)))
{var state_46077__$1 = state_46077;var statearr_46086_46114 = state_46077__$1;(statearr_46086_46114[(2)] = null);
(statearr_46086_46114[(1)] = (14));
return cljs.core.constant$keyword$1094;
} else
{if((state_val_46078 === (6)))
{var state_46077__$1 = state_46077;var statearr_46087_46115 = state_46077__$1;(statearr_46087_46115[(2)] = null);
(statearr_46087_46115[(1)] = (7));
return cljs.core.constant$keyword$1094;
} else
{if((state_val_46078 === (17)))
{var inst_46073 = (state_46077[(2)]);var state_46077__$1 = state_46077;var statearr_46088_46116 = state_46077__$1;(statearr_46088_46116[(2)] = inst_46073);
(statearr_46088_46116[(1)] = (3));
return cljs.core.constant$keyword$1094;
} else
{if((state_val_46078 === (3)))
{var inst_46075 = (state_46077[(2)]);var state_46077__$1 = state_46077;return cljs.core.async.impl.ioc_helpers.return_chan(state_46077__$1,inst_46075);
} else
{if((state_val_46078 === (12)))
{var inst_46051 = (state_46077[(7)]);var inst_46061 = cljs.core.clj__GT_js(inst_46051);var inst_46062 = console.log(inst_46061);var state_46077__$1 = state_46077;var statearr_46089_46117 = state_46077__$1;(statearr_46089_46117[(2)] = inst_46062);
(statearr_46089_46117[(1)] = (14));
return cljs.core.constant$keyword$1094;
} else
{if((state_val_46078 === (2)))
{var state_46077__$1 = state_46077;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46077__$1,(4),ch);
} else
{if((state_val_46078 === (11)))
{var inst_46056 = (state_46077[(2)]);var state_46077__$1 = state_46077;var statearr_46090_46118 = state_46077__$1;(statearr_46090_46118[(2)] = inst_46056);
(statearr_46090_46118[(1)] = (10));
return cljs.core.constant$keyword$1094;
} else
{if((state_val_46078 === (9)))
{var state_46077__$1 = state_46077;var statearr_46091_46119 = state_46077__$1;(statearr_46091_46119[(2)] = null);
(statearr_46091_46119[(1)] = (10));
return cljs.core.constant$keyword$1094;
} else
{if((state_val_46078 === (5)))
{var state_46077__$1 = state_46077;if(cljs.core.truth_(delay))
{var statearr_46092_46120 = state_46077__$1;(statearr_46092_46120[(1)] = (8));
} else
{var statearr_46093_46121 = state_46077__$1;(statearr_46093_46121[(1)] = (9));
}
return cljs.core.constant$keyword$1094;
} else
{if((state_val_46078 === (14)))
{var inst_46051 = (state_46077[(7)]);var inst_46065 = (state_46077[(2)]);var state_46077__$1 = (function (){var statearr_46094 = state_46077;(statearr_46094[(8)] = inst_46065);
return statearr_46094;
})();var statearr_46095_46122 = state_46077__$1;(statearr_46095_46122[(2)] = inst_46051);
(statearr_46095_46122[(1)] = (7));
return cljs.core.constant$keyword$1094;
} else
{if((state_val_46078 === (16)))
{var state_46077__$1 = state_46077;var statearr_46096_46123 = state_46077__$1;(statearr_46096_46123[(2)] = null);
(statearr_46096_46123[(1)] = (17));
return cljs.core.constant$keyword$1094;
} else
{if((state_val_46078 === (10)))
{var inst_46059 = (state_46077[(2)]);var state_46077__$1 = (function (){var statearr_46097 = state_46077;(statearr_46097[(9)] = inst_46059);
return statearr_46097;
})();if(cljs.core.truth_(log))
{var statearr_46098_46124 = state_46077__$1;(statearr_46098_46124[(1)] = (12));
} else
{var statearr_46099_46125 = state_46077__$1;(statearr_46099_46125[(1)] = (13));
}
return cljs.core.constant$keyword$1094;
} else
{if((state_val_46078 === (8)))
{var inst_46054 = cljs.core.async.timeout(delay);var state_46077__$1 = state_46077;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46077__$1,(11),inst_46054);
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
});})(c__5708__auto___46107,map__46048,map__46048__$1,delay,log))
;return ((function (switch__5693__auto__,c__5708__auto___46107,map__46048,map__46048__$1,delay,log){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_46103 = [null,null,null,null,null,null,null,null,null,null];(statearr_46103[(0)] = state_machine__5694__auto__);
(statearr_46103[(1)] = (1));
return statearr_46103;
});
var state_machine__5694__auto____1 = (function (state_46077){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__(state_46077);if(cljs.core.keyword_identical_QMARK_(result__5696__auto__,cljs.core.constant$keyword$1094))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e46104){if((e46104 instanceof Object))
{var ex__5697__auto__ = e46104;var statearr_46105_46126 = state_46077;(statearr_46105_46126[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_46077);
return cljs.core.constant$keyword$1094;
} else
{throw e46104;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5695__auto__,cljs.core.constant$keyword$1094))
{{
var G__46127 = state_46077;
state_46077 = G__46127;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_46077){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_46077);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___46107,map__46048,map__46048__$1,delay,log))
})();var state__5710__auto__ = (function (){var statearr_46106 = (f__5709__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5709__auto__.cljs$core$IFn$_invoke$arity$0() : f__5709__auto__.call(null));(statearr_46106[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___46107);
return statearr_46106;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5710__auto__);
});})(c__5708__auto___46107,map__46048,map__46048__$1,delay,log))
);
return null;
};
var dorun_async = function (ch,var_args){
var p__45988 = null;if (arguments.length > 1) {
  p__45988 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return dorun_async__delegate.call(this,ch,p__45988);};
dorun_async.cljs$lang$maxFixedArity = 1;
dorun_async.cljs$lang$applyTo = (function (arglist__46128){
var ch = cljs.core.first(arglist__46128);
var p__45988 = cljs.core.rest(arglist__46128);
return dorun_async__delegate(ch,p__45988);
});
dorun_async.cljs$core$IFn$_invoke$arity$variadic = dorun_async__delegate;
return dorun_async;
})()
;
