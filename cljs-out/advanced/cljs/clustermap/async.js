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
map_async.cljs$lang$applyTo = (function (arglist__22111){
var f = cljs.core.first(arglist__22111);
var colls = cljs.core.rest(arglist__22111);
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
var dorun_async__delegate = function (ch,p__22112){var map__22172 = p__22112;var map__22172__$1 = ((cljs.core.seq_QMARK_(map__22172))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22172):map__22172);var delay = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22172__$1,cljs.core.constant$keyword$413);var log = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22172__$1,cljs.core.constant$keyword$437);var c__5521__auto___22231 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_22201){var state_val_22202 = (state_22201[1]);if((state_val_22202 === 1))
{var state_22201__$1 = state_22201;var statearr_22203_22232 = state_22201__$1;(statearr_22203_22232[2] = null);
(statearr_22203_22232[1] = 2);
return cljs.core.constant$keyword$241;
} else
{if((state_val_22202 === 2))
{var state_22201__$1 = state_22201;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_22201__$1,4,ch);
} else
{if((state_val_22202 === 3))
{var inst_22199 = (state_22201[2]);var state_22201__$1 = state_22201;return cljs.core.async.impl.ioc_helpers.return_chan(state_22201__$1,inst_22199);
} else
{if((state_val_22202 === 4))
{var inst_22175 = (state_22201[7]);var inst_22175__$1 = (state_22201[2]);var state_22201__$1 = (function (){var statearr_22204 = state_22201;(statearr_22204[7] = inst_22175__$1);
return statearr_22204;
})();if(cljs.core.truth_(inst_22175__$1))
{var statearr_22205_22233 = state_22201__$1;(statearr_22205_22233[1] = 5);
} else
{var statearr_22206_22234 = state_22201__$1;(statearr_22206_22234[1] = 6);
}
return cljs.core.constant$keyword$241;
} else
{if((state_val_22202 === 5))
{var state_22201__$1 = state_22201;if(cljs.core.truth_(delay))
{var statearr_22207_22235 = state_22201__$1;(statearr_22207_22235[1] = 8);
} else
{var statearr_22208_22236 = state_22201__$1;(statearr_22208_22236[1] = 9);
}
return cljs.core.constant$keyword$241;
} else
{if((state_val_22202 === 6))
{var state_22201__$1 = state_22201;var statearr_22209_22237 = state_22201__$1;(statearr_22209_22237[2] = null);
(statearr_22209_22237[1] = 7);
return cljs.core.constant$keyword$241;
} else
{if((state_val_22202 === 7))
{var inst_22192 = (state_22201[2]);var state_22201__$1 = state_22201;if(cljs.core.truth_(inst_22192))
{var statearr_22210_22238 = state_22201__$1;(statearr_22210_22238[1] = 15);
} else
{var statearr_22211_22239 = state_22201__$1;(statearr_22211_22239[1] = 16);
}
return cljs.core.constant$keyword$241;
} else
{if((state_val_22202 === 8))
{var inst_22178 = cljs.core.async.timeout(delay);var state_22201__$1 = state_22201;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_22201__$1,11,inst_22178);
} else
{if((state_val_22202 === 9))
{var state_22201__$1 = state_22201;var statearr_22212_22240 = state_22201__$1;(statearr_22212_22240[2] = null);
(statearr_22212_22240[1] = 10);
return cljs.core.constant$keyword$241;
} else
{if((state_val_22202 === 10))
{var inst_22183 = (state_22201[2]);var state_22201__$1 = (function (){var statearr_22213 = state_22201;(statearr_22213[8] = inst_22183);
return statearr_22213;
})();if(cljs.core.truth_(log))
{var statearr_22214_22241 = state_22201__$1;(statearr_22214_22241[1] = 12);
} else
{var statearr_22215_22242 = state_22201__$1;(statearr_22215_22242[1] = 13);
}
return cljs.core.constant$keyword$241;
} else
{if((state_val_22202 === 11))
{var inst_22180 = (state_22201[2]);var state_22201__$1 = state_22201;var statearr_22216_22243 = state_22201__$1;(statearr_22216_22243[2] = inst_22180);
(statearr_22216_22243[1] = 10);
return cljs.core.constant$keyword$241;
} else
{if((state_val_22202 === 12))
{var inst_22175 = (state_22201[7]);var inst_22185 = cljs.core.clj__GT_js(inst_22175);var inst_22186 = console.log(inst_22185);var state_22201__$1 = state_22201;var statearr_22217_22244 = state_22201__$1;(statearr_22217_22244[2] = inst_22186);
(statearr_22217_22244[1] = 14);
return cljs.core.constant$keyword$241;
} else
{if((state_val_22202 === 13))
{var state_22201__$1 = state_22201;var statearr_22218_22245 = state_22201__$1;(statearr_22218_22245[2] = null);
(statearr_22218_22245[1] = 14);
return cljs.core.constant$keyword$241;
} else
{if((state_val_22202 === 14))
{var inst_22175 = (state_22201[7]);var inst_22189 = (state_22201[2]);var state_22201__$1 = (function (){var statearr_22219 = state_22201;(statearr_22219[9] = inst_22189);
return statearr_22219;
})();var statearr_22220_22246 = state_22201__$1;(statearr_22220_22246[2] = inst_22175);
(statearr_22220_22246[1] = 7);
return cljs.core.constant$keyword$241;
} else
{if((state_val_22202 === 15))
{var state_22201__$1 = state_22201;var statearr_22221_22247 = state_22201__$1;(statearr_22221_22247[2] = null);
(statearr_22221_22247[1] = 2);
return cljs.core.constant$keyword$241;
} else
{if((state_val_22202 === 16))
{var state_22201__$1 = state_22201;var statearr_22222_22248 = state_22201__$1;(statearr_22222_22248[2] = null);
(statearr_22222_22248[1] = 17);
return cljs.core.constant$keyword$241;
} else
{if((state_val_22202 === 17))
{var inst_22197 = (state_22201[2]);var state_22201__$1 = state_22201;var statearr_22223_22249 = state_22201__$1;(statearr_22223_22249[2] = inst_22197);
(statearr_22223_22249[1] = 3);
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
var state_machine__5507__auto____0 = (function (){var statearr_22227 = [null,null,null,null,null,null,null,null,null,null];(statearr_22227[0] = state_machine__5507__auto__);
(statearr_22227[1] = 1);
return statearr_22227;
});
var state_machine__5507__auto____1 = (function (state_22201){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_22201);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$241))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e22228){if((e22228 instanceof Object))
{var ex__5510__auto__ = e22228;var statearr_22229_22250 = state_22201;(statearr_22229_22250[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_22201);
return cljs.core.constant$keyword$241;
} else
{if(cljs.core.constant$keyword$230)
{throw e22228;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$241))
{{
var G__22251 = state_22201;
state_22201 = G__22251;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_22201){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_22201);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_22230 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_22230[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___22231);
return statearr_22230;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5523__auto__);
}));
return null;
};
var dorun_async = function (ch,var_args){
var p__22112 = null;if (arguments.length > 1) {
  p__22112 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return dorun_async__delegate.call(this,ch,p__22112);};
dorun_async.cljs$lang$maxFixedArity = 1;
dorun_async.cljs$lang$applyTo = (function (arglist__22252){
var ch = cljs.core.first(arglist__22252);
var p__22112 = cljs.core.rest(arglist__22252);
return dorun_async__delegate(ch,p__22112);
});
dorun_async.cljs$core$IFn$_invoke$arity$variadic = dorun_async__delegate;
return dorun_async;
})()
;
