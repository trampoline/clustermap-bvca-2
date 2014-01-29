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
map_async.cljs$lang$applyTo = (function (arglist__31208){
var f = cljs.core.first(arglist__31208);
var colls = cljs.core.rest(arglist__31208);
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
var dorun_async__delegate = function (ch,p__31209){var map__31269 = p__31209;var map__31269__$1 = ((cljs.core.seq_QMARK_.call(null,map__31269))?cljs.core.apply.call(null,cljs.core.hash_map,map__31269):map__31269);var delay = cljs.core.get.call(null,map__31269__$1,new cljs.core.Keyword(null,"delay","delay",1109372149));var log = cljs.core.get.call(null,map__31269__$1,new cljs.core.Keyword(null,"log","log",1014011574));var c__5521__auto___31328 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_31298){var state_val_31299 = (state_31298[1]);if((state_val_31299 === 1))
{var state_31298__$1 = state_31298;var statearr_31300_31329 = state_31298__$1;(statearr_31300_31329[2] = null);
(statearr_31300_31329[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31299 === 2))
{var state_31298__$1 = state_31298;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31298__$1,4,ch);
} else
{if((state_val_31299 === 3))
{var inst_31296 = (state_31298[2]);var state_31298__$1 = state_31298;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31298__$1,inst_31296);
} else
{if((state_val_31299 === 4))
{var inst_31272 = (state_31298[7]);var inst_31272__$1 = (state_31298[2]);var state_31298__$1 = (function (){var statearr_31301 = state_31298;(statearr_31301[7] = inst_31272__$1);
return statearr_31301;
})();if(cljs.core.truth_(inst_31272__$1))
{var statearr_31302_31330 = state_31298__$1;(statearr_31302_31330[1] = 5);
} else
{var statearr_31303_31331 = state_31298__$1;(statearr_31303_31331[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31299 === 5))
{var state_31298__$1 = state_31298;if(cljs.core.truth_(delay))
{var statearr_31304_31332 = state_31298__$1;(statearr_31304_31332[1] = 8);
} else
{var statearr_31305_31333 = state_31298__$1;(statearr_31305_31333[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31299 === 6))
{var state_31298__$1 = state_31298;var statearr_31306_31334 = state_31298__$1;(statearr_31306_31334[2] = null);
(statearr_31306_31334[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31299 === 7))
{var inst_31289 = (state_31298[2]);var state_31298__$1 = state_31298;if(cljs.core.truth_(inst_31289))
{var statearr_31307_31335 = state_31298__$1;(statearr_31307_31335[1] = 15);
} else
{var statearr_31308_31336 = state_31298__$1;(statearr_31308_31336[1] = 16);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31299 === 8))
{var inst_31275 = cljs.core.async.timeout.call(null,delay);var state_31298__$1 = state_31298;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31298__$1,11,inst_31275);
} else
{if((state_val_31299 === 9))
{var state_31298__$1 = state_31298;var statearr_31309_31337 = state_31298__$1;(statearr_31309_31337[2] = null);
(statearr_31309_31337[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31299 === 10))
{var inst_31280 = (state_31298[2]);var state_31298__$1 = (function (){var statearr_31310 = state_31298;(statearr_31310[8] = inst_31280);
return statearr_31310;
})();if(cljs.core.truth_(log))
{var statearr_31311_31338 = state_31298__$1;(statearr_31311_31338[1] = 12);
} else
{var statearr_31312_31339 = state_31298__$1;(statearr_31312_31339[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31299 === 11))
{var inst_31277 = (state_31298[2]);var state_31298__$1 = state_31298;var statearr_31313_31340 = state_31298__$1;(statearr_31313_31340[2] = inst_31277);
(statearr_31313_31340[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31299 === 12))
{var inst_31272 = (state_31298[7]);var inst_31282 = cljs.core.clj__GT_js.call(null,inst_31272);var inst_31283 = console.log(inst_31282);var state_31298__$1 = state_31298;var statearr_31314_31341 = state_31298__$1;(statearr_31314_31341[2] = inst_31283);
(statearr_31314_31341[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31299 === 13))
{var state_31298__$1 = state_31298;var statearr_31315_31342 = state_31298__$1;(statearr_31315_31342[2] = null);
(statearr_31315_31342[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31299 === 14))
{var inst_31272 = (state_31298[7]);var inst_31286 = (state_31298[2]);var state_31298__$1 = (function (){var statearr_31316 = state_31298;(statearr_31316[9] = inst_31286);
return statearr_31316;
})();var statearr_31317_31343 = state_31298__$1;(statearr_31317_31343[2] = inst_31272);
(statearr_31317_31343[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31299 === 15))
{var state_31298__$1 = state_31298;var statearr_31318_31344 = state_31298__$1;(statearr_31318_31344[2] = null);
(statearr_31318_31344[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31299 === 16))
{var state_31298__$1 = state_31298;var statearr_31319_31345 = state_31298__$1;(statearr_31319_31345[2] = null);
(statearr_31319_31345[1] = 17);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31299 === 17))
{var inst_31294 = (state_31298[2]);var state_31298__$1 = state_31298;var statearr_31320_31346 = state_31298__$1;(statearr_31320_31346[2] = inst_31294);
(statearr_31320_31346[1] = 3);
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
var state_machine__5507__auto____0 = (function (){var statearr_31324 = [null,null,null,null,null,null,null,null,null,null];(statearr_31324[0] = state_machine__5507__auto__);
(statearr_31324[1] = 1);
return statearr_31324;
});
var state_machine__5507__auto____1 = (function (state_31298){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_31298);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e31325){if((e31325 instanceof Object))
{var ex__5510__auto__ = e31325;var statearr_31326_31347 = state_31298;(statearr_31326_31347[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31298);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e31325;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__31348 = state_31298;
state_31298 = G__31348;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_31298){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_31298);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_31327 = f__5522__auto__.call(null);(statearr_31327[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___31328);
return statearr_31327;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5523__auto__);
}));
return null;
};
var dorun_async = function (ch,var_args){
var p__31209 = null;if (arguments.length > 1) {
  p__31209 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return dorun_async__delegate.call(this,ch,p__31209);};
dorun_async.cljs$lang$maxFixedArity = 1;
dorun_async.cljs$lang$applyTo = (function (arglist__31349){
var ch = cljs.core.first(arglist__31349);
var p__31209 = cljs.core.rest(arglist__31349);
return dorun_async__delegate(ch,p__31209);
});
dorun_async.cljs$core$IFn$_invoke$arity$variadic = dorun_async__delegate;
return dorun_async;
})()
;
