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
map_async.cljs$lang$applyTo = (function (arglist__50263){
var f = cljs.core.first(arglist__50263);
var colls = cljs.core.rest(arglist__50263);
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
var dorun_async__delegate = function (ch,p__50264){var map__50324 = p__50264;var map__50324__$1 = ((cljs.core.seq_QMARK_.call(null,map__50324))?cljs.core.apply.call(null,cljs.core.hash_map,map__50324):map__50324);var delay = cljs.core.get.call(null,map__50324__$1,new cljs.core.Keyword(null,"delay","delay",-574225219));var log = cljs.core.get.call(null,map__50324__$1,new cljs.core.Keyword(null,"log","log",-1595516004));var c__5708__auto___50383 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5708__auto___50383,map__50324,map__50324__$1,delay,log){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___50383,map__50324,map__50324__$1,delay,log){
return (function (state_50353){var state_val_50354 = (state_50353[(1)]);if((state_val_50354 === (7)))
{var inst_50344 = (state_50353[(2)]);var state_50353__$1 = state_50353;if(cljs.core.truth_(inst_50344))
{var statearr_50355_50384 = state_50353__$1;(statearr_50355_50384[(1)] = (15));
} else
{var statearr_50356_50385 = state_50353__$1;(statearr_50356_50385[(1)] = (16));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_50354 === (1)))
{var state_50353__$1 = state_50353;var statearr_50357_50386 = state_50353__$1;(statearr_50357_50386[(2)] = null);
(statearr_50357_50386[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_50354 === (4)))
{var inst_50327 = (state_50353[(7)]);var inst_50327__$1 = (state_50353[(2)]);var state_50353__$1 = (function (){var statearr_50358 = state_50353;(statearr_50358[(7)] = inst_50327__$1);
return statearr_50358;
})();if(cljs.core.truth_(inst_50327__$1))
{var statearr_50359_50387 = state_50353__$1;(statearr_50359_50387[(1)] = (5));
} else
{var statearr_50360_50388 = state_50353__$1;(statearr_50360_50388[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_50354 === (15)))
{var state_50353__$1 = state_50353;var statearr_50361_50389 = state_50353__$1;(statearr_50361_50389[(2)] = null);
(statearr_50361_50389[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_50354 === (13)))
{var state_50353__$1 = state_50353;var statearr_50362_50390 = state_50353__$1;(statearr_50362_50390[(2)] = null);
(statearr_50362_50390[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_50354 === (6)))
{var state_50353__$1 = state_50353;var statearr_50363_50391 = state_50353__$1;(statearr_50363_50391[(2)] = null);
(statearr_50363_50391[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_50354 === (17)))
{var inst_50349 = (state_50353[(2)]);var state_50353__$1 = state_50353;var statearr_50364_50392 = state_50353__$1;(statearr_50364_50392[(2)] = inst_50349);
(statearr_50364_50392[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_50354 === (3)))
{var inst_50351 = (state_50353[(2)]);var state_50353__$1 = state_50353;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_50353__$1,inst_50351);
} else
{if((state_val_50354 === (12)))
{var inst_50327 = (state_50353[(7)]);var inst_50337 = cljs.core.clj__GT_js.call(null,inst_50327);var inst_50338 = console.log(inst_50337);var state_50353__$1 = state_50353;var statearr_50365_50393 = state_50353__$1;(statearr_50365_50393[(2)] = inst_50338);
(statearr_50365_50393[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_50354 === (2)))
{var state_50353__$1 = state_50353;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50353__$1,(4),ch);
} else
{if((state_val_50354 === (11)))
{var inst_50332 = (state_50353[(2)]);var state_50353__$1 = state_50353;var statearr_50366_50394 = state_50353__$1;(statearr_50366_50394[(2)] = inst_50332);
(statearr_50366_50394[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_50354 === (9)))
{var state_50353__$1 = state_50353;var statearr_50367_50395 = state_50353__$1;(statearr_50367_50395[(2)] = null);
(statearr_50367_50395[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_50354 === (5)))
{var state_50353__$1 = state_50353;if(cljs.core.truth_(delay))
{var statearr_50368_50396 = state_50353__$1;(statearr_50368_50396[(1)] = (8));
} else
{var statearr_50369_50397 = state_50353__$1;(statearr_50369_50397[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_50354 === (14)))
{var inst_50327 = (state_50353[(7)]);var inst_50341 = (state_50353[(2)]);var state_50353__$1 = (function (){var statearr_50370 = state_50353;(statearr_50370[(8)] = inst_50341);
return statearr_50370;
})();var statearr_50371_50398 = state_50353__$1;(statearr_50371_50398[(2)] = inst_50327);
(statearr_50371_50398[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_50354 === (16)))
{var state_50353__$1 = state_50353;var statearr_50372_50399 = state_50353__$1;(statearr_50372_50399[(2)] = null);
(statearr_50372_50399[(1)] = (17));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_50354 === (10)))
{var inst_50335 = (state_50353[(2)]);var state_50353__$1 = (function (){var statearr_50373 = state_50353;(statearr_50373[(9)] = inst_50335);
return statearr_50373;
})();if(cljs.core.truth_(log))
{var statearr_50374_50400 = state_50353__$1;(statearr_50374_50400[(1)] = (12));
} else
{var statearr_50375_50401 = state_50353__$1;(statearr_50375_50401[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_50354 === (8)))
{var inst_50330 = cljs.core.async.timeout.call(null,delay);var state_50353__$1 = state_50353;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50353__$1,(11),inst_50330);
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
});})(c__5708__auto___50383,map__50324,map__50324__$1,delay,log))
;return ((function (switch__5693__auto__,c__5708__auto___50383,map__50324,map__50324__$1,delay,log){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_50379 = [null,null,null,null,null,null,null,null,null,null];(statearr_50379[(0)] = state_machine__5694__auto__);
(statearr_50379[(1)] = (1));
return statearr_50379;
});
var state_machine__5694__auto____1 = (function (state_50353){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_50353);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e50380){if((e50380 instanceof Object))
{var ex__5697__auto__ = e50380;var statearr_50381_50402 = state_50353;(statearr_50381_50402[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_50353);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e50380;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__50403 = state_50353;
state_50353 = G__50403;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_50353){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_50353);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___50383,map__50324,map__50324__$1,delay,log))
})();var state__5710__auto__ = (function (){var statearr_50382 = f__5709__auto__.call(null);(statearr_50382[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___50383);
return statearr_50382;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
});})(c__5708__auto___50383,map__50324,map__50324__$1,delay,log))
);
return null;
};
var dorun_async = function (ch,var_args){
var p__50264 = null;if (arguments.length > 1) {
  p__50264 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return dorun_async__delegate.call(this,ch,p__50264);};
dorun_async.cljs$lang$maxFixedArity = 1;
dorun_async.cljs$lang$applyTo = (function (arglist__50404){
var ch = cljs.core.first(arglist__50404);
var p__50264 = cljs.core.rest(arglist__50404);
return dorun_async__delegate(ch,p__50264);
});
dorun_async.cljs$core$IFn$_invoke$arity$variadic = dorun_async__delegate;
return dorun_async;
})()
;

//# sourceMappingURL=async.js.map