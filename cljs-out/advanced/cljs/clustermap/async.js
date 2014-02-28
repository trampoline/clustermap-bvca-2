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
map_async.cljs$lang$applyTo = (function (arglist__22154){
var f = cljs.core.first(arglist__22154);
var colls = cljs.core.rest(arglist__22154);
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
var dorun_async__delegate = function (ch,p__22155){var map__22215 = p__22155;var map__22215__$1 = ((cljs.core.seq_QMARK_(map__22215))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22215):map__22215);var delay = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22215__$1,cljs.core.constant$keyword$436);var log = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22215__$1,cljs.core.constant$keyword$466);var c__5521__auto___22274 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_22244){var state_val_22245 = (state_22244[1]);if((state_val_22245 === 1))
{var state_22244__$1 = state_22244;var statearr_22246_22275 = state_22244__$1;(statearr_22246_22275[2] = null);
(statearr_22246_22275[1] = 2);
return cljs.core.constant$keyword$255;
} else
{if((state_val_22245 === 2))
{var state_22244__$1 = state_22244;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_22244__$1,4,ch);
} else
{if((state_val_22245 === 3))
{var inst_22242 = (state_22244[2]);var state_22244__$1 = state_22244;return cljs.core.async.impl.ioc_helpers.return_chan(state_22244__$1,inst_22242);
} else
{if((state_val_22245 === 4))
{var inst_22218 = (state_22244[7]);var inst_22218__$1 = (state_22244[2]);var state_22244__$1 = (function (){var statearr_22247 = state_22244;(statearr_22247[7] = inst_22218__$1);
return statearr_22247;
})();if(cljs.core.truth_(inst_22218__$1))
{var statearr_22248_22276 = state_22244__$1;(statearr_22248_22276[1] = 5);
} else
{var statearr_22249_22277 = state_22244__$1;(statearr_22249_22277[1] = 6);
}
return cljs.core.constant$keyword$255;
} else
{if((state_val_22245 === 5))
{var state_22244__$1 = state_22244;if(cljs.core.truth_(delay))
{var statearr_22250_22278 = state_22244__$1;(statearr_22250_22278[1] = 8);
} else
{var statearr_22251_22279 = state_22244__$1;(statearr_22251_22279[1] = 9);
}
return cljs.core.constant$keyword$255;
} else
{if((state_val_22245 === 6))
{var state_22244__$1 = state_22244;var statearr_22252_22280 = state_22244__$1;(statearr_22252_22280[2] = null);
(statearr_22252_22280[1] = 7);
return cljs.core.constant$keyword$255;
} else
{if((state_val_22245 === 7))
{var inst_22235 = (state_22244[2]);var state_22244__$1 = state_22244;if(cljs.core.truth_(inst_22235))
{var statearr_22253_22281 = state_22244__$1;(statearr_22253_22281[1] = 15);
} else
{var statearr_22254_22282 = state_22244__$1;(statearr_22254_22282[1] = 16);
}
return cljs.core.constant$keyword$255;
} else
{if((state_val_22245 === 8))
{var inst_22221 = cljs.core.async.timeout(delay);var state_22244__$1 = state_22244;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_22244__$1,11,inst_22221);
} else
{if((state_val_22245 === 9))
{var state_22244__$1 = state_22244;var statearr_22255_22283 = state_22244__$1;(statearr_22255_22283[2] = null);
(statearr_22255_22283[1] = 10);
return cljs.core.constant$keyword$255;
} else
{if((state_val_22245 === 10))
{var inst_22226 = (state_22244[2]);var state_22244__$1 = (function (){var statearr_22256 = state_22244;(statearr_22256[8] = inst_22226);
return statearr_22256;
})();if(cljs.core.truth_(log))
{var statearr_22257_22284 = state_22244__$1;(statearr_22257_22284[1] = 12);
} else
{var statearr_22258_22285 = state_22244__$1;(statearr_22258_22285[1] = 13);
}
return cljs.core.constant$keyword$255;
} else
{if((state_val_22245 === 11))
{var inst_22223 = (state_22244[2]);var state_22244__$1 = state_22244;var statearr_22259_22286 = state_22244__$1;(statearr_22259_22286[2] = inst_22223);
(statearr_22259_22286[1] = 10);
return cljs.core.constant$keyword$255;
} else
{if((state_val_22245 === 12))
{var inst_22218 = (state_22244[7]);var inst_22228 = cljs.core.clj__GT_js(inst_22218);var inst_22229 = console.log(inst_22228);var state_22244__$1 = state_22244;var statearr_22260_22287 = state_22244__$1;(statearr_22260_22287[2] = inst_22229);
(statearr_22260_22287[1] = 14);
return cljs.core.constant$keyword$255;
} else
{if((state_val_22245 === 13))
{var state_22244__$1 = state_22244;var statearr_22261_22288 = state_22244__$1;(statearr_22261_22288[2] = null);
(statearr_22261_22288[1] = 14);
return cljs.core.constant$keyword$255;
} else
{if((state_val_22245 === 14))
{var inst_22218 = (state_22244[7]);var inst_22232 = (state_22244[2]);var state_22244__$1 = (function (){var statearr_22262 = state_22244;(statearr_22262[9] = inst_22232);
return statearr_22262;
})();var statearr_22263_22289 = state_22244__$1;(statearr_22263_22289[2] = inst_22218);
(statearr_22263_22289[1] = 7);
return cljs.core.constant$keyword$255;
} else
{if((state_val_22245 === 15))
{var state_22244__$1 = state_22244;var statearr_22264_22290 = state_22244__$1;(statearr_22264_22290[2] = null);
(statearr_22264_22290[1] = 2);
return cljs.core.constant$keyword$255;
} else
{if((state_val_22245 === 16))
{var state_22244__$1 = state_22244;var statearr_22265_22291 = state_22244__$1;(statearr_22265_22291[2] = null);
(statearr_22265_22291[1] = 17);
return cljs.core.constant$keyword$255;
} else
{if((state_val_22245 === 17))
{var inst_22240 = (state_22244[2]);var state_22244__$1 = state_22244;var statearr_22266_22292 = state_22244__$1;(statearr_22266_22292[2] = inst_22240);
(statearr_22266_22292[1] = 3);
return cljs.core.constant$keyword$255;
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
var state_machine__5507__auto____0 = (function (){var statearr_22270 = [null,null,null,null,null,null,null,null,null,null];(statearr_22270[0] = state_machine__5507__auto__);
(statearr_22270[1] = 1);
return statearr_22270;
});
var state_machine__5507__auto____1 = (function (state_22244){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_22244);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$255))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e22271){if((e22271 instanceof Object))
{var ex__5510__auto__ = e22271;var statearr_22272_22293 = state_22244;(statearr_22272_22293[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_22244);
return cljs.core.constant$keyword$255;
} else
{if(cljs.core.constant$keyword$244)
{throw e22271;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$255))
{{
var G__22294 = state_22244;
state_22244 = G__22294;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_22244){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_22244);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_22273 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_22273[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___22274);
return statearr_22273;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5523__auto__);
}));
return null;
};
var dorun_async = function (ch,var_args){
var p__22155 = null;if (arguments.length > 1) {
  p__22155 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return dorun_async__delegate.call(this,ch,p__22155);};
dorun_async.cljs$lang$maxFixedArity = 1;
dorun_async.cljs$lang$applyTo = (function (arglist__22295){
var ch = cljs.core.first(arglist__22295);
var p__22155 = cljs.core.rest(arglist__22295);
return dorun_async__delegate(ch,p__22155);
});
dorun_async.cljs$core$IFn$_invoke$arity$variadic = dorun_async__delegate;
return dorun_async;
})()
;
