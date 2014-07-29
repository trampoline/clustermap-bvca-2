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
var map_async__delegate = function (f,colls){var coll_chs = cljs.core.map.call(null,(function (coll){var ch = cljs.core.async.chan.call(null);cljs.core.async.onto_chan.call(null,ch,coll);
return ch;
}),colls);return cljs.core.async.map.call(null,f,coll_chs);
};
var map_async = function (f,var_args){
var colls = null;if (arguments.length > 1) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return map_async__delegate.call(this,f,colls);};
map_async.cljs$lang$maxFixedArity = 1;
map_async.cljs$lang$applyTo = (function (arglist__49213){
var f = cljs.core.first(arglist__49213);
var colls = cljs.core.rest(arglist__49213);
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
var dorun_async__delegate = function (ch,p__49214){var map__49274 = p__49214;var map__49274__$1 = ((cljs.core.seq_QMARK_.call(null,map__49274))?cljs.core.apply.call(null,cljs.core.hash_map,map__49274):map__49274);var delay = cljs.core.get.call(null,map__49274__$1,new cljs.core.Keyword(null,"delay","delay",-574225219));var log = cljs.core.get.call(null,map__49274__$1,new cljs.core.Keyword(null,"log","log",-1595516004));var c__5693__auto___49333 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5693__auto___49333,map__49274,map__49274__$1,delay,log){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto___49333,map__49274,map__49274__$1,delay,log){
return (function (state_49303){var state_val_49304 = (state_49303[(1)]);if((state_val_49304 === (7)))
{var inst_49294 = (state_49303[(2)]);var state_49303__$1 = state_49303;if(cljs.core.truth_(inst_49294))
{var statearr_49305_49334 = state_49303__$1;(statearr_49305_49334[(1)] = (15));
} else
{var statearr_49306_49335 = state_49303__$1;(statearr_49306_49335[(1)] = (16));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_49304 === (1)))
{var state_49303__$1 = state_49303;var statearr_49307_49336 = state_49303__$1;(statearr_49307_49336[(2)] = null);
(statearr_49307_49336[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_49304 === (4)))
{var inst_49277 = (state_49303[(7)]);var inst_49277__$1 = (state_49303[(2)]);var state_49303__$1 = (function (){var statearr_49308 = state_49303;(statearr_49308[(7)] = inst_49277__$1);
return statearr_49308;
})();if(cljs.core.truth_(inst_49277__$1))
{var statearr_49309_49337 = state_49303__$1;(statearr_49309_49337[(1)] = (5));
} else
{var statearr_49310_49338 = state_49303__$1;(statearr_49310_49338[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_49304 === (15)))
{var state_49303__$1 = state_49303;var statearr_49311_49339 = state_49303__$1;(statearr_49311_49339[(2)] = null);
(statearr_49311_49339[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_49304 === (13)))
{var state_49303__$1 = state_49303;var statearr_49312_49340 = state_49303__$1;(statearr_49312_49340[(2)] = null);
(statearr_49312_49340[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_49304 === (6)))
{var state_49303__$1 = state_49303;var statearr_49313_49341 = state_49303__$1;(statearr_49313_49341[(2)] = null);
(statearr_49313_49341[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_49304 === (17)))
{var inst_49299 = (state_49303[(2)]);var state_49303__$1 = state_49303;var statearr_49314_49342 = state_49303__$1;(statearr_49314_49342[(2)] = inst_49299);
(statearr_49314_49342[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_49304 === (3)))
{var inst_49301 = (state_49303[(2)]);var state_49303__$1 = state_49303;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49303__$1,inst_49301);
} else
{if((state_val_49304 === (12)))
{var inst_49277 = (state_49303[(7)]);var inst_49287 = cljs.core.clj__GT_js.call(null,inst_49277);var inst_49288 = console.log(inst_49287);var state_49303__$1 = state_49303;var statearr_49315_49343 = state_49303__$1;(statearr_49315_49343[(2)] = inst_49288);
(statearr_49315_49343[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_49304 === (2)))
{var state_49303__$1 = state_49303;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49303__$1,(4),ch);
} else
{if((state_val_49304 === (11)))
{var inst_49282 = (state_49303[(2)]);var state_49303__$1 = state_49303;var statearr_49316_49344 = state_49303__$1;(statearr_49316_49344[(2)] = inst_49282);
(statearr_49316_49344[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_49304 === (9)))
{var state_49303__$1 = state_49303;var statearr_49317_49345 = state_49303__$1;(statearr_49317_49345[(2)] = null);
(statearr_49317_49345[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_49304 === (5)))
{var state_49303__$1 = state_49303;if(cljs.core.truth_(delay))
{var statearr_49318_49346 = state_49303__$1;(statearr_49318_49346[(1)] = (8));
} else
{var statearr_49319_49347 = state_49303__$1;(statearr_49319_49347[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_49304 === (14)))
{var inst_49277 = (state_49303[(7)]);var inst_49291 = (state_49303[(2)]);var state_49303__$1 = (function (){var statearr_49320 = state_49303;(statearr_49320[(8)] = inst_49291);
return statearr_49320;
})();var statearr_49321_49348 = state_49303__$1;(statearr_49321_49348[(2)] = inst_49277);
(statearr_49321_49348[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_49304 === (16)))
{var state_49303__$1 = state_49303;var statearr_49322_49349 = state_49303__$1;(statearr_49322_49349[(2)] = null);
(statearr_49322_49349[(1)] = (17));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_49304 === (10)))
{var inst_49285 = (state_49303[(2)]);var state_49303__$1 = (function (){var statearr_49323 = state_49303;(statearr_49323[(9)] = inst_49285);
return statearr_49323;
})();if(cljs.core.truth_(log))
{var statearr_49324_49350 = state_49303__$1;(statearr_49324_49350[(1)] = (12));
} else
{var statearr_49325_49351 = state_49303__$1;(statearr_49325_49351[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_49304 === (8)))
{var inst_49280 = cljs.core.async.timeout.call(null,delay);var state_49303__$1 = state_49303;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49303__$1,(11),inst_49280);
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
});})(c__5693__auto___49333,map__49274,map__49274__$1,delay,log))
;return ((function (switch__5678__auto__,c__5693__auto___49333,map__49274,map__49274__$1,delay,log){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_49329 = [null,null,null,null,null,null,null,null,null,null];(statearr_49329[(0)] = state_machine__5679__auto__);
(statearr_49329[(1)] = (1));
return statearr_49329;
});
var state_machine__5679__auto____1 = (function (state_49303){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_49303);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e49330){if((e49330 instanceof Object))
{var ex__5682__auto__ = e49330;var statearr_49331_49352 = state_49303;(statearr_49331_49352[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49303);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e49330;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__49353 = state_49303;
state_49303 = G__49353;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_49303){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_49303);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto___49333,map__49274,map__49274__$1,delay,log))
})();var state__5695__auto__ = (function (){var statearr_49332 = f__5694__auto__.call(null);(statearr_49332[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto___49333);
return statearr_49332;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5695__auto__);
});})(c__5693__auto___49333,map__49274,map__49274__$1,delay,log))
);
return null;
};
var dorun_async = function (ch,var_args){
var p__49214 = null;if (arguments.length > 1) {
  p__49214 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return dorun_async__delegate.call(this,ch,p__49214);};
dorun_async.cljs$lang$maxFixedArity = 1;
dorun_async.cljs$lang$applyTo = (function (arglist__49354){
var ch = cljs.core.first(arglist__49354);
var p__49214 = cljs.core.rest(arglist__49354);
return dorun_async__delegate(ch,p__49214);
});
dorun_async.cljs$core$IFn$_invoke$arity$variadic = dorun_async__delegate;
return dorun_async;
})()
;

//# sourceMappingURL=async.js.map