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
map_async.cljs$lang$applyTo = (function (arglist__45964){
var f = cljs.core.first(arglist__45964);
var colls = cljs.core.rest(arglist__45964);
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
var dorun_async__delegate = function (ch,p__45965){var map__46025 = p__45965;var map__46025__$1 = ((cljs.core.seq_QMARK_(map__46025))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46025):map__46025);var delay = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46025__$1,cljs.core.constant$keyword$1581);var log = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46025__$1,cljs.core.constant$keyword$1498);var c__5708__auto___46084 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5708__auto___46084,map__46025,map__46025__$1,delay,log){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___46084,map__46025,map__46025__$1,delay,log){
return (function (state_46054){var state_val_46055 = (state_46054[(1)]);if((state_val_46055 === (7)))
{var inst_46045 = (state_46054[(2)]);var state_46054__$1 = state_46054;if(cljs.core.truth_(inst_46045))
{var statearr_46056_46085 = state_46054__$1;(statearr_46056_46085[(1)] = (15));
} else
{var statearr_46057_46086 = state_46054__$1;(statearr_46057_46086[(1)] = (16));
}
return cljs.core.constant$keyword$1094;
} else
{if((state_val_46055 === (1)))
{var state_46054__$1 = state_46054;var statearr_46058_46087 = state_46054__$1;(statearr_46058_46087[(2)] = null);
(statearr_46058_46087[(1)] = (2));
return cljs.core.constant$keyword$1094;
} else
{if((state_val_46055 === (4)))
{var inst_46028 = (state_46054[(7)]);var inst_46028__$1 = (state_46054[(2)]);var state_46054__$1 = (function (){var statearr_46059 = state_46054;(statearr_46059[(7)] = inst_46028__$1);
return statearr_46059;
})();if(cljs.core.truth_(inst_46028__$1))
{var statearr_46060_46088 = state_46054__$1;(statearr_46060_46088[(1)] = (5));
} else
{var statearr_46061_46089 = state_46054__$1;(statearr_46061_46089[(1)] = (6));
}
return cljs.core.constant$keyword$1094;
} else
{if((state_val_46055 === (15)))
{var state_46054__$1 = state_46054;var statearr_46062_46090 = state_46054__$1;(statearr_46062_46090[(2)] = null);
(statearr_46062_46090[(1)] = (2));
return cljs.core.constant$keyword$1094;
} else
{if((state_val_46055 === (13)))
{var state_46054__$1 = state_46054;var statearr_46063_46091 = state_46054__$1;(statearr_46063_46091[(2)] = null);
(statearr_46063_46091[(1)] = (14));
return cljs.core.constant$keyword$1094;
} else
{if((state_val_46055 === (6)))
{var state_46054__$1 = state_46054;var statearr_46064_46092 = state_46054__$1;(statearr_46064_46092[(2)] = null);
(statearr_46064_46092[(1)] = (7));
return cljs.core.constant$keyword$1094;
} else
{if((state_val_46055 === (17)))
{var inst_46050 = (state_46054[(2)]);var state_46054__$1 = state_46054;var statearr_46065_46093 = state_46054__$1;(statearr_46065_46093[(2)] = inst_46050);
(statearr_46065_46093[(1)] = (3));
return cljs.core.constant$keyword$1094;
} else
{if((state_val_46055 === (3)))
{var inst_46052 = (state_46054[(2)]);var state_46054__$1 = state_46054;return cljs.core.async.impl.ioc_helpers.return_chan(state_46054__$1,inst_46052);
} else
{if((state_val_46055 === (12)))
{var inst_46028 = (state_46054[(7)]);var inst_46038 = cljs.core.clj__GT_js(inst_46028);var inst_46039 = console.log(inst_46038);var state_46054__$1 = state_46054;var statearr_46066_46094 = state_46054__$1;(statearr_46066_46094[(2)] = inst_46039);
(statearr_46066_46094[(1)] = (14));
return cljs.core.constant$keyword$1094;
} else
{if((state_val_46055 === (2)))
{var state_46054__$1 = state_46054;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46054__$1,(4),ch);
} else
{if((state_val_46055 === (11)))
{var inst_46033 = (state_46054[(2)]);var state_46054__$1 = state_46054;var statearr_46067_46095 = state_46054__$1;(statearr_46067_46095[(2)] = inst_46033);
(statearr_46067_46095[(1)] = (10));
return cljs.core.constant$keyword$1094;
} else
{if((state_val_46055 === (9)))
{var state_46054__$1 = state_46054;var statearr_46068_46096 = state_46054__$1;(statearr_46068_46096[(2)] = null);
(statearr_46068_46096[(1)] = (10));
return cljs.core.constant$keyword$1094;
} else
{if((state_val_46055 === (5)))
{var state_46054__$1 = state_46054;if(cljs.core.truth_(delay))
{var statearr_46069_46097 = state_46054__$1;(statearr_46069_46097[(1)] = (8));
} else
{var statearr_46070_46098 = state_46054__$1;(statearr_46070_46098[(1)] = (9));
}
return cljs.core.constant$keyword$1094;
} else
{if((state_val_46055 === (14)))
{var inst_46028 = (state_46054[(7)]);var inst_46042 = (state_46054[(2)]);var state_46054__$1 = (function (){var statearr_46071 = state_46054;(statearr_46071[(8)] = inst_46042);
return statearr_46071;
})();var statearr_46072_46099 = state_46054__$1;(statearr_46072_46099[(2)] = inst_46028);
(statearr_46072_46099[(1)] = (7));
return cljs.core.constant$keyword$1094;
} else
{if((state_val_46055 === (16)))
{var state_46054__$1 = state_46054;var statearr_46073_46100 = state_46054__$1;(statearr_46073_46100[(2)] = null);
(statearr_46073_46100[(1)] = (17));
return cljs.core.constant$keyword$1094;
} else
{if((state_val_46055 === (10)))
{var inst_46036 = (state_46054[(2)]);var state_46054__$1 = (function (){var statearr_46074 = state_46054;(statearr_46074[(9)] = inst_46036);
return statearr_46074;
})();if(cljs.core.truth_(log))
{var statearr_46075_46101 = state_46054__$1;(statearr_46075_46101[(1)] = (12));
} else
{var statearr_46076_46102 = state_46054__$1;(statearr_46076_46102[(1)] = (13));
}
return cljs.core.constant$keyword$1094;
} else
{if((state_val_46055 === (8)))
{var inst_46031 = cljs.core.async.timeout(delay);var state_46054__$1 = state_46054;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46054__$1,(11),inst_46031);
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
});})(c__5708__auto___46084,map__46025,map__46025__$1,delay,log))
;return ((function (switch__5693__auto__,c__5708__auto___46084,map__46025,map__46025__$1,delay,log){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_46080 = [null,null,null,null,null,null,null,null,null,null];(statearr_46080[(0)] = state_machine__5694__auto__);
(statearr_46080[(1)] = (1));
return statearr_46080;
});
var state_machine__5694__auto____1 = (function (state_46054){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__(state_46054);if(cljs.core.keyword_identical_QMARK_(result__5696__auto__,cljs.core.constant$keyword$1094))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e46081){if((e46081 instanceof Object))
{var ex__5697__auto__ = e46081;var statearr_46082_46103 = state_46054;(statearr_46082_46103[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_46054);
return cljs.core.constant$keyword$1094;
} else
{throw e46081;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5695__auto__,cljs.core.constant$keyword$1094))
{{
var G__46104 = state_46054;
state_46054 = G__46104;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_46054){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_46054);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___46084,map__46025,map__46025__$1,delay,log))
})();var state__5710__auto__ = (function (){var statearr_46083 = (f__5709__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5709__auto__.cljs$core$IFn$_invoke$arity$0() : f__5709__auto__.call(null));(statearr_46083[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___46084);
return statearr_46083;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5710__auto__);
});})(c__5708__auto___46084,map__46025,map__46025__$1,delay,log))
);
return null;
};
var dorun_async = function (ch,var_args){
var p__45965 = null;if (arguments.length > 1) {
  p__45965 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return dorun_async__delegate.call(this,ch,p__45965);};
dorun_async.cljs$lang$maxFixedArity = 1;
dorun_async.cljs$lang$applyTo = (function (arglist__46105){
var ch = cljs.core.first(arglist__46105);
var p__45965 = cljs.core.rest(arglist__46105);
return dorun_async__delegate(ch,p__45965);
});
dorun_async.cljs$core$IFn$_invoke$arity$variadic = dorun_async__delegate;
return dorun_async;
})()
;
