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
map_async.cljs$lang$applyTo = (function (arglist__31181){
var f = cljs.core.first(arglist__31181);
var colls = cljs.core.rest(arglist__31181);
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
var dorun_async__delegate = function (ch,p__31182){var map__31242 = p__31182;var map__31242__$1 = ((cljs.core.seq_QMARK_.call(null,map__31242))?cljs.core.apply.call(null,cljs.core.hash_map,map__31242):map__31242);var delay = cljs.core.get.call(null,map__31242__$1,new cljs.core.Keyword(null,"delay","delay",1109372149));var log = cljs.core.get.call(null,map__31242__$1,new cljs.core.Keyword(null,"log","log",1014011574));var c__5521__auto___31301 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_31271){var state_val_31272 = (state_31271[1]);if((state_val_31272 === 1))
{var state_31271__$1 = state_31271;var statearr_31273_31302 = state_31271__$1;(statearr_31273_31302[2] = null);
(statearr_31273_31302[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31272 === 2))
{var state_31271__$1 = state_31271;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31271__$1,4,ch);
} else
{if((state_val_31272 === 3))
{var inst_31269 = (state_31271[2]);var state_31271__$1 = state_31271;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31271__$1,inst_31269);
} else
{if((state_val_31272 === 4))
{var inst_31245 = (state_31271[7]);var inst_31245__$1 = (state_31271[2]);var state_31271__$1 = (function (){var statearr_31274 = state_31271;(statearr_31274[7] = inst_31245__$1);
return statearr_31274;
})();if(cljs.core.truth_(inst_31245__$1))
{var statearr_31275_31303 = state_31271__$1;(statearr_31275_31303[1] = 5);
} else
{var statearr_31276_31304 = state_31271__$1;(statearr_31276_31304[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31272 === 5))
{var state_31271__$1 = state_31271;if(cljs.core.truth_(delay))
{var statearr_31277_31305 = state_31271__$1;(statearr_31277_31305[1] = 8);
} else
{var statearr_31278_31306 = state_31271__$1;(statearr_31278_31306[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31272 === 6))
{var state_31271__$1 = state_31271;var statearr_31279_31307 = state_31271__$1;(statearr_31279_31307[2] = null);
(statearr_31279_31307[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31272 === 7))
{var inst_31262 = (state_31271[2]);var state_31271__$1 = state_31271;if(cljs.core.truth_(inst_31262))
{var statearr_31280_31308 = state_31271__$1;(statearr_31280_31308[1] = 15);
} else
{var statearr_31281_31309 = state_31271__$1;(statearr_31281_31309[1] = 16);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31272 === 8))
{var inst_31248 = cljs.core.async.timeout.call(null,delay);var state_31271__$1 = state_31271;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31271__$1,11,inst_31248);
} else
{if((state_val_31272 === 9))
{var state_31271__$1 = state_31271;var statearr_31282_31310 = state_31271__$1;(statearr_31282_31310[2] = null);
(statearr_31282_31310[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31272 === 10))
{var inst_31253 = (state_31271[2]);var state_31271__$1 = (function (){var statearr_31283 = state_31271;(statearr_31283[8] = inst_31253);
return statearr_31283;
})();if(cljs.core.truth_(log))
{var statearr_31284_31311 = state_31271__$1;(statearr_31284_31311[1] = 12);
} else
{var statearr_31285_31312 = state_31271__$1;(statearr_31285_31312[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31272 === 11))
{var inst_31250 = (state_31271[2]);var state_31271__$1 = state_31271;var statearr_31286_31313 = state_31271__$1;(statearr_31286_31313[2] = inst_31250);
(statearr_31286_31313[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31272 === 12))
{var inst_31245 = (state_31271[7]);var inst_31255 = cljs.core.clj__GT_js.call(null,inst_31245);var inst_31256 = console.log(inst_31255);var state_31271__$1 = state_31271;var statearr_31287_31314 = state_31271__$1;(statearr_31287_31314[2] = inst_31256);
(statearr_31287_31314[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31272 === 13))
{var state_31271__$1 = state_31271;var statearr_31288_31315 = state_31271__$1;(statearr_31288_31315[2] = null);
(statearr_31288_31315[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31272 === 14))
{var inst_31245 = (state_31271[7]);var inst_31259 = (state_31271[2]);var state_31271__$1 = (function (){var statearr_31289 = state_31271;(statearr_31289[9] = inst_31259);
return statearr_31289;
})();var statearr_31290_31316 = state_31271__$1;(statearr_31290_31316[2] = inst_31245);
(statearr_31290_31316[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31272 === 15))
{var state_31271__$1 = state_31271;var statearr_31291_31317 = state_31271__$1;(statearr_31291_31317[2] = null);
(statearr_31291_31317[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31272 === 16))
{var state_31271__$1 = state_31271;var statearr_31292_31318 = state_31271__$1;(statearr_31292_31318[2] = null);
(statearr_31292_31318[1] = 17);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31272 === 17))
{var inst_31267 = (state_31271[2]);var state_31271__$1 = state_31271;var statearr_31293_31319 = state_31271__$1;(statearr_31293_31319[2] = inst_31267);
(statearr_31293_31319[1] = 3);
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
var state_machine__5507__auto____0 = (function (){var statearr_31297 = [null,null,null,null,null,null,null,null,null,null];(statearr_31297[0] = state_machine__5507__auto__);
(statearr_31297[1] = 1);
return statearr_31297;
});
var state_machine__5507__auto____1 = (function (state_31271){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_31271);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e31298){if((e31298 instanceof Object))
{var ex__5510__auto__ = e31298;var statearr_31299_31320 = state_31271;(statearr_31299_31320[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31271);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e31298;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__31321 = state_31271;
state_31271 = G__31321;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_31271){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_31271);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_31300 = f__5522__auto__.call(null);(statearr_31300[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___31301);
return statearr_31300;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5523__auto__);
}));
return null;
};
var dorun_async = function (ch,var_args){
var p__31182 = null;if (arguments.length > 1) {
  p__31182 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return dorun_async__delegate.call(this,ch,p__31182);};
dorun_async.cljs$lang$maxFixedArity = 1;
dorun_async.cljs$lang$applyTo = (function (arglist__31322){
var ch = cljs.core.first(arglist__31322);
var p__31182 = cljs.core.rest(arglist__31322);
return dorun_async__delegate(ch,p__31182);
});
dorun_async.cljs$core$IFn$_invoke$arity$variadic = dorun_async__delegate;
return dorun_async;
})()
;
