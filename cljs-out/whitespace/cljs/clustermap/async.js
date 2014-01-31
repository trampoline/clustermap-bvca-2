// Compiled by ClojureScript 0.0-2138
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
map_async.cljs$lang$applyTo = (function (arglist__31227){
var f = cljs.core.first(arglist__31227);
var colls = cljs.core.rest(arglist__31227);
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
var dorun_async__delegate = function (ch,p__31228){var map__31288 = p__31228;var map__31288__$1 = ((cljs.core.seq_QMARK_.call(null,map__31288))?cljs.core.apply.call(null,cljs.core.hash_map,map__31288):map__31288);var delay = cljs.core.get.call(null,map__31288__$1,new cljs.core.Keyword(null,"delay","delay",1109372149));var log = cljs.core.get.call(null,map__31288__$1,new cljs.core.Keyword(null,"log","log",1014011574));var c__5521__auto___31347 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_31317){var state_val_31318 = (state_31317[1]);if((state_val_31318 === 1))
{var state_31317__$1 = state_31317;var statearr_31319_31348 = state_31317__$1;(statearr_31319_31348[2] = null);
(statearr_31319_31348[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31318 === 2))
{var state_31317__$1 = state_31317;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31317__$1,4,ch);
} else
{if((state_val_31318 === 3))
{var inst_31315 = (state_31317[2]);var state_31317__$1 = state_31317;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31317__$1,inst_31315);
} else
{if((state_val_31318 === 4))
{var inst_31291 = (state_31317[7]);var inst_31291__$1 = (state_31317[2]);var state_31317__$1 = (function (){var statearr_31320 = state_31317;(statearr_31320[7] = inst_31291__$1);
return statearr_31320;
})();if(cljs.core.truth_(inst_31291__$1))
{var statearr_31321_31349 = state_31317__$1;(statearr_31321_31349[1] = 5);
} else
{var statearr_31322_31350 = state_31317__$1;(statearr_31322_31350[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31318 === 5))
{var state_31317__$1 = state_31317;if(cljs.core.truth_(delay))
{var statearr_31323_31351 = state_31317__$1;(statearr_31323_31351[1] = 8);
} else
{var statearr_31324_31352 = state_31317__$1;(statearr_31324_31352[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31318 === 6))
{var state_31317__$1 = state_31317;var statearr_31325_31353 = state_31317__$1;(statearr_31325_31353[2] = null);
(statearr_31325_31353[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31318 === 7))
{var inst_31308 = (state_31317[2]);var state_31317__$1 = state_31317;if(cljs.core.truth_(inst_31308))
{var statearr_31326_31354 = state_31317__$1;(statearr_31326_31354[1] = 15);
} else
{var statearr_31327_31355 = state_31317__$1;(statearr_31327_31355[1] = 16);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31318 === 8))
{var inst_31294 = cljs.core.async.timeout.call(null,delay);var state_31317__$1 = state_31317;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31317__$1,11,inst_31294);
} else
{if((state_val_31318 === 9))
{var state_31317__$1 = state_31317;var statearr_31328_31356 = state_31317__$1;(statearr_31328_31356[2] = null);
(statearr_31328_31356[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31318 === 10))
{var inst_31299 = (state_31317[2]);var state_31317__$1 = (function (){var statearr_31329 = state_31317;(statearr_31329[8] = inst_31299);
return statearr_31329;
})();if(cljs.core.truth_(log))
{var statearr_31330_31357 = state_31317__$1;(statearr_31330_31357[1] = 12);
} else
{var statearr_31331_31358 = state_31317__$1;(statearr_31331_31358[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31318 === 11))
{var inst_31296 = (state_31317[2]);var state_31317__$1 = state_31317;var statearr_31332_31359 = state_31317__$1;(statearr_31332_31359[2] = inst_31296);
(statearr_31332_31359[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31318 === 12))
{var inst_31291 = (state_31317[7]);var inst_31301 = cljs.core.clj__GT_js.call(null,inst_31291);var inst_31302 = console.log(inst_31301);var state_31317__$1 = state_31317;var statearr_31333_31360 = state_31317__$1;(statearr_31333_31360[2] = inst_31302);
(statearr_31333_31360[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31318 === 13))
{var state_31317__$1 = state_31317;var statearr_31334_31361 = state_31317__$1;(statearr_31334_31361[2] = null);
(statearr_31334_31361[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31318 === 14))
{var inst_31291 = (state_31317[7]);var inst_31305 = (state_31317[2]);var state_31317__$1 = (function (){var statearr_31335 = state_31317;(statearr_31335[9] = inst_31305);
return statearr_31335;
})();var statearr_31336_31362 = state_31317__$1;(statearr_31336_31362[2] = inst_31291);
(statearr_31336_31362[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31318 === 15))
{var state_31317__$1 = state_31317;var statearr_31337_31363 = state_31317__$1;(statearr_31337_31363[2] = null);
(statearr_31337_31363[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31318 === 16))
{var state_31317__$1 = state_31317;var statearr_31338_31364 = state_31317__$1;(statearr_31338_31364[2] = null);
(statearr_31338_31364[1] = 17);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31318 === 17))
{var inst_31313 = (state_31317[2]);var state_31317__$1 = state_31317;var statearr_31339_31365 = state_31317__$1;(statearr_31339_31365[2] = inst_31313);
(statearr_31339_31365[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
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
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_31343 = [null,null,null,null,null,null,null,null,null,null];(statearr_31343[0] = state_machine__5507__auto__);
(statearr_31343[1] = 1);
return statearr_31343;
});
var state_machine__5507__auto____1 = (function (state_31317){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_31317);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e31344){if((e31344 instanceof Object))
{var ex__5510__auto__ = e31344;var statearr_31345_31366 = state_31317;(statearr_31345_31366[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31317);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e31344;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__31367 = state_31317;
state_31317 = G__31367;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_31317){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_31317);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_31346 = f__5522__auto__.call(null);(statearr_31346[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___31347);
return statearr_31346;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5523__auto__);
}));
return null;
};
var dorun_async = function (ch,var_args){
var p__31228 = null;if (arguments.length > 1) {
  p__31228 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return dorun_async__delegate.call(this,ch,p__31228);};
dorun_async.cljs$lang$maxFixedArity = 1;
dorun_async.cljs$lang$applyTo = (function (arglist__31368){
var ch = cljs.core.first(arglist__31368);
var p__31228 = cljs.core.rest(arglist__31368);
return dorun_async__delegate(ch,p__31228);
});
dorun_async.cljs$core$IFn$_invoke$arity$variadic = dorun_async__delegate;
return dorun_async;
})()
;
