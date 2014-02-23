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
map_async.cljs$lang$applyTo = (function (arglist__22174){
var f = cljs.core.first(arglist__22174);
var colls = cljs.core.rest(arglist__22174);
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
var dorun_async__delegate = function (ch,p__22175){var map__22235 = p__22175;var map__22235__$1 = ((cljs.core.seq_QMARK_(map__22235))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22235):map__22235);var delay = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22235__$1,cljs.core.constant$keyword$422);var log = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22235__$1,cljs.core.constant$keyword$451);var c__5521__auto___22294 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_22264){var state_val_22265 = (state_22264[1]);if((state_val_22265 === 1))
{var state_22264__$1 = state_22264;var statearr_22266_22295 = state_22264__$1;(statearr_22266_22295[2] = null);
(statearr_22266_22295[1] = 2);
return cljs.core.constant$keyword$248;
} else
{if((state_val_22265 === 2))
{var state_22264__$1 = state_22264;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_22264__$1,4,ch);
} else
{if((state_val_22265 === 3))
{var inst_22262 = (state_22264[2]);var state_22264__$1 = state_22264;return cljs.core.async.impl.ioc_helpers.return_chan(state_22264__$1,inst_22262);
} else
{if((state_val_22265 === 4))
{var inst_22238 = (state_22264[7]);var inst_22238__$1 = (state_22264[2]);var state_22264__$1 = (function (){var statearr_22267 = state_22264;(statearr_22267[7] = inst_22238__$1);
return statearr_22267;
})();if(cljs.core.truth_(inst_22238__$1))
{var statearr_22268_22296 = state_22264__$1;(statearr_22268_22296[1] = 5);
} else
{var statearr_22269_22297 = state_22264__$1;(statearr_22269_22297[1] = 6);
}
return cljs.core.constant$keyword$248;
} else
{if((state_val_22265 === 5))
{var state_22264__$1 = state_22264;if(cljs.core.truth_(delay))
{var statearr_22270_22298 = state_22264__$1;(statearr_22270_22298[1] = 8);
} else
{var statearr_22271_22299 = state_22264__$1;(statearr_22271_22299[1] = 9);
}
return cljs.core.constant$keyword$248;
} else
{if((state_val_22265 === 6))
{var state_22264__$1 = state_22264;var statearr_22272_22300 = state_22264__$1;(statearr_22272_22300[2] = null);
(statearr_22272_22300[1] = 7);
return cljs.core.constant$keyword$248;
} else
{if((state_val_22265 === 7))
{var inst_22255 = (state_22264[2]);var state_22264__$1 = state_22264;if(cljs.core.truth_(inst_22255))
{var statearr_22273_22301 = state_22264__$1;(statearr_22273_22301[1] = 15);
} else
{var statearr_22274_22302 = state_22264__$1;(statearr_22274_22302[1] = 16);
}
return cljs.core.constant$keyword$248;
} else
{if((state_val_22265 === 8))
{var inst_22241 = cljs.core.async.timeout(delay);var state_22264__$1 = state_22264;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_22264__$1,11,inst_22241);
} else
{if((state_val_22265 === 9))
{var state_22264__$1 = state_22264;var statearr_22275_22303 = state_22264__$1;(statearr_22275_22303[2] = null);
(statearr_22275_22303[1] = 10);
return cljs.core.constant$keyword$248;
} else
{if((state_val_22265 === 10))
{var inst_22246 = (state_22264[2]);var state_22264__$1 = (function (){var statearr_22276 = state_22264;(statearr_22276[8] = inst_22246);
return statearr_22276;
})();if(cljs.core.truth_(log))
{var statearr_22277_22304 = state_22264__$1;(statearr_22277_22304[1] = 12);
} else
{var statearr_22278_22305 = state_22264__$1;(statearr_22278_22305[1] = 13);
}
return cljs.core.constant$keyword$248;
} else
{if((state_val_22265 === 11))
{var inst_22243 = (state_22264[2]);var state_22264__$1 = state_22264;var statearr_22279_22306 = state_22264__$1;(statearr_22279_22306[2] = inst_22243);
(statearr_22279_22306[1] = 10);
return cljs.core.constant$keyword$248;
} else
{if((state_val_22265 === 12))
{var inst_22238 = (state_22264[7]);var inst_22248 = cljs.core.clj__GT_js(inst_22238);var inst_22249 = console.log(inst_22248);var state_22264__$1 = state_22264;var statearr_22280_22307 = state_22264__$1;(statearr_22280_22307[2] = inst_22249);
(statearr_22280_22307[1] = 14);
return cljs.core.constant$keyword$248;
} else
{if((state_val_22265 === 13))
{var state_22264__$1 = state_22264;var statearr_22281_22308 = state_22264__$1;(statearr_22281_22308[2] = null);
(statearr_22281_22308[1] = 14);
return cljs.core.constant$keyword$248;
} else
{if((state_val_22265 === 14))
{var inst_22238 = (state_22264[7]);var inst_22252 = (state_22264[2]);var state_22264__$1 = (function (){var statearr_22282 = state_22264;(statearr_22282[9] = inst_22252);
return statearr_22282;
})();var statearr_22283_22309 = state_22264__$1;(statearr_22283_22309[2] = inst_22238);
(statearr_22283_22309[1] = 7);
return cljs.core.constant$keyword$248;
} else
{if((state_val_22265 === 15))
{var state_22264__$1 = state_22264;var statearr_22284_22310 = state_22264__$1;(statearr_22284_22310[2] = null);
(statearr_22284_22310[1] = 2);
return cljs.core.constant$keyword$248;
} else
{if((state_val_22265 === 16))
{var state_22264__$1 = state_22264;var statearr_22285_22311 = state_22264__$1;(statearr_22285_22311[2] = null);
(statearr_22285_22311[1] = 17);
return cljs.core.constant$keyword$248;
} else
{if((state_val_22265 === 17))
{var inst_22260 = (state_22264[2]);var state_22264__$1 = state_22264;var statearr_22286_22312 = state_22264__$1;(statearr_22286_22312[2] = inst_22260);
(statearr_22286_22312[1] = 3);
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
var state_machine__5507__auto____0 = (function (){var statearr_22290 = [null,null,null,null,null,null,null,null,null,null];(statearr_22290[0] = state_machine__5507__auto__);
(statearr_22290[1] = 1);
return statearr_22290;
});
var state_machine__5507__auto____1 = (function (state_22264){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_22264);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$248))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e22291){if((e22291 instanceof Object))
{var ex__5510__auto__ = e22291;var statearr_22292_22313 = state_22264;(statearr_22292_22313[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_22264);
return cljs.core.constant$keyword$248;
} else
{if(cljs.core.constant$keyword$237)
{throw e22291;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$248))
{{
var G__22314 = state_22264;
state_22264 = G__22314;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_22264){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_22264);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_22293 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_22293[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___22294);
return statearr_22293;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5523__auto__);
}));
return null;
};
var dorun_async = function (ch,var_args){
var p__22175 = null;if (arguments.length > 1) {
  p__22175 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return dorun_async__delegate.call(this,ch,p__22175);};
dorun_async.cljs$lang$maxFixedArity = 1;
dorun_async.cljs$lang$applyTo = (function (arglist__22315){
var ch = cljs.core.first(arglist__22315);
var p__22175 = cljs.core.rest(arglist__22315);
return dorun_async__delegate(ch,p__22175);
});
dorun_async.cljs$core$IFn$_invoke$arity$variadic = dorun_async__delegate;
return dorun_async;
})()
;
