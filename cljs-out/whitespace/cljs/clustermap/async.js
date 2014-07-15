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
map_async.cljs$lang$applyTo = (function (arglist__12167){
var f = cljs.core.first(arglist__12167);
var colls = cljs.core.rest(arglist__12167);
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
var dorun_async__delegate = function (ch,p__12168){var map__12228 = p__12168;var map__12228__$1 = ((cljs.core.seq_QMARK_.call(null,map__12228))?cljs.core.apply.call(null,cljs.core.hash_map,map__12228):map__12228);var delay = cljs.core.get.call(null,map__12228__$1,new cljs.core.Keyword(null,"delay","delay",-574225219));var log = cljs.core.get.call(null,map__12228__$1,new cljs.core.Keyword(null,"log","log",-1595516004));var c__5693__auto___12287 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5693__auto___12287,map__12228,map__12228__$1,delay,log){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto___12287,map__12228,map__12228__$1,delay,log){
return (function (state_12257){var state_val_12258 = (state_12257[(1)]);if((state_val_12258 === (7)))
{var inst_12248 = (state_12257[(2)]);var state_12257__$1 = state_12257;if(cljs.core.truth_(inst_12248))
{var statearr_12259_12288 = state_12257__$1;(statearr_12259_12288[(1)] = (15));
} else
{var statearr_12260_12289 = state_12257__$1;(statearr_12260_12289[(1)] = (16));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12258 === (1)))
{var state_12257__$1 = state_12257;var statearr_12261_12290 = state_12257__$1;(statearr_12261_12290[(2)] = null);
(statearr_12261_12290[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12258 === (4)))
{var inst_12231 = (state_12257[(7)]);var inst_12231__$1 = (state_12257[(2)]);var state_12257__$1 = (function (){var statearr_12262 = state_12257;(statearr_12262[(7)] = inst_12231__$1);
return statearr_12262;
})();if(cljs.core.truth_(inst_12231__$1))
{var statearr_12263_12291 = state_12257__$1;(statearr_12263_12291[(1)] = (5));
} else
{var statearr_12264_12292 = state_12257__$1;(statearr_12264_12292[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12258 === (15)))
{var state_12257__$1 = state_12257;var statearr_12265_12293 = state_12257__$1;(statearr_12265_12293[(2)] = null);
(statearr_12265_12293[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12258 === (13)))
{var state_12257__$1 = state_12257;var statearr_12266_12294 = state_12257__$1;(statearr_12266_12294[(2)] = null);
(statearr_12266_12294[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12258 === (6)))
{var state_12257__$1 = state_12257;var statearr_12267_12295 = state_12257__$1;(statearr_12267_12295[(2)] = null);
(statearr_12267_12295[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12258 === (17)))
{var inst_12253 = (state_12257[(2)]);var state_12257__$1 = state_12257;var statearr_12268_12296 = state_12257__$1;(statearr_12268_12296[(2)] = inst_12253);
(statearr_12268_12296[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12258 === (3)))
{var inst_12255 = (state_12257[(2)]);var state_12257__$1 = state_12257;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12257__$1,inst_12255);
} else
{if((state_val_12258 === (12)))
{var inst_12231 = (state_12257[(7)]);var inst_12241 = cljs.core.clj__GT_js.call(null,inst_12231);var inst_12242 = console.log(inst_12241);var state_12257__$1 = state_12257;var statearr_12269_12297 = state_12257__$1;(statearr_12269_12297[(2)] = inst_12242);
(statearr_12269_12297[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12258 === (2)))
{var state_12257__$1 = state_12257;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12257__$1,(4),ch);
} else
{if((state_val_12258 === (11)))
{var inst_12236 = (state_12257[(2)]);var state_12257__$1 = state_12257;var statearr_12270_12298 = state_12257__$1;(statearr_12270_12298[(2)] = inst_12236);
(statearr_12270_12298[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12258 === (9)))
{var state_12257__$1 = state_12257;var statearr_12271_12299 = state_12257__$1;(statearr_12271_12299[(2)] = null);
(statearr_12271_12299[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12258 === (5)))
{var state_12257__$1 = state_12257;if(cljs.core.truth_(delay))
{var statearr_12272_12300 = state_12257__$1;(statearr_12272_12300[(1)] = (8));
} else
{var statearr_12273_12301 = state_12257__$1;(statearr_12273_12301[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12258 === (14)))
{var inst_12231 = (state_12257[(7)]);var inst_12245 = (state_12257[(2)]);var state_12257__$1 = (function (){var statearr_12274 = state_12257;(statearr_12274[(8)] = inst_12245);
return statearr_12274;
})();var statearr_12275_12302 = state_12257__$1;(statearr_12275_12302[(2)] = inst_12231);
(statearr_12275_12302[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12258 === (16)))
{var state_12257__$1 = state_12257;var statearr_12276_12303 = state_12257__$1;(statearr_12276_12303[(2)] = null);
(statearr_12276_12303[(1)] = (17));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12258 === (10)))
{var inst_12239 = (state_12257[(2)]);var state_12257__$1 = (function (){var statearr_12277 = state_12257;(statearr_12277[(9)] = inst_12239);
return statearr_12277;
})();if(cljs.core.truth_(log))
{var statearr_12278_12304 = state_12257__$1;(statearr_12278_12304[(1)] = (12));
} else
{var statearr_12279_12305 = state_12257__$1;(statearr_12279_12305[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12258 === (8)))
{var inst_12234 = cljs.core.async.timeout.call(null,delay);var state_12257__$1 = state_12257;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12257__$1,(11),inst_12234);
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
});})(c__5693__auto___12287,map__12228,map__12228__$1,delay,log))
;return ((function (switch__5678__auto__,c__5693__auto___12287,map__12228,map__12228__$1,delay,log){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_12283 = [null,null,null,null,null,null,null,null,null,null];(statearr_12283[(0)] = state_machine__5679__auto__);
(statearr_12283[(1)] = (1));
return statearr_12283;
});
var state_machine__5679__auto____1 = (function (state_12257){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_12257);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e12284){if((e12284 instanceof Object))
{var ex__5682__auto__ = e12284;var statearr_12285_12306 = state_12257;(statearr_12285_12306[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12257);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e12284;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12307 = state_12257;
state_12257 = G__12307;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_12257){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_12257);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto___12287,map__12228,map__12228__$1,delay,log))
})();var state__5695__auto__ = (function (){var statearr_12286 = f__5694__auto__.call(null);(statearr_12286[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto___12287);
return statearr_12286;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5695__auto__);
});})(c__5693__auto___12287,map__12228,map__12228__$1,delay,log))
);
return null;
};
var dorun_async = function (ch,var_args){
var p__12168 = null;if (arguments.length > 1) {
  p__12168 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return dorun_async__delegate.call(this,ch,p__12168);};
dorun_async.cljs$lang$maxFixedArity = 1;
dorun_async.cljs$lang$applyTo = (function (arglist__12308){
var ch = cljs.core.first(arglist__12308);
var p__12168 = cljs.core.rest(arglist__12308);
return dorun_async__delegate(ch,p__12168);
});
dorun_async.cljs$core$IFn$_invoke$arity$variadic = dorun_async__delegate;
return dorun_async;
})()
;
