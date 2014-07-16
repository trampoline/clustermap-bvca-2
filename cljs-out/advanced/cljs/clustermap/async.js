// Compiled by ClojureScript 0.0-2261
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
map_async.cljs$lang$applyTo = (function (arglist__36057){
var f = cljs.core.first(arglist__36057);
var colls = cljs.core.rest(arglist__36057);
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
var dorun_async__delegate = function (ch,p__36058){var map__36118 = p__36058;var map__36118__$1 = ((cljs.core.seq_QMARK_(map__36118))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36118):map__36118);var delay = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36118__$1,cljs.core.constant$keyword$1108);var log = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36118__$1,cljs.core.constant$keyword$1026);var c__5693__auto___36177 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5693__auto___36177,map__36118,map__36118__$1,delay,log){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto___36177,map__36118,map__36118__$1,delay,log){
return (function (state_36147){var state_val_36148 = (state_36147[(1)]);if((state_val_36148 === (7)))
{var inst_36138 = (state_36147[(2)]);var state_36147__$1 = state_36147;if(cljs.core.truth_(inst_36138))
{var statearr_36149_36178 = state_36147__$1;(statearr_36149_36178[(1)] = (15));
} else
{var statearr_36150_36179 = state_36147__$1;(statearr_36150_36179[(1)] = (16));
}
return cljs.core.constant$keyword$765;
} else
{if((state_val_36148 === (1)))
{var state_36147__$1 = state_36147;var statearr_36151_36180 = state_36147__$1;(statearr_36151_36180[(2)] = null);
(statearr_36151_36180[(1)] = (2));
return cljs.core.constant$keyword$765;
} else
{if((state_val_36148 === (4)))
{var inst_36121 = (state_36147[(7)]);var inst_36121__$1 = (state_36147[(2)]);var state_36147__$1 = (function (){var statearr_36152 = state_36147;(statearr_36152[(7)] = inst_36121__$1);
return statearr_36152;
})();if(cljs.core.truth_(inst_36121__$1))
{var statearr_36153_36181 = state_36147__$1;(statearr_36153_36181[(1)] = (5));
} else
{var statearr_36154_36182 = state_36147__$1;(statearr_36154_36182[(1)] = (6));
}
return cljs.core.constant$keyword$765;
} else
{if((state_val_36148 === (15)))
{var state_36147__$1 = state_36147;var statearr_36155_36183 = state_36147__$1;(statearr_36155_36183[(2)] = null);
(statearr_36155_36183[(1)] = (2));
return cljs.core.constant$keyword$765;
} else
{if((state_val_36148 === (13)))
{var state_36147__$1 = state_36147;var statearr_36156_36184 = state_36147__$1;(statearr_36156_36184[(2)] = null);
(statearr_36156_36184[(1)] = (14));
return cljs.core.constant$keyword$765;
} else
{if((state_val_36148 === (6)))
{var state_36147__$1 = state_36147;var statearr_36157_36185 = state_36147__$1;(statearr_36157_36185[(2)] = null);
(statearr_36157_36185[(1)] = (7));
return cljs.core.constant$keyword$765;
} else
{if((state_val_36148 === (17)))
{var inst_36143 = (state_36147[(2)]);var state_36147__$1 = state_36147;var statearr_36158_36186 = state_36147__$1;(statearr_36158_36186[(2)] = inst_36143);
(statearr_36158_36186[(1)] = (3));
return cljs.core.constant$keyword$765;
} else
{if((state_val_36148 === (3)))
{var inst_36145 = (state_36147[(2)]);var state_36147__$1 = state_36147;return cljs.core.async.impl.ioc_helpers.return_chan(state_36147__$1,inst_36145);
} else
{if((state_val_36148 === (12)))
{var inst_36121 = (state_36147[(7)]);var inst_36131 = cljs.core.clj__GT_js(inst_36121);var inst_36132 = console.log(inst_36131);var state_36147__$1 = state_36147;var statearr_36159_36187 = state_36147__$1;(statearr_36159_36187[(2)] = inst_36132);
(statearr_36159_36187[(1)] = (14));
return cljs.core.constant$keyword$765;
} else
{if((state_val_36148 === (2)))
{var state_36147__$1 = state_36147;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36147__$1,(4),ch);
} else
{if((state_val_36148 === (11)))
{var inst_36126 = (state_36147[(2)]);var state_36147__$1 = state_36147;var statearr_36160_36188 = state_36147__$1;(statearr_36160_36188[(2)] = inst_36126);
(statearr_36160_36188[(1)] = (10));
return cljs.core.constant$keyword$765;
} else
{if((state_val_36148 === (9)))
{var state_36147__$1 = state_36147;var statearr_36161_36189 = state_36147__$1;(statearr_36161_36189[(2)] = null);
(statearr_36161_36189[(1)] = (10));
return cljs.core.constant$keyword$765;
} else
{if((state_val_36148 === (5)))
{var state_36147__$1 = state_36147;if(cljs.core.truth_(delay))
{var statearr_36162_36190 = state_36147__$1;(statearr_36162_36190[(1)] = (8));
} else
{var statearr_36163_36191 = state_36147__$1;(statearr_36163_36191[(1)] = (9));
}
return cljs.core.constant$keyword$765;
} else
{if((state_val_36148 === (14)))
{var inst_36121 = (state_36147[(7)]);var inst_36135 = (state_36147[(2)]);var state_36147__$1 = (function (){var statearr_36164 = state_36147;(statearr_36164[(8)] = inst_36135);
return statearr_36164;
})();var statearr_36165_36192 = state_36147__$1;(statearr_36165_36192[(2)] = inst_36121);
(statearr_36165_36192[(1)] = (7));
return cljs.core.constant$keyword$765;
} else
{if((state_val_36148 === (16)))
{var state_36147__$1 = state_36147;var statearr_36166_36193 = state_36147__$1;(statearr_36166_36193[(2)] = null);
(statearr_36166_36193[(1)] = (17));
return cljs.core.constant$keyword$765;
} else
{if((state_val_36148 === (10)))
{var inst_36129 = (state_36147[(2)]);var state_36147__$1 = (function (){var statearr_36167 = state_36147;(statearr_36167[(9)] = inst_36129);
return statearr_36167;
})();if(cljs.core.truth_(log))
{var statearr_36168_36194 = state_36147__$1;(statearr_36168_36194[(1)] = (12));
} else
{var statearr_36169_36195 = state_36147__$1;(statearr_36169_36195[(1)] = (13));
}
return cljs.core.constant$keyword$765;
} else
{if((state_val_36148 === (8)))
{var inst_36124 = cljs.core.async.timeout(delay);var state_36147__$1 = state_36147;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36147__$1,(11),inst_36124);
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
});})(c__5693__auto___36177,map__36118,map__36118__$1,delay,log))
;return ((function (switch__5678__auto__,c__5693__auto___36177,map__36118,map__36118__$1,delay,log){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_36173 = [null,null,null,null,null,null,null,null,null,null];(statearr_36173[(0)] = state_machine__5679__auto__);
(statearr_36173[(1)] = (1));
return statearr_36173;
});
var state_machine__5679__auto____1 = (function (state_36147){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__(state_36147);if(cljs.core.keyword_identical_QMARK_(result__5681__auto__,cljs.core.constant$keyword$765))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e36174){if((e36174 instanceof Object))
{var ex__5682__auto__ = e36174;var statearr_36175_36196 = state_36147;(statearr_36175_36196[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_36147);
return cljs.core.constant$keyword$765;
} else
{if(cljs.core.constant$keyword$756)
{throw e36174;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5680__auto__,cljs.core.constant$keyword$765))
{{
var G__36197 = state_36147;
state_36147 = G__36197;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_36147){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_36147);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto___36177,map__36118,map__36118__$1,delay,log))
})();var state__5695__auto__ = (function (){var statearr_36176 = (f__5694__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5694__auto__.cljs$core$IFn$_invoke$arity$0() : f__5694__auto__.call(null));(statearr_36176[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto___36177);
return statearr_36176;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5695__auto__);
});})(c__5693__auto___36177,map__36118,map__36118__$1,delay,log))
);
return null;
};
var dorun_async = function (ch,var_args){
var p__36058 = null;if (arguments.length > 1) {
  p__36058 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return dorun_async__delegate.call(this,ch,p__36058);};
dorun_async.cljs$lang$maxFixedArity = 1;
dorun_async.cljs$lang$applyTo = (function (arglist__36198){
var ch = cljs.core.first(arglist__36198);
var p__36058 = cljs.core.rest(arglist__36198);
return dorun_async__delegate(ch,p__36058);
});
dorun_async.cljs$core$IFn$_invoke$arity$variadic = dorun_async__delegate;
return dorun_async;
})()
;
