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
var map_async__delegate = function (f,colls){var coll_chs = cljs.core.map.call(null,(function (coll){var ch = cljs.core.async.chan.call(null);cljs.core.async.onto_chan.call(null,ch,coll);
return ch;
}),colls);return cljs.core.async.map.call(null,f,coll_chs);
};
var map_async = function (f,var_args){
var colls = null;if (arguments.length > 1) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return map_async__delegate.call(this,f,colls);};
map_async.cljs$lang$maxFixedArity = 1;
map_async.cljs$lang$applyTo = (function (arglist__48094){
var f = cljs.core.first(arglist__48094);
var colls = cljs.core.rest(arglist__48094);
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
var dorun_async__delegate = function (ch,p__48095){var map__48155 = p__48095;var map__48155__$1 = ((cljs.core.seq_QMARK_.call(null,map__48155))?cljs.core.apply.call(null,cljs.core.hash_map,map__48155):map__48155);var delay = cljs.core.get.call(null,map__48155__$1,new cljs.core.Keyword(null,"delay","delay",-574225219));var log = cljs.core.get.call(null,map__48155__$1,new cljs.core.Keyword(null,"log","log",-1595516004));var c__5693__auto___48214 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5693__auto___48214,map__48155,map__48155__$1,delay,log){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto___48214,map__48155,map__48155__$1,delay,log){
return (function (state_48184){var state_val_48185 = (state_48184[(1)]);if((state_val_48185 === (7)))
{var inst_48175 = (state_48184[(2)]);var state_48184__$1 = state_48184;if(cljs.core.truth_(inst_48175))
{var statearr_48186_48215 = state_48184__$1;(statearr_48186_48215[(1)] = (15));
} else
{var statearr_48187_48216 = state_48184__$1;(statearr_48187_48216[(1)] = (16));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_48185 === (1)))
{var state_48184__$1 = state_48184;var statearr_48188_48217 = state_48184__$1;(statearr_48188_48217[(2)] = null);
(statearr_48188_48217[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_48185 === (4)))
{var inst_48158 = (state_48184[(7)]);var inst_48158__$1 = (state_48184[(2)]);var state_48184__$1 = (function (){var statearr_48189 = state_48184;(statearr_48189[(7)] = inst_48158__$1);
return statearr_48189;
})();if(cljs.core.truth_(inst_48158__$1))
{var statearr_48190_48218 = state_48184__$1;(statearr_48190_48218[(1)] = (5));
} else
{var statearr_48191_48219 = state_48184__$1;(statearr_48191_48219[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_48185 === (15)))
{var state_48184__$1 = state_48184;var statearr_48192_48220 = state_48184__$1;(statearr_48192_48220[(2)] = null);
(statearr_48192_48220[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_48185 === (13)))
{var state_48184__$1 = state_48184;var statearr_48193_48221 = state_48184__$1;(statearr_48193_48221[(2)] = null);
(statearr_48193_48221[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_48185 === (6)))
{var state_48184__$1 = state_48184;var statearr_48194_48222 = state_48184__$1;(statearr_48194_48222[(2)] = null);
(statearr_48194_48222[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_48185 === (17)))
{var inst_48180 = (state_48184[(2)]);var state_48184__$1 = state_48184;var statearr_48195_48223 = state_48184__$1;(statearr_48195_48223[(2)] = inst_48180);
(statearr_48195_48223[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_48185 === (3)))
{var inst_48182 = (state_48184[(2)]);var state_48184__$1 = state_48184;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48184__$1,inst_48182);
} else
{if((state_val_48185 === (12)))
{var inst_48158 = (state_48184[(7)]);var inst_48168 = cljs.core.clj__GT_js.call(null,inst_48158);var inst_48169 = console.log(inst_48168);var state_48184__$1 = state_48184;var statearr_48196_48224 = state_48184__$1;(statearr_48196_48224[(2)] = inst_48169);
(statearr_48196_48224[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_48185 === (2)))
{var state_48184__$1 = state_48184;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48184__$1,(4),ch);
} else
{if((state_val_48185 === (11)))
{var inst_48163 = (state_48184[(2)]);var state_48184__$1 = state_48184;var statearr_48197_48225 = state_48184__$1;(statearr_48197_48225[(2)] = inst_48163);
(statearr_48197_48225[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_48185 === (9)))
{var state_48184__$1 = state_48184;var statearr_48198_48226 = state_48184__$1;(statearr_48198_48226[(2)] = null);
(statearr_48198_48226[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_48185 === (5)))
{var state_48184__$1 = state_48184;if(cljs.core.truth_(delay))
{var statearr_48199_48227 = state_48184__$1;(statearr_48199_48227[(1)] = (8));
} else
{var statearr_48200_48228 = state_48184__$1;(statearr_48200_48228[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_48185 === (14)))
{var inst_48158 = (state_48184[(7)]);var inst_48172 = (state_48184[(2)]);var state_48184__$1 = (function (){var statearr_48201 = state_48184;(statearr_48201[(8)] = inst_48172);
return statearr_48201;
})();var statearr_48202_48229 = state_48184__$1;(statearr_48202_48229[(2)] = inst_48158);
(statearr_48202_48229[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_48185 === (16)))
{var state_48184__$1 = state_48184;var statearr_48203_48230 = state_48184__$1;(statearr_48203_48230[(2)] = null);
(statearr_48203_48230[(1)] = (17));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_48185 === (10)))
{var inst_48166 = (state_48184[(2)]);var state_48184__$1 = (function (){var statearr_48204 = state_48184;(statearr_48204[(9)] = inst_48166);
return statearr_48204;
})();if(cljs.core.truth_(log))
{var statearr_48205_48231 = state_48184__$1;(statearr_48205_48231[(1)] = (12));
} else
{var statearr_48206_48232 = state_48184__$1;(statearr_48206_48232[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_48185 === (8)))
{var inst_48161 = cljs.core.async.timeout.call(null,delay);var state_48184__$1 = state_48184;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48184__$1,(11),inst_48161);
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
});})(c__5693__auto___48214,map__48155,map__48155__$1,delay,log))
;return ((function (switch__5678__auto__,c__5693__auto___48214,map__48155,map__48155__$1,delay,log){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_48210 = [null,null,null,null,null,null,null,null,null,null];(statearr_48210[(0)] = state_machine__5679__auto__);
(statearr_48210[(1)] = (1));
return statearr_48210;
});
var state_machine__5679__auto____1 = (function (state_48184){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_48184);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e48211){if((e48211 instanceof Object))
{var ex__5682__auto__ = e48211;var statearr_48212_48233 = state_48184;(statearr_48212_48233[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48184);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e48211;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__48234 = state_48184;
state_48184 = G__48234;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_48184){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_48184);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto___48214,map__48155,map__48155__$1,delay,log))
})();var state__5695__auto__ = (function (){var statearr_48213 = f__5694__auto__.call(null);(statearr_48213[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto___48214);
return statearr_48213;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5695__auto__);
});})(c__5693__auto___48214,map__48155,map__48155__$1,delay,log))
);
return null;
};
var dorun_async = function (ch,var_args){
var p__48095 = null;if (arguments.length > 1) {
  p__48095 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return dorun_async__delegate.call(this,ch,p__48095);};
dorun_async.cljs$lang$maxFixedArity = 1;
dorun_async.cljs$lang$applyTo = (function (arglist__48235){
var ch = cljs.core.first(arglist__48235);
var p__48095 = cljs.core.rest(arglist__48235);
return dorun_async__delegate(ch,p__48095);
});
dorun_async.cljs$core$IFn$_invoke$arity$variadic = dorun_async__delegate;
return dorun_async;
})()
;

//# sourceMappingURL=async.js.map