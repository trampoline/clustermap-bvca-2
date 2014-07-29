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
map_async.cljs$lang$applyTo = (function (arglist__36890){
var f = cljs.core.first(arglist__36890);
var colls = cljs.core.rest(arglist__36890);
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
var dorun_async__delegate = function (ch,p__36891){var map__36951 = p__36891;var map__36951__$1 = ((cljs.core.seq_QMARK_(map__36951))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36951):map__36951);var delay = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36951__$1,cljs.core.constant$keyword$1135);var log = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36951__$1,cljs.core.constant$keyword$1047);var c__5693__auto___37010 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5693__auto___37010,map__36951,map__36951__$1,delay,log){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto___37010,map__36951,map__36951__$1,delay,log){
return (function (state_36980){var state_val_36981 = (state_36980[(1)]);if((state_val_36981 === (7)))
{var inst_36971 = (state_36980[(2)]);var state_36980__$1 = state_36980;if(cljs.core.truth_(inst_36971))
{var statearr_36982_37011 = state_36980__$1;(statearr_36982_37011[(1)] = (15));
} else
{var statearr_36983_37012 = state_36980__$1;(statearr_36983_37012[(1)] = (16));
}
return cljs.core.constant$keyword$783;
} else
{if((state_val_36981 === (1)))
{var state_36980__$1 = state_36980;var statearr_36984_37013 = state_36980__$1;(statearr_36984_37013[(2)] = null);
(statearr_36984_37013[(1)] = (2));
return cljs.core.constant$keyword$783;
} else
{if((state_val_36981 === (4)))
{var inst_36954 = (state_36980[(7)]);var inst_36954__$1 = (state_36980[(2)]);var state_36980__$1 = (function (){var statearr_36985 = state_36980;(statearr_36985[(7)] = inst_36954__$1);
return statearr_36985;
})();if(cljs.core.truth_(inst_36954__$1))
{var statearr_36986_37014 = state_36980__$1;(statearr_36986_37014[(1)] = (5));
} else
{var statearr_36987_37015 = state_36980__$1;(statearr_36987_37015[(1)] = (6));
}
return cljs.core.constant$keyword$783;
} else
{if((state_val_36981 === (15)))
{var state_36980__$1 = state_36980;var statearr_36988_37016 = state_36980__$1;(statearr_36988_37016[(2)] = null);
(statearr_36988_37016[(1)] = (2));
return cljs.core.constant$keyword$783;
} else
{if((state_val_36981 === (13)))
{var state_36980__$1 = state_36980;var statearr_36989_37017 = state_36980__$1;(statearr_36989_37017[(2)] = null);
(statearr_36989_37017[(1)] = (14));
return cljs.core.constant$keyword$783;
} else
{if((state_val_36981 === (6)))
{var state_36980__$1 = state_36980;var statearr_36990_37018 = state_36980__$1;(statearr_36990_37018[(2)] = null);
(statearr_36990_37018[(1)] = (7));
return cljs.core.constant$keyword$783;
} else
{if((state_val_36981 === (17)))
{var inst_36976 = (state_36980[(2)]);var state_36980__$1 = state_36980;var statearr_36991_37019 = state_36980__$1;(statearr_36991_37019[(2)] = inst_36976);
(statearr_36991_37019[(1)] = (3));
return cljs.core.constant$keyword$783;
} else
{if((state_val_36981 === (3)))
{var inst_36978 = (state_36980[(2)]);var state_36980__$1 = state_36980;return cljs.core.async.impl.ioc_helpers.return_chan(state_36980__$1,inst_36978);
} else
{if((state_val_36981 === (12)))
{var inst_36954 = (state_36980[(7)]);var inst_36964 = cljs.core.clj__GT_js(inst_36954);var inst_36965 = console.log(inst_36964);var state_36980__$1 = state_36980;var statearr_36992_37020 = state_36980__$1;(statearr_36992_37020[(2)] = inst_36965);
(statearr_36992_37020[(1)] = (14));
return cljs.core.constant$keyword$783;
} else
{if((state_val_36981 === (2)))
{var state_36980__$1 = state_36980;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36980__$1,(4),ch);
} else
{if((state_val_36981 === (11)))
{var inst_36959 = (state_36980[(2)]);var state_36980__$1 = state_36980;var statearr_36993_37021 = state_36980__$1;(statearr_36993_37021[(2)] = inst_36959);
(statearr_36993_37021[(1)] = (10));
return cljs.core.constant$keyword$783;
} else
{if((state_val_36981 === (9)))
{var state_36980__$1 = state_36980;var statearr_36994_37022 = state_36980__$1;(statearr_36994_37022[(2)] = null);
(statearr_36994_37022[(1)] = (10));
return cljs.core.constant$keyword$783;
} else
{if((state_val_36981 === (5)))
{var state_36980__$1 = state_36980;if(cljs.core.truth_(delay))
{var statearr_36995_37023 = state_36980__$1;(statearr_36995_37023[(1)] = (8));
} else
{var statearr_36996_37024 = state_36980__$1;(statearr_36996_37024[(1)] = (9));
}
return cljs.core.constant$keyword$783;
} else
{if((state_val_36981 === (14)))
{var inst_36954 = (state_36980[(7)]);var inst_36968 = (state_36980[(2)]);var state_36980__$1 = (function (){var statearr_36997 = state_36980;(statearr_36997[(8)] = inst_36968);
return statearr_36997;
})();var statearr_36998_37025 = state_36980__$1;(statearr_36998_37025[(2)] = inst_36954);
(statearr_36998_37025[(1)] = (7));
return cljs.core.constant$keyword$783;
} else
{if((state_val_36981 === (16)))
{var state_36980__$1 = state_36980;var statearr_36999_37026 = state_36980__$1;(statearr_36999_37026[(2)] = null);
(statearr_36999_37026[(1)] = (17));
return cljs.core.constant$keyword$783;
} else
{if((state_val_36981 === (10)))
{var inst_36962 = (state_36980[(2)]);var state_36980__$1 = (function (){var statearr_37000 = state_36980;(statearr_37000[(9)] = inst_36962);
return statearr_37000;
})();if(cljs.core.truth_(log))
{var statearr_37001_37027 = state_36980__$1;(statearr_37001_37027[(1)] = (12));
} else
{var statearr_37002_37028 = state_36980__$1;(statearr_37002_37028[(1)] = (13));
}
return cljs.core.constant$keyword$783;
} else
{if((state_val_36981 === (8)))
{var inst_36957 = cljs.core.async.timeout(delay);var state_36980__$1 = state_36980;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36980__$1,(11),inst_36957);
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
});})(c__5693__auto___37010,map__36951,map__36951__$1,delay,log))
;return ((function (switch__5678__auto__,c__5693__auto___37010,map__36951,map__36951__$1,delay,log){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_37006 = [null,null,null,null,null,null,null,null,null,null];(statearr_37006[(0)] = state_machine__5679__auto__);
(statearr_37006[(1)] = (1));
return statearr_37006;
});
var state_machine__5679__auto____1 = (function (state_36980){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__(state_36980);if(cljs.core.keyword_identical_QMARK_(result__5681__auto__,cljs.core.constant$keyword$783))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e37007){if((e37007 instanceof Object))
{var ex__5682__auto__ = e37007;var statearr_37008_37029 = state_36980;(statearr_37008_37029[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_36980);
return cljs.core.constant$keyword$783;
} else
{if(cljs.core.constant$keyword$774)
{throw e37007;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5680__auto__,cljs.core.constant$keyword$783))
{{
var G__37030 = state_36980;
state_36980 = G__37030;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_36980){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_36980);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto___37010,map__36951,map__36951__$1,delay,log))
})();var state__5695__auto__ = (function (){var statearr_37009 = (f__5694__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5694__auto__.cljs$core$IFn$_invoke$arity$0() : f__5694__auto__.call(null));(statearr_37009[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto___37010);
return statearr_37009;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5695__auto__);
});})(c__5693__auto___37010,map__36951,map__36951__$1,delay,log))
);
return null;
};
var dorun_async = function (ch,var_args){
var p__36891 = null;if (arguments.length > 1) {
  p__36891 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return dorun_async__delegate.call(this,ch,p__36891);};
dorun_async.cljs$lang$maxFixedArity = 1;
dorun_async.cljs$lang$applyTo = (function (arglist__37031){
var ch = cljs.core.first(arglist__37031);
var p__36891 = cljs.core.rest(arglist__37031);
return dorun_async__delegate(ch,p__36891);
});
dorun_async.cljs$core$IFn$_invoke$arity$variadic = dorun_async__delegate;
return dorun_async;
})()
;
