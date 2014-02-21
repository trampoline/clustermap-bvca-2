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
var map_async__delegate = function (f,colls){var coll_chs = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (coll){var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2(ch,coll);
return ch;
}),colls);return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2(f,coll_chs);
};
var map_async = function (f,var_args){
var colls = null;if (arguments.length > 1) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return map_async__delegate.call(this,f,colls);};
map_async.cljs$lang$maxFixedArity = 1;
map_async.cljs$lang$applyTo = (function (arglist__22180){
var f = cljs.core.first(arglist__22180);
var colls = cljs.core.rest(arglist__22180);
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
var dorun_async__delegate = function (ch,p__22181){var map__22241 = p__22181;var map__22241__$1 = ((cljs.core.seq_QMARK_(map__22241))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22241):map__22241);var delay = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22241__$1,cljs.core.constant$keyword$421);var log = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22241__$1,cljs.core.constant$keyword$451);var c__5521__auto___22300 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_22270){var state_val_22271 = (state_22270[1]);if((state_val_22271 === 1))
{var state_22270__$1 = state_22270;var statearr_22272_22301 = state_22270__$1;(statearr_22272_22301[2] = null);
(statearr_22272_22301[1] = 2);
return cljs.core.constant$keyword$248;
} else
{if((state_val_22271 === 2))
{var state_22270__$1 = state_22270;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_22270__$1,4,ch);
} else
{if((state_val_22271 === 3))
{var inst_22268 = (state_22270[2]);var state_22270__$1 = state_22270;return cljs.core.async.impl.ioc_helpers.return_chan(state_22270__$1,inst_22268);
} else
{if((state_val_22271 === 4))
{var inst_22244 = (state_22270[7]);var inst_22244__$1 = (state_22270[2]);var state_22270__$1 = (function (){var statearr_22273 = state_22270;(statearr_22273[7] = inst_22244__$1);
return statearr_22273;
})();if(cljs.core.truth_(inst_22244__$1))
{var statearr_22274_22302 = state_22270__$1;(statearr_22274_22302[1] = 5);
} else
{var statearr_22275_22303 = state_22270__$1;(statearr_22275_22303[1] = 6);
}
return cljs.core.constant$keyword$248;
} else
{if((state_val_22271 === 5))
{var state_22270__$1 = state_22270;if(cljs.core.truth_(delay))
{var statearr_22276_22304 = state_22270__$1;(statearr_22276_22304[1] = 8);
} else
{var statearr_22277_22305 = state_22270__$1;(statearr_22277_22305[1] = 9);
}
return cljs.core.constant$keyword$248;
} else
{if((state_val_22271 === 6))
{var state_22270__$1 = state_22270;var statearr_22278_22306 = state_22270__$1;(statearr_22278_22306[2] = null);
(statearr_22278_22306[1] = 7);
return cljs.core.constant$keyword$248;
} else
{if((state_val_22271 === 7))
{var inst_22261 = (state_22270[2]);var state_22270__$1 = state_22270;if(cljs.core.truth_(inst_22261))
{var statearr_22279_22307 = state_22270__$1;(statearr_22279_22307[1] = 15);
} else
{var statearr_22280_22308 = state_22270__$1;(statearr_22280_22308[1] = 16);
}
return cljs.core.constant$keyword$248;
} else
{if((state_val_22271 === 8))
{var inst_22247 = cljs.core.async.timeout(delay);var state_22270__$1 = state_22270;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_22270__$1,11,inst_22247);
} else
{if((state_val_22271 === 9))
{var state_22270__$1 = state_22270;var statearr_22281_22309 = state_22270__$1;(statearr_22281_22309[2] = null);
(statearr_22281_22309[1] = 10);
return cljs.core.constant$keyword$248;
} else
{if((state_val_22271 === 10))
{var inst_22252 = (state_22270[2]);var state_22270__$1 = (function (){var statearr_22282 = state_22270;(statearr_22282[8] = inst_22252);
return statearr_22282;
})();if(cljs.core.truth_(log))
{var statearr_22283_22310 = state_22270__$1;(statearr_22283_22310[1] = 12);
} else
{var statearr_22284_22311 = state_22270__$1;(statearr_22284_22311[1] = 13);
}
return cljs.core.constant$keyword$248;
} else
{if((state_val_22271 === 11))
{var inst_22249 = (state_22270[2]);var state_22270__$1 = state_22270;var statearr_22285_22312 = state_22270__$1;(statearr_22285_22312[2] = inst_22249);
(statearr_22285_22312[1] = 10);
return cljs.core.constant$keyword$248;
} else
{if((state_val_22271 === 12))
{var inst_22244 = (state_22270[7]);var inst_22254 = cljs.core.clj__GT_js(inst_22244);var inst_22255 = console.log(inst_22254);var state_22270__$1 = state_22270;var statearr_22286_22313 = state_22270__$1;(statearr_22286_22313[2] = inst_22255);
(statearr_22286_22313[1] = 14);
return cljs.core.constant$keyword$248;
} else
{if((state_val_22271 === 13))
{var state_22270__$1 = state_22270;var statearr_22287_22314 = state_22270__$1;(statearr_22287_22314[2] = null);
(statearr_22287_22314[1] = 14);
return cljs.core.constant$keyword$248;
} else
{if((state_val_22271 === 14))
{var inst_22244 = (state_22270[7]);var inst_22258 = (state_22270[2]);var state_22270__$1 = (function (){var statearr_22288 = state_22270;(statearr_22288[9] = inst_22258);
return statearr_22288;
})();var statearr_22289_22315 = state_22270__$1;(statearr_22289_22315[2] = inst_22244);
(statearr_22289_22315[1] = 7);
return cljs.core.constant$keyword$248;
} else
{if((state_val_22271 === 15))
{var state_22270__$1 = state_22270;var statearr_22290_22316 = state_22270__$1;(statearr_22290_22316[2] = null);
(statearr_22290_22316[1] = 2);
return cljs.core.constant$keyword$248;
} else
{if((state_val_22271 === 16))
{var state_22270__$1 = state_22270;var statearr_22291_22317 = state_22270__$1;(statearr_22291_22317[2] = null);
(statearr_22291_22317[1] = 17);
return cljs.core.constant$keyword$248;
} else
{if((state_val_22271 === 17))
{var inst_22266 = (state_22270[2]);var state_22270__$1 = state_22270;var statearr_22292_22318 = state_22270__$1;(statearr_22292_22318[2] = inst_22266);
(statearr_22292_22318[1] = 3);
return cljs.core.constant$keyword$248;
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
var state_machine__5507__auto____0 = (function (){var statearr_22296 = [null,null,null,null,null,null,null,null,null,null];(statearr_22296[0] = state_machine__5507__auto__);
(statearr_22296[1] = 1);
return statearr_22296;
});
var state_machine__5507__auto____1 = (function (state_22270){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_22270);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$248))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e22297){if((e22297 instanceof Object))
{var ex__5510__auto__ = e22297;var statearr_22298_22319 = state_22270;(statearr_22298_22319[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_22270);
return cljs.core.constant$keyword$248;
} else
{if(cljs.core.constant$keyword$237)
{throw e22297;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$248))
{{
var G__22320 = state_22270;
state_22270 = G__22320;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_22270){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_22270);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_22299 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_22299[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___22300);
return statearr_22299;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5523__auto__);
}));
return null;
};
var dorun_async = function (ch,var_args){
var p__22181 = null;if (arguments.length > 1) {
  p__22181 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return dorun_async__delegate.call(this,ch,p__22181);};
dorun_async.cljs$lang$maxFixedArity = 1;
dorun_async.cljs$lang$applyTo = (function (arglist__22321){
var ch = cljs.core.first(arglist__22321);
var p__22181 = cljs.core.rest(arglist__22321);
return dorun_async__delegate(ch,p__22181);
});
dorun_async.cljs$core$IFn$_invoke$arity$variadic = dorun_async__delegate;
return dorun_async;
})()
;
