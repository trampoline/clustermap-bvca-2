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
map_async.cljs$lang$applyTo = (function (arglist__22136){
var f = cljs.core.first(arglist__22136);
var colls = cljs.core.rest(arglist__22136);
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
var dorun_async__delegate = function (ch,p__22137){var map__22197 = p__22137;var map__22197__$1 = ((cljs.core.seq_QMARK_(map__22197))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22197):map__22197);var delay = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22197__$1,cljs.core.constant$keyword$412);var log = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22197__$1,cljs.core.constant$keyword$437);var c__5521__auto___22256 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_22226){var state_val_22227 = (state_22226[1]);if((state_val_22227 === 1))
{var state_22226__$1 = state_22226;var statearr_22228_22257 = state_22226__$1;(statearr_22228_22257[2] = null);
(statearr_22228_22257[1] = 2);
return cljs.core.constant$keyword$241;
} else
{if((state_val_22227 === 2))
{var state_22226__$1 = state_22226;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_22226__$1,4,ch);
} else
{if((state_val_22227 === 3))
{var inst_22224 = (state_22226[2]);var state_22226__$1 = state_22226;return cljs.core.async.impl.ioc_helpers.return_chan(state_22226__$1,inst_22224);
} else
{if((state_val_22227 === 4))
{var inst_22200 = (state_22226[7]);var inst_22200__$1 = (state_22226[2]);var state_22226__$1 = (function (){var statearr_22229 = state_22226;(statearr_22229[7] = inst_22200__$1);
return statearr_22229;
})();if(cljs.core.truth_(inst_22200__$1))
{var statearr_22230_22258 = state_22226__$1;(statearr_22230_22258[1] = 5);
} else
{var statearr_22231_22259 = state_22226__$1;(statearr_22231_22259[1] = 6);
}
return cljs.core.constant$keyword$241;
} else
{if((state_val_22227 === 5))
{var state_22226__$1 = state_22226;if(cljs.core.truth_(delay))
{var statearr_22232_22260 = state_22226__$1;(statearr_22232_22260[1] = 8);
} else
{var statearr_22233_22261 = state_22226__$1;(statearr_22233_22261[1] = 9);
}
return cljs.core.constant$keyword$241;
} else
{if((state_val_22227 === 6))
{var state_22226__$1 = state_22226;var statearr_22234_22262 = state_22226__$1;(statearr_22234_22262[2] = null);
(statearr_22234_22262[1] = 7);
return cljs.core.constant$keyword$241;
} else
{if((state_val_22227 === 7))
{var inst_22217 = (state_22226[2]);var state_22226__$1 = state_22226;if(cljs.core.truth_(inst_22217))
{var statearr_22235_22263 = state_22226__$1;(statearr_22235_22263[1] = 15);
} else
{var statearr_22236_22264 = state_22226__$1;(statearr_22236_22264[1] = 16);
}
return cljs.core.constant$keyword$241;
} else
{if((state_val_22227 === 8))
{var inst_22203 = cljs.core.async.timeout(delay);var state_22226__$1 = state_22226;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_22226__$1,11,inst_22203);
} else
{if((state_val_22227 === 9))
{var state_22226__$1 = state_22226;var statearr_22237_22265 = state_22226__$1;(statearr_22237_22265[2] = null);
(statearr_22237_22265[1] = 10);
return cljs.core.constant$keyword$241;
} else
{if((state_val_22227 === 10))
{var inst_22208 = (state_22226[2]);var state_22226__$1 = (function (){var statearr_22238 = state_22226;(statearr_22238[8] = inst_22208);
return statearr_22238;
})();if(cljs.core.truth_(log))
{var statearr_22239_22266 = state_22226__$1;(statearr_22239_22266[1] = 12);
} else
{var statearr_22240_22267 = state_22226__$1;(statearr_22240_22267[1] = 13);
}
return cljs.core.constant$keyword$241;
} else
{if((state_val_22227 === 11))
{var inst_22205 = (state_22226[2]);var state_22226__$1 = state_22226;var statearr_22241_22268 = state_22226__$1;(statearr_22241_22268[2] = inst_22205);
(statearr_22241_22268[1] = 10);
return cljs.core.constant$keyword$241;
} else
{if((state_val_22227 === 12))
{var inst_22200 = (state_22226[7]);var inst_22210 = cljs.core.clj__GT_js(inst_22200);var inst_22211 = console.log(inst_22210);var state_22226__$1 = state_22226;var statearr_22242_22269 = state_22226__$1;(statearr_22242_22269[2] = inst_22211);
(statearr_22242_22269[1] = 14);
return cljs.core.constant$keyword$241;
} else
{if((state_val_22227 === 13))
{var state_22226__$1 = state_22226;var statearr_22243_22270 = state_22226__$1;(statearr_22243_22270[2] = null);
(statearr_22243_22270[1] = 14);
return cljs.core.constant$keyword$241;
} else
{if((state_val_22227 === 14))
{var inst_22200 = (state_22226[7]);var inst_22214 = (state_22226[2]);var state_22226__$1 = (function (){var statearr_22244 = state_22226;(statearr_22244[9] = inst_22214);
return statearr_22244;
})();var statearr_22245_22271 = state_22226__$1;(statearr_22245_22271[2] = inst_22200);
(statearr_22245_22271[1] = 7);
return cljs.core.constant$keyword$241;
} else
{if((state_val_22227 === 15))
{var state_22226__$1 = state_22226;var statearr_22246_22272 = state_22226__$1;(statearr_22246_22272[2] = null);
(statearr_22246_22272[1] = 2);
return cljs.core.constant$keyword$241;
} else
{if((state_val_22227 === 16))
{var state_22226__$1 = state_22226;var statearr_22247_22273 = state_22226__$1;(statearr_22247_22273[2] = null);
(statearr_22247_22273[1] = 17);
return cljs.core.constant$keyword$241;
} else
{if((state_val_22227 === 17))
{var inst_22222 = (state_22226[2]);var state_22226__$1 = state_22226;var statearr_22248_22274 = state_22226__$1;(statearr_22248_22274[2] = inst_22222);
(statearr_22248_22274[1] = 3);
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
var state_machine__5507__auto____0 = (function (){var statearr_22252 = [null,null,null,null,null,null,null,null,null,null];(statearr_22252[0] = state_machine__5507__auto__);
(statearr_22252[1] = 1);
return statearr_22252;
});
var state_machine__5507__auto____1 = (function (state_22226){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_22226);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$241))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e22253){if((e22253 instanceof Object))
{var ex__5510__auto__ = e22253;var statearr_22254_22275 = state_22226;(statearr_22254_22275[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_22226);
return cljs.core.constant$keyword$241;
} else
{if(cljs.core.constant$keyword$230)
{throw e22253;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$241))
{{
var G__22276 = state_22226;
state_22226 = G__22276;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_22226){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_22226);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_22255 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_22255[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___22256);
return statearr_22255;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5523__auto__);
}));
return null;
};
var dorun_async = function (ch,var_args){
var p__22137 = null;if (arguments.length > 1) {
  p__22137 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return dorun_async__delegate.call(this,ch,p__22137);};
dorun_async.cljs$lang$maxFixedArity = 1;
dorun_async.cljs$lang$applyTo = (function (arglist__22277){
var ch = cljs.core.first(arglist__22277);
var p__22137 = cljs.core.rest(arglist__22277);
return dorun_async__delegate(ch,p__22137);
});
dorun_async.cljs$core$IFn$_invoke$arity$variadic = dorun_async__delegate;
return dorun_async;
})()
;
