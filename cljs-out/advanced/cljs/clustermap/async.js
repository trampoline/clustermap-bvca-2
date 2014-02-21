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
map_async.cljs$lang$applyTo = (function (arglist__22141){
var f = cljs.core.first(arglist__22141);
var colls = cljs.core.rest(arglist__22141);
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
var dorun_async__delegate = function (ch,p__22142){var map__22202 = p__22142;var map__22202__$1 = ((cljs.core.seq_QMARK_(map__22202))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22202):map__22202);var delay = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22202__$1,cljs.core.constant$keyword$411);var log = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22202__$1,cljs.core.constant$keyword$437);var c__5521__auto___22261 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_22231){var state_val_22232 = (state_22231[1]);if((state_val_22232 === 1))
{var state_22231__$1 = state_22231;var statearr_22233_22262 = state_22231__$1;(statearr_22233_22262[2] = null);
(statearr_22233_22262[1] = 2);
return cljs.core.constant$keyword$241;
} else
{if((state_val_22232 === 2))
{var state_22231__$1 = state_22231;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_22231__$1,4,ch);
} else
{if((state_val_22232 === 3))
{var inst_22229 = (state_22231[2]);var state_22231__$1 = state_22231;return cljs.core.async.impl.ioc_helpers.return_chan(state_22231__$1,inst_22229);
} else
{if((state_val_22232 === 4))
{var inst_22205 = (state_22231[7]);var inst_22205__$1 = (state_22231[2]);var state_22231__$1 = (function (){var statearr_22234 = state_22231;(statearr_22234[7] = inst_22205__$1);
return statearr_22234;
})();if(cljs.core.truth_(inst_22205__$1))
{var statearr_22235_22263 = state_22231__$1;(statearr_22235_22263[1] = 5);
} else
{var statearr_22236_22264 = state_22231__$1;(statearr_22236_22264[1] = 6);
}
return cljs.core.constant$keyword$241;
} else
{if((state_val_22232 === 5))
{var state_22231__$1 = state_22231;if(cljs.core.truth_(delay))
{var statearr_22237_22265 = state_22231__$1;(statearr_22237_22265[1] = 8);
} else
{var statearr_22238_22266 = state_22231__$1;(statearr_22238_22266[1] = 9);
}
return cljs.core.constant$keyword$241;
} else
{if((state_val_22232 === 6))
{var state_22231__$1 = state_22231;var statearr_22239_22267 = state_22231__$1;(statearr_22239_22267[2] = null);
(statearr_22239_22267[1] = 7);
return cljs.core.constant$keyword$241;
} else
{if((state_val_22232 === 7))
{var inst_22222 = (state_22231[2]);var state_22231__$1 = state_22231;if(cljs.core.truth_(inst_22222))
{var statearr_22240_22268 = state_22231__$1;(statearr_22240_22268[1] = 15);
} else
{var statearr_22241_22269 = state_22231__$1;(statearr_22241_22269[1] = 16);
}
return cljs.core.constant$keyword$241;
} else
{if((state_val_22232 === 8))
{var inst_22208 = cljs.core.async.timeout(delay);var state_22231__$1 = state_22231;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_22231__$1,11,inst_22208);
} else
{if((state_val_22232 === 9))
{var state_22231__$1 = state_22231;var statearr_22242_22270 = state_22231__$1;(statearr_22242_22270[2] = null);
(statearr_22242_22270[1] = 10);
return cljs.core.constant$keyword$241;
} else
{if((state_val_22232 === 10))
{var inst_22213 = (state_22231[2]);var state_22231__$1 = (function (){var statearr_22243 = state_22231;(statearr_22243[8] = inst_22213);
return statearr_22243;
})();if(cljs.core.truth_(log))
{var statearr_22244_22271 = state_22231__$1;(statearr_22244_22271[1] = 12);
} else
{var statearr_22245_22272 = state_22231__$1;(statearr_22245_22272[1] = 13);
}
return cljs.core.constant$keyword$241;
} else
{if((state_val_22232 === 11))
{var inst_22210 = (state_22231[2]);var state_22231__$1 = state_22231;var statearr_22246_22273 = state_22231__$1;(statearr_22246_22273[2] = inst_22210);
(statearr_22246_22273[1] = 10);
return cljs.core.constant$keyword$241;
} else
{if((state_val_22232 === 12))
{var inst_22205 = (state_22231[7]);var inst_22215 = cljs.core.clj__GT_js(inst_22205);var inst_22216 = console.log(inst_22215);var state_22231__$1 = state_22231;var statearr_22247_22274 = state_22231__$1;(statearr_22247_22274[2] = inst_22216);
(statearr_22247_22274[1] = 14);
return cljs.core.constant$keyword$241;
} else
{if((state_val_22232 === 13))
{var state_22231__$1 = state_22231;var statearr_22248_22275 = state_22231__$1;(statearr_22248_22275[2] = null);
(statearr_22248_22275[1] = 14);
return cljs.core.constant$keyword$241;
} else
{if((state_val_22232 === 14))
{var inst_22205 = (state_22231[7]);var inst_22219 = (state_22231[2]);var state_22231__$1 = (function (){var statearr_22249 = state_22231;(statearr_22249[9] = inst_22219);
return statearr_22249;
})();var statearr_22250_22276 = state_22231__$1;(statearr_22250_22276[2] = inst_22205);
(statearr_22250_22276[1] = 7);
return cljs.core.constant$keyword$241;
} else
{if((state_val_22232 === 15))
{var state_22231__$1 = state_22231;var statearr_22251_22277 = state_22231__$1;(statearr_22251_22277[2] = null);
(statearr_22251_22277[1] = 2);
return cljs.core.constant$keyword$241;
} else
{if((state_val_22232 === 16))
{var state_22231__$1 = state_22231;var statearr_22252_22278 = state_22231__$1;(statearr_22252_22278[2] = null);
(statearr_22252_22278[1] = 17);
return cljs.core.constant$keyword$241;
} else
{if((state_val_22232 === 17))
{var inst_22227 = (state_22231[2]);var state_22231__$1 = state_22231;var statearr_22253_22279 = state_22231__$1;(statearr_22253_22279[2] = inst_22227);
(statearr_22253_22279[1] = 3);
return cljs.core.constant$keyword$241;
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
var state_machine__5507__auto____0 = (function (){var statearr_22257 = [null,null,null,null,null,null,null,null,null,null];(statearr_22257[0] = state_machine__5507__auto__);
(statearr_22257[1] = 1);
return statearr_22257;
});
var state_machine__5507__auto____1 = (function (state_22231){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_22231);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$241))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e22258){if((e22258 instanceof Object))
{var ex__5510__auto__ = e22258;var statearr_22259_22280 = state_22231;(statearr_22259_22280[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_22231);
return cljs.core.constant$keyword$241;
} else
{if(cljs.core.constant$keyword$230)
{throw e22258;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$241))
{{
var G__22281 = state_22231;
state_22231 = G__22281;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_22231){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_22231);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_22260 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_22260[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___22261);
return statearr_22260;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5523__auto__);
}));
return null;
};
var dorun_async = function (ch,var_args){
var p__22142 = null;if (arguments.length > 1) {
  p__22142 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return dorun_async__delegate.call(this,ch,p__22142);};
dorun_async.cljs$lang$maxFixedArity = 1;
dorun_async.cljs$lang$applyTo = (function (arglist__22282){
var ch = cljs.core.first(arglist__22282);
var p__22142 = cljs.core.rest(arglist__22282);
return dorun_async__delegate(ch,p__22142);
});
dorun_async.cljs$core$IFn$_invoke$arity$variadic = dorun_async__delegate;
return dorun_async;
})()
;
