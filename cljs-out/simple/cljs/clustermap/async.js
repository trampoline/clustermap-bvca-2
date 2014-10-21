// Compiled by ClojureScript 0.0-2356
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
map_async.cljs$lang$applyTo = (function (arglist__30188){
var f = cljs.core.first(arglist__30188);
var colls = cljs.core.rest(arglist__30188);
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
var dorun_async__delegate = function (ch,p__30189){var map__30249 = p__30189;var map__30249__$1 = ((cljs.core.seq_QMARK_.call(null,map__30249))?cljs.core.apply.call(null,cljs.core.hash_map,map__30249):map__30249);var delay = cljs.core.get.call(null,map__30249__$1,new cljs.core.Keyword(null,"delay","delay",-574225219));var log = cljs.core.get.call(null,map__30249__$1,new cljs.core.Keyword(null,"log","log",-1595516004));var c__5819__auto___30308 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5819__auto___30308,map__30249,map__30249__$1,delay,log){
return (function (){var f__5820__auto__ = (function (){var switch__5804__auto__ = ((function (c__5819__auto___30308,map__30249,map__30249__$1,delay,log){
return (function (state_30278){var state_val_30279 = (state_30278[(1)]);if((state_val_30279 === (7)))
{var inst_30269 = (state_30278[(2)]);var state_30278__$1 = state_30278;if(cljs.core.truth_(inst_30269))
{var statearr_30280_30309 = state_30278__$1;(statearr_30280_30309[(1)] = (15));
} else
{var statearr_30281_30310 = state_30278__$1;(statearr_30281_30310[(1)] = (16));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30279 === (1)))
{var state_30278__$1 = state_30278;var statearr_30282_30311 = state_30278__$1;(statearr_30282_30311[(2)] = null);
(statearr_30282_30311[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30279 === (4)))
{var inst_30252 = (state_30278[(7)]);var inst_30252__$1 = (state_30278[(2)]);var state_30278__$1 = (function (){var statearr_30283 = state_30278;(statearr_30283[(7)] = inst_30252__$1);
return statearr_30283;
})();if(cljs.core.truth_(inst_30252__$1))
{var statearr_30284_30312 = state_30278__$1;(statearr_30284_30312[(1)] = (5));
} else
{var statearr_30285_30313 = state_30278__$1;(statearr_30285_30313[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30279 === (15)))
{var state_30278__$1 = state_30278;var statearr_30286_30314 = state_30278__$1;(statearr_30286_30314[(2)] = null);
(statearr_30286_30314[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30279 === (13)))
{var state_30278__$1 = state_30278;var statearr_30287_30315 = state_30278__$1;(statearr_30287_30315[(2)] = null);
(statearr_30287_30315[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30279 === (6)))
{var state_30278__$1 = state_30278;var statearr_30288_30316 = state_30278__$1;(statearr_30288_30316[(2)] = null);
(statearr_30288_30316[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30279 === (17)))
{var inst_30274 = (state_30278[(2)]);var state_30278__$1 = state_30278;var statearr_30289_30317 = state_30278__$1;(statearr_30289_30317[(2)] = inst_30274);
(statearr_30289_30317[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30279 === (3)))
{var inst_30276 = (state_30278[(2)]);var state_30278__$1 = state_30278;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30278__$1,inst_30276);
} else
{if((state_val_30279 === (12)))
{var inst_30252 = (state_30278[(7)]);var inst_30262 = cljs.core.clj__GT_js.call(null,inst_30252);var inst_30263 = console.log(inst_30262);var state_30278__$1 = state_30278;var statearr_30290_30318 = state_30278__$1;(statearr_30290_30318[(2)] = inst_30263);
(statearr_30290_30318[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30279 === (2)))
{var state_30278__$1 = state_30278;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30278__$1,(4),ch);
} else
{if((state_val_30279 === (11)))
{var inst_30257 = (state_30278[(2)]);var state_30278__$1 = state_30278;var statearr_30291_30319 = state_30278__$1;(statearr_30291_30319[(2)] = inst_30257);
(statearr_30291_30319[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30279 === (9)))
{var state_30278__$1 = state_30278;var statearr_30292_30320 = state_30278__$1;(statearr_30292_30320[(2)] = null);
(statearr_30292_30320[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30279 === (5)))
{var state_30278__$1 = state_30278;if(cljs.core.truth_(delay))
{var statearr_30293_30321 = state_30278__$1;(statearr_30293_30321[(1)] = (8));
} else
{var statearr_30294_30322 = state_30278__$1;(statearr_30294_30322[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30279 === (14)))
{var inst_30252 = (state_30278[(7)]);var inst_30266 = (state_30278[(2)]);var state_30278__$1 = (function (){var statearr_30295 = state_30278;(statearr_30295[(8)] = inst_30266);
return statearr_30295;
})();var statearr_30296_30323 = state_30278__$1;(statearr_30296_30323[(2)] = inst_30252);
(statearr_30296_30323[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30279 === (16)))
{var state_30278__$1 = state_30278;var statearr_30297_30324 = state_30278__$1;(statearr_30297_30324[(2)] = null);
(statearr_30297_30324[(1)] = (17));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30279 === (10)))
{var inst_30260 = (state_30278[(2)]);var state_30278__$1 = (function (){var statearr_30298 = state_30278;(statearr_30298[(9)] = inst_30260);
return statearr_30298;
})();if(cljs.core.truth_(log))
{var statearr_30299_30325 = state_30278__$1;(statearr_30299_30325[(1)] = (12));
} else
{var statearr_30300_30326 = state_30278__$1;(statearr_30300_30326[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30279 === (8)))
{var inst_30255 = cljs.core.async.timeout.call(null,delay);var state_30278__$1 = state_30278;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30278__$1,(11),inst_30255);
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
});})(c__5819__auto___30308,map__30249,map__30249__$1,delay,log))
;return ((function (switch__5804__auto__,c__5819__auto___30308,map__30249,map__30249__$1,delay,log){
return (function() {
var state_machine__5805__auto__ = null;
var state_machine__5805__auto____0 = (function (){var statearr_30304 = [null,null,null,null,null,null,null,null,null,null];(statearr_30304[(0)] = state_machine__5805__auto__);
(statearr_30304[(1)] = (1));
return statearr_30304;
});
var state_machine__5805__auto____1 = (function (state_30278){while(true){
var ret_value__5806__auto__ = (function (){try{while(true){
var result__5807__auto__ = switch__5804__auto__.call(null,state_30278);if(cljs.core.keyword_identical_QMARK_.call(null,result__5807__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5807__auto__;
}
break;
}
}catch (e30305){if((e30305 instanceof Object))
{var ex__5808__auto__ = e30305;var statearr_30306_30327 = state_30278;(statearr_30306_30327[(5)] = ex__5808__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30278);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e30305;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5806__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__30328 = state_30278;
state_30278 = G__30328;
continue;
}
} else
{return ret_value__5806__auto__;
}
break;
}
});
state_machine__5805__auto__ = function(state_30278){
switch(arguments.length){
case 0:
return state_machine__5805__auto____0.call(this);
case 1:
return state_machine__5805__auto____1.call(this,state_30278);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5805__auto____0;
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5805__auto____1;
return state_machine__5805__auto__;
})()
;})(switch__5804__auto__,c__5819__auto___30308,map__30249,map__30249__$1,delay,log))
})();var state__5821__auto__ = (function (){var statearr_30307 = f__5820__auto__.call(null);(statearr_30307[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5819__auto___30308);
return statearr_30307;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5821__auto__);
});})(c__5819__auto___30308,map__30249,map__30249__$1,delay,log))
);
return null;
};
var dorun_async = function (ch,var_args){
var p__30189 = null;if (arguments.length > 1) {
  p__30189 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return dorun_async__delegate.call(this,ch,p__30189);};
dorun_async.cljs$lang$maxFixedArity = 1;
dorun_async.cljs$lang$applyTo = (function (arglist__30329){
var ch = cljs.core.first(arglist__30329);
var p__30189 = cljs.core.rest(arglist__30329);
return dorun_async__delegate(ch,p__30189);
});
dorun_async.cljs$core$IFn$_invoke$arity$variadic = dorun_async__delegate;
return dorun_async;
})()
;
