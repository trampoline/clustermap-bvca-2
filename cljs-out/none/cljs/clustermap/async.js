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
var map_async__delegate = function (f,colls){var coll_chs = cljs.core.map.call(null,(function (coll){var ch = cljs.core.async.chan.call(null);cljs.core.async.onto_chan.call(null,ch,coll);
return ch;
}),colls);return cljs.core.async.map.call(null,f,coll_chs);
};
var map_async = function (f,var_args){
var colls = null;if (arguments.length > 1) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return map_async__delegate.call(this,f,colls);};
map_async.cljs$lang$maxFixedArity = 1;
map_async.cljs$lang$applyTo = (function (arglist__20156){
var f = cljs.core.first(arglist__20156);
var colls = cljs.core.rest(arglist__20156);
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
var dorun_async__delegate = function (ch,p__20157){var map__20217 = p__20157;var map__20217__$1 = ((cljs.core.seq_QMARK_.call(null,map__20217))?cljs.core.apply.call(null,cljs.core.hash_map,map__20217):map__20217);var delay = cljs.core.get.call(null,map__20217__$1,new cljs.core.Keyword(null,"delay","delay",-574225219));var log = cljs.core.get.call(null,map__20217__$1,new cljs.core.Keyword(null,"log","log",-1595516004));var c__9759__auto___20276 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9759__auto___20276,map__20217,map__20217__$1,delay,log){
return (function (){var f__9760__auto__ = (function (){var switch__9744__auto__ = ((function (c__9759__auto___20276,map__20217,map__20217__$1,delay,log){
return (function (state_20246){var state_val_20247 = (state_20246[(1)]);if((state_val_20247 === (7)))
{var inst_20237 = (state_20246[(2)]);var state_20246__$1 = state_20246;if(cljs.core.truth_(inst_20237))
{var statearr_20248_20277 = state_20246__$1;(statearr_20248_20277[(1)] = (15));
} else
{var statearr_20249_20278 = state_20246__$1;(statearr_20249_20278[(1)] = (16));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20247 === (1)))
{var state_20246__$1 = state_20246;var statearr_20250_20279 = state_20246__$1;(statearr_20250_20279[(2)] = null);
(statearr_20250_20279[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20247 === (4)))
{var inst_20220 = (state_20246[(7)]);var inst_20220__$1 = (state_20246[(2)]);var state_20246__$1 = (function (){var statearr_20251 = state_20246;(statearr_20251[(7)] = inst_20220__$1);
return statearr_20251;
})();if(cljs.core.truth_(inst_20220__$1))
{var statearr_20252_20280 = state_20246__$1;(statearr_20252_20280[(1)] = (5));
} else
{var statearr_20253_20281 = state_20246__$1;(statearr_20253_20281[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20247 === (15)))
{var state_20246__$1 = state_20246;var statearr_20254_20282 = state_20246__$1;(statearr_20254_20282[(2)] = null);
(statearr_20254_20282[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20247 === (13)))
{var state_20246__$1 = state_20246;var statearr_20255_20283 = state_20246__$1;(statearr_20255_20283[(2)] = null);
(statearr_20255_20283[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20247 === (6)))
{var state_20246__$1 = state_20246;var statearr_20256_20284 = state_20246__$1;(statearr_20256_20284[(2)] = null);
(statearr_20256_20284[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20247 === (17)))
{var inst_20242 = (state_20246[(2)]);var state_20246__$1 = state_20246;var statearr_20257_20285 = state_20246__$1;(statearr_20257_20285[(2)] = inst_20242);
(statearr_20257_20285[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20247 === (3)))
{var inst_20244 = (state_20246[(2)]);var state_20246__$1 = state_20246;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20246__$1,inst_20244);
} else
{if((state_val_20247 === (12)))
{var inst_20220 = (state_20246[(7)]);var inst_20230 = cljs.core.clj__GT_js.call(null,inst_20220);var inst_20231 = console.log(inst_20230);var state_20246__$1 = state_20246;var statearr_20258_20286 = state_20246__$1;(statearr_20258_20286[(2)] = inst_20231);
(statearr_20258_20286[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20247 === (2)))
{var state_20246__$1 = state_20246;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20246__$1,(4),ch);
} else
{if((state_val_20247 === (11)))
{var inst_20225 = (state_20246[(2)]);var state_20246__$1 = state_20246;var statearr_20259_20287 = state_20246__$1;(statearr_20259_20287[(2)] = inst_20225);
(statearr_20259_20287[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20247 === (9)))
{var state_20246__$1 = state_20246;var statearr_20260_20288 = state_20246__$1;(statearr_20260_20288[(2)] = null);
(statearr_20260_20288[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20247 === (5)))
{var state_20246__$1 = state_20246;if(cljs.core.truth_(delay))
{var statearr_20261_20289 = state_20246__$1;(statearr_20261_20289[(1)] = (8));
} else
{var statearr_20262_20290 = state_20246__$1;(statearr_20262_20290[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20247 === (14)))
{var inst_20220 = (state_20246[(7)]);var inst_20234 = (state_20246[(2)]);var state_20246__$1 = (function (){var statearr_20263 = state_20246;(statearr_20263[(8)] = inst_20234);
return statearr_20263;
})();var statearr_20264_20291 = state_20246__$1;(statearr_20264_20291[(2)] = inst_20220);
(statearr_20264_20291[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20247 === (16)))
{var state_20246__$1 = state_20246;var statearr_20265_20292 = state_20246__$1;(statearr_20265_20292[(2)] = null);
(statearr_20265_20292[(1)] = (17));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20247 === (10)))
{var inst_20228 = (state_20246[(2)]);var state_20246__$1 = (function (){var statearr_20266 = state_20246;(statearr_20266[(9)] = inst_20228);
return statearr_20266;
})();if(cljs.core.truth_(log))
{var statearr_20267_20293 = state_20246__$1;(statearr_20267_20293[(1)] = (12));
} else
{var statearr_20268_20294 = state_20246__$1;(statearr_20268_20294[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20247 === (8)))
{var inst_20223 = cljs.core.async.timeout.call(null,delay);var state_20246__$1 = state_20246;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20246__$1,(11),inst_20223);
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
});})(c__9759__auto___20276,map__20217,map__20217__$1,delay,log))
;return ((function (switch__9744__auto__,c__9759__auto___20276,map__20217,map__20217__$1,delay,log){
return (function() {
var state_machine__9745__auto__ = null;
var state_machine__9745__auto____0 = (function (){var statearr_20272 = [null,null,null,null,null,null,null,null,null,null];(statearr_20272[(0)] = state_machine__9745__auto__);
(statearr_20272[(1)] = (1));
return statearr_20272;
});
var state_machine__9745__auto____1 = (function (state_20246){while(true){
var ret_value__9746__auto__ = (function (){try{while(true){
var result__9747__auto__ = switch__9744__auto__.call(null,state_20246);if(cljs.core.keyword_identical_QMARK_.call(null,result__9747__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9747__auto__;
}
break;
}
}catch (e20273){if((e20273 instanceof Object))
{var ex__9748__auto__ = e20273;var statearr_20274_20295 = state_20246;(statearr_20274_20295[(5)] = ex__9748__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20246);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e20273;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9746__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__20296 = state_20246;
state_20246 = G__20296;
continue;
}
} else
{return ret_value__9746__auto__;
}
break;
}
});
state_machine__9745__auto__ = function(state_20246){
switch(arguments.length){
case 0:
return state_machine__9745__auto____0.call(this);
case 1:
return state_machine__9745__auto____1.call(this,state_20246);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9745__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9745__auto____0;
state_machine__9745__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9745__auto____1;
return state_machine__9745__auto__;
})()
;})(switch__9744__auto__,c__9759__auto___20276,map__20217,map__20217__$1,delay,log))
})();var state__9761__auto__ = (function (){var statearr_20275 = f__9760__auto__.call(null);(statearr_20275[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9759__auto___20276);
return statearr_20275;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9761__auto__);
});})(c__9759__auto___20276,map__20217,map__20217__$1,delay,log))
);
return null;
};
var dorun_async = function (ch,var_args){
var p__20157 = null;if (arguments.length > 1) {
  p__20157 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return dorun_async__delegate.call(this,ch,p__20157);};
dorun_async.cljs$lang$maxFixedArity = 1;
dorun_async.cljs$lang$applyTo = (function (arglist__20297){
var ch = cljs.core.first(arglist__20297);
var p__20157 = cljs.core.rest(arglist__20297);
return dorun_async__delegate(ch,p__20157);
});
dorun_async.cljs$core$IFn$_invoke$arity$variadic = dorun_async__delegate;
return dorun_async;
})()
;

//# sourceMappingURL=async.js.map